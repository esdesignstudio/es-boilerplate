import{v as f}from"./entry.fqAVKusY.js";import{d as m,a as _,a5 as p,y as d,N as h,O as x,a0 as v,u as r}from"./swiper-vue.c-VtKikt.js";const y=["innerHTML"],k=m({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(l){let s,t;const o=l,a=_("");let c=!1;async function i(){try{const n=await Object.assign({"/assets/icons/logo.svg":()=>f(()=>import("./logo.4_Wdg4PW.js"),__vite__mapDeps([]),import.meta.url).then(u=>u.default)})[`/assets/icons/${o.name}.svg`]();n.includes("stroke")&&(c=!0),a.value=n}catch{console.error(`[nuxt-icons] Icon '${o.name}' doesn't exist in 'assets/icons'`)}}return[s,t]=p(()=>i()),await s,t(),d(i),(e,n)=>(h(),x("span",{class:v(["nuxt-icon",{"nuxt-icon--fill":!e.filled,"nuxt-icon--stroke":r(c)&&!e.filled}]),innerHTML:r(a)},null,10,y))}});export{k as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}