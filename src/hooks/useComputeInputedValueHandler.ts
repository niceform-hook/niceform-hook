import { useEffect } from "react";
import { FieldValues, UseControllerReturn } from "react-hook-form";
import { useNiceformHookContext } from "../contexts/niceform";
import { useDataRefByContext } from "./useDataRefByContext";

export function useComputeInputedValueHandler(controller: UseControllerReturn<FieldValues, string>){
    
    const name = controller.field.name
    const inputRef = useDataRefByContext(state => state.form.getField(name)?.input)
    const setValue = useNiceformHookContext(state => state.form.methods.setValue);
    const fieldsInputedCalled = useNiceformHookContext(state => state.form.control.fieldsInputedCalled)

    const isInputedValueRef = fieldsInputedCalled.has(name)
    const computeInputedValue: (callback: (value: any) => any) => any = (callback) => {
        const input = inputRef.current
        let value = controller.field.value
        if(!input || isInputedValueRef || controller.fieldState.isDirty) return;
        value = input(value)
        if(value === undefined) return;
        fieldsInputedCalled.add(name)
        controller.field.value = value
        callback(value)
    }

    computeInputedValue(value => setTimeout(setValue, 100, name, value))

    const value = controller.field.value
    useEffect(() => {
        computeInputedValue(value => setValue(name, value))
    }, [value])
}