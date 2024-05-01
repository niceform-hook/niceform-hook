import { FieldValues, RegisterOptions, UseControllerReturn, Validate } from "react-hook-form"

type ComputeFieldType<FieldProps extends Record<string, any>, TFieldValues extends FieldValues = FieldValues> = FieldProps | (Omit<FieldProps, 'type'> & {
    /**
     * It is used with the render attribute, whose role is to render 
     * the returned react element considering it as a field in the form.
     */
    type: 'node',
    /**
     * 
     * Renders the returned react element considering it as a field by the form.
     * @example
     * {form.renderField(({
            type: 'node',
            name: 'email',
            render: (hook) => (
                <>
                    <span>Email</span>
                    <input 
                        {...hook.field} 
                        type='email' 
                        value={hook.field.value || ''}
                    />
                </>
            )
        }))}
     */
    render(hook: UseControllerReturn<TFieldValues>): React.ReactElement
})

export type Field<FieldProps extends Record<string, any> = Record<string, any>, TFieldValues extends FieldValues = FieldValues> = {
    /** It informs the type of field, it will serve as a basis for knowing which component to render. */
    type: string
    /** Informs the name of the field, used to distinguish one field from another. */
    name: string
    /** 
     * 
     *  Determines whether a field is active or not on the form.

        If `true`, the field will be integrated into the form.

        If `false`, changes to them or the form will have no effect.

        Default: `true`
    */
    active?: boolean
    /**
     * Determines which field or fields it depends on. 
     * If the field on which it depends changes its value, 
     * it will be cleared in response to the action.
     */
    dependsOnToClear?: string | string[]
    /** Computes the field's input value. It is recommended to reference this field in `initialValues`.*/
    input?(value: any): any
    /** Computes the field's output value. */
    output?(value: any): any
    /**
     * Determines a delay time for field value change feedback.
     * 
     * Default: `400ms`
     */
    debounceTime?: number
    /**
     * Enable debounce for this field.
     * 
     * Default: `false`
     */
    enableDebounce?: boolean
    /** 
     *  You can pass an object of callback functions to validate all of them. This function will be executed on its own without depending on other validation rules included in the required attribute.

        Note: for object or array input data, it's recommended to use the validate function for validation as the other rules mostly apply to string, string[], number and boolean data types.
     * */
    validate?: Record<string, Validate<any, FieldValues>>

} 
& Omit<RegisterOptions<FieldValues, string>, "setValueAs" | "valueAsNumber" | "valueAsDate" | 'validate'> 
& Record<string, any>
& ComputeFieldType<FieldProps, TFieldValues>