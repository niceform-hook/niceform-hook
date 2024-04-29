import { CreatePropsDefinition } from "./CreatePropsDefinition"
import { ErrorsControlParameters } from "./ErrorsControlParameters"

export interface ComponentDefinition<FieldProps = Record<string, any>> {
    render(args: { name: string } & FieldProps): React.ReactNode
}


export type CreateConfig<T extends CreatePropsDefinition> = {
    components: Record<unknown extends T['componentsType'] ? string : T['componentsType'], ComponentDefinition<T['fieldProps']>>
    errorsControl?: Array<
        ((parameters: ErrorsControlParameters<T['fieldProps']>) => string | undefined | boolean | void) |
        ((parameters: ErrorsControlParameters<T['fieldProps']>) => Promise<string | undefined | boolean | void>)
    >
    debounceTime?: number
    enableDebounce?: boolean
}
