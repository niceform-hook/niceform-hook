import { FieldValues, UseFormReturn } from "react-hook-form"
import { Field } from "./Field"

export type RenderFieldPayload<FieldProps extends Record<string, any> = Record<string, any>, TFieldValues extends FieldValues = FieldValues> = Field<FieldProps, TFieldValues>

export type RenderFieldPayloadAsFunction<FieldProps extends Record<string, any> = Record<string, any>, TFieldValues extends FieldValues = FieldValues> = (parameters: {
    methods: UseFormReturn<TFieldValues>
    getField(name: string): (Field<FieldProps, TFieldValues>) | undefined
}) => RenderFieldPayload<FieldProps, TFieldValues>

export type RenderField<FieldProps extends Record<string, any> = Record<string, any>, TFieldValues extends FieldValues = FieldValues> = (
    field: RenderFieldPayload<FieldProps, TFieldValues> | RenderFieldPayloadAsFunction<FieldProps, TFieldValues>
) => React.ReactNode

export type RenderFields<FieldProps extends Record<string, any> = Record<string, any>, TFieldValues extends FieldValues = FieldValues> = (
    fields: Array<RenderFieldPayload<FieldProps, TFieldValues> | RenderFieldPayloadAsFunction<FieldProps, TFieldValues>>
) => React.ReactNode[]
