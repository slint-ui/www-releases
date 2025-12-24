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
  readonly wasm_bindgen__convert__closures_____invoke__h0802f944e7045645: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h087019a85ec7ea85: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h3c4edd9a3e493d62: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h1790d656f5481790: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h6c4bef3dc313225e: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h10932537b806a276: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__hfa9e0b1ae961091e: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__hfac3f4a779a2f1fd: (a: number, b: number, c: any, d: any) => void;
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
