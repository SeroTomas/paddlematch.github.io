"use strict";(self.webpackChunkreservierungssystem_tennis=self.webpackChunkreservierungssystem_tennis||[]).push([[160],{19160:(e,r,a)=>{a.r(r),a.d(r,{UserManagementPage:()=>g});var i=a(75932),t=a(89421),n=a(26032),s=a(64435),d=a(79833),o=a(67407),l=a(39470),c=a(75388),m=a(61966),u=a(65043),x=a(22768),v=a(52603),h=a(49613);const j={wrapper:"UserManagementPage_wrapper__84uH4",spacer:"UserManagementPage_spacer__P-ZA5"};var k=a(24095),p=a(70579);function g(){const{user:{userId:e}}=(0,u.useContext)(h.I),[r,a]=(0,u.useState)([]),[g]=(0,k.g)(x.x1,a,!0),[I,y]=(0,k.g)(x.Ff,a),[A,C]=(0,k.g)(x.Kl,a),f=(0,u.useMemo)((()=>r.map((e=>({...e,key:e.userId})))),[r]),w=(0,u.useCallback)((e=>{y({path:{userId:e}},{userId:e})}),[y]),b=(0,u.useCallback)(((e,r)=>{C({path:{userId:e}},{userId:e,admin:r})}),[C]),R=[{title:"UserId",dataIndex:"userId",key:"userId",width:"5%",sorter:(e,r)=>e.userId<r.userId?-1:1},{title:"Admin",dataIndex:"admin",key:"admin",width:"10%",sorter:(e,r)=>e.admin===r.admin?0:e.admin?-1:1,render:(r,a)=>(0,p.jsxs)("div",{children:[a.admin?"Si":"No",(0,p.jsx)(i.A,{title:"Cambiar estado de administrador",children:(0,p.jsx)(t.A,{disabled:a.userId===e,type:"link",icon:(0,p.jsx)(o.A,{}),onClick:()=>{n.A.confirm({title:a.admin?"\xbfRevocar derechos de administrador?":"\xbfConceder derechos de administrador?",icon:(0,p.jsx)(l.A,{}),content:(0,p.jsxs)("div",{children:["El usuario",(0,p.jsx)("br",{}),(0,p.jsxs)("strong",{children:[a.name," (",a.mail,")"]}),(0,p.jsx)("br",{}),"ser\xe1 a trav\xe9s de esta acci\xf3n ",a.admin?"degradado a un usuario normal.":"ascendido a administrador."]}),okText:a.admin?"retirar derechos":"Hazte administrador",okType:"danger",cancelText:"Cancelar",onOk(){b(a.userId,!a.admin)}})}})})]})},{title:"Name",dataIndex:"name",key:"name",width:"20%",sorter:(e,r)=>e.name.localeCompare(r.name)},{title:"E-Mail",dataIndex:"mail",key:"mail",width:"25%",sorter:(e,r)=>e.mail.localeCompare(r.mail)},{title:"Verificado",dataIndex:"verified",key:"verified",width:"5%",sorter:(e,r)=>e.verified===r.verified?0:e.verified?-1:1,render:(e,r)=>r.verified?"Si":"No"},{title:"\xdaltima actividad",dataIndex:"lastActivity",key:"lastActivity",width:"20%",sorter:(e,r)=>e.lastActivity-r.lastActivity,render:(e,r)=>{var a;return null===(a=r.lastActivity)||void 0===a?void 0:a.format("L LT")}},{title:"Reservas (abiertas)",dataIndex:"upcomingReservationCount",key:"upcomingReservationCount",width:"5%",sorter:(e,r)=>e.upcomingReservationCount-r.upcomingReservationCount},{title:"Reservas (totales)",dataIndex:"totalReservationCount",key:"totalReservationCount",width:"5%",sorter:(e,r)=>e.totalReservationCount-r.totalReservationCount},{title:"",key:"action",render:(r,a)=>(0,p.jsxs)(s.A,{children:[(0,p.jsx)(i.A,{title:"Enviar correo electr\xf3nico",children:(0,p.jsx)(t.A,{type:"link",icon:(0,p.jsx)(c.A,{}),disabled:a.userId===e,onClick:()=>{window.location.href="mailto:".concat(a.mail)}})}),(0,p.jsx)(i.A,{title:"Eliminar usuario",children:(0,p.jsx)(t.A,{type:"link",danger:!0,icon:(0,p.jsx)(m.A,{}),disabled:a.userId===e,onClick:()=>{n.A.confirm({title:"\xbfBorrar usuario?",icon:(0,p.jsx)(l.A,{}),content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:"Esta acci\xf3n no se puede deshacer."}),(0,p.jsx)("div",{children:"Todos los datos y reservas ser\xe1n eliminados irrevocablemente."}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{children:(0,p.jsxs)("strong",{children:["Usuario: ",a.name,(0,p.jsx)("br",{}),"E-Mail: ",a.mail]})})]}),okText:"Borrar permanentemente",okType:"danger",cancelText:"Cancelar",onOk(){w(a.userId)}})}})})]},a._id)}];return g.error||I.error||A.error?(0,p.jsx)(v.Y,{}):(0,p.jsxs)("div",{className:j.wrapper,children:[(0,p.jsx)("h1",{children:"Gesti\xf3n de usuarios"}),(0,p.jsx)(d.A,{columns:R,dataSource:f,loading:g.loading||I.loading||A.loading,scroll:{x:1300}})]})}}}]);
//# sourceMappingURL=160.cc77d4a0.chunk.js.map