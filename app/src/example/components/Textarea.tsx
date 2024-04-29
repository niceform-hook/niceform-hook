import { memo } from "react"
import { useField } from "niceform-hook"
import { TextField as MuiTextField } from '@mui/material'

interface TextareaFieldProps {
    name: string
    label?: React.ReactNode
    helpText?: React.ReactNode
}
export const TextareaField = memo<TextareaFieldProps>(function TextareaField(props) {

    const { field, fieldState } = useField(props.name)

    return (
        <MuiTextField
            {...field}
            multiline
            rows={5}
            label={props.label}
            variant="outlined"
            size="small"
            value={field.value || ''}
            error={fieldState.invalid}
            helperText={fieldState.error?.message || props.helpText}
        />
    )
})