
import {FormConfig} from '../types/FormConfig';
import { createContext, useContextSelector } from "../utils/use-context-selector";

// ---------------------------------------------------------------------

const context = createContext<FormConfig | null>(null);

export function NiceformHookProvider({ children, ...props }: FormConfig & { children: any }) {
    return (
        <context.Provider value={props}>
            {children}
        </context.Provider>
    )
}

export function useNiceformHookContext<Selected>(callback: (parameters: FormConfig) => Selected, deepComparison = false): Selected {
    return useContextSelector(context, callback as (parameters: FormConfig | null) => Selected, deepComparison)
}