import React, {
    createContext as createContextOriginal,
    useEffect,
    useRef
} from "react";

import { Listener } from "./types";

function createProvider<T>(ProviderOriginal: React.Context<any>['Provider']) {
    return ({ value, children }) => {
        const valueRef = useRef<T>(value);
        const listenersRef = useRef(new Set<Listener>());
        const contextValue = useRef({
            value: valueRef,
            registerListener: (listener: Listener) => {
                listenersRef.current.add(listener);
                return () => listenersRef.current.delete(listener);
            }
        });

        useEffect(() => {
            valueRef.current = value;
            listenersRef.current.forEach((listener) => {
                listener(value);
            });
        }, [value]);

        return (
            <ProviderOriginal value={contextValue.current}>
                {children}
            </ProviderOriginal>
        );
    };
}

export default function createContext<T>(defaultValue: T) {
    const context = createContextOriginal(defaultValue);

    delete (context as Partial<typeof context>).Consumer;

    context.Provider = createProvider<T>(context.Provider) as (typeof context)['Provider']

    return context;
}
