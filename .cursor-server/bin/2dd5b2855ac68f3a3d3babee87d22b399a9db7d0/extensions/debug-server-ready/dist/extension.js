(()=>{"use strict";var e={496:e=>{e.exports=require("vscode")},113:e=>{e.exports=require("crypto")},837:e=>{e.exports=require("util")}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,s),n.exports}var i={};(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=s(496),r=s(837),n=s(113),o=/(:?\x1b\[|\x9B)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/g;class a{constructor(){this.a=!1}get hasFired(){return this.a}fire(){this.a=!0}}class c extends t.Disposable{static start(e){if(e.configuration.serverReadyAction){let t=c.a.get(e);return t||(t=new c(e),c.a.set(e,t)),t}}static stop(e){const t=c.a.get(e);t&&(c.a.delete(e),t.sessionStopped(),t.dispose())}static rememberShellPid(e,t){const s=c.a.get(e);s&&(s.i=t)}static async startListeningTerminalData(){this.b||(this.b=t.window.onDidWriteTerminalData((async e=>{const t=await e.terminal.processId,s=function(e){return e&&(e=e.replace(o,"")),e}(e.data);for(const[,e]of this.a)if(e.i===t)return void e.detectPattern(s);for(const[,e]of this.a)if(e.detectPattern(s))return})))}constructor(e){super((()=>this.l())),this.k=e,this.c=new t.EventEmitter,this.f=this.c.event,this.g=new Set([]),e.parentSession?this.h=c.start(e.parentSession)?.h??new a:this.h=new a,this.j=new RegExp(e.configuration.serverReadyAction.pattern||"listening on.* (https?://\\S+|[0-9]+)","i")}l(){this.g.forEach((e=>e.dispose())),this.g.clear()}sessionStopped(){this.c.fire()}detectPattern(e){if(!this.h.hasFired){const t=this.j.exec(e);if(t&&t.length>=1)return this.n(this.k,t.length>1?t[1]:""),this.h.fire(),!0}return!1}n(e,s){const i=e.configuration.serverReadyAction;let n;if(""===s){const e=i.uriFormat||"";if(e.indexOf("%s")>=0){const s=t.l10n.t("Format uri ('{0}') uses a substitution placeholder but pattern did not capture anything.",e);return void t.window.showErrorMessage(s,{modal:!0}).then((e=>{}))}n=e}else{const e=i.uriFormat||(/^[0-9]+$/.test(s)?"http://localhost:%s":"%s");if(2!==e.split("%s").length){const s=t.l10n.t("Format uri ('{0}') must contain exactly one substitution placeholder.",e);return void t.window.showErrorMessage(s,{modal:!0}).then((e=>{}))}n=r.format(e,s)}this.o(e,n)}async o(e,s){const i=e.configuration.serverReadyAction;switch(i.action||"openExternally"){case"openExternally":await t.env.openExternal(t.Uri.parse(s));break;case"debugWithChrome":await this.p("pwa-chrome",e,s);break;case"debugWithEdge":await this.p("pwa-msedge",e,s);break;case"startDebugging":i.config?await this.r(e,i.config.name,i.config):await this.r(e,i.name||"unspecified")}}async p(e,s,i){if(!s.configuration.serverReadyAction.killOnServerStop)return void await this.q(e,s,i);const r=(0,n.randomUUID)(),o=new t.CancellationTokenSource,a=this.u((e=>e.configuration._debugServerReadySessionId===r),o.token);if(!await this.q(e,s,i,r))return o.cancel(),void o.dispose();const c=await a;if(o.dispose(),!c)return;const d=this.f((async()=>{d.dispose(),this.g.delete(d),await t.debug.stopDebugging(c)}));this.g.add(d)}q(e,s,i,r){return t.debug.startDebugging(s.workspaceFolder,{type:e,name:"Browser Debug",request:"launch",url:i,webRoot:s.configuration.serverReadyAction.webRoot||"${workspaceFolder}",_debugServerReadySessionId:r})}async r(e,s,i){if(!e.configuration.serverReadyAction.killOnServerStop)return void await t.debug.startDebugging(e.workspaceFolder,i??s);const r=new t.CancellationTokenSource,n=this.u((e=>e.name===s),r.token);if(!await t.debug.startDebugging(e.workspaceFolder,i??s))return r.cancel(),void r.dispose();const o=await n;if(r.dispose(),!o)return;const a=this.f((async()=>{a.dispose(),this.g.delete(a),await t.debug.stopDebugging(o)}));this.g.add(a)}u(e,s){return new Promise((i=>{const r=e=>{o.dispose(),n.dispose(),this.g.delete(o),this.g.delete(n),i(e)},n=s.onCancellationRequested(r),o=t.debug.onDidStartDebugSession((t=>{e(t)&&r(t)}));this.g.add(o),this.g.add(n)}))}}c.a=new Map,e.activate=function(e){e.subscriptions.push(t.debug.onDidStartDebugSession((e=>{e.configuration.serverReadyAction&&c.start(e)&&c.startListeningTerminalData()}))),e.subscriptions.push(t.debug.onDidTerminateDebugSession((e=>{c.stop(e)})));const s=new Set;e.subscriptions.push(t.debug.registerDebugConfigurationProvider("*",{resolveDebugConfigurationWithSubstitutedVariables:(i,r)=>(r.type&&r.serverReadyAction&&(s.has(r.type)||(s.add(r.type),function(e,s){e.subscriptions.push(t.debug.registerDebugAdapterTrackerFactory(s,{createDebugAdapterTracker(e){const t=c.start(e);if(t){let s;return{onDidSendMessage:e=>{if("event"===e.type&&"output"===e.event&&e.body)switch(e.body.category){case"console":case"stderr":case"stdout":e.body.output&&t.detectPattern(e.body.output)}"request"===e.type&&"runInTerminal"===e.command&&e.arguments&&"integrated"===e.arguments.kind&&(s=e.seq)},onWillReceiveMessage:t=>{s&&"response"===t.type&&"runInTerminal"===t.command&&t.body&&s===t.request_seq&&(s=void 0,c.rememberShellPid(e,t.body.shellProcessId))}}}}}))}(e,r.type))),r)}))}})();var r=exports;for(var n in i)r[n]=i[n];i.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();
//# sourceMappingURL=https://cursor-sourcemaps.s3.amazonaws.com/sourcemaps/2dd5b2855ac68f3a3d3babee87d22b399a9db7d0/extensions/debug-server-ready/dist/extension.js.map