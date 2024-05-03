import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as s,d as o}from"./index-BbF7f0Pm.js";import"./index-uubelm5h.js";import"./iframe-DN-B_4DH.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function n(t){const r={h1:"h1",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"API/Niceform Provider",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("style",{children:`
  
  table{
      width: 100%;
  }
  table td{
      vertical-align: top;
  }
  
`}),`
`,e.jsx(r.h1,{id:"form-context",children:"Form context"}),`
`,e.jsx(r.p,{children:"niceform-hook provides a custom context hook, ideal for segmenting your components when nested."}),`
`,e.jsx(o,{language:"tsx",dark:!0,format:!0,code:`
        function SignupForm(){
            const form = useNiceForm()

            return (
                <NiceformHookProvider form={form}>
                    <form onSubmit={form.methods.handleSubmit(console.log)}>
                        <SignupFirstStep/>
                    </form>
                </NiceformHookProvider>
            )
        }


        function SignupFirstStep(){
            const form = useNiceformContext<FormCreate>() // FormCreate is from Form.config.tsx

            return (
                <div>  
                    {
                        form.renderField({
                            type: 'text',
                            name: 'firstname',
                            label: 'First name'
                        })
                    }
                    {
                        form.renderField({
                            type: 'text',
                            name: 'lastname',
                            label: 'Last name'
                        })
                    }
                </div>  
            )
        }
    `}),`
`,e.jsx(o,{language:"tsx",dark:!0,format:!0,code:`
        // Form.config.tsx

        interface MyProperties{
            helpText?: React.ReactNode
            label?: React.ReactNode
        }

        interface FieldText extends MyProperties{
            type: 'text'
        }
        interface FieldSelect extends MyProperties{
            type: 'select'
            selectOptions: Array<{label: string, value: string}>
        }

        export FormCreate = CreateProps<{
            fieldProps: FieldText | FieldSelect
            componentsType: 'text' | 'select' | 'textarea'}
        >
    `})]})}function g(t={}){const{wrapper:r}={...i(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}export{g as default};
