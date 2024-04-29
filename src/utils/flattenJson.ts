
export default function flattenJson<T extends object = object>(obj: T): Record<string, any> {
  const flattenedObj = {} as Record<string, any>

  function flatten(innerObj: Record<string, any>, path: string) {
    for (const key in innerObj) {
      const newPath = path ? `${path}.${key}` : key;

      if (innerObj[key]?.constructor === ({}).constructor || Array.isArray(innerObj[key])) {
        flatten(innerObj[key], newPath);
      } else {
        flattenedObj[newPath] = innerObj[key];
      }
    }
  }

  flatten(obj, "");

  return flattenedObj;
}
