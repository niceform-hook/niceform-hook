import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as a,d as m}from"./index-DwlKkOCt.js";import{c as d,A as i}from"./render-field.components-78BklslM.js";import"./index-uubelm5h.js";import"./iframe-DtdH0luQ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-CaxWGhrp.js";import"./Button-B54otUPX.js";function o(t){const r={p:"p",...s(),...t.components};return d||n("components",!1),i||n("components.Active",!0),e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"API/renderField/active",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("div",{className:"subheading",id:"active",children:e.jsx(r.p,{children:"Enabling/Disabling a field"})}),`
`,e.jsx("p",{children:e.jsx(r.p,{children:"In this example, the second field will not produce an error message, much less will it be displayed when submitting the form."})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(i,{})}),e.jsx(m,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm()

            return (
                <NiceformHookProvider form={form}>
                    <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                        {
                            form.renderField({
                                type: 'text',
                                name: 'fullname',
                                label: 'Fullname',
                                required: true,
                                helpText: 'This field is required'
                            })
                        }
                        <br/>
                        <br/>
                        {
                            form.renderField({
                                type: 'text',
                                name: 'lastname',
                                label: 'lastname',
                                active: false,
                                required: true,
                                helpText: 'This field is required but is inactive'
                            })
                        }
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
        `})]})]})}function M(t={}){const{wrapper:r}={...s(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o(t)}function n(t,r){throw new Error("Expected "+(r?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{M as default};
