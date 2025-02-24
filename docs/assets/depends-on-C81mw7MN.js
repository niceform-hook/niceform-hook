import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as a,d}from"./index-DwlKkOCt.js";import{c as m,a as t}from"./render-field.components-78BklslM.js";import"./index-uubelm5h.js";import"./iframe-DtdH0luQ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-CaxWGhrp.js";import"./Button-B54otUPX.js";function n(o){const r={p:"p",...s(),...o.components};return m||i("components",!1),t||i("components.DependesOn",!0),e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"API/renderField/dependsOnToClear",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("div",{className:"subheading",id:"dependsOnToClear",children:e.jsx(r.p,{children:"Dependent fields"})}),`
`,e.jsx("p",{children:e.jsx(r.p,{children:`It is very common for one field to depend on another within a form, and when modifying the value of one, the other must be reset.
Below is an example of a location hierarchy.`})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(t,{})}),e.jsx(d,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm()
    
            return (
                <NiceformHookProvider form={form}>
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
                            dependsOnToClear: ['state']
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
        `})]})]})}function w(o={}){const{wrapper:r}={...s(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}function i(o,r){throw new Error("Expected "+(r?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
