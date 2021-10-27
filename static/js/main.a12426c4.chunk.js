(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{36:function(e,c,t){},38:function(e,c,t){},58:function(e,c,t){},59:function(e,c,t){},65:function(e,c,t){},66:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(27),r=t.n(a),i=(t(36),t(16)),l=t.n(i),o=t(28),d=t(8),j=(t(38),t(0)),b=function(e){var c=e.brand;return Object(j.jsx)("nav",{className:"nav-bar display flex justify-center py-3",children:Object(j.jsx)("div",{className:"w-96",children:Object(j.jsx)("a",{href:"/",children:c})})})},u=t(29),x=t.n(u),f=(t(58),t(10)),h=(t(59),function(e){var c=e.characters,t=e.loading,n=e.filtroBusqueda;return t?Object(j.jsx)("h1",{className:"display flex justify-center",children:Object(j.jsx)("i",{className:"fa-10x fas fa-sync fa-spin"})}):Object(j.jsxs)("div",{className:"display flex flex-col",children:[Object(j.jsx)("div",{className:"buscador",children:Object(j.jsx)("input",{className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"buscar",onChange:n,name:"buscar",type:"text",placeholder:"Buscar"})}),Object(j.jsx)("div",{className:"fondo w-full display flex flex-wrap justify-evenly",children:c.map((function(e){return Object(j.jsx)(f.b,{to:"/personaje/".concat(e.id),children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"card-container p-3 w-80 border border-black display flex flex-col rounded-lg bg-indigo-500 text-white hover:bg-indigo-700 cursor-pointer",children:[Object(j.jsxs)("div",{className:"head-container rounded-lg display flex flex-col text-center mb-4 border border-black",children:[Object(j.jsx)("img",{className:"rounded-lg",src:e.image,alt:""}),Object(j.jsx)("span",{className:"font-black font-mono my-3",children:e.name})]}),Object(j.jsxs)("div",{className:"body-container text-center display flex flex-col",children:[Object(j.jsxs)("span",{children:["Specie: ",e.species]}),Object(j.jsxs)("span",{children:["Gender: ",e.gender]})]})]})})},e.id)}))})]})}),O=function(e){var c=e.prev,t=e.next,n=e.onPrevious,s=e.onNext;return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"display flex justify-center list-none bg-black",children:[c?Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){n()},className:"border border-black bg-blue-200 rounded p-2 m-2 hover:bg-blue-400",children:"Previous"})}):null,t?Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){s()},className:"border border-black bg-blue-200 rounded p-2 m-2 hover:bg-blue-400",children:"Next"})}):null]})})},m=t(2),p=(t(65),function(e){var c=e.characters,t=Object(m.f)().id,s=Object(n.useState)(null),a=Object(d.a)(s,2),r=a[0],i=a[1],l=Object(n.useState)(!0),o=Object(d.a)(l,2),b=o[0],u=o[1];return Object(n.useEffect)((function(){var e=t?Number(t):null,n=c.find((function(c){return c.id===e}));i(n),u(!1)}),[t,c]),b?Object(j.jsx)("h1",{className:"display flex justify-center",children:Object(j.jsx)("i",{className:"fa-10x fas fa-sync fa-spin"})}):b||r?Object(j.jsx)("div",{className:"background md:w-full lg:w-full display flex flex-col items-center justify-center h-screen",children:Object(j.jsxs)("div",{className:"card lg:w-3/12 text-white display flex flex-col font-mono rounded-lg items-center text-center border border-black",children:[Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("h1",{className:"my-5 text-3xl break-words",children:r.name}),Object(j.jsx)("img",{className:"image rounded-full mx-6 border border-black",src:r.image,alt:"profile:".concat(r.image)})]}),Object(j.jsxs)("div",{className:"pb-5",children:[Object(j.jsxs)("h1",{className:"my-3",children:["Gender: ",r.gender]}),Object(j.jsxs)("h1",{className:"my-3",children:["Location: ",r.location.name]}),Object(j.jsxs)("h1",{className:"my-3",children:["Origen: ",r.origin.name]}),Object(j.jsxs)("h1",{className:"my-3",children:["Specie: ",r.species]}),Object(j.jsxs)("h1",{className:"my-3",children:["Origen: ",r.status]})]})]})}):Object(j.jsx)("h1",{children:"Personaje no encontrado"})});var g=function(){var e=Object(n.useState)([]),c=Object(d.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)({}),r=Object(d.a)(a,2),i=r[0],u=r[1],g=Object(n.useState)(!0),v=Object(d.a)(g,2),y=v[0],N=v[1],k=Object(n.useState)([]),w=Object(d.a)(k,2),S=w[0],B=w[1],C=Object(n.useState)(""),P=Object(d.a)(C,2),E=(P[0],P[1]),J=function(e){var c=S.filter((function(c){if(c.name.toString().toLowerCase().includes(e.toLowerCase()))return c}));s(c)},L=function(){var e=Object(o.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(c).then((function(e){s(e.data.results),u(e.data.info),N(!1),B(e.data.results)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),q=function(){L(i.next)},G=function(){L(i.prev)};return Object(n.useEffect)((function(){L("https://rickandmortyapi.com/api/character")}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f.a,{children:Object(j.jsxs)(m.c,{children:[Object(j.jsxs)(m.a,{path:"/",exact:!0,children:[Object(j.jsx)(b,{brand:Object(j.jsx)("img",{src:"https://i.postimg.cc/SNBBs7J4/rm.png",alt:""})}),Object(j.jsxs)("div",{className:"principal",children:[Object(j.jsx)(O,{prev:i.prev,next:i.next,onPrevious:G,onNext:q}),Object(j.jsx)(h,{characters:t,loading:y,filtroBusqueda:function(e){E(e.target.value),J(e.target.value)}}),Object(j.jsx)(O,{prev:i.prev,next:i.next,onPrevious:G,onNext:q})]})]}),Object(j.jsx)(m.a,{path:"/personaje/:id",children:Object(j.jsx)(p,{characters:t})})]})})})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.a12426c4.chunk.js.map