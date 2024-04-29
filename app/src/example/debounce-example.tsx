import { Button } from '@mui/material'
import { NiceformHookProvider } from 'niceform-hook'
import { useForm } from './form-config'

export function DebounceExample(){
    const random = Math.random()
    const form = useForm()
    
    const submit = (values, evt) => {
        console.log(values, evt)
    }
    const onError = (error, evt) => {
        console.log('errors', error)
    }
    return (
        <NiceformHookProvider form={form}>
            <h1>Debounce example</h1>
            <p>
                Você consegue atrasar o feedback de digitação do formulário
            </p>
            <form onSubmit={form.methods.handleSubmit(submit, onError)}>
                <span>Required</span>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'email',
                    label: 'Email',
                    required: 'Required field',
                    helpText: 'Required',
                    maxLength: 2
                })}
                <br/>
                <br/>
                <span>Min. length: 10</span>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'fullname',
                    label: 'Fullname'
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