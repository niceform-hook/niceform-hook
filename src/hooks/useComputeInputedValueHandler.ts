import { useEffect, useRef } from "react";
import { FieldValues, UseControllerReturn } from "react-hook-form";
import { useNiceformHookContext } from "../contexts/niceform";
import { useDataRefByContext } from "./useDataRefByContext";

export function useComputeInputedValueHandler(controller: UseControllerReturn<FieldValues, string>){
    const isInputedValueRef = useRef(false)

    const name = controller.field.name
    const inputRef = useDataRefByContext(state => state.form.getField(name)?.input)
    const setValue = useNiceformHookContext(state => state.form.methods.setValue)
    const computeInputedValue: (callback: (value: any) => any) => any = (callback) => {
        const input = inputRef.current
        let value = controller.field.value
        if(!input || isInputedValueRef.current || controller.fieldState.isDirty) return;
        value = input(value)
        if(value === undefined) return;
        isInputedValueRef.current = true
        controller.field.value = value
        callback(value)
    }

    computeInputedValue(value => setTimeout(setValue, 100, name, value))

    useEffect(() => {
        computeInputedValue(value => setValue(name, value))
    }, [controller.field.value])
}