
import { Field } from "../types";
import {flattenJson} from "./flattenJson";
import {unflattenJson} from "./unflattenJson";

interface GetOutputtedValues{
    fields: Map<string, Field>
    values: Record<string, any>
}
export function getOutputtedValues({fields, values}: GetOutputtedValues){
    const valuesFlatterned = flattenJson(values)

    const result = [...fields.values()].reduce((obj, field) => {
        if(!field.name || !field.output || field.active === false) return obj;

        const value = valuesFlatterned[field.name]
        obj[field.name] = field.output(value)

        return obj
    }, {} as Record<string, any>)
    
    return unflattenJson({...valuesFlatterned, ...result})
}