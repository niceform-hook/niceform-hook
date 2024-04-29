import { useRef } from "react";

export default function useDataRef<T>(data: T){
    const ref = useRef(data)
    ref.current = data

    return ref
}