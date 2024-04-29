export type Listener<NewValue = any> = (newValue: NewValue) => void

export type ValueContext<T, NewValue> = {
    value: React.MutableRefObject<T>;
    registerListener: (listener: Listener<NewValue>) => () => boolean;
}