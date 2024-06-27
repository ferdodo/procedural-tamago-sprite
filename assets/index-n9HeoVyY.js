var We=Object.defineProperty;var qe=(e,n,t)=>n in e?We(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var v=(e,n,t)=>qe(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function U(e){for(var n,t,r=arguments,i=1,o="",s="",a=[0],c=function(u){i===1&&(u||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(u?r[u]:o):i===3&&(u||o)?(a[1]=u?r[u]:o,i=2):i===2&&o==="..."&&u?a[2]=Object.assign(a[2]||{},r[u]):i===2&&o&&!u?(a[2]=a[2]||{})[o]=!0:i>=5&&(i===5?((a[2]=a[2]||{})[t]=u?o?o+r[u]:r[u]:o,i=6):(u||o)&&(a[2][t]+=u?o+r[u]:o)),o=""},l=0;l<e.length;l++){l&&(i===1&&c(),c(l));for(var d=0;d<e[l].length;d++)n=e[l][d],i===1?n==="<"?(c(),a=[a,"",null],i=3):o+=n:i===4?o==="--"&&n===">"?(i=1,o=""):o=n+o[0]:s?n===s?s="":o+=n:n==='"'||n==="'"?s=n:n===">"?(c(),i=1):i&&(n==="="?(i=5,t=o,o=""):n==="/"&&(i<5||e[l][d+1]===">")?(c(),i===3&&(a=a[0]),i=a,(a=a[0]).push(this.apply(null,i.slice(1))),i=0):n===" "||n==="	"||n===`
`||n==="\r"?(c(),i=2):o+=n),i===3&&o==="!--"&&(i=4,a=a[0])}return c(),a.length>2?a.slice(1):a[1]}function Be(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ye(e){if(e.__esModule)return e;var n=e.default;if(typeof n=="function"){var t=function r(){return this instanceof r?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),t}var me={exports:{}};/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */var Ge=function(n){var t=String.prototype.split,r=/()??/.exec("")[1]===n,i;return i=function(o,u,a){if(Object.prototype.toString.call(u)!=="[object RegExp]")return t.call(o,u,a);var c=[],l=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.extended?"x":"")+(u.sticky?"y":""),d=0,u=new RegExp(u.source,l+"g"),p,f,y,m;for(o+="",r||(p=new RegExp("^"+u.source+"$(?!\\s)",l)),a=a===n?-1>>>0:a>>>0;(f=u.exec(o))&&(y=f.index+f[0].length,!(y>d&&(c.push(o.slice(d,f.index)),!r&&f.length>1&&f[0].replace(p,function(){for(var x=1;x<arguments.length-2;x++)arguments[x]===n&&(f[x]=n)}),f.length>1&&f.index<o.length&&Array.prototype.push.apply(c,f.slice(1)),m=f[0].length,d=y,c.length>=a)));)u.lastIndex===f.index&&u.lastIndex++;return d===o.length?(m||!u.test(""))&&c.push(""):c.push(o.slice(d)),c.length>a?c.slice(0,a):c},i}(),Je=[].indexOf,Ke=function(e,n){if(Je)return e.indexOf(n);for(var t=0;t<e.length;++t)if(e[t]===n)return t;return-1},V=Ke,Qe=Xe;function Xe(e){var n=e.classList;if(n)return n;var t={add:r,remove:i,contains:o,toggle:s,toString:a,length:0,item:c};return t;function r(u){var p=l();V(p,u)>-1||(p.push(u),d(p))}function i(u){var p=l(),f=V(p,u);f!==-1&&(p.splice(f,1),d(p))}function o(u){return V(l(),u)>-1}function s(u){return o(u)?(i(u),!1):(r(u),!0)}function a(){return e.className}function c(u){var p=l();return p[u]||null}function l(){var u=e.className;return Ze(u.split(" "),et)}function d(u){var p=u.length;e.className=u.join(" "),t.length=p;for(var f=0;f<u.length;f++)t[f]=u[f];delete u[p]}}function Ze(e,n){for(var t=[],r=0;r<e.length;r++)n(e[r])&&t.push(e[r]);return t}function et(e){return!!e}const tt={},nt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),rt=Ye(nt);var ot=Ge,it=Qe,ye=typeof window>"u"?rt:window,C=ye.document,st=ye.Text;function be(){var e=[];function n(){var t=[].slice.call(arguments),r=null;function i(o){var s;function a(u){var p=ot(u,/([\.#]?[^\s#.]+)/);/^\.|#/.test(p[1])&&(r=C.createElement("div")),oe(p,function(f){var y=f.substring(1,f.length);f&&(r?f[0]==="."?it(r).add(y):f[0]==="#"&&r.setAttribute("id",y):r=C.createElement(f))})}if(o!=null){if(typeof o=="string")r?r.appendChild(s=C.createTextNode(o)):a(o);else if(typeof o=="number"||typeof o=="boolean"||o instanceof Date||o instanceof RegExp)r.appendChild(s=C.createTextNode(o.toString()));else if(ct(o))oe(o,i);else if(W(o))r.appendChild(s=o);else if(o instanceof st)r.appendChild(s=o);else if(typeof o=="object")for(var c in o)if(typeof o[c]=="function")/^on\w+/.test(c)?function(u,p){r.addEventListener?(r.addEventListener(u.substring(2),p[u],!1),e.push(function(){r.removeEventListener(u.substring(2),p[u],!1)})):(r.attachEvent(u,p[u]),e.push(function(){r.detachEvent(u,p[u])}))}(c,o):(r[c]=o[c](),e.push(o[c](function(u){r[c]=u})));else if(c==="style")if(typeof o[c]=="string")r.style.cssText=o[c];else for(var l in o[c])(function(u,p){if(typeof p=="function")r.style.setProperty(u,p()),e.push(p(function(y){r.style.setProperty(u,y)}));else var f=o[c][u].match(/(.*)\W+!important\W*$/);f?r.style.setProperty(u,f[1],"important"):r.style.setProperty(u,o[c][u])})(l,o[c][l]);else if(c==="attrs")for(var d in o[c])r.setAttribute(d,o[c][d]);else c.substr(0,5)==="data-"?r.setAttribute(c,o[c]):r[c]=o[c];else if(typeof o=="function"){var d=o();r.appendChild(s=W(d)?d:C.createTextNode(d)),e.push(o(function(p){W(p)&&s.parentElement?(s.parentElement.replaceChild(p,s),s=p):s.textContent=p}))}}return s}for(;t.length;)i(t.shift());return r}return n.cleanup=function(){for(var t=0;t<e.length;t++)e[t]();e.length=0},n}var at=me.exports=be();at.context=be;function W(e){return e&&e.nodeName&&e.nodeType}function oe(e,n){if(e.forEach)return e.forEach(n);for(var t=0;t<e.length;t++)n(e[t],t)}function ct(e){return Object.prototype.toString.call(e)=="[object Array]"}var ut=me.exports;const j=Be(ut);function E(e){if(!e.shadowRoot)throw new Error("There is no shadow root on the element !");return e.shadowRoot}function N(e){const n=Array.isArray(e)?e:[e],t=document.createElement("template");return t.innerHTML=n.map(r=>r.outerHTML).join(""),t}var Y=function(e,n){return Y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])},Y(e,n)};function K(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Y(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}function lt(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(d){try{l(r.next(d))}catch(u){s(u)}}function c(d){try{l(r.throw(d))}catch(u){s(u)}}function l(d){d.done?o(d.value):i(d.value).then(a,c)}l((r=r.apply(e,n||[])).next())})}function ve(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(d){return c([l,d])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(t=0)),t;)try{if(r=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(d){l=[6,d],i=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function $(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function k(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return o}function H(e,n,t){if(t||arguments.length===2)for(var r=0,i=n.length,o;r<i;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))}function I(e){return this instanceof I?(this.v=e,this):new I(e)}function ft(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(e,n||[]),i,o=[];return i={},a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(f){return function(y){return Promise.resolve(y).then(f,u)}}function a(f,y){r[f]&&(i[f]=function(m){return new Promise(function(x,P){o.push([f,m,x,P])>1||c(f,m)})},y&&(i[f]=y(i[f])))}function c(f,y){try{l(r[f](y))}catch(m){p(o[0][3],m)}}function l(f){f.value instanceof I?Promise.resolve(f.value.v).then(d,u):p(o[0][2],f)}function d(f){c("next",f)}function u(f){c("throw",f)}function p(f,y){f(y),o.shift(),o.length&&c(o[0][0],o[0][1])}}function dt(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof $=="function"?$(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=e[o]&&function(s){return new Promise(function(a,c){s=e[o](s),i(a,c,s.done,s.value)})}}function i(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}function h(e){return typeof e=="function"}function ge(e){var n=function(r){Error.call(r),r.stack=new Error().stack},t=e(n);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var q=ge(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function ie(e,n){if(e){var t=e.indexOf(n);0<=t&&e.splice(t,1)}}var Q=function(){function e(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var n,t,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=$(s),c=a.next();!c.done;c=a.next()){var l=c.value;l.remove(this)}}catch(m){n={error:m}}finally{try{c&&!c.done&&(t=a.return)&&t.call(a)}finally{if(n)throw n.error}}else s.remove(this);var d=this.initialTeardown;if(h(d))try{d()}catch(m){o=m instanceof q?m.errors:[m]}var u=this._finalizers;if(u){this._finalizers=null;try{for(var p=$(u),f=p.next();!f.done;f=p.next()){var y=f.value;try{se(y)}catch(m){o=o??[],m instanceof q?o=H(H([],k(o)),k(m.errors)):o.push(m)}}}catch(m){r={error:m}}finally{try{f&&!f.done&&(i=p.return)&&i.call(p)}finally{if(r)throw r.error}}}if(o)throw new q(o)}},e.prototype.add=function(n){var t;if(n&&n!==this)if(this.closed)se(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}},e.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},e.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},e.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&ie(t,n)},e.prototype.remove=function(n){var t=this._finalizers;t&&ie(t,n),n instanceof e&&n._removeParent(this)},e.EMPTY=function(){var n=new e;return n.closed=!0,n}(),e}();Q.EMPTY;function we(e){return e instanceof Q||e&&"closed"in e&&h(e.remove)&&h(e.add)&&h(e.unsubscribe)}function se(e){h(e)?e():e.unsubscribe()}var xe={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Ee={setTimeout:function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setTimeout.apply(void 0,H([e,n],k(t)))},clearTimeout:function(e){var n=Ee.delegate;return((n==null?void 0:n.clearTimeout)||clearTimeout)(e)},delegate:void 0};function Se(e){Ee.setTimeout(function(){throw e})}function ae(){}function pt(e){e()}var X=function(e){K(n,e);function n(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,we(t)&&t.add(r)):r.destination=bt,r}return n.create=function(t,r,i){return new G(t,r,i)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(Q),ht=Function.prototype.bind;function B(e,n){return ht.call(e,n)}var mt=function(){function e(n){this.partialObserver=n}return e.prototype.next=function(n){var t=this.partialObserver;if(t.next)try{t.next(n)}catch(r){z(r)}},e.prototype.error=function(n){var t=this.partialObserver;if(t.error)try{t.error(n)}catch(r){z(r)}else z(n)},e.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(t){z(t)}},e}(),G=function(e){K(n,e);function n(t,r,i){var o=e.call(this)||this,s;if(h(t)||!t)s={next:t??void 0,error:r??void 0,complete:i??void 0};else{var a;o&&xe.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return o.unsubscribe()},s={next:t.next&&B(t.next,a),error:t.error&&B(t.error,a),complete:t.complete&&B(t.complete,a)}):s=t}return o.destination=new mt(s),o}return n}(X);function z(e){Se(e)}function yt(e){throw e}var bt={closed:!0,next:ae,error:yt,complete:ae},Z=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function F(e){return e}function vt(e){return e.length===0?F:e.length===1?e[0]:function(t){return e.reduce(function(r,i){return i(r)},t)}}var b=function(){function e(n){n&&(this._subscribe=n)}return e.prototype.lift=function(n){var t=new e;return t.source=this,t.operator=n,t},e.prototype.subscribe=function(n,t,r){var i=this,o=wt(n)?n:new G(n,t,r);return pt(function(){var s=i,a=s.operator,c=s.source;o.add(a?a.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},e.prototype.forEach=function(n,t){var r=this;return t=ce(t),new t(function(i,o){var s=new G({next:function(a){try{n(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},e.prototype._subscribe=function(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)},e.prototype[Z]=function(){return this},e.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return vt(n)(this)},e.prototype.toPromise=function(n){var t=this;return n=ce(n),new n(function(r,i){var o;t.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},e.create=function(n){return new e(n)},e}();function ce(e){var n;return(n=e??xe.Promise)!==null&&n!==void 0?n:Promise}function gt(e){return e&&h(e.next)&&h(e.error)&&h(e.complete)}function wt(e){return e&&e instanceof X||gt(e)&&we(e)}function xt(e){return h(e==null?void 0:e.lift)}function _(e){return function(n){if(xt(n))return n.lift(function(t){try{return e(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function S(e,n,t,r,i){return new Et(e,n,t,r,i)}var Et=function(e){K(n,e);function n(t,r,i,o,s,a){var c=e.call(this,t)||this;return c.onFinalize=s,c.shouldUnsubscribe=a,c._next=r?function(l){try{r(l)}catch(d){t.error(d)}}:e.prototype._next,c._error=o?function(l){try{o(l)}catch(d){t.error(d)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=i?function(){try{i()}catch(l){t.error(l)}finally{this.unsubscribe()}}:e.prototype._complete,c}return n.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},n}(X),Te=new b(function(e){return e.complete()});function St(e){return e&&h(e.schedule)}function ee(e){return e[e.length-1]}function Tt(e){return h(ee(e))?e.pop():void 0}function Ae(e){return St(ee(e))?e.pop():void 0}function At(e,n){return typeof ee(e)=="number"?e.pop():n}var te=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function _e(e){return h(e==null?void 0:e.then)}function Le(e){return h(e[Z])}function Ie(e){return Symbol.asyncIterator&&h(e==null?void 0:e[Symbol.asyncIterator])}function Oe(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function _t(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Pe=_t();function Ce(e){return h(e==null?void 0:e[Pe])}function Re(e){return ft(this,arguments,function(){var t,r,i,o;return ve(this,function(s){switch(s.label){case 0:t=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,I(t.read())];case 3:return r=s.sent(),i=r.value,o=r.done,o?[4,I(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,I(i)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function Me(e){return h(e==null?void 0:e.getReader)}function L(e){if(e instanceof b)return e;if(e!=null){if(Le(e))return Lt(e);if(te(e))return It(e);if(_e(e))return Ot(e);if(Ie(e))return $e(e);if(Ce(e))return Pt(e);if(Me(e))return Ct(e)}throw Oe(e)}function Lt(e){return new b(function(n){var t=e[Z]();if(h(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function It(e){return new b(function(n){for(var t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function Ot(e){return new b(function(n){e.then(function(t){n.closed||(n.next(t),n.complete())},function(t){return n.error(t)}).then(null,Se)})}function Pt(e){return new b(function(n){var t,r;try{for(var i=$(e),o=i.next();!o.done;o=i.next()){var s=o.value;if(n.next(s),n.closed)return}}catch(a){t={error:a}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}n.complete()})}function $e(e){return new b(function(n){Rt(e,n).catch(function(t){return n.error(t)})})}function Ct(e){return $e(Re(e))}function Rt(e,n){var t,r,i,o;return lt(this,void 0,void 0,function(){var s,a;return ve(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),t=dt(e),c.label=1;case 1:return[4,t.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(s=r.value,n.next(s),n.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),i={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(o=t.return)?[4,o.call(t)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function T(e,n,t,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=n.schedule(function(){t(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function ke(e,n){return n===void 0&&(n=0),_(function(t,r){t.subscribe(S(r,function(i){return T(r,e,function(){return r.next(i)},n)},function(){return T(r,e,function(){return r.complete()},n)},function(i){return T(r,e,function(){return r.error(i)},n)}))})}function je(e,n){return n===void 0&&(n=0),_(function(t,r){r.add(e.schedule(function(){return t.subscribe(r)},n))})}function Mt(e,n){return L(e).pipe(je(n),ke(n))}function $t(e,n){return L(e).pipe(je(n),ke(n))}function kt(e,n){return new b(function(t){var r=0;return n.schedule(function(){r===e.length?t.complete():(t.next(e[r++]),t.closed||this.schedule())})})}function jt(e,n){return new b(function(t){var r;return T(t,n,function(){r=e[Pe](),T(t,n,function(){var i,o,s;try{i=r.next(),o=i.value,s=i.done}catch(a){t.error(a);return}s?t.complete():t.next(o)},0,!0)}),function(){return h(r==null?void 0:r.return)&&r.return()}})}function Ne(e,n){if(!e)throw new Error("Iterable cannot be null");return new b(function(t){T(t,n,function(){var r=e[Symbol.asyncIterator]();T(t,n,function(){r.next().then(function(i){i.done?t.complete():t.next(i.value)})},0,!0)})})}function Nt(e,n){return Ne(Re(e),n)}function Ft(e,n){if(e!=null){if(Le(e))return Mt(e,n);if(te(e))return kt(e,n);if(_e(e))return $t(e,n);if(Ie(e))return Ne(e,n);if(Ce(e))return jt(e,n);if(Me(e))return Nt(e,n)}throw Oe(e)}function ne(e,n){return n?Ft(e,n):L(e)}var Fe=ge(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function O(e,n){return _(function(t,r){var i=0;t.subscribe(S(r,function(o){r.next(e.call(n,o,i++))}))})}var zt=Array.isArray;function Ht(e,n){return zt(n)?e.apply(void 0,H([],k(n))):e(n)}function ze(e){return O(function(n){return Ht(e,n)})}var Ut=Array.isArray,Dt=Object.getPrototypeOf,Vt=Object.prototype,Wt=Object.keys;function qt(e){if(e.length===1){var n=e[0];if(Ut(n))return{args:n,keys:null};if(Bt(n)){var t=Wt(n);return{args:t.map(function(r){return n[r]}),keys:t}}}return{args:e,keys:null}}function Bt(e){return e&&typeof e=="object"&&Dt(e)===Vt}function Yt(e,n){return e.reduce(function(t,r,i){return t[r]=n[i],t},{})}function Gt(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=Ae(e),r=Tt(e),i=qt(e),o=i.args,s=i.keys;if(o.length===0)return ne([],t);var a=new b(Jt(o,t,s?function(c){return Yt(s,c)}:F));return r?a.pipe(ze(r)):a}function Jt(e,n,t){return t===void 0&&(t=F),function(r){ue(n,function(){for(var i=e.length,o=new Array(i),s=i,a=i,c=function(d){ue(n,function(){var u=ne(e[d],n),p=!1;u.subscribe(S(r,function(f){o[d]=f,p||(p=!0,a--),a||r.next(t(o.slice()))},function(){--s||r.complete()}))},r)},l=0;l<i;l++)c(l)},r)}}function ue(e,n,t){e?T(t,e,n):n()}function Kt(e,n,t,r,i,o,s,a){var c=[],l=0,d=0,u=!1,p=function(){u&&!c.length&&!l&&n.complete()},f=function(m){return l<r?y(m):c.push(m)},y=function(m){l++;var x=!1;L(t(m,d++)).subscribe(S(n,function(P){n.next(P)},function(){x=!0},void 0,function(){if(x)try{l--;for(var P=function(){var D=c.shift();s||y(D)};c.length&&l<r;)P();p()}catch(D){n.error(D)}}))};return e.subscribe(S(n,f,function(){u=!0,p()})),function(){}}function re(e,n,t){return t===void 0&&(t=1/0),h(n)?re(function(r,i){return O(function(o,s){return n(r,o,i,s)})(L(e(r,i)))},t):(typeof n=="number"&&(t=n),_(function(r,i){return Kt(r,i,e,t)}))}function Qt(e){return e===void 0&&(e=1/0),re(F,e)}var Xt=["addListener","removeListener"],Zt=["addEventListener","removeEventListener"],en=["on","off"];function A(e,n,t,r){if(h(t)&&(r=t,t=void 0),r)return A(e,n,t).pipe(ze(r));var i=k(rn(e)?Zt.map(function(a){return function(c){return e[a](n,c,t)}}):tn(e)?Xt.map(le(e,n)):nn(e)?en.map(le(e,n)):[],2),o=i[0],s=i[1];if(!o&&te(e))return re(function(a){return A(a,n,t)})(L(e));if(!o)throw new TypeError("Invalid event target");return new b(function(a){var c=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return a.next(1<l.length?l:l[0])};return o(c),function(){return s(c)}})}function le(e,n){return function(t){return function(r){return e[t](n,r)}}}function tn(e){return h(e.addListener)&&h(e.removeListener)}function nn(e){return h(e.on)&&h(e.off)}function rn(e){return h(e.addEventListener)&&h(e.removeEventListener)}function on(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=Ae(e),r=At(e,1/0),i=e;return i.length?i.length===1?L(i[0]):Qt(r)(ne(i,t)):Te}function sn(e,n){return _(function(t,r){var i=0;t.subscribe(S(r,function(o){return e.call(n,o,i++)&&r.next(o)}))})}function an(e){return _(function(n,t){var r=!1;n.subscribe(S(t,function(i){r=!0,t.next(i)},function(){r||t.next(e),t.complete()}))})}function cn(e){return e<=0?function(){return Te}:_(function(n,t){var r=0;n.subscribe(S(t,function(i){++r<=e&&(t.next(i),e<=r&&t.complete())}))})}function fe(e){return O(function(){return e})}function un(e){return e===void 0&&(e=ln),_(function(n,t){var r=!1;n.subscribe(S(t,function(i){r=!0,t.next(i)},function(){return r?t.complete():t.error(e())}))})}function ln(){return new Fe}function fn(e,n){var t=arguments.length>=2;return function(r){return r.pipe(F,cn(1),t?an(n):un(function(){return new Fe}))}}function He(){return!document.hidden}function dn(){const e=A(document,"visibilitychange"),n=A(window,"focus").pipe(fe(!0)),t=A(window,"blur").pipe(fe(!1)),r=on(n,t);return Gt(e,r).pipe(O(([,i])=>He()&&i),sn(i=>i),fn())}const pn=A(document,"mouseover");async function hn(){He()||await Promise.race([dn().toPromise(),pn.toPromise()])}async function mn(){await new Promise(e=>setTimeout(e,400)),await hn(),await new Promise(e=>setTimeout(e,400))}const yn=mn();function g(e,n){const t=e.querySelector(n);if(!t)throw new Error("Failed to find element ${ selector } !");return t}const bn=U.bind(j),vn="crumbs-p",gn=N(bn`
	<style>
		:host {
			display: block;
		}

		p {
			font-size: 1rem;
		}

		::slotted(code) {
			padding: 5px;
			border-radius: 5px;
			display: inline-block;
			font-size: 0.9rem;
		}

		::slotted(code[block]) {
			display: block;
			margin: 1rem 0;
			white-space: pre;
		}

		@media screen and (min-width: 800px) {
			p {
				font-size: 1.4rem;
			}
		}
	</style>

	<p>
		<slot></slot>
	</p>
`);class wn extends HTMLElement{async connectedCallback(){this.attachShadow({mode:"open"});const n=E(this),t=gn.content.cloneNode(!0);n.appendChild(t)}}customElements.define(vn,wn);const xn=U.bind(j),En="crumbs-panel",Sn=N(xn`
	<style>
		:host {
			display: block;
		}

		#panel-container {
			display: grid;
			grid-column-gap: 0px;
			grid-row-gap: 0px;
			transition: grid-template-columns .5s cubic-bezier(.12,1.03,.11,.99), grid-template-rows .5s cubic-bezier(.12,1.03,.11,.99);
			height: 100%;
		}

		#panel {
			border-radius: 0.3rem;
			padding: 1.7rem;
			grid-area: 2 / 2 / 3 / 3;
			background-color: #ffffff00;
			box-shadow: 0px 0px 9px 5px rgba(28, 44, 83, 0.04);
			box-shadow: 2px 10px 50px 5px rgba(26, 25, 25, 0.47);
			transition: background-color .5s cubic-bezier(.12,1.03,.11,.99);
			color: black;
			overflow: auto;
			position: relative;
		}

		#panel-title-container {
			grid-area: 2 / 2 / 3 / 3;
			z-index: 0;
		}

		#panel-content {
			visibility: collapse;
			transition: opacity 1s cubic-bezier(.12,1.03,.11,.99);
			z-index: 1;
			position: relative;
			height: calc(100% - 2.5rem);
		}

		#panel-loading-container {
			grid-area: 2 / 2 / 3 / 3;
			overflow: hidden;
			backdrop-filter: blur(0.3rem);
		}

		#panel-title {
			background: linear-gradient(0deg, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0.44) 100%);
			display: inline-block;
			border-radius: 0.3rem;
			padding-left: 1rem;
			padding-right: 1rem;
			opacity: 0;
			transition-duration: 0.2s;
			transition-timing-function: cubic-bezier(.12,1.03,.11,.99);
			transition-delay: 0.4s;
			transition-property: opacity;
		}

		#panel-loading {
			border-radius: 0.3rem;
			width: 75%;
			height: 100%;
			background-color: #ffffff55;
			box-shadow: 0px 0px 9px 5px rgba(28, 44, 83, 0.04);

			transition-duration: 1s;
			transition-timing-function: cubic-bezier(.17,.84,.44,1);
			transition-delay: 0s;
			transition-property: width, background-color;

			color: black;
			overflow: auto;

			position: relative;
		}

		* {
			scrollbar-width: auto;
			scrollbar-color: #ffffff90 #ffffff00;
		}

		*::-webkit-scrollbar {
			width: 8px;
		}

		*::-webkit-scrollbar-track {
			background: #ffffff00;
		}

		*::-webkit-scrollbar-thumb {
			background-color: #ffffff90;
			border-radius: 10px;
			border: 3px solid #ffffff00;
		}
	</style>

	<div id="panel-container" style="grid-template-columns: 20% 1fr 20%; grid-template-rows: 1rem 1fr 40%;">
		<div id="panel-loading-container">
			<div id="panel-loading"></div>
		</div>

		<div id="panel">
			<div id="panel-content" style="opacity: 0;">
				<slot></slot>
			</div>
		</div>

		<div id="panel-title-container">
			<div id="panel-title">
				<crumbs-p style="line-height: 0;">
					<b id="panel-title-content"> </b>
				</crumbs-p>
			</div>
		</div>
	</div>
`);class Tn extends HTMLElement{constructor(){super(...arguments);v(this,"contentTimeoutElapsed",!1);v(this,"contentLoaded",!1);v(this,"connected",!1);v(this,"loading","100");v(this,"scrolled",!1);v(this,"scrolledSubscription",null)}static get observedAttributes(){return["panel-loading","panel-title"]}async connectedCallback(){this.attachShadow({mode:"open"}),await yn;const t=E(this),r=Sn.content.cloneNode(!0);t.appendChild(r);const i=this.getAttribute("panel-loading");i!==null&&de(i)&&(this.loading=i),setTimeout(()=>{const o=g(t,"#panel-container");o.style.gridTemplateColumns="1rem 1fr 1rem",o.style.gridTemplateRows="1rem 1fr 1rem";const s=g(t,"#panel");s.style.backgroundColor="#ffffff40",this.scrolledSubscription=A(s,"scroll").pipe(O(a=>a.target.scrollTop),O(a=>a!==0)).subscribe(a=>{this.scrolled=a,this.render()}),this.render()},10),setTimeout(()=>{this.contentTimeoutElapsed=!0,this.render()},400),this.connected=!0,this.render()}render(){const t=E(this),r=g(t,"#panel-content"),i=g(t,"#panel-loading"),o=g(t,"#panel"),s=g(t,"#panel-title-content");this.contentTimeoutElapsed&&An(this.loading)?(r.style.visibility="visible",r.style.opacity="1",o.style.overflow="auto"):(r.style.visibility="collapse",r.style.opacity="0",o.style.overflow="hidden"),i.style.width=`${this.loading}%`;const a=g(t,"#panel-title");this.loading==="100"&&this.getAttribute("panel-title")&&!this.scrolled?setTimeout(()=>{a.style.opacity="1",s.innerHTML=this.getAttribute("panel-title")||"",r.style.paddingTop="2.5rem"},10):(r.style.paddingTop="inherit",a.style.opacity="0")}attributeChangedCallback(){if(this.shadowRoot&&this.connected){const t=this.getAttribute("panel-loading");t!==null&&de(t)?this.loading=t:t===null&&(this.loading="100"),this.render()}}disconnectedCallback(){var t;(t=this.scrolledSubscription)==null||t.unsubscribe()}}function de(e){const n=Number(e),t=Math.floor(n);return t===n&&Number.isInteger(t)&&Number.isFinite(t)&&t<=100&&t>=0}function An(e){return e===null||e==="100"}customElements.define(En,Tn);const _n=U.bind(j),Ln="crumbs-input",In=N(_n`
	<style>
		:host {
			display: block;
		}

		input {
			font-size: 1rem;
			font-family: inherit;
			background-color: transparent;
			padding: 0.4rem;
			border-radius: 10px;
			border-color: transparent;
			padding: 10px 25px;

			box-shadow: inset 2px 2px 6px 0px rgba(0, 0, 0, 0.29),
				inset -2px -2px 3px #ffffffa8,
				2px 2px 1px 0px #ffffff1c,
				-2px -2px 1px rgba(0, 0, 0, 0.02);

			border-width: 0;
			margin: 0.1rem;
		}

		@media screen and (min-width: 800px) {
			input {
				font-size: 1.4rem;
			}
		}

		input:focus, input:focus-visible {
			outline: none;
		}
	</style>

	<input type="text"/>
`);class On extends HTMLElement{static get observedAttributes(){return["value"]}async connectedCallback(){this.attachShadow({mode:"open"});const n=E(this),t=In.content.cloneNode(!0);n.appendChild(t);const r=g(n,"input"),i=this.getAttribute("value");r instanceof HTMLInputElement&&i&&(r.value=i)}attributeChangedCallback(n,t,r){if(n==="value"&&this.shadowRoot){const i=E(this),o=g(i,"input");o instanceof HTMLInputElement&&(o.value=r)}}}customElements.define(Ln,On);const J=U.bind(j),Pn="crumbs-tabs",Cn=N(J`
	<style>
		:host {
			display: block;
		}

		.selected-title {
			background: linear-gradient(0deg, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0.44) 100%);
			border-radius: 0.3rem;
		}

		#tabs {
			display: flex;
			justify-content: space-around;

			& > div {
				padding: 10px;
				cursor: pointer;
				width: 100%;
				text-align: center;
				user-select: none;
			}
		}

		#content {
			display: grid;
			grid-auto-flow: column;
			overflow: scroll;
			grid-auto-columns: 100%;
			scroll-snap-type: x mandatory;
			scroll-behavior: smooth;
			-ms-overflow-style: none;
			scrollbar-width: none;

			& > div {
				scroll-snap-align: start;
			}
		}

		#content::-webkit-scrollbar {
			display: none;
		}

		#container {
			display: grid;
			grid-template-rows: 1fr auto;
			height: 100%;
		}
	</style>

	<div id="container">
		<div id="content"></div>
		<div id="tabs"></div>
	</div>
`);class Rn extends HTMLElement{constructor(){super(...arguments);v(this,"selected",1);v(this,"subscriptions",[])}async connectedCallback(){this.attachShadow({mode:"open"});const t=E(this),r=Cn.content.cloneNode(!0);t.appendChild(r);const i=this.getAttribute("selected");this.selected=Number.parseInt(i||"1");const o=t.querySelector("#tabs"),s=t.querySelector("#content");if(!o)throw new Error("Tabs not found");if(!s)throw new Error("Content not found");for(const a of{[Symbol.iterator]:()=>this.getSlots()}){if(a.startsWith("content-")){const c=J`<div id=${`${a}`}> <slot name=${a}></slot> </div>`;c instanceof Element&&s.appendChild(c)}if(a.startsWith("title-")){const c=J`<div id=${a}> <crumbs-p> <slot name=${a}></slot> </crumbs-p> </div>`;c instanceof Element&&o.appendChild(c)}}this.subscriptions=[...o.children].map((a,c)=>A(a,"click").subscribe(()=>{const l=a.id.replace("title-","content-"),d=t.querySelector(`#${l}`);d instanceof HTMLElement&&s instanceof HTMLElement&&d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.selected=c+1,this.render()})),this.render()}render(){const r=E(this).querySelector("#tabs");if(!r)throw new Error("Tabs not found");[...r.children].forEach((i,o)=>{o+1===this.selected?i instanceof HTMLElement&&i.classList.add("selected-title"):i instanceof HTMLElement&&i.classList.remove("selected-title")})}disconnectedCallback(){for(const t of this.subscriptions)t.unsubscribe()}*getSlots(){for(const t of Array.from(this.children)){const r=t.getAttribute("slot");r&&(yield r)}}}customElements.define(Pn,Rn);var Ue=function(e,n,t,r){var i;n[0]=0;for(var o=1;o<n.length;o++){var s=n[o++],a=n[o]?(n[0]|=s?1:2,t[n[o++]]):n[++o];s===3?r[0]=a:s===4?r[1]=Object.assign(r[1]||{},a):s===5?(r[1]=r[1]||{})[n[++o]]=a:s===6?r[1][n[++o]]+=a+"":s?(i=e.apply(a,Ue(e,a,t,["",null])),r.push(i),a[0]?n[0]|=2:(n[o-2]=0,n[o]=i)):r.push(a)}return r},pe=new Map;function Mn(e){var n=pe.get(this);return n||(n=new Map,pe.set(this,n)),(n=Ue(this,n.get(e)||(n.set(e,n=function(t){for(var r,i,o=1,s="",a="",c=[0],l=function(p){o===1&&(p||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,p,s):o===3&&(p||s)?(c.push(3,p,s),o=2):o===2&&s==="..."&&p?c.push(4,p,0):o===2&&s&&!p?c.push(5,0,!0,s):o>=5&&((s||!p&&o===5)&&(c.push(o,0,s,i),o=6),p&&(c.push(o,p,0,i),o=6)),s=""},d=0;d<t.length;d++){d&&(o===1&&l(),l(d));for(var u=0;u<t[d].length;u++)r=t[d][u],o===1?r==="<"?(l(),c=[c],o=3):s+=r:o===4?s==="--"&&r===">"?(o=1,s=""):s=r+s[0]:a?r===a?a="":s+=r:r==='"'||r==="'"?a=r:r===">"?(l(),o=1):o&&(r==="="?(o=5,i=s,s=""):r==="/"&&(o<5||t[d][u+1]===">")?(l(),o===3&&(c=c[0]),o=c,(c=c[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(l(),o=2):s+=r),o===3&&s==="!--"&&(o=4,c=c[0])}return l(),c}(e)),n),arguments,[])).length>1?n:n[0]}const $n=Mn.bind(j),kn="crumbs-button",jn=N($n`
	<style>
		:host {
			display: inline-block;
		}

		/* ❤️ https://codepen.io/yuhomyan/pen/OJMejWJ */

		.custom-btn {
			font-family: ds-notes-sans;
			font-size: 1rem;
			display: grid;
			place-content: center;
			border-radius: 5px;
			padding: 10px 25px;
			font-weight: 500;
			background: transparent;
			cursor: pointer;
			transition: all 0.3s ease;
			position: relative;
			box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
			7px 7px 20px 0px rgba(0,0,0,.1),
			4px 4px 5px 0px rgba(0,0,0,.1);
			outline: none;
			grid-area: 2 / 2 / 3 / 3;
			user-select: none;
		}

		@media screen and (min-width: 800px) {
			.custom-btn {
				font-size: 1.4rem;
			}
		}

		.btn-16 {
			border: none;
			color: #000;
		}
		.btn-16:after {
			position: absolute;
			content: "";
			width: 0;
			height: 100%;
			top: 0;
			left: 0;
			direction: rtl;
			z-index: -1;
			box-shadow: -1px -1px 5px 0px #fff0, -1px -1px 5px 0px #fff, 7px 7px 10px 0px #0002, 4px 4px 5px 0px #0001;
			transition: all 0.3s ease;
			border-radius: 5px;
			background-color: #fff3;
		}
		.btn-16:hover {
			color: #000;
		}
		.btn-16:hover:after {
			left: auto;
			right: 0;
			width: 100%;
		}
		.btn-16:active {
			top: 2px;
		}

		.button-container {
			display: grid;
			grid-template-columns: 0.4rem 1fr 0.4rem;
			grid-template-rows: 0.4rem 1fr 0.4rem; 
		}

		.progress-container {
			grid-area: 2 / 2 / 3 / 3;
		}

		#progress {
			background-color: #fff3;
			height: 100%;
			width: 0%;
			border-radius: 5px;
			transition: width 0.3s ease-in-out;
		}

	</style>

	<div className="button-container">
		<div className="custom-btn btn-16">
			<slot></slot>
		</div>
		<div className="progress-container">
			<div id="progress"></div>
		</div>
	</div>
`);class Nn extends HTMLElement{constructor(){super(...arguments);v(this,"clickSubscription",null);v(this,"_progress","0")}static get observedAttributes(){return["progress"]}async connectedCallback(){this.attachShadow({mode:"open"});const t=E(this);this._progress=this.getAttribute("progress")||"0",t.appendChild(jn.content.cloneNode(!0)),this.render()}attributeChangedCallback(){if(this.shadowRoot){const t=this.getAttribute("progress");Fn(t)&&(this._progress=t===null?"0":t),this.render()}}render(){const t=E(this),r=g(t,"#progress");r.style.width=`${this._progress}%`}disconnectedCallback(){var t;(t=this.clickSubscription)==null||t.unsubscribe()}}function Fn(e){if(e===null)return!0;const n=Number(e),t=Math.floor(n);return t===n&&Number.isInteger(t)&&Number.isFinite(t)&&t<=100&&t>=0}customElements.define(kn,Nn);let w,R=null;function he(){return(R===null||R.byteLength===0)&&(R=new Int32Array(w.memory.buffer)),R}const De=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&De.decode();let M=null;function zn(){return(M===null||M.byteLength===0)&&(M=new Uint8Array(w.memory.buffer)),M}function Hn(e,n){return e=e>>>0,De.decode(zn().subarray(e,e+n))}function Un(e){let n,t;try{const o=w.__wbindgen_add_to_stack_pointer(-16);w.generatetamago(o,e);var r=he()[o/4+0],i=he()[o/4+1];return n=r,t=i,Hn(r,i)}finally{w.__wbindgen_add_to_stack_pointer(16),w.__wbindgen_free(n,t,1)}}async function Dn(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}function Vn(){const e={};return e.wbg={},e}function Wn(e,n){return w=e.exports,Ve.__wbindgen_wasm_module=n,R=null,M=null,w}async function Ve(e){if(w!==void 0)return w;typeof e>"u"&&(e=new URL(""+new URL("../procedural_tamago_sprite_bg.wasm",import.meta.url).href,import.meta.url));const n=Vn();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await Dn(await e,n);return Wn(t,r)}function qn(e,n){if(e.length%8!==0)throw new Error("Le buffer doit avoir une longueur multiple de 8.");const t=Math.ceil(e.length/(n*8)),r=document.createElement("canvas");r.width=n,r.height=t;const i=r.getContext("2d"),o=i.createImageData(n,t);for(let a=0;a<e.length;a+=8){const c=parseInt(e.slice(a,a+2),16),l=parseInt(e.slice(a+2,a+4),16),d=parseInt(e.slice(a+4,a+6),16);parseInt(e.slice(a+6,a+8),16);const u=a/8%n,f=(Math.floor(a/8/n)*n+u)*4;o.data[f]=c,o.data[f+1]=l,o.data[f+2]=d,o.data[f+3]=255}i.putImageData(o,0,0);const s=document.createElement("img");return s.src=r.toDataURL(),s}Ve().then(function(){window.addEventListener("wheel",e=>{const n=Math.floor(Math.random()*999999999999999).toString(),t=Un(n),r=qn(t,16);document.body.appendChild(r)})});
