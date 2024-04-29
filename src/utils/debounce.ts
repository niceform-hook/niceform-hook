export function debounce(fn, ms) {
    let timer: any = 0
    return function (this: any, ...args) {
        clearTimeout(timer)
        timer = setTimeout(fn.bind(this, ...args), ms || 0)
    }
}