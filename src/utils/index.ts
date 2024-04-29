import { Field, RenderFieldPayload, RenderFieldPayloadAsFunction } from "../types";

export function normalizeFieldPayload(
    field: RenderFieldPayload<Record<string, any>> | RenderFieldPayloadAsFunction<Record<string, any>, any>, 
    deps: Parameters<RenderFieldPayloadAsFunction<Record<string, any>, any>>[0]
) {
    if (typeof field !== 'function') return field
    return field(deps)
}

export const isFieldActive = (arg: Field | Field['active']) => {
    if(typeof arg === 'object'){
        return arg.active !== false
    }

    return arg !== false
}

export { getDependentFieldsBy } from './getDependentFieldsBy';
export { getOutputtedValues } from './getOutputtedValues';
export { debounce } from './debounce'
export { dequalLite } from './dequalLite'