<div align="center">

# ![Niceform-hook](https://i.ibb.co/tB3pF8p/niceform-hook-logo-removebg-preview.png)

![Context-API](https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react)
![license](https://img.shields.io/github/license/niceform-hook/niceform-hook?style=for-the-badge)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![React-hook-form](https://img.shields.io/badge/react--hook--form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![RollupJS](https://img.shields.io/badge/RollupJS-ef3335?style=for-the-badge&logo=rollup.js&logoColor=white)

</div>

![imagem de exemplo](https://i.ibb.co/35DdCG40/niceform-hook.png)

Niceform-hook is a library written on top of react-hook-form, focusing on rendering form fields integrated into your project's design-system. With its power you can easily render your form fields using json, saving time when writing code.

The niceform hook is very complete, designed precisely to meet different types of needs for implementing and using a form.

### Install

```bash
npm install niceform-hook
```

### Quickstart

```tsx
import useNiceForm from "./Form.config";

export function App() {
  const form = useNiceForm();

  return (
    <NiceformHookProvider form={form}>
      <form
        className="grid grid-cols-4"
        onSubmit={form.methods.handleSubmit(console.log)}
      >
        <div>
          {form.renderField({
            type: "text",
            name: "name",
            label: "Name",
          })}
        </div>

        <div>
          {form.renderField({
            type: "text",
            name: "service_type",
            label: "Service Type",
          })}
        </div>

        <div>
          {form.renderField({
            type: "email",
            name: "user",
            label: "User",
          })}
        </div>

        <div>
          {form.renderField({
            type: "password",
            name: "password",
            label: "Password",
          })}
        </div>

        <button type="submit">Send</button>
      </form>
    </NiceformHookProvider>
  );
}
```

### Documentation

[Storybook Documentation](https://niceform-hook.github.io/niceform-hook)
