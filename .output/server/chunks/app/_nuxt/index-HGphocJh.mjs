import { _ as __nuxt_component_0 } from './slideUpEach-j5yNs0uz.mjs';
import { _ as __nuxt_component_3 } from './index-0rB3qhyQ.mjs';
import { f as usePageLoaded, g as useRoute, b as useRuntimeConfig } from '../server.mjs';
import { u as useHead } from './index-tbNGurtz.mjs';
import { u as useMetaReturn } from './meta-xmUFlQJ7.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link--vqOA1Bq.mjs';
import './_plugin-vue_export-helper-yVxbj29m.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/utc.js';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import '@formkit/dev';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const pageloaded = usePageLoaded();
    pageloaded.value = true;
    const route = useRoute();
    useHead({
      titleTemplate: useRuntimeConfig().public.siteName,
      // Home page usually use slogan or custom site name 
      meta: useMetaReturn({
        title: useRuntimeConfig().public.siteName,
        description: "\u8981\u63A5 API",
        image: "\u8981\u63A5 API",
        url: useRuntimeConfig().public.siteUrl + route.path
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsSlideUpEach = __nuxt_component_0;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-index" }, _attrs))}><div class="container"><div class="page-index__title"><h1>`);
      _push(ssrRenderComponent(_component_ElementsSlideUpEach, { text: "ES BOILERPLATE" }, null, _parent));
      _push(`</h1></div><div class="grid"><div class="page-index__img col-1-9-mobile"><img src="https://images.unsplash.com/photo-1703165805602-54276ce0cd6b?q=80&amp;w=1587&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></div><div class="page-index__text col-11-13-mobile"><p>The details are not the details. They make the design.</p><img src="https://images.unsplash.com/photo-1702314876402-8f64d97030a2?q=80&amp;w=1587&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-HGphocJh.mjs.map
