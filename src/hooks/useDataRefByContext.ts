import { useRef } from "react";
import { useNiceformHookContext } from "../contexts/niceform";
import { FormConfig } from "../types/FormConfig";

export function useDataRefByContext<T>(callback: (parameters: FormConfig) => T){
    const fieldMethodsRef = useRef<T>()

    return useNiceformHookContext(state => {
        fieldMethodsRef.current = callback(state)
        return fieldMethodsRef
    })
}