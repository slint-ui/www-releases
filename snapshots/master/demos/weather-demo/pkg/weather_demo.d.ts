/* tslint:disable */
/* eslint-disable */

export function main(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly main: () => void;
    readonly wasm_bindgen__convert__closures_____invoke__h087a5915b30c647f: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h43ee0e60d8fb4f12: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h11f0fd0c20dc40a9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h11f0fd0c20dc40a9_3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0bd68685da4d38bb: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0bd68685da4d38bb_5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0bd68685da4d38bb_6: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h11f0fd0c20dc40a9_7: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h11f0fd0c20dc40a9_8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0bd68685da4d38bb_9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0bd68685da4d38bb_10: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h11f0fd0c20dc40a9_11: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h11f0fd0c20dc40a9_12: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h11f0fd0c20dc40a9_13: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0bd68685da4d38bb_14: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h11f0fd0c20dc40a9_15: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hbb6106a66fa52578: (a: number, b: number) => void;
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
