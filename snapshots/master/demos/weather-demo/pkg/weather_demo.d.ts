/* tslint:disable */
/* eslint-disable */

export function main(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly main: () => void;
    readonly slint_qt_get_widget: (a: number) => number;
    readonly send_keyboard_string_sequence: (a: number, b: number) => void;
    readonly slint_get_mocked_time: () => bigint;
    readonly slint_mock_elapsed_time: (a: bigint) => void;
    readonly slint_send_keyboard_char: (a: number, b: number, c: number) => void;
    readonly slint_send_keyboard_key_text: (a: number, b: number, c: number) => void;
    readonly slint_send_mouse_click: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen__closure__destroy__h0048bce4499818a2: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h028553e66040b7df: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h4234e91de2fa7cf5: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hd4f991ab31b7ec37: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h1a920804e7eb1d8a: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h014bd44674e44884: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h014bd44674e44884_1: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h014bd44674e44884_2: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h014bd44674e44884_3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h014bd44674e44884_4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h014bd44674e44884_5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h032b22b73a529611: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h032b22b73a529611_8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h032b22b73a529611_9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h032b22b73a529611_10: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h032b22b73a529611_11: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h032b22b73a529611_12: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h032b22b73a529611_13: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h032b22b73a529611_14: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hcc23bc2d259a6d64: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
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
