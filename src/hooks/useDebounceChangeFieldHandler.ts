import { useCallback, useMemo, useState } from "react";
import { FieldValues, UseControllerReturn } from "react-hook-form";
import { debounce } from "../utils";
import { getEventValue } from "../utils/getEventValue";
import { useNiceformHookContext } from "../contexts/niceform";

export function useDebounceChangeFieldHandler(controller: UseControllerReturn<FieldValues, string>, time = 400, enabled = true){
    const [value, setValue] = useState<any>(controller.field.value)

    const debounceSubmitDefinitions = useNiceformHookContext(state => state.form.control.debounceSubmitDefinitions)
    const onChangeDebounce = useMemo(() => debounce(controller.field.onChange, time), [time, controller.field.onChange])
    const newOnChange = useCallback((evt) => {
        setValue(getEventValue(evt))
        onChangeDebounce(evt)
        debounceSubmitDefinitions.set(time)
    }, [setValue, onChangeDebounce, time])

    if(!enabled) return;
    
    controller.field.onChange = newOnChange
    controller.field.value = value
}