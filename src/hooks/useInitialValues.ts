import { UseFormReturn } from "react-hook-form";
import {flattenJson} from "../utils/flattenJson";

interface UseInitialValues{
    methods: UseFormReturn<any> 
    initialValues: Record<string, any>
}
export function useInitialValues(props: UseInitialValues){
    const flatternInitialValues = flattenJson(props.initialValues)

    for(const fieldName in flatternInitialValues){
        const value = flatternInitialValues[fieldName]
        if(value === undefined) continue;

        if(props.methods.getValues(fieldName) !== undefined) continue
        props.methods.register(fieldName)
        props.methods.setValue(fieldName, value)
    }
}