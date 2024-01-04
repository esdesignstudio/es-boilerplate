import { defineComponent, h, useSSRContext, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { l as useNuxtApp, _ as __nuxt_component_2$1, b as useRuntimeConfig } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link--vqOA1Bq.mjs';
import _sfc_main$4 from './nuxt-icon-SxrQCwNu.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
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

function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200 } = opts;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / duration);
  let _timer = null;
  let _throttle = null;
  const start = () => set(0);
  function set(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    clear();
    progress.value = at < 0 ? 0 : at;
    if (throttle && false) {
      _throttle = setTimeout(() => {
        isLoading.value = true;
      }, throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    clear();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_0 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    expose({
      progress,
      isLoading,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const _sfc_main$3 = {
  __name: "navigation",
  __ssrInlineRender: true,
  props: {
    template: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const navs = ref([
      {
        name: "Swiper",
        link: "/swiper"
      },
      {
        name: "Animation",
        link: "/animation"
      },
      {
        name: "Form",
        link: "/form"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navigation-main" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(navs), (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: _ctx.localePath(item.link),
          title: item.title
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/navigation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_nuxt_icon = _sfc_main$4;
  const _component_HeaderNavigation = __nuxt_component_2;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-index container" }, _attrs))}><div class="header-index__wrap">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "header-index__logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_nuxt_icon, { name: "logo" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_nuxt_icon, { name: "logo" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="header-index__navigation">`);
  _push(ssrRenderComponent(_component_HeaderNavigation, null, null, _parent));
  _push(`</div><div class="header-index__right">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.switchLocalePath("en")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>\u4E2D\u6587</span>`);
      } else {
        return [
          createVNode("span", null, "\u4E2D\u6587")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "dev",
  __ssrInlineRender: true,
  setup(__props) {
    const devSwitch = ref(false);
    const config = useRuntimeConfig().public;
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(config).env !== "uat") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "dev" }, _attrs))}><div class="${ssrRenderClass([{ "-active": unref(devSwitch) }, "dev__wrap container"])}"><div class="grid"><!--[-->`);
        ssrRenderList(12, (num) => {
          _push(`<div></div>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(8, (num) => {
          _push(`<div></div>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(4, (num) => {
          _push(`<div></div>`);
        });
        _push(`<!--]--></div></div><div class="dev__switch"><span>Column \u986F\u793A</span><i></i><button type="button" class="${ssrRenderClass({ "-active": !unref(devSwitch) })}">OFF</button><button type="button" class="${ssrRenderClass({ "-active": unref(devSwitch) })}">ON</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/dev.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLoadingIndicator = __nuxt_component_0;
  const _component_Header = __nuxt_component_1;
  const _component_NuxtPage = __nuxt_component_2$1;
  const _component_PageDev = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "wrapper",
    class: "wrapper"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent));
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main data-scroll-container>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_PageDev, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-8JLNLKVa.mjs.map
