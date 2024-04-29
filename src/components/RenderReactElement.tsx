
import { memo } from "react";
import type { UseControllerReturn } from 'react-hook-form';
import { useField } from "../useField";

interface RenderReactElementProps {
    name: string
    render(hook: UseControllerReturn): React.ReactElement;
}

export const RenderReactElement = memo<RenderReactElementProps>(function RenderReactElement(props) {
    const hook = useField(props.name)
    return props.render(hook)
})

export const renderReactElement = (props: RenderReactElementProps) => <RenderReactElement {...props}/>