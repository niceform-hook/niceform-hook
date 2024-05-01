import { Field } from '../types';

export function getDependentFieldsBy(name: string, fieldsToSearch: Map<string, Field>) {
    const allField = [...fieldsToSearch.values()]
    const fieldSelected = fieldsToSearch.get(name)

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