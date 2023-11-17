import { Fragment as ye, reactive as Zt, computed as w, watchEffect as at, toRefs as Kt, capitalize as ea, warn as Za, ref as X, unref as N, provide as rt, inject as ke, shallowRef as fe, defineComponent as Jt, camelize as ta, h as St, getCurrentInstance as Ka, watch as re, onScopeDispose as Ja, effectScope as Qa, toRaw as er, isRef as lt, createVNode as s, mergeProps as te, toRef as pe, Text as tr, openBlock as he, createBlock as He, withCtx as ie, Transition as wt, onBeforeMount as na, nextTick as Re, onBeforeUnmount as Xe, withDirectives as Pe, resolveDirective as _t, vShow as Qt, resolveDynamicComponent as nr, onMounted as Ct, readonly as aa, createTextVNode as ra, TransitionGroup as ar, cloneVNode as rr, useAttrs as lr, useSlots as ir, createElementBlock as Nt, createElementVNode as or, withKeys as sr, createSlots as gn, renderList as hn, renderSlot as De, normalizeProps as Ne, createCommentVNode as _e, guardReactiveProps as dt, toDisplayString as ur, Teleport as dr } from "vue";
import { onClickOutside as cr } from "@vueuse/core";
/**
 * @name @wdns/vuetify-date-field
 * @version 1.0.0-alpha.2
 * @description Vuetify Date Field is a Vuetify VTextField Date Picker Component
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-date-field/
 * @repository https://github.com/webdevnerdstuff/vuetify-date-field
 * @license MIT License
 */
const Ie = (e) => {
  const { unit: n = "px", value: a } = e;
  if (a != null && a !== "")
    return +a ? `${Number(a)}${n}` : String(a);
}, We = "v-date-field", pr = { fa: { default: "fas fa-calendar-days" }, mdi: { default: "mdi:mdi-calendar-month-outline" } }, en = typeof window < "u", tn = en && "IntersectionObserver" in window;
function la(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const a = Object.keys(e);
  return a.length === Object.keys(n).length && a.every((t) => la(e[t], n[t]));
}
function ia(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (a, t) => n + t);
}
function ee(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Rt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function yn(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const bn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function Wt(e, n) {
  return n.every((a) => e.hasOwnProperty(a));
}
function oa(e, n) {
  const a = {}, t = new Set(Object.keys(e));
  for (const l of n)
    t.has(l) && (a[l] = e[l]);
  return a;
}
function kn(e, n, a) {
  const t = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    n.some((o) => o instanceof RegExp ? o.test(r) : o === r) && !(a != null && a.some((o) => o === r)) ? t[r] = e[r] : l[r] = e[r];
  return [t, l];
}
function Qe(e, n) {
  const a = { ...e };
  return n.forEach((t) => delete a[t]), a;
}
const sa = /^on[^a-z]/, vr = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function be(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Sn(e, n) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length));
}
function je() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0;
  const t = {};
  for (const l in e)
    t[l] = e[l];
  for (const l in n) {
    const r = e[l], o = n[l];
    Rt(r) && Rt(o) ? t[l] = je(r, o, a) : Array.isArray(r) && Array.isArray(o) && a ? t[l] = a(r, o) : t[l] = o;
  }
  return t;
}
function ua(e) {
  return e.map((n) => n.type === ye ? ua(n.children) : n).flat();
}
function Be() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Be.cache.has(e))
    return Be.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Be.cache.set(e, n), n;
}
function mt(e, n) {
  if (!n || typeof n != "object")
    return [];
  if (Array.isArray(n))
    return n.map((a) => mt(e, a)).flat(1);
  if (Array.isArray(n.children))
    return n.children.map((a) => mt(e, a)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return mt(e, n.component.subTree).flat(1);
  }
  return [];
}
function da(e) {
  const n = Zt({}), a = w(e);
  return at(() => {
    for (const t in a.value)
      n[t] = a.value[t];
  }, { flush: "sync" }), Kt(n);
}
function Ut(e, n) {
  return e.includes(n);
}
Be.cache = /* @__PURE__ */ new Map();
const Oe = () => [Function, Array];
function wn(e, n) {
  return !!(e[n = "on" + ea(n)] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
const fr = ["top", "bottom"], mr = ["start", "end", "left", "right"];
function _n(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
class Et {
  constructor(n) {
    let { x: a, y: t, width: l, height: r } = n;
    this.x = a, this.y = t, this.width = l, this.height = r;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
const Ee = 2.4, Cn = 0.2126729, xn = 0.7151522, $n = 0.072175, gr = 0.55, hr = 0.58, yr = 0.57, br = 0.62, ct = 0.03, Vn = 1.45, kr = 5e-4, Sr = 1.25, wr = 1.25, Dn = 0.078, In = 12.82051282051282, pt = 0.06, Mn = 1e-3;
function An(e, n) {
  const a = (e.r / 255) ** Ee, t = (e.g / 255) ** Ee, l = (e.b / 255) ** Ee, r = (n.r / 255) ** Ee, o = (n.g / 255) ** Ee, i = (n.b / 255) ** Ee;
  let d, c = a * Cn + t * xn + l * $n, u = r * Cn + o * xn + i * $n;
  if (c <= ct && (c += (ct - c) ** Vn), u <= ct && (u += (ct - u) ** Vn), Math.abs(u - c) < kr)
    return 0;
  if (u > c) {
    const v = (u ** gr - c ** hr) * Sr;
    d = v < Mn ? 0 : v < Dn ? v - v * In * pt : v - pt;
  } else {
    const v = (u ** br - c ** yr) * wr;
    d = v > -Mn ? 0 : v > -Dn ? v - v * In * pt : v + pt;
  }
  return 100 * d;
}
function Je(e) {
  Za(`Vuetify: ${e}`);
}
function Ht(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const Bn = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, _r = { rgb: (e, n, a, t) => ({ r: e, g: n, b: a, a: t }), rgba: (e, n, a, t) => ({ r: e, g: n, b: a, a: t }), hsl: (e, n, a, t) => On({ h: e, s: n, l: a, a: t }), hsla: (e, n, a, t) => On({ h: e, s: n, l: a, a: t }), hsv: (e, n, a, t) => et({ h: e, s: n, v: a, a: t }), hsva: (e, n, a, t) => et({ h: e, s: n, v: a, a: t }) };
function Ke(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Je(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && Bn.test(e)) {
    const { groups: n } = e.match(Bn), { fn: a, values: t } = n, l = t.split(/,\s*/).map((r) => r.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(a) ? parseFloat(r) / 100 : parseFloat(r));
    return _r[a](...l);
  }
  if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((t) => t + t).join("") : [6, 8].includes(n.length) || Je(`'${e}' is not a valid hex(a) color`);
    const a = parseInt(n, 16);
    return (isNaN(a) || a < 0 || a > 4294967295) && Je(`'${e}' is not a valid hex(a) color`), function(t) {
      t = function(d) {
        return d.startsWith("#") && (d = d.slice(1)), d = d.replace(/([^0-9a-f])/gi, "F"), (d.length === 3 || d.length === 4) && (d = d.split("").map((c) => c + c).join("")), d.length !== 6 && (d = Sn(Sn(d, 6), 8, "F")), d;
      }(t);
      let [l, r, o, i] = function(d) {
        let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const u = [];
        let v = 0;
        for (; v < d.length; )
          u.push(d.substr(v, c)), v += c;
        return u;
      }(t, 2).map((d) => parseInt(d, 16));
      return i = i === void 0 ? i : i / 255, { r: l, g: r, b: o, a: i };
    }(n);
  }
  if (typeof e == "object") {
    if (Wt(e, ["r", "g", "b"]))
      return e;
    if (Wt(e, ["h", "s", "l"]))
      return et(ca(e));
    if (Wt(e, ["h", "s", "v"]))
      return et(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function et(e) {
  const { h: n, s: a, v: t, a: l } = e, r = (i) => {
    const d = (i + n / 60) % 6;
    return t - t * a * Math.max(Math.min(d, 4 - d, 1), 0);
  }, o = [r(5), r(3), r(1)].map((i) => Math.round(255 * i));
  return { r: o[0], g: o[1], b: o[2], a: l };
}
function On(e) {
  return et(ca(e));
}
function ca(e) {
  const { h: n, s: a, l: t, a: l } = e, r = t + a * Math.min(t, 1 - t);
  return { h: n, s: r === 0 ? 0 : 2 - 2 * t / r, v: r, a: l };
}
function W(e, n) {
  return (a) => Object.keys(e).reduce((t, l) => {
    const r = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] };
    return t[l] = a && l in a ? { ...r, default: a[l] } : r, n && !t[l].source && (t[l].source = n), t;
  }, {});
}
const ae = W({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), ht = Symbol.for("vuetify:defaults");
function nn() {
  const e = ke(ht);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function an(e, n) {
  const a = nn(), t = X(e), l = w(() => {
    if (N(n == null ? void 0 : n.disabled))
      return a.value;
    const r = N(n == null ? void 0 : n.scoped), o = N(n == null ? void 0 : n.reset), i = N(n == null ? void 0 : n.root);
    if (t.value == null && !(r || o || i))
      return a.value;
    let d = je(t.value, { prev: a.value });
    if (r)
      return d;
    if (o || i) {
      const c = Number(o || 1 / 0);
      for (let u = 0; u <= c && d && "prev" in d; u++)
        d = d.prev;
      return d && typeof i == "string" && i in d && (d = je(je(d, { prev: d }), d[i])), d;
    }
    return d.prev ? je(d.prev, d) : d;
  });
  return rt(ht, l), l;
}
function Cr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : nn();
  const t = me("useDefaults");
  if (n = n ?? t.type.name ?? t.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const l = w(() => {
    var i;
    return (i = a.value) == null ? void 0 : i[e._as ?? n];
  }), r = new Proxy(e, { get(i, d) {
    var u, v, y, m;
    const c = Reflect.get(i, d);
    return d === "class" || d === "style" ? [(u = l.value) == null ? void 0 : u[d], c].filter((D) => D != null) : typeof d != "string" || function(D, f) {
      var b, V;
      return ((b = D.props) == null ? void 0 : b[f]) !== void 0 || ((V = D.props) == null ? void 0 : V[Be(f)]) !== void 0;
    }(t.vnode, d) ? c : ((v = l.value) == null ? void 0 : v[d]) ?? ((m = (y = a.value) == null ? void 0 : y.global) == null ? void 0 : m[d]) ?? c;
  } }), o = fe();
  return at(() => {
    if (l.value) {
      const i = Object.entries(l.value).filter((d) => {
        let [c] = d;
        return c.startsWith(c[0].toUpperCase());
      });
      o.value = i.length ? Object.fromEntries(i) : void 0;
    } else
      o.value = void 0;
  }), { props: r, provideSubDefaults: function() {
    const i = function(d) {
      let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : me("injectSelf");
      const { provides: u } = c;
      if (u && d in u)
        return u[d];
    }(ht, t);
    rt(ht, w(() => o.value ? je((i == null ? void 0 : i.value) ?? {}, o.value) : i == null ? void 0 : i.value));
  } };
}
function yt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Je("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = W(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((a) => a !== "class" && a !== "style");
    e.filterProps = function(a) {
      return oa(a, n);
    }, e.props._as = String, e.setup = function(a, t) {
      const l = nn();
      if (!l.value)
        return e._setup(a, t);
      const { props: r, provideSubDefaults: o } = Cr(a, a._as ?? e.name, l), i = e._setup(r, t);
      return o(), i;
    };
  }
  return e;
}
function F() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? yt : Jt)(n);
}
function it(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", a = arguments.length > 2 ? arguments[2] : void 0;
  return F()({ name: a ?? ea(ta(e.replace(/__/g, "-"))), props: { tag: { type: String, default: n }, ...ae() }, setup(t, l) {
    let { slots: r } = l;
    return () => {
      var o;
      return St(t.tag, { class: [e, t.class], style: t.style }, (o = r.default) == null ? void 0 : o.call(r));
    };
  } });
}
function me(e, n) {
  const a = Ka();
  if (!a)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return a;
}
function Se() {
  const e = me(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Be((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let pa = 0, gt = /* @__PURE__ */ new WeakMap();
function ot() {
  const e = me("getUid");
  if (gt.has(e))
    return gt.get(e);
  {
    const n = pa++;
    return gt.set(e, n), n;
  }
}
function K(e) {
  me("useRender").render = e;
}
ot.reset = () => {
  pa = 0, gt = /* @__PURE__ */ new WeakMap();
};
const xr = W({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Gt(e, n) {
  let a;
  function t() {
    a = Qa(), a.run(() => n.length ? n(() => {
      a == null || a.stop(), t();
    }) : n());
  }
  re(e, (l) => {
    l && !a ? t() : l || (a == null || a.stop(), a = void 0);
  }, { immediate: !0 }), Ja(() => {
    a == null || a.stop();
  });
}
function oe(e, n, a) {
  let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (u) => u, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (u) => u;
  const r = me("useProxiedModel"), o = X(e[n] !== void 0 ? e[n] : a), i = Be(n), d = w(i !== n ? () => {
    var u, v, y, m;
    return e[n], !(!((u = r.vnode.props) != null && u.hasOwnProperty(n)) && !((v = r.vnode.props) != null && v.hasOwnProperty(i)) || !((y = r.vnode.props) != null && y.hasOwnProperty(`onUpdate:${n}`)) && !((m = r.vnode.props) != null && m.hasOwnProperty(`onUpdate:${i}`)));
  } : () => {
    var u, v;
    return e[n], !(!((u = r.vnode.props) != null && u.hasOwnProperty(n)) || !((v = r.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`)));
  });
  Gt(() => !d.value, () => {
    re(() => e[n], (u) => {
      o.value = u;
    });
  });
  const c = w({ get() {
    const u = e[n];
    return t(d.value ? u : o.value);
  }, set(u) {
    const v = l(u), y = er(d.value ? e[n] : o.value);
    y !== v && t(y) !== u && (o.value = v, r == null || r.emit(`update:${n}`, v));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => d.value ? e[n] : o.value }), c;
}
const $r = W({ disabled: Boolean, modelValue: { type: Boolean, default: void 0 }, ...xr() }, "VHover"), Vr = F()({ name: "VHover", props: $r(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: a } = n;
  const t = oe(e, "modelValue"), { runOpenDelay: l, runCloseDelay: r } = function(o, i) {
    const d = {}, c = (u) => () => {
      if (!en)
        return Promise.resolve(!0);
      const v = u === "openDelay";
      return d.closeDelay && window.clearTimeout(d.closeDelay), delete d.closeDelay, d.openDelay && window.clearTimeout(d.openDelay), delete d.openDelay, new Promise((y) => {
        const m = parseInt(o[u] ?? 0, 10);
        d[u] = window.setTimeout(() => {
          i == null || i(v), y(v);
        }, m);
      });
    };
    return { runCloseDelay: c("closeDelay"), runOpenDelay: c("openDelay") };
  }(e, (o) => !e.disabled && (t.value = o));
  return () => {
    var o;
    return (o = a.default) == null ? void 0 : o.call(a, { isHovering: t.value, props: { onMouseenter: l, onMouseleave: r } });
  };
} });
function rn(e) {
  return da(() => {
    const n = [], a = {};
    if (e.value.background)
      if (Ht(e.value.background)) {
        if (a.backgroundColor = e.value.background, !e.value.text && Ht(t = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(t)) {
          const l = Ke(e.value.background);
          if (l.a == null || l.a === 1) {
            const r = function(o) {
              const i = Math.abs(An(Ke(0), Ke(o)));
              return Math.abs(An(Ke(16777215), Ke(o))) > Math.min(i, 50) ? "#fff" : "#000";
            }(l);
            a.color = r, a.caretColor = r;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    var t;
    return e.value.text && (Ht(e.value.text) ? (a.color = e.value.text, a.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: a };
  });
}
function Ue(e, n) {
  const a = w(() => ({ text: lt(e) ? e.value : n ? e[n] : null })), { colorClasses: t, colorStyles: l } = rn(a);
  return { textColorClasses: t, textColorStyles: l };
}
function Ge(e, n) {
  const a = w(() => ({ background: lt(e) ? e.value : n ? e[n] : null })), { colorClasses: t, colorStyles: l } = rn(a);
  return { backgroundColorClasses: t, backgroundColorStyles: l };
}
const se = [String, Function, Object, Array], Dr = Symbol.for("vuetify:icons"), bt = W({ icon: { type: se }, tag: { type: String, required: !0 } }, "icon"), Pn = F()({ name: "VComponentIcon", props: bt(), setup(e, n) {
  let { slots: a } = n;
  return () => {
    const t = e.icon;
    return s(e.tag, null, { default: () => {
      var l;
      return [e.icon ? s(t, null, null) : (l = a.default) == null ? void 0 : l.call(a)];
    } });
  };
} }), Ir = yt({ name: "VSvgIcon", inheritAttrs: !1, props: bt(), setup(e, n) {
  let { attrs: a } = n;
  return () => s(e.tag, te(a, { style: null }), { default: () => [s("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((t) => Array.isArray(t) ? s("path", { d: t[0], "fill-opacity": t[1] }, null) : s("path", { d: t }, null)) : s("path", { d: e.icon }, null)])] });
} });
yt({ name: "VLigatureIcon", props: bt(), setup: (e) => () => s(e.tag, null, { default: () => [e.icon] }) }), yt({ name: "VClassIcon", props: bt(), setup: (e) => () => s(e.tag, { class: e.icon }, null) });
const Mr = ["x-small", "small", "default", "large", "x-large"], xt = W({ size: { type: [String, Number], default: "default" } }, "size");
function $t(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  return da(() => {
    let a, t;
    return Ut(Mr, e.size) ? a = `${n}--size-${e.size}` : e.size && (t = { width: ee(e.size), height: ee(e.size) }), { sizeClasses: a, sizeStyles: t };
  });
}
const xe = W({ tag: { type: String, default: "div" } }, "tag"), Tn = Symbol.for("vuetify:theme"), ge = W({ theme: String }, "theme");
function we(e) {
  me("provideTheme");
  const n = ke(Tn, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const a = w(() => e.theme ?? n.name.value), t = w(() => n.themes.value[a.value]), l = w(() => n.isDisabled ? void 0 : `v-theme--${a.value}`), r = { ...n, name: a, current: t, themeClasses: l };
  return rt(Tn, r), r;
}
const Ar = W({ color: String, start: Boolean, end: Boolean, icon: se, ...ae(), ...xt(), ...xe({ tag: "i" }), ...ge() }, "VIcon"), Fe = F()({ name: "VIcon", props: Ar(), setup(e, n) {
  let { attrs: a, slots: t } = n;
  const l = X(), { themeClasses: r } = we(e), { iconData: o } = ((u) => {
    const v = ke(Dr);
    if (!v)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: w(() => {
      var b;
      const y = N(u);
      if (!y)
        return { component: Pn };
      let m = y;
      if (typeof m == "string" && (m = m.trim(), m.startsWith("$") && (m = (b = v.aliases) == null ? void 0 : b[m.slice(1)])), !m)
        throw new Error(`Could not find aliased icon "${y}"`);
      if (Array.isArray(m))
        return { component: Ir, icon: m };
      if (typeof m != "string")
        return { component: Pn, icon: m };
      const D = Object.keys(v.sets).find((V) => typeof m == "string" && m.startsWith(`${V}:`)), f = D ? m.slice(D.length + 1) : m;
      return { component: v.sets[D ?? v.defaultSet].component, icon: f };
    }) };
  })(w(() => l.value || e.icon)), { sizeClasses: i } = $t(e), { textColorClasses: d, textColorStyles: c } = Ue(pe(e, "color"));
  return K(() => {
    var v, y;
    const u = (v = t.default) == null ? void 0 : v.call(t);
    return u && (l.value = (y = ua(u).filter((m) => m.type === tr && m.children && typeof m.children == "string")[0]) == null ? void 0 : y.children), s(o.value.component, { tag: e.tag, icon: o.value.icon, class: ["v-icon", "notranslate", r.value, i.value, d.value, { "v-icon--clickable": !!a.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [i.value ? void 0 : { fontSize: ee(e.size), height: ee(e.size), width: ee(e.size) }, c.value, e.style], role: a.onClick ? "button" : void 0, "aria-hidden": !a.onClick }, { default: () => [u] });
  }), {};
} }), vt = Jt({ __name: "DatePickerIcon", props: { color: {}, icon: { type: [String, null, Boolean], default: "" }, iconSize: {} }, emits: ["click"], setup(e, { emit: n }) {
  const a = n, t = e, l = ke(Symbol.for("vuetify:icons")), r = w(() => ((i) => {
    const { icon: d, iconOptions: c, name: u } = i;
    if (d)
      return d;
    let y = (c == null ? void 0 : c.defaultSet).toLowerCase();
    y = y === "fa" || y === "fasvg" ? "fa" : y;
    const m = pr[y];
    if (!m)
      throw new Error(`VDateField: No VColorField default ${c == null ? void 0 : c.defaultSet} icon set found.`);
    const D = m[u];
    if (!D)
      throw new Error(`VDateField: No ${u} icon found.`);
    return D;
  })({ icon: t.icon !== "default" ? t.icon : "", iconOptions: l, name: "default" }));
  function o() {
    a("click");
  }
  return (i, d) => (he(), He(Vr, null, { default: ie(({ isHovering: c, props: u }) => [s(Fe, te(u, { color: c ? i.color : void 0, icon: N(r), size: i.iconSize, onClick: o }), null, 16, ["color", "icon", "size"])]), _: 1 }));
} });
function ln(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var va = { exports: {} };
va.exports = function() {
  var e = 1e3, n = 6e4, a = 36e5, t = "millisecond", l = "second", r = "minute", o = "hour", i = "day", d = "week", c = "month", u = "quarter", v = "year", y = "date", m = "Invalid Date", D = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(S) {
    var g = ["th", "st", "nd", "rd"], h = S % 100;
    return "[" + S + (g[(h - 20) % 10] || g[h] || g[0]) + "]";
  } }, V = function(S, g, h) {
    var k = String(S);
    return !k || k.length >= g ? S : "" + Array(g + 1 - k.length).join(h) + S;
  }, $ = { s: V, z: function(S) {
    var g = -S.utcOffset(), h = Math.abs(g), k = Math.floor(h / 60), x = h % 60;
    return (g <= 0 ? "+" : "-") + V(k, 2, "0") + ":" + V(x, 2, "0");
  }, m: function S(g, h) {
    if (g.date() < h.date())
      return -S(h, g);
    var k = 12 * (h.year() - g.year()) + (h.month() - g.month()), x = g.clone().add(k, c), A = h - x < 0, T = g.clone().add(k + (A ? -1 : 1), c);
    return +(-(k + (h - x) / (A ? x - T : T - x)) || 0);
  }, a: function(S) {
    return S < 0 ? Math.ceil(S) || 0 : Math.floor(S);
  }, p: function(S) {
    return { M: c, y: v, w: d, d: i, D: y, h: o, m: r, s: l, ms: t, Q: u }[S] || String(S || "").toLowerCase().replace(/s$/, "");
  }, u: function(S) {
    return S === void 0;
  } }, B = "en", P = {};
  P[B] = b;
  var z = "$isDayjsObject", O = function(S) {
    return S instanceof M || !(!S || !S[z]);
  }, Y = function S(g, h, k) {
    var x;
    if (!g)
      return B;
    if (typeof g == "string") {
      var A = g.toLowerCase();
      P[A] && (x = A), h && (P[A] = h, x = A);
      var T = g.split("-");
      if (!x && T.length > 1)
        return S(T[0]);
    } else {
      var H = g.name;
      P[H] = g, x = H;
    }
    return !k && x && (B = x), x || !k && B;
  }, _ = function(S, g) {
    if (O(S))
      return S.clone();
    var h = typeof g == "object" ? g : {};
    return h.date = S, h.args = arguments, new M(h);
  }, p = $;
  p.l = Y, p.i = O, p.w = function(S, g) {
    return _(S, { locale: g.$L, utc: g.$u, x: g.$x, $offset: g.$offset });
  };
  var M = function() {
    function S(h) {
      this.$L = Y(h.locale, null, !0), this.parse(h), this.$x = this.$x || h.x || {}, this[z] = !0;
    }
    var g = S.prototype;
    return g.parse = function(h) {
      this.$d = function(k) {
        var x = k.date, A = k.utc;
        if (x === null)
          return /* @__PURE__ */ new Date(NaN);
        if (p.u(x))
          return /* @__PURE__ */ new Date();
        if (x instanceof Date)
          return new Date(x);
        if (typeof x == "string" && !/Z$/i.test(x)) {
          var T = x.match(D);
          if (T) {
            var H = T[2] - 1 || 0, j = (T[7] || "0").substring(0, 3);
            return A ? new Date(Date.UTC(T[1], H, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, j)) : new Date(T[1], H, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, j);
          }
        }
        return new Date(x);
      }(h), this.init();
    }, g.init = function() {
      var h = this.$d;
      this.$y = h.getFullYear(), this.$M = h.getMonth(), this.$D = h.getDate(), this.$W = h.getDay(), this.$H = h.getHours(), this.$m = h.getMinutes(), this.$s = h.getSeconds(), this.$ms = h.getMilliseconds();
    }, g.$utils = function() {
      return p;
    }, g.isValid = function() {
      return this.$d.toString() !== m;
    }, g.isSame = function(h, k) {
      var x = _(h);
      return this.startOf(k) <= x && x <= this.endOf(k);
    }, g.isAfter = function(h, k) {
      return _(h) < this.startOf(k);
    }, g.isBefore = function(h, k) {
      return this.endOf(k) < _(h);
    }, g.$g = function(h, k, x) {
      return p.u(h) ? this[k] : this.set(x, h);
    }, g.unix = function() {
      return Math.floor(this.valueOf() / 1e3);
    }, g.valueOf = function() {
      return this.$d.getTime();
    }, g.startOf = function(h, k) {
      var x = this, A = !!p.u(k) || k, T = p.p(h), H = function(Q, U) {
        var ne = p.w(x.$u ? Date.UTC(x.$y, U, Q) : new Date(x.$y, U, Q), x);
        return A ? ne : ne.endOf(i);
      }, j = function(Q, U) {
        return p.w(x.toDate()[Q].apply(x.toDate("s"), (A ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(U)), x);
      }, q = this.$W, C = this.$M, L = this.$D, E = "set" + (this.$u ? "UTC" : "");
      switch (T) {
        case v:
          return A ? H(1, 0) : H(31, 11);
        case c:
          return A ? H(1, C) : H(0, C + 1);
        case d:
          var R = this.$locale().weekStart || 0, J = (q < R ? q + 7 : q) - R;
          return H(A ? L - J : L + (6 - J), C);
        case i:
        case y:
          return j(E + "Hours", 0);
        case o:
          return j(E + "Minutes", 1);
        case r:
          return j(E + "Seconds", 2);
        case l:
          return j(E + "Milliseconds", 3);
        default:
          return this.clone();
      }
    }, g.endOf = function(h) {
      return this.startOf(h, !1);
    }, g.$set = function(h, k) {
      var x, A = p.p(h), T = "set" + (this.$u ? "UTC" : ""), H = (x = {}, x[i] = T + "Date", x[y] = T + "Date", x[c] = T + "Month", x[v] = T + "FullYear", x[o] = T + "Hours", x[r] = T + "Minutes", x[l] = T + "Seconds", x[t] = T + "Milliseconds", x)[A], j = A === i ? this.$D + (k - this.$W) : k;
      if (A === c || A === v) {
        var q = this.clone().set(y, 1);
        q.$d[H](j), q.init(), this.$d = q.set(y, Math.min(this.$D, q.daysInMonth())).$d;
      } else
        H && this.$d[H](j);
      return this.init(), this;
    }, g.set = function(h, k) {
      return this.clone().$set(h, k);
    }, g.get = function(h) {
      return this[p.p(h)]();
    }, g.add = function(h, k) {
      var x, A = this;
      h = Number(h);
      var T = p.p(k), H = function(C) {
        var L = _(A);
        return p.w(L.date(L.date() + Math.round(C * h)), A);
      };
      if (T === c)
        return this.set(c, this.$M + h);
      if (T === v)
        return this.set(v, this.$y + h);
      if (T === i)
        return H(1);
      if (T === d)
        return H(7);
      var j = (x = {}, x[r] = n, x[o] = a, x[l] = e, x)[T] || 1, q = this.$d.getTime() + h * j;
      return p.w(q, this);
    }, g.subtract = function(h, k) {
      return this.add(-1 * h, k);
    }, g.format = function(h) {
      var k = this, x = this.$locale();
      if (!this.isValid())
        return x.invalidDate || m;
      var A = h || "YYYY-MM-DDTHH:mm:ssZ", T = p.z(this), H = this.$H, j = this.$m, q = this.$M, C = x.weekdays, L = x.months, E = x.meridiem, R = function(U, ne, G, Z) {
        return U && (U[ne] || U(k, A)) || G[ne].slice(0, Z);
      }, J = function(U) {
        return p.s(H % 12 || 12, U, "0");
      }, Q = E || function(U, ne, G) {
        var Z = U < 12 ? "AM" : "PM";
        return G ? Z.toLowerCase() : Z;
      };
      return A.replace(f, function(U, ne) {
        return ne || function(G) {
          switch (G) {
            case "YY":
              return String(k.$y).slice(-2);
            case "YYYY":
              return p.s(k.$y, 4, "0");
            case "M":
              return q + 1;
            case "MM":
              return p.s(q + 1, 2, "0");
            case "MMM":
              return R(x.monthsShort, q, L, 3);
            case "MMMM":
              return R(L, q);
            case "D":
              return k.$D;
            case "DD":
              return p.s(k.$D, 2, "0");
            case "d":
              return String(k.$W);
            case "dd":
              return R(x.weekdaysMin, k.$W, C, 2);
            case "ddd":
              return R(x.weekdaysShort, k.$W, C, 3);
            case "dddd":
              return C[k.$W];
            case "H":
              return String(H);
            case "HH":
              return p.s(H, 2, "0");
            case "h":
              return J(1);
            case "hh":
              return J(2);
            case "a":
              return Q(H, j, !0);
            case "A":
              return Q(H, j, !1);
            case "m":
              return String(j);
            case "mm":
              return p.s(j, 2, "0");
            case "s":
              return String(k.$s);
            case "ss":
              return p.s(k.$s, 2, "0");
            case "SSS":
              return p.s(k.$ms, 3, "0");
            case "Z":
              return T;
          }
          return null;
        }(U) || T.replace(":", "");
      });
    }, g.utcOffset = function() {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, g.diff = function(h, k, x) {
      var A, T = this, H = p.p(k), j = _(h), q = (j.utcOffset() - this.utcOffset()) * n, C = this - j, L = function() {
        return p.m(T, j);
      };
      switch (H) {
        case v:
          A = L() / 12;
          break;
        case c:
          A = L();
          break;
        case u:
          A = L() / 3;
          break;
        case d:
          A = (C - q) / 6048e5;
          break;
        case i:
          A = (C - q) / 864e5;
          break;
        case o:
          A = C / a;
          break;
        case r:
          A = C / n;
          break;
        case l:
          A = C / e;
          break;
        default:
          A = C;
      }
      return x ? A : p.a(A);
    }, g.daysInMonth = function() {
      return this.endOf(c).$D;
    }, g.$locale = function() {
      return P[this.$L];
    }, g.locale = function(h, k) {
      if (!h)
        return this.$L;
      var x = this.clone(), A = Y(h, k, !0);
      return A && (x.$L = A), x;
    }, g.clone = function() {
      return p.w(this.$d, this);
    }, g.toDate = function() {
      return new Date(this.valueOf());
    }, g.toJSON = function() {
      return this.isValid() ? this.toISOString() : null;
    }, g.toISOString = function() {
      return this.$d.toISOString();
    }, g.toString = function() {
      return this.$d.toUTCString();
    }, S;
  }(), I = M.prototype;
  return _.prototype = I, [["$ms", t], ["$s", l], ["$m", r], ["$H", o], ["$W", i], ["$M", c], ["$y", v], ["$D", y]].forEach(function(S) {
    I[S[1]] = function(g) {
      return this.$g(g, S[0], S[1]);
    };
  }), _.extend = function(S, g) {
    return S.$i || (S(g, M, _), S.$i = !0), _;
  }, _.locale = Y, _.isDayjs = O, _.unix = function(S) {
    return _(1e3 * S);
  }, _.en = P[B], _.Ls = P, _.p = {}, _;
}();
const Me = ln(va.exports);
var fa = { exports: {} };
fa.exports = function() {
  var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d\d/, t = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, r = {}, o = function(m) {
    return (m = +m) + (m > 68 ? 1900 : 2e3);
  }, i = function(m) {
    return function(D) {
      this[m] = +D;
    };
  }, d = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
    (this.zone || (this.zone = {})).offset = function(D) {
      if (!D || D === "Z")
        return 0;
      var f = D.match(/([+-]|\d\d)/g), b = 60 * f[1] + (+f[2] || 0);
      return b === 0 ? 0 : f[0] === "+" ? -b : b;
    }(m);
  }], c = function(m) {
    var D = r[m];
    return D && (D.indexOf ? D : D.s.concat(D.f));
  }, u = function(m, D) {
    var f, b = r.meridiem;
    if (b) {
      for (var V = 1; V <= 24; V += 1)
        if (m.indexOf(b(V, 0, D)) > -1) {
          f = V > 12;
          break;
        }
    } else
      f = m === (D ? "pm" : "PM");
    return f;
  }, v = { A: [l, function(m) {
    this.afternoon = u(m, !1);
  }], a: [l, function(m) {
    this.afternoon = u(m, !0);
  }], S: [/\d/, function(m) {
    this.milliseconds = 100 * +m;
  }], SS: [a, function(m) {
    this.milliseconds = 10 * +m;
  }], SSS: [/\d{3}/, function(m) {
    this.milliseconds = +m;
  }], s: [t, i("seconds")], ss: [t, i("seconds")], m: [t, i("minutes")], mm: [t, i("minutes")], H: [t, i("hours")], h: [t, i("hours")], HH: [t, i("hours")], hh: [t, i("hours")], D: [t, i("day")], DD: [a, i("day")], Do: [l, function(m) {
    var D = r.ordinal, f = m.match(/\d+/);
    if (this.day = f[0], D)
      for (var b = 1; b <= 31; b += 1)
        D(b).replace(/\[|\]/g, "") === m && (this.day = b);
  }], M: [t, i("month")], MM: [a, i("month")], MMM: [l, function(m) {
    var D = c("months"), f = (c("monthsShort") || D.map(function(b) {
      return b.slice(0, 3);
    })).indexOf(m) + 1;
    if (f < 1)
      throw new Error();
    this.month = f % 12 || f;
  }], MMMM: [l, function(m) {
    var D = c("months").indexOf(m) + 1;
    if (D < 1)
      throw new Error();
    this.month = D % 12 || D;
  }], Y: [/[+-]?\d+/, i("year")], YY: [a, function(m) {
    this.year = o(m);
  }], YYYY: [/\d{4}/, i("year")], Z: d, ZZ: d };
  function y(m) {
    var D, f;
    D = m, f = r && r.formats;
    for (var b = (m = D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Y, _, p) {
      var M = p && p.toUpperCase();
      return _ || f[p] || e[p] || f[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(I, S, g) {
        return S || g.slice(1);
      });
    })).match(n), V = b.length, $ = 0; $ < V; $ += 1) {
      var B = b[$], P = v[B], z = P && P[0], O = P && P[1];
      b[$] = O ? { regex: z, parser: O } : B.replace(/^\[|\]$/g, "");
    }
    return function(Y) {
      for (var _ = {}, p = 0, M = 0; p < V; p += 1) {
        var I = b[p];
        if (typeof I == "string")
          M += I.length;
        else {
          var S = I.regex, g = I.parser, h = Y.slice(M), k = S.exec(h)[0];
          g.call(_, k), Y = Y.replace(k, "");
        }
      }
      return function(x) {
        var A = x.afternoon;
        if (A !== void 0) {
          var T = x.hours;
          A ? T < 12 && (x.hours += 12) : T === 12 && (x.hours = 0), delete x.afternoon;
        }
      }(_), _;
    };
  }
  return function(m, D, f) {
    f.p.customParseFormat = !0, m && m.parseTwoDigitYear && (o = m.parseTwoDigitYear);
    var b = D.prototype, V = b.parse;
    b.parse = function($) {
      var B = $.date, P = $.utc, z = $.args;
      this.$u = P;
      var O = z[1];
      if (typeof O == "string") {
        var Y = z[2] === !0, _ = z[3] === !0, p = Y || _, M = z[2];
        _ && (M = z[2]), r = this.$locale(), !Y && M && (r = f.Ls[M]), this.$d = function(h, k, x) {
          try {
            if (["x", "X"].indexOf(k) > -1)
              return new Date((k === "X" ? 1e3 : 1) * h);
            var A = y(k)(h), T = A.year, H = A.month, j = A.day, q = A.hours, C = A.minutes, L = A.seconds, E = A.milliseconds, R = A.zone, J = /* @__PURE__ */ new Date(), Q = j || (T || H ? 1 : J.getDate()), U = T || J.getFullYear(), ne = 0;
            T && !H || (ne = H > 0 ? H - 1 : J.getMonth());
            var G = q || 0, Z = C || 0, ce = L || 0, le = E || 0;
            return R ? new Date(Date.UTC(U, ne, Q, G, Z, ce, le + 60 * R.offset * 1e3)) : x ? new Date(Date.UTC(U, ne, Q, G, Z, ce, le)) : new Date(U, ne, Q, G, Z, ce, le);
          } catch {
            return /* @__PURE__ */ new Date("");
          }
        }(B, O, P), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), p && B != this.format(O) && (this.$d = /* @__PURE__ */ new Date("")), r = {};
      } else if (O instanceof Array)
        for (var I = O.length, S = 1; S <= I; S += 1) {
          z[1] = O[S - 1];
          var g = f.apply(this, z);
          if (g.isValid()) {
            this.$d = g.$d, this.$L = g.$L, this.init();
            break;
          }
          S === I && (this.$d = /* @__PURE__ */ new Date(""));
        }
      else
        V.call(this, $);
    };
  };
}();
const Br = ln(fa.exports);
var Or = { exports: {} };
const Pr = ln(Or.exports = function(e, n) {
  var a = n.prototype, t = a.format;
  a.format = function(l) {
    var r = this, o = this.$locale();
    if (!this.isValid())
      return t.bind(this)(l);
    var i = this.$utils(), d = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(c) {
      switch (c) {
        case "Q":
          return Math.ceil((r.$M + 1) / 3);
        case "Do":
          return o.ordinal(r.$D);
        case "gggg":
          return r.weekYear();
        case "GGGG":
          return r.isoWeekYear();
        case "wo":
          return o.ordinal(r.week(), "W");
        case "w":
        case "ww":
          return i.s(r.week(), c === "w" ? 1 : 2, "0");
        case "W":
        case "WW":
          return i.s(r.isoWeek(), c === "W" ? 1 : 2, "0");
        case "k":
        case "kk":
          return i.s(String(r.$H === 0 ? 24 : r.$H), c === "k" ? 1 : 2, "0");
        case "X":
          return Math.floor(r.$d.getTime() / 1e3);
        case "x":
          return r.$d.getTime();
        case "z":
          return "[" + r.offsetName() + "]";
        case "zzz":
          return "[" + r.offsetName("long") + "]";
        default:
          return c;
      }
    });
    return t.bind(this)(d);
  };
}), Tr = F()({ name: "VCardActions", props: ae(), setup(e, n) {
  let { slots: a } = n;
  return an({ VBtn: { slim: !0, variant: "text" } }), K(() => {
    var t;
    return s("div", { class: ["v-card-actions", e.class], style: e.style }, [(t = a.default) == null ? void 0 : t.call(a)]);
  }), {};
} }), Lr = it("v-card-subtitle"), Yr = it("v-card-title"), Vt = W({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Dt(e) {
  return { dimensionStyles: w(() => ({ height: ee(e.height), maxHeight: ee(e.maxHeight), maxWidth: ee(e.maxWidth), minHeight: ee(e.minHeight), minWidth: ee(e.minWidth), width: ee(e.width) })) };
}
const ma = W({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ae(), ...Vt() }, "VResponsive"), Ln = F()({ name: "VResponsive", props: ma(), setup(e, n) {
  let { slots: a } = n;
  const { aspectStyles: t } = function(r) {
    return { aspectStyles: w(() => {
      const o = Number(r.aspectRatio);
      return o ? { paddingBottom: String(1 / o * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: l } = Dt(e);
  return K(() => {
    var r;
    return s("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [l.value, e.style] }, [s("div", { class: "v-responsive__sizer", style: t.value }, null), (r = a.additional) == null ? void 0 : r.call(a), a.default && s("div", { class: ["v-responsive__content", e.contentClass] }, [a.default()])]);
  }), {};
} }), on = W({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ae = (e, n) => {
  let { slots: a } = n;
  const { transition: t, disabled: l, ...r } = e, { component: o = wt, ...i } = typeof t == "object" ? t : {};
  return St(o, te(typeof t == "string" ? { name: l ? "" : t } : i, r, { disabled: l }), a);
};
function Yn(e, n) {
  var t;
  const a = (t = e._observe) == null ? void 0 : t[n.instance.$.uid];
  a && (a.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const ga = { mounted: function(e, n) {
  if (!tn)
    return;
  const a = n.modifiers || {}, t = n.value, { handler: l, options: r } = typeof t == "object" ? t : { handler: t, options: {} }, o = new IntersectionObserver(function() {
    var v;
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], d = arguments.length > 1 ? arguments[1] : void 0;
    const c = (v = e._observe) == null ? void 0 : v[n.instance.$.uid];
    if (!c)
      return;
    const u = i.some((y) => y.isIntersecting);
    !l || a.quiet && !c.init || a.once && !u && !c.init || l(u, i, d), u && a.once ? Yn(e, n) : c.init = !0;
  }, r);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = { init: !1, observer: o }, o.observe(e);
}, unmounted: Yn }, zr = W({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...ma(), ...ae(), ...on() }, "VImg"), ha = F()({ name: "VImg", directives: { intersect: ga }, props: zr(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, n) {
  let { emit: a, slots: t } = n;
  const l = me("VImg"), r = fe(""), o = X(), i = fe(e.eager ? "loading" : "idle"), d = fe(), c = fe(), u = w(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), v = w(() => u.value.aspect || d.value / c.value || 0);
  function y(p) {
    if ((!e.eager || !p) && (!tn || p || e.eager)) {
      if (i.value = "loading", u.value.lazySrc) {
        const M = new Image();
        M.src = u.value.lazySrc, V(M, null);
      }
      u.value.src && Re(() => {
        var M;
        a("loadstart", ((M = o.value) == null ? void 0 : M.currentSrc) || u.value.src), setTimeout(() => {
          var I;
          if (!l.isUnmounted)
            if ((I = o.value) != null && I.complete) {
              if (o.value.naturalWidth || D(), i.value === "error")
                return;
              v.value || V(o.value, null), i.value === "loading" && m();
            } else
              v.value || V(o.value), f();
        });
      });
    }
  }
  function m() {
    var p;
    l.isUnmounted || (f(), V(o.value), i.value = "loaded", a("load", ((p = o.value) == null ? void 0 : p.currentSrc) || u.value.src));
  }
  function D() {
    var p;
    l.isUnmounted || (i.value = "error", a("error", ((p = o.value) == null ? void 0 : p.currentSrc) || u.value.src));
  }
  function f() {
    const p = o.value;
    p && (r.value = p.currentSrc || p.src);
  }
  re(() => e.src, () => {
    y(i.value !== "idle");
  }), re(v, (p, M) => {
    !p && M && o.value && V(o.value);
  }), na(() => y());
  let b = -1;
  function V(p) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const I = () => {
      if (clearTimeout(b), l.isUnmounted)
        return;
      const { naturalHeight: S, naturalWidth: g } = p;
      S || g ? (d.value = g, c.value = S) : p.complete || i.value !== "loading" || M == null ? (p.currentSrc.endsWith(".svg") || p.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, c.value = 1) : b = window.setTimeout(I, M);
    };
    I();
  }
  Xe(() => {
    clearTimeout(b);
  });
  const $ = w(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), B = () => {
    var I;
    if (!u.value.src || i.value === "idle")
      return null;
    const p = s("img", { class: ["v-img__img", $.value], style: { objectPosition: e.position }, src: u.value.src, srcset: u.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: o, onLoad: m, onError: D }, null), M = (I = t.sources) == null ? void 0 : I.call(t);
    return s(Ae, { transition: e.transition, appear: !0 }, { default: () => [Pe(M ? s("picture", { class: "v-img__picture" }, [M, p]) : p, [[Qt, i.value === "loaded"]])] });
  }, P = () => s(Ae, { transition: e.transition }, { default: () => [u.value.lazySrc && i.value !== "loaded" && s("img", { class: ["v-img__img", "v-img__img--preload", $.value], style: { objectPosition: e.position }, src: u.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), z = () => t.placeholder ? s(Ae, { transition: e.transition, appear: !0 }, { default: () => [(i.value === "loading" || i.value === "error" && !t.error) && s("div", { class: "v-img__placeholder" }, [t.placeholder()])] }) : null, O = () => t.error ? s(Ae, { transition: e.transition, appear: !0 }, { default: () => [i.value === "error" && s("div", { class: "v-img__error" }, [t.error()])] }) : null, Y = () => e.gradient ? s("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, _ = fe(!1);
  {
    const p = re(v, (M) => {
      M && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          _.value = !0;
        });
      }), p());
    });
  }
  return K(() => {
    const p = Ln.filterProps(e);
    return Pe(s(Ln, te({ class: ["v-img", { "v-img--booting": !_.value }, e.class], style: [{ width: ee(e.width === "auto" ? d.value : e.width) }, e.style] }, p, { aspectRatio: v.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => s(ye, null, [s(B, null, null), s(P, null, null), s(Y, null, null), s(z, null, null), s(O, null, null)]), default: t.default }), [[_t("intersect"), { handler: y, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: r, image: o, state: i, naturalWidth: d, naturalHeight: c };
} }), Nr = [null, "default", "comfortable", "compact"], qe = W({ density: { type: String, default: "default", validator: (e) => Nr.includes(e) } }, "density");
function st(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  return { densityClasses: w(() => `${n}--density-${e.density}`) };
}
const Te = W({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Le(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  return { roundedClasses: w(() => {
    const a = lt(e) ? e.value : e.rounded, t = [];
    if (a === !0 || a === "")
      t.push(`${n}--rounded`);
    else if (typeof a == "string" || a === 0)
      for (const l of String(a).split(" "))
        t.push(`rounded-${l}`);
    return t;
  }) };
}
const Wr = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function sn(e, n) {
  return s(ye, null, [e && s("span", { key: "overlay", class: `${n}__overlay` }, null), s("span", { key: "underlay", class: `${n}__underlay` }, null)]);
}
const It = W({ color: String, variant: { type: String, default: "elevated", validator: (e) => Wr.includes(e) } }, "variant");
function un(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  const a = w(() => {
    const { variant: r } = N(e);
    return `${n}--variant-${r}`;
  }), { colorClasses: t, colorStyles: l } = rn(w(() => {
    const { variant: r, color: o } = N(e);
    return { [["elevated", "flat"].includes(r) ? "background" : "text"]: o };
  }));
  return { colorClasses: t, colorStyles: l, variantClasses: a };
}
const Er = W({ start: Boolean, end: Boolean, icon: se, image: String, text: String, ...ae(), ...qe(), ...Te(), ...xt(), ...xe(), ...ge(), ...It({ variant: "flat" }) }, "VAvatar"), zn = F()({ name: "VAvatar", props: Er(), setup(e, n) {
  let { slots: a } = n;
  const { themeClasses: t } = we(e), { colorClasses: l, colorStyles: r, variantClasses: o } = un(e), { densityClasses: i } = st(e), { roundedClasses: d } = Le(e), { sizeClasses: c, sizeStyles: u } = $t(e);
  return K(() => s(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, t.value, l.value, i.value, d.value, c.value, o.value, e.class], style: [r.value, u.value, e.style] }, { default: () => {
    var v;
    return [e.image ? s(ha, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? s(Fe, { key: "icon", icon: e.icon }, null) : ((v = a.default) == null ? void 0 : v.call(a)) ?? e.text, sn(!1, "v-avatar")];
  } })), {};
} }), Hr = W({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), ve = F(!1)({ name: "VDefaultsProvider", props: Hr(), setup(e, n) {
  let { slots: a } = n;
  const { defaults: t, disabled: l, reset: r, root: o, scoped: i } = Kt(e);
  return an(t, { reset: r, root: o, scoped: i, disabled: l }), () => {
    var d;
    return (d = a.default) == null ? void 0 : d.call(a);
  };
} }), jr = W({ appendAvatar: String, appendIcon: se, prependAvatar: String, prependIcon: se, subtitle: String, title: String, ...ae(), ...qe() }, "VCardItem"), Fr = F()({ name: "VCardItem", props: jr(), setup(e, n) {
  let { slots: a } = n;
  return K(() => {
    var c;
    const t = !(!e.prependAvatar && !e.prependIcon), l = !(!t && !a.prepend), r = !(!e.appendAvatar && !e.appendIcon), o = !(!r && !a.append), i = !(!e.title && !a.title), d = !(!e.subtitle && !a.subtitle);
    return s("div", { class: ["v-card-item", e.class], style: e.style }, [l && s("div", { key: "prepend", class: "v-card-item__prepend" }, [a.prepend ? s(ve, { key: "prepend-defaults", disabled: !t, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, a.prepend) : t && s(zn, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), s("div", { class: "v-card-item__content" }, [i && s(Yr, { key: "title" }, { default: () => {
      var u;
      return [((u = a.title) == null ? void 0 : u.call(a)) ?? e.title];
    } }), d && s(Lr, { key: "subtitle" }, { default: () => {
      var u;
      return [((u = a.subtitle) == null ? void 0 : u.call(a)) ?? e.subtitle];
    } }), (c = a.default) == null ? void 0 : c.call(a)]), o && s("div", { key: "append", class: "v-card-item__append" }, [a.append ? s(ve, { key: "append-defaults", disabled: !r, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, a.append) : r && s(zn, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), Rr = it("v-card-text"), Mt = W({ border: [Boolean, Number, String] }, "border");
function At(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  return { borderClasses: w(() => {
    const a = lt(e) ? e.value : e.border, t = [];
    if (a === !0 || a === "")
      t.push(`${n}--border`);
    else if (typeof a == "string" || a === 0)
      for (const l of String(a).split(" "))
        t.push(`border-${l}`);
    return t;
  }) };
}
const Bt = W({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation");
function Ot(e) {
  return { elevationClasses: w(() => {
    const n = lt(e) ? e.value : e.elevation, a = [];
    return n == null || a.push(`elevation-${n}`), a;
  }) };
}
function ya(e, n) {
  const a = X(), t = fe(!1);
  if (tn) {
    const l = new IntersectionObserver((r) => {
      e == null || e(r, l), t.value = !!r.find((o) => o.isIntersecting);
    }, n);
    Xe(() => {
      l.disconnect();
    }), re(a, (r, o) => {
      o && (l.unobserve(o), t.value = !1), r && l.observe(r);
    }, { flush: "post" });
  }
  return { intersectionRef: a, isIntersecting: t };
}
const ba = Symbol.for("vuetify:locale");
function ka() {
  const e = ke(ba);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Pt() {
  const e = ke(ba);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Nn = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Tt = W({ location: String }, "location");
function Lt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], a = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: t } = Pt();
  return { locationStyles: w(() => {
    if (!e.location)
      return {};
    const { side: r, align: o } = function(c, u) {
      let [v, y] = c.split(" ");
      return y || (y = Ut(fr, v) ? "start" : Ut(mr, v) ? "top" : "center"), { side: _n(v, u), align: _n(y, u) };
    }(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, t.value);
    function i(c) {
      return a ? a(c) : 0;
    }
    const d = {};
    return r !== "center" && (n ? d[Nn[r]] = `calc(100% - ${i(r)}px)` : d[r] = 0), o !== "center" ? n ? d[Nn[o]] = `calc(100% - ${i(o)}px)` : d[o] = 0 : (r === "center" ? d.top = d.left = "50%" : d[{ top: "left", bottom: "left", left: "top", right: "top" }[r]] = "50%", d.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[r]), d;
  }) };
}
const Ur = W({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ae(), ...Tt({ location: "top" }), ...Te(), ...xe(), ...ge() }, "VProgressLinear"), Gr = F()({ name: "VProgressLinear", props: Ur(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: a } = n;
  const t = oe(e, "modelValue"), { isRtl: l, rtlClasses: r } = Pt(), { themeClasses: o } = we(e), { locationStyles: i } = Lt(e), { textColorClasses: d, textColorStyles: c } = Ue(e, "color"), { backgroundColorClasses: u, backgroundColorStyles: v } = Ge(w(() => e.bgColor || e.color)), { backgroundColorClasses: y, backgroundColorStyles: m } = Ge(e, "color"), { roundedClasses: D } = Le(e), { intersectionRef: f, isIntersecting: b } = ya(), V = w(() => parseInt(e.max, 10)), $ = w(() => parseInt(e.height, 10)), B = w(() => parseFloat(e.bufferValue) / V.value * 100), P = w(() => parseFloat(t.value) / V.value * 100), z = w(() => l.value !== e.reverse), O = w(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), Y = w(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function _(p) {
    if (!f.value)
      return;
    const { left: M, right: I, width: S } = f.value.getBoundingClientRect(), g = z.value ? S - p.clientX + (I - S) : p.clientX - M;
    t.value = Math.round(g / S * V.value);
  }
  return K(() => s(e.tag, { ref: f, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && b.value, "v-progress-linear--reverse": z.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, D.value, o.value, r.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ee($.value) : 0, "--v-progress-linear-height": ee($.value), ...i.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : P.value, onClick: e.clickable && _ }, { default: () => [e.stream && s("div", { key: "stream", class: ["v-progress-linear__stream", d.value], style: { ...c.value, [z.value ? "left" : "right"]: ee(-$.value), borderTop: `${ee($.value / 2)} dotted`, opacity: Y.value, top: `calc(50% - ${ee($.value / 4)})`, width: ee(100 - B.value, "%"), "--v-progress-linear-stream-to": ee($.value * (z.value ? 1 : -1)) } }, null), s("div", { class: ["v-progress-linear__background", u.value], style: [v.value, { opacity: Y.value, width: ee(e.stream ? B.value : 100, "%") }] }, null), s(wt, { name: O.value }, { default: () => [e.indeterminate ? s("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((p) => s("div", { key: p, class: ["v-progress-linear__indeterminate", p, y.value], style: m.value }, null))]) : s("div", { class: ["v-progress-linear__determinate", y.value], style: [m.value, { width: ee(P.value, "%") }] }, null)] }), a.default && s("div", { class: "v-progress-linear__content" }, [a.default({ value: P.value, buffer: B.value })])] })), {};
} }), dn = W({ loading: [Boolean, String] }, "loader");
function cn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  return { loaderClasses: w(() => ({ [`${n}--loading`]: e.loading })) };
}
function Sa(e, n) {
  var t;
  let { slots: a } = n;
  return s("div", { class: `${e.name}__loader` }, [((t = a.default) == null ? void 0 : t.call(a, { color: e.color, isActive: e.active })) || s(Gr, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Xr = ["static", "relative", "fixed", "absolute", "sticky"], pn = W({ position: { type: String, validator: (e) => Xr.includes(e) } }, "position");
function vn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  return { positionClasses: w(() => e.position ? `${n}--${e.position}` : void 0) };
}
function wa(e, n) {
  const a = nr("RouterLink"), t = w(() => !(!e.href && !e.to)), l = w(() => (t == null ? void 0 : t.value) || wn(n, "click") || wn(e, "click"));
  if (typeof a == "string")
    return { isLink: t, isClickable: l, href: pe(e, "href") };
  const r = e.to ? a.useLink(e) : void 0;
  return { isLink: t, isClickable: l, route: r == null ? void 0 : r.route, navigate: r == null ? void 0 : r.navigate, isActive: r && w(() => {
    var o, i;
    return e.exact ? (o = r.isExactActive) == null ? void 0 : o.value : (i = r.isActive) == null ? void 0 : i.value;
  }), href: w(() => e.to ? r == null ? void 0 : r.route.value.href : e.href) };
}
const _a = W({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router"), Xt = Symbol("rippleStop"), qr = 80;
function Wn(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function qt(e) {
  return e.constructor.name === "TouchEvent";
}
function Ca(e) {
  return e.constructor.name === "KeyboardEvent";
}
const kt = { show(e, n) {
  var m;
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((m = n == null ? void 0 : n._ripple) != null && m.enabled))
    return;
  const t = document.createElement("span"), l = document.createElement("span");
  t.appendChild(l), t.className = "v-ripple__container", a.class && (t.className += ` ${a.class}`);
  const { radius: r, scale: o, x: i, y: d, centerX: c, centerY: u } = function(D, f) {
    var Y;
    let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, V = 0, $ = 0;
    if (!Ca(D)) {
      const _ = f.getBoundingClientRect(), p = qt(D) ? D.touches[D.touches.length - 1] : D;
      V = p.clientX - _.left, $ = p.clientY - _.top;
    }
    let B = 0, P = 0.3;
    (Y = f._ripple) != null && Y.circle ? (P = 0.15, B = f.clientWidth / 2, B = b.center ? B : B + Math.sqrt((V - B) ** 2 + ($ - B) ** 2) / 4) : B = Math.sqrt(f.clientWidth ** 2 + f.clientHeight ** 2) / 2;
    const z = (f.clientWidth - 2 * B) / 2 + "px", O = (f.clientHeight - 2 * B) / 2 + "px";
    return { radius: B, scale: P, x: b.center ? z : V - B + "px", y: b.center ? O : $ - B + "px", centerX: z, centerY: O };
  }(e, n, a), v = 2 * r + "px";
  l.className = "v-ripple__animation", l.style.width = v, l.style.height = v, n.appendChild(t);
  const y = window.getComputedStyle(n);
  y && y.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Wn(l, `translate(${i}, ${d}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), setTimeout(() => {
    l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Wn(l, `translate(${c}, ${u}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var r;
  if (!((r = e == null ? void 0 : e._ripple) != null && r.enabled))
    return;
  const n = e.getElementsByClassName("v-ripple__animation");
  if (n.length === 0)
    return;
  const a = n[n.length - 1];
  if (a.dataset.isHiding)
    return;
  a.dataset.isHiding = "true";
  const t = performance.now() - Number(a.dataset.activated), l = Math.max(250 - t, 0);
  setTimeout(() => {
    a.classList.remove("v-ripple__animation--in"), a.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var o;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((o = a.parentNode) == null ? void 0 : o.parentNode) === e && e.removeChild(a.parentNode);
    }, 300);
  }, l);
} };
function xa(e) {
  return e === void 0 || !!e;
}
function tt(e) {
  const n = {}, a = e.currentTarget;
  if (a != null && a._ripple && !a._ripple.touched && !e[Xt]) {
    if (e[Xt] = !0, qt(e))
      a._ripple.touched = !0, a._ripple.isTouch = !0;
    else if (a._ripple.isTouch)
      return;
    if (n.center = a._ripple.centered || Ca(e), a._ripple.class && (n.class = a._ripple.class), qt(e)) {
      if (a._ripple.showTimerCommit)
        return;
      a._ripple.showTimerCommit = () => {
        kt.show(e, a, n);
      }, a._ripple.showTimer = window.setTimeout(() => {
        var t;
        (t = a == null ? void 0 : a._ripple) != null && t.showTimerCommit && (a._ripple.showTimerCommit(), a._ripple.showTimerCommit = null);
      }, qr);
    } else
      kt.show(e, a, n);
  }
}
function En(e) {
  e[Xt] = !0;
}
function de(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit)
      return n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, void (n._ripple.showTimer = window.setTimeout(() => {
        de(e);
      }));
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), kt.hide(n);
  }
}
function $a(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let nt = !1;
function Va(e) {
  nt || e.keyCode !== bn.enter && e.keyCode !== bn.space || (nt = !0, tt(e));
}
function Da(e) {
  nt = !1, de(e);
}
function Ia(e) {
  nt && (nt = !1, de(e));
}
function Hn(e, n, a) {
  const { value: t, modifiers: l } = n, r = xa(t);
  if (r || kt.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = r, e._ripple.centered = l.center, e._ripple.circle = l.circle, Rt(t) && t.class && (e._ripple.class = t.class), r && !a) {
    if (l.stop)
      return e.addEventListener("touchstart", En, { passive: !0 }), void e.addEventListener("mousedown", En);
    e.addEventListener("touchstart", tt, { passive: !0 }), e.addEventListener("touchend", de, { passive: !0 }), e.addEventListener("touchmove", $a, { passive: !0 }), e.addEventListener("touchcancel", de), e.addEventListener("mousedown", tt), e.addEventListener("mouseup", de), e.addEventListener("mouseleave", de), e.addEventListener("keydown", Va), e.addEventListener("keyup", Da), e.addEventListener("blur", Ia), e.addEventListener("dragstart", de, { passive: !0 });
  } else
    !r && a && Ma(e);
}
function Ma(e) {
  e.removeEventListener("mousedown", tt), e.removeEventListener("touchstart", tt), e.removeEventListener("touchend", de), e.removeEventListener("touchmove", $a), e.removeEventListener("touchcancel", de), e.removeEventListener("mouseup", de), e.removeEventListener("mouseleave", de), e.removeEventListener("keydown", Va), e.removeEventListener("keyup", Da), e.removeEventListener("dragstart", de), e.removeEventListener("blur", Ia);
}
const Aa = { mounted: function(e, n) {
  Hn(e, n, !1);
}, unmounted: function(e) {
  delete e._ripple, Ma(e);
}, updated: function(e, n) {
  n.value !== n.oldValue && Hn(e, n, xa(n.oldValue));
} }, Zr = W({ appendAvatar: String, appendIcon: se, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: se, ripple: { type: [Boolean, Object], default: !0 }, subtitle: String, text: String, title: String, ...Mt(), ...ae(), ...qe(), ...Vt(), ...Bt(), ...dn(), ...Tt(), ...pn(), ...Te(), ..._a(), ...xe(), ...ge(), ...It({ variant: "elevated" }) }, "VCard"), Kr = F()({ name: "VCard", directives: { Ripple: Aa }, props: Zr(), setup(e, n) {
  let { attrs: a, slots: t } = n;
  const { themeClasses: l } = we(e), { borderClasses: r } = At(e), { colorClasses: o, colorStyles: i, variantClasses: d } = un(e), { densityClasses: c } = st(e), { dimensionStyles: u } = Dt(e), { elevationClasses: v } = Ot(e), { loaderClasses: y } = cn(e), { locationStyles: m } = Lt(e), { positionClasses: D } = vn(e), { roundedClasses: f } = Le(e), b = wa(e, a), V = w(() => e.link !== !1 && b.isLink.value), $ = w(() => !e.disabled && e.link !== !1 && (e.link || b.isClickable.value));
  return K(() => {
    const B = V.value ? "a" : e.tag, P = !(!t.title && !e.title), z = !(!t.subtitle && !e.subtitle), O = P || z, Y = !!(t.append || e.appendAvatar || e.appendIcon), _ = !!(t.prepend || e.prependAvatar || e.prependIcon), p = !(!t.image && !e.image), M = O || _ || Y, I = !(!t.text && !e.text);
    return Pe(s(B, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": $.value }, l.value, r.value, o.value, c.value, v.value, y.value, D.value, f.value, d.value, e.class], style: [i.value, u.value, m.value, e.style], href: b.href.value, onClick: $.value && b.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var S;
      return [p && s("div", { key: "image", class: "v-card__image" }, [t.image ? s(ve, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, t.image) : s(ha, { key: "image-img", cover: !0, src: e.image }, null)]), s(Sa, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: t.loader }), M && s(Fr, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: t.item, prepend: t.prepend, title: t.title, subtitle: t.subtitle, append: t.append }), I && s(Rr, { key: "text" }, { default: () => {
        var g;
        return [((g = t.text) == null ? void 0 : g.call(t)) ?? e.text];
      } }), (S = t.default) == null ? void 0 : S.call(t), t.actions && s(Tr, null, { default: t.actions }), sn($.value, "v-card")];
    } }), [[_t("ripple"), $.value && e.ripple]]);
  }), {};
} }), Ba = W({ divided: Boolean, ...Mt(), ...ae(), ...qe(), ...Bt(), ...Te(), ...xe(), ...ge(), ...It() }, "VBtnGroup"), jn = F()({ name: "VBtnGroup", props: Ba(), setup(e, n) {
  let { slots: a } = n;
  const { themeClasses: t } = we(e), { densityClasses: l } = st(e), { borderClasses: r } = At(e), { elevationClasses: o } = Ot(e), { roundedClasses: i } = Le(e);
  an({ VBtn: { height: "auto", color: pe(e, "color"), density: pe(e, "density"), flat: !0, variant: pe(e, "variant") } }), K(() => s(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, t.value, r.value, l.value, o.value, i.value, e.class], style: e.style }, a));
} }), Jr = W({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Qr = W({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function el(e, n) {
  let a = !1;
  const t = Zt([]), l = oe(e, "modelValue", [], (c) => c == null ? [] : Fn(t, be(c)), (c) => {
    const u = function(v, y) {
      const m = [];
      return y.forEach((D) => {
        const f = v.findIndex((b) => b.id === D);
        if (~f) {
          const b = v[f];
          m.push(b.value != null ? b.value : f);
        }
      }), m;
    }(t, c);
    return e.multiple ? u : u[0];
  }), r = me("useGroup");
  function o() {
    const c = t.find((u) => !u.disabled);
    c && e.mandatory === "force" && !l.value.length && (l.value = [c.id]);
  }
  function i(c) {
    if (e.multiple && Je('This method is not supported when using "multiple" prop'), l.value.length) {
      const u = l.value[0], v = t.findIndex((D) => D.id === u);
      let y = (v + c) % t.length, m = t[y];
      for (; m.disabled && y !== v; )
        y = (y + c) % t.length, m = t[y];
      if (m.disabled)
        return;
      l.value = [t[y].id];
    } else {
      const u = t.find((v) => !v.disabled);
      u && (l.value = [u.id]);
    }
  }
  Ct(() => {
    o();
  }), Xe(() => {
    a = !0;
  });
  const d = { register: function(c, u) {
    const v = c, y = mt(Symbol.for(`${n.description}:id`), r == null ? void 0 : r.vnode).indexOf(u);
    y > -1 ? t.splice(y, 0, v) : t.push(v);
  }, unregister: function(c) {
    if (a)
      return;
    o();
    const u = t.findIndex((v) => v.id === c);
    t.splice(u, 1);
  }, selected: l, select: function(c, u) {
    const v = t.find((y) => y.id === c);
    if (!u || !(v != null && v.disabled))
      if (e.multiple) {
        const y = l.value.slice(), m = y.findIndex((f) => f === c), D = ~m;
        if (u = u ?? !D, D && e.mandatory && y.length <= 1 || !D && e.max != null && y.length + 1 > e.max)
          return;
        m < 0 && u ? y.push(c) : m >= 0 && !u && y.splice(m, 1), l.value = y;
      } else {
        const y = l.value.includes(c);
        if (e.mandatory && y)
          return;
        l.value = u ?? !y ? [c] : [];
      }
  }, disabled: pe(e, "disabled"), prev: () => i(t.length - 1), next: () => i(1), isSelected: (c) => l.value.includes(c), selectedClass: w(() => e.selectedClass), items: w(() => t), getItemIndex: (c) => function(u, v) {
    const y = Fn(u, [v]);
    return y.length ? u.findIndex((m) => m.id === y[0]) : -1;
  }(t, c) };
  return rt(n, d), d;
}
function Fn(e, n) {
  const a = [];
  return n.forEach((t) => {
    const l = e.find((o) => la(t, o.value)), r = e[t];
    (l == null ? void 0 : l.value) != null ? a.push(l.id) : r != null && a.push(r.id);
  }), a;
}
const Oa = Symbol.for("vuetify:v-btn-toggle"), tl = W({ ...Ba(), ...Jr() }, "VBtnToggle");
F()({ name: "VBtnToggle", props: tl(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: a } = n;
  const { isSelected: t, next: l, prev: r, select: o, selected: i } = el(e, Oa);
  return K(() => {
    const d = jn.filterProps(e);
    return s(jn, te({ class: ["v-btn-toggle", e.class] }, d, { style: e.style }), { default: () => {
      var c;
      return [(c = a.default) == null ? void 0 : c.call(a, { isSelected: t, next: l, prev: r, select: o, selected: i })];
    } });
  }), { next: l, prev: r, select: o };
} });
const nl = W({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ae(), ...xt(), ...xe({ tag: "div" }), ...ge() }, "VProgressCircular"), al = F()({ name: "VProgressCircular", props: nl(), setup(e, n) {
  let { slots: a } = n;
  const t = 2 * Math.PI * 20, l = X(), { themeClasses: r } = we(e), { sizeClasses: o, sizeStyles: i } = $t(e), { textColorClasses: d, textColorStyles: c } = Ue(pe(e, "color")), { textColorClasses: u, textColorStyles: v } = Ue(pe(e, "bgColor")), { intersectionRef: y, isIntersecting: m } = ya(), { resizeRef: D, contentRect: f } = function(O) {
    let Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
    const _ = X(), p = X();
    if (en) {
      const M = new ResizeObserver((I) => {
        O == null || O(I, M), I.length && (p.value = Y === "content" ? I[0].contentRect : I[0].target.getBoundingClientRect());
      });
      Xe(() => {
        M.disconnect();
      }), re(_, (I, S) => {
        S && (M.unobserve(yn(S)), p.value = void 0), I && M.observe(yn(I));
      }, { flush: "post" });
    }
    return { resizeRef: _, contentRect: aa(p) };
  }(), b = w(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), V = w(() => Number(e.width)), $ = w(() => i.value ? Number(e.size) : f.value ? f.value.width : Math.max(V.value, 32)), B = w(() => 20 / (1 - V.value / $.value) * 2), P = w(() => V.value / $.value * B.value), z = w(() => ee((100 - b.value) / 100 * t));
  return at(() => {
    y.value = l.value, D.value = l.value;
  }), K(() => s(e.tag, { ref: l, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": m.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, r.value, o.value, d.value, e.class], style: [i.value, c.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : b.value }, { default: () => [s("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${B.value} ${B.value}` }, [s("circle", { class: ["v-progress-circular__underlay", u.value], style: v.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": t, "stroke-dashoffset": 0 }, null), s("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": t, "stroke-dashoffset": z.value }, null)]), a.default && s("div", { class: "v-progress-circular__content" }, [a.default({ value: b.value })])] })), {};
} }), rl = W({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Oa }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: se, appendIcon: se, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Mt(), ...ae(), ...qe(), ...Vt(), ...Bt(), ...Qr(), ...dn(), ...Tt(), ...pn(), ...Te(), ..._a(), ...xt(), ...xe({ tag: "button" }), ...ge(), ...It({ variant: "elevated" }) }, "VBtn"), Ce = F()({ name: "VBtn", directives: { Ripple: Aa }, props: rl(), emits: { "group:selected": (e) => !0 }, setup(e, n) {
  let { attrs: a, slots: t } = n;
  const { themeClasses: l } = we(e), { borderClasses: r } = At(e), { colorClasses: o, colorStyles: i, variantClasses: d } = un(e), { densityClasses: c } = st(e), { dimensionStyles: u } = Dt(e), { elevationClasses: v } = Ot(e), { loaderClasses: y } = cn(e), { locationStyles: m } = Lt(e), { positionClasses: D } = vn(e), { roundedClasses: f } = Le(e), { sizeClasses: b, sizeStyles: V } = $t(e), $ = function(p, M) {
    let I = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
    const S = me("useGroupItem");
    if (!S)
      throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
    const g = ot();
    rt(Symbol.for(`${M.description}:id`), g);
    const h = ke(M, null);
    if (!h) {
      if (!I)
        return h;
      throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${M.description}`);
    }
    const k = pe(p, "value"), x = w(() => !(!h.disabled.value && !p.disabled));
    h.register({ id: g, value: k, disabled: x }, S), Xe(() => {
      h.unregister(g);
    });
    const A = w(() => h.isSelected(g)), T = w(() => A.value && [h.selectedClass.value, p.selectedClass]);
    return re(A, (H) => {
      S.emit("group:selected", { value: H });
    }), { id: g, isSelected: A, toggle: () => h.select(g, !A.value), select: (H) => h.select(g, H), selectedClass: T, value: k, disabled: x, group: h };
  }(e, e.symbol, !1), B = wa(e, a), P = w(() => {
    var p;
    return e.active !== void 0 ? e.active : B.isLink.value ? (p = B.isActive) == null ? void 0 : p.value : $ == null ? void 0 : $.isSelected.value;
  }), z = w(() => ($ == null ? void 0 : $.disabled.value) || e.disabled), O = w(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), Y = w(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function _(p) {
    var M;
    z.value || B.isLink.value && (p.metaKey || p.ctrlKey || p.shiftKey || p.button !== 0 || a.target === "_blank") || ((M = B.navigate) == null || M.call(B, p), $ == null || $.toggle());
  }
  return function(p, M) {
    re(() => {
      var I;
      return (I = p.isActive) == null ? void 0 : I.value;
    }, (I) => {
      p.isLink.value && I && M && Re(() => {
        M(!0);
      });
    }, { immediate: !0 });
  }(B, $ == null ? void 0 : $.select), K(() => {
    var h, k;
    const p = B.isLink.value ? "a" : e.tag, M = !(!e.prependIcon && !t.prepend), I = !(!e.appendIcon && !t.append), S = !(!e.icon || e.icon === !0), g = ($ == null ? void 0 : $.isSelected.value) && (!B.isLink.value || ((h = B.isActive) == null ? void 0 : h.value)) || !$ || ((k = B.isActive) == null ? void 0 : k.value);
    return Pe(s(p, { type: p === "a" ? void 0 : "button", class: ["v-btn", $ == null ? void 0 : $.selectedClass.value, { "v-btn--active": P.value, "v-btn--block": e.block, "v-btn--disabled": z.value, "v-btn--elevated": O.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, l.value, r.value, g ? o.value : void 0, c.value, v.value, y.value, D.value, f.value, b.value, d.value, e.class], style: [g ? i.value : void 0, u.value, m.value, V.value, e.style], disabled: z.value || void 0, href: B.href.value, onClick: _, value: Y.value }, { default: () => {
      var x;
      return [sn(!0, "v-btn"), !e.icon && M && s("span", { key: "prepend", class: "v-btn__prepend" }, [t.prepend ? s(ve, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, t.prepend) : s(Fe, { key: "prepend-icon", icon: e.prependIcon }, null)]), s("span", { class: "v-btn__content", "data-no-activator": "" }, [!t.default && S ? s(Fe, { key: "content-icon", icon: e.icon }, null) : s(ve, { key: "content-defaults", disabled: !S, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var A;
        return [((A = t.default) == null ? void 0 : A.call(t)) ?? e.text];
      } })]), !e.icon && I && s("span", { key: "append", class: "v-btn__append" }, [t.append ? s(ve, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, t.append) : s(Fe, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && s("span", { key: "loader", class: "v-btn__loader" }, [((x = t.loader) == null ? void 0 : x.call(t)) ?? s(al, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[_t("ripple"), !z.value && e.ripple, null]]);
  }), {};
} }), ll = it("v-spacer", "div", "VSpacer"), Pa = W({ active: { type: [String, Array], default: void 0 }, disabled: { type: [Boolean, String, Array], default: !1 }, nextIcon: { type: [String], default: "$next" }, prevIcon: { type: [String], default: "$prev" }, modeIcon: { type: [String], default: "$subgroup" }, text: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), Rn = F()({ name: "VDatePickerControls", props: Pa(), emits: { "click:year": () => !0, "click:month": () => !0, "click:prev": () => !0, "click:next": () => !0, "click:text": () => !0 }, setup(e, n) {
  let { emit: a } = n;
  const t = w(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = w(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = w(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), o = w(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
  function i() {
    a("click:prev");
  }
  function d() {
    a("click:next");
  }
  function c() {
    a("click:year");
  }
  function u() {
    a("click:month");
  }
  return K(() => s("div", { class: ["v-date-picker-controls"] }, [s(Ce, { class: "v-date-picker-controls__month-btn", disabled: t.value, text: e.text, variant: "text", rounded: !0, onClick: u }, null), s(Ce, { key: "mode-btn", class: "v-date-picker-controls__mode-btn", disabled: l.value, density: "comfortable", icon: e.modeIcon, variant: "text", onClick: c }, null), s(ll, { key: "mode-spacer" }, null), s("div", { key: "month-buttons", class: "v-date-picker-controls__month" }, [s(Ce, { disabled: r.value, icon: e.prevIcon, variant: "text", onClick: i }, null), s(Ce, { disabled: o.value, icon: e.nextIcon, variant: "text", onClick: d }, null)])])), {};
} }), il = W({ appendIcon: String, color: String, header: String, transition: String, onClick: Oe() }, "VDatePickerHeader"), Un = F()({ name: "VDatePickerHeader", props: il(), emits: { click: () => !0, "click:append": () => !0 }, setup(e, n) {
  let { emit: a, slots: t } = n;
  const { backgroundColorClasses: l, backgroundColorStyles: r } = Ge(e, "color");
  function o() {
    a("click");
  }
  function i() {
    a("click:append");
  }
  return K(() => {
    const d = !(!t.default && !e.header), c = !(!t.append && !e.appendIcon);
    return s("div", { class: ["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value], style: r.value, onClick: o }, [t.prepend && s("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [t.prepend()]), d && s(Ae, { key: "content", name: e.transition }, { default: () => {
      var u;
      return [s("div", { key: e.header, class: "v-date-picker-header__content" }, [((u = t.default) == null ? void 0 : u.call(t)) ?? e.header])];
    } }), c && s("div", { class: "v-date-picker-header__append" }, [t.append ? s(ve, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var u;
      return [(u = t.append) == null ? void 0 : u.call(t)];
    } }) : s(Ce, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: i }, null)])]);
  }), {};
} }), ol = Symbol.for("vuetify:date-adapter");
function Yt() {
  const e = ke(ol);
  if (!e)
    throw new Error("[Vuetify] Could not find injected date adapter");
  return e;
}
const Ta = W({ allowedDates: [Array, Function], disabled: Boolean, color: String, month: [Number, String], hideWeekdays: Boolean, max: null, min: null, modelValue: Array, multiple: Boolean, showAdjacentMonths: Boolean, showWeek: Boolean, year: [Number, String] }, "VDatePickerMonth"), Gn = F()({ name: "VDatePickerMonth", props: Ta(), emits: { "update:modelValue": (e) => !0, "update:month": (e) => !0, "update:year": (e) => !0 }, setup(e, n) {
  let { emit: a, slots: t } = n;
  const l = X(), r = Yt(), o = oe(e, "modelValue", [], (f) => be(f)), i = w(() => {
    var b;
    const f = (b = o.value) == null ? void 0 : b[0];
    return f && r.isValid(f) ? f : r.date();
  }), d = oe(e, "year", void 0, (f) => {
    let b = r.date(i.value);
    return f != null && (b = r.setYear(b, Number(f))), r.startOfYear(b);
  }, (f) => r.getYear(f)), c = oe(e, "month", void 0, (f) => {
    let b = r.date(i.value);
    return f != null && (b = r.setMonth(b, Number(f))), b = r.setYear(b, r.getYear(d.value)), b;
  }, (f) => r.getMonth(f)), u = w(() => {
    const f = r.getWeekArray(c.value), b = f.flat();
    if (b.length < 42) {
      const V = b[b.length - 1];
      let $ = [];
      for (let B = 1; B <= 42 - b.length; B++)
        $.push(r.addDays(V, B)), B % 7 == 0 && (f.push($), $ = []);
    }
    return f;
  }), v = w(() => {
    const f = u.value.flat(), b = r.date();
    return f.map((V, $) => {
      const B = r.toISO(V), P = !r.isSameMonth(V, c.value);
      return { date: V, isoDate: B, formatted: r.format(V, "keyboardDate"), year: r.getYear(V), month: r.getMonth(V), isDisabled: m(V), isWeekStart: $ % 7 == 0, isWeekEnd: $ % 7 == 6, isSelected: o.value.some((z) => r.isSameDay(V, z)), isToday: r.isSameDay(V, b), isAdjacent: P, isHidden: P && !e.showAdjacentMonths, isHovered: !1, localized: r.format(V, "dayOfMonth") };
    });
  }), y = w(() => u.value.map((f) => function(b, V) {
    const $ = b.toJsDate(V);
    let B = b.getYear($), P = b.startOfYear($);
    if ($ < P)
      B -= 1, P = b.startOfYear(b.setYear($, B));
    else {
      const Y = b.startOfYear(b.setYear($, B + 1));
      $ >= Y && (B += 1, P = Y);
    }
    const z = Math.abs($.getTime() - P.getTime()), O = Math.ceil(z / 864e5);
    return Math.floor(O / 7) + 1;
  }(r, f[0])));
  function m(f) {
    if (e.disabled)
      return !0;
    const b = r.date(f);
    return !(!e.min || !r.isAfter(e.min, b)) || !(!e.max || !r.isAfter(b, e.max)) || (Array.isArray(e.allowedDates) ? !e.allowedDates.some((V) => r.isSameDay(r.date(V), b)) : typeof e.allowedDates == "function" && !e.allowedDates(b));
  }
  function D(f) {
    if (e.multiple) {
      const b = o.value.findIndex((V) => r.isSameDay(V, f));
      if (b === -1)
        o.value = [...o.value, f];
      else {
        const V = [...o.value];
        V.splice(b, 1), o.value = V;
      }
    } else
      o.value = [f];
  }
  return () => s("div", { class: "v-date-picker-month" }, [e.showWeek && s("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && s("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [ra(" ")]), y.value.map((f) => s("div", { class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"] }, [f]))]), s("div", { ref: l, class: "v-date-picker-month__days" }, [!e.hideWeekdays && r.getWeekdays().map((f) => s("div", { class: ["v-date-picker-month__day", "v-date-picker-month__weekday"] }, [f])), v.value.map((f, b) => {
    const V = { props: { onClick: () => D(f.date) }, item: f, i: b };
    return s("div", { class: ["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": f.isAdjacent, "v-date-picker-month__day--hide-adjacent": f.isHidden, "v-date-picker-month__day--hovered": f.isHovered, "v-date-picker-month__day--selected": f.isSelected, "v-date-picker-month__day--week-end": f.isWeekEnd, "v-date-picker-month__day--week-start": f.isWeekStart }], "data-v-date": f.isDisabled ? void 0 : f.isoDate }, [(e.showAdjacentMonths || !f.isAdjacent) && s(ve, { defaults: { VBtn: { color: !f.isSelected && !f.isToday || f.isDisabled ? void 0 : e.color, disabled: f.isDisabled, icon: !0, ripple: !1, text: f.localized, variant: f.isDisabled ? "text" : f.isToday && !f.isSelected ? "outlined" : "flat", onClick: () => D(f.date) } } }, { default: () => {
      var $;
      return [(($ = t.day) == null ? void 0 : $.call(t, V)) ?? s(Ce, V.props, null)];
    } })]);
  })])]);
} }), La = W({ color: String, height: [String, Number], modelValue: Number }, "VDatePickerMonths"), Xn = F()({ name: "VDatePickerMonths", props: La(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: a } = n;
  const t = Yt(), l = oe(e, "modelValue"), r = w(() => {
    let o = t.startOfYear(t.date());
    return ia(12).map((i) => {
      const d = t.format(o, "monthShort");
      return o = t.getNextMonth(o), { text: d, value: i };
    });
  });
  return at(() => {
    l.value = l.value ?? t.getMonth(t.date());
  }), K(() => s("div", { class: "v-date-picker-months", style: { height: ee(e.height) } }, [s("div", { class: "v-date-picker-months__content" }, [r.value.map((o, i) => {
    var u;
    const d = { active: l.value === i, color: l.value === i ? e.color : void 0, rounded: !0, text: o.text, variant: l.value === o.value ? "flat" : "text", onClick: () => c(i) };
    function c(v) {
      l.value = v;
    }
    return ((u = a.month) == null ? void 0 : u.call(a, { month: o, i, props: d })) ?? s(Ce, te({ key: "month" }, d, { onClick: () => c(i) }), null);
  })])])), {};
} }), Ya = W({ color: String, height: [String, Number], min: null, max: null, modelValue: Number }, "VDatePickerYears"), qn = F()({ name: "VDatePickerYears", props: Ya(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: a } = n;
  const t = Yt(), l = oe(e, "modelValue"), r = w(() => {
    const i = t.getYear(t.date());
    let d = i - 100, c = i + 52;
    e.min && (d = t.getYear(t.date(e.min))), e.max && (c = t.getYear(t.date(e.max)));
    let u = t.startOfYear(t.date());
    return u = t.setYear(u, d), ia(c - d + 1, d).map((v) => {
      const y = t.format(u, "year");
      return u = t.setYear(u, t.getYear(u) + 1), { text: y, value: v };
    });
  });
  at(() => {
    l.value = l.value ?? t.getYear(t.date());
  });
  const o = X();
  return Ct(async () => {
    var i;
    await Re(), (i = o.value) == null || i.$el.scrollIntoView({ block: "center" });
  }), K(() => s("div", { class: "v-date-picker-years", style: { height: ee(e.height) } }, [s("div", { class: "v-date-picker-years__content" }, [r.value.map((i, d) => {
    var u;
    const c = { ref: l.value === i.value ? o : void 0, active: l.value === i.value, color: l.value === i.value ? e.color : void 0, rounded: !0, text: i.text, variant: l.value === i.value ? "flat" : "text", onClick: () => l.value = i.value };
    return ((u = a.year) == null ? void 0 : u.call(a, { year: i, i: d, props: c })) ?? s(Ce, te({ key: "month" }, c), null);
  })])])), {};
} }), sl = W({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function ue(e, n, a) {
  return F()({ name: e, props: sl({ mode: a, origin: n }), setup(t, l) {
    let { slots: r } = l;
    const o = { onBeforeEnter(i) {
      t.origin && (i.style.transformOrigin = t.origin);
    }, onLeave(i) {
      if (t.leaveAbsolute) {
        const { offsetTop: d, offsetLeft: c, offsetWidth: u, offsetHeight: v } = i;
        i._transitionInitialStyles = { position: i.style.position, top: i.style.top, left: i.style.left, width: i.style.width, height: i.style.height }, i.style.position = "absolute", i.style.top = `${d}px`, i.style.left = `${c}px`, i.style.width = `${u}px`, i.style.height = `${v}px`;
      }
      t.hideOnLeave && i.style.setProperty("display", "none", "important");
    }, onAfterLeave(i) {
      if (t.leaveAbsolute && (i != null && i._transitionInitialStyles)) {
        const { position: d, top: c, left: u, width: v, height: y } = i._transitionInitialStyles;
        delete i._transitionInitialStyles, i.style.position = d || "", i.style.top = c || "", i.style.left = u || "", i.style.width = v || "", i.style.height = y || "";
      }
    } };
    return () => {
      const i = t.group ? ar : wt;
      return St(i, { name: t.disabled ? "" : e, css: !t.disabled, ...t.group ? void 0 : { mode: t.mode }, ...t.disabled ? {} : o }, r.default);
    };
  } });
}
function za(e, n) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return F()({ name: e, props: { mode: { type: String, default: a }, disabled: Boolean }, setup(t, l) {
    let { slots: r } = l;
    return () => St(wt, { name: t.disabled ? "" : e, css: !t.disabled, ...t.disabled ? {} : n }, r.default);
  } });
}
function Na() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", a = ta(`offset-${n}`);
  return { onBeforeEnter(r) {
    r._parent = r.parentNode, r._initialStyle = { transition: r.style.transition, overflow: r.style.overflow, [n]: r.style[n] };
  }, onEnter(r) {
    const o = r._initialStyle;
    r.style.setProperty("transition", "none", "important"), r.style.overflow = "hidden";
    const i = `${r[a]}px`;
    r.style[n] = "0", r.offsetHeight, r.style.transition = o.transition, e && r._parent && r._parent.classList.add(e), requestAnimationFrame(() => {
      r.style[n] = i;
    });
  }, onAfterEnter: l, onEnterCancelled: l, onLeave(r) {
    r._initialStyle = { transition: "", overflow: r.style.overflow, [n]: r.style[n] }, r.style.overflow = "hidden", r.style[n] = `${r[a]}px`, r.offsetHeight, requestAnimationFrame(() => r.style[n] = "0");
  }, onAfterLeave: t, onLeaveCancelled: t };
  function t(r) {
    e && r._parent && r._parent.classList.remove(e), l(r);
  }
  function l(r) {
    const o = r._initialStyle[n];
    r.style.overflow = r._initialStyle.overflow, o != null && (r.style[n] = o), delete r._initialStyle;
  }
}
ue("fab-transition", "center center", "out-in"), ue("dialog-bottom-transition"), ue("dialog-top-transition");
const ul = ue("fade-transition");
ue("scale-transition"), ue("scroll-x-transition"), ue("scroll-x-reverse-transition"), ue("scroll-y-transition"), ue("scroll-y-reverse-transition"), ue("slide-x-transition"), ue("slide-x-reverse-transition");
const Wa = ue("slide-y-transition");
ue("slide-y-reverse-transition"), za("expand-transition", Na());
const dl = za("expand-x-transition", Na("", !0)), cl = W({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ae(), ...on({ transition: { component: Wa } }) }, "VCounter"), pl = F()({ name: "VCounter", functional: !0, props: cl(), setup(e, n) {
  let { slots: a } = n;
  const t = w(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return K(() => s(Ae, { transition: e.transition }, { default: () => [Pe(s("div", { class: ["v-counter", e.class], style: e.style }, [a.default ? a.default({ counter: t.value, max: e.max, value: e.value }) : t.value]), [[Qt, e.active]])] })), {};
} }), vl = W({ text: String, clickable: Boolean, ...ae(), ...ge() }, "VLabel"), fl = F()({ name: "VLabel", props: vl(), setup(e, n) {
  let { slots: a } = n;
  return K(() => {
    var t;
    return s("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (t = a.default) == null ? void 0 : t.call(a)]);
  }), {};
} }), ml = W({ floating: Boolean, ...ae() }, "VFieldLabel"), ft = F()({ name: "VFieldLabel", props: ml(), setup(e, n) {
  let { slots: a } = n;
  return K(() => s(fl, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, a)), {};
} });
function Ea(e) {
  const { t: n } = ka();
  return { InputIcon: function(a) {
    let { name: t } = a;
    const l = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[t], r = e[`onClick:${t}`], o = r && l ? n(`$vuetify.input.${l}`, e.label ?? "") : void 0;
    return s(Fe, { icon: e[`${t}Icon`], "aria-label": o, onClick: r }, null);
  } };
}
const Ha = W({ focused: Boolean, "onUpdate:focused": Oe() }, "focus");
function ja(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se();
  const a = oe(e, "focused");
  return { focusClasses: w(() => ({ [`${n}--focused`]: a.value })), isFocused: a, focus: function() {
    a.value = !0;
  }, blur: function() {
    a.value = !1;
  } };
}
const gl = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Fa = W({ appendInnerIcon: se, bgColor: String, clearable: Boolean, clearIcon: { type: se, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: se, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => gl.includes(e) }, "onClick:clear": Oe(), "onClick:appendInner": Oe(), "onClick:prependInner": Oe(), ...ae(), ...dn(), ...Te(), ...ge() }, "VField"), Ra = F()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Ha(), ...Fa() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: a, emit: t, slots: l } = n;
  const { themeClasses: r } = we(e), { loaderClasses: o } = cn(e), { focusClasses: i, isFocused: d, focus: c, blur: u } = ja(e), { InputIcon: v } = Ea(e), { roundedClasses: y } = Le(e), { rtlClasses: m } = Pt(), D = w(() => e.dirty || e.active), f = w(() => !(e.singleLine || !e.label && !l.label)), b = ot(), V = w(() => e.id || `input-${b}`), $ = w(() => `${V.value}-messages`), B = X(), P = X(), z = X(), O = w(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: Y, backgroundColorStyles: _ } = Ge(pe(e, "bgColor")), { textColorClasses: p, textColorStyles: M } = Ue(w(() => e.error || e.disabled ? void 0 : D.value && d.value ? e.color : e.baseColor));
  re(D, (g) => {
    if (f.value) {
      const h = B.value.$el, k = P.value.$el;
      requestAnimationFrame(() => {
        const x = function(Q) {
          const U = Q.getBoundingClientRect(), ne = getComputedStyle(Q), G = ne.transform;
          if (G) {
            let Z, ce, le, $e, Ve;
            if (G.startsWith("matrix3d("))
              Z = G.slice(9, -1).split(/, /), ce = +Z[0], le = +Z[5], $e = +Z[12], Ve = +Z[13];
            else {
              if (!G.startsWith("matrix("))
                return new Et(U);
              Z = G.slice(7, -1).split(/, /), ce = +Z[0], le = +Z[3], $e = +Z[4], Ve = +Z[5];
            }
            const Ye = ne.transformOrigin, Ze = U.x - $e - (1 - ce) * parseFloat(Ye), ze = U.y - Ve - (1 - le) * parseFloat(Ye.slice(Ye.indexOf(" ") + 1)), zt = ce ? U.width / ce : Q.offsetWidth + 1, ut = le ? U.height / le : Q.offsetHeight + 1;
            return new Et({ x: Ze, y: ze, width: zt, height: ut });
          }
          return new Et(U);
        }(h), A = k.getBoundingClientRect(), T = A.x - x.x, H = A.y - x.y - (x.height / 2 - A.height / 2), j = A.width / 0.75, q = Math.abs(j - x.width) > 1 ? { maxWidth: ee(j) } : void 0, C = getComputedStyle(h), L = getComputedStyle(k), E = 1e3 * parseFloat(C.transitionDuration) || 150, R = parseFloat(L.getPropertyValue("--v-field-label-scale")), J = L.getPropertyValue("color");
        h.style.visibility = "visible", k.style.visibility = "hidden", function(Q, U, ne) {
          if (Q.animate === void 0)
            return { finished: Promise.resolve() };
          let G;
          try {
            G = Q.animate(U, ne);
          } catch {
            return { finished: Promise.resolve() };
          }
          return G.finished === void 0 && (G.finished = new Promise((Z) => {
            G.onfinish = () => {
              Z(G);
            };
          })), G;
        }(h, { transform: `translate(${T}px, ${H}px) scale(${R})`, color: J, ...q }, { duration: E, easing: "cubic-bezier(0.4, 0, 0.2, 1)", direction: g ? "normal" : "reverse" }).finished.then(() => {
          h.style.removeProperty("visibility"), k.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const I = w(() => ({ isActive: D, isFocused: d, controlRef: z, blur: u, focus: c }));
  function S(g) {
    g.target !== document.activeElement && g.preventDefault();
  }
  return K(() => {
    var T, H, j;
    const g = e.variant === "outlined", h = l["prepend-inner"] || e.prependInnerIcon, k = !(!e.clearable && !l.clear), x = !!(l["append-inner"] || e.appendInnerIcon || k), A = l.label ? l.label({ ...I.value, label: e.label, props: { for: V.value } }) : e.label;
    return s("div", te({ class: ["v-field", { "v-field--active": D.value, "v-field--appended": x, "v-field--center-affix": e.centerAffix ?? !O.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": h, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !A, [`v-field--variant-${e.variant}`]: !0 }, r.value, Y.value, i.value, o.value, y.value, m.value, e.class], style: [_.value, e.style], onClick: S }, a), [s("div", { class: "v-field__overlay" }, null), s(Sa, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), h && s("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && s(v, { key: "prepend-icon", name: "prependInner" }, null), (T = l["prepend-inner"]) == null ? void 0 : T.call(l, I.value)]), s("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && f.value && s(ft, { key: "floating-label", ref: P, class: [p.value], floating: !0, for: V.value, style: M.value }, { default: () => [A] }), s(ft, { ref: B, for: V.value }, { default: () => [A] }), (H = l.default) == null ? void 0 : H.call(l, { ...I.value, props: { id: V.value, class: "v-field__input", "aria-describedby": $.value }, focus: c, blur: u })]), k && s(dl, { key: "clear" }, { default: () => [Pe(s("div", { class: "v-field__clearable", onMousedown: (q) => {
      q.preventDefault(), q.stopPropagation();
    } }, [l.clear ? l.clear() : s(v, { name: "clear" }, null)]), [[Qt, e.dirty]])] }), x && s("div", { key: "append", class: "v-field__append-inner" }, [(j = l["append-inner"]) == null ? void 0 : j.call(l, I.value), e.appendInnerIcon && s(v, { key: "append-icon", name: "appendInner" }, null)]), s("div", { class: ["v-field__outline", p.value], style: M.value }, [g && s(ye, null, [s("div", { class: "v-field__outline__start" }, null), f.value && s("div", { class: "v-field__outline__notch" }, [s(ft, { ref: P, floating: !0, for: V.value }, { default: () => [A] })]), s("div", { class: "v-field__outline__end" }, null)]), O.value && f.value && s(ft, { ref: P, floating: !0, for: V.value }, { default: () => [A] })])]);
  }), { controlRef: z };
} });
function hl(e) {
  return oa(e, Object.keys(Ra.props).filter((n) => {
    return a = n, !sa.test(a) && n !== "class" && n !== "style";
    var a;
  }));
}
const yl = W({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ae(), ...on({ transition: { component: Wa, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), bl = F()({ name: "VMessages", props: yl(), setup(e, n) {
  let { slots: a } = n;
  const t = w(() => be(e.messages)), { textColorClasses: l, textColorStyles: r } = Ue(w(() => e.color));
  return K(() => s(Ae, { transition: e.transition, tag: "div", class: ["v-messages", l.value, e.class], style: [r.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && t.value.map((o, i) => s("div", { class: "v-messages__message", key: `${i}-${t.value}` }, [a.message ? a.message({ message: o }) : o]))] })), {};
} }), kl = Symbol.for("vuetify:form"), Sl = W({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Ha() }, "validation");
function wl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se(), a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ot();
  const t = oe(e, "modelValue"), l = w(() => e.validationValue === void 0 ? t.value : e.validationValue), r = ke(kl, null), o = X([]), i = fe(!0), d = w(() => !(!be(t.value === "" ? null : t.value).length && !be(l.value === "" ? null : l.value).length)), c = w(() => !!(e.disabled ?? (r == null ? void 0 : r.isDisabled.value))), u = w(() => !!(e.readonly ?? (r == null ? void 0 : r.isReadonly.value))), v = w(() => {
    var P;
    return (P = e.errorMessages) != null && P.length ? be(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), y = w(() => {
    let P = (e.validateOn ?? (r == null ? void 0 : r.validateOn.value)) || "input";
    P === "lazy" && (P = "input lazy");
    const z = new Set((P == null ? void 0 : P.split(" ")) ?? []);
    return { blur: z.has("blur") || z.has("input"), input: z.has("input"), submit: z.has("submit"), lazy: z.has("lazy") };
  }), m = w(() => {
    var P;
    return !e.error && !((P = e.errorMessages) != null && P.length) && (!e.rules.length || (i.value ? !o.value.length && !y.value.lazy || null : !o.value.length));
  }), D = fe(!1), f = w(() => ({ [`${n}--error`]: m.value === !1, [`${n}--dirty`]: d.value, [`${n}--disabled`]: c.value, [`${n}--readonly`]: u.value })), b = w(() => e.name ?? N(a));
  function V() {
    t.value = null, Re($);
  }
  function $() {
    i.value = !0, y.value.lazy ? o.value = [] : B(!0);
  }
  async function B() {
    let P = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    const z = [];
    D.value = !0;
    for (const O of e.rules) {
      if (z.length >= +(e.maxErrors ?? 1))
        break;
      const Y = typeof O == "function" ? O : () => O, _ = await Y(l.value);
      _ !== !0 && (_ === !1 || typeof _ == "string" ? z.push(_ || "") : console.warn(`${_} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    return o.value = z, D.value = !1, i.value = P, o.value;
  }
  return na(() => {
    r == null || r.register({ id: b.value, validate: B, reset: V, resetValidation: $ });
  }), Xe(() => {
    r == null || r.unregister(b.value);
  }), Ct(async () => {
    y.value.lazy || await B(!0), r == null || r.update(b.value, m.value, v.value);
  }), Gt(() => y.value.input, () => {
    re(l, () => {
      if (l.value != null)
        B();
      else if (e.focused) {
        const P = re(() => e.focused, (z) => {
          z || B(), P();
        });
      }
    });
  }), Gt(() => y.value.blur, () => {
    re(() => e.focused, (P) => {
      P || B();
    });
  }), re(m, () => {
    r == null || r.update(b.value, m.value, v.value);
  }), { errorMessages: v, isDirty: d, isDisabled: c, isReadonly: u, isPristine: i, isValid: m, isValidating: D, reset: V, resetValidation: $, validate: B, validationClasses: f };
}
const Ua = W({ id: String, appendIcon: se, centerAffix: { type: Boolean, default: !0 }, prependIcon: se, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Oe(), "onClick:append": Oe(), ...ae(), ...qe(), ...Sl() }, "VInput"), Zn = F()({ name: "VInput", props: { ...Ua() }, emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: a, slots: t, emit: l } = n;
  const { densityClasses: r } = st(e), { rtlClasses: o } = Pt(), { InputIcon: i } = Ea(e), d = ot(), c = w(() => e.id || `input-${d}`), u = w(() => `${c.value}-messages`), { errorMessages: v, isDirty: y, isDisabled: m, isReadonly: D, isPristine: f, isValid: b, isValidating: V, reset: $, resetValidation: B, validate: P, validationClasses: z } = wl(e, "v-input", c), O = w(() => ({ id: c, messagesId: u, isDirty: y, isDisabled: m, isReadonly: D, isPristine: f, isValid: b, isValidating: V, reset: $, resetValidation: B, validate: P })), Y = w(() => {
    var _;
    return (_ = e.errorMessages) != null && _.length || !f.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return K(() => {
    var S, g, h, k;
    const _ = !(!t.prepend && !e.prependIcon), p = !(!t.append && !e.appendIcon), M = Y.value.length > 0, I = !e.hideDetails || e.hideDetails === "auto" && (M || !!t.details);
    return s("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, r.value, o.value, z.value, e.class], style: e.style }, [_ && s("div", { key: "prepend", class: "v-input__prepend" }, [(S = t.prepend) == null ? void 0 : S.call(t, O.value), e.prependIcon && s(i, { key: "prepend-icon", name: "prepend" }, null)]), t.default && s("div", { class: "v-input__control" }, [(g = t.default) == null ? void 0 : g.call(t, O.value)]), p && s("div", { key: "append", class: "v-input__append" }, [e.appendIcon && s(i, { key: "append-icon", name: "append" }, null), (h = t.append) == null ? void 0 : h.call(t, O.value)]), I && s("div", { class: "v-input__details" }, [s(bl, { id: u.value, active: M, messages: Y.value }, { message: t.message }), (k = t.details) == null ? void 0 : k.call(t, O.value)])]);
  }), { reset: $, resetValidation: B, validate: P, isValid: b, errorMessages: v };
} }), jt = Symbol("Forwarded refs");
function Ft(e, n) {
  let a = e;
  for (; a; ) {
    const t = Reflect.getOwnPropertyDescriptor(a, n);
    if (t)
      return t;
    a = Object.getPrototypeOf(a);
  }
}
const _l = ["color", "file", "time", "date", "datetime-local", "week", "month"], Cl = W({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Ua(), ...Fa() }, "VTextField"), Ga = F()({ name: "VTextField", directives: { Intersect: ga }, inheritAttrs: !1, props: Cl(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: a, emit: t, slots: l } = n;
  const r = oe(e, "modelValue"), { isFocused: o, focus: i, blur: d } = ja(e), c = w(() => typeof e.counterValue == "function" ? e.counterValue(r.value) : typeof e.counterValue == "number" ? e.counterValue : (r.value ?? "").toString().length), u = w(() => a.maxlength ? a.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), v = w(() => ["plain", "underlined"].includes(e.variant));
  function y(O, Y) {
    var _, p;
    e.autofocus && O && ((p = (_ = Y[0].target) == null ? void 0 : _.focus) == null || p.call(_));
  }
  const m = X(), D = X(), f = X(), b = w(() => _l.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
  function V() {
    var O;
    f.value !== document.activeElement && ((O = f.value) == null || O.focus()), o.value || i();
  }
  function $(O) {
    t("mousedown:control", O), O.target !== f.value && (V(), O.preventDefault());
  }
  function B(O) {
    V(), t("click:control", O);
  }
  function P(O) {
    O.stopPropagation(), V(), Re(() => {
      r.value = null, function(Y) {
        for (var _ = arguments.length, p = new Array(_ > 1 ? _ - 1 : 0), M = 1; M < _; M++)
          p[M - 1] = arguments[M];
        if (Array.isArray(Y))
          for (const I of Y)
            I(...p);
        else
          typeof Y == "function" && Y(...p);
      }(e["onClick:clear"], O);
    });
  }
  function z(O) {
    var _;
    const Y = O.target;
    if (r.value = Y.value, ((_ = e.modelModifiers) == null ? void 0 : _.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const p = [Y.selectionStart, Y.selectionEnd];
      Re(() => {
        Y.selectionStart = p[0], Y.selectionEnd = p[1];
      });
    }
  }
  return K(() => {
    const O = !!(l.counter || e.counter !== !1 && e.counter != null), Y = !(!O && !l.details), [_, p] = function(g) {
      const [h, k] = kn(g, [sa]), x = Qe(h, vr), [A, T] = kn(k, ["class", "style", "id", /^data-/]);
      return Object.assign(A, h), Object.assign(T, x), [A, T];
    }(a), { modelValue: M, ...I } = Zn.filterProps(e), S = hl(e);
    return s(Zn, te({ ref: m, modelValue: r.value, "onUpdate:modelValue": (g) => r.value = g, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": v.value }, e.class], style: e.style }, _, I, { centerAffix: !v.value, focused: o.value }), { ...l, default: (g) => {
      let { id: h, isDisabled: k, isDirty: x, isReadonly: A, isValid: T } = g;
      return s(Ra, te({ ref: D, onMousedown: $, onClick: B, "onClick:clear": P, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, S, { id: h.value, active: b.value || x.value, dirty: x.value || e.dirty, disabled: k.value, focused: o.value, error: T.value === !1 }), { ...l, default: (H) => {
        let { props: { class: j, ...q } } = H;
        const C = Pe(s("input", te({ ref: f, value: r.value, onInput: z, autofocus: e.autofocus, readonly: A.value, disabled: k.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: V, onBlur: d }, q, p), null), [[_t("intersect"), { handler: y }, null, { once: !0 }]]);
        return s(ye, null, [e.prefix && s("span", { class: "v-text-field__prefix" }, [s("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), l.default ? s("div", { class: j, "data-no-activator": "" }, [l.default(), C]) : rr(C, { class: j }), e.suffix && s("span", { class: "v-text-field__suffix" }, [s("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: Y ? (g) => {
      var h;
      return s(ye, null, [(h = l.details) == null ? void 0 : h.call(l, g), O && s(ye, null, [s("span", null, null), s(pl, { active: e.persistentCounter || o.value, value: c.value, max: u.value }, l.counter)])]);
    } : void 0 });
  }), function(O) {
    for (var Y = arguments.length, _ = new Array(Y > 1 ? Y - 1 : 0), p = 1; p < Y; p++)
      _[p - 1] = arguments[p];
    return O[jt] = _, new Proxy(O, { get(M, I) {
      if (Reflect.has(M, I))
        return Reflect.get(M, I);
      if (typeof I != "symbol" && !I.startsWith("$") && !I.startsWith("__")) {
        for (const S of _)
          if (S.value && Reflect.has(S.value, I)) {
            const g = Reflect.get(S.value, I);
            return typeof g == "function" ? g.bind(S.value) : g;
          }
      }
    }, has(M, I) {
      if (Reflect.has(M, I))
        return !0;
      if (typeof I == "symbol" || I.startsWith("$") || I.startsWith("__"))
        return !1;
      for (const S of _)
        if (S.value && Reflect.has(S.value, I))
          return !0;
      return !1;
    }, set(M, I, S) {
      if (Reflect.has(M, I))
        return Reflect.set(M, I, S);
      if (typeof I == "symbol" || I.startsWith("$") || I.startsWith("__"))
        return !1;
      for (const g of _)
        if (g.value && Reflect.has(g.value, I))
          return Reflect.set(g.value, I, S);
      return !1;
    }, getOwnPropertyDescriptor(M, I) {
      var g;
      const S = Reflect.getOwnPropertyDescriptor(M, I);
      if (S)
        return S;
      if (typeof I != "symbol" && !I.startsWith("$") && !I.startsWith("__")) {
        for (const h of _) {
          if (!h.value)
            continue;
          const k = Ft(h.value, I) ?? ("_" in h.value ? Ft((g = h.value._) == null ? void 0 : g.setupState, I) : void 0);
          if (k)
            return k;
        }
        for (const h of _) {
          const k = h.value && h.value[jt];
          if (!k)
            continue;
          const x = k.slice();
          for (; x.length; ) {
            const A = x.shift(), T = Ft(A.value, I);
            if (T)
              return T;
            const H = A.value && A.value[jt];
            H && x.push(...H);
          }
        }
      }
    } });
  }({}, m, D, f);
} }), xl = it("v-picker-title"), Xa = W({ color: String, ...Mt(), ...ae(), ...Vt(), ...Bt(), ...Tt(), ...pn(), ...Te(), ...xe(), ...ge() }, "VSheet"), Kn = F()({ name: "VSheet", props: Xa(), setup(e, n) {
  let { slots: a } = n;
  const { themeClasses: t } = we(e), { backgroundColorClasses: l, backgroundColorStyles: r } = Ge(pe(e, "color")), { borderClasses: o } = At(e), { dimensionStyles: i } = Dt(e), { elevationClasses: d } = Ot(e), { locationStyles: c } = Lt(e), { positionClasses: u } = vn(e), { roundedClasses: v } = Le(e);
  return K(() => s(e.tag, { class: ["v-sheet", t.value, l.value, o.value, d.value, u.value, v.value, e.class], style: [r.value, i.value, c.value, e.style] }, a)), {};
} }), qa = W({ bgColor: String, landscape: Boolean, title: String, hideHeader: Boolean, ...Xa() }, "VPicker"), Jn = F()({ name: "VPicker", props: qa(), setup(e, n) {
  let { slots: a } = n;
  const { backgroundColorClasses: t, backgroundColorStyles: l } = Ge(pe(e, "color"));
  return K(() => {
    const r = Kn.filterProps(e), o = !(!e.title && !a.title);
    return s(Kn, te(r, { color: e.bgColor, class: ["v-picker", { "v-picker--landscape": e.landscape, "v-picker--with-actions": !!a.actions }, e.class], style: e.style }), { default: () => {
      var i;
      return [!e.hideHeader && s("div", { key: "header", class: [t.value], style: [l.value] }, [o && s(xl, { key: "picker-title" }, { default: () => {
        var d;
        return [((d = a.title) == null ? void 0 : d.call(a)) ?? e.title];
      } }), a.header && s("div", { class: "v-picker__header" }, [a.header()])]), s("div", { class: "v-picker__body" }, [(i = a.default) == null ? void 0 : i.call(a)]), a.actions && s(ve, { defaults: { VBtn: { slim: !0, variant: "text" } } }, { default: () => [s("div", { class: "v-picker__actions" }, [a.actions()])] })];
    } });
  }), {};
} }), $l = W({ calendarIcon: { type: String, default: "$calendar" }, keyboardIcon: { type: String, default: "$edit" }, inputMode: { type: String, default: "calendar" }, inputText: { type: String, default: "$vuetify.datePicker.input.placeholder" }, inputPlaceholder: { type: String, default: "dd/mm/yyyy" }, header: { type: String, default: "$vuetify.datePicker.header" }, ...Pa(), ...Ta(), ...Qe(La(), ["modelValue"]), ...Qe(Ya(), ["modelValue"]), ...qa({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), Vl = F()({ name: "VDatePicker", props: $l(), emits: { "update:modelValue": (e) => !0, "update:month": (e) => !0, "update:year": (e) => !0, "update:inputMode": (e) => !0, "update:viewMode": (e) => !0 }, setup(e, n) {
  let { emit: a, slots: t } = n;
  const l = Yt(), { t: r } = ka(), o = oe(e, "modelValue", void 0, (_) => be(_), (_) => e.multiple ? _ : _[0]), i = oe(e, "viewMode"), d = oe(e, "inputMode"), c = w(() => {
    var p;
    const _ = l.date((p = o.value) == null ? void 0 : p[0]);
    return _ && l.isValid(_) ? _ : l.date();
  }), u = X(Number(e.month ?? l.getMonth(l.startOfMonth(c.value)))), v = X(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(c.value, u.value))))), y = fe(!1), m = w(() => e.multiple && o.value.length > 1 ? r("$vuetify.datePicker.itemsSelected", o.value.length) : o.value[0] && l.isValid(o.value[0]) ? l.format(o.value[0], "normalDateWithWeekday") : r(e.header)), D = w(() => l.format(l.setYear(l.setMonth(l.date(), u.value), v.value), "monthAndYear")), f = w(() => `date-picker-header${y.value ? "-reverse" : ""}-transition`), b = w(() => {
    const _ = l.date(e.min);
    return e.min && l.isValid(_) ? _ : null;
  }), V = w(() => {
    const _ = l.date(e.max);
    return e.max && l.isValid(_) ? _ : null;
  }), $ = w(() => {
    if (e.disabled)
      return !0;
    const _ = [];
    if (i.value !== "month")
      _.push("prev", "next");
    else {
      let p = l.date();
      if (p = l.setYear(p, v.value), p = l.setMonth(p, u.value), b.value) {
        const M = l.addDays(l.startOfMonth(p), -1);
        l.isAfter(b.value, M) && _.push("prev");
      }
      if (V.value) {
        const M = l.addDays(l.endOfMonth(p), 1);
        l.isAfter(M, V.value) && _.push("next");
      }
    }
    return _;
  });
  function B() {
    d.value = d.value === "calendar" ? "keyboard" : "calendar";
  }
  function P() {
    u.value < 11 ? (u.value++, a("update:month", u.value)) : (v.value++, u.value = 0, a("update:year", v.value));
  }
  function z() {
    u.value > 0 ? (u.value--, a("update:month", u.value)) : (v.value--, u.value = 11, a("update:year", u.value));
  }
  function O() {
    i.value = i.value === "months" ? "month" : "months";
  }
  function Y() {
    i.value = i.value === "year" ? "month" : "year";
  }
  return re(u, () => {
    i.value === "months" && O();
  }), re(v, () => {
    i.value === "year" && Y();
  }), re(o, (_, p) => {
    const M = l.date(be(_)[0]), I = l.date(be(p)[0]);
    y.value = l.isBefore(M, I);
  }), K(() => {
    const _ = Jn.filterProps(e), p = Rn.filterProps(e), M = Un.filterProps(e), I = Gn.filterProps(e), S = Qe(Xn.filterProps(e), ["modelValue"]), g = Qe(qn.filterProps(e), ["modelValue"]), h = { header: m.value, transition: f.value, "onClick:append": B };
    return s(Jn, te(_, { class: ["v-date-picker", `v-date-picker--${i.value}`, { "v-date-picker--show-week": e.showWeek }, e.class], style: e.style }), { title: () => {
      var k;
      return ((k = t.title) == null ? void 0 : k.call(t)) ?? s("div", { class: "v-date-picker__title" }, [r(e.title)]);
    }, header: () => t.header ? s(ve, { defaults: { VDatePickerHeader: { ...h } } }, { default: () => {
      var k;
      return [(k = t.header) == null ? void 0 : k.call(t, h)];
    } }) : s(Un, te({ key: "header" }, M, h), t), default: () => e.inputMode === "calendar" ? s(ye, null, [s(Rn, te(p, { disabled: $.value, text: D.value, "onClick:next": P, "onClick:prev": z, "onClick:month": O, "onClick:year": Y }), null), s(ul, { hideOnLeave: !0 }, { default: () => [i.value === "months" ? s(Xn, te({ key: "date-picker-months" }, S, { modelValue: u.value, "onUpdate:modelValue": (k) => u.value = k, min: b.value, max: V.value }), null) : i.value === "year" ? s(qn, te({ key: "date-picker-years" }, g, { modelValue: v.value, "onUpdate:modelValue": (k) => v.value = k, min: b.value, max: V.value }), null) : s(Gn, te({ key: "date-picker-month" }, I, { modelValue: o.value, "onUpdate:modelValue": (k) => o.value = k, month: u.value, "onUpdate:month": (k) => u.value = k, year: v.value, "onUpdate:year": (k) => v.value = k, min: b.value, max: V.value }), null)] })]) : s("div", { class: "v-date-picker__input" }, [s(Ga, { label: r(e.inputText), placeholder: e.inputPlaceholder }, null)]), actions: t.actions });
  }), {};
} }), Dl = { key: 1 }, Il = { key: 0, class: "text-error ms-1" }, Qn = Jt({ __name: "VDateField", props: { appendIcon: { default: void 0 }, appendInnerIcon: { default: void 0 }, cardFieldWidth: { type: Boolean, default: !1 }, cardOffsetX: { default: 0 }, cardOffsetY: { default: 5 }, cardPadding: { default: 4 }, cardProps: { default: () => ({}) }, color: { default: void 0 }, datePickerProps: { default: () => ({}) }, density: { default: "default" }, elevation: {}, format: { type: [String, Function], default: "YYYY-MM-DD" }, hint: { default: "" }, iconHoverColor: { type: Boolean, default: void 0 }, iconSize: { default: "default" }, label: { default: void 0 }, messages: { default: void 0 }, name: { default: "date" }, open: { default: "bottom left" }, persistentHint: { type: Boolean, default: !1 }, persistentPlaceholder: { default: !1 }, placeholder: { default: "Select Date" }, prependIcon: { default: void 0 }, prependInnerIcon: { type: [String, null, Boolean], default: "default" }, readonly: { default: !1 }, readonlyInput: { type: [Boolean, null], default: !1 }, required: { type: Boolean, default: !1 }, theme: {}, active: {}, allowedDates: {}, header: {}, height: {}, hideHeader: {}, hideWeekdays: {}, max: {}, maxHeight: {}, maxWidth: {}, min: {}, minHeight: {}, minWidth: {}, modeIcon: {}, month: {}, multiple: { type: Boolean }, nextIcon: {}, pickerBgColor: {}, pickerColor: {}, pickerTag: {}, prevIcon: {}, showAdjacentMonths: {}, showWeek: {}, title: {}, viewMode: {} }, emits: ["update", "update:modelValue", "update:month", "update:viewMode", "update:year"], setup(e, { emit: n }) {
  var H, j, q;
  Me.extend(Pr), Me.extend(Br);
  const a = lr(), t = ir(), l = n, r = e, o = { elevation: r.cardProps.elevation ?? r.elevation ?? 5, hover: !1, loading: !1, verticalOffset: 28 }, { datePickerProps: i, format: d } = Kt(r), c = X({ VCard: { ...o, ...r.cardProps }, VDatePicker: { landscape: !1, month: void 0, rounded: !1, text: void 0, year: void 0, allowedDates: r.allowedDates ?? void 0, bgColor: r.pickerBgColor ?? void 0, color: r.pickerColor ?? void 0, disabled: !1, elevation: 0, header: r.header ?? "Select Date", height: r.height ?? void 0, hideHeader: r.hideHeader ?? !1, hideWeekdays: r.hideWeekdays ?? !1, max: r.max ?? void 0, maxHeight: r.maxHeight ?? void 0, maxWidth: r.maxWidth ?? void 0, min: r.min ?? void 0, minHeight: r.minHeight ?? void 0, minWidth: r.minWidth ?? 360, modeIcon: r.modeIcon ?? "$subgroup", multiple: r.multiple ?? !1, nextIcon: r.nextIcon ?? "$next", prevIcon: r.prevIcon ?? "$prev", showAdjacentMonths: r.showAdjacentMonths ?? !1, showWeek: r.showWeek ?? !1, tag: r.pickerTag ?? "div", title: r.title ?? "$vuetify.datePicker.title", viewMode: r.viewMode ?? "month", ...i.value } }), u = X(null), v = X({}), y = X(a.modelValue), m = X(void 0), D = X(!1), f = X(null), b = X(void 0), V = X(r.theme ?? void 0);
  let $ = Zt({ bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 });
  const B = X(r.placeholder), P = X(((H = c.value.VDatePicker) == null ? void 0 : H.header) ?? "Select Date"), z = X(((j = c.value.VDatePicker) == null ? void 0 : j.title) ?? "Select Date"), O = X((q = c.value.VDatePicker) == null ? void 0 : q.multiple);
  Ct(() => {
    if (O.value) {
      if (B.value = "Select Dates", z.value = B.value, P.value = "Enter Dates", typeof y.value == "string") {
        const C = y.value.split(",");
        C.forEach((L, E) => {
          C[E] = new Date(L);
        }), y.value = C;
      }
      return k(y.value), void T(h());
    }
    y.value !== null && y.value !== void 0 && (y.value = g(y.value), T(y.value)), x(y.value);
  });
  const Y = w(() => ((C) => {
    const { name: L, readonly: E, readonlyInput: R } = C;
    return { [`${We}--text-field-${L}`]: !0, [`${We}--text-field-readonly`]: E ?? !1, [`${We}--text-field-readonly-input`]: !(!R || E), [`${We}--text-field`]: !0 };
  })({ name: r.name, readonly: r.readonly, readonlyInput: r.readonlyInput })), _ = w(() => r.readonly || r.readonlyInput || O.value), p = w(() => {
    if (r.iconHoverColor !== !1)
      return typeof r.iconHoverColor == "string" ? r.iconHoverColor : r.color ?? void 0;
  }), M = w(() => ((C) => {
    const { fullWidth: L } = C;
    return { [`${We}--card`]: !0, [`${We}--card-full-width`]: L };
  })({ fullWidth: r.cardFieldWidth }));
  function I(C) {
    (C !== "textField" || r.readonlyInput || r.readonly) && (C === "textFieldIcon" && (r.readonlyInput || r.readonly) || S());
  }
  function S(C) {
    var ce;
    const L = { left: 0, right: 0, top: 0, width: 0 }, E = f.value;
    if (!D.value && (C === "keyup" || C === "clear"))
      return void (C === "clear" && A("", "clear"));
    if (D.value = !D.value, !D.value)
      return void (v.value.display = "none");
    const R = (E == null ? void 0 : E.getBoundingClientRect()) ?? L;
    let J = (E == null ? void 0 : E.offsetHeight) ?? 0, Q = 300, U = (R == null ? void 0 : R.left) ?? 0, ne = (R == null ? void 0 : R.right) ?? 0;
    const G = (ce = f == null ? void 0 : f.value) == null ? void 0 : ce.querySelector(".v-field__input"), Z = (G == null ? void 0 : G.getBoundingClientRect()) ?? L;
    J = G == null ? void 0 : G.offsetHeight, Q = (G == null ? void 0 : G.offsetWidth) ?? 0, U = Z.left, ne = Z.right - Z.width, $ = { bottom: "initial", height: J, left: U, right: ne, top: window.scrollY + (R == null ? void 0 : R.top), width: r.cardFieldWidth ? Q : "auto" }, function() {
      var ut, fn, mn;
      let le = Number($.top) + Number($.height), $e = "initial", Ve = Number(r.cardOffsetY) ?? 0;
      const Ye = Number(r.cardOffsetX) ?? 0;
      (r.hint || r.messages) && (Ve += ((ut = c.value.VCard) == null ? void 0 : ut.verticalOffset) ?? 0), le += Ve, (fn = r.open) != null && fn.includes("top") && ($e = window.innerHeight - le + Number($.height) + 2 * Ve, le = "initial");
      let Ze = Number($.left) + Ye, ze = $.right ?? 0;
      r.cardFieldWidth ? (Ze = $.left, ze = "initial") : (ze = "initial", (mn = r.open) != null && mn.includes("right") && (Ze = "initial", ze = Number($.right) + Ye));
      const zt = { bottom: Ie({ value: $e }), display: "block", left: Ie({ value: Ze }), minWidth: Ie({ value: $.width }), padding: Ie({ value: r.cardPadding }), right: Ie({ value: ze }), top: Ie({ value: le }), width: Ie({ value: $.width }) };
      v.value = zt;
    }();
  }
  function g(C) {
    return Me(String(C)).format(String(d.value));
  }
  function h() {
    const C = Array.isArray(m.value) ? m.value.length : 0;
    let L = [];
    return C > 0 && (L = [...m.value], L.forEach((E, R) => {
      L[R] = g(E);
    })), L;
  }
  function k(C) {
    if (m.value = C, O.value) {
      const L = Array.isArray(C) ? C.length : 0;
      return C && C !== void 0 && L !== 0 ? (y.value = `${L} selected`, void (L === 1 && (y.value = Me(Me(String(C))).format(String(d.value))))) : void (y.value = void 0);
    }
    y.value = g(m.value);
  }
  function x(C) {
    y.value = C, !O.value || C ? (b.value = Me(String(C)).month() ?? r.month, m.value = Me(String(y.value), String(d.value)).toDate()) : m.value = void 0;
  }
  function A(C, L) {
    let E = C ?? "";
    L === "textField" && x(C), L === "datePicker" && (m.value = C, k(C)), L === "clear" && (m.value = [], k(void 0)), E = y.value, O.value && (E = h()), T(E);
  }
  function T(C) {
    l("update:modelValue", C), l("update", C);
  }
  return cr(f, (C) => {
    var E;
    const L = N(u);
    C.target !== L && !((E = L == null ? void 0 : L.$el) != null && E.contains(C.target)) && D.value && S("outside");
  }, { ignore: [u] }), (C, L) => (he(), Nt(ye, null, [or("div", { ref_key: "fieldContainerRef", ref: f, class: "v-date-field" }, [s(Ga, te({ ref: "textFieldRef" }, C.$attrs, { class: N(Y), color: C.color, density: C.density, hint: C.hint, messages: C.messages, "model-value": N(y), "persistent-hint": C.persistentHint, "persistent-placeholder": C.persistentPlaceholder, placeholder: N(B), readonly: N(_), theme: N(V), "onClick:clear": L[2] || (L[2] = (E) => S("clear")), "onClick:control": L[3] || (L[3] = (E) => I("textField")), onKeyup: L[4] || (L[4] = sr((E) => S("keyup"), ["enter"])), "onUpdate:modelValue": L[5] || (L[5] = (E) => A(E, "textField")) }), gn({ _: 2 }, [hn(N(t), (E, R) => ({ name: R, fn: ie((J) => [N(t).prepend || N(t)["prepend-inner"] || N(t)["append-inner"] || N(t).append ? _e("", !0) : De(C.$slots, R, Ne(te({ key: 0 }, { ...J })))]) })), N(t).prepend ? { name: "prepend", fn: ie((E) => [De(C.$slots, "prepend", Ne(dt({ ...E, toggleDatePicker: S })))]), key: "0" } : void 0, C.prependIcon && !N(t).prepend ? { name: "prepend", fn: ie(() => [C.prependIcon ? (he(), He(vt, { key: 0, color: N(p), icon: C.prependIcon, iconSize: C.iconSize, onClick: S }, null, 8, ["color", "icon", "iconSize"])) : _e("", !0)]), key: "1" } : void 0, N(t)["prepend-inner"] ? { name: "prepend-inner", fn: ie((E) => [De(C.$slots, "prepend-inner", Ne(dt({ ...E, toggleDatePicker: S })))]), key: "2" } : void 0, C.prependInnerIcon && !N(t)["prepend-inner"] ? { name: "prepend-inner", fn: ie(() => [C.prependInnerIcon ? (he(), He(vt, { key: 0, color: N(p), icon: C.prependInnerIcon, iconSize: C.iconSize, onClick: L[0] || (L[0] = (E) => I("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : _e("", !0)]), key: "3" } : void 0, N(t)["append-inner"] ? { name: "append-inner", fn: ie((E) => [De(C.$slots, "append-inner", Ne(dt({ ...E, toggleDatePicker: S })))]), key: "4" } : void 0, C.appendInnerIcon && !N(t)["append-inner"] ? { name: "append-inner", fn: ie(() => [C.appendInnerIcon ? (he(), He(vt, { key: 0, color: N(p), icon: C.appendInnerIcon, iconSize: C.iconSize, onClick: L[1] || (L[1] = (E) => I("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : _e("", !0)]), key: "5" } : void 0, N(t).append ? { name: "append", fn: ie((E) => [De(C.$slots, "append", Ne(dt({ ...E, toggleDatePicker: S })))]), key: "6" } : void 0, C.appendIcon && !N(t).append ? { name: "append", fn: ie(() => [C.appendIcon ? (he(), He(vt, { key: 0, color: N(p), icon: C.appendIcon, iconSize: C.iconSize, onClick: S }, null, 8, ["color", "icon", "iconSize"])) : _e("", !0)]), key: "7" } : void 0, N(t).label || C.label ? { name: "label", fn: ie(() => [N(t).label ? De(C.$slots, "label", { key: 0 }) : C.label ? (he(), Nt("div", Dl, [ra(ur(C.label) + " ", 1), C.required ? (he(), Nt("span", Il, "*")) : _e("", !0)])) : _e("", !0)]), key: "8" } : void 0]), 1040, ["class", "color", "density", "hint", "messages", "model-value", "persistent-hint", "persistent-placeholder", "placeholder", "readonly", "theme"])], 512), (he(), He(dr, { to: "body" }, [s(ve, { defaults: N(c) }, { default: ie(() => {
    var E;
    return [s(Kr, te(o, { ref_key: "cardRef", ref: u, class: N(M), style: N(v), theme: ((E = N(c).VCard) == null ? void 0 : E.theme) ?? N(V), width: N($).width }), { default: ie(() => {
      var R;
      return [s(Vl, { disabled: ("readonly" in C ? C.readonly : N(aa)) || ((R = N(c).VDatePicker) == null ? void 0 : R.disabled), header: N(P), "input-mode": "calendar", "model-value": N(m), month: N(b), theme: N(V), title: N(z), "onUpdate:modelValue": L[6] || (L[6] = (J) => A(J, "datePicker")), "onUpdate:month": L[7] || (L[7] = (J) => l("update:month", J)), "onUpdate:viewMode": L[8] || (L[8] = (J) => l("update:viewMode", J)), "onUpdate:year": L[9] || (L[9] = (J) => l("update:year", J)) }, gn({ _: 2 }, [hn(N(t), (J, Q) => ({ name: Q, fn: ie((U) => [N(t).actions || N(t).header || N(t).title ? De(C.$slots, Q, Ne(te({ key: 0 }, { ...U }))) : _e("", !0)]) }))]), 1032, ["disabled", "header", "model-value", "month", "theme", "title"])];
    }), _: 3 }, 16, ["class", "style", "theme", "width"])];
  }), _: 3 }, 8, ["defaults"])]))], 64));
} });
Qn.install = (e) => {
  e.component("VDateField", Qn);
};
export {
  Qn as VDateField,
  Qn as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".v-date-field--text-field-readonly .v-field *,.v-date-field--text-field-readonly-input .v-field *{cursor:pointer!important}.v-date-field--card{display:none;position:absolute;z-index:999999}.v-date-field--card .v-date-picker{width:100%!important}.v-date-field--card .v-date-picker-canvas canvas{width:100%}.v-date-field--card-full-width .v-color-picker{max-width:100%!important}")),document.head.appendChild(e)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
