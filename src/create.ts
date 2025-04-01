import { useCallback, useMemo, useRef } from "react";
import { FieldValues, useForm as useFormReactHookForm } from "react-hook-form";
import { renderReactElement } from "./components/RenderReactElement";
import { useChangeField } from "./hooks/useChangeField";

import useDependentFieldsToClear from "./hooks/useDependentFieldsToClear";
import { useInitialValues } from "./hooks/useInitialValues";
import { useMemoize } from "./hooks/useMemoize";
import { useMemoizeCallback } from "./hooks/useMemoizeCallback";
import { useOnErrorDuringSubmit } from "./hooks/useOnErrorDuringSubmit";
import type { ComponentDefinition, CreateConfig, CreatePropsDefinition, Field, RenderField, RenderFields, UseFormParameters } from "./types";
import { getOutputtedValues, normalizeFieldPayload } from "./utils";
import { dynamicDebounce } from "./utils/debounce";

export function create<T extends CreatePropsDefinition>(config: CreateConfig<T>){

    const components = new Map<string, ComponentDefinition>()
    
    for(const key in config.components){
        components.set(key, config.components[key])
    }

    return function useForm<TFieldValues extends FieldValues = FieldValues>(parameters?: UseFormParameters<T, TFieldValues>){
       
        const repository = useRef({
            fieldsRegistered: new Map<string, Field<T['fieldProps'], TFieldValues>>(),
            componentsDefinitions: new Map<string, ComponentDefinition>(components),
            errorsControl: config.errorsControl,
            debounceSubmitDefinitions: {
                debounceRegistry: {registeredAt: 0, time: 0},
                set(time: number){
                    this.debounceRegistry.registeredAt = Date.now()
                    this.debounceRegistry.time = time
                },
                getRemainingTime(){
                    const timeDiff = Date.now() - this.debounceRegistry.registeredAt

                    return Math.max(0, this.debounceRegistry.time - timeDiff + 50)
                },
                isActiveDebounce(){
                    const timeDiff = Date.now() - this.debounceRegistry.registeredAt
                    
                    return timeDiff < this.debounceRegistry.time
                }
            },
            fieldsInputedCalled: new Set<string>()
        })
        
        const submitDynamicDebounce = useMemo(() => dynamicDebounce(), [])
        
        const memoize = useMemoize()
        const memoizeCallback = useMemoizeCallback()
        const methods = useFormReactHookForm<TFieldValues>(parameters)

        const getField = useCallback((name: string) => {
            return repository.current.fieldsRegistered.get(name)
        }, [])

        useOnErrorDuringSubmit({
            getField,
            methods,
            onErrorDuringSubmit: config.onErrorDuringSubmit
        })

        useInitialValues({
            methods, 
            initialValues: parameters?.initialValues || {}
        })
        useDependentFieldsToClear({
            methods, 
            get fields(){
                return repository.current.fieldsRegistered
            }, 
        })
        useChangeField({
            methods, 
            get fields(){
                return repository.current.fieldsRegistered
            },
            onChangeField: parameters?.onChangeField
        })
    
        const renderField = useCallback<RenderField<T['fieldProps'], TFieldValues>>(field => {
            const {render, ..._field} = normalizeFieldPayload(field, {
                getField,
                methods
            })
    
            const type = _field.type
            const name = _field.name
            if(!name) return null
            
            repository.current.fieldsRegistered.set(name, _field)
    
            if(type === 'node' && render){
                return renderReactElement({name, render})
            }

            const component = repository.current.componentsDefinitions.get(type)
           
            const fieldComponent = component?.render(_field)
    
            return fieldComponent
    
        }, [
            methods, 
            getField
        ])

        const renderFields = useCallback<RenderFields<T['fieldProps'], TFieldValues>>(fields => {
            return fields.filter(Boolean).map(renderField)
        }, [renderField])
        
        if(!methods.handleSubmit.prototype){ 
            
            const handleSubmit = methods.handleSubmit
            methods.handleSubmit = function(onValid, onInvalid){
                
                const resolver = handleSubmit(async (values, event) => {

                    const valuesOutputted = getOutputtedValues({ 
                        fields: repository.current.fieldsRegistered, 
                        values: values 
                    })
                    onValid(valuesOutputted as TFieldValues, event)
                }, onInvalid)

                return async function(evt){

                    const enableDebounce = (
                        parameters?.enableDebounceOnSubmit ?? 
                        config.enableDebounceOnSubmit
                    ) && repository.current.debounceSubmitDefinitions.isActiveDebounce()
                    
                    if(!enableDebounce) return resolver(evt);

                    const timeDebounce = repository.current.debounceSubmitDefinitions.getRemainingTime()
                    
                    evt?.preventDefault()
                    
                    submitDynamicDebounce(() => {
                        resolver(evt)
                    }, timeDebounce)
                }
            }
        }
        
        // --------------------------------------------------------------------------------------------

        const result = useRef({
            methods,
            renderField,
            renderFields,
            getField,
            memoize,
            memoizeCallback,
            control: {
                get errorsControl(){
                    return repository.current.errorsControl
                },
                get fieldsRegistered(){
                    return repository.current.fieldsRegistered
                },
                get fieldsInputedCalled(){
                    return repository.current.fieldsInputedCalled
                },
                get debounceSubmitDefinitions(){
                    return repository.current.debounceSubmitDefinitions
                },
                get parameters(){
                    return parameters
                },
                get config(){
                    return config
                }
            }
        })

        result.current.renderField = renderField
        result.current.renderFields = renderFields

        return result.current
    }
}

export type Create = typeof create
export type UseForm = ReturnType<Create>
export type UseReturn = ReturnType<UseForm>