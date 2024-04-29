import { Field } from '../types';

export function getDependentFieldsBy(fields: Map<string, Field>, name: string) {
    const allField = [...fields.values()]
    const fieldSelected = fields.get(name)

    if (!fieldSelected) return []

    const fieldsToClean = allField.reduce<Field[]>((collection, field) => {
        if (
            fieldSelected.name && 
            field.dependsOnToClear && 
            [field.dependsOnToClear].flat().includes(fieldSelected.name) && 
            field.name !== fieldSelected.name
        ) {
            collection.push(field)
        }
        return collection
    }, [])

    return fieldsToClean

}