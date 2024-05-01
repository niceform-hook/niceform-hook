import { FieldValues, Validate } from "react-hook-form";

import { useNiceformHookContext } from "./contexts/niceform";
import { useComputeInputedValueHandler } from "./hooks/useComputeInputedValueHandler";
import { useDataRefByContext } from "./hooks/useDataRefByContext";
import { useDebounceChangeFieldHandler } from "./hooks/useDebounceChangeFieldHandler";
import useController from "./hooks/useForm/useController";
import useInactiveFieldHandler from "./hooks/useInactiveFieldHandler";
import { FieldConfig } from "./types";

const obj = {}
export function useField(name: string, config?: FieldConfig) {
    if(!config) config = obj
    const methods = useNiceformHookContext(state => state.form.methods)
    const errorsControl = useNiceformHookContext(state => state.form.control.errorsControl)
    const fieldsRegistered = useNiceformHookContext(state => state.form.control.fieldsRegistered)

    const validationByErrorsControl = (errorsControl || []).reduce((obj, error, i) => {
        const field = fieldsRegistered.get(name)
        if(!field) return obj;

        obj['errors-control-' + i] = (value, formValues) => error({
            value,
            formValues,
            fieldsRegistered,
            methods,
            field
        })
        return obj
    }, {} as Validate<any, FieldValues>)

    const volatileFieldRef = useDataRefByContext(state => {
        const field = state.form.getField(name)
        if (!field) return {}

        return {
            input: field.input ?? config.input,
            onBlur: field.onBlur ?? config.onBlur,
            onChange: field.onChange ?? config.onChange,
            validate: field.validate ?? config.validate
        }
    })
    const { rules, others } = useNiceformHookContext(state => {
        const field = state.form.getField(name)
        if (!field) return { rules: {}, others: {} }

        const debounceTime = (
            field.debounceTime ?? 
            config.debounceTime ?? 
            state.form.control.parameters?.debounceTime ?? 
            state.form.control.config.debounceTime ?? 
            400
        )
        const enableDebounce = (
            field.enableDebounce ?? 
            config.enableDebounce ?? 
            state.form.control.parameters?.enableDebounce ?? 
            state.form.control.config.enableDebounce ?? 
            false
        ) && debounceTime > 0

        return {
            rules: {
                min: field.min ?? config.min,
                max: field.max ?? config.max,
                deps: field.deps,
                maxLength: field.maxLength ?? config.maxLength,
                minLength: field.minLength ?? config.minLength,
                pattern: field.pattern ?? config.pattern,
                required: field.required ?? config.required,
                value: field.value ?? config.value,
            },
            others: {
                shouldUnregister: field.shouldUnregister ?? config.shouldUnregister,
                isActive: (field.active ?? config.active) !== false,
                disabled: field.disabled ?? config.disabled,
                debounceTime,
                enableDebounce
            }
        }
    }, true)

    const controller = useController({
        name,
        shouldUnregister: others.shouldUnregister,
        rules: others.isActive ? {
            onBlur: (...args) => volatileFieldRef.current?.onBlur?.(...args),
            onChange: (...args) => volatileFieldRef.current?.onChange?.(...args),
            shouldUnregister: others.shouldUnregister,
            deps: rules.deps,
            max: rules.max,
            min: rules.min,
            maxLength: rules.maxLength,
            minLength: rules.minLength,
            pattern: rules.pattern,
            required: rules.required,
            validate: {
                ...validationByErrorsControl,
                ...volatileFieldRef.current?.validate
            },
            value: rules.value,
        } : {},
        disabled: others.disabled
    })

    useComputeInputedValueHandler(controller)
    useDebounceChangeFieldHandler(controller, others.debounceTime, others.enableDebounce)
    useInactiveFieldHandler(controller)

    return controller
}