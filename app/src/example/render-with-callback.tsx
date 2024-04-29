import { Button } from '@mui/material'
import { NiceformHookProvider } from 'niceform-hook'
import { useForm } from './form-config'

export function RenderWithCallbackExample(){
    
    const form = useForm()
    
    const submit = (values, evt) => {
        console.log(values, evt)
    }
    const onError = (error, evt) => {
        console.log(error, evt)
    }
    return (
        <NiceformHookProvider form={form}>
            <h1>Render with callback</h1>
            <p>You can also render fields with callback returning a json object.</p>
            <form onSubmit={form.methods.handleSubmit(submit, onError)}>
                {form.renderField({
                    type: 'text',
                    name: 'name',
                    label: 'Name'
                })}
                <br/>
                <br/>
                {form.renderField(({methods}) => ({
                    type: 'text',
                    name: 'lastname',
                    label: 'Lastname',
                    helpText: methods.watch('name')
                }))}
                <br/>
                <br/>
                {form.renderField(({getField}) => ({
                    type: 'text',
                    name: 'other',
                    label: 'Other',
                    helpText: getField('lastname')?.label || ''
                }))}
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