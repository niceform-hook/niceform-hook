import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as c,d as m}from"./index-9-3OgXQe.js";import{c as d,D as n}from"./render-field.components-TQvOraYS.js";import"./index-uubelm5h.js";import"./iframe-jvkIfody.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-CZY8GpiM.js";import"./Button-BpVAsBNl.js";function t(r){const o={code:"code",em:"em",p:"p",...i(),...r.components};return d||s("components",!1),n||s("components.Debounce",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"API/renderField/Debounce",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("div",{className:"subheading",id:"debounce",children:e.jsx(o.p,{children:"Debounce"})}),`
`,e.jsx("p",{children:e.jsxs(o.p,{children:["It is also possible to configure the use of debounce at field level. By default ",e.jsx(o.em,{children:"debounceTime"})," is ",e.jsx(o.code,{children:"400ms"}),"."]})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(n,{})}),e.jsx(m,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm()

            return (
                <NiceformHookProvider form={form}>
                    <form>
                        {
                            form.renderField({
                                type: 'text',
                                name: 'fullname',
                                label: 'Type here',
                                debounceTime: 1000,
                                enableDebounce: true
                            })
                        }
                        {form.methods.watch('fullname')}
                    </form>
                </NiceformHookProvider>
            )
        `})]})]})}function w(r={}){const{wrapper:o}={...i(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(t,{...r})}):t(r)}function s(r,o){throw new Error("Expected "+(o?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
