import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as a}from"./index-FeUjBnvO.js";import{M as s,d as l}from"./index-BbF7f0Pm.js";import{c as u,I as i}from"./render-field.components-DszrIJrO.js";import"./index-uubelm5h.js";import"./iframe-DN-B_4DH.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-CoBwDqCp.js";function o(n){const t={a:"a",code:"code",em:"em",p:"p",...a(),...n.components};return u||r("components",!1),i||r("components.InputOutput",!0),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"API/renderField/Input and Output",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("div",{className:"subheading",children:e.jsx(t.p,{children:"input and output"})}),`
`,e.jsxs("h4",{children:[e.jsx(t.code,{children:"input"})," considerations"]}),`
`,e.jsxs("p",{children:[e.jsxs(t.p,{children:["The ",e.jsx(t.em,{children:"input"}),`
attribute is called once for the first value other than undefined that it finds, including its return. In this example,
for the initial value of a given field I am using the `,e.jsx(t.em,{children:"initialValues"})," form property."]}),e.jsxs(t.p,{children:[`An important thing to know when using this property is the precedence rules for initial values.
In niceform-hook, in addition to having initialValues ​​as a way to pass initial values, I also contain `," ",`
`,e.jsx(t.a,{href:"https://react-hook-form.com/docs/useform#defaultValues",rel:"nofollow",children:"defaultValues"})," and ",e.jsx(t.a,{href:"https://react-hook-form.com/docs/useform#values",rel:"nofollow",children:"values"}),`
which belongs to `,e.jsx(t.a,{href:"https://react-hook-form.com",rel:"nofollow",children:"react-hook-form"}),`.
If I define a field in defaultValues, the input attribute will be initially called with the value provided here,
regardless of defining it in InitialValues. It is important to pay attention to this detail.`]}),e.jsxs(t.p,{children:["This property will not work with ",e.jsx(t.em,{children:"values"})," due to its form of reactivity."]}),e.jsxs(t.p,{children:[e.jsx(t.em,{children:"Input"})," is indicated when we enter values ​​in defaultValues ​​or initialValues, we recommend using the latter form in most cases."]})]}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(i,{})}),e.jsx(l,{language:"tsx",dark:!0,format:!0,code:`
            const form = useNiceForm({
                initialValues: {
                    fullname: 'Jacob'
                }
            })
            
            return (
                <NiceformHookProvider form={form}>
                    <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                        {form.renderField({
                            type: 'text',
                            name: 'fullname',
                            label: 'FullName',
                            input(value){
                                if(!value) return value;
                                return value + ' Bonds'
                            }
                        })}
                        <br/>
                        <br/>
                        {form.renderField({
                            type: 'text',
                            name: 'age',
                            label: 'Age',
                            output(value) {
                                return parseInt(value) + 10
                            },
                            helpText: 'Type a number'
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
        `})]})]})}function y(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}function r(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{y as default};
