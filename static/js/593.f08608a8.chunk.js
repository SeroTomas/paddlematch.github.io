"use strict";(self.webpackChunkPaddleMatch=self.webpackChunkPaddleMatch||[]).push([[593],{35983:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"}},37745:(e,t,r)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(n=r(33694))&&n.__esModule?n:{default:n};t.default=o,e.exports=o},33694:(e,t,r)=>{var n=r(24994),o=r(6305);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(65043)),l=n(r(35983)),i=n(r(42740)),c=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:l.default}))};c.displayName="QuestionCircleOutlined";var u=a.forwardRef(c);t.default=u},53593:(e,t,r)=>{r.d(t,{A:()=>ge});var n=r(58168),o=r(5544),a=r(64467),l=r(65043),i=r(64600),c=r.n(i),u=r(65522),s=r(25055),d=r(45111),f=l.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),m=l.createContext({updateItemErrors:function(){}}),v=l.createContext({prefixCls:""});function p(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function h(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function g(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return h(r.overflowY,t)||h(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function b(e,t,r,n,o,a,l,i){return a<e&&l>t||a>e&&l<t?0:a<=e&&i<=r||l>=t&&i>=r?a-e-n:l>t&&i<r||a<e&&i>r?l-t+o:0}function A(e,t){var r=window,n=t.scrollMode,o=t.block,a=t.inline,l=t.boundary,i=t.skipOverflowHiddenElements,c="function"==typeof l?l:function(e){return e!==l};if(!p(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,s=[],d=e;p(d)&&c(d);){if((d=d.parentNode)===u){s.push(d);break}d===document.body&&g(d)&&!g(document.documentElement)||g(d,i)&&s.push(d)}for(var f=r.visualViewport?r.visualViewport.width:innerWidth,m=r.visualViewport?r.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,h=window.scrollY||pageYOffset,A=e.getBoundingClientRect(),y=A.height,E=A.width,w=A.top,C=A.right,O=A.bottom,x=A.left,F="start"===o||"nearest"===o?w:"end"===o?O:w+y/2,k="center"===a?x+E/2:"end"===a?C:x,P=[],j=0;j<s.length;j++){var M=s[j],_=M.getBoundingClientRect(),I=_.height,N=_.width,R=_.top,S=_.right,V=_.bottom,q=_.left;if("if-needed"===n&&w>=0&&x>=0&&O<=m&&C<=f&&w>=R&&O<=V&&x>=q&&C<=S)return P;var T=getComputedStyle(M),L=parseInt(T.borderLeftWidth,10),W=parseInt(T.borderTopWidth,10),D=parseInt(T.borderRightWidth,10),H=parseInt(T.borderBottomWidth,10),z=0,B=0,K="offsetWidth"in M?M.offsetWidth-M.clientWidth-L-D:0,Q="offsetHeight"in M?M.offsetHeight-M.clientHeight-W-H:0;if(u===M)z="start"===o?F:"end"===o?F-m:"nearest"===o?b(h,h+m,m,W,H,h+F,h+F+y,y):F-m/2,B="start"===a?k:"center"===a?k-f/2:"end"===a?k-f:b(v,v+f,f,L,D,v+k,v+k+E,E),z=Math.max(0,z+h),B=Math.max(0,B+v);else{z="start"===o?F-R-W:"end"===o?F-V+H+Q:"nearest"===o?b(R,V,I,W,H+Q,F,F+y,y):F-(R+I/2)+Q/2,B="start"===a?k-q-L:"center"===a?k-(q+N/2)+K/2:"end"===a?k-S+D+K:b(q,S,N,L,D+K,k,k+E,E);var U=M.scrollLeft,Y=M.scrollTop;F+=Y-(z=Math.max(0,Math.min(Y+z,M.scrollHeight-I+Q))),k+=U-(B=Math.max(0,Math.min(U+B,M.scrollWidth-N+K)))}P.push({el:M,top:z,left:B})}return P}function y(e){return e===Object(e)&&0!==Object.keys(e).length}const E=function(e,t){var r=!e.ownerDocument.documentElement.contains(e);if(y(t)&&"function"===typeof t.behavior)return t.behavior(r?[]:A(e,t));if(!r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:y(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,o=e.top,a=e.left;n.scroll&&r?n.scroll({top:o,left:a,behavior:t}):(n.scrollTop=o,n.scrollLeft=a)}))}(A(e,n),n.behavior)}};function w(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function C(e,t){if(e.length){var r=e.join("_");return t?"".concat(t,"_").concat(r):r}}function O(e){return w(e).join("_")}function x(e){var t=(0,u.mN)(),r=(0,o.A)(t,1)[0],a=l.useRef({}),i=l.useMemo((function(){return e||(0,n.A)((0,n.A)({},r),{__INTERNAL__:{itemRef:function(e){return function(t){var r=O(e);t?a.current[r]=t:delete a.current[r]}}},scrollToField:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=C(w(e),i.__INTERNAL__.name),o=r?document.getElementById(r):null;o&&E(o,(0,n.A)({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:function(e){var t=O(e);return a.current[t]}})}),[e,r]);return[i]}var F=r(87063),k=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},P=function(e,t){var r,i=l.useContext(F.A),d=l.useContext(s.QO),m=d.getPrefixCls,v=d.direction,p=d.form,h=e.name,g=e.prefixCls,b=e.className,A=void 0===b?"":b,y=e.size,E=void 0===y?i:y,w=e.form,C=e.colon,O=e.labelAlign,P=e.labelCol,j=e.wrapperCol,M=e.hideRequiredMark,_=e.layout,I=void 0===_?"horizontal":_,N=e.scrollToFirstError,R=e.requiredMark,S=e.onFinishFailed,V=k(e,["prefixCls","className","size","form","colon","labelAlign","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed"]),q=(0,l.useMemo)((function(){return void 0!==R?R:p&&void 0!==p.requiredMark?p.requiredMark:!M}),[M,R,p]),T=m("form",g),L=c()(T,(r={},(0,a.A)(r,"".concat(T,"-").concat(I),!0),(0,a.A)(r,"".concat(T,"-hide-required-mark"),!1===q),(0,a.A)(r,"".concat(T,"-rtl"),"rtl"===v),(0,a.A)(r,"".concat(T,"-").concat(E),E),r),A),W=x(w),D=(0,o.A)(W,1)[0],H=D.__INTERNAL__;H.name=h;var z=(0,l.useMemo)((function(){return{name:h,labelAlign:O,labelCol:P,wrapperCol:j,vertical:"vertical"===I,colon:C,requiredMark:q,itemRef:H.itemRef}}),[h,O,P,j,I,C,q]);l.useImperativeHandle(t,(function(){return D}));return l.createElement(F.c,{size:E},l.createElement(f.Provider,{value:z},l.createElement(u.Ay,(0,n.A)({id:h},V,{onFinishFailed:function(e){S&&S(e),N&&e.errorFields.length&&D.scrollToField(e.errorFields[0].name)},form:D,className:L}))))};const j=l.forwardRef(P);var M=r(82284),_=r(60436),I=r(19853),N=r.n(I),R=r(25149),S=r(13758),V=r(28821),q=r(29592),T=r(5753),L=r(37745),W=r.n(L),D=r(30227),H=r(38097),z=r(8376),B=r(75932),K=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const Q=function(e){var t=e.prefixCls,r=e.label,i=e.htmlFor,u=e.labelCol,s=e.labelAlign,d=e.colon,m=e.required,v=e.requiredMark,p=e.tooltip,h=(0,H.n)("Form"),g=(0,o.A)(h,1)[0];return r?l.createElement(f.Consumer,{key:"label"},(function(e){var o,f,h=e.vertical,b=e.labelAlign,A=e.labelCol,y=e.colon,E=u||A||{},w=s||b,C="".concat(t,"-item-label"),O=c()(C,"left"===w&&"".concat(C,"-left"),E.className),x=r,F=!0===d||!1!==y&&!1!==d;F&&!h&&"string"===typeof r&&""!==r.trim()&&(x=r.replace(/[:|\uff1a]\s*$/,""));var k=function(e){return e?"object"!==(0,M.A)(e)||l.isValidElement(e)?{title:e}:e:null}(p);if(k){var P=k.icon,j=void 0===P?l.createElement(W(),null):P,_=K(k,["icon"]),I=l.createElement(B.A,_,l.cloneElement(j,{className:"".concat(t,"-item-tooltip")}));x=l.createElement(l.Fragment,null,x,I)}"optional"!==v||m||(x=l.createElement(l.Fragment,null,x,l.createElement("span",{className:"".concat(t,"-item-optional")},(null===g||void 0===g?void 0:g.optional)||(null===(f=z.A.Form)||void 0===f?void 0:f.optional))));var N=c()((o={},(0,a.A)(o,"".concat(t,"-item-required"),m),(0,a.A)(o,"".concat(t,"-item-required-mark-optional"),"optional"===v),(0,a.A)(o,"".concat(t,"-item-no-colon"),!F),o));return l.createElement(D.A,(0,n.A)({},E,{className:O}),l.createElement("label",{htmlFor:i,className:N,title:"string"===typeof r?r:""},x))})):null};var U=r(50741),Y=r.n(U),X=r(76407),$=r.n(X),G=r(67723),J=r.n(G),Z=r(48338),ee=r.n(Z),te=r(28801),re=r(13709),ne=r(44210);var oe=[];function ae(e){var t=e.errors,r=void 0===t?oe:t,n=e.help,i=e.onDomErrorVisibleChange,u=(0,ne.A)(),s=l.useContext(v),d=s.prefixCls,f=s.status,m=function(e,t,r){var n=l.useRef({errors:e,visible:!!e.length}),o=(0,ne.A)(),a=function(){var r=n.current.visible,a=!!e.length,l=n.current.errors;n.current.errors=e,n.current.visible=a,r!==a?t(a):(l.length!==e.length||l.some((function(t,r){return t!==e[r]})))&&o()};return l.useEffect((function(){if(!r){var e=setTimeout(a,10);return function(){return clearTimeout(e)}}}),[e]),r&&a(),[n.current.visible,n.current.errors]}(r,(function(e){e&&Promise.resolve().then((function(){null===i||void 0===i||i(!0)})),u()}),!!n),p=(0,o.A)(m,2),h=p[0],g=p[1],b=(0,re.A)((function(){return g}),h,(function(e,t){return t})),A=l.useState(f),y=(0,o.A)(A,2),E=y[0],w=y[1];l.useEffect((function(){h&&f&&w(f)}),[h,f]);var C="".concat(d,"-item-explain");return l.createElement(te.A,{motionDeadline:500,visible:h,motionName:"show-help",onLeaveEnd:function(){null===i||void 0===i||i(!1)},motionAppear:!0,removeOnLeave:!0},(function(e){var t=e.className;return l.createElement("div",{className:c()(C,(0,a.A)({},"".concat(C,"-").concat(E),E),t),key:"help"},b.map((function(e,t){return l.createElement("div",{key:t,role:"alert"},e)})))}))}var le={success:J(),warning:ee(),error:$(),validating:Y()};const ie=function(e){var t=e.prefixCls,r=e.status,o=e.wrapperCol,a=e.children,i=e.help,u=e.errors,s=e.onDomErrorVisibleChange,d=e.hasFeedback,m=e.validateStatus,p=e.extra,h="".concat(t,"-item"),g=l.useContext(f),b=o||g.wrapperCol||{},A=c()("".concat(h,"-control"),b.className);l.useEffect((function(){return function(){s(!1)}}),[]);var y=m&&le[m],E=d&&y?l.createElement("span",{className:"".concat(h,"-children-icon")},l.createElement(y,null)):null,w=(0,n.A)({},g);return delete w.labelCol,delete w.wrapperCol,l.createElement(f.Provider,{value:w},l.createElement(D.A,(0,n.A)({},b,{className:A}),l.createElement("div",{className:"".concat(h,"-control-input")},l.createElement("div",{className:"".concat(h,"-control-input-content")},a),E),l.createElement(v.Provider,{value:{prefixCls:t,status:r}},l.createElement(ae,{errors:u,help:i,onDomErrorVisibleChange:s})),p&&l.createElement("div",{className:"".concat(h,"-extra")},p)))};var ce=r(12701),ue=r(8073),se=r.n(ue);var de=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},fe=((0,q.P)("success","warning","error","validating",""),l.memo((function(e){return e.children}),(function(e,t){return e.value===t.value&&e.update===t.update})));const me=function(e){var t=e.name,r=e.fieldKey,i=e.noStyle,v=e.dependencies,p=e.prefixCls,h=e.style,g=e.className,b=e.shouldUpdate,A=e.hasFeedback,y=e.help,E=e.rules,O=e.validateStatus,x=e.children,F=e.required,k=e.label,P=e.messageVariables,j=e.trigger,I=void 0===j?"onChange":j,q=e.validateTrigger,L=e.hidden,W=de(e,["name","fieldKey","noStyle","dependencies","prefixCls","style","className","shouldUpdate","hasFeedback","help","rules","validateStatus","children","required","label","messageVariables","trigger","validateTrigger","hidden"]),D=(0,l.useRef)(!1),H=(0,l.useContext)(s.QO).getPrefixCls,z=(0,l.useContext)(f),B=z.name,K=z.requiredMark,U=(0,l.useContext)(m).updateItemErrors,Y=l.useState(!!y),X=(0,o.A)(Y,2),$=X[0],G=X[1],J=function(e){var t=l.useState(e),r=(0,o.A)(t,2),n=r[0],a=r[1],i=(0,l.useRef)(null),c=(0,l.useRef)([]),u=(0,l.useRef)(!1);return l.useEffect((function(){return function(){u.current=!0,se().cancel(i.current)}}),[]),[n,function(e){u.current||(null===i.current&&(c.current=[],i.current=se()((function(){i.current=null,a((function(e){var t=e;return c.current.forEach((function(e){t=e(t)})),t}))}))),c.current.push(e))}]}({}),Z=(0,o.A)(J,2),ee=Z[0],te=Z[1],re=(0,l.useContext)(R.A).validateTrigger,ne=void 0!==q?q:re;function oe(e){D.current||G(e)}var ae=function(e){return null===e&&(0,T.A)(!1,"Form.Item","`null` is passed as `name` property"),!(void 0===e||null===e)}(t),le=(0,l.useRef)([]);l.useEffect((function(){return function(){D.current=!0,U(le.current.join("__SPLIT__"),[])}}),[]);var ue=H("form",p),me=i?U:function(e,t){te((function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return N()(r[e],t)?r:(0,n.A)((0,n.A)({},r),(0,a.A)({},e,t))}))},ve=function(){var e=l.useContext(f).itemRef,t=l.useRef({});return function(r,n){var o=n&&"object"===(0,M.A)(n)&&n.ref,a=r.join("_");return t.current.name===a&&t.current.originRef===o||(t.current.name=a,t.current.originRef=o,t.current.ref=(0,S.K4)(e(r),o)),t.current.ref}}();function pe(t,r,o,u){var s,f;if(i&&!L)return t;var v,p=[];Object.keys(ee).forEach((function(e){p=[].concat((0,_.A)(p),(0,_.A)(ee[e]||[]))})),void 0!==y&&null!==y?v=w(y):(v=o?o.errors:[],v=[].concat((0,_.A)(v),(0,_.A)(p)));var b="";void 0!==O?b=O:(null===o||void 0===o?void 0:o.validating)?b="validating":(null===(f=null===o||void 0===o?void 0:o.errors)||void 0===f?void 0:f.length)||p.length?b="error":(null===o||void 0===o?void 0:o.touched)&&(b="success");var E=(s={},(0,a.A)(s,"".concat(ue,"-item"),!0),(0,a.A)(s,"".concat(ue,"-item-with-help"),$||y),(0,a.A)(s,"".concat(g),!!g),(0,a.A)(s,"".concat(ue,"-item-has-feedback"),b&&A),(0,a.A)(s,"".concat(ue,"-item-has-success"),"success"===b),(0,a.A)(s,"".concat(ue,"-item-has-warning"),"warning"===b),(0,a.A)(s,"".concat(ue,"-item-has-error"),"error"===b),(0,a.A)(s,"".concat(ue,"-item-is-validating"),"validating"===b),(0,a.A)(s,"".concat(ue,"-item-hidden"),L),s);return l.createElement(V.A,(0,n.A)({className:c()(E),style:h,key:"row"},(0,d.A)(W,["colon","extra","getValueFromEvent","getValueProps","hasFeedback","help","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","normalize","preserve","required","tooltip","validateFirst","validateStatus","valuePropName","wrapperCol"])),l.createElement(Q,(0,n.A)({htmlFor:r,required:u,requiredMark:K},e,{prefixCls:ue})),l.createElement(ie,(0,n.A)({},e,o,{errors:v,prefixCls:ue,status:b,onDomErrorVisibleChange:oe,validateStatus:b}),l.createElement(m.Provider,{value:{updateItemErrors:me}},t)))}var he="function"===typeof x,ge=(0,l.useRef)(0);if(ge.current+=1,!ae&&!he&&!v)return pe(x);var be={};return"string"===typeof k&&(be.label=k),P&&(be=(0,n.A)((0,n.A)({},be),P)),l.createElement(u.D0,(0,n.A)({},e,{messageVariables:be,trigger:I,validateTrigger:ne,onReset:function(){oe(!1)}}),(function(o,a,c){var u=a.errors,s=w(t).length&&a?a.name:[],d=C(s,B);if(i){if(le.current=(0,_.A)(s),r){var f=Array.isArray(r)?r:[r];le.current=[].concat((0,_.A)(s.slice(0,-1)),(0,_.A)(f))}U(le.current.join("__SPLIT__"),u)}var m=void 0!==F?F:!(!E||!E.some((function(e){if(e&&"object"===(0,M.A)(e)&&e.required)return!0;if("function"===typeof e){var t=e(c);return t&&t.required}return!1}))),p=(0,n.A)({},o),h=null;if((0,T.A)(!(b&&v),"Form.Item","`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies."),Array.isArray(x)&&ae)(0,T.A)(!1,"Form.Item","`children` is array of render props cannot have `name`."),h=x;else if(he&&(!b&&!v||ae))(0,T.A)(!(!b&&!v),"Form.Item","`children` of render props only work with `shouldUpdate` or `dependencies`."),(0,T.A)(!ae,"Form.Item","Do not use `name` with `children` of render props since it's not a field.");else if(!v||he||ae)if((0,ce.zO)(x)){(0,T.A)(void 0===x.props.defaultValue,"Form.Item","`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");var g=(0,n.A)((0,n.A)({},x.props),p);g.id||(g.id=d),(0,S.f3)(x)&&(g.ref=ve(s,x)),new Set([].concat((0,_.A)(w(I)),(0,_.A)(w(ne)))).forEach((function(e){g[e]=function(){for(var t,r,n,o,a,l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];null===(n=p[e])||void 0===n||(t=n).call.apply(t,[p].concat(i)),null===(a=(o=x.props)[e])||void 0===a||(r=a).call.apply(r,[o].concat(i))}})),h=l.createElement(fe,{value:p[e.valuePropName||"value"],update:ge.current},(0,ce.Ob)(x,g))}else he&&(b||v)&&!ae?h=x(c):((0,T.A)(!s.length,"Form.Item","`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."),h=x);else(0,T.A)(!1,"Form.Item","Must set `name` or use render props when `dependencies` is set.");return pe(h,d,a,m)}))};var ve=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const pe=function(e){var t=e.prefixCls,r=e.children,o=ve(e,["prefixCls","children"]);(0,T.A)(!!o.name,"Form.List","Miss `name` prop.");var a=(0,l.useContext(s.QO).getPrefixCls)("form",t);return l.createElement(u.B8,o,(function(e,t,o){return l.createElement(v.Provider,{value:{prefixCls:a,status:"error"}},r(e.map((function(e){return(0,n.A)((0,n.A)({},e),{fieldKey:e.key})})),t,{errors:o.errors}))}))};var he=j;he.Item=me,he.List=pe,he.ErrorList=ae,he.useForm=x,he.Provider=function(e){var t=(0,d.A)(e,["prefixCls"]);return l.createElement(u.Op,t)},he.create=function(){(0,T.A)(!1,"Form","antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.")};const ge=he}}]);
//# sourceMappingURL=593.f08608a8.chunk.js.map