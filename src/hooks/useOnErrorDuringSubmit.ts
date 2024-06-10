import type { FieldErrors, FieldValues, UseFormReturn } from "react-hook-form"
import type { Field } from "../types"
import { useEffect } from "react"

interface UseOnErrorDuringSubmitArgs<FieldProps extends Record<string, any> = Record<string, any>>{
    methods: UseFormReturn<any> 
    getField(name: string): Field | undefined
    onErrorDuringSubmit?(errors: FieldErrors, context: {
        methods: UseFormReturn<any>
        getField(name: string): Field<FieldProps, FieldValues> | undefined
    })
}
export function useOnErrorDuringSubmit({getField, methods, onErrorDuringSubmit}: UseOnErrorDuringSubmitArgs){
    useEffect(() => {
        const errors = methods.formState.errors
        if(Object.keys(errors).length && methods.formState.submitCount) onErrorDuringSubmit?.(methods.formState.errors, {
            methods,
            getField
        })
    }, [methods.formState.submitCount])
}