import { UseFormReturn } from "react-hook-form"
import { Field } from "./Field"

export type ErrorsControlParameters<FieldProps extends Record<string, any> = Record<string, any>> = {
    value: any
    formValues: Record<string, any>
    methods: UseFormReturn<any>
    fieldsRegistered: Map<string, Field>
    field: Field<FieldProps>
}