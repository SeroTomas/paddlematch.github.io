"use strict";(self.webpackChunkreservierungssystem_tennis=self.webpackChunkreservierungssystem_tennis||[]).push([[616],{65698:(e,a,l)=>{l.r(a),l.d(a,{CalendarPage:()=>C});var r=l(65043),s=l(68937);const t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};var n=l(22172),o=function(e,a){return r.createElement(n.A,Object.assign({},e,{ref:a,icon:t}))};o.displayName="LeftOutlined";const i=r.forwardRef(o);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};var d=function(e,a){return r.createElement(n.A,Object.assign({},e,{ref:a,icon:c}))};d.displayName="RightOutlined";const u=r.forwardRef(d);var _=l(89421),v=l(44423),h=l(60446),m=l.n(h);const p={wrapper:"WeekPicker_wrapper__g0Ntv",middlePicker:"WeekPicker_middlePicker__Lc9eQ",outerThisWeekButton:"WeekPicker_outerThisWeekButton__St9Zb",picker:"WeekPicker_picker__j3eFG",leftButton:"WeekPicker_leftButton__NHNFY",rightButton:"WeekPicker_rightButton__jfFXG"};var b=l(70579);function k(e){let{date:a,onChange:l}=e;const[s,t]=(0,r.useState)(!1),n=(0,r.useCallback)((()=>{t(!0)}),[]),o=(0,r.useCallback)((e=>{l(a.subtract(7,"days")),t(!1)}),[a,l]),c=(0,r.useCallback)((e=>{l(a.add(7,"days")),t(!1)}),[a,l]),d=(0,r.useCallback)((e=>{l(m()()),t(!1)}),[l]),h=(0,r.useCallback)((e=>{l(e),t(!1)}),[l]),k=(0,r.useCallback)((e=>{t(e)}),[]);return(0,b.jsxs)("div",{className:p.wrapper,children:[(0,b.jsxs)("div",{className:p.middlePicker,children:[(0,b.jsx)(v.l,{className:p.picker,picker:"week",open:s,inputReadOnly:!0,allowClear:!1,bordered:!0,value:a,onOpenChange:k,format:"[Semana] w (YYYY)",onClick:n,onChange:h,renderExtraFooter:()=>(0,b.jsx)(_.A,{onClick:d,type:"link",children:"Esta semana"})}),(0,b.jsx)(_.A,{className:p.outerThisWeekButton,onClick:d,type:"link",children:"Fijar el d\xeda de hoy"})]}),(0,b.jsxs)(_.A,{className:p.leftButton,onClick:o,children:[(0,b.jsx)(i,{}),"Semana pasada"]}),(0,b.jsxs)(_.A,{className:p.rightButton,onClick:c,children:["Pr\xf3xima semana",(0,b.jsx)(u,{})]})]})}const f={wrapper:"CalendarPage_wrapper__WFTTx",alert:"CalendarPage_alert__anVOt"};var x=l(60665);function C(){const e=(0,x.z)("day"),[a,l]=(0,r.useState)(null),t=(0,r.useCallback)((e=>{l(e)}),[]);return(0,b.jsxs)("div",{className:f.wrapper,children:[(0,b.jsx)(k,{date:a||e,onChange:t}),(0,b.jsx)(s.P,{selectedDate:a||e})]})}},68937:(e,a,l)=>{l.d(a,{P:()=>T});var r=l(65043),s=l(39194),t=l(89421),n=l(40989),o=l(49613),i=l(18465),c=l.n(i);var d=l(70579);const u=c().bind({cell:"SlotCell_cell__U9m4Y",enabled:"SlotCell_enabled__CRdR7",alwaysClickable:"SlotCell_alwaysClickable__tq72i",slot:"SlotCell_slot__f+POP",text:"SlotCell_text__XLbmV",singleLine:"SlotCell_singleLine__6juE4",reserved:"SlotCell_reserved__tA6XT",mine:"SlotCell_mine__GKPXx",loading:"SlotCell_loading__rTLBj",load:"SlotCell_load__W07uH"}),_=32,v=3;function h(e){let{alwaysClickable:a=!1,baseRowSpan:l,courtId:s,courtName:t,from:i,to:c,rowIndex:h,rows:m,disabled:p=!1,loading:b=!1,onClick:k,reservation:f}=e;const{user:x}=(0,r.useContext)(o.I),C=(0,r.useCallback)((()=>{(a||!p&&(null===f||void 0===f?void 0:f.type)!==n.P.DISABLE)&&k({courtId:s,from:i,to:c,reservation:f})}),[a,s,i,c,p,k,f]);let y=l;if(f)if(f.from.isBefore(i,"hour")&&0!==h)y=0;else{const e=(m[m.length-1].to.hour()||24)-i.hour();if(i.isSame(f.to,"day")){const e=f.to.diff(i,"hour");y=0;for(let a=h;a<h+e;++a)y+=m[a].span}else y=e}return 0===y?null:(0,d.jsx)("div",{className:u({alwaysClickable:a,cell:!0,enabled:!p&&(null===f||void 0===f?void 0:f.type)!==n.P.DISABLE}),style:{padding:v},onClick:C,children:(0,d.jsx)("div",{className:u({slot:!0,loading:b,reserved:(null===f||void 0===f?void 0:f.type)===n.P.NORMAL,mine:x&&(null===x||void 0===x?void 0:x.userId)===(null===f||void 0===f?void 0:f.userId)}),style:{height:_*y+2*v*(y-1)},"data-free-text":"Disponible","data-free-text-hover":"".concat(i.hour()," hs, ").concat(t),children:(0,d.jsx)("div",{className:u({text:!0,singleLine:1===y}),children:f&&(f.type===n.P.DISABLE?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:"No disponible"}),(0,d.jsx)("div",{children:f.text})]}):(0,d.jsx)("div",{children:f.text||f.name}))})})})}var m=l(17592);const p={wrapper:"DayTable_wrapper__FE7i1",col:"DayTable_col__ppzlm",cols:"DayTable_cols__vhFvq",date:"DayTable_date__sBl2I",today:"DayTable_today__Vtukv",court:"DayTable_court__kWavh",body:"DayTable_body__DoZXe",blur:"DayTable_blur__euYJS",infoOverlay:"DayTable_infoOverlay__0Her3",linkButton:"DayTable_linkButton__i6pAu",adminAction:"DayTable_adminAction__FqHq1"};var b=l(60665);const k=c().bind(p);function f(e){let{courts:a,date:l,loading:n,onDisableCourtClick:i,onSlotClick:c,reservationDaysInAdvance:u,reservations:_}=e;const{config:{visibleHours:v}}=(0,r.useContext)(m.v),{user:f}=(0,r.useContext)(o.I),[x,C]=(0,r.useState)(!1);(0,r.useEffect)((()=>C(!1)),[f]);const y=(0,b.z)("hour"),g=(0,r.useMemo)((()=>y.isSame(l,"day")),[l,y]),j=(0,r.useMemo)((()=>l.isAfter(y.add(u,"day"),"day")),[l,y,u]),w=(0,r.useMemo)((()=>l.subtract(u,"day").format("L")),[l,u]),S=!x&&j,N=(0,r.useMemo)((()=>(0,s.fr)(l,v)),[l,v]),A=(0,r.useCallback)((()=>C(!0)),[]);return(0,d.jsxs)("div",{className:p.wrapper,children:[(0,d.jsxs)("div",{className:p.date,children:[g&&(0,d.jsx)("span",{className:p.today,children:"Hoy"}),l.format("dd[\xa0]L")]}),(0,d.jsx)("div",{className:p.cols,children:a.map((e=>{let{courtId:a,name:l}=e;return(0,d.jsx)("div",{className:p.court,children:l},a)}))}),(0,d.jsxs)("div",{className:k("body","cols"),children:[a.map((e=>{let{courtId:a,name:r}=e;return(0,d.jsxs)("div",{className:k({col:!0,blur:S}),children:[N.map(((e,l)=>{let{from:t,to:o,span:i}=e;return(0,d.jsx)(h,{alwaysClickable:null===f||void 0===f?void 0:f.admin,courtId:a,courtName:r,rowIndex:l,rows:N,from:t,to:o,baseRowSpan:i,disabled:t.isBefore(y,"hour"),loading:n,onClick:c,reservation:(0,s.kp)(_,t,o,a)},t)})),(null===f||void 0===f?void 0:f.admin)&&(0,d.jsx)("div",{className:p.adminAction,children:(0,d.jsx)(t.A,{type:"link",onClick:()=>(e=>{i({courtId:e,from:l.hour(0),to:l.hour(24)})})(a),children:"Bloquear"})})]},a)})),S&&(0,d.jsxs)("div",{className:p.infoOverlay,children:[(0,d.jsxs)("div",{children:["Se puede reservar",(0,d.jsx)("br",{}),"desde ",w]}),(null===f||void 0===f?void 0:f.admin)&&(0,d.jsxs)(t.A,{className:p.linkButton,type:"link",onClick:A,children:["Haz una reserva de todos modos",(0,d.jsx)("br",{}),"(Trainer/Admin)"]})]})]})]})}var x=l(52603);const C={wrapper:"HoursTable_wrapper__yOQXz",hour:"HoursTable_hour__3tczi",to:"HoursTable_to__AhXB8",highlight:"HoursTable_highlight__YtFxg"},y=c().bind(C);function g(e){let{highlightHour:a}=e;const{config:{visibleHours:l}}=(0,r.useContext)(m.v),t=(0,b.z)("hour"),n=(0,r.useMemo)((()=>(0,s.XD)(l)),[l]);return(0,d.jsx)("div",{className:C.wrapper,children:n.map((e=>(0,d.jsxs)("div",{className:y({hour:!0,highlight:a&&t.hour()===e}),children:[e,"hs",(0,d.jsx)("br",{}),(0,d.jsxs)("span",{className:C.to,children:["hasta ",(e+1)%24,"hs"]})]},e)))})}var j=l(80759),w=l(42785),S=l(22768);const N={wrapper:"ReservationCalendar_wrapper__801MH",tableWrapper:"ReservationCalendar_tableWrapper__9wqud",tableScroller:"ReservationCalendar_tableScroller__LAC47"};var A=l(24095),D=l(22935);const I=7;function T(e){let{kiosk:a=!1,selectedDate:l}=e;const{courts:s,config:{reservationDaysInAdvance:t}}=(0,r.useContext)(m.v),o=(0,b.z)("day"),[i,c]=(0,r.useState)(),u=(0,r.useRef)(),[_,v]=(0,r.useState)(null),[h,p]=(0,A.g)(S.Mf,v),k=(0,r.useCallback)((()=>p({query:{start:l.startOf("week").toISOString(),end:l.endOf("week").toISOString()}})),[l,p]);(0,D.w)(k,w.r.RESERVATIONS),(0,r.useEffect)((()=>{v(null),k()}),[k]);const C=(0,r.useMemo)((()=>Array.from(Array(I)).map(((e,a)=>l.startOf("week").add(a,"day")))),[l]);(0,r.useEffect)((()=>{if(u.current)if(l.isSame(o,"week")){const e=Math.abs(o.startOf("week").diff(o,"day"));requestAnimationFrame((()=>{u.current.scrollLeft=u.current.scrollWidth/I*e}))}else requestAnimationFrame((()=>{u.current.scrollLeft=0}))}),[l,o]);const y=(0,r.useCallback)((e=>{a||c(e)}),[a]),T=(0,r.useCallback)((e=>{c({...e,type:n.P.DISABLE})}),[]),B=(0,r.useCallback)((()=>{c(null)}),[]);return h.error?(0,d.jsx)("div",{className:N.tableWrapper,children:(0,d.jsx)(x.Y,{})}):(0,d.jsxs)("div",{className:N.wrapper,children:[(0,d.jsxs)("div",{className:N.tableWrapper,children:[(0,d.jsx)(g,{highlightHour:l.isSame(o,"week")}),(0,d.jsx)("div",{className:N.tableScroller,ref:u,children:C.map((e=>(0,d.jsx)(f,{courts:s,date:e,loading:!_,onDisableCourtClick:T,onSlotClick:y,reservationDaysInAdvance:t,reservations:_},e)))})]}),i&&(0,d.jsx)(j.A,{initialCourtId:null===i||void 0===i?void 0:i.courtId,initialFrom:null===i||void 0===i?void 0:i.from,initialTo:null===i||void 0===i?void 0:i.to,reservation:null===i||void 0===i?void 0:i.reservation,type:null===i||void 0===i?void 0:i.type,onFinish:B,setReservations:v})]})}}}]);
//# sourceMappingURL=616.8ae5bda1.chunk.js.map