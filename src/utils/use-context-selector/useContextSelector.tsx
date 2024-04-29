import { useContext, useEffect, useRef, useState } from "react";
import { dequalLite } from "../dequalLite";

import { ValueContext } from "./types";

export default function useContextSelector<Value, Selected>(
  context: React.Context<Value>, 
  selector: (value: Value) => Selected, 
  deepComparison = false
): Selected {
  const { value, registerListener } = useContext(context) as ValueContext<Value, Selected>;
  const selectorRef = useRef(selector);
  const [selectedValue, setSelectedValue] = useState(() =>
    selector(value.current)
  );

  const _selectedValue = useRef(selectedValue)
  _selectedValue.current = selectedValue

  useEffect(() => {
    selectorRef.current = selector;
  });

  useEffect(() => {
    
    const updateValueIfNeeded = (newValue) => {
      const newSelectedValue = selectorRef.current(newValue);

      const compare = deepComparison ? dequalLite : Object.is
      if(!compare(_selectedValue.current, newSelectedValue)){
        setSelectedValue(() => newSelectedValue);
      }
    };

    const unregisterListener = registerListener(updateValueIfNeeded);

    return unregisterListener as () => void;
  }, [registerListener, value, deepComparison]);

  return selectedValue;
}
