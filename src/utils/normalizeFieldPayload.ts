import { RenderFieldPayload, RenderFieldPayloadAsFunction } from "../types"

export function normalizeFieldPayload(
    field: RenderFieldPayload<Record<string, any>> | RenderFieldPayloadAsFunction<Record<string, any>, any>, 
    deps: Parameters<RenderFieldPayloadAsFunction<Record<string, any>, any>>[0]
) {
    if (typeof field !== 'function') return field
    return field(deps)
}