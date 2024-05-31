import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as s,d}from"./index-9-3OgXQe.js";import{u as l,N as m}from"./form-config-CZY8GpiM.js";import"./index-uubelm5h.js";import"./iframe-jvkIfody.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function n(){const r=l();return e.jsx(m,{form:r,children:e.jsx("form",{onSubmit:r.methods.handleSubmit(t=>alert(JSON.stringify(t))),className:"form-container-illustration col-2",children:r.renderFields([{type:"text",name:"name",label:"Name"},{type:"text",name:"lastname",label:"Lastname"},{type:"text",name:"cep",label:"Cep"},{type:"text",name:"title",label:"Title"}])})})}n.__docgenInfo={description:"",methods:[],displayName:"BasicExample"};const c=Object.freeze(Object.defineProperty({__proto__:null,BasicExample:n},Symbol.toStringTag,{value:"Module"}));function o(r){const t={a:"a",code:"code",h1:"h1",p:"p",...i(),...r.components};return c||a("components",!1),n||a("components.BasicExample",!0),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"API/renderFields",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("style",{children:`
  table tr td:nth-child(2) code {max-width: 400px}
`}),`
`,e.jsx(t.h1,{id:"renderfields",children:"renderFields"}),`
`,e.jsx(t.p,{children:e.jsx(t.code,{children:"renderFields(data: Array<RenderFieldPayload | RenderFieldPayloadAsFunction>): React.ReactNode[]"})}),`
`,e.jsxs(t.p,{children:["It works like ",e.jsx(t.a,{href:"/docs/api-renderfield--docs",children:"renderField"}),", the difference is that the method receives as an argument an array containing the definitions of the fields you want to render."]}),`
`,e.jsx("div",{className:"subheading",id:"basicExample",children:e.jsx(t.p,{children:"Basic example"})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(n,{})}),e.jsx(d,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm()

            return (
                <NiceformHookProvider form={form}>
                    <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
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
        `})]})]})}function F(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(o,{...r})}):o(r)}function a(r,t){throw new Error("Expected "+(t?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{F as default};
