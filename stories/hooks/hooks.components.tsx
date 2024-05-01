import React from 'react'
import { Button } from '@mui/material';
import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { NiceformHookProvider, useNiceformContext } from '../../src';
import { useNiceForm, Form } from '../config/form-config';
import {useForm, useFormState, useFieldState, useWatch, useController} from '../../src/hooks/useForm'

function ExampleUseFormChild(){

    const {renderField, methods, ...other} = useNiceformContext<Form, {name: string}>()

    const RHForm = useForm()

    useEffect(() => {
        RHForm.setValue('fullname', 'Foo Bar')
    }, [])
    return (
        <form onSubmit={methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                {
                    renderField({
                        type: 'text',
                        name: 'fullname',
                        label: 'Fullname'
                    })
                }
            </form>
    )
}
export function ExampleUseForm() {
    const form = useNiceForm()

    return (
        <NiceformHookProvider form={form}>
            <ExampleUseFormChild/>
        </NiceformHookProvider>
    )
}

// ----------------------------------------------


function ExampleUseFormStateChild(){

    const {renderField, methods} = useNiceformContext<Form>()

    const formState = useFormState()

    return (
        <form onSubmit={methods.handleSubmit(values => alert(JSON.stringify(values)))}>
            Submit count: {formState.submitCount}
            <br/>
            {renderField({
                type: 'text',
                name: 'fullname',
                label: 'Fullname'
            })}
            <Button type='submit'>Enviar</Button>
        </form>
    )
}
export function ExampleUseFormState() {
    const form = useNiceForm()

    return (
        <NiceformHookProvider form={form}>
            <ExampleUseFormStateChild/>
        </NiceformHookProvider>
    )
}

// ----------------------------------------------

function ExampleUseFieldStateChild(){

    const {renderField, methods} = useNiceformContext<Form>()

    const fieldState = useFieldState('fullname')

    return (
        <form onSubmit={methods.handleSubmit(values => alert(JSON.stringify(values)))}>
            Is Dirty: {fieldState.isDirty ? 'true' : 'false'}
            <br/>
            {renderField({
                type: 'text',
                name: 'fullname',
                label: 'Fullname'
            })}
            <Button type='submit'>Enviar</Button>
        </form>
    )
}
export function ExampleUseFieldState() {
    const form = useNiceForm()

    return (
        <NiceformHookProvider form={form}>
            <ExampleUseFieldStateChild/>
        </NiceformHookProvider>
    )
}

// ----------------------------------------------

function ExampleUseWatchChild(){

    const {renderField, methods} = useNiceformContext<Form>()

    const watch = useWatch()

    return (
        <form onSubmit={methods.handleSubmit(values => alert(JSON.stringify(values)))}>
            Fullname value: {watch.fullname}
            <br/>
            {renderField({
                type: 'text',
                name: 'fullname',
                label: 'Fullname'
            })}
        </form>
    )
}
export function ExampleUseWatch() {
    const form = useNiceForm()

    return (
        <NiceformHookProvider form={form}>
            <ExampleUseWatchChild/>
        </NiceformHookProvider>
    )
}