import { Field } from "../types"

export const isFieldActive = (arg: Field | Field['active']) => {
    if(typeof arg === 'object'){
        return arg.active !== false
    }

    return arg !== false
}