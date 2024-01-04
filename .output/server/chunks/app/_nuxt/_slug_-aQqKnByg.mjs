import { g as useRoute, f as usePageLoaded, d as navigateTo, b as useRuntimeConfig } from '../server.mjs';
import { u as useAsyncData } from './asyncData-8TKDAadi.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: pageData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "get_single_blog" + route.params.slug,
      () => $fetch(useRuntimeConfig().apiUrl + "/get_single_blog", {
        method: "POST",
        body: {
          slug: route.params.slug
          // locale: locale.value 多國語言要自帶
        }
      }),
      "$qFggIq0u6c"
    )), __temp = await __temp, __restore(), __temp);
    const pageloaded = usePageLoaded();
    if (pageData.value) {
      pageloaded.value = true;
    } else {
      navigateTo("/404");
    }
    console.log("pageData", pageData.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-single" }, _attrs))}><div class="container"><pre>${ssrInterpolate(unref(pageData))}</pre></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-aQqKnByg.mjs.map
