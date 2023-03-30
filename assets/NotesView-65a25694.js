import{o as n,f as i,g as t,d as P,i as U,a as q,c as C,b as I,s as J,v as d,w as _,j as M,n as L,h as e,m as a,p as K,x as V,t as B,F as O,k as F,y as Q,z as W,A as X,_ as Y}from"./index-bc7e954c.js";import{N as H}from"./NoteDisplay-97e44cdd.js";const ee={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},te=t("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),oe=t("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ne=[te,oe];function se(u,c){return n(),i("svg",ee,ne)}const le={name:"carbon-zoom-out",render:se},ae={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ie=t("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ce=t("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),re=[ie,ce];function de(u,c){return n(),i("svg",ae,re)}const _e={name:"carbon-zoom-in",render:de},ue={class:"h-full flex flex-col"},pe={key:0,class:"px-5 py-2 max-h-60 overflow-auto border-t border-gray-400 border-opacity-20"},he={class:"flex-none border-t border-gray-400 border-opacity-20"},me={class:"flex gap-1 items-center px-6 py-3"},ve=t("div",{class:"flex-auto"},null,-1),fe={class:"p2 text-center"},be=P({__name:"NotesView",setup(u){U(q);const c=C.titleTemplate.replace("%s",C.title||"Slidev");I({title:`Notes - ${c}`});const{isFullscreen:T,toggle:p}=Q,s=J("slidev-notes-font-size",18),l=d(()=>{var o;return((o=_.lastUpdate)==null?void 0:o.type)==="viewer"?_.viewerPage:_.page}),h=d(()=>M.find(o=>o.path===`${l.value}`)),r=d(()=>M.find(o=>o.path===`${l.value+1}`));function Z(){s.value=s.value+1}function j(){s.value=s.value-1}return(o,m)=>{var v,f,b,g,x,y,w,z,$,N,S,k;const A=W,R=X,D=_e,G=le;return n(),i(O,null,[t("div",{class:"fixed top-0 left-0 h-2px bg-teal-500 transition-all duration-500",style:L({width:`${(e(l)-1)/e(F)*100}%`})},null,4),t("div",ue,[t("div",{class:"px-5 flex-auto h-full overflow-auto",style:L({fontSize:`${e(s)}px`})},[a(H,{note:(b=(f=(v=e(h))==null?void 0:v.meta)==null?void 0:f.slide)==null?void 0:b.note,"note-html":(y=(x=(g=e(h))==null?void 0:g.meta)==null?void 0:x.slide)==null?void 0:y.noteHTML,placeholder:`No notes for Slide ${e(l)}.`},null,8,["note","note-html","placeholder"])],4),e(r)?(n(),i("div",pe,[a(H,{class:"opacity-50",note:($=(z=(w=e(r))==null?void 0:w.meta)==null?void 0:z.slide)==null?void 0:$.note,"note-html":(k=(S=(N=e(r))==null?void 0:N.meta)==null?void 0:S.slide)==null?void 0:k.noteHTML,placeholder:"No notes for next slide."},null,8,["note","note-html"])])):K("v-if",!0),t("div",he,[t("div",me,[t("button",{class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...E)=>e(p)&&e(p)(...E))},[e(T)?(n(),V(A,{key:0})):(n(),V(R,{key:1}))]),t("button",{class:"slidev-icon-btn",onClick:Z},[a(D)]),t("button",{class:"slidev-icon-btn",onClick:j},[a(G)]),ve,t("div",fe,B(e(l))+" / "+B(e(F)),1)])])])],64)}}}),ye=Y(be,[["__file","/home/runner/work/GeneralStubbs.github.io/GeneralStubbs.github.io/node_modules/@slidev/client/internals/NotesView.vue"]]);export{ye as default};
