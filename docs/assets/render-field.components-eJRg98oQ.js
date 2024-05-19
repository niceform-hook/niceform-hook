import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as m}from"./index-uubelm5h.js";import{u as o,N as a}from"./form-config-CWU4kx8_.js";import{B as d}from"./Button-CCbVgXM9.js";function c(){const n=o();return e.jsx(a,{form:n,children:e.jsx("form",{onSubmit:n.methods.handleSubmit(t=>alert(JSON.stringify(t))),children:n.renderField({type:"text",name:"fullname",label:"Fullname"})})})}function u(){const n=o();return e.jsx(a,{form:n,children:e.jsxs("form",{onSubmit:n.methods.handleSubmit(t=>alert(JSON.stringify(t))),children:[n.renderField({type:"text",name:"fullname",label:"Fullname",required:!0,helpText:"This field is required"}),e.jsx("br",{}),e.jsx("br",{}),n.renderField({type:"text",name:"lastname",label:"lastname",active:!1,required:!0,helpText:"This field is required but is inactive"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{variant:"contained",type:"submit",children:"Send"})]})})}function b(){const n=o();return e.jsx(a,{form:n,children:e.jsxs("form",{onSubmit:n.methods.handleSubmit(t=>alert(JSON.stringify(t))),children:[n.renderField({type:"text",name:"country",label:"Country"}),e.jsx("br",{}),e.jsx("br",{}),n.renderField({type:"text",name:"state",label:"State",dependsOnToClear:"country"}),e.jsx("br",{}),e.jsx("br",{}),n.renderField({type:"text",name:"city",label:"City",dependsOnToClear:["state"]}),e.jsx("br",{}),e.jsx("br",{}),n.renderField({type:"text",name:"neighborhood",label:"Neighborhood",dependsOnToClear:"city"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("p",{children:"After filling in all the fields, modify the value of any and see the result."})]})})}function x(){const n=o({initialValues:{fullname:"Jacob"}});return e.jsx(a,{form:n,children:e.jsxs("form",{onSubmit:n.methods.handleSubmit(t=>alert(JSON.stringify(t))),children:[n.renderField({type:"text",name:"fullname",label:"FullName",input(t){return t&&`${t} Bonds`}}),e.jsx("br",{}),e.jsx("br",{}),n.renderField({type:"text",name:"age",label:"Age",output(t){return parseInt(t)+10},helpText:"Type a number"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{variant:"contained",type:"submit",children:"Send"})]})})}function h(){const n=o(),t=(r,i)=>{console.log(r,i)},s=(r,i)=>{console.log(r,i)};return e.jsx(a,{form:n,children:e.jsxs("form",{onSubmit:n.methods.handleSubmit(t,s),children:[n.renderField({type:"text",name:"name",label:"Name"}),e.jsx("br",{}),e.jsx("br",{}),n.renderField(({methods:r})=>({type:"text",name:"lastname",label:"Lastname",helpText:r.watch("name")})),e.jsx("br",{}),e.jsx("br",{}),n.renderField(({getField:r})=>{var i;return{type:"text",name:"other",label:"Other",helpText:((i=r("lastname"))==null?void 0:i.label)||""}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{variant:"contained",type:"submit",children:"Send"})]})})}function p(){const n=o();return e.jsx(a,{form:n,children:e.jsxs("form",{onSubmit:n.methods.handleSubmit(t=>alert(JSON.stringify(t))),children:[n.renderField({type:"text",name:"fullname",label:"Type here",debounceTime:1e3,enableDebounce:!0}),n.methods.watch("fullname")]})})}function j(){const n=o(),t=(r,i)=>{console.log(r,i)},s=(r,i)=>{console.log("errors",r)};return e.jsx(a,{form:n,children:e.jsxs("form",{onSubmit:n.methods.handleSubmit(t,s),children:[n.renderField({type:"text",name:"email",label:"Email",required:"Required field",helpText:"Required"}),e.jsx("span",{style:{marginLeft:10},children:"Required"}),e.jsx("br",{}),e.jsx("br",{}),n.renderField({type:"text",name:"fullname",label:"Fullname",minLength:10}),e.jsx("span",{style:{marginLeft:10},children:"Min. length: 10"}),e.jsx("br",{}),e.jsx("br",{}),n.renderField({type:"text",name:"age",label:"Age",validate:{error:r=>r!=="25"?'The correct value is "25"':void 0}}),e.jsx("span",{style:{marginLeft:10},children:'The correct value is "25"'}),e.jsx("br",{}),e.jsx("br",{}),n.renderField({type:"text",name:"address",label:"Address",validate:{error:r=>(r==null?void 0:r.indexOf(","))===-1?"Must contain a comma":void 0,error2:r=>(r==null?void 0:r.length)<10?"Size below permitted":void 0,error3:r=>r?void 0:"Required field"}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{variant:"contained",type:"submit",children:"Send"})]})})}function f(){const n=o(),t=(r,i)=>{console.log(r,i)},s=(r,i)=>{console.log("errors",r)};return e.jsx(a,{form:n,children:e.jsxs("form",{onSubmit:n.methods.handleSubmit(t,s),children:[n.methods.formState.isValidating&&"Validating async error",e.jsx("br",{}),e.jsx("br",{}),n.renderField({type:"text",name:"country",label:"Country",validate:{async error(r){return new Promise((i,l)=>{setTimeout(i,2e3,"Async error")})}}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{variant:"contained",type:"submit",children:"Send"})]})})}function y(){const n=o();return e.jsx(a,{form:n,children:e.jsxs("form",{onSubmit:n.methods.handleSubmit(t=>alert(JSON.stringify(t))),children:[n.renderField({type:"node",name:"rating",label:"Rating",render:({field:t})=>e.jsx("div",{style:{fontSize:40,cursor:"pointer",color:t.value&&"red",fontWeight:t.value&&900},onClick:()=>t.onChange(!t.value),children:"♡"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{variant:"contained",type:"submit",children:"Send"})]})})}const g=()=>{const[n,t]=m.useState([{value:"horse",label:"Horse"},{value:"giraffe",label:"Giraffe"},{value:"pig",label:"Pig"},{value:"elephant",label:"Elephant"}]);return{options:(n==null?void 0:n.map(s=>s))||[],isLoading:!(n!=null&&n.length)}};function S(){const[n,t]=m.useReducer(l=>l+1,0),{options:s,isLoading:r}=g(),i=o();return e.jsxs(a,{form:i,children:[r&&"loading...",e.jsx("br",{}),"parent render count: ",n,e.jsx("br",{}),e.jsx("br",{}),e.jsxs("form",{onSubmit:i.methods.handleSubmit(l=>alert(JSON.stringify(l))),children:[i.renderField({type:"select",name:"animal",label:"Animal",showRenderCount:!0,options:s}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{variant:"contained",type:"button",onClick:t,children:"Update"})]})]})}function _(){const[n,t]=m.useReducer(l=>l+1,0),{options:s,isLoading:r}=g(),i=o();return e.jsxs(a,{form:i,children:[r&&"loading...",e.jsx("br",{}),"parent render count: ",n,e.jsx("br",{}),e.jsx("br",{}),e.jsxs("form",{onSubmit:i.methods.handleSubmit(l=>alert(JSON.stringify(l))),children:[i.renderField({type:"select",name:"animal",label:"Animal",showRenderCount:!0,options:i.memoize(()=>s,[r])}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{variant:"contained",type:"button",onClick:t,children:"Update"})]})]})}c.__docgenInfo={description:"",methods:[],displayName:"BasicExample"};u.__docgenInfo={description:"",methods:[],displayName:"Active"};b.__docgenInfo={description:"",methods:[],displayName:"DependesOn"};x.__docgenInfo={description:"",methods:[],displayName:"InputOutput"};h.__docgenInfo={description:"",methods:[],displayName:"RenderWithCallbackExample"};p.__docgenInfo={description:"",methods:[],displayName:"Debounce"};j.__docgenInfo={description:"",methods:[],displayName:"Validate"};f.__docgenInfo={description:"",methods:[],displayName:"ValidateAsync"};y.__docgenInfo={description:"",methods:[],displayName:"RenderNode"};S.__docgenInfo={description:"",methods:[],displayName:"Memoization_code_1"};_.__docgenInfo={description:"",methods:[],displayName:"Memoization_code_2"};const T=Object.freeze(Object.defineProperty({__proto__:null,Active:u,BasicExample:c,Debounce:p,DependesOn:b,InputOutput:x,Memoization_code_1:S,Memoization_code_2:_,RenderNode:y,RenderWithCallbackExample:h,Validate:j,ValidateAsync:f},Symbol.toStringTag,{value:"Module"}));export{u as A,c as B,p as D,x as I,S as M,h as R,j as V,b as a,_ as b,T as c,y as d,f as e};