import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as u}from"./index-FeUjBnvO.js";import{M as j,d as i}from"./index-DwlKkOCt.js";import{u as t,N as l}from"./form-config-CaxWGhrp.js";import{B as f}from"./Button-B54otUPX.js";import"./index-uubelm5h.js";import"./iframe-DtdH0luQ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function s(){const r=t({initialValues:{fullname:"Tony Stark"}});return e.jsx(l,{form:r,children:r.renderField({type:"text",name:"fullname",label:"Fullname"})})}function d(){const r=t({onChangeField(n,x){console.log(n,x)}});return e.jsx(l,{form:r,children:r.renderField({type:"text",name:"fullname",label:"Fullname"})})}function c(){const r=t();return e.jsx(l,{form:r,children:e.jsxs("form",{onSubmit:r.methods.handleSubmit(console.log,console.log),children:[r.renderField({type:"text",name:"fullname",label:"Fullname"}),e.jsx(f,{type:"submit",children:"Enviar"})]})})}function a(){const r=t({debounceTime:1e3,enableDebounce:!0,enableDebounceOnSubmit:!1});return e.jsx(l,{form:r,children:e.jsxs("form",{onSubmit:r.methods.handleSubmit(console.log,console.log),children:[r.renderField({type:"text",name:"fullname",label:"Type here"}),r.methods.watch("fullname")]})})}function m(){const r=t({debounceTime:1e3,enableDebounce:!0,enableDebounceOnSubmit:!0});return e.jsx(l,{form:r,children:e.jsxs("form",{onSubmit:r.methods.handleSubmit(console.log,console.log),children:[r.renderField({type:"text",name:"fullname",label:"Type here and send",debounceTime:3e3}),r.methods.watch("fullname"),e.jsx(f,{type:"submit",children:"Enviar"})]})})}s.__docgenInfo={description:"",methods:[],displayName:"InitialValue"};d.__docgenInfo={description:"",methods:[],displayName:"OnChangeField"};c.__docgenInfo={description:"",methods:[],displayName:"OnSubmit"};a.__docgenInfo={description:"",methods:[],displayName:"Debounce"};m.__docgenInfo={description:"",methods:[],displayName:"DebounceOnSubmit"};const b=Object.freeze(Object.defineProperty({__proto__:null,Debounce:a,DebounceOnSubmit:m,InitialValue:s,OnChangeField:d,OnSubmit:c},Symbol.toStringTag,{value:"Module"}));function h(r){const n={a:"a",code:"code",em:"em",h1:"h1",p:"p",...u(),...r.components};return b||o("components",!1),a||o("components.Debounce",!0),m||o("components.DebounceOnSubmit",!0),s||o("components.InitialValue",!0),d||o("components.OnChangeField",!0),c||o("components.OnSubmit",!0),e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"API/useNiceForm",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("style",{children:`
  
  table{
      width: 100%;
  }
  table td{
      vertical-align: top;
  }
  
`}),`
`,e.jsx(n.h1,{id:"useniceform",children:"useNiceForm"}),`
`,e.jsxs(n.p,{children:[`The hook from the form configuration has all the properties of react-hook-form and more.
In order to save writing, we will see the additional properties,
but it is recommended to consult the `,e.jsx(n.a,{href:"https://react-hook-form.com/docs/useNiceForm",rel:"nofollow",children:"react-hook-form"}),` documentation to
to have greater depth in other attributes implicit here.`]}),`
`,e.jsx("div",{className:"subheading",children:e.jsx(n.p,{children:"definitions"})}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.a,{href:"#initialValues",children:"initialValues"})}),e.jsx("td",{children:e.jsx(n.code,{children:"Record<string, any>"})}),e.jsx("td",{children:e.jsx(n.p,{children:"Enter initial values in the form"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.a,{href:"#onChangeField",children:"onChangeField"})}),e.jsx("td",{children:e.jsx(n.code,{children:"onChangeField(field: Field, value: any): any"})}),e.jsx("td",{children:e.jsx(n.p,{children:"Triggered every time a change occurs in a field."})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.a,{href:"#debounce",children:"debounceTime"})}),e.jsx("td",{children:e.jsx(n.code,{children:"number"})}),e.jsx("td",{children:e.jsx(n.p,{children:"Defines the debounce time (Triggers delay in field value change feedback.)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.a,{href:"#debounce",children:"enableDebounce"})}),e.jsx("td",{children:e.jsx(n.code,{children:"boolean"})}),e.jsx("td",{children:e.jsx(n.p,{children:"Enables debounce (Triggers delay in field value change feedback.)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.a,{href:"#debounce",children:"enableDebounceOnSubmit"})}),e.jsx("td",{children:e.jsx(n.code,{children:"boolean"})}),e.jsx("td",{children:e.jsx(n.p,{children:"Enable debounce when submitting the form, awaiting all field running debounce. Default is false."})})]})]}),`
`,e.jsx("div",{className:"subheading",children:e.jsx(n.p,{children:"return"})}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Description"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:e.jsx(n.p,{children:"Returns all implicit methods for react-hook-form."})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"renderField"}),e.jsx("td",{children:e.jsx(n.p,{children:"Method responsible for rendering a field on the form."})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getField"}),e.jsx("td",{children:e.jsx(n.p,{children:"Returns the props for the given field."})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"memoize"}),e.jsx("td",{children:e.jsx(n.p,{children:"Public utility API for value memorization."})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"control"}),e.jsx("td",{children:e.jsx(n.p,{children:"It should not be used, intended for internal library use."})})]})]}),`
`,e.jsx("div",{className:"subheading",id:"initialValues",children:e.jsx(n.p,{children:"Initial Values"})}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Record<string, any>"})}),`
`,e.jsx("p",{children:e.jsxs(n.p,{children:[`InitialValues is one of the ways you can inform values to the form in addition to the forms already known from react-hook-form.
A characteristic of this way of passing values is its mutability, an attribute only changes once when it is different from undefined.
Example: if `,e.jsx(n.em,{children:"fullname"})," is equal to undefined and changes to 'Tony Stark' and then to 'Hulk' ",e.jsx(n.em,{children:"fullname"})," will remain at 'Tony Stark'."]})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(s,{})}),e.jsx(i,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm({
                initialValues: {
                    fullname: 'Tony Stark'
                }
            })

            return (
                <NiceformHookProvider form={form}>
                    {
                        form.renderField({
                            type: 'text',
                            name: 'fullname',
                            label: 'Fullname'
                        })
                    }
                </NiceformHookProvider>
            )
        `})]}),`
`,e.jsx("div",{className:"subheading",id:"onChangeField",children:e.jsx(n.p,{children:"onChangeField"})}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"onChangeField(field: Field, value: any): any"})}),`
`,e.jsx("p",{children:e.jsxs(n.p,{children:[e.jsx(n.em,{children:"onChangeField"})," is triggered every time a change occurs in a field. Check the console to see the result."]})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(d,{})}),e.jsx(i,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm({
                onChangeField(field, value){
                    console.log(field, value)
                }
            })

            return (
                <NiceformHookProvider form={form}>
                    {
                        form.renderField({
                            type: 'text',
                            name: 'fullname',
                            label: 'Fullname'
                        })
                    }
                </NiceformHookProvider>
            )
        `})]}),`
`,e.jsx("div",{className:"subheading",children:e.jsx(n.p,{children:"OnSubmit"})}),`
`,e.jsx("p",{children:e.jsx(n.p,{children:"Following the react-hook-form guidelines, the form is submitted."})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(c,{})}),e.jsx(i,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm()

            return (
                <NiceformHookProvider form={form}>
                    <form onSubmit={form.methods.handleSubmit(console.log, console.log)}>
                        {
                            form.renderField({
                                type: 'text',
                                name: 'fullname',
                                label: 'Fullname'
                            })
                        }
                        <Button type='submit'>Enviar</Button>
                    </form>
                </NiceformHookProvider>
            )
        `})]}),`
`,e.jsx("div",{className:"subheading",id:"debounce",children:e.jsx(n.p,{children:"Debounce"})}),`
`,e.jsx("p",{children:e.jsxs(n.p,{children:[`It is also possible to configure the use of debounce,
by default it is disabled, but this can be toggled both in the form settings,
at the form level and at the field level. By default `,e.jsx(n.em,{children:"debounceTime"})," is 400ms."]})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(a,{})}),e.jsx(i,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm({
                debounceTime: 1000,
                enableDebounce: true
            })

            return (
                <NiceformHookProvider form={form}>
                    <form onSubmit={form.methods.handleSubmit(console.log, console.log)}>
                        {
                            form.renderField({
                                type: 'text',
                                name: 'fullname',
                                label: 'Type here'
                            })
                        }
                        {form.methods.watch('fullname')}
                    </form>
                </NiceformHookProvider>
            )
        `})]}),`
`,e.jsx("p",{children:e.jsx(n.p,{children:`It is also possible to define a delay when submitting the form, thus waiting for all fields that contain a delay before processing the form submission.
See browser console.`})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(m,{})}),e.jsx(i,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm({
                debounceTime: 1000,
                enableDebounce: true,
                enableDebounceOnSubmit: true
            })

            return (
                <NiceformHookProvider form={form}>
                    <form onSubmit={form.methods.handleSubmit(console.log, console.log)}>
                        {
                            form.renderField({
                                type: 'text',
                                name: 'fullname',
                                label: 'Type here and send',
                                debounceTime: 3000 // Awaiting for 3s
                            })
                        }
                        {form.methods.watch('fullname')}
                        <Button type='submit'>Enviar</Button>
                    </form>
                </NiceformHookProvider>
            )
        `})]})]})}function _(r={}){const{wrapper:n}={...u(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(h,{...r})}):h(r)}function o(r,n){throw new Error("Expected "+(n?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{_ as default};
