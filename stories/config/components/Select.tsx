import React from 'react'
import { MenuItem, TextField as MuiTextField } from '@mui/material'
import { memo, useRef } from "react"
import { useField } from "../../../src"
interface SelectProps {
    name: string
    helpText?: React.ReactNode
    label?: React.ReactNode
    type: 'select',
    options: Array<{ value: string, label: string }>
    showRenderCount?: boolean
}
export const Select = memo<SelectProps>(function Select(props) {
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
                select
                label={props.label}
                variant="outlined"
                size="small"
                value={field.value || ''}
                error={fieldState.invalid}
                helperText={fieldState.error?.message || props.helpText}
                style={{
                    minWidth: 200
                }}
            >
                {props.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </MuiTextField>
        </>
    )
})