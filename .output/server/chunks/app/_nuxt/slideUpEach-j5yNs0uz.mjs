import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "slideUpEach",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    let textAry = [];
    props == null ? void 0 : props.text.split(" ").forEach((txt) => {
      textAry.push(txt);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "text-slideup",
        translate: "no",
        "data-scroll": ""
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(textAry), (txt, index) => {
        _push(`<div class="text-slideup__item">`);
        if (txt !== " ") {
          _push(`<span>${ssrInterpolate(txt)}</span>`);
        } else {
          _push(`<div>${ssrInterpolate("\xA0")}</div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/slideUpEach.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=slideUpEach-j5yNs0uz.mjs.map
