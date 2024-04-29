import type { FieldValues, UseFormReturn } from 'react-hook-form'

import {useNiceformHookContext} from '../../contexts/niceform'
export default function useForm<TFieldValues extends FieldValues = FieldValues>() {
    
    return useNiceformHookContext(state => state.form.methods as UseFormReturn<TFieldValues>)
}