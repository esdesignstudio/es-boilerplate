import{_ as v}from"./slideUpEach.lrP84Ytk.js";import{_ as y}from"./index.cn_w3V-O.js";import{u as h,a as g,b as w}from"./entry.fqAVKusY.js";import{a as x}from"./esTools._TMGVSEE.js";import{u as V}from"./vue.f36acd1f.JwDnKHsX.js";import{u as F}from"./meta.zm2X-IGw.js";import{r as k,a as r,F as R,O as P,R as t,H as e,P as S,u as l,l as C,N as H}from"./swiper-vue.c-VtKikt.js";import"./nuxt-link.rwUoIyTF.js";import"./_plugin-vue_export-helper.x3n3nnut.js";const N={class:"display-form"},U={class:"container"},A=t("b",{"data-scroll":""},"表單範例",-1),B={class:"display-form__content grid"},E={class:"col-1-7-mobile"},M=t("h2",null,"基本表單",-1),q={class:"member-login__password"},D={class:"member-login__form-button"},I={class:"col-7-13-mobile"},K=t("h2",null,"客製化功能範例",-1),X={__name:"form",setup(T){const c=h();c.value=!0;const s=k({selected:[],options:[{label:"選項1",value:"option1"},{label:"選項2",value:"option2"},{label:"選項3",value:"option3"},{label:"選項4",value:"option4"},{label:"選項5",value:"option5"},{label:"選項6",value:"option6"}]}),n=r();r();const d={post:()=>new Promise(a=>setTimeout(a,2e3))},u=async a=>{await d.post(),x({type:"success",title:"表單送出",message:"表單已送出"}),console.log("submitHandler",a)},p=r("Form display"),_=g();return V({title:p,meta:F({title:p,description:"要接 API",image:"要接 API",url:w().public.siteUrl+_.path})}),(a,i)=>{const b=v,o=R("FormKit"),f=y;return H(),P("div",N,[t("div",U,[t("h1",null,[e(b,{text:"Form display"}),A]),t("div",B,[t("div",E,[M,e(o,{type:"form",id:"login-submit","incomplete-message":"請填寫以上欄位",actions:!1,onSubmit:u,"submit-attrs":{wrapperClass:"es-button"}},{default:S(()=>[e(o,{label:"電子郵件",type:"text",name:"username",autocomplete:"",validation:"required|email",placeholder:"請輸入電子郵件"}),t("div",q,[e(o,{type:"password",name:"password",label:"密碼",autocomplete:"",validation:"required|length:6|matches:/[^a-zA-Z]/","validation-visibility":"live"})]),e(o,{type:"checkbox",label:"記得我",name:"remember",value:!1}),e(o,{type:"radio",name:"email_pref",label:"單選列表",options:{daily:"Daily",weekly:"Weekly",monthly:"Monthly"}}),t("div",D,[e(o,{type:"submit",label:"登入"})])]),_:1})]),t("div",I,[K,e(o,{type:"taglist",title:"Multiple Select",cleartext:"不限制",modelValue:l(s).selected,"onUpdate:modelValue":i[0]||(i[0]=m=>l(s).selected=m),options:l(s).options},null,8,["modelValue","options"]),e(o,{type:"dropdown",title:"Radio Select",cleartext:"不限制",modelValue:l(n),"onUpdate:modelValue":i[1]||(i[1]=m=>C(n)?n.value=m:null),options:l(s).options},null,8,["modelValue","options"])])])]),e(f)])}}};export{X as default};
