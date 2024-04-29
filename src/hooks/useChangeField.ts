import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { Field } from "../types";
import { OnChangeField } from "../types/auxiliar";

import useDataRef from "./useDataRef";

export interface UseChangeField<T extends Record<string, any> = Record<string, any>> {
    methods: UseFormReturn<any>
    fields: Map<string, Field>
    onChangeField?: OnChangeField<T>
}
export function useChangeField<T extends Record<string, any> = Record<string, any>>(props: UseChangeField<T>){
   
    const onChangeFieldRef = useDataRef(props.onChangeField)

    const watch = props.methods.watch
    const methods = props.methods

    useEffect(() => {
        const subscription = watch((values, { name, type }) => {
            if (name === undefined || !onChangeFieldRef.current) return;
            const field = props.fields.get(name)
            if(!field) return;

            const value = methods.getValues(field.name as string)

            onChangeFieldRef.current(field as Field & T, value)
        });

        return () => subscription.unsubscribe();

    }, [watch, onChangeFieldRef, methods]);
}