import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as l,d as a}from"./index-BBd7miBy.js";import{c as d,R as n}from"./render-field.components-Ch2r9twV.js";import"./index-uubelm5h.js";import"./iframe-Vf36eCmb.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-D7DDtQ0E.js";import"./Button-BmxSY4kt.js";function o(t){const r={code:"code",p:"p",...i(),...t.components};return d||s("components",!1),n||s("components.RenderWithCallbackExample",!0),e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"API/renderField/Render with callback",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("div",{className:"subheading min-letter-space",children:e.jsx(r.p,{children:"Rendering field with callback"})}),`
`,e.jsx("p",{children:e.jsx(r.p,{children:"Below is shown how to render fields using callback functions, useful in many cases. The function has as parameters:"})}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Description"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:e.jsx(r.p,{children:"Returns all implicit methods for react-hook-form."})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getField"}),e.jsx("td",{children:e.jsxs(r.p,{children:[`Returns the props for the given field.
`,e.jsx(r.code,{children:"getField: (name: string) => Field"})]})})]})]}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(n,{})}),e.jsx(a,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm()
    
            const submit = (values, evt) => {
                console.log(values, evt)
            }
            const onError = (error, evt) => {
                console.log(error, evt)
            }
            return (
                <NiceformHookProvider form={form}>
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
        `})]})]})}function k(t={}){const{wrapper:r}={...i(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o(t)}function s(t,r){throw new Error("Expected "+(r?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};
