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
  readonly slint_send_mouse_click: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h0d145676f1afea80: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h0fca5d9b73d87c7a: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h042885271792eb01: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h0743f78cffdedf76: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h172745dfe60c318b: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h2de6b8d3000abb53: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h3766c9d892cdc7be: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__hc08fa241782a8a9b: (a: number, b: number, c: any, d: any) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_exn_store: (a: number) => void;
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
