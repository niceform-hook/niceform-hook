export function debounce<T extends (this: any, ...args) => any>(fn: T, ms) {
    let timer: any = 0
    return function (this: any, ...args) {
        clearTimeout(timer)
        timer = setTimeout(fn.bind(this, ...args), ms || 0)
    } as T
}

export function dynamicDebounce<T extends (this: any, ...args) => any>() {
    let timer: any = 0
    return function (this: any, fn: T, ms: number, ...args) {
        clearTimeout(timer)
        timer = setTimeout(fn.bind(this, args), ms || 0)
    } as T
}