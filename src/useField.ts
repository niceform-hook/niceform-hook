import { FieldValues, Validate } from "react-hook-form";

import { useNiceformHookContext } from "./contexts/niceform";
import { useComputeInputedValue } from "./hooks/useComputeInputedValue";
import { useDataRefByContext } from "./hooks/useDataRefByContext";
import { useDebounceChangeField } from "./hooks/useDebounceChangeField";
import useController from "./hooks/useForm/useController";
import useInactiveFieldHandler from "./hooks/useInactiveFieldHandler";

export function useField(name: string) {
    
    const methods = useNiceformHookContext(state => state.form.methods)
    const errorsControl = useNiceformHookContext(state => state.form.control.errorsControl)
    const fieldsRegistered = useNiceformHookContext(state => state.form.control.fieldsRegistered)

    const validationByErrorsControl = (errorsControl || []).reduce((obj, error, i) => {
        obj['errors-control-' + i] = (value, formValues) => error({
            value,
            formValues,
            fieldsRegistered,
            methods,
            field: fieldsRegistered.get(name)
        })
        return obj
    }, {} as Validate<any, FieldValues>)

    const fieldRef = useDataRefByContext(state => {
        const field = state.form.getField(name)
        if (!field) return {}

        return {
            input: field.input,
            onBlur: field.onBlur,
            onChange: field.onChange,
            validate: field.validate
        }
    })
    const { rules, others } = useNiceformHookContext(state => {
        const field = state.form.getField(name)
        if (!field) return { rules: {}, others: {} }

        const debounceTime = Math.max(field.debounceTime || state.form.control.parameters?.debounceTime || state.form.control.config.debounceTime || 400, 0)
        const enableDebounce = field.enableDebounce ?? state.form.control.parameters?.enableDebounce ?? state.form.control.config.enableDebounce ?? false

        return {
            rules: {
                min: field.min,
                max: field.max,
                deps: field.deps,
                maxLength: field.maxLength,
                minLength: field.minLength,
                pattern: field.pattern,
                required: field.required,
                value: field.value,
            },
            others: {
                shouldUnregister: field.shouldUnregister,
                isActive: field.active !== false,
                disabled: field.disabled,
                debounceTime,
                enableDebounce
            }
        }
    }, true)

    const controller = useController({
        name,
        shouldUnregister: others.shouldUnregister,
        rules: others.isActive ? {
            onBlur: (...args) => fieldRef.current?.onBlur?.(...args),
            onChange: (...args) => fieldRef.current?.onChange?.(...args),
            // shouldUnregister: true,
            deps: rules.deps,
            max: rules.max,
            min: rules.min,
            maxLength: rules.maxLength,
            minLength: rules.minLength,
            pattern: rules.pattern,
            required: rules.required,
            validate: {
                ...validationByErrorsControl,
                ...fieldRef.current?.validate
            },
            value: rules.value,
        } : {},
        disabled: others.disabled
    })

    useComputeInputedValue(controller)
    useDebounceChangeField(controller, others.debounceTime, others.enableDebounce)
    useInactiveFieldHandler(controller)

    return controller
}