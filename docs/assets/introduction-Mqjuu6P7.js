import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as t}from"./index-FeUjBnvO.js";import{M as n,d as m}from"./index-BbF7f0Pm.js";import"./index-uubelm5h.js";import"./iframe-DN-B_4DH.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function i(r){const o={h1:"h1",img:"img",p:"p",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Getting Started/Introduction",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(o.h1,{id:"niceform-hook",children:"Niceform-hook"}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"https://uploaddeimagens.com.br/images/003/031/378/original/Captura_de_Tela_%2864%29.png?1610501567",alt:"imagem de exemplo"})}),`
`,e.jsx(o.p,{children:"Niceform-hook is a library written on top of react-hook-form, with its power you can easily render your form fields using json, saving time when writing code."}),`
`,e.jsx(o.p,{children:"The niceform hook is very complete, designed precisely to meet different types of implementation and usage needs in a form."}),`
`,e.jsx("div",{className:"subheading",children:"Basic Example"}),`
`,e.jsx(m,{language:"jsx",dark:!0,format:!0,code:`
import useNiceForm from './Form.config';


export function App(){
  const form = useNiceForm()

  return (
    <NiceformHookProvider form={form}>
        <form 
          className='grid grid-cols-4'
          onSubmit={form.methods.handleSubmit(console.log)}
        >
            <div>
              {form.renderField({
                type:'text',
                name: 'name',
                label: 'Name',
              })}
            </div>

            <div>
              {form.renderField({
                type: 'text',
                name: 'service_type',
                label: 'Service Type'
              })}
            </div>

            <div>
              {form.renderField({
                type: 'email',
                name: 'user',
                label: 'User'
              })}
            </div>
            
            <div>
              {form.renderField({
                type: 'password',
                name: 'password',
                label: 'Password'
              })}
            </div>

            <button type='submit'>Send</button>
        </form>
    </NiceformHookProvider>
  )
}
`})]})}function x(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{x as default};
