
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { CreateConfig, CreatePropsDefinition, Field, RenderField, RenderFields, UseFormParameters } from '.';

export interface FormConfig<Form extends CreatePropsDefinition = CreatePropsDefinition, TFieldValues extends FieldValues = FieldValues>{
    form: {
        renderField: RenderField<Form['fieldProps'], TFieldValues>
        renderFields: RenderFields<Form['fieldProps'], TFieldValues>
        methods: UseFormReturn<TFieldValues>
        memoize<T>(callback: () => T, dependencies: [key: any, ...deps: any[]]): T
        getField(name: string): Field<Form['fieldProps'], TFieldValues> | undefined
        control: {
            readonly errorsControl: CreateConfig<Form>['errorsControl']
            readonly fieldsRegistered: Map<string, Field<Form['fieldProps'], TFieldValues>>
            readonly parameters: UseFormParameters<Form, TFieldValues> | undefined
            readonly config: CreateConfig<Form>
        }
    }
}