
import {create, CreateProps} from 'niceform-hook'
import { TextareaField } from './components/Textarea'
import { TextField } from './components/TextField'

type FieldProps = {
    helpText?: React.ReactNode
    label?: React.ReactNode
    type: 'text' | 'textarea'
    doblo?: 1
}
type FieldProps2 = {
    helpText?: React.ReactNode
    label?: React.ReactNode
    type: 'select',
    options: Array<{label: string}>
}

type FieldProps3 = {
    helpText?: React.ReactNode
    label?: React.ReactNode
    type: 'mui',
    options: Array<{label: string}>
    dataLabel: string
}

export type Form = CreateProps<{fieldProps: FieldProps | FieldProps2 | FieldProps3, componentsType: FieldProps['type']}>
export const useForm = create<Form>({
    components: {
        'text': {
            render({name, helpText, label, ...other}) {
                return (
                    <TextField 
                        name={name} 
                        helpText={helpText}
                        label={label}
                        {...other}
                    />
                )
            },
        },
        textarea: {
            render({name, helpText, label}) {
                return (
                    <TextareaField 
                        name={name} 
                        helpText={helpText}
                        label={label}
                    />
                )
            }
        }
    },
    errorsControl: [
        (data) => {
            // console.log(data)
            // return 'falha'
        }
    ],
    onErrorDuringSubmit(errors, context) {
        console.log(errors, context)
    },
})