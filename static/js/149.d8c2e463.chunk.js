"use strict";(self.webpackChunkPaddleMatch=self.webpackChunkPaddleMatch||[]).push([[149],{12361:(e,r,s)=>{s.d(r,{G:()=>c});var a=s(47419),t=s(11645),n=s(89421),o=s(93954),i=s(70579);function l(e){let{apiState:r}=e;const{success:s,loading:a,error:t}=r;return a?(0,i.jsx)(o.E,{loading:!0,text:"Guardar"}):t?(0,i.jsx)(o.E,{error:!0,text:"No se pudo guardar"}):s?(0,i.jsx)(o.E,{success:!0,text:"Guardado"}):null}function c(e){let{apiState:r={},disableReset:s,onSave:o,onReset:c}=e;return(0,i.jsxs)(a.A,{gutter:[16,16],align:"middle",children:[(0,i.jsx)(t.A,{children:(0,i.jsx)(n.A,{disabled:r.loading,onClick:o,type:"primary",htmlType:"submit",children:"Guardar"})}),(0,i.jsx)(t.A,{children:(0,i.jsx)(n.A,{disabled:r.loading||s,onClick:c,htmlType:"reset",children:"Restablecer los valores predeterminados"})}),(0,i.jsx)(t.A,{children:(0,i.jsx)(l,{apiState:r})})]})}},15520:(e,r,s)=>{s.d(r,{s:()=>x});var a=s(53593),t=s(92135),n=s(25389),o=s(78186),i=s(89421),l=s(65043),c=s(93954),d=s(12361),u=s(17592);const m={form:"RegisterForm_form__ky1VH"};var p=s(70579);function x(e){let{apiState:r={},onFinish:s,user:x}=e;const{templates:{systemTos:f}}=(0,l.useContext)(u.v),[v]=a.A.useForm(),[h,g]=(0,l.useState)(!0),b=r.loading,A=(0,l.useRef)(null),j=(0,l.useCallback)((()=>{v.resetFields(),g(!0)}),[v]);(0,l.useEffect)((()=>{j()}),[j,x]),(0,l.useEffect)((()=>{r.success&&j(),r.error&&(A.current=v.getFieldValue("mail"),v.validateFields())}),[v,r,j]);const y=(0,l.useCallback)((()=>{h&&g(!1)}),[h]);return(0,p.jsxs)(a.A,{form:v,className:m.form,layout:"vertical",onFinish:s,onFieldsChange:y,children:[r.error&&(0,p.jsx)(a.A.Item,{children:(0,p.jsx)(t.A,{type:"error",message:"Registro fallido."})}),(0,p.jsx)(a.A.Item,{label:"Nombre",name:"name",initialValue:null===x||void 0===x?void 0:x.name,rules:[{required:!0,message:"El nombre es requerido"},{pattern:/^[\u00c0-\u017eA-Za-z0-9.]{1}[\u00c0-\u017eA-Za-z0-9\s.]{3,18}[\u00c0-\u017eA-Za-z0-9.]{1}$/,message:"Entre 5 y 20 caracteres compuestos por: letras, n\xfameros, puntos y espacios (excepto al principio/final)"}],children:(0,p.jsx)(n.A,{autoComplete:"name",disabled:b})}),(0,p.jsx)(a.A.Item,{name:"mail",label:"E-Mail",initialValue:null===x||void 0===x?void 0:x.mail,rules:[{type:"email",message:"Ejemplo: xxxxx@xxxxx.com"},{required:!0,message:"La direcci\xf3n de correo electr\xf3nico es obligatoria."},{required:!0,validator(e,s){var a;return 400===r.status&&"mail already registered"===(null===(a=r.error)||void 0===a?void 0:a.message)&&s===A.current?Promise.reject("El correo electr\xf3nico ya est\xe1 registrado."):Promise.resolve()}}],children:(0,p.jsx)(n.A,{autoComplete:"email",disabled:b})}),(0,p.jsx)(a.A.Item,{label:x?"Nueva contrase\xf1a":"Contrase\xf1a",name:"password",rules:[{required:!0,validator:(e,r)=>(null===r||void 0===r?void 0:r.length)>0&&(null===r||void 0===r?void 0:r.length)<8||!x&&!r?Promise.reject("Se requieren al menos 8 caracteres"):Promise.resolve()}],children:(0,p.jsx)(n.A.Password,{autoComplete:"new-password",placeholder:x?"No cambiar":"Minimo 8 caracteres",disabled:b})}),(0,p.jsx)(a.A.Item,{label:"confirmar Contrase\xf1a",name:"password-confirm",dependencies:["password"],rules:[e=>{let{getFieldValue:r}=e;return{required:!0,validator(e,s){const a=r("password");return a===s||!a&&!s?Promise.resolve():Promise.reject("\xa1Las contrase\xf1as no coinciden!")}}}],children:(0,p.jsx)(n.A.Password,{autoComplete:"new-password",placeholder:x?"No cambiar":"Minimo 8 caracteres",disabled:b})}),!x&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Condiciones de uso"}),(0,p.jsx)("div",{dangerouslySetInnerHTML:{__html:f.body}})]}),(0,p.jsx)(a.A.Item,{name:"Aceptar",valuePropName:"checked",rules:[{validator:(e,r)=>r?Promise.resolve():Promise.reject("Necesario aceptar los t\xe9rminos y condiciones")}],children:(0,p.jsx)(o.A,{disabled:b,children:"Acepto los t\xe9rminos y condiciones"})})]}),(0,p.jsx)(a.A.Item,{children:x?(0,p.jsx)(d.G,{apiState:r,disableReset:h,onReset:j}):(0,p.jsx)(i.A,{type:"primary",htmlType:"submit",disabled:b,children:(0,p.jsx)(c.E,{loading:b,text:b?"Registrando...":"Registrarse"})})})]})}},90149:(e,r,s)=>{s.r(r),s.d(r,{RegisterPage:()=>m});var a=s(59557),t=s(62582),n=s(65043),o=s(15520),i=s(49613),l=s(22768);const c={cta:"RegisterPage_cta__yLaxc",wrapper:"RegisterPage_wrapper__fHBa0",loginItem:"RegisterPage_loginItem__fEdsp"};var d=s(24095),u=s(70579);function m(){const{setUser:e}=(0,n.useContext)(i.I),[r,s]=(0,d.g)(l.OB,e),m=(0,a.W6)(),p=(0,n.useCallback)((e=>{let{name:r,mail:a,password:t}=e;s(null,{name:r,mail:a,password:t},(()=>{m.push("/verify-mail/send")}))}),[s,m]);return(0,u.jsxs)("div",{className:c.wrapper,children:[(0,u.jsxs)("h1",{children:["Registrarse",(0,u.jsxs)("div",{className:c.loginItem,children:[(0,u.jsx)("span",{children:"\xbfYa est\xe1s registrado? "}),(0,u.jsx)(t.N_,{to:"/login",children:"Iniciar sesion"})]})]}),(0,u.jsx)(o.s,{apiState:r,onFinish:p})]})}},92135:(e,r,s)=>{s.d(r,{A:()=>G});var a=s(58168),t=s(64467),n=s(5544),o=s(65043),i=s(7181),l=s.n(i),c=s(59413),d=s.n(c),u=s(44864),m=s.n(u),p=s(98417),x=s.n(p),f=s(11249),v=s.n(f),h=s(67723),g=s.n(h),b=s(48338),A=s.n(b),j=s(64759),y=s.n(j),C=s(76407),E=s.n(C),w=s(28801),N=s(64600),k=s.n(N),P=s(25055);var S=s(23029),I=s(92901),_=s(85501),R=s(88293),M=function(e){(0,_.A)(s,e);var r=(0,R.A)(s);function s(){var e;return(0,S.A)(this,s),(e=r.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,I.A)(s,[{key:"componentDidCatch",value:function(e,r){this.setState({error:e,info:r})}},{key:"render",value:function(){var e=this.props,r=e.message,s=e.description,a=e.children,t=this.state,n=t.error,i=t.info,l=i&&i.componentStack?i.componentStack:null,c="undefined"===typeof r?(n||"").toString():r,d="undefined"===typeof s?l:s;return n?o.createElement(G,{type:"error",message:c,description:o.createElement("pre",null,d)}):a}}]),s}(o.Component),O=s(12701),F=function(e,r){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(s[a[t]]=e[a[t]])}return s},L={success:g(),info:y(),error:E(),warning:A()},q={success:d(),info:x(),error:v(),warning:m()},T=function(e){var r,s=e.description,i=e.prefixCls,c=e.message,d=e.banner,u=e.className,m=void 0===u?"":u,p=e.style,x=e.onMouseEnter,f=e.onMouseLeave,v=e.onClick,h=e.afterClose,g=e.showIcon,b=e.closable,A=e.closeText,j=F(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText"]),y=o.useState(!1),C=(0,n.A)(y,2),E=C[0],N=C[1],S=o.useRef(),I=o.useContext(P.QO),_=I.getPrefixCls,R=I.direction,M=_("alert",i),T=function(e){var r;N(!0),null===(r=j.onClose)||void 0===r||r.call(j,e)},G=!!A||b,H=function(){var e=j.type;return void 0!==e?e:d?"warning":"info"}(),V=!(!d||void 0!==g)||g,z=k()(M,"".concat(M,"-").concat(H),(r={},(0,t.A)(r,"".concat(M,"-with-description"),!!s),(0,t.A)(r,"".concat(M,"-no-icon"),!V),(0,t.A)(r,"".concat(M,"-banner"),!!d),(0,t.A)(r,"".concat(M,"-closable"),G),(0,t.A)(r,"".concat(M,"-rtl"),"rtl"===R),r),m),B=function(e){return Object.keys(e).reduce((function(r,s){return"data-"!==s.substr(0,5)&&"aria-"!==s.substr(0,5)&&"role"!==s||"data-__"===s.substr(0,7)||(r[s]=e[s]),r}),{})}(j);return o.createElement(w.A,{visible:!E,motionName:"".concat(M,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:h},(function(e){var r=e.className,n=e.style;return o.createElement("div",(0,a.A)({ref:S,"data-show":!E,className:k()(z,r),style:(0,a.A)((0,a.A)({},p),n),onMouseEnter:x,onMouseLeave:f,onClick:v,role:"alert"},B),V?function(){var e=j.icon,r=(s?q:L)[H]||null;return e?(0,O.fx)(e,o.createElement("span",{className:"".concat(M,"-icon")},e),(function(){return{className:k()("".concat(M,"-icon"),(0,t.A)({},e.props.className,e.props.className))}})):o.createElement(r,{className:"".concat(M,"-icon")})}():null,o.createElement("span",{className:"".concat(M,"-message")},c),o.createElement("span",{className:"".concat(M,"-description")},s),G?o.createElement("button",{type:"button",onClick:T,className:"".concat(M,"-close-icon"),tabIndex:0},A?o.createElement("span",{className:"".concat(M,"-close-text")},A):o.createElement(l(),null)):null)}))};T.ErrorBoundary=M;const G=T},11645:(e,r,s)=>{s.d(r,{A:()=>a});const a=s(30227).A},47419:(e,r,s)=>{s.d(r,{A:()=>a});const a=s(28821).A}}]);
//# sourceMappingURL=149.d8c2e463.chunk.js.map