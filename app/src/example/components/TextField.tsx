import { TextField as MuiTextField } from '@mui/material'
import { memo } from "react"
import { useField } from "niceform-hook"
interface TextFieldProps {
    name: string
    label?: React.ReactNode
    helpText?: React.ReactNode
}
export const TextField = memo<TextFieldProps>(function TextField(props) {

    const { field, fieldState } = useField(props.name)

    return (
        <>  {Math.random()}
            <MuiTextField
                {...field}
                ref={undefined}
                label={props.label}
                variant="outlined"
                size="small"
                value={field.value || ''}
                error={fieldState.invalid}
                helperText={fieldState.error?.message || props.helpText}
                inputRef={field.ref}
            />
        </>
    )
})