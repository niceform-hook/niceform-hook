import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as m}from"./index-FeUjBnvO.js";import{d as i}from"./index-B0mEgxCG.js";import{c,d as r}from"./hooks.components-Dciz4c-E.js";import"./index-uubelm5h.js";import"./iframe-D1cx4oc0.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-CWU4kx8_.js";import"./Button-CCbVgXM9.js";function n(o){const t={a:"a",p:"p",...m(),...o.components};return c||s("components",!1),r||s("components.ExampleUseWatch",!0),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"subheading",children:e.jsx(t.p,{children:"Hook useWatch"})}),`
`,e.jsx("p",{children:e.jsxs(t.p,{children:["Expõe ",e.jsx(t.a,{href:"https://react-hook-form.com/docs/useWatch",rel:"nofollow",children:"useWatch"})]})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(r,{})}),e.jsx(i,{language:"tsx",dark:!0,format:!0,code:`
            import {useFormState} from 'niceform-hook/customRHF'

            function ExampleUseWatchChild(){

                const {renderField, methods} = useNiceformContext<Form>()

                const watch = useWatch()

                return (
                    <form onSubmit={methods.handleSubmit(values => alert(JSON.stringify(values)))}>
                        {/* Is Dirty: {watch.isDirty ? 'true' : 'false'} */}
                        <br/>
                        {renderField({
                            type: 'text',
                            name: 'fullname',
                            label: 'Fullname'
                        })}
                        <Button type='submit'>Enviar</Button>
                    </form>
                )
            }
            export function ExampleUseWatch() {
                const form = useNiceForm()

                return (
                    <NiceformHookProvider form={form}>
                        <ExampleUseWatchChild/>
                    </NiceformHookProvider>
                )
            }
        `})]})]})}function y(o={}){const{wrapper:t}={...m(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}function s(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{y as default};
