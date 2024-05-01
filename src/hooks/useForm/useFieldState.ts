import type { FieldValues, Path, UseFormReturn } from 'react-hook-form'

import {useNiceformHookContext} from '../../contexts/niceform'
import type { FormConfig } from '../../types/FormConfig'

export default function useFieldState<TFieldValues extends FieldValues>(name: keyof TFieldValues) {
    
    type UseForm = UseFormReturn<TFieldValues>

    const cb = (state: FormConfig['form']['methods']) => (state as UseForm).getFieldState(name as Path<TFieldValues>, (state as UseForm).formState)

    const result = useNiceformHookContext(state => {
        const fieldState = cb(state.form.methods)

        return {
            /**
             * field is not valid.
             * 
                Condition: subscribe to errors.
             */
            invalid: fieldState.invalid,
            /**
             * field is modified.
             * 
             * Condition: subscribe to dirtyFields.
             */
            isDirty: fieldState.isDirty,
            /**
             * 	field has received a focus and blur event.
             * 
                Condition: subscribe to touchedFields.
             */
            isTouched: fieldState.isTouched,
            /**
             * field error object.
                Condition: subscribe to errors.
             */
            error: {
                /**
                 * Error type.
                 */
                type: fieldState.error?.type,
                root: fieldState.error?.root,
                /**
                 * Element reference
                 */
                ref: fieldState.error?.ref,
                types: fieldState.error?.types,
                /**
                 * Error message
                 */
                message: fieldState.error?.message
            }
        }
    }, true)
    
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