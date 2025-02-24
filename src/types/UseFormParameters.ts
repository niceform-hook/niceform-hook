import { FieldValues, UseFormProps } from "react-hook-form"
import { OnChangeField } from "./auxiliar"
import { CreatePropsDefinition } from "./CreatePropsDefinition"

export type UseFormParameters<T extends CreatePropsDefinition, TFieldValues extends FieldValues = FieldValues> = UseFormProps<TFieldValues> & {
    onChangeField?: OnChangeField<T['fieldProps']>
    initialValues?: TFieldValues
    debounceTime?: number
    enableDebounce?: boolean
    enableDebounceOnSubmit?: boolean
}