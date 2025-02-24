import { Button } from '@mui/material'
import { useEffect, useMemo, useReducer } from 'react'
import { NiceformHookProvider, useNiceformContext } from 'niceform-hook'
import { Form, useForm } from './form-config'

export function DebounceSubmitExampleChild(){
    const [state, random] = useReducer(state => state + 1, 0)
    const form = useNiceformContext<Form, {fullname: string, last: number}>()

    return (
        <>
            <h1>DebounceSubmit Example</h1>
            {state}
            <br/>
            {form.memoize(() => Math.random() + 200, ['a', 1, 2, 4, 3])}
            <br/>
            {form.memoize(() => Math.random(), ['b', 1, 2, 4, state])}
            <form 
                onSubmit={form.methods.handleSubmit( v => {
                    console.log(v)
                }, console.log)}
            >
                {form.renderField({
                    type: 'text',
                    name: 'fullname',
                    label: 'Fullname',
                    helpText: 'Type here your name',
                    required: true,
                    // debounceTime: 2000,
                    
                })}
                <br/><br/>
                {form.renderField({
                    type: 'text',
                    name: 'fullname2',
                    label: 'Fullname2',
                    helpText: 'Type here your name',
                    required: 'Obrigatório',
                    debounceTime: 5000
                })}
                <br/><br/>
                <Button 
                    variant="contained"
                    type='submit'
                    >
                    Send
                </Button>
                <br/><br/>
                <Button 
                    variant="contained"
                    type='button'
                    onClick={random}
                >
                    update here
                </Button>
            </form>
        </>
    )
}

export function DebounceSubmitExample(){
    const form = useForm<{fullname: string, last: number}>({
        enableDebounce: true
    })

    return (
        <NiceformHookProvider form={form}>
            <DebounceSubmitExampleChild/>
        </NiceformHookProvider>
    )
}