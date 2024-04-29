import { Button } from '@mui/material'
import { NiceformHookProvider } from 'niceform-hook'
import { useForm } from './form-config'

export function DependesOnExample(){
    
    const form = useForm()

    return (
        <NiceformHookProvider form={form}>
            <h1>Depends on example</h1>
            <p>In this example we will explore how to relate dependencies with other fields.</p>
            <form onSubmit={form.methods.handleSubmit(console.log)}>
                {form.renderField({
                    type: 'text',
                    name: 'country',
                    label: 'Country',
                })}
                <br/>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'state',
                    label: 'State',
                    dependsOnToClear: 'country'
                })}
                <br/>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'city',
                    label: 'City',
                    dependsOnToClear: form.memoize(() => ['state'], ['city-deps'])
                })}
                <br/>
                <br/>
                {form.renderField({
                    type: 'text',
                    name: 'neighborhood',
                    label: 'Neighborhood',
                    dependsOnToClear: 'city'
                })}
                <br/>
                <br/>
                <p>After filling in all the fields, modify the value of any and see the result.</p>
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