import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as d}from"./index-FeUjBnvO.js";import{M as s,d as a}from"./index-DwlKkOCt.js";import{c,d as n}from"./render-field.components-78BklslM.js";import"./index-uubelm5h.js";import"./iframe-DtdH0luQ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-CaxWGhrp.js";import"./Button-B54otUPX.js";function t(r){const o={code:"code",p:"p",...d(),...r.components};return c||i("components",!1),n||i("components.RenderNode",!0),e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"API/renderField/Render node",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("div",{className:"subheading min-letter-space",id:"rendernode",children:e.jsx(o.p,{children:"Rendering arbitrary elements"})}),`
`,e.jsx("p",{children:e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"renderField"})," method also offers the possibility of rendering any ",e.jsx(o.code,{children:"React.ElementType"})," using ",e.jsx(o.code,{children:"type: 'node'"})," as activation"]})}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code left",children:e.jsx(n,{})}),e.jsx(a,{language:"tsx",dark:!0,format:!0,code:`
const form = useNiceForm()

return (
    <NiceformHookProvider form={form}>
        <form onSubmit={form.methods.handleSubmit(values => alert(JSON.stringify(values)))}>
            {form.renderField({
                type: 'node',
                name: 'rating',
                label: 'Rating',
                render: ({field}) => (
                    <div 
                        style={{
                            fontSize: 40,
                            cursor: 'pointer',
                            color: field.value && 'red',
                            fontWeight: field.value && 900
                        }}
                        onClick={() => field.onChange(!field.value)}
                    >
                        ♡ 
                    </div>
                )
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
        `})]})]})}function R(r={}){const{wrapper:o}={...d(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(t,{...r})}):t(r)}function i(r,o){throw new Error("Expected "+(o?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{R as default};
