# ![Niceform-hook](https://i.ibb.co/tB3pF8p/niceform-hook-logo-removebg-preview.png)

![imagem de exemplo](https://uploaddeimagens.com.br/images/003/031/378/original/Captura_de_Tela_%2864%29.png?1610501567)

Niceform-hook is a library written on top of react-hook-form, focusing on rendering form fields integrated into your project's design-system. With its power you can easily render your form fields using json, saving time when writing code.

The niceform hook is very complete, designed precisely to meet different types of needs for implementing and using a form.

### Install
```bash
npm install niceform-hook
```
### Quickstart

```tsx
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
```

### Documentation

[Storybook Documentation](https://github.com/niceform-hook/niceform-hook)