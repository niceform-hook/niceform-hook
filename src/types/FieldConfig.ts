import type { FieldValues, RegisterOptions, Validate } from "react-hook-form";
import { Field } from "./Field";

export type FieldConfig = Omit<RegisterOptions<FieldValues, string>, "setValueAs" | "valueAsNumber" | "valueAsDate" | 'validate' | 'deps'> & 
Pick<Field, 'active' | 'debounceTime' | 'enableDebounce' | 'validate' | 'input'>