
import { FormConfig} from '../types/FormConfig';
import { createContext, useContextSelector } from "../utils/use-context-selector";

// ---------------------------------------------------------------------
type FormConfigWithDefinition = FormConfig<{fieldProps: Record<string, any>}, any>

const context = createContext<FormConfigWithDefinition | null>(null);

export function NiceformHookProvider({ children, ...props }: FormConfigWithDefinition & { children: any }) {
    return (
        <context.Provider value={props}>
            {children}
        </context.Provider>
    )
}

export function useNiceformHookContext<Selected>(callback: (parameters: FormConfigWithDefinition) => Selected, deepComparison = false): Selected {
    return useContextSelector(context, callback as (parameters: FormConfigWithDefinition | null) => Selected, deepComparison)
}