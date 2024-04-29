import { FieldValues, UseFormReturn, useFormState as _useFormState, UseFormStateProps } from 'react-hook-form'

import { useNiceformHookContext } from '../../contexts/niceform'
import type { FormConfig } from '../../types/FormConfig'
import useForm from './useForm'

export default function useFormState<TFieldValues extends FieldValues = FieldValues>(props?: UseFormStateProps<TFieldValues>) {

    const {control} = useForm<TFieldValues>()
    return _useFormState<TFieldValues>({control, ...props})
    
}

export function useContextSelectorFormState<TFieldValues extends FieldValues, Selected>(
    callback: (parameters: FormConfig['form']['methods']['formState']) => Selected
): Selected {

    type UseForm = UseFormReturn<TFieldValues>

    const cb = (state: FormConfig['form']['methods']) => (state as UseForm).formState

    return useNiceformHookContext(state => callback(cb(state.form.methods)))
}