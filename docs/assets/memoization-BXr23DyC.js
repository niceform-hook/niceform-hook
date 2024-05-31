import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as m}from"./index-FeUjBnvO.js";import{M as c,d as n}from"./index-9-3OgXQe.js";import{c as d,M as i,b as a}from"./render-field.components-TQvOraYS.js";import"./index-uubelm5h.js";import"./iframe-jvkIfody.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./form-config-CZY8GpiM.js";import"./Button-BpVAsBNl.js";function s(t){const o={code:"code",em:"em",p:"p",...m(),...t.components};return d||r("components",!1),i||r("components.Memoization_code_1",!0),a||r("components.Memoization_code_2",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"API/renderField/Memoization",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx("div",{className:"subheading min-letter-space",id:"memoization",children:e.jsx(o.p,{children:"Memoizaton"})}),`
`,e.jsxs(o.p,{children:["It is noticeable in the niceform-hook configuration tab that we wrap our form components in the ",e.jsx(o.em,{children:"memo"}),` react api
to avoid unnecessary rendering if we pass props to it. In view of this,
In many cases, the need arises to pass attributes not just as primitive types in the renderField.
If you are transferring these attributes via props to a pre-defined component in the form settings,
you may run into the problem that the component is re-rendered with each mutation of the parent component,
even if the values at its core do not change.
In these situations, a solution is to use `,e.jsx(o.code,{children:"useMemo"})," to memorize a given result or employ ",e.jsx(o.code,{children:"memoization"}),`,
the niceform-hook api that stores values in cache. This can help optimize performance and avoid unnecessary component rendering.
We will see this later.`]}),`
`,e.jsx("h4",{children:"Consider the following case:"}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code left",children:e.jsx(i,{})}),e.jsx(n,{language:"tsx",dark:!0,format:!0,code:`
const [update, reRender] = useReducer(n => n + 1, 0)
const {options, isLoading} = useOptions() // fetch data from api
const form = useNiceForm()

return (
    <NiceformHookProvider form={form}>
        {isLoading && 'loading...'}
        <br/>
        parent render count: {update}
        <form>
            {form.renderField({
                type: 'select',
                name: 'animal',
                label: 'Animal',
                options: options
            })}
            <br/>
            <br/>
            <Button 
                variant="contained"
                type='button'
                onClick={reRender}
            >
                Update
            </Button>
        </form>
    </NiceformHookProvider>
)
`})]}),`
`,e.jsx(o.p,{children:`Note that the select component is rendered every time the button is clicked.
This is because the options property is not memoized. You can solve this problem using React's useMemo hook, as you may already be familiar with,
or through this library's memoization API.
The difference between them is that memoization stores the values in cache, using the dependencies themselves as the key.
Both useMemo and memoization employ shallow comparison, either by primitive values or by reference; Another difference is that you
you can use the case offered here under conditional blocks as opposed to a hook.
This adjustment can optimize component performance, reducing unnecessary rendering and improving the efficiency of the application as a whole:`}),`
`,e.jsxs("div",{className:"canvas-code",children:[e.jsx("div",{className:"wrap-code left",children:e.jsx(a,{})}),e.jsx(n,{language:"tsx",dark:!0,format:!0,code:`
const [update, reRender] = useReducer(n => n + 1, 0)
const {options, isLoading} = useOptions() // fetch data from api
const form = useNiceForm()

return (
    <NiceformHookProvider form={form}>
        {isLoading && 'loading...'}
        <br/>
        parent render count: {update}
        <form>
            {form.renderField({
                type: 'select',
                name: 'animal',
                label: 'Animal',
                options: form.memoize(() => options, [isLoading]) // or form.memoize(options, [isLoading])
            })}
            <br/>
            <br/>
            <Button 
                variant="contained"
                type='button'
                onClick={reRender}
            >
                Update
            </Button>
        </form>
    </NiceformHookProvider>
)
`})]}),`
`,e.jsx(o.p,{children:`But we must be aware that not everything is rosy, as the cache is based on keys and values,
many dependencies can be similar for different values, for example:`}),`
`,e.jsx(n,{language:"tsx",dark:!0,format:!0,code:`
const [state, increment] = useReducer(n => n + 1, 0)

form.memoize(() => 10 + 20, [1, 2, 3, 5])
form.memoize(() => 'Foo Bar', [1, 2, 3, state])
`}),`
`,e.jsx(o.p,{children:`When the state value reaches 5, the second call will not return "Foo Bar", but will return "30"
which is the return of the first call, as the dependencies of both will become the same.
To avoid this type of situation, place anything that differentiates your dependencies, for example:`}),`
`,e.jsx(n,{language:"tsx",dark:!0,format:!0,code:`
const [state, increment] = useReducer(n => n + 1, 0)

form.memoize(() => 10 + 20, ['a', 1, 2, 3, 5])
form.memoize(() => 'Foo Bar', ['b', 1, 2, 3, state])

`}),`
`,e.jsx(o.p,{children:"You can also use it as follows, for values ​​other than function type:"}),`
`,e.jsx(n,{language:"tsx",dark:!0,format:!0,code:`
form.memoize(['foo', 'bar'], ['foo'])
form.memoize({foo: 'bar'}, ['foo-bar'])

`}),`
`,e.jsx(o.p,{children:"If you want to memorize functions/callback try memoizeCallback:"}),`
`,e.jsx(n,{language:"tsx",dark:!0,format:!0,code:`
form.memoizeCallback(() => console.log('hello world'), ['foo'])
form.memoizeCallback(() => console.log({foo: 'bar'}), ['foo-bar'])

`})]})}function k(t={}){const{wrapper:o}={...m(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}function r(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};
