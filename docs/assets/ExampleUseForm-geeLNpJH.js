import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{d as i}from"./index-BbF7f0Pm.js";import{c as a,a as m}from"./hooks.components-Din0p_im.js";import"./index-uubelm5h.js";import"./iframe-DN-B_4DH.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-CoBwDqCp.js";function t(e){const r={p:"p",...s(),...e.components};return a||n("components",!1),m||n("components.ExampleUseForm",!0),o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"subheading",children:o.jsx(r.p,{children:"Hook useForm"})}),`
`,o.jsx("p",{children:o.jsx(r.p,{children:`Este é um exemplo de implementação em que você pode modificar o valor de um campo
ou fazer qualquer outra mudança no formulário utilizando este hook personalizado do react-hook-form.`})}),`
`,o.jsxs("div",{className:"canvas-code",children:[o.jsx("div",{className:"wrap-code center",children:o.jsx(m,{})}),o.jsx(i,{language:"tsx",dark:!0,format:!0,code:`
            import {useForm} from 'niceform-hook/customRHF'

            function ExampleUseFormChild(){

                const {renderField} = useNiceformContext<Form>()

                const RHForm = useForm()

                useEffect(() => {
                    RHForm.setValue('fullname', 'Foo Bar')
                }, [])

                return (
                    <form>
                        {renderField({
                            type: 'text',
                            name: 'fullname',
                            label: 'Fullname'
                        })}
                    </form>
                )
            }
            export function ExampleUseForm() {
                const form = useNiceForm()

                return (
                    <NiceformHookProvider form={form}>
                        <ExampleUseFormChild/>
                    </NiceformHookProvider>
                )
            }
        `})]})]})}function k(e={}){const{wrapper:r}={...s(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(t,{...e})}):t(e)}function n(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};
