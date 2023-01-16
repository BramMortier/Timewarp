(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ky=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ky(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ay=function(n){const e=vd(n);return wd.encodeByteArray(e,!0)},ki=function(n){return Ay(n).replace(/\./g,"")},Td=function(n){try{return wd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Id(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ry(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ed(){try{return typeof indexedDB=="object"}catch{return!1}}function bd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function xy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Ly(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=()=>Ly().__FIREBASE_DEFAULTS__,Ny=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Py=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Td(n[1]);return e&&JSON.parse(e)},Dc=()=>{try{return Oy()||Ny()||Py()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sd=n=>{var e,t;return(t=(e=Dc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},My=n=>{const e=Sd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Fy=()=>{var n;return(n=Dc())===null||n===void 0?void 0:n.config},kd=n=>{var e;return(e=Dc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[ki(JSON.stringify(t)),ki(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="FirebaseError";class ft extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=By,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$y(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ft(s,a,r)}}function $y(n,e){return n.replace(jy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jy=/\{\$([^}]+)}/g;function qy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(gl(i)&&gl(o)){if(!rs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function gl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function zy(n,e){const t=new Hy(n,e);return t.subscribe.bind(t)}class Hy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ta),s.error===void 0&&(s.error=ta),s.complete===void 0&&(s.complete=ta);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ta(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=1e3,Wy=2,Qy=4*60*60*1e3,Yy=.5;function yl(n,e=Ky,t=Wy){const r=e*Math.pow(t,n),s=Math.round(Yy*r*(Math.random()-.5)*2);return Math.min(Qy,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n){return n&&n._delegate?n._delegate:n}class ht{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Uy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zy(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jy(n){return n===yn?void 0:n}function Zy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const t_={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},n_=$.INFO,r_={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},s_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=r_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ao{constructor(e){this.name=e,this._logLevel=n_,this._logHandler=s_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const i_=(n,e)=>e.some(t=>n instanceof t);let _l,vl;function o_(){return _l||(_l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a_(){return vl||(vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ad=new WeakMap,Oa=new WeakMap,Cd=new WeakMap,na=new WeakMap,Rc=new WeakMap;function c_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Qt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ad.set(t,n)}).catch(()=>{}),Rc.set(e,n),e}function u_(n){if(Oa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Oa.set(n,e)}let Na={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function l_(n){Na=n(Na)}function h_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ra(this),e,...t);return Cd.set(r,e.sort?e.sort():[e]),Qt(r)}:a_().includes(n)?function(...e){return n.apply(ra(this),e),Qt(Ad.get(this))}:function(...e){return Qt(n.apply(ra(this),e))}}function d_(n){return typeof n=="function"?h_(n):(n instanceof IDBTransaction&&u_(n),i_(n,o_())?new Proxy(n,Na):n)}function Qt(n){if(n instanceof IDBRequest)return c_(n);if(na.has(n))return na.get(n);const e=d_(n);return e!==n&&(na.set(n,e),Rc.set(e,n)),e}const ra=n=>Rc.get(n);function Dd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Qt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Qt(o.result),c.oldVersion,c.newVersion,Qt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const f_=["get","getKey","getAll","getAllKeys","count"],p_=["put","add","delete","clear"],sa=new Map;function wl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(sa.get(e))return sa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=p_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||f_.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&c.done]))[0]};return sa.set(e,i),i}l_(n=>({...n,get:(e,t,r)=>wl(e,t)||n.get(e,t,r),has:(e,t)=>!!wl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(g_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function g_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pa="@firebase/app",Tl="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new ao("@firebase/app"),y_="@firebase/app-compat",__="@firebase/analytics-compat",v_="@firebase/analytics",w_="@firebase/app-check-compat",T_="@firebase/app-check",I_="@firebase/auth",E_="@firebase/auth-compat",b_="@firebase/database",S_="@firebase/database-compat",k_="@firebase/functions",A_="@firebase/functions-compat",C_="@firebase/installations",D_="@firebase/installations-compat",R_="@firebase/messaging",x_="@firebase/messaging-compat",L_="@firebase/performance",O_="@firebase/performance-compat",N_="@firebase/remote-config",P_="@firebase/remote-config-compat",M_="@firebase/storage",F_="@firebase/storage-compat",U_="@firebase/firestore",V_="@firebase/firestore-compat",B_="firebase",$_="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="[DEFAULT]",j_={[Pa]:"fire-core",[y_]:"fire-core-compat",[v_]:"fire-analytics",[__]:"fire-analytics-compat",[T_]:"fire-app-check",[w_]:"fire-app-check-compat",[I_]:"fire-auth",[E_]:"fire-auth-compat",[b_]:"fire-rtdb",[S_]:"fire-rtdb-compat",[k_]:"fire-fn",[A_]:"fire-fn-compat",[C_]:"fire-iid",[D_]:"fire-iid-compat",[R_]:"fire-fcm",[x_]:"fire-fcm-compat",[L_]:"fire-perf",[O_]:"fire-perf-compat",[N_]:"fire-rc",[P_]:"fire-rc-compat",[M_]:"fire-gcs",[F_]:"fire-gcs-compat",[U_]:"fire-fst",[V_]:"fire-fst-compat","fire-js":"fire-js",[B_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Map,Fa=new Map;function q_(n,e){try{n.container.addComponent(e)}catch(t){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wt(n){const e=n.name;if(Fa.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Fa.set(e,n);for(const t of Ai.values())q_(t,n);return!0}function $n(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new Bn("app","Firebase",z_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=$_;function Rd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ma,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(t||(t=Fy()),!t)throw Yt.create("no-options");const i=Ai.get(s);if(i){if(rs(t,i.options)&&rs(r,i.config))return i;throw Yt.create("duplicate-app",{appName:s})}const o=new e_(s);for(const c of Fa.values())o.addComponent(c);const a=new H_(t,r,o);return Ai.set(s,a),a}function xc(n=Ma){const e=Ai.get(n);if(!e&&n===Ma)return Rd();if(!e)throw Yt.create("no-app",{appName:n});return e}function nt(n,e,t){var r;let s=(r=j_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(a.join(" "));return}wt(new ht(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="firebase-heartbeat-database",K_=1,ss="firebase-heartbeat-store";let ia=null;function xd(){return ia||(ia=Dd(G_,K_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ss)}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),ia}async function W_(n){try{return(await xd()).transaction(ss).objectStore(ss).get(Ld(n))}catch(e){if(e instanceof ft)Ln.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(t.message)}}}async function Il(n,e){try{const r=(await xd()).transaction(ss,"readwrite");return await r.objectStore(ss).put(e,Ld(n)),r.done}catch(t){if(t instanceof ft)Ln.warn(t.message);else{const r=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ln.warn(r.message)}}}function Ld(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=1024,Y_=30*24*60*60*1e3;class X_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Z_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=El();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Y_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=El(),{heartbeatsToSend:t,unsentEntries:r}=J_(this._heartbeatsCache.heartbeats),s=ki(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function El(){return new Date().toISOString().substring(0,10)}function J_(n,e=Q_){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),bl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Z_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ed()?bd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await W_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Il(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Il(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bl(n){return ki(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){wt(new ht("platform-logger",e=>new m_(e),"PRIVATE")),wt(new ht("heartbeat",e=>new X_(e),"PRIVATE")),nt(Pa,Tl,n),nt(Pa,Tl,"esm2017"),nt("fire-js","")}ev("");var tv="firebase",nv="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(tv,nv,"app");const Od="@firebase/installations",Lc="0.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=1e4,Pd=`w:${Lc}`,Md="FIS_v2",rv="https://firebaseinstallations.googleapis.com/v1",sv=60*60*1e3,iv="installations",ov="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},On=new Bn(iv,ov,av);function Fd(n){return n instanceof ft&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud({projectId:n}){return`${rv}/projects/${n}/installations`}function Vd(n){return{token:n.token,requestStatus:2,expiresIn:uv(n.expiresIn),creationTime:Date.now()}}async function Bd(n,e){const r=(await e.json()).error;return On.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $d({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function cv(n,{refreshToken:e}){const t=$d(n);return t.append("Authorization",lv(e)),t}async function jd(n){const e=await n();return e.status>=500&&e.status<600?n():e}function uv(n){return Number(n.replace("s","000"))}function lv(n){return`${Md} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Ud(n),s=$d(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:Md,appId:n.appId,sdkVersion:Pd},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await jd(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Vd(u.authToken)}}else throw await Bd("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=/^[cdef][\w-]{21}$/,Ua="";function pv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=mv(n);return fv.test(t)?t:Ua}catch{return Ua}}function mv(n){return dv(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new Map;function Hd(n,e){const t=co(n);Gd(t,e),gv(t,e)}function Gd(n,e){const t=zd.get(n);if(t)for(const r of t)r(e)}function gv(n,e){const t=yv();t&&t.postMessage({key:n,fid:e}),_v()}let wn=null;function yv(){return!wn&&"BroadcastChannel"in self&&(wn=new BroadcastChannel("[Firebase] FID Change"),wn.onmessage=n=>{Gd(n.data.key,n.data.fid)}),wn}function _v(){zd.size===0&&wn&&(wn.close(),wn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="firebase-installations-database",wv=1,Nn="firebase-installations-store";let oa=null;function Oc(){return oa||(oa=Dd(vv,wv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Nn)}}})),oa}async function Ci(n,e){const t=co(n),s=(await Oc()).transaction(Nn,"readwrite"),i=s.objectStore(Nn),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Hd(n,e.fid),e}async function Kd(n){const e=co(n),r=(await Oc()).transaction(Nn,"readwrite");await r.objectStore(Nn).delete(e),await r.done}async function uo(n,e){const t=co(n),s=(await Oc()).transaction(Nn,"readwrite"),i=s.objectStore(Nn),o=await i.get(t),a=e(o);return a===void 0?await i.delete(t):await i.put(a,t),await s.done,a&&(!o||o.fid!==a.fid)&&Hd(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(n){let e;const t=await uo(n.appConfig,r=>{const s=Tv(r),i=Iv(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Ua?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Tv(n){const e=n||{fid:pv(),registrationStatus:0};return Wd(e)}function Iv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(On.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Ev(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bv(n)}:{installationEntry:e}}async function Ev(n,e){try{const t=await hv(n,e);return Ci(n.appConfig,t)}catch(t){throw Fd(t)&&t.customData.serverCode===409?await Kd(n.appConfig):await Ci(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function bv(n){let e=await Sl(n.appConfig);for(;e.registrationStatus===1;)await qd(100),e=await Sl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Nc(n);return r||t}return e}function Sl(n){return uo(n,e=>{if(!e)throw On.create("installation-not-found");return Wd(e)})}function Wd(n){return Sv(n)?{fid:n.fid,registrationStatus:0}:n}function Sv(n){return n.registrationStatus===1&&n.registrationTime+Nd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv({appConfig:n,heartbeatServiceProvider:e},t){const r=Av(n,t),s=cv(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Pd,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await jd(()=>fetch(r,a));if(c.ok){const u=await c.json();return Vd(u)}else throw await Bd("Generate Auth Token",c)}function Av(n,{fid:e}){return`${Ud(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(n,e=!1){let t;const r=await uo(n.appConfig,i=>{if(!Qd(i))throw On.create("not-registered");const o=i.authToken;if(!e&&Rv(o))return i;if(o.requestStatus===1)return t=Cv(n,e),i;{if(!navigator.onLine)throw On.create("app-offline");const a=Lv(i);return t=Dv(n,a),a}});return t?await t:r.authToken}async function Cv(n,e){let t=await kl(n.appConfig);for(;t.authToken.requestStatus===1;)await qd(100),t=await kl(n.appConfig);const r=t.authToken;return r.requestStatus===0?Pc(n,e):r}function kl(n){return uo(n,e=>{if(!Qd(e))throw On.create("not-registered");const t=e.authToken;return Ov(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Dv(n,e){try{const t=await kv(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Ci(n.appConfig,r),t}catch(t){if(Fd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Kd(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ci(n.appConfig,r)}throw t}}function Qd(n){return n!==void 0&&n.registrationStatus===2}function Rv(n){return n.requestStatus===2&&!xv(n)}function xv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+sv}function Lv(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Ov(n){return n.requestStatus===1&&n.requestTime+Nd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(n){const e=n,{installationEntry:t,registrationPromise:r}=await Nc(e);return r?r.catch(console.error):Pc(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(n,e=!1){const t=n;return await Mv(t),(await Pc(t,e)).token}async function Mv(n){const{registrationPromise:e}=await Nc(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n){if(!n||!n.options)throw aa("App Configuration");if(!n.name)throw aa("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw aa(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function aa(n){return On.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="installations",Uv="installations-internal",Vv=n=>{const e=n.getProvider("app").getImmediate(),t=Fv(e),r=$n(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Bv=n=>{const e=n.getProvider("app").getImmediate(),t=$n(e,Yd).getImmediate();return{getId:()=>Nv(t),getToken:s=>Pv(t,s)}};function $v(){wt(new ht(Yd,Vv,"PUBLIC")),wt(new ht(Uv,Bv,"PRIVATE"))}$v();nt(Od,Lc);nt(Od,Lc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="analytics",jv="firebase_id",qv="origin",zv=60*1e3,Hv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new ao("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Gv(n,e){const t=document.createElement("script");t.src=`${Xd}?l=${n}&id=${e}`,t.async=!0,document.head.appendChild(t)}function Kv(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Wv(n,e,t,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Jd(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(a){Ge.error(a)}n("config",s,i)}async function Qv(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Jd(t);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Ge.error(i)}}function Yv(n,e,t,r){async function s(i,o,a){try{i==="event"?await Qv(n,e,t,o,a):i==="config"?await Wv(n,e,t,r,o,a):i==="consent"?n("consent","update",a):n("set",o)}catch(c){Ge.error(c)}}return s}function Xv(n,e,t,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Yv(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function Jv(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Xd)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},rt=new Bn("analytics","Analytics",Zv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=30,t0=1e3;class n0{constructor(e={},t=t0){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Zd=new n0;function r0(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function s0(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:r0(r)},i=Hv.replace("{app-id}",t),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function i0(n,e=Zd,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw rt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new c0;return setTimeout(async()=>{a.abort()},t!==void 0?t:zv),ef({appId:r,apiKey:s,measurementId:i},o,a,e)}async function ef(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Zd){var i;const{appId:o,measurementId:a}=n;try{await o0(r,e)}catch(c){if(a)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await s0(n);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!a0(u)){if(s.deleteThrottleMetadata(o),a)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?yl(t,s.intervalMillis,e0):yl(t,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return s.setThrottleMetadata(o,h),Ge.debug(`Calling attemptFetch again in ${l} millis`),ef(n,h,r,s)}}function o0(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function a0(n){if(!(n instanceof ft)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class c0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function u0(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(){if(Ed())try{await bd()}catch(n){return Ge.warn(rt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ge.warn(rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function h0(n,e,t,r,s,i,o){var a;const c=i0(n);c.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Ge.error(f)),e.push(c);const u=l0().then(f=>{if(f)return r.getId()}),[l,h]=await Promise.all([c,u]);Jv(i)||Gv(i,l.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[qv]="firebase",d.update=!0,h!=null&&(d[jv]=h),s("config",l.measurementId,d),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.app=e}_delete(){return delete Gr[this.app.options.appId],Promise.resolve()}}let Gr={},Al=[];const Cl={};let ca="dataLayer",f0="gtag",Dl,tf,Rl=!1;function p0(){const n=[];if(Id()&&n.push("This is a browser extension environment."),xy()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=rt.create("invalid-analytics-context",{errorInfo:e});Ge.warn(t.message)}}function m0(n,e,t){p0();const r=n.options.appId;if(!r)throw rt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rt.create("no-api-key");if(Gr[r]!=null)throw rt.create("already-exists",{id:r});if(!Rl){Kv(ca);const{wrappedGtag:i,gtagCore:o}=Xv(Gr,Al,Cl,ca,f0);tf=i,Dl=o,Rl=!0}return Gr[r]=h0(n,Al,Cl,e,Dl,ca,t),new d0(n)}function g0(n=xc()){n=pe(n);const e=$n(n,Di);return e.isInitialized()?e.getImmediate():y0(n)}function y0(n,e={}){const t=$n(n,Di);if(t.isInitialized()){const s=t.getImmediate();if(rs(e,t.getOptions()))return s;throw rt.create("already-initialized")}return t.initialize({options:e})}function _0(n,e,t,r){n=pe(n),u0(tf,Gr[n.app.options.appId],e,t,r).catch(s=>Ge.error(s))}const xl="@firebase/analytics",Ll="0.9.0";function v0(){wt(new ht(Di,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return m0(r,s,t)},"PUBLIC")),wt(new ht("analytics-internal",n,"PRIVATE")),nt(xl,Ll),nt(xl,Ll,"esm2017");function n(e){try{const t=e.getProvider(Di).getImmediate();return{logEvent:(r,s,i)=>_0(t,r,s,i)}}catch(t){throw rt.create("interop-component-reg-failed",{reason:t})}}}v0();const w0={apiKey:"AIzaSyBqZde_q0ihx9Ob-vPoeYcLq9JytNJeSVY",authDomain:"timewarp-61a12.firebaseapp.com",projectId:"timewarp-61a12",storageBucket:"timewarp-61a12.appspot.com",messagingSenderId:"543139666364",appId:"1:543139666364:web:548d0d53315c64a67433b9",measurementId:"G-5CYZQFQNZK"},nf=Rd(w0);g0(nf);var T0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Mc=Mc||{},N=T0||self;function Ri(){}function lo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function xs(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function I0(n){return Object.prototype.hasOwnProperty.call(n,ua)&&n[ua]||(n[ua]=++E0)}var ua="closure_uid_"+(1e9*Math.random()>>>0),E0=0;function b0(n,e,t){return n.call.apply(n.bind,arguments)}function S0(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function Ae(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=b0:Ae=S0,Ae.apply(null,arguments)}function oi(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Ie(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function on(){this.s=this.s,this.o=this.o}var k0=0;on.prototype.s=!1;on.prototype.na=function(){!this.s&&(this.s=!0,this.M(),k0!=0)&&I0(this)};on.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rf=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Fc(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Ol(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(lo(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function Ce(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var A0=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{N.addEventListener("test",Ri,e),N.removeEventListener("test",Ri,e)}catch{}return n}();function xi(n){return/^[\s\xa0]*$/.test(n)}var Nl=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function la(n,e){return n<e?-1:n>e?1:0}function ho(){var n=N.navigator;return n&&(n=n.userAgent)?n:""}function pt(n){return ho().indexOf(n)!=-1}function Uc(n){return Uc[" "](n),n}Uc[" "]=Ri;function C0(n){var e=x0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var D0=pt("Opera"),ar=pt("Trident")||pt("MSIE"),sf=pt("Edge"),Va=sf||ar,of=pt("Gecko")&&!(ho().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),R0=ho().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function af(){var n=N.document;return n?n.documentMode:void 0}var Li;e:{var ha="",da=function(){var n=ho();if(of)return/rv:([^\);]+)(\)|;)/.exec(n);if(sf)return/Edge\/([\d\.]+)/.exec(n);if(ar)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(R0)return/WebKit\/(\S+)/.exec(n);if(D0)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(da&&(ha=da?da[1]:""),ar){var fa=af();if(fa!=null&&fa>parseFloat(ha)){Li=String(fa);break e}}Li=ha}var x0={};function L0(){return C0(function(){let n=0;const e=Nl(String(Li)).split("."),t=Nl("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var s=e[o]||"",i=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;n=la(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||la(s[2].length==0,i[2].length==0)||la(s[2],i[2]),s=s[3],i=i[3]}while(n==0)}return 0<=n})}var Ba;if(N.document&&ar){var Pl=af();Ba=Pl||parseInt(Li,10)||void 0}else Ba=void 0;var O0=Ba;function is(n,e){if(Ce.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(of){e:{try{Uc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:N0[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&is.X.h.call(this)}}Ie(is,Ce);var N0={2:"touch",3:"pen",4:"mouse"};is.prototype.h=function(){is.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ls="closure_listenable_"+(1e6*Math.random()|0),P0=0;function M0(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=s,this.key=++P0,this.ba=this.ea=!1}function fo(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Vc(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function cf(n){const e={};for(const t in n)e[t]=n[t];return e}const Ml="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uf(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<Ml.length;i++)t=Ml[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function po(n){this.src=n,this.g={},this.h=0}po.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=ja(n,e,r,s);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new M0(e,this.src,i,!!r,s),e.ea=t,n.push(e)),e};function $a(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=rf(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(fo(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ja(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==r)return s}return-1}var Bc="closure_lm_"+(1e6*Math.random()|0),pa={};function lf(n,e,t,r,s){if(r&&r.once)return df(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)lf(n,e[i],t,r,s);return null}return t=qc(t),n&&n[Ls]?n.N(e,t,xs(r)?!!r.capture:!!r,s):hf(n,e,t,!1,r,s)}function hf(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=xs(s)?!!s.capture:!!s,a=jc(n);if(a||(n[Bc]=a=new po(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=F0(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)A0||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(pf(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function F0(){function n(t){return e.call(n.src,n.listener,t)}const e=U0;return n}function df(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)df(n,e[i],t,r,s);return null}return t=qc(t),n&&n[Ls]?n.O(e,t,xs(r)?!!r.capture:!!r,s):hf(n,e,t,!0,r,s)}function ff(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)ff(n,e[i],t,r,s);else r=xs(r)?!!r.capture:!!r,t=qc(t),n&&n[Ls]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=ja(i,t,r,s),-1<t&&(fo(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=jc(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ja(e,t,r,s)),(t=-1<n?e[n]:null)&&$c(t))}function $c(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Ls])$a(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(pf(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=jc(e))?($a(t,n),t.h==0&&(t.src=null,e[Bc]=null)):fo(n)}}}function pf(n){return n in pa?pa[n]:pa[n]="on"+n}function U0(n,e){if(n.ba)n=!0;else{e=new is(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&$c(n),n=t.call(r,e)}return n}function jc(n){return n=n[Bc],n instanceof po?n:null}var ma="__closure_events_fn_"+(1e9*Math.random()>>>0);function qc(n){return typeof n=="function"?n:(n[ma]||(n[ma]=function(e){return n.handleEvent(e)}),n[ma])}function ye(){on.call(this),this.i=new po(this),this.P=this,this.I=null}Ie(ye,on);ye.prototype[Ls]=!0;ye.prototype.removeEventListener=function(n,e,t,r){ff(this,n,e,t,r)};function Te(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new Ce(e,n);else if(e instanceof Ce)e.target=e.target||n;else{var s=e;e=new Ce(r,n),uf(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=ai(o,r,!0,e)&&s}if(o=e.g=n,s=ai(o,r,!0,e)&&s,s=ai(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=ai(o,r,!1,e)&&s}ye.prototype.M=function(){if(ye.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)fo(t[r]);delete n.g[e],n.h--}}this.I=null};ye.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ye.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function ai(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&$a(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var zc=N.JSON.stringify;function V0(){var n=yf;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class B0{constructor(){this.h=this.g=null}add(e,t){const r=mf.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var mf=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new $0,n=>n.reset());class $0{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function j0(n){N.setTimeout(()=>{throw n},0)}function gf(n,e){qa||q0(),za||(qa(),za=!0),yf.add(n,e)}var qa;function q0(){var n=N.Promise.resolve(void 0);qa=function(){n.then(z0)}}var za=!1,yf=new B0;function z0(){for(var n;n=V0();){try{n.h.call(n.g)}catch(t){j0(t)}var e=mf;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}za=!1}function mo(n,e){ye.call(this),this.h=n||1,this.g=e||N,this.j=Ae(this.lb,this),this.l=Date.now()}Ie(mo,ye);D=mo.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Te(this,"tick"),this.ca&&(Hc(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hc(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}D.M=function(){mo.X.M.call(this),Hc(this),delete this.g};function Gc(n,e,t){if(typeof n=="function")t&&(n=Ae(n,t));else if(n&&typeof n.handleEvent=="function")n=Ae(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(n,e||0)}function _f(n){n.g=Gc(()=>{n.g=null,n.i&&(n.i=!1,_f(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class H0 extends on{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_f(this)}M(){super.M(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function os(n){on.call(this),this.h=n,this.g={}}Ie(os,on);var Fl=[];function vf(n,e,t,r){Array.isArray(t)||(t&&(Fl[0]=t.toString()),t=Fl);for(var s=0;s<t.length;s++){var i=lf(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function wf(n){Vc(n.g,function(e,t){this.g.hasOwnProperty(t)&&$c(e)},n),n.g={}}os.prototype.M=function(){os.X.M.call(this),wf(this)};os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function go(){this.g=!0}go.prototype.Aa=function(){this.g=!1};function G0(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function K0(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function Qn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Q0(n,t)+(r?" "+r:"")})}function W0(n,e){n.info(function(){return"TIMEOUT: "+e})}go.prototype.info=function(){};function Q0(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return zc(t)}catch{return e}}var jn={},Ul=null;function yo(){return Ul=Ul||new ye}jn.Pa="serverreachability";function Tf(n){Ce.call(this,jn.Pa,n)}Ie(Tf,Ce);function as(n){const e=yo();Te(e,new Tf(e))}jn.STAT_EVENT="statevent";function If(n,e){Ce.call(this,jn.STAT_EVENT,n),this.stat=e}Ie(If,Ce);function Fe(n){const e=yo();Te(e,new If(e,n))}jn.Qa="timingevent";function Ef(n,e){Ce.call(this,jn.Qa,n),this.size=e}Ie(Ef,Ce);function Os(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){n()},e)}var _o={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bf={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Kc(){}Kc.prototype.h=null;function Vl(n){return n.h||(n.h=n.i())}function Sf(){}var Ns={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Wc(){Ce.call(this,"d")}Ie(Wc,Ce);function Qc(){Ce.call(this,"c")}Ie(Qc,Ce);var Ha;function vo(){}Ie(vo,Kc);vo.prototype.g=function(){return new XMLHttpRequest};vo.prototype.i=function(){return{}};Ha=new vo;function Ps(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new os(this),this.O=Y0,n=Va?125:void 0,this.T=new mo(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new kf}function kf(){this.i=null,this.g="",this.h=!1}var Y0=45e3,Ga={},Oi={};D=Ps.prototype;D.setTimeout=function(n){this.O=n};function Ka(n,e,t){n.K=1,n.v=To(Ot(e)),n.s=t,n.P=!0,Af(n,null)}function Af(n,e){n.F=Date.now(),Ms(n),n.A=Ot(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),Pf(t.i,"t",r),n.C=0,t=n.l.H,n.h=new kf,n.g=np(n.l,t?e:null,!n.s),0<n.N&&(n.L=new H0(Ae(n.La,n,n.g),n.N)),vf(n.S,n.g,"readystatechange",n.ib),e=n.H?cf(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),as(),G0(n.j,n.u,n.A,n.m,n.U,n.s)}D.ib=function(n){n=n.target;const e=this.L;e&&Ct(n)==3?e.l():this.La(n)};D.La=function(n){try{if(n==this.g)e:{const l=Ct(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Va||this.g&&(this.h.h||this.g.fa()||ql(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?as(3):as(2)),wo(this);var t=this.g.aa();this.Y=t;t:if(Cf(this)){var r=ql(this.g);n="";var s=r.length,i=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),Kr(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,K0(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xi(a)){var u=a;break t}}u=null}if(t=u)Qn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Wa(this,t);else{this.i=!1,this.o=3,Fe(12),Tn(this),Kr(this);break e}}this.P?(Df(this,l,o),Va&&this.i&&l==3&&(vf(this.S,this.T,"tick",this.hb),this.T.start())):(Qn(this.j,this.m,o,null),Wa(this,o)),l==4&&Tn(this),this.i&&!this.I&&(l==4?Jf(this.l,this):(this.i=!1,Ms(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Fe(12)):(this.o=0,Fe(13)),Tn(this),Kr(this)}}}catch{}finally{}};function Cf(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function Df(n,e,t){let r=!0,s;for(;!n.I&&n.C<t.length;)if(s=X0(n,t),s==Oi){e==4&&(n.o=4,Fe(14),r=!1),Qn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Ga){n.o=4,Fe(15),Qn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Qn(n.j,n.m,s,null),Wa(n,s);Cf(n)&&s!=Oi&&s!=Ga&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Fe(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),nu(e),e.K=!0,Fe(11))):(Qn(n.j,n.m,t,"[Invalid Chunked Response]"),Tn(n),Kr(n))}D.hb=function(){if(this.g){var n=Ct(this.g),e=this.g.fa();this.C<e.length&&(wo(this),Df(this,n,e),this.i&&n!=4&&Ms(this))}};function X0(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Oi:(t=Number(e.substring(t,r)),isNaN(t)?Ga:(r+=1,r+t>e.length?Oi:(e=e.substr(r,t),n.C=r+t,e)))}D.cancel=function(){this.I=!0,Tn(this)};function Ms(n){n.V=Date.now()+n.O,Rf(n,n.O)}function Rf(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Os(Ae(n.gb,n),e)}function wo(n){n.B&&(N.clearTimeout(n.B),n.B=null)}D.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(W0(this.j,this.A),this.K!=2&&(as(),Fe(17)),Tn(this),this.o=2,Kr(this)):Rf(this,this.V-n)};function Kr(n){n.l.G==0||n.I||Jf(n.l,n)}function Tn(n){wo(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Hc(n.T),wf(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Wa(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Qa(t.h,n))){if(!n.J&&Qa(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Mi(t),bo(t);else break e;tu(t),Fe(18)}}else t.Ba=s[1],0<t.Ba-t.T&&37500>s[2]&&t.L&&t.A==0&&!t.v&&(t.v=Os(Ae(t.cb,t),6e3));if(1>=Uf(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else In(t,11)}else if((n.J||t.g==n)&&Mi(t),!xi(e))for(s=t.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Yc(i,i.h),i.h=null))}if(r.D){const p=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.za=p,W(r.F,r.D,p))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=tp(r,r.H?r.ka:null,r.V),o.J){Vf(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(wo(a),Ms(a)),r.g=o}else Yf(r);0<t.i.length&&So(t)}else u[0]!="stop"&&u[0]!="close"||In(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?In(t,7):eu(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}as(4)}catch{}}function J0(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(lo(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Z0(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(lo(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function xf(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(lo(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Z0(n),r=J0(n),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}var Lf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ew(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function kn(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof kn){this.h=e!==void 0?e:n.h,Ni(this,n.j),this.s=n.s,this.g=n.g,Pi(this,n.m),this.l=n.l,e=n.i;var t=new cs;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Bl(this,t),this.o=n.o}else n&&(t=String(n).match(Lf))?(this.h=!!e,Ni(this,t[1]||"",!0),this.s=Fr(t[2]||""),this.g=Fr(t[3]||"",!0),Pi(this,t[4]),this.l=Fr(t[5]||"",!0),Bl(this,t[6]||"",!0),this.o=Fr(t[7]||"")):(this.h=!!e,this.i=new cs(null,this.h))}kn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Ur(e,$l,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Ur(e,$l,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Ur(t,t.charAt(0)=="/"?rw:nw,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Ur(t,iw)),n.join("")};function Ot(n){return new kn(n)}function Ni(n,e,t){n.j=t?Fr(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Pi(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Bl(n,e,t){e instanceof cs?(n.i=e,ow(n.i,n.h)):(t||(e=Ur(e,sw)),n.i=new cs(e,n.h))}function W(n,e,t){n.i.set(e,t)}function To(n){return W(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Fr(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ur(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,tw),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function tw(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var $l=/[#\/\?@]/g,nw=/[#\?:]/g,rw=/[#\?]/g,sw=/[#\?@]/g,iw=/#/g;function cs(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function an(n){n.g||(n.g=new Map,n.h=0,n.i&&ew(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}D=cs.prototype;D.add=function(n,e){an(this),this.i=null,n=Ir(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Of(n,e){an(n),e=Ir(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Nf(n,e){return an(n),e=Ir(n,e),n.g.has(e)}D.forEach=function(n,e){an(this),this.g.forEach(function(t,r){t.forEach(function(s){n.call(e,s,r,this)},this)},this)};D.oa=function(){an(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const s=n[r];for(let i=0;i<s.length;i++)t.push(e[r])}return t};D.W=function(n){an(this);let e=[];if(typeof n=="string")Nf(this,n)&&(e=e.concat(this.g.get(Ir(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};D.set=function(n,e){return an(this),this.i=null,n=Ir(this,n),Nf(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};D.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Pf(n,e,t){Of(n,e),0<t.length&&(n.i=null,n.g.set(Ir(n,e),Fc(t)),n.h+=t.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function Ir(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function ow(n,e){e&&!n.j&&(an(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(Of(this,r),Pf(this,s,t))},n)),n.j=e}var aw=class{constructor(e,t){this.h=e,this.g=t}};function Mf(n){this.l=n||cw,N.PerformanceNavigationTiming?(n=N.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(N.g&&N.g.Ga&&N.g.Ga()&&N.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cw=10;function Ff(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Uf(n){return n.h?1:n.g?n.g.size:0}function Qa(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Yc(n,e){n.g?n.g.add(e):n.h=e}function Vf(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Mf.prototype.cancel=function(){if(this.i=Bf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Bf(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Fc(n.i)}function Xc(){}Xc.prototype.stringify=function(n){return N.JSON.stringify(n,void 0)};Xc.prototype.parse=function(n){return N.JSON.parse(n,void 0)};function uw(){this.g=new Xc}function lw(n,e,t){const r=t||"";try{xf(n,function(s,i){let o=s;xs(s)&&(o=zc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function hw(n,e){const t=new go;if(N.Image){const r=new Image;r.onload=oi(ci,t,r,"TestLoadImage: loaded",!0,e),r.onerror=oi(ci,t,r,"TestLoadImage: error",!1,e),r.onabort=oi(ci,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=oi(ci,t,r,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function ci(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Fs(n){this.l=n.ac||null,this.j=n.jb||!1}Ie(Fs,Kc);Fs.prototype.g=function(){return new Io(this.l,this.j)};Fs.prototype.i=function(n){return function(){return n}}({});function Io(n,e){ye.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Jc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ie(Io,ye);var Jc=0;D=Io.prototype;D.open=function(n,e){if(this.readyState!=Jc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,us(this)};D.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||N).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=Jc};D.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$f(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function $f(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}D.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Us(this):us(this),this.readyState==3&&$f(this)}};D.Va=function(n){this.g&&(this.response=this.responseText=n,Us(this))};D.Ua=function(n){this.g&&(this.response=n,Us(this))};D.ga=function(){this.g&&Us(this)};function Us(n){n.readyState=4,n.l=null,n.j=null,n.A=null,us(n)}D.setRequestHeader=function(n,e){this.v.append(n,e)};D.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function us(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var dw=N.JSON.parse;function te(n){ye.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jf,this.K=this.L=!1}Ie(te,ye);var jf="",fw=/^https?$/i,pw=["POST","PUT"];D=te.prototype;D.Ka=function(n){this.L=n};D.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ha.g(),this.C=this.u?Vl(this.u):Vl(Ha),this.g.onreadystatechange=Ae(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){jl(this,i);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)t.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())t.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),s=N.FormData&&n instanceof N.FormData,!(0<=rf(pw,e))||r||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hf(this),0<this.B&&((this.K=mw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.qa,this)):this.A=Gc(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){jl(this,i)}};function mw(n){return ar&&L0()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}D.qa=function(){typeof Mc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function jl(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,qf(n),Eo(n)}function qf(n){n.D||(n.D=!0,Te(n,"complete"),Te(n,"error"))}D.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Te(this,"complete"),Te(this,"abort"),Eo(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Eo(this,!0)),te.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?zf(this):this.fb())};D.fb=function(){zf(this)};function zf(n){if(n.h&&typeof Mc<"u"&&(!n.C[1]||Ct(n)!=4||n.aa()!=2)){if(n.v&&Ct(n)==4)Gc(n.Ha,0,n);else if(Te(n,"readystatechange"),Ct(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var s=String(n.H).match(Lf)[1]||null;if(!s&&N.self&&N.self.location){var i=N.self.location.protocol;s=i.substr(0,i.length-1)}r=!fw.test(s?s.toLowerCase():"")}t=r}if(t)Te(n,"complete"),Te(n,"success");else{n.m=6;try{var o=2<Ct(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",qf(n)}}finally{Eo(n)}}}}function Eo(n,e){if(n.g){Hf(n);const t=n.g,r=n.C[0]?Ri:null;n.g=null,n.C=null,e||Te(n,"ready");try{t.onreadystatechange=r}catch{}}}function Hf(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(N.clearTimeout(n.A),n.A=null)}function Ct(n){return n.g?n.g.readyState:0}D.aa=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),dw(e)}};function ql(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case jf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gf(n){let e="";return Vc(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Zc(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Gf(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):W(n,e,t))}function Lr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Kf(n){this.Ca=0,this.i=[],this.j=new go,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Lr("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Lr("baseRetryDelayMs",5e3,n),this.bb=Lr("retryDelaySeedMs",1e4,n),this.$a=Lr("forwardChannelMaxRetries",2,n),this.ta=Lr("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Mf(n&&n.concurrentRequestLimit),this.Fa=new uw,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=Kf.prototype;D.ma=8;D.G=1;function eu(n){if(Wf(n),n.G==3){var e=n.U++,t=Ot(n.F);W(t,"SID",n.I),W(t,"RID",e),W(t,"TYPE","terminate"),Vs(n,t),e=new Ps(n,n.j,e,void 0),e.K=2,e.v=To(Ot(t)),t=!1,N.navigator&&N.navigator.sendBeacon&&(t=N.navigator.sendBeacon(e.v.toString(),"")),!t&&N.Image&&(new Image().src=e.v,t=!0),t||(e.g=np(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ms(e)}ep(n)}function bo(n){n.g&&(nu(n),n.g.cancel(),n.g=null)}function Wf(n){bo(n),n.u&&(N.clearTimeout(n.u),n.u=null),Mi(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&N.clearTimeout(n.m),n.m=null)}function So(n){Ff(n.h)||n.m||(n.m=!0,gf(n.Ja,n),n.C=0)}function gw(n,e){return Uf(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Os(Ae(n.Ja,n,e),Zf(n,n.C)),n.C++,!0)}D.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const s=new Ps(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=cf(i),uf(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Qf(this,s,e),t=Ot(this.F),W(t,"RID",n),W(t,"CVER",22),this.D&&W(t,"X-HTTP-Session-Id",this.D),Vs(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(Gf(i)))+"&"+e:this.o&&Zc(t,this.o,i)),Yc(this.h,s),this.Ya&&W(t,"TYPE","init"),this.O?(W(t,"$req",e),W(t,"SID","null"),s.Z=!0,Ka(s,t,null)):Ka(s,t,e),this.G=2}}else this.G==3&&(n?zl(this,n):this.i.length==0||Ff(this.h)||zl(this))};function zl(n,e){var t;e?t=e.m:t=n.U++;const r=Ot(n.F);W(r,"SID",n.I),W(r,"RID",t),W(r,"AID",n.T),Vs(n,r),n.o&&n.s&&Zc(r,n.o,n.s),t=new Ps(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Qf(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Yc(n.h,t),Ka(t,r,e)}function Vs(n,e){n.ia&&Vc(n.ia,function(t,r){W(e,r,t)}),n.l&&xf({},function(t,r){W(e,r,t)})}function Qf(n,e,t){t=Math.min(n.i.length,t);var r=n.l?Ae(n.l.Ra,n.l,n):null;e:{var s=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{lw(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function Yf(n){n.g||n.u||(n.Z=1,gf(n.Ia,n),n.A=0)}function tu(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Os(Ae(n.Ia,n),Zf(n,n.A)),n.A++,!0)}D.Ia=function(){if(this.u=null,Xf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Os(Ae(this.eb,this),n)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Fe(10),bo(this),Xf(this))};function nu(n){n.B!=null&&(N.clearTimeout(n.B),n.B=null)}function Xf(n){n.g=new Ps(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Ot(n.sa);W(e,"RID","rpc"),W(e,"SID",n.I),W(e,"CI",n.L?"0":"1"),W(e,"AID",n.T),W(e,"TYPE","xmlhttp"),Vs(n,e),n.o&&n.s&&Zc(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=To(Ot(e)),t.s=null,t.P=!0,Af(t,n)}D.cb=function(){this.v!=null&&(this.v=null,bo(this),tu(this),Fe(19))};function Mi(n){n.v!=null&&(N.clearTimeout(n.v),n.v=null)}function Jf(n,e){var t=null;if(n.g==e){Mi(n),nu(n),n.g=null;var r=2}else if(Qa(n.h,e))t=e.D,Vf(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;r=yo(),Te(r,new Ef(r,t)),So(n)}else Yf(n);else if(s=e.o,s==3||s==0&&0<n.pa||!(r==1&&gw(n,e)||r==2&&tu(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),s){case 1:In(n,5);break;case 4:In(n,10);break;case 3:In(n,6);break;default:In(n,2)}}}function Zf(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function In(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=Ae(n.kb,n);t||(t=new kn("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||Ni(t,"https"),To(t)),hw(t.toString(),r)}else Fe(2);n.G=0,n.l&&n.l.va(e),ep(n),Wf(n)}D.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function ep(n){if(n.G=0,n.la=[],n.l){const e=Bf(n.h);(e.length!=0||n.i.length!=0)&&(Ol(n.la,e),Ol(n.la,n.i),n.h.i.length=0,Fc(n.i),n.i.length=0),n.l.ua()}}function tp(n,e,t){var r=t instanceof kn?Ot(t):new kn(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Pi(r,r.m);else{var s=N.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new kn(null,void 0);r&&Ni(i,r),e&&(i.g=e),s&&Pi(i,s),t&&(i.l=t),r=i}return t=n.D,e=n.za,t&&e&&W(r,t,e),W(r,"VER",n.ma),Vs(n,r),r}function np(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new te(new Fs({jb:!0})):new te(n.ra),e.Ka(n.H),e}function rp(){}D=rp.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Fi(){if(ar&&!(10<=Number(O0)))throw Error("Environmental error: no available transport.")}Fi.prototype.g=function(n,e){return new We(n,e)};function We(n,e){ye.call(this),this.g=new Kf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!xi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xi(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Er(this)}Ie(We,ye);We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Fe(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=tp(n,null,n.V),So(n)};We.prototype.close=function(){eu(this.g)};We.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=zc(n),n=t);e.i.push(new aw(e.ab++,n)),e.G==3&&So(e)};We.prototype.M=function(){this.g.l=null,delete this.j,eu(this.g),delete this.g,We.X.M.call(this)};function sp(n){Wc.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Ie(sp,Wc);function ip(){Qc.call(this),this.status=1}Ie(ip,Qc);function Er(n){this.g=n}Ie(Er,rp);Er.prototype.xa=function(){Te(this.g,"a")};Er.prototype.wa=function(n){Te(this.g,new sp(n))};Er.prototype.va=function(n){Te(this.g,new ip)};Er.prototype.ua=function(){Te(this.g,"b")};Fi.prototype.createWebChannel=Fi.prototype.g;We.prototype.send=We.prototype.u;We.prototype.open=We.prototype.m;We.prototype.close=We.prototype.close;_o.NO_ERROR=0;_o.TIMEOUT=8;_o.HTTP_ERROR=6;bf.COMPLETE="complete";Sf.EventType=Ns;Ns.OPEN="a";Ns.CLOSE="b";Ns.ERROR="c";Ns.MESSAGE="d";ye.prototype.listen=ye.prototype.N;te.prototype.listenOnce=te.prototype.O;te.prototype.getLastError=te.prototype.Oa;te.prototype.getLastErrorCode=te.prototype.Ea;te.prototype.getStatus=te.prototype.aa;te.prototype.getResponseJson=te.prototype.Sa;te.prototype.getResponseText=te.prototype.fa;te.prototype.send=te.prototype.da;te.prototype.setWithCredentials=te.prototype.Ka;var yw=function(){return new Fi},_w=function(){return yo()},ga=_o,vw=bf,ww=jn,Hl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Tw=Fs,ui=Sf,Iw=te;const Gl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new ao("@firebase/firestore");function Kl(){return Pn.logLevel}function R(n,...e){if(Pn.logLevel<=$.DEBUG){const t=e.map(ru);Pn.debug(`Firestore (${br}): ${n}`,...t)}}function Nt(n,...e){if(Pn.logLevel<=$.ERROR){const t=e.map(ru);Pn.error(`Firestore (${br}): ${n}`,...t)}}function Ya(n,...e){if(Pn.logLevel<=$.WARN){const t=e.map(ru);Pn.warn(`Firestore (${br}): ${n}`,...t)}}function ru(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n="Unexpected state"){const e=`FIRESTORE (${br}) INTERNAL ASSERTION FAILED: `+n;throw Nt(e),new Error(e)}function G(n,e){n||O()}function M(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ew{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class bw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Sw{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new op(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new Ee(e)}}class kw{constructor(e,t,r,s){this.h=e,this.l=t,this.m=r,this.g=s,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(G(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Aw{constructor(e,t,r,s){this.h=e,this.l=t,this.m=r,this.g=s}getToken(){return Promise.resolve(new kw(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dw{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const r=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.A=t.token,new Cw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Rw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function cr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new C(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ee(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new ee(0,0))}static max(){return new P(new ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,r){t===void 0?t=0:t>e.length&&O(),r===void 0?r=e.length-t:r>e.length-t&&O(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ls.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ls?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class K extends ls{construct(e,t,r){return new K(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new K(t)}static emptyPath(){return new K([])}}const xw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends ls{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return xw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new C(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new C(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new C(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(K.fromString(e))}static fromName(e){return new x(K.fromString(e).popFirst(5))}static empty(){return new x(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&K.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return K.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new K(e.slice()))}}function Lw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=P.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new en(s,x.empty(),e)}function Ow(n){return new en(n.readTime,n.key,-1)}class en{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new en(P.min(),x.empty(),-1)}static max(){return new en(P.max(),x.empty(),-1)}}function Nw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(n){if(n.code!==v.FAILED_PRECONDITION||n.message!==Pw)throw n;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new E((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof E?t:E.resolve(t)}catch(t){return E.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):E.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):E.reject(t)}static resolve(e){return new E((t,r)=>{t(e)})}static reject(e){return new E((t,r)=>{r(e)})}static waitFor(e){return new E((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=E.resolve(!1);for(const r of e)t=t.next(s=>s?E.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new E((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,t){return new E((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function $s(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>t.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}su.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t,r,s,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class hs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function cp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(n){return n==null}function Ui(n){return n===0&&1/n==-1/0}function Uw(n){return typeof n=="number"&&Number.isInteger(n)&&!Ui(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Oe(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const Vw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tn(n){if(G(!!n),typeof n=="string"){let e=0;const t=Vw.exec(n);if(G(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ur(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function lp(n){const e=n.mapValue.fields.__previous_value__;return up(e)?lp(e):e}function ds(n){const e=tn(n.mapValue.fields.__local_write_time__.timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?up(n)?4:Bw(n)?9007199254740991:10:O()}function Tt(n,e){if(n===e)return!0;const t=Mn(n);if(t!==Mn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ds(n).isEqual(ds(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=tn(r.timestampValue),o=tn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return ur(r.bytesValue).isEqual(ur(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return ae(r.geoPointValue.latitude)===ae(s.geoPointValue.latitude)&&ae(r.geoPointValue.longitude)===ae(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ae(r.integerValue)===ae(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ae(r.doubleValue),o=ae(s.doubleValue);return i===o?Ui(i)===Ui(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return cr(n.arrayValue.values||[],e.arrayValue.values||[],Tt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Wl(i)!==Wl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Tt(i[a],o[a])))return!1;return!0}(n,e);default:return O()}}function fs(n,e){return(n.values||[]).find(t=>Tt(t,e))!==void 0}function lr(n,e){if(n===e)return 0;const t=Mn(n),r=Mn(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ae(s.integerValue||s.doubleValue),a=ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ql(n.timestampValue,e.timestampValue);case 4:return Ql(ds(n),ds(e));case 5:return q(n.stringValue,e.stringValue);case 6:return function(s,i){const o=ur(s),a=ur(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=q(o[c],a[c]);if(u!==0)return u}return q(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=q(ae(s.latitude),ae(i.latitude));return o!==0?o:q(ae(s.longitude),ae(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=lr(o[c],a[c]);if(u)return u}return q(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===li.mapValue&&i===li.mapValue)return 0;if(s===li.mapValue)return 1;if(i===li.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=q(a[l],u[l]);if(h!==0)return h;const d=lr(o[a[l]],c[u[l]]);if(d!==0)return d}return q(a.length,u.length)}(n.mapValue,e.mapValue);default:throw O()}}function Ql(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=tn(n),r=tn(e),s=q(t.seconds,r.seconds);return s!==0?s:q(t.nanos,r.nanos)}function hr(n){return Xa(n)}function Xa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const s=tn(r);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?ur(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,x.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Xa(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Xa(r.fields[a])}`;return i+"}"}(n.mapValue):O();var e,t}function Yl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ja(n){return!!n&&"integerValue"in n}function iu(n){return!!n&&"arrayValue"in n}function Xl(n){return!!n&&"nullValue"in n}function Jl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pi(n){return!!n&&"mapValue"in n}function Wr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return qn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Wr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Bw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){this.position=e,this.inclusive=t}}function Zl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),t.key):r=lr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function eh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{}class ue extends hp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new qw(e,t,r):t==="array-contains"?new Gw(e,r):t==="in"?new Kw(e,r):t==="not-in"?new Ww(e,r):t==="array-contains-any"?new Qw(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new zw(e,r):new Hw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(lr(t,this.value)):t!==null&&Mn(this.value)===Mn(t)&&this.matchesComparison(lr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class dt extends hp{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new dt(e,t)}matches(e){return dp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function dp(n){return n.op==="and"}function $w(n){return jw(n)&&dp(n)}function jw(n){for(const e of n.filters)if(e instanceof dt)return!1;return!0}function fp(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+hr(n.value);{const e=n.filters.map(t=>fp(t)).join(",");return`${n.op}(${e})`}}function pp(n,e){return n instanceof ue?function(t,r){return r instanceof ue&&t.op===r.op&&t.field.isEqual(r.field)&&Tt(t.value,r.value)}(n,e):n instanceof dt?function(t,r){return r instanceof dt&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((s,i,o)=>s&&pp(i,r.filters[o]),!0):!1}(n,e):void O()}function mp(n){return n instanceof ue?function(e){return`${e.field.canonicalString()} ${e.op} ${hr(e.value)}`}(n):n instanceof dt?function(e){return e.op.toString()+" {"+e.getFilters().map(mp).join(" ,")+"}"}(n):"Filter"}class qw extends ue{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class zw extends ue{constructor(e,t){super(e,"in",t),this.keys=gp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Hw extends ue{constructor(e,t){super(e,"not-in",t),this.keys=gp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function gp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>x.fromName(r.referenceValue))}class Gw extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return iu(t)&&fs(t.arrayValue,this.value)}}class Kw extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fs(this.value.arrayValue,t)}}class Ww extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!fs(this.value.arrayValue,t)}}class Qw extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!iu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>fs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hi(this.root,e,this.comparator,!0)}}class hi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ve.RED,this.left=s??ve.EMPTY,this.right=i??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ve(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(n,e,t,r,s){return this}insert(n,e,t){return new ve(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new th(this.data.getIterator())}getIteratorFrom(e){return new th(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class th{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new st([])}unionWith(e){let t=new fe(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!pi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wr(t)}setAll(e){let t=Se.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Wr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());pi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];pi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){qn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ue(Wr(this.value))}}function yp(n){const e=[];return qn(n.fields,(t,r)=>{const s=new Se([t]);if(pi(r)){const i=yp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new st(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new be(e,0,P.min(),P.min(),P.min(),Ue.empty(),0)}static newFoundDocument(e,t,r,s){return new be(e,1,t,P.min(),r,s,0)}static newNoDocument(e,t){return new be(e,2,t,P.min(),P.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,P.min(),P.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function nh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Xw(n,e,t,r,s,i,o)}function ou(n){const e=M(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>fp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ko(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>hr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>hr(r)).join(",")),e.ft=t}return e.ft}function au(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Yw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!eh(n.startAt,e.startAt)&&eh(n.endAt,e.endAt)}function Za(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Jw(n,e,t,r,s,i,o,a){return new js(n,e,t,r,s,i,o,a)}function Ao(n){return new js(n)}function rh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _p(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function cu(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function vp(n){return n.collectionGroup!==null}function Zn(n){const e=M(n);if(e.dt===null){e.dt=[];const t=cu(e),r=_p(e);if(t!==null&&r===null)t.isKeyField()||e.dt.push(new Qr(t)),e.dt.push(new Qr(Se.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Qr(Se.keyField(),i))}}}return e.dt}function Pt(n){const e=M(n);if(!e._t)if(e.limitType==="F")e._t=nh(e.path,e.collectionGroup,Zn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Zn(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Qr(i.field,o))}const r=e.endAt?new Vi(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Vi(e.startAt.position,e.startAt.inclusive):null;e._t=nh(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e._t}function ec(n,e){e.getFirstInequalityField(),cu(n);const t=n.filters.concat([e]);return new js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Bi(n,e,t){return new js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Co(n,e){return au(Pt(n),Pt(e))&&n.limitType===e.limitType}function wp(n){return`${ou(Pt(n))}|lt:${n.limitType}`}function tc(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>mp(r)).join(", ")}]`),ko(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>hr(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>hr(r)).join(",")),`Target(${t})`}(Pt(n))}; limitType=${n.limitType})`}function uu(n,e){return e.isFoundDocument()&&function(t,r){const s=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):x.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,r){for(const s of Zn(t))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const s of t.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(s,i,o){const a=Zl(s,i,o);return s.inclusive?a<=0:a<0}(t.startAt,Zn(t),r)||t.endAt&&!function(s,i,o){const a=Zl(s,i,o);return s.inclusive?a>=0:a>0}(t.endAt,Zn(t),r))}(n,e)}function Zw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Tp(n){return(e,t)=>{let r=!1;for(const s of Zn(n)){const i=eT(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function eT(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?lr(a,c):O()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n,e){if(n.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ui(e)?"-0":e}}function Ep(n){return{integerValue:""+n}}function tT(n,e){return Uw(e)?Ep(e):Ip(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this._=void 0}}function nT(n,e,t){return n instanceof $i?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(t,e):n instanceof ps?Sp(n,e):n instanceof ms?kp(n,e):function(r,s){const i=bp(r,s),o=sh(i)+sh(r.gt);return Ja(i)&&Ja(r.gt)?Ep(o):Ip(r.yt,o)}(n,e)}function rT(n,e,t){return n instanceof ps?Sp(n,e):n instanceof ms?kp(n,e):t}function bp(n,e){return n instanceof ji?Ja(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class $i extends Do{}class ps extends Do{constructor(e){super(),this.elements=e}}function Sp(n,e){const t=Ap(e);for(const r of n.elements)t.some(s=>Tt(s,r))||t.push(r);return{arrayValue:{values:t}}}class ms extends Do{constructor(e){super(),this.elements=e}}function kp(n,e){let t=Ap(e);for(const r of n.elements)t=t.filter(s=>!Tt(s,r));return{arrayValue:{values:t}}}class ji extends Do{constructor(e,t){super(),this.yt=e,this.gt=t}}function sh(n){return ae(n.integerValue||n.doubleValue)}function Ap(n){return iu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function sT(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof ps&&r instanceof ps||t instanceof ms&&r instanceof ms?cr(t.elements,r.elements,Tt):t instanceof ji&&r instanceof ji?Tt(t.gt,r.gt):t instanceof $i&&r instanceof $i}(n.transform,e.transform)}class iT{constructor(e,t){this.version=e,this.transformResults=t}}class it{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ro{}function Cp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lu(n.key,it.none()):new qs(n.key,n.data,it.none());{const t=n.data,r=Ue.empty();let s=new fe(Se.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new cn(n.key,r,new st(s.toArray()),it.none())}}function oT(n,e,t){n instanceof qs?function(r,s,i){const o=r.value.clone(),a=oh(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof cn?function(r,s,i){if(!mi(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=oh(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Dp(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Yr(n,e,t,r){return n instanceof qs?function(s,i,o,a){if(!mi(s.precondition,i))return o;const c=s.value.clone(),u=ah(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof cn?function(s,i,o,a){if(!mi(s.precondition,i))return o;const c=ah(s.fieldTransforms,a,i),u=i.data;return u.setAll(Dp(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(s,i,o){return mi(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function aT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=bp(r.transform,s||null);i!=null&&(t===null&&(t=Ue.empty()),t.set(r.field,i))}return t||null}function ih(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&cr(t,r,(s,i)=>sT(s,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class qs extends Ro{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cn extends Ro{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function oh(n,e,t){const r=new Map;G(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,rT(o,a,t[s]))}return r}function ah(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,nT(i,o,e))}return r}class lu extends Ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cT extends Ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe,V;function lT(n){switch(n){default:return O();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function Rp(n){if(n===void 0)return Nt("GRPC error has no .code"),v.UNKNOWN;switch(n){case oe.OK:return v.OK;case oe.CANCELLED:return v.CANCELLED;case oe.UNKNOWN:return v.UNKNOWN;case oe.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case oe.INTERNAL:return v.INTERNAL;case oe.UNAVAILABLE:return v.UNAVAILABLE;case oe.UNAUTHENTICATED:return v.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case oe.NOT_FOUND:return v.NOT_FOUND;case oe.ALREADY_EXISTS:return v.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return v.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case oe.ABORTED:return v.ABORTED;case oe.OUT_OF_RANGE:return v.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return v.UNIMPLEMENTED;case oe.DATA_LOSS:return v.DATA_LOSS;default:return O()}}(V=oe||(oe={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return cp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=new me(x.comparator);function Mt(){return hT}const xp=new me(x.comparator);function Vr(...n){let e=xp;for(const t of n)e=e.insert(t.key,t);return e}function Lp(n){let e=xp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function En(){return Xr()}function Op(){return Xr()}function Xr(){return new Sr(n=>n.toString(),(n,e)=>n.isEqual(e))}const dT=new me(x.comparator),fT=new fe(x.comparator);function F(...n){let e=fT;for(const t of n)e=e.add(t);return e}const pT=new fe(q);function Np(){return pT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,zs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new xo(P.min(),s,Np(),Mt(),F())}}class zs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new zs(r,t,F(),F(),F())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,r,s){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=s}}class Pp{constructor(e,t){this.targetId=e,this.Et=t}}class Mp{constructor(e,t,r=Oe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ch{constructor(){this.At=0,this.Rt=lh(),this.bt=Oe.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=F(),t=F(),r=F();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:O()}}),new zs(this.bt,this.Pt,e,t,r)}xt(){this.vt=!1,this.Rt=lh()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class mT{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Mt(),this.qt=uh(),this.Ut=new fe(q)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const r=this.Wt(t);switch(e.state){case 0:this.zt(t)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:O()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((r,s)=>{this.zt(s)&&t(s)})}Jt(e){const t=e.targetId,r=e.Et.count,s=this.Yt(t);if(s){const i=s.target;if(Za(i))if(r===0){const o=new x(i.path);this.Qt(t,o,be.newNoDocument(o,P.min()))}else G(r===1);else this.Xt(t)!==r&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Za(a.target)){const c=new x(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,be.newNoDocument(c,e))}i.St&&(t.set(o,i.Ct()),i.xt())}});let r=F();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new xo(e,t,this.Ut,this.Lt,r);return this.Lt=Mt(),this.qt=uh(),this.Ut=new fe(q),s}Gt(e,t){if(!this.zt(e))return;const r=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.zt(e))return;const s=this.Wt(e);this.te(e,t)?s.Nt(t,1):s.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new ch,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new fe(q),this.qt=this.qt.insert(e,t)),t}zt(e){const t=this.Yt(e)!==null;return t||R("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new ch),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function uh(){return new me(x.comparator)}function lh(){return new me(x.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_T=(()=>({and:"AND",or:"OR"}))();class vT{constructor(e,t){this.databaseId=e,this.wt=t}}function qi(n,e){return n.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fp(n,e){return n.wt?e.toBase64():e.toUint8Array()}function wT(n,e){return qi(n,e.toTimestamp())}function gt(n){return G(!!n),P.fromTimestamp(function(e){const t=tn(e);return new ee(t.seconds,t.nanos)}(n))}function hu(n,e){return function(t){return new K(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Up(n){const e=K.fromString(n);return G(jp(e)),e}function nc(n,e){return hu(n.databaseId,e.path)}function ya(n,e){const t=Up(e);if(t.get(1)!==n.databaseId.projectId)throw new C(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new C(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(Vp(t))}function rc(n,e){return hu(n.databaseId,e)}function TT(n){const e=Up(n);return e.length===4?K.emptyPath():Vp(e)}function sc(n){return new K(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vp(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function hh(n,e,t){return{name:nc(n,e),fields:t.value.mapValue.fields}}function IT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(G(u===void 0||typeof u=="string"),Oe.fromBase64String(u||"")):(G(u===void 0||u instanceof Uint8Array),Oe.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?v.UNKNOWN:Rp(c.code);return new C(u,c.message||"")}(o);t=new Mp(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ya(n,r.document.name),i=gt(r.document.updateTime),o=r.document.createTime?gt(r.document.createTime):P.min(),a=new Ue({mapValue:{fields:r.document.fields}}),c=be.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new gi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ya(n,r.document),i=r.readTime?gt(r.readTime):P.min(),o=be.newNoDocument(s,i),a=r.removedTargetIds||[];t=new gi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ya(n,r.document),i=r.removedTargetIds||[];t=new gi([],i,s,null)}else{if(!("filter"in e))return O();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new uT(s),o=r.targetId;t=new Pp(o,i)}}return t}function ET(n,e){let t;if(e instanceof qs)t={update:hh(n,e.key,e.value)};else if(e instanceof lu)t={delete:nc(n,e.key)};else if(e instanceof cn)t={update:hh(n,e.key,e.data),updateMask:LT(e.fieldMask)};else{if(!(e instanceof cT))return O();t={verify:nc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof $i)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ps)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ms)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ji)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw O()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:wT(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:O()}(n,e.precondition)),t}function bT(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(r,s){let i=r.updateTime?gt(r.updateTime):gt(s);return i.isEqual(P.min())&&(i=gt(s)),new iT(i,r.transformResults||[])}(t,e))):[]}function ST(n,e){return{documents:[rc(n,e.path)]}}function kT(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=rc(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=rc(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return $p(dt.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Kn(l.field),direction:DT(l.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||ko(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function AT(n){let e=TT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){G(r===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(l){const h=Bp(l);return h instanceof dt&&$w(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Qr(Wn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ko(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Vi(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Vi(d,h)}(t.endAt)),Jw(e,s,o,i,a,"F",c,u)}function CT(n,e){const t=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bp(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Wn(e.unaryFilter.field);return ue.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Wn(e.unaryFilter.field);return ue.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wn(e.unaryFilter.field);return ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Wn(e.unaryFilter.field);return ue.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return ue.create(Wn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return dt.create(e.compositeFilter.filters.map(t=>Bp(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function DT(n){return gT[n]}function RT(n){return yT[n]}function xT(n){return _T[n]}function Kn(n){return{fieldPath:n.canonicalString()}}function Wn(n){return Se.fromServerFormat(n.fieldPath)}function $p(n){return n instanceof ue?function(e){if(e.op==="=="){if(Jl(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NAN"}};if(Xl(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jl(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NOT_NAN"}};if(Xl(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kn(e.field),op:RT(e.op),value:e.value}}}(n):n instanceof dt?function(e){const t=e.getFilters().map(r=>$p(r));return t.length===1?t[0]:{compositeFilter:{op:xT(e.op),filters:t}}}(n):O()}function LT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&oT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Yr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Yr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Op();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=Cp(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),F())}isEqual(e){return this.batchId===e.batchId&&cr(this.mutations,e.mutations,(t,r)=>ih(t,r))&&cr(this.baseMutations,e.baseMutations,(t,r)=>ih(t,r))}}class du{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){G(e.mutations.length===r.length);let s=dT;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new du(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,r,s,i=P.min(),o=P.min(),a=Oe.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new An(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.ie=e}}function MT(n){const e=AT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Bi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.Je=new UT}addToCollectionParentIndex(e,t){return this.Je.add(t),E.resolve()}getCollectionParents(e,t){return E.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return E.resolve()}deleteFieldIndex(e,t){return E.resolve()}getDocumentsMatchingTarget(e,t){return E.resolve(null)}getIndexType(e,t){return E.resolve(0)}getFieldIndexes(e,t){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,t){return E.resolve(en.min())}getMinOffsetFromCollectionGroup(e,t){return E.resolve(en.min())}updateCollectionGroup(e,t,r){return E.resolve()}updateIndexEntries(e,t){return E.resolve()}}class UT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new fe(K.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new fe(K.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new dr(0)}static vn(){return new dr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(){this.changes=new Sr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?E.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Yr(r.mutation,s,st.empty(),ee.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,F()).next(()=>r))}getLocalViewOfDocuments(e,t,r=F()){const s=En();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Vr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=En();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,F()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=Mt();const o=Xr(),a=Xr();return t.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof cn)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Yr(l.mutation,u,l.mutation.getFieldMask(),ee.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new BT(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Xr();let s=new me((o,a)=>o-a),i=F();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||st.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||F()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Op();l.forEach(d=>{if(!i.has(d)){const f=Cp(t.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return x.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):E.resolve(En());let a=-1,c=i;return o.next(u=>E.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?E.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,F())).next(l=>({batchId:a,changes:Lp(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(r=>{let s=Vr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const s=t.collectionGroup;let i=Vr();return this.indexManager.getCollectionParents(e,s).next(o=>E.forEach(o,a=>{const c=function(u,l){return new js(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,t.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,be.newInvalidDocument(u)))});let o=Vr();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Yr(u.mutation,c,st.empty(),ee.now()),uu(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return E.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var r;return this.Zn.set(t.id,{id:(r=t).id,version:r.version,createTime:gt(r.createTime)}),E.resolve()}getNamedQuery(e,t){return E.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(r){return{name:r.name,query:MT(r.bundledQuery),readTime:gt(r.readTime)}}(t)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.overlays=new me(x.comparator),this.es=new Map}getOverlay(e,t){return E.resolve(this.overlays.get(t))}getOverlays(e,t){const r=En();return E.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.oe(e,t,i)}),E.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),E.resolve()}getOverlaysForCollection(e,t,r){const s=En(),i=t.length+1,o=new x(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return E.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new me((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=En(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=En(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return E.resolve(a)}oe(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NT(t,r));let i=this.es.get(t);i===void 0&&(i=F(),this.es.set(t,i)),this.es.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.ns=new fe(ge.ss),this.rs=new fe(ge.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const r=new ge(e,t);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.cs(new ge(e,t))}hs(e,t){e.forEach(r=>this.removeReference(r,t))}ls(e){const t=new x(new K([])),r=new ge(t,e),s=new ge(t,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new x(new K([])),r=new ge(t,e),s=new ge(t,e+1);let i=F();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new ge(e,0),r=this.ns.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return x.comparator(e.key,t.key)||q(e._s,t._s)}static os(e,t){return q(e._s,t._s)||x.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new fe(ge.ss)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OT(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new ge(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,t){return E.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ps(r),i=s<0?0:s;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(q);return t.forEach(s=>{const i=new ge(s,0),o=new ge(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),E.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;x.isDocumentKey(i)||(i=i.child(""));const o=new ge(new x(i),0);let a=new fe(q);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c._s)),!0)},o),E.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return E.forEach(t.mutations,s=>{const i=new ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,t){const r=new ge(t,0),s=this.gs.firstAfterOrEqual(r);return E.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.Es=e,this.docs=new me(x.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return E.resolve(r?r.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let r=Mt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():be.newInvalidDocument(s))}),E.resolve(r)}getAllFromCollection(e,t,r){let s=Mt();const i=new x(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||Nw(Ow(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,t,r,s){O()}As(e,t){return E.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new GT(this)}getSize(e){return E.resolve(this.size)}}class GT extends VT{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),E.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.persistence=e,this.Rs=new Sr(t=>ou(t),au),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.bs=0,this.Ps=new fu,this.targetCount=0,this.vs=dr.Pn()}forEachTarget(e,t){return this.Rs.forEach((r,s)=>t(s)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.bs&&(this.bs=t),E.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new dr(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,E.resolve()}updateTargetData(e,t){return this.Dn(t),E.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),E.waitFor(i).next(()=>s)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,t){const r=this.Rs.get(t)||null;return E.resolve(r)}addMatchingKeys(e,t,r){return this.Ps.us(t,r),E.resolve()}removeMatchingKeys(e,t,r){this.Ps.hs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),E.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ps.ds(t);return E.resolve(r)}containsKey(e,t){return E.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new su(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new KT(this),this.indexManager=new FT,this.remoteDocumentCache=function(r){return new HT(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new PT(t),this.Ns=new jT(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Vs[e.toKey()];return r||(r=new zT(t,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,r){R("MemoryPersistence","Starting transaction:",e);const s=new QT(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,t){return E.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,t)))}}class QT extends Mw{constructor(e){super(),this.currentSequenceNumber=e}}class pu{constructor(e){this.persistence=e,this.Fs=new fu,this.$s=null}static Bs(e){return new pu(e)}get Ls(){if(this.$s)return this.$s;throw O()}addReference(e,t,r){return this.Fs.addReference(r,t),this.Ls.delete(r.toString()),E.resolve()}removeReference(e,t,r){return this.Fs.removeReference(r,t),this.Ls.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),E.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ls,r=>{const s=x.fromPath(r);return this.qs(e,s).next(i=>{i||t.removeEntry(s,P.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(r=>{r?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return E.or([()=>E.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Si=r,this.Di=s}static Ci(e,t){let r=F(),s=F();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new mu(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,r,s){return this.ki(e,t).next(i=>i||this.Oi(e,t,s,r)).next(i=>i||this.Mi(e,t))}ki(e,t){if(rh(t))return E.resolve(null);let r=Pt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Bi(t,null,"F"),r=Pt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=F(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(t,a);return this.$i(t,u,o,c.readTime)?this.ki(e,Bi(t,null,"F")):this.Bi(e,u,t,c)}))})))}Oi(e,t,r,s){return rh(t)||s.isEqual(P.min())?this.Mi(e,t):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(t,i);return this.$i(t,o,r,s)?this.Mi(e,t):(Kl()<=$.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),tc(t)),this.Bi(e,o,t,Lw(s,-1)))})}Fi(e,t){let r=new fe(Tp(e));return t.forEach((s,i)=>{uu(e,i)&&(r=r.add(i))}),r}$i(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,t){return Kl()<=$.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",tc(t)),this.Ni.getDocumentsMatchingQuery(e,t,en.min())}Bi(e,t,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t,r,s){this.persistence=e,this.Li=t,this.yt=s,this.qi=new me(q),this.Ui=new Sr(i=>ou(i),au),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $T(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function JT(n,e,t,r){return new XT(n,e,t,r)}async function qp(n,e){const t=M(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Qi(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=F();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function ZT(n,e){const t=M(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const p=c.docVersions.get(f);G(p!==null),m.version.compareTo(p)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=F();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function zp(n){const e=M(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function eI(n,e){const t=M(n),r=e.snapshotVersion;let s=t.qi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});s=t.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Oe.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(m,p,g){return m.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,f,l)&&a.push(t.Cs.updateTargetData(i,f))});let c=Mt(),u=F();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(tI(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(P.min())){const l=t.Cs.getLastRemoteSnapshotVersion(i).next(h=>t.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.qi=s,i))}function tI(n,e,t){let r=F(),s=F();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Mt();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function nI(n,e){const t=M(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rI(n,e){const t=M(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Cs.getTargetData(r,e).next(i=>i?(s=i,E.resolve(s)):t.Cs.allocateTargetId(r).next(o=>(s=new An(e,o,0,r.currentSequenceNumber),t.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.qi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.qi=t.qi.insert(r.targetId,r),t.Ui.set(e,r.targetId)),r})}async function ic(n,e,t){const r=M(n),s=r.qi.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!$s(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(s.target)}function dh(n,e,t){const r=M(n);let s=P.min(),i=F();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=M(a),h=l.Ui.get(u);return h!==void 0?E.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(r,o,Pt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,t?s:P.min(),t?i:F())).next(a=>(sI(r,Zw(e),a),{documents:a,Hi:i})))}function sI(n,e,t){let r=n.Ki.get(e)||P.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ki.set(e,r)}class fh{constructor(){this.activeTargetIds=Np()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iI{constructor(){this.Lr=new fh,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,r){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new fh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,r,s,i){const o=this.ho(e,t);R("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(R("RestConnection","Received: ",c),c),c=>{throw Ya("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,t,r,s,i,o){return this.ao(e,t,r,s,i)}lo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+br,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,t){const r=aI[e];return`${this.oo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,r,s){return new Promise((i,o)=>{const a=new Iw;a.setWithCredentials(!0),a.listenOnce(vw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ga.NO_ERROR:const u=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ga.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),o(new C(v.DEADLINE_EXCEEDED,"Request time out"));break;case ga.HTTP_ERROR:const l=a.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(m){const p=m.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(p)>=0?p:v.UNKNOWN}(d.status);o(new C(f,d.message))}else o(new C(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(v.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(t,"POST",c,r,15)})}wo(e,t,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=yw(),o=_w(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Tw({})),this.lo(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;const c=s.join("");R("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new cI({Hr:m=>{h?R("Connection","Not sending because WebChannel is closed:",m):(l||(R("Connection","Opening WebChannel transport."),u.open(),l=!0),R("Connection","WebChannel sending:",m),u.send(m))},Jr:()=>u.close()}),f=(m,p,g)=>{m.listen(p,y=>{try{g(y)}catch(_){setTimeout(()=>{throw _},0)}})};return f(u,ui.EventType.OPEN,()=>{h||R("Connection","WebChannel transport opened.")}),f(u,ui.EventType.CLOSE,()=>{h||(h=!0,R("Connection","WebChannel transport closed"),d.io())}),f(u,ui.EventType.ERROR,m=>{h||(h=!0,Ya("Connection","WebChannel transport errored:",m),d.io(new C(v.UNAVAILABLE,"The operation could not be completed")))}),f(u,ui.EventType.MESSAGE,m=>{var p;if(!h){const g=m.data[0];G(!!g);const y=g,_=y.error||((p=y[0])===null||p===void 0?void 0:p.error);if(_){R("Connection","WebChannel received error:",_);const w=_.status;let I=function(A){const k=oe[A];if(k!==void 0)return Rp(k)}(w),T=_.message;I===void 0&&(I=v.INTERNAL,T="Unknown error status: "+w+" with message "+_.message),h=!0,d.io(new C(I,T)),u.close()}else R("Connection","WebChannel received:",g),d.ro(g)}}),f(o,ww.STAT_EVENT,m=>{m.stat===Hl.PROXY?R("Connection","Detected buffering proxy"):m.stat===Hl.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function _a(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n){return new vT(n,!0)}class Hp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,t-r);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Hp(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===v.RESOURCE_EXHAUSTED?(Nt(t.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===t&&this.Go(r,s)},r=>{e(()=>{const s=new C(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,t){const r=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lI extends Gp{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=IT(this.yt,e),r=function(s){if(!("targetChange"in s))return P.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?P.min():i.readTime?gt(i.readTime):P.min()}(e);return this.listener.Wo(t,r)}zo(e){const t={};t.database=sc(this.yt),t.addTarget=function(s,i){let o;const a=i.target;return o=Za(a)?{documents:ST(s,a)}:{query:kT(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Fp(s,i.resumeToken):i.snapshotVersion.compareTo(P.min())>0&&(o.readTime=qi(s,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=CT(this.yt,e);r&&(t.labels=r),this.Bo(t)}Ho(e){const t={};t.database=sc(this.yt),t.removeTarget=e,this.Bo(t)}}class hI extends Gp{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=bT(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.Zo(r,t)}return G(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=sc(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ET(this.yt,r))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.yt=s,this.nu=!1}su(){if(this.nu)throw new C(v.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(v.UNKNOWN,s.toString())})}_o(e,t,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(v.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class fI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Nt(t),this.ou=!1):R("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{zn(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=M(a);c._u.add(4),await Hs(c),c.gu.set("Unknown"),c._u.delete(4),await Oo(c)}(this))})}),this.gu=new fI(r,s)}}async function Oo(n){if(zn(n))for(const e of n.wu)await e(!0)}async function Hs(n){for(const e of n.wu)await e(!1)}function Kp(n,e){const t=M(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),_u(t)?yu(t):kr(t).ko()&&gu(t,e))}function Wp(n,e){const t=M(n),r=kr(t);t.du.delete(e),r.ko()&&Qp(t,e),t.du.size===0&&(r.ko()?r.Fo():zn(t)&&t.gu.set("Unknown"))}function gu(n,e){n.yu.Ot(e.targetId),kr(n).zo(e)}function Qp(n,e){n.yu.Ot(e),kr(n).Ho(e)}function yu(n){n.yu=new mT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.du.get(e)||null}),kr(n).start(),n.gu.uu()}function _u(n){return zn(n)&&!kr(n).No()&&n.du.size>0}function zn(n){return M(n)._u.size===0}function Yp(n){n.yu=void 0}async function mI(n){n.du.forEach((e,t)=>{gu(n,e)})}async function gI(n,e){Yp(n),_u(n)?(n.gu.hu(e),yu(n)):n.gu.set("Unknown")}async function yI(n,e,t){if(n.gu.set("Online"),e instanceof Mp&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(n,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zi(n,r)}else if(e instanceof gi?n.yu.Kt(e):e instanceof Pp?n.yu.Jt(e):n.yu.jt(e),!t.isEqual(P.min()))try{const r=await zp(n.localStore);t.compareTo(r)>=0&&await function(s,i){const o=s.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.du.get(c);u&&s.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(Oe.EMPTY_BYTE_STRING,c.snapshotVersion)),Qp(s,a);const u=new An(c.target,a,1,c.sequenceNumber);gu(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await zi(n,r)}}async function zi(n,e,t){if(!$s(e))throw e;n._u.add(1),await Hs(n),n.gu.set("Offline"),t||(t=()=>zp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await Oo(n)})}function Xp(n,e){return e().catch(t=>zi(n,t,e))}async function No(n){const e=M(n),t=nn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;_I(e);)try{const s=await nI(e.localStore,r);if(s===null){e.fu.length===0&&t.Fo();break}r=s.batchId,vI(e,s)}catch(s){await zi(e,s)}Jp(e)&&Zp(e)}function _I(n){return zn(n)&&n.fu.length<10}function vI(n,e){n.fu.push(e);const t=nn(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function Jp(n){return zn(n)&&!nn(n).No()&&n.fu.length>0}function Zp(n){nn(n).start()}async function wI(n){nn(n).eu()}async function TI(n){const e=nn(n);for(const t of n.fu)e.Xo(t.mutations)}async function II(n,e,t){const r=n.fu.shift(),s=du.from(r,e,t);await Xp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await No(n)}async function EI(n,e){e&&nn(n).Yo&&await async function(t,r){if(s=r.code,lT(s)&&s!==v.ABORTED){const i=t.fu.shift();nn(t).Mo(),await Xp(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,r)),await No(t)}var s}(n,e),Jp(n)&&Zp(n)}async function mh(n,e){const t=M(n);t.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=zn(t);t._u.add(3),await Hs(t),r&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await Oo(t)}async function bI(n,e){const t=M(n);e?(t._u.delete(2),await Oo(t)):e||(t._u.add(2),await Hs(t),t.gu.set("Unknown"))}function kr(n){return n.pu||(n.pu=function(e,t,r){const s=M(e);return s.su(),new lI(t,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(n.datastore,n.asyncQueue,{Yr:mI.bind(null,n),Zr:gI.bind(null,n),Wo:yI.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),_u(n)?yu(n):n.gu.set("Unknown")):(await n.pu.stop(),Yp(n))})),n.pu}function nn(n){return n.Iu||(n.Iu=function(e,t,r){const s=M(e);return s.su(),new hI(t,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(n.datastore,n.asyncQueue,{Yr:wI.bind(null,n),Zr:EI.bind(null,n),tu:TI.bind(null,n),Zo:II.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await No(n)):(await n.Iu.stop(),n.fu.length>0&&(R("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new vu(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wu(n,e){if(Nt("AsyncQueue",`${e}: ${n}`),$s(n))return new C(v.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=Vr(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new er(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof er)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new er;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.Tu=new me(x.comparator)}track(e){const t=e.doc.key,r=this.Tu.get(t);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(t):e.type===1&&r.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):O():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,r)=>{e.push(r)}),e}}class fr{constructor(e,t,r,s,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new fr(e,t,er.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Co(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this.Au=void 0,this.listeners=[]}}class kI{constructor(){this.queries=new Sr(e=>wp(e),Co),this.onlineState="Unknown",this.Ru=new Set}}async function Tu(n,e){const t=M(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new SI),s)try{i.Au=await t.onListen(r)}catch(o){const a=wu(o,`Initialization of query '${tc(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.bu(t.onlineState),i.Au&&e.Pu(i.Au)&&Eu(t)}async function Iu(n,e){const t=M(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function AI(n,e){const t=M(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&Eu(t)}function CI(n,e,t){const r=M(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function Eu(n){n.Ru.forEach(e=>{e.next()})}class bu{constructor(e,t,r){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=fr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.key=e}}class tm{constructor(e){this.key=e}}class DI{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=F(),this.mutatedKeys=F(),this.Gu=Tp(e),this.Qu=new er(this.Gu)}get ju(){return this.qu}Wu(e,t){const r=t?t.zu:new gh,s=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),f=uu(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),p=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?m!==p&&(r.track({type:3,doc:f}),g=!0):this.Hu(d,f)||(r.track({type:2,doc:f}),g=!0,(c&&this.Gu(f,c)>0||u&&this.Gu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),g=!0):d&&!f&&(r.track({type:1,doc:d}),g=!0,(c||u)&&(a=!0)),g&&(f?(o=o.add(f),i=p?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return f(h)-f(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new fr(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new gh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.qu=this.qu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qu=this.qu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=F(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const t=[];return e.forEach(r=>{this.Ku.has(r)||t.push(new tm(r))}),this.Ku.forEach(r=>{e.has(r)||t.push(new em(r))}),t}tc(e){this.qu=e.Hi,this.Ku=F();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return fr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class RI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xI{constructor(e){this.key=e,this.nc=!1}}class LI{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Sr(a=>wp(a),Co),this.rc=new Map,this.oc=new Set,this.uc=new me(x.comparator),this.cc=new Map,this.ac=new fu,this.hc={},this.lc=new Map,this.fc=dr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function OI(n,e){const t=qI(n);let r,s;const i=t.ic.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await rI(t.localStore,Pt(e));t.isPrimaryClient&&Kp(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await NI(t,e,r,a==="current",o.resumeToken)}return s}async function NI(n,e,t,r,s){n._c=(h,d,f)=>async function(m,p,g,y){let _=p.view.Wu(g);_.$i&&(_=await dh(m.localStore,p.query,!1).then(({documents:T})=>p.view.Wu(T,_)));const w=y&&y.targetChanges.get(p.targetId),I=p.view.applyChanges(_,m.isPrimaryClient,w);return _h(m,p.targetId,I.Xu),I.snapshot}(n,h,d,f);const i=await dh(n.localStore,e,!0),o=new DI(e,i.Hi),a=o.Wu(i.documents),c=zs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,c);_h(n,t,u.Xu);const l=new RI(e,t,o);return n.ic.set(e,l),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),u.snapshot}async function PI(n,e){const t=M(n),r=t.ic.get(e),s=t.rc.get(r.targetId);if(s.length>1)return t.rc.set(r.targetId,s.filter(i=>!Co(i,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await ic(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Wp(t.remoteStore,r.targetId),oc(t,r.targetId)}).catch(Bs)):(oc(t,r.targetId),await ic(t.localStore,r.targetId,!0))}async function MI(n,e,t){const r=zI(n);try{const s=await function(i,o){const a=M(i),c=ee.now(),u=o.reduce((d,f)=>d.add(f.key),F());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Mt(),m=F();return a.Gi.getEntries(d,u).next(p=>{f=p,f.forEach((g,y)=>{y.isValidDocument()||(m=m.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(p=>{l=p;const g=[];for(const y of o){const _=aT(y,l.get(y.key).overlayedDocument);_!=null&&g.push(new cn(y.key,_,yp(_.value.mapValue),it.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,g,o)}).next(p=>{h=p;const g=p.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(d,p.batchId,g)})}).then(()=>({batchId:h.batchId,changes:Lp(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new me(q)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,t),await Gs(r,s.changes),await No(r.remoteStore)}catch(s){const i=wu(s,"Failed to persist write");t.reject(i)}}async function nm(n,e){const t=M(n);try{const r=await eI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.cc.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?G(o.nc):s.removedDocuments.size>0&&(G(o.nc),o.nc=!1))}),await Gs(t,r,e)}catch(r){await Bs(r)}}function yh(n,e,t){const r=M(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=M(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Eu(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FI(n,e,t){const r=M(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new me(x.comparator);o=o.insert(i,be.newNoDocument(i,P.min()));const a=F().add(i),c=new xo(P.min(),new Map,new fe(q),o,a);await nm(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),Su(r)}else await ic(r.localStore,e,!1).then(()=>oc(r,e,t)).catch(Bs)}async function UI(n,e){const t=M(n),r=e.batch.batchId;try{const s=await ZT(t.localStore,e);sm(t,r,null),rm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Gs(t,s)}catch(s){await Bs(s)}}async function VI(n,e,t){const r=M(n);try{const s=await function(i,o){const a=M(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(G(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);sm(r,e,t),rm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Gs(r,s)}catch(s){await Bs(s)}}function rm(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function sm(n,e,t){const r=M(n);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function oc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.rc.get(e))n.ic.delete(r),t&&n.sc.wc(r,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(r=>{n.ac.containsKey(r)||im(n,r)})}function im(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(Wp(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),Su(n))}function _h(n,e,t){for(const r of t)r instanceof em?(n.ac.addReference(r.key,e),BI(n,r)):r instanceof tm?(R("SyncEngine","Document no longer in limbo: "+r.key),n.ac.removeReference(r.key,e),n.ac.containsKey(r.key)||im(n,r.key)):O()}function BI(n,e){const t=e.key,r=t.path.canonicalString();n.uc.get(t)||n.oc.has(r)||(R("SyncEngine","New document in limbo: "+t),n.oc.add(r),Su(n))}function Su(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new x(K.fromString(e)),r=n.fc.next();n.cc.set(r,new xI(t)),n.uc=n.uc.insert(t,r),Kp(n.remoteStore,new An(Pt(Ao(t.path)),r,2,su.at))}}async function Gs(n,e,t){const r=M(n),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=mu.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const u=M(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>E.forEach(c,h=>E.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>E.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!$s(l))throw l;R("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.qi=u.qi.insert(h,m)}}}(r.localStore,i))}async function $I(n,e){const t=M(n);if(!t.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await qp(t.localStore,e);t.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new C(v.CANCELLED,i))})}),s.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gs(t,r.ji)}}function jI(n,e){const t=M(n),r=t.cc.get(e);if(r&&r.nc)return F().add(r.key);{let s=F();const i=t.rc.get(e);if(!i)return s;for(const o of i){const a=t.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function qI(n){const e=M(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=nm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FI.bind(null,e),e.sc.Wo=AI.bind(null,e.eventManager),e.sc.wc=CI.bind(null,e.eventManager),e}function zI(n){const e=M(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VI.bind(null,e),e}class HI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Lo(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return JT(this.persistence,new YT,e.initialUser,this.yt)}yc(e){return new WT(pu.Bs,this.yt)}gc(e){return new iI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class GI{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$I.bind(null,this.syncEngine),await bI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kI}createDatastore(e){const t=Lo(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new uI(s));var s;return function(i,o,a,c){return new dI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>yh(this.syncEngine,a,0),o=ph.C()?new ph:new oI,new pI(t,r,s,i,o);var t,r,s,i,o}createSyncEngine(e,t){return function(r,s,i,o,a,c,u){const l=new LI(r,s,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=M(e);R("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Hs(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(n,e,t){if(!t)throw new C(v.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function KI(n,e,t,r){if(e===!0&&r===!0)throw new C(v.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vh(n){if(!x.isDocumentKey(n))throw new C(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wh(n){if(x.isDocumentKey(n))throw new C(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Po(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":O()}function Be(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new C(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Po(n);throw new C(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function WI(n,e){if(e<=0)throw new C(v.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new Map;class Ih{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new C(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ih({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ih(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Ew;switch(t.type){case"gapi":const r=t.client;return new Aw(r,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new C(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Th.get(e);t&&(R("ComponentProvider","Removing Datastore"),Th.delete(e),t.terminate())}(this),Promise.resolve()}}function QI(n,e,t,r={}){var s;const i=(n=Be(n,Mo))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ya("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ee.MOCK_USER;else{o=Vy(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new C(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ee(c)}n._authCredentials=new bw(new op(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class un{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new un(this.firestore,e,this._query)}}class Xt extends un{constructor(e,t,r){super(e,t,Ao(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new x(e))}withConverter(e){return new Xt(this.firestore,e,this._path)}}function ct(n,e,...t){if(n=pe(n),om("collection","path",e),n instanceof Mo){const r=K.fromString(e,...t);return wh(r),new Xt(n,null,r)}{if(!(n instanceof De||n instanceof Xt))throw new C(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(K.fromString(e,...t));return wh(r),new Xt(n.firestore,null,r)}}function Ft(n,e,...t){if(n=pe(n),arguments.length===1&&(e=ap.R()),om("doc","path",e),n instanceof Mo){const r=K.fromString(e,...t);return vh(r),new De(n,null,new x(r))}{if(!(n instanceof De||n instanceof Xt))throw new C(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(K.fromString(e,...t));return vh(r),new De(n.firestore,n instanceof Xt?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Nt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=ap.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=wu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function XI(n,e){n.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function JI(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ZI(n);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>mh(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>mh(e.remoteStore,i)),n.onlineComponents=e}async function ZI(n){return n.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await XI(n,new HI)),n.offlineComponents}async function am(n){return n.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await JI(n,new GI)),n.onlineComponents}function eE(n){return am(n).then(e=>e.syncEngine)}async function Hi(n){const e=await am(n),t=e.eventManager;return t.onListen=OI.bind(null,e.syncEngine),t.onUnlisten=PI.bind(null,e.syncEngine),t}function tE(n,e,t={}){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new ku({next:h=>{i.enqueueAndForget(()=>Iu(s,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new C(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new C(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new bu(Ao(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Tu(s,l)}(await Hi(n),n.asyncQueue,e,t,r)),r.promise}function nE(n,e,t={}){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new ku({next:h=>{i.enqueueAndForget(()=>Iu(s,l)),h.fromCache&&a.source==="server"?c.reject(new C(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new bu(o,u,{includeMetadataChanges:!0,Nu:!0});return Tu(s,l)}(await Hi(n),n.asyncQueue,e,t,r)),r.promise}class rE{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Hp(this,"async_queue_retry"),this.Wc=()=>{const t=_a();t&&R("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=_a();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=_a();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new Lt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!$s(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Nt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=t,t}enqueueAfterDelay(e,t,r){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const s=vu.createAndSchedule(this,e,t,r,i=>this.Yc(i));return this.Uc.push(s),s}zc(){this.Kc&&O()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function Eh(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of t)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Ut extends Mo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new rE,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cm(this),this._firestoreClient.terminate()}}function sE(n,e){const t=typeof n=="object"?n:xc(),r=typeof n=="string"?n:e||"(default)",s=$n(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=My("firestore");i&&QI(s,...i)}return s}function Fo(n){return n._firestoreClient||cm(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function cm(n){var e;const t=n._freezeSettings(),r=function(s,i,o,a){return new Fw(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new YI(n._authCredentials,n._appCheckCredentials,n._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pr(Oe.fromBase64String(e))}catch(t){throw new C(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pr(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new C(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=/^__.*__$/;class oE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new cn(e,this.data,this.fieldMask,t,this.fieldTransforms):new qs(e,this.data,t,this.fieldTransforms)}}class um{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new cn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function lm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Du{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.yt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Du(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Gi(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(lm(this.sa)&&iE.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class aE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=r||Lo(e)}da(e,t,r,s=!1){return new Du({sa:e,methodName:t,fa:r,path:Se.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Vo(n){const e=n._freezeSettings(),t=Lo(n._databaseId);return new aE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hm(n,e,t,r,s,i={}){const o=n.da(i.merge||i.mergeFields?2:0,e,t,s);Ru("Data must be an object, but it was:",o,r);const a=dm(r,o);let c,u;if(i.merge)c=new st(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=ac(e,h,t);if(!o.contains(d))throw new C(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);pm(l,d)||l.push(d)}c=new st(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new oE(new Ue(a),c,u)}class Bo extends Au{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bo}}function cE(n,e,t,r){const s=n.da(1,e,t);Ru("Data must be an object, but it was:",s,r);const i=[],o=Ue.empty();qn(r,(c,u)=>{const l=xu(e,c,t);u=pe(u);const h=s.ca(l);if(u instanceof Bo)i.push(l);else{const d=Ks(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new st(i);return new um(o,a,s.fieldTransforms)}function uE(n,e,t,r,s,i){const o=n.da(1,e,t),a=[ac(e,r,t)],c=[s];if(i.length%2!=0)throw new C(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ac(e,i[d])),c.push(i[d+1]);const u=[],l=Ue.empty();for(let d=a.length-1;d>=0;--d)if(!pm(u,a[d])){const f=a[d];let m=c[d];m=pe(m);const p=o.ca(f);if(m instanceof Bo)u.push(f);else{const g=Ks(m,p);g!=null&&(u.push(f),l.set(f,g))}}const h=new st(u);return new um(l,h,o.fieldTransforms)}function lE(n,e,t,r=!1){return Ks(t,n.da(r?4:3,e))}function Ks(n,e){if(fm(n=pe(n)))return Ru("Unsupported field value:",e,n),dm(n,e);if(n instanceof Au)return function(t,r){if(!lm(r.sa))throw r.ha(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=Ks(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=pe(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return tT(r.yt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=ee.fromDate(t);return{timestampValue:qi(r.yt,s)}}if(t instanceof ee){const s=new ee(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:qi(r.yt,s)}}if(t instanceof Cu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof pr)return{bytesValue:Fp(r.yt,t._byteString)};if(t instanceof De){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:hu(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ha(`Unsupported field value: ${Po(t)}`)}(n,e)}function dm(n,e){const t={};return cp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qn(n,(r,s)=>{const i=Ks(s,e.ra(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function fm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof Cu||n instanceof pr||n instanceof De||n instanceof Au)}function Ru(n,e,t){if(!fm(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Po(t);throw r==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+r)}}function ac(n,e,t){if((e=pe(e))instanceof Uo)return e._internalPath;if(typeof e=="string")return xu(n,e);throw Gi("Field path arguments must be of type string or ",n,!1,void 0,t)}const hE=new RegExp("[~\\*/\\[\\]]");function xu(n,e,t){if(e.search(hE)>=0)throw Gi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Uo(...e.split("."))._internalPath}catch{throw Gi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gi(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new C(v.INVALID_ARGUMENT,a+n+c)}function pm(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Lu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dE extends mm{data(){return super.data()}}function Lu(n,e){return typeof e=="string"?xu(n,e):e instanceof Uo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new C(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ou{}class ym extends Ou{}function Ws(n,e,...t){let r=[];e instanceof Ou&&r.push(e),r=r.concat(t),function(s){const i=s.filter(a=>a instanceof Nu).length,o=s.filter(a=>a instanceof $o).length;if(i>1||i>0&&o>0)throw new C(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class $o extends ym{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new $o(e,t,r)}_apply(e){const t=this._parse(e);return _m(e._query,t),new un(e.firestore,e.converter,ec(e._query,t))}_parse(e){const t=Vo(e.firestore);return function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Sh(l,u);const d=[];for(const f of l)d.push(bh(a,s,f));h={arrayValue:{values:d}}}else h=bh(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Sh(l,u),h=lE(o,i,l,u==="in"||u==="not-in");return ue.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Qs(n,e,t){const r=e,s=Lu("where",n);return $o._create(s,r,t)}class Nu extends Ou{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Nu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:dt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)_m(i,a),i=ec(i,a)}(e._query,t),new un(e.firestore,e.converter,ec(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pu extends ym{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Pu(e,t,r)}_apply(e){return new un(e.firestore,e.converter,Bi(e._query,this._limit,this._limitType))}}function fE(n){return WI("limit",n),Pu._create("limit",n,"F")}function bh(n,e,t){if(typeof(t=pe(t))=="string"){if(t==="")throw new C(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vp(e)&&t.indexOf("/")!==-1)throw new C(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(K.fromString(t));if(!x.isDocumentKey(r))throw new C(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yl(n,new x(r))}if(t instanceof De)return Yl(n,t._key);throw new C(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Po(t)}.`)}function Sh(n,e){if(!Array.isArray(n)||n.length===0)throw new C(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new C(v.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function _m(n,e){if(e.isInequality()){const r=cu(n),s=e.field;if(r!==null&&!r.isEqual(s))throw new C(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=_p(n);i!==null&&pE(n,s,i)}const t=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new C(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function pE(n,e,t){if(!t.isEqual(e))throw new C(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class mE{convertValue(e,t="none"){switch(Mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}convertObject(e,t){const r={};return qn(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Cu(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=lp(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ds(e));default:return null}}convertTimestamp(e){const t=tn(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=K.fromString(e);G(jp(r));const s=new hs(r.get(1),r.get(3)),i=new x(r.popFirst(5));return s.isEqual(t)||Nt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wm extends mm{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Lu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class yi extends wm{data(e={}){return super.data(e)}}class Tm{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Br(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new yi(this._firestore,this._userDataWriter,r.key,r,new Br(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new yi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Br(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new yi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Br(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:gE(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function gE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n){n=Be(n,De);const e=Be(n.firestore,Ut);return tE(Fo(e),n._key).then(t=>Em(e,n,t))}class Fu extends mE{constructor(e){super(),this.firestore=e}convertBytes(e){return new pr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,t)}}function Im(n){n=Be(n,un);const e=Be(n.firestore,Ut),t=Fo(e),r=new Fu(e);return gm(n._query),nE(t,n._query).then(s=>new Tm(e,r,n,s))}function yE(n,e,t){n=Be(n,De);const r=Be(n.firestore,Ut),s=vm(n.converter,e,t);return jo(r,[hm(Vo(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,it.none())])}function _E(n,e,t,...r){n=Be(n,De);const s=Be(n.firestore,Ut),i=Vo(s);let o;return o=typeof(e=pe(e))=="string"||e instanceof Uo?uE(i,"updateDoc",n._key,e,t,r):cE(i,"updateDoc",n._key,e),jo(s,[o.toMutation(n._key,it.exists(!0))])}function cc(n){return jo(Be(n.firestore,Ut),[new lu(n._key,it.none())])}function Ys(n,e){const t=Be(n.firestore,Ut),r=Ft(n),s=vm(n.converter,e);return jo(t,[hm(Vo(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,it.exists(!1))]).then(()=>r)}function Xs(n,...e){var t,r,s;n=pe(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Eh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Eh(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(n instanceof De)u=Be(n.firestore,Ut),l=Ao(n._key.path),c={next:h=>{e[o]&&e[o](Em(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=Be(n,un);u=Be(h.firestore,Ut),l=h._query;const d=new Fu(u);c={next:f=>{e[o]&&e[o](new Tm(u,d,h,f))},error:e[o+1],complete:e[o+2]},gm(n._query)}return function(h,d,f,m){const p=new ku(m),g=new bu(d,p,f);return h.asyncQueue.enqueueAndForget(async()=>Tu(await Hi(h),g)),()=>{p.bc(),h.asyncQueue.enqueueAndForget(async()=>Iu(await Hi(h),g))}}(Fo(u),l,a,c)}function jo(n,e){return function(t,r){const s=new Lt;return t.asyncQueue.enqueueAndForget(async()=>MI(await eE(t),r,s)),s.promise}(Fo(n),e)}function Em(n,e,t){const r=t.docs.get(e._key),s=new Fu(n);return new wm(n,s,e._key,r,new Br(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){br=t})(Rs),wt(new ht("firestore",(t,{instanceIdentifier:r,options:s})=>{const i=t.getProvider("app").getImmediate(),o=new Ut(new Sw(t.getProvider("auth-internal")),new Dw(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),nt(Gl,"3.8.0",n),nt(Gl,"3.8.0","esm2017")})();const bm=(n,e,t)=>{var i;const r=document.createElement("li");r.classList.add("comments__comment"),n instanceof HTMLElement||r.classList.add("comments__comment--reply"),r.setAttribute("data-id",e),r.innerHTML=`
        <div class="comments__comment-content">
            <div class="comments__comment-profile mb-sm">
                <div></div>
                <h4>${t.author}</h4>
            </div>
            <p class="text-subtle text-sm ${n instanceof HTMLElement?"mb-sm":""}">
                ${t.content}
            </p>
        </div>
        <ul class="comments__comment-replies">
    `;let s;if(n instanceof HTMLElement){n.appendChild(r);const o=document.createElement("div");o.classList.add("comments__comment-reply"),o.innerHTML=`
            <img src="/icons/reply.svg" alt="reply icon" />
            <span class="text-orange">Reply</span>
        `,o.addEventListener("click",a=>{var l;const u=(l=a.target.parentElement)==null?void 0:l.parentElement;vE(u)}),(i=r.querySelector(".comments__comment-content"))==null||i.appendChild(o)}else s=document.querySelector(`[data-id="${n}"]`),s.children[1].appendChild(r);tb(e)},vE=n=>{const e=document.createElement("form");e.classList.add("mt-sm"),e.id="new-reply-form",e.innerHTML=`
        <div class="form__control form__control--gap">
            <input type="text" class="form__input" placeholder="Reply" name="content" />
            <button type="submit" class="btn icon-btn icon-btn--primary icon-btn--large">
                <img src="/icons/arrow.svg" alt="arrow icon" />
            </button>
        </div>
    `,e.addEventListener("submit",r=>{ib(r)});const t=e.children[0].children[0];t.addEventListener("blur",()=>{n.children[0].removeChild(e)}),n.children[0].appendChild(e),t.focus()},wE=Array.from(document.querySelectorAll(".header")),qo=document.getElementById("login-page"),Sm=document.getElementById("register-page"),Uu=document.getElementById("dashboard-page"),Ar=document.getElementById("projects-page"),zo=document.getElementById("project-page"),Vu=document.getElementById("task-page"),TE=[qo,Sm,Uu,zo,Ar,Vu],IE=document.getElementById("account-username"),EE=document.getElementById("in-progress-projects-btn"),bE=document.getElementById("completed-projects-btn"),SE=document.getElementById("dashboard-back-btn"),kE=document.getElementById("projects-back-btn"),AE=document.getElementById("project-back-btn"),CE=document.getElementById("logout-btn"),DE=Array.from(document.querySelectorAll(".new-project-btn")),RE=Array.from(document.querySelectorAll(".new-task-btn")),xE=document.getElementById("new-note-btn"),LE=Array.from(document.querySelectorAll(".close-modal-btn")),Ho=document.getElementById("new-project-overlay"),Bu=document.getElementById("new-task-overlay"),km=document.getElementById("new-note-overlay"),OE=[Ho,Bu,km],va=Array.from(document.querySelectorAll(".tile")),_i=document.getElementById("login-form"),Jr=document.getElementById("login-form-errors"),NE=document.getElementById("login-form-link"),PE=document.getElementById("google-auth-btn"),$r=document.getElementById("signup-form"),bn=document.getElementById("signup-form-errors"),ME=document.getElementById("signup-form-link"),Me=document.getElementById("new-project-form"),jr=document.getElementById("new-project-form-errors"),kh=document.getElementById("new-project-succes-message"),$u=document.getElementById("new-project-collaborators-list"),FE=document.getElementById("add-collaborator-btn"),UE=document.getElementById("create-project-btn"),vn=document.getElementById("new-task-form"),qr=document.getElementById("new-task-form-errors"),Ah=document.getElementById("new-task-succes-message"),Ki=document.getElementById("new-task-dropdown"),VE=document.getElementById("new-task-dropdown-list"),Am=Array.from(document.querySelectorAll(".form__dropdown-option")),Cm=Array.from(document.querySelectorAll(".new-task__chip")),BE=document.getElementById("create-task-btn"),$E=document.getElementById("new-note-editor"),Ch=document.getElementById("new-note-succes-message"),uc=document.getElementById("new-comment-form"),It=document.getElementById("markdown-content"),ju=document.getElementById("markdown-preview"),jE=document.getElementById("heading-hotkey"),qE=document.getElementById("subtitle-hotkey"),zE=document.getElementById("list-hotkey"),HE=document.getElementById("code-hotkey"),GE=document.getElementById("preview-markdown-btn"),KE=document.getElementById("edit-project-btn"),WE=document.getElementById("delete-project-btn"),QE=document.getElementById("edit-task-btn"),YE=document.getElementById("delete-task-btn"),Dm=document.getElementById("new-password-input"),XE=document.getElementById("password-security-bars"),Rm=document.getElementById("dashboard-task-list"),lc=document.getElementById("projects-in-progress-btn"),hc=document.getElementById("projects-completed-btn"),tr=document.getElementById("projects-list"),Dh=document.getElementById("project-info"),JE=document.getElementById("task-info"),gs=document.getElementById("todo-task-list"),ys=document.getElementById("in-progress-task-list"),_s=document.getElementById("completed-task-list"),Rh=document.getElementById("comments-list"),xm=document.getElementById("notes-list"),le=sE(nf),ZE=async n=>{await Ys(ct(le,"comments"),n)},Lm=async n=>{const e=ct(le,"comments"),t=Ws(e,Qs("projectId","==",n));Xs(t,r=>{Rh.innerHTML="",r.forEach(s=>{bm(Rh,s.id,s.data())})})},eb=async(n,e)=>{await Ys(ct(le,`comments/${n}/replies`),e)},tb=async n=>{const e=ct(le,`comments/${n}/replies`);Xs(e,t=>{t.forEach(r=>{bm(n,r.id,r.data())})})},ut=n=>n!=="",xh=(n,e)=>!(e.length<n),nb=n=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n),rb=()=>{let n=Dm.value;if(n.length==0){Or(0);return}if(n.length<8){Or(1);return}let e=!1,t=!1,r=!1,s=!1;for(let o=0;o<n.length;o++){let a=n.charAt(o);a>="A"&&a<="Z"?e=!0:a>="a"&&a<="z"?t=!0:a>="0"&&a<="9"?r=!0:s=!0}let i=0;if(e&&i++,t&&i++,r&&i++,s&&i++,i>=3){Or(3);return}else if(i==2){Or(2);return}else{Or(1);return}},Or=n=>{Array.from(XE.children).forEach((t,r)=>{n<=r?t.classList.remove("form__security-bar--active"):t.classList.add("form__security-bar--active")})},sb=async n=>{n.preventDefault();const e=uc.content.value;ut(e)&&ZE({author:sessionStorage.getItem("username"),content:e,projectId:sessionStorage.getItem("currentProjectId")}),uc.reset()},ib=async n=>{var s,i;n.preventDefault();const e=n.target,t=e.content.value,r=(i=(s=e.parentElement)==null?void 0:s.parentElement)==null?void 0:i.getAttribute("data-id");ut(t)&&eb(r,{author:sessionStorage.getItem("username"),content:t}),e.reset()},ob=(n,e)=>{const t=document.createElement("li");t.classList.add("task__note"),t.setAttribute("data-id",n),t.innerHTML=`${e.content}`,xm.appendChild(t)};function St(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Om(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ke={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},mr={duration:.5,overwrite:!1,delay:0},qu,Re,ce,Ze=1e8,H=1/Ze,dc=Math.PI*2,ab=dc/4,cb=0,Nm=Math.sqrt,ub=Math.cos,lb=Math.sin,_e=function(e){return typeof e=="string"},Z=function(e){return typeof e=="function"},Vt=function(e){return typeof e=="number"},zu=function(e){return typeof e>"u"},Et=function(e){return typeof e=="object"},$e=function(e){return e!==!1},Pm=function(){return typeof window<"u"},di=function(e){return Z(e)||_e(e)},Mm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xe=Array.isArray,fc=/(?:-?\.?\d|\.)+/gi,Fm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Yn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Um=/[+-]=-?[.\d]+/,Vm=/[^,'"\[\]\s]+/gi,hb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Y,Je,pc,Hu,Qe={},Wi={},Bm,$m=function(e){return(Wi=Fn(e,Qe))&&Ye},Gu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qi=function(e,t){return!t&&console.warn(e)},jm=function(e,t){return e&&(Qe[e]=t)&&Wi&&(Wi[e]=t)||Qe},vs=function(){return 0},db={suppressEvents:!0,isStart:!0,kill:!1},vi={suppressEvents:!0,kill:!1},fb={suppressEvents:!0},Ku={},Jt=[],mc={},qm,ze={},Ta={},Lh=30,wi=[],Wu="",Qu=function(e){var t=e[0],r,s;if(Et(t)||Z(t)||(e=[e]),!(r=(t._gsap||{}).harness)){for(s=wi.length;s--&&!wi[s].targetTest(t););r=wi[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new hg(e[s],r)))||e.splice(s,1);return e},Cn=function(e){return e._gsap||Qu(et(e))[0]._gsap},zm=function(e,t,r){return(r=e[t])&&Z(r)?e[t]():zu(r)&&e.getAttribute&&e.getAttribute(t)||r},je=function(e,t){return(e=e.split(",")).forEach(t)||e},ne=function(e){return Math.round(e*1e5)/1e5||0},we=function(e){return Math.round(e*1e7)/1e7||0},nr=function(e,t){var r=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),r==="+"?e+s:r==="-"?e-s:r==="*"?e*s:e/s},pb=function(e,t){for(var r=t.length,s=0;e.indexOf(t[s])<0&&++s<r;);return s<r},Yi=function(){var e=Jt.length,t=Jt.slice(0),r,s;for(mc={},Jt.length=0,r=0;r<e;r++)s=t[r],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Hm=function(e,t,r,s){Jt.length&&!Re&&Yi(),e.render(t,r,s||Re&&t<0&&(e._initted||e._startAt)),Jt.length&&!Re&&Yi()},Gm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Vm).length<2?t:_e(e)?e.trim():e},Km=function(e){return e},ot=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},mb=function(e){return function(t,r){for(var s in r)s in t||s==="duration"&&e||s==="ease"||(t[s]=r[s])}},Fn=function(e,t){for(var r in t)e[r]=t[r];return e},Oh=function n(e,t){for(var r in t)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=Et(t[r])?n(e[r]||(e[r]={}),t[r]):t[r]);return e},Xi=function(e,t){var r={},s;for(s in e)s in t||(r[s]=e[s]);return r},Zr=function(e){var t=e.parent||Y,r=e.keyframes?mb(xe(e.keyframes)):ot;if($e(e.inherit))for(;t;)r(e,t.vars.defaults),t=t.parent||t._dp;return e},gb=function(e,t){for(var r=e.length,s=r===t.length;s&&r--&&e[r]===t[r];);return r<0},Wm=function(e,t,r,s,i){r===void 0&&(r="_first"),s===void 0&&(s="_last");var o=e[s],a;if(i)for(a=t[i];o&&o[i]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[r],e[r]=t),t._next?t._next._prev=t:e[s]=t,t._prev=o,t.parent=t._dp=e,t},Go=function(e,t,r,s){r===void 0&&(r="_first"),s===void 0&&(s="_last");var i=t._prev,o=t._next;i?i._next=o:e[r]===t&&(e[r]=o),o?o._prev=i:e[s]===t&&(e[s]=i),t._next=t._prev=t.parent=null},rn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Dn=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},yb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},gc=function(e,t,r,s){return e._startAt&&(Re?e._startAt.revert(vi):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},_b=function n(e){return!e||e._ts&&n(e.parent)},Nh=function(e){return e._repeat?gr(e._tTime,e=e.duration()+e._rDelay)*e:0},gr=function(e,t){var r=Math.floor(e/=t);return e&&r===e?r-1:r},Ji=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ko=function(e){return e._end=we(e._start+(e._tDur/Math.abs(e._ts||e._rts||H)||0))},Wo=function(e,t){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=we(r._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ko(e),r._dirty||Dn(r,e)),e},Qm=function(e,t){var r;if((t._time||t._initted&&!t._dur)&&(r=Ji(e.rawTime(),t),(!t._dur||Js(0,t.totalDuration(),r)-t._tTime>H)&&t.render(r,!0)),Dn(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-H}},mt=function(e,t,r,s){return t.parent&&rn(t),t._start=we((Vt(r)?r:r||e!==Y?Xe(e,r,t):e._time)+t._delay),t._end=we(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Wm(e,t,"_first","_last",e._sort?"_start":0),yc(t)||(e._recent=t),s||Qm(e,t),e._ts<0&&Wo(e,e._tTime),e},Ym=function(e,t){return(Qe.ScrollTrigger||Gu("scrollTrigger",t))&&Qe.ScrollTrigger.create(t,e)},Xm=function(e,t,r,s,i){if(Xu(e,t,i),!e._initted)return 1;if(!r&&e._pt&&!Re&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qm!==He.frame)return Jt.push(e),e._lazy=[i,s],1},vb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},yc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},wb=function(e,t,r,s){var i=e.ratio,o=t<0||!t&&(!e._start&&vb(e)&&!(!e._initted&&yc(e))||(e._ts<0||e._dp._ts<0)&&!yc(e))?0:1,a=e._rDelay,c=0,u,l,h;if(a&&e._repeat&&(c=Js(0,e._tDur,t),l=gr(c,a),e._yoyo&&l&1&&(o=1-o),l!==gr(e._tTime,a)&&(i=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==i||Re||s||e._zTime===H||!t&&e._zTime){if(!e._initted&&Xm(e,t,s,r,c))return;for(h=e._zTime,e._zTime=t||(r?H:0),r||(r=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&gc(e,t,r,!0),e._onUpdate&&!r&&tt(e,"onUpdate"),c&&e._repeat&&!r&&e.parent&&tt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&rn(e,1),!r&&!Re&&(tt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Tb=function(e,t,r){var s;if(r>t)for(s=e._first;s&&s._start<=r;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=r;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},yr=function(e,t,r,s){var i=e._repeat,o=we(t)||0,a=e._tTime/e._tDur;return a&&!s&&(e._time*=o/e._dur),e._dur=o,e._tDur=i?i<0?1e10:we(o*(i+1)+e._rDelay*i):o,a>0&&!s&&Wo(e,e._tTime=e._tDur*a),e.parent&&Ko(e),r||Dn(e.parent,e),e},Ph=function(e){return e instanceof Ve?Dn(e):yr(e,e._dur)},Ib={_start:0,endTime:vs,totalDuration:vs},Xe=function n(e,t,r){var s=e.labels,i=e._recent||Ib,o=e.duration()>=Ze?i.endTime(!1):e._dur,a,c,u;return _e(t)&&(isNaN(t)||t in s)?(c=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?i._start:i.endTime(i._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?i:r).totalDuration()/100:1)):a<0?(t in s||(s[t]=o),s[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&r&&(c=c/100*(xe(r)?r[0]:r).totalDuration()),a>1?n(e,t.substr(0,a-1),r)+c:o+c)):t==null?o:+t},es=function(e,t,r){var s=Vt(t[1]),i=(s?2:1)+(e<2?0:1),o=t[i],a,c;if(s&&(o.duration=t[1]),o.parent=r,e){for(a=o,c=r;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=$e(c.vars.inherit)&&c.parent;o.immediateRender=$e(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[i-1]}return new de(t[0],o,t[i+1])},ln=function(e,t){return e||e===0?t(e):t},Js=function(e,t,r){return r<e?e:r>t?t:r},ke=function(e,t){return!_e(e)||!(t=hb.exec(e))?"":t[1]},Eb=function(e,t,r){return ln(r,function(s){return Js(e,t,s)})},_c=[].slice,Jm=function(e,t){return e&&Et(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Et(e[0]))&&!e.nodeType&&e!==Je},bb=function(e,t,r){return r===void 0&&(r=[]),e.forEach(function(s){var i;return _e(s)&&!t||Jm(s,1)?(i=r).push.apply(i,et(s)):r.push(s)})||r},et=function(e,t,r){return ce&&!t&&ce.selector?ce.selector(e):_e(e)&&!r&&(pc||!_r())?_c.call((t||Hu).querySelectorAll(e),0):xe(e)?bb(e,r):Jm(e)?_c.call(e,0):e?[e]:[]},vc=function(e){return e=et(e)[0]||Qi("Invalid scope")||{},function(t){var r=e.current||e.nativeElement||e;return et(t,r.querySelectorAll?r:r===e?Qi("Invalid scope")||Hu.createElement("div"):e)}},Zm=function(e){return e.sort(function(){return .5-Math.random()})},eg=function(e){if(Z(e))return e;var t=Et(e)?e:{each:e},r=Rn(t.ease),s=t.from||0,i=parseFloat(t.base)||0,o={},a=s>0&&s<1,c=isNaN(s)||a,u=t.axis,l=s,h=s;return _e(s)?l=h={center:.5,edges:.5,end:1}[s]||0:!a&&c&&(l=s[0],h=s[1]),function(d,f,m){var p=(m||t).length,g=o[p],y,_,w,I,T,A,k,S,b;if(!g){if(b=t.grid==="auto"?0:(t.grid||[1,Ze])[1],!b){for(k=-Ze;k<(k=m[b++].getBoundingClientRect().left)&&b<p;);b--}for(g=o[p]=[],y=c?Math.min(b,p)*l-.5:s%b,_=b===Ze?0:c?p*h/b-.5:s/b|0,k=0,S=Ze,A=0;A<p;A++)w=A%b-y,I=_-(A/b|0),g[A]=T=u?Math.abs(u==="y"?I:w):Nm(w*w+I*I),T>k&&(k=T),T<S&&(S=T);s==="random"&&Zm(g),g.max=k-S,g.min=S,g.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(b>p?p-1:u?u==="y"?p/b:b:Math.max(b,p/b))||0)*(s==="edges"?-1:1),g.b=p<0?i-p:i,g.u=ke(t.amount||t.each)||0,r=r&&p<0?cg(r):r}return p=(g[d]-g.min)/g.max||0,we(g.b+(r?r(p):p)*g.v)+g.u}},wc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var s=we(Math.round(parseFloat(r)/e)*e*t);return(s-s%1)/t+(Vt(r)?0:ke(r))}},tg=function(e,t){var r=xe(e),s,i;return!r&&Et(e)&&(s=r=e.radius||Ze,e.values?(e=et(e.values),(i=!Vt(e[0]))&&(s*=s)):e=wc(e.increment)),ln(t,r?Z(e)?function(o){return i=e(o),Math.abs(i-o)<=s?i:o}:function(o){for(var a=parseFloat(i?o.x:o),c=parseFloat(i?o.y:0),u=Ze,l=0,h=e.length,d,f;h--;)i?(d=e[h].x-a,f=e[h].y-c,d=d*d+f*f):d=Math.abs(e[h]-a),d<u&&(u=d,l=h);return l=!s||u<=s?e[l]:o,i||l===o||Vt(o)?l:l+ke(o)}:wc(e))},ng=function(e,t,r,s){return ln(xe(e)?!t:r===!0?!!(r=0):!s,function(){return xe(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(s=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(t-e+r*.99))/r)*r*s)/s})},Sb=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(s){return t.reduce(function(i,o){return o(i)},s)}},kb=function(e,t){return function(r){return e(parseFloat(r))+(t||ke(r))}},Ab=function(e,t,r){return sg(e,t,0,1,r)},rg=function(e,t,r){return ln(r,function(s){return e[~~t(s)]})},Cb=function n(e,t,r){var s=t-e;return xe(e)?rg(e,n(0,e.length),t):ln(r,function(i){return(s+(i-e)%s)%s+e})},Db=function n(e,t,r){var s=t-e,i=s*2;return xe(e)?rg(e,n(0,e.length-1),t):ln(r,function(o){return o=(i+(o-e)%i)%i||0,e+(o>s?i-o:o)})},ws=function(e){for(var t=0,r="",s,i,o,a;~(s=e.indexOf("random(",t));)o=e.indexOf(")",s),a=e.charAt(s+7)==="[",i=e.substr(s+7,o-s-7).match(a?Vm:fc),r+=e.substr(t,s-t)+ng(a?i:+i[0],a?0:+i[1],+i[2]||1e-5),t=o+1;return r+e.substr(t,e.length-t)},sg=function(e,t,r,s,i){var o=t-e,a=s-r;return ln(i,function(c){return r+((c-e)/o*a||0)})},Rb=function n(e,t,r,s){var i=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!i){var o=_e(e),a={},c,u,l,h,d;if(r===!0&&(s=1)&&(r=null),o)e={p:e},t={p:t};else if(xe(e)&&!xe(t)){for(l=[],h=e.length,d=h-2,u=1;u<h;u++)l.push(n(e[u-1],e[u]));h--,i=function(m){m*=h;var p=Math.min(d,~~m);return l[p](m-p)},r=t}else s||(e=Fn(xe(e)?[]:{},e));if(!l){for(c in t)Yu.call(a,e,c,"get",t[c]);i=function(m){return el(m,a)||(o?e.p:e)}}}return ln(r,i)},Mh=function(e,t,r){var s=e.labels,i=Ze,o,a,c;for(o in s)a=s[o]-t,a<0==!!r&&a&&i>(a=Math.abs(a))&&(c=o,i=a);return c},tt=function(e,t,r){var s=e.vars,i=s[t],o=ce,a=e._ctx,c,u,l;if(i)return c=s[t+"Params"],u=s.callbackScope||e,r&&Jt.length&&Yi(),a&&(ce=a),l=c?i.apply(u,c):i.call(u),ce=o,l},zr=function(e){return rn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Re),e.progress()<1&&tt(e,"onInterrupt"),e},Xn,xb=function(e){e=!e.name&&e.default||e;var t=e.name,r=Z(e),s=t&&!r&&e.init?function(){this._props=[]}:e,i={init:vs,render:el,add:Yu,kill:Kb,modifier:Gb,rawVars:0},o={targetTest:0,get:0,getSetter:Zu,aliases:{},register:0};if(_r(),e!==s){if(ze[t])return;ot(s,ot(Xi(e,i),o)),Fn(s.prototype,Fn(i,Xi(e,o))),ze[s.prop=t]=s,e.targetTest&&(wi.push(s),Ku[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}jm(t,s),e.register&&e.register(Ye,s,qe)},z=255,Hr={aqua:[0,z,z],lime:[0,z,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,z],navy:[0,0,128],white:[z,z,z],olive:[128,128,0],yellow:[z,z,0],orange:[z,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[z,0,0],pink:[z,192,203],cyan:[0,z,z],transparent:[z,z,z,0]},Ia=function(e,t,r){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(r-t)*e*6:e<.5?r:e*3<2?t+(r-t)*(2/3-e)*6:t)*z+.5|0},ig=function(e,t,r){var s=e?Vt(e)?[e>>16,e>>8&z,e&z]:0:Hr.black,i,o,a,c,u,l,h,d,f,m;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hr[e])s=Hr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(i=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+i+i+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&z,s&z,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&z,e&z]}else if(e.substr(0,3)==="hsl"){if(s=m=e.match(fc),!t)c=+s[0]%360/360,u=+s[1]/100,l=+s[2]/100,o=l<=.5?l*(u+1):l+u-l*u,i=l*2-o,s.length>3&&(s[3]*=1),s[0]=Ia(c+1/3,i,o),s[1]=Ia(c,i,o),s[2]=Ia(c-1/3,i,o);else if(~e.indexOf("="))return s=e.match(Fm),r&&s.length<4&&(s[3]=1),s}else s=e.match(fc)||Hr.transparent;s=s.map(Number)}return t&&!m&&(i=s[0]/z,o=s[1]/z,a=s[2]/z,h=Math.max(i,o,a),d=Math.min(i,o,a),l=(h+d)/2,h===d?c=u=0:(f=h-d,u=l>.5?f/(2-h-d):f/(h+d),c=h===i?(o-a)/f+(o<a?6:0):h===o?(a-i)/f+2:(i-o)/f+4,c*=60),s[0]=~~(c+.5),s[1]=~~(u*100+.5),s[2]=~~(l*100+.5)),r&&s.length<4&&(s[3]=1),s},og=function(e){var t=[],r=[],s=-1;return e.split(Zt).forEach(function(i){var o=i.match(Yn)||[];t.push.apply(t,o),r.push(s+=o.length+1)}),t.c=r,t},Fh=function(e,t,r){var s="",i=(e+s).match(Zt),o=t?"hsla(":"rgba(",a=0,c,u,l,h;if(!i)return e;if(i=i.map(function(d){return(d=ig(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),r&&(l=og(e),c=r.c,c.join(s)!==l.c.join(s)))for(u=e.replace(Zt,"1").split(Yn),h=u.length-1;a<h;a++)s+=u[a]+(~c.indexOf(a)?i.shift()||o+"0,0,0,0)":(l.length?l:i.length?i:r).shift());if(!u)for(u=e.split(Zt),h=u.length-1;a<h;a++)s+=u[a]+i[a];return s+u[h]},Zt=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hr)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Lb=/hsl[a]?\(/,ag=function(e){var t=e.join(" "),r;if(Zt.lastIndex=0,Zt.test(t))return r=Lb.test(t),e[1]=Fh(e[1],r),e[0]=Fh(e[0],r,og(e[1])),!0},Ts,He=function(){var n=Date.now,e=500,t=33,r=n(),s=r,i=1e3/240,o=i,a=[],c,u,l,h,d,f,m=function p(g){var y=n()-s,_=g===!0,w,I,T,A;if(y>e&&(r+=y-t),s+=y,T=s-r,w=T-o,(w>0||_)&&(A=++h.frame,d=T-h.time*1e3,h.time=T=T/1e3,o+=w+(w>=i?4:i-w),I=1),_||(c=u(p)),I)for(f=0;f<a.length;f++)a[f](T,d,A,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){Bm&&(!pc&&Pm()&&(Je=pc=window,Hu=Je.document||{},Qe.gsap=Ye,(Je.gsapVersions||(Je.gsapVersions=[])).push(Ye.version),$m(Wi||Je.GreenSockGlobals||!Je.gsap&&Je||{}),l=Je.requestAnimationFrame),c&&h.sleep(),u=l||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Ts=1,m(2))},sleep:function(){(l?Je.cancelAnimationFrame:clearTimeout)(c),Ts=0,u=vs},lagSmoothing:function(g,y){e=g||1/0,t=Math.min(y||33,e)},fps:function(g){i=1e3/(g||240),o=h.time*1e3+i},add:function(g,y,_){var w=y?function(I,T,A,k){g(I,T,A,k),h.remove(w)}:g;return h.remove(g),a[_?"unshift":"push"](w),_r(),w},remove:function(g,y){~(y=a.indexOf(g))&&a.splice(y,1)&&f>=y&&f--},_listeners:a},h}(),_r=function(){return!Ts&&He.wake()},U={},Ob=/^[\d.\-M][\d.\-,\s]/,Nb=/["']/g,Pb=function(e){for(var t={},r=e.substr(1,e.length-3).split(":"),s=r[0],i=1,o=r.length,a,c,u;i<o;i++)c=r[i],a=i!==o-1?c.lastIndexOf(","):c.length,u=c.substr(0,a),t[s]=isNaN(u)?u.replace(Nb,"").trim():+u,s=c.substr(a+1).trim();return t},Mb=function(e){var t=e.indexOf("(")+1,r=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<r?e.indexOf(")",r+1):r)},Fb=function(e){var t=(e+"").split("("),r=U[t[0]];return r&&t.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[Pb(t[1])]:Mb(e).split(",").map(Gm)):U._CE&&Ob.test(e)?U._CE("",e):r},cg=function(e){return function(t){return 1-e(1-t)}},ug=function n(e,t){for(var r=e._first,s;r;)r instanceof Ve?n(r,t):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==t&&(r.timeline?n(r.timeline,t):(s=r._ease,r._ease=r._yEase,r._yEase=s,r._yoyo=t)),r=r._next},Rn=function(e,t){return e&&(Z(e)?e:U[e]||Fb(e))||t},Hn=function(e,t,r,s){r===void 0&&(r=function(c){return 1-t(1-c)}),s===void 0&&(s=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var i={easeIn:t,easeOut:r,easeInOut:s},o;return je(e,function(a){U[a]=Qe[a]=i,U[o=a.toLowerCase()]=r;for(var c in i)U[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=U[a+"."+c]=i[c]}),i},lg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ea=function n(e,t,r){var s=t>=1?t:1,i=(r||(e?.3:.45))/(t<1?t:1),o=i/dc*(Math.asin(1/s)||0),a=function(l){return l===1?1:s*Math.pow(2,-10*l)*lb((l-o)*i)+1},c=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:lg(a);return i=dc/i,c.config=function(u,l){return n(e,u,l)},c},ba=function n(e,t){t===void 0&&(t=1.70158);var r=function(o){return o?--o*o*((t+1)*o+t)+1:0},s=e==="out"?r:e==="in"?function(i){return 1-r(1-i)}:lg(r);return s.config=function(i){return n(e,i)},s};je("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Hn(n+",Power"+(t-1),e?function(r){return Math.pow(r,t)}:function(r){return r},function(r){return 1-Math.pow(1-r,t)},function(r){return r<.5?Math.pow(r*2,t)/2:1-Math.pow((1-r)*2,t)/2})});U.Linear.easeNone=U.none=U.Linear.easeIn;Hn("Elastic",Ea("in"),Ea("out"),Ea());(function(n,e){var t=1/e,r=2*t,s=2.5*t,i=function(a){return a<t?n*a*a:a<r?n*Math.pow(a-1.5/e,2)+.75:a<s?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Hn("Bounce",function(o){return 1-i(1-o)},i)})(7.5625,2.75);Hn("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Hn("Circ",function(n){return-(Nm(1-n*n)-1)});Hn("Sine",function(n){return n===1?1:-ub(n*ab)+1});Hn("Back",ba("in"),ba("out"),ba());U.SteppedEase=U.steps=Qe.SteppedEase={config:function(e,t){e===void 0&&(e=1);var r=1/e,s=e+(t?0:1),i=t?1:0,o=1-H;return function(a){return((s*Js(0,o,a)|0)+i)*r}}};mr.ease=U["quad.out"];je("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Wu+=n+","+n+"Params,"});var hg=function(e,t){this.id=cb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:zm,this.set=t?t.getSetter:Zu},vr=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,yr(this,+t.duration,1,1),this.data=t.data,ce&&(this._ctx=ce,ce.data.push(this)),Ts||He.wake()}var e=n.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,yr(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,s){if(_r(),!arguments.length)return this._tTime;var i=this._dp;if(i&&i.smoothChildTiming&&this._ts){for(Wo(this,r),!i._dp||i.parent||Qm(i,this);i&&i.parent;)i.parent._time!==i._start+(i._ts>=0?i._tTime/i._ts:(i.totalDuration()-i._tTime)/-i._ts)&&i.totalTime(i._tTime,!0),i=i.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&mt(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===H||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Hm(this,r,s)),this},e.time=function(r,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+Nh(this))%(this._dur+this._rDelay)||(r?this._dur:0),s):this._time},e.totalProgress=function(r,s){return arguments.length?this.totalTime(this.totalDuration()*r,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(r,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+Nh(this),s):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(r,s){var i=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*i,s):this._repeat?gr(this._tTime,i)+1:1},e.timeScale=function(r){if(!arguments.length)return this._rts===-H?0:this._rts;if(this._rts===r)return this;var s=this.parent&&this._ts?Ji(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-H?0:this._rts,this.totalTime(Js(-this._delay,this._tDur,s),!0),Ko(this),yb(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_r(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==H&&(this._tTime-=H)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&mt(s,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+($e(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var s=this.parent||this._dp;return s?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ji(s.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=fb);var s=Re;return Re=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Re=s,this},e.globalTime=function(r){for(var s=this,i=arguments.length?r:s.rawTime();s;)i=s._start+i/(s._ts||1),s=s._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(r):i},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,Ph(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var s=this._time;return this._rDelay=r,Ph(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,s){return this.totalTime(Xe(this,r),$e(s))},e.restart=function(r,s){return this.play().totalTime(r?-this._delay:0,$e(s))},e.play=function(r,s){return r!=null&&this.seek(r,s),this.reversed(!1).paused(!1)},e.reverse=function(r,s){return r!=null&&this.seek(r||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(r,s){return r!=null&&this.seek(r,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-H:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-H,this},e.isActive=function(){var r=this.parent||this._dp,s=this._start,i;return!!(!r||this._ts&&this._initted&&r.isActive()&&(i=r.rawTime(!0))>=s&&i<this.endTime(!0)-H)},e.eventCallback=function(r,s,i){var o=this.vars;return arguments.length>1?(s?(o[r]=s,i&&(o[r+"Params"]=i),r==="onUpdate"&&(this._onUpdate=s)):delete o[r],this):o[r]},e.then=function(r){var s=this;return new Promise(function(i){var o=Z(r)?r:Km,a=function(){var u=s.then;s.then=null,Z(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=u),i(o),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?a():s._prom=a})},e.kill=function(){zr(this)},n}();ot(vr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-H,_prom:0,_ps:!1,_rts:1});var Ve=function(n){Om(e,n);function e(r,s){var i;return r===void 0&&(r={}),i=n.call(this,r)||this,i.labels={},i.smoothChildTiming=!!r.smoothChildTiming,i.autoRemoveChildren=!!r.autoRemoveChildren,i._sort=$e(r.sortChildren),Y&&mt(r.parent||Y,St(i),s),r.reversed&&i.reverse(),r.paused&&i.paused(!0),r.scrollTrigger&&Ym(St(i),r.scrollTrigger),i}var t=e.prototype;return t.to=function(s,i,o){return es(0,arguments,this),this},t.from=function(s,i,o){return es(1,arguments,this),this},t.fromTo=function(s,i,o,a){return es(2,arguments,this),this},t.set=function(s,i,o){return i.duration=0,i.parent=this,Zr(i).repeatDelay||(i.repeat=0),i.immediateRender=!!i.immediateRender,new de(s,i,Xe(this,o),1),this},t.call=function(s,i,o){return mt(this,de.delayedCall(0,s,i),o)},t.staggerTo=function(s,i,o,a,c,u,l){return o.duration=i,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=l,o.parent=this,new de(s,o,Xe(this,c)),this},t.staggerFrom=function(s,i,o,a,c,u,l){return o.runBackwards=1,Zr(o).immediateRender=$e(o.immediateRender),this.staggerTo(s,i,o,a,c,u,l)},t.staggerFromTo=function(s,i,o,a,c,u,l,h){return a.startAt=o,Zr(a).immediateRender=$e(a.immediateRender),this.staggerTo(s,i,a,c,u,l,h)},t.render=function(s,i,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,l=s<=0?0:we(s),h=this._zTime<0!=s<0&&(this._initted||!u),d,f,m,p,g,y,_,w,I,T,A,k;if(this!==Y&&l>c&&s>=0&&(l=c),l!==this._tTime||o||h){if(a!==this._time&&u&&(l+=this._time-a,s+=this._time-a),d=l,I=this._start,w=this._ts,y=!w,h&&(u||(a=this._zTime),(s||!i)&&(this._zTime=s)),this._repeat){if(A=this._yoyo,g=u+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(g*100+s,i,o);if(d=we(l%g),l===c?(p=this._repeat,d=u):(p=~~(l/g),p&&p===l/g&&(d=u,p--),d>u&&(d=u)),T=gr(this._tTime,g),!a&&this._tTime&&T!==p&&(T=p),A&&p&1&&(d=u-d,k=1),p!==T&&!this._lock){var S=A&&T&1,b=S===(A&&p&1);if(p<T&&(S=!S),a=S?0:u,this._lock=1,this.render(a||(k?0:we(p*g)),i,!u)._lock=0,this._tTime=l,!i&&this.parent&&tt(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1),a&&a!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,b&&(this._lock=2,a=S?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;ug(this,k)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=Tb(this,we(a),we(d)),_&&(l-=d-(d=_._start))),this._tTime=l,this._time=d,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&d&&!i&&(tt(this,"onStart"),this._tTime!==l))return this;if(d>=a&&s>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&_!==f){if(f.parent!==this)return this.render(s,i,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,i,o),d!==this._time||!this._ts&&!y){_=0,m&&(l+=this._zTime=-H);break}}f=m}else{f=this._last;for(var B=s<0?s:d;f;){if(m=f._prev,(f._act||B<=f._end)&&f._ts&&_!==f){if(f.parent!==this)return this.render(s,i,o);if(f.render(f._ts>0?(B-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(B-f._start)*f._ts,i,o||Re&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!y){_=0,m&&(l+=this._zTime=B?-H:H);break}}f=m}}if(_&&!i&&(this.pause(),_.render(d>=a?0:-H)._zTime=d>=a?1:-1,this._ts))return this._start=I,Ko(this),this.render(s,i,o);this._onUpdate&&!i&&tt(this,"onUpdate",!0),(l===c&&this._tTime>=this.totalDuration()||!l&&a)&&(I===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!u)&&(l===c&&this._ts>0||!l&&this._ts<0)&&rn(this,1),!i&&!(s<0&&!a)&&(l||a||!c)&&(tt(this,l===c&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(l<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,i){var o=this;if(Vt(i)||(i=Xe(this,i,s)),!(s instanceof vr)){if(xe(s))return s.forEach(function(a){return o.add(a,i)}),this;if(_e(s))return this.addLabel(s,i);if(Z(s))s=de.delayedCall(0,s);else return this}return this!==s?mt(this,s,i):this},t.getChildren=function(s,i,o,a){s===void 0&&(s=!0),i===void 0&&(i=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ze);for(var c=[],u=this._first;u;)u._start>=a&&(u instanceof de?i&&c.push(u):(o&&c.push(u),s&&c.push.apply(c,u.getChildren(!0,i,o)))),u=u._next;return c},t.getById=function(s){for(var i=this.getChildren(1,1,1),o=i.length;o--;)if(i[o].vars.id===s)return i[o]},t.remove=function(s){return _e(s)?this.removeLabel(s):Z(s)?this.killTweensOf(s):(Go(this,s),s===this._recent&&(this._recent=this._last),Dn(this))},t.totalTime=function(s,i){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=we(He.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),n.prototype.totalTime.call(this,s,i),this._forcing=0,this):this._tTime},t.addLabel=function(s,i){return this.labels[s]=Xe(this,i),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,i,o){var a=de.delayedCall(0,i||vs,o);return a.data="isPause",this._hasPause=1,mt(this,a,Xe(this,s))},t.removePause=function(s){var i=this._first;for(s=Xe(this,s);i;)i._start===s&&i.data==="isPause"&&rn(i),i=i._next},t.killTweensOf=function(s,i,o){for(var a=this.getTweensOf(s,o),c=a.length;c--;)Gt!==a[c]&&a[c].kill(s,i);return this},t.getTweensOf=function(s,i){for(var o=[],a=et(s),c=this._first,u=Vt(i),l;c;)c instanceof de?pb(c._targets,a)&&(u?(!Gt||c._initted&&c._ts)&&c.globalTime(0)<=i&&c.globalTime(c.totalDuration())>i:!i||c.isActive())&&o.push(c):(l=c.getTweensOf(a,i)).length&&o.push.apply(o,l),c=c._next;return o},t.tweenTo=function(s,i){i=i||{};var o=this,a=Xe(o,s),c=i,u=c.startAt,l=c.onStart,h=c.onStartParams,d=c.immediateRender,f,m=de.to(o,ot({ease:i.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:i.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||H,onStart:function(){if(o.pause(),!f){var g=i.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());m._dur!==g&&yr(m,g,0,1).render(m._time,!0,!0),f=1}l&&l.apply(m,h||[])}},i));return d?m.render(0):m},t.tweenFromTo=function(s,i,o){return this.tweenTo(i,ot({startAt:{time:Xe(this,s)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Mh(this,Xe(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Mh(this,Xe(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+H)},t.shiftChildren=function(s,i,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,u;a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(i)for(u in c)c[u]>=o&&(c[u]+=s);return Dn(this)},t.invalidate=function(s){var i=this._first;for(this._lock=0;i;)i.invalidate(s),i=i._next;return n.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var i=this._first,o;i;)o=i._next,this.remove(i),i=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Dn(this)},t.totalDuration=function(s){var i=0,o=this,a=o._last,c=Ze,u,l,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),l=a._start,l>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,mt(o,a,l-a._delay,1)._lock=0):c=l,l<0&&a._ts&&(i-=l,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=l/o._ts,o._time-=l,o._tTime-=l),o.shiftChildren(-l,!1,-1/0),c=0),a._end>i&&a._ts&&(i=a._end),a=u;yr(o,o===Y&&o._time>i?o._time:i,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(s){if(Y._ts&&(Hm(Y,Ji(s,Y)),qm=He.frame),He.frame>=Lh){Lh+=Ke.autoSleep||120;var i=Y._first;if((!i||!i._ts)&&Ke.autoSleep&&He._listeners.length<2){for(;i&&!i._ts;)i=i._next;i||He.sleep()}}},e}(vr);ot(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ub=function(e,t,r,s,i,o,a){var c=new qe(this._pt,e,t,0,1,yg,null,i),u=0,l=0,h,d,f,m,p,g,y,_;for(c.b=r,c.e=s,r+="",s+="",(y=~s.indexOf("random("))&&(s=ws(s)),o&&(_=[r,s],o(_,e,t),r=_[0],s=_[1]),d=r.match(wa)||[];h=wa.exec(s);)m=h[0],p=s.substring(u,h.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),m!==d[l++]&&(g=parseFloat(d[l-1])||0,c._pt={_next:c._pt,p:p||l===1?p:",",s:g,c:m.charAt(1)==="="?nr(g,m)-g:parseFloat(m)-g,m:f&&f<4?Math.round:0},u=wa.lastIndex);return c.c=u<s.length?s.substring(u,s.length):"",c.fp=a,(Um.test(s)||y)&&(c.e=0),this._pt=c,c},Yu=function(e,t,r,s,i,o,a,c,u,l){Z(s)&&(s=s(i||0,e,o));var h=e[t],d=r!=="get"?r:Z(h)?u?e[t.indexOf("set")||!Z(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,f=Z(h)?u?qb:mg:Ju,m;if(_e(s)&&(~s.indexOf("random(")&&(s=ws(s)),s.charAt(1)==="="&&(m=nr(d,s)+(ke(d)||0),(m||m===0)&&(s=m))),!l||d!==s||Tc)return!isNaN(d*s)&&s!==""?(m=new qe(this._pt,e,t,+d||0,s-(d||0),typeof h=="boolean"?Hb:gg,0,f),u&&(m.fp=u),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&Gu(t,s),Ub.call(this,e,t,d,s,f,c||Ke.stringFilter,u))},Vb=function(e,t,r,s,i){if(Z(e)&&(e=ts(e,i,t,r,s)),!Et(e)||e.style&&e.nodeType||xe(e)||Mm(e))return _e(e)?ts(e,i,t,r,s):e;var o={},a;for(a in e)o[a]=ts(e[a],i,t,r,s);return o},dg=function(e,t,r,s,i,o){var a,c,u,l;if(ze[e]&&(a=new ze[e]).init(i,a.rawVars?t[e]:Vb(t[e],s,i,o,r),r,s,o)!==!1&&(r._pt=c=new qe(r._pt,i,e,0,1,a.render,a,0,a.priority),r!==Xn))for(u=r._ptLookup[r._targets.indexOf(i)],l=a._props.length;l--;)u[a._props[l]]=c;return a},Gt,Tc,Xu=function n(e,t,r){var s=e.vars,i=s.ease,o=s.startAt,a=s.immediateRender,c=s.lazy,u=s.onUpdate,l=s.onUpdateParams,h=s.callbackScope,d=s.runBackwards,f=s.yoyoEase,m=s.keyframes,p=s.autoRevert,g=e._dur,y=e._startAt,_=e._targets,w=e.parent,I=w&&w.data==="nested"?w.vars.targets:_,T=e._overwrite==="auto"&&!qu,A=e.timeline,k,S,b,B,j,J,re,se,Q,he,ie,Pe,hn;if(A&&(!m||!i)&&(i="none"),e._ease=Rn(i,mr.ease),e._yEase=f?cg(Rn(f===!0?i:f,mr.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!A&&!!s.runBackwards,!A||m&&!s.stagger){if(se=_[0]?Cn(_[0]).harness:0,Pe=se&&s[se.prop],k=Xi(s,Ku),y&&(y._zTime<0&&y.progress(1),t<0&&d&&a&&!p?y.render(-1,!0):y.revert(d&&g?vi:db),y._lazy=0),o){if(rn(e._startAt=de.set(_,ot({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!y&&$e(c),startAt:null,delay:0,onUpdate:u,onUpdateParams:l,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Re||!a&&!p)&&e._startAt.revert(vi),a&&g&&t<=0&&r<=0){t&&(e._zTime=t);return}}else if(d&&g&&!y){if(t&&(a=!1),b=ot({overwrite:!1,data:"isFromStart",lazy:a&&!y&&$e(c),immediateRender:a,stagger:0,parent:w},k),Pe&&(b[se.prop]=Pe),rn(e._startAt=de.set(_,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Re?e._startAt.revert(vi):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,H,H);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&$e(c)||c&&!g,S=0;S<_.length;S++){if(j=_[S],re=j._gsap||Qu(_)[S]._gsap,e._ptLookup[S]=he={},mc[re.id]&&Jt.length&&Yi(),ie=I===_?S:I.indexOf(j),se&&(Q=new se).init(j,Pe||k,e,ie,I)!==!1&&(e._pt=B=new qe(e._pt,j,Q.name,0,1,Q.render,Q,0,Q.priority),Q._props.forEach(function(dn){he[dn]=B}),Q.priority&&(J=1)),!se||Pe)for(b in k)ze[b]&&(Q=dg(b,k,e,ie,j,I))?Q.priority&&(J=1):he[b]=B=Yu.call(e,j,b,"get",k[b],ie,I,0,s.stringFilter);e._op&&e._op[S]&&e.kill(j,e._op[S]),T&&e._pt&&(Gt=e,Y.killTweensOf(j,he,e.globalTime(t)),hn=!e.parent,Gt=0),e._pt&&c&&(mc[re.id]=1)}J&&_g(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!hn,m&&t<=0&&A.render(Ze,!0,!0)},Bb=function(e,t,r,s,i,o,a){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,l,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Tc=1,e.vars[t]="+=0",Xu(e,a),Tc=0,1;c.push(u)}for(d=c.length;d--;)l=c[d],u=l._pt||l,u.s=(s||s===0)&&!i?s:u.s+(s||0)+o*u.c,u.c=r-u.s,l.e&&(l.e=ne(r)+ke(l.e)),l.b&&(l.b=u.s+ke(l.b))},$b=function(e,t){var r=e[0]?Cn(e[0]).harness:0,s=r&&r.aliases,i,o,a,c;if(!s)return t;i=Fn({},t);for(o in s)if(o in i)for(c=s[o].split(","),a=c.length;a--;)i[c[a]]=i[o];return i},jb=function(e,t,r,s){var i=t.ease||s||"power1.inOut",o,a;if(xe(t))a=r[e]||(r[e]=[]),t.forEach(function(c,u){return a.push({t:u/(t.length-1)*100,v:c,e:i})});else for(o in t)a=r[o]||(r[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:i})},ts=function(e,t,r,s,i){return Z(e)?e.call(t,r,s,i):_e(e)&&~e.indexOf("random(")?ws(e):e},fg=Wu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",pg={};je(fg+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return pg[n]=1});var de=function(n){Om(e,n);function e(r,s,i,o){var a;typeof s=="number"&&(i.duration=s,s=i,i=null),a=n.call(this,o?s:Zr(s))||this;var c=a.vars,u=c.duration,l=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,m=c.keyframes,p=c.defaults,g=c.scrollTrigger,y=c.yoyoEase,_=s.parent||Y,w=(xe(r)||Mm(r)?Vt(r[0]):"length"in s)?[r]:et(r),I,T,A,k,S,b,B,j;if(a._targets=w.length?Qu(w):Qi("GSAP target "+r+" not found. https://greensock.com",!Ke.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||d||di(u)||di(l)){if(s=a.vars,I=a.timeline=new Ve({data:"nested",defaults:p||{},targets:_&&_.data==="nested"?_.vars.targets:w}),I.kill(),I.parent=I._dp=St(a),I._start=0,d||di(u)||di(l)){if(k=w.length,B=d&&eg(d),Et(d))for(S in d)~fg.indexOf(S)&&(j||(j={}),j[S]=d[S]);for(T=0;T<k;T++)A=Xi(s,pg),A.stagger=0,y&&(A.yoyoEase=y),j&&Fn(A,j),b=w[T],A.duration=+ts(u,St(a),T,b,w),A.delay=(+ts(l,St(a),T,b,w)||0)-a._delay,!d&&k===1&&A.delay&&(a._delay=l=A.delay,a._start+=l,A.delay=0),I.to(b,A,B?B(T,b,w):0),I._ease=U.none;I.duration()?u=l=0:a.timeline=0}else if(m){Zr(ot(I.vars.defaults,{ease:"none"})),I._ease=Rn(m.ease||s.ease||"none");var J=0,re,se,Q;if(xe(m))m.forEach(function(he){return I.to(w,he,">")}),I.duration();else{A={};for(S in m)S==="ease"||S==="easeEach"||jb(S,m[S],A,m.easeEach);for(S in A)for(re=A[S].sort(function(he,ie){return he.t-ie.t}),J=0,T=0;T<re.length;T++)se=re[T],Q={ease:se.e,duration:(se.t-(T?re[T-1].t:0))/100*u},Q[S]=se.v,I.to(w,Q,J),J+=Q.duration;I.duration()<u&&I.to({},{duration:u-I.duration()})}}u||a.duration(u=I.duration())}else a.timeline=0;return f===!0&&!qu&&(Gt=St(a),Y.killTweensOf(w),Gt=0),mt(_,St(a),i),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(h||!u&&!m&&a._start===we(_._time)&&$e(h)&&_b(St(a))&&_.data!=="nested")&&(a._tTime=-H,a.render(Math.max(0,-l)||0)),g&&Ym(St(a),g),a}var t=e.prototype;return t.render=function(s,i,o){var a=this._time,c=this._tDur,u=this._dur,l=s<0,h=s>c-H&&!l?c:s<H?0:s,d,f,m,p,g,y,_,w,I;if(!u)wb(this,s,i,o);else if(h!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==l){if(d=h,w=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&l)return this.totalTime(p*100+s,i,o);if(d=we(h%p),h===c?(m=this._repeat,d=u):(m=~~(h/p),m&&m===h/p&&(d=u,m--),d>u&&(d=u)),y=this._yoyo&&m&1,y&&(I=this._yEase,d=u-d),g=gr(this._tTime,p),d===a&&!o&&this._initted)return this._tTime=h,this;m!==g&&(w&&this._yEase&&ug(w,y),this.vars.repeatRefresh&&!y&&!this._lock&&(this._lock=o=1,this.render(we(p*m),!0).invalidate()._lock=0))}if(!this._initted){if(Xm(this,l?s:d,o,i,h))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(s,i,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(I||this._ease)(d/u),this._from&&(this.ratio=_=1-_),d&&!a&&!i&&(tt(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(_,f.d),f=f._next;w&&w.render(s<0?s:!d&&y?-H:w._dur*w._ease(d/this._dur),i,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!i&&(l&&gc(this,s,i,o),tt(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!i&&this.parent&&tt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(l&&!this._onUpdate&&gc(this,s,!0,!0),(s||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&rn(this,1),!i&&!(l&&!a)&&(h||a||y)&&(tt(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),n.prototype.invalidate.call(this,s)},t.resetTo=function(s,i,o,a){Ts||He.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Xu(this,c),u=this._ease(c/this._dur),Bb(this,s,i,o,a,u,c)?this.resetTo(s,i,o,a):(Wo(this,0),this.parent||Wm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,i){if(i===void 0&&(i="all"),!s&&(!i||i==="all"))return this._lazy=this._pt=0,this.parent?zr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,i,Gt&&Gt.vars.overwrite!==!0)._first||zr(this),this.parent&&o!==this.timeline.totalDuration()&&yr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=s?et(s):a,u=this._ptLookup,l=this._pt,h,d,f,m,p,g,y;if((!i||i==="all")&&gb(a,c))return i==="all"&&(this._pt=0),zr(this);for(h=this._op=this._op||[],i!=="all"&&(_e(i)&&(p={},je(i,function(_){return p[_]=1}),i=p),i=$b(a,i)),y=a.length;y--;)if(~c.indexOf(a[y])){d=u[y],i==="all"?(h[y]=i,m=d,f={}):(f=h[y]=h[y]||{},m=i);for(p in m)g=d&&d[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&Go(this,g,"_pt"),delete d[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&l&&zr(this),this},e.to=function(s,i){return new e(s,i,arguments[2])},e.from=function(s,i){return es(1,arguments)},e.delayedCall=function(s,i,o,a){return new e(i,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:i,onReverseComplete:i,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(s,i,o){return es(2,arguments)},e.set=function(s,i){return i.duration=0,i.repeatDelay||(i.repeat=0),new e(s,i)},e.killTweensOf=function(s,i,o){return Y.killTweensOf(s,i,o)},e}(vr);ot(de.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});je("staggerTo,staggerFrom,staggerFromTo",function(n){de[n]=function(){var e=new Ve,t=_c.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Ju=function(e,t,r){return e[t]=r},mg=function(e,t,r){return e[t](r)},qb=function(e,t,r,s){return e[t](s.fp,r)},zb=function(e,t,r){return e.setAttribute(t,r)},Zu=function(e,t){return Z(e[t])?mg:zu(e[t])&&e.setAttribute?zb:Ju},gg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Hb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yg=function(e,t){var r=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;r;)s=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+s,r=r._next;s+=t.c}t.set(t.t,t.p,s,t)},el=function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next},Gb=function(e,t,r,s){for(var i=this._pt,o;i;)o=i._next,i.p===s&&i.modifier(e,t,r),i=o},Kb=function(e){for(var t=this._pt,r,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Go(this,t,"_pt"):t.dep||(r=1),t=s;return!r},Wb=function(e,t,r,s){s.mSet(e,t,s.m.call(s.tween,r,s.mt),s)},_g=function(e){for(var t=e._pt,r,s,i,o;t;){for(r=t._next,s=i;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:o)?t._prev._next=t:i=t,(t._next=s)?s._prev=t:o=t,t=r}e._pt=i},qe=function(){function n(t,r,s,i,o,a,c,u,l){this.t=r,this.s=i,this.c=o,this.p=s,this.r=a||gg,this.d=c||this,this.set=u||Ju,this.pr=l||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(r,s,i){this.mSet=this.mSet||this.set,this.set=Wb,this.m=r,this.mt=i,this.tween=s},n}();je(Wu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Ku[n]=1});Qe.TweenMax=Qe.TweenLite=de;Qe.TimelineLite=Qe.TimelineMax=Ve;Y=new Ve({sortChildren:!1,defaults:mr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ke.stringFilter=ag;var wr=[],Ti={},Qb=[],Uh=0,Sa=function(e){return(Ti[e]||Qb).map(function(t){return t()})},Ic=function(){var e=Date.now(),t=[];e-Uh>2&&(Sa("matchMediaInit"),wr.forEach(function(r){var s=r.queries,i=r.conditions,o,a,c,u;for(a in s)o=Je.matchMedia(s[a]).matches,o&&(c=1),o!==i[a]&&(i[a]=o,u=1);u&&(r.revert(),c&&t.push(r))}),Sa("matchMediaRevert"),t.forEach(function(r){return r.onMatch(r)}),Uh=e,Sa("matchMedia"))},vg=function(){function n(t,r){this.selector=r&&vc(r),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=n.prototype;return e.add=function(r,s,i){Z(r)&&(i=s,s=r,r=Z);var o=this,a=function(){var u=ce,l=o.selector,h;return u&&u!==o&&u.data.push(o),i&&(o.selector=vc(i)),ce=o,h=s.apply(o,arguments),Z(h)&&o._r.push(h),ce=u,o.selector=l,o.isReverted=!1,h};return o.last=a,r===Z?a(o):r?o[r]=a:a},e.ignore=function(r){var s=ce;ce=null,r(this),ce=s},e.getTweens=function(){var r=[];return this.data.forEach(function(s){return s instanceof n?r.push.apply(r,s.getTweens()):s instanceof de&&!(s.parent&&s.parent.data==="nested")&&r.push(s)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,s){var i=this;if(r){var o=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,u){return u.g-c.g||-1}).forEach(function(c){return c.t.revert(r)}),this.data.forEach(function(c){return!(c instanceof vr)&&c.revert&&c.revert(r)}),this._r.forEach(function(c){return c(r,i)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),s){var a=wr.indexOf(this);~a&&wr.splice(a,1)}},e.revert=function(r){this.kill(r||{})},n}(),Yb=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(r,s,i){Et(r)||(r={matches:r});var o=new vg(0,i||this.scope),a=o.conditions={},c,u,l;this.contexts.push(o),s=o.add("onMatch",s),o.queries=r;for(u in r)u==="all"?l=1:(c=Je.matchMedia(r[u]),c&&(wr.indexOf(o)<0&&wr.push(o),(a[u]=c.matches)&&(l=1),c.addListener?c.addListener(Ic):c.addEventListener("change",Ic)));return l&&s(o),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(s){return s.kill(r,!0)})},n}(),Zi={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(s){return xb(s)})},timeline:function(e){return new Ve(e)},getTweensOf:function(e,t){return Y.getTweensOf(e,t)},getProperty:function(e,t,r,s){_e(e)&&(e=et(e)[0]);var i=Cn(e||{}).get,o=r?Km:Gm;return r==="native"&&(r=""),e&&(t?o((ze[t]&&ze[t].get||i)(e,t,r,s)):function(a,c,u){return o((ze[a]&&ze[a].get||i)(e,a,c,u))})},quickSetter:function(e,t,r){if(e=et(e),e.length>1){var s=e.map(function(l){return Ye.quickSetter(l,t,r)}),i=s.length;return function(l){for(var h=i;h--;)s[h](l)}}e=e[0]||{};var o=ze[t],a=Cn(e),c=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(l){var h=new o;Xn._pt=0,h.init(e,r?l+r:l,Xn,0,[e]),h.render(1,h),Xn._pt&&el(1,Xn)}:a.set(e,c);return o?u:function(l){return u(e,c,r?l+r:l,a,1)}},quickTo:function(e,t,r){var s,i=Ye.to(e,Fn((s={},s[t]="+=0.1",s.paused=!0,s),r||{})),o=function(c,u,l){return i.resetTo(t,c,u,l)};return o.tween=i,o},isTweening:function(e){return Y.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Rn(e.ease,mr.ease)),Oh(mr,e||{})},config:function(e){return Oh(Ke,e||{})},registerEffect:function(e){var t=e.name,r=e.effect,s=e.plugins,i=e.defaults,o=e.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!ze[a]&&!Qe[a]&&Qi(t+" effect requires "+a+" plugin.")}),Ta[t]=function(a,c,u){return r(et(a),ot(c||{},i),u)},o&&(Ve.prototype[t]=function(a,c,u){return this.add(Ta[t](a,Et(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,t){U[e]=Rn(t)},parseEase:function(e,t){return arguments.length?Rn(e,t):U},getById:function(e){return Y.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var r=new Ve(e),s,i;for(r.smoothChildTiming=$e(e.smoothChildTiming),Y.remove(r),r._dp=0,r._time=r._tTime=Y._time,s=Y._first;s;)i=s._next,(t||!(!s._dur&&s instanceof de&&s.vars.onComplete===s._targets[0]))&&mt(r,s,s._start-s._delay),s=i;return mt(Y,r,0),r},context:function(e,t){return e?new vg(e,t):ce},matchMedia:function(e){return new Yb(e)},matchMediaRefresh:function(){return wr.forEach(function(e){var t=e.conditions,r,s;for(s in t)t[s]&&(t[s]=!1,r=1);r&&e.revert()})||Ic()},addEventListener:function(e,t){var r=Ti[e]||(Ti[e]=[]);~r.indexOf(t)||r.push(t)},removeEventListener:function(e,t){var r=Ti[e],s=r&&r.indexOf(t);s>=0&&r.splice(s,1)},utils:{wrap:Cb,wrapYoyo:Db,distribute:eg,random:ng,snap:tg,normalize:Ab,getUnit:ke,clamp:Eb,splitColor:ig,toArray:et,selector:vc,mapRange:sg,pipe:Sb,unitize:kb,interpolate:Rb,shuffle:Zm},install:$m,effects:Ta,ticker:He,updateRoot:Ve.updateRoot,plugins:ze,globalTimeline:Y,core:{PropTween:qe,globals:jm,Tween:de,Timeline:Ve,Animation:vr,getCache:Cn,_removeLinkedListItem:Go,reverting:function(){return Re},context:function(e){return e&&ce&&(ce.data.push(e),e._ctx=ce),ce},suppressOverwrites:function(e){return qu=e}}};je("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Zi[n]=de[n]});He.add(Ve.updateRoot);Xn=Zi.to({},{duration:0});var Xb=function(e,t){for(var r=e._pt;r&&r.p!==t&&r.op!==t&&r.fp!==t;)r=r._next;return r},Jb=function(e,t){var r=e._targets,s,i,o;for(s in t)for(i=r.length;i--;)o=e._ptLookup[i][s],o&&(o=o.d)&&(o._pt&&(o=Xb(o,s)),o&&o.modifier&&o.modifier(t[s],e,r[i],s))},ka=function(e,t){return{name:e,rawVars:1,init:function(s,i,o){o._onInit=function(a){var c,u;if(_e(i)&&(c={},je(i,function(l){return c[l]=1}),i=c),t){c={};for(u in i)c[u]=t(i[u]);i=c}Jb(a,i)}}}},Ye=Zi.registerPlugin({name:"attr",init:function(e,t,r,s,i){var o,a,c;this.tween=r;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],s,i,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var r=t._pt;r;)Re?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,t){for(var r=t.length;r--;)this.add(e,r,e[r]||0,t[r],0,0,0,0,0,1)}},ka("roundProps",wc),ka("modifiers"),ka("snap",tg))||Zi;de.version=Ve.version=Ye.version="3.11.4";Bm=1;Pm()&&_r();U.Power0;U.Power1;U.Power2;U.Power3;U.Power4;U.Linear;U.Quad;U.Cubic;U.Quart;U.Quint;U.Strong;U.Elastic;U.Back;U.SteppedEase;U.Bounce;U.Sine;U.Expo;U.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vh,Kt,rr,tl,Sn,Bh,nl,Zb=function(){return typeof window<"u"},Bt={},_n=180/Math.PI,sr=Math.PI/180,Gn=Math.atan2,$h=1e8,rl=/([A-Z])/g,eS=/(left|right|width|margin|padding|x)/i,tS=/[\s,\(]\S/,Dt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ec=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sS=function(e,t){var r=t.s+t.c*e;t.set(t.t,t.p,~~(r+(r<0?-.5:.5))+t.u,t)},wg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Tg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},iS=function(e,t,r){return e.style[t]=r},oS=function(e,t,r){return e.style.setProperty(t,r)},aS=function(e,t,r){return e._gsap[t]=r},cS=function(e,t,r){return e._gsap.scaleX=e._gsap.scaleY=r},uS=function(e,t,r,s,i){var o=e._gsap;o.scaleX=o.scaleY=r,o.renderTransform(i,o)},lS=function(e,t,r,s,i){var o=e._gsap;o[t]=r,o.renderTransform(i,o)},X="transform",lt=X+"Origin",hS=function(e,t){var r=this,s=this.target,i=s.style;if(e in Bt){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Dt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return r.tfm[o]=kt(s,o)}):this.tfm[e]=s._gsap.x?s._gsap[e]:kt(s,e)),this.props.indexOf(X)>=0)return;s._gsap.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(lt,t,"")),e=X}(i||t)&&this.props.push(e,t,i[e])},Ig=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},dS=function(){var e=this.props,t=this.target,r=t.style,s=t._gsap,i,o;for(i=0;i<e.length;i+=3)e[i+1]?t[e[i]]=e[i+2]:e[i+2]?r[e[i]]=e[i+2]:r.removeProperty(e[i].replace(rl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),i=nl(),i&&!i.isStart&&!r[X]&&(Ig(r),s.uncache=1)}},Eg=function(e,t){var r={target:e,props:[],revert:dS,save:hS};return t&&t.split(",").forEach(function(s){return r.save(s)}),r},bg,bc=function(e,t){var r=Kt.createElementNS?Kt.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Kt.createElement(e);return r.style?r:Kt.createElement(e)},yt=function n(e,t,r){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(rl,"-$1").toLowerCase())||s.getPropertyValue(t)||!r&&n(e,Tr(t)||t,1)||""},jh="O,Moz,ms,Ms,Webkit".split(","),Tr=function(e,t,r){var s=t||Sn,i=s.style,o=5;if(e in i&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(jh[o]+e in i););return o<0?null:(o===3?"ms":o>=0?jh[o]:"")+e},Sc=function(){Zb()&&window.document&&(Vh=window,Kt=Vh.document,rr=Kt.documentElement,Sn=bc("div")||{style:{}},bc("div"),X=Tr(X),lt=X+"Origin",Sn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bg=!!Tr("perspective"),nl=Ye.core.reverting,tl=1)},Aa=function n(e){var t=bc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,s=this.nextSibling,i=this.style.cssText,o;if(rr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return r&&(s?r.insertBefore(this,s):r.appendChild(this)),rr.removeChild(t),this.style.cssText=i,o},qh=function(e,t){for(var r=t.length;r--;)if(e.hasAttribute(t[r]))return e.getAttribute(t[r])},Sg=function(e){var t;try{t=e.getBBox()}catch{t=Aa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Aa||(t=Aa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+qh(e,["x","cx","x1"])||0,y:+qh(e,["y","cy","y1"])||0,width:0,height:0}:t},kg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Sg(e))},Is=function(e,t){if(t){var r=e.style;t in Bt&&t!==lt&&(t=X),r.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),r.removeProperty(t.replace(rl,"-$1").toLowerCase())):r.removeAttribute(t)}},Wt=function(e,t,r,s,i,o){var a=new qe(e._pt,t,r,0,1,o?Tg:wg);return e._pt=a,a.b=s,a.e=i,e._props.push(r),a},zh={deg:1,rad:1,turn:1},fS={grid:1,flex:1},sn=function n(e,t,r,s){var i=parseFloat(r)||0,o=(r+"").trim().substr((i+"").length)||"px",a=Sn.style,c=eS.test(t),u=e.tagName.toLowerCase()==="svg",l=(u?"client":"offset")+(c?"Width":"Height"),h=100,d=s==="px",f=s==="%",m,p,g,y;return s===o||!i||zh[s]||zh[o]?i:(o!=="px"&&!d&&(i=n(e,t,r,"px")),y=e.getCTM&&kg(e),(f||o==="%")&&(Bt[t]||~t.indexOf("adius"))?(m=y?e.getBBox()[c?"width":"height"]:e[l],ne(f?i/m*h:i/100*m)):(a[c?"width":"height"]=h+(d?o:s),p=~t.indexOf("adius")||s==="em"&&e.appendChild&&!u?e:e.parentNode,y&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Kt||!p.appendChild)&&(p=Kt.body),g=p._gsap,g&&f&&g.width&&c&&g.time===He.time&&!g.uncache?ne(i/g.width*h):((f||o==="%")&&!fS[yt(p,"display")]&&(a.position=yt(e,"position")),p===e&&(a.position="static"),p.appendChild(Sn),m=Sn[l],p.removeChild(Sn),a.position="absolute",c&&f&&(g=Cn(p),g.time=He.time,g.width=p[l]),ne(d?m*i/h:m&&i?h/m*i:0))))},kt=function(e,t,r,s){var i;return tl||Sc(),t in Dt&&t!=="transform"&&(t=Dt[t],~t.indexOf(",")&&(t=t.split(",")[0])),Bt[t]&&t!=="transform"?(i=bs(e,s),i=t!=="transformOrigin"?i[t]:i.svg?i.origin:to(yt(e,lt))+" "+i.zOrigin+"px"):(i=e.style[t],(!i||i==="auto"||s||~(i+"").indexOf("calc("))&&(i=eo[t]&&eo[t](e,t,r)||yt(e,t)||zm(e,t)||(t==="opacity"?1:0))),r&&!~(i+"").trim().indexOf(" ")?sn(e,t,i,r)+r:i},pS=function(e,t,r,s){if(!r||r==="none"){var i=Tr(t,e,1),o=i&&yt(e,i,1);o&&o!==r?(t=i,r=o):t==="borderColor"&&(r=yt(e,"borderTopColor"))}var a=new qe(this._pt,e.style,t,0,1,yg),c=0,u=0,l,h,d,f,m,p,g,y,_,w,I,T;if(a.b=r,a.e=s,r+="",s+="",s==="auto"&&(e.style[t]=s,s=yt(e,t)||s,e.style[t]=r),l=[r,s],ag(l),r=l[0],s=l[1],d=r.match(Yn)||[],T=s.match(Yn)||[],T.length){for(;h=Yn.exec(s);)g=h[0],_=s.substring(c,h.index),m?m=(m+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(m=1),g!==(p=d[u++]||"")&&(f=parseFloat(p)||0,I=p.substr((f+"").length),g.charAt(1)==="="&&(g=nr(f,g)+I),y=parseFloat(g),w=g.substr((y+"").length),c=Yn.lastIndex-w.length,w||(w=w||Ke.units[t]||I,c===s.length&&(s+=w,a.e+=w)),I!==w&&(f=sn(e,t,p,w)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:f,c:y-f,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=c<s.length?s.substring(c,s.length):""}else a.r=t==="display"&&s==="none"?Tg:wg;return Um.test(s)&&(a.e=0),this._pt=a,a},Hh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mS=function(e){var t=e.split(" "),r=t[0],s=t[1]||"50%";return(r==="top"||r==="bottom"||s==="left"||s==="right")&&(e=r,r=s,s=e),t[0]=Hh[r]||r,t[1]=Hh[s]||s,t.join(" ")},gS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var r=t.t,s=r.style,i=t.u,o=r._gsap,a,c,u;if(i==="all"||i===!0)s.cssText="",c=1;else for(i=i.split(","),u=i.length;--u>-1;)a=i[u],Bt[a]&&(c=1,a=a==="transformOrigin"?lt:X),Is(r,a);c&&(Is(r,X),o&&(o.svg&&r.removeAttribute("transform"),bs(r,1),o.uncache=1,Ig(s)))}},eo={clearProps:function(e,t,r,s,i){if(i.data!=="isFromStart"){var o=e._pt=new qe(e._pt,t,r,0,0,gS);return o.u=s,o.pr=-10,o.tween=i,e._props.push(r),1}}},Es=[1,0,0,1,0,0],Ag={},Cg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Gh=function(e){var t=yt(e,X);return Cg(t)?Es:t.substr(7).match(Fm).map(ne)},sl=function(e,t){var r=e._gsap||Cn(e),s=e.style,i=Gh(e),o,a,c,u;return r.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,i=[c.a,c.b,c.c,c.d,c.e,c.f],i.join(",")==="1,0,0,1,0,0"?Es:i):(i===Es&&!e.offsetParent&&e!==rr&&!r.svg&&(c=s.display,s.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,rr.appendChild(e)),i=Gh(e),c?s.display=c:Is(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):rr.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},kc=function(e,t,r,s,i,o){var a=e._gsap,c=i||sl(e,!0),u=a.xOrigin||0,l=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=c[0],m=c[1],p=c[2],g=c[3],y=c[4],_=c[5],w=t.split(" "),I=parseFloat(w[0])||0,T=parseFloat(w[1])||0,A,k,S,b;r?c!==Es&&(k=f*g-m*p)&&(S=I*(g/k)+T*(-p/k)+(p*_-g*y)/k,b=I*(-m/k)+T*(f/k)-(f*_-m*y)/k,I=S,T=b):(A=Sg(e),I=A.x+(~w[0].indexOf("%")?I/100*A.width:I),T=A.y+(~(w[1]||w[0]).indexOf("%")?T/100*A.height:T)),s||s!==!1&&a.smooth?(y=I-u,_=T-l,a.xOffset=h+(y*f+_*p)-y,a.yOffset=d+(y*m+_*g)-_):a.xOffset=a.yOffset=0,a.xOrigin=I,a.yOrigin=T,a.smooth=!!s,a.origin=t,a.originIsAbsolute=!!r,e.style[lt]="0px 0px",o&&(Wt(o,a,"xOrigin",u,I),Wt(o,a,"yOrigin",l,T),Wt(o,a,"xOffset",h,a.xOffset),Wt(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",I+" "+T)},bs=function(e,t){var r=e._gsap||new hg(e);if("x"in r&&!t&&!r.uncache)return r;var s=e.style,i=r.scaleX<0,o="px",a="deg",c=getComputedStyle(e),u=yt(e,lt)||"0",l,h,d,f,m,p,g,y,_,w,I,T,A,k,S,b,B,j,J,re,se,Q,he,ie,Pe,hn,dn,xr,fn,ml,bt,pn;return l=h=d=p=g=y=_=w=I=0,f=m=1,r.svg=!!(e.getCTM&&kg(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(s[X]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[X]!=="none"?c[X]:"")),s.scale=s.rotate=s.translate="none"),k=sl(e,r.svg),r.svg&&(r.uncache?(Pe=e.getBBox(),u=r.xOrigin-Pe.x+"px "+(r.yOrigin-Pe.y)+"px",ie=""):ie=!t&&e.getAttribute("data-svg-origin"),kc(e,ie||u,!!ie||r.originIsAbsolute,r.smooth!==!1,k)),T=r.xOrigin||0,A=r.yOrigin||0,k!==Es&&(j=k[0],J=k[1],re=k[2],se=k[3],l=Q=k[4],h=he=k[5],k.length===6?(f=Math.sqrt(j*j+J*J),m=Math.sqrt(se*se+re*re),p=j||J?Gn(J,j)*_n:0,_=re||se?Gn(re,se)*_n+p:0,_&&(m*=Math.abs(Math.cos(_*sr))),r.svg&&(l-=T-(T*j+A*re),h-=A-(T*J+A*se))):(pn=k[6],ml=k[7],dn=k[8],xr=k[9],fn=k[10],bt=k[11],l=k[12],h=k[13],d=k[14],S=Gn(pn,fn),g=S*_n,S&&(b=Math.cos(-S),B=Math.sin(-S),ie=Q*b+dn*B,Pe=he*b+xr*B,hn=pn*b+fn*B,dn=Q*-B+dn*b,xr=he*-B+xr*b,fn=pn*-B+fn*b,bt=ml*-B+bt*b,Q=ie,he=Pe,pn=hn),S=Gn(-re,fn),y=S*_n,S&&(b=Math.cos(-S),B=Math.sin(-S),ie=j*b-dn*B,Pe=J*b-xr*B,hn=re*b-fn*B,bt=se*B+bt*b,j=ie,J=Pe,re=hn),S=Gn(J,j),p=S*_n,S&&(b=Math.cos(S),B=Math.sin(S),ie=j*b+J*B,Pe=Q*b+he*B,J=J*b-j*B,he=he*b-Q*B,j=ie,Q=Pe),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,y=180-y),f=ne(Math.sqrt(j*j+J*J+re*re)),m=ne(Math.sqrt(he*he+pn*pn)),S=Gn(Q,he),_=Math.abs(S)>2e-4?S*_n:0,I=bt?1/(bt<0?-bt:bt):0),r.svg&&(ie=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!Cg(yt(e,X)),ie&&e.setAttribute("transform",ie))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=p<=0?180:-180,p+=p<=0?180:-180):(m*=-1,_+=_<=0?180:-180)),t=t||r.uncache,r.x=l-((r.xPercent=l&&(!t&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+o,r.y=h-((r.yPercent=h&&(!t&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+o,r.z=d+o,r.scaleX=ne(f),r.scaleY=ne(m),r.rotation=ne(p)+a,r.rotationX=ne(g)+a,r.rotationY=ne(y)+a,r.skewX=_+a,r.skewY=w+a,r.transformPerspective=I+o,(r.zOrigin=parseFloat(u.split(" ")[2])||0)&&(s[lt]=to(u)),r.xOffset=r.yOffset=0,r.force3D=Ke.force3D,r.renderTransform=r.svg?_S:bg?Dg:yS,r.uncache=0,r},to=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ca=function(e,t,r){var s=ke(t);return ne(parseFloat(t)+parseFloat(sn(e,"x",r+"px",s)))+s},yS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Dg(e,t)},mn="0deg",Nr="0px",gn=") ",Dg=function(e,t){var r=t||this,s=r.xPercent,i=r.yPercent,o=r.x,a=r.y,c=r.z,u=r.rotation,l=r.rotationY,h=r.rotationX,d=r.skewX,f=r.skewY,m=r.scaleX,p=r.scaleY,g=r.transformPerspective,y=r.force3D,_=r.target,w=r.zOrigin,I="",T=y==="auto"&&e&&e!==1||y===!0;if(w&&(h!==mn||l!==mn)){var A=parseFloat(l)*sr,k=Math.sin(A),S=Math.cos(A),b;A=parseFloat(h)*sr,b=Math.cos(A),o=Ca(_,o,k*b*-w),a=Ca(_,a,-Math.sin(A)*-w),c=Ca(_,c,S*b*-w+w)}g!==Nr&&(I+="perspective("+g+gn),(s||i)&&(I+="translate("+s+"%, "+i+"%) "),(T||o!==Nr||a!==Nr||c!==Nr)&&(I+=c!==Nr||T?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+gn),u!==mn&&(I+="rotate("+u+gn),l!==mn&&(I+="rotateY("+l+gn),h!==mn&&(I+="rotateX("+h+gn),(d!==mn||f!==mn)&&(I+="skew("+d+", "+f+gn),(m!==1||p!==1)&&(I+="scale("+m+", "+p+gn),_.style[X]=I||"translate(0, 0)"},_S=function(e,t){var r=t||this,s=r.xPercent,i=r.yPercent,o=r.x,a=r.y,c=r.rotation,u=r.skewX,l=r.skewY,h=r.scaleX,d=r.scaleY,f=r.target,m=r.xOrigin,p=r.yOrigin,g=r.xOffset,y=r.yOffset,_=r.forceCSS,w=parseFloat(o),I=parseFloat(a),T,A,k,S,b;c=parseFloat(c),u=parseFloat(u),l=parseFloat(l),l&&(l=parseFloat(l),u+=l,c+=l),c||u?(c*=sr,u*=sr,T=Math.cos(c)*h,A=Math.sin(c)*h,k=Math.sin(c-u)*-d,S=Math.cos(c-u)*d,u&&(l*=sr,b=Math.tan(u-l),b=Math.sqrt(1+b*b),k*=b,S*=b,l&&(b=Math.tan(l),b=Math.sqrt(1+b*b),T*=b,A*=b)),T=ne(T),A=ne(A),k=ne(k),S=ne(S)):(T=h,S=d,A=k=0),(w&&!~(o+"").indexOf("px")||I&&!~(a+"").indexOf("px"))&&(w=sn(f,"x",o,"px"),I=sn(f,"y",a,"px")),(m||p||g||y)&&(w=ne(w+m-(m*T+p*k)+g),I=ne(I+p-(m*A+p*S)+y)),(s||i)&&(b=f.getBBox(),w=ne(w+s/100*b.width),I=ne(I+i/100*b.height)),b="matrix("+T+","+A+","+k+","+S+","+w+","+I+")",f.setAttribute("transform",b),_&&(f.style[X]=b)},vS=function(e,t,r,s,i){var o=360,a=_e(i),c=parseFloat(i)*(a&&~i.indexOf("rad")?_n:1),u=c-s,l=s+u+"deg",h,d;return a&&(h=i.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*$h)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*$h)%o-~~(u/o)*o)),e._pt=d=new qe(e._pt,t,r,s,u,nS),d.e=l,d.u="deg",e._props.push(r),d},Kh=function(e,t){for(var r in t)e[r]=t[r];return e},wS=function(e,t,r){var s=Kh({},r._gsap),i="perspective,force3D,transformOrigin,svgOrigin",o=r.style,a,c,u,l,h,d,f,m;s.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),o[X]=t,a=bs(r,1),Is(r,X),r.setAttribute("transform",u)):(u=getComputedStyle(r)[X],o[X]=t,a=bs(r,1),o[X]=u);for(c in Bt)u=s[c],l=a[c],u!==l&&i.indexOf(c)<0&&(f=ke(u),m=ke(l),h=f!==m?sn(r,c,u,m):parseFloat(u),d=parseFloat(l),e._pt=new qe(e._pt,a,c,h,d-h,Ec),e._pt.u=m||0,e._props.push(c));Kh(a,s)};je("padding,margin,Width,Radius",function(n,e){var t="Top",r="Right",s="Bottom",i="Left",o=(e<3?[t,r,s,i]:[t+i,t+r,s+r,s+i]).map(function(a){return e<2?n+a:"border"+a+n});eo[e>1?"border"+n:n]=function(a,c,u,l,h){var d,f;if(arguments.length<4)return d=o.map(function(m){return kt(a,m,u)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(l+"").split(" "),f={},o.forEach(function(m,p){return f[m]=d[p]=d[p]||d[(p-1)/2|0]}),a.init(c,f,h)}});var Rg={name:"css",register:Sc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,s,i){var o=this._props,a=e.style,c=r.vars.startAt,u,l,h,d,f,m,p,g,y,_,w,I,T,A,k,S;tl||Sc(),this.styles=this.styles||Eg(e),S=this.styles.props,this.tween=r;for(p in t)if(p!=="autoRound"&&(l=t[p],!(ze[p]&&dg(p,t,r,s,e,i)))){if(f=typeof l,m=eo[p],f==="function"&&(l=l.call(r,s,e,i),f=typeof l),f==="string"&&~l.indexOf("random(")&&(l=ws(l)),m)m(this,e,p,l,r)&&(k=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(p)+"").trim(),l+="",Zt.lastIndex=0,Zt.test(u)||(g=ke(u),y=ke(l)),y?g!==y&&(u=sn(e,p,u,y)+y):g&&(l+=g),this.add(a,"setProperty",u,l,s,i,0,0,p),o.push(p),S.push(p,0,a[p]);else if(f!=="undefined"){if(c&&p in c?(u=typeof c[p]=="function"?c[p].call(r,s,e,i):c[p],_e(u)&&~u.indexOf("random(")&&(u=ws(u)),ke(u+"")||(u+=Ke.units[p]||ke(kt(e,p))||""),(u+"").charAt(1)==="="&&(u=kt(e,p))):u=kt(e,p),d=parseFloat(u),_=f==="string"&&l.charAt(1)==="="&&l.substr(0,2),_&&(l=l.substr(2)),h=parseFloat(l),p in Dt&&(p==="autoAlpha"&&(d===1&&kt(e,"visibility")==="hidden"&&h&&(d=0),S.push("visibility",0,a.visibility),Wt(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Dt[p],~p.indexOf(",")&&(p=p.split(",")[0]))),w=p in Bt,w){if(this.styles.save(p),I||(T=e._gsap,T.renderTransform&&!t.parseTransform||bs(e,t.parseTransform),A=t.smoothOrigin!==!1&&T.smooth,I=this._pt=new qe(this._pt,a,X,0,1,T.renderTransform,T,0,-1),I.dep=1),p==="scale")this._pt=new qe(this._pt,T,"scaleY",T.scaleY,(_?nr(T.scaleY,_+h):h)-T.scaleY||0,Ec),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){S.push(lt,0,a[lt]),l=mS(l),T.svg?kc(e,l,0,A,0,this):(y=parseFloat(l.split(" ")[2])||0,y!==T.zOrigin&&Wt(this,T,"zOrigin",T.zOrigin,y),Wt(this,a,p,to(u),to(l)));continue}else if(p==="svgOrigin"){kc(e,l,1,A,0,this);continue}else if(p in Ag){vS(this,T,p,d,_?nr(d,_+l):l);continue}else if(p==="smoothOrigin"){Wt(this,T,"smooth",T.smooth,l);continue}else if(p==="force3D"){T[p]=l;continue}else if(p==="transform"){wS(this,l,e);continue}}else p in a||(p=Tr(p)||p);if(w||(h||h===0)&&(d||d===0)&&!tS.test(l)&&p in a)g=(u+"").substr((d+"").length),h||(h=0),y=ke(l)||(p in Ke.units?Ke.units[p]:g),g!==y&&(d=sn(e,p,u,y)),this._pt=new qe(this._pt,w?T:a,p,d,(_?nr(d,_+h):h)-d,!w&&(y==="px"||p==="zIndex")&&t.autoRound!==!1?sS:Ec),this._pt.u=y||0,g!==y&&y!=="%"&&(this._pt.b=u,this._pt.r=rS);else if(p in a)pS.call(this,e,p,u,_?_+l:l);else if(p in e)this.add(e,p,u||e[p],_?_+l:l,s,i);else if(p!=="parseTransform"){Gu(p,l);continue}w||(p in a?S.push(p,0,a[p]):S.push(p,1,u||e[p])),o.push(p)}}k&&_g(this)},render:function(e,t){if(t.tween._time||!nl())for(var r=t._pt;r;)r.r(e,r.d),r=r._next;else t.styles.revert()},get:kt,aliases:Dt,getSetter:function(e,t,r){var s=Dt[t];return s&&s.indexOf(",")<0&&(t=s),t in Bt&&t!==lt&&(e._gsap.x||kt(e,"x"))?r&&Bh===r?t==="scale"?cS:aS:(Bh=r||{})&&(t==="scale"?uS:lS):e.style&&!zu(e.style[t])?iS:~t.indexOf("-")?oS:Zu(e,t)},core:{_removeProperty:Is,_getMatrix:sl}};Ye.utils.checkPrefix=Tr;Ye.core.getStyleSaver=Eg;(function(n,e,t,r){var s=je(n+","+e+","+t,function(i){Bt[i]=1});je(e,function(i){Ke.units[i]="deg",Ag[i]=1}),Dt[s[13]]=n+","+e,je(r,function(i){var o=i.split(":");Dt[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");je("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ke.units[n]="px"});Ye.registerPlugin(Rg);var xg=Ye.registerPlugin(Rg)||Ye;xg.core.Tween;const TS=()=>{let n=xg.timeline();n.to(va,{duration:.25,width:"100%",left:"0%",delay:.1,stagger:.05}),n.to(va,{duration:.25,width:"100%",left:"100%",delay:.1,stagger:-.05}),n.set(va,{left:"0",width:"0"})},Ne=(n,e)=>{e?Wh(n):(TS(),setTimeout(()=>{Wh(n)},650))},Wh=n=>{n.classList.add("page--active"),TE.forEach(e=>{e!==n&&e.classList.remove("page--active")})},Cr=n=>{n.classList.add("overlay--active")},Qo=()=>{OE.forEach(n=>{n.classList.remove("overlay--active")})},IS=n=>{gs.innerHTML="",ys.innerHTML="",_s.innerHTML="",n.forEach(e=>{const t=e.data();t.progressLabel==="To do"?Da(e.id,t,gs):t.progressLabel=="In progress"?Da(e.id,t,ys):Da(e.id,t,_s)}),Ng()},ES=n=>{n.forEach(e=>{const t=e.data();bS(e.id,t)})},bS=(n,e)=>{const t=document.createElement("li");t.classList.add("dashboard__task"),t.innerHTML=`
        <h4 class="mb-xs text-lg">${e.taskname}</h4>
        <p class="text-sm text-subtle mb-lg">${e.description}</p>
        <div class="dashboard__task-info">
            <div class="dashboard__task-infopiece">
                <img src="/icons/pencil.svg" alt="pencil icon" />
                <span class="text-orange">${e.notesCount}</span>
            </div>
            <div class="dashboard__task-infopiece">
                <img src="/icons/timer.svg" alt="pencil icon" />
                <span class="text-orange">${e.timeEstimate}</span>
            </div>
        </div>
        <div class="text-sm dashboard__task-progress dashboard__task-progress--${Og(e.progressLabel)}">${e.progressLabel}</div>
    `,t.addEventListener("click",async()=>{const r=await Pg(n);sessionStorage.setItem("currentTaskId",n),sessionStorage.setItem("currentTaskData",JSON.stringify(e)),Lg(r),Mg(n),Ne(Vu)}),Rm.appendChild(t)},Da=(n,e,t)=>{const r=document.createElement("li");r.classList.add("project__task"),r.setAttribute("draggable","true"),r.setAttribute("data-id",n),r.innerHTML=`
        <p class="bold">${e.taskname}</p>
        <div class="project__task-progress project__task-progress--${Og(e.progressLabel)}">${e.progressLabel}</div>
    `,r.addEventListener("click",async()=>{const s=await Pg(n);sessionStorage.setItem("currentTaskId",n),sessionStorage.setItem("currentTaskData",JSON.stringify(e)),Lg(s),Mg(n),Ne(Vu)}),r.addEventListener("dragstart",()=>{r.classList.add("project__task--dragging")}),r.addEventListener("dragend",()=>{r.classList.remove("project__task--dragging")}),t.appendChild(r)},Lg=n=>{JE.innerHTML=`
        <h3 class="text-xl mb-md">${n.taskname}</h3>
        <h4 class="mb-sm">Description</h4>
        <p class="text-subtle mb-md text-sm">${n.description}</p>
        <h4 class="mb-sm">Task Progress</h4>
        <div class="task__progress">
            <div class="task__progress-option ${n.progressLabel==="To do"?"task__progress-option--selected":""}">To do</div>
            <div class="task__progress-option ${n.progressLabel==="In progress"?"task__progress-option--selected":""}">In progress</div>
            <div class="task__progress-option ${n.progressLabel==="Completed"?"task__progress-option--selected":""}">Complete</div>
        </div>
    `},Og=n=>n.split(" ").join("-").toLocaleLowerCase(),Ng=()=>{gs.innerHTML===""&&Ra("Todo",gs),ys.innerHTML===""&&Ra("In Progress",ys),_s.innerHTML===""&&Ra("Completed",_s)},Ra=(n,e)=>{const t=document.createElement("div");t.classList.add("project__tasks-list-placeholder"),t.innerHTML=`
        <span class="text-white bold">Add ${n}</span>
        <img src="/icons/plus-blue.svg" alt="plus icon" />
    `,t.addEventListener("click",()=>{Cr(Bu)}),e.appendChild(t)};[gs,ys,_s].forEach(n=>{n.addEventListener("dragover",e=>{e.preventDefault();const t=document.querySelector(".project__task--dragging");n.appendChild(t),Ng()})});const SS=async n=>{await Ys(ct(le,"tasks"),n)},kS=async n=>{await cc(Ft(le,"tasks",n))},Yo=async(n,e,t)=>{const r=ct(le,"tasks"),s=Ws(r,Qs("projectId","==",n));Xs(s,i=>{e&&t==="small"&&IS(i),e&&t==="normal"&&ES(i)})},Pg=async n=>(await Mu(Ft(le,"tasks",n))).data(),AS=async(n,e)=>{await Ys(ct(le,`tasks/${n}/notes`),e)},Mg=async n=>{const e=ct(le,`tasks/${n}/notes`);Xs(e,t=>{xm.innerHTML="",t.forEach(r=>{ob(r.id,r.data())})})},CS=async n=>{n.preventDefault();let e=ju.innerHTML,t=sessionStorage.getItem("currentTaskId");ut(e)?(AS(t,{content:e}),It.value="",DS(),setTimeout(()=>{Qo()},800)):console.log("error empty field detected")},DS=()=>{Ch.classList.add("form__succes--active"),setTimeout(()=>{Ch.classList.remove("form__succes--active")},1e3)},RS=async n=>{await yE(Ft(le,"users",n.userId),{username:n.username,createdAt:n.createdAt})},Fg=async n=>(await Mu(Ft(le,"users",n))).data(),xS=async n=>{const e=ct(le,"users"),t=Ws(e,Qs("username","==",n),fE(1)),r=await Im(t);return r.empty?!1:r.docs[0].id},Ug=n=>{let e=n.toDate(),t=e.getDate().toString().padStart(2,"0"),r=(e.getMonth()+1).toString().padStart(2,"0");return`${t}/${r}`},Qh=(n,e,t)=>{const r=new Date(t,e-1,n);return ee.fromDate(r)},LS=n=>{let e=n.toDate(),t=e.getDate().toString().padStart(2,"0"),r=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getFullYear().toString();return[t,r,s]},OS=(n,e)=>{let t=document.createElement("li");t.classList.add("projects__project"),t.setAttribute("data-id",n),t.innerHTML=`
        <div class="projects__project-header mb-xs">
            <h3 class="text-xl">${e.title}</h3>
            <div class="projects__project-deadline">
                <img src="/icons/calendar.svg" alt="calender icon" />
                <span class="text-orange bold">${Ug(e.deadline)}</span>
            </div>
        </div>

        <p class="text-sm text-subtle mb-md">
            ${e.description} <br />
            <span class="bold text-blue"> read more </span>
        </p>

        <h4 class="mb-xs">Project members</h4>
        <div class="projects__members-info mb-xs">
            <ul class="projects__members-list">
                ${$g(e.members,"small")}
            </ul>
            <span>${e.members.length>4?`${e.members.length-4}+`:""}</span>
        </div>

        <div class="projects__progress-info mb-sm">
            <div class="projects__progress-header mb-xs">
                <h4 class="regular">Project progression</h4>
                <span id="completion-percentage" class="bold">${Yh(e.taskOverview)}%</span>
            </div>
            <div class="projects__progress-bar">
                <span style="width: ${Yh(e.taskOverview)}%" class="projects__progress-bar-value"></span>
            </div>
        </div>

        <div class="projects__task-overview">
            <span class="projects__task projects__task--todo">${e.taskOverview[0]}</span>
            <span class="projects__task projects__task--in-progress">${e.taskOverview[1]}</span>
            <span class="projects__task projects__task--completed">${e.taskOverview[2]}</span>
        </div>
    `,t.addEventListener("click",async()=>{const r=await qg(n);sessionStorage.setItem("currentProjectId",n),sessionStorage.setItem("currentProjectData",JSON.stringify(e)),Vg(r),Yo(n,!0,"small"),Lm(n),Ne(zo)}),tr.appendChild(t)},Vg=n=>{Dh.innerHTML=`
        <div class="project__general-header mb-md">
            <h3 class="text-xl">${n.title}</h3>
            <div class="project__deadline">
                <img src="/icons/calendar.svg" alt="calendar icon" />
                <span class="text-orange bold">${Ug(n.deadline)}</span>
            </div>
        </div>

        <h4 class="mb-xs">Description</h4>
        <p class="text-sm text-subtle mb-md">${n.description}</p>

        <h4 class="mb-xs">Members</h4>
        <div class="project__members-info">
            <ul id="project-members-list" class="project__members-list">
                ${$g(n.members,"large")}
                <li class="project__add-member">
                    <img src="/icons/plus.svg" alt="plus icon" />
                </li>
            </ul>
            <span>${n.members.length>4?`${n.members.length-4}+`:""}</span>
        </div>
    `,Dh.querySelector("#project-members-list").addEventListener("click",()=>{Bg(sessionStorage.getItem("currentProjectData")),Cr(Ho)})},Bg=async n=>{n=JSON.parse(n);const e=n.members.map(async s=>(await Fg(s)).username),t=await Promise.all(e);$u.innerHTML="",t.forEach(s=>{zg(s)}),Me.projectName.value=n.title,Me.description.value=n.description;const r=LS(new ee(n.deadline.seconds,n.deadline.nanoseconds));Me.day.value=r[0],Me.month.value=r[1],Me.year.value=r[2],Me.setAttribute("data-update","true")},$g=(n,e)=>{let t=[];return n.forEach(()=>{t.push(`<li class="project${e=="small"?"s":""}__member"></li>`)}),t.join("")},Yh=n=>n.every(e=>e==0)?0:Math.floor(n[2]/n.reduce((e,t)=>e+t)*100),jg=()=>{const n=document.createElement("div");if(n.classList.add("projects__empty-list-placeholder","center"),n.innerHTML=`
        <p class="mb-xxs bold text-lg">0 Results</p>
        <p class="text-subtle text-sm">Seems that you haven't completed any projects yet</p>
    `,Array.from(tr.children).every(r=>r.classList.contains("projects__project--hidden")))tr.appendChild(n);else{const r=document.querySelector(".projects__empty-list-placeholder");r&&tr.removeChild(r)}},NS=async n=>{await Ys(ct(le,"projects"),n)},PS=async(n,e)=>{await _E(Ft(le,"projects",n),e)},MS=async n=>{await cc(Ft(le,"projects",n));const e=ct(le,"tasks"),t=Ws(e,Qs("projectId","==",n));(await Im(t)).forEach(async s=>{await cc(Ft(le,"tasks",s.id))})},Ss=async(n,e)=>{const t=ct(le,"projects"),r=Ws(t,Qs("members","array-contains",n));Xs(r,s=>{e||(Rm.innerHTML="",s.forEach(i=>{Yo(i.id,!0,"normal")})),e&&(tr.innerHTML="",s.forEach(i=>{OS(i.id,i.data())}),jg())})},qg=async n=>(await Mu(Ft(le,"projects",n))).data(),FS=n=>{const e=Array.from(document.querySelectorAll(`input[name="${n}"]`));return Array.from(e.map(t=>t.value))},US=async n=>{n.preventDefault();let e=[],t=Me.projectName.value,r=Me.description.value,s=FS("collaborators[]"),i=Me.day.value,o=Me.month.value,a=Me.year.value;const c=s.map(async l=>await xS(l));if((await Promise.all(c)).forEach((l,h)=>{l!==!1?s[h]=l:e.push("One or more invalid collaborators")}),ut(t)||e.push("A title for your project is required"),e.length===0)try{jr.innerHTML="",jr.classList.remove("form__errors--active"),Me.getAttribute("data-update")==="true"?PS(sessionStorage.getItem("currentProjectId"),{title:t,deadline:Qh(i,o,a),description:r,members:s}):NS({title:t,deadline:Qh(i,o,a),description:r,members:s,taskOverview:[0,0,0]}),Me.setAttribute("data-update","false"),Me.reset(),VS(),setTimeout(()=>{Qo(),Ss(sessionStorage.getItem("userId"),!0),Ne(Ar)},800)}catch{Xh(jr,e)}else Xh(jr,e)},zg=n=>{const e=document.createElement("li");e.classList.add("new-project__collaborator"),e.innerHTML=`
        <div class="new-project__collaborator-icon"></div>
        <input type="text" class="form__input" placeholder="Collaborator name" name="collaborators[]" value="${n||""}"/>
        <button class="icon-btn icon-btn--secondary icon-btn--close">
            <img src="/icons/plus.svg" alt="close icon" />
        </button>
    `,$u.appendChild(e),Array.from(document.querySelectorAll(".new-project__collaborator button")).forEach(t=>{t.addEventListener("click",()=>{var r;(r=t.parentElement)==null||r.remove()})})},VS=()=>{kh.classList.add("form__succes--active"),setTimeout(()=>{kh.classList.remove("form__succes--active")},1e3)},Xh=(n,e)=>{n.innerHTML="",e.forEach(t=>{let r=document.createElement("span");r.classList.add("error","text-sm"),r.innerText=t,n.appendChild(r)}),jr.classList.add("form__errors--active")},BS=async n=>{n.preventDefault();let e=[],t=vn.taskName.value,r=vn.description.value,s=vn.progress.value,i=vn.estimate.value;if(ut(t)||e.push("A name for this task is required"),ut(i)||(i="No estimate"),e.length===0)try{qr.innerHTML="",qr.classList.remove("form__errors--active"),SS({projectId:sessionStorage.getItem("currentProjectId"),taskname:t,description:r,progressLabel:s,notesCount:0,timeEstimate:i}),vn.reset(),qS(),setTimeout(()=>{Qo()},800)}catch{Jh(qr,e)}else Jh(qr,e)},Hg=()=>{VE.classList.toggle("form__dropdown-list--active"),Ki.classList.toggle("form__dropdown-selected--active")},$S=n=>{let e=Ki.children[1],t=Ki.children[0];Am.forEach(r=>{r.classList.remove("form__dropdown-option--selected")}),n.classList.add("form__dropdown-option--selected"),e.innerText=n.innerText,t.value=n.innerText,Hg()},jS=n=>{Cm.forEach(e=>{e.classList.remove("new-task__chip--selected")}),vn.estimate.value=n.innerText,n.classList.add("new-task__chip--selected")},qS=()=>{Ah.classList.add("form__succes--active"),setTimeout(()=>{Ah.classList.remove("form__succes--active")},1e3)},Jh=(n,e)=>{n.innerHTML="",console.log("here"),e.forEach(t=>{let r=document.createElement("span");r.classList.add("error","text-sm"),r.innerText=t,n.appendChild(r)}),qr.classList.add("form__errors--active")},Xo=n=>{n=="completed"?(hc.classList.add("projects__filter-option--active"),lc.classList.remove("projects__filter-option--active"),Zh("completed")):n=="in progress"&&(lc.classList.add("projects__filter-option--active"),hc.classList.remove("projects__filter-option--active"),Zh("in progress")),jg()},Zh=n=>{const e=Array.from(tr.children);e&&e.forEach(t=>{const r=t.querySelector("#completion-percentage");r&&(n==="completed"?r.innerText==="100%"?t.classList.remove("projects__project--hidden"):t.classList.add("projects__project--hidden"):n==="in progress"&&(r.innerText!=="100%"?t.classList.remove("projects__project--hidden"):t.classList.add("projects__project--hidden")))})};function il(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Gg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zS=Gg,Kg=new Bn("auth","Firebase",Gg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new ao("@firebase/auth");function Ii(n,...e){ed.logLevel<=$.ERROR&&ed.error(`Auth (${Rs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n,...e){throw ol(n,...e)}function _t(n,...e){return ol(n,...e)}function Wg(n,e,t){const r=Object.assign(Object.assign({},zS()),{[e]:t});return new Bn("auth","Firebase",r).create(e,{appName:n.name})}function HS(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&at(n,"argument-error"),Wg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ol(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kg.create(n,...e)}function L(n,e,...t){if(!n)throw ol(e,...t)}function Rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ii(e),new Error(e)}function $t(n,e){n||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Map;function xt(n){$t(n instanceof Function,"Expected a class definition");let e=td.get(n);return e?($t(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,td.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(n,e){const t=$n(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(rs(i,e??{}))return s;at(s,"already-initialized")}return t.initialize({options:e})}function KS(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(xt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function WS(){return nd()==="http:"||nd()==="https:"}function nd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WS()||Id()||"connection"in navigator)?navigator.onLine:!0}function YS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t){this.shortDelay=e,this.longDelay=t,$t(t>e,"Short delay should be less than long delay!"),this.isMobile=Cy()||Dy()}get(){return QS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n,e){$t(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new Zs(3e4,6e4);function ei(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ti(n,e,t,r,s={}){return Yg(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ds(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Qg.fetch()(Xg(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Yg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},XS),e);try{const s=new ZS(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw fi(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wg(n,l,u);at(n,l)}}catch(s){if(s instanceof ft)throw s;at(n,"network-request-failed")}}async function ni(n,e,t,r,s={}){const i=await ti(n,e,t,r,s);return"mfaPendingCredential"in i&&at(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Xg(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?al(n.config,s):`${n.config.apiScheme}://${s}`}class ZS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),JS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=_t(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(n,e){return ti(n,"POST","/v1/accounts:delete",e)}async function tk(n,e){return ti(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nk(n,e=!1){const t=pe(n),r=await t.getIdToken(e),s=cl(r);L(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ns(xa(s.auth_time)),issuedAtTime:ns(xa(s.iat)),expirationTime:ns(xa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xa(n){return Number(n)*1e3}function cl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ii("JWT malformed, contained fewer than 3 sections"),null;try{const s=Td(t);return s?JSON.parse(s):(Ii("Failed to decode base64 JWT payload"),null)}catch(s){return Ii("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rk(n){const e=cl(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ft&&sk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function sk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ns(this.lastLoginAt),this.creationTime=ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ks(n,tk(t,{idToken:r}));L(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ck(i.providerUserInfo):[],a=ak(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Jg(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function ok(n){const e=pe(n);await no(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ak(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ck(n){return n.map(e=>{var{providerId:t}=e,r=il(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(n,e){const t=await Yg(n,{},async()=>{const r=Ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Xg(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await uk(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new As;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=il(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ik(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ks(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nk(this,e)}reload(){return ok(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await no(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ks(this,ek(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,p=(a=t.tenantId)!==null&&a!==void 0?a:void 0,g=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,y=(u=t.createdAt)!==null&&u!==void 0?u:void 0,_=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:w,emailVerified:I,isAnonymous:T,providerData:A,stsTokenManager:k}=t;L(w&&k,e,"internal-error");const S=As.fromJSON(this.name,k);L(typeof w=="string",e,"internal-error"),jt(h,e.name),jt(d,e.name),L(typeof I=="boolean",e,"internal-error"),L(typeof T=="boolean",e,"internal-error"),jt(f,e.name),jt(m,e.name),jt(p,e.name),jt(g,e.name),jt(y,e.name),jt(_,e.name);const b=new xn({uid:w,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:T,photoURL:m,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:y,lastLoginAt:_});return A&&Array.isArray(A)&&(b.providerData=A.map(B=>Object.assign({},B))),g&&(b._redirectEventId=g),b}static async _fromIdTokenResponse(e,t,r=!1){const s=new As;s.updateFromServerResponse(t);const i=new xn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await no(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zg.type="NONE";const rd=Zg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n,e,t){return`firebase:${n}:${e}:${t}`}class ir{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ei(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ei("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ir(xt(rd),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||xt(rd);const o=Ei(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=xn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ir(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ir(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ny(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ey(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sy(e))return"Blackberry";if(iy(e))return"Webos";if(ul(e))return"Safari";if((e.includes("chrome/")||ty(e))&&!e.includes("edge/"))return"Chrome";if(ry(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ey(n=Le()){return/firefox\//i.test(n)}function ul(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ty(n=Le()){return/crios\//i.test(n)}function ny(n=Le()){return/iemobile/i.test(n)}function ry(n=Le()){return/android/i.test(n)}function sy(n=Le()){return/blackberry/i.test(n)}function iy(n=Le()){return/webos/i.test(n)}function Jo(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function lk(n=Le()){var e;return Jo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hk(){return Ry()&&document.documentMode===10}function oy(n=Le()){return Jo(n)||ry(n)||iy(n)||sy(n)||/windows phone/i.test(n)||ny(n)}function dk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n,e=[]){let t;switch(n){case"Browser":t=sd(Le());break;case"Worker":t=`${sd(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new id(this),this.idTokenSubscription=new id(this),this.beforeStateQueue=new fk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ir.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await no(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?pe(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xt(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await ir.create(this,[xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ay(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function Dr(n){return pe(n)}class id{constructor(e){this.auth=e,this.observer=null,this.addObserver=zy(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function mk(n,e,t){const r=Dr(n);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=cy(e),{host:o,port:a}=gk(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||yk()}function cy(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function gk(n){const e=cy(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:od(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:od(o)}}}function od(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function yk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function _k(n,e){return ti(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk(n,e){return ni(n,"POST","/v1/accounts:signInWithPassword",ei(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(n,e){return ni(n,"POST","/v1/accounts:signInWithEmailLink",ei(n,e))}async function Tk(n,e){return ni(n,"POST","/v1/accounts:signInWithEmailLink",ei(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends ll{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Cs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Cs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return vk(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wk(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return _k(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tk(e,{idToken:t,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(n,e){return ni(n,"POST","/v1/accounts:signInWithIdp",ei(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="http://localhost";class Un extends ll{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):at("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=il(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Un(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return or(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,or(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,or(e,t)}buildRequest(){const e={requestUri:Ik,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ds(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bk(n){const e=Pr(Mr(n)).link,t=e?Pr(Mr(e)).deep_link_id:null,r=Pr(Mr(n)).deep_link_id;return(r?Pr(Mr(r)).link:null)||r||t||e||n}class hl{constructor(e){var t,r,s,i,o,a;const c=Pr(Mr(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Ek((s=c.mode)!==null&&s!==void 0?s:null);L(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=bk(e);try{return new hl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.providerId=Rr.PROVIDER_ID}static credential(e,t){return Cs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=hl.parseLink(t);return L(r,"argument-error"),Cs._fromEmailAndCode(e,r.code,r.tenantId)}}Rr.PROVIDER_ID="password";Rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends dl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ri{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Un._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return At.credential(t,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends ri{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.GITHUB_SIGN_IN_METHOD="github.com";zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends ri{constructor(){super("twitter.com")}static credential(e,t){return Un._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ht.credential(t,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(n,e){return ni(n,"POST","/v1/accounts:signUp",ei(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await xn._fromIdTokenResponse(e,r,s),o=ad(r);return new Vn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ad(r);return new Vn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ad(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends ft{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ro.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ro(e,t,r,s)}}function uy(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ro._fromErrorAndOperation(n,i,e,r):i})}async function kk(n,e,t=!1){const r=await ks(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await ks(n,uy(r,s,e,n),t);L(i.idToken,r,"internal-error");const o=cl(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(n.uid===a,r,"user-mismatch"),Vn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&at(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(n,e,t=!1){const r="signIn",s=await uy(n,r,e),i=await Vn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Ck(n,e){return ly(Dr(n),e)}async function Dk(n,e,t){const r=Dr(n),s=await Sk(r,{returnSecureToken:!0,email:e,password:t}),i=await Vn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Rk(n,e,t){return Ck(pe(n),Rr.credential(e,t))}function xk(n,e,t,r){return pe(n).onIdTokenChanged(e,t,r)}function Lk(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}const so="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(so,"1"),this.storage.removeItem(so),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(){const n=Le();return ul(n)||Jo(n)}const Nk=1e3,Pk=10;class dy extends hy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ok()&&dk(),this.fallbackToPolling=oy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Pk):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dy.type="LOCAL";const Mk=dy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends hy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fy.type="SESSION";const py=fy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Zo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await Fk(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=fl("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function Vk(n){vt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function Bk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $k(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jk(){return my()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="firebaseLocalStorageDb",qk=1,io="firebaseLocalStorage",yy="fbase_key";class si{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ea(n,e){return n.transaction([io],e?"readwrite":"readonly").objectStore(io)}function zk(){const n=indexedDB.deleteDatabase(gy);return new si(n).toPromise()}function Cc(){const n=indexedDB.open(gy,qk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(io,{keyPath:yy})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(io)?e(r):(r.close(),await zk(),e(await Cc()))})})}async function cd(n,e,t){const r=ea(n,!0).put({[yy]:e,value:t});return new si(r).toPromise()}async function Hk(n,e){const t=ea(n,!1).get(e),r=await new si(t).toPromise();return r===void 0?null:r.value}function ud(n,e){const t=ea(n,!0).delete(e);return new si(t).toPromise()}const Gk=800,Kk=3;class _y{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Kk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return my()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zo._getInstance(jk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bk(),!this.activeServiceWorker)return;this.sender=new Uk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$k()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cc();return await cd(e,so,"1"),await ud(e,so),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Hk(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ud(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ea(s,!1).getAll();return new si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_y.type="LOCAL";const Wk=_y;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Yk(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=_t("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Qk().appendChild(r)})}function Xk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Zs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(n,e){return e?xt(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends ll{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return or(e,this._buildIdpRequest())}_linkToIdToken(e,t){return or(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return or(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Jk(n){return ly(n.auth,new pl(n),n.bypassAuthState)}function Zk(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Ak(t,new pl(n),n.bypassAuthState)}async function eA(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),kk(t,new pl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jk;case"linkViaPopup":case"linkViaRedirect":return eA;case"reauthViaPopup":case"reauthViaRedirect":return Zk;default:at(this.auth,"internal-error")}}resolve(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=new Zs(2e3,1e4);class Jn extends wy{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){$t(this.filter.length===1,"Popup operations only handle one event");const e=fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tA.get())};e()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="pendingRedirect",bi=new Map;class rA extends wy{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=bi.get(this.auth._key());if(!e){try{const r=await sA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}bi.set(this.auth._key(),e)}return this.bypassAuthState||bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sA(n,e){const t=Iy(e),r=Ty(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function iA(n,e){return Ty(n)._set(Iy(e),"true")}function oA(n,e){bi.set(n._key(),e)}function Ty(n){return xt(n._redirectPersistence)}function Iy(n){return Ei(nA,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(n,e,t){return cA(n,e,t)}async function cA(n,e,t){const r=Dr(n);HS(n,e,dl);const s=vy(r,t);return await iA(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function uA(n,e,t=!1){const r=Dr(n),s=vy(r,e),o=await new rA(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=10*60*1e3;class hA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ey(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(_t(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ld(e))}saveEventToCache(e){this.cachedEventUids.add(ld(e)),this.lastProcessedEventTime=Date.now()}}function ld(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ey({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ey(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(n,e={}){return ti(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mA=/^https?/;async function gA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fA(n);for(const t of e)try{if(yA(t))return}catch{}at(n,"unauthorized-domain")}function yA(n){const e=Ac(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!mA.test(t))return!1;if(pA.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new Zs(3e4,6e4);function hd(){const n=vt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function vA(n){return new Promise((e,t)=>{var r,s,i;function o(){hd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hd(),t(_t(n,"network-request-failed"))},timeout:_A.get()})}if(!((s=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=vt().gapi)===null||i===void 0)&&i.load)o();else{const a=Xk("iframefcb");return vt()[a]=()=>{gapi.load?o():t(_t(n,"network-request-failed"))},Yk(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Si=null,e})}let Si=null;function wA(n){return Si=Si||vA(n),Si}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=new Zs(5e3,15e3),IA="__/auth/iframe",EA="emulator/auth/iframe",bA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kA(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?al(e,EA):`https://${n.config.authDomain}/${IA}`,r={apiKey:e.apiKey,appName:n.name,v:Rs},s=SA.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ds(r).slice(1)}`}async function AA(n){const e=await wA(n),t=vt().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:kA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_t(n,"network-request-failed"),a=vt().setTimeout(()=>{i(o)},TA.get());function c(){vt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DA=500,RA=600,xA="_blank",LA="http://localhost";class dd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OA(n,e,t,r=DA,s=RA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},CA),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Le().toLowerCase();t&&(a=ty(u)?xA:t),ey(u)&&(e=e||LA,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(lk(u)&&a!=="_self")return NA(e||"",a),new dd(null);const h=window.open(e||"",a,l);L(h,n,"popup-blocked");try{h.focus()}catch{}return new dd(h)}function NA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="__/auth/handler",MA="emulator/auth/handler";function fd(n,e,t,r,s,i){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Rs,eventId:s};if(e instanceof dl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",qy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof ri){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${FA(n)}?${Ds(a).slice(1)}`}function FA({config:n}){return n.emulator?al(n,MA):`https://${n.authDomain}/${PA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="webStorageSupport";class UA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=py,this._completeRedirectFn=uA,this._overrideRedirectResult=oA}async _openPopup(e,t,r,s){var i;$t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=fd(e,t,r,Ac(),s);return OA(e,o,fl())}async _openRedirect(e,t,r,s){return await this._originValidation(e),Vk(fd(e,t,r,Ac(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):($t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await AA(e),r=new hA(e);return t.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(La,{type:La},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[La];o!==void 0&&t(!!o),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return oy()||ul()||Jo()}}const VA=UA;var pd="@firebase/auth",md="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jA(n){wt(new ht("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{L(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ay(n)},l=new pk(a,c,u);return KS(l,t),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),wt(new ht("auth-internal",e=>{const t=Dr(e.getProvider("auth").getImmediate());return(r=>new BA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(pd,md,$A(n)),nt(pd,md,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=5*60,zA=kd("authIdTokenMaxAge")||qA;let gd=null;const HA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>zA)return;const s=t==null?void 0:t.token;gd!==s&&(gd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GA(n=xc()){const e=$n(n,"auth");if(e.isInitialized())return e.getImmediate();const t=GS(n,{popupRedirectResolver:VA,persistence:[Wk,Mk,py]}),r=kd("authTokenSyncURL");if(r){const i=HA(r);Lk(t,i,()=>i(t.currentUser)),xk(t,o=>i(o))}const s=Sd("auth");return s&&mk(t,`http://${s}`),t}jA("Browser");const ii=GA();ii.onAuthStateChanged(async n=>{if(n){sessionStorage.setItem("userId",n.uid);const e=await Fg(n.uid);sessionStorage.setItem("username",e.username),IE.innerText=`Hi, ${e.username}!`,Ne(Uu),Ss(sessionStorage.getItem("userId"),!1),Ss(sessionStorage.getItem("userId"),!0)}else sessionStorage.removeItem("userId"),Ne(qo)});const KA=async n=>{n.preventDefault();let e=[],t=$r.username.value,r=$r.email.value,s=$r.password.value;if(ut(t)?xh(8,t)||e.push("Username must be longer than 8 characters"):e.push("Username can't be empty"),ut(r)?nb(r)||e.push("Email is not a valid format"):e.push("Email can't be empty"),ut(s)?xh(6,s)||e.push("Password must be longer than 6 characters"):e.push("Password can't be empty"),e.length===0)try{bn.innerHTML="",bn.classList.remove("form__errors--active");let i=await Dk(ii,r,s);i&&(RS({userId:i.user.uid,username:t,createdAt:ee.now()}),$r.reset())}catch{e.push("An account with this email already exists"),oo(bn,e)}else oo(bn,e)},WA=async n=>{n.preventDefault();let e=[],t=_i.email.value,r=_i.password.value;if(ut(t)||e.push("Email can't be empty"),ut(r)||e.push("Password can't be empty"),e.length===0)try{Jr.innerHTML="",Jr.classList.remove("form__errors--active"),await Rk(ii,t,r)&&_i.reset()}catch{e.push("Wrong email and password combination"),oo(Jr,e)}else oo(bn,e)},QA=async()=>{const n=new At;await aA(ii,n)},YA=()=>{ii.signOut()},oo=(n,e)=>{n.innerHTML="",e.forEach(t=>{let r=document.createElement("span");r.classList.add("error","text-sm"),r.innerText=t,n.appendChild(r)}),n.id=="login-form-errors"?(Jr.classList.add("form__errors--active"),bn.classList.remove("form__errors--active")):(bn.classList.add("form__errors--active"),Jr.classList.remove("form__errors--active"))},XA=`
# Title
## Subheading
this is some **random** text.

* list item
* another list item
* last item

more text

* apples
* bananas

* desktop
* keyboard
* mouse

1 Bram
2 Sander
3 Jasper

'''javascript
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        displayHeader(false);
    } else {
        displayHeader(true);
    }
    lastScrollTop = scrollTop;
});
'''
`,by=n=>n.replace(/^# (.*)/gm,'<h4 class="md__heading mb-xs">$1</h4>').replace(/^## (.*)/gm,'<h5 class="md__subheading mb-xs">$1</h5>').replace(/\*\*(.*)\*\*/gim,'<b class="bold">$1</b>').replace(/[\']{3}(.*)([^\`]+)[\']{3}/g,'<pre><code class="$1">$2</code></pre>').replace(/^[0-9] (.*)/gm,'<li class="md__ol-item">$1</li>').replace(/(<li class="md__ol-item">.*<\/li>\n?)+/g,`<ol class="md__ol">
$&</ol>
`).replace(/^\* (.*)/gm,'<li class="md__ul-item">$1</li>').replace(/(<li class="md__ul-item">.*<\/li>\n?)+/g,`<ul class="md__ul">
$&</ul>
`).trim(),Sy=n=>{ju.innerHTML=by(n)},JA=()=>{Sy(It.value),It.classList.toggle("new-note__markdown-content--active"),ju.classList.toggle("new-note__markdown-preview--active")},ZA=()=>{It.value+=`# Title
`},eC=()=>{It.value+=`## Subtitle
`},tC=()=>{It.value+=`* list item
* list item
* list item
`},nC=()=>{It.value+=`'''language
place your code
'''

    `};by(XA);bE.addEventListener("click",()=>{Xo("completed"),Ne(Ar)});EE.addEventListener("click",()=>{Xo("in progress"),Ne(Ar)});kE.addEventListener("click",()=>{Ne(Ar)});AE.addEventListener("click",async()=>{const n=sessionStorage.getItem("currentProjectId"),e=await qg(n);Vg(e),Yo(n,!0,"small"),Lm(n),Ne(zo)});SE.addEventListener("click",()=>{Ne(Uu),Ss(sessionStorage.getItem("userId"),!1)});hc.addEventListener("click",()=>{Xo("completed")});lc.addEventListener("click",()=>{Xo("in progress")});CE.addEventListener("click",()=>{YA(),Ne(qo)});DE.forEach(n=>{n.addEventListener("click",()=>{Me.reset(),$u.innerHTML="",Cr(Ho)})});RE.forEach(n=>{n.addEventListener("click",()=>{vn.reset(),Cr(Bu)})});KE.addEventListener("click",()=>{Bg(sessionStorage.getItem("currentProjectData")),Cr(Ho)});WE.addEventListener("click",async()=>{await MS(sessionStorage.getItem("currentProjectId")),Ss(sessionStorage.getItem("userId"),!0),Ne(Ar)});QE.addEventListener("click",()=>{console.log("edit task")});YE.addEventListener("click",async()=>{await kS(sessionStorage.getItem("currentTaskId")),Yo(sessionStorage.getItem("currentProjectId"),!0,"small"),Ne(zo)});xE.addEventListener("click",()=>{It.innerHTML="",Cr(km)});uc.addEventListener("submit",n=>{sb(n)});$E.addEventListener("submit",n=>{CS(n)});Ki.addEventListener("click",()=>{Hg()});Am.forEach(n=>{n.addEventListener("click",()=>{$S(n)})});Cm.forEach(n=>{n.addEventListener("click",()=>{jS(n)})});FE.addEventListener("click",()=>{zg()});UE.addEventListener("click",n=>{US(n)});BE.addEventListener("click",n=>{BS(n)});LE.forEach(n=>{n.addEventListener("click",()=>{Qo()})});jE.addEventListener("click",()=>{ZA()});qE.addEventListener("click",()=>{eC()});zE.addEventListener("click",()=>{tC()});HE.addEventListener("click",()=>{nC()});GE.addEventListener("click",()=>{JA()});It.addEventListener("input",()=>{Sy(It.value)});$r.addEventListener("submit",n=>{KA(n)});_i.addEventListener("submit",n=>{WA(n)});Dm.addEventListener("input",()=>{rb()});ME.addEventListener("click",()=>{Ne(qo)});NE.addEventListener("click",()=>{Ne(Sm)});PE.addEventListener("click",()=>{QA()});let yd=0;window.addEventListener("scroll",()=>{let n=window.scrollY;n>yd?_d(!1):_d(!0),yd=n});const _d=n=>{wE.forEach(e=>{e.style.top=`${n?"0":"-4rem"}`})};
