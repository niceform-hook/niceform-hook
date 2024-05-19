import React from 'react';
import { NiceformHookProvider } from '../../src';
import { useNiceForm } from '../config/form-config';

export function BasicExample() {
    const form = useNiceForm()

    return (
        <NiceformHookProvider form={form}>
            <form 
                onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}
                className='form-container-illustration col-2'
            >
                {
                    form.renderFields([
                        {
                            type: 'text',
                            name: 'name',
                            label: 'Name'
                        },
                        {
                            type: 'text',
                            name: 'lastname',
                            label: 'Lastname'
                        },
                        {
                            type: 'text',
                            name: 'cep',
                            label: 'Cep'
                        },
                        {
                            type: 'text',
                            name: 'title',
                            label: 'Title'
                        }
                    ])
                }
            </form>
        </NiceformHookProvider>
    )
}