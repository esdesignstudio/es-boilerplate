import { _ as __nuxt_component_0 } from './slideUpEach-j5yNs0uz.mjs';
import { _ as __nuxt_component_3 } from './index-0rB3qhyQ.mjs';
import { f as usePageLoaded, g as useRoute, b as useRuntimeConfig } from '../server.mjs';
import { reactive, ref, resolveComponent, mergeProps, withCtx, createVNode, unref, isRef, useSSRContext } from 'vue';
import { u as useHead } from './index-tbNGurtz.mjs';
import { u as useMetaReturn } from './meta-xmUFlQJ7.mjs';
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

const esNotification = (data) => {
  if ((void 0).querySelector(".esNotification")) {
    return false;
  }
  const div = (void 0).createElement("div");
  div.innerHTML = '<div class="inner"><h2>' + data.title + "</h2><p>" + data.message + "</p></div>";
  div.classList.add("esNotification");
  div.classList.add(data.type);
  (void 0).body.appendChild(div);
  setTimeout(() => {
    const noti = (void 0).querySelector(".esNotification");
    noti.classList.add("out");
    setTimeout(() => {
      noti.remove();
    }, 200);
  }, 2e3);
};
const _sfc_main = {
  __name: "form",
  __ssrInlineRender: true,
  setup(__props) {
    const pageloaded = usePageLoaded();
    pageloaded.value = true;
    const taglistData = reactive({
      selected: [],
      options: [
        {
          label: "\u9078\u98051",
          value: "option1"
        },
        {
          label: "\u9078\u98052",
          value: "option2"
        },
        {
          label: "\u9078\u98053",
          value: "option3"
        },
        {
          label: "\u9078\u98054",
          value: "option4"
        },
        {
          label: "\u9078\u98055",
          value: "option5"
        },
        {
          label: "\u9078\u98056",
          value: "option6"
        }
      ]
    });
    const dropdownSelected = ref();
    ref();
    const fakeFetch = {
      post: () => new Promise((r) => setTimeout(r, 2e3))
    };
    const submitHandler = async (data) => {
      await fakeFetch.post();
      esNotification({
        type: "success",
        title: "\u8868\u55AE\u9001\u51FA",
        message: "\u8868\u55AE\u5DF2\u9001\u51FA"
      });
      console.log("submitHandler", data);
    };
    const pageTitle = ref("Form display");
    const route = useRoute();
    useHead({
      title: pageTitle,
      meta: useMetaReturn({
        title: pageTitle,
        description: "\u8981\u63A5 API",
        image: "\u8981\u63A5 API",
        url: useRuntimeConfig().public.siteUrl + route.path
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsSlideUpEach = __nuxt_component_0;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "display-form" }, _attrs))}><div class="container"><h1>`);
      _push(ssrRenderComponent(_component_ElementsSlideUpEach, { text: "Form display" }, null, _parent));
      _push(`<b data-scroll>\u8868\u55AE\u7BC4\u4F8B</b></h1><div class="display-form__content grid"><div class="col-1-7-mobile"><h2>\u57FA\u672C\u8868\u55AE</h2>`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "form",
        id: "login-submit",
        "incomplete-message": "\u8ACB\u586B\u5BEB\u4EE5\u4E0A\u6B04\u4F4D",
        actions: false,
        onSubmit: submitHandler,
        "submit-attrs": { wrapperClass: "es-button" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              label: "\u96FB\u5B50\u90F5\u4EF6",
              type: "text",
              name: "username",
              autocomplete: "",
              validation: "required|email",
              placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u90F5\u4EF6"
            }, null, _parent2, _scopeId));
            _push2(`<div class="member-login__password"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "password",
              name: "password",
              label: "\u5BC6\u78BC",
              autocomplete: "",
              validation: "required|length:6|matches:/[^a-zA-Z]/",
              "validation-visibility": "live"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "checkbox",
              label: "\u8A18\u5F97\u6211",
              name: "remember",
              value: false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "radio",
              name: "email_pref",
              label: "\u55AE\u9078\u5217\u8868",
              options: { daily: "Daily", weekly: "Weekly", monthly: "Monthly" }
            }, null, _parent2, _scopeId));
            _push2(`<div class="member-login__form-button"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "submit",
              label: "\u767B\u5165"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_FormKit, {
                label: "\u96FB\u5B50\u90F5\u4EF6",
                type: "text",
                name: "username",
                autocomplete: "",
                validation: "required|email",
                placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u90F5\u4EF6"
              }),
              createVNode("div", { class: "member-login__password" }, [
                createVNode(_component_FormKit, {
                  type: "password",
                  name: "password",
                  label: "\u5BC6\u78BC",
                  autocomplete: "",
                  validation: "required|length:6|matches:/[^a-zA-Z]/",
                  "validation-visibility": "live"
                })
              ]),
              createVNode(_component_FormKit, {
                type: "checkbox",
                label: "\u8A18\u5F97\u6211",
                name: "remember",
                value: false
              }),
              createVNode(_component_FormKit, {
                type: "radio",
                name: "email_pref",
                label: "\u55AE\u9078\u5217\u8868",
                options: { daily: "Daily", weekly: "Weekly", monthly: "Monthly" }
              }),
              createVNode("div", { class: "member-login__form-button" }, [
                createVNode(_component_FormKit, {
                  type: "submit",
                  label: "\u767B\u5165"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-7-13-mobile"><h2>\u5BA2\u88FD\u5316\u529F\u80FD\u7BC4\u4F8B</h2>`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "taglist",
        title: "Multiple Select",
        cleartext: "\u4E0D\u9650\u5236",
        modelValue: unref(taglistData).selected,
        "onUpdate:modelValue": ($event) => unref(taglistData).selected = $event,
        options: unref(taglistData).options
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormKit, {
        type: "dropdown",
        title: "Radio Select",
        cleartext: "\u4E0D\u9650\u5236",
        modelValue: unref(dropdownSelected),
        "onUpdate:modelValue": ($event) => isRef(dropdownSelected) ? dropdownSelected.value = $event : null,
        options: unref(taglistData).options
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-RfgTgL2P.mjs.map
