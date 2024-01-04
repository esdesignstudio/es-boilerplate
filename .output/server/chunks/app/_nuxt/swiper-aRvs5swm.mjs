import { _ as __nuxt_component_0 } from './slideUpEach-j5yNs0uz.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_3 } from './index-0rB3qhyQ.mjs';
import { f as usePageLoaded } from '../server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { Parallax, Autoplay } from 'swiper/modules';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "swiper",
  __ssrInlineRender: true,
  setup(__props) {
    const pageloaded = usePageLoaded();
    pageloaded.value = true;
    const imgArray = ref([
      "https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1658988958556-72342117610f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1682845737939-a12169ff13cf?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1658988958556-72342117610f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1682845737939-a12169ff13cf?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsSlideUpEach = __nuxt_component_0;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-swiper" }, _attrs))}><div class="container"><h2 class="page-swiper__title">`);
      _push(ssrRenderComponent(_component_ElementsSlideUpEach, { text: "PARALLAX" }, null, _parent));
      _push(`</h2>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: ["SwiperParallax" in _ctx ? _ctx.SwiperParallax : unref(Parallax), "SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay)],
        "centered-slides": true,
        loop: true,
        parallax: true,
        "grab-cursor": true,
        speed: 1500,
        autoplay: {
          delay: 2e3,
          disableOnInteraction: true
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(imgArray), (item, index) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="page-swiper__image"${_scopeId2}><div data-swiper-parallax="800" data-swiper-duration="1200" style="${ssrRenderStyle(`background-image: url('${item}')`)}"${_scopeId2}></div></div><div class="page-swiper__text"${_scopeId2}><div class="grid"${_scopeId2}><div class="col-1-13-tablet"${_scopeId2}><h3${_scopeId2}>AMAZING ES</h3></div><div class="col-9-13-tablet"${_scopeId2}><p${_scopeId2}>From strategy to deployment and maintenance, we&#39;re the ultimate digital one-stop shop. Over the past 5 years, ES has become a go-to for meaningful, innovative, results-driven digital experiences, web design and branding. Freshness guaranteed.</p></div><div class="col-1-7-tablet"${_scopeId2}><h3${_scopeId2}>${ssrInterpolate(index + 1)}</h3></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "page-swiper__image" }, [
                        createVNode("div", {
                          "data-swiper-parallax": "800",
                          "data-swiper-duration": "1200",
                          style: `background-image: url('${item}')`
                        }, null, 4)
                      ]),
                      createVNode("div", { class: "page-swiper__text" }, [
                        createVNode("div", { class: "grid" }, [
                          createVNode("div", { class: "col-1-13-tablet" }, [
                            createVNode("h3", null, "AMAZING ES")
                          ]),
                          createVNode("div", { class: "col-9-13-tablet" }, [
                            createVNode("p", null, "From strategy to deployment and maintenance, we're the ultimate digital one-stop shop. Over the past 5 years, ES has become a go-to for meaningful, innovative, results-driven digital experiences, web design and branding. Freshness guaranteed.")
                          ]),
                          createVNode("div", { class: "col-1-7-tablet" }, [
                            createVNode("h3", null, toDisplayString(index + 1), 1)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(imgArray), (item, index) => {
                return openBlock(), createBlock(_component_SwiperSlide, { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "page-swiper__image" }, [
                      createVNode("div", {
                        "data-swiper-parallax": "800",
                        "data-swiper-duration": "1200",
                        style: `background-image: url('${item}')`
                      }, null, 4)
                    ]),
                    createVNode("div", { class: "page-swiper__text" }, [
                      createVNode("div", { class: "grid" }, [
                        createVNode("div", { class: "col-1-13-tablet" }, [
                          createVNode("h3", null, "AMAZING ES")
                        ]),
                        createVNode("div", { class: "col-9-13-tablet" }, [
                          createVNode("p", null, "From strategy to deployment and maintenance, we're the ultimate digital one-stop shop. Over the past 5 years, ES has become a go-to for meaningful, innovative, results-driven digital experiences, web design and branding. Freshness guaranteed.")
                        ]),
                        createVNode("div", { class: "col-1-7-tablet" }, [
                          createVNode("h3", null, toDisplayString(index + 1), 1)
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="page-swiper__title" style="${ssrRenderStyle({ "margin-top": "20vh" })}">`);
      _push(ssrRenderComponent(_component_ElementsSlideUpEach, { text: "DEFAULT" }, null, _parent));
      _push(`</h2>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay)],
        "centered-slides": true,
        "slides-per-view": 2,
        "space-between": 16,
        loop: true,
        parallax: true,
        "grab-cursor": true,
        autoplay: {
          delay: 2e3,
          disableOnInteraction: true
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(imgArray), (item, index) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="page-swiper__image"${_scopeId2}><div data-swiper-parallax="800" data-swiper-duration="1200" style="${ssrRenderStyle(`background-image: url('${item}')`)}"${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "page-swiper__image" }, [
                        createVNode("div", {
                          "data-swiper-parallax": "800",
                          "data-swiper-duration": "1200",
                          style: `background-image: url('${item}')`
                        }, null, 4)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(imgArray), (item, index) => {
                return openBlock(), createBlock(_component_SwiperSlide, { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "page-swiper__image" }, [
                      createVNode("div", {
                        "data-swiper-parallax": "800",
                        "data-swiper-duration": "1200",
                        style: `background-image: url('${item}')`
                      }, null, 4)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/swiper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=swiper-aRvs5swm.mjs.map
