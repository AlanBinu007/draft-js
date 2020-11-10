/*! For license information please see b852ecf3.419f6024.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),c=(n(191),n(190)),a={id:"api-reference-editor-change-type",title:"EditorChangeType"},i={id:"api-reference-editor-change-type",title:"EditorChangeType",description:"EditorChangeType",source:"@site/../docs/APIReference-EditorChangeType.md",permalink:"/docs/api-reference-editor-change-type",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-EditorChangeType.md",lastUpdatedBy:"Dominic Gannaway",lastUpdatedAt:1598471205,sidebar:"docs",previous:{title:"Editor Component",permalink:"/docs/api-reference-editor"},next:{title:"EditorState",permalink:"/docs/api-reference-editor-state"}},l=[{value:"Values",id:"values",children:[{value:"<code>adjust-depth</code>",id:"adjust-depth",children:[]},{value:"<code>apply-entity</code>",id:"apply-entity",children:[]},{value:"<code>backspace-character</code>",id:"backspace-character",children:[]},{value:"<code>change-block-data</code>",id:"change-block-data",children:[]},{value:"<code>change-block-type</code>",id:"change-block-type",children:[]},{value:"<code>change-inline-style</code>",id:"change-inline-style",children:[]},{value:"<code>move-block</code>",id:"move-block",children:[]},{value:"<code>delete-character</code>",id:"delete-character",children:[]},{value:"<code>insert-characters</code>",id:"insert-characters",children:[]},{value:"<code>insert-fragment</code>",id:"insert-fragment",children:[]},{value:"<code>redo</code>",id:"redo",children:[]},{value:"<code>remove-range</code>",id:"remove-range",children:[]},{value:"<code>spellcheck-change</code>",id:"spellcheck-change",children:[]},{value:"<code>split-block</code>",id:"split-block",children:[]},{value:"<code>undo</code>",id:"undo",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/immutable/EditorChangeType.js"}),"EditorChangeType"),"\nis an enum that lists the possible set of change operations that can be handled\nthe Draft model. It is represented as a Flow type, as a union of strings."),Object(c.b)("p",null,"It is passed as a parameter to ",Object(c.b)("inlineCode",{parentName:"p"},"EditorState.push"),", and denotes the type of\nchange operation that is being performed by transitioning to the new\n",Object(c.b)("inlineCode",{parentName:"p"},"ContentState"),"."),Object(c.b)("p",null,"Behind the scenes, this value is used to determine appropriate undo/redo\nhandling, spellcheck behavior, and more. Therefore, while it is possible to\nprovide an arbitrary string value as the ",Object(c.b)("inlineCode",{parentName:"p"},"changeType")," parameter here, you should\navoid doing so."),Object(c.b)("p",null,"We highly recommend that you install ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://flowtype.org"}),"Flow")," to perform\nstatic typechecking on your project. Flow will enforce the use of an appropriate\n",Object(c.b)("inlineCode",{parentName:"p"},"EditorChangeType")," value."),Object(c.b)("h2",{id:"values"},"Values"),Object(c.b)("h3",{id:"adjust-depth"},Object(c.b)("inlineCode",{parentName:"h3"},"adjust-depth")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"depth")," value of one or more ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects is being changed."),Object(c.b)("h3",{id:"apply-entity"},Object(c.b)("inlineCode",{parentName:"h3"},"apply-entity")),Object(c.b)("p",null,"An entity is being applied (or removed via ",Object(c.b)("inlineCode",{parentName:"p"},"null"),") to one or more characters."),Object(c.b)("h3",{id:"backspace-character"},Object(c.b)("inlineCode",{parentName:"h3"},"backspace-character")),Object(c.b)("p",null,"A single character is being backward-removed."),Object(c.b)("h3",{id:"change-block-data"},Object(c.b)("inlineCode",{parentName:"h3"},"change-block-data")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"data")," value of one or more ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects is being changed."),Object(c.b)("h3",{id:"change-block-type"},Object(c.b)("inlineCode",{parentName:"h3"},"change-block-type")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"type")," value of one or more ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects is being changed."),Object(c.b)("h3",{id:"change-inline-style"},Object(c.b)("inlineCode",{parentName:"h3"},"change-inline-style")),Object(c.b)("p",null,"An inline style is being applied or removed for one or more characters."),Object(c.b)("h3",{id:"move-block"},Object(c.b)("inlineCode",{parentName:"h3"},"move-block")),Object(c.b)("p",null,"A block is being moved within the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/immutable/BlockMap.js"}),"BlockMap"),"."),Object(c.b)("h3",{id:"delete-character"},Object(c.b)("inlineCode",{parentName:"h3"},"delete-character")),Object(c.b)("p",null,"A single character is being forward-removed."),Object(c.b)("h3",{id:"insert-characters"},Object(c.b)("inlineCode",{parentName:"h3"},"insert-characters")),Object(c.b)("p",null,"One or more characters is being inserted at a selection state."),Object(c.b)("h3",{id:"insert-fragment"},Object(c.b)("inlineCode",{parentName:"h3"},"insert-fragment")),Object(c.b)("p",null,'A "fragment" of content (i.e. a\n',Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/immutable/BlockMap.js"}),"BlockMap"),")\nis being inserted at a selection state."),Object(c.b)("h3",{id:"redo"},Object(c.b)("inlineCode",{parentName:"h3"},"redo")),Object(c.b)("p",null,"A redo operation is being performed. Since redo behavior is handled by the\nDraft core, it is unlikely that you will need to use this explicitly."),Object(c.b)("h3",{id:"remove-range"},Object(c.b)("inlineCode",{parentName:"h3"},"remove-range")),Object(c.b)("p",null,"Multiple characters or blocks are being removed."),Object(c.b)("h3",{id:"spellcheck-change"},Object(c.b)("inlineCode",{parentName:"h3"},"spellcheck-change")),Object(c.b)("p",null,"A spellcheck or autocorrect change is being performed. This is used to inform\nthe core editor whether to try to allow native undo behavior."),Object(c.b)("h3",{id:"split-block"},Object(c.b)("inlineCode",{parentName:"h3"},"split-block")),Object(c.b)("p",null,"A single ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," is being split into two, for instance when the user\npresses return."),Object(c.b)("h3",{id:"undo"},Object(c.b)("inlineCode",{parentName:"h3"},"undo")),Object(c.b)("p",null,"An undo operation is being performed. Since undo behavior is handled by the\nDraft core, it is unlikely that you will need to use this explicitly."))}p.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||c;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";e.exports=n(192)},192:function(e,t,n){"use strict";var r=n(193),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,f=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||j}function v(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||j}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=O.prototype;var C=k.prototype=new v;C.constructor=k,r(C,O.prototype),C.isPureReactComponent=!0;var w={current:null},E=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:c,type:e,key:a,ref:i,props:o,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var x=/\/+/g,_=[];function T(e,t,n,r){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function $(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case c:case a:l=!0}}if(l)return r(o,t,""===n?"."+R(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var p=n+R(i=t[u],u);l+=e(i,p,r,o)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=y&&t[y]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,p=n+R(i,u++),r,o);else if("object"===i)throw r=""+t,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+n)),r.push(e))}function B(e,t,n,r,o){var c="";null!=n&&(c=(""+n).replace(x,"$&/")+"/"),$(e,M,t=T(t,c,r,o)),A(t)}var I={current:null};function U(){var e=I.current;if(null===e)throw Error(m(321));return e}var F={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return B(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,D,t=T(null,null,t,n)),A(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return B(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(m(143));return e}},t.Component=O,t.Fragment=i,t.Profiler=u,t.PureComponent=k,t.StrictMode=l,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var o=r({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)E.call(t,p)&&!S.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=n;else if(1<p){u=Array(p);for(var s=0;s<p;s++)u[s]=arguments[s+2];o.children=u}return{$$typeof:c,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},193:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,l=a(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))o.call(n,p)&&(l[p]=n[p]);if(r){i=r(n);for(var s=0;s<i.length;s++)c.call(n,i[s])&&(l[i[s]]=n[i[s]])}}return l}}}]);