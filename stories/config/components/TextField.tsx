import React from 'react';
import { TextField as MuiTextField } from '@mui/material'
import { memo, useRef } from "react"
import { useField } from "../../../src"
interface TextFieldProps {
    name: string
    label?: React.ReactNode
    helpText?: React.ReactNode
    showRenderCount?: boolean
}
export const TextField = memo<TextFieldProps>(function TextField(props) {
    const renderCount = useRef(-1)
    const { field, fieldState } = useField(props.name)

    return (
        <>
            {props.showRenderCount && (
                <span>
                render count: {++renderCount.current} 
                </span>
            )}
            <MuiTextField
                {...field}
                label={props.label}
                variant="outlined"
                size="small"
                value={field.value || ''}
                error={fieldState.invalid}
                helperText={fieldState.error?.message || props.helpText}
                
            />
        </>
    )
})