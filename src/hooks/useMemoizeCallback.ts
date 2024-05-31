import { useCallback, useRef } from "react";
import { ManyKeysMap } from "../utils/ManyKeysMap";

export function useMemoizeCallback(){
    const cache = useRef(new ManyKeysMap<any, any>())

    const memoizeCallback = useCallback(function memoizeCallback<T extends () => any>(callback: T, dependencies: [key: any, ...deps: any[]]): T {
        let currentValue = cache.current.get(dependencies)
        if(!currentValue){
            cache.current.set(dependencies, callback);
            currentValue = cache.current.get(dependencies)
        }
        return currentValue
    }, [])
    
    return memoizeCallback
}