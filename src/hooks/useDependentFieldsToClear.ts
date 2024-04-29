import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

import { Field } from "../types";
import { getDependentFieldsBy } from "../utils/getDependentFieldsBy";
import useDataRef from "./useDataRef";

export interface UseDependentFieldsToClear {
    methods: UseFormReturn<any>
    fields: Map<string, Field>
    optionsWhenCleaning?: Partial<{
        shouldValidate: boolean;
        shouldDirty: boolean;
        shouldTouch: boolean;
        shouldCleanChain: boolean
    }>
}
export default function useDependentFieldsToClear(input: UseDependentFieldsToClear) {
    const {
        methods,
        optionsWhenCleaning
    } = input

    const dataRef = useDataRef({
        methods,
        optionsWhenCleaning
    })

    const watch = methods.watch

    useEffect(() => {
        const subscription = watch((values, { name, type }) => {
            if (name === undefined) return;

            const methods = dataRef.current.methods
            const optionsWhenCleaning = dataRef.current.optionsWhenCleaning
            const fields = input.fields
            const currentValue = methods.getValues(name)
            const shouldCleanChain = optionsWhenCleaning?.shouldCleanChain

            if (currentValue === undefined && !shouldCleanChain) return;

            const fieldsDependents = getDependentFieldsBy(fields || [], name)

            fieldsDependents.forEach(field => {

                const currentFieldValue = methods.getValues(field.name as string)

                if (!field.name || currentFieldValue === undefined) return;

                methods.setValue(field.name, null, optionsWhenCleaning)
            })

        });

        return () => subscription.unsubscribe();

    }, [watch, dataRef]);
}