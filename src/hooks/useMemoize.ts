import { useCallback, useRef } from "react";
import { ManyKeysMap } from "../utils/ManyKeysMap";

export function useMemoize(){
    const cache = useRef(new ManyKeysMap<any, any>())

    const memoize = useCallback(function memoize<T>(callback: (() => T) | T, dependencies: [key: any, ...deps: any[]]): T {
        let currentValue = cache.current.get(dependencies)
        if(!currentValue){
            if (typeof callback === 'function') {
                cache.current.set(dependencies, (callback as () => T)());
            } else {
                cache.current.set(dependencies, callback);
            }
            currentValue = cache.current.get(dependencies)
        }
        return currentValue
    }, [])
    
    return memoize
}