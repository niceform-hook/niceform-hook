import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as a,d}from"./index-BbF7f0Pm.js";import{c as m,a as r}from"./render-field.components-DszrIJrO.js";import"./index-uubelm5h.js";import"./iframe-DN-B_4DH.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-CoBwDqCp.js";function t(o){const n={p:"p",...s(),...o.components};return m||i("components",!1),r||i("components.DependesOn",!0),e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"API/renderField/dependsOnToClear",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("div",{className:"subheading",id:"dependsOnToClear",children:e.jsx(n.p,{children:"Dependent fields"})}),`
`,e.jsx("p",{children:e.jsx(n.p,{children:`It is very common for one field to depend on another within a form, and when modifying the value of one, the other must be reset.
Below is an example of a location hierarchy.`})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(r,{})}),e.jsx(d,{language:"tsx",dark:!0,format:!0,code:`
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
        `})]})]})}function C(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}function i(o,n){throw new Error("Expected "+(n?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{C as default};
