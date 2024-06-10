import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{d as m}from"./index-BBd7miBy.js";import{c as a,E as r}from"./hooks.components-CHSi3RHK.js";import"./index-uubelm5h.js";import"./iframe-Vf36eCmb.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-D7DDtQ0E.js";import"./Button-BmxSY4kt.js";function i(t){const o={a:"a",p:"p",...s(),...t.components};return a||n("components",!1),r||n("components.ExampleUseFieldState",!0),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"subheading",children:e.jsx(o.p,{children:"Hook useFieldState"})}),`
`,e.jsx("p",{children:e.jsxs(o.p,{children:["Hook customizado que expõe tudo de ",e.jsx(o.a,{href:"https://react-hook-form.com/docs/useform/getfieldstate",rel:"nofollow",children:"getfieldstate"}),"."]})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code center",children:e.jsx(r,{})}),e.jsx(m,{language:"tsx",dark:!0,format:!0,code:`
            import {useFieldState} from 'niceform-hook/customRHF'

            function ExampleUseFieldStateChild(){

                const {renderField, methods} = useNiceformContext<Form>()

                const fieldState = useFieldState('fullname')

                return (
                    <form>
                        Is Dirty: {fieldState.isDirty ? 'true' : 'false'}
                        <br/>
                        {renderField({
                            type: 'text',
                            name: 'fullname',
                            label: 'Fullname'
                        })}
                    </form>
                )
            }
            export function ExampleUseFieldState() {
                const form = useNiceForm()

                return (
                    <NiceformHookProvider form={form}>
                        <ExampleUseFieldStateChild/>
                    </NiceformHookProvider>
                )
            }
        `})]})]})}function k(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}function n(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};
