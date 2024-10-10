let wasm;

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let WASM_VECTOR_LEN = 0;

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => {
    wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b)
});

function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
}
function __wbg_adapter_26(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4d3573f4fa74f8f3(arg0, arg1, addHeapObject(arg2));
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
                CLOSURE_DTORS.unregister(state);
            } else {
                state.a = a;
            }
        }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
}
function __wbg_adapter_37(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4c39ad7cebedf955(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_40(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9923a5675d7ca3ae(arg0, arg1);
}

function __wbg_adapter_53(arg0, arg1, arg2, arg3) {
    wasm._dyn_core__ops__function__FnMut__A_B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcf9c322d2af28de2(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

export function main() {
    wasm.main();
}

let cachedFloat32ArrayMemory0 = null;

function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

let cachedUint8ClampedArrayMemory0 = null;

function getUint8ClampedArrayMemory0() {
    if (cachedUint8ClampedArrayMemory0 === null || cachedUint8ClampedArrayMemory0.byteLength === 0) {
        cachedUint8ClampedArrayMemory0 = new Uint8ClampedArray(wasm.memory.buffer);
    }
    return cachedUint8ClampedArrayMemory0;
}

function getClampedArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ClampedArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

const __wbindgen_enum_PremultiplyAlpha = ["none", "premultiply", "default"];

const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];

const __wbindgen_enum_VisibilityState = ["hidden", "visible"];

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_bindAttribLocation_d3a5c000f51fe505 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).bindAttribLocation(getObject(arg1), arg2 >>> 0, getStringFromWasm0(arg3, arg4));
    };
    imports.wbg.__wbg_bindAttribLocation_67861833b02d4929 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).bindAttribLocation(getObject(arg1), arg2 >>> 0, getStringFromWasm0(arg3, arg4));
    };
    imports.wbg.__wbg_uniform2fv_1bbf9ef846083ad5 = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).uniform2fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
    };
    imports.wbg.__wbg_uniform2fv_f439e3593a0dc26d = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).uniform2fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
    };
    imports.wbg.__wbg_deleteFramebuffer_80c590b9f24a910f = function(arg0, arg1) {
        getObject(arg0).deleteFramebuffer(getObject(arg1));
    };
    imports.wbg.__wbg_deleteFramebuffer_35f4ac53e178bcbb = function(arg0, arg1) {
        getObject(arg0).deleteFramebuffer(getObject(arg1));
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_deleteRenderbuffer_0ba7b32137ed2d03 = function(arg0, arg1) {
        getObject(arg0).deleteRenderbuffer(getObject(arg1));
    };
    imports.wbg.__wbg_deleteRenderbuffer_f78c4b633123476a = function(arg0, arg1) {
        getObject(arg0).deleteRenderbuffer(getObject(arg1));
    };
    imports.wbg.__wbg_width_03de2bdf17a83e78 = function(arg0) {
        const ret = getObject(arg0).width;
        return ret;
    };
    imports.wbg.__wbg_height_2029b339b1548588 = function(arg0) {
        const ret = getObject(arg0).height;
        return ret;
    };
    imports.wbg.__wbg_createTexture_a7227f3c187469aa = function(arg0) {
        const ret = getObject(arg0).createTexture();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_createTexture_3e21d4beea53dd45 = function(arg0) {
        const ret = getObject(arg0).createTexture();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_getError_25de533e6db5c9ba = function(arg0) {
        const ret = getObject(arg0).getError();
        return ret;
    };
    imports.wbg.__wbg_getError_d578b69628fe6579 = function(arg0) {
        const ret = getObject(arg0).getError();
        return ret;
    };
    imports.wbg.__wbg_createFramebuffer_be883e3d7fa88725 = function(arg0) {
        const ret = getObject(arg0).createFramebuffer();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_createFramebuffer_8c63f3184d9bc62b = function(arg0) {
        const ret = getObject(arg0).createFramebuffer();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_framebufferTexture2D_000d135d21e3c299 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
        getObject(arg0).framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4), arg5);
    };
    imports.wbg.__wbg_framebufferTexture2D_59905ad474d14da5 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
        getObject(arg0).framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4), arg5);
    };
    imports.wbg.__wbg_createRenderbuffer_b5bcbeec022e5b09 = function(arg0) {
        const ret = getObject(arg0).createRenderbuffer();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_createRenderbuffer_3df49f801fcd4f33 = function(arg0) {
        const ret = getObject(arg0).createRenderbuffer();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_renderbufferStorage_9fad3057f9b278f2 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
    };
    imports.wbg.__wbg_renderbufferStorage_da953567265f57d9 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
    };
    imports.wbg.__wbg_framebufferRenderbuffer_19a94e5ce33d7049 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4));
    };
    imports.wbg.__wbg_framebufferRenderbuffer_e304184c42b59cd7 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4));
    };
    imports.wbg.__wbg_checkFramebufferStatus_f6a7bedce9320e1c = function(arg0, arg1) {
        const ret = getObject(arg0).checkFramebufferStatus(arg1 >>> 0);
        return ret;
    };
    imports.wbg.__wbg_checkFramebufferStatus_2216a1c4822627d6 = function(arg0, arg1) {
        const ret = getObject(arg0).checkFramebufferStatus(arg1 >>> 0);
        return ret;
    };
    imports.wbg.__wbg_scissor_2fdbbde07ba9a14c = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).scissor(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbg_scissor_41e042914d201952 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).scissor(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbg_clearColor_b28b8555cbf3084c = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).clearColor(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbg_clearColor_57dce8c716a25190 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).clearColor(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbg_clear_7c7c7ff6cf094c5b = function(arg0, arg1) {
        getObject(arg0).clear(arg1 >>> 0);
    };
    imports.wbg.__wbg_clear_c6965f56f376c307 = function(arg0, arg1) {
        getObject(arg0).clear(arg1 >>> 0);
    };
    imports.wbg.__wbg_uniform4fv_8eff4bad601b74b2 = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).uniform4fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
    };
    imports.wbg.__wbg_uniform4fv_12ecc021d3124792 = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).uniform4fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
    };
    imports.wbg.__wbg_deleteTexture_2a13c5e90b0342ed = function(arg0, arg1) {
        getObject(arg0).deleteTexture(getObject(arg1));
    };
    imports.wbg.__wbg_deleteTexture_9ead093111f9875b = function(arg0, arg1) {
        getObject(arg0).deleteTexture(getObject(arg1));
    };
    imports.wbg.__wbg_getSupportedExtensions_2db9b7de699083bc = function(arg0) {
        const ret = getObject(arg0).getSupportedExtensions();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_length_1851b9eeee6d3da2 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_get_d9d3985ea4f2d71a = function(arg0, arg1) {
        const ret = getObject(arg0)[arg1 >>> 0];
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_getParameter_83c3ffb804ec6da4 = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).getParameter(arg1 >>> 0);
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_createShader_942b9d2b0d8f6453 = function(arg0, arg1) {
        const ret = getObject(arg0).createShader(arg1 >>> 0);
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_createShader_94d7142ee3d7e7d0 = function(arg0, arg1) {
        const ret = getObject(arg0).createShader(arg1 >>> 0);
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_deleteShader_31b03014bd44ab6d = function(arg0, arg1) {
        getObject(arg0).deleteShader(getObject(arg1));
    };
    imports.wbg.__wbg_deleteShader_78cd2119cf33f910 = function(arg0, arg1) {
        getObject(arg0).deleteShader(getObject(arg1));
    };
    imports.wbg.__wbg_shaderSource_23200664cae9978e = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
    };
    imports.wbg.__wbg_shaderSource_ddb5bb281a59fa07 = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
    };
    imports.wbg.__wbg_compileShader_1a3ddbe12da0bfe3 = function(arg0, arg1) {
        getObject(arg0).compileShader(getObject(arg1));
    };
    imports.wbg.__wbg_compileShader_6c4bdd11f600b24b = function(arg0, arg1) {
        getObject(arg0).compileShader(getObject(arg1));
    };
    imports.wbg.__wbg_getShaderParameter_d3152c6546e97eec = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getShaderParameter_087abfc2b6303f1c = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbg_getShaderInfoLog_e1199e4f2d91796d = function(arg0, arg1, arg2) {
        const ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_getShaderInfoLog_1644609685e99c15 = function(arg0, arg1, arg2) {
        const ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_createProgram_6f74d64f6787b0a1 = function(arg0) {
        const ret = getObject(arg0).createProgram();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_createProgram_1ce878ec2fbaaed8 = function(arg0) {
        const ret = getObject(arg0).createProgram();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_deleteProgram_4cda24a94b530bd4 = function(arg0, arg1) {
        getObject(arg0).deleteProgram(getObject(arg1));
    };
    imports.wbg.__wbg_deleteProgram_81d56e453526972b = function(arg0, arg1) {
        getObject(arg0).deleteProgram(getObject(arg1));
    };
    imports.wbg.__wbg_attachShader_4dd2f46809b33e8b = function(arg0, arg1, arg2) {
        getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
    };
    imports.wbg.__wbg_attachShader_0bbe2ecb5eacf4eb = function(arg0, arg1, arg2) {
        getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
    };
    imports.wbg.__wbg_detachShader_f2ed0489213c8d1b = function(arg0, arg1, arg2) {
        getObject(arg0).detachShader(getObject(arg1), getObject(arg2));
    };
    imports.wbg.__wbg_detachShader_c7ec574f31b0494b = function(arg0, arg1, arg2) {
        getObject(arg0).detachShader(getObject(arg1), getObject(arg2));
    };
    imports.wbg.__wbg_linkProgram_f263087458df5bcf = function(arg0, arg1) {
        getObject(arg0).linkProgram(getObject(arg1));
    };
    imports.wbg.__wbg_linkProgram_3a4e5741c614b08b = function(arg0, arg1) {
        getObject(arg0).linkProgram(getObject(arg1));
    };
    imports.wbg.__wbg_getProgramParameter_3f4c908fd8204f6e = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getProgramParameter_6d0451d86ec46b38 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getProgramInfoLog_9e4174b8ee854c89 = function(arg0, arg1, arg2) {
        const ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_getProgramInfoLog_53417c334c67a173 = function(arg0, arg1, arg2) {
        const ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_useProgram_0b78110a61f5819f = function(arg0, arg1) {
        getObject(arg0).useProgram(getObject(arg1));
    };
    imports.wbg.__wbg_useProgram_60aa97e121e67509 = function(arg0, arg1) {
        getObject(arg0).useProgram(getObject(arg1));
    };
    imports.wbg.__wbg_createBuffer_d352466c4321fe9c = function(arg0) {
        const ret = getObject(arg0).createBuffer();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_createBuffer_e8b36a64e8cee067 = function(arg0) {
        const ret = getObject(arg0).createBuffer();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_bindBuffer_27b02760e5c5c1b0 = function(arg0, arg1, arg2) {
        getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
    };
    imports.wbg.__wbg_bindBuffer_3513acd59044f68b = function(arg0, arg1, arg2) {
        getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
    };
    imports.wbg.__wbg_bindFramebuffer_008c9d882e3b00c6 = function(arg0, arg1, arg2) {
        getObject(arg0).bindFramebuffer(arg1 >>> 0, getObject(arg2));
    };
    imports.wbg.__wbg_bindFramebuffer_44b5464b74fe7496 = function(arg0, arg1, arg2) {
        getObject(arg0).bindFramebuffer(arg1 >>> 0, getObject(arg2));
    };
    imports.wbg.__wbg_bindRenderbuffer_624219e334d42414 = function(arg0, arg1, arg2) {
        getObject(arg0).bindRenderbuffer(arg1 >>> 0, getObject(arg2));
    };
    imports.wbg.__wbg_bindRenderbuffer_389d8b3c138eca20 = function(arg0, arg1, arg2) {
        getObject(arg0).bindRenderbuffer(arg1 >>> 0, getObject(arg2));
    };
    imports.wbg.__wbg_createVertexArrayOES_19721ec329fbc45f = function(arg0) {
        const ret = getObject(arg0).createVertexArrayOES();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_createVertexArray_51b8c48364df6c89 = function(arg0) {
        const ret = getObject(arg0).createVertexArray();
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_deleteVertexArray_b4b850ca89d41830 = function(arg0, arg1) {
        getObject(arg0).deleteVertexArray(getObject(arg1));
    };
    imports.wbg.__wbg_deleteVertexArrayOES_11934bd049f6eb72 = function(arg0, arg1) {
        getObject(arg0).deleteVertexArrayOES(getObject(arg1));
    };
    imports.wbg.__wbg_bindVertexArray_6fc30bb60229c732 = function(arg0, arg1) {
        getObject(arg0).bindVertexArray(getObject(arg1));
    };
    imports.wbg.__wbg_bindVertexArrayOES_254f2c843080aae9 = function(arg0, arg1) {
        getObject(arg0).bindVertexArrayOES(getObject(arg1));
    };
    imports.wbg.__wbg_pixelStorei_13cd1482a0180810 = function(arg0, arg1, arg2) {
        getObject(arg0).pixelStorei(arg1 >>> 0, arg2);
    };
    imports.wbg.__wbg_pixelStorei_9ea07643013118e5 = function(arg0, arg1, arg2) {
        getObject(arg0).pixelStorei(arg1 >>> 0, arg2);
    };
    imports.wbg.__wbg_bufferData_4af6143e9adff400 = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
    };
    imports.wbg.__wbg_bufferData_5287f90c446291a5 = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
    };
    imports.wbg.__wbg_deleteBuffer_bc9c43c638a1021c = function(arg0, arg1) {
        getObject(arg0).deleteBuffer(getObject(arg1));
    };
    imports.wbg.__wbg_deleteBuffer_9f6c75398533894e = function(arg0, arg1) {
        getObject(arg0).deleteBuffer(getObject(arg1));
    };
    imports.wbg.__wbg_disable_4b81892afa028a23 = function(arg0, arg1) {
        getObject(arg0).disable(arg1 >>> 0);
    };
    imports.wbg.__wbg_disable_0ca42d122332998a = function(arg0, arg1) {
        getObject(arg0).disable(arg1 >>> 0);
    };
    imports.wbg.__wbg_disableVertexAttribArray_67617f1b21287aac = function(arg0, arg1) {
        getObject(arg0).disableVertexAttribArray(arg1 >>> 0);
    };
    imports.wbg.__wbg_disableVertexAttribArray_b307bb042f0b8e01 = function(arg0, arg1) {
        getObject(arg0).disableVertexAttribArray(arg1 >>> 0);
    };
    imports.wbg.__wbg_drawArrays_542118b59ca5727c = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);
    };
    imports.wbg.__wbg_drawArrays_71cc118b10f413a1 = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);
    };
    imports.wbg.__wbg_enable_7e4582f274ec1f58 = function(arg0, arg1) {
        getObject(arg0).enable(arg1 >>> 0);
    };
    imports.wbg.__wbg_enable_aaf9f58ee17f4fa1 = function(arg0, arg1) {
        getObject(arg0).enable(arg1 >>> 0);
    };
    imports.wbg.__wbg_enableVertexAttribArray_7f1852d2292b0a6f = function(arg0, arg1) {
        getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
    };
    imports.wbg.__wbg_enableVertexAttribArray_4068bd8b7c1d786d = function(arg0, arg1) {
        getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
    };
    imports.wbg.__wbg_getUniformLocation_36e2564f6dbd6e3a = function(arg0, arg1, arg2, arg3) {
        const ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_getUniformLocation_ea9edddfe7289b90 = function(arg0, arg1, arg2, arg3) {
        const ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_generateMipmap_bc1b67695b99220e = function(arg0, arg1) {
        getObject(arg0).generateMipmap(arg1 >>> 0);
    };
    imports.wbg.__wbg_generateMipmap_c08793cf8d633ad5 = function(arg0, arg1) {
        getObject(arg0).generateMipmap(arg1 >>> 0);
    };
    imports.wbg.__wbg_texImage2D_7348081cba28c6ac = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
    }, arguments) };
    imports.wbg.__wbg_texImage2D_78d5ea08ed808bc2 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
    }, arguments) };
    imports.wbg.__wbg_uniform1i_4e9b4a0542c9d46f = function(arg0, arg1, arg2) {
        getObject(arg0).uniform1i(getObject(arg1), arg2);
    };
    imports.wbg.__wbg_uniform1i_04243e28e0ebc68b = function(arg0, arg1, arg2) {
        getObject(arg0).uniform1i(getObject(arg1), arg2);
    };
    imports.wbg.__wbg_uniform1f_29347b1368633df9 = function(arg0, arg1, arg2) {
        getObject(arg0).uniform1f(getObject(arg1), arg2);
    };
    imports.wbg.__wbg_uniform1f_3a905eadd4c4b749 = function(arg0, arg1, arg2) {
        getObject(arg0).uniform1f(getObject(arg1), arg2);
    };
    imports.wbg.__wbg_colorMask_9fd8ddd76576042d = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
    };
    imports.wbg.__wbg_colorMask_cc4a14e34892fc47 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
    };
    imports.wbg.__wbg_bindTexture_9435d30a8fcd6894 = function(arg0, arg1, arg2) {
        getObject(arg0).bindTexture(arg1 >>> 0, getObject(arg2));
    };
    imports.wbg.__wbg_bindTexture_b12a865a686cae54 = function(arg0, arg1, arg2) {
        getObject(arg0).bindTexture(arg1 >>> 0, getObject(arg2));
    };
    imports.wbg.__wbg_activeTexture_d369c8280750cbfe = function(arg0, arg1) {
        getObject(arg0).activeTexture(arg1 >>> 0);
    };
    imports.wbg.__wbg_activeTexture_ad895dc59117fcae = function(arg0, arg1) {
        getObject(arg0).activeTexture(arg1 >>> 0);
    };
    imports.wbg.__wbg_texParameteri_e57cab85e5a1dede = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
    };
    imports.wbg.__wbg_texParameteri_2ae00bae4a655ffa = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
    };
    imports.wbg.__wbg_texSubImage2D_c5635f160c37a8ce = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
    }, arguments) };
    imports.wbg.__wbg_texSubImage2D_2bd5f192dab9d22b = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
    }, arguments) };
    imports.wbg.__wbg_texSubImage2D_34662637aec90929 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_vertexAttribPointer_95818ad07b9065fd = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
    };
    imports.wbg.__wbg_vertexAttribPointer_2d937c08c3956ea5 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
    };
    imports.wbg.__wbg_viewport_8abac0ce44985575 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).viewport(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbg_viewport_1f45305c78730526 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).viewport(arg1, arg2, arg3, arg4);
    };
    imports.wbg.__wbg_stencilFunc_1465572c2f0352da = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).stencilFunc(arg1 >>> 0, arg2, arg3 >>> 0);
    };
    imports.wbg.__wbg_stencilFunc_f0614038aa389ad3 = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).stencilFunc(arg1 >>> 0, arg2, arg3 >>> 0);
    };
    imports.wbg.__wbg_stencilMask_123630b517706a1d = function(arg0, arg1) {
        getObject(arg0).stencilMask(arg1 >>> 0);
    };
    imports.wbg.__wbg_stencilMask_5acd93bba7cd010e = function(arg0, arg1) {
        getObject(arg0).stencilMask(arg1 >>> 0);
    };
    imports.wbg.__wbg_stencilOp_eca7ea9ff1f1eac1 = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).stencilOp(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
    };
    imports.wbg.__wbg_stencilOp_c8f2bfcb9abf878d = function(arg0, arg1, arg2, arg3) {
        getObject(arg0).stencilOp(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
    };
    imports.wbg.__wbg_stencilOpSeparate_61d6e6a2061998c9 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
    };
    imports.wbg.__wbg_stencilOpSeparate_6218c48e32d24ff1 = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
    };
    imports.wbg.__wbg_devicePixelRatio_93e99bb46ab18ff0 = function(arg0) {
        const ret = getObject(arg0).devicePixelRatio;
        return ret;
    };
    imports.wbg.__wbg_document_d405a2b2abd26aaf = function(arg0) {
        const ret = getObject(arg0).document;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_getElementById_525880422441509b = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_HtmlCanvasElement_5eba7dfde602fe3f = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof HTMLCanvasElement;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_setwidth_d6747440d200ef20 = function(arg0, arg1) {
        getObject(arg0).width = arg1 >>> 0;
    };
    imports.wbg.__wbg_setheight_dc33015fc8621581 = function(arg0, arg1) {
        getObject(arg0).height = arg1 >>> 0;
    };
    imports.wbg.__wbg_clientWidth_b9aef2f1a0d81663 = function(arg0) {
        const ret = getObject(arg0).clientWidth;
        return ret;
    };
    imports.wbg.__wbg_clientHeight_02a7736aa58e9a19 = function(arg0) {
        const ret = getObject(arg0).clientHeight;
        return ret;
    };
    imports.wbg.__wbg_dataset_69da57a67c6cd427 = function(arg0) {
        const ret = getObject(arg0).dataset;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_get_ee9bd82ecb70339f = function(arg0, arg1, arg2, arg3) {
        const ret = getObject(arg1)[getStringFromWasm0(arg2, arg3)];
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_instanceof_HtmlInputElement_bde63bddce063fdd = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof HTMLInputElement;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_style_fb9455966d22b91d = function(arg0) {
        const ret = getObject(arg0).style;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_offsetLeft_c62d8bfed46a4d7c = function(arg0) {
        const ret = getObject(arg0).offsetLeft;
        return ret;
    };
    imports.wbg.__wbg_offsetTop_385a42760669e52c = function(arg0) {
        const ret = getObject(arg0).offsetTop;
        return ret;
    };
    imports.wbg.__wbg_offsetWidth_441b28d7441ad7f4 = function(arg0) {
        const ret = getObject(arg0).offsetWidth;
        return ret;
    };
    imports.wbg.__wbg_offsetHeight_0ec42b8b4883533e = function(arg0) {
        const ret = getObject(arg0).offsetHeight;
        return ret;
    };
    imports.wbg.__wbg_before_77541de3c6cdb7d6 = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).before(getObject(arg1));
    }, arguments) };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_data_fcec3cb26240b8ea = function(arg0, arg1) {
        const ret = getObject(arg1).data;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_setvalue_6d820a706bf65e02 = function(arg0, arg1, arg2) {
        getObject(arg0).value = getStringFromWasm0(arg1, arg2);
    };
    imports.wbg.__wbg_data_6a052a0a78b9adf7 = function(arg0, arg1) {
        const ret = getObject(arg1).data;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_isComposing_86829c04f9376fba = function(arg0) {
        const ret = getObject(arg0).isComposing;
        return ret;
    };
    imports.wbg.__wbg_inputType_fa56bdaf93c85231 = function(arg0, arg1) {
        const ret = getObject(arg1).inputType;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_preventDefault_a7a159c2cb386a4e = function(arg0) {
        getObject(arg0).preventDefault();
    };
    imports.wbg.__wbg_isComposing_cc79a211edfab83f = function(arg0) {
        const ret = getObject(arg0).isComposing;
        return ret;
    };
    imports.wbg.__wbg_key_590f70ac8b4ddbed = function(arg0, arg1) {
        const ret = getObject(arg1).key;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_shiftKey_673a12b1a1dace53 = function(arg0) {
        const ret = getObject(arg0).shiftKey;
        return ret;
    };
    imports.wbg.__wbg_ctrlKey_2a1ef38c95a971bf = function(arg0) {
        const ret = getObject(arg0).ctrlKey;
        return ret;
    };
    imports.wbg.__wbg_altKey_19c858bfa905a90c = function(arg0) {
        const ret = getObject(arg0).altKey;
        return ret;
    };
    imports.wbg.__wbg_getModifierState_aaaf6bd6ae27caa5 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).getModifierState(getStringFromWasm0(arg1, arg2));
        return ret;
    };
    imports.wbg.__wbg_repeat_61c690196f64be95 = function(arg0) {
        const ret = getObject(arg0).repeat;
        return ret;
    };
    imports.wbg.__wbg_clipboardData_2d2b82ad3ab9021a = function(arg0) {
        const ret = getObject(arg0).clipboardData;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_getData_46198019cd7a5fab = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = getObject(arg1).getData(getStringFromWasm0(arg2, arg3));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_new_1eeda863d3a41cf5 = function() {
        const ret = new Object();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_setstencil_ae293f1bf285db91 = function(arg0, arg1) {
        getObject(arg0).stencil = arg1 !== 0;
    };
    imports.wbg.__wbg_setantialias_bbaf0b405c36c401 = function(arg0, arg1) {
        getObject(arg0).antialias = arg1 !== 0;
    };
    imports.wbg.__wbg_getContext_60f257f8186523ab = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2), getObject(arg3));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_instanceof_WebGl2RenderingContext_bc28956866967e49 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof WebGL2RenderingContext;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_instanceof_CanvasRenderingContext2d_e6697dc6b2477987 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof CanvasRenderingContext2D;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_setfont_d5e5fb67fab47f55 = function(arg0, arg1, arg2) {
        getObject(arg0).font = getStringFromWasm0(arg1, arg2);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_setfillStyle_614763b4e4969914 = function(arg0, arg1) {
        getObject(arg0).fillStyle = getObject(arg1);
    };
    imports.wbg.__wbg_id_a49f1640a73fc400 = function(arg0, arg1) {
        const ret = getObject(arg1).id;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_setwidth_8de6e0c0038f962c = function(arg0, arg1) {
        getObject(arg0).width = arg1 >>> 0;
    };
    imports.wbg.__wbg_setheight_9a9df12a67188c4f = function(arg0, arg1) {
        getObject(arg0).height = arg1 >>> 0;
    };
    imports.wbg.__wbg_newwithu8clampedarray_5668fab340c0a1fe = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = new ImageData(getClampedArrayU8FromWasm0(arg0, arg1), arg2 >>> 0);
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_putImageData_d4004e912057dfdd = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        getObject(arg0).putImageData(getObject(arg1), arg2, arg3, arg4, arg5, arg6, arg7);
    }, arguments) };
    imports.wbg.__wbg_putImageData_8ed904104a5ebc1c = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        getObject(arg0).putImageData(getObject(arg1), arg2, arg3, arg4, arg5, arg6, arg7);
    }, arguments) };
    imports.wbg.__wbg_querySelector_d807a8104b46af13 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).querySelector(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_getContext_3d27987e3935aced = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_instanceof_OffscreenCanvasRenderingContext2d_c38f275a22c4762c = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof OffscreenCanvasRenderingContext2D;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_naturalWidth_ddb8f0e7a4641611 = function(arg0) {
        const ret = getObject(arg0).naturalWidth;
        return ret;
    };
    imports.wbg.__wbg_naturalHeight_08e10369534a1aef = function(arg0) {
        const ret = getObject(arg0).naturalHeight;
        return ret;
    };
    imports.wbg.__wbg_currentSrc_ee909dd9c4b55753 = function(arg0, arg1) {
        const ret = getObject(arg1).currentSrc;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_log_2f54632e0e18c089 = function(arg0, arg1) {
        console.log(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_cullFace_e8c1b039a95ba6e2 = function(arg0, arg1) {
        getObject(arg0).cullFace(arg1 >>> 0);
    };
    imports.wbg.__wbg_cullFace_0b3c957039a77ffe = function(arg0, arg1) {
        getObject(arg0).cullFace(arg1 >>> 0);
    };
    imports.wbg.__wbg_frontFace_8ee74bbd54d68f11 = function(arg0, arg1) {
        getObject(arg0).frontFace(arg1 >>> 0);
    };
    imports.wbg.__wbg_frontFace_acba40d690764439 = function(arg0, arg1) {
        getObject(arg0).frontFace(arg1 >>> 0);
    };
    imports.wbg.__wbg_blendFuncSeparate_fff50f7bfebb499b = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
    };
    imports.wbg.__wbg_blendFuncSeparate_6ed0a1b7942b24bf = function(arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
    };
    imports.wbg.__wbg_readPixels_20ef842fbbaed2fc = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        getObject(arg0).readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
    }, arguments) };
    imports.wbg.__wbg_readPixels_d7384e7a2e40a591 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        getObject(arg0).readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
    }, arguments) };
    imports.wbg.__wbg_setwidth_e046dbfb86c5945f = function(arg0, arg1) {
        getObject(arg0).width = arg1 >>> 0;
    };
    imports.wbg.__wbg_setheight_1cc0c2defb921e6d = function(arg0, arg1) {
        getObject(arg0).height = arg1 >>> 0;
    };
    imports.wbg.__wbg_src_283513fe3492b7e3 = function(arg0, arg1) {
        const ret = getObject(arg1).src;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_texSubImage2D_0c07d87ba89e1ab5 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
    }, arguments) };
    imports.wbg.__wbg_texSubImage2D_ab7898bd7b573f77 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
    }, arguments) };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_458fe41b6715a3b0 = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_a25c83fc00c2d030 = function(arg0, arg1, arg2) {
        const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_e9a653cf1d6bd438 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_self_8304bf00151027a6 = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_window_d3fc43f882d25ed3 = function() { return handleError(function () {
        const ret = window.window;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_globalThis_6b6371664ea861fe = function() { return handleError(function () {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_ed77f1e27d7c7877 = function() { return handleError(function () {
        const ret = global.global;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbg_newnoargs_7e07f6df0249a9eb = function(arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_80a29cc8c56c2fdb = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_getAttribLocation_fdcc0381352fa580 = function(arg0, arg1, arg2, arg3) {
        const ret = getObject(arg0).getAttribLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
        return ret;
    };
    imports.wbg.__wbg_getAttribLocation_c59439b9fcd3d4f2 = function(arg0, arg1, arg2, arg3) {
        const ret = getObject(arg0).getAttribLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
        return ret;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_queueMicrotask_e7bd49216a137e8f = function(arg0) {
        const ret = getObject(arg0).queueMicrotask;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_function = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'function';
        return ret;
    };
    imports.wbg.__wbg_resolve_ecc967b39a4b6b09 = function(arg0) {
        const ret = Promise.resolve(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_then_10f914213a99bdb1 = function(arg0, arg1) {
        const ret = getObject(arg0).then(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_queueMicrotask_f94325d4468bfb98 = function(arg0) {
        queueMicrotask(getObject(arg0));
    };
    imports.wbg.__wbg_getExtension_54351766d22cb2a9 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).getExtension(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_matchMedia_d6281a0bfadd87ac = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).matchMedia(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_cancelAnimationFrame_c4b635f770ff7744 = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).cancelAnimationFrame(arg1);
    }, arguments) };
    imports.wbg.__wbg_setTimeout_d82eac469c0672ea = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).setTimeout(getObject(arg1));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createElement_4380c5d2cd930ece = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_matches_831f1a58b78cf707 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).matches(getStringFromWasm0(arg1, arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_setAttribute_dc32316921240878 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_focus_76fcb30068069e6d = function() { return handleError(function (arg0) {
        getObject(arg0).focus();
    }, arguments) };
    imports.wbg.__wbg_fillText_fc270c46e8885b00 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_setProperty_619be031b2321883 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_instanceof_Window_1ac2dc052444278b = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Window;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_getContext_758909b85cf8ce59 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_addListener_689bc94c7a4be83a = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).addListener(getObject(arg1));
    }, arguments) };
    imports.wbg.__wbg_new_356f36e16d8e2cf9 = function() { return handleError(function () {
        const ret = new MessageChannel();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setData_2483219e6015a04d = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).setData(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_revokeObjectURL_b18f04b672cfc6c7 = function() { return handleError(function (arg0, arg1) {
        URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
    }, arguments) };
    imports.wbg.__wbg_new_b3239d1070cf8f8c = function() { return handleError(function () {
        const ret = new AbortController();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_addEventListener_981242317116be13 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
    }, arguments) };
    imports.wbg.__wbg_removeEventListener_81605eefb735eb49 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
    }, arguments) };
    imports.wbg.__wbg_postMessage_5c397a4b18d9224e = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).postMessage(getObject(arg1));
    }, arguments) };
    imports.wbg.__wbg_performance_a1b8bde2ee512264 = function(arg0) {
        const ret = getObject(arg0).performance;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_now_abd80e969af37148 = function(arg0) {
        const ret = getObject(arg0).now();
        return ret;
    };
    imports.wbg.__wbg_movementX_74161ad31f30ef67 = function(arg0) {
        const ret = getObject(arg0).movementX;
        return ret;
    };
    imports.wbg.__wbg_movementY_2f3cf82d126a6f77 = function(arg0) {
        const ret = getObject(arg0).movementY;
        return ret;
    };
    imports.wbg.__wbg_scheduler_7ccf2d3b362018c4 = function(arg0) {
        const ret = getObject(arg0).scheduler;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_signal_719f6b202ad6128b = function(arg0) {
        const ret = getObject(arg0).signal;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_postTask_99464245f349be5a = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).postTask(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_catch_4ea6c31a83fc1853 = function(arg0, arg1) {
        const ret = getObject(arg0).catch(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_port1_b18d5c516c723f8c = function(arg0) {
        const ret = getObject(arg0).port1;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_setonmessage_20a1d987004378b9 = function(arg0, arg1) {
        getObject(arg0).onmessage = getObject(arg1);
    };
    imports.wbg.__wbg_start_b43afdd439f9f586 = function(arg0) {
        getObject(arg0).start();
    };
    imports.wbg.__wbg_port2_2b7a0b9ac517dc54 = function(arg0) {
        const ret = getObject(arg0).port2;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_requestIdleCallback_9d712bb2a633d261 = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).requestIdleCallback(getObject(arg1));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_setTimeout_45075a10345fa0bb = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_of_4cb6ecdc71237012 = function(arg0, arg1) {
        const ret = Array.of(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_of_d5f5d73bb980aa13 = function(arg0) {
        const ret = Array.of(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_postMessage_2f758e7f2954ce15 = function() { return handleError(function (arg0, arg1, arg2) {
        getObject(arg0).postMessage(getObject(arg1), getObject(arg2));
    }, arguments) };
    imports.wbg.__wbg_pointerId_1ccd27710b82b62d = function(arg0) {
        const ret = getObject(arg0).pointerId;
        return ret;
    };
    imports.wbg.__wbg_pointerType_9e3857a97333f38b = function(arg0, arg1) {
        const ret = getObject(arg1).pointerType;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_buttons_f1e6eb66066c3e47 = function(arg0) {
        const ret = getObject(arg0).buttons;
        return ret;
    };
    imports.wbg.__wbg_matches_c82514d36537f3ad = function(arg0) {
        const ret = getObject(arg0).matches;
        return ret;
    };
    imports.wbg.__wbg_persisted_12119ec995bebed0 = function(arg0) {
        const ret = getObject(arg0).persisted;
        return ret;
    };
    imports.wbg.__wbg_setPointerCapture_ac50b2ca039d7a76 = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).setPointerCapture(arg1);
    }, arguments) };
    imports.wbg.__wbg_pressure_7cfbf3baede15b78 = function(arg0) {
        const ret = getObject(arg0).pressure;
        return ret;
    };
    imports.wbg.__wbg_isIntersecting_555eeb8b9a93c33d = function(arg0) {
        const ret = getObject(arg0).isIntersecting;
        return ret;
    };
    imports.wbg.__wbg_contentRect_550128f5f444801c = function(arg0) {
        const ret = getObject(arg0).contentRect;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_width_bf401476ce9f9e48 = function(arg0) {
        const ret = getObject(arg0).width;
        return ret;
    };
    imports.wbg.__wbg_height_b71c81870a17fdae = function(arg0) {
        const ret = getObject(arg0).height;
        return ret;
    };
    imports.wbg.__wbg_devicePixelContentBoxSize_e6b30d2f3c660b06 = function(arg0) {
        const ret = getObject(arg0).devicePixelContentBoxSize;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_inlineSize_06340444789b06a2 = function(arg0) {
        const ret = getObject(arg0).inlineSize;
        return ret;
    };
    imports.wbg.__wbg_blockSize_260d2b76bea63405 = function(arg0) {
        const ret = getObject(arg0).blockSize;
        return ret;
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = takeObject(arg0).original;
        if (obj.cnt-- == 1) {
            obj.a = 0;
            return true;
        }
        const ret = false;
        return ret;
    };
    imports.wbg.__wbg_animate_b321da85ed3f2b4a = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).animate(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_cancel_cba86749f45f30ae = function(arg0) {
        getObject(arg0).cancel();
    };
    imports.wbg.__wbg_play_5896e5851ba90aa2 = function(arg0) {
        getObject(arg0).play();
    };
    imports.wbg.__wbg_contains_aa557c8b3ab42b9c = function(arg0, arg1) {
        const ret = getObject(arg0).contains(getObject(arg1));
        return ret;
    };
    imports.wbg.__wbg_unobserve_6960b2d2a43a19a2 = function(arg0, arg1) {
        getObject(arg0).unobserve(getObject(arg1));
    };
    imports.wbg.__wbg_observe_17a483b230ebf557 = function(arg0, arg1) {
        getObject(arg0).observe(getObject(arg1));
    };
    imports.wbg.__wbg_abort_27bffd6ebfab350d = function(arg0) {
        getObject(arg0).abort();
    };
    imports.wbg.__wbg_cancelIdleCallback_f5beaddd46015a51 = function(arg0, arg1) {
        getObject(arg0).cancelIdleCallback(arg1 >>> 0);
    };
    imports.wbg.__wbg_clearTimeout_f04c168212a614e7 = function(arg0, arg1) {
        getObject(arg0).clearTimeout(arg1);
    };
    imports.wbg.__wbg_close_6784f09b9952ba33 = function(arg0) {
        getObject(arg0).close();
    };
    imports.wbg.__wbg_queueMicrotask_693514e3dcae83e6 = function(arg0) {
        queueMicrotask(takeObject(arg0));
    };
    imports.wbg.__wbg_disconnect_5a5989a9870a5be4 = function(arg0) {
        getObject(arg0).disconnect();
    };
    imports.wbg.__wbg_disconnect_a17729567fe85099 = function(arg0) {
        getObject(arg0).disconnect();
    };
    imports.wbg.__wbg_navigator_8c0918d4751d0602 = function(arg0) {
        const ret = getObject(arg0).navigator;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_userAgentData_85a8393570ab7dee = function(arg0) {
        const ret = getObject(arg0).userAgentData;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_brands_982de08b35281a98 = function(arg0) {
        const ret = getObject(arg0).brands;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_brand_cdcf0249d44027a8 = function(arg0, arg1) {
        const ret = getObject(arg1).brand;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_userAgent_4158bbb04a5a746b = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg1).userAgent;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_requestFullscreen_8a94df4e7f757077 = function(arg0) {
        const ret = getObject(arg0).requestFullscreen;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getCoalescedEvents_85701851c470c4e6 = function(arg0) {
        const ret = getObject(arg0).getCoalescedEvents;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_requestIdleCallback_86b728660e0547ef = function(arg0) {
        const ret = getObject(arg0).requestIdleCallback;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_scheduler_f38a681d98b5a776 = function(arg0) {
        const ret = getObject(arg0).scheduler;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_requestAnimationFrame_58524d23e0dad31f = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).requestAnimationFrame(getObject(arg1));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_prototype_d33365945f23f380 = function() {
        const ret = ResizeObserverEntry.prototype;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getOwnPropertyDescriptor_0309b5d262c2fb09 = function(arg0, arg1) {
        const ret = Object.getOwnPropertyDescriptor(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_5f57b07cb9dc1317 = function() { return handleError(function (arg0, arg1) {
        const ret = new Worker(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_settype_984e82d6ff306605 = function(arg0, arg1, arg2) {
        getObject(arg0).type = getStringFromWasm0(arg1, arg2);
    };
    imports.wbg.__wbg_newwithstrsequenceandoptions_467bb24122b0b705 = function() { return handleError(function (arg0, arg1) {
        const ret = new Blob(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_createObjectURL_8e136eadc4c86b62 = function() { return handleError(function (arg0, arg1) {
        const ret = URL.createObjectURL(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_Window_bd9ec3fee5f673ee = function(arg0) {
        const ret = getObject(arg0).Window;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_removeListener_8fdf7b8b52f33cd2 = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).removeListener(getObject(arg1));
    }, arguments) };
    imports.wbg.__wbg_error_36e2629d978a6832 = function(arg0, arg1) {
        console.error(getObject(arg0), getObject(arg1));
    };
    imports.wbg.__wbg_webkitExitFullscreen_77a6c8d07ec6ee46 = function(arg0) {
        getObject(arg0).webkitExitFullscreen();
    };
    imports.wbg.__wbg_exitFullscreen_9d84e3ea54cda043 = function(arg0) {
        getObject(arg0).exitFullscreen();
    };
    imports.wbg.__wbg_getPropertyValue_89b9528c69a25d7c = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = getObject(arg1).getPropertyValue(getStringFromWasm0(arg2, arg3));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_removeProperty_b15be83c10f4805e = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = getObject(arg1).removeProperty(getStringFromWasm0(arg2, arg3));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_body_3b7f74ebdd47855a = function(arg0) {
        const ret = getObject(arg0).body;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_appendChild_57151f4a5757b5d3 = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).appendChild(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_getComputedStyle_3e93c03f219531af = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).getComputedStyle(getObject(arg1));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_activeElement_602f47b73e2feab4 = function(arg0) {
        const ret = getObject(arg0).activeElement;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_is_644467c541e6a614 = function(arg0, arg1) {
        const ret = Object.is(getObject(arg0), getObject(arg1));
        return ret;
    };
    imports.wbg.__wbg_new_43595ed68c0c5428 = function() { return handleError(function (arg0) {
        const ret = new ResizeObserver(getObject(arg0));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setbox_5e6ab5a4b7da85cc = function(arg0, arg1) {
        getObject(arg0).box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
    };
    imports.wbg.__wbg_observe_d6f227e51041e451 = function(arg0, arg1, arg2) {
        getObject(arg0).observe(getObject(arg1), getObject(arg2));
    };
    imports.wbg.__wbg_new_09229f4a751fcdca = function() { return handleError(function (arg0) {
        const ret = new IntersectionObserver(getObject(arg0));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_observe_3b5249fe20338ff0 = function(arg0, arg1) {
        getObject(arg0).observe(getObject(arg1));
    };
    imports.wbg.__wbg_getBoundingClientRect_b8cc6e0f3bf26ea4 = function(arg0) {
        const ret = getObject(arg0).getBoundingClientRect();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_x_6432a95ba350de8c = function(arg0) {
        const ret = getObject(arg0).x;
        return ret;
    };
    imports.wbg.__wbg_y_7896e4aa1b4bef5e = function(arg0) {
        const ret = getObject(arg0).y;
        return ret;
    };
    imports.wbg.__wbg_offsetX_294898d040917c6b = function(arg0) {
        const ret = getObject(arg0).offsetX;
        return ret;
    };
    imports.wbg.__wbg_offsetY_f484804b7b03dd86 = function(arg0) {
        const ret = getObject(arg0).offsetY;
        return ret;
    };
    imports.wbg.__wbg_button_3f4fff7e24fc1792 = function(arg0) {
        const ret = getObject(arg0).button;
        return ret;
    };
    imports.wbg.__wbg_deltaX_c39d995e7adb3524 = function(arg0) {
        const ret = getObject(arg0).deltaX;
        return ret;
    };
    imports.wbg.__wbg_deltaY_2d6f9f5dd9fc416b = function(arg0) {
        const ret = getObject(arg0).deltaY;
        return ret;
    };
    imports.wbg.__wbg_deltaMode_b5d56ac8c314d9ac = function(arg0) {
        const ret = getObject(arg0).deltaMode;
        return ret;
    };
    imports.wbg.__wbg_code_f29af69eb6c5129e = function(arg0, arg1) {
        const ret = getObject(arg1).code;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg_location_c3de5c10f22b5920 = function(arg0) {
        const ret = getObject(arg0).location;
        return ret;
    };
    imports.wbg.__wbg_metaKey_5ac913401ab2048b = function(arg0) {
        const ret = getObject(arg0).metaKey;
        return ret;
    };
    imports.wbg.__wbg_shiftKey_4438fa8ccbd2a085 = function(arg0) {
        const ret = getObject(arg0).shiftKey;
        return ret;
    };
    imports.wbg.__wbg_ctrlKey_42eb8277d6dbaaeb = function(arg0) {
        const ret = getObject(arg0).ctrlKey;
        return ret;
    };
    imports.wbg.__wbg_altKey_f94bd14443726014 = function(arg0) {
        const ret = getObject(arg0).altKey;
        return ret;
    };
    imports.wbg.__wbg_metaKey_3b5c0e71c085ed59 = function(arg0) {
        const ret = getObject(arg0).metaKey;
        return ret;
    };
    imports.wbg.__wbg_getCoalescedEvents_c23f04dc2541586c = function(arg0) {
        const ret = getObject(arg0).getCoalescedEvents();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_webkitRequestFullscreen_42ba1c34171febc6 = function(arg0) {
        getObject(arg0).webkitRequestFullscreen();
    };
    imports.wbg.__wbg_requestFullscreen_24891df6120b675d = function(arg0) {
        const ret = getObject(arg0).requestFullscreen();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_webkitFullscreenElement_a02341d57a641b43 = function(arg0) {
        const ret = getObject(arg0).webkitFullscreenElement;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_fullscreenElement_82a410bdb198c6fa = function(arg0) {
        const ret = getObject(arg0).fullscreenElement;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_visibilityState_aaf0e186ff99bbb1 = function(arg0) {
        const ret = getObject(arg0).visibilityState;
        return (__wbindgen_enum_VisibilityState.indexOf(ret) + 1 || 3) - 1;
    };
    imports.wbg.__wbindgen_closure_wrapper1130 = function(arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 171, __wbg_adapter_26);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper1132 = function(arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 171, __wbg_adapter_26);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper1133 = function(arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 171, __wbg_adapter_26);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper1134 = function(arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 171, __wbg_adapter_26);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper1135 = function(arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 171, __wbg_adapter_26);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper4455 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 420, __wbg_adapter_37);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5747 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 420, __wbg_adapter_40);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5780 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 420, __wbg_adapter_37);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5789 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 420, __wbg_adapter_37);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5813 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 420, __wbg_adapter_37);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5832 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 420, __wbg_adapter_37);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5851 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 420, __wbg_adapter_37);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5866 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 420, __wbg_adapter_53);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5879 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 420, __wbg_adapter_37);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5891 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 420, __wbg_adapter_37);
        return addHeapObject(ret);
    };

    return imports;
}

function __wbg_init_memory(imports, memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedDataViewMemory0 = null;
    cachedFloat32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    cachedUint8ClampedArrayMemory0 = null;


    wasm.__wbindgen_start();
    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL('opengl_underlay_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync };
export default __wbg_init;
