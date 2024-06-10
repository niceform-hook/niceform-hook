import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as s,d as a}from"./index-BBd7miBy.js";import{c,B as t}from"./render-field.components-Ch2r9twV.js";import"./index-uubelm5h.js";import"./iframe-Vf36eCmb.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-D7DDtQ0E.js";import"./Button-BmxSY4kt.js";function n(o){const r={p:"p",...i(),...o.components};return c||m("components",!1),t||m("components.BasicExample",!0),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"API/renderField/Basic Example",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("div",{className:"subheading",id:"basicExample",children:e.jsx(r.p,{children:"Basic example"})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(t,{})}),e.jsx(a,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm()

            return (
                <NiceformHookProvider form={form}>
                    <form onSubmit={form.methods.handleSubmit(console.log)}>
                        {
                            form.renderField({
                                type: 'text',
                                name: 'fullname',
                                label: 'Fullname'
                            })
                        }
                    </form>
                </NiceformHookProvider>
            )
        `})]})]})}function N(o={}){const{wrapper:r}={...i(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}function m(o,r){throw new Error("Expected "+(r?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{N as default};
