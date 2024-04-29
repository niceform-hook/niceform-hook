import React, { useState } from "react";
import type { FieldValues, UseControllerReturn } from "react-hook-form";

import { useNiceformHookContext } from "../contexts/niceform";
import * as utils from '../utils'

export default function useInactiveFieldHandler(controller: UseControllerReturn<FieldValues, string>){

    const isFieldActive = useNiceformHookContext(state => {
        const field = state.form.getField(controller.field.name)
        return utils.isFieldActive(field?.active)
    })

    const [value, setValue] = useState<any>()

    if(!isFieldActive){
        controller.field = {
            ...controller.field,
            onBlur: () => null,
            onChange: (evt: React.ChangeEvent<HTMLInputElement>) => setValue(evt.target.value),
            value,
            ref: () => null
        }
    }
}