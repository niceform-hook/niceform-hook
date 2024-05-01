import React from 'react';
import {create, CreateProps} from '../../src'
import { Select } from './components/Select'
import { TextareaField } from './components/Textarea'
import { TextField } from './components/TextField'

type FieldProps = {
    helpText?: React.ReactNode
    label?: React.ReactNode
    type: 'text' | 'textarea'
    showRenderCount?: boolean
}
type FieldProps2 = {
    helpText?: React.ReactNode
    label?: React.ReactNode
    type: 'select',
    options: Array<{value: string, label: string}>
    showRenderCount?: boolean
}

export type Form = CreateProps<{fieldProps: FieldProps | FieldProps2, componentsType: FieldProps['type'] | FieldProps2['type']}>
export const useNiceForm = create<Form>({
    components: {
        'text': {
            // @ts-ignore
            render({ name, helpText, label, showRenderCount, ...other}) {
                return (
                    <TextField 
                        name={name} 
                        helpText={helpText}
                        label={label}
                        showRenderCount={showRenderCount}
                        {...other}
                    />
                )
            },
        },
        textarea: {
            render({name, helpText, label, ...other}) {
                return (
                    <TextareaField 
                        name={name} 
                        helpText={helpText}
                        label={label}
                        {...other}
                    />
                )
            }
        },
        select: {
            render({name, helpText, label, ...other}: FieldProps2 & {name: string}) {
                return (
                    <Select 
                        name={name} 
                        helpText={helpText}
                        label={label}
                        {...other}
                    />
                )
            }
        }
    },
    errorsControl: [
        (data) => {
            // console.log(data)
            // return 'falha'
        }
    ]
})