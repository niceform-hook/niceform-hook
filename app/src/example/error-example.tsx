import { Button } from '@mui/material'
import { NiceformHookProvider } from 'niceform-hook'
import { useForm } from './form-config'

export function ErrorExample(){
    const form = useForm()
    
    const submit = (values, evt) => {
        console.log(values, evt)
    }
    const onError = (error, evt) => {
        console.log('errors', error)
    }
    return (
        <NiceformHookProvider form={form}>
            <h1>Error example</h1>
            <p>Check the browser console</p>
            <p>
                In addition to the ways to handle errors shown below, you can use the {" "}
                <a href="https://github.com/react-hook-form/resolvers#quickstart">
                    resolvers of react-hook-form
                </a>
            </p>
            <form onSubmit={form.methods.handleSubmit(submit, onError)}>
                <span>Required</span>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'email',
                    label: 'Email',
                    required: 'Required field',
                    helpText: 'Required'
                })}
                <br/>
                <br/>
                <span>Min. length: 10</span>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'fullname',
                    label: 'Fullname',
                    minLength: 10
                })}
                <br/>
                <br/>
                <span>The correct value is "25"</span>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'age',
                    label: 'Age',
                    validate: {
                        error: (value: string) => value !== '25' ? 'The correct value is "25"' : undefined
                    }
                })}
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