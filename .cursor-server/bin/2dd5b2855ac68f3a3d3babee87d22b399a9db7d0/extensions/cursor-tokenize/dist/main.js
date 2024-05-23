(()=>{var e={13:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.$f=void 0;const r=t(496),o=t(920);class i{constructor(){this.b=new o.$e,this.a=r.workspace.registerControlProvider(i.id,this)}getRegistrationSource(){return i.id}dispose(){this.a.dispose()}async getFullDiff(e,n){}async getDataframeSummary(e){}async getTokenizedQuery(e){}async tokenizeBPE(e,n){return e.map((e=>this.b.tokenize(e,n)))}async appendCppTelem(){}streamCpp(){}flushCpp(){return[]}cancelCpp(){}async diffLines(e,n){return[]}async diffWords(e,n){return[]}}n.$f=i,i.id="cursor-tokenize"},526:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.deactivate=n.activate=void 0;const r=t(13),o=[];n.activate=async function(e){const n=new r.$f;o.push((async()=>n.dispose()))},n.deactivate=async function(){for(const e of o)await e()}},920:(e,n,t)=>{"use strict";e=t.nmd(e),Object.defineProperty(n,"__esModule",{value:!0}),n.$e=n.$d=n.$c=n.$b=n.$a=void 0;const r=t(992);function o(e){switch(e){case"gpt2":return n.$c;case"p50k_base":return n.$b;case"cl100k_base":return n.$a;case"r50k_base":throw new Error("r50k_base not supported")}}n.$a=(0,r.get_encoding)("cl100k_base"),n.$b=(0,r.get_encoding)("p50k_base"),n.$c=(0,r.get_encoding)("gpt2"),n.$d=o;class i{tokenize(e,n){const t=o(n),r=t.encode(e,"all"),i=[];for(const e of r){const n=new Uint32Array([e]);i.push({text:(new TextDecoder).decode(t.decode(n)),token:e})}return i}}if(n.$e=i,t.c[t.s]===e){const e="Where is the stripe code that handle payments?",n=(new i).tokenize(e,"gpt2");console.log(n)}},496:e=>{"use strict";e.exports=require("vscode")},147:e=>{"use strict";e.exports=require("fs")},17:e=>{"use strict";e.exports=require("path")},992:(e,n,t)=>{const r=t(680);let o={};o["./tiktoken_bg.js"]=r;const i=t(17),_=t(147),d=__dirname.split(i.sep).reduce(((e,n,t,r)=>{const o=r.slice(0,t+1).join(i.sep)+i.sep;return o.includes("node_modules"+i.sep)||e.unshift(i.join(o,"node_modules","@dqbd","tiktoken","","./tiktoken_bg.wasm")),e}),[]);d.unshift(i.join(__dirname,"./tiktoken_bg.wasm"));let s=null;for(const e of d)try{s=_.readFileSync(e);break}catch{}if(null==s)throw new Error("Missing tiktoken_bg.wasm");const a=new WebAssembly.Module(s),c=new WebAssembly.Instance(a,o);r.__wbg_set_wasm(c.exports),n.get_encoding=r.get_encoding,n.encoding_for_model=r.encoding_for_model,n.Tiktoken=r.Tiktoken},680:(e,n,t)=>{let r;(e=t.nmd(e)).exports.__wbg_set_wasm=function(e){r=e};const o=new Array(128).fill(void 0);function i(e){return o[e]}o.push(void 0,null,!0,!1);let _=o.length;function d(e){const n=i(e);return function(e){e<132||(o[e]=_,_=e)}(e),n}let s=0,a=null;function c(){return null!==a&&0!==a.byteLength||(a=new Uint8Array(r.memory.buffer)),a}let u=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const l="function"==typeof u.encodeInto?function(e,n){return u.encodeInto(e,n)}:function(e,n){const t=u.encode(e);return n.set(t),{read:e.length,written:t.length}};function p(e,n,t){if(void 0===t){const t=u.encode(e),r=n(t.length);return c().subarray(r,r+t.length).set(t),s=t.length,r}let r=e.length,o=n(r);const i=c();let _=0;for(;_<r;_++){const n=e.charCodeAt(_);if(n>127)break;i[o+_]=n}if(_!==r){0!==_&&(e=e.slice(_)),o=t(o,r,r=_+3*e.length);const n=c().subarray(o+_,o+r);_+=l(e,n).written}return s=_,o}let b=null;function w(){return null!==b&&0!==b.byteLength||(b=new Int32Array(r.memory.buffer)),b}let f=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function g(e,n){return f.decode(c().subarray(e,e+n))}function k(e){_===o.length&&o.push(o.length+1);const n=_;return _=o[n],o[n]=e,n}f.decode();let y=null;function h(){return null!==y&&0!==y.byteLength||(y=new Uint32Array(r.memory.buffer)),y}function x(e,n){return h().subarray(e/4,e/4+n)}function v(e,n){return c().subarray(e/1,e/1+n)}function m(e,n){try{return e.apply(this,n)}catch(e){r.__wbindgen_export_3(k(e))}}e.exports.get_encoding=function(e,n){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");try{const i=r.__wbindgen_add_to_stack_pointer(-16),_=p(e,r.__wbindgen_export_0,r.__wbindgen_export_1),a=s;r.get_encoding(i,_,a,k(n));var t=w()[i/4+0],o=w()[i/4+1];if(w()[i/4+2])throw d(o);return A.__wrap(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}},e.exports.encoding_for_model=function(e,n){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");try{const i=r.__wbindgen_add_to_stack_pointer(-16),_=p(e,r.__wbindgen_export_0,r.__wbindgen_export_1),a=s;r.encoding_for_model(i,_,a,k(n));var t=w()[i/4+0],o=w()[i/4+1];if(w()[i/4+2])throw d(o);return A.__wrap(t)}finally{r.__wbindgen_add_to_stack_pointer(16)}};class A{constructor(e,n,t){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");const o=p(e,r.__wbindgen_export_0,r.__wbindgen_export_1),i=s,_=p(t,r.__wbindgen_export_0,r.__wbindgen_export_1),d=s,a=r.tiktoken_new(o,i,k(n),_,d);return A.__wrap(a)}get name(){try{const t=r.__wbindgen_add_to_stack_pointer(-16);r.tiktoken_name(t,this.ptr);var e=w()[t/4+0],n=w()[t/4+1];let o;return 0!==e&&(o=g(e,n).slice(),r.__wbindgen_export_2(e,1*n)),o}finally{r.__wbindgen_add_to_stack_pointer(16)}}static __wrap(e){const n=Object.create(A.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");const e=this.__destroy_into_raw();r.__wbg_tiktoken_free(e)}encode(e,n,t){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");try{const c=r.__wbindgen_add_to_stack_pointer(-16),u=p(e,r.__wbindgen_export_0,r.__wbindgen_export_1),l=s;r.tiktoken_encode(c,this.ptr,u,l,k(n),k(t));var o=w()[c/4+0],i=w()[c/4+1],_=w()[c/4+2];if(w()[c/4+3])throw d(_);var a=x(o,i).slice();return r.__wbindgen_export_2(o,4*i),a}finally{r.__wbindgen_add_to_stack_pointer(16)}}encode_ordinary(e){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");try{const i=r.__wbindgen_add_to_stack_pointer(-16),_=p(e,r.__wbindgen_export_0,r.__wbindgen_export_1),d=s;r.tiktoken_encode_ordinary(i,this.ptr,_,d);var n=w()[i/4+0],t=w()[i/4+1],o=x(n,t).slice();return r.__wbindgen_export_2(n,4*t),o}finally{r.__wbindgen_add_to_stack_pointer(16)}}encode_with_unstable(e,n,t){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");try{const _=r.__wbindgen_add_to_stack_pointer(-16),a=p(e,r.__wbindgen_export_0,r.__wbindgen_export_1),c=s;r.tiktoken_encode_with_unstable(_,this.ptr,a,c,k(n),k(t));var o=w()[_/4+0],i=w()[_/4+1];if(w()[_/4+2])throw d(i);return d(o)}finally{r.__wbindgen_add_to_stack_pointer(16)}}encode_single_token(e){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");const n=function(e,n){const t=n(1*e.length);return c().set(e,t/1),s=e.length,t}(e,r.__wbindgen_export_0),t=s;return r.tiktoken_encode_single_token(this.ptr,n,t)>>>0}decode(e){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");try{const i=r.__wbindgen_add_to_stack_pointer(-16),_=function(e,n){const t=n(4*e.length);return h().set(e,t/4),s=e.length,t}(e,r.__wbindgen_export_0),d=s;r.tiktoken_decode(i,this.ptr,_,d);var n=w()[i/4+0],t=w()[i/4+1],o=v(n,t).slice();return r.__wbindgen_export_2(n,1*t),o}finally{r.__wbindgen_add_to_stack_pointer(16)}}decode_single_token_bytes(e){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");try{const i=r.__wbindgen_add_to_stack_pointer(-16);r.tiktoken_decode_single_token_bytes(i,this.ptr,e);var n=w()[i/4+0],t=w()[i/4+1],o=v(n,t).slice();return r.__wbindgen_export_2(n,1*t),o}finally{r.__wbindgen_add_to_stack_pointer(16)}}token_byte_values(){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");return d(r.tiktoken_token_byte_values(this.ptr))}}e.exports.Tiktoken=A,e.exports.__wbindgen_object_drop_ref=function(e){d(e)},e.exports.__wbindgen_is_undefined=function(e){return void 0===i(e)},e.exports.__wbg_stringify_029a979dfb73aa17=function(){return m((function(e){return k(JSON.stringify(i(e)))}),arguments)},e.exports.__wbindgen_string_get=function(e,n){if(null==r)throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");const t=i(n),o="string"==typeof t?t:void 0;var _=null==o?0:p(o,r.__wbindgen_export_0,r.__wbindgen_export_1),d=s;w()[e/4+1]=d,w()[e/4+0]=_},e.exports.__wbindgen_error_new=function(e,n){return k(new Error(g(e,n)))},e.exports.__wbg_parse_3ac95b51fc312db8=function(){return m((function(e,n){return k(JSON.parse(g(e,n)))}),arguments)},e.exports.__wbindgen_throw=function(e,n){throw new Error(g(e,n))}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,t),i.loaded=!0,i.exports}t.c=n,t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var r=t(t.s=526),o=exports;for(var i in r)o[i]=r[i];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://cursor-sourcemaps.s3.amazonaws.com/sourcemaps/2dd5b2855ac68f3a3d3babee87d22b399a9db7d0/extensions/cursor-tokenize/dist/main.js.map