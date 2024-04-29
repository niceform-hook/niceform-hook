import { useReducer } from "react";
import { AsyncErrorExample } from "./async-error-example";
import { DebounceExample } from "./debounce-example";
import { DependesOnExample } from "./depends-on-example";
import { ErrorExample } from "./error-example";
import { InputOutputExample } from "./input-output";
import { RenderWithCallbackExample } from "./render-with-callback";
import { SimpleExample } from "./simple-example";
import { TempExample } from "./temp-example";

export function Examples(){
    const [stateRandom, setStateRandom] = useReducer(() => Math.random(), 0)

    return (
        <div>
            {/* <SimpleExample/>
            <br/><br/><br/><hr/>
            <DependesOnExample/>
            <br/><br/><br/><hr/>
            <RenderWithCallbackExample/>
            <br/><br/><br/><hr/>
            <ErrorExample/>
            <br/><br/><br/><hr/>
            <AsyncErrorExample/>
            <br/><br/><br/><hr/>
            <InputOutputExample/>
            <br/><br/><br/><hr/>
            <DebounceExample/>
            <br/><br/><br/><hr/> */}
            <TempExample/>
            <br/><br/><br/><hr/>
            <button onClick={setStateRandom} style={{position: 'fixed', left: '40%', bottom: 5, width: 250}}>update - {stateRandom}</button>
        </div>
    )
}