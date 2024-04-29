import { Field } from "./Field";

export type OnChangeField<FieldProps extends Record<string, any> = Record<string, any>> = (field: Field<FieldProps>, value: any) => any