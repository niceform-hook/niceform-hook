import { Button } from '@mui/material'
import { NiceformHookProvider } from 'niceform-hook'
import { useForm } from './form-config'

export function SimpleExample(){
    
    const form = useForm()
    
    return (
        <NiceformHookProvider form={form}>
            <h1>Simple Example</h1>
            <form onSubmit={form.methods.handleSubmit(console.log)}>
                {form.renderField({
                    type: 'text',
                    name: 'fullname',
                    label: 'Fullname',
                    helpText: 'Type here your name'
                })}
                <br/><br/>
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