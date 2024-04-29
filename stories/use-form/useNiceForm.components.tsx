import React from 'react'
import { NiceformHookProvider } from '../../src'
import { useNiceForm } from '../config/form-config'
import { Button } from '@mui/material'

export function InitialValue(){
    const form = useNiceForm({
        initialValues: {
            fullname: 'Tony Stark'
        }
    })

    return (
        <NiceformHookProvider form={form}>
            {
                form.renderField({
                    type: 'text',
                    name: 'fullname',
                    label: 'Fullname'
                })
            }
        </NiceformHookProvider>
    )
}

export function OnChangeField(){
    const form = useNiceForm({
        onChangeField(field, value){
            console.log(field, value)
        }
    })

    return (
        <NiceformHookProvider form={form}>
            {
                form.renderField({
                    type: 'text',
                    name: 'fullname',
                    label: 'Fullname'
                })
            }
        </NiceformHookProvider>
    )
}

export function OnSubmit(){
    const form = useNiceForm()

    return (
        <NiceformHookProvider form={form}>
            <form onSubmit={form.methods.handleSubmit(console.log, console.log)}>
                {
                    form.renderField({
                        type: 'text',
                        name: 'fullname',
                        label: 'Fullname'
                    })
                }
                <Button type='submit'>Enviar</Button>
            </form>
        </NiceformHookProvider>
    )
}

export function Debounce(){
    const form = useNiceForm({
        debounceTime: 1000,
        enableDebounce: true
    })

    return (
        <NiceformHookProvider form={form}>
            <form onSubmit={form.methods.handleSubmit(console.log, console.log)}>
                {
                    form.renderField({
                        type: 'text',
                        name: 'fullname',
                        label: 'Type here'
                    })
                }
                {form.methods.watch('fullname')}
            </form>
        </NiceformHookProvider>
    )
}