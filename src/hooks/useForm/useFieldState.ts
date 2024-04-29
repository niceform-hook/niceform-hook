import type { FieldValues, Path, UseFormReturn } from 'react-hook-form'

import {useNiceformHookContext} from '../../contexts/niceform'
import type { FormConfig } from '../../types/FormConfig'

export default function useFieldState<TFieldValues extends FieldValues>(name: keyof TFieldValues) {
    
    type UseForm = UseFormReturn<TFieldValues>

    const cb = (state: FormConfig['form']['methods']) => (state as UseForm).getFieldState(name as Path<TFieldValues>, (state as UseForm).formState)

    const result = {
        invalid: useNiceformHookContext(state => cb(state.form.methods).invalid),
        isDirty: useNiceformHookContext(state => cb(state.form.methods).isDirty),
        isTouched: useNiceformHookContext(state => cb(state.form.methods).isTouched),
        error: {
            type: useNiceformHookContext(state => cb(state.form.methods).error?.type),
            root: useNiceformHookContext(state => cb(state.form.methods).error?.root),
            ref: useNiceformHookContext(state => cb(state.form.methods).error?.ref),
            types: useNiceformHookContext(state => cb(state.form.methods).error?.types),
            message: useNiceformHookContext(state => cb(state.form.methods).error?.message)
        }
    }
    return result
}

export function useContextSelectorFieldState<TFieldValues extends FieldValues, Selected>(
    name: keyof TFieldValues, 
    callback: (parameters: ReturnType<FormConfig['form']['methods']['getFieldState']>) => Selected
): Selected{

    type UseForm = UseFormReturn<TFieldValues>

    const cb = (state: FormConfig['form']['methods']) => (state as UseForm).getFieldState(name as Path<TFieldValues>, (state as UseForm).formState)

    return useNiceformHookContext(state => callback(cb(state.form.methods)))
}