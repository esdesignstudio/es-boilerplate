import{_ as q}from"./nuxt-link.rwUoIyTF.js";import{N as t,O as n,R as o,G as g,a1 as h,H as i,P as m,Q as v,E as D,a0 as C,a5 as A,w as S,a6 as $,u as _,a7 as j,U as F,a2 as G,a8 as U}from"./swiper-vue.c-VtKikt.js";import{a as P,d as z,u as H,n as N,b as Q}from"./entry.fqAVKusY.js";import{_ as I}from"./index.cn_w3V-O.js";import{u as J}from"./asyncData.yfQ7PWFL.js";import"./_plugin-vue_export-helper.x3n3nnut.js";const K={class:"blog-category"},M={__name:"blogCategory",props:{data:{type:Object,default:{}}},setup(l){return(s,r)=>{const c=q;return t(),n("div",K,[o("nav",null,[o("ul",null,[(t(!0),n(g,null,h(l.data,(e,u)=>(t(),n("li",{key:u},[i(c,{to:"/blog-category/"+e.slug},{default:m(()=>[D(v(e.name),1)]),_:2},1032,["to"])]))),128))])])])}}},W=M,X={class:"pagination"},Y=["onClick"],Z=["textContent"],ee={__name:"pagination",props:{data:{type:Object,default:{}}},emits:["pagechange"],setup(l,{emit:s}){P();const r=s,c=e=>{r("pagechange",e.slug.split("=")[1])};return(e,u)=>(t(),n("div",X,[o("ul",null,[(t(!0),n(g,null,h(l.data.links,a=>(t(),n("li",{key:a.label,class:C({active:a.active})},[o("button",{onClick:f=>c(a),class:C({"-hide":a.slug===!1,"-prev":a.label==="prev","-next":a.label==="next"})},[o("p",{textContent:v(a.label)},null,8,Z)],10,Y)],2))),128))])]))}},te=ee,ae={class:"blog-archive"},ne={class:"container"},oe=o("h1",null,"全部",-1),se={class:"blog-archive__wrap"},de={__name:"index",async setup(l){let s,r;const c=P();z();const{data:e,pending:u,refresh:a}=([s,r]=A(()=>J("get_archive_blog-all",()=>$fetch(Q().apiUrl+"/get_archive_blog",{method:"POST",body:{page:c.query.page||1,posts_per_page:4}}))),s=await s,r(),s),f=d=>{N({path:"/blog",query:{...c.query,page:d}})};S(()=>c.query,async d=>{document.querySelectorAll(".card-product").forEach(y=>{y.classList.remove("is-inview")}),await setTimeout(()=>{a()},100)});const B=H();return e.value?B.value=!0:N("/404"),(d,y)=>{var b,x,k;const E=W,L=q,T=te,O=I,R=$("inview"),V=$("fade");return t(),n("div",ae,[o("div",ne,[oe,i(E,{data:(b=_(e))==null?void 0:b.categories},null,8,["data"]),o("ul",se,[i(j,{name:"list"},{default:m(()=>{var w;return[(t(!0),n(g,null,h((w=_(e))==null?void 0:w.posts,p=>U((t(),n("li",{key:p.id},[i(L,{to:"/blog/"+p.slug},{default:m(()=>[D(v(p.title),1)]),_:2},1032,["to"])])),[[R],[V]])),128))]}),_:1})]),(x=_(e))!=null&&x.paginations?(t(),F(T,{key:0,data:(k=_(e))==null?void 0:k.paginations,onPagechange:f},null,8,["data"])):G("",!0)]),i(O)])}}};export{de as default};
