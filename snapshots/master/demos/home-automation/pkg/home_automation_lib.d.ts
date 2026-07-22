/* tslint:disable */
/* eslint-disable */

export function main(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly main: () => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___wasm_bindgen_70c58a0ac88fd192___JsValue__core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_70c58a0ac88fd192___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___js_sys_2f0e1933714f8841___Array__web_sys_b0dbad08e4607f52___features__gen_ResizeObserver__ResizeObserver______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___wasm_bindgen_70c58a0ac88fd192___JsValue______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___wasm_bindgen_70c58a0ac88fd192___JsValue______true__3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___web_sys_b0dbad08e4607f52___features__gen_InputEvent__InputEvent______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___web_sys_b0dbad08e4607f52___features__gen_InputEvent__InputEvent______true__5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___web_sys_b0dbad08e4607f52___features__gen_InputEvent__InputEvent______true__6: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___wasm_bindgen_70c58a0ac88fd192___JsValue______true__7: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___wasm_bindgen_70c58a0ac88fd192___JsValue______true__8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___web_sys_b0dbad08e4607f52___features__gen_InputEvent__InputEvent______true__9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___web_sys_b0dbad08e4607f52___features__gen_InputEvent__InputEvent______true__10: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___wasm_bindgen_70c58a0ac88fd192___JsValue______true__11: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___wasm_bindgen_70c58a0ac88fd192___JsValue______true__12: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___wasm_bindgen_70c58a0ac88fd192___JsValue______true__13: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___web_sys_b0dbad08e4607f52___features__gen_InputEvent__InputEvent______true__14: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___wasm_bindgen_70c58a0ac88fd192___JsValue______true__15: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke___core_9b3796e30d99ddb7___option__Option_web_sys_b0dbad08e4607f52___features__gen_Blob__Blob_______true_: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly wasm_bindgen_70c58a0ac88fd192___convert__closures_____invoke_______true__1_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
