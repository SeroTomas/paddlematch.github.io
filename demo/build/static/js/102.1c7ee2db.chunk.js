"use strict";(self.webpackChunkreservierungssystem_tennis=self.webpackChunkreservierungssystem_tennis||[]).push([[102],{82102:(e,s,r)=>{r.r(s),r.d(s,{GeneralSettingsPage:()=>R});var a=r(39998),n=r(42130),l=r(53593),i=r(78186),t=r(25389),o=r(65043),c=r(12361),d=r(17592),u=r(22768),m=r(24095),x=r(70579);function j(){const{config:{announcement:e},setConfig:s}=(0,o.useContext)(d.v),[r,a]=(0,o.useState)(),[n,j]=(0,o.useState)(!0),[h,A]=(0,m.g)(u.D9,s),[b]=l.A.useForm(),g=(0,o.useCallback)((e=>{b.resetFields(),a(!!e),j(!0)}),[b]);(0,o.useEffect)((()=>{g(e)}),[g,e]);const p=(0,o.useCallback)((e=>{a(e.target.checked)}),[]),f=(0,o.useCallback)((()=>{n&&j(!1)}),[n]),C=(0,o.useCallback)((e=>{let{announcement:s}=e;A(null,{announcement:r?s:""},(()=>g(r&&s)))}),[r,A,g]);return(0,x.jsxs)(l.A,{form:b,layout:"vertical",onFinish:C,onFieldsChange:f,children:[(0,x.jsx)(l.A.Item,{name:"announcement",label:(0,x.jsx)(i.A,{checked:r,onChange:p,children:"Publicar anuncio"}),initialValue:e,children:(0,x.jsx)(t.A.TextArea,{disabled:!r})}),(0,x.jsx)(l.A.Item,{children:(0,x.jsx)(c.G,{apiState:h,disableReset:n,onReset:g})})]})}var h=r(26032),A=r(64435),b=r(89421),g=r(39470),p=r(79822),f=r(59266),C=r(61966),k=r(75337);const v={court:"CourtConfigForm_court__t7koI",courtIdInput:"CourtConfigForm_courtIdInput__FOBwJ"};function I(){const{courts:e,setCourts:s}=(0,o.useContext)(d.v),[r,a]=(0,o.useState)(!0),[n,i]=(0,m.g)(u.kI,s),[j]=l.A.useForm(),I=(0,o.useMemo)((()=>({courts:e})),[e]),y=(0,o.useCallback)((()=>{j.resetFields(),a(!0)}),[j]);(0,o.useEffect)((()=>{j.resetFields()}),[j,e]);const q=(0,o.useCallback)((()=>{const s=j.getFieldValue("courts")||[];let r=0;for(let a of[...e,...s])r=Math.max(a.courtId,r);return r+1}),[e,j]),F=(0,o.useCallback)((()=>{r&&a(!1)}),[r]),S=(0,o.useCallback)((e=>{let{courts:s}=e;h.A.confirm({title:"\xa1Peligro!",icon:(0,x.jsx)(g.A,{}),centered:!0,content:(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:"El cambio de asiento puede provocar la p\xe9rdida de las reservas existentes."}),(0,x.jsx)("p",{children:"Todas las reservas que se produzcan durante un per\xedodo de bloqueo se cancelar\xe1n autom\xe1ticamente."}),(0,x.jsx)("p",{children:"Esto tambi\xe9n se aplica a la eliminaci\xf3n de un lugar."}),(0,x.jsx)("p",{children:"Todos los usuarios afectados por una cancelaci\xf3n ser\xe1n informados por correo electr\xf3nico."})]}),okText:"Confirmar",okType:"danger",cancelText:"Cancelar",onOk(){i(null,s,y)}})}),[i,y]);return(0,x.jsxs)(l.A,{autoComplete:"off",form:j,initialValues:I,layout:"vertical",onFieldsChange:F,onFinish:S,children:[(0,x.jsx)(l.A.List,{name:"courts",children:(e,s)=>{let{add:r,remove:a,move:n}=s;return(0,x.jsxs)(x.Fragment,{children:[e.map(((e,s)=>(0,x.jsx)("div",{className:v.court,children:(0,x.jsxs)(A.A,{children:[(0,o.createElement)(l.A.Item,{...e,key:"courtId",label:"ID",name:[e.name,"courtId"],fieldKey:[e.fieldKey,"courtId"]},(0,x.jsx)(t.A,{disabled:!0,bordered:!1,className:v.courtIdInput})),(0,o.createElement)(l.A.Item,{...e,key:"name",label:"Name",name:[e.name,"name"],fieldKey:[e.fieldKey,"name"],rules:[{required:!0,message:"Nombre requerido"}]},(0,x.jsx)(t.A,{placeholder:"Ejemplo: club aeronautico"})),(0,x.jsx)(l.A.Item,{label:"Desplazar",children:(0,x.jsxs)(A.A,{children:[(0,x.jsx)(b.A,{onClick:()=>n(s,s-1),icon:(0,x.jsx)(p.A,{})}),(0,x.jsx)(b.A,{onClick:()=>n(s,s+1),icon:(0,x.jsx)(f.A,{})}),(0,x.jsx)(b.A,{onClick:()=>a(e.name),danger:!0,icon:(0,x.jsx)(C.A,{})})]})})]})},e.key))),(0,x.jsx)(l.A.Item,{children:(0,x.jsx)(b.A,{type:"dashed",onClick:()=>r({courtId:q()}),block:!0,icon:(0,x.jsx)(k.A,{}),children:"Agregar lugar"})},"add")]})}}),(0,x.jsx)(l.A.Item,{children:(0,x.jsx)(c.G,{apiState:n,disableReset:r,onReset:y})})]})}var y=r(15625),q=r(37042),F=r(39194);const S="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",_=Array.from(Array(25)).reduce(((e,s,r)=>(e[r]=r%24,e)),{});function E(){const{config:e,setConfig:s}=(0,o.useContext)(d.v),[r,a]=(0,o.useState)(!0),[n,i]=(0,m.g)(u.D9,s),[j]=l.A.useForm(),h=(0,o.useCallback)((()=>{j.resetFields(),a(!0)}),[j]);(0,o.useEffect)((()=>{h()}),[e,h]);const A=(0,o.useCallback)((()=>{r&&a(!1)}),[r]),b=(0,o.useCallback)((e=>{i(null,e,h)}),[i,h]);return(0,x.jsxs)(l.A,{form:j,layout:"vertical",initialValues:e,onFinish:b,onFieldsChange:A,children:[(0,x.jsx)(l.A.Item,{name:"url",label:"URL del sistema de reservas",rules:[{required:!0,message:"La URL es obligatoria"}],children:(0,x.jsx)(t.A,{})}),(0,x.jsx)(l.A.Item,{name:"orgName",label:"Nombre del club",rules:[{required:!0,message:"Se requiere el nombre del club"}],children:(0,x.jsx)(t.A,{})}),(0,x.jsx)(l.A.Item,{name:"timeZone",label:(0,x.jsxs)("span",{children:["Huso horario (",(0,x.jsx)("a",{href:S,target:"_blank",rel:"noreferrer",children:"Nombres de usos horario"}),")"]}),rules:[{required:!0,message:"Se requiere zona horaria"},{validator:(e,s)=>(0,F.wr)(s)?Promise.resolve():Promise.reject("Zona horaria no v\xe1lida")}],children:(0,x.jsx)(t.A,{})}),(0,x.jsx)(l.A.Item,{name:"serverMail",label:"Direcci\xf3n de correo electr\xf3nico utilizado",rules:[{type:"email",message:"Beispiel: mustermann@web.de"},{required:!0,message:"E-Mail es necesario"}],children:(0,x.jsx)(t.A,{})}),(0,x.jsx)(l.A.Item,{name:"reservationDaysInAdvance",label:"N\xfamero de d\xedas que se pueden reservar con antelaci\xf3n",rules:[{required:!0,message:"Se requiere informaci\xf3n"}],children:(0,x.jsx)(y.A,{min:1,max:1825})}),(0,x.jsx)(l.A.Item,{name:"reservationMaxActiveCount",label:"N\xfamero m\xe1ximo de reservas abiertas que un usuario puede realizar",rules:[{required:!0,message:"Se requiere informaci\xf3n"}],children:(0,x.jsx)(y.A,{min:1})}),(0,x.jsx)(l.A.Item,{name:"visibleHours",label:"Horarios mostrados en el calendario.",rules:[{required:!0,message:"Se requiere informaci\xf3n"}],children:(0,x.jsx)(q.A,{marks:_,range:!0,min:0,max:24})}),(0,x.jsx)(l.A.Item,{children:(0,x.jsx)(c.G,{apiState:n,disableReset:r,onReset:h})})]})}const N={wrapper:"GeneralSettingsPage_wrapper__qtyFA"};function R(){return(0,x.jsxs)("div",{className:N.wrapper,children:[(0,x.jsx)("h1",{children:"Anuncio"}),(0,x.jsx)(j,{}),(0,x.jsx)(a.A,{}),(0,x.jsx)("h1",{children:"Gesti\xf3n de lugares"}),(0,x.jsx)(n.A.Text,{children:"El orden determina la visualizaci\xf3n en el calendario de reservas."}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)(I,{}),(0,x.jsx)(a.A,{}),(0,x.jsx)("h1",{children:"Ajustes b\xe1sicos"}),(0,x.jsx)(E,{})]})}},12361:(e,s,r)=>{r.d(s,{G:()=>c});var a=r(47419),n=r(11645),l=r(89421),i=r(93954),t=r(70579);function o(e){let{apiState:s}=e;const{success:r,loading:a,error:n}=s;return a?(0,t.jsx)(i.E,{loading:!0,text:"Guardar"}):n?(0,t.jsx)(i.E,{error:!0,text:"No se pudo guardar"}):r?(0,t.jsx)(i.E,{success:!0,text:"Guardado"}):null}function c(e){let{apiState:s={},disableReset:r,onSave:i,onReset:c}=e;return(0,t.jsxs)(a.A,{gutter:[16,16],align:"middle",children:[(0,t.jsx)(n.A,{children:(0,t.jsx)(l.A,{disabled:s.loading,onClick:i,type:"primary",htmlType:"submit",children:"Guardar"})}),(0,t.jsx)(n.A,{children:(0,t.jsx)(l.A,{disabled:s.loading||r,onClick:c,htmlType:"reset",children:"Restablecer los valores predeterminados"})}),(0,t.jsx)(n.A,{children:(0,t.jsx)(o,{apiState:s})})]})}}}]);
//# sourceMappingURL=102.1c7ee2db.chunk.js.map