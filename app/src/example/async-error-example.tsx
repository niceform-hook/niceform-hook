import { Button } from '@mui/material'
import { NiceformHookProvider } from 'niceform-hook'
import { useForm } from './form-config'

export function AsyncErrorExample(){
    
    const form = useForm()
    
    const onError = (error, evt) => {
        console.log('errors', error)
    }
    return (
        <NiceformHookProvider form={form}>
            <h1>Async Error example</h1>
            <p>Check the browser console</p>
            <p>
                In addition to the ways to handle errors shown below, you can use the {" "}
                <a href="https://github.com/react-hook-form/resolvers#quickstart">
                    resolvers of react-hook-form
                </a>
            </p>
            {form.methods.formState.isValidating && <h3>Error loading...</h3>}
            <form onSubmit={form.methods.handleSubmit(console.log, onError)}>
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