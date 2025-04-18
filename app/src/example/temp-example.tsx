import { Button } from '@mui/material'
import { useEffect, useMemo, useReducer, useRef } from 'react'
import { NiceformHookProvider, useNiceformContext } from 'niceform-hook'
import { Form, useForm } from './form-config'


const p = {
    1: {
        2: {
            3: 'achou'
        }
    }
}

function sleep(time: number) {
    return new Promise(res => {
        setTimeout(res, time)
    })
}

export function TempExampleChild() {
    const [state, random] = useReducer(state => state + 1, 0)
    const form = useNiceformContext<Form, { fullname: string, last: number }>()
    
    useEffect(() => {
        console.log('mudou')
        /*  */
    
    }, [form.methods.formState])

    return (
        <>
            <h1>Temp Example</h1>
            {Math.random()}
            {form.methods.formState.isValidating && <h3>Error loading...</h3>}
            {state}
            <br />
            {form.memoize(() => Math.random() + 200, ['a', 1, 2, 4, 3])}
            <br />
            {form.memoize(() => Math.random(), ['b', 1, 2, 4, state])}
            <form onSubmit={form.methods.handleSubmit(v => {
                // await sleep(5000)
                console.log(v)
            }, console.log)}>
                {form.renderField({
                    type: 'text',
                    name: 'fullname',
                    label: 'Fullname',
                    helpText: 'Type here your name',
                    required: true,
                    // debounceTime: 2000,
                    validate: {
                        async error(value: string) {
                            return new Promise((res, rej) => {
                                setTimeout(res, 2000, 'Async error')
                            })
                        },
                    }

                })}
                <br /><br />
                {form.renderField({
                    type: 'text',
                    name: 'fullname2',
                    label: 'Fullname2',
                    helpText: 'Type here your name',
                    required: 'Obrigatório',
                    debounceTime: 5000
                })}

                <br /><br />
                {/* {form.renderField(({
                    type: 'node',
                    name: 'email',
                    dependsOnToClear: 'fullname',
                    render: (hook) => (
                        <>
                            <span>Email</span>
                            <input 
                                {...hook.field} 
                                type='email' 
                                value={hook.field.value || ''}
                            />
                        </>
                    )
                }))} */}
                <br /><br />
                {/* {form.renderNode('email', ({hook}) => (
                    <>
                        <span>Email {Math.random()}</span>
                        <input {...hook.field}/>
                    </>
                ))} */}
                <br /><br />
                <Button
                    variant="contained"
                    type='submit'
                >
                    Send
                </Button>
                <br /><br />
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

export function TempExample() {
    const form = useForm<{ fullname: string, last: number }>({
        defaultValues: {

        },
        enableDebounce: true
    })

    return (
        <NiceformHookProvider form={form}>
            <TempExampleChild />
        </NiceformHookProvider>
    )
}