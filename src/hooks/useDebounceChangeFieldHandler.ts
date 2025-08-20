import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FieldValues, UseControllerReturn } from "react-hook-form";
import { debounce } from "../utils";
import { getEventValue } from "../utils/getEventValue";
import { useNiceformHookContext } from "../contexts/niceform";

export function useDebounceChangeFieldHandler(controller: UseControllerReturn<FieldValues, string>, time = 400, enabled = true){
    const [value, setValue] = useState<any>(controller.field.value)
    const fieldOnchange = useRef(controller.field.onChange)
    const canExternalUpdate = useRef(true)

    const debounceSubmitDefinitions = useNiceformHookContext(state => state.form.control.debounceSubmitDefinitions)

    const onChangeDebounce = useMemo(() => debounce((...args) => {
        canExternalUpdate.current = true
        fieldOnchange.current(...args)
    }, time), [time])

    const newOnChange = useCallback((evt) => {
        canExternalUpdate.current = false
        const value = getEventValue(evt)
        setValue(value)
        onChangeDebounce(value)
        debounceSubmitDefinitions.set(time)
    }, [setValue, onChangeDebounce, time])

    const controlledValue = controller.field.value
    useEffect(() => {
        if(canExternalUpdate.current && !Object.is(value, controlledValue)){
            setValue(controlledValue)
            controller.field.value = controlledValue
        }
    }, [controlledValue])
    
    if(!enabled) return;

    controller.field.onChange = newOnChange
    controller.field.value = value
}