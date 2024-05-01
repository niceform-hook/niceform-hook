export function unflattenJson<T extends Record<string, any> = Record<string, any>>(obj: T): Record<string, any> {
    const unflattenedObj: Record<string, any> = {};

    for (const key in obj) {
        const keys = key.split(".");
        let innerObj = unflattenedObj;

        for (let i = 0; i < keys.length - 1; i++) {
            const currentKey = keys[i];

            if (!innerObj[currentKey]) {
                innerObj[currentKey] = !isNaN(Number(keys[i + 1])) ? [] : {};
            }
            innerObj = innerObj[currentKey];
        }

        innerObj[keys.at(-1) as string] = obj[key];
    }

    return unflattenedObj;
}