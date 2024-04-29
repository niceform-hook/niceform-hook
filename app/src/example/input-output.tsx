import { Button } from '@mui/material'
import { NiceformHookProvider } from 'niceform-hook'
import { useForm } from './form-config'

function Input(){
    const form = useForm<{fullname?: string}>({
        initialValues: {
            fullname:'Jacob'
        }
    })
    
    return (
        <NiceformHookProvider form={form}>
            <h1>Input</h1>
            <p>
               
                o atributo <i>input</i> é chamado uma unica vez para o primeiro valor diferente de undefined que ele encontrar, incluindo seu retorno. 
                Nesse exemplo, para valor inicial de um determinado campo estou utilizando a propriedade de formulário <i>initialValues</i>.
                <br/><br/>
                Uma coisa importante a se saber ao utilizar esta propriedade são as regras de precendência de valores iniciais. 
                No niceform-hook além de ter o initialValues como forma de passar valores iniciais eu contenho também o {" "}
                <a href="https://react-hook-form.com/docs/useform#defaultValues" target='_blank' rel="noreferrer">defaultValues</a> e {" "}
                <a href="https://react-hook-form.com/docs/useform#values" target='_blank' rel="noreferrer">values</a> que pertencem ao {" "}
                <a href="https://react-hook-form.com/" target='_blank' rel="noreferrer">react-hook-form</a>.
                Se eu definir um campo em defaultValues, o atributo input será chamado inicialmente com o valor fornecido aqui, 
                independente de definir-lo em initialValues. É importante ficar atendo a este detalhe.
                <br/><br/>
                Esta propriedade não funcionará com <i>values</i> devido a sua forma de reatividade.
                <br/><br/>
                <i>Input</i> é indicado quando informo valores em defaultValues ou initialValues, recomendo utilizar a ultima forma na maioria dos casos.
            </p>
            <form onSubmit={form.methods.handleSubmit(console.log)}>
                {form.renderField({
                    type: 'text',
                    name: 'fullname',
                    label: 'FullName',
                    /* input(value){
                        if(!value) return value;
                        return `${value} Bonds`
                    } */
                    input: form.memoize(() => (value) => {
                        if(!value) return value;
                        return `${value} Bonds`
                    }, ['input-fullname'])
                })}
                <br/><br/>
                <Button 
                    variant="contained"
                    type='submit'
                >
                    Send
                </Button>
            </form>
            
        </NiceformHookProvider>
    )
}

function Output(){
    const form = useForm<{age?: string}>()
    return (
        <NiceformHookProvider form={form}>
            
            <h1>Output</h1>
            <form onSubmit={form.methods.handleSubmit(console.log)}>
                {form.renderField({
                    type: 'text',
                    name: 'age',
                    label: 'Age',
                    output(value) {
                        return parseInt(value)
                    },
                    helpText: 'Type a number'
                })}
                <br/><br/>
                <Button 
                    variant="contained"
                    type='submit'
                >
                    Send
                </Button>
            </form>
            
        </NiceformHookProvider>
    )
}
export function InputOutputExample(){
    return (
        <>
            <h1>Input And Output</h1>
            <p>
                Ao utilizar o <b>input</b> consigo modificar o valor de entrada do campo, 
                e ao utilizar o <b>output</b>, modifico o valor de saída no momento de envio do formulário.
            </p>
            <Input/>
            <Output/>
        </>
    )
}