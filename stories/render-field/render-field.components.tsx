import React from 'react'
import { Button } from '@mui/material';
import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { NiceformHookProvider } from '../../src';
import { useNiceForm } from '../config/form-config';

export function BasicExample() {
    const form = useNiceForm()

    return (
        <NiceformHookProvider form={form}>
            <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                {
                    form.renderField({
                        type: 'text',
                        name: 'fullname',
                        label: 'Fullname'
                    })
                }
            </form>
        </NiceformHookProvider>
    )
}

export function Active() {
    const form = useNiceForm()

    return (
        <NiceformHookProvider form={form}>
            <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                {
                    form.renderField({
                        type: 'text',
                        name: 'fullname',
                        label: 'Fullname',
                        required: true,
                        helpText: 'This field is required'
                    })
                }
                <br/>
                <br/>
                {
                    form.renderField({
                        type: 'text',
                        name: 'lastname',
                        label: 'lastname',
                        active: false,
                        required: true,
                        helpText: 'This field is required but is inactive'
                    })
                }
                <br/>
                <br/>
                <Button
                    variant="contained"
                    type='submit'
                >
                    Send
                </Button>
            </form>
        </NiceformHookProvider>
    )
}

export function DependesOn() {
    const form = useNiceForm()

    return (
        <NiceformHookProvider form={form}>
            <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                {form.renderField({
                    type: 'text',
                    name: 'country',
                    label: 'Country',
                })}
                <br />
                <br />
                {form.renderField({
                    type: 'text',
                    name: 'state',
                    label: 'State',
                    dependsOnToClear: 'country'
                })}
                <br />
                <br />
                {form.renderField({
                    type: 'text',
                    name: 'city',
                    label: 'City',
                    dependsOnToClear: ['state']
                })}
                <br />
                <br />
                {form.renderField({
                    type: 'text',
                    name: 'neighborhood',
                    label: 'Neighborhood',
                    dependsOnToClear: 'city'
                })}
                <br />
                <br />
                <p>After filling in all the fields, modify the value of any and see the result.</p>
            </form>

        </NiceformHookProvider>
    )
}

export function InputOutput(){
    const form = useNiceForm({
        initialValues: {
            fullname: 'Jacob'
        }
    })
    
    return (
        <NiceformHookProvider form={form}>
            <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                {form.renderField({
                    type: 'text',
                    name: 'fullname',
                    label: 'FullName',
                    input(value){
                        if(!value) return value;
                        return `${value} Bonds`
                    }
                })}
                <br/>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'age',
                    label: 'Age',
                    output(value) {
                        return parseInt(value) + 10
                    },
                    helpText: 'Type a number'
                })}
                <br/>
                <br/>
                <Button 
                    variant="contained"
                    type='submit'
                >
                    Send
                </Button>
            </form>
        </NiceformHookProvider>
    )
}

export function RenderWithCallbackExample() {

    const form = useNiceForm()

    const submit = (values, evt) => {
        console.log(values, evt)
    }
    const onError = (error, evt) => {
        console.log(error, evt)
    }
    return (
        <NiceformHookProvider form={form}>
            <form onSubmit={form.methods.handleSubmit(submit, onError)}>
                {form.renderField({
                    type: 'text',
                    name: 'name',
                    label: 'Name'
                })}
                <br />
                <br />
                {form.renderField(({ methods }) => ({
                    type: 'text',
                    name: 'lastname',
                    label: 'Lastname',
                    helpText: methods.watch('name')
                }))}
                <br />
                <br />
                {form.renderField(({ getField }) => ({
                    type: 'text',
                    name: 'other',
                    label: 'Other',
                    helpText: getField('lastname')?.label || ''
                }))}
                <br />
                <br />
                <Button
                    variant="contained"
                    type='submit'
                >
                    Send
                </Button>
            </form>
        </NiceformHookProvider>
    )
}

export function Debounce(){
    const form = useNiceForm()

    return (
        <NiceformHookProvider form={form}>
            <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                {
                    form.renderField({
                        type: 'text',
                        name: 'fullname',
                        label: 'Type here',
                        debounceTime: 1000,
                        enableDebounce: true
                    })
                }
                {form.methods.watch('fullname')}
            </form>
        </NiceformHookProvider>
    )
}

export function Validate(){
    const form = useNiceForm()
    
    const submit = (values, evt) => {
        console.log(values, evt)
    }
    const onError = (error, evt) => {
        console.log('errors', error)
    }
    return (
        <NiceformHookProvider form={form}>
            <form onSubmit={form.methods.handleSubmit(submit, onError)}>
                {form.renderField({
                    type: 'text',
                    name: 'email',
                    label: 'Email',
                    required: 'Required field',
                    helpText: 'Required'
                })}
                <span style={{marginLeft: 10}}>Required</span>
                <br/>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'fullname',
                    label: 'Fullname',
                    minLength: 10
                })}
                <span style={{marginLeft: 10}}>Min. length: 10</span>
                <br/>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'age',
                    label: 'Age',
                    validate: {
                        error: (value: string) => value !== '25' ? 'The correct value is "25"' : undefined
                    }
                })}
                <span style={{marginLeft: 10}}>The correct value is "25"</span>
                <br/>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'address',
                    label: 'Address',
                    validate: {
                        error: (value: string) => value?.indexOf(',') === -1 ? 'Must contain a comma' : undefined,
                        error2: (value: string) => value?.length < 10 ? 'Size below permitted' : undefined,
                        error3: (value: string) => !value ? 'Required field' : undefined,
                    }
                })}
                <br/>
                <br/>
                <Button 
                    variant="contained"
                    type='submit'
                >
                    Send
                </Button>
            </form>
        </NiceformHookProvider>
    )
}

export function ValidateAsync(){
    const form = useNiceForm()
    
    const submit = (values, evt) => {
        console.log(values, evt)
    }
    const onError = (error, evt) => {
        console.log('errors', error)
    }
    return (
        <NiceformHookProvider form={form}>
            <form onSubmit={form.methods.handleSubmit(submit, onError)}>
                {form.methods.formState.isValidating && 'Validating async error'}
                <br/>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'country',
                    label: 'Country',
                    validate: {
                        async error(value: string){
                            return new Promise((res, rej) => {
                                setTimeout(res, 2000, 'Async error')
                            })
                        },
                    }
                })}
                <br/>
                <br/>
                <Button 
                    variant="contained"
                    type='submit'
                >
                    Send
                </Button>
            </form>
        </NiceformHookProvider>
    )
}

export function RenderNode(){
    const form = useNiceForm()
  
    return (
        <NiceformHookProvider form={form}>
            <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                {form.renderField({
                    type: 'node',
                    name: 'rating',
                    label: 'Rating',
                    render: ({field}) => (
                        <div 
                            style={{
                                fontSize: 40,
                                cursor: 'pointer',
                                color: field.value && 'red',
                                fontWeight: field.value && 900
                            }}
                            onClick={() => field.onChange(!field.value)}
                        >
                            ♡ 
                        </div>
                    )
                })}
                <br/>
                <br/>
                <Button 
                    variant="contained"
                    type='submit'
                >
                    Send
                </Button>
            </form>
        </NiceformHookProvider>
    )
}

const useOptions = () => {
    const [options, setOptions] = useState<Array<{value: string, label: string}> | null>([
        {value: 'horse', label: 'Horse'},
        {value: 'giraffe', label: 'Giraffe'},
        {value: 'pig', label: 'Pig'},
        {value: 'elephant', label: 'Elephant'},
    ])

    return {
        options: options?.map(op => op) || [],
        isLoading: !options?.length
    }
}
export function Memoization_code_1(){
    const [update, reRender] = useReducer(n => n + 1, 0)
    const {options, isLoading} = useOptions() // fetch data from api
    const form = useNiceForm()
  
    return (
        <NiceformHookProvider form={form}>
            {isLoading && 'loading...'}
            <br/>
            parent render count: {update}
            <br/>
            <br/>
            <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                {form.renderField({
                    type: 'select',
                    name: 'animal',
                    label: 'Animal',
                    showRenderCount: true,
                    options: options
                })}
                <br/>
                <br/>
                <Button 
                    variant="contained"
                    type='button'
                    onClick={reRender}
                >
                    Update
                </Button>
            </form>
        </NiceformHookProvider>
    )
}
export function Memoization_code_2(){
    const [update, reRender] = useReducer(n => n + 1, 0)
    const {options, isLoading} = useOptions() // fetch data from api
    const form = useNiceForm()
  
    return (
        <NiceformHookProvider form={form}>
            {isLoading && 'loading...'}
            <br/>
            parent render count: {update}
            <br/>
            <br/>
            <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                {form.renderField({
                    type: 'select',
                    name: 'animal',
                    label: 'Animal',
                    showRenderCount: true,
                    options: form.memoize(() => options, [isLoading])
                })}
                <br/>
                <br/>
                <Button 
                    variant="contained"
                    type='button'
                    onClick={reRender}
                >
                    Update
                </Button>
            </form>
        </NiceformHookProvider>
    )
}