import { _ as __nuxt_component_0$1 } from './nuxt-link--vqOA1Bq.mjs';
import { withAsyncContext, watch, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { g as useRoute, u as useRouter, f as usePageLoaded, d as navigateTo, b as useRuntimeConfig } from '../server.mjs';
import { _ as __nuxt_component_3 } from './index-0rB3qhyQ.mjs';
import { u as useAsyncData } from './asyncData-8TKDAadi.mjs';
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
import './_plugin-vue_export-helper-yVxbj29m.mjs';

const _sfc_main$2 = {
  __name: "blogCategory",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-category" }, _attrs))}><nav><ul><!--[-->`);
      ssrRenderList(__props.data, (cate, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog-category/" + cate.slug
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(cate.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(cate.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/blogCategory.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "pagination",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  emits: ["pagechange"],
  setup(__props, { emit: __emit }) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))}><ul><!--[-->`);
      ssrRenderList(__props.data.links, (page) => {
        _push(`<li class="${ssrRenderClass({ "active": page.active })}"><button class="${ssrRenderClass({
          "-hide": page.slug === false,
          "-prev": page.label === "prev",
          "-next": page.label === "next"
        })}"><p>${ssrInterpolate(page.label)}</p></button></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const { data: pageData, pending, refresh: refreshData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "get_archive_blog-all",
      () => $fetch(useRuntimeConfig().apiUrl + "/get_archive_blog", {
        method: "POST",
        body: {
          page: route.query.page || 1,
          posts_per_page: 4
          // locale: locale.value 多國語言要自帶
        }
      })
    )), __temp = await __temp, __restore(), __temp);
    const changePage = (page) => {
      navigateTo({
        path: "/blog",
        query: {
          ...route.query,
          page
        }
      });
    };
    watch(() => route.query, async (query) => {
      (void 0).querySelectorAll(".card-product").forEach((item) => {
        item.classList.remove("is-inview");
      });
      await setTimeout(() => {
        refreshData();
      }, 100);
    });
    const pageloaded = usePageLoaded();
    if (pageData.value) {
      pageloaded.value = true;
    } else {
      navigateTo("/404");
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_ElementsBlogCategory = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ElementsPagination = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      const _directive_inview = resolveDirective("inview");
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-archive" }, _attrs))}><div class="container"><h1>\u5168\u90E8</h1>`);
      _push(ssrRenderComponent(_component_ElementsBlogCategory, {
        data: (_a = unref(pageData)) == null ? void 0 : _a.categories
      }, null, _parent));
      _push(`<ul class="blog-archive__wrap"><!--[-->`);
      ssrRenderList((_b = unref(pageData)) == null ? void 0 : _b.posts, (post) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: post.id
        }, ssrGetDirectiveProps(_ctx, _directive_inview), ssrGetDirectiveProps(_ctx, _directive_fade)))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog/" + post.slug
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(post.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
      if ((_c = unref(pageData)) == null ? void 0 : _c.paginations) {
        _push(ssrRenderComponent(_component_ElementsPagination, {
          data: (_d = unref(pageData)) == null ? void 0 : _d.paginations,
          onPagechange: changePage
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-i-GKGnJR.mjs.map
