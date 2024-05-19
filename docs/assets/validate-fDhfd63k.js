import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as l}from"./index-FeUjBnvO.js";import{M as d,d as n}from"./index-B0mEgxCG.js";import{c as m,V as a,e as i}from"./render-field.components-eJRg98oQ.js";import"./index-uubelm5h.js";import"./iframe-D1cx4oc0.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-CWU4kx8_.js";import"./Button-CCbVgXM9.js";function s(o){const r={a:"a",p:"p",...l(),...o.components};return m||t("components",!1),a||t("components.Validate",!0),i||t("components.ValidateAsync",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"API/renderField/validate",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("div",{className:"subheading min-letter-space",id:"validate",children:e.jsx(r.p,{children:"Validation of errors at field level."})}),`
`,e.jsx("p",{children:e.jsxs(r.p,{children:[`In this example, some field-level validations are observed.
In addition to the ways to handle errors shown below,
you can use the `,e.jsx(r.a,{href:"https://github.com/react-hook-form/resolvers",rel:"nofollow",children:"resolvers of react-hook-form"})]})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code left",children:e.jsx(a,{})}),e.jsx(n,{language:"tsx",dark:!0,format:!0,code:`
const form = useNiceForm()

const submit = (values, evt) => {
    console.log(values, evt)
}
const onError = (error, evt) => {
    console.log('errors', error)
}
return (
    <NiceformHookProvider form={form}>
        <form onSubmit={form.methods.handleSubmit(submit, onError)}>
            {form.renderField({
                type: 'text',
                name: 'email',
                label: 'Email',
                required: 'Required field',
                helpText: 'Required'
            })}
            <span style={{marginLeft: 10}}>Required</span>
            <br/>
            <br/>
            {form.renderField({
                type: 'text',
                name: 'fullname',
                label: 'Fullname',
                minLength: 10
            })}
            <span style={{marginLeft: 10}}>Min. length: 10</span>
            <br/>
            <br/>
            {form.renderField({
                type: 'text',
                name: 'age',
                label: 'Age',
                validate: {
                    error: (value: string) => value !== '25' ? 'The correct value is "25"' : undefined
                }
            })}
            <span style={{marginLeft: 10}}>The correct value is "25"</span>
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
        `})]}),`
`,e.jsx("div",{className:"subheading min-letter-space",children:e.jsx(r.p,{children:"Asynchronous field-level error validation."})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code left",children:e.jsx(i,{})}),e.jsx(n,{language:"tsx",dark:!0,format:!0,code:`
const form = useNiceForm()

const submit = (values, evt) => {
    console.log(values, evt)
}
const onError = (error, evt) => {
    console.log('errors', error)
}
return (
    <NiceformHookProvider form={form}>
        <form onSubmit={form.methods.handleSubmit(submit, onError)}>
            {form.methods.formState.isValidating && 'Validating async error'}
            <br/>
            <br/>
            {form.renderField({
                type: 'text',
                name: 'country',
                label: 'Country',
                validate: {
                    async error(value: string){
                        return new Promise(resolver => {
                            setTimeout(resolver, 2000, 'Async error')
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
        `})]})]})}function F(o={}){const{wrapper:r}={...l(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(s,{...o})}):s(o)}function t(o,r){throw new Error("Expected "+(r?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{F as default};
