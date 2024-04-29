import { FieldValues, Path, UseControllerProps, useController as _useController } from 'react-hook-form'

import useForm from './useForm'

export default function useController<TFieldValues extends FieldValues = FieldValues>(props: UseControllerProps<TFieldValues, Path<TFieldValues>>) {

    const {control} = useForm<TFieldValues>()
    return _useController<TFieldValues>({control, ...props})
}