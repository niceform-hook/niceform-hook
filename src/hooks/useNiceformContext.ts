import { FieldValues } from "react-hook-form"
import { useNiceformHookContext } from "../contexts/niceform"
import { CreatePropsDefinition } from "../types"
import { FormConfig } from "../types/FormConfig"

export function useNiceformContext<Form extends CreatePropsDefinition = CreatePropsDefinition, TFieldValues extends FieldValues = FieldValues>(){
    return useNiceformHookContext(state => {
        return state.form as FormConfig<Form, TFieldValues>['form']
    }) 
}