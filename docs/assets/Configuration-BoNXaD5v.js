import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as l}from"./index-FeUjBnvO.js";import{M as a,d as r}from"./index-DwlKkOCt.js";import"./index-uubelm5h.js";import"./iframe-DtdH0luQ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function i(n){const t={code:"code",em:"em",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Getting Started/Configuration",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("style",{children:`
  table td:nth-child(3) > div{max-width: 400px}
`}),`
`,e.jsx(t.h1,{id:"configuration-file",children:"Configuration file"}),`
`,e.jsx(t.p,{children:"To have a better usability experience with this library, it is essential to build a configuration file with the components of your application's standard form."}),`
`,e.jsxs(t.p,{children:[`The code below gives a brief example of how you can define your fields or any other component you want to use in the form, in addition to taking advantage of certain attributes.
For teaching purposes, we are using the `,e.jsx(t.code,{children:"material-ui"})," library to build our custom fields."]}),`
`,e.jsx("div",{className:"subheading",children:"Configuration"}),`
`,e.jsx(r,{language:"tsx",dark:!0,format:!0,code:`
//------------------------------------------./Form.config.tsx---------------------------------------------------------

import {create} from 'niceform-hook'
import { TextareaField, TextField } from './my-components'

export const useNiceForm = create({
    components: {
        'text': {
            render({name, helpText, label}) {
                return (
                    <TextField 
                        name={name} 
                        label={label} 
                        helpText={helpText}
                    />
                )
            },
        },
        textarea: {
            render({name, helpText, label}) {
                return (
                    <TextareaField 
                        name={name} 
                        label={label} 
                        helpText={helpText}
                    />
                )
            }
        }
    },
    errorsControl: [
        (data) => {
            if(data.field.type === 'email' && data.value?.indexOf('@') === -1) return 'Email invalid'
        }
    ],
    onErrorDuringSubmit(errors, context) {
        console.log(errors, context)
    }
})`}),`
`,e.jsx(r,{language:"tsx",dark:!0,format:!0,code:`
//------------------------------------------./TextField.tsx---------------------------------------------------------
import { TextField as MuiTextField } from '@mui/material'
import { memo } from "react"
import { useField } from "niceform-hook"
interface TextFieldProps {
    name: string
    label?: React.ReactNode
    helpText?: React.ReactNode
}
export const TextField = memo<TextFieldProps>(function TextField(props) {

    const { field, fieldState } = useField(props.name)

    return (
        <MuiTextField
            {...field}
            label={props.label}
            variant="outlined"
            size="small"
            value={field.value || ''}
            error={fieldState.invalid}
            helperText={fieldState.error?.message || props.helpText}
        />
    )
})
    `}),`
`,e.jsx("div",{className:"subheading",children:"Definitions"}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Attribute"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Example"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx("i",{children:"errorsControl"})})}),e.jsx("td",{children:e.jsx(t.p,{children:"With this property you can create functions aimed at handling values ​​and issuing errors in fields on the form."})}),e.jsx("td",{children:e.jsx(r,{language:"jsx",dark:!0,format:!0,code:`
errorsControl: [
    data => {
        if(data?.field?.required && !data?.value) return 'Campo obrigatório'
    },
    data => {
        if(data.field.minlength && (data.value || '').length < data.field.minlength) 
        return "Required "+data?.field?.minlength+" characters"
    },
    async data => {
        return new Promise(resolve => {
            setTimeout(resolve, 2000, 'Any error message')
        })
    }
    /*
    data return:

    value: any -> current field value
    formValues: Record<string, any> -> all current values of form
    methods: useNiceFormReturn -> all hook methods of react-hook-form
    fieldsRegistered: Map<string, Field> -> all fields registered in form
    field: Field -> field data
    
    */
]
            `})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx("i",{children:"components"})})}),e.jsx("td",{children:"Defines the field components based on their type that the form will have."}),e.jsx("td",{children:e.jsx(r,{language:"jsx",dark:!0,format:!0,code:`
                components: {
                    'text': {
                        render({name, helpText, label}) {
                            return (
                                <TextField 
                                    name={name} 
                                    label={label} 
                                    helpText={helpText}
                                />
                            )
                        },
                    },
                    textarea: {
                        render({name, helpText, label}) {
                            return (
                                <TextareaField 
                                    name={name} 
                                    label={label} 
                                    helpText={helpText}
                                />
                            )
                        }
                    }
                }
            `})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx("i",{children:"debounceTime"})})}),e.jsx("td",{children:"defines a delay time in the field value change response. Default is 400ms."}),e.jsx("td",{children:e.jsx(r,{language:"jsx",dark:!0,format:!0,code:"debounceTime: 400 // 400ms"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx("i",{children:"enableDebounce"})})}),e.jsx("td",{children:"Enable debounce. Default is false."}),e.jsx("td",{children:e.jsx(r,{language:"jsx",dark:!0,format:!0,code:"enableDebounce: true"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx("i",{children:"enableDebounceOnSubmit"})})}),e.jsx("td",{children:"Enable debounce when submitting the form, awaiting all field running debounce. Default is false."}),e.jsx("td",{children:e.jsx(r,{language:"jsx",dark:!0,format:!0,code:"enableDebounceOnSubmit: true"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx("i",{children:"onErrorDuringSubmit"})})}),e.jsx("td",{children:"Error listener triggered during form submission."}),e.jsx("td",{children:e.jsx(r,{language:"jsx",dark:!0,format:!0,code:`
                onErrorDuringSubmit(errors, context) {
                    console.log(errors, context)
                    // errors -> list of all errors on form
                    // context -> {methods, getField}
                }
            `})})]})]}),`
`,e.jsx("div",{className:"subheading",children:"Configuration with types"}),`
`,e.jsx(t.p,{children:"It is also possible to configure the form with type."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"fieldProps"})," defines which additional properties you can pass to your fields, you can customize to your liking."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"componentsType"})," defines what field types I will have, this will define which keys I should pass in ",e.jsx(t.em,{children:"components"})]}),`
`]}),`
`,e.jsx(r,{language:"tsx",dark:!0,format:!0,code:`
//------------------------------------------./Form.config.tsx---------------------------------------------------------

import {create, CreateProps} from 'niceform-hook'
import { SelectField, TextField } from './my-components'

interface MyProperties{
    helpText?: React.ReactNode
    label?: React.ReactNode
}

interface FieldText extends MyProperties{
    type: 'text'
}
interface FieldSelect extends MyProperties{
    type: 'select'
    selectOptions: Array<{label: string, value: string}>
}

export const useNiceForm = create<CreateProps<{
    fieldProps: FieldText | FieldSelect
    componentsType: 'text' | 'select' | 'textarea'}
>>({
    components: {
        'text': {
            render({name, helpText, label}) {
                return (
                    <TextField 
                        name={name} 
                        label={label} 
                        helpText={helpText}
                    />
                )
            },
        },
        select: {
            render({name, helpText, label}) {
                return (
                    <SelectField 
                        name={name} 
                        label={label} 
                        helpText={helpText}
                    />
                )
            }
        }
    }
})`})]})}function j(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{j as default};
