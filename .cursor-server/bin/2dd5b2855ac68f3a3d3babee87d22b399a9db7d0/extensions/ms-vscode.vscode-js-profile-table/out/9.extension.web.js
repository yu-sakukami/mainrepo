"use strict";(self.webpackChunkvscode_js_profile_table=self.webpackChunkvscode_js_profile_table||[]).push([[9],{9:(_,e,t)=>{t.r(e),t.d(e,{ClassGroup:()=>r._o,EdgeType:()=>r.Pb,Graph:()=>r.kJ,Node:()=>r.NB,NodeType:()=>r.Jq,RetainerNode:()=>r.Dr,WasmSortBy:()=>r.cD,__wbg_classgroup_new:()=>r.Aw,__wbg_error_f851667af71bcfc6:()=>r.iX,__wbg_new_abda76e883ba8a5f:()=>r.a2,__wbg_node_new:()=>r.ks,__wbg_retainernode_new:()=>r.zD,__wbg_set_wasm:()=>r.oT,__wbg_stack_658279fe44541cf6:()=>r.KM,__wbindgen_object_drop_ref:()=>r.ug,__wbindgen_string_get:()=>r.qt,__wbindgen_string_new:()=>r.h4,__wbindgen_throw:()=>r.Or,decode_bytes:()=>r.mS,init_panic_hook:()=>r.Of});var n=t(392),r=t(568);(0,r.oT)(n)},568:(_,e,t)=>{let n;function r(_){n=_}t.d(e,{Aw:()=>A,Dr:()=>C,Jq:()=>O,KM:()=>R,NB:()=>B,Of:()=>z,Or:()=>J,Pb:()=>S,_o:()=>I,a2:()=>q,cD:()=>N,h4:()=>T,iX:()=>H,kJ:()=>j,ks:()=>D,mS:()=>k,oT:()=>r,qt:()=>P,ug:()=>E,zD:()=>U}),_=t.hmd(_);let i=new("undefined"==typeof TextDecoder?(0,_.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let s=null;function o(){return null!==s&&0!==s.byteLength||(s=new Uint8Array(n.memory.buffer)),s}function g(_,e){return _>>>=0,i.decode(o().subarray(_,_+e))}const a=new Array(128).fill(void 0);a.push(void 0,null,!0,!1);let d=a.length;function c(_){d===a.length&&a.push(a.length+1);const e=d;return d=a[e],a[e]=_,e}function l(_){return a[_]}function w(_){const e=l(_);return function(_){_<132||(a[_]=d,d=_)}(_),e}let b=0,p=new("undefined"==typeof TextEncoder?(0,_.require)("util").TextEncoder:TextEncoder)("utf-8");const u="function"==typeof p.encodeInto?function(_,e){return p.encodeInto(_,e)}:function(_,e){const t=p.encode(_);return e.set(t),{read:_.length,written:t.length}};function h(_,e,t){if(void 0===t){const t=p.encode(_),n=e(t.length,1)>>>0;return o().subarray(n,n+t.length).set(t),b=t.length,n}let n=_.length,r=e(n,1)>>>0;const i=o();let s=0;for(;s<n;s++){const e=_.charCodeAt(s);if(e>127)break;i[r+s]=e}if(s!==n){0!==s&&(_=_.slice(s)),r=t(r,n,n=s+3*_.length,1)>>>0;const e=o().subarray(r+s,r+n);s+=u(_,e).written}return b=s,r}let f=null;function y(){return null!==f&&0!==f.byteLength||(f=new Int32Array(n.memory.buffer)),f}function k(_){try{const r=n.__wbindgen_add_to_stack_pointer(-16),i=function(_,e){const t=e(1*_.length,1)>>>0;return o().set(_,t/1),b=_.length,t}(_,n.__wbindgen_malloc),s=b;n.decode_bytes(r,i,s);var e=y()[r/4+0],t=y()[r/4+1];if(y()[r/4+2])throw w(t);return j.__wrap(e)}finally{n.__wbindgen_add_to_stack_pointer(16)}}function z(){n.init_panic_hook()}let m=null;function x(){return null!==m&&0!==m.byteLength||(m=new Uint32Array(n.memory.buffer)),m}function v(_,e){_>>>=0;const t=x().subarray(_/4,_/4+e),n=[];for(let _=0;_<t.length;_++)n.push(w(t[_]));return n}const S=Object.freeze({Context:0,0:"Context",Element:1,1:"Element",Property:2,2:"Property",Internal:3,3:"Internal",Hidden:4,4:"Hidden",Shortcut:5,5:"Shortcut",Weak:6,6:"Weak",Invisible:7,7:"Invisible",Other:8,8:"Other"}),O=Object.freeze({Hidden:0,0:"Hidden",Array:1,1:"Array",String:2,2:"String",Object:3,3:"Object",Code:4,4:"Code",Closure:5,5:"Closure",RegExp:6,6:"RegExp",Number:7,7:"Number",Native:8,8:"Native",Syntheic:9,9:"Syntheic",ConcatString:10,10:"ConcatString",SliceString:11,11:"SliceString",BigInt:12,12:"BigInt",Other:13,13:"Other"}),N=Object.freeze({SelfSize:0,0:"SelfSize",RetainedSize:1,1:"RetainedSize",Name:2,2:"Name"});class I{static __wrap(_){_>>>=0;const e=Object.create(I.prototype);return e.__wbg_ptr=_,e}__destroy_into_raw(){const _=this.__wbg_ptr;return this.__wbg_ptr=0,_}free(){const _=this.__destroy_into_raw();n.__wbg_classgroup_free(_)}get self_size(){const _=n.__wbg_get_classgroup_self_size(this.__wbg_ptr);return BigInt.asUintN(64,_)}set self_size(_){n.__wbg_set_classgroup_self_size(this.__wbg_ptr,_)}get retained_size(){const _=n.__wbg_get_classgroup_retained_size(this.__wbg_ptr);return BigInt.asUintN(64,_)}set retained_size(_){n.__wbg_set_classgroup_retained_size(this.__wbg_ptr,_)}get children_len(){return n.__wbg_get_classgroup_children_len(this.__wbg_ptr)>>>0}set children_len(_){n.__wbg_set_classgroup_children_len(this.__wbg_ptr,_)}name(){let _,e;try{const i=n.__wbindgen_add_to_stack_pointer(-16);n.classgroup_name(i,this.__wbg_ptr);var t=y()[i/4+0],r=y()[i/4+1];return _=t,e=r,g(t,r)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(_,e,1)}}}class j{static __wrap(_){_>>>=0;const e=Object.create(j.prototype);return e.__wbg_ptr=_,e}__destroy_into_raw(){const _=this.__wbg_ptr;return this.__wbg_ptr=0,_}free(){const _=this.__destroy_into_raw();n.__wbg_graph_free(_)}get root_index(){return n.__wbg_get_graph_root_index(this.__wbg_ptr)>>>0}set root_index(_){n.__wbg_set_graph_root_index(this.__wbg_ptr,_)}get_class_groups(_,e,t){try{const o=n.__wbindgen_add_to_stack_pointer(-16);n.graph_get_class_groups(o,this.__wbg_ptr,_,e,t);var r=y()[o/4+0],i=y()[o/4+1],s=v(r,i).slice();return n.__wbindgen_free(r,4*i,4),s}finally{n.__wbindgen_add_to_stack_pointer(16)}}get_class_counts(_){try{const o=n.__wbindgen_add_to_stack_pointer(-16),g=function(_,e){const t=e(4*_.length,4)>>>0,n=x();for(let e=0;e<_.length;e++)n[t/4+e]=c(_[e]);return b=_.length,t}(_,n.__wbindgen_malloc),a=b;n.graph_get_class_counts(o,this.__wbg_ptr,g,a);var e=y()[o/4+0],t=y()[o/4+1],r=(i=e,s=t,i>>>=0,x().subarray(i/4,i/4+s)).slice();return n.__wbindgen_free(e,4*t,4),r}finally{n.__wbindgen_add_to_stack_pointer(16)}var i,s}class_children(_,e,t,r){try{const g=n.__wbindgen_add_to_stack_pointer(-16);n.graph_class_children(g,this.__wbg_ptr,_,e,t,r);var i=y()[g/4+0],s=y()[g/4+1],o=v(i,s).slice();return n.__wbindgen_free(i,4*s,4),o}finally{n.__wbindgen_add_to_stack_pointer(16)}}node_children(_,e,t,r){try{const g=n.__wbindgen_add_to_stack_pointer(-16);n.graph_node_children(g,this.__wbg_ptr,_,e,t,r);var i=y()[g/4+0],s=y()[g/4+1],o=v(i,s).slice();return n.__wbindgen_free(i,4*s,4),o}finally{n.__wbindgen_add_to_stack_pointer(16)}}get_all_retainers(_,e){try{const s=n.__wbindgen_add_to_stack_pointer(-16);n.graph_get_all_retainers(s,this.__wbg_ptr,_,e);var t=y()[s/4+0],r=y()[s/4+1],i=v(t,r).slice();return n.__wbindgen_free(t,4*r,4),i}finally{n.__wbindgen_add_to_stack_pointer(16)}}}class B{static __wrap(_){_>>>=0;const e=Object.create(B.prototype);return e.__wbg_ptr=_,e}__destroy_into_raw(){const _=this.__wbg_ptr;return this.__wbg_ptr=0,_}free(){const _=this.__destroy_into_raw();n.__wbg_node_free(_)}get children_len(){return n.__wbg_get_classgroup_children_len(this.__wbg_ptr)>>>0}set children_len(_){n.__wbg_set_classgroup_children_len(this.__wbg_ptr,_)}get self_size(){const _=n.__wbg_get_classgroup_self_size(this.__wbg_ptr);return BigInt.asUintN(64,_)}set self_size(_){n.__wbg_set_classgroup_self_size(this.__wbg_ptr,_)}get retained_size(){const _=n.__wbg_get_classgroup_retained_size(this.__wbg_ptr);return BigInt.asUintN(64,_)}set retained_size(_){n.__wbg_set_classgroup_retained_size(this.__wbg_ptr,_)}get index(){return n.__wbg_get_node_index(this.__wbg_ptr)>>>0}set index(_){n.__wbg_set_node_index(this.__wbg_ptr,_)}get typ(){return n.__wbg_get_node_typ(this.__wbg_ptr)}set typ(_){n.__wbg_set_node_typ(this.__wbg_ptr,_)}get id(){return n.__wbg_get_node_id(this.__wbg_ptr)>>>0}set id(_){n.__wbg_set_node_id(this.__wbg_ptr,_)}name(){let _,e;try{const i=n.__wbindgen_add_to_stack_pointer(-16);n.node_name(i,this.__wbg_ptr);var t=y()[i/4+0],r=y()[i/4+1];return _=t,e=r,g(t,r)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(_,e,1)}}}class C{static __wrap(_){_>>>=0;const e=Object.create(C.prototype);return e.__wbg_ptr=_,e}__destroy_into_raw(){const _=this.__wbg_ptr;return this.__wbg_ptr=0,_}free(){const _=this.__destroy_into_raw();n.__wbg_retainernode_free(_)}get retains_index(){return n.__wbg_get_retainernode_retains_index(this.__wbg_ptr)>>>0}set retains_index(_){n.__wbg_set_retainernode_retains_index(this.__wbg_ptr,_)}get children_len(){return n.__wbg_get_classgroup_children_len(this.__wbg_ptr)>>>0}set children_len(_){n.__wbg_set_classgroup_children_len(this.__wbg_ptr,_)}get self_size(){const _=n.__wbg_get_classgroup_self_size(this.__wbg_ptr);return BigInt.asUintN(64,_)}set self_size(_){n.__wbg_set_classgroup_self_size(this.__wbg_ptr,_)}get retained_size(){const _=n.__wbg_get_classgroup_retained_size(this.__wbg_ptr);return BigInt.asUintN(64,_)}set retained_size(_){n.__wbg_set_classgroup_retained_size(this.__wbg_ptr,_)}get index(){return n.__wbg_get_node_index(this.__wbg_ptr)>>>0}set index(_){n.__wbg_set_node_index(this.__wbg_ptr,_)}get typ(){return n.__wbg_get_retainernode_typ(this.__wbg_ptr)}set typ(_){n.__wbg_set_retainernode_typ(this.__wbg_ptr,_)}get id(){return n.__wbg_get_node_id(this.__wbg_ptr)>>>0}set id(_){n.__wbg_set_node_id(this.__wbg_ptr,_)}get edge_typ(){return n.__wbg_get_retainernode_edge_typ(this.__wbg_ptr)}set edge_typ(_){n.__wbg_set_retainernode_edge_typ(this.__wbg_ptr,_)}name(){let _,e;try{const i=n.__wbindgen_add_to_stack_pointer(-16);n.retainernode_name(i,this.__wbg_ptr);var t=y()[i/4+0],r=y()[i/4+1];return _=t,e=r,g(t,r)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_free(_,e,1)}}}function T(_,e){return c(g(_,e))}function E(_){w(_)}function A(_){return c(I.__wrap(_))}function D(_){return c(B.__wrap(_))}function U(_){return c(C.__wrap(_))}function q(){return c(new Error)}function R(_,e){const t=h(l(e).stack,n.__wbindgen_malloc,n.__wbindgen_realloc),r=b;y()[_/4+1]=r,y()[_/4+0]=t}function H(_,e){let t,r;try{t=_,r=e,console.error(g(_,e))}finally{n.__wbindgen_free(t,r,1)}}function J(_,e){throw new Error(g(_,e))}function P(_,e){const t=l(e),r="string"==typeof t?t:void 0;var i=null==r?0:h(r,n.__wbindgen_malloc,n.__wbindgen_realloc),s=b;y()[_/4+1]=s,y()[_/4+0]=i}},392:(_,e,t)=>{var n=t.w[_.id];for(var r in t.r(e),n)r&&(e[r]=n[r]);t(568),n[""]()}}]);