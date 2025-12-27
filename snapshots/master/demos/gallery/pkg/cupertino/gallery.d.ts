/* tslint:disable */
/* eslint-disable */

export function load_font_from_bytes(font_data: Uint8Array): void;

export function main(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly load_font_from_bytes: (a: number, b: number) => [number, number];
  readonly main: () => void;
  readonly slint_qt_get_widget: (a: number) => number;
  readonly send_keyboard_string_sequence: (a: number, b: number) => void;
  readonly slint_get_mocked_time: () => bigint;
  readonly slint_mock_elapsed_time: (a: bigint) => void;
  readonly slint_send_keyboard_char: (a: number, b: number, c: number) => void;
  readonly slint_send_mouse_click: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h01871b8a0cdee5bb: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h03115ba376c3b650: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h1de9348f8133716e: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h392610c061c5b9db: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h2e3dbebd3c22350d: (a: number, b: number, c: any, d: any) => void;
  readonly wasm_bindgen__convert__closures_____invoke__hc67ee8da96be258c: (a: number, b: number) => void;
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
