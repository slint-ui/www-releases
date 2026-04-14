/* tslint:disable */
/* eslint-disable */

export function main(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly main: () => void;
    readonly send_keyboard_string_sequence: (a: number, b: number) => void;
    readonly slint_get_mocked_time: () => bigint;
    readonly slint_mock_elapsed_time: (a: bigint) => void;
    readonly slint_send_keyboard_char: (a: number, b: number, c: number) => void;
    readonly slint_send_keyboard_key_text: (a: number, b: number, c: number) => void;
    readonly slint_send_mouse_click: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h30b56bb1e1dcc51c: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h9557e4099a2a288a: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h14c32a04881fdf7d: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h14c32a04881fdf7d_3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h285af8b4b4de910c: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h285af8b4b4de910c_5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h285af8b4b4de910c_6: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h14c32a04881fdf7d_7: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h14c32a04881fdf7d_8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h285af8b4b4de910c_9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h285af8b4b4de910c_10: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h14c32a04881fdf7d_11: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h14c32a04881fdf7d_12: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h14c32a04881fdf7d_13: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h285af8b4b4de910c_14: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h14c32a04881fdf7d_15: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hc70d047c253b464d: (a: number, b: number) => void;
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
