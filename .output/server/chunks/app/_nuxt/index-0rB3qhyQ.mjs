import { _ as __nuxt_component_0 } from './nuxt-link--vqOA1Bq.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext, ref, unref, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';

const _sfc_main$1 = {
  __name: "navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const navs = ref([
      {
        name: "Home",
        link: "/"
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-navigation" }, _attrs))}><ul><!--[-->`);
      ssrRenderList(unref(navs), (item, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.switchLocalePath("en")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u8A9E\u8A00\u5207\u63DB `);
          } else {
            return [
              createTextVNode(" \u8A9E\u8A00\u5207\u63DB ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/navigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_FooterNavigation = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="container"><div class="footer__wrap grid"><div class="footer__logo col-1-4-mobile">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \xA9 2024 ES Design `);
      } else {
        return [
          createTextVNode(" \xA9 2024 ES Design ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer__navigation col-4-13-mobile">`);
  _push(ssrRenderComponent(_component_FooterNavigation, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=index-0rB3qhyQ.mjs.map
