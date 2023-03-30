import{d as _,i as d,a as u,u as h,b as p,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as b,n as v,j as x,o as r,k as y,l as k,m as N,p as S,q as w,_ as P}from"./index-bc7e954c.js";import{N as V}from"./NoteDisplay-97e44cdd.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},G=_({__name:"PresenterPrint",setup(M){d(u),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const l=f(()=>x.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(r(),n("div",{id:"page-root",style:v(a(w))},[t("div",j,[t("div",L,[t("h1",T,s(a(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(r(!0),n(g,null,b(a(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(y)),1),k(" "+s(e==null?void 0:e.title)+" ",1),z])]),N(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(l).length-1?(r(),n("hr",F)):S("v-if",!0)]))),128))])],4))}}),E=P(G,[["__file","/home/runner/work/GeneralStubbs.github.io/GeneralStubbs.github.io/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
