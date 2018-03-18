function JL(t) {
  if (!t) return JL.__;
  Array.prototype.reduce || (Array.prototype.reduce = function(t, e) {
    for (var i = e, n = 0; n < this.length; n++) i = t(i, this[n], n, this);
    return i
  });
  var e = "";
  return ("." + t).split(".").reduce(function(t, i, n, o) {
    return e = e ? e + ("." + i) : i, i = t["__" + e], void 0 === i && (JL.Logger.prototype = t, i = new JL.Logger(e), t["__" + e] = i), i
  }, JL.__)
}

function isScrolledIntoView(t) {
  var e = $(t),
    i = $(window),
    n = i.scrollTop(),
    o = n + i.height(),
    r = e.offset().top,
    s = r + e.height();
  return s <= o && r >= n
}
if (! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return e(t)
    } : e(t)
  }("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
      var e = !!t && "length" in t && t.length,
        i = pt.type(t);
      return "function" !== i && !pt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function n(t, e, i) {
      if (pt.isFunction(e)) return pt.grep(t, function(t, n) {
        return !!e.call(t, n, t) !== i
      });
      if (e.nodeType) return pt.grep(t, function(t) {
        return t === e !== i
      });
      if ("string" == typeof e) {
        if (St.test(e)) return pt.filter(e, t, i);
        e = pt.filter(e, t)
      }
      return pt.grep(t, function(t) {
        return pt.inArray(t, e) > -1 !== i
      })
    }

    function o(t, e) {
      do t = t[e]; while (t && 1 !== t.nodeType);
      return t
    }

    function r(t) {
      var e = {};
      return pt.each(t.match(Et) || [], function(t, i) {
        e[i] = !0
      }), e
    }

    function s() {
      nt.addEventListener ? (nt.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (nt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
      (nt.addEventListener || "load" === t.event.type || "complete" === nt.readyState) && (s(), pt.ready())
    }

    function l(t, e, i) {
      if (void 0 === i && 1 === t.nodeType) {
        var n = "data-" + e.replace(Dt, "-$1").toLowerCase();
        if (i = t.getAttribute(n), "string" == typeof i) {
          try {
            i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : $t.test(i) ? pt.parseJSON(i) : i)
          } catch (t) {}
          pt.data(t, e, i)
        } else i = void 0
      }
      return i
    }

    function c(t) {
      var e;
      for (e in t)
        if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
      return !0
    }

    function h(t, e, i, n) {
      if (It(t)) {
        var o, r, s = pt.expando,
          a = t.nodeType,
          l = a ? pt.cache : t,
          c = a ? t[s] : t[s] && s;
        if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e) return c || (c = a ? t[s] = it.pop() || pt.guid++ : s), l[c] || (l[c] = a ? {} : {
          toJSON: pt.noop
        }), "object" != typeof e && "function" != typeof e || (n ? l[c] = pt.extend(l[c], e) : l[c].data = pt.extend(l[c].data, e)), r = l[c], n || (r.data || (r.data = {}), r = r.data), void 0 !== i && (r[pt.camelCase(e)] = i), "string" == typeof e ? (o = r[e], null == o && (o = r[pt.camelCase(e)])) : o = r, o
      }
    }

    function u(t, e, i) {
      if (It(t)) {
        var n, o, r = t.nodeType,
          s = r ? pt.cache : t,
          a = r ? t[pt.expando] : pt.expando;
        if (s[a]) {
          if (e && (n = i ? s[a] : s[a].data)) {
            pt.isArray(e) ? e = e.concat(pt.map(e, pt.camelCase)) : e in n ? e = [e] : (e = pt.camelCase(e), e = e in n ? [e] : e.split(" ")), o = e.length;
            for (; o--;) delete n[e[o]];
            if (i ? !c(n) : !pt.isEmptyObject(n)) return
          }(i || (delete s[a].data, c(s[a]))) && (r ? pt.cleanData([t], !0) : ut.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
        }
      }
    }

    function d(t, e, i, n) {
      var o, r = 1,
        s = 20,
        a = n ? function() {
          return n.cur()
        } : function() {
          return pt.css(t, e, "")
        },
        l = a(),
        c = i && i[3] || (pt.cssNumber[e] ? "" : "px"),
        h = (pt.cssNumber[e] || "px" !== c && +l) && Mt.exec(pt.css(t, e));
      if (h && h[3] !== c) {
        c = c || h[3], i = i || [], h = +l || 1;
        do r = r || ".5", h /= r, pt.style(t, e, h + c); while (r !== (r = a() / l) && 1 !== r && --s)
      }
      return i && (h = +h || +l || 0, o = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = o)), o
    }

    function p(t) {
      var e = Ut.split("|"),
        i = t.createDocumentFragment();
      if (i.createElement)
        for (; e.length;) i.createElement(e.pop());
      return i
    }

    function f(t, e) {
      var i, n, o = 0,
        r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
      if (!r)
        for (r = [], i = t.childNodes || t; null != (n = i[o]); o++) !e || pt.nodeName(n, e) ? r.push(n) : pt.merge(r, f(n, e));
      return void 0 === e || e && pt.nodeName(t, e) ? pt.merge([t], r) : r
    }

    function g(t, e) {
      for (var i, n = 0; null != (i = t[n]); n++) pt._data(i, "globalEval", !e || pt._data(e[n], "globalEval"))
    }

    function m(t) {
      Rt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function v(t, e, i, n, o) {
      for (var r, s, a, l, c, h, u, d = t.length, v = p(e), y = [], b = 0; d > b; b++)
        if (s = t[b], s || 0 === s)
          if ("object" === pt.type(s)) pt.merge(y, s.nodeType ? [s] : s);
          else if (Xt.test(s)) {
            for (l = l || v.appendChild(e.createElement("div")), c = (Wt.exec(s) || ["", ""])[1].toLowerCase(), u = Gt[c] || Gt._default, l.innerHTML = u[1] + pt.htmlPrefilter(s) + u[2], r = u[0]; r--;) l = l.lastChild;
            if (!ut.leadingWhitespace && Ht.test(s) && y.push(e.createTextNode(Ht.exec(s)[0])), !ut.tbody)
              for (s = "table" !== c || Vt.test(s) ? "<table>" !== u[1] || Vt.test(s) ? 0 : l : l.firstChild, r = s && s.childNodes.length; r--;) pt.nodeName(h = s.childNodes[r], "tbody") && !h.childNodes.length && s.removeChild(h);
            for (pt.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = v.lastChild
          } else y.push(e.createTextNode(s));
      for (l && v.removeChild(l), ut.appendChecked || pt.grep(f(y, "input"), m), b = 0; s = y[b++];)
        if (n && pt.inArray(s, n) > -1) o && o.push(s);
        else if (a = pt.contains(s.ownerDocument, s), l = f(v.appendChild(s), "script"), a && g(l), i)
          for (r = 0; s = l[r++];) zt.test(s.type || "") && i.push(s);
      return l = null, v
    }

    function y() {
      return !0
    }

    function b() {
      return !1
    }

    function x() {
      try {
        return nt.activeElement
      } catch (t) {}
    }

    function w(t, e, i, n, o, r) {
      var s, a;
      if ("object" == typeof e) {
        "string" != typeof i && (n = n || i, i = void 0);
        for (a in e) w(t, a, i, n, e[a], r);
        return t
      }
      if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = b;
      else if (!o) return t;
      return 1 === r && (s = o, o = function(t) {
        return pt().off(t), s.apply(this, arguments)
      }, o.guid = s.guid || (s.guid = pt.guid++)), t.each(function() {
        pt.event.add(this, e, o, n, i)
      })
    }

    function C(t, e) {
      return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function S(t) {
      return t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type, t
    }

    function _(t) {
      var e = oe.exec(t.type);
      return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function k(t, e) {
      if (1 === e.nodeType && pt.hasData(t)) {
        var i, n, o, r = pt._data(t),
          s = pt._data(e, r),
          a = r.events;
        if (a) {
          delete s.handle, s.events = {};
          for (i in a)
            for (n = 0, o = a[i].length; o > n; n++) pt.event.add(e, i, a[i][n])
        }
        s.data && (s.data = pt.extend({}, s.data))
      }
    }

    function T(t, e) {
      var i, n, o;
      if (1 === e.nodeType) {
        if (i = e.nodeName.toLowerCase(), !ut.noCloneEvent && e[pt.expando]) {
          o = pt._data(e);
          for (n in o.events) pt.removeEvent(e, n, o.handle);
          e.removeAttribute(pt.expando)
        }
        "script" === i && e.text !== t.text ? (S(e).text = t.text, _(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ut.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Rt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
      }
    }

    function O(t, e, i, n) {
      e = rt.apply([], e);
      var o, r, s, a, l, c, h = 0,
        u = t.length,
        d = u - 1,
        p = e[0],
        g = pt.isFunction(p);
      if (g || u > 1 && "string" == typeof p && !ut.checkClone && ne.test(p)) return t.each(function(o) {
        var r = t.eq(o);
        g && (e[0] = p.call(this, o, r.html())), O(r, e, i, n)
      });
      if (u && (c = v(e, t[0].ownerDocument, !1, t, n), o = c.firstChild, 1 === c.childNodes.length && (c = o), o || n)) {
        for (a = pt.map(f(c, "script"), S), s = a.length; u > h; h++) r = c, h !== d && (r = pt.clone(r, !0, !0), s && pt.merge(a, f(r, "script"))), i.call(t[h], r, h);
        if (s)
          for (l = a[a.length - 1].ownerDocument, pt.map(a, _), h = 0; s > h; h++) r = a[h], zt.test(r.type || "") && !pt._data(r, "globalEval") && pt.contains(l, r) && (r.src ? pt._evalUrl && pt._evalUrl(r.src) : pt.globalEval((r.text || r.textContent || r.innerHTML || "").replace(re, "")));
        c = o = null
      }
      return t
    }

    function j(t, e, i) {
      for (var n, o = e ? pt.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || pt.cleanData(f(n)), n.parentNode && (i && pt.contains(n.ownerDocument, n) && g(f(n, "script")), n.parentNode.removeChild(n));
      return t
    }

    function E(t, e) {
      var i = pt(e.createElement(t)).appendTo(e.body),
        n = pt.css(i[0], "display");
      return i.detach(), n
    }

    function A(t) {
      var e = nt,
        i = ce[t];
      return i || (i = E(t, e), "none" !== i && i || (le = (le || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), i = E(t, e), le.detach()), ce[t] = i), i
    }

    function P(t, e) {
      return {
        get: function() {
          return t() ? void delete this.get : (this.get = e).apply(this, arguments)
        }
      }
    }

    function I(t) {
      if (t in _e) return t;
      for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = Se.length; i--;)
        if (t = Se[i] + e, t in _e) return t
    }

    function $(t, e) {
      for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (r[s] = pt._data(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Nt(n) && (r[s] = pt._data(n, "olddisplay", A(n.nodeName)))) : (o = Nt(n), (i && "none" !== i || !o) && pt._data(n, "olddisplay", o ? i : pt.css(n, "display"))));
      for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
      return t
    }

    function D(t, e, i) {
      var n = xe.exec(e);
      return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function L(t, e, i, n, o) {
      for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += pt.css(t, i + Ft[r], !0, o)), n ? ("content" === i && (s -= pt.css(t, "padding" + Ft[r], !0, o)), "margin" !== i && (s -= pt.css(t, "border" + Ft[r] + "Width", !0, o))) : (s += pt.css(t, "padding" + Ft[r], !0, o), "padding" !== i && (s += pt.css(t, "border" + Ft[r] + "Width", !0, o)));
      return s
    }

    function M(t, e, i) {
      var n = !0,
        o = "width" === e ? t.offsetWidth : t.offsetHeight,
        r = fe(t),
        s = ut.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, r);
      if (0 >= o || null == o) {
        if (o = ge(t, e, r), (0 > o || null == o) && (o = t.style[e]), ue.test(o)) return o;
        n = s && (ut.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
      }
      return o + L(t, e, i || (s ? "border" : "content"), n, r) + "px"
    }

    function F(t, e, i, n, o) {
      return new F.prototype.init(t, e, i, n, o)
    }

    function N() {
      return t.setTimeout(function() {
        ke = void 0
      }), ke = pt.now()
    }

    function B(t, e) {
      var i, n = {
          height: t
        },
        o = 0;
      for (e = e ? 1 : 0; 4 > o; o += 2 - e) i = Ft[o], n["margin" + i] = n["padding" + i] = t;
      return e && (n.opacity = n.width = t), n
    }

    function R(t, e, i) {
      for (var n, o = (H.tweeners[e] || []).concat(H.tweeners["*"]), r = 0, s = o.length; s > r; r++)
        if (n = o[r].call(i, e, t)) return n
    }

    function W(t, e, i) {
      var n, o, r, s, a, l, c, h, u = this,
        d = {},
        p = t.style,
        f = t.nodeType && Nt(t),
        g = pt._data(t, "fxshow");
      i.queue || (a = pt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
        a.unqueued || l()
      }), a.unqueued++, u.always(function() {
        u.always(function() {
          a.unqueued--, pt.queue(t, "fx").length || a.empty.fire()
        })
      })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = pt.css(t, "display"), h = "none" === c ? pt._data(t, "olddisplay") || A(t.nodeName) : c, "inline" === h && "none" === pt.css(t, "float") && (ut.inlineBlockNeedsLayout && "inline" !== A(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ut.shrinkWrapBlocks() || u.always(function() {
        p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
      }));
      for (n in e)
        if (o = e[n], Oe.exec(o)) {
          if (delete e[n], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
            if ("show" !== o || !g || void 0 === g[n]) continue;
            f = !0
          }
          d[n] = g && g[n] || pt.style(t, n)
        } else c = void 0;
      if (pt.isEmptyObject(d)) "inline" === ("none" === c ? A(t.nodeName) : c) && (p.display = c);
      else {
        g ? "hidden" in g && (f = g.hidden) : g = pt._data(t, "fxshow", {}), r && (g.hidden = !f), f ? pt(t).show() : u.done(function() {
          pt(t).hide()
        }), u.done(function() {
          var e;
          pt._removeData(t, "fxshow");
          for (e in d) pt.style(t, e, d[e])
        });
        for (n in d) s = R(f ? g[n] : 0, n, u), n in g || (g[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
      }
    }

    function z(t, e) {
      var i, n, o, r, s;
      for (i in t)
        if (n = pt.camelCase(i), o = e[n], r = t[i], pt.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = pt.cssHooks[n], s && "expand" in s) {
          r = s.expand(r), delete t[n];
          for (i in r) i in t || (t[i] = r[i], e[i] = o)
        } else e[n] = o
    }

    function H(t, e, i) {
      var n, o, r = 0,
        s = H.prefilters.length,
        a = pt.Deferred().always(function() {
          delete l.elem
        }),
        l = function() {
          if (o) return !1;
          for (var e = ke || N(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, r = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
          return a.notifyWith(t, [c, r, i]), 1 > r && l ? i : (a.resolveWith(t, [c]), !1)
        },
        c = a.promise({
          elem: t,
          props: pt.extend({}, e),
          opts: pt.extend(!0, {
            specialEasing: {},
            easing: pt.easing._default
          }, i),
          originalProperties: e,
          originalOptions: i,
          startTime: ke || N(),
          duration: i.duration,
          tweens: [],
          createTween: function(e, i) {
            var n = pt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
            return c.tweens.push(n), n
          },
          stop: function(e) {
            var i = 0,
              n = e ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; n > i; i++) c.tweens[i].run(1);
            return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
          }
        }),
        h = c.props;
      for (z(h, c.opts.specialEasing); s > r; r++)
        if (n = H.prefilters[r].call(c, t, h, c.opts)) return pt.isFunction(n.stop) && (pt._queueHooks(c.elem, c.opts.queue).stop = pt.proxy(n.stop, n)), n;
      return pt.map(h, R, c), pt.isFunction(c.opts.start) && c.opts.start.call(t, c), pt.fx.timer(pt.extend(l, {
        elem: t,
        anim: c,
        queue: c.opts.queue
      })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function U(t) {
      return pt.attr(t, "class") || ""
    }

    function G(t) {
      return function(e, i) {
        "string" != typeof e && (i = e, e = "*");
        var n, o = 0,
          r = e.toLowerCase().match(Et) || [];
        if (pt.isFunction(i))
          for (; n = r[o++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
      }
    }

    function X(t, e, i, n) {
      function o(a) {
        var l;
        return r[a] = !0, pt.each(t[a] || [], function(t, a) {
          var c = a(e, i, n);
          return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
        }), l
      }
      var r = {},
        s = t === Ke;
      return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function V(t, e) {
      var i, n, o = pt.ajaxSettings.flatOptions || {};
      for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
      return i && pt.extend(!0, t, i), t
    }

    function Y(t, e, i) {
      for (var n, o, r, s, a = t.contents, l = t.dataTypes;
           "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
      if (o)
        for (s in a)
          if (a[s] && a[s].test(o)) {
            l.unshift(s);
            break
          }
      if (l[0] in i) r = l[0];
      else {
        for (s in i) {
          if (!l[0] || t.converters[s + " " + l[0]]) {
            r = s;
            break
          }
          n || (n = s)
        }
        r = r || n
      }
      return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function q(t, e, i, n) {
      var o, r, s, a, l, c = {},
        h = t.dataTypes.slice();
      if (h[1])
        for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
      for (r = h.shift(); r;)
        if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = h.shift())
          if ("*" === r) r = l;
          else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
              for (o in c)
                if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                  s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], h.unshift(a[1]));
                  break
                }
            if (s !== !0)
              if (s && t.throws) e = s(e);
              else try {
                e = s(e)
              } catch (t) {
                return {
                  state: "parsererror",
                  error: s ? t : "No conversion from " + l + " to " + r
                }
              }
          }
      return {
        state: "success",
        data: e
      }
    }

    function J(t) {
      return t.style && t.style.display || pt.css(t, "display")
    }

    function Q(t) {
      if (!pt.contains(t.ownerDocument || nt, t)) return !0;
      for (; t && 1 === t.nodeType;) {
        if ("none" === J(t) || "hidden" === t.type) return !0;
        t = t.parentNode
      }
      return !1
    }

    function K(t, e, i, n) {
      var o;
      if (pt.isArray(e)) pt.each(e, function(e, o) {
        i || ni.test(t) ? n(t, o) : K(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
      });
      else if (i || "object" !== pt.type(e)) n(t, e);
      else
        for (o in e) K(t + "[" + o + "]", e[o], i, n)
    }

    function Z() {
      try {
        return new t.XMLHttpRequest
      } catch (t) {}
    }

    function tt() {
      try {
        return new t.ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {}
    }

    function et(t) {
      return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var it = [],
      nt = t.document,
      ot = it.slice,
      rt = it.concat,
      st = it.push,
      at = it.indexOf,
      lt = {},
      ct = lt.toString,
      ht = lt.hasOwnProperty,
      ut = {},
      dt = "1.12.4",
      pt = function(t, e) {
        return new pt.fn.init(t, e)
      },
      ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      gt = /^-ms-/,
      mt = /-([\da-z])/gi,
      vt = function(t, e) {
        return e.toUpperCase()
      };
    pt.fn = pt.prototype = {
      jquery: dt,
      constructor: pt,
      selector: "",
      length: 0,
      toArray: function() {
        return ot.call(this)
      },
      get: function(t) {
        return null != t ? 0 > t ? this[t + this.length] : this[t] : ot.call(this)
      },
      pushStack: function(t) {
        var e = pt.merge(this.constructor(), t);
        return e.prevObject = this, e.context = this.context, e
      },
      each: function(t) {
        return pt.each(this, t)
      },
      map: function(t) {
        return this.pushStack(pt.map(this, function(e, i) {
          return t.call(e, i, e)
        }))
      },
      slice: function() {
        return this.pushStack(ot.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(t) {
        var e = this.length,
          i = +t + (0 > t ? e : 0);
        return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: st,
      sort: it.sort,
      splice: it.splice
    }, pt.extend = pt.fn.extend = function() {
      var t, e, i, n, o, r, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || pt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
        if (null != (o = arguments[a]))
          for (n in o) t = s[n], i = o[n], s !== i && (c && i && (pt.isPlainObject(i) || (e = pt.isArray(i))) ? (e ? (e = !1, r = t && pt.isArray(t) ? t : []) : r = t && pt.isPlainObject(t) ? t : {}, s[n] = pt.extend(c, r, i)) : void 0 !== i && (s[n] = i));
      return s
    }, pt.extend({
      expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(t) {
        throw new Error(t)
      },
      noop: function() {},
      isFunction: function(t) {
        return "function" === pt.type(t)
      },
      isArray: Array.isArray || function(t) {
        return "array" === pt.type(t)
      },
      isWindow: function(t) {
        return null != t && t == t.window
      },
      isNumeric: function(t) {
        var e = t && t.toString();
        return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0
      },
      isEmptyObject: function(t) {
        var e;
        for (e in t) return !1;
        return !0
      },
      isPlainObject: function(t) {
        var e;
        if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t)) return !1;
        try {
          if (t.constructor && !ht.call(t, "constructor") && !ht.call(t.constructor.prototype, "isPrototypeOf")) return !1
        } catch (t) {
          return !1
        }
        if (!ut.ownFirst)
          for (e in t) return ht.call(t, e);
        for (e in t);
        return void 0 === e || ht.call(t, e)
      },
      type: function(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ct.call(t)] || "object" : typeof t
      },
      globalEval: function(e) {
        e && pt.trim(e) && (t.execScript || function(e) {
          t.eval.call(t, e)
        })(e)
      },
      camelCase: function(t) {
        return t.replace(gt, "ms-").replace(mt, vt)
      },
      nodeName: function(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
      },
      each: function(t, e) {
        var n, o = 0;
        if (i(t))
          for (n = t.length; n > o && e.call(t[o], o, t[o]) !== !1; o++);
        else
          for (o in t)
            if (e.call(t[o], o, t[o]) === !1) break; return t
      },
      trim: function(t) {
        return null == t ? "" : (t + "").replace(ft, "")
      },
      makeArray: function(t, e) {
        var n = e || [];
        return null != t && (i(Object(t)) ? pt.merge(n, "string" == typeof t ? [t] : t) : st.call(n, t)), n
      },
      inArray: function(t, e, i) {
        var n;
        if (e) {
          if (at) return at.call(e, t, i);
          for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
            if (i in e && e[i] === t) return i
        }
        return -1
      },
      merge: function(t, e) {
        for (var i = +e.length, n = 0, o = t.length; i > n;) t[o++] = e[n++];
        if (i !== i)
          for (; void 0 !== e[n];) t[o++] = e[n++];
        return t.length = o, t
      },
      grep: function(t, e, i) {
        for (var n, o = [], r = 0, s = t.length, a = !i; s > r; r++) n = !e(t[r], r), n !== a && o.push(t[r]);
        return o
      },
      map: function(t, e, n) {
        var o, r, s = 0,
          a = [];
        if (i(t))
          for (o = t.length; o > s; s++) r = e(t[s], s, n), null != r && a.push(r);
        else
          for (s in t) r = e(t[s], s, n), null != r && a.push(r);
        return rt.apply([], a)
      },
      guid: 1,
      proxy: function(t, e) {
        var i, n, o;
        return "string" == typeof e && (o = t[e], e = t, t = o), pt.isFunction(t) ? (i = ot.call(arguments, 2), n = function() {
          return t.apply(e || this, i.concat(ot.call(arguments)))
        }, n.guid = t.guid = t.guid || pt.guid++, n) : void 0
      },
      now: function() {
        return +new Date
      },
      support: ut
    }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = it[Symbol.iterator]), pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
      lt["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function(t) {
      function e(t, e, i, n) {
        var o, r, s, a, l, c, u, p, f = e && e.ownerDocument,
          g = e ? e.nodeType : 9;
        if (i = i || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return i;
        if (!n && ((e ? e.ownerDocument || e : R) !== I && P(e), e = e || I, D)) {
          if (11 !== g && (c = vt.exec(t)))
            if (o = c[1]) {
              if (9 === g) {
                if (!(s = e.getElementById(o))) return i;
                if (s.id === o) return i.push(s), i
              } else if (f && (s = f.getElementById(o)) && N(e, s) && s.id === o) return i.push(s), i
            } else {
              if (c[2]) return K.apply(i, e.getElementsByTagName(t)), i;
              if ((o = c[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(o)), i
            }
          if (w.qsa && !G[t + " "] && (!L || !L.test(t))) {
            if (1 !== g) f = e, p = t;
            else if ("object" !== e.nodeName.toLowerCase()) {
              for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = B), u = k(t), r = u.length, l = dt.test(a) ? "#" + a : "[id='" + a + "']"; r--;) u[r] = l + " " + d(u[r]);
              p = u.join(","), f = yt.test(t) && h(e.parentNode) || e
            }
            if (p) try {
              return K.apply(i, f.querySelectorAll(p)), i
            } catch (t) {} finally {
              a === B && e.removeAttribute("id")
            }
          }
        }
        return O(t.replace(at, "$1"), e, i, n)
      }

      function i() {
        function t(i, n) {
          return e.push(i + " ") > C.cacheLength && delete t[e.shift()], t[i + " "] = n
        }
        var e = [];
        return t
      }

      function n(t) {
        return t[B] = !0, t
      }

      function o(t) {
        var e = I.createElement("div");
        try {
          return !!t(e)
        } catch (t) {
          return !1
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null
        }
      }

      function r(t, e) {
        for (var i = t.split("|"), n = i.length; n--;) C.attrHandle[i[n]] = e
      }

      function s(t, e) {
        var i = e && t,
          n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
        if (n) return n;
        if (i)
          for (; i = i.nextSibling;)
            if (i === e) return -1;
        return t ? 1 : -1
      }

      function a(t) {
        return function(e) {
          var i = e.nodeName.toLowerCase();
          return "input" === i && e.type === t
        }
      }

      function l(t) {
        return function(e) {
          var i = e.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && e.type === t
        }
      }

      function c(t) {
        return n(function(e) {
          return e = +e, n(function(i, n) {
            for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
          })
        })
      }

      function h(t) {
        return t && "undefined" != typeof t.getElementsByTagName && t
      }

      function u() {}

      function d(t) {
        for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
        return n
      }

      function p(t, e, i) {
        var n = e.dir,
          o = i && "parentNode" === n,
          r = z++;
        return e.first ? function(e, i, r) {
          for (; e = e[n];)
            if (1 === e.nodeType || o) return t(e, i, r)
        } : function(e, i, s) {
          var a, l, c, h = [W, r];
          if (s) {
            for (; e = e[n];)
              if ((1 === e.nodeType || o) && t(e, i, s)) return !0
          } else
            for (; e = e[n];)
              if (1 === e.nodeType || o) {
                if (c = e[B] || (e[B] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[n]) && a[0] === W && a[1] === r) return h[2] = a[2];
                if (l[n] = h, h[2] = t(e, i, s)) return !0
              }
        }
      }

      function f(t) {
        return t.length > 1 ? function(e, i, n) {
          for (var o = t.length; o--;)
            if (!t[o](e, i, n)) return !1;
          return !0
        } : t[0]
      }

      function g(t, i, n) {
        for (var o = 0, r = i.length; r > o; o++) e(t, i[o], n);
        return n
      }

      function m(t, e, i, n, o) {
        for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), c && e.push(a)));
        return s
      }

      function v(t, e, i, o, r, s) {
        return o && !o[B] && (o = v(o)), r && !r[B] && (r = v(r, s)), n(function(n, s, a, l) {
          var c, h, u, d = [],
            p = [],
            f = s.length,
            v = n || g(e || "*", a.nodeType ? [a] : a, []),
            y = !t || !n && e ? v : m(v, d, t, a, l),
            b = i ? r || (n ? t : f || o) ? [] : s : y;
          if (i && i(y, b, a, l), o)
            for (c = m(b, p), o(c, [], a, l), h = c.length; h--;)(u = c[h]) && (b[p[h]] = !(y[p[h]] = u));
          if (n) {
            if (r || t) {
              if (r) {
                for (c = [], h = b.length; h--;)(u = b[h]) && c.push(y[h] = u);
                r(null, b = [], c, l)
              }
              for (h = b.length; h--;)(u = b[h]) && (c = r ? tt(n, u) : d[h]) > -1 && (n[c] = !(s[c] = u))
            }
          } else b = m(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
        })
      }

      function y(t) {
        for (var e, i, n, o = t.length, r = C.relative[t[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = p(function(t) {
          return t === e
        }, s, !0), c = p(function(t) {
          return tt(e, t) > -1
        }, s, !0), h = [function(t, i, n) {
          var o = !r && (n || i !== j) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
          return e = null, o
        }]; o > a; a++)
          if (i = C.relative[t[a].type]) h = [p(f(h), i)];
          else {
            if (i = C.filter[t[a].type].apply(null, t[a].matches), i[B]) {
              for (n = ++a; o > n && !C.relative[t[n].type]; n++);
              return v(a > 1 && f(h), a > 1 && d(t.slice(0, a - 1).concat({
                value: " " === t[a - 2].type ? "*" : ""
              })).replace(at, "$1"), i, n > a && y(t.slice(a, n)), o > n && y(t = t.slice(n)), o > n && d(t))
            }
            h.push(i)
          }
        return f(h)
      }

      function b(t, i) {
        var o = i.length > 0,
          r = t.length > 0,
          s = function(n, s, a, l, c) {
            var h, u, d, p = 0,
              f = "0",
              g = n && [],
              v = [],
              y = j,
              b = n || r && C.find.TAG("*", c),
              x = W += null == y ? 1 : Math.random() || .1,
              w = b.length;
            for (c && (j = s === I || s || c); f !== w && null != (h = b[f]); f++) {
              if (r && h) {
                for (u = 0, s || h.ownerDocument === I || (P(h), a = !D); d = t[u++];)
                  if (d(h, s || I, a)) {
                    l.push(h);
                    break
                  }
                c && (W = x)
              }
              o && ((h = !d && h) && p--, n && g.push(h))
            }
            if (p += f, o && f !== p) {
              for (u = 0; d = i[u++];) d(g, v, s, a);
              if (n) {
                if (p > 0)
                  for (; f--;) g[f] || v[f] || (v[f] = J.call(l));
                v = m(v)
              }
              K.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
            }
            return c && (W = x, j = y), g
          };
        return o ? n(s) : s
      }
      var x, w, C, S, _, k, T, O, j, E, A, P, I, $, D, L, M, F, N, B = "sizzle" + 1 * new Date,
        R = t.document,
        W = 0,
        z = 0,
        H = i(),
        U = i(),
        G = i(),
        X = function(t, e) {
          return t === e && (A = !0), 0
        },
        V = 1 << 31,
        Y = {}.hasOwnProperty,
        q = [],
        J = q.pop,
        Q = q.push,
        K = q.push,
        Z = q.slice,
        tt = function(t, e) {
          for (var i = 0, n = t.length; n > i; i++)
            if (t[i] === e) return i;
          return -1
        },
        et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        it = "[\\x20\\t\\r\\n\\f]",
        nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
        rt = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
        st = new RegExp(it + "+", "g"),
        at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
        lt = new RegExp("^" + it + "*," + it + "*"),
        ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
        ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
        ut = new RegExp(rt),
        dt = new RegExp("^" + nt + "$"),
        pt = {
          ID: new RegExp("^#(" + nt + ")"),
          CLASS: new RegExp("^\\.(" + nt + ")"),
          TAG: new RegExp("^(" + nt + "|[*])"),
          ATTR: new RegExp("^" + ot),
          PSEUDO: new RegExp("^" + rt),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + et + ")$", "i"),
          needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
        },
        ft = /^(?:input|select|textarea|button)$/i,
        gt = /^h\d$/i,
        mt = /^[^{]+\{\s*\[native \w/,
        vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        yt = /[+~]/,
        bt = /'|\\/g,
        xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
        wt = function(t, e, i) {
          var n = "0x" + e - 65536;
          return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        },
        Ct = function() {
          P()
        };
      try {
        K.apply(q = Z.call(R.childNodes), R.childNodes), q[R.childNodes.length].nodeType
      } catch (t) {
        K = {
          apply: q.length ? function(t, e) {
            Q.apply(t, Z.call(e))
          } : function(t, e) {
            for (var i = t.length, n = 0; t[i++] = e[n++];);
            t.length = i - 1
          }
        }
      }
      w = e.support = {}, _ = e.isXML = function(t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName
      }, P = e.setDocument = function(t) {
        var e, i, n = t ? t.ownerDocument || t : R;
        return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, $ = I.documentElement, D = !_(I), (i = I.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Ct, !1) : i.attachEvent && i.attachEvent("onunload", Ct)), w.attributes = o(function(t) {
          return t.className = "i", !t.getAttribute("className")
        }), w.getElementsByTagName = o(function(t) {
          return t.appendChild(I.createComment("")), !t.getElementsByTagName("*").length
        }), w.getElementsByClassName = mt.test(I.getElementsByClassName), w.getById = o(function(t) {
          return $.appendChild(t).id = B, !I.getElementsByName || !I.getElementsByName(B).length
        }), w.getById ? (C.find.ID = function(t, e) {
          if ("undefined" != typeof e.getElementById && D) {
            var i = e.getElementById(t);
            return i ? [i] : []
          }
        }, C.filter.ID = function(t) {
          var e = t.replace(xt, wt);
          return function(t) {
            return t.getAttribute("id") === e
          }
        }) : (delete C.find.ID, C.filter.ID = function(t) {
          var e = t.replace(xt, wt);
          return function(t) {
            var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
            return i && i.value === e
          }
        }), C.find.TAG = w.getElementsByTagName ? function(t, e) {
          return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
        } : function(t, e) {
          var i, n = [],
            o = 0,
            r = e.getElementsByTagName(t);
          if ("*" === t) {
            for (; i = r[o++];) 1 === i.nodeType && n.push(i);
            return n
          }
          return r
        }, C.find.CLASS = w.getElementsByClassName && function(t, e) {
          return "undefined" != typeof e.getElementsByClassName && D ? e.getElementsByClassName(t) : void 0
        }, M = [], L = [], (w.qsa = mt.test(I.querySelectorAll)) && (o(function(t) {
          $.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + B + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + B + "+*").length || L.push(".#.+[+~]")
        }), o(function(t) {
          var e = I.createElement("input");
          e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
        })), (w.matchesSelector = mt.test(F = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && o(function(t) {
          w.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), M.push("!=", rt)
        }), L = L.length && new RegExp(L.join("|")), M = M.length && new RegExp(M.join("|")), e = mt.test($.compareDocumentPosition), N = e || mt.test($.contains) ? function(t, e) {
          var i = 9 === t.nodeType ? t.documentElement : t,
            n = e && e.parentNode;
          return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
        } : function(t, e) {
          if (e)
            for (; e = e.parentNode;)
              if (e === t) return !0;
          return !1
        }, X = e ? function(t, e) {
          if (t === e) return A = !0, 0;
          var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
          return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === I || t.ownerDocument === R && N(R, t) ? -1 : e === I || e.ownerDocument === R && N(R, e) ? 1 : E ? tt(E, t) - tt(E, e) : 0 : 4 & i ? -1 : 1)
        } : function(t, e) {
          if (t === e) return A = !0, 0;
          var i, n = 0,
            o = t.parentNode,
            r = e.parentNode,
            a = [t],
            l = [e];
          if (!o || !r) return t === I ? -1 : e === I ? 1 : o ? -1 : r ? 1 : E ? tt(E, t) - tt(E, e) : 0;
          if (o === r) return s(t, e);
          for (i = t; i = i.parentNode;) a.unshift(i);
          for (i = e; i = i.parentNode;) l.unshift(i);
          for (; a[n] === l[n];) n++;
          return n ? s(a[n], l[n]) : a[n] === R ? -1 : l[n] === R ? 1 : 0
        }, I) : I
      }, e.matches = function(t, i) {
        return e(t, null, null, i)
      }, e.matchesSelector = function(t, i) {
        if ((t.ownerDocument || t) !== I && P(t), i = i.replace(ht, "='$1']"), w.matchesSelector && D && !G[i + " "] && (!M || !M.test(i)) && (!L || !L.test(i))) try {
          var n = F.call(t, i);
          if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
        } catch (t) {}
        return e(i, I, null, [t]).length > 0
      }, e.contains = function(t, e) {
        return (t.ownerDocument || t) !== I && P(t), N(t, e)
      }, e.attr = function(t, e) {
        (t.ownerDocument || t) !== I && P(t);
        var i = C.attrHandle[e.toLowerCase()],
          n = i && Y.call(C.attrHandle, e.toLowerCase()) ? i(t, e, !D) : void 0;
        return void 0 !== n ? n : w.attributes || !D ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
      }, e.error = function(t) {
        throw new Error("Syntax error, unrecognized expression: " + t)
      }, e.uniqueSort = function(t) {
        var e, i = [],
          n = 0,
          o = 0;
        if (A = !w.detectDuplicates, E = !w.sortStable && t.slice(0), t.sort(X), A) {
          for (; e = t[o++];) e === t[o] && (n = i.push(o));
          for (; n--;) t.splice(i[n], 1)
        }
        return E = null, t
      }, S = e.getText = function(t) {
        var e, i = "",
          n = 0,
          o = t.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) i += S(t)
          } else if (3 === o || 4 === o) return t.nodeValue
        } else
          for (; e = t[n++];) i += S(e);
        return i
      }, C = e.selectors = {
        cacheLength: 50,
        createPseudo: n,
        match: pt,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(t) {
            return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
          },
          CHILD: function(t) {
            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
          },
          PSEUDO: function(t) {
            var e, i = !t[6] && t[2];
            return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
          }
        },
        filter: {
          TAG: function(t) {
            var e = t.replace(xt, wt).toLowerCase();
            return "*" === t ? function() {
              return !0
            } : function(t) {
              return t.nodeName && t.nodeName.toLowerCase() === e
            }
          },
          CLASS: function(t) {
            var e = H[t + " "];
            return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && H(t, function(t) {
              return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
            })
          },
          ATTR: function(t, i, n) {
            return function(o) {
              var r = e.attr(o, t);
              return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
            }
          },
          CHILD: function(t, e, i, n, o) {
            var r = "nth" !== t.slice(0, 3),
              s = "last" !== t.slice(-4),
              a = "of-type" === e;
            return 1 === n && 0 === o ? function(t) {
              return !!t.parentNode
            } : function(e, i, l) {
              var c, h, u, d, p, f, g = r !== s ? "nextSibling" : "previousSibling",
                m = e.parentNode,
                v = a && e.nodeName.toLowerCase(),
                y = !l && !a,
                b = !1;
              if (m) {
                if (r) {
                  for (; g;) {
                    for (d = e; d = d[g];)
                      if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                    f = g = "only" === t && !f && "nextSibling"
                  }
                  return !0
                }
                if (f = [s ? m.firstChild : m.lastChild], s && y) {
                  for (d = m, u = d[B] || (d[B] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === W && c[1], b = p && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || f.pop();)
                    if (1 === d.nodeType && ++b && d === e) {
                      h[t] = [W, p, b];
                      break
                    }
                } else if (y && (d = e, u = d[B] || (d[B] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === W && c[1], b = p), b === !1)
                  for (;
                    (d = ++p && d && d[g] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (u = d[B] || (d[B] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), h[t] = [W, b]), d !== e)););
                return b -= o, b === n || b % n === 0 && b / n >= 0
              }
            }
          },
          PSEUDO: function(t, i) {
            var o, r = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
            return r[B] ? r(i) : r.length > 1 ? (o = [t, t, "", i], C.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
              for (var n, o = r(t, i), s = o.length; s--;) n = tt(t, o[s]), t[n] = !(e[n] = o[s])
            }) : function(t) {
              return r(t, 0, o)
            }) : r
          }
        },
        pseudos: {
          not: n(function(t) {
            var e = [],
              i = [],
              o = T(t.replace(at, "$1"));
            return o[B] ? n(function(t, e, i, n) {
              for (var r, s = o(t, null, n, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
            }) : function(t, n, r) {
              return e[0] = t, o(e, null, r, i), e[0] = null, !i.pop()
            }
          }),
          has: n(function(t) {
            return function(i) {
              return e(t, i).length > 0
            }
          }),
          contains: n(function(t) {
            return t = t.replace(xt, wt),
              function(e) {
                return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
              }
          }),
          lang: n(function(t) {
            return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(),
              function(e) {
                var i;
                do
                  if (i = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
              }
          }),
          target: function(e) {
            var i = t.location && t.location.hash;
            return i && i.slice(1) === e.id
          },
          root: function(t) {
            return t === $
          },
          focus: function(t) {
            return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
          },
          enabled: function(t) {
            return t.disabled === !1
          },
          disabled: function(t) {
            return t.disabled === !0
          },
          checked: function(t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && !!t.checked || "option" === e && !!t.selected
          },
          selected: function(t) {
            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
          },
          empty: function(t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0
          },
          parent: function(t) {
            return !C.pseudos.empty(t)
          },
          header: function(t) {
            return gt.test(t.nodeName)
          },
          input: function(t) {
            return ft.test(t.nodeName)
          },
          button: function(t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && "button" === t.type || "button" === e
          },
          text: function(t) {
            var e;
            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
          },
          first: c(function() {
            return [0]
          }),
          last: c(function(t, e) {
            return [e - 1]
          }),
          eq: c(function(t, e, i) {
            return [0 > i ? i + e : i]
          }),
          even: c(function(t, e) {
            for (var i = 0; e > i; i += 2) t.push(i);
            return t
          }),
          odd: c(function(t, e) {
            for (var i = 1; e > i; i += 2) t.push(i);
            return t
          }),
          lt: c(function(t, e, i) {
            for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
            return t
          }),
          gt: c(function(t, e, i) {
            for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
            return t
          })
        }
      }, C.pseudos.nth = C.pseudos.eq;
      for (x in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) C.pseudos[x] = a(x);
      for (x in {
        submit: !0,
        reset: !0
      }) C.pseudos[x] = l(x);
      return u.prototype = C.filters = C.pseudos, C.setFilters = new u, k = e.tokenize = function(t, i) {
        var n, o, r, s, a, l, c, h = U[t + " "];
        if (h) return i ? 0 : h.slice(0);
        for (a = t, l = [], c = C.preFilter; a;) {
          n && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ct.exec(a)) && (n = o.shift(), r.push({
            value: n,
            type: o[0].replace(at, " ")
          }), a = a.slice(n.length));
          for (s in C.filter) !(o = pt[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
            value: n,
            type: s,
            matches: o
          }), a = a.slice(n.length));
          if (!n) break
        }
        return i ? a.length : a ? e.error(t) : U(t, l).slice(0)
      }, T = e.compile = function(t, e) {
        var i, n = [],
          o = [],
          r = G[t + " "];
        if (!r) {
          for (e || (e = k(t)), i = e.length; i--;) r = y(e[i]), r[B] ? n.push(r) : o.push(r);
          r = G(t, b(o, n)), r.selector = t
        }
        return r
      }, O = e.select = function(t, e, i, n) {
        var o, r, s, a, l, c = "function" == typeof t && t,
          u = !n && k(t = c.selector || t);
        if (i = i || [], 1 === u.length) {
          if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && D && C.relative[r[1].type]) {
            if (e = (C.find.ID(s.matches[0].replace(xt, wt), e) || [])[0], !e) return i;
            c && (e = e.parentNode), t = t.slice(r.shift().value.length)
          }
          for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)
            if ((l = C.find[a]) && (n = l(s.matches[0].replace(xt, wt), yt.test(r[0].type) && h(e.parentNode) || e))) {
              if (r.splice(o, 1), t = n.length && d(r), !t) return K.apply(i, n), i;
              break
            }
        }
        return (c || T(t, u))(n, e, !D, i, !e || yt.test(t) && h(e.parentNode) || e), i
      }, w.sortStable = B.split("").sort(X).join("") === B, w.detectDuplicates = !!A, P(), w.sortDetached = o(function(t) {
        return 1 & t.compareDocumentPosition(I.createElement("div"))
      }), o(function(t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
      }) || r("type|href|height|width", function(t, e, i) {
        return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }), w.attributes && o(function(t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
      }) || r("value", function(t, e, i) {
        return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
      }), o(function(t) {
        return null == t.getAttribute("disabled")
      }) || r(et, function(t, e, i) {
        var n;
        return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
      }), e
    }(t);
    pt.find = yt, pt.expr = yt.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = yt.uniqueSort, pt.text = yt.getText, pt.isXMLDoc = yt.isXML, pt.contains = yt.contains;
    var bt = function(t, e, i) {
        for (var n = [], o = void 0 !== i;
             (t = t[e]) && 9 !== t.nodeType;)
          if (1 === t.nodeType) {
            if (o && pt(t).is(i)) break;
            n.push(t)
          }
        return n
      },
      xt = function(t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i
      },
      wt = pt.expr.match.needsContext,
      Ct = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      St = /^.[^:#\[\.,]*$/;
    pt.filter = function(t, e, i) {
      var n = e[0];
      return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? pt.find.matchesSelector(n, t) ? [n] : [] : pt.find.matches(t, pt.grep(e, function(t) {
        return 1 === t.nodeType
      }))
    }, pt.fn.extend({
      find: function(t) {
        var e, i = [],
          n = this,
          o = n.length;
        if ("string" != typeof t) return this.pushStack(pt(t).filter(function() {
          for (e = 0; o > e; e++)
            if (pt.contains(n[e], this)) return !0
        }));
        for (e = 0; o > e; e++) pt.find(t, n[e], i);
        return i = this.pushStack(o > 1 ? pt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
      },
      filter: function(t) {
        return this.pushStack(n(this, t || [], !1))
      },
      not: function(t) {
        return this.pushStack(n(this, t || [], !0))
      },
      is: function(t) {
        return !!n(this, "string" == typeof t && wt.test(t) ? pt(t) : t || [], !1).length
      }
    });
    var _t, kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      Tt = pt.fn.init = function(t, e, i) {
        var n, o;
        if (!t) return this;
        if (i = i || _t, "string" == typeof t) {
          if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : kt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
          if (n[1]) {
            if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)), Ct.test(n[1]) && pt.isPlainObject(e))
              for (n in e) pt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this
          }
          if (o = nt.getElementById(n[2]), o && o.parentNode) {
            if (o.id !== n[2]) return _t.find(t);
            this.length = 1, this[0] = o
          }
          return this.context = nt, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : pt.isFunction(t) ? "undefined" != typeof i.ready ? i.ready(t) : t(pt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), pt.makeArray(t, this))
      };
    Tt.prototype = pt.fn, _t = pt(nt);
    var Ot = /^(?:parents|prev(?:Until|All))/,
      jt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    pt.fn.extend({
      has: function(t) {
        var e, i = pt(t, this),
          n = i.length;
        return this.filter(function() {
          for (e = 0; n > e; e++)
            if (pt.contains(this, i[e])) return !0
        })
      },
      closest: function(t, e) {
        for (var i, n = 0, o = this.length, r = [], s = wt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; o > n; n++)
          for (i = this[n]; i && i !== e; i = i.parentNode)
            if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && pt.find.matchesSelector(i, t))) {
              r.push(i);
              break
            }
        return this.pushStack(r.length > 1 ? pt.uniqueSort(r) : r)
      },
      index: function(t) {
        return t ? "string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(t, e) {
        return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
      },
      addBack: function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
    }), pt.each({
      parent: function(t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
      },
      parents: function(t) {
        return bt(t, "parentNode")
      },
      parentsUntil: function(t, e, i) {
        return bt(t, "parentNode", i)
      },
      next: function(t) {
        return o(t, "nextSibling")
      },
      prev: function(t) {
        return o(t, "previousSibling")
      },
      nextAll: function(t) {
        return bt(t, "nextSibling")
      },
      prevAll: function(t) {
        return bt(t, "previousSibling")
      },
      nextUntil: function(t, e, i) {
        return bt(t, "nextSibling", i)
      },
      prevUntil: function(t, e, i) {
        return bt(t, "previousSibling", i)
      },
      siblings: function(t) {
        return xt((t.parentNode || {}).firstChild, t)
      },
      children: function(t) {
        return xt(t.firstChild)
      },
      contents: function(t) {
        return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes)
      }
    }, function(t, e) {
      pt.fn[t] = function(i, n) {
        var o = pt.map(this, e, i);
        return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = pt.filter(n, o)), this.length > 1 && (jt[t] || (o = pt.uniqueSort(o)), Ot.test(t) && (o = o.reverse())), this.pushStack(o)
      }
    });
    var Et = /\S+/g;
    pt.Callbacks = function(t) {
      t = "string" == typeof t ? r(t) : pt.extend({}, t);
      var e, i, n, o, s = [],
        a = [],
        l = -1,
        c = function() {
          for (o = t.once, n = e = !0; a.length; l = -1)
            for (i = a.shift(); ++l < s.length;) s[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = s.length, i = !1);
          t.memory || (i = !1), e = !1, o && (s = i ? [] : "")
        },
        h = {
          add: function() {
            return s && (i && !e && (l = s.length - 1, a.push(i)), function e(i) {
              pt.each(i, function(i, n) {
                pt.isFunction(n) ? t.unique && h.has(n) || s.push(n) : n && n.length && "string" !== pt.type(n) && e(n)
              })
            }(arguments), i && !e && c()), this
          },
          remove: function() {
            return pt.each(arguments, function(t, e) {
              for (var i;
                   (i = pt.inArray(e, s, i)) > -1;) s.splice(i, 1), l >= i && l--
            }), this
          },
          has: function(t) {
            return t ? pt.inArray(t, s) > -1 : s.length > 0
          },
          empty: function() {
            return s && (s = []), this
          },
          disable: function() {
            return o = a = [], s = i = "", this
          },
          disabled: function() {
            return !s
          },
          lock: function() {
            return o = !0, i || h.disable(), this
          },
          locked: function() {
            return !!o
          },
          fireWith: function(t, i) {
            return o || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || c()), this
          },
          fire: function() {
            return h.fireWith(this, arguments), this
          },
          fired: function() {
            return !!n
          }
        };
      return h
    }, pt.extend({
      Deferred: function(t) {
        var e = [
            ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
            ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
            ["notify", "progress", pt.Callbacks("memory")]
          ],
          i = "pending",
          n = {
            state: function() {
              return i
            },
            always: function() {
              return o.done(arguments).fail(arguments), this
            },
            then: function() {
              var t = arguments;
              return pt.Deferred(function(i) {
                pt.each(e, function(e, r) {
                  var s = pt.isFunction(t[e]) && t[e];
                  o[r[1]](function() {
                    var t = s && s.apply(this, arguments);
                    t && pt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                  })
                }), t = null
              }).promise()
            },
            promise: function(t) {
              return null != t ? pt.extend(t, n) : n
            }
          },
          o = {};
        return n.pipe = n.then, pt.each(e, function(t, r) {
          var s = r[2],
            a = r[3];
          n[r[1]] = s.add, a && s.add(function() {
            i = a
          }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
            return o[r[0] + "With"](this === o ? n : this, arguments), this
          }, o[r[0] + "With"] = s.fireWith
        }), n.promise(o), t && t.call(o, o), o
      },
      when: function(t) {
        var e, i, n, o = 0,
          r = ot.call(arguments),
          s = r.length,
          a = 1 !== s || t && pt.isFunction(t.promise) ? s : 0,
          l = 1 === a ? t : pt.Deferred(),
          c = function(t, i, n) {
            return function(o) {
              i[t] = this, n[t] = arguments.length > 1 ? ot.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
            }
          };
        if (s > 1)
          for (e = new Array(s), i = new Array(s), n = new Array(s); s > o; o++) r[o] && pt.isFunction(r[o].promise) ? r[o].promise().progress(c(o, i, e)).done(c(o, n, r)).fail(l.reject) : --a;
        return a || l.resolveWith(n, r), l.promise()
      }
    });
    var At;
    pt.fn.ready = function(t) {
      return pt.ready.promise().done(t), this
    }, pt.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(t) {
        t ? pt.readyWait++ : pt.ready(!0)
      },
      ready: function(t) {
        (t === !0 ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, t !== !0 && --pt.readyWait > 0 || (At.resolveWith(nt, [pt]), pt.fn.triggerHandler && (pt(nt).triggerHandler("ready"), pt(nt).off("ready"))))
      }
    }), pt.ready.promise = function(e) {
      if (!At)
        if (At = pt.Deferred(), "complete" === nt.readyState || "loading" !== nt.readyState && !nt.documentElement.doScroll) t.setTimeout(pt.ready);
        else if (nt.addEventListener) nt.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
        else {
          nt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
          var i = !1;
          try {
            i = null == t.frameElement && nt.documentElement
          } catch (t) {}
          i && i.doScroll && ! function e() {
            if (!pt.isReady) {
              try {
                i.doScroll("left")
              } catch (i) {
                return t.setTimeout(e, 50)
              }
              s(), pt.ready()
            }
          }()
        }
      return At.promise(e)
    }, pt.ready.promise();
    var Pt;
    for (Pt in pt(ut)) break;
    ut.ownFirst = "0" === Pt, ut.inlineBlockNeedsLayout = !1, pt(function() {
      var t, e, i, n;
      i = nt.getElementsByTagName("body")[0], i && i.style && (e = nt.createElement("div"), n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ut.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
    }),
      function() {
        var t = nt.createElement("div");
        ut.deleteExpando = !0;
        try {
          delete t.test
        } catch (t) {
          ut.deleteExpando = !1
        }
        t = null
      }();
    var It = function(t) {
        var e = pt.noData[(t.nodeName + " ").toLowerCase()],
          i = +t.nodeType || 1;
        return (1 === i || 9 === i) && (!e || e !== !0 && t.getAttribute("classid") === e)
      },
      $t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Dt = /([A-Z])/g;
    pt.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(t) {
        return t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando], !!t && !c(t)
      },
      data: function(t, e, i) {
        return h(t, e, i)
      },
      removeData: function(t, e) {
        return u(t, e)
      },
      _data: function(t, e, i) {
        return h(t, e, i, !0)
      },
      _removeData: function(t, e) {
        return u(t, e, !0)
      }
    }), pt.fn.extend({
      data: function(t, e) {
        var i, n, o, r = this[0],
          s = r && r.attributes;
        if (void 0 === t) {
          if (this.length && (o = pt.data(r), 1 === r.nodeType && !pt._data(r, "parsedAttrs"))) {
            for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = pt.camelCase(n.slice(5)), l(r, n, o[n])));
            pt._data(r, "parsedAttrs", !0)
          }
          return o
        }
        return "object" == typeof t ? this.each(function() {
          pt.data(this, t)
        }) : arguments.length > 1 ? this.each(function() {
          pt.data(this, t, e)
        }) : r ? l(r, t, pt.data(r, t)) : void 0
      },
      removeData: function(t) {
        return this.each(function() {
          pt.removeData(this, t)
        })
      }
    }), pt.extend({
      queue: function(t, e, i) {
        var n;
        return t ? (e = (e || "fx") + "queue", n = pt._data(t, e), i && (!n || pt.isArray(i) ? n = pt._data(t, e, pt.makeArray(i)) : n.push(i)), n || []) : void 0
      },
      dequeue: function(t, e) {
        e = e || "fx";
        var i = pt.queue(t, e),
          n = i.length,
          o = i.shift(),
          r = pt._queueHooks(t, e),
          s = function() {
            pt.dequeue(t, e)
          };
        "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
      },
      _queueHooks: function(t, e) {
        var i = e + "queueHooks";
        return pt._data(t, i) || pt._data(t, i, {
          empty: pt.Callbacks("once memory").add(function() {
            pt._removeData(t, e + "queue"), pt._removeData(t, i)
          })
        })
      }
    }), pt.fn.extend({
      queue: function(t, e) {
        var i = 2;
        return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? pt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
          var i = pt.queue(this, t, e);
          pt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && pt.dequeue(this, t)
        })
      },
      dequeue: function(t) {
        return this.each(function() {
          pt.dequeue(this, t)
        })
      },
      clearQueue: function(t) {
        return this.queue(t || "fx", [])
      },
      promise: function(t, e) {
        var i, n = 1,
          o = pt.Deferred(),
          r = this,
          s = this.length,
          a = function() {
            --n || o.resolveWith(r, [r])
          };
        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = pt._data(r[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
        return a(), o.promise(e)
      }
    }),
      function() {
        var t;
        ut.shrinkWrapBlocks = function() {
          if (null != t) return t;
          t = !1;
          var e, i, n;
          return i = nt.getElementsByTagName("body")[0], i && i.style ? (e = nt.createElement("div"), n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(nt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
      }();
    var Lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Mt = new RegExp("^(?:([+-])=|)(" + Lt + ")([a-z%]*)$", "i"),
      Ft = ["Top", "Right", "Bottom", "Left"],
      Nt = function(t, e) {
        return t = e || t, "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t)
      },
      Bt = function(t, e, i, n, o, r, s) {
        var a = 0,
          l = t.length,
          c = null == i;
        if ("object" === pt.type(i)) {
          o = !0;
          for (a in i) Bt(t, e, a, i[a], !0, r, s)
        } else if (void 0 !== n && (o = !0, pt.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
            return c.call(pt(t), i)
          })), e))
          for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
        return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
      },
      Rt = /^(?:checkbox|radio)$/i,
      Wt = /<([\w:-]+)/,
      zt = /^$|\/(?:java|ecma)script/i,
      Ht = /^\s+/,
      Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
      var t = nt.createElement("div"),
        e = nt.createDocumentFragment(),
        i = nt.createElement("input");
      t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ut.leadingWhitespace = 3 === t.firstChild.nodeType, ut.tbody = !t.getElementsByTagName("tbody").length, ut.htmlSerialize = !!t.getElementsByTagName("link").length, ut.html5Clone = "<:nav></:nav>" !== nt.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, e.appendChild(i), ut.appendChecked = i.checked, t.innerHTML = "<textarea>x</textarea>", ut.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), i = nt.createElement("input"), i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), ut.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ut.noCloneEvent = !!t.addEventListener, t[pt.expando] = 1, ut.attributes = !t.getAttribute(pt.expando)
    }();
    var Gt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ut.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td;
    var Xt = /<|&#?\w+;/,
      Vt = /<tbody/i;
    ! function() {
      var e, i, n = nt.createElement("div");
      for (e in {
        submit: !0,
        change: !0,
        focusin: !0
      }) i = "on" + e, (ut[e] = i in t) || (n.setAttribute(i, "t"), ut[e] = n.attributes[i].expando === !1);
      n = null
    }();
    var Yt = /^(?:input|select|textarea)$/i,
      qt = /^key/,
      Jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Qt = /^(?:focusinfocus|focusoutblur)$/,
      Kt = /^([^.]*)(?:\.(.+)|)/;
    pt.event = {
      global: {},
      add: function(t, e, i, n, o) {
        var r, s, a, l, c, h, u, d, p, f, g, m = pt._data(t);
        if (m) {
          for (i.handler && (l = i, i = l.handler, o = l.selector), i.guid || (i.guid = pt.guid++), (s = m.events) || (s = m.events = {}), (h = m.handle) || (h = m.handle = function(t) {
            return "undefined" == typeof pt || t && pt.event.triggered === t.type ? void 0 : pt.event.dispatch.apply(h.elem, arguments)
          }, h.elem = t), e = (e || "").match(Et) || [""], a = e.length; a--;) r = Kt.exec(e[a]) || [], p = g = r[1], f = (r[2] || "").split(".").sort(), p && (c = pt.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = pt.event.special[p] || {}, u = pt.extend({
            type: p,
            origType: g,
            data: n,
            handler: i,
            guid: i.guid,
            selector: o,
            needsContext: o && pt.expr.match.needsContext.test(o),
            namespace: f.join(".")
          }, l), (d = s[p]) || (d = s[p] = [], d.delegateCount = 0, c.setup && c.setup.call(t, n, f, h) !== !1 || (t.addEventListener ? t.addEventListener(p, h, !1) : t.attachEvent && t.attachEvent("on" + p, h))), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), pt.event.global[p] = !0);
          t = null
        }
      },
      remove: function(t, e, i, n, o) {
        var r, s, a, l, c, h, u, d, p, f, g, m = pt.hasData(t) && pt._data(t);
        if (m && (h = m.events)) {
          for (e = (e || "").match(Et) || [""], c = e.length; c--;)
            if (a = Kt.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
              for (u = pt.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = h[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;) s = d[r], !o && g !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (d.splice(r, 1), s.selector && d.delegateCount--, u.remove && u.remove.call(t, s));
              l && !d.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || pt.removeEvent(t, p, m.handle), delete h[p])
            } else
              for (p in h) pt.event.remove(t, p + e[c], i, n, !0);
          pt.isEmptyObject(h) && (delete m.handle, pt._removeData(t, "events"))
        }
      },
      trigger: function(e, i, n, o) {
        var r, s, a, l, c, h, u, d = [n || nt],
          p = ht.call(e, "type") ? e.type : e,
          f = ht.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = h = n = n || nt, 3 !== n.nodeType && 8 !== n.nodeType && !Qt.test(p + pt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[pt.expando] ? e : new pt.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : pt.makeArray(i, [e]), c = pt.event.special[p] || {}, o || !c.trigger || c.trigger.apply(n, i) !== !1)) {
          if (!o && !c.noBubble && !pt.isWindow(n)) {
            for (l = c.delegateType || p, Qt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), h = a;
            h === (n.ownerDocument || nt) && d.push(h.defaultView || h.parentWindow || t)
          }
          for (u = 0;
               (a = d[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : c.bindType || p, r = (pt._data(a, "events") || {})[e.type] && pt._data(a, "handle"), r && r.apply(a, i), r = s && a[s], r && r.apply && It(a) && (e.result = r.apply(a, i), e.result === !1 && e.preventDefault());
          if (e.type = p, !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), i) === !1) && It(n) && s && n[p] && !pt.isWindow(n)) {
            h = n[s], h && (n[s] = null), pt.event.triggered = p;
            try {
              n[p]()
            } catch (t) {}
            pt.event.triggered = void 0, h && (n[s] = h)
          }
          return e.result
        }
      },
      dispatch: function(t) {
        t = pt.event.fix(t);
        var e, i, n, o, r, s = [],
          a = ot.call(arguments),
          l = (pt._data(this, "events") || {})[t.type] || [],
          c = pt.event.special[t.type] || {};
        if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
          for (s = pt.event.handlers.call(this, t, l), e = 0;
               (o = s[e++]) && !t.isPropagationStopped();)
            for (t.currentTarget = o.elem, i = 0;
                 (r = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, n = ((pt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, t), t.result
        }
      },
      handlers: function(t, e) {
        var i, n, o, r, s = [],
          a = e.delegateCount,
          l = t.target;
        if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
              for (n = [], i = 0; a > i; i++) r = e[i], o = r.selector + " ", void 0 === n[o] && (n[o] = r.needsContext ? pt(o, this).index(l) > -1 : pt.find(o, this, null, [l]).length), n[o] && n.push(r);
              n.length && s.push({
                elem: l,
                handlers: n
              })
            }
        return a < e.length && s.push({
          elem: this,
          handlers: e.slice(a)
        }), s
      },
      fix: function(t) {
        if (t[pt.expando]) return t;
        var e, i, n, o = t.type,
          r = t,
          s = this.fixHooks[o];
        for (s || (this.fixHooks[o] = s = Jt.test(o) ? this.mouseHooks : qt.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new pt.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
        return t.target || (t.target = r.srcElement || nt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(t, e) {
          return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(t, e) {
          var i, n, o, r = e.button,
            s = e.fromElement;
          return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || nt, o = n.documentElement, i = n.body, t.pageX = e.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
        }
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== x() && this.focus) try {
              return this.focus(), !1
            } catch (t) {}
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === x() && this.blur ? (this.blur(), !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return pt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
          },
          _default: function(t) {
            return pt.nodeName(t.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(t) {
            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
          }
        }
      },
      simulate: function(t, e, i) {
        var n = pt.extend(new pt.Event, i, {
          type: t,
          isSimulated: !0
        });
        pt.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
      }
    }, pt.removeEvent = nt.removeEventListener ? function(t, e, i) {
      t.removeEventListener && t.removeEventListener(e, i)
    } : function(t, e, i) {
      var n = "on" + e;
      t.detachEvent && ("undefined" == typeof t[n] && (t[n] = null), t.detachEvent(n, i))
    }, pt.Event = function(t, e) {
      return this instanceof pt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), void(this[pt.expando] = !0)) : new pt.Event(t, e)
    }, pt.Event.prototype = {
      constructor: pt.Event,
      isDefaultPrevented: b,
      isPropagationStopped: b,
      isImmediatePropagationStopped: b,
      preventDefault: function() {
        var t = this.originalEvent;
        this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
      },
      stopPropagation: function() {
        var t = this.originalEvent;
        this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
      }
    }, pt.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(t, e) {
      pt.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function(t) {
          var i, n = this,
            o = t.relatedTarget,
            r = t.handleObj;
          return o && (o === n || pt.contains(n, o)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
        }
      }
    }), ut.submit || (pt.event.special.submit = {
      setup: function() {
        return !pt.nodeName(this, "form") && void pt.event.add(this, "click._submit keypress._submit", function(t) {
          var e = t.target,
            i = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : void 0;
          i && !pt._data(i, "submit") && (pt.event.add(i, "submit._submit", function(t) {
            t._submitBubble = !0
          }), pt._data(i, "submit", !0))
        })
      },
      postDispatch: function(t) {
        t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t))
      },
      teardown: function() {
        return !pt.nodeName(this, "form") && void pt.event.remove(this, "._submit")
      }
    }), ut.change || (pt.event.special.change = {
      setup: function() {
        return Yt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pt.event.add(this, "propertychange._change", function(t) {
          "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
        }), pt.event.add(this, "click._change", function(t) {
          this._justChanged && !t.isTrigger && (this._justChanged = !1), pt.event.simulate("change", this, t)
        })), !1) : void pt.event.add(this, "beforeactivate._change", function(t) {
          var e = t.target;
          Yt.test(e.nodeName) && !pt._data(e, "change") && (pt.event.add(e, "change._change", function(t) {
            !this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t)
          }), pt._data(e, "change", !0))
        })
      },
      handle: function(t) {
        var e = t.target;
        return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
      },
      teardown: function() {
        return pt.event.remove(this, "._change"), !Yt.test(this.nodeName)
      }
    }), ut.focusin || pt.each({
      focus: "focusin",
      blur: "focusout"
    }, function(t, e) {
      var i = function(t) {
        pt.event.simulate(e, t.target, pt.event.fix(t))
      };
      pt.event.special[e] = {
        setup: function() {
          var n = this.ownerDocument || this,
            o = pt._data(n, e);
          o || n.addEventListener(t, i, !0), pt._data(n, e, (o || 0) + 1)
        },
        teardown: function() {
          var n = this.ownerDocument || this,
            o = pt._data(n, e) - 1;
          o ? pt._data(n, e, o) : (n.removeEventListener(t, i, !0), pt._removeData(n, e))
        }
      }
    }), pt.fn.extend({
      on: function(t, e, i, n) {
        return w(this, t, e, i, n)
      },
      one: function(t, e, i, n) {
        return w(this, t, e, i, n, 1)
      },
      off: function(t, e, i) {
        var n, o;
        if (t && t.preventDefault && t.handleObj) return n = t.handleObj, pt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
        if ("object" == typeof t) {
          for (o in t) this.off(o, e, t[o]);
          return this
        }
        return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = b), this.each(function() {
          pt.event.remove(this, t, i, e)
        })
      },
      trigger: function(t, e) {
        return this.each(function() {
          pt.event.trigger(t, e, this)
        })
      },
      triggerHandler: function(t, e) {
        var i = this[0];
        return i ? pt.event.trigger(t, e, i, !0) : void 0
      }
    });
    var Zt = / jQuery\d+="(?:null|\d+)"/g,
      te = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
      ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ie = /<script|<style|<link/i,
      ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
      oe = /^true\/(.*)/,
      re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      se = p(nt),
      ae = se.appendChild(nt.createElement("div"));
    pt.extend({
      htmlPrefilter: function(t) {
        return t.replace(ee, "<$1></$2>")
      },
      clone: function(t, e, i) {
        var n, o, r, s, a, l = pt.contains(t.ownerDocument, t);
        if (ut.html5Clone || pt.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(r = ae.firstChild)), !(ut.noCloneEvent && ut.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
          for (n = f(r), a = f(t), s = 0; null != (o = a[s]); ++s) n[s] && T(o, n[s]);
        if (e)
          if (i)
            for (a = a || f(t), n = n || f(r), s = 0; null != (o = a[s]); s++) k(o, n[s]);
          else k(t, r);
        return n = f(r, "script"), n.length > 0 && g(n, !l && f(t, "script")), n = a = o = null, r
      },
      cleanData: function(t, e) {
        for (var i, n, o, r, s = 0, a = pt.expando, l = pt.cache, c = ut.attributes, h = pt.event.special; null != (i = t[s]); s++)
          if ((e || It(i)) && (o = i[a], r = o && l[o])) {
            if (r.events)
              for (n in r.events) h[n] ? pt.event.remove(i, n) : pt.removeEvent(i, n, r.handle);
            l[o] && (delete l[o], c || "undefined" == typeof i.removeAttribute ? i[a] = void 0 : i.removeAttribute(a), it.push(o))
          }
      }
    }), pt.fn.extend({
      domManip: O,
      detach: function(t) {
        return j(this, t, !0)
      },
      remove: function(t) {
        return j(this, t)
      },
      text: function(t) {
        return Bt(this, function(t) {
          return void 0 === t ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || nt).createTextNode(t))
        }, null, t, arguments.length)
      },
      append: function() {
        return O(this, arguments, function(t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = C(this, t);
            e.appendChild(t)
          }
        })
      },
      prepend: function() {
        return O(this, arguments, function(t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = C(this, t);
            e.insertBefore(t, e.firstChild)
          }
        })
      },
      before: function() {
        return O(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this)
        })
      },
      after: function() {
        return O(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
      },
      empty: function() {
        for (var t, e = 0; null != (t = this[e]); e++) {
          for (1 === t.nodeType && pt.cleanData(f(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
          t.options && pt.nodeName(t, "select") && (t.options.length = 0)
        }
        return this
      },
      clone: function(t, e) {
        return t = null != t && t, e = null == e ? t : e, this.map(function() {
          return pt.clone(this, t, e)
        })
      },
      html: function(t) {
        return Bt(this, function(t) {
          var e = this[0] || {},
            i = 0,
            n = this.length;
          if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
          if ("string" == typeof t && !ie.test(t) && (ut.htmlSerialize || !te.test(t)) && (ut.leadingWhitespace || !Ht.test(t)) && !Gt[(Wt.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = pt.htmlPrefilter(t);
            try {
              for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (pt.cleanData(f(e, !1)), e.innerHTML = t);
              e = 0
            } catch (t) {}
          }
          e && this.empty().append(t)
        }, null, t, arguments.length)
      },
      replaceWith: function() {
        var t = [];
        return O(this, arguments, function(e) {
          var i = this.parentNode;
          pt.inArray(this, t) < 0 && (pt.cleanData(f(this)), i && i.replaceChild(e, this))
        }, t)
      }
    }), pt.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(t, e) {
      pt.fn[t] = function(t) {
        for (var i, n = 0, o = [], r = pt(t), s = r.length - 1; s >= n; n++) i = n === s ? this : this.clone(!0), pt(r[n])[e](i), st.apply(o, i.get());
        return this.pushStack(o)
      }
    });
    var le, ce = {
        HTML: "block",
        BODY: "block"
      },
      he = /^margin/,
      ue = new RegExp("^(" + Lt + ")(?!px)[a-z%]+$", "i"),
      de = function(t, e, i, n) {
        var o, r, s = {};
        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
        o = i.apply(t, n || []);
        for (r in e) t.style[r] = s[r];
        return o
      },
      pe = nt.documentElement;
    ! function() {
      function e() {
        var e, h, u = nt.documentElement;
        u.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = o = a = !1, n = s = !0, t.getComputedStyle && (h = t.getComputedStyle(c), i = "1%" !== (h || {}).top, a = "2px" === (h || {}).marginLeft, o = "4px" === (h || {
          width: "4px"
        }).width, c.style.marginRight = "50%", n = "4px" === (h || {
          marginRight: "4px"
        }).marginRight, e = c.appendChild(nt.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", r = 0 === c.getClientRects().length, r && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === e[0].offsetHeight, r && (e[0].style.display = "", e[1].style.display = "none", r = 0 === e[0].offsetHeight)), u.removeChild(l)
      }
      var i, n, o, r, s, a, l = nt.createElement("div"),
        c = nt.createElement("div");
      c.style && (c.style.cssText = "float:left;opacity:.5", ut.opacity = "0.5" === c.style.opacity, ut.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ut.clearCloneStyle = "content-box" === c.style.backgroundClip, l = nt.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), ut.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, pt.extend(ut, {
        reliableHiddenOffsets: function() {
          return null == i && e(), r
        },
        boxSizingReliable: function() {
          return null == i && e(), o
        },
        pixelMarginRight: function() {
          return null == i && e(), n
        },
        pixelPosition: function() {
          return null == i && e(), i
        },
        reliableMarginRight: function() {
          return null == i && e(), s
        },
        reliableMarginLeft: function() {
          return null == i && e(), a
        }
      }))
    }();
    var fe, ge, me = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (fe = function(e) {
      var i = e.ownerDocument.defaultView;
      return i && i.opener || (i = t), i.getComputedStyle(e)
    }, ge = function(t, e, i) {
      var n, o, r, s, a = t.style;
      return i = i || fe(t), s = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== s && void 0 !== s || pt.contains(t.ownerDocument, t) || (s = pt.style(t, e)), i && !ut.pixelMarginRight() && ue.test(s) && he.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r), void 0 === s ? s : s + ""
    }) : pe.currentStyle && (fe = function(t) {
      return t.currentStyle
    }, ge = function(t, e, i) {
      var n, o, r, s, a = t.style;
      return i = i || fe(t), s = i ? i[e] : void 0, null == s && a && a[e] && (s = a[e]), ue.test(s) && !me.test(e) && (n = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = n, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
    });
    var ve = /alpha\([^)]*\)/i,
      ye = /opacity\s*=\s*([^)]*)/i,
      be = /^(none|table(?!-c[ea]).+)/,
      xe = new RegExp("^(" + Lt + ")(.*)$", "i"),
      we = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Ce = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Se = ["Webkit", "O", "Moz", "ms"],
      _e = nt.createElement("div").style;
    pt.extend({
      cssHooks: {
        opacity: {
          get: function(t, e) {
            if (e) {
              var i = ge(t, "opacity");
              return "" === i ? "1" : i
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        float: ut.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(t, e, i, n) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o, r, s, a = pt.camelCase(e),
            l = t.style;
          if (e = pt.cssProps[a] || (pt.cssProps[a] = I(a) || a), s = pt.cssHooks[e] || pt.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e];
          if (r = typeof i, "string" === r && (o = Mt.exec(i)) && o[1] && (i = d(t, e, o), r = "number"), null != i && i === i && ("number" === r && (i += o && o[3] || (pt.cssNumber[a] ? "" : "px")), ut.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (i = s.set(t, i, n))))) try {
            l[e] = i
          } catch (t) {}
        }
      },
      css: function(t, e, i, n) {
        var o, r, s, a = pt.camelCase(e);
        return e = pt.cssProps[a] || (pt.cssProps[a] = I(a) || a), s = pt.cssHooks[e] || pt.cssHooks[a], s && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = ge(t, e, n)), "normal" === r && e in Ce && (r = Ce[e]), "" === i || i ? (o = parseFloat(r), i === !0 || isFinite(o) ? o || 0 : r) : r
      }
    }), pt.each(["height", "width"], function(t, e) {
      pt.cssHooks[e] = {
        get: function(t, i, n) {
          return i ? be.test(pt.css(t, "display")) && 0 === t.offsetWidth ? de(t, we, function() {
            return M(t, e, n)
          }) : M(t, e, n) : void 0
        },
        set: function(t, i, n) {
          var o = n && fe(t);
          return D(t, i, n ? L(t, e, n, ut.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, o), o) : 0)
        }
      }
    }), ut.opacity || (pt.cssHooks.opacity = {
      get: function(t, e) {
        return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
      },
      set: function(t, e) {
        var i = t.style,
          n = t.currentStyle,
          o = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
          r = n && n.filter || i.filter || "";
        i.zoom = 1, (e >= 1 || "" === e) && "" === pt.trim(r.replace(ve, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = ve.test(r) ? r.replace(ve, o) : r + " " + o)
      }
    }), pt.cssHooks.marginRight = P(ut.reliableMarginRight, function(t, e) {
      return e ? de(t, {
        display: "inline-block"
      }, ge, [t, "marginRight"]) : void 0
    }), pt.cssHooks.marginLeft = P(ut.reliableMarginLeft, function(t, e) {
      return e ? (parseFloat(ge(t, "marginLeft")) || (pt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - de(t, {
        marginLeft: 0
      }, function() {
        return t.getBoundingClientRect().left
      }) : 0)) + "px" : void 0
    }), pt.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(t, e) {
      pt.cssHooks[t + e] = {
        expand: function(i) {
          for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + Ft[n] + e] = r[n] || r[n - 2] || r[0];
          return o
        }
      }, he.test(t) || (pt.cssHooks[t + e].set = D)
    }), pt.fn.extend({
      css: function(t, e) {
        return Bt(this, function(t, e, i) {
          var n, o, r = {},
            s = 0;
          if (pt.isArray(e)) {
            for (n = fe(t), o = e.length; o > s; s++) r[e[s]] = pt.css(t, e[s], !1, n);
            return r
          }
          return void 0 !== i ? pt.style(t, e, i) : pt.css(t, e)
        }, t, e, arguments.length > 1)
      },
      show: function() {
        return $(this, !0)
      },
      hide: function() {
        return $(this)
      },
      toggle: function(t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
          Nt(this) ? pt(this).show() : pt(this).hide()
        })
      }
    }), pt.Tween = F, F.prototype = {
      constructor: F,
      init: function(t, e, i, n, o, r) {
        this.elem = t, this.prop = i, this.easing = o || pt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (pt.cssNumber[i] ? "" : "px")
      },
      cur: function() {
        var t = F.propHooks[this.prop];
        return t && t.get ? t.get(this) : F.propHooks._default.get(this)
      },
      run: function(t) {
        var e, i = F.propHooks[this.prop];
        return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : F.propHooks._default.set(this), this
      }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
      _default: {
        get: function(t) {
          var e;
          return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
        },
        set: function(t) {
          pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit)
        }
      }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
      set: function(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
    }, pt.easing = {
      linear: function(t) {
        return t
      },
      swing: function(t) {
        return .5 - Math.cos(t * Math.PI) / 2
      },
      _default: "swing"
    }, pt.fx = F.prototype.init, pt.fx.step = {};
    var ke, Te, Oe = /^(?:toggle|show|hide)$/,
      je = /queueHooks$/;
    pt.Animation = pt.extend(H, {
      tweeners: {
        "*": [function(t, e) {
          var i = this.createTween(t, e);
          return d(i.elem, t, Mt.exec(e), i), i
        }]
      },
      tweener: function(t, e) {
        pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Et);
        for (var i, n = 0, o = t.length; o > n; n++) i = t[n], H.tweeners[i] = H.tweeners[i] || [], H.tweeners[i].unshift(e)
      },
      prefilters: [W],
      prefilter: function(t, e) {
        e ? H.prefilters.unshift(t) : H.prefilters.push(t)
      }
    }), pt.speed = function(t, e, i) {
      var n = t && "object" == typeof t ? pt.extend({}, t) : {
        complete: i || !i && e || pt.isFunction(t) && t,
        duration: t,
        easing: i && e || e && !pt.isFunction(e) && e
      };
      return n.duration = pt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in pt.fx.speeds ? pt.fx.speeds[n.duration] : pt.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
        pt.isFunction(n.old) && n.old.call(this), n.queue && pt.dequeue(this, n.queue)
      }, n
    }, pt.fn.extend({
      fadeTo: function(t, e, i, n) {
        return this.filter(Nt).css("opacity", 0).show().end().animate({
          opacity: e
        }, t, i, n)
      },
      animate: function(t, e, i, n) {
        var o = pt.isEmptyObject(t),
          r = pt.speed(e, i, n),
          s = function() {
            var e = H(this, pt.extend({}, t), r);
            (o || pt._data(this, "finish")) && e.stop(!0)
          };
        return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
      },
      stop: function(t, e, i) {
        var n = function(t) {
          var e = t.stop;
          delete t.stop, e(i)
        };
        return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
          var e = !0,
            o = null != t && t + "queueHooks",
            r = pt.timers,
            s = pt._data(this);
          if (o) s[o] && s[o].stop && n(s[o]);
          else
            for (o in s) s[o] && s[o].stop && je.test(o) && n(s[o]);
          for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
          !e && i || pt.dequeue(this, t)
        })
      },
      finish: function(t) {
        return t !== !1 && (t = t || "fx"), this.each(function() {
          var e, i = pt._data(this),
            n = i[t + "queue"],
            o = i[t + "queueHooks"],
            r = pt.timers,
            s = n ? n.length : 0;
          for (i.finish = !0, pt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
          for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
          delete i.finish
        })
      }
    }), pt.each(["toggle", "show", "hide"], function(t, e) {
      var i = pt.fn[e];
      pt.fn[e] = function(t, n, o) {
        return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(B(e, !0), t, n, o)
      }
    }), pt.each({
      slideDown: B("show"),
      slideUp: B("hide"),
      slideToggle: B("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(t, e) {
      pt.fn[t] = function(t, i, n) {
        return this.animate(e, t, i, n)
      }
    }), pt.timers = [], pt.fx.tick = function() {
      var t, e = pt.timers,
        i = 0;
      for (ke = pt.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
      e.length || pt.fx.stop(), ke = void 0
    }, pt.fx.timer = function(t) {
      pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop()
    }, pt.fx.interval = 13, pt.fx.start = function() {
      Te || (Te = t.setInterval(pt.fx.tick, pt.fx.interval))
    }, pt.fx.stop = function() {
      t.clearInterval(Te), Te = null
    }, pt.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, pt.fn.delay = function(e, i) {
      return e = pt.fx ? pt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
        var o = t.setTimeout(i, e);
        n.stop = function() {
          t.clearTimeout(o)
        }
      })
    },
      function() {
        var t, e = nt.createElement("input"),
          i = nt.createElement("div"),
          n = nt.createElement("select"),
          o = n.appendChild(nt.createElement("option"));
        i = nt.createElement("div"), i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = i.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), i.appendChild(e), t = i.getElementsByTagName("a")[0], t.style.cssText = "top:1px", ut.getSetAttribute = "t" !== i.className, ut.style = /top/.test(t.getAttribute("style")), ut.hrefNormalized = "/a" === t.getAttribute("href"), ut.checkOn = !!e.value, ut.optSelected = o.selected, ut.enctype = !!nt.createElement("form").enctype, n.disabled = !0, ut.optDisabled = !o.disabled, e = nt.createElement("input"), e.setAttribute("value", ""), ut.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ut.radioValue = "t" === e.value
      }();
    var Ee = /\r/g,
      Ae = /[\x20\t\r\n\f]+/g;
    pt.fn.extend({
      val: function(t) {
        var e, i, n, o = this[0];
        return arguments.length ? (n = pt.isFunction(t), this.each(function(i) {
          var o;
          1 === this.nodeType && (o = n ? t.call(this, i, pt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : pt.isArray(o) && (o = pt.map(o, function(t) {
            return null == t ? "" : t + ""
          })), e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
        })) : o ? (e = pt.valHooks[o.type] || pt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(Ee, "") : null == i ? "" : i)) : void 0
      }
    }), pt.extend({
      valHooks: {
        option: {
          get: function(t) {
            var e = pt.find.attr(t, "value");
            return null != e ? e : pt.trim(pt.text(t)).replace(Ae, " ")
          }
        },
        select: {
          get: function(t) {
            for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
              if (i = n[l], (i.selected || l === o) && (ut.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !pt.nodeName(i.parentNode, "optgroup"))) {
                if (e = pt(i).val(), r) return e;
                s.push(e)
              }
            return s
          },
          set: function(t, e) {
            for (var i, n, o = t.options, r = pt.makeArray(e), s = o.length; s--;)
              if (n = o[s], pt.inArray(pt.valHooks.option.get(n), r) > -1) try {
                n.selected = i = !0
              } catch (t) {
                n.scrollHeight
              } else n.selected = !1;
            return i || (t.selectedIndex = -1), o
          }
        }
      }
    }), pt.each(["radio", "checkbox"], function() {
      pt.valHooks[this] = {
        set: function(t, e) {
          return pt.isArray(e) ? t.checked = pt.inArray(pt(t).val(), e) > -1 : void 0
        }
      }, ut.checkOn || (pt.valHooks[this].get = function(t) {
        return null === t.getAttribute("value") ? "on" : t.value
      })
    });
    var Pe, Ie, $e = pt.expr.attrHandle,
      De = /^(?:checked|selected)$/i,
      Le = ut.getSetAttribute,
      Me = ut.input;
    pt.fn.extend({
      attr: function(t, e) {
        return Bt(this, pt.attr, t, e, arguments.length > 1)
      },
      removeAttr: function(t) {
        return this.each(function() {
          pt.removeAttr(this, t)
        })
      }
    }), pt.extend({
      attr: function(t, e, i) {
        var n, o, r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? pt.prop(t, e, i) : (1 === r && pt.isXMLDoc(t) || (e = e.toLowerCase(), o = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? Ie : Pe)), void 0 !== i ? null === i ? void pt.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : (n = pt.find.attr(t, e), null == n ? void 0 : n))
      },
      attrHooks: {
        type: {
          set: function(t, e) {
            if (!ut.radioValue && "radio" === e && pt.nodeName(t, "input")) {
              var i = t.value;
              return t.setAttribute("type", e), i && (t.value = i), e
            }
          }
        }
      },
      removeAttr: function(t, e) {
        var i, n, o = 0,
          r = e && e.match(Et);
        if (r && 1 === t.nodeType)
          for (; i = r[o++];) n = pt.propFix[i] || i, pt.expr.match.bool.test(i) ? Me && Le || !De.test(i) ? t[n] = !1 : t[pt.camelCase("default-" + i)] = t[n] = !1 : pt.attr(t, i, ""), t.removeAttribute(Le ? i : n)
      }
    }), Ie = {
      set: function(t, e, i) {
        return e === !1 ? pt.removeAttr(t, i) : Me && Le || !De.test(i) ? t.setAttribute(!Le && pt.propFix[i] || i, i) : t[pt.camelCase("default-" + i)] = t[i] = !0, i
      }
    }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function(t, e) {
      var i = $e[e] || pt.find.attr;
      Me && Le || !De.test(e) ? $e[e] = function(t, e, n) {
        var o, r;
        return n || (r = $e[e], $e[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, $e[e] = r), o
      } : $e[e] = function(t, e, i) {
        return i ? void 0 : t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null
      }
    }), Me && Le || (pt.attrHooks.value = {
      set: function(t, e, i) {
        return pt.nodeName(t, "input") ? void(t.defaultValue = e) : Pe && Pe.set(t, e, i)
      }
    }), Le || (Pe = {
      set: function(t, e, i) {
        var n = t.getAttributeNode(i);
        return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
      }
    }, $e.id = $e.name = $e.coords = function(t, e, i) {
      var n;
      return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, pt.valHooks.button = {
      get: function(t, e) {
        var i = t.getAttributeNode(e);
        return i && i.specified ? i.value : void 0
      },
      set: Pe.set
    }, pt.attrHooks.contenteditable = {
      set: function(t, e, i) {
        Pe.set(t, "" !== e && e, i)
      }
    }, pt.each(["width", "height"], function(t, e) {
      pt.attrHooks[e] = {
        set: function(t, i) {
          return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
        }
      }
    })), ut.style || (pt.attrHooks.style = {
      get: function(t) {
        return t.style.cssText || void 0
      },
      set: function(t, e) {
        return t.style.cssText = e + ""
      }
    });
    var Fe = /^(?:input|select|textarea|button|object)$/i,
      Ne = /^(?:a|area)$/i;
    pt.fn.extend({
      prop: function(t, e) {
        return Bt(this, pt.prop, t, e, arguments.length > 1)
      },
      removeProp: function(t) {
        return t = pt.propFix[t] || t, this.each(function() {
          try {
            this[t] = void 0, delete this[t]
          } catch (t) {}
        })
      }
    }), pt.extend({
      prop: function(t, e, i) {
        var n, o, r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, o = pt.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
      },
      propHooks: {
        tabIndex: {
          get: function(t) {
            var e = pt.find.attr(t, "tabindex");
            return e ? parseInt(e, 10) : Fe.test(t.nodeName) || Ne.test(t.nodeName) && t.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), ut.hrefNormalized || pt.each(["href", "src"], function(t, e) {
      pt.propHooks[e] = {
        get: function(t) {
          return t.getAttribute(e, 4)
        }
      }
    }), ut.optSelected || (pt.propHooks.selected = {
      get: function(t) {
        var e = t.parentNode;
        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
      },
      set: function(t) {
        var e = t.parentNode;
        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
      }
    }), pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      pt.propFix[this.toLowerCase()] = this
    }), ut.enctype || (pt.propFix.enctype = "encoding");
    var Be = /[\t\r\n\f]/g;
    pt.fn.extend({
      addClass: function(t) {
        var e, i, n, o, r, s, a, l = 0;
        if (pt.isFunction(t)) return this.each(function(e) {
          pt(this).addClass(t.call(this, e, U(this)))
        });
        if ("string" == typeof t && t)
          for (e = t.match(Et) || []; i = this[l++];)
            if (o = U(i), n = 1 === i.nodeType && (" " + o + " ").replace(Be, " ")) {
              for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
              a = pt.trim(n), o !== a && pt.attr(i, "class", a)
            }
        return this
      },
      removeClass: function(t) {
        var e, i, n, o, r, s, a, l = 0;
        if (pt.isFunction(t)) return this.each(function(e) {
          pt(this).removeClass(t.call(this, e, U(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(Et) || []; i = this[l++];)
            if (o = U(i), n = 1 === i.nodeType && (" " + o + " ").replace(Be, " ")) {
              for (s = 0; r = e[s++];)
                for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
              a = pt.trim(n), o !== a && pt.attr(i, "class", a)
            }
        return this
      },
      toggleClass: function(t, e) {
        var i = typeof t;
        return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function(i) {
          pt(this).toggleClass(t.call(this, i, U(this), e), e)
        }) : this.each(function() {
          var e, n, o, r;
          if ("string" === i)
            for (n = 0, o = pt(this), r = t.match(Et) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
          else void 0 !== t && "boolean" !== i || (e = U(this), e && pt._data(this, "__className__", e), pt.attr(this, "class", e || t === !1 ? "" : pt._data(this, "__className__") || ""))
        })
      },
      hasClass: function(t) {
        var e, i, n = 0;
        for (e = " " + t + " "; i = this[n++];)
          if (1 === i.nodeType && (" " + U(i) + " ").replace(Be, " ").indexOf(e) > -1) return !0;
        return !1
      }
    }), pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
      pt.fn[e] = function(t, i) {
        return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
      }
    }), pt.fn.extend({
      hover: function(t, e) {
        return this.mouseenter(t).mouseleave(e || t)
      }
    });
    var Re = t.location,
      We = pt.now(),
      ze = /\?/,
      He = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pt.parseJSON = function(e) {
      if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
      var i, n = null,
        o = pt.trim(e + "");
      return o && !pt.trim(o.replace(He, function(t, e, o, r) {
        return i && e && (n = 0), 0 === n ? t : (i = o || e, n += !r - !o, "")
      })) ? Function("return " + o)() : pt.error("Invalid JSON: " + e)
    }, pt.parseXML = function(e) {
      var i, n;
      if (!e || "string" != typeof e) return null;
      try {
        t.DOMParser ? (n = new t.DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new t.ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
      } catch (t) {
        i = void 0
      }
      return i && i.documentElement && !i.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e), i
    };
    var Ue = /#.*$/,
      Ge = /([?&])_=[^&]*/,
      Xe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Ve = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ye = /^(?:GET|HEAD)$/,
      qe = /^\/\//,
      Je = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Qe = {},
      Ke = {},
      Ze = "*/".concat("*"),
      ti = Re.href,
      ei = Je.exec(ti.toLowerCase()) || [];
    pt.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ti,
        type: "GET",
        isLocal: Ve.test(ei[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ze,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": pt.parseJSON,
          "text xml": pt.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(t, e) {
        return e ? V(V(t, pt.ajaxSettings), e) : V(pt.ajaxSettings, t)
      },
      ajaxPrefilter: G(Qe),
      ajaxTransport: G(Ke),
      ajax: function(e, i) {
        function n(e, i, n, o) {
          var r, u, y, b, w, S = i;
          2 !== x && (x = 2, l && t.clearTimeout(l), h = void 0, a = o || "", C.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (b = Y(d, C, n)), b = q(d, b, C, r), r ? (d.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (pt.lastModified[s] = w), w = C.getResponseHeader("etag"), w && (pt.etag[s] = w)), 204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, u = b.data, y = b.error, r = !y)) : (y = S, !e && S || (S = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (i || S) + "", r ? g.resolveWith(p, [u, S, C]) : g.rejectWith(p, [C, S, y]), C.statusCode(v), v = void 0, c && f.trigger(r ? "ajaxSuccess" : "ajaxError", [C, d, r ? u : y]), m.fireWith(p, [C, S]), c && (f.trigger("ajaxComplete", [C, d]), --pt.active || pt.event.trigger("ajaxStop")))
        }
        "object" == typeof e && (i = e, e = void 0), i = i || {};
        var o, r, s, a, l, c, h, u, d = pt.ajaxSetup({}, i),
          p = d.context || d,
          f = d.context && (p.nodeType || p.jquery) ? pt(p) : pt.event,
          g = pt.Deferred(),
          m = pt.Callbacks("once memory"),
          v = d.statusCode || {},
          y = {},
          b = {},
          x = 0,
          w = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function(t) {
              var e;
              if (2 === x) {
                if (!u)
                  for (u = {}; e = Xe.exec(a);) u[e[1].toLowerCase()] = e[2];
                e = u[t.toLowerCase()]
              }
              return null == e ? null : e
            },
            getAllResponseHeaders: function() {
              return 2 === x ? a : null
            },
            setRequestHeader: function(t, e) {
              var i = t.toLowerCase();
              return x || (t = b[i] = b[i] || t, y[t] = e), this
            },
            overrideMimeType: function(t) {
              return x || (d.mimeType = t), this
            },
            statusCode: function(t) {
              var e;
              if (t)
                if (2 > x)
                  for (e in t) v[e] = [v[e], t[e]];
                else C.always(t[C.status]);
              return this
            },
            abort: function(t) {
              var e = t || w;
              return h && h.abort(e), n(0, e), this
            }
          };
        if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, d.url = ((e || d.url || ti) + "").replace(Ue, "").replace(qe, ei[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = pt.trim(d.dataType || "*").toLowerCase().match(Et) || [""], null == d.crossDomain && (o = Je.exec(d.url.toLowerCase()), d.crossDomain = !(!o || o[1] === ei[1] && o[2] === ei[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (ei[3] || ("http:" === ei[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = pt.param(d.data, d.traditional)), X(Qe, d, i, C), 2 === x) return C;
        c = pt.event && d.global, c && 0 === pt.active++ && pt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ye.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (ze.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ge.test(s) ? s.replace(Ge, "$1_=" + We++) : s + (ze.test(s) ? "&" : "?") + "_=" + We++)), d.ifModified && (pt.lastModified[s] && C.setRequestHeader("If-Modified-Since", pt.lastModified[s]), pt.etag[s] && C.setRequestHeader("If-None-Match", pt.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ze + "; q=0.01" : "") : d.accepts["*"]);
        for (r in d.headers) C.setRequestHeader(r, d.headers[r]);
        if (d.beforeSend && (d.beforeSend.call(p, C, d) === !1 || 2 === x)) return C.abort();
        w = "abort";
        for (r in {
          success: 1,
          error: 1,
          complete: 1
        }) C[r](d[r]);
        if (h = X(Ke, d, i, C)) {
          if (C.readyState = 1, c && f.trigger("ajaxSend", [C, d]), 2 === x) return C;
          d.async && d.timeout > 0 && (l = t.setTimeout(function() {
            C.abort("timeout")
          }, d.timeout));
          try {
            x = 1, h.send(y, n)
          } catch (t) {
            if (!(2 > x)) throw t;
            n(-1, t)
          }
        } else n(-1, "No Transport");
        return C
      },
      getJSON: function(t, e, i) {
        return pt.get(t, e, i, "json")
      },
      getScript: function(t, e) {
        return pt.get(t, void 0, e, "script")
      }
    }), pt.each(["get", "post"], function(t, e) {
      pt[e] = function(t, i, n, o) {
        return pt.isFunction(i) && (o = o || n, n = i, i = void 0), pt.ajax(pt.extend({
          url: t,
          type: e,
          dataType: o,
          data: i,
          success: n
        }, pt.isPlainObject(t) && t))
      }
    }), pt._evalUrl = function(t) {
      return pt.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      })
    }, pt.fn.extend({
      wrapAll: function(t) {
        if (pt.isFunction(t)) return this.each(function(e) {
          pt(this).wrapAll(t.call(this, e))
        });
        if (this[0]) {
          var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
            return t
          }).append(this)
        }
        return this
      },
      wrapInner: function(t) {
        return pt.isFunction(t) ? this.each(function(e) {
          pt(this).wrapInner(t.call(this, e))
        }) : this.each(function() {
          var e = pt(this),
            i = e.contents();
          i.length ? i.wrapAll(t) : e.append(t)
        })
      },
      wrap: function(t) {
        var e = pt.isFunction(t);
        return this.each(function(i) {
          pt(this).wrapAll(e ? t.call(this, i) : t)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes)
        }).end()
      }
    }), pt.expr.filters.hidden = function(t) {
      return ut.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Q(t)
    }, pt.expr.filters.visible = function(t) {
      return !pt.expr.filters.hidden(t)
    };
    var ii = /%20/g,
      ni = /\[\]$/,
      oi = /\r?\n/g,
      ri = /^(?:submit|button|image|reset|file)$/i,
      si = /^(?:input|select|textarea|keygen)/i;
    pt.param = function(t, e) {
      var i, n = [],
        o = function(t, e) {
          e = pt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
      if (void 0 === e && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t, function() {
        o(this.name, this.value)
      });
      else
        for (i in t) K(i, t[i], e, o);
      return n.join("&").replace(ii, "+")
    }, pt.fn.extend({
      serialize: function() {
        return pt.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var t = pt.prop(this, "elements");
          return t ? pt.makeArray(t) : this
        }).filter(function() {
          var t = this.type;
          return this.name && !pt(this).is(":disabled") && si.test(this.nodeName) && !ri.test(t) && (this.checked || !Rt.test(t))
        }).map(function(t, e) {
          var i = pt(this).val();
          return null == i ? null : pt.isArray(i) ? pt.map(i, function(t) {
            return {
              name: e.name,
              value: t.replace(oi, "\r\n")
            }
          }) : {
            name: e.name,
            value: i.replace(oi, "\r\n")
          }
        }).get()
      }
    }), pt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
      return this.isLocal ? tt() : nt.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    } : Z;
    var ai = 0,
      li = {},
      ci = pt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
      for (var t in li) li[t](void 0, !0)
    }), ut.cors = !!ci && "withCredentials" in ci, ci = ut.ajax = !!ci, ci && pt.ajaxTransport(function(e) {
      if (!e.crossDomain || ut.cors) {
        var i;
        return {
          send: function(n, o) {
            var r, s = e.xhr(),
              a = ++ai;
            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
              for (r in e.xhrFields) s[r] = e.xhrFields[r];
            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
            for (r in n) void 0 !== n[r] && s.setRequestHeader(r, n[r] + "");
            s.send(e.hasContent && e.data || null), i = function(t, n) {
              var r, l, c;
              if (i && (n || 4 === s.readyState))
                if (delete li[a], i = void 0, s.onreadystatechange = pt.noop, n) 4 !== s.readyState && s.abort();
                else {
                  c = {}, r = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                  try {
                    l = s.statusText
                  } catch (t) {
                    l = ""
                  }
                  r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404
                }
              c && o(r, l, c, s.getAllResponseHeaders())
            }, e.async ? 4 === s.readyState ? t.setTimeout(i) : s.onreadystatechange = li[a] = i : i()
          },
          abort: function() {
            i && i(void 0, !0)
          }
        }
      }
    }), pt.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(t) {
          return pt.globalEval(t), t
        }
      }
    }), pt.ajaxPrefilter("script", function(t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), pt.ajaxTransport("script", function(t) {
      if (t.crossDomain) {
        var e, i = nt.head || pt("head")[0] || nt.documentElement;
        return {
          send: function(n, o) {
            e = nt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
              (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || o(200, "success"))
            }, i.insertBefore(e, i.firstChild)
          },
          abort: function() {
            e && e.onload(void 0, !0)
          }
        }
      }
    });
    var hi = [],
      ui = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var t = hi.pop() || pt.expando + "_" + We++;
        return this[t] = !0, t
      }
    }), pt.ajaxPrefilter("json jsonp", function(e, i, n) {
      var o, r, s, a = e.jsonp !== !1 && (ui.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ui.test(e.data) && "data");
      return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ui, "$1" + o) : e.jsonp !== !1 && (e.url += (ze.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
        return s || pt.error(o + " was not called"), s[0]
      }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
        s = arguments
      }, n.always(function() {
        void 0 === r ? pt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, hi.push(o)), s && pt.isFunction(r) && r(s[0]), s = r = void 0
      }), "script") : void 0
    }), pt.parseHTML = function(t, e, i) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && (i = e, e = !1), e = e || nt;
      var n = Ct.exec(t),
        o = !i && [];
      return n ? [e.createElement(n[1])] : (n = v([t], e, o), o && o.length && pt(o).remove(), pt.merge([], n.childNodes))
    };
    var di = pt.fn.load;
    pt.fn.load = function(t, e, i) {
      if ("string" != typeof t && di) return di.apply(this, arguments);
      var n, o, r, s = this,
        a = t.indexOf(" ");
      return a > -1 && (n = pt.trim(t.slice(a, t.length)), t = t.slice(0, a)), pt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && pt.ajax({
        url: t,
        type: o || "GET",
        dataType: "html",
        data: e
      }).done(function(t) {
        r = arguments, s.html(n ? pt("<div>").append(pt.parseHTML(t)).find(n) : t)
      }).always(i && function(t, e) {
        s.each(function() {
          i.apply(this, r || [t.responseText, e, t])
        })
      }), this
    }, pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
      pt.fn[e] = function(t) {
        return this.on(e, t)
      }
    }), pt.expr.filters.animated = function(t) {
      return pt.grep(pt.timers, function(e) {
        return t === e.elem
      }).length
    }, pt.offset = {
      setOffset: function(t, e, i) {
        var n, o, r, s, a, l, c, h = pt.css(t, "position"),
          u = pt(t),
          d = {};
        "static" === h && (t.style.position = "relative"), a = u.offset(), r = pt.css(t, "top"), l = pt.css(t, "left"), c = ("absolute" === h || "fixed" === h) && pt.inArray("auto", [r, l]) > -1, c ? (n = u.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), pt.isFunction(e) && (e = e.call(t, i, pt.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
      }
    }, pt.fn.extend({
      offset: function(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function(e) {
          pt.offset.setOffset(this, t, e)
        });
        var e, i, n = {
            top: 0,
            left: 0
          },
          o = this[0],
          r = o && o.ownerDocument;
        return r ? (e = r.documentElement, pt.contains(e, o) ? ("undefined" != typeof o.getBoundingClientRect && (n = o.getBoundingClientRect()), i = et(r), {
          top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
          left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }) : n) : void 0
      },
      position: function() {
        if (this[0]) {
          var t, e, i = {
              top: 0,
              left: 0
            },
            n = this[0];
          return "fixed" === pt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), pt.nodeName(t[0], "html") || (i = t.offset()), i.top += pt.css(t[0], "borderTopWidth", !0), i.left += pt.css(t[0], "borderLeftWidth", !0)), {
            top: e.top - i.top - pt.css(n, "marginTop", !0),
            left: e.left - i.left - pt.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position");) t = t.offsetParent;
          return t || pe
        })
      }
    }), pt.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(t, e) {
      var i = /Y/.test(e);
      pt.fn[t] = function(n) {
        return Bt(this, function(t, n, o) {
          var r = et(t);
          return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[n] : t[n] : void(r ? r.scrollTo(i ? pt(r).scrollLeft() : o, i ? o : pt(r).scrollTop()) : t[n] = o)
        }, t, n, arguments.length, null)
      }
    }), pt.each(["top", "left"], function(t, e) {
      pt.cssHooks[e] = P(ut.pixelPosition, function(t, i) {
        return i ? (i = ge(t, e), ue.test(i) ? pt(t).position()[e] + "px" : i) : void 0
      })
    }), pt.each({
      Height: "height",
      Width: "width"
    }, function(t, e) {
      pt.each({
        padding: "inner" + t,
        content: e,
        "": "outer" + t
      }, function(i, n) {
        pt.fn[n] = function(n, o) {
          var r = arguments.length && (i || "boolean" != typeof n),
            s = i || (n === !0 || o === !0 ? "margin" : "border");
          return Bt(this, function(e, i, n) {
            var o;
            return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? pt.css(e, i, s) : pt.style(e, i, n, s)
          }, e, r ? n : void 0, r, null)
        }
      })
    }), pt.fn.extend({
      bind: function(t, e, i) {
        return this.on(t, null, e, i)
      },
      unbind: function(t, e) {
        return this.off(t, null, e)
      },
      delegate: function(t, e, i, n) {
        return this.on(e, t, i, n)
      },
      undelegate: function(t, e, i) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
      }
    }), pt.fn.size = function() {
      return this.length
    }, pt.fn.andSelf = pt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return pt
    });
    var pi = t.jQuery,
      fi = t.$;
    return pt.noConflict = function(e) {
      return t.$ === pt && (t.$ = fi), e && t.jQuery === pt && (t.jQuery = pi), pt
    }, e || (t.jQuery = t.$ = pt), pt
  }), "undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function(t, e, i) {
    function n(i) {
      var n = e.console;
      r[i] || (r[i] = !0, t.migrateWarnings.push(i), n && n.warn && !t.migrateMute && (n.warn("JQMIGRATE: " + i), t.migrateTrace && n.trace && n.trace()))
    }

    function o(e, i, o, r) {
      if (Object.defineProperty) try {
        return void Object.defineProperty(e, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return n(r), o
          },
          set: function(t) {
            n(r), o = t
          }
        })
      } catch (t) {}
      t._definePropertyBroken = !0, e[i] = o
    }
    t.migrateVersion = "1.4.1";
    var r = {};
    t.migrateWarnings = [], e.console && e.console.log && e.console.log("JQMIGRATE: Migrate is installed" + (t.migrateMute ? "" : " with logging active") + ", version " + t.migrateVersion), t.migrateTrace === i && (t.migrateTrace = !0), t.migrateReset = function() {
      r = {}, t.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
    var s = t("<input/>", {
        size: 1
      }).attr("size") && t.attrFn,
      a = t.attr,
      l = t.attrHooks.value && t.attrHooks.value.get || function() {
        return null
      },
      c = t.attrHooks.value && t.attrHooks.value.set || function() {
        return i
      },
      h = /^(?:input|button)$/i,
      u = /^[238]$/,
      d = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      p = /^(?:checked|selected)$/i;
    o(t, "attrFn", s || {}, "jQuery.attrFn is deprecated"), t.attr = function(e, o, r, l) {
      var c = o.toLowerCase(),
        f = e && e.nodeType;
      return l && (a.length < 4 && n("jQuery.fn.attr( props, pass ) is deprecated"), e && !u.test(f) && (s ? o in s : t.isFunction(t.fn[o]))) ? t(e)[o](r) : ("type" === o && r !== i && h.test(e.nodeName) && e.parentNode && n("Can't change the 'type' of an input or button in IE 6/7/8"), !t.attrHooks[c] && d.test(c) && (t.attrHooks[c] = {
        get: function(e, n) {
          var o, r = t.prop(e, n);
          return r === !0 || "boolean" != typeof r && (o = e.getAttributeNode(n)) && o.nodeValue !== !1 ? n.toLowerCase() : i
        },
        set: function(e, i, n) {
          var o;
          return i === !1 ? t.removeAttr(e, n) : (o = t.propFix[n] || n, o in e && (e[o] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
      }, p.test(c) && n("jQuery.fn.attr('" + c + "') might use property instead of attribute")), a.call(t, e, o, r))
    }, t.attrHooks.value = {
      get: function(t, e) {
        var i = (t.nodeName || "").toLowerCase();
        return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value') no longer gets properties"), e in t ? t.value : null)
      },
      set: function(t, e) {
        var i = (t.nodeName || "").toLowerCase();
        return "button" === i ? c.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value', val) no longer sets properties"), void(t.value = e))
      }
    };
    var f, g, m = t.fn.init,
      v = t.find,
      y = t.parseJSON,
      b = /^\s*</,
      x = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      w = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      C = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    t.fn.init = function(e, o, r) {
      var s, a;
      return e && "string" == typeof e && !t.isPlainObject(o) && (s = C.exec(t.trim(e))) && s[0] && (b.test(e) || n("$(html) HTML strings must start with '<' character"), s[3] && n("$(html) HTML text after last tag is ignored"), "#" === s[0].charAt(0) && (n("HTML string cannot start with a '#' character"), t.error("JQMIGRATE: Invalid selector string (XSS)")), o && o.context && o.context.nodeType && (o = o.context), t.parseHTML) ? m.call(this, t.parseHTML(s[2], o && o.ownerDocument || o || document, !0), o, r) : (a = m.apply(this, arguments), e && e.selector !== i ? (a.selector = e.selector, a.context = e.context) : (a.selector = "string" == typeof e ? e : "", e && (a.context = e.nodeType ? e : o || document)), a)
    }, t.fn.init.prototype = t.fn, t.find = function(t) {
      var e = Array.prototype.slice.call(arguments);
      if ("string" == typeof t && x.test(t)) try {
        document.querySelector(t)
      } catch (i) {
        t = t.replace(w, function(t, e, i, n) {
          return "[" + e + i + '"' + n + '"]'
        });
        try {
          document.querySelector(t), n("Attribute selector with '#' must be quoted: " + e[0]), e[0] = t
        } catch (t) {
          n("Attribute selector with '#' was not fixed: " + e[0])
        }
      }
      return v.apply(this, e)
    };
    var S;
    for (S in v) Object.prototype.hasOwnProperty.call(v, S) && (t.find[S] = v[S]);
    t.parseJSON = function(t) {
      return t ? y.apply(this, arguments) : (n("jQuery.parseJSON requires a valid JSON string"), null)
    }, t.uaMatch = function(t) {
      t = t.toLowerCase();
      var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
      return {
        browser: e[1] || "",
        version: e[2] || "0"
      }
    }, t.browser || (f = t.uaMatch(navigator.userAgent), g = {}, f.browser && (g[f.browser] = !0, g.version = f.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), t.browser = g), o(t, "browser", t.browser, "jQuery.browser is deprecated"), t.boxModel = t.support.boxModel = "CSS1Compat" === document.compatMode, o(t, "boxModel", t.boxModel, "jQuery.boxModel is deprecated"), o(t.support, "boxModel", t.support.boxModel, "jQuery.support.boxModel is deprecated"), t.sub = function() {
      function e(t, i) {
        return new e.fn.init(t, i)
      }
      t.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, o) {
        var r = t.fn.init.call(this, n, o, i);
        return r instanceof e ? r : e(r)
      }, e.fn.init.prototype = e.fn;
      var i = e(document);
      return n("jQuery.sub() is deprecated"), e
    }, t.fn.size = function() {
      return n("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var _ = !1;
    t.swap && t.each(["height", "width", "reliableMarginRight"], function(e, i) {
      var n = t.cssHooks[i] && t.cssHooks[i].get;
      n && (t.cssHooks[i].get = function() {
        var t;
        return _ = !0, t = n.apply(this, arguments), _ = !1, t
      })
    }), t.swap = function(t, e, i, o) {
      var r, s, a = {};
      _ || n("jQuery.swap() is undocumented and deprecated");
      for (s in e) a[s] = t.style[s], t.style[s] = e[s];
      r = i.apply(t, o || []);
      for (s in e) t.style[s] = a[s];
      return r
    }, t.ajaxSetup({
      converters: {
        "text json": t.parseJSON
      }
    });
    var k = t.fn.data;
    t.fn.data = function(e) {
      var o, r, s = this[0];
      return !s || "events" !== e || 1 !== arguments.length || (o = t.data(s, e), r = t._data(s, e), o !== i && o !== r || r === i) ? k.apply(this, arguments) : (n("Use of jQuery.fn.data('events') is deprecated"), r)
    };
    var T = /\/(java|ecma)script/i;
    t.clean || (t.clean = function(e, i, o, r) {
      i = i || document, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, n("jQuery.clean() is deprecated");
      var s, a, l, c, h = [];
      if (t.merge(h, t.buildFragment(e, i).childNodes), o)
        for (l = function(t) {
          return !t.type || T.test(t.type) ? r ? r.push(t.parentNode ? t.parentNode.removeChild(t) : t) : o.appendChild(t) : void 0
        }, s = 0; null != (a = h[s]); s++) t.nodeName(a, "script") && l(a) || (o.appendChild(a), "undefined" != typeof a.getElementsByTagName && (c = t.grep(t.merge([], a.getElementsByTagName("script")), l), h.splice.apply(h, [s + 1, 0].concat(c)), s += c.length));
      return h
    });
    var O = t.event.add,
      j = t.event.remove,
      E = t.event.trigger,
      A = t.fn.toggle,
      P = t.fn.live,
      I = t.fn.die,
      $ = t.fn.load,
      D = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      L = new RegExp("\\b(?:" + D + ")\\b"),
      M = /(?:^|\s)hover(\.\S+|)\b/,
      F = function(e) {
        return "string" != typeof e || t.event.special.hover ? e : (M.test(e) && n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), e && e.replace(M, "mouseenter$1 mouseleave$1"))
      };
    t.event.props && "attrChange" !== t.event.props[0] && t.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), t.event.dispatch && o(t.event, "handle", t.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), t.event.add = function(t, e, i, o, r) {
      t !== document && L.test(e) && n("AJAX events should be attached to document: " + e), O.call(this, t, F(e || ""), i, o, r)
    }, t.event.remove = function(t, e, i, n, o) {
      j.call(this, t, F(e) || "", i, n, o)
    }, t.each(["load", "unload", "error"], function(e, i) {
      t.fn[i] = function() {
        var t = Array.prototype.slice.call(arguments, 0);
        return "load" === i && "string" == typeof t[0] ? $.apply(this, t) : (n("jQuery.fn." + i + "() is deprecated"), t.splice(0, 0, i), arguments.length ? this.bind.apply(this, t) : (this.triggerHandler.apply(this, t), this))
      }
    }), t.fn.toggle = function(e, i) {
      if (!t.isFunction(e) || !t.isFunction(i)) return A.apply(this, arguments);
      n("jQuery.fn.toggle(handler, handler...) is deprecated");
      var o = arguments,
        r = e.guid || t.guid++,
        s = 0,
        a = function(i) {
          var n = (t._data(this, "lastToggle" + e.guid) || 0) % s;
          return t._data(this, "lastToggle" + e.guid, n + 1), i.preventDefault(), o[n].apply(this, arguments) || !1
        };
      for (a.guid = r; s < o.length;) o[s++].guid = r;
      return this.click(a)
    }, t.fn.live = function(e, i, o) {
      return n("jQuery.fn.live() is deprecated"), P ? P.apply(this, arguments) : (t(this.context).on(e, this.selector, i, o), this)
    }, t.fn.die = function(e, i) {
      return n("jQuery.fn.die() is deprecated"), I ? I.apply(this, arguments) : (t(this.context).off(e, this.selector || "**", i), this)
    }, t.event.trigger = function(t, e, i, o) {
      return i || L.test(t) || n("Global events are undocumented and deprecated"), E.call(this, t, e, i || document, o)
    }, t.each(D.split("|"), function(e, i) {
      t.event.special[i] = {
        setup: function() {
          var e = this;
          return e !== document && (t.event.add(document, i + "." + t.guid, function() {
            t.event.trigger(i, Array.prototype.slice.call(arguments, 1), e, !0)
          }), t._data(this, i, t.guid++)), !1
        },
        teardown: function() {
          return this !== document && t.event.remove(document, i + "." + t._data(this, i)), !1
        }
      }
    }), t.event.special.ready = {
      setup: function() {
        this === document && n("'ready' event is deprecated")
      }
    };
    var N = t.fn.andSelf || t.fn.addBack,
      B = t.fn.find;
    if (t.fn.andSelf = function() {
        return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), N.apply(this, arguments)
      }, t.fn.find = function(t) {
        var e = B.apply(this, arguments);
        return e.context = this.context, e.selector = this.selector ? this.selector + " " + t : t, e
      }, t.Callbacks) {
      var R = t.Deferred,
        W = [
          ["resolve", "done", t.Callbacks("once memory"), t.Callbacks("once memory"), "resolved"],
          ["reject", "fail", t.Callbacks("once memory"), t.Callbacks("once memory"), "rejected"],
          ["notify", "progress", t.Callbacks("memory"), t.Callbacks("memory")]
        ];
      t.Deferred = function(e) {
        var i = R(),
          o = i.promise();
        return i.pipe = o.pipe = function() {
          var e = arguments;
          return n("deferred.pipe() is deprecated"), t.Deferred(function(n) {
            t.each(W, function(r, s) {
              var a = t.isFunction(e[r]) && e[r];
              i[s[1]](function() {
                var e = a && a.apply(this, arguments);
                e && t.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === o ? n.promise() : this, a ? [e] : arguments)
              })
            }), e = null
          }).promise()
        }, i.isResolved = function() {
          return n("deferred.isResolved is deprecated"), "resolved" === i.state()
        }, i.isRejected = function() {
          return n("deferred.isRejected is deprecated"), "rejected" === i.state()
        }, e && e.call(i, i), i
      }
    }
  }(jQuery, window), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(t) {
  "use strict";

  function e() {
    var t = document.createElement("bootstrap"),
      e = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var i in e)
      if (void 0 !== t.style[i]) return {
        end: e[i]
      };
    return !1
  }
  t.fn.emulateTransitionEnd = function(e) {
    var i = !1,
      n = this;
    t(this).one("bsTransitionEnd", function() {
      i = !0
    });
    var o = function() {
      i || t(n).trigger(t.support.transition.end)
    };
    return setTimeout(o, e), this
  }, t(function() {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var i = t(this),
        o = i.data("bs.alert");
      o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
    })
  }
  var i = '[data-dismiss="alert"]',
    n = function(e) {
      t(e).on("click", i, this.close)
    };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
    function i() {
      s.detach().trigger("closed.bs.alert").remove()
    }
    var o = t(this),
      r = o.attr("data-target");
    r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
    var s = t("#" === r ? [] : r);
    e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
  };
  var o = t.fn.alert;
  t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
    return t.fn.alert = o, this
  }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        o = n.data("bs.button"),
        r = "object" == typeof e && e;
      o || n.data("bs.button", o = new i(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
    })
  }
  var i = function(e, n) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
  };
  i.VERSION = "3.3.7", i.DEFAULTS = {
    loadingText: "loading..."
  }, i.prototype.setState = function(e) {
    var i = "disabled",
      n = this.$element,
      o = n.is("input") ? "val" : "html",
      r = n.data();
    e += "Text", null == r.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() {
      n[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
    }, this), 0)
  }, i.prototype.toggle = function() {
    var t = !0,
      e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var n = t.fn.button;
  t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
    return t.fn.button = n, this
  }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
    var n = t(i.target).closest(".btn");
    e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        o = n.data("bs.carousel"),
        r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
        s = "string" == typeof e ? e : r.slide;
      o || n.data("bs.carousel", o = new i(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
    })
  }
  var i = function(e, i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, i.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      t.preventDefault()
    }
  }, i.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
  }, i.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
  }, i.prototype.getItemForDirection = function(t, e) {
    var i = this.getItemIndex(e),
      n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
    if (n && !this.options.wrap) return e;
    var o = "prev" == t ? -1 : 1,
      r = (i + o) % this.$items.length;
    return this.$items.eq(r)
  }, i.prototype.to = function(t) {
    var e = this,
      i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
      e.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
  }, i.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, i.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
  }, i.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
  }, i.prototype.slide = function(e, n) {
    var o = this.$element.find(".item.active"),
      r = n || this.getItemForDirection(e, o),
      s = this.interval,
      a = "next" == e ? "left" : "right",
      l = this;
    if (r.hasClass("active")) return this.sliding = !1;
    var c = r[0],
      h = t.Event("slide.bs.carousel", {
        relatedTarget: c,
        direction: a
      });
    if (this.$element.trigger(h), !h.isDefaultPrevented()) {
      if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var u = t(this.$indicators.children()[this.getItemIndex(r)]);
        u && u.addClass("active")
      }
      var d = t.Event("slid.bs.carousel", {
        relatedTarget: c,
        direction: a
      });
      return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
        r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
          l.$element.trigger(d)
        }, 0)
      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
    }
  };
  var n = t.fn.carousel;
  t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
    return t.fn.carousel = n, this
  };
  var o = function(i) {
    var n, o = t(this),
      r = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
    if (r.hasClass("carousel")) {
      var s = t.extend({}, r.data(), o.data()),
        a = o.attr("data-slide-to");
      a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), i.preventDefault()
    }
  };
  t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
      var i = t(this);
      e.call(i, i.data())
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return t(n)
  }

  function i(e) {
    return this.each(function() {
      var i = t(this),
        o = i.data("bs.collapse"),
        r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
      !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || i.data("bs.collapse", o = new n(this, r)), "string" == typeof e && o[e]()
    })
  }
  var n = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
    toggle: !0
  }, n.prototype.dimension = function() {
    var t = this.$element.hasClass("width");
    return t ? "width" : "height"
  }, n.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
        var r = t.Event("show.bs.collapse");
        if (this.$element.trigger(r), !r.isDefaultPrevented()) {
          o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
          var s = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var a = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!t.support.transition) return a.call(this);
          var l = t.camelCase(["scroll", s].join("-"));
          this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
        }
      }
    }
  }, n.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");
      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var i = this.dimension();
        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var o = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
      }
    }
  }, n.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, n.prototype.getParent = function() {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
      var o = t(n);
      this.addAriaAndCollapsedClass(e(o), o)
    }, this)).end()
  }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
  };
  var o = t.fn.collapse;
  t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
    return t.fn.collapse = o, this
  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
    var o = t(this);
    o.attr("data-target") || n.preventDefault();
    var r = e(o),
      s = r.data("bs.collapse"),
      a = s ? "toggle" : o.data();
    i.call(r, a)
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    var i = e.attr("data-target");
    i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var n = i && t(i);
    return n && n.length ? n : e.parent()
  }

  function i(i) {
    i && 3 === i.which || (t(o).remove(), t(r).each(function() {
      var n = t(this),
        o = e(n),
        r = {
          relatedTarget: this
        };
      o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
    }))
  }

  function n(e) {
    return this.each(function() {
      var i = t(this),
        n = i.data("bs.dropdown");
      n || i.data("bs.dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
    })
  }
  var o = ".dropdown-backdrop",
    r = '[data-toggle="dropdown"]',
    s = function(e) {
      t(e).on("click.bs.dropdown", this.toggle)
    };
  s.VERSION = "3.3.7", s.prototype.toggle = function(n) {
    var o = t(this);
    if (!o.is(".disabled, :disabled")) {
      var r = e(o),
        s = r.hasClass("open");
      if (i(), !s) {
        "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
        var a = {
          relatedTarget: this
        };
        if (r.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
        o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
      }
      return !1
    }
  }, s.prototype.keydown = function(i) {
    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
      var n = t(this);
      if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
        var o = e(n),
          s = o.hasClass("open");
        if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && o.find(r).trigger("focus"), n.trigger("click");
        var a = " li:not(.disabled):visible a",
          l = o.find(".dropdown-menu" + a);
        if (l.length) {
          var c = l.index(i.target);
          38 == i.which && c > 0 && c--, 40 == i.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
        }
      }
    }
  };
  var a = t.fn.dropdown;
  t.fn.dropdown = n, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
    return t.fn.dropdown = a, this
  }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    t.stopPropagation()
  }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(t) {
  "use strict";

  function e(e, n) {
    return this.each(function() {
      var o = t(this),
        r = o.data("bs.modal"),
        s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
      r || o.data("bs.modal", r = new i(this, s)), "string" == typeof e ? r[e](n) : s.show && r.show(n)
    })
  }
  var i = function(e, i) {
    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, i.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
  }, i.prototype.show = function(e) {
    var n = this,
      o = t.Event("show.bs.modal", {
        relatedTarget: e
      });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      n.$element.one("mouseup.dismiss.bs.modal", function(e) {
        t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var o = t.support.transition && n.$element.hasClass("fade");
      n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
      var r = t.Event("shown.bs.modal", {
        relatedTarget: e
      });
      o ? n.$dialog.one("bsTransitionEnd", function() {
        n.$element.trigger("focus").trigger(r)
      }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
    }))
  }, i.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
  }, i.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
      document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
  }, i.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
      27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, i.prototype.resize = function() {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
  }, i.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
  }, i.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, i.prototype.backdrop = function(e) {
    var n = this,
      o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var r = t.support.transition && o;
      if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
      r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var s = function() {
        n.removeBackdrop(), e && e()
      };
      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
    } else e && e()
  }, i.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, i.prototype.adjustDialog = function() {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
  }, i.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, i.prototype.checkScrollbar = function() {
    var t = window.innerWidth;
    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
  }, i.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
  }, i.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, i.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
  };
  var n = t.fn.modal;
  t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
    return t.fn.modal = n, this
  }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
    var n = t(this),
      o = n.attr("href"),
      r = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
      s = r.data("bs.modal") ? "toggle" : t.extend({
        remote: !/#/.test(o) && o
      }, r.data(), n.data());
    n.is("a") && i.preventDefault(), r.one("show.bs.modal", function(t) {
      t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
        n.is(":visible") && n.trigger("focus")
      })
    }), e.call(r, s, this)
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        o = n.data("bs.tooltip"),
        r = "object" == typeof e && e;
      !o && /destroy|hide/.test(e) || (o || n.data("bs.tooltip", o = new i(this, r)), "string" == typeof e && o[e]())
    })
  }
  var i = function(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, i.prototype.init = function(e, i, n) {
    if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
      var s = o[r];
      if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
      else if ("manual" != s) {
        var a = "hover" == s ? "mouseenter" : "focusin",
          l = "hover" == s ? "mouseleave" : "focusout";
        this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, i.prototype.getDefaults = function() {
    return i.DEFAULTS
  }, i.prototype.getOptions = function(e) {
    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
      show: e.delay,
      hide: e.delay
    }), e
  }, i.prototype.getDelegateOptions = function() {
    var e = {},
      i = this.getDefaults();
    return this._options && t.each(this._options, function(t, n) {
      i[t] != n && (e[t] = n)
    }), e
  }, i.prototype.enter = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
      "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show())
  }, i.prototype.isInStateTrue = function() {
    for (var t in this.inState)
      if (this.inState[t]) return !0;
    return !1
  }, i.prototype.leave = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
      "out" == i.hoverState && i.hide()
    }, i.options.delay.hide)) : i.hide()
  }, i.prototype.show = function() {
    var e = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !n) return;
      var o = this,
        r = this.tip(),
        s = this.getUID(this.type);
      this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
      var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
        l = /\s?auto?\s?/i,
        c = l.test(a);
      c && (a = a.replace(l, "") || "top"), r.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var h = this.getPosition(),
        u = r[0].offsetWidth,
        d = r[0].offsetHeight;
      if (c) {
        var p = a,
          f = this.getPosition(this.$viewport);
        a = "bottom" == a && h.bottom + d > f.bottom ? "top" : "top" == a && h.top - d < f.top ? "bottom" : "right" == a && h.right + u > f.width ? "left" : "left" == a && h.left - u < f.left ? "right" : a, r.removeClass(p).addClass(a)
      }
      var g = this.getCalculatedOffset(a, h, u, d);
      this.applyPlacement(g, a);
      var m = function() {
        var t = o.hoverState;
        o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
      };
      t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
    }
  }, i.prototype.applyPlacement = function(e, i) {
    var n = this.tip(),
      o = n[0].offsetWidth,
      r = n[0].offsetHeight,
      s = parseInt(n.css("margin-top"), 10),
      a = parseInt(n.css("margin-left"), 10);
    isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(n[0], t.extend({
      using: function(t) {
        n.css({
          top: Math.round(t.top),
          left: Math.round(t.left)
        })
      }
    }, e), 0), n.addClass("in");
    var l = n[0].offsetWidth,
      c = n[0].offsetHeight;
    "top" == i && c != r && (e.top = e.top + r - c);
    var h = this.getViewportAdjustedDelta(i, e, l, c);
    h.left ? e.left += h.left : e.top += h.top;
    var u = /top|bottom/.test(i),
      d = u ? 2 * h.left - o + l : 2 * h.top - r + c,
      p = u ? "offsetWidth" : "offsetHeight";
    n.offset(e), this.replaceArrow(d, n[0][p], u)
  }, i.prototype.replaceArrow = function(t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
  }, i.prototype.setContent = function() {
    var t = this.tip(),
      e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
  }, i.prototype.hide = function(e) {
    function n() {
      "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
    }
    var o = this,
      r = t(this.$tip),
      s = t.Event("hide.bs." + this.type);
    if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this
  }, i.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }, i.prototype.hasContent = function() {
    return this.getTitle()
  }, i.prototype.getPosition = function(e) {
    e = e || this.$element;
    var i = e[0],
      n = "BODY" == i.tagName,
      o = i.getBoundingClientRect();
    null == o.width && (o = t.extend({}, o, {
      width: o.right - o.left,
      height: o.bottom - o.top
    }));
    var r = window.SVGElement && i instanceof window.SVGElement,
      s = n ? {
        top: 0,
        left: 0
      } : r ? null : e.offset(),
      a = {
        scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
      },
      l = n ? {
        width: t(window).width(),
        height: t(window).height()
      } : null;
    return t.extend({}, o, a, l, s)
  }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
    return "bottom" == t ? {
      top: e.top + e.height,
      left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
      top: e.top - n,
      left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
      top: e.top + e.height / 2 - n / 2,
      left: e.left - i
    } : {
      top: e.top + e.height / 2 - n / 2,
      left: e.left + e.width
    }
  }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
    var o = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return o;
    var r = this.options.viewport && this.options.viewport.padding || 0,
      s = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
      var a = e.top - r - s.scroll,
        l = e.top + r - s.scroll + n;
      a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
    } else {
      var c = e.left - r,
        h = e.left + r + i;
      c < s.left ? o.left = s.left - c : h > s.right && (o.left = s.left + s.width - h)
    }
    return o
  }, i.prototype.getTitle = function() {
    var t, e = this.$element,
      i = this.options;
    return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
  }, i.prototype.getUID = function(t) {
    do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
    return t
  }, i.prototype.tip = function() {
    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, i.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, i.prototype.enable = function() {
    this.enabled = !0
  }, i.prototype.disable = function() {
    this.enabled = !1
  }, i.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, i.prototype.toggle = function(e) {
    var i = this;
    e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
  }, i.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
      t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
    })
  };
  var n = t.fn.tooltip;
  t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
    return t.fn.tooltip = n, this
  }
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        o = n.data("bs.popover"),
        r = "object" == typeof e && e;
      !o && /destroy|hide/.test(e) || (o || n.data("bs.popover", o = new i(this, r)), "string" == typeof e && o[e]())
    })
  }
  var i = function(t, e) {
    this.init("popover", t, e)
  };
  if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
  i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
    return i.DEFAULTS
  }, i.prototype.setContent = function() {
    var t = this.tip(),
      e = this.getTitle(),
      i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
  }, i.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, i.prototype.getContent = function() {
    var t = this.$element,
      e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
  }, i.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var n = t.fn.popover;
  t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
    return t.fn.popover = n, this
  }
}(jQuery), + function(t) {
  "use strict";

  function e(i, n) {
    this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
  }

  function i(i) {
    return this.each(function() {
      var n = t(this),
        o = n.data("bs.scrollspy"),
        r = "object" == typeof i && i;
      o || n.data("bs.scrollspy", o = new e(this, r)), "string" == typeof i && o[i]()
    })
  }
  e.VERSION = "3.3.7", e.DEFAULTS = {
    offset: 10
  }, e.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, e.prototype.refresh = function() {
    var e = this,
      i = "offset",
      n = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var e = t(this),
        o = e.data("target") || e.attr("href"),
        r = /^#./.test(o) && t(o);
      return r && r.length && r.is(":visible") && [
        [r[i]().top + n, o]
      ] || null
    }).sort(function(t, e) {
      return t[0] - e[0]
    }).each(function() {
      e.offsets.push(this[0]), e.targets.push(this[1])
    })
  }, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
      i = this.getScrollHeight(),
      n = this.options.offset + i - this.$scrollElement.height(),
      o = this.offsets,
      r = this.targets,
      s = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = r[r.length - 1]) && this.activate(t);
    if (s && e < o[0]) return this.activeTarget = null, this.clear();
    for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
  }, e.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
      n = t(i).parents("li").addClass("active");
    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
  }, e.prototype.clear = function() {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var n = t.fn.scrollspy;
  t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
    return t.fn.scrollspy = n, this
  }, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
      var e = t(this);
      i.call(e, e.data())
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        o = n.data("bs.tab");
      o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
    })
  }
  var i = function(e) {
    this.element = t(e)
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
    var e = this.element,
      i = e.closest("ul:not(.dropdown-menu)"),
      n = e.data("target");
    if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var o = i.find(".active:last a"),
        r = t.Event("hide.bs.tab", {
          relatedTarget: e[0]
        }),
        s = t.Event("show.bs.tab", {
          relatedTarget: o[0]
        });
      if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
        var a = t(n);
        this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
          o.trigger({
            type: "hidden.bs.tab",
            relatedTarget: e[0]
          }), e.trigger({
            type: "shown.bs.tab",
            relatedTarget: o[0]
          })
        })
      }
    }
  }, i.prototype.activate = function(e, n, o) {
    function r() {
      s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
    }
    var s = n.find("> .active"),
      a = o && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
    s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), s.removeClass("in")
  };
  var n = t.fn.tab;
  t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
    return t.fn.tab = n, this
  };
  var o = function(i) {
    i.preventDefault(), e.call(t(this), "show")
  };
  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        o = n.data("bs.affix"),
        r = "object" == typeof e && e;
      o || n.data("bs.affix", o = new i(this, r)), "string" == typeof e && o[e]()
    })
  }
  var i = function(e, n) {
    this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
  }, i.prototype.getState = function(t, e, i, n) {
    var o = this.$target.scrollTop(),
      r = this.$element.offset(),
      s = this.$target.height();
    if (null != i && "top" == this.affixed) return o < i && "top";
    if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - n) && "bottom";
    var a = null == this.affixed,
      l = a ? o : r.top,
      c = a ? s : e;
    return null != i && o <= i ? "top" : null != n && l + c >= t - n && "bottom"
  }, i.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
      e = this.$element.offset();
    return this.pinnedOffset = e.top - t
  }, i.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
  }, i.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var e = this.$element.height(),
        n = this.options.offset,
        o = n.top,
        r = n.bottom,
        s = Math.max(t(document).height(), t(document.body).height());
      "object" != typeof n && (r = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
      var a = this.getState(s, e, o, r);
      if (this.affixed != a) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (a ? "-" + a : ""),
          c = t.Event(l + ".bs.affix");
        if (this.$element.trigger(c), c.isDefaultPrevented()) return;
        this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == a && this.$element.offset({
        top: s - e - r
      })
    }
  };
  var n = t.fn.affix;
  t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
    return t.fn.affix = n, this
  }, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
      var i = t(this),
        n = i.data();
      n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
    })
  })
}(jQuery),
  function() {
    var t = [].indexOf || function(t) {
        for (var e = 0, i = this.length; e < i; e++)
          if (e in this && this[e] === t) return e;
        return -1
      },
      e = [].slice;
    ! function(t, e) {
      return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(i) {
        return e(i, t)
      }) : e(t.jQuery, t)
    }(this, function(i, n) {
      var o, r, s, a, l, c, h, u, d, p, f, g, m, v, y, b;
      return o = i(n), u = t.call(n, "ontouchstart") >= 0, a = {
        horizontal: {},
        vertical: {}
      }, l = 1, h = {}, c = "waypoints-context-id", f = "resize.waypoints", g = "scroll.waypoints", m = 1, v = "waypoints-waypoint-ids", y = "waypoint", b = "waypoints", r = function() {
        function t(t) {
          var e = this;
          this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
            x: t.scrollLeft(),
            y: t.scrollTop()
          }, this.waypoints = {
            horizontal: {},
            vertical: {}
          }, t.data(c, this.id), h[this.id] = this, t.bind(g, function() {
            var t;
            if (!e.didScroll && !u) return e.didScroll = !0, t = function() {
              return e.doScroll(), e.didScroll = !1
            }, n.setTimeout(t, i[b].settings.scrollThrottle)
          }), t.bind(f, function() {
            var t;
            if (!e.didResize) return e.didResize = !0, t = function() {
              return i[b]("refresh"), e.didResize = !1
            }, n.setTimeout(t, i[b].settings.resizeThrottle)
          })
        }
        return t.prototype.doScroll = function() {
          var t, e = this;
          return t = {
            horizontal: {
              newScroll: this.$element.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left"
            },
            vertical: {
              newScroll: this.$element.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up"
            }
          }, !u || t.vertical.oldScroll && t.vertical.newScroll || i[b]("refresh"), i.each(t, function(t, n) {
            var o, r, s;
            return s = [], r = n.newScroll > n.oldScroll, o = r ? n.forward : n.backward, i.each(e.waypoints[t], function(t, e) {
              var i, o;
              return n.oldScroll < (i = e.offset) && i <= n.newScroll ? s.push(e) : n.newScroll < (o = e.offset) && o <= n.oldScroll ? s.push(e) : void 0
            }), s.sort(function(t, e) {
              return t.offset - e.offset
            }), r || s.reverse(), i.each(s, function(t, e) {
              if (e.options.continuous || t === s.length - 1) return e.trigger([o])
            })
          }), this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
          }
        }, t.prototype.refresh = function() {
          var t, e, n, o = this;
          return n = i.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
            horizontal: {
              contextOffset: n ? 0 : e.left,
              contextScroll: n ? 0 : this.oldScroll.x,
              contextDimension: this.$element.width(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left"
            },
            vertical: {
              contextOffset: n ? 0 : e.top,
              contextScroll: n ? 0 : this.oldScroll.y,
              contextDimension: n ? i[b]("viewportHeight") : this.$element.height(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top"
            }
          }, i.each(t, function(t, e) {
            return i.each(o.waypoints[t], function(t, n) {
              var o, r, s, a, l;
              if (o = n.options.offset, s = n.offset, r = i.isWindow(n.element) ? 0 : n.$element.offset()[e.offsetProp], i.isFunction(o) ? o = o.apply(n.element) : "string" == typeof o && (o = parseFloat(o), n.options.offset.indexOf("%") > -1 && (o = Math.ceil(e.contextDimension * o / 100))), n.offset = r - e.contextOffset + e.contextScroll - o, (!n.options.onlyOnScroll || null == s) && n.enabled) return null !== s && s < (a = e.oldScroll) && a <= n.offset ? n.trigger([e.backward]) : null !== s && s > (l = e.oldScroll) && l >= n.offset ? n.trigger([e.forward]) : null === s && e.oldScroll >= n.offset ? n.trigger([e.forward]) : void 0
            })
          })
        }, t.prototype.checkEmpty = function() {
          if (i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([f, g].join(" ")), delete h[this.id]
        }, t
      }(), s = function() {
        function t(t, e, n) {
          var o, r;
          n = i.extend({}, i.fn[y].defaults, n), "bottom-in-view" === n.offset && (n.offset = function() {
            var t;
            return t = i[b]("viewportHeight"), i.isWindow(e.element) || (t = e.$element.height()), t - i(this).outerHeight()
          }), this.$element = t, this.element = t[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = e, this.enabled = n.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = n, e.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, o = null != (r = t.data(v)) ? r : [], o.push(this.id), t.data(v, o)
        }
        return t.prototype.trigger = function(t) {
          if (this.enabled) return null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0
        }, t.prototype.disable = function() {
          return this.enabled = !1
        }, t.prototype.enable = function() {
          return this.context.refresh(), this.enabled = !0
        }, t.prototype.destroy = function() {
          return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
        }, t.getWaypointsByElement = function(t) {
          var e, n;
          return (n = i(t).data(v)) ? (e = i.extend({}, a.horizontal, a.vertical), i.map(n, function(t) {
            return e[t]
          })) : []
        }, t
      }(), p = {
        init: function(t, e) {
          var n;
          return null == e && (e = {}), null == (n = e.handler) && (e.handler = t), this.each(function() {
            var t, n, o, a;
            return t = i(this), o = null != (a = e.context) ? a : i.fn[y].defaults.context, i.isWindow(o) || (o = t.closest(o)), o = i(o), n = h[o.data(c)], n || (n = new r(o)), new s(t, n, e)
          }), i[b]("refresh"), this
        },
        disable: function() {
          return p._invoke(this, "disable")
        },
        enable: function() {
          return p._invoke(this, "enable")
        },
        destroy: function() {
          return p._invoke(this, "destroy")
        },
        prev: function(t, e) {
          return p._traverse.call(this, t, e, function(t, e, i) {
            if (e > 0) return t.push(i[e - 1])
          })
        },
        next: function(t, e) {
          return p._traverse.call(this, t, e, function(t, e, i) {
            if (e < i.length - 1) return t.push(i[e + 1])
          })
        },
        _traverse: function(t, e, o) {
          var r, s;
          return null == t && (t = "vertical"), null == e && (e = n), s = d.aggregate(e), r = [], this.each(function() {
            var e;
            return e = i.inArray(this, s[t]), o(r, e, s[t])
          }), this.pushStack(r)
        },
        _invoke: function(t, e) {
          return t.each(function() {
            var t;
            return t = s.getWaypointsByElement(this), i.each(t, function(t, i) {
              return i[e](), !0
            })
          }), this
        }
      }, i.fn[y] = function() {
        var t, n;
        return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], p[n] ? p[n].apply(this, t) : i.isFunction(n) ? p.init.apply(this, arguments) : i.isPlainObject(n) ? p.init.apply(this, [null, n]) : n ? i.error("The " + n + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.")
      }, i.fn[y].defaults = {
        context: n,
        continuous: !0,
        enabled: !0,
        horizontal: !1,
        offset: 0,
        triggerOnce: !1
      }, d = {
        refresh: function() {
          return i.each(h, function(t, e) {
            return e.refresh()
          })
        },
        viewportHeight: function() {
          var t;
          return null != (t = n.innerHeight) ? t : o.height()
        },
        aggregate: function(t) {
          var e, n, o;
          return e = a, t && (e = null != (o = h[i(t).data(c)]) ? o.waypoints : void 0), e ? (n = {
            horizontal: [],
            vertical: []
          }, i.each(n, function(t, o) {
            return i.each(e[t], function(t, e) {
              return o.push(e)
            }), o.sort(function(t, e) {
              return t.offset - e.offset
            }), n[t] = i.map(o, function(t) {
              return t.element
            }), n[t] = i.unique(n[t])
          }), n) : []
        },
        above: function(t) {
          return null == t && (t = n), d._filter(t, "vertical", function(t, e) {
            return e.offset <= t.oldScroll.y
          })
        },
        below: function(t) {
          return null == t && (t = n), d._filter(t, "vertical", function(t, e) {
            return e.offset > t.oldScroll.y
          })
        },
        left: function(t) {
          return null == t && (t = n), d._filter(t, "horizontal", function(t, e) {
            return e.offset <= t.oldScroll.x
          })
        },
        right: function(t) {
          return null == t && (t = n), d._filter(t, "horizontal", function(t, e) {
            return e.offset > t.oldScroll.x
          })
        },
        enable: function() {
          return d._invoke("enable")
        },
        disable: function() {
          return d._invoke("disable")
        },
        destroy: function() {
          return d._invoke("destroy")
        },
        extendFn: function(t, e) {
          return p[t] = e
        },
        _invoke: function(t) {
          var e;
          return e = i.extend({}, a.vertical, a.horizontal), i.each(e, function(e, i) {
            return i[t](), !0
          })
        },
        _filter: function(t, e, n) {
          var o, r;
          return (o = h[i(t).data(c)]) ? (r = [], i.each(o.waypoints[e], function(t, e) {
            if (n(o, e)) return r.push(e)
          }), r.sort(function(t, e) {
            return t.offset - e.offset
          }), i.map(r, function(t) {
            return t.element
          })) : []
        }
      }, i[b] = function() {
        var t, i;
        return i = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], d[i] ? d[i].apply(null, t) : d.aggregate.call(null, i)
      }, i[b].settings = {
        resizeThrottle: 100,
        scrollThrottle: 30
      }, o.load(function() {
        return i[b]("refresh")
      })
    })
  }.call(this), ! function(t) {
  "use strict";
  t.fn.counterUp = function(e) {
    var i = t.extend({
      time: 400,
      delay: 10
    }, e);
    return this.each(function() {
      var e = t(this),
        n = i,
        o = function() {
          var t = n.time / n.delay,
            i = e.text(),
            o = [i],
            r = /[0-9]+,[0-9]+/.test(i);
          i = i.replace(/,/g, "");
          for (var s = (/^[0-9]+$/.test(i), /^[0-9]+\.[0-9]+$/.test(i)), a = s ? (i.split(".")[1] || []).length : 0, l = t; l >= 1; l--) {
            var c = parseInt(i / t * l);
            if (s && (c = parseFloat(i / t * l).toFixed(a)), r)
              for (;
                /(\d+)(\d{3})/.test(c.toString());) c = c.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            o.unshift(c)
          }
          e.data("counterup-nums", o), e.text("0");
          var h = function() {
            e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), n.delay) : (delete e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null))
          };
          e.data("counterup-func", h), setTimeout(e.data("counterup-func"), n.delay)
        };
      e.waypoint(o, {
        offset: "100%",
        triggerOnce: !0
      })
    })
  }
}(jQuery),
  function(t, e, i, n) {
    var o = i("html"),
      r = i(t),
      s = i(e),
      a = i.fancybox = function() {
        a.open.apply(this, arguments)
      },
      l = navigator.userAgent.match(/msie/i),
      c = null,
      h = e.createTouch !== n,
      u = function(t) {
        return t && t.hasOwnProperty && t instanceof i
      },
      d = function(t) {
        return t && "string" === i.type(t)
      },
      p = function(t) {
        return d(t) && 0 < t.indexOf("%")
      },
      f = function(t, e) {
        var i = parseInt(t, 10) || 0;
        return e && p(t) && (i *= a.getViewport()[e] / 100), Math.ceil(i)
      },
      g = function(t, e) {
        return f(t, e) + "px"
      };
    i.extend(a, {
      version: "2.1.5",
      defaults: {
        padding: 15,
        margin: 20,
        width: 800,
        height: 600,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 9999,
        maxHeight: 9999,
        pixelRatio: 1,
        autoSize: !0,
        autoHeight: !1,
        autoWidth: !1,
        autoResize: !0,
        autoCenter: !h,
        fitToView: !0,
        aspectRatio: !1,
        topRatio: .5,
        leftRatio: .5,
        scrolling: "auto",
        wrapCSS: "",
        arrows: !0,
        closeBtn: !0,
        closeClick: !1,
        nextClick: !1,
        mouseWheel: !0,
        autoPlay: !1,
        playSpeed: 3e3,
        preload: 3,
        modal: !1,
        loop: !0,
        ajax: {
          dataType: "html",
          headers: {
            "X-fancyBox": !0
          }
        },
        iframe: {
          scrolling: "auto",
          preload: !0
        },
        swf: {
          wmode: "transparent",
          allowfullscreen: "true",
          allowscriptaccess: "always"
        },
        keys: {
          next: {
            13: "left",
            34: "up",
            39: "left",
            40: "up"
          },
          prev: {
            8: "right",
            33: "down",
            37: "right",
            38: "down"
          },
          close: [27],
          play: [32],
          toggle: [70]
        },
        direction: {
          next: "left",
          prev: "right"
        },
        scrollOutside: !0,
        index: 0,
        type: null,
        href: null,
        content: null,
        title: null,
        tpl: {
          wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
          image: '<img class="fancybox-image" src="{href}" alt="" />',
          iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
          error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
          closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
          next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
          prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
        },
        openEffect: "fade",
        openSpeed: 250,
        openEasing: "swing",
        openOpacity: !0,
        openMethod: "zoomIn",
        closeEffect: "fade",
        closeSpeed: 250,
        closeEasing: "swing",
        closeOpacity: !0,
        closeMethod: "zoomOut",
        nextEffect: "elastic",
        nextSpeed: 250,
        nextEasing: "swing",
        nextMethod: "changeIn",
        prevEffect: "elastic",
        prevSpeed: 250,
        prevEasing: "swing",
        prevMethod: "changeOut",
        helpers: {
          overlay: !0,
          title: !0
        },
        onCancel: i.noop,
        beforeLoad: i.noop,
        afterLoad: i.noop,
        beforeShow: i.noop,
        afterShow: i.noop,
        beforeChange: i.noop,
        beforeClose: i.noop,
        afterClose: i.noop
      },
      group: {},
      opts: {},
      previous: null,
      coming: null,
      current: null,
      isActive: !1,
      isOpen: !1,
      isOpened: !1,
      wrap: null,
      skin: null,
      outer: null,
      inner: null,
      player: {
        timer: null,
        isActive: !1
      },
      ajaxLoad: null,
      imgPreload: null,
      transitions: {},
      helpers: {},
      open: function(t, e) {
        if (t && (i.isPlainObject(e) || (e = {}), !1 !== a.close(!0))) return i.isArray(t) || (t = u(t) ? i(t).get() : [t]), i.each(t, function(o, r) {
          var s, l, c, h, p, f = {};
          "object" === i.type(r) && (r.nodeType && (r = i(r)), u(r) ? (f = {
            href: r.data("fancybox-href") || r.attr("href"),
            title: r.data("fancybox-title") || r.attr("title"),
            isDom: !0,
            element: r
          }, i.metadata && i.extend(!0, f, r.metadata())) : f = r), s = e.href || f.href || (d(r) ? r : null), l = e.title !== n ? e.title : f.title || "", h = (c = e.content || f.content) ? "html" : e.type || f.type, !h && f.isDom && (h = r.data("fancybox-type"), h || (h = (h = r.prop("class").match(/fancybox\.(\w+)/)) ? h[1] : null)), d(s) && (h || (a.isImage(s) ? h = "image" : a.isSWF(s) ? h = "swf" : "#" === s.charAt(0) ? h = "inline" : d(r) && (h = "html", c = r)), "ajax" === h && (p = s.split(/\s+/, 2), s = p.shift(), p = p.shift())), c || ("inline" === h ? s ? c = i(d(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : f.isDom && (c = r) : "html" === h ? c = s : !h && !s && f.isDom && (h = "inline", c = r)), i.extend(f, {
            href: s,
            type: h,
            content: c,
            title: l,
            selector: p
          }), t[o] = f
        }), a.opts = i.extend(!0, {}, a.defaults, e), e.keys !== n && (a.opts.keys = !!e.keys && i.extend({}, a.defaults.keys, e.keys)), a.group = t, a._start(a.opts.index)
      },
      cancel: function() {
        var t = a.coming;
        t && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(t))
      },
      close: function(t) {
        a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && !0 !== t ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
      },
      play: function(t) {
        var e = function() {
            clearTimeout(a.player.timer)
          },
          i = function() {
            e(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
          },
          n = function() {
            e(), s.unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
          };
        !0 === t || !a.player.isActive && !1 !== t ? a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, s.bind({
          "onCancel.player beforeClose.player": n,
          "onUpdate.player": i,
          "beforeLoad.player": e
        }), i(), a.trigger("onPlayStart")) : n()
      },
      next: function(t) {
        var e = a.current;
        e && (d(t) || (t = e.direction.next), a.jumpto(e.index + 1, t, "next"))
      },
      prev: function(t) {
        var e = a.current;
        e && (d(t) || (t = e.direction.prev), a.jumpto(e.index - 1, t, "prev"))
      },
      jumpto: function(t, e, i) {
        var o = a.current;
        o && (t = f(t), a.direction = e || o.direction[t >= o.index ? "next" : "prev"], a.router = i || "jumpto", o.loop && (0 > t && (t = o.group.length + t % o.group.length), t %= o.group.length), o.group[t] !== n && (a.cancel(), a._start(t)))
      },
      reposition: function(t, e) {
        var n, o = a.current,
          r = o ? o.wrap : null;
        r && (n = a._getPosition(e), t && "scroll" === t.type ? (delete n.position, r.stop(!0, !0).animate(n, 200)) : (r.css(n), o.pos = i.extend({}, o.dim, n)))
      },
      update: function(t) {
        var e = t && t.type,
          i = !e || "orientationchange" === e;
        i && (clearTimeout(c), c = null), a.isOpen && !c && (c = setTimeout(function() {
          var n = a.current;
          n && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (i || "load" === e || "resize" === e && n.autoResize) && a._setDimension(), "scroll" === e && n.canShrink || a.reposition(t), a.trigger("onUpdate"), c = null)
        }, i && !h ? 0 : 300))
      },
      toggle: function(t) {
        a.isOpen && (a.current.fitToView = "boolean" === i.type(t) ? t : !a.current.fitToView, h && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
      },
      hideLoading: function() {
        s.unbind(".loading"), i("#fancybox-loading").remove()
      },
      showLoading: function() {
        var t, e;
        a.hideLoading(), t = i('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), s.bind("keydown.loading", function(t) {
          27 === (t.which || t.keyCode) && (t.preventDefault(), a.cancel());
        }), a.defaults.fixed || (e = a.getViewport(), t.css({
          position: "absolute",
          top: .5 * e.h + e.y,
          left: .5 * e.w + e.x
        }))
      },
      getViewport: function() {
        var e = a.current && a.current.locked || !1,
          i = {
            x: r.scrollLeft(),
            y: r.scrollTop()
          };
        return e ? (i.w = e[0].clientWidth, i.h = e[0].clientHeight) : (i.w = h && t.innerWidth ? t.innerWidth : r.width(), i.h = h && t.innerHeight ? t.innerHeight : r.height()), i
      },
      unbindEvents: function() {
        a.wrap && u(a.wrap) && a.wrap.unbind(".fb"), s.unbind(".fb"), r.unbind(".fb")
      },
      bindEvents: function() {
        var t, e = a.current;
        e && (r.bind("orientationchange.fb" + (h ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), a.update), (t = e.keys) && s.bind("keydown.fb", function(o) {
          var r = o.which || o.keyCode,
            s = o.target || o.srcElement;
          return (27 !== r || !a.coming) && void(!o.ctrlKey && !o.altKey && !o.shiftKey && !o.metaKey && (!s || !s.type && !i(s).is("[contenteditable]")) && i.each(t, function(t, s) {
            return 1 < e.group.length && s[r] !== n ? (a[t](s[r]), o.preventDefault(), !1) : -1 < i.inArray(r, s) ? (a[t](), o.preventDefault(), !1) : void 0
          }))
        }), i.fn.mousewheel && e.mouseWheel && a.wrap.bind("mousewheel.fb", function(t, n, o, r) {
          for (var s = i(t.target || null), l = !1; s.length && !l && !s.is(".fancybox-skin") && !s.is(".fancybox-wrap");) l = s[0] && !(s[0].style.overflow && "hidden" === s[0].style.overflow) && (s[0].clientWidth && s[0].scrollWidth > s[0].clientWidth || s[0].clientHeight && s[0].scrollHeight > s[0].clientHeight), s = i(s).parent();
          0 !== n && !l && 1 < a.group.length && !e.canShrink && (0 < r || 0 < o ? a.prev(0 < r ? "down" : "left") : (0 > r || 0 > o) && a.next(0 > r ? "up" : "right"), t.preventDefault())
        }))
      },
      trigger: function(t, e) {
        var n, o = e || a.coming || a.current;
        if (o) {
          if (i.isFunction(o[t]) && (n = o[t].apply(o, Array.prototype.slice.call(arguments, 1))), !1 === n) return !1;
          o.helpers && i.each(o.helpers, function(e, n) {
            n && a.helpers[e] && i.isFunction(a.helpers[e][t]) && a.helpers[e][t](i.extend(!0, {}, a.helpers[e].defaults, n), o)
          }), s.trigger(t)
        }
      },
      isImage: function(t) {
        return d(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
      },
      isSWF: function(t) {
        return d(t) && t.match(/\.(swf)((\?|#).*)?$/i)
      },
      _start: function(t) {
        var e, n, o = {};
        if (t = f(t), e = a.group[t] || null, !e) return !1;
        if (o = i.extend(!0, {}, a.opts, e), e = o.margin, n = o.padding, "number" === i.type(e) && (o.margin = [e, e, e, e]), "number" === i.type(n) && (o.padding = [n, n, n, n]), o.modal && i.extend(!0, o, {
            closeBtn: !1,
            closeClick: !1,
            nextClick: !1,
            arrows: !1,
            mouseWheel: !1,
            keys: null,
            helpers: {
              overlay: {
                closeClick: !1
              }
            }
          }), o.autoSize && (o.autoWidth = o.autoHeight = !0), "auto" === o.width && (o.autoWidth = !0), "auto" === o.height && (o.autoHeight = !0), o.group = a.group, o.index = t, a.coming = o, !1 === a.trigger("beforeLoad")) a.coming = null;
        else {
          if (n = o.type, e = o.href, !n) return a.coming = null, !(!a.current || !a.router || "jumpto" === a.router) && (a.current.index = t, a[a.router](a.direction));
          if (a.isActive = !0, "image" !== n && "swf" !== n || (o.autoHeight = o.autoWidth = !1, o.scrolling = "visible"), "image" === n && (o.aspectRatio = !0), "iframe" === n && h && (o.scrolling = "scroll"), o.wrap = i(o.tpl.wrap).addClass("fancybox-" + (h ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + o.wrapCSS).appendTo(o.parent || "body"), i.extend(o, {
              skin: i(".fancybox-skin", o.wrap),
              outer: i(".fancybox-outer", o.wrap),
              inner: i(".fancybox-inner", o.wrap)
            }), i.each(["Top", "Right", "Bottom", "Left"], function(t, e) {
              o.skin.css("padding" + e, g(o.padding[t]))
            }), a.trigger("onReady"), "inline" === n || "html" === n) {
            if (!o.content || !o.content.length) return a._error("content")
          } else if (!e) return a._error("href");
          "image" === n ? a._loadImage() : "ajax" === n ? a._loadAjax() : "iframe" === n ? a._loadIframe() : a._afterLoad()
        }
      },
      _error: function(t) {
        i.extend(a.coming, {
          type: "html",
          autoWidth: !0,
          autoHeight: !0,
          minWidth: 0,
          minHeight: 0,
          scrolling: "no",
          hasError: t,
          content: a.coming.tpl.error
        }), a._afterLoad()
      },
      _loadImage: function() {
        var t = a.imgPreload = new Image;
        t.onload = function() {
          this.onload = this.onerror = null, a.coming.width = this.width / a.opts.pixelRatio, a.coming.height = this.height / a.opts.pixelRatio, a._afterLoad()
        }, t.onerror = function() {
          this.onload = this.onerror = null, a._error("image")
        }, t.src = a.coming.href, !0 !== t.complete && a.showLoading()
      },
      _loadAjax: function() {
        var t = a.coming;
        a.showLoading(), a.ajaxLoad = i.ajax(i.extend({}, t.ajax, {
          url: t.href,
          error: function(t, e) {
            a.coming && "abort" !== e ? a._error("ajax", t) : a.hideLoading()
          },
          success: function(e, i) {
            "success" === i && (t.content = e, a._afterLoad())
          }
        }))
      },
      _loadIframe: function() {
        var t = a.coming,
          e = i(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", h ? "auto" : t.iframe.scrolling).attr("src", t.href);
        i(t.wrap).bind("onReset", function() {
          try {
            i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
          } catch (t) {}
        }), t.iframe.preload && (a.showLoading(), e.one("load", function() {
          i(this).data("ready", 1), h || i(this).bind("load.fb", a.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
        })), t.content = e.appendTo(t.inner), t.iframe.preload || a._afterLoad()
      },
      _preloadImages: function() {
        var t, e, i = a.group,
          n = a.current,
          o = i.length,
          r = n.preload ? Math.min(n.preload, o - 1) : 0;
        for (e = 1; e <= r; e += 1) t = i[(n.index + e) % o], "image" === t.type && t.href && ((new Image).src = t.href)
      },
      _afterLoad: function() {
        var t, e, n, o, r, s = a.coming,
          l = a.current;
        if (a.hideLoading(), s && !1 !== a.isActive)
          if (!1 === a.trigger("afterLoad", s, l)) s.wrap.stop(!0).trigger("onReset").remove(), a.coming = null;
          else {
            switch (l && (a.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), t = s.content, e = s.type, n = s.scrolling, i.extend(a, {
              wrap: s.wrap,
              skin: s.skin,
              outer: s.outer,
              inner: s.inner,
              current: s,
              previous: l
            }), o = s.href, e) {
              case "inline":
              case "ajax":
              case "html":
                s.selector ? t = i("<div>").html(t).find(s.selector) : u(t) && (t.data("fancybox-placeholder") || t.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(t).hide()), t = t.show().detach(), s.wrap.bind("onReset", function() {
                  i(this).find(t).length && t.hide().replaceAll(t.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                }));
                break;
              case "image":
                t = s.tpl.image.replace("{href}", o);
                break;
              case "swf":
                t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', r = "", i.each(s.swf, function(e, i) {
                  t += '<param name="' + e + '" value="' + i + '"></param>', r += " " + e + '="' + i + '"'
                }), t += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>"
            }(!u(t) || !t.parent().is(s.inner)) && s.inner.append(t), a.trigger("beforeShow"), s.inner.css("overflow", "yes" === n ? "scroll" : "no" === n ? "hidden" : n), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? l.prevMethod && a.transitions[l.prevMethod]() : i(".fancybox-wrap").not(s.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? s.nextMethod : s.openMethod](), a._preloadImages()
          }
      },
      _setDimension: function() {
        var t, e, n, o, r, s, l, c, h, u = a.getViewport(),
          d = 0,
          m = !1,
          v = !1,
          m = a.wrap,
          y = a.skin,
          b = a.inner,
          x = a.current,
          v = x.width,
          w = x.height,
          C = x.minWidth,
          S = x.minHeight,
          _ = x.maxWidth,
          k = x.maxHeight,
          T = x.scrolling,
          O = x.scrollOutside ? x.scrollbarWidth : 0,
          j = x.margin,
          E = f(j[1] + j[3]),
          A = f(j[0] + j[2]);
        if (m.add(y).add(b).width("auto").height("auto").removeClass("fancybox-tmp"), j = f(y.outerWidth(!0) - y.width()), t = f(y.outerHeight(!0) - y.height()), e = E + j, n = A + t, o = p(v) ? (u.w - e) * f(v) / 100 : v, r = p(w) ? (u.h - n) * f(w) / 100 : w, "iframe" === x.type) {
          if (h = x.content, x.autoHeight && 1 === h.data("ready")) try {
            h[0].contentWindow.document.location && (b.width(o).height(9999), s = h.contents().find("body"), O && s.css("overflow-x", "hidden"), r = s.outerHeight(!0))
          } catch (t) {}
        } else(x.autoWidth || x.autoHeight) && (b.addClass("fancybox-tmp"), x.autoWidth || b.width(o), x.autoHeight || b.height(r), x.autoWidth && (o = b.width()), x.autoHeight && (r = b.height()), b.removeClass("fancybox-tmp"));
        if (v = f(o), w = f(r), c = o / r, C = f(p(C) ? f(C, "w") - e : C), _ = f(p(_) ? f(_, "w") - e : _), S = f(p(S) ? f(S, "h") - n : S), k = f(p(k) ? f(k, "h") - n : k), s = _, l = k, x.fitToView && (_ = Math.min(u.w - e, _), k = Math.min(u.h - n, k)), e = u.w - E, A = u.h - A, x.aspectRatio ? (v > _ && (v = _, w = f(v / c)), w > k && (w = k, v = f(w * c)), v < C && (v = C, w = f(v / c)), w < S && (w = S, v = f(w * c))) : (v = Math.max(C, Math.min(v, _)), x.autoHeight && "iframe" !== x.type && (b.width(v), w = b.height()), w = Math.max(S, Math.min(w, k))), x.fitToView)
          if (b.width(v).height(w), m.width(v + j), u = m.width(), E = m.height(), x.aspectRatio)
            for (;
              (u > e || E > A) && v > C && w > S && !(19 < d++);) w = Math.max(S, Math.min(k, w - 10)), v = f(w * c), v < C && (v = C, w = f(v / c)), v > _ && (v = _, w = f(v / c)), b.width(v).height(w), m.width(v + j), u = m.width(), E = m.height();
          else v = Math.max(C, Math.min(v, v - (u - e))), w = Math.max(S, Math.min(w, w - (E - A)));
        O && "auto" === T && w < r && v + j + O < e && (v += O), b.width(v).height(w), m.width(v + j), u = m.width(), E = m.height(), m = (u > e || E > A) && v > C && w > S, v = x.aspectRatio ? v < s && w < l && v < o && w < r : (v < s || w < l) && (v < o || w < r), i.extend(x, {
          dim: {
            width: g(u),
            height: g(E)
          },
          origWidth: o,
          origHeight: r,
          canShrink: m,
          canExpand: v,
          wPadding: j,
          hPadding: t,
          wrapSpace: E - y.outerHeight(!0),
          skinSpace: y.height() - w
        }), !h && x.autoHeight && w > S && w < k && !v && b.height("auto")
      },
      _getPosition: function(t) {
        var e = a.current,
          i = a.getViewport(),
          n = e.margin,
          o = a.wrap.width() + n[1] + n[3],
          r = a.wrap.height() + n[0] + n[2],
          n = {
            position: "absolute",
            top: n[0],
            left: n[3]
          };
        return e.autoCenter && e.fixed && !t && r <= i.h && o <= i.w ? n.position = "fixed" : e.locked || (n.top += i.y, n.left += i.x), n.top = g(Math.max(n.top, n.top + (i.h - r) * e.topRatio)), n.left = g(Math.max(n.left, n.left + (i.w - o) * e.leftRatio)), n
      },
      _afterZoomIn: function() {
        var t = a.current;
        t && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (t.closeClick || t.nextClick && 1 < a.group.length) && a.inner.css("cursor", "pointer").bind("click.fb", function(e) {
          !i(e.target).is("a") && !i(e.target).parent().is("a") && (e.preventDefault(), a[t.closeClick ? "close" : "next"]())
        }), t.closeBtn && i(t.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function(t) {
          t.preventDefault(), a.close()
        }), t.arrows && 1 < a.group.length && ((t.loop || 0 < t.index) && i(t.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (t.loop || t.index < a.group.length - 1) && i(t.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
      },
      _afterZoomOut: function(t) {
        t = t || a.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(a, {
          group: {},
          opts: {},
          router: !1,
          current: null,
          isActive: !1,
          isOpened: !1,
          isOpen: !1,
          isClosing: !1,
          wrap: null,
          skin: null,
          outer: null,
          inner: null
        }), a.trigger("afterClose", t)
      }
    }), a.transitions = {
      getOrigPosition: function() {
        var t = a.current,
          e = t.element,
          i = t.orig,
          n = {},
          o = 50,
          r = 50,
          s = t.hPadding,
          l = t.wPadding,
          c = a.getViewport();
        return !i && t.isDom && e.is(":visible") && (i = e.find("img:first"), i.length || (i = e)), u(i) ? (n = i.offset(), i.is("img") && (o = i.outerWidth(), r = i.outerHeight())) : (n.top = c.y + (c.h - r) * t.topRatio, n.left = c.x + (c.w - o) * t.leftRatio), ("fixed" === a.wrap.css("position") || t.locked) && (n.top -= c.y, n.left -= c.x), n = {
          top: g(n.top - s * t.topRatio),
          left: g(n.left - l * t.leftRatio),
          width: g(o + l),
          height: g(r + s)
        }
      },
      step: function(t, e) {
        var i, n, o = e.prop;
        n = a.current;
        var r = n.wrapSpace,
          s = n.skinSpace;
        "width" !== o && "height" !== o || (i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), a.isClosing && (i = 1 - i), n = "width" === o ? n.wPadding : n.hPadding, n = t - n, a.skin[o](f("width" === o ? n : n - r * i)), a.inner[o](f("width" === o ? n : n - r * i - s * i)))
      },
      zoomIn: function() {
        var t = a.current,
          e = t.pos,
          n = t.openEffect,
          o = "elastic" === n,
          r = i.extend({
            opacity: 1
          }, e);
        delete r.position, o ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === n && (e.opacity = .1), a.wrap.css(e).animate(r, {
          duration: "none" === n ? 0 : t.openSpeed,
          easing: t.openEasing,
          step: o ? this.step : null,
          complete: a._afterZoomIn
        })
      },
      zoomOut: function() {
        var t = a.current,
          e = t.closeEffect,
          i = "elastic" === e,
          n = {
            opacity: .1
          };
        i && (n = this.getOrigPosition(), t.closeOpacity && (n.opacity = .1)), a.wrap.animate(n, {
          duration: "none" === e ? 0 : t.closeSpeed,
          easing: t.closeEasing,
          step: i ? this.step : null,
          complete: a._afterZoomOut
        })
      },
      changeIn: function() {
        var t, e = a.current,
          i = e.nextEffect,
          n = e.pos,
          o = {
            opacity: 1
          },
          r = a.direction;
        n.opacity = .1, "elastic" === i && (t = "down" === r || "up" === r ? "top" : "left", "down" === r || "right" === r ? (n[t] = g(f(n[t]) - 200), o[t] = "+=200px") : (n[t] = g(f(n[t]) + 200), o[t] = "-=200px")), "none" === i ? a._afterZoomIn() : a.wrap.css(n).animate(o, {
          duration: e.nextSpeed,
          easing: e.nextEasing,
          complete: a._afterZoomIn
        })
      },
      changeOut: function() {
        var t = a.previous,
          e = t.prevEffect,
          n = {
            opacity: .1
          },
          o = a.direction;
        "elastic" === e && (n["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=200px"), t.wrap.animate(n, {
          duration: "none" === e ? 0 : t.prevSpeed,
          easing: t.prevEasing,
          complete: function() {
            i(this).trigger("onReset").remove()
          }
        })
      }
    }, a.helpers.overlay = {
      defaults: {
        closeClick: !0,
        speedOut: 200,
        showEarly: !0,
        css: {},
        locked: !h,
        fixed: !0
      },
      overlay: null,
      fixed: !1,
      el: i("html"),
      create: function(t) {
        t = i.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(a.coming ? a.coming.parent : t.parent), this.fixed = !1, t.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
      },
      open: function(t) {
        var e = this;
        t = i.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (r.bind("resize.overlay", i.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function(t) {
          if (i(t.target).hasClass("fancybox-overlay")) return a.isActive ? a.close() : e.close(), !1
        }), this.overlay.css(t.css).show()
      },
      close: function() {
        var t, e;
        r.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), t = r.scrollTop(), e = r.scrollLeft(), this.el.removeClass("fancybox-lock"), r.scrollTop(t).scrollLeft(e)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
          overlay: null,
          fixed: !1
        })
      },
      update: function() {
        var t, i = "100%";
        this.overlay.width(i).height("100%"), l ? (t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), s.width() > t && (i = s.width())) : s.width() > r.width() && (i = s.width()), this.overlay.width(i).height(s.height())
      },
      onReady: function(t, e) {
        var n = this.overlay;
        i(".fancybox-overlay").stop(!0, !0), n || this.create(t), t.locked && this.fixed && e.fixed && (n || (this.margin = s.height() > r.height() && i("html").css("margin-right").replace("px", "")), e.locked = this.overlay.append(e.wrap), e.fixed = !1), !0 === t.showEarly && this.beforeShow.apply(this, arguments)
      },
      beforeShow: function(t, e) {
        var n, o;
        e.locked && (!1 !== this.margin && (i("*").filter(function() {
          return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
        }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = r.scrollTop(), o = r.scrollLeft(), this.el.addClass("fancybox-lock"), r.scrollTop(n).scrollLeft(o)), this.open(t)
      },
      onUpdate: function() {
        this.fixed || this.update()
      },
      afterClose: function(t) {
        this.overlay && !a.coming && this.overlay.fadeOut(t.speedOut, i.proxy(this.close, this))
      }
    }, a.helpers.title = {
      defaults: {
        type: "float",
        position: "bottom"
      },
      beforeShow: function(t) {
        var e = a.current,
          n = e.title,
          o = t.type;
        if (i.isFunction(n) && (n = n.call(e.element, e)), d(n) && "" !== i.trim(n)) {
          switch (e = i('<div class="fancybox-title fancybox-title-' + o + '-wrap">' + n + "</div>"), o) {
            case "inside":
              o = a.skin;
              break;
            case "outside":
              o = a.wrap;
              break;
            case "over":
              o = a.inner;
              break;
            default:
              o = a.skin, e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(f(e.css("margin-bottom")))
          }
          e["top" === t.position ? "prependTo" : "appendTo"](o)
        }
      }
    }, i.fn.fancybox = function(t) {
      var e, n = i(this),
        o = this.selector || "",
        r = function(r) {
          var s, l, c = i(this).blur(),
            h = e;
          !r.ctrlKey && !r.altKey && !r.shiftKey && !r.metaKey && !c.is(".fancybox-wrap") && (s = t.groupAttr || "data-fancybox-group", l = c.attr(s), l || (s = "rel", l = c.get(0)[s]), l && "" !== l && "nofollow" !== l && (c = o.length ? i(o) : n, c = c.filter("[" + s + '="' + l + '"]'), h = c.index(this)), t.index = h, !1 !== a.open(c, t) && r.preventDefault())
        };
      return t = t || {}, e = t.index || 0, o && !1 !== t.live ? s.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", r) : n.unbind("click.fb-start").bind("click.fb-start", r), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, s.ready(function() {
      var e, r;
      if (i.scrollbarWidth === n && (i.scrollbarWidth = function() {
          var t = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
            e = t.children(),
            e = e.innerWidth() - e.height(99).innerWidth();
          return t.remove(), e
        }), i.support.fixedPosition === n) {
        e = i.support, r = i('<div style="position:fixed;top:20px;"></div>').appendTo("body");
        var s = 20 === r[0].offsetTop || 15 === r[0].offsetTop;
        r.remove(), e.fixedPosition = s
      }
      i.extend(a.defaults, {
        scrollbarWidth: i.scrollbarWidth(),
        fixed: i.support.fixedPosition,
        parent: i("body")
      }), e = i(t).width(), o.addClass("fancybox-lock-test"), r = i(t).width(), o.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (r - e) + "px;}</style>").appendTo("head")
    })
  }(window, document, jQuery),
  function(t) {
    var e = "2.0.1",
      i = {},
      n = {
        exclude: [],
        excludeWithin: [],
        offset: 0,
        direction: "top",
        delegateSelector: null,
        scrollElement: null,
        scrollTarget: null,
        beforeScroll: function() {},
        afterScroll: function() {},
        easing: "swing",
        speed: 400,
        autoCoefficient: 2,
        preventDefault: !0
      },
      o = function(e) {
        var i = [],
          n = !1,
          o = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
        return this.each(function() {
          var e = t(this);
          if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void(e[o]() > 0 ? i.push(this) : (e[o](1), n = e[o]() > 0, n && i.push(this), e[o](0))) : (i.push(document.scrollingElement), !1)
        }), i.length || this.each(function() {
          this === document.documentElement && "smooth" === t(this).css("scrollBehavior") && (i = [this]), i.length || "BODY" !== this.nodeName || (i = [this])
        }), "first" === e.el && i.length > 1 && (i = [i[0]]), i
      };
    t.fn.extend({
      scrollable: function(t) {
        var e = o.call(this, {
          dir: t
        });
        return this.pushStack(e)
      },
      firstScrollable: function(t) {
        var e = o.call(this, {
          el: "first",
          dir: t
        });
        return this.pushStack(e)
      },
      smoothScroll: function(e, i) {
        if (e = e || {}, "options" === e) return i ? this.each(function() {
          var e = t(this),
            n = t.extend(e.data("ssOpts") || {}, i);
          t(this).data("ssOpts", n)
        }) : this.first().data("ssOpts");
        var n = t.extend({}, t.fn.smoothScroll.defaults, e),
          o = function(e) {
            var i = function(t) {
                return t.replace(/(:|\.|\/)/g, "\\$1")
              },
              o = this,
              r = t(this),
              s = t.extend({}, n, r.data("ssOpts") || {}),
              a = n.exclude,
              l = s.excludeWithin,
              c = 0,
              h = 0,
              u = !0,
              d = {},
              p = t.smoothScroll.filterPath(location.pathname),
              f = t.smoothScroll.filterPath(o.pathname),
              g = location.hostname === o.hostname || !o.hostname,
              m = s.scrollTarget || f === p,
              v = i(o.hash);
            if (v && !t(v).length && (u = !1), s.scrollTarget || g && m && v) {
              for (; u && c < a.length;) r.is(i(a[c++])) && (u = !1);
              for (; u && h < l.length;) r.closest(l[h++]).length && (u = !1)
            } else u = !1;
            u && (s.preventDefault && e.preventDefault(), t.extend(d, s, {
              scrollTarget: s.scrollTarget || v,
              link: o
            }), t.smoothScroll(d))
          };
        return null !== e.delegateSelector ? this.off("click.smoothscroll", e.delegateSelector).on("click.smoothscroll", e.delegateSelector, o) : this.off("click.smoothscroll").on("click.smoothscroll", o), this
      }
    }), t.smoothScroll = function(e, n) {
      if ("options" === e && "object" == typeof n) return t.extend(i, n);
      var o, r, s, a, l, c = 0,
        h = "offset",
        u = "scrollTop",
        d = {},
        p = {};
      "number" == typeof e ? (o = t.extend({
        link: null
      }, t.fn.smoothScroll.defaults, i), s = e) : (o = t.extend({
        link: null
      }, t.fn.smoothScroll.defaults, e || {}, i), o.scrollElement && (h = "position", "static" === o.scrollElement.css("position") && o.scrollElement.css("position", "relative"))), u = "left" === o.direction ? "scrollLeft" : u, o.scrollElement ? (r = o.scrollElement, /^(?:HTML|BODY)$/.test(r[0].nodeName) || (c = r[u]())) : r = t("html, body").firstScrollable(o.direction), o.beforeScroll.call(r, o), s = "number" == typeof e ? e : n || t(o.scrollTarget)[h]() && t(o.scrollTarget)[h]()[o.direction] || 0, d[u] = s + c + o.offset, a = o.speed, "auto" === a && (l = Math.abs(d[u] - r[u]()), a = l / o.autoCoefficient), p = {
        duration: a,
        easing: o.easing,
        complete: function() {
          o.afterScroll.call(o.link, o)
        }
      }, o.step && (p.step = o.step), r.length ? r.stop().animate(d, p) : o.afterScroll.call(o.link, o)
    }, t.smoothScroll.version = e, t.smoothScroll.filterPath = function(t) {
      return t = t || "", t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }, t.fn.smoothScroll.defaults = n
  }(jQuery), ! function(t) {
  var e = function(e, i) {
    this.element = t(e), this.picker = t('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element), this.id = this.element.data("slider-id") || i.id, this.id && (this.picker[0].id = this.id), "undefined" != typeof Modernizr && Modernizr.touch && (this.touchCapable = !0);
    var n = this.element.data("slider-tooltip") || i.tooltip;
    switch (this.tooltip = this.picker.find(".tooltip"), this.tooltipInner = this.tooltip.find("div.tooltip-inner"), this.orientation = this.element.data("slider-orientation") || i.orientation, this.orientation) {
      case "vertical":
        this.picker.addClass("slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight", this.tooltip.addClass("right")[0].style.left = "100%";
        break;
      default:
        this.picker.addClass("slider-horizontal").css("width", this.element.outerWidth()), this.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth", this.tooltip.addClass("top")[0].style.top = -this.tooltip.outerHeight() - 14 + "px"
    }
    this.min = this.element.data("slider-min") || i.min, this.max = this.element.data("slider-max") || i.max, this.step = this.element.data("slider-step") || i.step, this.value = this.element.data("slider-value") || i.value, this.value[1] && (this.range = !0), this.selection = this.element.data("slider-selection") || i.selection, this.selectionEl = this.picker.find(".slider-selection"), "none" === this.selection && this.selectionEl.addClass("hide"), this.selectionElStyle = this.selectionEl[0].style, this.handle1 = this.picker.find(".slider-handle:first"), this.handle1Stype = this.handle1[0].style, this.handle2 = this.picker.find(".slider-handle:last"), this.handle2Stype = this.handle2[0].style;
    var o = this.element.data("slider-handle") || i.handle;
    switch (o) {
      case "round":
        this.handle1.addClass("round"), this.handle2.addClass("round");
        break;
      case "triangle":
        this.handle1.addClass("triangle"), this.handle2.addClass("triangle")
    }
    this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), "after" == this.selection ? this.value[1] = this.max : this.value[1] = this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos], this.formater = i.formater, this.layout(), this.touchCapable ? this.picker.on({
      touchstart: t.proxy(this.mousedown, this)
    }) : this.picker.on({
      mousedown: t.proxy(this.mousedown, this)
    }), "show" === n ? this.picker.on({
      mouseenter: t.proxy(this.showTooltip, this),
      mouseleave: t.proxy(this.hideTooltip, this)
    }) : this.tooltip.addClass("hide")
  };
  e.prototype = {
    constructor: e,
    over: !1,
    inDrag: !1,
    showTooltip: function() {
      this.tooltip.addClass("in"), this.over = !0
    },
    hideTooltip: function() {
      this.inDrag === !1 && this.tooltip.removeClass("in"), this.over = !1
    },
    layout: function() {
      this.handle1Stype[this.stylePos] = this.percentage[0] + "%", this.handle2Stype[this.stylePos] = this.percentage[1] + "%", "vertical" == this.orientation ? (this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) + "%") : (this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) + "%"), this.range ? (this.tooltipInner.text(this.formater(this.value[0]) + " : " + this.formater(this.value[1])), this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0]) / 2) / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px") : (this.tooltipInner.text(this.formater(this.value[0])), this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0] / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px")
    },
    mousedown: function(e) {
      this.touchCapable && "touchstart" === e.type && (e = e.originalEvent), this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos];
      var i = this.getPercentage(e);
      if (this.range) {
        var n = Math.abs(this.percentage[0] - i),
          o = Math.abs(this.percentage[1] - i);
        this.dragged = n < o ? 0 : 1
      } else this.dragged = 0;
      this.percentage[this.dragged] = i, this.layout(), this.touchCapable ? t(document).on({
        touchmove: t.proxy(this.mousemove, this),
        touchend: t.proxy(this.mouseup, this)
      }) : t(document).on({
        mousemove: t.proxy(this.mousemove, this),
        mouseup: t.proxy(this.mouseup, this)
      }), this.inDrag = !0;
      var r = this.calculateValue();
      return this.element.trigger({
        type: "slideStart",
        value: r
      }).trigger({
        type: "slide",
        value: r
      }), !1
    },
    mousemove: function(t) {
      this.touchCapable && "touchmove" === t.type && (t = t.originalEvent);
      var e = this.getPercentage(t);
      this.range && (0 === this.dragged && this.percentage[1] < e ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : 1 === this.dragged && this.percentage[0] > e && (this.percentage[1] = this.percentage[0], this.dragged = 0)), this.percentage[this.dragged] = e, this.layout();
      var i = this.calculateValue();
      return this.element.trigger({
        type: "slide",
        value: i
      }).data("value", i).prop("value", i), !1
    },
    mouseup: function(e) {
      this.touchCapable ? t(document).off({
        touchmove: this.mousemove,
        touchend: this.mouseup
      }) : t(document).off({
        mousemove: this.mousemove,
        mouseup: this.mouseup
      }), this.inDrag = !1, 0 == this.over && this.hideTooltip(), this.element;
      var i = this.calculateValue();
      return this.element.trigger({
        type: "slideStop",
        value: i
      }).data("value", i).prop("value", i), !1
    },
    calculateValue: function() {
      var t;
      return this.range ? (t = [this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.min + Math.round(this.diff * this.percentage[1] / 100 / this.step) * this.step], this.value = t) : (t = this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.value = [t, this.value[1]]), t
    },
    getPercentage: function(t) {
      this.touchCapable && (t = t.touches[0]);
      var e = 100 * (t[this.mousePos] - this.offset[this.stylePos]) / this.size;
      return e = Math.round(e / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, e))
    },
    getValue: function() {
      return this.range ? this.value : this.value[0]
    },
    setValue: function(t) {
      this.value = t, this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), "after" == this.selection ? this.value[1] = this.max : this.value[1] = this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.layout()
    }
  }, t.fn.slider = function(i, n) {
    return this.each(function() {
      var o = t(this),
        r = o.data("slider"),
        s = "object" == typeof i && i;
      r || o.data("slider", r = new e(this, t.extend({}, t.fn.slider.defaults, s))), "string" == typeof i && r[i](n)
    })
  }, t.fn.slider.defaults = {
    min: 0,
    max: 10,
    step: 1,
    orientation: "horizontal",
    value: 5,
    selection: "before",
    tooltip: "show",
    handle: "round",
    formater: function(t) {
      return t
    }
  }, t.fn.slider.Constructor = e
}(window.jQuery), ! function(t, e) {
  "function" == typeof define && define.amd ? define(["jquery"], function(t) {
    return e(t)
  }) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(t.jQuery)
}(this, function(t) {
  ! function(t) {
    "use strict";

    function e(e) {
      var i = [{
        re: /[\xC0-\xC6]/g,
        ch: "A"
      }, {
        re: /[\xE0-\xE6]/g,
        ch: "a"
      }, {
        re: /[\xC8-\xCB]/g,
        ch: "E"
      }, {
        re: /[\xE8-\xEB]/g,
        ch: "e"
      }, {
        re: /[\xCC-\xCF]/g,
        ch: "I"
      }, {
        re: /[\xEC-\xEF]/g,
        ch: "i"
      }, {
        re: /[\xD2-\xD6]/g,
        ch: "O"
      }, {
        re: /[\xF2-\xF6]/g,
        ch: "o"
      }, {
        re: /[\xD9-\xDC]/g,
        ch: "U"
      }, {
        re: /[\xF9-\xFC]/g,
        ch: "u"
      }, {
        re: /[\xC7-\xE7]/g,
        ch: "c"
      }, {
        re: /[\xD1]/g,
        ch: "N"
      }, {
        re: /[\xF1]/g,
        ch: "n"
      }];
      return t.each(i, function() {
        e = e ? e.replace(this.re, this.ch) : ""
      }), e
    }

    function i(e) {
      var i = arguments,
        n = e;
      [].shift.apply(i);
      var o, r = this.each(function() {
        var e = t(this);
        if (e.is("select")) {
          var r = e.data("selectpicker"),
            s = "object" == typeof n && n;
          if (r) {
            if (s)
              for (var a in s) s.hasOwnProperty(a) && (r.options[a] = s[a])
          } else {
            var l = t.extend({}, h.DEFAULTS, t.fn.selectpicker.defaults || {}, e.data(), s);
            l.template = t.extend({}, h.DEFAULTS.template, t.fn.selectpicker.defaults ? t.fn.selectpicker.defaults.template : {}, e.data().template, s.template), e.data("selectpicker", r = new h(this, l))
          }
          "string" == typeof n && (o = r[n] instanceof Function ? r[n].apply(r, i) : r.options[n])
        }
      });
      return "undefined" != typeof o ? o : r
    }
    String.prototype.includes || ! function() {
      var t = {}.toString,
        e = function() {
          try {
            var t = {},
              e = Object.defineProperty,
              i = e(t, t, t) && e
          } catch (t) {}
          return i
        }(),
        i = "".indexOf,
        n = function(e) {
          if (null == this) throw new TypeError;
          var n = String(this);
          if (e && "[object RegExp]" == t.call(e)) throw new TypeError;
          var o = n.length,
            r = String(e),
            s = r.length,
            a = arguments.length > 1 ? arguments[1] : void 0,
            l = a ? Number(a) : 0;
          l != l && (l = 0);
          var c = Math.min(Math.max(l, 0), o);
          return !(s + c > o) && i.call(n, r, l) != -1
        };
      e ? e(String.prototype, "includes", {
        value: n,
        configurable: !0,
        writable: !0
      }) : String.prototype.includes = n
    }(), String.prototype.startsWith || ! function() {
      var t = function() {
          try {
            var t = {},
              e = Object.defineProperty,
              i = e(t, t, t) && e
          } catch (t) {}
          return i
        }(),
        e = {}.toString,
        i = function(t) {
          if (null == this) throw new TypeError;
          var i = String(this);
          if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
          var n = i.length,
            o = String(t),
            r = o.length,
            s = arguments.length > 1 ? arguments[1] : void 0,
            a = s ? Number(s) : 0;
          a != a && (a = 0);
          var l = Math.min(Math.max(a, 0), n);
          if (r + l > n) return !1;
          for (var c = -1; ++c < r;)
            if (i.charCodeAt(l + c) != o.charCodeAt(c)) return !1;
          return !0
        };
      t ? t(String.prototype, "startsWith", {
        value: i,
        configurable: !0,
        writable: !0
      }) : String.prototype.startsWith = i
    }(), Object.keys || (Object.keys = function(t, e, i) {
      i = [];
      for (e in t) i.hasOwnProperty.call(t, e) && i.push(e);
      return i
    });
    var n = {
      useDefault: !1,
      _set: t.valHooks.select.set
    };
    t.valHooks.select.set = function(e, i) {
      return i && !n.useDefault && t(e).data("selected", !0), n._set.apply(this, arguments)
    };
    var o = null;
    t.fn.triggerNative = function(t) {
      var e, i = this[0];
      i.dispatchEvent ? ("function" == typeof Event ? e = new Event(t, {
        bubbles: !0
      }) : (e = document.createEvent("Event"), e.initEvent(t, !0, !1)), i.dispatchEvent(e)) : i.fireEvent ? (e = document.createEventObject(), e.eventType = t, i.fireEvent("on" + t, e)) : this.trigger(t)
    }, t.expr.pseudos.icontains = function(e, i, n) {
      var o = t(e),
        r = (o.data("tokens") || o.text()).toString().toUpperCase();
      return r.includes(n[3].toUpperCase())
    }, t.expr.pseudos.ibegins = function(e, i, n) {
      var o = t(e),
        r = (o.data("tokens") || o.text()).toString().toUpperCase();
      return r.startsWith(n[3].toUpperCase())
    }, t.expr.pseudos.aicontains = function(e, i, n) {
      var o = t(e),
        r = (o.data("tokens") || o.data("normalizedText") || o.text()).toString().toUpperCase();
      return r.includes(n[3].toUpperCase())
    }, t.expr.pseudos.aibegins = function(e, i, n) {
      var o = t(e),
        r = (o.data("tokens") || o.data("normalizedText") || o.text()).toString().toUpperCase();
      return r.startsWith(n[3].toUpperCase())
    };
    var r = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      },
      s = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#x27;": "'",
        "&#x60;": "`"
      },
      a = function(t) {
        var e = function(e) {
            return t[e]
          },
          i = "(?:" + Object.keys(t).join("|") + ")",
          n = RegExp(i),
          o = RegExp(i, "g");
        return function(t) {
          return t = null == t ? "" : "" + t, n.test(t) ? t.replace(o, e) : t
        }
      },
      l = a(r),
      c = a(s),
      h = function(e, i) {
        n.useDefault || (t.valHooks.select.set = n._set, n.useDefault = !0), this.$element = t(e), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = i, null === this.options.title && (this.options.title = this.$element.attr("title"));
        var o = this.options.windowPadding;
        "number" == typeof o && (this.options.windowPadding = [o, o, o, o]), this.val = h.prototype.val, this.render = h.prototype.render, this.refresh = h.prototype.refresh, this.setStyle = h.prototype.setStyle, this.selectAll = h.prototype.selectAll, this.deselectAll = h.prototype.deselectAll, this.destroy = h.prototype.destroy, this.remove = h.prototype.remove, this.show = h.prototype.show, this.hide = h.prototype.hide, this.init()
      };
    h.VERSION = "1.12.1", h.DEFAULTS = {
      noneSelectedText: "Nothing selected",
      noneResultsText: "No results matched {0}",
      countSelectedText: function(t, e) {
        return 1 == t ? "{0} item selected" : "{0} items selected"
      },
      maxOptionsText: function(t, e) {
        return [1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
      },
      selectAllText: "Select All",
      deselectAllText: "Deselect All",
      doneButton: !1,
      doneButtonText: "Close",
      multipleSeparator: ", ",
      styleBase: "btn",
      style: "btn-default",
      size: "auto",
      title: null,
      selectedTextFormat: "values",
      width: !1,
      container: !1,
      hideDisabled: !1,
      showSubtext: !1,
      showIcon: !0,
      showContent: !0,
      dropupAuto: !0,
      header: !1,
      liveSearch: !1,
      liveSearchPlaceholder: null,
      liveSearchNormalize: !1,
      liveSearchStyle: "contains",
      actionsBox: !1,
      iconBase: "glyphicon",
      tickIcon: "glyphicon-ok",
      showTick: !1,
      template: {
        caret: '<span class="caret"></span>'
      },
      maxOptions: !1,
      mobile: !1,
      selectOnTab: !1,
      dropdownAlignRight: !1,
      windowPadding: 0
    }, h.prototype = {
      constructor: h,
      init: function() {
        var e = this,
          i = this.$element.attr("id");
        this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight === !0 && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof i && (this.$button.attr("data-id", i), t('label[for="' + i + '"]').click(function(t) {
          t.preventDefault(), e.$button.focus()
        })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
          "hide.bs.dropdown": function(t) {
            e.$menuInner.attr("aria-expanded", !1), e.$element.trigger("hide.bs.select", t)
          },
          "hidden.bs.dropdown": function(t) {
            e.$element.trigger("hidden.bs.select", t)
          },
          "show.bs.dropdown": function(t) {
            e.$menuInner.attr("aria-expanded", !0), e.$element.trigger("show.bs.select", t)
          },
          "shown.bs.dropdown": function(t) {
            e.$element.trigger("shown.bs.select", t)
          }
        }), e.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
          e.$button.addClass("bs-invalid").focus(), e.$element.on({
            "focus.bs.select": function() {
              e.$button.focus(), e.$element.off("focus.bs.select")
            },
            "shown.bs.select": function() {
              e.$element.val(e.$element.val()).off("shown.bs.select")
            },
            "rendered.bs.select": function() {
              this.validity.valid && e.$button.removeClass("bs-invalid"), e.$element.off("rendered.bs.select")
            }
          })
        }), setTimeout(function() {
          e.$element.trigger("loaded.bs.select")
        })
      },
      createDropdown: function() {
        var e = this.multiple || this.options.showTick ? " show-tick" : "",
          i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
          n = this.autofocus ? " autofocus" : "",
          o = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
          r = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + l(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
          s = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
          a = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
          c = '<div class="btn-group bootstrap-select' + e + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + n + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + o + r + s + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + a + "</div></div>";
        return t(c)
      },
      createView: function() {
        var t = this.createDropdown(),
          e = this.createLi();
        return t.find("ul")[0].innerHTML = e, t
      },
      reloadLi: function() {
        var t = this.createLi();
        this.$menuInner[0].innerHTML = t
      },
      createLi: function() {
        var i = this,
          n = [],
          o = 0,
          r = document.createElement("option"),
          s = -1,
          a = function(t, e, i, n) {
            return "<li" + ("undefined" != typeof i & "" !== i ? ' class="' + i + '"' : "") + ("undefined" != typeof e & null !== e ? ' data-original-index="' + e + '"' : "") + ("undefined" != typeof n & null !== n ? 'data-optgroup="' + n + '"' : "") + ">" + t + "</li>"
          },
          c = function(n, o, r, s) {
            return '<a tabindex="0"' + ("undefined" != typeof o ? ' class="' + o + '"' : "") + (r ? ' style="' + r + '"' : "") + (i.options.liveSearchNormalize ? ' data-normalized-text="' + e(l(t(n).html())) + '"' : "") + ("undefined" != typeof s || null !== s ? ' data-tokens="' + s + '"' : "") + ' role="option">' + n + '<span class="' + i.options.iconBase + " " + i.options.tickIcon + ' check-mark"></span></a>'
          };
        if (this.options.title && !this.multiple && (s--, !this.$element.find(".bs-title-option").length)) {
          var h = this.$element[0];
          r.className = "bs-title-option", r.innerHTML = this.options.title, r.value = "", h.insertBefore(r, h.firstChild);
          var u = t(h.options[h.selectedIndex]);
          void 0 === u.attr("selected") && void 0 === this.$element.data("selected") && (r.selected = !0)
        }
        return this.$element.find("option").each(function(e) {
          var r = t(this);
          if (s++, !r.hasClass("bs-title-option")) {
            var h = this.className || "",
              u = this.style.cssText,
              d = r.data("content") ? r.data("content") : r.html(),
              p = r.data("tokens") ? r.data("tokens") : null,
              f = "undefined" != typeof r.data("subtext") ? '<small class="text-muted">' + r.data("subtext") + "</small>" : "",
              g = "undefined" != typeof r.data("icon") ? '<span class="' + i.options.iconBase + " " + r.data("icon") + '"></span> ' : "",
              m = r.parent(),
              v = "OPTGROUP" === m[0].tagName,
              y = v && m[0].disabled,
              b = this.disabled || y;
            if ("" !== g && b && (g = "<span>" + g + "</span>"), i.options.hideDisabled && (b && !v || y)) return void s--;
            if (r.data("content") || (d = g + '<span class="text">' + d + f + "</span>"), v && r.data("divider") !== !0) {
              if (i.options.hideDisabled && b) {
                if (void 0 === m.data("allOptionsDisabled")) {
                  var x = m.children();
                  m.data("allOptionsDisabled", x.filter(":disabled").length === x.length)
                }
                if (m.data("allOptionsDisabled")) return void s--
              }
              var w = " " + m[0].className || "";
              if (0 === r.index()) {
                o += 1;
                var C = m[0].label,
                  S = "undefined" != typeof m.data("subtext") ? '<small class="text-muted">' + m.data("subtext") + "</small>" : "",
                  _ = m.data("icon") ? '<span class="' + i.options.iconBase + " " + m.data("icon") + '"></span> ' : "";
                C = _ + '<span class="text">' + l(C) + S + "</span>", 0 !== e && n.length > 0 && (s++, n.push(a("", null, "divider", o + "div"))), s++, n.push(a(C, null, "dropdown-header" + w, o))
              }
              if (i.options.hideDisabled && b) return void s--;
              n.push(a(c(d, "opt " + h + w, u, p), e, "", o))
            } else if (r.data("divider") === !0) n.push(a("", e, "divider"));
            else if (r.data("hidden") === !0) n.push(a(c(d, h, u, p), e, "hidden is-hidden"));
            else {
              var k = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;
              if (!k && i.options.hideDisabled)
                for (var T = t(this).prevAll(), O = 0; O < T.length; O++)
                  if ("OPTGROUP" === T[O].tagName) {
                    for (var j = 0, E = 0; E < O; E++) {
                      var A = T[E];
                      (A.disabled || t(A).data("hidden") === !0) && j++
                    }
                    j === O && (k = !0);
                    break
                  }
              k && (s++, n.push(a("", null, "divider", o + "div"))), n.push(a(c(d, h, u, p), e))
            }
            i.liObj[e] = s
          }
        }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), n.join("")
      },
      findLis: function() {
        return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
      },
      render: function(e) {
        var i, n = this;
        e !== !1 && this.$element.find("option").each(function(t) {
          var e = n.findLis().eq(n.liObj[t]);
          n.setDisabled(t, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, e), n.setSelected(t, this.selected, e)
        }), this.togglePlaceholder(), this.tabIndex();
        var o = this.$element.find("option").map(function() {
            if (this.selected) {
              if (n.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
              var e, i = t(this),
                o = i.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + i.data("icon") + '"></i> ' : "";
              return e = n.options.showSubtext && i.data("subtext") && !n.multiple ? ' <small class="text-muted">' + i.data("subtext") + "</small>" : "", "undefined" != typeof i.attr("title") ? i.attr("title") : i.data("content") && n.options.showContent ? i.data("content").toString() : o + i.html() + e
            }
          }).toArray(),
          r = this.multiple ? o.join(this.options.multipleSeparator) : o[0];
        if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
          var s = this.options.selectedTextFormat.split(">");
          if (s.length > 1 && o.length > s[1] || 1 == s.length && o.length >= 2) {
            i = this.options.hideDisabled ? ", [disabled]" : "";
            var a = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + i).length,
              l = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o.length, a) : this.options.countSelectedText;
            r = l.replace("{0}", o.length.toString()).replace("{1}", a.toString())
          }
        }
        void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (r = this.options.title), r || (r = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", c(t.trim(r.replace(/<[^>]*>?/g, "")))), this.$button.children(".filter-option").html(r), this.$element.trigger("rendered.bs.select")
      },
      setStyle: function(t, e) {
        this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
        var i = t ? t : this.options.style;
        "add" == e ? this.$button.addClass(i) : "remove" == e ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
      },
      liHeight: function(e) {
        if (e || this.options.size !== !1 && !this.sizeInfo) {
          var i = document.createElement("div"),
            n = document.createElement("div"),
            o = document.createElement("ul"),
            r = document.createElement("li"),
            s = document.createElement("li"),
            a = document.createElement("a"),
            l = document.createElement("span"),
            c = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
            h = this.options.liveSearch ? document.createElement("div") : null,
            u = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
            d = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
          if (l.className = "text", i.className = this.$menu[0].parentNode.className + " open", n.className = "dropdown-menu open", o.className = "dropdown-menu inner", r.className = "divider", l.appendChild(document.createTextNode("Inner text")), a.appendChild(l), s.appendChild(a), o.appendChild(s), o.appendChild(r), c && n.appendChild(c), h) {
            var p = document.createElement("span");
            h.className = "bs-searchbox", p.className = "form-control", h.appendChild(p), n.appendChild(h)
          }
          u && n.appendChild(u), n.appendChild(o), d && n.appendChild(d), i.appendChild(n), document.body.appendChild(i);
          var f = a.offsetHeight,
            g = c ? c.offsetHeight : 0,
            m = h ? h.offsetHeight : 0,
            v = u ? u.offsetHeight : 0,
            y = d ? d.offsetHeight : 0,
            b = t(r).outerHeight(!0),
            x = "function" == typeof getComputedStyle && getComputedStyle(n),
            w = x ? null : t(n),
            C = {
              vert: parseInt(x ? x.paddingTop : w.css("paddingTop")) + parseInt(x ? x.paddingBottom : w.css("paddingBottom")) + parseInt(x ? x.borderTopWidth : w.css("borderTopWidth")) + parseInt(x ? x.borderBottomWidth : w.css("borderBottomWidth")),
              horiz: parseInt(x ? x.paddingLeft : w.css("paddingLeft")) + parseInt(x ? x.paddingRight : w.css("paddingRight")) + parseInt(x ? x.borderLeftWidth : w.css("borderLeftWidth")) + parseInt(x ? x.borderRightWidth : w.css("borderRightWidth"))
            },
            S = {
              vert: C.vert + parseInt(x ? x.marginTop : w.css("marginTop")) + parseInt(x ? x.marginBottom : w.css("marginBottom")) + 2,
              horiz: C.horiz + parseInt(x ? x.marginLeft : w.css("marginLeft")) + parseInt(x ? x.marginRight : w.css("marginRight")) + 2
            };
          document.body.removeChild(i), this.sizeInfo = {
            liHeight: f,
            headerHeight: g,
            searchHeight: m,
            actionsHeight: v,
            doneButtonHeight: y,
            dividerHeight: b,
            menuPadding: C,
            menuExtras: S
          }
        }
      },
      setSize: function() {
        if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
          var e, i, n, o, r, s, a, l, c = this,
            h = this.$menu,
            u = this.$menuInner,
            d = t(window),
            p = this.$newElement[0].offsetHeight,
            f = this.$newElement[0].offsetWidth,
            g = this.sizeInfo.liHeight,
            m = this.sizeInfo.headerHeight,
            v = this.sizeInfo.searchHeight,
            y = this.sizeInfo.actionsHeight,
            b = this.sizeInfo.doneButtonHeight,
            x = this.sizeInfo.dividerHeight,
            w = this.sizeInfo.menuPadding,
            C = this.sizeInfo.menuExtras,
            S = this.options.hideDisabled ? ".disabled" : "",
            _ = function() {
              var e, i = c.$newElement.offset(),
                n = t(c.options.container);
              c.options.container && !n.is("body") ? (e = n.offset(), e.top += parseInt(n.css("borderTopWidth")), e.left += parseInt(n.css("borderLeftWidth"))) : e = {
                top: 0,
                left: 0
              };
              var o = c.options.windowPadding;
              r = i.top - e.top - d.scrollTop(), s = d.height() - r - p - e.top - o[2], a = i.left - e.left - d.scrollLeft(), l = d.width() - a - f - e.left - o[1], r -= o[0], a -= o[3]
            };
          if (_(), "auto" === this.options.size) {
            var k = function() {
              var d, p = function(e, i) {
                  return function(n) {
                    return i ? n.classList ? n.classList.contains(e) : t(n).hasClass(e) : !(n.classList ? n.classList.contains(e) : t(n).hasClass(e))
                  }
                },
                x = c.$menuInner[0].getElementsByTagName("li"),
                S = Array.prototype.filter ? Array.prototype.filter.call(x, p("hidden", !1)) : c.$lis.not(".hidden"),
                k = Array.prototype.filter ? Array.prototype.filter.call(S, p("dropdown-header", !0)) : S.filter(".dropdown-header");
              _(), e = s - C.vert, i = l - C.horiz, c.options.container ? (h.data("height") || h.data("height", h.height()), n = h.data("height"), h.data("width") || h.data("width", h.width()), o = h.data("width")) : (n = h.height(), o = h.width()), c.options.dropupAuto && c.$newElement.toggleClass("dropup", r > s && e - C.vert < n), c.$newElement.hasClass("dropup") && (e = r - C.vert), "auto" === c.options.dropdownAlignRight && h.toggleClass("dropdown-menu-right", a > l && i - C.horiz < o - f), d = S.length + k.length > 3 ? 3 * g + C.vert - 2 : 0, h.css({
                "max-height": e + "px",
                overflow: "hidden",
                "min-height": d + m + v + y + b + "px"
              }), u.css({
                "max-height": e - m - v - y - b - w.vert + "px",
                "overflow-y": "auto",
                "min-height": Math.max(d - w.vert, 0) + "px"
              })
            };
            k(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", k), d.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", k)
          } else if (this.options.size && "auto" != this.options.size && this.$lis.not(S).length > this.options.size) {
            var T = this.$lis.not(".divider").not(S).children().slice(0, this.options.size).last().parent().index(),
              O = this.$lis.slice(0, T + 1).filter(".divider").length;
            e = g * this.options.size + O * x + w.vert, c.options.container ? (h.data("height") || h.data("height", h.height()), n = h.data("height")) : n = h.height(), c.options.dropupAuto && this.$newElement.toggleClass("dropup", r > s && e - C.vert < n), h.css({
              "max-height": e + m + v + y + b + "px",
              overflow: "hidden",
              "min-height": ""
            }), u.css({
              "max-height": e - w.vert + "px",
              "overflow-y": "auto",
              "min-height": ""
            })
          }
        }
      },
      setWidth: function() {
        if ("auto" === this.options.width) {
          this.$menu.css("min-width", "0");
          var t = this.$menu.parent().clone().appendTo("body"),
            e = this.options.container ? this.$newElement.clone().appendTo("body") : t,
            i = t.children(".dropdown-menu").outerWidth(),
            n = e.css("width", "auto").children("button").outerWidth();
          t.remove(), e.remove(), this.$newElement.css("width", Math.max(i, n) + "px")
        } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
        this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
      },
      selectPosition: function() {
        this.$bsContainer = t('<div class="bs-container" />');
        var e, i, n, o = this,
          r = t(this.options.container),
          s = function(t) {
            o.$bsContainer.addClass(t.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), r.is("body") ? i = {
              top: 0,
              left: 0
            } : (i = r.offset(), i.top += parseInt(r.css("borderTopWidth")) - r.scrollTop(), i.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft()), n = t.hasClass("dropup") ? 0 : t[0].offsetHeight, o.$bsContainer.css({
              top: e.top - i.top + n,
              left: e.left - i.left,
              width: t[0].offsetWidth
            })
          };
        this.$button.on("click", function() {
          var e = t(this);
          o.isDisabled() || (s(o.$newElement), o.$bsContainer.appendTo(o.options.container).toggleClass("open", !e.hasClass("open")).append(o.$menu))
        }), t(window).on("resize scroll", function() {
          s(o.$newElement)
        }), this.$element.on("hide.bs.select", function() {
          o.$menu.data("height", o.$menu.height()), o.$bsContainer.detach()
        })
      },
      setSelected: function(t, e, i) {
        i || (this.togglePlaceholder(), i = this.findLis().eq(this.liObj[t])), i.toggleClass("selected", e).find("a").attr("aria-selected", e)
      },
      setDisabled: function(t, e, i) {
        i || (i = this.findLis().eq(this.liObj[t])), e ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1)
      },
      isDisabled: function() {
        return this.$element[0].disabled
      },
      checkDisabled: function() {
        var t = this;
        this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), this.$button.attr("tabindex") != -1 || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
          return !t.isDisabled()
        })
      },
      togglePlaceholder: function() {
        var t = this.$element.val();
        this.$button.toggleClass("bs-placeholder", null === t || "" === t || t.constructor === Array && 0 === t.length)
      },
      tabIndex: function() {
        this.$element.data("tabindex") !== this.$element.attr("tabindex") && this.$element.attr("tabindex") !== -98 && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
      },
      clickListener: function() {
        var e = this,
          i = t(document);
        i.data("spaceSelect", !1), this.$button.on("keyup", function(t) {
          /(32)/.test(t.keyCode.toString(10)) && i.data("spaceSelect") && (t.preventDefault(), i.data("spaceSelect", !1))
        }), this.$button.on("click", function() {
          e.setSize()
        }), this.$element.on("shown.bs.select", function() {
          if (e.options.liveSearch || e.multiple) {
            if (!e.multiple) {
              var t = e.liObj[e.$element[0].selectedIndex];
              if ("number" != typeof t || e.options.size === !1) return;
              var i = e.$lis.eq(t)[0].offsetTop - e.$menuInner[0].offsetTop;
              i = i - e.$menuInner[0].offsetHeight / 2 + e.sizeInfo.liHeight / 2, e.$menuInner[0].scrollTop = i
            }
          } else e.$menuInner.find(".selected a").focus()
        }), this.$menuInner.on("click", "li a", function(i) {
          var n = t(this),
            r = n.parent().data("originalIndex"),
            s = e.$element.val(),
            a = e.$element.prop("selectedIndex"),
            l = !0;
          if (e.multiple && 1 !== e.options.maxOptions && i.stopPropagation(), i.preventDefault(), !e.isDisabled() && !n.parent().hasClass("disabled")) {
            var c = e.$element.find("option"),
              h = c.eq(r),
              u = h.prop("selected"),
              d = h.parent("optgroup"),
              p = e.options.maxOptions,
              f = d.data("maxOptions") || !1;
            if (e.multiple) {
              if (h.prop("selected", !u), e.setSelected(r, !u), n.blur(), p !== !1 || f !== !1) {
                var g = p < c.filter(":selected").length,
                  m = f < d.find("option:selected").length;
                if (p && g || f && m)
                  if (p && 1 == p) c.prop("selected", !1), h.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected"), e.setSelected(r, !0);
                  else if (f && 1 == f) {
                    d.find("option:selected").prop("selected", !1), h.prop("selected", !0);
                    var v = n.parent().data("optgroup");
                    e.$menuInner.find('[data-optgroup="' + v + '"]').removeClass("selected"), e.setSelected(r, !0)
                  } else {
                    var y = "string" == typeof e.options.maxOptionsText ? [e.options.maxOptionsText, e.options.maxOptionsText] : e.options.maxOptionsText,
                      b = "function" == typeof y ? y(p, f) : y,
                      x = b[0].replace("{n}", p),
                      w = b[1].replace("{n}", f),
                      C = t('<div class="notify"></div>');
                    b[2] && (x = x.replace("{var}", b[2][p > 1 ? 0 : 1]), w = w.replace("{var}", b[2][f > 1 ? 0 : 1])), h.prop("selected", !1), e.$menu.append(C), p && g && (C.append(t("<div>" + x + "</div>")), l = !1, e.$element.trigger("maxReached.bs.select")), f && m && (C.append(t("<div>" + w + "</div>")), l = !1, e.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                      e.setSelected(r, !1)
                    }, 10), C.delay(750).fadeOut(300, function() {
                      t(this).remove()
                    })
                  }
              }
            } else c.prop("selected", !1), h.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), e.setSelected(r, !0);
            !e.multiple || e.multiple && 1 === e.options.maxOptions ? e.$button.focus() : e.options.liveSearch && e.$searchbox.focus(), l && (s != e.$element.val() && e.multiple || a != e.$element.prop("selectedIndex") && !e.multiple) && (o = [r, h.prop("selected"), u], e.$element.triggerNative("change"))
          }
        }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(i) {
          i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), e.options.liveSearch && !t(i.target).hasClass("close") ? e.$searchbox.focus() : e.$button.focus())
        }), this.$menuInner.on("click", ".divider, .dropdown-header", function(t) {
          t.preventDefault(), t.stopPropagation(), e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus()
        }), this.$menu.on("click", ".popover-title .close", function() {
          e.$button.click()
        }), this.$searchbox.on("click", function(t) {
          t.stopPropagation()
        }), this.$menu.on("click", ".actions-btn", function(i) {
          e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus(), i.preventDefault(), i.stopPropagation(), t(this).hasClass("bs-select-all") ? e.selectAll() : e.deselectAll()
        }), this.$element.change(function() {
          e.render(!1), e.$element.trigger("changed.bs.select", o), o = null
        })
      },
      liveSearchListener: function() {
        var i = this,
          n = t('<li class="no-results"></li>');
        this.$button.on("click.dropdown.data-api", function() {
          i.$menuInner.find(".active").removeClass("active"), i.$searchbox.val() && (i.$searchbox.val(""), i.$lis.not(".is-hidden").removeClass("hidden"), n.parent().length && n.remove()), i.multiple || i.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
            i.$searchbox.focus()
          }, 10)
        }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(t) {
          t.stopPropagation()
        }), this.$searchbox.on("input propertychange", function() {
          if (i.$lis.not(".is-hidden").removeClass("hidden"), i.$lis.filter(".active").removeClass("active"), n.remove(), i.$searchbox.val()) {
            var o, r = i.$lis.not(".is-hidden, .divider, .dropdown-header");
            if (o = i.options.liveSearchNormalize ? r.not(":a" + i._searchStyle() + '("' + e(i.$searchbox.val()) + '")') : r.not(":" + i._searchStyle() + '("' + i.$searchbox.val() + '")'), o.length === r.length) n.html(i.options.noneResultsText.replace("{0}", '"' + l(i.$searchbox.val()) + '"')), i.$menuInner.append(n), i.$lis.addClass("hidden");
            else {
              o.addClass("hidden");
              var s, a = i.$lis.not(".hidden");
              a.each(function(e) {
                var i = t(this);
                i.hasClass("divider") ? void 0 === s ? i.addClass("hidden") : (s && s.addClass("hidden"), s = i) : i.hasClass("dropdown-header") && a.eq(e + 1).data("optgroup") !== i.data("optgroup") ? i.addClass("hidden") : s = null
              }), s && s.addClass("hidden"), r.not(".hidden").first().addClass("active")
            }
          }
        })
      },
      _searchStyle: function() {
        var t = {
          begins: "ibegins",
          startsWith: "ibegins"
        };
        return t[this.options.liveSearchStyle] || "icontains"
      },
      val: function(t) {
        return "undefined" != typeof t ? (this.$element.val(t), this.render(), this.$element) : this.$element.val()
      },
      changeAll: function(e) {
        if (this.multiple) {
          "undefined" == typeof e && (e = !0), this.findLis();
          var i = this.$element.find("option"),
            n = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
            o = n.length,
            r = [];
          if (e) {
            if (n.filter(".selected").length === n.length) return
          } else if (0 === n.filter(".selected").length) return;
          n.toggleClass("selected", e);
          for (var s = 0; s < o; s++) {
            var a = n[s].getAttribute("data-original-index");
            r[r.length] = i.eq(a)[0]
          }
          t(r).prop("selected", e), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change")
        }
      },
      selectAll: function() {
        return this.changeAll(!0)
      },
      deselectAll: function() {
        return this.changeAll(!1)
      },
      toggle: function(t) {
        t = t || window.event, t && t.stopPropagation(), this.$button.trigger("click")
      },
      keydown: function(i) {
        var n, o, r, s, a, l, c, h, u, d = t(this),
          p = d.is("input") ? d.parent().parent() : d.parent(),
          f = p.data("this"),
          g = ":not(.disabled, .hidden, .dropdown-header, .divider)",
          m = {
            32: " ",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9"
          };
        if (f.options.liveSearch && (p = d.parent().parent()), f.options.container && (p = f.$menu), n = t('[role="listbox"] li', p), u = f.$newElement.hasClass("open"), !u && (i.keyCode >= 48 && i.keyCode <= 57 || i.keyCode >= 96 && i.keyCode <= 105 || i.keyCode >= 65 && i.keyCode <= 90)) return f.options.container ? f.$button.trigger("click") : (f.setSize(), f.$menu.parent().addClass("open"), u = !0), void f.$searchbox.focus();
        if (f.options.liveSearch && (/(^9$|27)/.test(i.keyCode.toString(10)) && u && (i.preventDefault(), i.stopPropagation(), f.$menuInner.click(), f.$button.focus()), n = t('[role="listbox"] li' + g, p), d.val() || /(38|40)/.test(i.keyCode.toString(10)) || 0 === n.filter(".active").length && (n = f.$menuInner.find("li"), n = f.options.liveSearchNormalize ? n.filter(":a" + f._searchStyle() + "(" + e(m[i.keyCode]) + ")") : n.filter(":" + f._searchStyle() + "(" + m[i.keyCode] + ")"))), n.length) {
          if (/(38|40)/.test(i.keyCode.toString(10))) o = n.index(n.find("a").filter(":focus").parent()), s = n.filter(g).first().index(), a = n.filter(g).last().index(), r = n.eq(o).nextAll(g).eq(0).index(), l = n.eq(o).prevAll(g).eq(0).index(), c = n.eq(r).prevAll(g).eq(0).index(), f.options.liveSearch && (n.each(function(e) {
            t(this).hasClass("disabled") || t(this).data("index", e)
          }), o = n.index(n.filter(".active")), s = n.first().data("index"), a = n.last().data("index"), r = n.eq(o).nextAll().eq(0).data("index"), l = n.eq(o).prevAll().eq(0).data("index"), c = n.eq(r).prevAll().eq(0).data("index")), h = d.data("prevIndex"), 38 == i.keyCode ? (f.options.liveSearch && o--, o != c && o > l && (o = l), o < s && (o = s), o == h && (o = a)) : 40 == i.keyCode && (f.options.liveSearch && o++, o == -1 && (o = 0), o != c && o < r && (o = r), o > a && (o = a), o == h && (o = s)), d.data("prevIndex", o), f.options.liveSearch ? (i.preventDefault(), d.hasClass("dropdown-toggle") || (n.removeClass("active").eq(o).addClass("active").children("a").focus(), d.focus())) : n.eq(o).children("a").focus();
          else if (!d.is("input")) {
            var v, y, b = [];
            n.each(function() {
              t(this).hasClass("disabled") || t.trim(t(this).children("a").text().toLowerCase()).substring(0, 1) == m[i.keyCode] && b.push(t(this).index())
            }), v = t(document).data("keycount"), v++, t(document).data("keycount", v), y = t.trim(t(":focus").text().toLowerCase()).substring(0, 1), y != m[i.keyCode] ? (v = 1, t(document).data("keycount", v)) : v >= b.length && (t(document).data("keycount", 0), v > b.length && (v = 1)), n.eq(b[v - 1]).children("a").focus()
          }
          if ((/(13|32)/.test(i.keyCode.toString(10)) || /(^9$)/.test(i.keyCode.toString(10)) && f.options.selectOnTab) && u) {
            if (/(32)/.test(i.keyCode.toString(10)) || i.preventDefault(), f.options.liveSearch) /(32)/.test(i.keyCode.toString(10)) || (f.$menuInner.find(".active a").click(), d.focus());
            else {
              var x = t(":focus");
              x.click(), x.focus(), i.preventDefault(), t(document).data("spaceSelect", !0)
            }
            t(document).data("keycount", 0)
          }(/(^9$|27)/.test(i.keyCode.toString(10)) && u && (f.multiple || f.options.liveSearch) || /(27)/.test(i.keyCode.toString(10)) && !u) && (f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus())
        }
      },
      mobile: function() {
        this.$element.addClass("mobile-device")
      },
      refresh: function() {
        this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
      },
      hide: function() {
        this.$newElement.hide()
      },
      show: function() {
        this.$newElement.show()
      },
      remove: function() {
        this.$newElement.remove(), this.$element.remove()
      },
      destroy: function() {
        this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
      }
    };
    var u = t.fn.selectpicker;
    t.fn.selectpicker = i, t.fn.selectpicker.Constructor = h, t.fn.selectpicker.noConflict = function() {
      return t.fn.selectpicker = u, this
    }, t(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', h.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function(t) {
      t.stopPropagation()
    }), t(window).on("load.bs.select.data-api", function() {
      t(".selectpicker").each(function() {
        var e = t(this);
        i.call(e, e.data())
      })
    })
  }(t)
});
var __extends = this && this.__extends || function(t, e) {
  function i() {
    this.constructor = t
  }
  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
  t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
};
! function(t) {
  function e(t, e, i) {
    void 0 !== e[t] && (null === e[t] ? delete i[t] : i[t] = e[t])
  }

  function i(e) {
    if (null != t.enabled && !t.enabled || null != t.maxMessages && 1 > t.maxMessages) return !1;
    try {
      if (e.userAgentRegex && !new RegExp(e.userAgentRegex).test(navigator.userAgent)) return !1
    } catch (t) {}
    try {
      if (e.ipRegex && t.clientIP && !new RegExp(e.ipRegex).test(t.clientIP)) return !1
    } catch (t) {}
    return !0
  }

  function n(t, e) {
    try {
      if (t.disallow && new RegExp(t.disallow).test(e)) return !1
    } catch (t) {}
    return !0
  }

  function o(t) {
    return "function" == typeof t ? t instanceof RegExp ? t.toString() : t() : t
  }

  function r(e) {
    e = o(e);
    var i;
    switch (typeof e) {
      case "string":
        return new s(e, null, e);
      case "number":
        return i = e.toString(), new s(i, null, i);
      case "boolean":
        return i = e.toString(), new s(i, null, i);
      case "undefined":
        return new s("undefined", null, "undefined");
      case "object":
        return e instanceof RegExp || e instanceof String || e instanceof Number || e instanceof Boolean ? (i = e.toString(), new s(i, null, i)) : (i = "function" == typeof t.serialize ? t.serialize.call(this, e) : JSON.stringify(e), new s(null, e, i));
      default:
        return new s("unknown", null, "unknown")
    }
  }
  t.requestId = "";
  var s = function() {
    return function(t, e, i) {
      this.msg = t, this.meta = e, this.finalString = i
    }
  }();
  t.setOptions = function(t) {
    return e("enabled", t, this), e("maxMessages", t, this), e("defaultAjaxUrl", t, this), e("clientIP", t, this), e("requestId", t, this), e("defaultBeforeSend", t, this), e("serialize", t, this), this
  }, t.getAllLevel = function() {
    return -2147483648
  }, t.getTraceLevel = function() {
    return 1e3
  }, t.getDebugLevel = function() {
    return 2e3
  }, t.getInfoLevel = function() {
    return 3e3
  }, t.getWarnLevel = function() {
    return 4e3
  }, t.getErrorLevel = function() {
    return 5e3
  }, t.getFatalLevel = function() {
    return 6e3
  }, t.getOffLevel = function() {
    return 2147483647
  };
  var a = function() {
    return function(t, e) {
      this.inner = e, this.name = "JL.Exception", this.message = r(t).finalString
    }
  }();
  t.Exception = a, a.prototype = Error();
  var l = function() {
    return function(t, e, i, n) {
      this.l = t, this.m = e, this.n = i, this.t = n
    }
  }();
  t.LogItem = l, a = function() {
    function o(e, i) {
      this.appenderName = e, this.sendLogItems = i, this.level = t.getTraceLevel(), this.sendWithBufferLevel = 2147483647, this.storeInBufferLevel = -2147483648, this.bufferSize = 0, this.batchSize = 1, this.buffer = [], this.batchBuffer = []
    }
    return o.prototype.setOptions = function(t) {
      return e("level", t, this), e("ipRegex", t, this), e("userAgentRegex", t, this), e("disallow", t, this), e("sendWithBufferLevel", t, this), e("storeInBufferLevel", t, this), e("bufferSize", t, this), e("batchSize", t, this), this.bufferSize < this.buffer.length && (this.buffer.length = this.bufferSize), this
    }, o.prototype.log = function(t, e, o, r, s, a, c) {
      !i(this) || !n(this, a) || s < this.storeInBufferLevel || (t = new l(s, a, c, (new Date).getTime()), s < this.level ? 0 < this.bufferSize && (this.buffer.push(t), this.buffer.length > this.bufferSize && this.buffer.shift()) : (s < this.sendWithBufferLevel || !this.buffer.length || (this.batchBuffer = this.batchBuffer.concat(this.buffer), this.buffer.length = 0), this.batchBuffer.push(t), this.batchBuffer.length >= this.batchSize && this.sendBatch()))
    }, o.prototype.sendBatch = function() {
      0 == this.batchBuffer.length || null != t.maxMessages && 1 > t.maxMessages || (null != t.maxMessages && (t.maxMessages -= this.batchBuffer.length), this.sendLogItems(this.batchBuffer), this.batchBuffer.length = 0)
    }, o
  }(), t.Appender = a;
  var c = function(i) {
    function n(t) {
      i.call(this, t, n.prototype.sendLogItemsAjax)
    }
    return __extends(n, i), n.prototype.setOptions = function(t) {
      return e("url", t, this),
        e("beforeSend", t, this), i.prototype.setOptions.call(this, t), this
    }, n.prototype.sendLogItemsAjax = function(e) {
      try {
        var i = "/jsnlog.logger";
        null != t.defaultAjaxUrl && (i = t.defaultAjaxUrl), this.url && (i = this.url);
        var n = this.getXhr(i),
          o = {
            r: t.requestId,
            lg: e
          };
        "function" == typeof this.beforeSend ? this.beforeSend.call(this, n, o) : "function" == typeof t.defaultBeforeSend && t.defaultBeforeSend.call(this, n, o);
        var r = JSON.stringify(o);
        n.send(r)
      } catch (t) {}
    }, n.prototype.getXhr = function(e) {
      var i = new XMLHttpRequest;
      return "withCredentials" in i || "undefined" == typeof XDomainRequest ? (i.open("POST", e), i.setRequestHeader("Content-Type", "application/json"), i.setRequestHeader("JSNLog-RequestId", t.requestId), i) : (i = new XDomainRequest, i.open("POST", e), i)
    }, n
  }(a);
  t.AjaxAppender = c;
  var h = function(e) {
    function i(t) {
      e.call(this, t, i.prototype.sendLogItemsConsole)
    }
    return __extends(i, e), i.prototype.clog = function(t) {
      console.log(t)
    }, i.prototype.cerror = function(t) {
      console.error ? console.error(t) : this.clog(t)
    }, i.prototype.cwarn = function(t) {
      console.warn ? console.warn(t) : this.clog(t)
    }, i.prototype.cinfo = function(t) {
      console.info ? console.info(t) : this.clog(t)
    }, i.prototype.cdebug = function(t) {
      console.debug ? console.debug(t) : this.cinfo(t)
    }, i.prototype.sendLogItemsConsole = function(e) {
      try {
        if (console) {
          var i;
          for (i = 0; i < e.length; ++i) {
            var n = e[i],
              o = n.n + ": " + n.m;
            "undefined" == typeof window && (o = new Date(n.t) + " | " + o), n.l <= t.getDebugLevel() ? this.cdebug(o) : n.l <= t.getInfoLevel() ? this.cinfo(o) : n.l <= t.getWarnLevel() ? this.cwarn(o) : this.cerror(o)
          }
        }
      } catch (t) {}
    }, i
  }(a);
  t.ConsoleAppender = h, a = function() {
    function t(t) {
      this.loggerName = t, this.seenRegexes = []
    }
    return t.prototype.setOptions = function(t) {
      return e("level", t, this), e("userAgentRegex", t, this), e("disallow", t, this), e("ipRegex", t, this), e("appenders", t, this), e("onceOnly", t, this), this.seenRegexes = [], this
    }, t.prototype.buildExceptionObject = function(t) {
      var e = {};
      return t.stack ? e.stack = t.stack : e.e = t, t.message && (e.message = t.message), t.name && (e.name = t.name), t.data && (e.data = t.data), t.inner && (e.inner = this.buildExceptionObject(t.inner)), e
    }, t.prototype.log = function(t, e, s) {
      var a = 0;
      if (!this.appenders) return this;
      if (t >= this.level && i(this) && (s ? (a = this.buildExceptionObject(s), a.logData = o(e)) : a = e, e = r(a), n(this, e.finalString))) {
        if (this.onceOnly)
          for (a = this.onceOnly.length - 1; 0 <= a;) {
            if (new RegExp(this.onceOnly[a]).test(e.finalString)) {
              if (this.seenRegexes[a]) return this;
              this.seenRegexes[a] = !0
            }
            a--
          }
        for (e.meta = e.meta || {}, e.meta.loggerName = this.loggerName, a = this.appenders.length - 1; 0 <= a;) this.appenders[a].log(1e3 >= t ? "trace" : 2e3 >= t ? "debug" : 3e3 >= t ? "info" : 4e3 >= t ? "warn" : 5e3 >= t ? "error" : "fatal", e.msg, e.meta, function() {}, t, e.finalString, this.loggerName), a--
      }
      return this
    }, t.prototype.trace = function(t) {
      return this.log(1e3, t)
    }, t.prototype.debug = function(t) {
      return this.log(2e3, t)
    }, t.prototype.info = function(t) {
      return this.log(3e3, t)
    }, t.prototype.warn = function(t) {
      return this.log(4e3, t)
    }, t.prototype.error = function(t) {
      return this.log(5e3, t)
    }, t.prototype.fatal = function(t) {
      return this.log(6e3, t)
    }, t.prototype.fatalException = function(t, e) {
      return this.log(6e3, t, e)
    }, t
  }(), t.Logger = a, t.createAjaxAppender = function(t) {
    return new c(t)
  }, t.createConsoleAppender = function(t) {
    return new h(t)
  }, a = new c(""), "undefined" == typeof window && (a = new h("")), t.__ = new t.Logger(""), t.__.setOptions({
    level: t.getDebugLevel(),
    appenders: [a]
  })
}(JL || (JL = {})), "undefined" != typeof exports && (exports.JL = JL);
var define;
"function" == typeof define && define.amd && define("jsnlog", [], function() {
  return JL
}), "function" == typeof __jsnlog_configure && __jsnlog_configure(JL), "undefined" == typeof window || window.onerror || (window.onerror = function(t, e, i, n, o) {
  return JL("onerrorLogger").fatalException({
    msg: "Uncaught Exception",
    errorMsg: t,
    url: e,
    "line number": i,
    column: n
  }, o), !1
}), "undefined" == typeof window || window.onunhandledrejection || (window.onunhandledrejection = function(t) {
  return JL("onerrorLogger").fatalException({
    msg: "unhandledrejection",
    errorMsg: t.reason ? t.reason.message : null
  }, t.reason), !1
});
var fabric = fabric || {
  version: "1.7.7"
};
"undefined" != typeof exports && (exports.fabric = fabric), "undefined" != typeof document && "undefined" != typeof window ? (fabric.document = document, fabric.window = window, window.fabric = fabric) : (fabric.document = require("jsdom").jsdom(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E")), fabric.document.createWindow ? fabric.window = fabric.document.createWindow() : fabric.window = fabric.document.parentWindow), fabric.isTouchSupported = "ontouchstart" in fabric.document.documentElement, fabric.isLikelyNode = "undefined" != typeof Buffer && "undefined" == typeof window, fabric.SHARED_ATTRIBUTES = ["display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id"], fabric.DPI = 96, fabric.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:e[-+]?\\d+)?)", fabric.fontPaths = {}, fabric.iMatrix = [1, 0, 0, 1, 0, 0], fabric.charWidthsCache = {}, fabric.devicePixelRatio = fabric.window.devicePixelRatio || fabric.window.webkitDevicePixelRatio || fabric.window.mozDevicePixelRatio || 1,
  function() {
    function t(t, e) {
      if (this.__eventListeners[t]) {
        var i = this.__eventListeners[t];
        e ? i[i.indexOf(e)] = !1 : fabric.util.array.fill(i, !1)
      }
    }

    function e(t, e) {
      if (this.__eventListeners || (this.__eventListeners = {}), 1 === arguments.length)
        for (var i in t) this.on(i, t[i]);
      else this.__eventListeners[t] || (this.__eventListeners[t] = []), this.__eventListeners[t].push(e);
      return this
    }

    function i(e, i) {
      if (this.__eventListeners) {
        if (0 === arguments.length)
          for (e in this.__eventListeners) t.call(this, e);
        else if (1 === arguments.length && "object" == typeof arguments[0])
          for (var n in e) t.call(this, n, e[n]);
        else t.call(this, e, i);
        return this
      }
    }

    function n(t, e) {
      if (this.__eventListeners) {
        var i = this.__eventListeners[t];
        if (i) {
          for (var n = 0, o = i.length; n < o; n++) i[n] && i[n].call(this, e || {});
          return this.__eventListeners[t] = i.filter(function(t) {
            return t !== !1
          }), this
        }
      }
    }
    fabric.Observable = {
      observe: e,
      stopObserving: i,
      fire: n,
      on: e,
      off: i,
      trigger: n
    }
  }(), fabric.Collection = {
  _objects: [],
  add: function() {
    if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded)
      for (var t = 0, e = arguments.length; t < e; t++) this._onObjectAdded(arguments[t]);
    return this.renderOnAddRemove && this.renderAll(), this
  },
  insertAt: function(t, e, i) {
    var n = this.getObjects();
    return i ? n[e] = t : n.splice(e, 0, t), this._onObjectAdded && this._onObjectAdded(t), this.renderOnAddRemove && this.renderAll(), this
  },
  remove: function() {
    for (var t, e = this.getObjects(), i = !1, n = 0, o = arguments.length; n < o; n++) t = e.indexOf(arguments[n]), t !== -1 && (i = !0, e.splice(t, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[n]));
    return this.renderOnAddRemove && i && this.renderAll(), this
  },
  forEachObject: function(t, e) {
    for (var i = this.getObjects(), n = 0, o = i.length; n < o; n++) t.call(e, i[n], n, i);
    return this
  },
  getObjects: function(t) {
    return "undefined" == typeof t ? this._objects : this._objects.filter(function(e) {
      return e.type === t
    })
  },
  item: function(t) {
    return this.getObjects()[t]
  },
  isEmpty: function() {
    return 0 === this.getObjects().length
  },
  size: function() {
    return this.getObjects().length
  },
  contains: function(t) {
    return this.getObjects().indexOf(t) > -1
  },
  complexity: function() {
    return this.getObjects().reduce(function(t, e) {
      return t += e.complexity ? e.complexity() : 0
    }, 0)
  }
}, fabric.CommonMethods = {
  _setOptions: function(t) {
    for (var e in t) this.set(e, t[e])
  },
  _initGradient: function(t, e) {
    !t || !t.colorStops || t instanceof fabric.Gradient || this.set(e, new fabric.Gradient(t))
  },
  _initPattern: function(t, e, i) {
    !t || !t.source || t instanceof fabric.Pattern ? i && i() : this.set(e, new fabric.Pattern(t, i))
  },
  _initClipping: function(t) {
    if (t.clipTo && "string" == typeof t.clipTo) {
      var e = fabric.util.getFunctionBody(t.clipTo);
      "undefined" != typeof e && (this.clipTo = new Function("ctx", e))
    }
  },
  _setObject: function(t) {
    for (var e in t) this._set(e, t[e])
  },
  set: function(t, e) {
    return "object" == typeof t ? this._setObject(t) : "function" == typeof e && "clipTo" !== t ? this._set(t, e(this.get(t))) : this._set(t, e), this
  },
  _set: function(t, e) {
    this[t] = e
  },
  toggle: function(t) {
    var e = this.get(t);
    return "boolean" == typeof e && this.set(t, !e), this
  },
  get: function(t) {
    return this[t]
  }
},
  function(t) {
    var e = Math.sqrt,
      i = Math.atan2,
      n = Math.pow,
      o = Math.abs,
      r = Math.PI / 180;
    fabric.util = {
      removeFromArray: function(t, e) {
        var i = t.indexOf(e);
        return i !== -1 && t.splice(i, 1), t
      },
      getRandomInt: function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
      },
      degreesToRadians: function(t) {
        return t * r
      },
      radiansToDegrees: function(t) {
        return t / r
      },
      rotatePoint: function(t, e, i) {
        t.subtractEquals(e);
        var n = fabric.util.rotateVector(t, i);
        return new fabric.Point(n.x, n.y).addEquals(e)
      },
      rotateVector: function(t, e) {
        var i = Math.sin(e),
          n = Math.cos(e),
          o = t.x * n - t.y * i,
          r = t.x * i + t.y * n;
        return {
          x: o,
          y: r
        }
      },
      transformPoint: function(t, e, i) {
        return i ? new fabric.Point(e[0] * t.x + e[2] * t.y, e[1] * t.x + e[3] * t.y) : new fabric.Point(e[0] * t.x + e[2] * t.y + e[4], e[1] * t.x + e[3] * t.y + e[5])
      },
      makeBoundingBoxFromPoints: function(t) {
        var e = [t[0].x, t[1].x, t[2].x, t[3].x],
          i = fabric.util.array.min(e),
          n = fabric.util.array.max(e),
          o = Math.abs(i - n),
          r = [t[0].y, t[1].y, t[2].y, t[3].y],
          s = fabric.util.array.min(r),
          a = fabric.util.array.max(r),
          l = Math.abs(s - a);
        return {
          left: i,
          top: s,
          width: o,
          height: l
        }
      },
      invertTransform: function(t) {
        var e = 1 / (t[0] * t[3] - t[1] * t[2]),
          i = [e * t[3], -e * t[1], -e * t[2], e * t[0]],
          n = fabric.util.transformPoint({
            x: t[4],
            y: t[5]
          }, i, !0);
        return i[4] = -n.x, i[5] = -n.y, i
      },
      toFixed: function(t, e) {
        return parseFloat(Number(t).toFixed(e))
      },
      parseUnit: function(t, e) {
        var i = /\D{0,2}$/.exec(t),
          n = parseFloat(t);
        switch (e || (e = fabric.Text.DEFAULT_SVG_FONT_SIZE), i[0]) {
          case "mm":
            return n * fabric.DPI / 25.4;
          case "cm":
            return n * fabric.DPI / 2.54;
          case "in":
            return n * fabric.DPI;
          case "pt":
            return n * fabric.DPI / 72;
          case "pc":
            return n * fabric.DPI / 72 * 12;
          case "em":
            return n * e;
          default:
            return n
        }
      },
      falseFunction: function() {
        return !1
      },
      getKlass: function(t, e) {
        return t = fabric.util.string.camelize(t.charAt(0).toUpperCase() + t.slice(1)), fabric.util.resolveNamespace(e)[t]
      },
      resolveNamespace: function(e) {
        if (!e) return fabric;
        var i, n = e.split("."),
          o = n.length,
          r = t || fabric.window;
        for (i = 0; i < o; ++i) r = r[n[i]];
        return r
      },
      loadImage: function(t, e, i, n) {
        if (!t) return void(e && e.call(i, t));
        var o = fabric.util.createImage();
        o.onload = function() {
          e && e.call(i, o), o = o.onload = o.onerror = null
        }, o.onerror = function() {
          fabric.log("Error loading " + o.src), e && e.call(i, null, !0), o = o.onload = o.onerror = null
        }, 0 !== t.indexOf("data") && n && (o.crossOrigin = n), o.src = t
      },
      enlivenObjects: function(t, e, i, n) {
        function o() {
          ++s === a && e && e(r)
        }
        t = t || [];
        var r = [],
          s = 0,
          a = t.length,
          l = !0;
        return a ? void t.forEach(function(t, e) {
          if (!t || !t.type) return void o();
          var s = fabric.util.getKlass(t.type, i);
          s.fromObject(t, function(i, s) {
            s || (r[e] = i), n && n(t, i, s), o()
          }, l)
        }) : void(e && e(r))
      },
      enlivenPatterns: function(t, e) {
        function i() {
          ++o === r && e && e(n)
        }
        t = t || [];
        var n = [],
          o = 0,
          r = t.length;
        return r ? void t.forEach(function(t, e) {
          t && t.source ? new fabric.Pattern(t, function(t) {
            n[e] = t, i()
          }) : (n[e] = t, i())
        }) : void(e && e(n))
      },
      groupSVGElements: function(t, e, i) {
        var n;
        return n = new fabric.PathGroup(t, e), "undefined" != typeof i && n.setSourcePath(i), n
      },
      populateWithProperties: function(t, e, i) {
        if (i && "[object Array]" === Object.prototype.toString.call(i))
          for (var n = 0, o = i.length; n < o; n++) i[n] in t && (e[i[n]] = t[i[n]])
      },
      drawDashedLine: function(t, n, o, r, s, a) {
        var l = r - n,
          c = s - o,
          h = e(l * l + c * c),
          u = i(c, l),
          d = a.length,
          p = 0,
          f = !0;
        for (t.save(), t.translate(n, o), t.moveTo(0, 0), t.rotate(u), n = 0; h > n;) n += a[p++ % d], n > h && (n = h), t[f ? "lineTo" : "moveTo"](n, 0), f = !f;
        t.restore()
      },
      createCanvasElement: function(t) {
        return t || (t = fabric.document.createElement("canvas")), t.getContext || "undefined" == typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(t), t
      },
      createImage: function() {
        return fabric.isLikelyNode ? new(require("canvas").Image) : fabric.document.createElement("img")
      },
      createAccessors: function(t) {
        var e, i, n, o, r, s = t.prototype;
        for (e = s.stateProperties.length; e--;) i = s.stateProperties[e], n = i.charAt(0).toUpperCase() + i.slice(1), o = "set" + n, r = "get" + n, s[r] || (s[r] = function(t) {
          return new Function('return this.get("' + t + '")')
        }(i)), s[o] || (s[o] = function(t) {
          return new Function("value", 'return this.set("' + t + '", value)')
        }(i))
      },
      clipContext: function(t, e) {
        e.save(), e.beginPath(), t.clipTo(e), e.clip()
      },
      multiplyTransformMatrices: function(t, e, i) {
        return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], i ? 0 : t[0] * e[4] + t[2] * e[5] + t[4], i ? 0 : t[1] * e[4] + t[3] * e[5] + t[5]]
      },
      qrDecompose: function(t) {
        var o = i(t[1], t[0]),
          s = n(t[0], 2) + n(t[1], 2),
          a = e(s),
          l = (t[0] * t[3] - t[2] * t[1]) / a,
          c = i(t[0] * t[2] + t[1] * t[3], s);
        return {
          angle: o / r,
          scaleX: a,
          scaleY: l,
          skewX: c / r,
          skewY: 0,
          translateX: t[4],
          translateY: t[5]
        }
      },
      customTransformMatrix: function(t, e, i) {
        var n = [1, 0, o(Math.tan(i * r)), 1],
          s = [o(t), 0, 0, o(e)];
        return fabric.util.multiplyTransformMatrices(s, n, !0)
      },
      resetObjectTransform: function(t) {
        t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.flipX = !1, t.flipY = !1, t.setAngle(0)
      },
      getFunctionBody: function(t) {
        return (String(t).match(/function[^{]*\{([\s\S]*)\}/) || {})[1]
      },
      isTransparent: function(t, e, i, n) {
        n > 0 && (e > n ? e -= n : e = 0, i > n ? i -= n : i = 0);
        var o, r, s = !0,
          a = t.getImageData(e, i, 2 * n || 1, 2 * n || 1),
          l = a.data.length;
        for (o = 3; o < l && (r = a.data[o], s = r <= 0, s !== !1); o += 4);
        return a = null, s
      },
      parsePreserveAspectRatioAttribute: function(t) {
        var e, i = "meet",
          n = "Mid",
          o = "Mid",
          r = t.split(" ");
        return r && r.length && (i = r.pop(), "meet" !== i && "slice" !== i ? (e = i, i = "meet") : r.length && (e = r.pop())), n = "none" !== e ? e.slice(1, 4) : "none", o = "none" !== e ? e.slice(5, 8) : "none", {
          meetOrSlice: i,
          alignX: n,
          alignY: o
        }
      },
      clearFabricFontCache: function(t) {
        t ? fabric.charWidthsCache[t] && delete fabric.charWidthsCache[t] : fabric.charWidthsCache = {}
      }
    }
  }("undefined" != typeof exports ? exports : this),
  function() {
    function t(t, n, r, s, l, c, h) {
      var u = a.call(arguments);
      if (o[u]) return o[u];
      var d = Math.PI,
        p = h * d / 180,
        f = Math.sin(p),
        g = Math.cos(p),
        m = 0,
        v = 0;
      r = Math.abs(r), s = Math.abs(s);
      var y = -g * t * .5 - f * n * .5,
        b = -g * n * .5 + f * t * .5,
        x = r * r,
        w = s * s,
        C = b * b,
        S = y * y,
        _ = x * w - x * C - w * S,
        k = 0;
      if (_ < 0) {
        var T = Math.sqrt(1 - _ / (x * w));
        r *= T, s *= T
      } else k = (l === c ? -1 : 1) * Math.sqrt(_ / (x * C + w * S));
      var O = k * r * b / s,
        j = -k * s * y / r,
        E = g * O - f * j + .5 * t,
        A = f * O + g * j + .5 * n,
        P = i(1, 0, (y - O) / r, (b - j) / s),
        I = i((y - O) / r, (b - j) / s, (-y - O) / r, (-b - j) / s);
      0 === c && I > 0 ? I -= 2 * d : 1 === c && I < 0 && (I += 2 * d);
      for (var $ = Math.ceil(Math.abs(I / d * 2)), D = [], L = I / $, M = 8 / 3 * Math.sin(L / 4) * Math.sin(L / 4) / Math.sin(L / 2), F = P + L, N = 0; N < $; N++) D[N] = e(P, F, g, f, r, s, E, A, M, m, v), m = D[N][4], v = D[N][5], P = F, F += L;
      return o[u] = D, D
    }

    function e(t, e, i, n, o, s, l, c, h, u, d) {
      var p = a.call(arguments);
      if (r[p]) return r[p];
      var f = Math.cos(t),
        g = Math.sin(t),
        m = Math.cos(e),
        v = Math.sin(e),
        y = i * o * m - n * s * v + l,
        b = n * o * m + i * s * v + c,
        x = u + h * (-i * o * g - n * s * f),
        w = d + h * (-n * o * g + i * s * f),
        C = y + h * (i * o * v + n * s * m),
        S = b + h * (n * o * v - i * s * m);
      return r[p] = [x, w, C, S, y, b], r[p]
    }

    function i(t, e, i, n) {
      var o = Math.atan2(e, t),
        r = Math.atan2(n, i);
      return r >= o ? r - o : 2 * Math.PI - (o - r)
    }

    function n(t, e, i, n, o, r, l, c) {
      var h = a.call(arguments);
      if (s[h]) return s[h];
      var u, d, p, f, g, m, v, y, b = Math.sqrt,
        x = Math.min,
        w = Math.max,
        C = Math.abs,
        S = [],
        _ = [
          [],
          []
        ];
      d = 6 * t - 12 * i + 6 * o, u = -3 * t + 9 * i - 9 * o + 3 * l, p = 3 * i - 3 * t;
      for (var k = 0; k < 2; ++k)
        if (k > 0 && (d = 6 * e - 12 * n + 6 * r, u = -3 * e + 9 * n - 9 * r + 3 * c, p = 3 * n - 3 * e), C(u) < 1e-12) {
          if (C(d) < 1e-12) continue;
          f = -p / d, 0 < f && f < 1 && S.push(f)
        } else v = d * d - 4 * p * u, v < 0 || (y = b(v), g = (-d + y) / (2 * u), 0 < g && g < 1 && S.push(g), m = (-d - y) / (2 * u), 0 < m && m < 1 && S.push(m));
      for (var T, O, j, E = S.length, A = E; E--;) f = S[E], j = 1 - f, T = j * j * j * t + 3 * j * j * f * i + 3 * j * f * f * o + f * f * f * l, _[0][E] = T, O = j * j * j * e + 3 * j * j * f * n + 3 * j * f * f * r + f * f * f * c, _[1][E] = O;
      _[0][A] = t, _[1][A] = e, _[0][A + 1] = l, _[1][A + 1] = c;
      var P = [{
        x: x.apply(null, _[0]),
        y: x.apply(null, _[1])
      }, {
        x: w.apply(null, _[0]),
        y: w.apply(null, _[1])
      }];
      return s[h] = P, P
    }
    var o = {},
      r = {},
      s = {},
      a = Array.prototype.join;
    fabric.util.drawArc = function(e, i, n, o) {
      for (var r = o[0], s = o[1], a = o[2], l = o[3], c = o[4], h = o[5], u = o[6], d = [
        [],
        [],
        [],
        []
      ], p = t(h - i, u - n, r, s, l, c, a), f = 0, g = p.length; f < g; f++) d[f][0] = p[f][0] + i, d[f][1] = p[f][1] + n, d[f][2] = p[f][2] + i, d[f][3] = p[f][3] + n, d[f][4] = p[f][4] + i, d[f][5] = p[f][5] + n, e.bezierCurveTo.apply(e, d[f])
    }, fabric.util.getBoundsOfArc = function(e, i, o, r, s, a, l, c, h) {
      for (var u, d = 0, p = 0, f = [], g = t(c - e, h - i, o, r, a, l, s), m = 0, v = g.length; m < v; m++) u = n(d, p, g[m][0], g[m][1], g[m][2], g[m][3], g[m][4], g[m][5]), f.push({
        x: u[0].x + e,
        y: u[0].y + i
      }), f.push({
        x: u[1].x + e,
        y: u[1].y + i
      }), d = g[m][4], p = g[m][5];
      return f
    }, fabric.util.getBoundsOfCurve = n
  }(),
  function() {
    function t(t, e) {
      for (var i = r.call(arguments, 2), n = [], o = 0, s = t.length; o < s; o++) n[o] = i.length ? t[o][e].apply(t[o], i) : t[o][e].call(t[o]);
      return n
    }

    function e(t, e) {
      return o(t, e, function(t, e) {
        return t >= e
      })
    }

    function i(t, e) {
      return o(t, e, function(t, e) {
        return t < e
      })
    }

    function n(t, e) {
      for (var i = t.length; i--;) t[i] = e;
      return t
    }

    function o(t, e, i) {
      if (t && 0 !== t.length) {
        var n = t.length - 1,
          o = e ? t[n][e] : t[n];
        if (e)
          for (; n--;) i(t[n][e], o) && (o = t[n][e]);
        else
          for (; n--;) i(t[n], o) && (o = t[n]);
        return o
      }
    }
    var r = Array.prototype.slice;
    Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
      if (void 0 === this || null === this) throw new TypeError;
      var e = Object(this),
        i = e.length >>> 0;
      if (0 === i) return -1;
      var n = 0;
      if (arguments.length > 0 && (n = Number(arguments[1]), n !== n ? n = 0 : 0 !== n && n !== Number.POSITIVE_INFINITY && n !== Number.NEGATIVE_INFINITY && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= i) return -1;
      for (var o = n >= 0 ? n : Math.max(i - Math.abs(n), 0); o < i; o++)
        if (o in e && e[o] === t) return o;
      return -1
    }), Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
      for (var i = 0, n = this.length >>> 0; i < n; i++) i in this && t.call(e, this[i], i, this)
    }), Array.prototype.map || (Array.prototype.map = function(t, e) {
      for (var i = [], n = 0, o = this.length >>> 0; n < o; n++) n in this && (i[n] = t.call(e, this[n], n, this));
      return i
    }), Array.prototype.every || (Array.prototype.every = function(t, e) {
      for (var i = 0, n = this.length >>> 0; i < n; i++)
        if (i in this && !t.call(e, this[i], i, this)) return !1;
      return !0
    }), Array.prototype.some || (Array.prototype.some = function(t, e) {
      for (var i = 0, n = this.length >>> 0; i < n; i++)
        if (i in this && t.call(e, this[i], i, this)) return !0;
      return !1
    }), Array.prototype.filter || (Array.prototype.filter = function(t, e) {
      for (var i, n = [], o = 0, r = this.length >>> 0; o < r; o++) o in this && (i = this[o], t.call(e, i, o, this) && n.push(i));
      return n
    }), Array.prototype.reduce || (Array.prototype.reduce = function(t) {
      var e, i = this.length >>> 0,
        n = 0;
      if (arguments.length > 1) e = arguments[1];
      else
        for (;;) {
          if (n in this) {
            e = this[n++];
            break
          }
          if (++n >= i) throw new TypeError
        }
      for (; n < i; n++) n in this && (e = t.call(null, e, this[n], n, this));
      return e
    }), fabric.util.array = {
      fill: n,
      invoke: t,
      min: i,
      max: e
    }
  }(),
  function() {
    function t(e, i, n) {
      if (n)
        if (!fabric.isLikelyNode && i instanceof Element) e = i;
        else if (i instanceof Array) {
          e = [];
          for (var o = 0, r = i.length; o < r; o++) e[o] = t({}, i[o], n)
        } else if (i && "object" == typeof i)
          for (var s in i) i.hasOwnProperty(s) && (e[s] = t({}, i[s], n));
        else e = i;
      else
        for (var s in i) e[s] = i[s];
      return e
    }

    function e(e, i) {
      return t({}, e, i)
    }
    fabric.util.object = {
      extend: t,
      clone: e
    }
  }(),
  function() {
    function t(t) {
      return t.replace(/-+(.)?/g, function(t, e) {
        return e ? e.toUpperCase() : ""
      })
    }

    function e(t, e) {
      return t.charAt(0).toUpperCase() + (e ? t.slice(1) : t.slice(1).toLowerCase())
    }

    function i(t) {
      return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    String.prototype.trim || (String.prototype.trim = function() {
      return this.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "")
    }), fabric.util.string = {
      camelize: t,
      capitalize: e,
      escapeXml: i
    }
  }(),
  function() {
    var t = Array.prototype.slice,
      e = Function.prototype.apply,
      i = function() {};
    Function.prototype.bind || (Function.prototype.bind = function(n) {
      var o, r = this,
        s = t.call(arguments, 1);
      return o = s.length ? function() {
        return e.call(r, this instanceof i ? this : n, s.concat(t.call(arguments)))
      } : function() {
        return e.call(r, this instanceof i ? this : n, arguments)
      }, i.prototype = this.prototype, o.prototype = new i, o
    })
  }(),
  function() {
    function t() {}

    function e(t) {
      var e = this.constructor.superclass.prototype[t];
      return arguments.length > 1 ? e.apply(this, n.call(arguments, 1)) : e.call(this)
    }

    function i() {
      function i() {
        this.initialize.apply(this, arguments)
      }
      var r = null,
        a = n.call(arguments, 0);
      "function" == typeof a[0] && (r = a.shift()), i.superclass = r, i.subclasses = [], r && (t.prototype = r.prototype, i.prototype = new t, r.subclasses.push(i));
      for (var l = 0, c = a.length; l < c; l++) s(i, a[l], r);
      return i.prototype.initialize || (i.prototype.initialize = o), i.prototype.constructor = i, i.prototype.callSuper = e, i
    }
    var n = Array.prototype.slice,
      o = function() {},
      r = function() {
        for (var t in {
          toString: 1
        })
          if ("toString" === t) return !1;
        return !0
      }(),
      s = function(t, e, i) {
        for (var n in e) n in t.prototype && "function" == typeof t.prototype[n] && (e[n] + "").indexOf("callSuper") > -1 ? t.prototype[n] = function(t) {
          return function() {
            var n = this.constructor.superclass;
            this.constructor.superclass = i;
            var o = e[t].apply(this, arguments);
            if (this.constructor.superclass = n, "initialize" !== t) return o
          }
        }(n) : t.prototype[n] = e[n], r && (e.toString !== Object.prototype.toString && (t.prototype.toString = e.toString), e.valueOf !== Object.prototype.valueOf && (t.prototype.valueOf = e.valueOf))
      };
    fabric.util.createClass = i
  }(),
  function() {
    function t(t) {
      var e, i, n = Array.prototype.slice.call(arguments, 1),
        o = n.length;
      for (i = 0; i < o; i++)
        if (e = typeof t[n[i]], !/^(?:function|object|unknown)$/.test(e)) return !1;
      return !0
    }

    function e(t, e) {
      return {
        handler: e,
        wrappedHandler: i(t, e)
      }
    }

    function i(t, e) {
      return function(i) {
        e.call(s(t), i || fabric.window.event)
      }
    }

    function n(t, e) {
      return function(i) {
        if (g[t] && g[t][e])
          for (var n = g[t][e], o = 0, r = n.length; o < r; o++) n[o].call(this, i || fabric.window.event)
      }
    }

    function o(t) {
      t || (t = fabric.window.event);
      var e = t.target || (typeof t.srcElement !== l ? t.srcElement : null),
        i = fabric.util.getScrollLeftTop(e);
      return {
        x: m(t) + i.left,
        y: v(t) + i.top
      }
    }

    function r(t, e, i) {
      var n = "touchend" === t.type ? "changedTouches" : "touches";
      return t[n] && t[n][0] ? t[n][0][e] - (t[n][0][e] - t[n][0][i]) || t[i] : t[i]
    }
    var s, a, l = "unknown",
      c = function() {
        var t = 0;
        return function(e) {
          return e.__uniqueID || (e.__uniqueID = "uniqueID__" + t++)
        }
      }();
    ! function() {
      var t = {};
      s = function(e) {
        return t[e]
      }, a = function(e, i) {
        t[e] = i
      }
    }();
    var h, u, d = t(fabric.document.documentElement, "addEventListener", "removeEventListener") && t(fabric.window, "addEventListener", "removeEventListener"),
      p = t(fabric.document.documentElement, "attachEvent", "detachEvent") && t(fabric.window, "attachEvent", "detachEvent"),
      f = {},
      g = {};
    d ? (h = function(t, e, i, n) {
      t.addEventListener(e, i, !p && n)
    }, u = function(t, e, i, n) {
      t.removeEventListener(e, i, !p && n)
    }) : p ? (h = function(t, i, n) {
      var o = c(t);
      a(o, t), f[o] || (f[o] = {}), f[o][i] || (f[o][i] = []);
      var r = e(o, n);
      f[o][i].push(r), t.attachEvent("on" + i, r.wrappedHandler)
    }, u = function(t, e, i) {
      var n, o = c(t);
      if (f[o] && f[o][e])
        for (var r = 0, s = f[o][e].length; r < s; r++) n = f[o][e][r], n && n.handler === i && (t.detachEvent("on" + e, n.wrappedHandler), f[o][e][r] = null)
    }) : (h = function(t, e, i) {
      var o = c(t);
      if (g[o] || (g[o] = {}), !g[o][e]) {
        g[o][e] = [];
        var r = t["on" + e];
        r && g[o][e].push(r), t["on" + e] = n(o, e)
      }
      g[o][e].push(i)
    }, u = function(t, e, i) {
      var n = c(t);
      if (g[n] && g[n][e])
        for (var o = g[n][e], r = 0, s = o.length; r < s; r++) o[r] === i && o.splice(r, 1)
    }), fabric.util.addListener = h, fabric.util.removeListener = u;
    var m = function(t) {
        return typeof t.clientX !== l ? t.clientX : 0
      },
      v = function(t) {
        return typeof t.clientY !== l ? t.clientY : 0
      };
    fabric.isTouchSupported && (m = function(t) {
      return r(t, "pageX", "clientX")
    }, v = function(t) {
      return r(t, "pageY", "clientY")
    }), fabric.util.getPointer = o, fabric.util.object.extend(fabric.util, fabric.Observable)
  }(),
  function() {
    function t(t, e) {
      var i = t.style;
      if (!i) return t;
      if ("string" == typeof e) return t.style.cssText += ";" + e, e.indexOf("opacity") > -1 ? r(t, e.match(/opacity:\s*(\d?\.?\d*)/)[1]) : t;
      for (var n in e)
        if ("opacity" === n) r(t, e[n]);
        else {
          var o = "float" === n || "cssFloat" === n ? "undefined" == typeof i.styleFloat ? "cssFloat" : "styleFloat" : n;
          i[o] = e[n]
        }
      return t
    }
    var e = fabric.document.createElement("div"),
      i = "string" == typeof e.style.opacity,
      n = "string" == typeof e.style.filter,
      o = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,
      r = function(t) {
        return t
      };
    i ? r = function(t, e) {
      return t.style.opacity = e, t
    } : n && (r = function(t, e) {
      var i = t.style;
      return t.currentStyle && !t.currentStyle.hasLayout && (i.zoom = 1), o.test(i.filter) ? (e = e >= .9999 ? "" : "alpha(opacity=" + 100 * e + ")", i.filter = i.filter.replace(o, e)) : i.filter += " alpha(opacity=" + 100 * e + ")", t
    }), fabric.util.setStyle = t
  }(),
  function() {
    function t(t) {
      return "string" == typeof t ? fabric.document.getElementById(t) : t
    }

    function e(t, e) {
      var i = fabric.document.createElement(t);
      for (var n in e) "class" === n ? i.className = e[n] : "for" === n ? i.htmlFor = e[n] : i.setAttribute(n, e[n]);
      return i
    }

    function i(t, e) {
      t && (" " + t.className + " ").indexOf(" " + e + " ") === -1 && (t.className += (t.className ? " " : "") + e)
    }

    function n(t, i, n) {
      return "string" == typeof i && (i = e(i, n)), t.parentNode && t.parentNode.replaceChild(i, t), i.appendChild(t), i
    }

    function o(t) {
      for (var e = 0, i = 0, n = fabric.document.documentElement, o = fabric.document.body || {
        scrollLeft: 0,
        scrollTop: 0
      }; t && (t.parentNode || t.host) && (t = t.parentNode || t.host, t === fabric.document ? (e = o.scrollLeft || n.scrollLeft || 0, i = o.scrollTop || n.scrollTop || 0) : (e += t.scrollLeft || 0, i += t.scrollTop || 0), 1 !== t.nodeType || "fixed" !== fabric.util.getElementStyle(t, "position")););
      return {
        left: e,
        top: i
      }
    }

    function r(t) {
      var e, i, n = t && t.ownerDocument,
        r = {
          left: 0,
          top: 0
        },
        s = {
          left: 0,
          top: 0
        },
        a = {
          borderLeftWidth: "left",
          borderTopWidth: "top",
          paddingLeft: "left",
          paddingTop: "top"
        };
      if (!n) return s;
      for (var l in a) s[a[l]] += parseInt(c(t, l), 10) || 0;
      return e = n.documentElement, "undefined" != typeof t.getBoundingClientRect && (r = t.getBoundingClientRect()), i = o(t), {
        left: r.left + i.left - (e.clientLeft || 0) + s.left,
        top: r.top + i.top - (e.clientTop || 0) + s.top
      }
    }
    var s, a = Array.prototype.slice,
      l = function(t) {
        return a.call(t, 0)
      };
    try {
      s = l(fabric.document.childNodes) instanceof Array
    } catch (t) {}
    s || (l = function(t) {
      for (var e = new Array(t.length), i = t.length; i--;) e[i] = t[i];
      return e
    });
    var c;
    c = fabric.document.defaultView && fabric.document.defaultView.getComputedStyle ? function(t, e) {
      var i = fabric.document.defaultView.getComputedStyle(t, null);
      return i ? i[e] : void 0
    } : function(t, e) {
      var i = t.style[e];
      return !i && t.currentStyle && (i = t.currentStyle[e]), i
    },
      function() {
        function t(t) {
          return "undefined" != typeof t.onselectstart && (t.onselectstart = fabric.util.falseFunction), n ? t.style[n] = "none" : "string" == typeof t.unselectable && (t.unselectable = "on"), t
        }

        function e(t) {
          return "undefined" != typeof t.onselectstart && (t.onselectstart = null), n ? t.style[n] = "" : "string" == typeof t.unselectable && (t.unselectable = ""), t
        }
        var i = fabric.document.documentElement.style,
          n = "userSelect" in i ? "userSelect" : "MozUserSelect" in i ? "MozUserSelect" : "WebkitUserSelect" in i ? "WebkitUserSelect" : "KhtmlUserSelect" in i ? "KhtmlUserSelect" : "";
        fabric.util.makeElementUnselectable = t, fabric.util.makeElementSelectable = e
      }(),
      function() {
        function t(t, e) {
          var i = fabric.document.getElementsByTagName("head")[0],
            n = fabric.document.createElement("script"),
            o = !0;
          n.onload = n.onreadystatechange = function(t) {
            if (o) {
              if ("string" == typeof this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState) return;
              o = !1, e(t || fabric.window.event), n = n.onload = n.onreadystatechange = null
            }
          }, n.src = t, i.appendChild(n)
        }
        fabric.util.getScript = t
      }(), fabric.util.getById = t, fabric.util.toArray = l, fabric.util.makeElement = e, fabric.util.addClass = i, fabric.util.wrapElement = n, fabric.util.getScrollLeftTop = o, fabric.util.getElementOffset = r, fabric.util.getElementStyle = c
  }(),
  function() {
    function t(t, e) {
      return t + (/\?/.test(t) ? "&" : "?") + e
    }

    function e() {}

    function i(i, o) {
      o || (o = {});
      var r = o.method ? o.method.toUpperCase() : "GET",
        s = o.onComplete || function() {},
        a = n(),
        l = o.body || o.parameters;
      return a.onreadystatechange = function() {
        4 === a.readyState && (s(a), a.onreadystatechange = e)
      }, "GET" === r && (l = null, "string" == typeof o.parameters && (i = t(i, o.parameters))), a.open(r, i, !0), "POST" !== r && "PUT" !== r || a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.send(l), a
    }
    var n = function() {
      for (var t = [function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
      }, function() {
        return new ActiveXObject("Msxml2.XMLHTTP")
      }, function() {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
      }, function() {
        return new XMLHttpRequest
      }], e = t.length; e--;) try {
        var i = t[e]();
        if (i) return t[e]
      } catch (t) {}
    }();
    fabric.util.request = i
  }(), fabric.log = function() {}, fabric.warn = function() {}, "undefined" != typeof console && ["log", "warn"].forEach(function(t) {
  "undefined" != typeof console[t] && "function" == typeof console[t].apply && (fabric[t] = function() {
    return console[t].apply(console, arguments)
  })
}),
  function() {
    function t(t) {
      e(function(i) {
        t || (t = {});
        var n, o = i || +new Date,
          r = t.duration || 500,
          s = o + r,
          a = t.onChange || function() {},
          l = t.abort || function() {
            return !1
          },
          c = t.easing || function(t, e, i, n) {
            return -i * Math.cos(t / n * (Math.PI / 2)) + i + e
          },
          h = "startValue" in t ? t.startValue : 0,
          u = "endValue" in t ? t.endValue : 100,
          d = t.byValue || u - h;
        t.onStart && t.onStart(),
          function i(u) {
            n = u || +new Date;
            var p = n > s ? r : n - o;
            return l() ? void(t.onComplete && t.onComplete()) : (a(c(p, h, d, r)), n > s ? void(t.onComplete && t.onComplete()) : void e(i))
          }(o)
      })
    }

    function e() {
      return i.apply(fabric.window, arguments)
    }
    var i = fabric.window.requestAnimationFrame || fabric.window.webkitRequestAnimationFrame || fabric.window.mozRequestAnimationFrame || fabric.window.oRequestAnimationFrame || fabric.window.msRequestAnimationFrame || function(t) {
      fabric.window.setTimeout(t, 1e3 / 60)
    };
    fabric.util.animate = t, fabric.util.requestAnimFrame = e
  }(),
  function() {
    function t(t, e, i) {
      var n = "rgba(" + parseInt(t[0] + i * (e[0] - t[0]), 10) + "," + parseInt(t[1] + i * (e[1] - t[1]), 10) + "," + parseInt(t[2] + i * (e[2] - t[2]), 10);
      return n += "," + (t && e ? parseFloat(t[3] + i * (e[3] - t[3])) : 1), n += ")"
    }

    function e(e, i, n, o) {
      var r = new fabric.Color(e).getSource(),
        s = new fabric.Color(i).getSource();
      o = o || {}, fabric.util.animate(fabric.util.object.extend(o, {
        duration: n || 500,
        startValue: r,
        endValue: s,
        byValue: s,
        easing: function(e, i, n, r) {
          var s = o.colorEasing ? o.colorEasing(e, r) : 1 - Math.cos(e / r * (Math.PI / 2));
          return t(i, n, s)
        }
      }))
    }
    fabric.util.animateColor = e
  }(),
  function() {
    function t(t, e, i, n) {
      return t < Math.abs(e) ? (t = e, n = i / 4) : n = 0 === e && 0 === t ? i / (2 * Math.PI) * Math.asin(1) : i / (2 * Math.PI) * Math.asin(e / t), {
        a: t,
        c: e,
        p: i,
        s: n
      }
    }

    function e(t, e, i) {
      return t.a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - t.s) * (2 * Math.PI) / t.p)
    }

    function i(t, e, i, n) {
      return i * ((t = t / n - 1) * t * t + 1) + e
    }

    function n(t, e, i, n) {
      return t /= n / 2, t < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
    }

    function o(t, e, i, n) {
      return i * (t /= n) * t * t * t + e
    }

    function r(t, e, i, n) {
      return -i * ((t = t / n - 1) * t * t * t - 1) + e
    }

    function s(t, e, i, n) {
      return t /= n / 2, t < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
    }

    function a(t, e, i, n) {
      return i * (t /= n) * t * t * t * t + e
    }

    function l(t, e, i, n) {
      return i * ((t = t / n - 1) * t * t * t * t + 1) + e
    }

    function c(t, e, i, n) {
      return t /= n / 2, t < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
    }

    function h(t, e, i, n) {
      return -i * Math.cos(t / n * (Math.PI / 2)) + i + e
    }

    function u(t, e, i, n) {
      return i * Math.sin(t / n * (Math.PI / 2)) + e
    }

    function d(t, e, i, n) {
      return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + e
    }

    function p(t, e, i, n) {
      return 0 === t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e
    }

    function f(t, e, i, n) {
      return t === n ? e + i : i * (-Math.pow(2, -10 * t / n) + 1) + e
    }

    function g(t, e, i, n) {
      return 0 === t ? e : t === n ? e + i : (t /= n / 2, t < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (-Math.pow(2, -10 * --t) + 2) + e)
    }

    function m(t, e, i, n) {
      return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
    }

    function v(t, e, i, n) {
      return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
    }

    function y(t, e, i, n) {
      return t /= n / 2, t < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
    }

    function b(i, n, o, r) {
      var s = 1.70158,
        a = 0,
        l = o;
      if (0 === i) return n;
      if (i /= r, 1 === i) return n + o;
      a || (a = .3 * r);
      var c = t(l, o, a, s);
      return -e(c, i, r) + n
    }

    function x(e, i, n, o) {
      var r = 1.70158,
        s = 0,
        a = n;
      if (0 === e) return i;
      if (e /= o, 1 === e) return i + n;
      s || (s = .3 * o);
      var l = t(a, n, s, r);
      return l.a * Math.pow(2, -10 * e) * Math.sin((e * o - l.s) * (2 * Math.PI) / l.p) + l.c + i
    }

    function w(i, n, o, r) {
      var s = 1.70158,
        a = 0,
        l = o;
      if (0 === i) return n;
      if (i /= r / 2, 2 === i) return n + o;
      a || (a = r * (.3 * 1.5));
      var c = t(l, o, a, s);
      return i < 1 ? -.5 * e(c, i, r) + n : c.a * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * r - c.s) * (2 * Math.PI) / c.p) * .5 + c.c + n
    }

    function C(t, e, i, n, o) {
      return void 0 === o && (o = 1.70158), i * (t /= n) * t * ((o + 1) * t - o) + e
    }

    function S(t, e, i, n, o) {
      return void 0 === o && (o = 1.70158), i * ((t = t / n - 1) * t * ((o + 1) * t + o) + 1) + e
    }

    function _(t, e, i, n, o) {
      return void 0 === o && (o = 1.70158), t /= n / 2, t < 1 ? i / 2 * (t * t * (((o *= 1.525) + 1) * t - o)) + e : i / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + e
    }

    function k(t, e, i, n) {
      return i - T(n - t, 0, i, n) + e
    }

    function T(t, e, i, n) {
      return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
    }

    function O(t, e, i, n) {
      return t < n / 2 ? .5 * k(2 * t, 0, i, n) + e : .5 * T(2 * t - n, 0, i, n) + .5 * i + e
    }
    fabric.util.ease = {
      easeInQuad: function(t, e, i, n) {
        return i * (t /= n) * t + e
      },
      easeOutQuad: function(t, e, i, n) {
        return -i * (t /= n) * (t - 2) + e
      },
      easeInOutQuad: function(t, e, i, n) {
        return t /= n / 2, t < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
      },
      easeInCubic: function(t, e, i, n) {
        return i * (t /= n) * t * t + e
      },
      easeOutCubic: i,
      easeInOutCubic: n,
      easeInQuart: o,
      easeOutQuart: r,
      easeInOutQuart: s,
      easeInQuint: a,
      easeOutQuint: l,
      easeInOutQuint: c,
      easeInSine: h,
      easeOutSine: u,
      easeInOutSine: d,
      easeInExpo: p,
      easeOutExpo: f,
      easeInOutExpo: g,
      easeInCirc: m,
      easeOutCirc: v,
      easeInOutCirc: y,
      easeInElastic: b,
      easeOutElastic: x,
      easeInOutElastic: w,
      easeInBack: C,
      easeOutBack: S,
      easeInOutBack: _,
      easeInBounce: k,
      easeOutBounce: T,
      easeInOutBounce: O
    }
  }(),
  function(t) {
    "use strict";

    function e(t) {
      return t in k ? k[t] : t
    }

    function i(t, e, i, n) {
      var o, r = "[object Array]" === Object.prototype.toString.call(e);
      return "fill" !== t && "stroke" !== t || "none" !== e ? "strokeDashArray" === t ? e = "none" === e ? null : e.replace(/,/g, " ").split(/\s+/).map(function(t) {
        return parseFloat(t)
      }) : "transformMatrix" === t ? e = i && i.transformMatrix ? x(i.transformMatrix, g.parseTransformAttribute(e)) : g.parseTransformAttribute(e) : "visible" === t ? (e = "none" !== e && "hidden" !== e, i && i.visible === !1 && (e = !1)) : "opacity" === t ? (e = parseFloat(e), i && "undefined" != typeof i.opacity && (e *= i.opacity)) : "originX" === t ? e = "start" === e ? "left" : "end" === e ? "right" : "center" : o = r ? e.map(b) : b(e, n) : e = "", !r && isNaN(o) ? e : o
    }

    function n(t) {
      for (var e in T)
        if ("undefined" != typeof t[T[e]] && "" !== t[e]) {
          if ("undefined" == typeof t[e]) {
            if (!g.Object.prototype[e]) continue;
            t[e] = g.Object.prototype[e]
          }
          if (0 !== t[e].indexOf("url(")) {
            var i = new g.Color(t[e]);
            t[e] = i.setAlpha(y(i.getAlpha() * t[T[e]], 2)).toRgba()
          }
        }
      return t
    }

    function o(t, e) {
      for (var i, n, o = [], r = 0; r < e.length; r++) i = e[r], n = t.getElementsByTagName(i), o = o.concat(Array.prototype.slice.call(n));
      return o
    }

    function r(t, e) {
      var i, n;
      t.replace(/;\s*$/, "").split(";").forEach(function(t) {
        var o = t.split(":");
        i = o[0].trim().toLowerCase(), n = o[1].trim(), e[i] = n
      })
    }

    function s(t, e) {
      var i, n;
      for (var o in t) "undefined" != typeof t[o] && (i = o.toLowerCase(), n = t[o], e[i] = n)
    }

    function a(t, e) {
      var i = {};
      for (var n in g.cssRules[e])
        if (l(t, n.split(" ")))
          for (var o in g.cssRules[e][n]) i[o] = g.cssRules[e][n][o];
      return i
    }

    function l(t, e) {
      var i, n = !0;
      return i = h(t, e.pop()), i && e.length && (n = c(t, e)), i && n && 0 === e.length
    }

    function c(t, e) {
      for (var i, n = !0; t.parentNode && 1 === t.parentNode.nodeType && e.length;) n && (i = e.pop()), t = t.parentNode, n = h(t, i);
      return 0 === e.length
    }

    function h(t, e) {
      var i, n = t.nodeName,
        o = t.getAttribute("class"),
        r = t.getAttribute("id");
      if (i = new RegExp("^" + n, "i"), e = e.replace(i, ""), r && e.length && (i = new RegExp("#" + r + "(?![a-zA-Z\\-]+)", "i"), e = e.replace(i, "")), o && e.length) {
        o = o.split(" ");
        for (var s = o.length; s--;) i = new RegExp("\\." + o[s] + "(?![a-zA-Z\\-]+)", "i"), e = e.replace(i, "")
      }
      return 0 === e.length
    }

    function u(t, e) {
      var i;
      if (t.getElementById && (i = t.getElementById(e)), i) return i;
      var n, o, r = t.getElementsByTagName("*");
      for (o = 0; o < r.length; o++)
        if (n = r[o], e === n.getAttribute("id")) return n
    }

    function d(t) {
      for (var e = o(t, ["use", "svg:use"]), i = 0; e.length && i < e.length;) {
        var n, r, s, a, l, c = e[i],
          h = c.getAttribute("xlink:href").substr(1),
          d = c.getAttribute("x") || 0,
          f = c.getAttribute("y") || 0,
          g = u(t, h).cloneNode(!0),
          m = (g.getAttribute("transform") || "") + " translate(" + d + ", " + f + ")",
          v = e.length;
        if (p(g), /^svg$/i.test(g.nodeName)) {
          var y = g.ownerDocument.createElement("g");
          for (s = 0, a = g.attributes, l = a.length; s < l; s++) r = a.item(s), y.setAttribute(r.nodeName, r.nodeValue);
          for (; g.firstChild;) y.appendChild(g.firstChild);
          g = y
        }
        for (s = 0, a = c.attributes, l = a.length; s < l; s++) r = a.item(s), "x" !== r.nodeName && "y" !== r.nodeName && "xlink:href" !== r.nodeName && ("transform" === r.nodeName ? m = r.nodeValue + " " + m : g.setAttribute(r.nodeName, r.nodeValue));
        g.setAttribute("transform", m), g.setAttribute("instantiated_by_use", "1"), g.removeAttribute("id"), n = c.parentNode, n.replaceChild(g, c), e.length === v && i++
      }
    }

    function p(t) {
      var e, i, n, o, r = t.getAttribute("viewBox"),
        s = 1,
        a = 1,
        l = 0,
        c = 0,
        h = t.getAttribute("width"),
        u = t.getAttribute("height"),
        d = t.getAttribute("x") || 0,
        p = t.getAttribute("y") || 0,
        f = t.getAttribute("preserveAspectRatio") || "",
        m = !r || !C.test(t.nodeName) || !(r = r.match(O)),
        v = !h || !u || "100%" === h || "100%" === u,
        y = m && v,
        x = {},
        w = "";
      if (x.width = 0, x.height = 0, x.toBeParsed = y, y) return x;
      if (m) return x.width = b(h), x.height = b(u), x;
      if (l = -parseFloat(r[1]), c = -parseFloat(r[2]), e = parseFloat(r[3]), i = parseFloat(r[4]), v ? (x.width = e, x.height = i) : (x.width = b(h), x.height = b(u), s = x.width / e, a = x.height / i), f = g.util.parsePreserveAspectRatioAttribute(f), "none" !== f.alignX && (a = s = s > a ? a : s), 1 === s && 1 === a && 0 === l && 0 === c && 0 === d && 0 === p) return x;
      if ((d || p) && (w = " translate(" + b(d) + " " + b(p) + ") "), n = w + " matrix(" + s + " 0 0 " + a + " " + l * s + " " + c * a + ") ", "svg" === t.nodeName) {
        for (o = t.ownerDocument.createElement("g"); t.firstChild;) o.appendChild(t.firstChild);
        t.appendChild(o)
      } else o = t, n = o.getAttribute("transform") + n;
      return o.setAttribute("transform", n), x
    }

    function f(t, e) {
      for (; t && (t = t.parentNode);)
        if (t.nodeName && e.test(t.nodeName.replace("svg:", "")) && !t.getAttribute("instantiated_by_use")) return !0;
      return !1
    }
    var g = t.fabric || (t.fabric = {}),
      m = g.util.object.extend,
      v = g.util.object.clone,
      y = g.util.toFixed,
      b = g.util.parseUnit,
      x = g.util.multiplyTransformMatrices,
      w = /^(path|circle|polygon|polyline|ellipse|rect|line|image|text)$/i,
      C = /^(symbol|image|marker|pattern|view|svg)$/i,
      S = /^(?:pattern|defs|symbol|metadata|clipPath|mask)$/i,
      _ = /^(symbol|g|a|svg)$/i,
      k = {
        cx: "left",
        x: "left",
        r: "radius",
        cy: "top",
        y: "top",
        display: "visible",
        visibility: "visible",
        transform: "transformMatrix",
        "fill-opacity": "fillOpacity",
        "fill-rule": "fillRule",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "font-style": "fontStyle",
        "font-weight": "fontWeight",
        "stroke-dasharray": "strokeDashArray",
        "stroke-linecap": "strokeLineCap",
        "stroke-linejoin": "strokeLineJoin",
        "stroke-miterlimit": "strokeMiterLimit",
        "stroke-opacity": "strokeOpacity",
        "stroke-width": "strokeWidth",
        "text-decoration": "textDecoration",
        "text-anchor": "originX",
        opacity: "opacity"
      },
      T = {
        stroke: "strokeOpacity",
        fill: "fillOpacity"
      };
    g.cssRules = {}, g.gradientDefs = {}, g.parseTransformAttribute = function() {
      function t(t, e) {
        var i = Math.cos(e[0]),
          n = Math.sin(e[0]),
          o = 0,
          r = 0;
        3 === e.length && (o = e[1], r = e[2]), t[0] = i, t[1] = n, t[2] = -n, t[3] = i, t[4] = o - (i * o - n * r), t[5] = r - (n * o + i * r)
      }

      function e(t, e) {
        var i = e[0],
          n = 2 === e.length ? e[1] : e[0];
        t[0] = i, t[3] = n
      }

      function i(t, e, i) {
        t[i] = Math.tan(g.util.degreesToRadians(e[0]))
      }

      function n(t, e) {
        t[4] = e[0], 2 === e.length && (t[5] = e[1])
      }
      var o = [1, 0, 0, 1, 0, 0],
        r = g.reNum,
        s = "(?:\\s+,?\\s*|,\\s*)",
        a = "(?:(skewX)\\s*\\(\\s*(" + r + ")\\s*\\))",
        l = "(?:(skewY)\\s*\\(\\s*(" + r + ")\\s*\\))",
        c = "(?:(rotate)\\s*\\(\\s*(" + r + ")(?:" + s + "(" + r + ")" + s + "(" + r + "))?\\s*\\))",
        h = "(?:(scale)\\s*\\(\\s*(" + r + ")(?:" + s + "(" + r + "))?\\s*\\))",
        u = "(?:(translate)\\s*\\(\\s*(" + r + ")(?:" + s + "(" + r + "))?\\s*\\))",
        d = "(?:(matrix)\\s*\\(\\s*(" + r + ")" + s + "(" + r + ")" + s + "(" + r + ")" + s + "(" + r + ")" + s + "(" + r + ")" + s + "(" + r + ")\\s*\\))",
        p = "(?:" + d + "|" + u + "|" + h + "|" + c + "|" + a + "|" + l + ")",
        f = "(?:" + p + "(?:" + s + "*" + p + ")*)",
        m = "^\\s*(?:" + f + "?)\\s*$",
        v = new RegExp(m),
        y = new RegExp(p, "g");
      return function(r) {
        var s = o.concat(),
          a = [];
        if (!r || r && !v.test(r)) return s;
        r.replace(y, function(r) {
          var l = new RegExp(p).exec(r).filter(function(t) {
              return !!t
            }),
            c = l[1],
            h = l.slice(2).map(parseFloat);
          switch (c) {
            case "translate":
              n(s, h);
              break;
            case "rotate":
              h[0] = g.util.degreesToRadians(h[0]), t(s, h);
              break;
            case "scale":
              e(s, h);
              break;
            case "skewX":
              i(s, h, 2);
              break;
            case "skewY":
              i(s, h, 1);
              break;
            case "matrix":
              s = h
          }
          a.push(s.concat()), s = o.concat()
        });
        for (var l = a[0]; a.length > 1;) a.shift(), l = g.util.multiplyTransformMatrices(l, a[0]);
        return l
      }
    }();
    var O = new RegExp("^\\s*(" + g.reNum + "+)\\s*,?\\s*(" + g.reNum + "+)\\s*,?\\s*(" + g.reNum + "+)\\s*,?\\s*(" + g.reNum + "+)\\s*$");
    g.parseSVGDocument = function(t, e, i) {
      if (t) {
        d(t);
        var n = g.Object.__uid++,
          o = p(t),
          r = g.util.toArray(t.getElementsByTagName("*"));
        if (o.svgUid = n, 0 === r.length && g.isLikelyNode) {
          r = t.selectNodes('//*[name(.)!="svg"]');
          for (var s = [], a = 0, l = r.length; a < l; a++) s[a] = r[a];
          r = s
        }
        var c = r.filter(function(t) {
          return p(t), w.test(t.nodeName.replace("svg:", "")) && !f(t, S)
        });
        if (!c || c && !c.length) return void(e && e([], {}));
        g.gradientDefs[n] = g.getGradientDefs(t), g.cssRules[n] = g.getCSSRules(t), g.parseElements(c, function(t) {
          e && e(t, o)
        }, v(o), i)
      }
    };
    var j = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + g.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + g.reNum + "))?\\s+(.*)");
    m(g, {
      parseFontDeclaration: function(t, e) {
        var i = t.match(j);
        if (i) {
          var n = i[1],
            o = i[3],
            r = i[4],
            s = i[5],
            a = i[6];
          n && (e.fontStyle = n), o && (e.fontWeight = isNaN(parseFloat(o)) ? o : parseFloat(o)), r && (e.fontSize = b(r)), a && (e.fontFamily = a), s && (e.lineHeight = "normal" === s ? 1 : s)
        }
      },
      getGradientDefs: function(t) {
        var e, i, n, r = ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"],
          s = o(t, r),
          a = 0,
          l = {},
          c = {};
        for (a = s.length; a--;) e = s[a], n = e.getAttribute("xlink:href"), i = e.getAttribute("id"), n && (c[i] = n.substr(1)), l[i] = e;
        for (i in c) {
          var h = l[c[i]].cloneNode(!0);
          for (e = l[i]; h.firstChild;) e.appendChild(h.firstChild)
        }
        return l
      },
      parseAttributes: function(t, o, r) {
        if (t) {
          var s, l, c = {};
          "undefined" == typeof r && (r = t.getAttribute("svgUid")), t.parentNode && _.test(t.parentNode.nodeName) && (c = g.parseAttributes(t.parentNode, o, r)), l = c && c.fontSize || t.getAttribute("font-size") || g.Text.DEFAULT_SVG_FONT_SIZE;
          var h = o.reduce(function(e, i) {
            return s = t.getAttribute(i), s && (e[i] = s), e
          }, {});
          h = m(h, m(a(t, r), g.parseStyleAttribute(t)));
          var u, d, p = {};
          for (var f in h) u = e(f), d = i(u, h[f], c, l), p[u] = d;
          p && p.font && g.parseFontDeclaration(p.font, p);
          var v = m(c, p);
          return _.test(t.nodeName) ? v : n(v)
        }
      },
      parseElements: function(t, e, i, n) {
        new g.ElementsParser(t, e, i, n).parse()
      },
      parseStyleAttribute: function(t) {
        var e = {},
          i = t.getAttribute("style");
        return i ? ("string" == typeof i ? r(i, e) : s(i, e), e) : e
      },
      parsePointsAttribute: function(t) {
        if (!t) return null;
        t = t.replace(/,/g, " ").trim(), t = t.split(/\s+/);
        var e, i, n = [];
        for (e = 0, i = t.length; e < i; e += 2) n.push({
          x: parseFloat(t[e]),
          y: parseFloat(t[e + 1])
        });
        return n
      },
      getCSSRules: function(t) {
        for (var e, i = t.getElementsByTagName("style"), n = {}, o = 0, r = i.length; o < r; o++) {
          var s = i[o].textContent || i[o].text;
          s = s.replace(/\/\*[\s\S]*?\*\//g, ""), "" !== s.trim() && (e = s.match(/[^{]*\{[\s\S]*?\}/g), e = e.map(function(t) {
            return t.trim()
          }), e.forEach(function(t) {
            for (var e = t.match(/([\s\S]*?)\s*\{([^}]*)\}/), i = {}, o = e[2].trim(), r = o.replace(/;$/, "").split(/\s*;\s*/), s = 0, a = r.length; s < a; s++) {
              var l = r[s].split(/\s*:\s*/),
                c = l[0],
                h = l[1];
              i[c] = h
            }
            t = e[1], t.split(",").forEach(function(t) {
              t = t.replace(/^svg/i, "").trim(), "" !== t && (n[t] ? g.util.object.extend(n[t], i) : n[t] = g.util.object.clone(i))
            })
          }))
        }
        return n
      },
      loadSVGFromURL: function(t, e, i) {
        function n(t) {
          var n = t.responseXML;
          n && !n.documentElement && g.window.ActiveXObject && t.responseText && (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, ""))), n && n.documentElement || e && e(null), g.parseSVGDocument(n.documentElement, function(t, i) {
            e && e(t, i)
          }, i)
        }
        t = t.replace(/^\n\s*/, "").trim(), new g.util.request(t, {
          method: "get",
          onComplete: n
        })
      },
      loadSVGFromString: function(t, e, i) {
        t = t.trim();
        var n;
        if ("undefined" != typeof DOMParser) {
          var o = new DOMParser;
          o && o.parseFromString && (n = o.parseFromString(t, "text/xml"))
        } else g.window.ActiveXObject && (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, "")));
        g.parseSVGDocument(n.documentElement, function(t, i) {
          e(t, i)
        }, i)
      }
    })
  }("undefined" != typeof exports ? exports : this), fabric.ElementsParser = function(t, e, i, n) {
  this.elements = t, this.callback = e, this.options = i, this.reviver = n, this.svgUid = i && i.svgUid || 0
}, fabric.ElementsParser.prototype.parse = function() {
  this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects()
}, fabric.ElementsParser.prototype.createObjects = function() {
  for (var t = 0, e = this.elements.length; t < e; t++) this.elements[t].setAttribute("svgUid", this.svgUid),
    function(t, e) {
      setTimeout(function() {
        t.createObject(t.elements[e], e)
      }, 0)
    }(this, t)
}, fabric.ElementsParser.prototype.createObject = function(t, e) {
  var i = fabric[fabric.util.string.capitalize(t.tagName.replace("svg:", ""))];
  if (i && i.fromElement) try {
    this._createObject(i, t, e)
  } catch (t) {
    fabric.log(t)
  } else this.checkIfDone()
}, fabric.ElementsParser.prototype._createObject = function(t, e, i) {
  if (t.async) t.fromElement(e, this.createCallback(i, e), this.options);
  else {
    var n = t.fromElement(e, this.options);
    this.resolveGradient(n, "fill"), this.resolveGradient(n, "stroke"), this.reviver && this.reviver(e, n), this.instances[i] = n, this.checkIfDone()
  }
}, fabric.ElementsParser.prototype.createCallback = function(t, e) {
  var i = this;
  return function(n) {
    i.resolveGradient(n, "fill"), i.resolveGradient(n, "stroke"), i.reviver && i.reviver(e, n), i.instances[t] = n, i.checkIfDone()
  }
}, fabric.ElementsParser.prototype.resolveGradient = function(t, e) {
  var i = t.get(e);
  if (/^url\(/.test(i)) {
    var n = i.slice(5, i.length - 1);
    fabric.gradientDefs[this.svgUid][n] && t.set(e, fabric.Gradient.fromElement(fabric.gradientDefs[this.svgUid][n], t))
  }
}, fabric.ElementsParser.prototype.checkIfDone = function() {
  0 === --this.numElements && (this.instances = this.instances.filter(function(t) {
    return null != t
  }), this.callback(this.instances))
},
  function(t) {
    "use strict";

    function e(t, e) {
      this.x = t, this.y = e
    }
    var i = t.fabric || (t.fabric = {});
    return i.Point ? void i.warn("fabric.Point is already defined") : (i.Point = e, void(e.prototype = {
      type: "point",
      constructor: e,
      add: function(t) {
        return new e(this.x + t.x, this.y + t.y)
      },
      addEquals: function(t) {
        return this.x += t.x, this.y += t.y, this
      },
      scalarAdd: function(t) {
        return new e(this.x + t, this.y + t)
      },
      scalarAddEquals: function(t) {
        return this.x += t, this.y += t, this
      },
      subtract: function(t) {
        return new e(this.x - t.x, this.y - t.y)
      },
      subtractEquals: function(t) {
        return this.x -= t.x, this.y -= t.y, this
      },
      scalarSubtract: function(t) {
        return new e(this.x - t, this.y - t)
      },
      scalarSubtractEquals: function(t) {
        return this.x -= t, this.y -= t, this
      },
      multiply: function(t) {
        return new e(this.x * t, this.y * t)
      },
      multiplyEquals: function(t) {
        return this.x *= t, this.y *= t, this
      },
      divide: function(t) {
        return new e(this.x / t, this.y / t)
      },
      divideEquals: function(t) {
        return this.x /= t, this.y /= t, this
      },
      eq: function(t) {
        return this.x === t.x && this.y === t.y
      },
      lt: function(t) {
        return this.x < t.x && this.y < t.y
      },
      lte: function(t) {
        return this.x <= t.x && this.y <= t.y
      },
      gt: function(t) {
        return this.x > t.x && this.y > t.y
      },
      gte: function(t) {
        return this.x >= t.x && this.y >= t.y
      },
      lerp: function(t, i) {
        return "undefined" == typeof i && (i = .5), i = Math.max(Math.min(1, i), 0), new e(this.x + (t.x - this.x) * i, this.y + (t.y - this.y) * i)
      },
      distanceFrom: function(t) {
        var e = this.x - t.x,
          i = this.y - t.y;
        return Math.sqrt(e * e + i * i)
      },
      midPointFrom: function(t) {
        return this.lerp(t)
      },
      min: function(t) {
        return new e(Math.min(this.x, t.x), Math.min(this.y, t.y))
      },
      max: function(t) {
        return new e(Math.max(this.x, t.x), Math.max(this.y, t.y))
      },
      toString: function() {
        return this.x + "," + this.y
      },
      setXY: function(t, e) {
        return this.x = t, this.y = e, this
      },
      setX: function(t) {
        return this.x = t, this
      },
      setY: function(t) {
        return this.y = t, this
      },
      setFromPoint: function(t) {
        return this.x = t.x, this.y = t.y, this
      },
      swap: function(t) {
        var e = this.x,
          i = this.y;
        this.x = t.x, this.y = t.y, t.x = e, t.y = i
      },
      clone: function() {
        return new e(this.x, this.y)
      }
    }))
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";

    function e(t) {
      this.status = t, this.points = []
    }
    var i = t.fabric || (t.fabric = {});
    return i.Intersection ? void i.warn("fabric.Intersection is already defined") : (i.Intersection = e, i.Intersection.prototype = {
      constructor: e,
      appendPoint: function(t) {
        return this.points.push(t), this
      },
      appendPoints: function(t) {
        return this.points = this.points.concat(t), this
      }
    }, i.Intersection.intersectLineLine = function(t, n, o, r) {
      var s, a = (r.x - o.x) * (t.y - o.y) - (r.y - o.y) * (t.x - o.x),
        l = (n.x - t.x) * (t.y - o.y) - (n.y - t.y) * (t.x - o.x),
        c = (r.y - o.y) * (n.x - t.x) - (r.x - o.x) * (n.y - t.y);
      if (0 !== c) {
        var h = a / c,
          u = l / c;
        0 <= h && h <= 1 && 0 <= u && u <= 1 ? (s = new e("Intersection"), s.appendPoint(new i.Point(t.x + h * (n.x - t.x), t.y + h * (n.y - t.y)))) : s = new e
      } else s = new e(0 === a || 0 === l ? "Coincident" : "Parallel");
      return s
    }, i.Intersection.intersectLinePolygon = function(t, i, n) {
      for (var o, r, s, a = new e, l = n.length, c = 0; c < l; c++) o = n[c], r = n[(c + 1) % l], s = e.intersectLineLine(t, i, o, r), a.appendPoints(s.points);
      return a.points.length > 0 && (a.status = "Intersection"), a
    }, i.Intersection.intersectPolygonPolygon = function(t, i) {
      for (var n = new e, o = t.length, r = 0; r < o; r++) {
        var s = t[r],
          a = t[(r + 1) % o],
          l = e.intersectLinePolygon(s, a, i);
        n.appendPoints(l.points)
      }
      return n.points.length > 0 && (n.status = "Intersection"), n
    }, void(i.Intersection.intersectPolygonRectangle = function(t, n, o) {
      var r = n.min(o),
        s = n.max(o),
        a = new i.Point(s.x, r.y),
        l = new i.Point(r.x, s.y),
        c = e.intersectLinePolygon(r, a, t),
        h = e.intersectLinePolygon(a, s, t),
        u = e.intersectLinePolygon(s, l, t),
        d = e.intersectLinePolygon(l, r, t),
        p = new e;
      return p.appendPoints(c.points), p.appendPoints(h.points), p.appendPoints(u.points), p.appendPoints(d.points), p.points.length > 0 && (p.status = "Intersection"), p
    }))
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";

    function e(t) {
      t ? this._tryParsingColor(t) : this.setSource([0, 0, 0, 1])
    }

    function i(t, e, i) {
      return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
    }
    var n = t.fabric || (t.fabric = {});
    return n.Color ? void n.warn("fabric.Color is already defined.") : (n.Color = e, n.Color.prototype = {
      _tryParsingColor: function(t) {
        var i;
        t in e.colorNameMap && (t = e.colorNameMap[t]), "transparent" === t && (i = [255, 255, 255, 0]), i || (i = e.sourceFromHex(t)), i || (i = e.sourceFromRgb(t)), i || (i = e.sourceFromHsl(t)), i || (i = [0, 0, 0, 1]), i && this.setSource(i)
      },
      _rgbToHsl: function(t, e, i) {
        t /= 255, e /= 255, i /= 255;
        var o, r, s, a = n.util.array.max([t, e, i]),
          l = n.util.array.min([t, e, i]);
        if (s = (a + l) / 2, a === l) o = r = 0;
        else {
          var c = a - l;
          switch (r = s > .5 ? c / (2 - a - l) : c / (a + l), a) {
            case t:
              o = (e - i) / c + (e < i ? 6 : 0);
              break;
            case e:
              o = (i - t) / c + 2;
              break;
            case i:
              o = (t - e) / c + 4
          }
          o /= 6
        }
        return [Math.round(360 * o), Math.round(100 * r), Math.round(100 * s)]
      },
      getSource: function() {
        return this._source
      },
      setSource: function(t) {
        this._source = t
      },
      toRgb: function() {
        var t = this.getSource();
        return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
      },
      toRgba: function() {
        var t = this.getSource();
        return "rgba(" + t[0] + "," + t[1] + "," + t[2] + "," + t[3] + ")"
      },
      toHsl: function() {
        var t = this.getSource(),
          e = this._rgbToHsl(t[0], t[1], t[2]);
        return "hsl(" + e[0] + "," + e[1] + "%," + e[2] + "%)"
      },
      toHsla: function() {
        var t = this.getSource(),
          e = this._rgbToHsl(t[0], t[1], t[2]);
        return "hsla(" + e[0] + "," + e[1] + "%," + e[2] + "%," + t[3] + ")"
      },
      toHex: function() {
        var t, e, i, n = this.getSource();
        return t = n[0].toString(16), t = 1 === t.length ? "0" + t : t, e = n[1].toString(16), e = 1 === e.length ? "0" + e : e, i = n[2].toString(16), i = 1 === i.length ? "0" + i : i, t.toUpperCase() + e.toUpperCase() + i.toUpperCase()
      },
      toHexa: function() {
        var t, e = this.getSource();
        return t = 255 * e[3], t = t.toString(16), t = 1 === t.length ? "0" + t : t, this.toHex() + t.toUpperCase()
      },
      getAlpha: function() {
        return this.getSource()[3]
      },
      setAlpha: function(t) {
        var e = this.getSource();
        return e[3] = t, this.setSource(e), this
      },
      toGrayscale: function() {
        var t = this.getSource(),
          e = parseInt((.3 * t[0] + .59 * t[1] + .11 * t[2]).toFixed(0), 10),
          i = t[3];
        return this.setSource([e, e, e, i]), this
      },
      toBlackWhite: function(t) {
        var e = this.getSource(),
          i = (.3 * e[0] + .59 * e[1] + .11 * e[2]).toFixed(0),
          n = e[3];
        return t = t || 127, i = Number(i) < Number(t) ? 0 : 255, this.setSource([i, i, i, n]), this
      },
      overlayWith: function(t) {
        t instanceof e || (t = new e(t));
        for (var i = [], n = this.getAlpha(), o = .5, r = this.getSource(), s = t.getSource(), a = 0; a < 3; a++) i.push(Math.round(r[a] * (1 - o) + s[a] * o));
        return i[3] = n, this.setSource(i), this
      }
    }, n.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/, n.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/, n.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, n.Color.colorNameMap = {
      aqua: "#00FFFF",
      black: "#000000",
      blue: "#0000FF",
      fuchsia: "#FF00FF",
      gray: "#808080",
      grey: "#808080",
      green: "#008000",
      lime: "#00FF00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      orange: "#FFA500",
      purple: "#800080",
      red: "#FF0000",
      silver: "#C0C0C0",
      teal: "#008080",
      white: "#FFFFFF",
      yellow: "#FFFF00"
    }, n.Color.fromRgb = function(t) {
      return e.fromSource(e.sourceFromRgb(t))
    }, n.Color.sourceFromRgb = function(t) {
      var i = t.match(e.reRGBa);
      if (i) {
        var n = parseInt(i[1], 10) / (/%$/.test(i[1]) ? 100 : 1) * (/%$/.test(i[1]) ? 255 : 1),
          o = parseInt(i[2], 10) / (/%$/.test(i[2]) ? 100 : 1) * (/%$/.test(i[2]) ? 255 : 1),
          r = parseInt(i[3], 10) / (/%$/.test(i[3]) ? 100 : 1) * (/%$/.test(i[3]) ? 255 : 1);
        return [parseInt(n, 10), parseInt(o, 10), parseInt(r, 10), i[4] ? parseFloat(i[4]) : 1]
      }
    }, n.Color.fromRgba = e.fromRgb, n.Color.fromHsl = function(t) {
      return e.fromSource(e.sourceFromHsl(t))
    }, n.Color.sourceFromHsl = function(t) {
      var n = t.match(e.reHSLa);
      if (n) {
        var o, r, s, a = (parseFloat(n[1]) % 360 + 360) % 360 / 360,
          l = parseFloat(n[2]) / (/%$/.test(n[2]) ? 100 : 1),
          c = parseFloat(n[3]) / (/%$/.test(n[3]) ? 100 : 1);
        if (0 === l) o = r = s = c;
        else {
          var h = c <= .5 ? c * (l + 1) : c + l - c * l,
            u = 2 * c - h;
          o = i(u, h, a + 1 / 3), r = i(u, h, a), s = i(u, h, a - 1 / 3)
        }
        return [Math.round(255 * o), Math.round(255 * r), Math.round(255 * s), n[4] ? parseFloat(n[4]) : 1]
      }
    }, n.Color.fromHsla = e.fromHsl, n.Color.fromHex = function(t) {
      return e.fromSource(e.sourceFromHex(t))
    }, n.Color.sourceFromHex = function(t) {
      if (t.match(e.reHex)) {
        var i = t.slice(t.indexOf("#") + 1),
          n = 3 === i.length || 4 === i.length,
          o = 8 === i.length || 4 === i.length,
          r = n ? i.charAt(0) + i.charAt(0) : i.substring(0, 2),
          s = n ? i.charAt(1) + i.charAt(1) : i.substring(2, 4),
          a = n ? i.charAt(2) + i.charAt(2) : i.substring(4, 6),
          l = o ? n ? i.charAt(3) + i.charAt(3) : i.substring(6, 8) : "FF";
        return [parseInt(r, 16), parseInt(s, 16), parseInt(a, 16), parseFloat((parseInt(l, 16) / 255).toFixed(2))]
      }
    }, void(n.Color.fromSource = function(t) {
      var i = new e;
      return i.setSource(t), i
    }))
  }("undefined" != typeof exports ? exports : this),
  function() {
    function t(t) {
      var e, i, n, o = t.getAttribute("style"),
        r = t.getAttribute("offset") || 0;
      if (r = parseFloat(r) / (/%$/.test(r) ? 100 : 1), r = r < 0 ? 0 : r > 1 ? 1 : r, o) {
        var s = o.split(/\s*;\s*/);
        "" === s[s.length - 1] && s.pop();
        for (var a = s.length; a--;) {
          var l = s[a].split(/\s*:\s*/),
            c = l[0].trim(),
            h = l[1].trim();
          "stop-color" === c ? e = h : "stop-opacity" === c && (n = h)
        }
      }
      return e || (e = t.getAttribute("stop-color") || "rgb(0,0,0)"), n || (n = t.getAttribute("stop-opacity")), e = new fabric.Color(e), i = e.getAlpha(), n = isNaN(parseFloat(n)) ? 1 : parseFloat(n), n *= i, {
        offset: r,
        color: e.toRgb(),
        opacity: n
      }
    }

    function e(t) {
      return {
        x1: t.getAttribute("x1") || 0,
        y1: t.getAttribute("y1") || 0,
        x2: t.getAttribute("x2") || "100%",
        y2: t.getAttribute("y2") || 0
      }
    }

    function i(t) {
      return {
        x1: t.getAttribute("fx") || t.getAttribute("cx") || "50%",
        y1: t.getAttribute("fy") || t.getAttribute("cy") || "50%",
        r1: 0,
        x2: t.getAttribute("cx") || "50%",
        y2: t.getAttribute("cy") || "50%",
        r2: t.getAttribute("r") || "50%"
      }
    }

    function n(t, e, i) {
      var n, o = 0,
        r = 1,
        s = "";
      for (var a in e) "Infinity" === e[a] ? e[a] = 1 : "-Infinity" === e[a] && (e[a] = 0), n = parseFloat(e[a], 10), r = "string" == typeof e[a] && /^\d+%$/.test(e[a]) ? .01 : 1, "x1" === a || "x2" === a || "r2" === a ? (r *= "objectBoundingBox" === i ? t.width : 1, o = "objectBoundingBox" === i ? t.left || 0 : 0) : "y1" !== a && "y2" !== a || (r *= "objectBoundingBox" === i ? t.height : 1, o = "objectBoundingBox" === i ? t.top || 0 : 0), e[a] = n * r + o;
      if ("ellipse" === t.type && null !== e.r2 && "objectBoundingBox" === i && t.rx !== t.ry) {
        var l = t.ry / t.rx;
        s = " scale(1, " + l + ")", e.y1 && (e.y1 /= l), e.y2 && (e.y2 /= l)
      }
      return s
    }
    fabric.Gradient = fabric.util.createClass({
      offsetX: 0,
      offsetY: 0,
      initialize: function(t) {
        t || (t = {});
        var e = {};
        this.id = fabric.Object.__uid++, this.type = t.type || "linear", e = {
          x1: t.coords.x1 || 0,
          y1: t.coords.y1 || 0,
          x2: t.coords.x2 || 0,
          y2: t.coords.y2 || 0
        }, "radial" === this.type && (e.r1 = t.coords.r1 || 0, e.r2 = t.coords.r2 || 0), this.coords = e, this.colorStops = t.colorStops.slice(), t.gradientTransform && (this.gradientTransform = t.gradientTransform), this.offsetX = t.offsetX || this.offsetX, this.offsetY = t.offsetY || this.offsetY
      },
      addColorStop: function(t) {
        for (var e in t) {
          var i = new fabric.Color(t[e]);
          this.colorStops.push({
            offset: e,
            color: i.toRgb(),
            opacity: i.getAlpha()
          })
        }
        return this
      },
      toObject: function(t) {
        var e = {
          type: this.type,
          coords: this.coords,
          colorStops: this.colorStops,
          offsetX: this.offsetX,
          offsetY: this.offsetY,
          gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
        };
        return fabric.util.populateWithProperties(this, e, t), e
      },
      toSVG: function(t) {
        var e, i, n = fabric.util.object.clone(this.coords);
        if (this.colorStops.sort(function(t, e) {
            return t.offset - e.offset
          }), !t.group || "path-group" !== t.group.type)
          for (var o in n) "x1" === o || "x2" === o || "r2" === o ? n[o] += this.offsetX - t.width / 2 : "y1" !== o && "y2" !== o || (n[o] += this.offsetY - t.height / 2);
        i = 'id="SVGID_' + this.id + '" gradientUnits="userSpaceOnUse"', this.gradientTransform && (i += ' gradientTransform="matrix(' + this.gradientTransform.join(" ") + ')" '), "linear" === this.type ? e = ["<linearGradient ", i, ' x1="', n.x1, '" y1="', n.y1, '" x2="', n.x2, '" y2="', n.y2, '">\n'] : "radial" === this.type && (e = ["<radialGradient ", i, ' cx="', n.x2, '" cy="', n.y2, '" r="', n.r2, '" fx="', n.x1, '" fy="', n.y1, '">\n']);
        for (var r = 0; r < this.colorStops.length; r++) e.push("<stop ", 'offset="', 100 * this.colorStops[r].offset + "%", '" style="stop-color:', this.colorStops[r].color, null !== this.colorStops[r].opacity ? ";stop-opacity: " + this.colorStops[r].opacity : ";", '"/>\n');
        return e.push("linear" === this.type ? "</linearGradient>\n" : "</radialGradient>\n"), e.join("")
      },
      toLive: function(t, e) {
        var i, n, o = fabric.util.object.clone(this.coords);
        if (this.type) {
          if (e.group && "path-group" === e.group.type)
            for (n in o) "x1" === n || "x2" === n ? o[n] += -this.offsetX + e.width / 2 : "y1" !== n && "y2" !== n || (o[n] += -this.offsetY + e.height / 2);
          "linear" === this.type ? i = t.createLinearGradient(o.x1, o.y1, o.x2, o.y2) : "radial" === this.type && (i = t.createRadialGradient(o.x1, o.y1, o.r1, o.x2, o.y2, o.r2));
          for (var r = 0, s = this.colorStops.length; r < s; r++) {
            var a = this.colorStops[r].color,
              l = this.colorStops[r].opacity,
              c = this.colorStops[r].offset;
            "undefined" != typeof l && (a = new fabric.Color(a).setAlpha(l).toRgba()), i.addColorStop(parseFloat(c), a)
          }
          return i
        }
      }
    }), fabric.util.object.extend(fabric.Gradient, {
      fromElement: function(o, r) {
        var s, a, l, c = o.getElementsByTagName("stop"),
          h = o.getAttribute("gradientUnits") || "objectBoundingBox",
          u = o.getAttribute("gradientTransform"),
          d = [];
        s = "linearGradient" === o.nodeName || "LINEARGRADIENT" === o.nodeName ? "linear" : "radial", "linear" === s ? a = e(o) : "radial" === s && (a = i(o));
        for (var p = c.length; p--;) d.push(t(c[p]));
        l = n(r, a, h);
        var f = new fabric.Gradient({
          type: s,
          coords: a,
          colorStops: d,
          offsetX: -r.left,
          offsetY: -r.top
        });
        return (u || "" !== l) && (f.gradientTransform = fabric.parseTransformAttribute((u || "") + l)), f
      },
      forObject: function(t, e) {
        return e || (e = {}), n(t, e.coords, "userSpaceOnUse"), new fabric.Gradient(e)
      }
    })
  }(),
  function() {
    "use strict";
    var t = fabric.util.toFixed;
    fabric.Pattern = fabric.util.createClass({
      repeat: "repeat",
      offsetX: 0,
      offsetY: 0,
      initialize: function(t, e) {
        if (t || (t = {}), this.id = fabric.Object.__uid++, this.setOptions(t), !t.source || t.source && "string" != typeof t.source) return void(e && e(this));
        if ("undefined" != typeof fabric.util.getFunctionBody(t.source)) this.source = new Function(fabric.util.getFunctionBody(t.source)), e && e(this);
        else {
          var i = this;
          this.source = fabric.util.createImage(), fabric.util.loadImage(t.source, function(t) {
            i.source = t, e && e(i)
          })
        }
      },
      toObject: function(e) {
        var i, n, o = fabric.Object.NUM_FRACTION_DIGITS;
        return "function" == typeof this.source ? i = String(this.source) : "string" == typeof this.source.src ? i = this.source.src : "object" == typeof this.source && this.source.toDataURL && (i = this.source.toDataURL()), n = {
          type: "pattern",
          source: i,
          repeat: this.repeat,
          offsetX: t(this.offsetX, o),
          offsetY: t(this.offsetY, o)
        }, fabric.util.populateWithProperties(this, n, e), n
      },
      toSVG: function(t) {
        var e = "function" == typeof this.source ? this.source() : this.source,
          i = e.width / t.width,
          n = e.height / t.height,
          o = this.offsetX / t.width,
          r = this.offsetY / t.height,
          s = "";
        return "repeat-x" !== this.repeat && "no-repeat" !== this.repeat || (n = 1), "repeat-y" !== this.repeat && "no-repeat" !== this.repeat || (i = 1), e.src ? s = e.src : e.toDataURL && (s = e.toDataURL()), '<pattern id="SVGID_' + this.id + '" x="' + o + '" y="' + r + '" width="' + i + '" height="' + n + '">\n<image x="0" y="0" width="' + e.width + '" height="' + e.height + '" xlink:href="' + s + '"></image>\n</pattern>\n'
      },
      setOptions: function(t) {
        for (var e in t) this[e] = t[e]
      },
      toLive: function(t) {
        var e = "function" == typeof this.source ? this.source() : this.source;
        if (!e) return "";
        if ("undefined" != typeof e.src) {
          if (!e.complete) return "";
          if (0 === e.naturalWidth || 0 === e.naturalHeight) return ""
        }
        return t.createPattern(e, this.repeat)
      }
    })
  }(),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.toFixed;
    return e.Shadow ? void e.warn("fabric.Shadow is already defined.") : (e.Shadow = e.util.createClass({
      color: "rgb(0,0,0)",
      blur: 0,
      offsetX: 0,
      offsetY: 0,
      affectStroke: !1,
      includeDefaultValues: !0,
      initialize: function(t) {
        "string" == typeof t && (t = this._parseShadow(t));
        for (var i in t) this[i] = t[i];
        this.id = e.Object.__uid++
      },
      _parseShadow: function(t) {
        var i = t.trim(),
          n = e.Shadow.reOffsetsAndBlur.exec(i) || [],
          o = i.replace(e.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)";
        return {
          color: o.trim(),
          offsetX: parseInt(n[1], 10) || 0,
          offsetY: parseInt(n[2], 10) || 0,
          blur: parseInt(n[3], 10) || 0
        }
      },
      toString: function() {
        return [this.offsetX, this.offsetY, this.blur, this.color].join("px ")
      },
      toSVG: function(t) {
        var n = 40,
          o = 40,
          r = e.Object.NUM_FRACTION_DIGITS,
          s = e.util.rotateVector({
            x: this.offsetX,
            y: this.offsetY
          }, e.util.degreesToRadians(-t.angle)),
          a = 20;
        return t.width && t.height && (n = 100 * i((Math.abs(s.x) + this.blur) / t.width, r) + a, o = 100 * i((Math.abs(s.y) + this.blur) / t.height, r) + a), t.flipX && (s.x *= -1), t.flipY && (s.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + o + '%" height="' + (100 + 2 * o) + '%" x="-' + n + '%" width="' + (100 + 2 * n) + '%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="' + i(this.blur ? this.blur / 2 : 0, r) + '"></feGaussianBlur>\n\t<feOffset dx="' + i(s.x, r) + '" dy="' + i(s.y, r) + '" result="oBlur" ></feOffset>\n\t<feFlood flood-color="' + this.color + '"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n'
      },
      toObject: function() {
        if (this.includeDefaultValues) return {
          color: this.color,
          blur: this.blur,
          offsetX: this.offsetX,
          offsetY: this.offsetY,
          affectStroke: this.affectStroke
        };
        var t = {},
          i = e.Shadow.prototype;
        return ["color", "blur", "offsetX", "offsetY", "affectStroke"].forEach(function(e) {
          this[e] !== i[e] && (t[e] = this[e])
        }, this), t
      }
    }), void(e.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/))
  }("undefined" != typeof exports ? exports : this),
  function() {
    "use strict";
    if (fabric.StaticCanvas) return void fabric.warn("fabric.StaticCanvas is already defined.");
    var t = fabric.util.object.extend,
      e = fabric.util.getElementOffset,
      i = fabric.util.removeFromArray,
      n = fabric.util.toFixed,
      o = fabric.util.transformPoint,
      r = fabric.util.invertTransform,
      s = new Error("Could not initialize `canvas` element");
    fabric.StaticCanvas = fabric.util.createClass(fabric.CommonMethods, {
      initialize: function(t, e) {
        e || (e = {}), this._initStatic(t, e)
      },
      backgroundColor: "",
      backgroundImage: null,
      overlayColor: "",
      overlayImage: null,
      includeDefaultValues: !0,
      stateful: !1,
      renderOnAddRemove: !0,
      clipTo: null,
      controlsAboveOverlay: !1,
      allowTouchScrolling: !1,
      imageSmoothingEnabled: !0,
      viewportTransform: fabric.iMatrix.concat(),
      backgroundVpt: !0,
      overlayVpt: !0,
      onBeforeScaleRotate: function() {},
      enableRetinaScaling: !0,
      vptCoords: {},
      _initStatic: function(t, e) {
        var i = fabric.StaticCanvas.prototype.renderAll.bind(this);
        this._objects = [], this._createLowerCanvas(t), this._initOptions(e), this._setImageSmoothing(), this.interactive || this._initRetinaScaling(), e.overlayImage && this.setOverlayImage(e.overlayImage, i), e.backgroundImage && this.setBackgroundImage(e.backgroundImage, i), e.backgroundColor && this.setBackgroundColor(e.backgroundColor, i), e.overlayColor && this.setOverlayColor(e.overlayColor, i), this.calcOffset()
      },
      _isRetinaScaling: function() {
        return 1 !== fabric.devicePixelRatio && this.enableRetinaScaling
      },
      getRetinaScaling: function() {
        return this._isRetinaScaling() ? fabric.devicePixelRatio : 1
      },
      _initRetinaScaling: function() {
        this._isRetinaScaling() && (this.lowerCanvasEl.setAttribute("width", this.width * fabric.devicePixelRatio), this.lowerCanvasEl.setAttribute("height", this.height * fabric.devicePixelRatio), this.contextContainer.scale(fabric.devicePixelRatio, fabric.devicePixelRatio))
      },
      calcOffset: function() {
        return this._offset = e(this.lowerCanvasEl), this
      },
      setOverlayImage: function(t, e, i) {
        return this.__setBgOverlayImage("overlayImage", t, e, i)
      },
      setBackgroundImage: function(t, e, i) {
        return this.__setBgOverlayImage("backgroundImage", t, e, i)
      },
      setOverlayColor: function(t, e) {
        return this.__setBgOverlayColor("overlayColor", t, e)
      },
      setBackgroundColor: function(t, e) {
        return this.__setBgOverlayColor("backgroundColor", t, e)
      },
      _setImageSmoothing: function() {
        var t = this.getContext();
        t.imageSmoothingEnabled = t.imageSmoothingEnabled || t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled || t.oImageSmoothingEnabled, t.imageSmoothingEnabled = this.imageSmoothingEnabled
      },
      __setBgOverlayImage: function(t, e, i, n) {
        return "string" == typeof e ? fabric.util.loadImage(e, function(e) {
          e && (this[t] = new fabric.Image(e, n)), i && i(e)
        }, this, n && n.crossOrigin) : (n && e.setOptions(n), this[t] = e, i && i(e)), this
      },
      __setBgOverlayColor: function(t, e, i) {
        return this[t] = e, this._initGradient(e, t), this._initPattern(e, t, i), this
      },
      _createCanvasElement: function(t) {
        var e = fabric.util.createCanvasElement(t);
        if (e.style || (e.style = {}), !e) throw s;
        if ("undefined" == typeof e.getContext) throw s;
        return e
      },
      _initOptions: function(t) {
        this._setOptions(t), this.width = this.width || parseInt(this.lowerCanvasEl.width, 10) || 0, this.height = this.height || parseInt(this.lowerCanvasEl.height, 10) || 0, this.lowerCanvasEl.style && (this.lowerCanvasEl.width = this.width, this.lowerCanvasEl.height = this.height, this.lowerCanvasEl.style.width = this.width + "px", this.lowerCanvasEl.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice());
      },
      _createLowerCanvas: function(t) {
        this.lowerCanvasEl = fabric.util.getById(t) || this._createCanvasElement(t), fabric.util.addClass(this.lowerCanvasEl, "lower-canvas"), this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d")
      },
      getWidth: function() {
        return this.width
      },
      getHeight: function() {
        return this.height
      },
      setWidth: function(t, e) {
        return this.setDimensions({
          width: t
        }, e)
      },
      setHeight: function(t, e) {
        return this.setDimensions({
          height: t
        }, e)
      },
      setDimensions: function(t, e) {
        var i;
        e = e || {};
        for (var n in t) i = t[n], e.cssOnly || (this._setBackstoreDimension(n, t[n]), i += "px"), e.backstoreOnly || this._setCssDimension(n, i);
        return this._initRetinaScaling(), this._setImageSmoothing(), this.calcOffset(), e.cssOnly || this.renderAll(), this
      },
      _setBackstoreDimension: function(t, e) {
        return this.lowerCanvasEl[t] = e, this.upperCanvasEl && (this.upperCanvasEl[t] = e), this.cacheCanvasEl && (this.cacheCanvasEl[t] = e), this[t] = e, this
      },
      _setCssDimension: function(t, e) {
        return this.lowerCanvasEl.style[t] = e, this.upperCanvasEl && (this.upperCanvasEl.style[t] = e), this.wrapperEl && (this.wrapperEl.style[t] = e), this
      },
      getZoom: function() {
        return this.viewportTransform[0]
      },
      setViewportTransform: function(t) {
        var e, i = this._activeGroup,
          n = !1,
          o = !0;
        this.viewportTransform = t;
        for (var r = 0, s = this._objects.length; r < s; r++) e = this._objects[r], e.group || e.setCoords(n, o);
        return i && i.setCoords(n, o), this.calcViewportBoundaries(), this.renderAll(), this
      },
      zoomToPoint: function(t, e) {
        var i = t,
          n = this.viewportTransform.slice(0);
        t = o(t, r(this.viewportTransform)), n[0] = e, n[3] = e;
        var s = o(t, n);
        return n[4] += i.x - s.x, n[5] += i.y - s.y, this.setViewportTransform(n)
      },
      setZoom: function(t) {
        return this.zoomToPoint(new fabric.Point(0, 0), t), this
      },
      absolutePan: function(t) {
        var e = this.viewportTransform.slice(0);
        return e[4] = -t.x, e[5] = -t.y, this.setViewportTransform(e)
      },
      relativePan: function(t) {
        return this.absolutePan(new fabric.Point(-t.x - this.viewportTransform[4], -t.y - this.viewportTransform[5]))
      },
      getElement: function() {
        return this.lowerCanvasEl
      },
      _onObjectAdded: function(t) {
        this.stateful && t.setupState(), t._set("canvas", this), t.setCoords(), this.fire("object:added", {
          target: t
        }), t.fire("added")
      },
      _onObjectRemoved: function(t) {
        this.fire("object:removed", {
          target: t
        }), t.fire("removed"), delete t.canvas
      },
      clearContext: function(t) {
        return t.clearRect(0, 0, this.width, this.height), this
      },
      getContext: function() {
        return this.contextContainer
      },
      clear: function() {
        return this._objects.length = 0, this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderAll(), this
      },
      renderAll: function() {
        var t = this.contextContainer;
        return this.renderCanvas(t, this._objects), this
      },
      calcViewportBoundaries: function() {
        var t = {},
          e = this.getWidth(),
          i = this.getHeight(),
          n = r(this.viewportTransform);
        return t.tl = o({
          x: 0,
          y: 0
        }, n), t.br = o({
          x: e,
          y: i
        }, n), t.tr = new fabric.Point(t.br.x, t.tl.y), t.bl = new fabric.Point(t.tl.x, t.br.y), this.vptCoords = t, t
      },
      renderCanvas: function(t, e) {
        this.calcViewportBoundaries(), this.clearContext(t), this.fire("before:render"), this.clipTo && fabric.util.clipContext(this, t), this._renderBackground(t), t.save(), t.transform.apply(t, this.viewportTransform), this._renderObjects(t, e), t.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(t), this.clipTo && t.restore(), this._renderOverlay(t), this.controlsAboveOverlay && this.interactive && this.drawControls(t), this.fire("after:render")
      },
      _renderObjects: function(t, e) {
        for (var i = 0, n = e.length; i < n; ++i) e[i] && e[i].render(t)
      },
      _renderBackgroundOrOverlay: function(t, e) {
        var i = this[e + "Color"];
        i && (t.fillStyle = i.toLive ? i.toLive(t, this) : i, t.fillRect(i.offsetX || 0, i.offsetY || 0, this.width, this.height)), i = this[e + "Image"], i && (this[e + "Vpt"] && (t.save(), t.transform.apply(t, this.viewportTransform)), i.render(t), this[e + "Vpt"] && t.restore())
      },
      _renderBackground: function(t) {
        this._renderBackgroundOrOverlay(t, "background")
      },
      _renderOverlay: function(t) {
        this._renderBackgroundOrOverlay(t, "overlay")
      },
      getCenter: function() {
        return {
          top: this.getHeight() / 2,
          left: this.getWidth() / 2
        }
      },
      centerObjectH: function(t) {
        return this._centerObject(t, new fabric.Point(this.getCenter().left, t.getCenterPoint().y))
      },
      centerObjectV: function(t) {
        return this._centerObject(t, new fabric.Point(t.getCenterPoint().x, this.getCenter().top))
      },
      centerObject: function(t) {
        var e = this.getCenter();
        return this._centerObject(t, new fabric.Point(e.left, e.top))
      },
      viewportCenterObject: function(t) {
        var e = this.getVpCenter();
        return this._centerObject(t, e)
      },
      viewportCenterObjectH: function(t) {
        var e = this.getVpCenter();
        return this._centerObject(t, new fabric.Point(e.x, t.getCenterPoint().y)), this
      },
      viewportCenterObjectV: function(t) {
        var e = this.getVpCenter();
        return this._centerObject(t, new fabric.Point(t.getCenterPoint().x, e.y))
      },
      getVpCenter: function() {
        var t = this.getCenter(),
          e = r(this.viewportTransform);
        return o({
          x: t.left,
          y: t.top
        }, e)
      },
      _centerObject: function(t, e) {
        return t.setPositionByOrigin(e, "center", "center"), this.renderAll(), this
      },
      toDatalessJSON: function(t) {
        return this.toDatalessObject(t)
      },
      toObject: function(t) {
        return this._toObjectMethod("toObject", t)
      },
      toDatalessObject: function(t) {
        return this._toObjectMethod("toDatalessObject", t)
      },
      _toObjectMethod: function(e, i) {
        var n = {
          objects: this._toObjects(e, i)
        };
        return t(n, this.__serializeBgOverlay(e, i)), fabric.util.populateWithProperties(this, n, i), n
      },
      _toObjects: function(t, e) {
        return this.getObjects().filter(function(t) {
          return !t.excludeFromExport
        }).map(function(i) {
          return this._toObject(i, t, e)
        }, this)
      },
      _toObject: function(t, e, i) {
        var n;
        this.includeDefaultValues || (n = t.includeDefaultValues, t.includeDefaultValues = !1);
        var o = t[e](i);
        return this.includeDefaultValues || (t.includeDefaultValues = n), o
      },
      __serializeBgOverlay: function(t, e) {
        var i = {};
        return this.backgroundColor && (i.background = this.backgroundColor.toObject ? this.backgroundColor.toObject(e) : this.backgroundColor), this.overlayColor && (i.overlay = this.overlayColor.toObject ? this.overlayColor.toObject(e) : this.overlayColor), this.backgroundImage && (i.backgroundImage = this._toObject(this.backgroundImage, t, e)), this.overlayImage && (i.overlayImage = this._toObject(this.overlayImage, t, e)), i
      },
      svgViewportTransformation: !0,
      toSVG: function(t, e) {
        t || (t = {});
        var i = [];
        return this._setSVGPreamble(i, t), this._setSVGHeader(i, t), this._setSVGBgOverlayColor(i, "backgroundColor"), this._setSVGBgOverlayImage(i, "backgroundImage", e), this._setSVGObjects(i, e), this._setSVGBgOverlayColor(i, "overlayColor"), this._setSVGBgOverlayImage(i, "overlayImage", e), i.push("</svg>"), i.join("")
      },
      _setSVGPreamble: function(t, e) {
        e.suppressPreamble || t.push('<?xml version="1.0" encoding="', e.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')
      },
      _setSVGHeader: function(t, e) {
        var i, o = e.width || this.width,
          r = e.height || this.height,
          s = 'viewBox="0 0 ' + this.width + " " + this.height + '" ',
          a = fabric.Object.NUM_FRACTION_DIGITS;
        e.viewBox ? s = 'viewBox="' + e.viewBox.x + " " + e.viewBox.y + " " + e.viewBox.width + " " + e.viewBox.height + '" ' : this.svgViewportTransformation && (i = this.viewportTransform, s = 'viewBox="' + n(-i[4] / i[0], a) + " " + n(-i[5] / i[3], a) + " " + n(this.width / i[0], a) + " " + n(this.height / i[3], a) + '" '), t.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', o, '" ', 'height="', r, '" ', s, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", fabric.version, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), "</defs>\n")
      },
      createSVGRefElementsMarkup: function() {
        var t = this,
          e = ["backgroundColor", "overlayColor"].map(function(e) {
            var i = t[e];
            if (i && i.toLive) return i.toSVG(t, !1)
          });
        return e.join("")
      },
      createSVGFontFacesMarkup: function() {
        for (var t, e, i, n, o, r, s, a = "", l = {}, c = fabric.fontPaths, h = this.getObjects(), u = 0, d = h.length; u < d; u++)
          if (t = h[u], e = t.fontFamily, t.type.indexOf("text") !== -1 && !l[e] && c[e] && (l[e] = !0, t.styles)) {
            i = t.styles;
            for (o in i) {
              n = i[o];
              for (s in n) r = n[s], e = r.fontFamily, !l[e] && c[e] && (l[e] = !0)
            }
          }
        for (var p in l) a += ["\t\t@font-face {\n", "\t\t\tfont-family: '", p, "';\n", "\t\t\tsrc: url('", c[p], "');\n", "\t\t}\n"].join("");
        return a && (a = ['\t<style type="text/css">', "<![CDATA[\n", a, "]]>", "</style>\n"].join("")), a
      },
      _setSVGObjects: function(t, e) {
        for (var i, n = 0, o = this.getObjects(), r = o.length; n < r; n++) i = o[n], i.excludeFromExport || this._setSVGObject(t, i, e)
      },
      _setSVGObject: function(t, e, i) {
        t.push(e.toSVG(i))
      },
      _setSVGBgOverlayImage: function(t, e, i) {
        this[e] && this[e].toSVG && t.push(this[e].toSVG(i))
      },
      _setSVGBgOverlayColor: function(t, e) {
        var i = this[e];
        if (i)
          if (i.toLive) {
            var n = i.repeat;
            t.push('<rect transform="translate(', this.width / 2, ",", this.height / 2, ')"', ' x="', i.offsetX - this.width / 2, '" y="', i.offsetY - this.height / 2, '" ', 'width="', "repeat-y" === n || "no-repeat" === n ? i.source.width : this.width, '" height="', "repeat-x" === n || "no-repeat" === n ? i.source.height : this.height, '" fill="url(#SVGID_' + i.id + ')"', "></rect>\n")
          } else t.push('<rect x="0" y="0" ', 'width="', this.width, '" height="', this.height, '" fill="', this[e], '"', "></rect>\n")
      },
      sendToBack: function(t) {
        if (!t) return this;
        var e, n, o, r = this._activeGroup;
        if (t === r)
          for (o = r._objects, e = o.length; e--;) n = o[e], i(this._objects, n), this._objects.unshift(n);
        else i(this._objects, t), this._objects.unshift(t);
        return this.renderAll && this.renderAll()
      },
      bringToFront: function(t) {
        if (!t) return this;
        var e, n, o, r = this._activeGroup;
        if (t === r)
          for (o = r._objects, e = 0; e < o.length; e++) n = o[e], i(this._objects, n), this._objects.push(n);
        else i(this._objects, t), this._objects.push(t);
        return this.renderAll && this.renderAll()
      },
      sendBackwards: function(t, e) {
        if (!t) return this;
        var n, o, r, s, a, l = this._activeGroup;
        if (t === l)
          for (a = l._objects, n = 0; n < a.length; n++) o = a[n], r = this._objects.indexOf(o), 0 !== r && (s = r - 1, i(this._objects, o), this._objects.splice(s, 0, o));
        else r = this._objects.indexOf(t), 0 !== r && (s = this._findNewLowerIndex(t, r, e), i(this._objects, t), this._objects.splice(s, 0, t));
        return this.renderAll && this.renderAll(), this
      },
      _findNewLowerIndex: function(t, e, i) {
        var n;
        if (i) {
          n = e;
          for (var o = e - 1; o >= 0; --o) {
            var r = t.intersectsWithObject(this._objects[o]) || t.isContainedWithinObject(this._objects[o]) || this._objects[o].isContainedWithinObject(t);
            if (r) {
              n = o;
              break
            }
          }
        } else n = e - 1;
        return n
      },
      bringForward: function(t, e) {
        if (!t) return this;
        var n, o, r, s, a, l = this._activeGroup;
        if (t === l)
          for (a = l._objects, n = a.length; n--;) o = a[n], r = this._objects.indexOf(o), r !== this._objects.length - 1 && (s = r + 1, i(this._objects, o), this._objects.splice(s, 0, o));
        else r = this._objects.indexOf(t), r !== this._objects.length - 1 && (s = this._findNewUpperIndex(t, r, e), i(this._objects, t), this._objects.splice(s, 0, t));
        return this.renderAll && this.renderAll(), this
      },
      _findNewUpperIndex: function(t, e, i) {
        var n;
        if (i) {
          n = e;
          for (var o = e + 1; o < this._objects.length; ++o) {
            var r = t.intersectsWithObject(this._objects[o]) || t.isContainedWithinObject(this._objects[o]) || this._objects[o].isContainedWithinObject(t);
            if (r) {
              n = o;
              break
            }
          }
        } else n = e + 1;
        return n
      },
      moveTo: function(t, e) {
        return i(this._objects, t), this._objects.splice(e, 0, t), this.renderAll && this.renderAll()
      },
      dispose: function() {
        return this.clear(), this
      },
      toString: function() {
        return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this.getObjects().length + " }>"
      }
    }), t(fabric.StaticCanvas.prototype, fabric.Observable), t(fabric.StaticCanvas.prototype, fabric.Collection), t(fabric.StaticCanvas.prototype, fabric.DataURLExporter), t(fabric.StaticCanvas, {
      EMPTY_JSON: '{"objects": [], "background": "white"}',
      supports: function(t) {
        var e = fabric.util.createCanvasElement();
        if (!e || !e.getContext) return null;
        var i = e.getContext("2d");
        if (!i) return null;
        switch (t) {
          case "getImageData":
            return "undefined" != typeof i.getImageData;
          case "setLineDash":
            return "undefined" != typeof i.setLineDash;
          case "toDataURL":
            return "undefined" != typeof e.toDataURL;
          case "toDataURLWithQuality":
            try {
              return e.toDataURL("image/jpeg", 0), !0
            } catch (t) {}
            return !1;
          default:
            return null
        }
      }
    }), fabric.StaticCanvas.prototype.toJSON = fabric.StaticCanvas.prototype.toObject
  }(), fabric.BaseBrush = fabric.util.createClass({
  color: "rgb(0, 0, 0)",
  width: 1,
  shadow: null,
  strokeLineCap: "round",
  strokeLineJoin: "round",
  strokeDashArray: null,
  setShadow: function(t) {
    return this.shadow = new fabric.Shadow(t), this
  },
  _setBrushStyles: function() {
    var t = this.canvas.contextTop;
    t.strokeStyle = this.color, t.lineWidth = this.width, t.lineCap = this.strokeLineCap, t.lineJoin = this.strokeLineJoin, this.strokeDashArray && fabric.StaticCanvas.supports("setLineDash") && t.setLineDash(this.strokeDashArray)
  },
  _setShadow: function() {
    if (this.shadow) {
      var t = this.canvas.contextTop,
        e = this.canvas.getZoom();
      t.shadowColor = this.shadow.color, t.shadowBlur = this.shadow.blur * e, t.shadowOffsetX = this.shadow.offsetX * e, t.shadowOffsetY = this.shadow.offsetY * e
    }
  },
  _resetShadow: function() {
    var t = this.canvas.contextTop;
    t.shadowColor = "", t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0
  }
}),
  function() {
    fabric.PencilBrush = fabric.util.createClass(fabric.BaseBrush, {
      initialize: function(t) {
        this.canvas = t, this._points = []
      },
      onMouseDown: function(t) {
        this._prepareForDrawing(t), this._captureDrawingPath(t), this._render()
      },
      onMouseMove: function(t) {
        this._captureDrawingPath(t), this.canvas.clearContext(this.canvas.contextTop), this._render()
      },
      onMouseUp: function() {
        this._finalizeAndAddPath()
      },
      _prepareForDrawing: function(t) {
        var e = new fabric.Point(t.x, t.y);
        this._reset(), this._addPoint(e), this.canvas.contextTop.moveTo(e.x, e.y)
      },
      _addPoint: function(t) {
        this._points.push(t)
      },
      _reset: function() {
        this._points.length = 0, this._setBrushStyles(), this._setShadow()
      },
      _captureDrawingPath: function(t) {
        var e = new fabric.Point(t.x, t.y);
        this._addPoint(e)
      },
      _render: function() {
        var t = this.canvas.contextTop,
          e = this.canvas.viewportTransform,
          i = this._points[0],
          n = this._points[1];
        t.save(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5]), t.beginPath(), 2 === this._points.length && i.x === n.x && i.y === n.y && (i.x -= .5, n.x += .5), t.moveTo(i.x, i.y);
        for (var o = 1, r = this._points.length; o < r; o++) {
          var s = i.midPointFrom(n);
          t.quadraticCurveTo(i.x, i.y, s.x, s.y), i = this._points[o], n = this._points[o + 1]
        }
        t.lineTo(i.x, i.y), t.stroke(), t.restore()
      },
      convertPointsToSVGPath: function(t) {
        var e = [],
          i = new fabric.Point(t[0].x, t[0].y),
          n = new fabric.Point(t[1].x, t[1].y);
        e.push("M ", t[0].x, " ", t[0].y, " ");
        for (var o = 1, r = t.length; o < r; o++) {
          var s = i.midPointFrom(n);
          e.push("Q ", i.x, " ", i.y, " ", s.x, " ", s.y, " "), i = new fabric.Point(t[o].x, t[o].y), o + 1 < t.length && (n = new fabric.Point(t[o + 1].x, t[o + 1].y))
        }
        return e.push("L ", i.x, " ", i.y, " "), e
      },
      createPath: function(t) {
        var e = new fabric.Path(t, {
          fill: null,
          stroke: this.color,
          strokeWidth: this.width,
          strokeLineCap: this.strokeLineCap,
          strokeLineJoin: this.strokeLineJoin,
          strokeDashArray: this.strokeDashArray,
          originX: "center",
          originY: "center"
        });
        return this.shadow && (this.shadow.affectStroke = !0, e.setShadow(this.shadow)), e
      },
      _finalizeAndAddPath: function() {
        var t = this.canvas.contextTop;
        t.closePath();
        var e = this.convertPointsToSVGPath(this._points).join("");
        if ("M 0 0 Q 0 0 0 0 L 0 0" === e) return void this.canvas.renderAll();
        var i = this.createPath(e);
        this.canvas.add(i), i.setCoords(), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderAll(), this.canvas.fire("path:created", {
          path: i
        })
      }
    })
  }(), fabric.CircleBrush = fabric.util.createClass(fabric.BaseBrush, {
  width: 10,
  initialize: function(t) {
    this.canvas = t, this.points = []
  },
  drawDot: function(t) {
    var e = this.addPoint(t),
      i = this.canvas.contextTop,
      n = this.canvas.viewportTransform;
    i.save(), i.transform(n[0], n[1], n[2], n[3], n[4], n[5]), i.fillStyle = e.fill, i.beginPath(), i.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !1), i.closePath(), i.fill(), i.restore()
  },
  onMouseDown: function(t) {
    this.points.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(t)
  },
  onMouseMove: function(t) {
    this.drawDot(t)
  },
  onMouseUp: function() {
    var t = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = !1;
    for (var e = [], i = 0, n = this.points.length; i < n; i++) {
      var o = this.points[i],
        r = new fabric.Circle({
          radius: o.radius,
          left: o.x,
          top: o.y,
          originX: "center",
          originY: "center",
          fill: o.fill
        });
      this.shadow && r.setShadow(this.shadow), e.push(r)
    }
    var s = new fabric.Group(e, {
      originX: "center",
      originY: "center"
    });
    s.canvas = this.canvas, this.canvas.add(s), this.canvas.fire("path:created", {
      path: s
    }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = t, this.canvas.renderAll()
  },
  addPoint: function(t) {
    var e = new fabric.Point(t.x, t.y),
      i = fabric.util.getRandomInt(Math.max(0, this.width - 20), this.width + 20) / 2,
      n = new fabric.Color(this.color).setAlpha(fabric.util.getRandomInt(0, 100) / 100).toRgba();
    return e.radius = i, e.fill = n, this.points.push(e), e
  }
}), fabric.SprayBrush = fabric.util.createClass(fabric.BaseBrush, {
  width: 10,
  density: 20,
  dotWidth: 1,
  dotWidthVariance: 1,
  randomOpacity: !1,
  optimizeOverlapping: !0,
  initialize: function(t) {
    this.canvas = t, this.sprayChunks = []
  },
  onMouseDown: function(t) {
    this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(t), this.render()
  },
  onMouseMove: function(t) {
    this.addSprayChunk(t), this.render()
  },
  onMouseUp: function() {
    var t = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = !1;
    for (var e = [], i = 0, n = this.sprayChunks.length; i < n; i++)
      for (var o = this.sprayChunks[i], r = 0, s = o.length; r < s; r++) {
        var a = new fabric.Rect({
          width: o[r].width,
          height: o[r].width,
          left: o[r].x + 1,
          top: o[r].y + 1,
          originX: "center",
          originY: "center",
          fill: this.color
        });
        this.shadow && a.setShadow(this.shadow), e.push(a)
      }
    this.optimizeOverlapping && (e = this._getOptimizedRects(e));
    var l = new fabric.Group(e, {
      originX: "center",
      originY: "center"
    });
    l.canvas = this.canvas, this.canvas.add(l), this.canvas.fire("path:created", {
      path: l
    }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = t, this.canvas.renderAll()
  },
  _getOptimizedRects: function(t) {
    for (var e, i = {}, n = 0, o = t.length; n < o; n++) e = t[n].left + "" + t[n].top, i[e] || (i[e] = t[n]);
    var r = [];
    for (e in i) r.push(i[e]);
    return r
  },
  render: function() {
    var t = this.canvas.contextTop;
    t.fillStyle = this.color;
    var e = this.canvas.viewportTransform;
    t.save(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
    for (var i = 0, n = this.sprayChunkPoints.length; i < n; i++) {
      var o = this.sprayChunkPoints[i];
      "undefined" != typeof o.opacity && (t.globalAlpha = o.opacity), t.fillRect(o.x, o.y, o.width, o.width)
    }
    t.restore()
  },
  addSprayChunk: function(t) {
    this.sprayChunkPoints = [];
    for (var e, i, n, o = this.width / 2, r = 0; r < this.density; r++) {
      e = fabric.util.getRandomInt(t.x - o, t.x + o), i = fabric.util.getRandomInt(t.y - o, t.y + o), n = this.dotWidthVariance ? fabric.util.getRandomInt(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth;
      var s = new fabric.Point(e, i);
      s.width = n, this.randomOpacity && (s.opacity = fabric.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(s)
    }
    this.sprayChunks.push(this.sprayChunkPoints)
  }
}), fabric.PatternBrush = fabric.util.createClass(fabric.PencilBrush, {
  getPatternSrc: function() {
    var t = 20,
      e = 5,
      i = fabric.document.createElement("canvas"),
      n = i.getContext("2d");
    return i.width = i.height = t + e, n.fillStyle = this.color, n.beginPath(), n.arc(t / 2, t / 2, t / 2, 0, 2 * Math.PI, !1), n.closePath(), n.fill(), i
  },
  getPatternSrcFunction: function() {
    return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"')
  },
  getPattern: function() {
    return this.canvas.contextTop.createPattern(this.source || this.getPatternSrc(), "repeat")
  },
  _setBrushStyles: function() {
    this.callSuper("_setBrushStyles"), this.canvas.contextTop.strokeStyle = this.getPattern()
  },
  createPath: function(t) {
    var e = this.callSuper("createPath", t),
      i = e._getLeftTopCoords().scalarAdd(e.strokeWidth / 2);
    return e.stroke = new fabric.Pattern({
      source: this.source || this.getPatternSrcFunction(),
      offsetX: -i.x,
      offsetY: -i.y
    }), e
  }
}),
  function() {
    var t = fabric.util.getPointer,
      e = fabric.util.degreesToRadians,
      i = fabric.util.radiansToDegrees,
      n = Math.atan2,
      o = Math.abs,
      r = fabric.StaticCanvas.supports("setLineDash"),
      s = .5;
    fabric.Canvas = fabric.util.createClass(fabric.StaticCanvas, {
      initialize: function(t, e) {
        e || (e = {}), this._initStatic(t, e), this._initInteractive(), this._createCacheCanvas()
      },
      uniScaleTransform: !1,
      uniScaleKey: "shiftKey",
      centeredScaling: !1,
      centeredRotation: !1,
      centeredKey: "altKey",
      altActionKey: "shiftKey",
      interactive: !0,
      selection: !0,
      selectionKey: "shiftKey",
      altSelectionKey: null,
      selectionColor: "rgba(100, 100, 255, 0.3)",
      selectionDashArray: [],
      selectionBorderColor: "rgba(255, 255, 255, 0.3)",
      selectionLineWidth: 1,
      hoverCursor: "move",
      moveCursor: "move",
      defaultCursor: "default",
      freeDrawingCursor: "crosshair",
      rotationCursor: "crosshair",
      containerClass: "canvas-container",
      perPixelTargetFind: !1,
      targetFindTolerance: 0,
      skipTargetFind: !1,
      isDrawingMode: !1,
      preserveObjectStacking: !1,
      snapAngle: 0,
      snapThreshold: null,
      stopContextMenu: !1,
      fireRightClick: !1,
      _initInteractive: function() {
        this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = fabric.PencilBrush && new fabric.PencilBrush(this), this.calcOffset()
      },
      _chooseObjectsToRender: function() {
        var t, e = this.getActiveGroup(),
          i = this.getActiveObject(),
          n = [],
          o = [];
        if (!e && !i || this.preserveObjectStacking) n = this._objects;
        else {
          for (var r = 0, s = this._objects.length; r < s; r++) t = this._objects[r], e && e.contains(t) || t === i ? o.push(t) : n.push(t);
          e && (e._set("_objects", o), n.push(e)), i && n.push(i)
        }
        return n
      },
      renderAll: function() {
        !this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = !1);
        var t = this.contextContainer;
        return this.renderCanvas(t, this._chooseObjectsToRender()), this
      },
      renderTop: function() {
        var t = this.contextTop;
        return this.clearContext(t), this.selection && this._groupSelector && this._drawSelection(t), this.fire("after:render"), this.contextTopDirty = !0, this
      },
      _resetCurrentTransform: function() {
        var t = this._currentTransform;
        t.target.set({
          scaleX: t.original.scaleX,
          scaleY: t.original.scaleY,
          skewX: t.original.skewX,
          skewY: t.original.skewY,
          left: t.original.left,
          top: t.original.top
        }), this._shouldCenterTransform(t.target) ? "rotate" === t.action ? this._setOriginToCenter(t.target) : ("center" !== t.originX && ("right" === t.originX ? t.mouseXSign = -1 : t.mouseXSign = 1), "center" !== t.originY && ("bottom" === t.originY ? t.mouseYSign = -1 : t.mouseYSign = 1), t.originX = "center", t.originY = "center") : (t.originX = t.original.originX, t.originY = t.original.originY)
      },
      containsPoint: function(t, e, i) {
        var n, o = !0,
          r = i || this.getPointer(t, o);
        return n = e.group && e.group === this.getActiveGroup() ? this._normalizePointer(e.group, r) : {
          x: r.x,
          y: r.y
        }, e.containsPoint(n) || e._findTargetCorner(r)
      },
      _normalizePointer: function(t, e) {
        var i = t.calcTransformMatrix(),
          n = fabric.util.invertTransform(i),
          o = this.restorePointerVpt(e);
        return fabric.util.transformPoint(o, n)
      },
      isTargetTransparent: function(t, e, i) {
        var n = t.hasBorders,
          o = t.transparentCorners,
          r = this.contextCache,
          s = t.selectionBackgroundColor;
        t.hasBorders = t.transparentCorners = !1, t.selectionBackgroundColor = "", r.save(), r.transform.apply(r, this.viewportTransform), t.render(r), r.restore(), t.active && t._renderControls(r), t.hasBorders = n, t.transparentCorners = o, t.selectionBackgroundColor = s;
        var a = fabric.util.isTransparent(r, e, i, this.targetFindTolerance);
        return this.clearContext(r), a
      },
      _shouldClearSelection: function(t, e) {
        var i = this.getActiveGroup(),
          n = this.getActiveObject();
        return !e || e && i && !i.contains(e) && i !== e && !t[this.selectionKey] || e && !e.evented || e && !e.selectable && n && n !== e
      },
      _shouldCenterTransform: function(t) {
        if (t) {
          var e, i = this._currentTransform;
          return "scale" === i.action || "scaleX" === i.action || "scaleY" === i.action ? e = this.centeredScaling || t.centeredScaling : "rotate" === i.action && (e = this.centeredRotation || t.centeredRotation), e ? !i.altKey : i.altKey
        }
      },
      _getOriginFromCorner: function(t, e) {
        var i = {
          x: t.originX,
          y: t.originY
        };
        return "ml" === e || "tl" === e || "bl" === e ? i.x = "right" : "mr" !== e && "tr" !== e && "br" !== e || (i.x = "left"), "tl" === e || "mt" === e || "tr" === e ? i.y = "bottom" : "bl" !== e && "mb" !== e && "br" !== e || (i.y = "top"), i
      },
      _getActionFromCorner: function(t, e, i) {
        if (!e) return "drag";
        switch (e) {
          case "mtr":
            return "rotate";
          case "ml":
          case "mr":
            return i[this.altActionKey] ? "skewY" : "scaleX";
          case "mt":
          case "mb":
            return i[this.altActionKey] ? "skewX" : "scaleY";
          default:
            return "scale"
        }
      },
      _setupCurrentTransform: function(t, i) {
        if (i) {
          var n = this.getPointer(t),
            o = i._findTargetCorner(this.getPointer(t, !0)),
            r = this._getActionFromCorner(i, o, t),
            s = this._getOriginFromCorner(i, o);
          this._currentTransform = {
            target: i,
            action: r,
            corner: o,
            scaleX: i.scaleX,
            scaleY: i.scaleY,
            skewX: i.skewX,
            skewY: i.skewY,
            offsetX: n.x - i.left,
            offsetY: n.y - i.top,
            originX: s.x,
            originY: s.y,
            ex: n.x,
            ey: n.y,
            lastX: n.x,
            lastY: n.y,
            left: i.left,
            top: i.top,
            theta: e(i.angle),
            width: i.width * i.scaleX,
            mouseXSign: 1,
            mouseYSign: 1,
            shiftKey: t.shiftKey,
            altKey: t[this.centeredKey]
          }, this._currentTransform.original = {
            left: i.left,
            top: i.top,
            scaleX: i.scaleX,
            scaleY: i.scaleY,
            skewX: i.skewX,
            skewY: i.skewY,
            originX: s.x,
            originY: s.y
          }, this._resetCurrentTransform()
        }
      },
      _translateObject: function(t, e) {
        var i = this._currentTransform,
          n = i.target,
          o = t - i.offsetX,
          r = e - i.offsetY,
          s = !n.get("lockMovementX") && n.left !== o,
          a = !n.get("lockMovementY") && n.top !== r;
        return s && n.set("left", o), a && n.set("top", r), s || a
      },
      _changeSkewTransformOrigin: function(t, e, i) {
        var n = "originX",
          o = {
            0: "center"
          },
          r = e.target.skewX,
          s = "left",
          a = "right",
          l = "mt" === e.corner || "ml" === e.corner ? 1 : -1,
          c = 1;
        t = t > 0 ? 1 : -1, "y" === i && (r = e.target.skewY, s = "top", a = "bottom", n = "originY"), o[-1] = s, o[1] = a, e.target.flipX && (c *= -1), e.target.flipY && (c *= -1), 0 === r ? (e.skewSign = -l * t * c, e[n] = o[-t]) : (r = r > 0 ? 1 : -1, e.skewSign = r, e[n] = o[r * l * c])
      },
      _skewObject: function(t, e, i) {
        var n = this._currentTransform,
          o = n.target,
          r = !1,
          s = o.get("lockSkewingX"),
          a = o.get("lockSkewingY");
        if (s && "x" === i || a && "y" === i) return !1;
        var l, c, h = o.getCenterPoint(),
          u = o.toLocalPoint(new fabric.Point(t, e), "center", "center")[i],
          d = o.toLocalPoint(new fabric.Point(n.lastX, n.lastY), "center", "center")[i],
          p = o._getTransformedDimensions();
        return this._changeSkewTransformOrigin(u - d, n, i), l = o.toLocalPoint(new fabric.Point(t, e), n.originX, n.originY)[i], c = o.translateToOriginPoint(h, n.originX, n.originY), r = this._setObjectSkew(l, n, i, p), n.lastX = t, n.lastY = e, o.setPositionByOrigin(c, n.originX, n.originY), r
      },
      _setObjectSkew: function(t, e, i, n) {
        var o, r, s, a, l, c, h, u, d, p = e.target,
          f = !1,
          g = e.skewSign;
        return "x" === i ? (a = "y", l = "Y", c = "X", u = 0, d = p.skewY) : (a = "x", l = "X", c = "Y", u = p.skewX, d = 0), s = p._getTransformedDimensions(u, d), h = 2 * Math.abs(t) - s[i], h <= 2 ? o = 0 : (o = g * Math.atan(h / p["scale" + c] / (s[a] / p["scale" + l])), o = fabric.util.radiansToDegrees(o)), f = p["skew" + c] !== o, p.set("skew" + c, o), 0 !== p["skew" + l] && (r = p._getTransformedDimensions(), o = n[a] / r[a] * p["scale" + l], p.set("scale" + l, o)), f
      },
      _scaleObject: function(t, e, i) {
        var n = this._currentTransform,
          o = n.target,
          r = o.get("lockScalingX"),
          s = o.get("lockScalingY"),
          a = o.get("lockScalingFlip");
        if (r && s) return !1;
        var l = o.translateToOriginPoint(o.getCenterPoint(), n.originX, n.originY),
          c = o.toLocalPoint(new fabric.Point(t, e), n.originX, n.originY),
          h = o._getTransformedDimensions(),
          u = !1;
        return this._setLocalMouse(c, n), u = this._setObjectScale(c, n, r, s, i, a, h), o.setPositionByOrigin(l, n.originX, n.originY), u
      },
      _setObjectScale: function(t, e, i, n, o, r, s) {
        var a, l, c, h, u = e.target,
          d = !1,
          p = !1,
          f = !1;
        return c = t.x * u.scaleX / s.x, h = t.y * u.scaleY / s.y, a = u.scaleX !== c, l = u.scaleY !== h, r && c <= 0 && c < u.scaleX && (d = !0), r && h <= 0 && h < u.scaleY && (p = !0), "equally" !== o || i || n ? o ? "x" !== o || u.get("lockUniScaling") ? "y" !== o || u.get("lockUniScaling") || p || n || u.set("scaleY", h) && (f = f || l) : d || i || u.set("scaleX", c) && (f = f || a) : (d || i || u.set("scaleX", c) && (f = f || a), p || n || u.set("scaleY", h) && (f = f || l)) : d || p || (f = this._scaleObjectEqually(t, u, e, s)), e.newScaleX = c, e.newScaleY = h, d || p || this._flipObject(e, o), f
      },
      _scaleObjectEqually: function(t, e, i, n) {
        var o, r = t.y + t.x,
          s = n.y * i.original.scaleY / e.scaleY + n.x * i.original.scaleX / e.scaleX;
        return i.newScaleX = i.original.scaleX * r / s, i.newScaleY = i.original.scaleY * r / s, o = i.newScaleX !== e.scaleX || i.newScaleY !== e.scaleY, e.set("scaleX", i.newScaleX), e.set("scaleY", i.newScaleY), o
      },
      _flipObject: function(t, e) {
        t.newScaleX < 0 && "y" !== e && ("left" === t.originX ? t.originX = "right" : "right" === t.originX && (t.originX = "left")), t.newScaleY < 0 && "x" !== e && ("top" === t.originY ? t.originY = "bottom" : "bottom" === t.originY && (t.originY = "top"))
      },
      _setLocalMouse: function(t, e) {
        var i = e.target,
          n = this.getZoom(),
          r = i.padding / n;
        "right" === e.originX ? t.x *= -1 : "center" === e.originX && (t.x *= 2 * e.mouseXSign, t.x < 0 && (e.mouseXSign = -e.mouseXSign)), "bottom" === e.originY ? t.y *= -1 : "center" === e.originY && (t.y *= 2 * e.mouseYSign, t.y < 0 && (e.mouseYSign = -e.mouseYSign)), o(t.x) > r ? t.x < 0 ? t.x += r : t.x -= r : t.x = 0, o(t.y) > r ? t.y < 0 ? t.y += r : t.y -= r : t.y = 0
      },
      _rotateObject: function(t, e) {
        var o = this._currentTransform;
        if (o.target.get("lockRotation")) return !1;
        var r = n(o.ey - o.top, o.ex - o.left),
          s = n(e - o.top, t - o.left),
          a = i(s - r + o.theta),
          l = !0;
        if (a < 0 && (a = 360 + a), a %= 360, o.target.snapAngle > 0) {
          var c = o.target.snapAngle,
            h = o.target.snapThreshold || c,
            u = Math.ceil(a / c) * c,
            d = Math.floor(a / c) * c;
          Math.abs(a - d) < h ? a = d : Math.abs(a - u) < h && (a = u), o.target.angle === a && (l = !1)
        }
        return o.target.angle = a, l
      },
      setCursor: function(t) {
        this.upperCanvasEl.style.cursor = t
      },
      _resetObjectTransform: function(t) {
        t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.setAngle(0)
      },
      _drawSelection: function(t) {
        var e = this._groupSelector,
          i = e.left,
          n = e.top,
          a = o(i),
          l = o(n);
        if (this.selectionColor && (t.fillStyle = this.selectionColor, t.fillRect(e.ex - (i > 0 ? 0 : -i), e.ey - (n > 0 ? 0 : -n), a, l)), this.selectionLineWidth && this.selectionBorderColor)
          if (t.lineWidth = this.selectionLineWidth, t.strokeStyle = this.selectionBorderColor, this.selectionDashArray.length > 1 && !r) {
            var c = e.ex + s - (i > 0 ? 0 : a),
              h = e.ey + s - (n > 0 ? 0 : l);
            t.beginPath(), fabric.util.drawDashedLine(t, c, h, c + a, h, this.selectionDashArray), fabric.util.drawDashedLine(t, c, h + l - 1, c + a, h + l - 1, this.selectionDashArray), fabric.util.drawDashedLine(t, c, h, c, h + l, this.selectionDashArray), fabric.util.drawDashedLine(t, c + a - 1, h, c + a - 1, h + l, this.selectionDashArray), t.closePath(), t.stroke()
          } else fabric.Object.prototype._setLineDash.call(this, t, this.selectionDashArray), t.strokeRect(e.ex + s - (i > 0 ? 0 : a), e.ey + s - (n > 0 ? 0 : l), a, l)
      },
      findTarget: function(t, e) {
        if (!this.skipTargetFind) {
          var i, n = !0,
            o = this.getPointer(t, n),
            r = this.getActiveGroup(),
            s = this.getActiveObject();
          if (r && !e && r === this._searchPossibleTargets([r], o)) return this._fireOverOutEvents(r, t), r;
          if (s && s._findTargetCorner(o)) return this._fireOverOutEvents(s, t), s;
          if (s && s === this._searchPossibleTargets([s], o)) {
            if (!this.preserveObjectStacking) return this._fireOverOutEvents(s, t), s;
            i = s
          }
          this.targets = [];
          var a = this._searchPossibleTargets(this._objects, o);
          return t[this.altSelectionKey] && a && i && a !== i && (a = i), this._fireOverOutEvents(a, t), a
        }
      },
      _fireOverOutEvents: function(t, e) {
        t ? this._hoveredTarget !== t && (this._hoveredTarget && (this.fire("mouse:out", {
          target: this._hoveredTarget,
          e: e
        }), this._hoveredTarget.fire("mouseout")), this.fire("mouse:over", {
          target: t,
          e: e
        }), t.fire("mouseover"), this._hoveredTarget = t) : this._hoveredTarget && (this.fire("mouse:out", {
          target: this._hoveredTarget,
          e: e
        }), this._hoveredTarget.fire("mouseout"), this._hoveredTarget = null)
      },
      _checkTarget: function(t, e) {
        if (e && e.visible && e.evented && this.containsPoint(null, e, t)) {
          if (!this.perPixelTargetFind && !e.perPixelTargetFind || e.isEditing) return !0;
          var i = this.isTargetTransparent(e, t.x, t.y);
          if (!i) return !0
        }
      },
      _searchPossibleTargets: function(t, e) {
        for (var i, n, o, r = t.length; r--;)
          if (this._checkTarget(e, t[r])) {
            i = t[r], "group" === i.type && i.subTargetCheck && (n = this._normalizePointer(i, e), o = this._searchPossibleTargets(i._objects, n), o && this.targets.push(o));
            break
          }
        return i
      },
      restorePointerVpt: function(t) {
        return fabric.util.transformPoint(t, fabric.util.invertTransform(this.viewportTransform))
      },
      getPointer: function(e, i, n) {
        n || (n = this.upperCanvasEl);
        var o, r = t(e),
          s = n.getBoundingClientRect(),
          a = s.width || 0,
          l = s.height || 0;
        return a && l || ("top" in s && "bottom" in s && (l = Math.abs(s.top - s.bottom)), "right" in s && "left" in s && (a = Math.abs(s.right - s.left))), this.calcOffset(), r.x = r.x - this._offset.left, r.y = r.y - this._offset.top, i || (r = this.restorePointerVpt(r)), o = 0 === a || 0 === l ? {
          width: 1,
          height: 1
        } : {
          width: n.width / a,
          height: n.height / l
        }, {
          x: r.x * o.width,
          y: r.y * o.height
        }
      },
      _createUpperCanvas: function() {
        var t = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, "");
        this.upperCanvasEl = this._createCanvasElement(), fabric.util.addClass(this.upperCanvasEl, "upper-canvas " + t), this.wrapperEl.appendChild(this.upperCanvasEl), this._copyCanvasStyle(this.lowerCanvasEl, this.upperCanvasEl), this._applyCanvasStyle(this.upperCanvasEl), this.contextTop = this.upperCanvasEl.getContext("2d")
      },
      _createCacheCanvas: function() {
        this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height),
          this.contextCache = this.cacheCanvasEl.getContext("2d")
      },
      _initWrapperElement: function() {
        this.wrapperEl = fabric.util.wrapElement(this.lowerCanvasEl, "div", {
          class: this.containerClass
        }), fabric.util.setStyle(this.wrapperEl, {
          width: this.getWidth() + "px",
          height: this.getHeight() + "px",
          position: "relative"
        }), fabric.util.makeElementUnselectable(this.wrapperEl)
      },
      _applyCanvasStyle: function(t) {
        var e = this.getWidth() || t.width,
          i = this.getHeight() || t.height;
        fabric.util.setStyle(t, {
          position: "absolute",
          width: e + "px",
          height: i + "px",
          left: 0,
          top: 0,
          "touch-action": "none"
        }), t.width = e, t.height = i, fabric.util.makeElementUnselectable(t)
      },
      _copyCanvasStyle: function(t, e) {
        e.style.cssText = t.style.cssText
      },
      getSelectionContext: function() {
        return this.contextTop
      },
      getSelectionElement: function() {
        return this.upperCanvasEl
      },
      _setActiveObject: function(t) {
        var e = this._activeObject;
        e && (e.set("active", !1), t !== e && e.onDeselect && "function" == typeof e.onDeselect && e.onDeselect()), this._activeObject = t, t.set("active", !0)
      },
      setActiveObject: function(t, e) {
        var i = this.getActiveObject();
        return i && i !== t && i.fire("deselected", {
          e: e
        }), this._setActiveObject(t), this.renderAll(), this.fire("object:selected", {
          target: t,
          e: e
        }), t.fire("selected", {
          e: e
        }), this
      },
      getActiveObject: function() {
        return this._activeObject
      },
      _onObjectRemoved: function(t) {
        this.getActiveObject() === t && (this.fire("before:selection:cleared", {
          target: t
        }), this._discardActiveObject(), this.fire("selection:cleared", {
          target: t
        }), t.fire("deselected")), this._hoveredTarget === t && (this._hoveredTarget = null), this.callSuper("_onObjectRemoved", t)
      },
      _discardActiveObject: function() {
        var t = this._activeObject;
        t && (t.set("active", !1), t.onDeselect && "function" == typeof t.onDeselect && t.onDeselect()), this._activeObject = null
      },
      discardActiveObject: function(t) {
        var e = this._activeObject;
        return e && (this.fire("before:selection:cleared", {
          target: e,
          e: t
        }), this._discardActiveObject(), this.fire("selection:cleared", {
          e: t
        }), e.fire("deselected", {
          e: t
        })), this
      },
      _setActiveGroup: function(t) {
        this._activeGroup = t, t && t.set("active", !0)
      },
      setActiveGroup: function(t, e) {
        return this._setActiveGroup(t), t && (this.fire("object:selected", {
          target: t,
          e: e
        }), t.fire("selected", {
          e: e
        })), this
      },
      getActiveGroup: function() {
        return this._activeGroup
      },
      _discardActiveGroup: function() {
        var t = this.getActiveGroup();
        t && t.destroy(), this.setActiveGroup(null)
      },
      discardActiveGroup: function(t) {
        var e = this.getActiveGroup();
        return e && (this.fire("before:selection:cleared", {
          e: t,
          target: e
        }), this._discardActiveGroup(), this.fire("selection:cleared", {
          e: t
        })), this
      },
      deactivateAll: function() {
        for (var t, e = this.getObjects(), i = 0, n = e.length; i < n; i++) t = e[i], t && t.set("active", !1);
        return this._discardActiveGroup(), this._discardActiveObject(), this
      },
      deactivateAllWithDispatch: function(t) {
        return this.discardActiveGroup(t), this.discardActiveObject(t), this.deactivateAll(), this
      },
      dispose: function() {
        this.callSuper("dispose");
        var t = this.wrapperEl;
        return this.removeListeners(), t.removeChild(this.upperCanvasEl), t.removeChild(this.lowerCanvasEl), delete this.upperCanvasEl, t.parentNode && t.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, this
      },
      clear: function() {
        return this.discardActiveGroup(), this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear")
      },
      drawControls: function(t) {
        var e = this.getActiveGroup();
        e ? e._renderControls(t) : this._drawObjectsControls(t)
      },
      _drawObjectsControls: function(t) {
        for (var e = 0, i = this._objects.length; e < i; ++e) this._objects[e] && this._objects[e].active && this._objects[e]._renderControls(t)
      },
      _toObject: function(t, e, i) {
        var n = this._realizeGroupTransformOnObject(t),
          o = this.callSuper("_toObject", t, e, i);
        return this._unwindGroupTransformOnObject(t, n), o
      },
      _realizeGroupTransformOnObject: function(t) {
        var e = ["angle", "flipX", "flipY", "height", "left", "scaleX", "scaleY", "top", "width"];
        if (t.group && t.group === this.getActiveGroup()) {
          var i = {};
          return e.forEach(function(e) {
            i[e] = t[e]
          }), this.getActiveGroup().realizeTransform(t), i
        }
        return null
      },
      _unwindGroupTransformOnObject: function(t, e) {
        e && t.set(e)
      },
      _setSVGObject: function(t, e, i) {
        var n;
        n = this._realizeGroupTransformOnObject(e), this.callSuper("_setSVGObject", t, e, i), this._unwindGroupTransformOnObject(e, n)
      }
    });
    for (var a in fabric.StaticCanvas) "prototype" !== a && (fabric.Canvas[a] = fabric.StaticCanvas[a]);
    fabric.isTouchSupported && (fabric.Canvas.prototype._setCursorFromEvent = function() {}), fabric.Element = fabric.Canvas
  }(),
  function() {
    var t = {
        mt: 0,
        tr: 1,
        mr: 2,
        br: 3,
        mb: 4,
        bl: 5,
        ml: 6,
        tl: 7
      },
      e = fabric.util.addListener,
      i = fabric.util.removeListener;
    fabric.util.object.extend(fabric.Canvas.prototype, {
      cursorMap: ["n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize"],
      _initEventListeners: function() {
        this._bindEvents(), e(fabric.window, "resize", this._onResize), e(this.upperCanvasEl, "mousedown", this._onMouseDown), e(this.upperCanvasEl, "mousemove", this._onMouseMove), e(this.upperCanvasEl, "mouseout", this._onMouseOut), e(this.upperCanvasEl, "mouseenter", this._onMouseEnter), e(this.upperCanvasEl, "wheel", this._onMouseWheel), e(this.upperCanvasEl, "contextmenu", this._onContextMenu), e(this.upperCanvasEl, "touchstart", this._onMouseDown, {
          passive: !1
        }), e(this.upperCanvasEl, "touchmove", this._onMouseMove, {
          passive: !1
        }), "undefined" != typeof eventjs && "add" in eventjs && (eventjs.add(this.upperCanvasEl, "gesture", this._onGesture), eventjs.add(this.upperCanvasEl, "drag", this._onDrag), eventjs.add(this.upperCanvasEl, "orientation", this._onOrientationChange), eventjs.add(this.upperCanvasEl, "shake", this._onShake), eventjs.add(this.upperCanvasEl, "longpress", this._onLongPress))
      },
      _bindEvents: function() {
        this._onMouseDown = this._onMouseDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this)
      },
      removeListeners: function() {
        i(fabric.window, "resize", this._onResize), i(this.upperCanvasEl, "mousedown", this._onMouseDown), i(this.upperCanvasEl, "mousemove", this._onMouseMove), i(this.upperCanvasEl, "mouseout", this._onMouseOut), i(this.upperCanvasEl, "mouseenter", this._onMouseEnter), i(this.upperCanvasEl, "wheel", this._onMouseWheel), i(this.upperCanvasEl, "contextmenu", this._onContextMenu), i(this.upperCanvasEl, "touchstart", this._onMouseDown), i(this.upperCanvasEl, "touchmove", this._onMouseMove), "undefined" != typeof eventjs && "remove" in eventjs && (eventjs.remove(this.upperCanvasEl, "gesture", this._onGesture), eventjs.remove(this.upperCanvasEl, "drag", this._onDrag), eventjs.remove(this.upperCanvasEl, "orientation", this._onOrientationChange), eventjs.remove(this.upperCanvasEl, "shake", this._onShake), eventjs.remove(this.upperCanvasEl, "longpress", this._onLongPress))
      },
      _onGesture: function(t, e) {
        this.__onTransformGesture && this.__onTransformGesture(t, e)
      },
      _onDrag: function(t, e) {
        this.__onDrag && this.__onDrag(t, e)
      },
      _onMouseWheel: function(t) {
        this.__onMouseWheel(t)
      },
      _onMouseOut: function(t) {
        var e = this._hoveredTarget;
        this.fire("mouse:out", {
          target: e,
          e: t
        }), this._hoveredTarget = null, e && e.fire("mouseout", {
          e: t
        })
      },
      _onMouseEnter: function(t) {
        this.findTarget(t) || (this.fire("mouse:over", {
          target: null,
          e: t
        }), this._hoveredTarget = null)
      },
      _onOrientationChange: function(t, e) {
        this.__onOrientationChange && this.__onOrientationChange(t, e)
      },
      _onShake: function(t, e) {
        this.__onShake && this.__onShake(t, e)
      },
      _onLongPress: function(t, e) {
        this.__onLongPress && this.__onLongPress(t, e)
      },
      _onContextMenu: function(t) {
        return this.stopContextMenu && (t.stopPropagation(), t.preventDefault()), !1
      },
      _onMouseDown: function(t) {
        this.__onMouseDown(t), e(fabric.document, "touchend", this._onMouseUp, {
          passive: !1
        }), e(fabric.document, "touchmove", this._onMouseMove, {
          passive: !1
        }), i(this.upperCanvasEl, "mousemove", this._onMouseMove), i(this.upperCanvasEl, "touchmove", this._onMouseMove), "touchstart" === t.type ? i(this.upperCanvasEl, "mousedown", this._onMouseDown) : (e(fabric.document, "mouseup", this._onMouseUp), e(fabric.document, "mousemove", this._onMouseMove))
      },
      _onMouseUp: function(t) {
        if (this.__onMouseUp(t), i(fabric.document, "mouseup", this._onMouseUp), i(fabric.document, "touchend", this._onMouseUp), i(fabric.document, "mousemove", this._onMouseMove), i(fabric.document, "touchmove", this._onMouseMove), e(this.upperCanvasEl, "mousemove", this._onMouseMove), e(this.upperCanvasEl, "touchmove", this._onMouseMove, {
            passive: !1
          }), "touchend" === t.type) {
          var n = this;
          setTimeout(function() {
            e(n.upperCanvasEl, "mousedown", n._onMouseDown)
          }, 400)
        }
      },
      _onMouseMove: function(t) {
        !this.allowTouchScrolling && t.preventDefault && t.preventDefault(), this.__onMouseMove(t)
      },
      _onResize: function() {
        this.calcOffset()
      },
      _shouldRender: function(t, e) {
        var i = this.getActiveGroup() || this.getActiveObject();
        return !(i && i.isEditing && t === i || !(t && (t.isMoving || t !== i) || !t && i || !t && !i && !this._groupSelector || e && this._previousPointer && this.selection && (e.x !== this._previousPointer.x || e.y !== this._previousPointer.y)))
      },
      __onMouseUp: function(t) {
        var e, i = !0,
          n = this._currentTransform,
          o = this._groupSelector,
          r = !o || 0 === o.left && 0 === o.top;
        if (this.isDrawingMode && this._isCurrentlyDrawing) return void this._onMouseUpInDrawingMode(t);
        n && (this._finalizeCurrentTransform(), i = !n.actionPerformed), e = i ? this.findTarget(t, !0) : n.target;
        var s = this._shouldRender(e, this.getPointer(t));
        e || !r ? this._maybeGroupObjects(t) : (this._groupSelector = null, this._currentTransform = null), e && (e.isMoving = !1), this._handleCursorAndEvent(t, e, "up"), e && (e.__corner = 0), s && this.renderAll()
      },
      _handleCursorAndEvent: function(t, e, i) {
        this._setCursorFromEvent(t, e), this._handleEvent(t, i, e ? e : null)
      },
      _handleEvent: function(t, e, i) {
        var n = "undefined" == typeof i ? this.findTarget(t) : i,
          o = this.targets || [],
          r = {
            e: t,
            target: n,
            subTargets: o
          };
        this.fire("mouse:" + e, r), n && n.fire("mouse" + e, r);
        for (var s = 0; s < o.length; s++) o[s].fire("mouse" + e, r)
      },
      _finalizeCurrentTransform: function() {
        var t = this._currentTransform,
          e = t.target;
        e._scaling && (e._scaling = !1), e.setCoords(), this._restoreOriginXY(e), (t.actionPerformed || this.stateful && e.hasStateChanged()) && (this.fire("object:modified", {
          target: e
        }), e.fire("modified"))
      },
      _restoreOriginXY: function(t) {
        if (this._previousOriginX && this._previousOriginY) {
          var e = t.translateToOriginPoint(t.getCenterPoint(), this._previousOriginX, this._previousOriginY);
          t.originX = this._previousOriginX, t.originY = this._previousOriginY, t.left = e.x, t.top = e.y, this._previousOriginX = null, this._previousOriginY = null
        }
      },
      _onMouseDownInDrawingMode: function(t) {
        this._isCurrentlyDrawing = !0, this.discardActiveObject(t).renderAll(), this.clipTo && fabric.util.clipContext(this, this.contextTop);
        var e = this.getPointer(t);
        this.freeDrawingBrush.onMouseDown(e), this._handleEvent(t, "down")
      },
      _onMouseMoveInDrawingMode: function(t) {
        if (this._isCurrentlyDrawing) {
          var e = this.getPointer(t);
          this.freeDrawingBrush.onMouseMove(e)
        }
        this.setCursor(this.freeDrawingCursor), this._handleEvent(t, "move")
      },
      _onMouseUpInDrawingMode: function(t) {
        this._isCurrentlyDrawing = !1, this.clipTo && this.contextTop.restore(), this.freeDrawingBrush.onMouseUp(), this._handleEvent(t, "up")
      },
      __onMouseDown: function(t) {
        var e = this.findTarget(t),
          i = "which" in t ? 3 === t.which : 2 === t.button;
        if (i) return void(this.fireRightClick && this._handleEvent(t, "down", e ? e : null));
        if (this.isDrawingMode) return void this._onMouseDownInDrawingMode(t);
        if (!this._currentTransform) {
          var n = this.getPointer(t, !0);
          this._previousPointer = n;
          var o = this._shouldRender(e, n),
            r = this._shouldGroup(t, e);
          if (this._shouldClearSelection(t, e) ? this._clearSelection(t, e, n) : r && (this._handleGrouping(t, e), e = this.getActiveGroup()), e) {
            !e.selectable || !e.__corner && r || (this._beforeTransform(t, e), this._setupCurrentTransform(t, e));
            var s = this.getActiveObject();
            e !== this.getActiveGroup() && e !== s && (this.deactivateAll(), e.selectable && (s && s.fire("deselected", {
              e: t
            }), this.setActiveObject(e, t)))
          }
          this._handleEvent(t, "down", e ? e : null), o && this.renderAll()
        }
      },
      _beforeTransform: function(t, e) {
        this.stateful && e.saveState(), e._findTargetCorner(this.getPointer(t)) && this.onBeforeScaleRotate(e)
      },
      _clearSelection: function(t, e, i) {
        this.deactivateAllWithDispatch(t), e && e.selectable ? this.setActiveObject(e, t) : this.selection && (this._groupSelector = {
          ex: i.x,
          ey: i.y,
          top: 0,
          left: 0
        })
      },
      _setOriginToCenter: function(t) {
        this._previousOriginX = this._currentTransform.target.originX, this._previousOriginY = this._currentTransform.target.originY;
        var e = t.getCenterPoint();
        t.originX = "center", t.originY = "center", t.left = e.x, t.top = e.y, this._currentTransform.left = t.left, this._currentTransform.top = t.top
      },
      _setCenterToOrigin: function(t) {
        var e = t.translateToOriginPoint(t.getCenterPoint(), this._previousOriginX, this._previousOriginY);
        t.originX = this._previousOriginX, t.originY = this._previousOriginY, t.left = e.x, t.top = e.y, this._previousOriginX = null, this._previousOriginY = null
      },
      __onMouseMove: function(t) {
        var e, i;
        if (this.isDrawingMode) return void this._onMouseMoveInDrawingMode(t);
        if (!("undefined" != typeof t.touches && t.touches.length > 1)) {
          var n = this._groupSelector;
          n ? (i = this.getPointer(t, !0), n.left = i.x - n.ex, n.top = i.y - n.ey, this.renderTop()) : this._currentTransform ? this._transformObject(t) : (e = this.findTarget(t), this._setCursorFromEvent(t, e)), this._handleEvent(t, "move", e ? e : null)
        }
      },
      __onMouseWheel: function(t) {
        this._handleEvent(t, "wheel")
      },
      _transformObject: function(t) {
        var e = this.getPointer(t),
          i = this._currentTransform;
        i.reset = !1, i.target.isMoving = !0, i.shiftKey = t.shiftKey, i.altKey = t[this.centeredKey], this._beforeScaleTransform(t, i), this._performTransformAction(t, i, e), i.actionPerformed && this.renderAll()
      },
      _performTransformAction: function(t, e, i) {
        var n = i.x,
          o = i.y,
          r = e.target,
          s = e.action,
          a = !1;
        "rotate" === s ? (a = this._rotateObject(n, o)) && this._fire("rotating", r, t) : "scale" === s ? (a = this._onScale(t, e, n, o)) && this._fire("scaling", r, t) : "scaleX" === s ? (a = this._scaleObject(n, o, "x")) && this._fire("scaling", r, t) : "scaleY" === s ? (a = this._scaleObject(n, o, "y")) && this._fire("scaling", r, t) : "skewX" === s ? (a = this._skewObject(n, o, "x")) && this._fire("skewing", r, t) : "skewY" === s ? (a = this._skewObject(n, o, "y")) && this._fire("skewing", r, t) : (a = this._translateObject(n, o), a && (this._fire("moving", r, t), this.setCursor(r.moveCursor || this.moveCursor))), e.actionPerformed = e.actionPerformed || a
      },
      _fire: function(t, e, i) {
        this.fire("object:" + t, {
          target: e,
          e: i
        }), e.fire(t, {
          e: i
        })
      },
      _beforeScaleTransform: function(t, e) {
        if ("scale" === e.action || "scaleX" === e.action || "scaleY" === e.action) {
          var i = this._shouldCenterTransform(e.target);
          (i && ("center" !== e.originX || "center" !== e.originY) || !i && "center" === e.originX && "center" === e.originY) && (this._resetCurrentTransform(), e.reset = !0)
        }
      },
      _onScale: function(t, e, i, n) {
        return !t[this.uniScaleKey] && !this.uniScaleTransform || e.target.get("lockUniScaling") ? (e.reset || "scale" !== e.currentAction || this._resetCurrentTransform(), e.currentAction = "scaleEqually", this._scaleObject(i, n, "equally")) : (e.currentAction = "scale", this._scaleObject(i, n))
      },
      _setCursorFromEvent: function(t, e) {
        if (!e || !e.selectable) return this.setCursor(this.defaultCursor), !1;
        var i = e.hoverCursor || this.hoverCursor,
          n = this.getActiveGroup(),
          o = e._findTargetCorner && (!n || !n.contains(e)) && e._findTargetCorner(this.getPointer(t, !0));
        return o ? this._setCornerCursor(o, e, t) : this.setCursor(i), !0
      },
      _setCornerCursor: function(e, i, n) {
        if (e in t) this.setCursor(this._getRotatedCornerCursor(e, i, n));
        else {
          if ("mtr" !== e || !i.hasRotatingPoint) return this.setCursor(this.defaultCursor), !1;
          this.setCursor(this.rotationCursor)
        }
      },
      _getRotatedCornerCursor: function(e, i, n) {
        var o = Math.round(i.getAngle() % 360 / 45);
        return o < 0 && (o += 8), o += t[e], n[this.altActionKey] && t[e] % 2 === 0 && (o += 2), o %= 8, this.cursorMap[o]
      }
    })
  }(),
  function() {
    var t = Math.min,
      e = Math.max;
    fabric.util.object.extend(fabric.Canvas.prototype, {
      _shouldGroup: function(t, e) {
        var i = this.getActiveObject();
        return t[this.selectionKey] && e && e.selectable && (this.getActiveGroup() || i && i !== e) && this.selection
      },
      _handleGrouping: function(t, e) {
        var i = this.getActiveGroup();
        (e !== i || (e = this.findTarget(t, !0))) && (i ? this._updateActiveGroup(e, t) : this._createActiveGroup(e, t), this._activeGroup && this._activeGroup.saveCoords())
      },
      _updateActiveGroup: function(t, e) {
        var i = this.getActiveGroup();
        if (i.contains(t)) {
          if (i.removeWithUpdate(t), t.set("active", !1), 1 === i.size()) return this.discardActiveGroup(e), void this.setActiveObject(i.item(0))
        } else i.addWithUpdate(t);
        this.fire("selection:created", {
          target: i,
          e: e
        }), i.set("active", !0)
      },
      _createActiveGroup: function(t, e) {
        if (this._activeObject && t !== this._activeObject) {
          var i = this._createGroup(t);
          i.addWithUpdate(), this.setActiveGroup(i), this._activeObject = null, this.fire("selection:created", {
            target: i,
            e: e
          })
        }
        t.set("active", !0)
      },
      _createGroup: function(t) {
        var e = this.getObjects(),
          i = e.indexOf(this._activeObject) < e.indexOf(t),
          n = i ? [this._activeObject, t] : [t, this._activeObject];
        return this._activeObject.isEditing && this._activeObject.exitEditing(), new fabric.Group(n, {
          canvas: this
        })
      },
      _groupSelectedObjects: function(t) {
        var e = this._collectObjects();
        1 === e.length ? this.setActiveObject(e[0], t) : e.length > 1 && (e = new fabric.Group(e.reverse(), {
          canvas: this
        }), e.addWithUpdate(), this.setActiveGroup(e, t), e.saveCoords(), this.fire("selection:created", {
          target: e
        }), this.renderAll())
      },
      _collectObjects: function() {
        for (var i, n = [], o = this._groupSelector.ex, r = this._groupSelector.ey, s = o + this._groupSelector.left, a = r + this._groupSelector.top, l = new fabric.Point(t(o, s), t(r, a)), c = new fabric.Point(e(o, s), e(r, a)), h = o === s && r === a, u = this._objects.length; u-- && (i = this._objects[u], !(i && i.selectable && i.visible && (i.intersectsWithRect(l, c) || i.isContainedWithinRect(l, c) || i.containsPoint(l) || i.containsPoint(c)) && (i.set("active", !0), n.push(i), h))););
        return n
      },
      _maybeGroupObjects: function(t) {
        this.selection && this._groupSelector && this._groupSelectedObjects(t);
        var e = this.getActiveGroup();
        e && (e.setObjectsCoords().setCoords(), e.isMoving = !1, this.setCursor(this.defaultCursor)), this._groupSelector = null, this._currentTransform = null
      }
    })
  }(),
  function() {
    var t = fabric.StaticCanvas.supports("toDataURLWithQuality");
    fabric.util.object.extend(fabric.StaticCanvas.prototype, {
      toDataURL: function(t) {
        t || (t = {});
        var e = t.format || "png",
          i = t.quality || 1,
          n = t.multiplier || 1,
          o = {
            left: t.left || 0,
            top: t.top || 0,
            width: t.width || 0,
            height: t.height || 0
          };
        return this.__toDataURLWithMultiplier(e, i, o, n)
      },
      __toDataURLWithMultiplier: function(t, e, i, n) {
        var o = this.getWidth(),
          r = this.getHeight(),
          s = (i.width || this.getWidth()) * n,
          a = (i.height || this.getHeight()) * n,
          l = this.getZoom(),
          c = l * n,
          h = this.viewportTransform,
          u = (h[4] - i.left) * n,
          d = (h[5] - i.top) * n,
          p = [c, 0, 0, c, u, d],
          f = this.interactive;
        this.viewportTransform = p, this.interactive && (this.interactive = !1), o !== s || r !== a ? this.setDimensions({
          width: s,
          height: a
        }) : this.renderAll();
        var g = this.__toDataURL(t, e, i);
        return f && (this.interactive = f), this.viewportTransform = h, this.setDimensions({
          width: o,
          height: r
        }), g
      },
      __toDataURL: function(e, i) {
        var n = this.contextContainer.canvas;
        "jpg" === e && (e = "jpeg");
        var o = t ? n.toDataURL("image/" + e, i) : n.toDataURL("image/" + e);
        return o
      },
      toDataURLWithMultiplier: function(t, e, i) {
        return this.toDataURL({
          format: t,
          multiplier: e,
          quality: i
        })
      }
    })
  }(), fabric.util.object.extend(fabric.StaticCanvas.prototype, {
  loadFromDatalessJSON: function(t, e, i) {
    return this.loadFromJSON(t, e, i)
  },
  loadFromJSON: function(t, e, i) {
    if (t) {
      var n = "string" == typeof t ? JSON.parse(t) : fabric.util.object.clone(t);
      this.clear();
      var o = this;
      return this._enlivenObjects(n.objects, function() {
        o._setBgOverlay(n, function() {
          delete n.objects, delete n.backgroundImage, delete n.overlayImage, delete n.background, delete n.overlay, o._setOptions(n), e && e()
        })
      }, i), this
    }
  },
  _setBgOverlay: function(t, e) {
    var i = this,
      n = {
        backgroundColor: !1,
        overlayColor: !1,
        backgroundImage: !1,
        overlayImage: !1
      };
    if (!(t.backgroundImage || t.overlayImage || t.background || t.overlay)) return void(e && e());
    var o = function() {
      n.backgroundImage && n.overlayImage && n.backgroundColor && n.overlayColor && (i.renderAll(), e && e())
    };
    this.__setBgOverlay("backgroundImage", t.backgroundImage, n, o), this.__setBgOverlay("overlayImage", t.overlayImage, n, o), this.__setBgOverlay("backgroundColor", t.background, n, o), this.__setBgOverlay("overlayColor", t.overlay, n, o)
  },
  __setBgOverlay: function(t, e, i, n) {
    var o = this;
    return e ? void("backgroundImage" === t || "overlayImage" === t ? fabric.util.enlivenObjects([e], function(e) {
      o[t] = e[0], i[t] = !0, n && n()
    }) : this["set" + fabric.util.string.capitalize(t, !0)](e, function() {
      i[t] = !0, n && n()
    })) : (i[t] = !0, void(n && n()))
  },
  _enlivenObjects: function(t, e, i) {
    var n = this;
    if (!t || 0 === t.length) return void(e && e());
    var o = this.renderOnAddRemove;
    this.renderOnAddRemove = !1, fabric.util.enlivenObjects(t, function(t) {
      t.forEach(function(t, e) {
        n.insertAt(t, e)
      }), n.renderOnAddRemove = o, e && e()
    }, null, i)
  },
  _toDataURL: function(t, e) {
    this.clone(function(i) {
      e(i.toDataURL(t))
    })
  },
  _toDataURLWithMultiplier: function(t, e, i) {
    this.clone(function(n) {
      i(n.toDataURLWithMultiplier(t, e))
    })
  },
  clone: function(t, e) {
    var i = JSON.stringify(this.toJSON(e));
    this.cloneWithoutData(function(e) {
      e.loadFromJSON(i, function() {
        t && t(e)
      })
    })
  },
  cloneWithoutData: function(t) {
    var e = fabric.document.createElement("canvas");
    e.width = this.getWidth(), e.height = this.getHeight();
    var i = new fabric.Canvas(e);
    i.clipTo = this.clipTo, this.backgroundImage ? (i.setBackgroundImage(this.backgroundImage.src, function() {
      i.renderAll(), t && t(i)
    }), i.backgroundImageOpacity = this.backgroundImageOpacity, i.backgroundImageStretch = this.backgroundImageStretch) : t && t(i)
  }
}),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.util.object.clone,
      o = e.util.toFixed,
      r = e.util.string.capitalize,
      s = e.util.degreesToRadians,
      a = e.StaticCanvas.supports("setLineDash"),
      l = !e.isLikelyNode;
    e.Object || (e.Object = e.util.createClass(e.CommonMethods, {
      type: "object",
      originX: "left",
      originY: "top",
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      scaleX: 1,
      scaleY: 1,
      flipX: !1,
      flipY: !1,
      opacity: 1,
      angle: 0,
      skewX: 0,
      skewY: 0,
      cornerSize: 13,
      transparentCorners: !0,
      hoverCursor: null,
      moveCursor: null,
      padding: 0,
      borderColor: "rgba(102,153,255,0.75)",
      borderDashArray: null,
      cornerColor: "rgba(102,153,255,0.5)",
      cornerStrokeColor: null,
      cornerStyle: "rect",
      cornerDashArray: null,
      centeredScaling: !1,
      centeredRotation: !0,
      fill: "rgb(0,0,0)",
      fillRule: "nonzero",
      globalCompositeOperation: "source-over",
      backgroundColor: "",
      selectionBackgroundColor: "",
      stroke: null,
      strokeWidth: 1,
      strokeDashArray: null,
      strokeLineCap: "butt",
      strokeLineJoin: "miter",
      strokeMiterLimit: 10,
      shadow: null,
      borderOpacityWhenMoving: .4,
      borderScaleFactor: 1,
      transformMatrix: null,
      minScaleLimit: .01,
      selectable: !0,
      evented: !0,
      visible: !0,
      hasControls: !0,
      hasBorders: !0,
      hasRotatingPoint: !0,
      rotatingPointOffset: 40,
      perPixelTargetFind: !1,
      includeDefaultValues: !0,
      clipTo: null,
      lockMovementX: !1,
      lockMovementY: !1,
      lockRotation: !1,
      lockScalingX: !1,
      lockScalingY: !1,
      lockUniScaling: !1,
      lockSkewingX: !1,
      lockSkewingY: !1,
      lockScalingFlip: !1,
      excludeFromExport: !1,
      objectCaching: l,
      statefullCache: !1,
      noScaleCache: !0,
      dirty: !1,
      needsItsOwnCache: !1,
      stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit angle opacity fill fillRule globalCompositeOperation shadow clipTo visible backgroundColor skewX skewY".split(" "),
      cacheProperties: "fill stroke strokeWidth strokeDashArray width height stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit fillRule backgroundColor".split(" "),
      initialize: function(t) {
        t = t || {}, t && this.setOptions(t), this.objectCaching && (this._createCacheCanvas(), this.setupState({
          propertySet: "cacheProperties"
        }))
      },
      _createCacheCanvas: function() {
        this._cacheCanvas = e.document.createElement("canvas"), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas()
      },
      _getCacheCanvasDimensions: function() {
        var t = this.canvas && this.canvas.getZoom() || 1,
          i = this.getObjectScaling(),
          n = this._getNonTransformedDimensions(),
          o = this.canvas && this.canvas._isRetinaScaling() ? e.devicePixelRatio : 1,
          r = i.scaleX * t * o,
          s = i.scaleY * t * o,
          a = n.x * r,
          l = n.y * s;
        return {
          width: a + 2,
          height: l + 2,
          zoomX: r,
          zoomY: s
        }
      },
      _updateCacheCanvas: function() {
        if (this.noScaleCache && this.canvas && this.canvas._currentTransform) {
          var t = this.canvas._currentTransform.action;
          if ("scale" === t.slice(0, 5)) return !1
        }
        var e = this._getCacheCanvasDimensions(),
          i = e.width,
          n = e.height,
          o = e.zoomX,
          r = e.zoomY;
        return (i !== this.cacheWidth || n !== this.cacheHeight) && (this._cacheCanvas.width = Math.ceil(i), this._cacheCanvas.height = Math.ceil(n), this._cacheContext.translate(i / 2, n / 2), this._cacheContext.scale(o, r), this.cacheWidth = i, this.cacheHeight = n, this.zoomX = o, this.zoomY = r, !0)
      },
      setOptions: function(t) {
        this._setOptions(t), this._initGradient(t.fill, "fill"), this._initGradient(t.stroke, "stroke"), this._initClipping(t), this._initPattern(t.fill, "fill"), this._initPattern(t.stroke, "stroke")
      },
      transform: function(t, e) {
        this.group && !this.group._transformDone && this.group === this.canvas._activeGroup && this.group.transform(t);
        var i = e ? this._getLeftTopCoords() : this.getCenterPoint();
        t.translate(i.x, i.y), this.angle && t.rotate(s(this.angle)), t.scale(this.scaleX * (this.flipX ? -1 : 1), this.scaleY * (this.flipY ? -1 : 1)), this.skewX && t.transform(1, 0, Math.tan(s(this.skewX)), 1, 0, 0), this.skewY && t.transform(1, Math.tan(s(this.skewY)), 0, 1, 0, 0)
      },
      toObject: function(t) {
        var i = e.Object.NUM_FRACTION_DIGITS,
          n = {
            type: this.type,
            originX: this.originX,
            originY: this.originY,
            left: o(this.left, i),
            top: o(this.top, i),
            width: o(this.width, i),
            height: o(this.height, i),
            fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
            stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
            strokeWidth: o(this.strokeWidth, i),
            strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
            strokeLineCap: this.strokeLineCap,
            strokeLineJoin: this.strokeLineJoin,
            strokeMiterLimit: o(this.strokeMiterLimit, i),
            scaleX: o(this.scaleX, i),
            scaleY: o(this.scaleY, i),
            angle: o(this.getAngle(), i),
            flipX: this.flipX,
            flipY: this.flipY,
            opacity: o(this.opacity, i),
            shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
            visible: this.visible,
            clipTo: this.clipTo && String(this.clipTo),
            backgroundColor: this.backgroundColor,
            fillRule: this.fillRule,
            globalCompositeOperation: this.globalCompositeOperation,
            transformMatrix: this.transformMatrix ? this.transformMatrix.concat() : null,
            skewX: o(this.skewX, i),
            skewY: o(this.skewY, i)
          };
        return e.util.populateWithProperties(this, n, t), this.includeDefaultValues || (n = this._removeDefaultValues(n)), n
      },
      toDatalessObject: function(t) {
        return this.toObject(t)
      },
      _removeDefaultValues: function(t) {
        var i = e.util.getKlass(t.type).prototype,
          n = i.stateProperties;
        return n.forEach(function(e) {
          t[e] === i[e] && delete t[e];
          var n = "[object Array]" === Object.prototype.toString.call(t[e]) && "[object Array]" === Object.prototype.toString.call(i[e]);
          n && 0 === t[e].length && 0 === i[e].length && delete t[e]
        }), t
      },
      toString: function() {
        return "#<fabric." + r(this.type) + ">"
      },
      getObjectScaling: function() {
        var t = this.scaleX,
          e = this.scaleY;
        if (this.group) {
          var i = this.group.getObjectScaling();
          t *= i.scaleX, e *= i.scaleY
        }
        return {
          scaleX: t,
          scaleY: e
        }
      },
      _set: function(t, i) {
        var n = "scaleX" === t || "scaleY" === t;
        return n && (i = this._constrainScale(i)), "scaleX" === t && i < 0 ? (this.flipX = !this.flipX, i *= -1) : "scaleY" === t && i < 0 ? (this.flipY = !this.flipY, i *= -1) : "shadow" !== t || !i || i instanceof e.Shadow ? "dirty" === t && this.group && this.group.set("dirty", i) : i = new e.Shadow(i), this[t] = i, this.cacheProperties.indexOf(t) > -1 && (this.group && this.group.set("dirty", !0), this.dirty = !0), "width" !== t && "height" !== t || (this.minScaleLimit = Math.min(.1, 1 / Math.max(this.width, this.height))), this
      },
      setOnGroup: function() {},
      setSourcePath: function(t) {
        return this.sourcePath = t, this
      },
      getViewportTransform: function() {
        return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : e.iMatrix.concat()
      },
      render: function(t, i) {
        0 === this.width && 0 === this.height || !this.visible || (t.save(), this._setupCompositeOperation(t), this.drawSelectionBackground(t), i || this.transform(t), this._setOpacity(t), this._setShadow(t), this.transformMatrix && t.transform.apply(t, this.transformMatrix), this.clipTo && e.util.clipContext(this, t), !this.objectCaching || this.group && !this.needsItsOwnCache ? (this.drawObject(t, i), i && this.objectCaching && this.statefullCache && this.saveState({
          propertySet: "cacheProperties"
        })) : (this._cacheCanvas || this._createCacheCanvas(), this.isCacheDirty(i) && (this.statefullCache && this.saveState({
          propertySet: "cacheProperties"
        }), this.drawObject(this._cacheContext, i), this.dirty = !1), this.drawCacheOnCanvas(t)), this.clipTo && t.restore(), t.restore())
      },
      drawObject: function(t, e) {
        this._renderBackground(t), this._setStrokeStyles(t), this._setFillStyles(t), this._render(t, e)
      },
      drawCacheOnCanvas: function(t) {
        t.scale(1 / this.zoomX, 1 / this.zoomY), t.drawImage(this._cacheCanvas, -this.cacheWidth / 2, -this.cacheHeight / 2)
      },
      isCacheDirty: function(t) {
        if (!t && this._updateCacheCanvas()) return !0;
        if (this.dirty || this.statefullCache && this.hasStateChanged("cacheProperties")) {
          if (!t) {
            var e = this.cacheWidth / this.zoomX,
              i = this.cacheHeight / this.zoomY;
            this._cacheContext.clearRect(-e / 2, -i / 2, e, i)
          }
          return !0
        }
        return !1
      },
      _renderBackground: function(t) {
        if (this.backgroundColor) {
          var e = this._getNonTransformedDimensions();
          t.fillStyle = this.backgroundColor, t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y), this._removeShadow(t)
        }
      },
      _setOpacity: function(t) {
        t.globalAlpha *= this.opacity
      },
      _setStrokeStyles: function(t) {
        this.stroke && (t.lineWidth = this.strokeWidth, t.lineCap = this.strokeLineCap, t.lineJoin = this.strokeLineJoin, t.miterLimit = this.strokeMiterLimit, t.strokeStyle = this.stroke.toLive ? this.stroke.toLive(t, this) : this.stroke)
      },
      _setFillStyles: function(t) {
        this.fill && (t.fillStyle = this.fill.toLive ? this.fill.toLive(t, this) : this.fill)
      },
      _setLineDash: function(t, e, i) {
        e && (1 & e.length && e.push.apply(e, e), a ? t.setLineDash(e) : i && i(t))
      },
      _renderControls: function(t, i) {
        if (!(!this.active || i || this.group && this.group !== this.canvas.getActiveGroup())) {
          var n, o = this.getViewportTransform(),
            r = this.calcTransformMatrix();
          r = e.util.multiplyTransformMatrices(o, r), n = e.util.qrDecompose(r), t.save(), t.translate(n.translateX, n.translateY), t.lineWidth = 1 * this.borderScaleFactor, this.group || (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.group && this.group === this.canvas.getActiveGroup() ? (t.rotate(s(n.angle)), this.drawBordersInGroup(t, n)) : (t.rotate(s(this.angle)), this.drawBorders(t)), this.drawControls(t), t.restore()
        }
      },
      _setShadow: function(t) {
        if (this.shadow) {
          var i = this.canvas && this.canvas.viewportTransform[0] || 1,
            n = this.canvas && this.canvas.viewportTransform[3] || 1,
            o = this.getObjectScaling();
          this.canvas && this.canvas._isRetinaScaling() && (i *= e.devicePixelRatio, n *= e.devicePixelRatio), t.shadowColor = this.shadow.color, t.shadowBlur = this.shadow.blur * (i + n) * (o.scaleX + o.scaleY) / 4, t.shadowOffsetX = this.shadow.offsetX * i * o.scaleX, t.shadowOffsetY = this.shadow.offsetY * n * o.scaleY
        }
      },
      _removeShadow: function(t) {
        this.shadow && (t.shadowColor = "", t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0)
      },
      _applyPatternGradientTransform: function(t, e) {
        if (e.toLive) {
          var i = e.gradientTransform || e.patternTransform;
          i && t.transform.apply(t, i);
          var n = -this.width / 2 + e.offsetX || 0,
            o = -this.height / 2 + e.offsetY || 0;
          t.translate(n, o)
        }
      },
      _renderFill: function(t) {
        this.fill && (t.save(), this._applyPatternGradientTransform(t, this.fill), "evenodd" === this.fillRule ? t.fill("evenodd") : t.fill(), t.restore())
      },
      _renderStroke: function(t) {
        this.stroke && 0 !== this.strokeWidth && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this._setLineDash(t, this.strokeDashArray, this._renderDashedStroke), this._applyPatternGradientTransform(t, this.stroke), t.stroke(), t.restore())
      },
      clone: function(t, i) {
        return this.constructor.fromObject ? this.constructor.fromObject(this.toObject(i), t) : new e.Object(this.toObject(i))
      },
      cloneAsImage: function(t, i) {
        var n = this.toDataURL(i);
        return e.util.loadImage(n, function(i) {
          t && t(new e.Image(i))
        }), this
      },
      toDataURL: function(t) {
        t || (t = {});
        var i = e.util.createCanvasElement(),
          n = this.getBoundingRect();
        i.width = n.width, i.height = n.height, e.util.wrapElement(i, "div");
        var o = new e.StaticCanvas(i, {
          enableRetinaScaling: t.enableRetinaScaling
        });
        "jpg" === t.format && (t.format = "jpeg"), "jpeg" === t.format && (o.backgroundColor = "#fff");
        var r = {
          active: this.get("active"),
          left: this.getLeft(),
          top: this.getTop()
        };
        this.set("active", !1), this.setPositionByOrigin(new e.Point(o.getWidth() / 2, o.getHeight() / 2), "center", "center");
        var s = this.canvas;
        o.add(this);
        var a = o.toDataURL(t);
        return this.set(r).setCoords(), this.canvas = s, o.dispose(), o = null, a
      },
      isType: function(t) {
        return this.type === t
      },
      complexity: function() {
        return 1
      },
      toJSON: function(t) {
        return this.toObject(t);
      },
      setGradient: function(t, i) {
        i || (i = {});
        var n = {
          colorStops: []
        };
        return n.type = i.type || (i.r1 || i.r2 ? "radial" : "linear"), n.coords = {
          x1: i.x1,
          y1: i.y1,
          x2: i.x2,
          y2: i.y2
        }, (i.r1 || i.r2) && (n.coords.r1 = i.r1, n.coords.r2 = i.r2), n.gradientTransform = i.gradientTransform, e.Gradient.prototype.addColorStop.call(n, i.colorStops), this.set(t, e.Gradient.forObject(this, n))
      },
      setPatternFill: function(t) {
        return this.set("fill", new e.Pattern(t))
      },
      setShadow: function(t) {
        return this.set("shadow", t ? new e.Shadow(t) : null)
      },
      setColor: function(t) {
        return this.set("fill", t), this
      },
      setAngle: function(t) {
        var e = ("center" !== this.originX || "center" !== this.originY) && this.centeredRotation;
        return e && this._setOriginToCenter(), this.set("angle", t), e && this._resetOrigin(), this
      },
      centerH: function() {
        return this.canvas && this.canvas.centerObjectH(this), this
      },
      viewportCenterH: function() {
        return this.canvas && this.canvas.viewportCenterObjectH(this), this
      },
      centerV: function() {
        return this.canvas && this.canvas.centerObjectV(this), this
      },
      viewportCenterV: function() {
        return this.canvas && this.canvas.viewportCenterObjectV(this), this
      },
      center: function() {
        return this.canvas && this.canvas.centerObject(this), this
      },
      viewportCenter: function() {
        return this.canvas && this.canvas.viewportCenterObject(this), this
      },
      remove: function() {
        return this.canvas && this.canvas.remove(this), this
      },
      getLocalPointer: function(t, i) {
        i = i || this.canvas.getPointer(t);
        var n = new e.Point(i.x, i.y),
          o = this._getLeftTopCoords();
        return this.angle && (n = e.util.rotatePoint(n, o, s(-this.angle))), {
          x: n.x - o.x,
          y: n.y - o.y
        }
      },
      _setupCompositeOperation: function(t) {
        this.globalCompositeOperation && (t.globalCompositeOperation = this.globalCompositeOperation)
      }
    }), e.util.createAccessors(e.Object), e.Object.prototype.rotate = e.Object.prototype.setAngle, i(e.Object.prototype, e.Observable), e.Object.NUM_FRACTION_DIGITS = 2, e.Object._fromObject = function(t, i, o, r, s) {
      var a = e[t];
      if (i = n(i, !0), !r) {
        var l = s ? new a(i[s], i) : new a(i);
        return o && o(l), l
      }
      e.util.enlivenPatterns([i.fill, i.stroke], function(t) {
        "undefined" != typeof t[0] && (i.fill = t[0]), "undefined" != typeof t[1] && (i.stroke = t[1]);
        var e = s ? new a(i[s], i) : new a(i);
        o && o(e)
      })
    }, e.Object.__uid = 0)
  }("undefined" != typeof exports ? exports : this),
  function() {
    var t = fabric.util.degreesToRadians,
      e = {
        left: -.5,
        center: 0,
        right: .5
      },
      i = {
        top: -.5,
        center: 0,
        bottom: .5
      };
    fabric.util.object.extend(fabric.Object.prototype, {
      translateToGivenOrigin: function(t, n, o, r, s) {
        var a, l, c, h = t.x,
          u = t.y;
        return "string" == typeof n ? n = e[n] : n -= .5, "string" == typeof r ? r = e[r] : r -= .5, a = r - n, "string" == typeof o ? o = i[o] : o -= .5, "string" == typeof s ? s = i[s] : s -= .5, l = s - o, (a || l) && (c = this._getTransformedDimensions(), h = t.x + a * c.x, u = t.y + l * c.y), new fabric.Point(h, u)
      },
      translateToCenterPoint: function(e, i, n) {
        var o = this.translateToGivenOrigin(e, i, n, "center", "center");
        return this.angle ? fabric.util.rotatePoint(o, e, t(this.angle)) : o
      },
      translateToOriginPoint: function(e, i, n) {
        var o = this.translateToGivenOrigin(e, "center", "center", i, n);
        return this.angle ? fabric.util.rotatePoint(o, e, t(this.angle)) : o
      },
      getCenterPoint: function() {
        var t = new fabric.Point(this.left, this.top);
        return this.translateToCenterPoint(t, this.originX, this.originY)
      },
      getPointByOrigin: function(t, e) {
        var i = this.getCenterPoint();
        return this.translateToOriginPoint(i, t, e)
      },
      toLocalPoint: function(e, i, n) {
        var o, r, s = this.getCenterPoint();
        return o = "undefined" != typeof i && "undefined" != typeof n ? this.translateToGivenOrigin(s, "center", "center", i, n) : new fabric.Point(this.left, this.top), r = new fabric.Point(e.x, e.y), this.angle && (r = fabric.util.rotatePoint(r, s, -t(this.angle))), r.subtractEquals(o)
      },
      setPositionByOrigin: function(t, e, i) {
        var n = this.translateToCenterPoint(t, e, i),
          o = this.translateToOriginPoint(n, this.originX, this.originY);
        this.set("left", o.x), this.set("top", o.y)
      },
      adjustPosition: function(i) {
        var n, o, r = t(this.angle),
          s = this.getWidth(),
          a = Math.cos(r) * s,
          l = Math.sin(r) * s;
        n = "string" == typeof this.originX ? e[this.originX] : this.originX - .5, o = "string" == typeof i ? e[i] : i - .5, this.left += a * (o - n), this.top += l * (o - n), this.setCoords(), this.originX = i
      },
      _setOriginToCenter: function() {
        this._originalOriginX = this.originX, this._originalOriginY = this.originY;
        var t = this.getCenterPoint();
        this.originX = "center", this.originY = "center", this.left = t.x, this.top = t.y
      },
      _resetOrigin: function() {
        var t = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
        this.originX = this._originalOriginX, this.originY = this._originalOriginY, this.left = t.x, this.top = t.y, this._originalOriginX = null, this._originalOriginY = null
      },
      _getLeftTopCoords: function() {
        return this.translateToOriginPoint(this.getCenterPoint(), "left", "top")
      }
    })
  }(),
  function() {
    function t(t) {
      return [new fabric.Point(t.tl.x, t.tl.y), new fabric.Point(t.tr.x, t.tr.y), new fabric.Point(t.br.x, t.br.y), new fabric.Point(t.bl.x, t.bl.y)]
    }
    var e = fabric.util.degreesToRadians,
      i = fabric.util.multiplyTransformMatrices;
    fabric.util.object.extend(fabric.Object.prototype, {
      oCoords: null,
      aCoords: null,
      getCoords: function(e, i) {
        this.oCoords || this.setCoords();
        var n = e ? this.aCoords : this.oCoords;
        return t(i ? this.calcCoords(e) : n)
      },
      intersectsWithRect: function(t, e, i, n) {
        var o = this.getCoords(i, n),
          r = fabric.Intersection.intersectPolygonRectangle(o, t, e);
        return "Intersection" === r.status
      },
      intersectsWithObject: function(t, e, i) {
        var n = fabric.Intersection.intersectPolygonPolygon(this.getCoords(e, i), t.getCoords(e, i));
        return "Intersection" === n.status || t.isContainedWithinObject(this, e, i) || this.isContainedWithinObject(t, e, i)
      },
      isContainedWithinObject: function(t, e, i) {
        for (var n = this.getCoords(e, i), o = 0, r = t._getImageLines(i ? t.calcCoords(e) : e ? t.aCoords : t.oCoords); o < 4; o++)
          if (!t.containsPoint(n[o], r)) return !1;
        return !0
      },
      isContainedWithinRect: function(t, e, i, n) {
        var o = this.getBoundingRect(i, n);
        return o.left >= t.x && o.left + o.width <= e.x && o.top >= t.y && o.top + o.height <= e.y
      },
      containsPoint: function(t, e, i, n) {
        var e = e || this._getImageLines(n ? this.calcCoords(i) : i ? this.aCoords : this.oCoords),
          o = this._findCrossPoints(t, e);
        return 0 !== o && o % 2 === 1
      },
      isOnScreen: function(t) {
        if (!this.canvas) return !1;
        for (var e, i = this.canvas.vptCoords.tl, n = this.canvas.vptCoords.br, o = this.getCoords(!0, t), r = 0; r < 4; r++)
          if (e = o[r], e.x <= n.x && e.x >= i.x && e.y <= n.y && e.y >= i.y) return !0;
        return !1
      },
      _getImageLines: function(t) {
        return {
          topline: {
            o: t.tl,
            d: t.tr
          },
          rightline: {
            o: t.tr,
            d: t.br
          },
          bottomline: {
            o: t.br,
            d: t.bl
          },
          leftline: {
            o: t.bl,
            d: t.tl
          }
        }
      },
      _findCrossPoints: function(t, e) {
        var i, n, o, r, s, a, l = 0;
        for (var c in e)
          if (a = e[c], !(a.o.y < t.y && a.d.y < t.y || a.o.y >= t.y && a.d.y >= t.y || (a.o.x === a.d.x && a.o.x >= t.x ? s = a.o.x : (i = 0, n = (a.d.y - a.o.y) / (a.d.x - a.o.x), o = t.y - i * t.x, r = a.o.y - n * a.o.x, s = -(o - r) / (i - n)), s >= t.x && (l += 1), 2 !== l))) break;
        return l
      },
      getBoundingRectWidth: function() {
        return this.getBoundingRect().width
      },
      getBoundingRectHeight: function() {
        return this.getBoundingRect().height
      },
      getBoundingRect: function(t, e) {
        var i = this.getCoords(t, e);
        return fabric.util.makeBoundingBoxFromPoints(i)
      },
      getWidth: function() {
        return this._getTransformedDimensions().x
      },
      getHeight: function() {
        return this._getTransformedDimensions().y
      },
      _constrainScale: function(t) {
        return Math.abs(t) < this.minScaleLimit ? t < 0 ? -this.minScaleLimit : this.minScaleLimit : t
      },
      scale: function(t) {
        return t = this._constrainScale(t), t < 0 && (this.flipX = !this.flipX, this.flipY = !this.flipY, t *= -1), this.scaleX = t, this.scaleY = t, this.setCoords()
      },
      scaleToWidth: function(t) {
        var e = this.getBoundingRect().width / this.getWidth();
        return this.scale(t / this.width / e)
      },
      scaleToHeight: function(t) {
        var e = this.getBoundingRect().height / this.getHeight();
        return this.scale(t / this.height / e)
      },
      calcCoords: function(t) {
        var i = e(this.angle),
          n = this.getViewportTransform(),
          o = t ? this._getTransformedDimensions() : this._calculateCurrentDimensions(),
          r = o.x,
          s = o.y,
          a = Math.sin(i),
          l = Math.cos(i),
          c = r > 0 ? Math.atan(s / r) : 0,
          h = r / Math.cos(c) / 2,
          u = Math.cos(c + i) * h,
          d = Math.sin(c + i) * h,
          p = this.getCenterPoint(),
          f = t ? p : fabric.util.transformPoint(p, n),
          g = new fabric.Point(f.x - u, f.y - d),
          m = new fabric.Point(g.x + r * l, g.y + r * a),
          v = new fabric.Point(g.x - s * a, g.y + s * l),
          y = new fabric.Point(f.x + u, f.y + d);
        if (!t) var b = new fabric.Point((g.x + v.x) / 2, (g.y + v.y) / 2),
          x = new fabric.Point((m.x + g.x) / 2, (m.y + g.y) / 2),
          w = new fabric.Point((y.x + m.x) / 2, (y.y + m.y) / 2),
          C = new fabric.Point((y.x + v.x) / 2, (y.y + v.y) / 2),
          S = new fabric.Point(x.x + a * this.rotatingPointOffset, x.y - l * this.rotatingPointOffset);
        var f = {
          tl: g,
          tr: m,
          br: y,
          bl: v
        };
        return t || (f.ml = b, f.mt = x, f.mr = w, f.mb = C, f.mtr = S), f
      },
      setCoords: function(t, e) {
        return this.oCoords = this.calcCoords(t), e || (this.aCoords = this.calcCoords(!0)), t || this._setCornerCoords && this._setCornerCoords(), this
      },
      _calcRotateMatrix: function() {
        if (this.angle) {
          var t = e(this.angle),
            i = Math.cos(t),
            n = Math.sin(t);
          return [i, n, -n, i, 0, 0]
        }
        return fabric.iMatrix.concat()
      },
      calcTransformMatrix: function(t) {
        var e = this.getCenterPoint(),
          n = [1, 0, 0, 1, e.x, e.y],
          o = this._calcRotateMatrix(),
          r = this._calcDimensionsTransformMatrix(this.skewX, this.skewY, !0),
          s = this.group && !t ? this.group.calcTransformMatrix() : fabric.iMatrix.concat();
        return s = i(s, n), s = i(s, o), s = i(s, r)
      },
      _calcDimensionsTransformMatrix: function(t, n, o) {
        var r = [1, 0, Math.tan(e(t)), 1],
          s = [1, Math.tan(e(n)), 0, 1],
          a = this.scaleX * (o && this.flipX ? -1 : 1),
          l = this.scaleY * (o && this.flipY ? -1 : 1),
          c = [a, 0, 0, l],
          h = i(c, r, !0);
        return i(h, s, !0)
      },
      _getNonTransformedDimensions: function() {
        var t = this.strokeWidth,
          e = this.width + t,
          i = this.height + t;
        return {
          x: e,
          y: i
        }
      },
      _getTransformedDimensions: function(t, e) {
        "undefined" == typeof t && (t = this.skewX), "undefined" == typeof e && (e = this.skewY);
        var i, n, o = this._getNonTransformedDimensions(),
          r = o.x / 2,
          s = o.y / 2,
          a = [{
            x: -r,
            y: -s
          }, {
            x: r,
            y: -s
          }, {
            x: -r,
            y: s
          }, {
            x: r,
            y: s
          }],
          l = this._calcDimensionsTransformMatrix(t, e, !1);
        for (i = 0; i < a.length; i++) a[i] = fabric.util.transformPoint(a[i], l);
        return n = fabric.util.makeBoundingBoxFromPoints(a), {
          x: n.width,
          y: n.height
        }
      },
      _calculateCurrentDimensions: function() {
        var t = this.getViewportTransform(),
          e = this._getTransformedDimensions(),
          i = fabric.util.transformPoint(e, t, !0);
        return i.scalarAdd(2 * this.padding)
      }
    })
  }(), fabric.util.object.extend(fabric.Object.prototype, {
  sendToBack: function() {
    return this.group ? fabric.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas.sendToBack(this), this
  },
  bringToFront: function() {
    return this.group ? fabric.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas.bringToFront(this), this
  },
  sendBackwards: function(t) {
    return this.group ? fabric.StaticCanvas.prototype.sendBackwards.call(this.group, this, t) : this.canvas.sendBackwards(this, t), this
  },
  bringForward: function(t) {
    return this.group ? fabric.StaticCanvas.prototype.bringForward.call(this.group, this, t) : this.canvas.bringForward(this, t), this
  },
  moveTo: function(t) {
    return this.group ? fabric.StaticCanvas.prototype.moveTo.call(this.group, this, t) : this.canvas.moveTo(this, t), this
  }
}),
  function() {
    function t(t, e) {
      if (e) {
        if (e.toLive) return t + ": url(#SVGID_" + e.id + "); ";
        var i = new fabric.Color(e),
          n = t + ": " + i.toRgb() + "; ",
          o = i.getAlpha();
        return 1 !== o && (n += t + "-opacity: " + o.toString() + "; "), n
      }
      return t + ": none; "
    }
    fabric.util.object.extend(fabric.Object.prototype, {
      getSvgStyles: function(e) {
        var i = this.fillRule,
          n = this.strokeWidth ? this.strokeWidth : "0",
          o = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none",
          r = this.strokeLineCap ? this.strokeLineCap : "butt",
          s = this.strokeLineJoin ? this.strokeLineJoin : "miter",
          a = this.strokeMiterLimit ? this.strokeMiterLimit : "4",
          l = "undefined" != typeof this.opacity ? this.opacity : "1",
          c = this.visible ? "" : " visibility: hidden;",
          h = e ? "" : this.getSvgFilter(),
          u = t("fill", this.fill),
          d = t("stroke", this.stroke);
        return [d, "stroke-width: ", n, "; ", "stroke-dasharray: ", o, "; ", "stroke-linecap: ", r, "; ", "stroke-linejoin: ", s, "; ", "stroke-miterlimit: ", a, "; ", u, "fill-rule: ", i, "; ", "opacity: ", l, ";", h, c].join("")
      },
      getSvgFilter: function() {
        return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : ""
      },
      getSvgId: function() {
        return this.id ? 'id="' + this.id + '" ' : ""
      },
      getSvgTransform: function() {
        if (this.group && "path-group" === this.group.type) return "";
        var t = fabric.util.toFixed,
          e = this.getAngle(),
          i = this.getSkewX() % 360,
          n = this.getSkewY() % 360,
          o = this.getCenterPoint(),
          r = fabric.Object.NUM_FRACTION_DIGITS,
          s = "path-group" === this.type ? "" : "translate(" + t(o.x, r) + " " + t(o.y, r) + ")",
          a = 0 !== e ? " rotate(" + t(e, r) + ")" : "",
          l = 1 === this.scaleX && 1 === this.scaleY ? "" : " scale(" + t(this.scaleX, r) + " " + t(this.scaleY, r) + ")",
          c = 0 !== i ? " skewX(" + t(i, r) + ")" : "",
          h = 0 !== n ? " skewY(" + t(n, r) + ")" : "",
          u = "path-group" === this.type ? this.width : 0,
          d = this.flipX ? " matrix(-1 0 0 1 " + u + " 0) " : "",
          p = "path-group" === this.type ? this.height : 0,
          f = this.flipY ? " matrix(1 0 0 -1 0 " + p + ")" : "";
        return [s, a, l, d, f, c, h].join("")
      },
      getSvgTransformMatrix: function() {
        return this.transformMatrix ? " matrix(" + this.transformMatrix.join(" ") + ") " : ""
      },
      _createBaseSVGMarkup: function() {
        var t = [];
        return this.fill && this.fill.toLive && t.push(this.fill.toSVG(this, !1)), this.stroke && this.stroke.toLive && t.push(this.stroke.toSVG(this, !1)), this.shadow && t.push(this.shadow.toSVG(this)), t
      }
    })
  }(),
  function() {
    function t(t, e, n) {
      var o = {},
        r = !0;
      n.forEach(function(e) {
        o[e] = t[e]
      }), i(t[e], o, r)
    }

    function e(t, i, n) {
      if (!fabric.isLikelyNode && t instanceof Element) return t === i;
      if (t instanceof Array) {
        if (t.length !== i.length) return !1;
        for (var o = 0, r = t.length; o < r; o++)
          if (t[o] !== i[o]) return !1;
        return !0
      }
      if (t && "object" == typeof t) {
        if (!n && Object.keys(t).length !== Object.keys(i).length) return !1;
        for (var s in t)
          if (!e(t[s], i[s])) return !1;
        return !0
      }
      return t === i
    }
    var i = fabric.util.object.extend,
      n = "stateProperties";
    fabric.util.object.extend(fabric.Object.prototype, {
      hasStateChanged: function(t) {
        return t = t || n, t = "_" + t, !e(this[t], this, !0)
      },
      saveState: function(e) {
        var i = e && e.propertySet || n,
          o = "_" + i;
        return this[o] ? (t(this, o, this[i]), e && e.stateProperties && t(this, o, e.stateProperties), this) : this.setupState(e)
      },
      setupState: function(t) {
        t = t || {};
        var e = t.propertySet || n;
        return t.propertySet = e, this["_" + e] = {}, this.saveState(t), this
      }
    })
  }(),
  function() {
    var t = fabric.util.degreesToRadians,
      e = function() {
        return "undefined" != typeof G_vmlCanvasManager
      };
    fabric.util.object.extend(fabric.Object.prototype, {
      _controlsVisibility: null,
      _findTargetCorner: function(t) {
        if (!this.hasControls || !this.active) return !1;
        var e, i, n = t.x,
          o = t.y;
        this.__corner = 0;
        for (var r in this.oCoords)
          if (this.isControlVisible(r) && ("mtr" !== r || this.hasRotatingPoint) && (!this.get("lockUniScaling") || "mt" !== r && "mr" !== r && "mb" !== r && "ml" !== r) && (i = this._getImageLines(this.oCoords[r].corner), e = this._findCrossPoints({
              x: n,
              y: o
            }, i), 0 !== e && e % 2 === 1)) return this.__corner = r, r;
        return !1
      },
      _setCornerCoords: function() {
        var e, i, n = this.oCoords,
          o = t(45 - this.angle),
          r = .707106 * this.cornerSize,
          s = r * Math.cos(o),
          a = r * Math.sin(o);
        for (var l in n) e = n[l].x, i = n[l].y, n[l].corner = {
          tl: {
            x: e - a,
            y: i - s
          },
          tr: {
            x: e + s,
            y: i - a
          },
          bl: {
            x: e - s,
            y: i + a
          },
          br: {
            x: e + a,
            y: i + s
          }
        }
      },
      drawSelectionBackground: function(e) {
        if (!this.selectionBackgroundColor || this.group || !this.active) return this;
        e.save();
        var i = this.getCenterPoint(),
          n = this._calculateCurrentDimensions(),
          o = this.canvas.viewportTransform;
        return e.translate(i.x, i.y), e.scale(1 / o[0], 1 / o[3]), e.rotate(t(this.angle)), e.fillStyle = this.selectionBackgroundColor, e.fillRect(-n.x / 2, -n.y / 2, n.x, n.y), e.restore(), this
      },
      drawBorders: function(t) {
        if (!this.hasBorders) return this;
        var e = this._calculateCurrentDimensions(),
          i = 1 / this.borderScaleFactor,
          n = e.x + i,
          o = e.y + i;
        if (t.save(), t.strokeStyle = this.borderColor, this._setLineDash(t, this.borderDashArray, null), t.strokeRect(-n / 2, -o / 2, n, o), this.hasRotatingPoint && this.isControlVisible("mtr") && !this.get("lockRotation") && this.hasControls) {
          var r = -o / 2;
          t.beginPath(), t.moveTo(0, r), t.lineTo(0, r - this.rotatingPointOffset), t.closePath(), t.stroke()
        }
        return t.restore(), this
      },
      drawBordersInGroup: function(t, e) {
        if (!this.hasBorders) return this;
        var i = this._getNonTransformedDimensions(),
          n = fabric.util.customTransformMatrix(e.scaleX, e.scaleY, e.skewX),
          o = fabric.util.transformPoint(i, n),
          r = 1 / this.borderScaleFactor,
          s = o.x + r,
          a = o.y + r;
        return t.save(), this._setLineDash(t, this.borderDashArray, null), t.strokeStyle = this.borderColor, t.strokeRect(-s / 2, -a / 2, s, a), t.restore(), this
      },
      drawControls: function(t) {
        if (!this.hasControls) return this;
        var e = this._calculateCurrentDimensions(),
          i = e.x,
          n = e.y,
          o = this.cornerSize,
          r = -(i + o) / 2,
          s = -(n + o) / 2,
          a = this.transparentCorners ? "stroke" : "fill";
        return t.save(), t.strokeStyle = t.fillStyle = this.cornerColor, this.transparentCorners || (t.strokeStyle = this.cornerStrokeColor), this._setLineDash(t, this.cornerDashArray, null), this._drawControl("tl", t, a, r, s), this._drawControl("tr", t, a, r + i, s), this._drawControl("bl", t, a, r, s + n), this._drawControl("br", t, a, r + i, s + n), this.get("lockUniScaling") || (this._drawControl("mt", t, a, r + i / 2, s), this._drawControl("mb", t, a, r + i / 2, s + n), this._drawControl("mr", t, a, r + i, s + n / 2), this._drawControl("ml", t, a, r, s + n / 2)), this.hasRotatingPoint && this._drawControl("mtr", t, a, r + i / 2, s - this.rotatingPointOffset), t.restore(), this
      },
      _drawControl: function(t, i, n, o, r) {
        if (this.isControlVisible(t)) {
          var s = this.cornerSize,
            a = !this.transparentCorners && this.cornerStrokeColor;
          switch (this.cornerStyle) {
            case "circle":
              i.beginPath(), i.arc(o + s / 2, r + s / 2, s / 2, 0, 2 * Math.PI, !1), i[n](), a && i.stroke();
              break;
            default:
              e() || this.transparentCorners || i.clearRect(o, r, s, s), i[n + "Rect"](o, r, s, s), a && i.strokeRect(o, r, s, s)
          }
        }
      },
      isControlVisible: function(t) {
        return this._getControlsVisibility()[t]
      },
      setControlVisible: function(t, e) {
        return this._getControlsVisibility()[t] = e, this
      },
      setControlsVisibility: function(t) {
        t || (t = {});
        for (var e in t) this.setControlVisible(e, t[e]);
        return this
      },
      _getControlsVisibility: function() {
        return this._controlsVisibility || (this._controlsVisibility = {
          tl: !0,
          tr: !0,
          br: !0,
          bl: !0,
          ml: !0,
          mt: !0,
          mr: !0,
          mb: !0,
          mtr: !0
        }), this._controlsVisibility
      }
    })
  }(), fabric.util.object.extend(fabric.StaticCanvas.prototype, {
  FX_DURATION: 500,
  fxCenterObjectH: function(t, e) {
    e = e || {};
    var i = function() {},
      n = e.onComplete || i,
      o = e.onChange || i,
      r = this;
    return fabric.util.animate({
      startValue: t.get("left"),
      endValue: this.getCenter().left,
      duration: this.FX_DURATION,
      onChange: function(e) {
        t.set("left", e), r.renderAll(), o()
      },
      onComplete: function() {
        t.setCoords(), n()
      }
    }), this
  },
  fxCenterObjectV: function(t, e) {
    e = e || {};
    var i = function() {},
      n = e.onComplete || i,
      o = e.onChange || i,
      r = this;
    return fabric.util.animate({
      startValue: t.get("top"),
      endValue: this.getCenter().top,
      duration: this.FX_DURATION,
      onChange: function(e) {
        t.set("top", e), r.renderAll(), o()
      },
      onComplete: function() {
        t.setCoords(), n()
      }
    }), this
  },
  fxRemove: function(t, e) {
    e = e || {};
    var i = function() {},
      n = e.onComplete || i,
      o = e.onChange || i,
      r = this;
    return fabric.util.animate({
      startValue: t.get("opacity"),
      endValue: 0,
      duration: this.FX_DURATION,
      onStart: function() {
        t.set("active", !1)
      },
      onChange: function(e) {
        t.set("opacity", e), r.renderAll(), o()
      },
      onComplete: function() {
        r.remove(t), n()
      }
    }), this
  }
}), fabric.util.object.extend(fabric.Object.prototype, {
  animate: function() {
    if (arguments[0] && "object" == typeof arguments[0]) {
      var t, e, i = [];
      for (t in arguments[0]) i.push(t);
      for (var n = 0, o = i.length; n < o; n++) t = i[n], e = n !== o - 1, this._animate(t, arguments[0][t], arguments[1], e)
    } else this._animate.apply(this, arguments);
    return this
  },
  _animate: function(t, e, i, n) {
    var o, r = this;
    e = e.toString(), i = i ? fabric.util.object.clone(i) : {}, ~t.indexOf(".") && (o = t.split("."));
    var s = o ? this.get(o[0])[o[1]] : this.get(t);
    "from" in i || (i.from = s), e = ~e.indexOf("=") ? s + parseFloat(e.replace("=", "")) : parseFloat(e), fabric.util.animate({
      startValue: i.from,
      endValue: e,
      byValue: i.by,
      easing: i.easing,
      duration: i.duration,
      abort: i.abort && function() {
        return i.abort.call(r)
      },
      onChange: function(e) {
        o ? r[o[0]][o[1]] = e : r.set(t, e), n || i.onChange && i.onChange()
      },
      onComplete: function() {
        n || (r.setCoords(), i.onComplete && i.onComplete())
      }
    })
  }
}),
  function(t) {
    "use strict";

    function e(t, e) {
      var i = t.origin,
        n = t.axis1,
        o = t.axis2,
        r = t.dimension,
        s = e.nearest,
        a = e.center,
        l = e.farthest;
      return function() {
        switch (this.get(i)) {
          case s:
            return Math.min(this.get(n), this.get(o));
          case a:
            return Math.min(this.get(n), this.get(o)) + .5 * this.get(r);
          case l:
            return Math.max(this.get(n), this.get(o))
        }
      }
    }
    var i = t.fabric || (t.fabric = {}),
      n = i.util.object.extend,
      o = i.util.object.clone,
      r = {
        x1: 1,
        x2: 1,
        y1: 1,
        y2: 1
      },
      s = i.StaticCanvas.supports("setLineDash");
    if (i.Line) return void i.warn("fabric.Line is already defined");
    var a = i.Object.prototype.cacheProperties.concat();
    a.push("x1", "x2", "y1", "y2"), i.Line = i.util.createClass(i.Object, {
      type: "line",
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      cacheProperties: a,
      initialize: function(t, e) {
        t || (t = [0, 0, 0, 0]), this.callSuper("initialize", e), this.set("x1", t[0]), this.set("y1", t[1]), this.set("x2", t[2]), this.set("y2", t[3]), this._setWidthHeight(e)
      },
      _setWidthHeight: function(t) {
        t || (t = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in t ? t.left : this._getLeftToOriginX(), this.top = "top" in t ? t.top : this._getTopToOriginY()
      },
      _set: function(t, e) {
        return this.callSuper("_set", t, e), "undefined" != typeof r[t] && this._setWidthHeight(), this
      },
      _getLeftToOriginX: e({
        origin: "originX",
        axis1: "x1",
        axis2: "x2",
        dimension: "width"
      }, {
        nearest: "left",
        center: "center",
        farthest: "right"
      }),
      _getTopToOriginY: e({
        origin: "originY",
        axis1: "y1",
        axis2: "y2",
        dimension: "height"
      }, {
        nearest: "top",
        center: "center",
        farthest: "bottom"
      }),
      _render: function(t, e) {
        if (t.beginPath(), e) {
          var i = this.getCenterPoint(),
            n = this.strokeWidth / 2;
          t.translate(i.x - ("butt" === this.strokeLineCap && 0 === this.height ? 0 : n), i.y - ("butt" === this.strokeLineCap && 0 === this.width ? 0 : n))
        }
        if (!this.strokeDashArray || this.strokeDashArray && s) {
          var o = this.calcLinePoints();
          t.moveTo(o.x1, o.y1), t.lineTo(o.x2, o.y2)
        }
        t.lineWidth = this.strokeWidth;
        var r = t.strokeStyle;
        t.strokeStyle = this.stroke || t.fillStyle, this.stroke && this._renderStroke(t), t.strokeStyle = r
      },
      _renderDashedStroke: function(t) {
        var e = this.calcLinePoints();
        t.beginPath(), i.util.drawDashedLine(t, e.x1, e.y1, e.x2, e.y2, this.strokeDashArray), t.closePath()
      },
      toObject: function(t) {
        return n(this.callSuper("toObject", t), this.calcLinePoints())
      },
      _getNonTransformedDimensions: function() {
        var t = this.callSuper("_getNonTransformedDimensions");
        return "butt" === this.strokeLineCap && (0 === this.width && (t.y -= this.strokeWidth), 0 === this.height && (t.x -= this.strokeWidth)), t
      },
      calcLinePoints: function() {
        var t = this.x1 <= this.x2 ? -1 : 1,
          e = this.y1 <= this.y2 ? -1 : 1,
          i = t * this.width * .5,
          n = e * this.height * .5,
          o = t * this.width * -.5,
          r = e * this.height * -.5;
        return {
          x1: i,
          x2: o,
          y1: n,
          y2: r
        }
      },
      toSVG: function(t) {
        var e = this._createBaseSVGMarkup(),
          i = {
            x1: this.x1,
            x2: this.x2,
            y1: this.y1,
            y2: this.y2
          };
        return this.group && "path-group" === this.group.type || (i = this.calcLinePoints()), e.push("<line ", this.getSvgId(), 'x1="', i.x1, '" y1="', i.y1, '" x2="', i.x2, '" y2="', i.y2, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '"/>\n'), t ? t(e.join("")) : e.join("")
      }
    }), i.Line.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), i.Line.fromElement = function(t, e) {
      e = e || {};
      var o = i.parseAttributes(t, i.Line.ATTRIBUTE_NAMES),
        r = [o.x1 || 0, o.y1 || 0, o.x2 || 0, o.y2 || 0];
      return e.originX = "left", e.originY = "top", new i.Line(r, n(o, e))
    }, i.Line.fromObject = function(t, e, n) {
      function r(t) {
        delete t.points, e && e(t)
      }
      var s = o(t, !0);
      s.points = [t.x1, t.y1, t.x2, t.y2];
      var a = i.Object._fromObject("Line", s, r, n, "points");
      return a && delete a.points, a
    }
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";

    function e(t) {
      return "radius" in t && t.radius >= 0
    }
    var i = t.fabric || (t.fabric = {}),
      n = Math.PI,
      o = i.util.object.extend;
    if (i.Circle) return void i.warn("fabric.Circle is already defined.");
    var r = i.Object.prototype.cacheProperties.concat();
    r.push("radius"), i.Circle = i.util.createClass(i.Object, {
      type: "circle",
      radius: 0,
      startAngle: 0,
      endAngle: 2 * n,
      cacheProperties: r,
      initialize: function(t) {
        this.callSuper("initialize", t), this.set("radius", t && t.radius || 0)
      },
      _set: function(t, e) {
        return this.callSuper("_set", t, e), "radius" === t && this.setRadius(e), this
      },
      toObject: function(t) {
        return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(t))
      },
      toSVG: function(t) {
        var e = this._createBaseSVGMarkup(),
          i = 0,
          o = 0,
          r = (this.endAngle - this.startAngle) % (2 * n);
        if (0 === r) this.group && "path-group" === this.group.type && (i = this.left + this.radius, o = this.top + this.radius), e.push("<circle ", this.getSvgId(), 'cx="' + i + '" cy="' + o + '" ', 'r="', this.radius, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), " ", this.getSvgTransformMatrix(), '"/>\n');
        else {
          var s = Math.cos(this.startAngle) * this.radius,
            a = Math.sin(this.startAngle) * this.radius,
            l = Math.cos(this.endAngle) * this.radius,
            c = Math.sin(this.endAngle) * this.radius,
            h = r > n ? "1" : "0";
          e.push('<path d="M ' + s + " " + a, " A " + this.radius + " " + this.radius, " 0 ", +h + " 1", " " + l + " " + c, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), " ", this.getSvgTransformMatrix(), '"/>\n')
        }
        return t ? t(e.join("")) : e.join("")
      },
      _render: function(t, e) {
        t.beginPath(), t.arc(e ? this.left + this.radius : 0, e ? this.top + this.radius : 0, this.radius, this.startAngle, this.endAngle, !1), this._renderFill(t), this._renderStroke(t)
      },
      getRadiusX: function() {
        return this.get("radius") * this.get("scaleX")
      },
      getRadiusY: function() {
        return this.get("radius") * this.get("scaleY")
      },
      setRadius: function(t) {
        return this.radius = t, this.set("width", 2 * t).set("height", 2 * t)
      }
    }), i.Circle.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")), i.Circle.fromElement = function(t, n) {
      n || (n = {});
      var r = i.parseAttributes(t, i.Circle.ATTRIBUTE_NAMES);
      if (!e(r)) throw new Error("value of `r` attribute is required and can not be negative");
      r.left = r.left || 0, r.top = r.top || 0;
      var s = new i.Circle(o(r, n));
      return s.left -= s.radius, s.top -= s.radius, s
    }, i.Circle.fromObject = function(t, e, n) {
      return i.Object._fromObject("Circle", t, e, n)
    }
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {});
    return e.Triangle ? void e.warn("fabric.Triangle is already defined") : (e.Triangle = e.util.createClass(e.Object, {
      type: "triangle",
      initialize: function(t) {
        this.callSuper("initialize", t), this.set("width", t && t.width || 100).set("height", t && t.height || 100)
      },
      _render: function(t) {
        var e = this.width / 2,
          i = this.height / 2;
        t.beginPath(), t.moveTo(-e, i), t.lineTo(0, -i), t.lineTo(e, i), t.closePath(), this._renderFill(t), this._renderStroke(t)
      },
      _renderDashedStroke: function(t) {
        var i = this.width / 2,
          n = this.height / 2;
        t.beginPath(), e.util.drawDashedLine(t, -i, n, 0, -n, this.strokeDashArray), e.util.drawDashedLine(t, 0, -n, i, n, this.strokeDashArray), e.util.drawDashedLine(t, i, n, -i, n, this.strokeDashArray), t.closePath()
      },
      toSVG: function(t) {
        var e = this._createBaseSVGMarkup(),
          i = this.width / 2,
          n = this.height / 2,
          o = [-i + " " + n, "0 " + -n, i + " " + n].join(",");
        return e.push("<polygon ", this.getSvgId(), 'points="', o, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), '"/>'), t ? t(e.join("")) : e.join("")
      }
    }), void(e.Triangle.fromObject = function(t, i, n) {
      return e.Object._fromObject("Triangle", t, i, n)
    }))
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = 2 * Math.PI,
      n = e.util.object.extend;
    if (e.Ellipse) return void e.warn("fabric.Ellipse is already defined.");
    var o = e.Object.prototype.cacheProperties.concat();
    o.push("rx", "ry"), e.Ellipse = e.util.createClass(e.Object, {
      type: "ellipse",
      rx: 0,
      ry: 0,
      cacheProperties: o,
      initialize: function(t) {
        this.callSuper("initialize", t), this.set("rx", t && t.rx || 0), this.set("ry", t && t.ry || 0)
      },
      _set: function(t, e) {
        switch (this.callSuper("_set", t, e), t) {
          case "rx":
            this.rx = e, this.set("width", 2 * e);
            break;
          case "ry":
            this.ry = e, this.set("height", 2 * e)
        }
        return this
      },
      getRx: function() {
        return this.get("rx") * this.get("scaleX")
      },
      getRy: function() {
        return this.get("ry") * this.get("scaleY")
      },
      toObject: function(t) {
        return this.callSuper("toObject", ["rx", "ry"].concat(t))
      },
      toSVG: function(t) {
        var e = this._createBaseSVGMarkup(),
          i = 0,
          n = 0;
        return this.group && "path-group" === this.group.type && (i = this.left + this.rx, n = this.top + this.ry), e.push("<ellipse ", this.getSvgId(), 'cx="', i, '" cy="', n, '" ', 'rx="', this.rx, '" ry="', this.ry, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '"/>\n'), t ? t(e.join("")) : e.join("")
      },
      _render: function(t, e) {
        t.beginPath(), t.save(), t.transform(1, 0, 0, this.ry / this.rx, 0, 0), t.arc(e ? this.left + this.rx : 0, e ? (this.top + this.ry) * this.rx / this.ry : 0, this.rx, 0, i, !1), t.restore(), this._renderFill(t), this._renderStroke(t)
      }
    }), e.Ellipse.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")), e.Ellipse.fromElement = function(t, i) {
      i || (i = {});
      var o = e.parseAttributes(t, e.Ellipse.ATTRIBUTE_NAMES);
      o.left = o.left || 0, o.top = o.top || 0;
      var r = new e.Ellipse(n(o, i));
      return r.top -= r.ry, r.left -= r.rx, r
    }, e.Ellipse.fromObject = function(t, i, n) {
      return e.Object._fromObject("Ellipse", t, i, n)
    }
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend;
    if (e.Rect) return void e.warn("fabric.Rect is already defined");
    var n = e.Object.prototype.stateProperties.concat();
    n.push("rx", "ry"), e.Rect = e.util.createClass(e.Object, {
      stateProperties: n,
      type: "rect",
      rx: 0,
      ry: 0,
      strokeDashArray: null,
      initialize: function(t) {
        this.callSuper("initialize", t), this._initRxRy()
      },
      _initRxRy: function() {
        this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry)
      },
      _render: function(t, e) {
        if (1 === this.width && 1 === this.height) return void t.fillRect(-.5, -.5, 1, 1);
        var i = this.rx ? Math.min(this.rx, this.width / 2) : 0,
          n = this.ry ? Math.min(this.ry, this.height / 2) : 0,
          o = this.width,
          r = this.height,
          s = e ? this.left : -this.width / 2,
          a = e ? this.top : -this.height / 2,
          l = 0 !== i || 0 !== n,
          c = .4477152502;
        t.beginPath(), t.moveTo(s + i, a), t.lineTo(s + o - i, a), l && t.bezierCurveTo(s + o - c * i, a, s + o, a + c * n, s + o, a + n), t.lineTo(s + o, a + r - n), l && t.bezierCurveTo(s + o, a + r - c * n, s + o - c * i, a + r, s + o - i, a + r), t.lineTo(s + i, a + r), l && t.bezierCurveTo(s + c * i, a + r, s, a + r - c * n, s, a + r - n), t.lineTo(s, a + n), l && t.bezierCurveTo(s, a + c * n, s + c * i, a, s + i, a), t.closePath(), this._renderFill(t), this._renderStroke(t)
      },
      _renderDashedStroke: function(t) {
        var i = -this.width / 2,
          n = -this.height / 2,
          o = this.width,
          r = this.height;
        t.beginPath(), e.util.drawDashedLine(t, i, n, i + o, n, this.strokeDashArray), e.util.drawDashedLine(t, i + o, n, i + o, n + r, this.strokeDashArray), e.util.drawDashedLine(t, i + o, n + r, i, n + r, this.strokeDashArray), e.util.drawDashedLine(t, i, n + r, i, n, this.strokeDashArray), t.closePath()
      },
      toObject: function(t) {
        return this.callSuper("toObject", ["rx", "ry"].concat(t))
      },
      toSVG: function(t) {
        var e = this._createBaseSVGMarkup(),
          i = this.left,
          n = this.top;
        return this.group && "path-group" === this.group.type || (i = -this.width / 2, n = -this.height / 2), e.push("<rect ", this.getSvgId(), 'x="', i, '" y="', n, '" rx="', this.get("rx"), '" ry="', this.get("ry"), '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '"/>\n'), t ? t(e.join("")) : e.join("")
      }
    }), e.Rect.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), e.Rect.fromElement = function(t, n) {
      if (!t) return null;
      n = n || {};
      var o = e.parseAttributes(t, e.Rect.ATTRIBUTE_NAMES);
      o.left = o.left || 0, o.top = o.top || 0;
      var r = new e.Rect(i(n ? e.util.object.clone(n) : {}, o));
      return r.visible = r.visible && r.width > 0 && r.height > 0, r
    }, e.Rect.fromObject = function(t, i, n) {
      return e.Object._fromObject("Rect", t, i, n)
    }
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.util.array.min,
      o = e.util.array.max,
      r = e.util.toFixed;
    if (e.Polyline) return void e.warn("fabric.Polyline is already defined");
    var s = e.Object.prototype.cacheProperties.concat();
    s.push("points"), e.Polyline = e.util.createClass(e.Object, {
      type: "polyline",
      points: null,
      minX: 0,
      minY: 0,
      cacheProperties: s,
      initialize: function(t, e) {
        e = e || {}, this.points = t || [], this.callSuper("initialize", e), this._calcDimensions(), "top" in e || (this.top = this.minY), "left" in e || (this.left = this.minX), this.pathOffset = {
          x: this.minX + this.width / 2,
          y: this.minY + this.height / 2
        }
      },
      _calcDimensions: function() {
        var t = this.points,
          e = n(t, "x"),
          i = n(t, "y"),
          r = o(t, "x"),
          s = o(t, "y");
        this.width = r - e || 0, this.height = s - i || 0, this.minX = e || 0, this.minY = i || 0
      },
      toObject: function(t) {
        return i(this.callSuper("toObject", t), {
          points: this.points.concat()
        })
      },
      toSVG: function(t) {
        for (var e, i = [], n = this._createBaseSVGMarkup(), o = 0, s = this.points.length; o < s; o++) i.push(r(this.points[o].x, 2), ",", r(this.points[o].y, 2), " ");
        return this.group && "path-group" === this.group.type || (e = " translate(" + -this.pathOffset.x + ", " + -this.pathOffset.y + ") "), n.push("<", this.type, " ", this.getSvgId(), 'points="', i.join(""), '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), e, " ", this.getSvgTransformMatrix(), '"/>\n'), t ? t(n.join("")) : n.join("")
      },
      commonRender: function(t, e) {
        var i, n = this.points.length,
          o = e ? 0 : this.pathOffset.x,
          r = e ? 0 : this.pathOffset.y;
        if (!n || isNaN(this.points[n - 1].y)) return !1;
        t.beginPath(), t.moveTo(this.points[0].x - o, this.points[0].y - r);
        for (var s = 0; s < n; s++) i = this.points[s], t.lineTo(i.x - o, i.y - r);
        return !0
      },
      _render: function(t, e) {
        this.commonRender(t, e) && (this._renderFill(t), this._renderStroke(t))
      },
      _renderDashedStroke: function(t) {
        var i, n;
        t.beginPath();
        for (var o = 0, r = this.points.length; o < r; o++) i = this.points[o], n = this.points[o + 1] || i, e.util.drawDashedLine(t, i.x, i.y, n.x, n.y, this.strokeDashArray);
      },
      complexity: function() {
        return this.get("points").length
      }
    }), e.Polyline.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(), e.Polyline.fromElement = function(t, i) {
      if (!t) return null;
      i || (i = {});
      var n = e.parsePointsAttribute(t.getAttribute("points")),
        o = e.parseAttributes(t, e.Polyline.ATTRIBUTE_NAMES);
      return new e.Polyline(n, e.util.object.extend(o, i))
    }, e.Polyline.fromObject = function(t, i, n) {
      return e.Object._fromObject("Polyline", t, i, n, "points")
    }
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend;
    return e.Polygon ? void e.warn("fabric.Polygon is already defined") : (e.Polygon = e.util.createClass(e.Polyline, {
      type: "polygon",
      _render: function(t, e) {
        this.commonRender(t, e) && (t.closePath(), this._renderFill(t), this._renderStroke(t))
      },
      _renderDashedStroke: function(t) {
        this.callSuper("_renderDashedStroke", t), t.closePath()
      }
    }), e.Polygon.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(), e.Polygon.fromElement = function(t, n) {
      if (!t) return null;
      n || (n = {});
      var o = e.parsePointsAttribute(t.getAttribute("points")),
        r = e.parseAttributes(t, e.Polygon.ATTRIBUTE_NAMES);
      return new e.Polygon(o, i(r, n))
    }, void(e.Polygon.fromObject = function(t, i, n) {
      return e.Object._fromObject("Polygon", t, i, n, "points")
    }))
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.array.min,
      n = e.util.array.max,
      o = e.util.object.extend,
      r = Object.prototype.toString,
      s = e.util.drawArc,
      a = {
        m: 2,
        l: 2,
        h: 1,
        v: 1,
        c: 6,
        s: 4,
        q: 4,
        t: 2,
        a: 7
      },
      l = {
        m: "l",
        M: "L"
      };
    if (e.Path) return void e.warn("fabric.Path is already defined");
    var c = e.Object.prototype.cacheProperties.concat();
    c.push("path"), e.Path = e.util.createClass(e.Object, {
      type: "path",
      path: null,
      minX: 0,
      minY: 0,
      cacheProperties: c,
      initialize: function(t, e) {
        e = e || {}, e && this.setOptions(e), t || (t = []);
        var i = "[object Array]" === r.call(t);
        this.path = i ? t : t.match && t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi), this.path && (i || (this.path = this._parsePath()), this._setPositionDimensions(e), e.sourcePath && this.setSourcePath(e.sourcePath), this.objectCaching && (this._createCacheCanvas(), this.setupState({
          propertySet: "cacheProperties"
        })))
      },
      _setPositionDimensions: function(t) {
        var e = this._parseDimensions();
        this.minX = e.left, this.minY = e.top, this.width = e.width, this.height = e.height, "undefined" == typeof t.left && (this.left = e.left + ("center" === this.originX ? this.width / 2 : "right" === this.originX ? this.width : 0)), "undefined" == typeof t.top && (this.top = e.top + ("center" === this.originY ? this.height / 2 : "bottom" === this.originY ? this.height : 0)), this.pathOffset = this.pathOffset || {
          x: this.minX + this.width / 2,
          y: this.minY + this.height / 2
        }
      },
      _renderPathCommands: function(t) {
        var e, i, n, o = null,
          r = 0,
          a = 0,
          l = 0,
          c = 0,
          h = 0,
          u = 0,
          d = -this.pathOffset.x,
          p = -this.pathOffset.y;
        this.group && "path-group" === this.group.type && (d = 0, p = 0), t.beginPath();
        for (var f = 0, g = this.path.length; f < g; ++f) {
          switch (e = this.path[f], e[0]) {
            case "l":
              l += e[1], c += e[2], t.lineTo(l + d, c + p);
              break;
            case "L":
              l = e[1], c = e[2], t.lineTo(l + d, c + p);
              break;
            case "h":
              l += e[1], t.lineTo(l + d, c + p);
              break;
            case "H":
              l = e[1], t.lineTo(l + d, c + p);
              break;
            case "v":
              c += e[1], t.lineTo(l + d, c + p);
              break;
            case "V":
              c = e[1], t.lineTo(l + d, c + p);
              break;
            case "m":
              l += e[1], c += e[2], r = l, a = c, t.moveTo(l + d, c + p);
              break;
            case "M":
              l = e[1], c = e[2], r = l, a = c, t.moveTo(l + d, c + p);
              break;
            case "c":
              i = l + e[5], n = c + e[6], h = l + e[3], u = c + e[4], t.bezierCurveTo(l + e[1] + d, c + e[2] + p, h + d, u + p, i + d, n + p), l = i, c = n;
              break;
            case "C":
              l = e[5], c = e[6], h = e[3], u = e[4], t.bezierCurveTo(e[1] + d, e[2] + p, h + d, u + p, l + d, c + p);
              break;
            case "s":
              i = l + e[3], n = c + e[4], null === o[0].match(/[CcSs]/) ? (h = l, u = c) : (h = 2 * l - h, u = 2 * c - u), t.bezierCurveTo(h + d, u + p, l + e[1] + d, c + e[2] + p, i + d, n + p), h = l + e[1], u = c + e[2], l = i, c = n;
              break;
            case "S":
              i = e[3], n = e[4], null === o[0].match(/[CcSs]/) ? (h = l, u = c) : (h = 2 * l - h, u = 2 * c - u), t.bezierCurveTo(h + d, u + p, e[1] + d, e[2] + p, i + d, n + p), l = i, c = n, h = e[1], u = e[2];
              break;
            case "q":
              i = l + e[3], n = c + e[4], h = l + e[1], u = c + e[2], t.quadraticCurveTo(h + d, u + p, i + d, n + p), l = i, c = n;
              break;
            case "Q":
              i = e[3], n = e[4], t.quadraticCurveTo(e[1] + d, e[2] + p, i + d, n + p), l = i, c = n, h = e[1], u = e[2];
              break;
            case "t":
              i = l + e[1], n = c + e[2], null === o[0].match(/[QqTt]/) ? (h = l, u = c) : (h = 2 * l - h, u = 2 * c - u), t.quadraticCurveTo(h + d, u + p, i + d, n + p), l = i, c = n;
              break;
            case "T":
              i = e[1], n = e[2], null === o[0].match(/[QqTt]/) ? (h = l, u = c) : (h = 2 * l - h, u = 2 * c - u), t.quadraticCurveTo(h + d, u + p, i + d, n + p), l = i, c = n;
              break;
            case "a":
              s(t, l + d, c + p, [e[1], e[2], e[3], e[4], e[5], e[6] + l + d, e[7] + c + p]), l += e[6], c += e[7];
              break;
            case "A":
              s(t, l + d, c + p, [e[1], e[2], e[3], e[4], e[5], e[6] + d, e[7] + p]), l = e[6], c = e[7];
              break;
            case "z":
            case "Z":
              l = r, c = a, t.closePath()
          }
          o = e
        }
      },
      _render: function(t) {
        this._renderPathCommands(t), this._renderFill(t), this._renderStroke(t)
      },
      toString: function() {
        return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>"
      },
      toObject: function(t) {
        var e = o(this.callSuper("toObject", ["sourcePath", "pathOffset"].concat(t)), {
          path: this.path.map(function(t) {
            return t.slice()
          }),
          top: this.top,
          left: this.left
        });
        return e
      },
      toDatalessObject: function(t) {
        var e = this.toObject(t);
        return this.sourcePath && (e.path = this.sourcePath), delete e.sourcePath, e
      },
      toSVG: function(t) {
        for (var e = [], i = this._createBaseSVGMarkup(), n = "", o = 0, r = this.path.length; o < r; o++) e.push(this.path[o].join(" "));
        var s = e.join(" ");
        return this.group && "path-group" === this.group.type || (n = " translate(" + -this.pathOffset.x + ", " + -this.pathOffset.y + ") "), i.push("<path ", this.getSvgId(), 'd="', s, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), n, this.getSvgTransformMatrix(), '" stroke-linecap="round" ', "/>\n"), t ? t(i.join("")) : i.join("")
      },
      complexity: function() {
        return this.path.length
      },
      _parsePath: function() {
        for (var t, e, i, n, o, r = [], s = [], c = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi, h = 0, u = this.path.length; h < u; h++) {
          for (t = this.path[h], n = t.slice(1).trim(), s.length = 0; i = c.exec(n);) s.push(i[0]);
          o = [t.charAt(0)];
          for (var d = 0, p = s.length; d < p; d++) e = parseFloat(s[d]), isNaN(e) || o.push(e);
          var f = o[0],
            g = a[f.toLowerCase()],
            m = l[f] || f;
          if (o.length - 1 > g)
            for (var v = 1, y = o.length; v < y; v += g) r.push([f].concat(o.slice(v, v + g))), f = m;
          else r.push(o)
        }
        return r
      },
      _parseDimensions: function() {
        for (var t, o, r, s, a = [], l = [], c = null, h = 0, u = 0, d = 0, p = 0, f = 0, g = 0, m = 0, v = this.path.length; m < v; ++m) {
          switch (t = this.path[m], t[0]) {
            case "l":
              d += t[1], p += t[2], s = [];
              break;
            case "L":
              d = t[1], p = t[2], s = [];
              break;
            case "h":
              d += t[1], s = [];
              break;
            case "H":
              d = t[1], s = [];
              break;
            case "v":
              p += t[1], s = [];
              break;
            case "V":
              p = t[1], s = [];
              break;
            case "m":
              d += t[1], p += t[2], h = d, u = p, s = [];
              break;
            case "M":
              d = t[1], p = t[2], h = d, u = p, s = [];
              break;
            case "c":
              o = d + t[5], r = p + t[6], f = d + t[3], g = p + t[4], s = e.util.getBoundsOfCurve(d, p, d + t[1], p + t[2], f, g, o, r), d = o, p = r;
              break;
            case "C":
              d = t[5], p = t[6], f = t[3], g = t[4], s = e.util.getBoundsOfCurve(d, p, t[1], t[2], f, g, d, p);
              break;
            case "s":
              o = d + t[3], r = p + t[4], null === c[0].match(/[CcSs]/) ? (f = d, g = p) : (f = 2 * d - f, g = 2 * p - g), s = e.util.getBoundsOfCurve(d, p, f, g, d + t[1], p + t[2], o, r), f = d + t[1], g = p + t[2], d = o, p = r;
              break;
            case "S":
              o = t[3], r = t[4], null === c[0].match(/[CcSs]/) ? (f = d, g = p) : (f = 2 * d - f, g = 2 * p - g), s = e.util.getBoundsOfCurve(d, p, f, g, t[1], t[2], o, r), d = o, p = r, f = t[1], g = t[2];
              break;
            case "q":
              o = d + t[3], r = p + t[4], f = d + t[1], g = p + t[2], s = e.util.getBoundsOfCurve(d, p, f, g, f, g, o, r), d = o, p = r;
              break;
            case "Q":
              f = t[1], g = t[2], s = e.util.getBoundsOfCurve(d, p, f, g, f, g, t[3], t[4]), d = t[3], p = t[4];
              break;
            case "t":
              o = d + t[1], r = p + t[2], null === c[0].match(/[QqTt]/) ? (f = d, g = p) : (f = 2 * d - f, g = 2 * p - g), s = e.util.getBoundsOfCurve(d, p, f, g, f, g, o, r), d = o, p = r;
              break;
            case "T":
              o = t[1], r = t[2], null === c[0].match(/[QqTt]/) ? (f = d, g = p) : (f = 2 * d - f, g = 2 * p - g), s = e.util.getBoundsOfCurve(d, p, f, g, f, g, o, r), d = o, p = r;
              break;
            case "a":
              s = e.util.getBoundsOfArc(d, p, t[1], t[2], t[3], t[4], t[5], t[6] + d, t[7] + p), d += t[6], p += t[7];
              break;
            case "A":
              s = e.util.getBoundsOfArc(d, p, t[1], t[2], t[3], t[4], t[5], t[6], t[7]), d = t[6], p = t[7];
              break;
            case "z":
            case "Z":
              d = h, p = u
          }
          c = t, s.forEach(function(t) {
            a.push(t.x), l.push(t.y)
          }), a.push(d), l.push(p)
        }
        var y = i(a) || 0,
          b = i(l) || 0,
          x = n(a) || 0,
          w = n(l) || 0,
          C = x - y,
          S = w - b,
          _ = {
            left: y,
            top: b,
            width: C,
            height: S
          };
        return _
      }
    }), e.Path.fromObject = function(t, i, n) {
      var o;
      return "string" != typeof t.path ? e.Object._fromObject("Path", t, i, n, "path") : void e.loadSVGFromURL(t.path, function(n) {
        var r = t.path;
        o = n[0], delete t.path, e.util.object.extend(o, t), o.setSourcePath(r), i && i(o)
      })
    }, e.Path.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(["d"]), e.Path.fromElement = function(t, i, n) {
      var r = e.parseAttributes(t, e.Path.ATTRIBUTE_NAMES);
      i && i(new e.Path(r.d, o(r, n)))
    }, e.Path.async = !0
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend;
    return e.PathGroup ? void e.warn("fabric.PathGroup is already defined") : (e.PathGroup = e.util.createClass(e.Object, {
      type: "path-group",
      fill: "",
      initialize: function(t, e) {
        e = e || {}, this.paths = t || [];
        for (var i = this.paths.length; i--;) this.paths[i].group = this;
        e.toBeParsed && (this.parseDimensionsFromPaths(e), delete e.toBeParsed), this.setOptions(e), this.setCoords(), e.sourcePath && this.setSourcePath(e.sourcePath), this.objectCaching && (this._createCacheCanvas(), this.setupState({
          propertySet: "cacheProperties"
        }))
      },
      parseDimensionsFromPaths: function(t) {
        for (var i, n, o, r, s, a, l = [], c = [], h = this.paths.length; h--;) {
          o = this.paths[h], r = o.height + o.strokeWidth, s = o.width + o.strokeWidth, i = [{
            x: o.left,
            y: o.top
          }, {
            x: o.left + s,
            y: o.top
          }, {
            x: o.left,
            y: o.top + r
          }, {
            x: o.left + s,
            y: o.top + r
          }], a = this.paths[h].transformMatrix;
          for (var u = 0; u < i.length; u++) n = i[u], a && (n = e.util.transformPoint(n, a, !1)), l.push(n.x), c.push(n.y)
        }
        t.width = Math.max.apply(null, l), t.height = Math.max.apply(null, c)
      },
      drawObject: function(t) {
        t.save(), t.translate(-this.width / 2, -this.height / 2);
        for (var e = 0, i = this.paths.length; e < i; ++e) this.paths[e].render(t, !0);
        t.restore()
      },
      isCacheDirty: function() {
        if (this.callSuper("isCacheDirty")) return !0;
        if (!this.statefullCache) return !1;
        for (var t = 0, e = this.paths.length; t < e; t++)
          if (this.paths[t].isCacheDirty(!0)) {
            var i = this._getNonTransformedDimensions();
            return this._cacheContext.clearRect(-i.x / 2, -i.y / 2, i.x, i.y), !0
          }
        return !1
      },
      _set: function(t, e) {
        if ("fill" === t && e && this.isSameColor())
          for (var i = this.paths.length; i--;) this.paths[i]._set(t, e);
        return this.callSuper("_set", t, e)
      },
      toObject: function(t) {
        var e = this.paths.map(function(e) {
            var i = e.includeDefaultValues;
            e.includeDefaultValues = e.group.includeDefaultValues;
            var n = e.toObject(t);
            return e.includeDefaultValues = i, n
          }),
          n = i(this.callSuper("toObject", ["sourcePath"].concat(t)), {
            paths: e
          });
        return n
      },
      toDatalessObject: function(t) {
        var e = this.toObject(t);
        return this.sourcePath && (e.paths = this.sourcePath), e
      },
      toSVG: function(t) {
        var e = this.getObjects(),
          i = this.getPointByOrigin("left", "top"),
          n = "translate(" + i.x + " " + i.y + ")",
          o = this._createBaseSVGMarkup();
        o.push("<g ", this.getSvgId(), 'style="', this.getSvgStyles(), '" ', 'transform="', this.getSvgTransformMatrix(), n, this.getSvgTransform(), '" ', ">\n");
        for (var r = 0, s = e.length; r < s; r++) o.push("\t", e[r].toSVG(t));
        return o.push("</g>\n"), t ? t(o.join("")) : o.join("")
      },
      toString: function() {
        return "#<fabric.PathGroup (" + this.complexity() + "): { top: " + this.top + ", left: " + this.left + " }>"
      },
      isSameColor: function() {
        var t = this.getObjects()[0].get("fill") || "";
        return "string" == typeof t && (t = t.toLowerCase(), this.getObjects().every(function(e) {
          var i = e.get("fill") || "";
          return "string" == typeof i && i.toLowerCase() === t
        }))
      },
      complexity: function() {
        return this.paths.reduce(function(t, e) {
          return t + (e && e.complexity ? e.complexity() : 0)
        }, 0)
      },
      getObjects: function() {
        return this.paths
      }
    }), e.PathGroup.fromObject = function(t, i) {
      var n = t.paths;
      delete t.paths, "string" == typeof n ? e.loadSVGFromURL(n, function(o) {
        var r = n,
          s = e.util.groupSVGElements(o, t, r);
        t.paths = n, i(s)
      }) : e.util.enlivenObjects(n, function(o) {
        var r = new e.PathGroup(o, t);
        t.paths = n, i(r)
      })
    }, void(e.PathGroup.async = !0))
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.util.array.min,
      o = e.util.array.max;
    if (!e.Group) {
      var r = {
        lockMovementX: !0,
        lockMovementY: !0,
        lockRotation: !0,
        lockScalingX: !0,
        lockScalingY: !0,
        lockUniScaling: !0
      };
      e.Group = e.util.createClass(e.Object, e.Collection, {
        type: "group",
        strokeWidth: 0,
        subTargetCheck: !1,
        initialize: function(t, e, i) {
          e = e || {}, this._objects = [], i && this.callSuper("initialize", e), this._objects = t || [];
          for (var n = this._objects.length; n--;) this._objects[n].group = this;
          this.originalState = {}, e.originX && (this.originX = e.originX), e.originY && (this.originY = e.originY), i ? this._updateObjectsCoords(!0) : (this._calcBounds(), this._updateObjectsCoords(), this.callSuper("initialize", e)), this.setCoords(), this.saveCoords()
        },
        _updateObjectsCoords: function(t) {
          for (var e = this.getCenterPoint(), i = this._objects.length; i--;) this._updateObjectCoords(this._objects[i], e, t)
        },
        _updateObjectCoords: function(t, e, i) {
          if (t.__origHasControls = t.hasControls, t.hasControls = !1, !i) {
            var n = t.getLeft(),
              o = t.getTop(),
              r = !0,
              s = !0;
            t.set({
              left: n - e.x,
              top: o - e.y
            }), t.setCoords(r, s)
          }
        },
        toString: function() {
          return "#<fabric.Group: (" + this.complexity() + ")>"
        },
        addWithUpdate: function(t) {
          return this._restoreObjectsState(), e.util.resetObjectTransform(this), t && (this._objects.push(t), t.group = this, t._set("canvas", this.canvas)), this.forEachObject(this._setObjectActive, this), this._calcBounds(), this._updateObjectsCoords(), this.dirty = !0, this
        },
        _setObjectActive: function(t) {
          t.set("active", !0), t.group = this
        },
        removeWithUpdate: function(t) {
          return this._restoreObjectsState(), e.util.resetObjectTransform(this), this.forEachObject(this._setObjectActive, this), this.remove(t), this._calcBounds(), this._updateObjectsCoords(), this.dirty = !0, this
        },
        _onObjectAdded: function(t) {
          this.dirty = !0, t.group = this, t._set("canvas", this.canvas)
        },
        _onObjectRemoved: function(t) {
          this.dirty = !0, delete t.group, t.set("active", !1)
        },
        delegatedProperties: {
          fill: !0,
          stroke: !0,
          strokeWidth: !0,
          fontFamily: !0,
          fontWeight: !0,
          fontSize: !0,
          fontStyle: !0,
          lineHeight: !0,
          textDecoration: !0,
          textAlign: !0,
          backgroundColor: !0
        },
        _set: function(t, e) {
          var i = this._objects.length;
          if (this.delegatedProperties[t] || "canvas" === t)
            for (; i--;) this._objects[i].set(t, e);
          else
            for (; i--;) this._objects[i].setOnGroup(t, e);
          this.callSuper("_set", t, e)
        },
        toObject: function(t) {
          var e = this.getObjects().map(function(e) {
            var i = e.includeDefaultValues;
            e.includeDefaultValues = e.group.includeDefaultValues;
            var n = e.toObject(t);
            return e.includeDefaultValues = i, n
          });
          return i(this.callSuper("toObject", t), {
            objects: e
          })
        },
        render: function(t) {
          this._transformDone = !0, this.callSuper("render", t), this._transformDone = !1
        },
        drawObject: function(t) {
          for (var e = 0, i = this._objects.length; e < i; e++) this._renderObject(this._objects[e], t)
        },
        isCacheDirty: function() {
          if (this.callSuper("isCacheDirty")) return !0;
          if (!this.statefullCache) return !1;
          for (var t = 0, e = this._objects.length; t < e; t++)
            if (this._objects[t].isCacheDirty(!0)) {
              var i = this._getNonTransformedDimensions();
              return this._cacheContext.clearRect(-i.x / 2, -i.y / 2, i.x, i.y), !0
            }
          return !1
        },
        _renderControls: function(t, e) {
          t.save(), t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, this.callSuper("_renderControls", t, e);
          for (var i = 0, n = this._objects.length; i < n; i++) this._objects[i]._renderControls(t);
          t.restore()
        },
        _renderObject: function(t, e) {
          if (t.visible) {
            var i = t.hasRotatingPoint;
            t.hasRotatingPoint = !1, t.render(e), t.hasRotatingPoint = i
          }
        },
        _restoreObjectsState: function() {
          return this._objects.forEach(this._restoreObjectState, this), this
        },
        realizeTransform: function(t) {
          var i = t.calcTransformMatrix(),
            n = e.util.qrDecompose(i),
            o = new e.Point(n.translateX, n.translateY);
          return t.flipX = !1, t.flipY = !1, t.set("scaleX", n.scaleX), t.set("scaleY", n.scaleY), t.skewX = n.skewX, t.skewY = n.skewY, t.angle = n.angle, t.setPositionByOrigin(o, "center", "center"), t
        },
        _restoreObjectState: function(t) {
          return this.realizeTransform(t), t.setCoords(), t.hasControls = t.__origHasControls, delete t.__origHasControls, t.set("active", !1), delete t.group, this
        },
        destroy: function() {
          return this._restoreObjectsState()
        },
        saveCoords: function() {
          return this._originalLeft = this.get("left"), this._originalTop = this.get("top"), this
        },
        hasMoved: function() {
          return this._originalLeft !== this.get("left") || this._originalTop !== this.get("top")
        },
        setObjectsCoords: function() {
          var t = !0,
            e = !0;
          return this.forEachObject(function(i) {
            i.setCoords(t, e)
          }), this
        },
        _calcBounds: function(t) {
          for (var e, i, n, o = [], r = [], s = ["tr", "br", "bl", "tl"], a = 0, l = this._objects.length, c = s.length, h = !0; a < l; ++a)
            for (e = this._objects[a], e.setCoords(h), n = 0; n < c; n++) i = s[n], o.push(e.oCoords[i].x), r.push(e.oCoords[i].y);
          this.set(this._getBounds(o, r, t))
        },
        _getBounds: function(t, i, r) {
          var s = new e.Point(n(t), n(i)),
            a = new e.Point(o(t), o(i)),
            l = {
              width: a.x - s.x || 0,
              height: a.y - s.y || 0
            };
          return r || (l.left = s.x || 0, l.top = s.y || 0, "center" === this.originX && (l.left += l.width / 2), "right" === this.originX && (l.left += l.width), "center" === this.originY && (l.top += l.height / 2), "bottom" === this.originY && (l.top += l.height)), l
        },
        toSVG: function(t) {
          var e = this._createBaseSVGMarkup();
          e.push("<g ", this.getSvgId(), 'transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '" style="', this.getSvgFilter(), '">\n');
          for (var i = 0, n = this._objects.length; i < n; i++) e.push("\t", this._objects[i].toSVG(t));
          return e.push("</g>\n"), t ? t(e.join("")) : e.join("")
        },
        get: function(t) {
          if (t in r) {
            if (this[t]) return this[t];
            for (var e = 0, i = this._objects.length; e < i; e++)
              if (this._objects[e][t]) return !0;
            return !1
          }
          return t in this.delegatedProperties ? this._objects[0] && this._objects[0].get(t) : this[t]
        }
      }), e.Group.fromObject = function(t, i) {
        e.util.enlivenObjects(t.objects, function(n) {
          delete t.objects, i && i(new e.Group(n, t, !0))
        })
      }, e.Group.async = !0
    }
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = fabric.util.object.extend;
    if (t.fabric || (t.fabric = {}), t.fabric.Image) return void fabric.warn("fabric.Image is already defined.");
    var i = fabric.Object.prototype.stateProperties.concat();
    i.push("alignX", "alignY", "meetOrSlice"), fabric.Image = fabric.util.createClass(fabric.Object, {
      type: "image",
      crossOrigin: "",
      alignX: "none",
      alignY: "none",
      meetOrSlice: "meet",
      strokeWidth: 0,
      _lastScaleX: 1,
      _lastScaleY: 1,
      minimumScaleTrigger: .5,
      stateProperties: i,
      objectCaching: !1,
      initialize: function(t, e, i) {
        e || (e = {}), this.filters = [], this.resizeFilters = [], this.callSuper("initialize", e), this._initElement(t, e, i)
      },
      getElement: function() {
        return this._element
      },
      setElement: function(t, e, i) {
        var n, o;
        return this._element = t, this._originalElement = t, this._initConfig(i), 0 === this.resizeFilters.length ? n = e : (o = this, n = function() {
          o.applyFilters(e, o.resizeFilters, o._filteredEl || o._originalElement, !0)
        }), 0 !== this.filters.length ? this.applyFilters(n) : n && n(this), this
      },
      setCrossOrigin: function(t) {
        return this.crossOrigin = t, this._element.crossOrigin = t, this
      },
      getOriginalSize: function() {
        var t = this.getElement();
        return {
          width: t.width,
          height: t.height
        }
      },
      _stroke: function(t) {
        if (this.stroke && 0 !== this.strokeWidth) {
          var e = this.width / 2,
            i = this.height / 2;
          t.beginPath(), t.moveTo(-e, -i), t.lineTo(e, -i), t.lineTo(e, i), t.lineTo(-e, i), t.lineTo(-e, -i), t.closePath()
        }
      },
      _renderDashedStroke: function(t) {
        var e = -this.width / 2,
          i = -this.height / 2,
          n = this.width,
          o = this.height;
        t.save(), this._setStrokeStyles(t), t.beginPath(), fabric.util.drawDashedLine(t, e, i, e + n, i, this.strokeDashArray), fabric.util.drawDashedLine(t, e + n, i, e + n, i + o, this.strokeDashArray), fabric.util.drawDashedLine(t, e + n, i + o, e, i + o, this.strokeDashArray), fabric.util.drawDashedLine(t, e, i + o, e, i, this.strokeDashArray), t.closePath(), t.restore()
      },
      toObject: function(t) {
        var i = [],
          n = [],
          o = 1,
          r = 1;
        this.filters.forEach(function(t) {
          t && ("Resize" === t.type && (o *= t.scaleX, r *= t.scaleY), i.push(t.toObject()))
        }), this.resizeFilters.forEach(function(t) {
          t && n.push(t.toObject())
        });
        var s = e(this.callSuper("toObject", ["crossOrigin", "alignX", "alignY", "meetOrSlice"].concat(t)), {
          src: this.getSrc(),
          filters: i,
          resizeFilters: n
        });
        return s.width /= o, s.height /= r, s
      },
      toSVG: function(t) {
        var e = this._createBaseSVGMarkup(),
          i = -this.width / 2,
          n = -this.height / 2,
          o = "none",
          r = !0;
        if (this.group && "path-group" === this.group.type && (i = this.left, n = this.top), "none" !== this.alignX && "none" !== this.alignY && (o = "x" + this.alignX + "Y" + this.alignY + " " + this.meetOrSlice), e.push('<g transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '">\n', "<image ", this.getSvgId(), 'xlink:href="', this.getSvgSrc(r), '" x="', i, '" y="', n, '" style="', this.getSvgStyles(), '" width="', this.width, '" height="', this.height, '" preserveAspectRatio="', o, '"', "></image>\n"), this.stroke || this.strokeDashArray) {
          var s = this.fill;
          this.fill = null, e.push("<rect ", 'x="', i, '" y="', n, '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), '"/>\n'), this.fill = s
        }
        return e.push("</g>\n"), t ? t(e.join("")) : e.join("")
      },
      getSrc: function(t) {
        var e = t ? this._element : this._originalElement;
        return e ? fabric.isLikelyNode ? e._src : e.src : this.src || ""
      },
      setSrc: function(t, e, i) {
        fabric.util.loadImage(t, function(t) {
          return this.setElement(t, e, i)
        }, this, i && i.crossOrigin)
      },
      toString: function() {
        return '#<fabric.Image: { src: "' + this.getSrc() + '" }>'
      },
      applyFilters: function(t, e, i, n) {
        if (e = e || this.filters, i = i || this._originalElement) {
          var o, r, s = fabric.util.createImage(),
            a = this.canvas ? this.canvas.getRetinaScaling() : fabric.devicePixelRatio,
            l = this.minimumScaleTrigger / a,
            c = this;
          if (0 === e.length) return this._element = i, t && t(this), i;
          var h = fabric.util.createCanvasElement();
          return h.width = i.width, h.height = i.height, h.getContext("2d").drawImage(i, 0, 0, i.width, i.height), e.forEach(function(t) {
            t && (n ? (o = c.scaleX < l ? c.scaleX : 1, r = c.scaleY < l ? c.scaleY : 1, o * a < 1 && (o *= a), r * a < 1 && (r *= a)) : (o = t.scaleX, r = t.scaleY), t.applyTo(h, o, r), n || "Resize" !== t.type || (c.width *= t.scaleX, c.height *= t.scaleY))
          }), s.width = h.width, s.height = h.height, fabric.isLikelyNode ? (s.src = h.toBuffer(void 0, fabric.Image.pngCompression), c._element = s, !n && (c._filteredEl = s), t && t(c)) : (s.onload = function() {
            c._element = s, !n && (c._filteredEl = s), t && t(c), s.onload = h = null
          }, s.src = h.toDataURL("image/png")), h
        }
      },
      _render: function(t, e) {
        var i, n, o, r = this._findMargins();
        i = e ? this.left : -this.width / 2, n = e ? this.top : -this.height / 2, "slice" === this.meetOrSlice && (t.beginPath(), t.rect(i, n, this.width, this.height), t.clip()), this.isMoving === !1 && this.resizeFilters.length && this._needsResize() ? (this._lastScaleX = this.scaleX, this._lastScaleY = this.scaleY, o = this.applyFilters(null, this.resizeFilters, this._filteredEl || this._originalElement, !0)) : o = this._element, o && t.drawImage(o, i + r.marginX, n + r.marginY, r.width, r.height), this._stroke(t), this._renderStroke(t)
      },
      _needsResize: function() {
        return this.scaleX !== this._lastScaleX || this.scaleY !== this._lastScaleY
      },
      _findMargins: function() {
        var t, e, i = this.width,
          n = this.height,
          o = 0,
          r = 0;
        return "none" === this.alignX && "none" === this.alignY || (t = [this.width / this._element.width, this.height / this._element.height], e = "meet" === this.meetOrSlice ? Math.min.apply(null, t) : Math.max.apply(null, t), i = this._element.width * e, n = this._element.height * e, "Mid" === this.alignX && (o = (this.width - i) / 2), "Max" === this.alignX && (o = this.width - i), "Mid" === this.alignY && (r = (this.height - n) / 2), "Max" === this.alignY && (r = this.height - n)), {
          width: i,
          height: n,
          marginX: o,
          marginY: r
        }
      },
      _resetWidthHeight: function() {
        var t = this.getElement();
        this.set("width", t.width), this.set("height", t.height)
      },
      _initElement: function(t, e, i) {
        this.setElement(fabric.util.getById(t), i, e), fabric.util.addClass(this.getElement(), fabric.Image.CSS_CANVAS)
      },
      _initConfig: function(t) {
        t || (t = {}), this.setOptions(t), this._setWidthHeight(t), this._element && this.crossOrigin && (this._element.crossOrigin = this.crossOrigin)
      },
      _initFilters: function(t, e) {
        t && t.length ? fabric.util.enlivenObjects(t, function(t) {
          e && e(t)
        }, "fabric.Image.filters") : e && e()
      },
      _setWidthHeight: function(t) {
        this.width = "width" in t ? t.width : this.getElement() ? this.getElement().width || 0 : 0, this.height = "height" in t ? t.height : this.getElement() ? this.getElement().height || 0 : 0
      }
    }), fabric.Image.CSS_CANVAS = "canvas-img", fabric.Image.prototype.getSvgSrc = fabric.Image.prototype.getSrc, fabric.Image.fromObject = function(t, e) {
      fabric.util.loadImage(t.src, function(i, n) {
        return n ? void(e && e(null, n)) : void fabric.Image.prototype._initFilters.call(t, t.filters, function(n) {
          t.filters = n || [], fabric.Image.prototype._initFilters.call(t, t.resizeFilters, function(n) {
            return t.resizeFilters = n || [], new fabric.Image(i, t, e)
          })
        })
      }, null, t.crossOrigin)
    }, fabric.Image.fromURL = function(t, e, i) {
      fabric.util.loadImage(t, function(t) {
        e && e(new fabric.Image(t, i))
      }, null, i && i.crossOrigin)
    }, fabric.Image.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href".split(" ")), fabric.Image.fromElement = function(t, i, n) {
      var o, r = fabric.parseAttributes(t, fabric.Image.ATTRIBUTE_NAMES);
      r.preserveAspectRatio && (o = fabric.util.parsePreserveAspectRatioAttribute(r.preserveAspectRatio), e(r, o)), fabric.Image.fromURL(r["xlink:href"], i, e(n ? fabric.util.object.clone(n) : {}, r))
    }, fabric.Image.async = !0, fabric.Image.pngCompression = 1
  }("undefined" != typeof exports ? exports : this), fabric.util.object.extend(fabric.Object.prototype, {
  _getAngleValueForStraighten: function() {
    var t = this.getAngle() % 360;
    return t > 0 ? 90 * Math.round((t - 1) / 90) : 90 * Math.round(t / 90)
  },
  straighten: function() {
    return this.setAngle(this._getAngleValueForStraighten()), this
  },
  fxStraighten: function(t) {
    t = t || {};
    var e = function() {},
      i = t.onComplete || e,
      n = t.onChange || e,
      o = this;
    return fabric.util.animate({
      startValue: this.get("angle"),
      endValue: this._getAngleValueForStraighten(),
      duration: this.FX_DURATION,
      onChange: function(t) {
        o.setAngle(t), n()
      },
      onComplete: function() {
        o.setCoords(), i()
      },
      onStart: function() {
        o.set("active", !1)
      }
    }), this
  }
}), fabric.util.object.extend(fabric.StaticCanvas.prototype, {
  straightenObject: function(t) {
    return t.straighten(), this.renderAll(), this
  },
  fxStraightenObject: function(t) {
    return t.fxStraighten({
      onChange: this.renderAll.bind(this)
    }), this
  }
}), fabric.Image.filters = fabric.Image.filters || {}, fabric.Image.filters.BaseFilter = fabric.util.createClass({
  type: "BaseFilter",
  initialize: function(t) {
    t && this.setOptions(t)
  },
  setOptions: function(t) {
    for (var e in t) this[e] = t[e]
  },
  toObject: function() {
    return {
      type: this.type
    }
  },
  toJSON: function() {
    return this.toObject()
  }
}), fabric.Image.filters.BaseFilter.fromObject = function(t, e) {
  var i = new fabric.Image.filters[t.type](t);
  return e && e(i), i
},
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.Brightness = o(n.BaseFilter, {
      type: "Brightness",
      initialize: function(t) {
        t = t || {}, this.brightness = t.brightness || 0
      },
      applyTo: function(t) {
        for (var e = t.getContext("2d"), i = e.getImageData(0, 0, t.width, t.height), n = i.data, o = this.brightness, r = 0, s = n.length; r < s; r += 4) n[r] += o, n[r + 1] += o, n[r + 2] += o;
        e.putImageData(i, 0, 0)
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          brightness: this.brightness
        })
      }
    }), e.Image.filters.Brightness.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.Convolute = o(n.BaseFilter, {
      type: "Convolute",
      initialize: function(t) {
        t = t || {}, this.opaque = t.opaque, this.matrix = t.matrix || [0, 0, 0, 0, 1, 0, 0, 0, 0]
      },
      applyTo: function(t) {
        for (var e, i, n, o, r, s, a, l, c, h = this.matrix, u = t.getContext("2d"), d = u.getImageData(0, 0, t.width, t.height), p = Math.round(Math.sqrt(h.length)), f = Math.floor(p / 2), g = d.data, m = d.width, v = d.height, y = u.createImageData(m, v), b = y.data, x = this.opaque ? 1 : 0, w = 0; w < v; w++)
          for (var C = 0; C < m; C++) {
            r = 4 * (w * m + C), e = 0, i = 0, n = 0, o = 0;
            for (var S = 0; S < p; S++)
              for (var _ = 0; _ < p; _++) a = w + S - f, s = C + _ - f, a < 0 || a > v || s < 0 || s > m || (l = 4 * (a * m + s), c = h[S * p + _], e += g[l] * c, i += g[l + 1] * c, n += g[l + 2] * c, o += g[l + 3] * c);
            b[r] = e, b[r + 1] = i, b[r + 2] = n, b[r + 3] = o + x * (255 - o)
          }
        u.putImageData(y, 0, 0)
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          opaque: this.opaque,
          matrix: this.matrix
        })
      }
    }), e.Image.filters.Convolute.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.GradientTransparency = o(n.BaseFilter, {
      type: "GradientTransparency",
      initialize: function(t) {
        t = t || {}, this.threshold = t.threshold || 100
      },
      applyTo: function(t) {
        for (var e = t.getContext("2d"), i = e.getImageData(0, 0, t.width, t.height), n = i.data, o = this.threshold, r = n.length, s = 0, a = n.length; s < a; s += 4) n[s + 3] = o + 255 * (r - s) / r;
        e.putImageData(i, 0, 0)
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          threshold: this.threshold
        })
      }
    }), e.Image.filters.GradientTransparency.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.Image.filters,
      n = e.util.createClass;
    i.Grayscale = n(i.BaseFilter, {
      type: "Grayscale",
      applyTo: function(t) {
        for (var e, i = t.getContext("2d"), n = i.getImageData(0, 0, t.width, t.height), o = n.data, r = n.width * n.height * 4, s = 0; s < r;) e = (o[s] + o[s + 1] + o[s + 2]) / 3, o[s] = e, o[s + 1] = e, o[s + 2] = e, s += 4;
        i.putImageData(n, 0, 0)
      }
    }), e.Image.filters.Grayscale.fromObject = function(t, i) {
      return t = t || {}, t.type = "Grayscale", e.Image.filters.BaseFilter.fromObject(t, i)
    }
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.Image.filters,
      n = e.util.createClass;
    i.Invert = n(i.BaseFilter, {
      type: "Invert",
      applyTo: function(t) {
        var e, i = t.getContext("2d"),
          n = i.getImageData(0, 0, t.width, t.height),
          o = n.data,
          r = o.length;
        for (e = 0; e < r; e += 4) o[e] = 255 - o[e], o[e + 1] = 255 - o[e + 1], o[e + 2] = 255 - o[e + 2];
        i.putImageData(n, 0, 0)
      }
    }), e.Image.filters.Invert.fromObject = function(t, i) {
      return t = t || {}, t.type = "Invert", e.Image.filters.BaseFilter.fromObject(t, i)
    }
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.Mask = o(n.BaseFilter, {
      type: "Mask",
      initialize: function(t) {
        t = t || {}, this.mask = t.mask, this.channel = [0, 1, 2, 3].indexOf(t.channel) > -1 ? t.channel : 0
      },
      applyTo: function(t) {
        if (this.mask) {
          var i, n = t.getContext("2d"),
            o = n.getImageData(0, 0, t.width, t.height),
            r = o.data,
            s = this.mask.getElement(),
            a = e.util.createCanvasElement(),
            l = this.channel,
            c = o.width * o.height * 4;
          a.width = t.width, a.height = t.height, a.getContext("2d").drawImage(s, 0, 0, t.width, t.height);
          var h = a.getContext("2d").getImageData(0, 0, t.width, t.height),
            u = h.data;
          for (i = 0; i < c; i += 4) r[i + 3] = u[i + l];
          n.putImageData(o, 0, 0)
        }
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          mask: this.mask.toObject(),
          channel: this.channel
        })
      }
    }), e.Image.filters.Mask.fromObject = function(t, i) {
      e.util.loadImage(t.mask.src, function(n) {
        return t.mask = new e.Image(n, t.mask), e.Image.filters.BaseFilter.fromObject(t, i)
      })
    }, e.Image.filters.Mask.async = !0
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.Noise = o(n.BaseFilter, {
      type: "Noise",
      initialize: function(t) {
        t = t || {}, this.noise = t.noise || 0
      },
      applyTo: function(t) {
        for (var e, i = t.getContext("2d"), n = i.getImageData(0, 0, t.width, t.height), o = n.data, r = this.noise, s = 0, a = o.length; s < a; s += 4) e = (.5 - Math.random()) * r, o[s] += e, o[s + 1] += e, o[s + 2] += e;
        i.putImageData(n, 0, 0)
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          noise: this.noise
        })
      }
    }), e.Image.filters.Noise.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.Pixelate = o(n.BaseFilter, {
      type: "Pixelate",
      initialize: function(t) {
        t = t || {}, this.blocksize = t.blocksize || 4
      },
      applyTo: function(t) {
        var e, i, n, o, r, s, a, l = t.getContext("2d"),
          c = l.getImageData(0, 0, t.width, t.height),
          h = c.data,
          u = c.height,
          d = c.width;
        for (i = 0; i < u; i += this.blocksize)
          for (n = 0; n < d; n += this.blocksize) {
            e = 4 * i * d + 4 * n, o = h[e], r = h[e + 1], s = h[e + 2], a = h[e + 3];
            for (var p = i, f = i + this.blocksize; p < f; p++)
              for (var g = n, m = n + this.blocksize; g < m; g++) e = 4 * p * d + 4 * g, h[e] = o, h[e + 1] = r, h[e + 2] = s, h[e + 3] = a
          }
        l.putImageData(c, 0, 0)
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          blocksize: this.blocksize
        })
      }
    }), e.Image.filters.Pixelate.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.RemoveWhite = o(n.BaseFilter, {
      type: "RemoveWhite",
      initialize: function(t) {
        t = t || {}, this.threshold = t.threshold || 30, this.distance = t.distance || 20
      },
      applyTo: function(t) {
        for (var e, i, n, o = t.getContext("2d"), r = o.getImageData(0, 0, t.width, t.height), s = r.data, a = this.threshold, l = this.distance, c = 255 - a, h = Math.abs, u = 0, d = s.length; u < d; u += 4) e = s[u], i = s[u + 1], n = s[u + 2], e > c && i > c && n > c && h(e - i) < l && h(e - n) < l && h(i - n) < l && (s[u + 3] = 0);
        o.putImageData(r, 0, 0)
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          threshold: this.threshold,
          distance: this.distance
        })
      }
    }), e.Image.filters.RemoveWhite.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.Image.filters,
      n = e.util.createClass;
    i.Sepia = n(i.BaseFilter, {
      type: "Sepia",
      applyTo: function(t) {
        var e, i, n = t.getContext("2d"),
          o = n.getImageData(0, 0, t.width, t.height),
          r = o.data,
          s = r.length;
        for (e = 0; e < s; e += 4) i = .3 * r[e] + .59 * r[e + 1] + .11 * r[e + 2],
          r[e] = i + 100, r[e + 1] = i + 50, r[e + 2] = i + 255;
        n.putImageData(o, 0, 0)
      }
    }), e.Image.filters.Sepia.fromObject = function(t, i) {
      return t = t || {}, t.type = "Sepia", new e.Image.filters.BaseFilter.fromObject(t, i)
    }
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.Image.filters,
      n = e.util.createClass;
    i.Sepia2 = n(i.BaseFilter, {
      type: "Sepia2",
      applyTo: function(t) {
        var e, i, n, o, r = t.getContext("2d"),
          s = r.getImageData(0, 0, t.width, t.height),
          a = s.data,
          l = a.length;
        for (e = 0; e < l; e += 4) i = a[e], n = a[e + 1], o = a[e + 2], a[e] = (.393 * i + .769 * n + .189 * o) / 1.351, a[e + 1] = (.349 * i + .686 * n + .168 * o) / 1.203, a[e + 2] = (.272 * i + .534 * n + .131 * o) / 2.14;
        r.putImageData(s, 0, 0)
      }
    }), e.Image.filters.Sepia2.fromObject = function(t, i) {
      return t = t || {}, t.type = "Sepia2", new e.Image.filters.BaseFilter.fromObject(t, i)
    }
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.Tint = o(n.BaseFilter, {
      type: "Tint",
      initialize: function(t) {
        t = t || {}, this.color = t.color || "#000000", this.opacity = "undefined" != typeof t.opacity ? t.opacity : new e.Color(this.color).getAlpha()
      },
      applyTo: function(t) {
        var i, n, o, r, s, a, l, c, h, u = t.getContext("2d"),
          d = u.getImageData(0, 0, t.width, t.height),
          p = d.data,
          f = p.length;
        for (h = new e.Color(this.color).getSource(), n = h[0] * this.opacity, o = h[1] * this.opacity, r = h[2] * this.opacity, c = 1 - this.opacity, i = 0; i < f; i += 4) s = p[i], a = p[i + 1], l = p[i + 2], p[i] = n + s * c, p[i + 1] = o + a * c, p[i + 2] = r + l * c;
        u.putImageData(d, 0, 0)
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          color: this.color,
          opacity: this.opacity
        })
      }
    }), e.Image.filters.Tint.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.Multiply = o(n.BaseFilter, {
      type: "Multiply",
      initialize: function(t) {
        t = t || {}, this.color = t.color || "#000000"
      },
      applyTo: function(t) {
        var i, n, o = t.getContext("2d"),
          r = o.getImageData(0, 0, t.width, t.height),
          s = r.data,
          a = s.length;
        for (n = new e.Color(this.color).getSource(), i = 0; i < a; i += 4) s[i] *= n[0] / 255, s[i + 1] *= n[1] / 255, s[i + 2] *= n[2] / 255;
        o.putImageData(r, 0, 0)
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          color: this.color
        })
      }
    }), e.Image.filters.Multiply.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric,
      i = e.Image.filters,
      n = e.util.createClass;
    i.Blend = n(i.BaseFilter, {
      type: "Blend",
      initialize: function(t) {
        t = t || {}, this.color = t.color || "#000", this.image = t.image || !1, this.mode = t.mode || "multiply", this.alpha = t.alpha || 1
      },
      applyTo: function(t) {
        var i, n, o, r, s, a, l, c, h, u, d = t.getContext("2d"),
          p = d.getImageData(0, 0, t.width, t.height),
          f = p.data,
          g = !1;
        if (this.image) {
          g = !0;
          var m = e.util.createCanvasElement();
          m.width = this.image.width, m.height = this.image.height;
          var v = new e.StaticCanvas(m);
          v.add(this.image);
          var y = v.getContext("2d");
          u = y.getImageData(0, 0, v.width, v.height).data
        } else u = new e.Color(this.color).getSource(), i = u[0] * this.alpha, n = u[1] * this.alpha, o = u[2] * this.alpha;
        for (var b = 0, x = f.length; b < x; b += 4) switch (r = f[b], s = f[b + 1], a = f[b + 2], g && (i = u[b] * this.alpha, n = u[b + 1] * this.alpha, o = u[b + 2] * this.alpha), this.mode) {
          case "multiply":
            f[b] = r * i / 255, f[b + 1] = s * n / 255, f[b + 2] = a * o / 255;
            break;
          case "screen":
            f[b] = 1 - (1 - r) * (1 - i), f[b + 1] = 1 - (1 - s) * (1 - n), f[b + 2] = 1 - (1 - a) * (1 - o);
            break;
          case "add":
            f[b] = Math.min(255, r + i), f[b + 1] = Math.min(255, s + n), f[b + 2] = Math.min(255, a + o);
            break;
          case "diff":
          case "difference":
            f[b] = Math.abs(r - i), f[b + 1] = Math.abs(s - n), f[b + 2] = Math.abs(a - o);
            break;
          case "subtract":
            l = r - i, c = s - n, h = a - o, f[b] = l < 0 ? 0 : l, f[b + 1] = c < 0 ? 0 : c, f[b + 2] = h < 0 ? 0 : h;
            break;
          case "darken":
            f[b] = Math.min(r, i), f[b + 1] = Math.min(s, n), f[b + 2] = Math.min(a, o);
            break;
          case "lighten":
            f[b] = Math.max(r, i), f[b + 1] = Math.max(s, n), f[b + 2] = Math.max(a, o)
        }
        d.putImageData(p, 0, 0)
      },
      toObject: function() {
        return {
          color: this.color,
          image: this.image,
          mode: this.mode,
          alpha: this.alpha
        }
      }
    }), e.Image.filters.Blend.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = Math.pow,
      n = Math.floor,
      o = Math.sqrt,
      r = Math.abs,
      s = Math.max,
      a = Math.round,
      l = Math.sin,
      c = Math.ceil,
      h = e.Image.filters,
      u = e.util.createClass;
    h.Resize = u(h.BaseFilter, {
      type: "Resize",
      resizeType: "hermite",
      scaleX: 0,
      scaleY: 0,
      lanczosLobes: 3,
      applyTo: function(t, e, i) {
        if (1 !== e || 1 !== i) {
          this.rcpScaleX = 1 / e, this.rcpScaleY = 1 / i;
          var n, o = t.width,
            r = t.height,
            s = a(o * e),
            l = a(r * i);
          "sliceHack" === this.resizeType && (n = this.sliceByTwo(t, o, r, s, l)), "hermite" === this.resizeType && (n = this.hermiteFastResize(t, o, r, s, l)), "bilinear" === this.resizeType && (n = this.bilinearFiltering(t, o, r, s, l)), "lanczos" === this.resizeType && (n = this.lanczosResize(t, o, r, s, l)), t.width = s, t.height = l, t.getContext("2d").putImageData(n, 0, 0)
        }
      },
      sliceByTwo: function(t, i, o, r, a) {
        var l, c = t.getContext("2d"),
          h = .5,
          u = .5,
          d = 1,
          p = 1,
          f = !1,
          g = !1,
          m = i,
          v = o,
          y = e.util.createCanvasElement(),
          b = y.getContext("2d");
        for (r = n(r), a = n(a), y.width = s(r, i), y.height = s(a, o), r > i && (h = 2, d = -1), a > o && (u = 2, p = -1), l = c.getImageData(0, 0, i, o), t.width = s(r, i), t.height = s(a, o), c.putImageData(l, 0, 0); !f || !g;) i = m, o = v, r * d < n(m * h * d) ? m = n(m * h) : (m = r, f = !0), a * p < n(v * u * p) ? v = n(v * u) : (v = a, g = !0), l = c.getImageData(0, 0, i, o), b.putImageData(l, 0, 0), c.clearRect(0, 0, m, v), c.drawImage(y, 0, 0, i, o, 0, 0, m, v);
        return c.getImageData(0, 0, r, a)
      },
      lanczosResize: function(t, e, s, a, h) {
        function u(t) {
          return function(e) {
            if (e > t) return 0;
            if (e *= Math.PI, r(e) < 1e-16) return 1;
            var i = e / t;
            return l(e) * l(i) / e / i
          }
        }

        function d(t) {
          var l, c, u, p, f, j, E, A, P, I, $;
          for (T.x = (t + .5) * b, O.x = n(T.x), l = 0; l < h; l++) {
            for (T.y = (l + .5) * x, O.y = n(T.y), f = 0, j = 0, E = 0, A = 0, P = 0, c = O.x - S; c <= O.x + S; c++)
              if (!(c < 0 || c >= e)) {
                I = n(1e3 * r(c - T.x)), k[I] || (k[I] = {});
                for (var D = O.y - _; D <= O.y + _; D++) D < 0 || D >= s || ($ = n(1e3 * r(D - T.y)), k[I][$] || (k[I][$] = y(o(i(I * w, 2) + i($ * C, 2)) / 1e3)), u = k[I][$], u > 0 && (p = 4 * (D * e + c), f += u, j += u * m[p], E += u * m[p + 1], A += u * m[p + 2], P += u * m[p + 3]))
              }
            p = 4 * (l * a + t), v[p] = j / f, v[p + 1] = E / f, v[p + 2] = A / f, v[p + 3] = P / f
          }
          return ++t < a ? d(t) : g
        }
        var p = t.getContext("2d"),
          f = p.getImageData(0, 0, e, s),
          g = p.getImageData(0, 0, a, h),
          m = f.data,
          v = g.data,
          y = u(this.lanczosLobes),
          b = this.rcpScaleX,
          x = this.rcpScaleY,
          w = 2 / this.rcpScaleX,
          C = 2 / this.rcpScaleY,
          S = c(b * this.lanczosLobes / 2),
          _ = c(x * this.lanczosLobes / 2),
          k = {},
          T = {},
          O = {};
        return d(0)
      },
      bilinearFiltering: function(t, e, i, o, r) {
        var s, a, l, c, h, u, d, p, f, g, m, v, y, b = 0,
          x = this.rcpScaleX,
          w = this.rcpScaleY,
          C = t.getContext("2d"),
          S = 4 * (e - 1),
          _ = C.getImageData(0, 0, e, i),
          k = _.data,
          T = C.getImageData(0, 0, o, r),
          O = T.data;
        for (d = 0; d < r; d++)
          for (p = 0; p < o; p++)
            for (h = n(x * p), u = n(w * d), f = x * p - h, g = w * d - u, y = 4 * (u * e + h), m = 0; m < 4; m++) s = k[y + m], a = k[y + 4 + m], l = k[y + S + m], c = k[y + S + 4 + m], v = s * (1 - f) * (1 - g) + a * f * (1 - g) + l * g * (1 - f) + c * f * g, O[b++] = v;
        return T
      },
      hermiteFastResize: function(t, e, i, s, a) {
        for (var l = this.rcpScaleX, h = this.rcpScaleY, u = c(l / 2), d = c(h / 2), p = t.getContext("2d"), f = p.getImageData(0, 0, e, i), g = f.data, m = p.getImageData(0, 0, s, a), v = m.data, y = 0; y < a; y++)
          for (var b = 0; b < s; b++) {
            for (var x = 4 * (b + y * s), w = 0, C = 0, S = 0, _ = 0, k = 0, T = 0, O = 0, j = (y + .5) * h, E = n(y * h); E < (y + 1) * h; E++)
              for (var A = r(j - (E + .5)) / d, P = (b + .5) * l, I = A * A, $ = n(b * l); $ < (b + 1) * l; $++) {
                var D = r(P - ($ + .5)) / u,
                  L = o(I + D * D);
                L > 1 && L < -1 || (w = 2 * L * L * L - 3 * L * L + 1, w > 0 && (D = 4 * ($ + E * e), O += w * g[D + 3], S += w, g[D + 3] < 255 && (w = w * g[D + 3] / 250), _ += w * g[D], k += w * g[D + 1], T += w * g[D + 2], C += w))
              }
            v[x] = _ / C, v[x + 1] = k / C, v[x + 2] = T / C, v[x + 3] = O / S
          }
        return m
      },
      toObject: function() {
        return {
          type: this.type,
          scaleX: this.scaleX,
          scaleY: this.scaleY,
          resizeType: this.resizeType,
          lanczosLobes: this.lanczosLobes
        }
      }
    }), e.Image.filters.Resize.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.ColorMatrix = o(n.BaseFilter, {
      type: "ColorMatrix",
      initialize: function(t) {
        t || (t = {}), this.matrix = t.matrix || [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
      },
      applyTo: function(t) {
        var e, i, n, o, r, s = t.getContext("2d"),
          a = s.getImageData(0, 0, t.width, t.height),
          l = a.data,
          c = l.length,
          h = this.matrix;
        for (e = 0; e < c; e += 4) i = l[e], n = l[e + 1], o = l[e + 2], r = l[e + 3], l[e] = i * h[0] + n * h[1] + o * h[2] + r * h[3] + h[4], l[e + 1] = i * h[5] + n * h[6] + o * h[7] + r * h[8] + h[9], l[e + 2] = i * h[10] + n * h[11] + o * h[12] + r * h[13] + h[14], l[e + 3] = i * h[15] + n * h[16] + o * h[17] + r * h[18] + h[19];
        s.putImageData(a, 0, 0)
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          type: this.type,
          matrix: this.matrix
        })
      }
    }), e.Image.filters.ColorMatrix.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.Contrast = o(n.BaseFilter, {
      type: "Contrast",
      initialize: function(t) {
        t = t || {}, this.contrast = t.contrast || 0
      },
      applyTo: function(t) {
        for (var e = t.getContext("2d"), i = e.getImageData(0, 0, t.width, t.height), n = i.data, o = 259 * (this.contrast + 255) / (255 * (259 - this.contrast)), r = 0, s = n.length; r < s; r += 4) n[r] = o * (n[r] - 128) + 128, n[r + 1] = o * (n[r + 1] - 128) + 128, n[r + 2] = o * (n[r + 2] - 128) + 128;
        e.putImageData(i, 0, 0)
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          contrast: this.contrast
        })
      }
    }), e.Image.filters.Contrast.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      n = e.Image.filters,
      o = e.util.createClass;
    n.Saturate = o(n.BaseFilter, {
      type: "Saturate",
      initialize: function(t) {
        t = t || {}, this.saturate = t.saturate || 0
      },
      applyTo: function(t) {
        for (var e, i = t.getContext("2d"), n = i.getImageData(0, 0, t.width, t.height), o = n.data, r = .01 * -this.saturate, s = 0, a = o.length; s < a; s += 4) e = Math.max(o[s], o[s + 1], o[s + 2]), o[s] += e !== o[s] ? (e - o[s]) * r : 0, o[s + 1] += e !== o[s + 1] ? (e - o[s + 1]) * r : 0, o[s + 2] += e !== o[s + 2] ? (e - o[s + 2]) * r : 0;
        i.putImageData(n, 0, 0)
      },
      toObject: function() {
        return i(this.callSuper("toObject"), {
          saturate: this.saturate
        })
      }
    }), e.Image.filters.Saturate.fromObject = e.Image.filters.BaseFilter.fromObject
  }("undefined" != typeof exports ? exports : this),
  function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {}),
      i = e.util.toFixed,
      n = e.Object.NUM_FRACTION_DIGITS,
      o = 2;
    if (e.Text) return void e.warn("fabric.Text is already defined");
    var r = e.Object.prototype.stateProperties.concat();
    r.push("fontFamily", "fontWeight", "fontSize", "text", "textDecoration", "textAlign", "fontStyle", "lineHeight", "textBackgroundColor", "charSpacing");
    var s = e.Object.prototype.cacheProperties.concat();
    s.push("fontFamily", "fontWeight", "fontSize", "text", "textDecoration", "textAlign", "fontStyle", "lineHeight", "textBackgroundColor", "charSpacing", "styles"), e.Text = e.util.createClass(e.Object, {
      _dimensionAffectingProps: ["fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "text", "charSpacing", "textAlign"],
      _reNewline: /\r?\n/,
      _reSpacesAndTabs: /[ \t\r]+/g,
      type: "text",
      fontSize: 40,
      fontWeight: "normal",
      fontFamily: "Times New Roman",
      textDecoration: "",
      textAlign: "left",
      fontStyle: "",
      lineHeight: 1.16,
      textBackgroundColor: "",
      stateProperties: r,
      cacheProperties: s,
      stroke: null,
      shadow: null,
      _fontSizeFraction: .25,
      _fontSizeMult: 1.13,
      charSpacing: 0,
      initialize: function(t, e) {
        e = e || {}, this.text = t, this.__skipDimension = !0, this.callSuper("initialize", e), this.__skipDimension = !1, this._initDimensions(), this.setCoords(), this.setupState({
          propertySet: "_dimensionAffectingProps"
        })
      },
      _initDimensions: function(t) {
        this.__skipDimension || (t || (t = e.util.createCanvasElement().getContext("2d"), this._setTextStyles(t)), this._textLines = this._splitTextIntoLines(), this._clearCache(), this.width = this._getTextWidth(t) || this.cursorWidth || o, this.height = this._getTextHeight(t))
      },
      toString: function() {
        return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>'
      },
      _getCacheCanvasDimensions: function() {
        var t = this.callSuper("_getCacheCanvasDimensions"),
          e = 2 * this.fontSize;
        return t.width += e * t.zoomX, t.height += e * t.zoomY, t
      },
      _render: function(t) {
        this._setTextStyles(t), this.group && "path-group" === this.group.type && t.translate(this.left, this.top), this._renderTextLinesBackground(t), this._renderText(t), this._renderTextDecoration(t)
      },
      _renderText: function(t) {
        this._renderTextFill(t), this._renderTextStroke(t)
      },
      _setTextStyles: function(t) {
        t.textBaseline = "alphabetic", t.font = this._getFontDeclaration()
      },
      _getTextHeight: function() {
        return this._getHeightOfSingleLine() + (this._textLines.length - 1) * this._getHeightOfLine()
      },
      _getTextWidth: function(t) {
        for (var e = this._getLineWidth(t, 0), i = 1, n = this._textLines.length; i < n; i++) {
          var o = this._getLineWidth(t, i);
          o > e && (e = o)
        }
        return e
      },
      _renderChars: function(t, e, i, n, o) {
        var r, s, a = t.slice(0, -4);
        if (this[a].toLive) {
          var l = -this.width / 2 + this[a].offsetX || 0,
            c = -this.height / 2 + this[a].offsetY || 0;
          e.save(), e.translate(l, c), n -= l, o -= c
        }
        if (0 !== this.charSpacing) {
          var h = this._getWidthOfCharSpacing();
          i = i.split("");
          for (var u = 0, d = i.length; u < d; u++) r = i[u], s = e.measureText(r).width + h, e[t](r, n, o), n += s > 0 ? s : 0
        } else e[t](i, n, o);
        this[a].toLive && e.restore()
      },
      _renderTextLine: function(t, e, i, n, o, r) {
        o -= this.fontSize * this._fontSizeFraction;
        var s = this._getLineWidth(e, r);
        if ("justify" !== this.textAlign || this.width < s) return void this._renderChars(t, e, i, n, o, r);
        for (var a, l = i.split(/\s+/), c = 0, h = this._getWidthOfWords(e, l.join(" "), r, 0), u = this.width - h, d = l.length - 1, p = d > 0 ? u / d : 0, f = 0, g = 0, m = l.length; g < m; g++) {
          for (;
            " " === i[c] && c < i.length;) c++;
          a = l[g], this._renderChars(t, e, a, n + f, o, r, c), f += this._getWidthOfWords(e, a, r, c) + p, c += a.length
        }
      },
      _getWidthOfWords: function(t, e) {
        var i, n, o = t.measureText(e).width;
        return 0 !== this.charSpacing && (i = e.split("").length, n = i * this._getWidthOfCharSpacing(), o += n), o > 0 ? o : 0
      },
      _getLeftOffset: function() {
        return -this.width / 2
      },
      _getTopOffset: function() {
        return -this.height / 2
      },
      isEmptyStyles: function() {
        return !0
      },
      _renderTextCommon: function(t, e) {
        for (var i = 0, n = this._getLeftOffset(), o = this._getTopOffset(), r = 0, s = this._textLines.length; r < s; r++) {
          var a = this._getHeightOfLine(t, r),
            l = a / this.lineHeight,
            c = this._getLineWidth(t, r),
            h = this._getLineLeftOffset(c);
          this._renderTextLine(e, t, this._textLines[r], n + h, o + i + l, r), i += a
        }
      },
      _renderTextFill: function(t) {
        !this.fill && this.isEmptyStyles() || this._renderTextCommon(t, "fillText")
      },
      _renderTextStroke: function(t) {
        (this.stroke && 0 !== this.strokeWidth || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this._setLineDash(t, this.strokeDashArray), t.beginPath(), this._renderTextCommon(t, "strokeText"), t.closePath(), t.restore())
      },
      _getHeightOfLine: function() {
        return this._getHeightOfSingleLine() * this.lineHeight
      },
      _getHeightOfSingleLine: function() {
        return this.fontSize * this._fontSizeMult
      },
      _renderTextLinesBackground: function(t) {
        if (this.textBackgroundColor) {
          var e, i, n, o = 0,
            r = t.fillStyle;
          t.fillStyle = this.textBackgroundColor;
          for (var s = 0, a = this._textLines.length; s < a; s++) e = this._getHeightOfLine(t, s), i = this._getLineWidth(t, s), i > 0 && (n = this._getLineLeftOffset(i), t.fillRect(this._getLeftOffset() + n, this._getTopOffset() + o, i, e / this.lineHeight)), o += e;
          t.fillStyle = r, this._removeShadow(t)
        }
      },
      _getLineLeftOffset: function(t) {
        return "center" === this.textAlign ? (this.width - t) / 2 : "right" === this.textAlign ? this.width - t : 0
      },
      _clearCache: function() {
        this.__lineWidths = [], this.__lineHeights = []
      },
      _shouldClearDimensionCache: function() {
        var t = this._forceClearCache;
        return t || (t = this.hasStateChanged("_dimensionAffectingProps")), t && (this.saveState({
          propertySet: "_dimensionAffectingProps"
        }), this.dirty = !0), t
      },
      _getLineWidth: function(t, e) {
        if (this.__lineWidths[e]) return this.__lineWidths[e] === -1 ? this.width : this.__lineWidths[e];
        var i, n, o = this._textLines[e];
        return i = "" === o ? 0 : this._measureLine(t, e), this.__lineWidths[e] = i, i && "justify" === this.textAlign && (n = o.split(/\s+/), n.length > 1 && (this.__lineWidths[e] = -1)), i
      },
      _getWidthOfCharSpacing: function() {
        return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 1e3 : 0
      },
      _measureLine: function(t, e) {
        var i, n, o = this._textLines[e],
          r = t.measureText(o).width,
          s = 0;
        return 0 !== this.charSpacing && (i = o.split("").length, s = (i - 1) * this._getWidthOfCharSpacing()), n = r + s, n > 0 ? n : 0
      },
      _renderTextDecoration: function(t) {
        function e(e) {
          var o, r, s, a, l, c, h, u = 0;
          for (o = 0, r = n._textLines.length; o < r; o++) {
            for (l = n._getLineWidth(t, o), c = n._getLineLeftOffset(l), h = n._getHeightOfLine(t, o), s = 0, a = e.length; s < a; s++) t.fillRect(n._getLeftOffset() + c, u + (n._fontSizeMult - 1 + e[s]) * n.fontSize - i, l, n.fontSize / 15);
            u += h
          }
        }
        if (this.textDecoration) {
          var i = this.height / 2,
            n = this,
            o = [];
          this.textDecoration.indexOf("underline") > -1 && o.push(.85), this.textDecoration.indexOf("line-through") > -1 && o.push(.43), this.textDecoration.indexOf("overline") > -1 && o.push(-.12), o.length > 0 && e(o)
        }
      },
      _getFontDeclaration: function() {
        return [e.isLikelyNode ? this.fontWeight : this.fontStyle, e.isLikelyNode ? this.fontStyle : this.fontWeight, this.fontSize + "px", e.isLikelyNode ? '"' + this.fontFamily + '"' : this.fontFamily].join(" ")
      },
      render: function(t, e) {
        this.visible && (this._shouldClearDimensionCache() && (this._setTextStyles(t), this._initDimensions(t)), this.callSuper("render", t, e))
      },
      _splitTextIntoLines: function() {
        return this.text.split(this._reNewline)
      },
      toObject: function(t) {
        var e = ["text", "fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "textDecoration", "textAlign", "textBackgroundColor", "charSpacing"].concat(t);
        return this.callSuper("toObject", e)
      },
      toSVG: function(t) {
        this.ctx || (this.ctx = e.util.createCanvasElement().getContext("2d"));
        var i = this._createBaseSVGMarkup(),
          n = this._getSVGLeftTopOffsets(this.ctx),
          o = this._getSVGTextAndBg(n.textTop, n.textLeft);
        return this._wrapSVGTextAndBg(i, o), t ? t(i.join("")) : i.join("")
      },
      _getSVGLeftTopOffsets: function(t) {
        var e = this._getHeightOfLine(t, 0),
          i = -this.width / 2,
          n = 0;
        return {
          textLeft: i + (this.group && "path-group" === this.group.type ? this.left : 0),
          textTop: n + (this.group && "path-group" === this.group.type ? -this.top : 0),
          lineTop: e
        }
      },
      _wrapSVGTextAndBg: function(t, e) {
        var i = !0,
          n = this.getSvgFilter(),
          o = "" === n ? "" : ' style="' + n + '"';
        t.push("\t<g ", this.getSvgId(), 'transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '"', o, ">\n", e.textBgRects.join(""), "\t\t<text ", this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "", this.fontSize ? 'font-size="' + this.fontSize + '" ' : "", this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "", this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "", this.textDecoration ? 'text-decoration="' + this.textDecoration + '" ' : "", 'style="', this.getSvgStyles(i), '" >\n', e.textSpans.join(""), "\t\t</text>\n", "\t</g>\n")
      },
      _getSVGTextAndBg: function(t, e) {
        var i = [],
          n = [],
          o = 0;
        this._setSVGBg(n);
        for (var r = 0, s = this._textLines.length; r < s; r++) this.textBackgroundColor && this._setSVGTextLineBg(n, r, e, t, o), this._setSVGTextLineText(r, i, o, e, t, n), o += this._getHeightOfLine(this.ctx, r);
        return {
          textSpans: i,
          textBgRects: n
        }
      },
      _setSVGTextLineText: function(t, o, r, s, a) {
        var l = this.fontSize * (this._fontSizeMult - this._fontSizeFraction) - a + r - this.height / 2;
        return "justify" === this.textAlign ? void this._setSVGTextLineJustifed(t, o, l, s) : void o.push('\t\t\t<tspan x="', i(s + this._getLineLeftOffset(this._getLineWidth(this.ctx, t)), n), '" ', 'y="', i(l, n), '" ', this._getFillAttributes(this.fill), ">", e.util.string.escapeXml(this._textLines[t]), "</tspan>\n")
      },
      _setSVGTextLineJustifed: function(t, o, r, s) {
        var a = e.util.createCanvasElement().getContext("2d");
        this._setTextStyles(a);
        var l, c, h = this._textLines[t],
          u = h.split(/\s+/),
          d = this._getWidthOfWords(a, u.join("")),
          p = this.width - d,
          f = u.length - 1,
          g = f > 0 ? p / f : 0,
          m = this._getFillAttributes(this.fill);
        for (s += this._getLineLeftOffset(this._getLineWidth(a, t)), t = 0, c = u.length; t < c; t++) l = u[t], o.push('\t\t\t<tspan x="', i(s, n), '" ', 'y="', i(r, n), '" ', m, ">", e.util.string.escapeXml(l), "</tspan>\n"), s += this._getWidthOfWords(a, l) + g
      },
      _setSVGTextLineBg: function(t, e, o, r, s) {
        t.push("\t\t<rect ", this._getFillAttributes(this.textBackgroundColor), ' x="', i(o + this._getLineLeftOffset(this._getLineWidth(this.ctx, e)), n), '" y="', i(s - this.height / 2, n), '" width="', i(this._getLineWidth(this.ctx, e), n), '" height="', i(this._getHeightOfLine(this.ctx, e) / this.lineHeight, n), '"></rect>\n')
      },
      _setSVGBg: function(t) {
        this.backgroundColor && t.push("\t\t<rect ", this._getFillAttributes(this.backgroundColor), ' x="', i(-this.width / 2, n), '" y="', i(-this.height / 2, n), '" width="', i(this.width, n), '" height="', i(this.height, n), '"></rect>\n')
      },
      _getFillAttributes: function(t) {
        var i = t && "string" == typeof t ? new e.Color(t) : "";
        return i && i.getSource() && 1 !== i.getAlpha() ? 'opacity="' + i.getAlpha() + '" fill="' + i.setAlpha(1).toRgb() + '"' : 'fill="' + t + '"'
      },
      _set: function(t, e) {
        this.callSuper("_set", t, e), this._dimensionAffectingProps.indexOf(t) > -1 && (this._initDimensions(), this.setCoords())
      },
      complexity: function() {
        return 1
      }
    }), e.Text.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size text-decoration text-anchor".split(" ")), e.Text.DEFAULT_SVG_FONT_SIZE = 16, e.Text.fromElement = function(t, i) {
      if (!t) return null;
      var n = e.parseAttributes(t, e.Text.ATTRIBUTE_NAMES);
      i = e.util.object.extend(i ? e.util.object.clone(i) : {}, n), i.top = i.top || 0, i.left = i.left || 0, "dx" in n && (i.left += n.dx), "dy" in n && (i.top += n.dy), "fontSize" in i || (i.fontSize = e.Text.DEFAULT_SVG_FONT_SIZE), i.originX || (i.originX = "left");
      var o = "";
      "textContent" in t ? o = t.textContent : "firstChild" in t && null !== t.firstChild && "data" in t.firstChild && null !== t.firstChild.data && (o = t.firstChild.data), o = o.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
      var r = new e.Text(o, i),
        s = r.getHeight() / r.height,
        a = (r.height + r.strokeWidth) * r.lineHeight - r.height,
        l = a * s,
        c = r.getHeight() + l,
        h = 0;
      return "left" === r.originX && (h = r.getWidth() / 2), "right" === r.originX && (h = -r.getWidth() / 2), r.set({
        left: r.getLeft() + h,
        top: r.getTop() - c / 2 + r.fontSize * (.18 + r._fontSizeFraction) / r.lineHeight
      }), r
    }, e.Text.fromObject = function(t, i, n) {
      return e.Object._fromObject("Text", t, i, n, "text")
    }, e.util.createAccessors(e.Text)
  }("undefined" != typeof exports ? exports : this),
function() {
  var t = fabric.util.object.clone;
  fabric.IText = fabric.util.createClass(fabric.Text, fabric.Observable, {
    type: "i-text",
    selectionStart: 0,
    selectionEnd: 0,
    selectionColor: "rgba(17,119,255,0.3)",
    isEditing: !1,
    editable: !0,
    editingBorderColor: "rgba(102,153,255,0.25)",
    cursorWidth: 2,
    cursorColor: "#333",
    cursorDelay: 1e3,
    cursorDuration: 600,
    styles: null,
    caching: !0,
    _reSpace: /\s|\n/,
    _currentCursorOpacity: 0,
    _selectionDirection: null,
    _abortCursorAnimation: !1,
    __widthOfSpace: [],
    initialize: function(t, e) {
      this.styles = e ? e.styles || {} : {}, this.callSuper("initialize", t, e), this.initBehavior()
    },
    _clearCache: function() {
      this.callSuper("_clearCache"), this.__widthOfSpace = []
    },
    isEmptyStyles: function() {
      if (!this.styles) return !0;
      var t = this.styles;
      for (var e in t)
        for (var i in t[e])
          for (var n in t[e][i]) return !1;
      return !0
    },
    setSelectionStart: function(t) {
      t = Math.max(t, 0), this._updateAndFire("selectionStart", t)
    },
    setSelectionEnd: function(t) {
      t = Math.min(t, this.text.length), this._updateAndFire("selectionEnd", t)
    },
    _updateAndFire: function(t, e) {
      this[t] !== e && (this._fireSelectionChanged(), this[t] = e), this._updateTextarea()
    },
    _fireSelectionChanged: function() {
      this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", {
        target: this
      })
    },
    getSelectionStyles: function(t, e) {
      if (2 === arguments.length) {
        for (var i = [], n = t; n < e; n++) i.push(this.getSelectionStyles(n));
        return i
      }
      var o = this.get2DCursorLocation(t),
        r = this._getStyleDeclaration(o.lineIndex, o.charIndex);
      return r || {}
    },
    setSelectionStyles: function(t) {
      if (this.selectionStart === this.selectionEnd) this._extendStyles(this.selectionStart, t);
      else
        for (var e = this.selectionStart; e < this.selectionEnd; e++) this._extendStyles(e, t);
      return this._forceClearCache = !0, this
    },
    _extendStyles: function(t, e) {
      var i = this.get2DCursorLocation(t);
      this._getLineStyle(i.lineIndex) || this._setLineStyle(i.lineIndex, {}), this._getStyleDeclaration(i.lineIndex, i.charIndex) || this._setStyleDeclaration(i.lineIndex, i.charIndex, {}), fabric.util.object.extend(this._getStyleDeclaration(i.lineIndex, i.charIndex), e)
    },
    _initDimensions: function(t) {
      t || this.clearContextTop(), this.callSuper("_initDimensions", t)
    },
    render: function(t, e) {
      this.clearContextTop(), this.callSuper("render", t, e), this.cursorOffsetCache = {}, this.renderCursorOrSelection()
    },
    _render: function(t) {
      this.callSuper("_render", t), this.ctx = t
    },
    clearContextTop: function() {
      if (this.active && this.isEditing && this.canvas && this.canvas.contextTop) {
        var t = this.canvas.contextTop;
        t.save(), t.transform.apply(t, this.canvas.viewportTransform), this.transform(t), this.transformMatrix && t.transform.apply(t, this.transformMatrix), this._clearTextArea(t), t.restore()
      }
    },
    renderCursorOrSelection: function() {
      if (this.active && this.isEditing) {
        var t, e, i = this.text.split("");
        this.canvas && this.canvas.contextTop ? (e = this.canvas.contextTop, e.save(), e.transform.apply(e, this.canvas.viewportTransform), this.transform(e), this.transformMatrix && e.transform.apply(e, this.transformMatrix), this._clearTextArea(e)) : (e = this.ctx, e.save()), this.selectionStart === this.selectionEnd ? (t = this._getCursorBoundaries(i, "cursor"), this.renderCursor(t, e)) : (t = this._getCursorBoundaries(i, "selection"), this.renderSelection(i, t, e)), e.restore()
      }
    },
    _clearTextArea: function(t) {
      var e = this.width + 4,
        i = this.height + 4;
      t.clearRect(-e / 2, -i / 2, e, i)
    },
    get2DCursorLocation: function(t) {
      "undefined" == typeof t && (t = this.selectionStart);
      for (var e = this._textLines.length, i = 0; i < e; i++) {
        if (t <= this._textLines[i].length) return {
          lineIndex: i,
          charIndex: t
        };
        t -= this._textLines[i].length + 1
      }
      return {
        lineIndex: i - 1,
        charIndex: this._textLines[i - 1].length < t ? this._textLines[i - 1].length : t
      }
    },
    getCurrentCharStyle: function(t, e) {
      var i = this._getStyleDeclaration(t, 0 === e ? 0 : e - 1);
      return {
        fontSize: i && i.fontSize || this.fontSize,
        fill: i && i.fill || this.fill,
        textBackgroundColor: i && i.textBackgroundColor || this.textBackgroundColor,
        textDecoration: i && i.textDecoration || this.textDecoration,
        fontFamily: i && i.fontFamily || this.fontFamily,
        fontWeight: i && i.fontWeight || this.fontWeight,
        fontStyle: i && i.fontStyle || this.fontStyle,
        stroke: i && i.stroke || this.stroke,
        strokeWidth: i && i.strokeWidth || this.strokeWidth
      }
    },
    getCurrentCharFontSize: function(t, e) {
      var i = this._getStyleDeclaration(t, 0 === e ? 0 : e - 1);
      return i && i.fontSize ? i.fontSize : this.fontSize
    },
    getCurrentCharColor: function(t, e) {
      var i = this._getStyleDeclaration(t, 0 === e ? 0 : e - 1);
      return i && i.fill ? i.fill : this.cursorColor
    },
    _getCursorBoundaries: function(t, e) {
      var i = Math.round(this._getLeftOffset()),
        n = this._getTopOffset(),
        o = this._getCursorBoundariesOffsets(t, e);
      return {
        left: i,
        top: n,
        leftOffset: o.left + o.lineLeft,
        topOffset: o.top
      }
    },
    _getCursorBoundariesOffsets: function(t, e) {
      if (this.cursorOffsetCache && "top" in this.cursorOffsetCache) return this.cursorOffsetCache;
      for (var i, n = 0, o = 0, r = 0, s = 0, a = 0, l = 0; l < this.selectionStart; l++) "\n" === t[l] ? (a = 0, s += this._getHeightOfLine(this.ctx, o), o++, r = 0) : (a += this._getWidthOfChar(this.ctx, t[l], o, r), r++), n = this._getLineLeftOffset(this._getLineWidth(this.ctx, o));
      return "cursor" === e && (s += (1 - this._fontSizeFraction) * this._getHeightOfLine(this.ctx, o) / this.lineHeight - this.getCurrentCharFontSize(o, r) * (1 - this._fontSizeFraction)), 0 !== this.charSpacing && r === this._textLines[o].length && (a -= this._getWidthOfCharSpacing()), i = {
        top: s,
        left: a > 0 ? a : 0,
        lineLeft: n
      }, this.cursorOffsetCache = i, this.cursorOffsetCache
    },
    renderCursor: function(t, e) {
      var i = this.get2DCursorLocation(),
        n = i.lineIndex,
        o = i.charIndex,
        r = this.getCurrentCharFontSize(n, o),
        s = t.leftOffset,
        a = this.scaleX * this.canvas.getZoom(),
        l = this.cursorWidth / a;
      e.fillStyle = this.getCurrentCharColor(n, o), e.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, e.fillRect(t.left + s - l / 2, t.top + t.topOffset, l, r)
    },
    renderSelection: function(t, e, i) {
      i.fillStyle = this.selectionColor;
      for (var n = this.get2DCursorLocation(this.selectionStart), o = this.get2DCursorLocation(this.selectionEnd), r = n.lineIndex, s = o.lineIndex, a = r; a <= s; a++) {
        var l = this._getLineLeftOffset(this._getLineWidth(i, a)) || 0,
          c = this._getHeightOfLine(this.ctx, a),
          h = 0,
          u = 0,
          d = this._textLines[a];
        if (a === r) {
          for (var p = 0, f = d.length; p < f; p++) p >= n.charIndex && (a !== s || p < o.charIndex) && (u += this._getWidthOfChar(i, d[p], a, p)), p < n.charIndex && (l += this._getWidthOfChar(i, d[p], a, p));
          p === d.length && (u -= this._getWidthOfCharSpacing())
        } else if (a > r && a < s) u += this._getLineWidth(i, a) || 5;
        else if (a === s) {
          for (var g = 0, m = o.charIndex; g < m; g++) u += this._getWidthOfChar(i, d[g], a, g);
          o.charIndex === d.length && (u -= this._getWidthOfCharSpacing())
        }
        h = c, (this.lineHeight < 1 || a === s && this.lineHeight > 1) && (c /= this.lineHeight), i.fillRect(e.left + l, e.top + e.topOffset, u > 0 ? u : 0, c), e.topOffset += h
      }
    },
    _renderChars: function(t, e, i, n, o, r, s) {
      if (this.isEmptyStyles()) return this._renderCharsFast(t, e, i, n, o);
      s = s || 0;
      var a, l, c = this._getHeightOfLine(e, r),
        h = "";
      e.save(), o -= c / this.lineHeight * this._fontSizeFraction;
      for (var u = s, d = i.length + s; u <= d; u++) a = a || this.getCurrentCharStyle(r, u), l = this.getCurrentCharStyle(r, u + 1), (this._hasStyleChanged(a, l) || u === d) && (this._renderChar(t, e, r, u - 1, h, n, o, c), h = "", a = l), h += i[u - s];
      e.restore()
    },
    _renderCharsFast: function(t, e, i, n, o) {
      "fillText" === t && this.fill && this.callSuper("_renderChars", t, e, i, n, o), "strokeText" === t && (this.stroke && this.strokeWidth > 0 || this.skipFillStrokeCheck) && this.callSuper("_renderChars", t, e, i, n, o)
    },
    _renderChar: function(t, e, i, n, o, r, s, a) {
      var l, c, h, u, d, p, f, g, m, v = this._getStyleDeclaration(i, n);
      if (v ? (c = this._getHeightOfChar(e, o, i, n), u = v.stroke, h = v.fill, p = v.textDecoration) : c = this.fontSize, u = (u || this.stroke) && "strokeText" === t, h = (h || this.fill) && "fillText" === t, v && e.save(), l = this._applyCharStylesGetWidth(e, o, i, n, v || null), p = p || this.textDecoration, v && v.textBackgroundColor && this._removeShadow(e), 0 !== this.charSpacing) {
        g = this._getWidthOfCharSpacing(), f = o.split(""), l = 0;
        for (var y, b = 0, x = f.length; b < x; b++) y = f[b], h && e.fillText(y, r + l, s), u && e.strokeText(y, r + l, s), m = e.measureText(y).width + g, l += m > 0 ? m : 0
      } else h && e.fillText(o, r, s), u && e.strokeText(o, r, s);
      (p || "" !== p) && (d = this._fontSizeFraction * a / this.lineHeight, this._renderCharDecoration(e, p, r, s, d, l, c)), v && e.restore(), e.translate(l, 0)
    },
    _hasStyleChanged: function(t, e) {
      return t.fill !== e.fill || t.fontSize !== e.fontSize || t.textBackgroundColor !== e.textBackgroundColor || t.textDecoration !== e.textDecoration || t.fontFamily !== e.fontFamily || t.fontWeight !== e.fontWeight || t.fontStyle !== e.fontStyle || t.stroke !== e.stroke || t.strokeWidth !== e.strokeWidth
    },
    _renderCharDecoration: function(t, e, i, n, o, r, s) {
      if (e) {
        var a, l, c = s / 15,
          h = {
            underline: n + s / 10,
            "line-through": n - s * (this._fontSizeFraction + this._fontSizeMult - 1) + c,
            overline: n - (this._fontSizeMult - this._fontSizeFraction) * s
          },
          u = ["underline", "line-through", "overline"];
        for (a = 0; a < u.length; a++) l = u[a], e.indexOf(l) > -1 && t.fillRect(i, h[l], r, c)
      }
    },
    _renderTextLine: function(t, e, i, n, o, r) {
      this.isEmptyStyles() || (o += this.fontSize * (this._fontSizeFraction + .03)), this.callSuper("_renderTextLine", t, e, i, n, o, r)
    },
    _renderTextDecoration: function(t) {
      if (this.isEmptyStyles()) return this.callSuper("_renderTextDecoration", t)
    },
    _renderTextLinesBackground: function(t) {
      this.callSuper("_renderTextLinesBackground", t);
      var e, i, n, o, r, s, a, l, c, h, u = 0,
        d = this._getLeftOffset(),
        p = this._getTopOffset(),
        f = "";
      t.save();
      for (var g = 0, m = this._textLines.length; g < m; g++)
        if (e = this._getHeightOfLine(t, g), o = this._textLines[g], "" !== o && this.styles && this._getLineStyle(g)) {
          i = this._getLineWidth(t, g), n = this._getLineLeftOffset(i), a = l = c = h = 0;
          for (var v = 0, y = o.length; v < y; v++) s = this._getStyleDeclaration(g, v) || {}, f !== s.textBackgroundColor && (h && c && (t.fillStyle = f, t.fillRect(a, l, c, h)), a = l = c = h = 0, f = s.textBackgroundColor || ""), s.textBackgroundColor ? (r = o[v], f === s.textBackgroundColor && (f = s.textBackgroundColor, a || (a = d + n + this._getWidthOfCharsAt(t, g, v)), l = p + u, c += this._getWidthOfChar(t, r, g, v), h = e / this.lineHeight)) : f = "";
          h && c && (t.fillStyle = f, t.fillRect(a, l, c, h), a = l = c = h = 0), u += e
        } else u += e;
      t.restore()
    },
    _getCacheProp: function(t, e) {
      return t + e.fontSize + e.fontWeight + e.fontStyle
    },
    _getFontCache: function(t) {
      return fabric.charWidthsCache[t] || (fabric.charWidthsCache[t] = {}), fabric.charWidthsCache[t]
    },
    _applyCharStylesGetWidth: function(e, i, n, o, r) {
      var s, a, l, c = r || this._getStyleDeclaration(n, o),
        h = t(c);
      if (this._applyFontStyles(h), l = this._getFontCache(h.fontFamily), a = this._getCacheProp(i, h), !c && l[a] && this.caching) return l[a];
      "string" == typeof h.shadow && (h.shadow = new fabric.Shadow(h.shadow));
      var u = h.fill || this.fill;
      return e.fillStyle = u.toLive ? u.toLive(e, this) : u, h.stroke && (e.strokeStyle = h.stroke && h.stroke.toLive ? h.stroke.toLive(e, this) : h.stroke), e.lineWidth = h.strokeWidth || this.strokeWidth, e.font = this._getFontDeclaration.call(h), h.shadow && (h.scaleX = this.scaleX, h.scaleY = this.scaleY, h.canvas = this.canvas, h.getObjectScaling = this.getObjectScaling, this._setShadow.call(h, e)), this.caching && l[a] ? l[a] : (s = e.measureText(i).width, this.caching && (l[a] = s), s)
    },
    _applyFontStyles: function(t) {
      t.fontFamily || (t.fontFamily = this.fontFamily), t.fontSize || (t.fontSize = this.fontSize), t.fontWeight || (t.fontWeight = this.fontWeight), t.fontStyle || (t.fontStyle = this.fontStyle)
    },
    _getStyleDeclaration: function(e, i, n) {
      return n ? this.styles[e] && this.styles[e][i] ? t(this.styles[e][i]) : {} : this.styles[e] && this.styles[e][i] ? this.styles[e][i] : null
    },
    _setStyleDeclaration: function(t, e, i) {
      this.styles[t][e] = i
    },
    _deleteStyleDeclaration: function(t, e) {
      delete this.styles[t][e]
    },
    _getLineStyle: function(t) {
      return this.styles[t]
    },
    _setLineStyle: function(t, e) {
      this.styles[t] = e
    },
    _deleteLineStyle: function(t) {
      delete this.styles[t]
    },
    _getWidthOfChar: function(t, e, i, n) {
      if (!this._isMeasuring && "justify" === this.textAlign && this._reSpacesAndTabs.test(e)) return this._getWidthOfSpace(t, i);
      t.save();
      var o = this._applyCharStylesGetWidth(t, e, i, n);
      return 0 !== this.charSpacing && (o += this._getWidthOfCharSpacing()), t.restore(), o > 0 ? o : 0
    },
    _getHeightOfChar: function(t, e, i) {
      var n = this._getStyleDeclaration(e, i);
      return n && n.fontSize ? n.fontSize : this.fontSize
    },
    _getWidthOfCharsAt: function(t, e, i) {
      var n, o, r = 0;
      for (n = 0; n < i; n++) o = this._textLines[e][n], r += this._getWidthOfChar(t, o, e, n);
      return r
    },
    _measureLine: function(t, e) {
      this._isMeasuring = !0;
      var i = this._getWidthOfCharsAt(t, e, this._textLines[e].length);
      return 0 !== this.charSpacing && (i -= this._getWidthOfCharSpacing()), this._isMeasuring = !1, i > 0 ? i : 0
    },
    _getWidthOfSpace: function(t, e) {
      if (this.__widthOfSpace[e]) return this.__widthOfSpace[e];
      var i = this._textLines[e],
        n = this._getWidthOfWords(t, i, e, 0),
        o = this.width - n,
        r = i.length - i.replace(this._reSpacesAndTabs, "").length,
        s = Math.max(o / r, t.measureText(" ").width);
      return this.__widthOfSpace[e] = s, s
    },
    _getWidthOfWords: function(t, e, i, n) {
      for (var o = 0, r = 0; r < e.length; r++) {
        var s = e[r];
        s.match(/\s/) || (o += this._getWidthOfChar(t, s, i, r + n))
      }
      return o
    },
    _getHeightOfLine: function(t, e) {
      if (this.__lineHeights[e]) return this.__lineHeights[e];
      for (var i = this._textLines[e], n = this._getHeightOfChar(t, e, 0), o = 1, r = i.length; o < r; o++) {
        var s = this._getHeightOfChar(t, e, o);
        s > n && (n = s)
      }
      return this.__lineHeights[e] = n * this.lineHeight * this._fontSizeMult, this.__lineHeights[e]
    },
    _getTextHeight: function(t) {
      for (var e, i = 0, n = 0, o = this._textLines.length; n < o; n++) e = this._getHeightOfLine(t, n), i += n === o - 1 ? e / this.lineHeight : e;
      return i
    },
    toObject: function(e) {
      return fabric.util.object.extend(this.callSuper("toObject", e), {
        styles: t(this.styles, !0)
      })
    }
  }), fabric.IText.fromObject = function(t, e, i) {
    return fabric.Object._fromObject("IText", t, e, i, "text")
  }
}(),
function() {
  var t = fabric.util.object.clone;
  fabric.util.object.extend(fabric.IText.prototype, {
    initBehavior: function() {
      this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
    },
    onDeselect: function() {
      this.isEditing && this.exitEditing(), this.selected = !1
    },
    initAddedHandler: function() {
      var t = this;
      this.on("added", function() {
        var e = t.canvas;
        e && (e._hasITextHandlers || (e._hasITextHandlers = !0, t._initCanvasHandlers(e)), e._iTextInstances = e._iTextInstances || [], e._iTextInstances.push(t))
      })
    },
    initRemovedHandler: function() {
      var t = this;
      this.on("removed", function() {
        var e = t.canvas;
        e && (e._iTextInstances = e._iTextInstances || [], fabric.util.removeFromArray(e._iTextInstances, t), 0 === e._iTextInstances.length && (e._hasITextHandlers = !1, t._removeCanvasHandlers(e)))
      })
    },
    _initCanvasHandlers: function(t) {
      t._mouseUpITextHandler = function() {
        t._iTextInstances && t._iTextInstances.forEach(function(t) {
          t.__isMousedown = !1
        })
      }.bind(this), t.on("mouse:up", t._mouseUpITextHandler)
    },
    _removeCanvasHandlers: function(t) {
      t.off("mouse:up", t._mouseUpITextHandler)
    },
    _tick: function() {
      this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete")
    },
    _animateCursor: function(t, e, i, n) {
      var o;
      return o = {
        isAborted: !1,
        abort: function() {
          this.isAborted = !0
        }
      }, t.animate("_currentCursorOpacity", e, {
        duration: i,
        onComplete: function() {
          o.isAborted || t[n]()
        },
        onChange: function() {
          t.canvas && t.selectionStart === t.selectionEnd && t.renderCursorOrSelection()
        },
        abort: function() {
          return o.isAborted
        }
      }), o
    },
    _onTickComplete: function() {
      var t = this;
      this._cursorTimeout1 && clearTimeout(this._cursorTimeout1), this._cursorTimeout1 = setTimeout(function() {
        t._currentTickCompleteState = t._animateCursor(t, 0, this.cursorDuration / 2, "_tick")
      }, 100)
    },
    initDelayedCursor: function(t) {
      var e = this,
        i = t ? 0 : this.cursorDelay;
      this.abortCursorAnimation(), this._currentCursorOpacity = 1, this._cursorTimeout2 = setTimeout(function() {
        e._tick()
      }, i)
    },
    abortCursorAnimation: function() {
      var t = this._currentTickState || this._currentTickCompleteState;
      this._currentTickState && this._currentTickState.abort(), this._currentTickCompleteState && this._currentTickCompleteState.abort(), clearTimeout(this._cursorTimeout1), clearTimeout(this._cursorTimeout2), this._currentCursorOpacity = 0, t && this.canvas && this.canvas.clearContext(this.canvas.contextTop || this.ctx)
    },
    selectAll: function() {
      this.selectionStart = 0, this.selectionEnd = this.text.length, this._fireSelectionChanged(), this._updateTextarea()
    },
    getSelectedText: function() {
      return this.text.slice(this.selectionStart, this.selectionEnd)
    },
    findWordBoundaryLeft: function(t) {
      var e = 0,
        i = t - 1;
      if (this._reSpace.test(this.text.charAt(i)))
        for (; this._reSpace.test(this.text.charAt(i));) e++, i--;
      for (;
        /\S/.test(this.text.charAt(i)) && i > -1;) e++, i--;
      return t - e
    },
    findWordBoundaryRight: function(t) {
      var e = 0,
        i = t;
      if (this._reSpace.test(this.text.charAt(i)))
        for (; this._reSpace.test(this.text.charAt(i));) e++, i++;
      for (;
        /\S/.test(this.text.charAt(i)) && i < this.text.length;) e++, i++;
      return t + e
    },
    findLineBoundaryLeft: function(t) {
      for (var e = 0, i = t - 1; !/\n/.test(this.text.charAt(i)) && i > -1;) e++, i--;
      return t - e
    },
    findLineBoundaryRight: function(t) {
      for (var e = 0, i = t; !/\n/.test(this.text.charAt(i)) && i < this.text.length;) e++, i++;
      return t + e
    },
    getNumNewLinesInSelectedText: function() {
      for (var t = this.getSelectedText(), e = 0, i = 0, n = t.length; i < n; i++) "\n" === t[i] && e++;
      return e
    },
    searchWordBoundary: function(t, e) {
      for (var i = this._reSpace.test(this.text.charAt(t)) ? t - 1 : t, n = this.text.charAt(i), o = /[ \n\.,;!\?\-]/; !o.test(n) && i > 0 && i < this.text.length;) i += e, n = this.text.charAt(i);
      return o.test(n) && "\n" !== n && (i += 1 === e ? 0 : 1), i
    },
    selectWord: function(t) {
      t = t || this.selectionStart;
      var e = this.searchWordBoundary(t, -1),
        i = this.searchWordBoundary(t, 1);
      this.selectionStart = e, this.selectionEnd = i, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()
    },
    selectLine: function(t) {
      t = t || this.selectionStart;
      var e = this.findLineBoundaryLeft(t),
        i = this.findLineBoundaryRight(t);
      this.selectionStart = e, this.selectionEnd = i, this._fireSelectionChanged(), this._updateTextarea()
    },
    enterEditing: function(t) {
      if (!this.isEditing && this.editable) return this.canvas && this.exitEditingOnOthers(this.canvas), this.isEditing = !0, this.initHiddenTextarea(t), this.hiddenTextarea.focus(), this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered"), this._fireSelectionChanged(), this.canvas ? (this.canvas.fire("text:editing:entered", {
        target: this
      }), this.initMouseMoveHandler(), this.canvas.renderAll(), this) : this
    },
    exitEditingOnOthers: function(t) {
      t._iTextInstances && t._iTextInstances.forEach(function(t) {
        t.selected = !1, t.isEditing && t.exitEditing()
      })
    },
    initMouseMoveHandler: function() {
      this.canvas.on("mouse:move", this.mouseMoveHandler)
    },
    mouseMoveHandler: function(t) {
      if (this.__isMousedown && this.isEditing) {
        var e = this.getSelectionStartFromPointer(t.e),
          i = this.selectionStart,
          n = this.selectionEnd;
        (e === this.__selectionStartOnMouseDown && i !== n || i !== e && n !== e) && (e > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = e) : (this.selectionStart = e, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === i && this.selectionEnd === n || (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()))
      }
    },
    _setEditingProps: function() {
      this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0
    },
    _updateTextarea: function() {
      if (this.hiddenTextarea && !this.inCompositionMode && (this.cursorOffsetCache = {}, this.hiddenTextarea.value = this.text, this.hiddenTextarea.selectionStart = this.selectionStart, this.hiddenTextarea.selectionEnd = this.selectionEnd, this.selectionStart === this.selectionEnd)) {
        var t = this._calcTextareaPosition();
        this.hiddenTextarea.style.left = t.left, this.hiddenTextarea.style.top = t.top, this.hiddenTextarea.style.fontSize = t.fontSize
      }
    },
    _calcTextareaPosition: function() {
      if (!this.canvas) return {
        x: 1,
        y: 1
      };
      var t = this.text.split(""),
        e = this._getCursorBoundaries(t, "cursor"),
        i = this.get2DCursorLocation(),
        n = i.lineIndex,
        o = i.charIndex,
        r = this.getCurrentCharFontSize(n, o),
        s = e.leftOffset,
        a = this.calcTransformMatrix(),
        l = {
          x: e.left + s,
          y: e.top + e.topOffset + r
        },
        c = this.canvas.upperCanvasEl,
        h = c.width - r,
        u = c.height - r;
      return l = fabric.util.transformPoint(l, a), l = fabric.util.transformPoint(l, this.canvas.viewportTransform), l.x < 0 && (l.x = 0), l.x > h && (l.x = h), l.y < 0 && (l.y = 0), l.y > u && (l.y = u), l.x += this.canvas._offset.left, l.y += this.canvas._offset.top, {
        left: l.x + "px",
        top: l.y + "px",
        fontSize: r
      }
    },
    _saveEditingProps: function() {
      this._savedProps = {
        hasControls: this.hasControls,
        borderColor: this.borderColor,
        lockMovementX: this.lockMovementX,
        lockMovementY: this.lockMovementY,
        hoverCursor: this.hoverCursor,
        defaultCursor: this.canvas && this.canvas.defaultCursor,
        moveCursor: this.canvas && this.canvas.moveCursor
      }
    },
    _restoreEditingProps: function() {
      this._savedProps && (this.hoverCursor = this._savedProps.overCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor))
    },
    exitEditing: function() {
      var t = this._textBeforeEdit !== this.text;
      return this.selected = !1, this.isEditing = !1, this.selectable = !0, this.selectionEnd = this.selectionStart, this.hiddenTextarea && (this.hiddenTextarea.blur && this.hiddenTextarea.blur(), this.canvas && this.hiddenTextarea.parentNode.removeChild(this.hiddenTextarea), this.hiddenTextarea = null), this.abortCursorAnimation(), this._restoreEditingProps(), this._currentCursorOpacity = 0, this.fire("editing:exited"), t && this.fire("modified"), this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", {
        target: this
      }), t && this.canvas.fire("object:modified", {
        target: this
      })), this
    },
    _removeExtraneousStyles: function() {
      for (var t in this.styles) this._textLines[t] || delete this.styles[t]
    },
    _removeCharsFromTo: function(t, e) {
      for (; e !== t;) this._removeSingleCharAndStyle(t + 1), e--;
      this.selectionStart = t, this.selectionEnd = t
    },
    _removeSingleCharAndStyle: function(t) {
      var e = "\n" === this.text[t - 1],
        i = e ? t : t - 1;
      this.removeStyleObject(e, i), this.text = this.text.slice(0, t - 1) + this.text.slice(t), this._textLines = this._splitTextIntoLines()
    },
    insertChars: function(t, e) {
      var i;
      if (this.selectionEnd - this.selectionStart > 1 && this._removeCharsFromTo(this.selectionStart, this.selectionEnd), !e && this.isEmptyStyles()) return void this.insertChar(t, !1);
      for (var n = 0, o = t.length; n < o; n++) e && (i = fabric.util.object.clone(fabric.copiedTextStyle[n], !0)), this.insertChar(t[n], n < o - 1, i)
    },
    insertChar: function(t, e, i) {
      var n = "\n" === this.text[this.selectionStart];
      this.text = this.text.slice(0, this.selectionStart) + t + this.text.slice(this.selectionEnd), this._textLines = this._splitTextIntoLines(), this.insertStyleObjects(t, n, i), this.selectionStart += t.length, this.selectionEnd = this.selectionStart, e || (this._updateTextarea(), this.setCoords(), this._fireSelectionChanged(), this.fire("changed"), this.restartCursorIfNeeded(), this.canvas && (this.canvas.fire("text:changed", {
        target: this
      }), this.canvas.renderAll()))
    },
    restartCursorIfNeeded: function() {
      this._currentTickState && !this._currentTickState.isAborted && this._currentTickCompleteState && !this._currentTickCompleteState.isAborted || this.initDelayedCursor()
    },
    insertNewlineStyleObject: function(e, i, n) {
      this.shiftLineStyles(e, 1);
      var o = {},
        r = {};
      if (this.styles[e] && this.styles[e][i - 1] && (o = this.styles[e][i - 1]), n && o) r[0] = t(o), this.styles[e + 1] = r;
      else {
        var s = !1;
        for (var a in this.styles[e]) {
          var l = parseInt(a, 10);
          l >= i && (s = !0, r[l - i] = this.styles[e][a], delete this.styles[e][a])
        }
        s && (this.styles[e + 1] = r)
      }
      this._forceClearCache = !0
    },
    insertCharStyleObject: function(e, i, n) {
      var o = this.styles[e],
        r = t(o);
      0 !== i || n || (i = 1);
      for (var s in r) {
        var a = parseInt(s, 10);
        a >= i && (o[a + 1] = r[a], r[a - 1] || delete o[a])
      }
      var l = n || o[i - 1];
      l && (this.styles[e][i] = l), this._forceClearCache = !0
    },
    insertStyleObjects: function(t, e, i) {
      var n = this.get2DCursorLocation(),
        o = n.lineIndex,
        r = n.charIndex;
      this._getLineStyle(o) || this._setLineStyle(o, {}), "\n" === t ? this.insertNewlineStyleObject(o, r, e) : this.insertCharStyleObject(o, r, i)
    },
    shiftLineStyles: function(e, i) {
      var n = t(this.styles);
      for (var o in this.styles) {
        var r = parseInt(o, 10);
        r > e && (this.styles[r + i] = n[r], n[r - i] || delete this.styles[r])
      }
    },
    removeStyleObject: function(t, e) {
      var i = this.get2DCursorLocation(e),
        n = i.lineIndex,
        o = i.charIndex;
      this._removeStyleObject(t, i, n, o)
    },
    _getTextOnPreviousLine: function(t) {
      return this._textLines[t - 1]
    },
    _removeStyleObject: function(e, i, n, o) {
      if (e) {
        var r = this._getTextOnPreviousLine(i.lineIndex),
          s = r ? r.length : 0;
        this.styles[n - 1] || (this.styles[n - 1] = {});
        for (o in this.styles[n]) this.styles[n - 1][parseInt(o, 10) + s] = this.styles[n][o];
        this.shiftLineStyles(i.lineIndex, -1)
      } else {
        var a = this.styles[n];
        a && delete a[o];
        var l = t(a);
        for (var c in l) {
          var h = parseInt(c, 10);
          h >= o && 0 !== h && (a[h - 1] = l[h], delete a[h])
        }
      }
    },
    insertNewline: function() {
      this.insertChars("\n")
    },
    setSelectionStartEndWithShift: function(t, e, i) {
      i <= t ? (e === t ? this._selectionDirection = "left" : "right" === this._selectionDirection && (this._selectionDirection = "left", this.selectionEnd = t), this.selectionStart = i) : i > t && i < e ? "right" === this._selectionDirection ? this.selectionEnd = i : this.selectionStart = i : (e === t ? this._selectionDirection = "right" : "left" === this._selectionDirection && (this._selectionDirection = "right", this.selectionStart = e), this.selectionEnd = i)
    },
    setSelectionInBoundaries: function() {
      var t = this.text.length;
      this.selectionStart > t ? this.selectionStart = t : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > t ? this.selectionEnd = t : this.selectionEnd < 0 && (this.selectionEnd = 0)
    }
  })
}(), fabric.util.object.extend(fabric.IText.prototype, {
  initDoubleClickSimulation: function() {
    this.__lastClickTime = +new Date, this.__lastLastClickTime = +new Date, this.__lastPointer = {}, this.on("mousedown", this.onMouseDown.bind(this))
  },
  onMouseDown: function(t) {
    this.__newClickTime = +new Date;
    var e = this.canvas.getPointer(t.e);
    this.isTripleClick(e) ? (this.fire("tripleclick", t), this._stopEvent(t.e)) : this.isDoubleClick(e) && (this.fire("dblclick", t), this._stopEvent(t.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = e, this.__lastIsEditing = this.isEditing, this.__lastSelected = this.selected
  },
  isDoubleClick: function(t) {
    return this.__newClickTime - this.__lastClickTime < 500 && this.__lastPointer.x === t.x && this.__lastPointer.y === t.y && this.__lastIsEditing
  },
  isTripleClick: function(t) {
    return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === t.x && this.__lastPointer.y === t.y
  },
  _stopEvent: function(t) {
    t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation()
  },
  initCursorSelectionHandlers: function() {
    this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks()
  },
  initClicks: function() {
    this.on("dblclick", function(t) {
      this.selectWord(this.getSelectionStartFromPointer(t.e))
    }), this.on("tripleclick", function(t) {
      this.selectLine(this.getSelectionStartFromPointer(t.e))
    })
  },
  initMousedownHandler: function() {
    this.on("mousedown", function(t) {
      if (this.editable) {
        var e = this.canvas.getPointer(t.e);
        this.__mousedownX = e.x, this.__mousedownY = e.y, this.__isMousedown = !0, this.selected && this.setCursorByClick(t.e), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection())
      }
    })
  },
  _isObjectMoved: function(t) {
    var e = this.canvas.getPointer(t);
    return this.__mousedownX !== e.x || this.__mousedownY !== e.y
  },
  initMouseupHandler: function() {
    this.on("mouseup", function(t) {
      this.__isMousedown = !1, this.editable && !this._isObjectMoved(t.e) && (this.__lastSelected && !this.__corner && (this.enterEditing(t.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()), this.selected = !0)
    })
  },
  setCursorByClick: function(t) {
    var e = this.getSelectionStartFromPointer(t),
      i = this.selectionStart,
      n = this.selectionEnd;
    t.shiftKey ? this.setSelectionStartEndWithShift(i, n, e) : (this.selectionStart = e, this.selectionEnd = e), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea())
  },
  getSelectionStartFromPointer: function(t) {
    for (var e, i, n = this.getLocalPointer(t), o = 0, r = 0, s = 0, a = 0, l = 0, c = this._textLines.length; l < c; l++) {
      i = this._textLines[l], s += this._getHeightOfLine(this.ctx, l) * this.scaleY;
      var h = this._getLineWidth(this.ctx, l),
        u = this._getLineLeftOffset(h);
      r = u * this.scaleX;
      for (var d = 0, p = i.length; d < p; d++) {
        if (o = r, r += this._getWidthOfChar(this.ctx, i[d], l, this.flipX ? p - d : d) * this.scaleX, !(s <= n.y || r <= n.x)) return this._getNewSelectionStartFromOffset(n, o, r, a + l, p);
        a++
      }
      if (n.y < s) return this._getNewSelectionStartFromOffset(n, o, r, a + l - 1, p)
    }
    if ("undefined" == typeof e) return this.text.length
  },
  _getNewSelectionStartFromOffset: function(t, e, i, n, o) {
    var r = t.x - e,
      s = i - t.x,
      a = s > r ? 0 : 1,
      l = n + a;
    return this.flipX && (l = o - l), l > this.text.length && (l = this.text.length), l
  }
}), fabric.util.object.extend(fabric.IText.prototype, {
  initHiddenTextarea: function() {
    this.hiddenTextarea = fabric.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off");
    var t = this._calcTextareaPosition();
    this.hiddenTextarea.style.cssText = "position: absolute; top: " + t.top + "; left: " + t.left + "; opacity: 0; width: 0px; height: 0px; z-index: -999;", fabric.document.body.appendChild(this.hiddenTextarea), fabric.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), fabric.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), fabric.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), fabric.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), fabric.util.addListener(this.hiddenTextarea, "cut", this.cut.bind(this)), fabric.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), fabric.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), fabric.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), fabric.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (fabric.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0)
  },
  _keysMap: {
    8: "removeChars",
    9: "exitEditing",
    27: "exitEditing",
    13: "insertNewline",
    33: "moveCursorUp",
    34: "moveCursorDown",
    35: "moveCursorRight",
    36: "moveCursorLeft",
    37: "moveCursorLeft",
    38: "moveCursorUp",
    39: "moveCursorRight",
    40: "moveCursorDown",
    46: "forwardDelete"
  },
  _ctrlKeysMapUp: {
    67: "copy",
    88: "cut"
  },
  _ctrlKeysMapDown: {
    65: "selectAll"
  },
  onClick: function() {
    this.hiddenTextarea && this.hiddenTextarea.focus()
  },
  onKeyDown: function(t) {
    if (this.isEditing) {
      if (t.keyCode in this._keysMap) this[this._keysMap[t.keyCode]](t);
      else {
        if (!(t.keyCode in this._ctrlKeysMapDown && (t.ctrlKey || t.metaKey))) return;
        this[this._ctrlKeysMapDown[t.keyCode]](t)
      }
      t.stopImmediatePropagation(), t.preventDefault(), t.keyCode >= 33 && t.keyCode <= 40 ? (this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.renderAll()
    }
  },
  onKeyUp: function(t) {
    return !this.isEditing || this._copyDone ? void(this._copyDone = !1) : void(t.keyCode in this._ctrlKeysMapUp && (t.ctrlKey || t.metaKey) && (this[this._ctrlKeysMapUp[t.keyCode]](t), t.stopImmediatePropagation(), t.preventDefault(), this.canvas && this.canvas.renderAll()))
  },
  onInput: function(t) {
    if (this.isEditing && !this.inCompositionMode) {
      var e, i, n, o = this.selectionStart || 0,
        r = this.selectionEnd || 0,
        s = this.text.length,
        a = this.hiddenTextarea.value.length;
      a > s ? (n = "left" === this._selectionDirection ? r : o, e = a - s, i = this.hiddenTextarea.value.slice(n, n + e)) : (e = a - s + r - o, i = this.hiddenTextarea.value.slice(o, o + e)), this.insertChars(i), t.stopPropagation()
    }
  },
  onCompositionStart: function() {
    this.inCompositionMode = !0, this.prevCompositionLength = 0, this.compositionStart = this.selectionStart
  },
  onCompositionEnd: function() {
    this.inCompositionMode = !1
  },
  onCompositionUpdate: function(t) {
    var e = t.data;
    this.selectionStart = this.compositionStart, this.selectionEnd = this.selectionEnd === this.selectionStart ? this.compositionStart + this.prevCompositionLength : this.selectionEnd, this.insertChars(e, !1), this.prevCompositionLength = e.length
  },
  forwardDelete: function(t) {
    if (this.selectionStart === this.selectionEnd) {
      if (this.selectionStart === this.text.length) return;
      this.moveCursorRight(t)
    }
    this.removeChars(t)
  },
  copy: function(t) {
    if (this.selectionStart !== this.selectionEnd) {
      var e = this.getSelectedText(),
        i = this._getClipboardData(t);
      i && i.setData("text", e), fabric.copiedText = e, fabric.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd), t.stopImmediatePropagation(), t.preventDefault(), this._copyDone = !0
    }
  },
  paste: function(t) {
    var e = null,
      i = this._getClipboardData(t),
      n = !0;
    i ? (e = i.getData("text").replace(/\r/g, ""), fabric.copiedTextStyle && fabric.copiedText === e || (n = !1)) : e = fabric.copiedText, e && this.insertChars(e, n), t.stopImmediatePropagation(), t.preventDefault()
  },
  cut: function(t) {
    this.selectionStart !== this.selectionEnd && (this.copy(t), this.removeChars(t))
  },
  _getClipboardData: function(t) {
    return t && t.clipboardData || fabric.window.clipboardData
  },
  _getWidthBeforeCursor: function(t, e) {
    for (var i, n = this._textLines[t].slice(0, e), o = this._getLineWidth(this.ctx, t), r = this._getLineLeftOffset(o), s = 0, a = n.length; s < a; s++) i = n[s], r += this._getWidthOfChar(this.ctx, i, t, s);
    return r
  },
  getDownCursorOffset: function(t, e) {
    var i = this._getSelectionForOffset(t, e),
      n = this.get2DCursorLocation(i),
      o = n.lineIndex;
    if (o === this._textLines.length - 1 || t.metaKey || 34 === t.keyCode) return this.text.length - i;
    var r = n.charIndex,
      s = this._getWidthBeforeCursor(o, r),
      a = this._getIndexOnLine(o + 1, s),
      l = this._textLines[o].slice(r);
    return l.length + a + 2
  },
  _getSelectionForOffset: function(t, e) {
    return t.shiftKey && this.selectionStart !== this.selectionEnd && e ? this.selectionEnd : this.selectionStart
  },
  getUpCursorOffset: function(t, e) {
    var i = this._getSelectionForOffset(t, e),
      n = this.get2DCursorLocation(i),
      o = n.lineIndex;
    if (0 === o || t.metaKey || 33 === t.keyCode) return -i;
    var r = n.charIndex,
      s = this._getWidthBeforeCursor(o, r),
      a = this._getIndexOnLine(o - 1, s),
      l = this._textLines[o].slice(0, r);
    return -this._textLines[o - 1].length + a - l.length
  },
  _getIndexOnLine: function(t, e) {
    for (var i, n = this._getLineWidth(this.ctx, t), o = this._textLines[t], r = this._getLineLeftOffset(n), s = r, a = 0, l = 0, c = o.length; l < c; l++) {
      var h = o[l],
        u = this._getWidthOfChar(this.ctx, h, t, l);
      if (s += u, s > e) {
        i = !0;
        var d = s - u,
          p = s,
          f = Math.abs(d - e),
          g = Math.abs(p - e);
        a = g < f ? l : l - 1;
        break
      }
    }
    return i || (a = o.length - 1), a
  },
  moveCursorDown: function(t) {
    this.selectionStart >= this.text.length && this.selectionEnd >= this.text.length || this._moveCursorUpOrDown("Down", t)
  },
  moveCursorUp: function(t) {
    0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorUpOrDown("Up", t)
  },
  _moveCursorUpOrDown: function(t, e) {
    var i = "get" + t + "CursorOffset",
      n = this[i](e, "right" === this._selectionDirection);
    e.shiftKey ? this.moveCursorWithShift(n) : this.moveCursorWithoutShift(n), 0 !== n && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea())
  },
  moveCursorWithShift: function(t) {
    var e = "left" === this._selectionDirection ? this.selectionStart + t : this.selectionEnd + t;
    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e), 0 !== t
  },
  moveCursorWithoutShift: function(t) {
    return t < 0 ? (this.selectionStart += t, this.selectionEnd = this.selectionStart) : (this.selectionEnd += t, this.selectionStart = this.selectionEnd), 0 !== t
  },
  moveCursorLeft: function(t) {
    0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorLeftOrRight("Left", t)
  },
  _move: function(t, e, i) {
    var n;
    if (t.altKey) n = this["findWordBoundary" + i](this[e]);
    else {
      if (!t.metaKey && 35 !== t.keyCode && 36 !== t.keyCode) return this[e] += "Left" === i ? -1 : 1, !0;
      n = this["findLineBoundary" + i](this[e])
    }
    if (void 0 !== typeof n && this[e] !== n) return this[e] = n, !0
  },
  _moveLeft: function(t, e) {
    return this._move(t, e, "Left")
  },
  _moveRight: function(t, e) {
    return this._move(t, e, "Right")
  },
  moveCursorLeftWithoutShift: function(t) {
    var e = !0;
    return this._selectionDirection = "left", this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (e = this._moveLeft(t, "selectionStart")), this.selectionEnd = this.selectionStart, e
  },
  moveCursorLeftWithShift: function(t) {
    return "right" === this._selectionDirection && this.selectionStart !== this.selectionEnd ? this._moveLeft(t, "selectionEnd") : 0 !== this.selectionStart ? (this._selectionDirection = "left", this._moveLeft(t, "selectionStart")) : void 0
  },
  moveCursorRight: function(t) {
    this.selectionStart >= this.text.length && this.selectionEnd >= this.text.length || this._moveCursorLeftOrRight("Right", t)
  },
  _moveCursorLeftOrRight: function(t, e) {
    var i = "moveCursor" + t + "With";
    this._currentCursorOpacity = 1, i += e.shiftKey ? "Shift" : "outShift", this[i](e) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea())
  },
  moveCursorRightWithShift: function(t) {
    return "left" === this._selectionDirection && this.selectionStart !== this.selectionEnd ? this._moveRight(t, "selectionStart") : this.selectionEnd !== this.text.length ? (this._selectionDirection = "right", this._moveRight(t, "selectionEnd")) : void 0
  },
  moveCursorRightWithoutShift: function(t) {
    var e = !0;
    return this._selectionDirection = "right", this.selectionStart === this.selectionEnd ? (e = this._moveRight(t, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, e
  },
  removeChars: function(t) {
    this.selectionStart === this.selectionEnd ? this._removeCharsNearCursor(t) : this._removeCharsFromTo(this.selectionStart, this.selectionEnd), this.set("dirty", !0), this.setSelectionEnd(this.selectionStart), this._removeExtraneousStyles(), this.canvas && this.canvas.renderAll(), this.setCoords(), this.fire("changed"), this.canvas && this.canvas.fire("text:changed", {
      target: this
    })
  },
  _removeCharsNearCursor: function(t) {
    if (0 !== this.selectionStart)
      if (t.metaKey) {
        var e = this.findLineBoundaryLeft(this.selectionStart);
        this._removeCharsFromTo(e, this.selectionStart), this.setSelectionStart(e)
      } else if (t.altKey) {
        var i = this.findWordBoundaryLeft(this.selectionStart);
        this._removeCharsFromTo(i, this.selectionStart), this.setSelectionStart(i)
      } else this._removeSingleCharAndStyle(this.selectionStart), this.setSelectionStart(this.selectionStart - 1)
  }
}),
function() {
  var t = fabric.util.toFixed,
    e = fabric.Object.NUM_FRACTION_DIGITS;
  fabric.util.object.extend(fabric.IText.prototype, {
    _setSVGTextLineText: function(t, e, i, n, o, r) {
      this._getLineStyle(t) ? this._setSVGTextLineChars(t, e, i, n, r) : fabric.Text.prototype._setSVGTextLineText.call(this, t, e, i, n, o)
    },
    _setSVGTextLineChars: function(t, e, i, n, o) {
      for (var r = this._textLines[t], s = 0, a = this._getLineLeftOffset(this._getLineWidth(this.ctx, t)) - this.width / 2, l = this._getSVGLineTopOffset(t), c = this._getHeightOfLine(this.ctx, t), h = 0, u = r.length; h < u; h++) {
        var d = this._getStyleDeclaration(t, h) || {};
        e.push(this._createTextCharSpan(r[h], d, a, l.lineTop + l.offset, s));
        var p = this._getWidthOfChar(this.ctx, r[h], t, h);
        d.textBackgroundColor && o.push(this._createTextCharBg(d, a, l.lineTop, c, p, s)), s += p
      }
    },
    _getSVGLineTopOffset: function(t) {
      for (var e = 0, i = 0, n = 0; n < t; n++) e += this._getHeightOfLine(this.ctx, n);
      return i = this._getHeightOfLine(this.ctx, n), {
        lineTop: e,
        offset: (this._fontSizeMult - this._fontSizeFraction) * i / (this.lineHeight * this._fontSizeMult)
      }
    },
    _createTextCharBg: function(i, n, o, r, s, a) {
      return ['\t\t<rect fill="', i.textBackgroundColor, '" x="', t(n + a, e), '" y="', t(o - this.height / 2, e), '" width="', t(s, e), '" height="', t(r / this.lineHeight, e), '"></rect>\n'].join("")
    },
    _createTextCharSpan: function(i, n, o, r, s) {
      var a = this.getSvgStyles.call(fabric.util.object.extend({
        visible: !0,
        fill: this.fill,
        stroke: this.stroke,
        type: "text",
        getSvgFilter: fabric.Object.prototype.getSvgFilter
      }, n));
      return ['\t\t\t<tspan x="', t(o + s, e), '" y="', t(r - this.height / 2, e), '" ', n.fontFamily ? 'font-family="' + n.fontFamily.replace(/"/g, "'") + '" ' : "", n.fontSize ? 'font-size="' + n.fontSize + '" ' : "", n.fontStyle ? 'font-style="' + n.fontStyle + '" ' : "", n.fontWeight ? 'font-weight="' + n.fontWeight + '" ' : "", n.textDecoration ? 'text-decoration="' + n.textDecoration + '" ' : "", 'style="', a, '">', fabric.util.string.escapeXml(i), "</tspan>\n"].join("")
    }
  })
}(),
function(t) {
  "use strict";
  var e = t.fabric || (t.fabric = {});
  e.Textbox = e.util.createClass(e.IText, e.Observable, {
    type: "textbox",
    minWidth: 20,
    dynamicMinWidth: 2,
    __cachedLines: null,
    lockScalingY: !0,
    lockScalingFlip: !0,
    noScaleCache: !1,
    initialize: function(t, i) {
      this.callSuper("initialize", t, i), this.setControlsVisibility(e.Textbox.getTextboxControlVisibility()), this.ctx = this.objectCaching ? this._cacheContext : e.util.createCanvasElement().getContext("2d"), this._dimensionAffectingProps.push("width")
    },
    _initDimensions: function(t) {
      this.__skipDimension || (t || (t = e.util.createCanvasElement().getContext("2d"), this._setTextStyles(t), this.clearContextTop()), this.dynamicMinWidth = 0, this._textLines = this._splitTextIntoLines(t), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this._clearCache(), this.height = this._getTextHeight(t))
    },
    _generateStyleMap: function() {
      for (var t = 0, e = 0, i = 0, n = {}, o = 0; o < this._textLines.length; o++) "\n" === this.text[i] && o > 0 ? (e = 0, i++, t++) : " " === this.text[i] && o > 0 && (e++, i++), n[o] = {
        line: t,
        offset: e
      }, i += this._textLines[o].length, e += this._textLines[o].length;
      return n
    },
    _getStyleDeclaration: function(t, e, i) {
      if (this._styleMap) {
        var n = this._styleMap[t];
        if (!n) return i ? {} : null;
        t = n.line, e = n.offset + e
      }
      return this.callSuper("_getStyleDeclaration", t, e, i)
    },
    _setStyleDeclaration: function(t, e, i) {
      var n = this._styleMap[t];
      t = n.line, e = n.offset + e, this.styles[t][e] = i
    },
    _deleteStyleDeclaration: function(t, e) {
      var i = this._styleMap[t];
      t = i.line, e = i.offset + e, delete this.styles[t][e]
    },
    _getLineStyle: function(t) {
      var e = this._styleMap[t];
      return this.styles[e.line]
    },
    _setLineStyle: function(t, e) {
      var i = this._styleMap[t];
      this.styles[i.line] = e
    },
    _deleteLineStyle: function(t) {
      var e = this._styleMap[t];
      delete this.styles[e.line]
    },
    _wrapText: function(t, e) {
      var i, n = e.split(this._reNewline),
        o = [];
      for (i = 0; i < n.length; i++) o = o.concat(this._wrapLine(t, n[i], i));
      return o
    },
    _measureText: function(t, e, i, n) {
      var o = 0;
      n = n || 0;
      for (var r = 0, s = e.length; r < s; r++) o += this._getWidthOfChar(t, e[r], i, r + n);
      return o
    },
    _wrapLine: function(t, e, i) {
      for (var n = 0, o = [], r = "", s = e.split(" "), a = "", l = 0, c = " ", h = 0, u = 0, d = 0, p = !0, f = this._getWidthOfCharSpacing(), g = 0; g < s.length; g++) a = s[g], h = this._measureText(t, a, i, l), l += a.length, n += u + h - f, n >= this.width && !p ? (o.push(r), r = "", n = h, p = !0) : n += f, p || (r += c), r += a, u = this._measureText(t, c, i, l), l++, p = !1, h > d && (d = h);
      return g && o.push(r), d > this.dynamicMinWidth && (this.dynamicMinWidth = d - f), o
    },
    _splitTextIntoLines: function(t) {
      t = t || this.ctx;
      var e = this.textAlign;
      this._styleMap = null, t.save(), this._setTextStyles(t), this.textAlign = "left";
      var i = this._wrapText(t, this.text);
      return this.textAlign = e, t.restore(), this._textLines = i, this._styleMap = this._generateStyleMap(), i
    },
    setOnGroup: function(t, e) {
      "scaleX" === t && (this.set("scaleX", Math.abs(1 / e)), this.set("width", this.get("width") * e / ("undefined" == typeof this.__oldScaleX ? 1 : this.__oldScaleX)), this.__oldScaleX = e)
    },
    get2DCursorLocation: function(t) {
      "undefined" == typeof t && (t = this.selectionStart);
      for (var e = this._textLines.length, i = 0, n = 0; n < e; n++) {
        var o = this._textLines[n],
          r = o.length;
        if (t <= i + r) return {
          lineIndex: n,
          charIndex: t - i
        };
        i += r, "\n" !== this.text[i] && " " !== this.text[i] || i++
      }
      return {
        lineIndex: e - 1,
        charIndex: this._textLines[e - 1].length
      }
    },
    _getCursorBoundariesOffsets: function(t, e) {
      for (var i = 0, n = 0, o = this.get2DCursorLocation(), r = this._textLines[o.lineIndex].split(""), s = this._getLineLeftOffset(this._getLineWidth(this.ctx, o.lineIndex)), a = 0; a < o.charIndex; a++) n += this._getWidthOfChar(this.ctx, r[a], o.lineIndex, a);
      for (a = 0; a < o.lineIndex; a++) i += this._getHeightOfLine(this.ctx, a);
      return "cursor" === e && (i += (1 - this._fontSizeFraction) * this._getHeightOfLine(this.ctx, o.lineIndex) / this.lineHeight - this.getCurrentCharFontSize(o.lineIndex, o.charIndex) * (1 - this._fontSizeFraction)), {
        top: i,
        left: n,
        lineLeft: s
      }
    },
    getMinWidth: function() {
      return Math.max(this.minWidth, this.dynamicMinWidth)
    },
    toObject: function(t) {
      return this.callSuper("toObject", ["minWidth"].concat(t))
    }
  }), e.Textbox.fromObject = function(t, i, n) {
    return e.Object._fromObject("Textbox", t, i, n, "text")
  }, e.Textbox.getTextboxControlVisibility = function() {
    return {
      tl: !1,
      tr: !1,
      br: !1,
      bl: !1,
      ml: !0,
      mt: !1,
      mr: !0,
      mb: !1,
      mtr: !0
    }
  }
}("undefined" != typeof exports ? exports : this),
function() {
  var t = fabric.Canvas.prototype._setObjectScale;
  fabric.Canvas.prototype._setObjectScale = function(e, i, n, o, r, s, a) {
    var l = i.target;
    if (!(l instanceof fabric.Textbox)) return t.call(fabric.Canvas.prototype, e, i, n, o, r, s, a);
    var c = l.width * (e.x / i.scaleX / (l.width + l.strokeWidth));
    return c >= l.getMinWidth() ? (l.set("width", c), !0) : void 0
  }, fabric.Group.prototype._refreshControlsVisibility = function() {
    if ("undefined" != typeof fabric.Textbox)
      for (var t = this._objects.length; t--;)
        if (this._objects[t] instanceof fabric.Textbox) return void this.setControlsVisibility(fabric.Textbox.getTextboxControlVisibility())
  }, fabric.util.object.extend(fabric.Textbox.prototype, {
    _removeExtraneousStyles: function() {
      for (var t in this._styleMap) this._textLines[t] || delete this.styles[this._styleMap[t].line]
    },
    insertCharStyleObject: function(t, e, i) {
      var n = this._styleMap[t];
      t = n.line, e = n.offset + e, fabric.IText.prototype.insertCharStyleObject.apply(this, [t, e, i])
    },
    insertNewlineStyleObject: function(t, e, i) {
      var n = this._styleMap[t];
      t = n.line, e = n.offset + e, fabric.IText.prototype.insertNewlineStyleObject.apply(this, [t, e, i])
    },
    shiftLineStyles: function(t, e) {
      var i = this._styleMap[t];
      t = i.line, fabric.IText.prototype.shiftLineStyles.call(this, t, e)
    },
    _getTextOnPreviousLine: function(t) {
      for (var e = this._textLines[t - 1]; this._styleMap[t - 2] && this._styleMap[t - 2].line === this._styleMap[t - 1].line;) e = this._textLines[t - 2] + e, t--;
      return e
    },
    removeStyleObject: function(t, e) {
      var i = this.get2DCursorLocation(e),
        n = this._styleMap[i.lineIndex],
        o = n.line,
        r = n.offset + i.charIndex;
      this._removeStyleObject(t, i, o, r)
    }
  })
}(),
function() {
  var t = fabric.IText.prototype._getNewSelectionStartFromOffset;
  fabric.IText.prototype._getNewSelectionStartFromOffset = function(e, i, n, o, r) {
    o = t.call(this, e, i, n, o, r);
    for (var s = 0, a = 0, l = 0; l < this._textLines.length && (s += this._textLines[l].length, !(s + a >= o)); l++) "\n" !== this.text[s + a] && " " !== this.text[s + a] || a++;
    return o - l + a
  }
}(),
function() {
  function request(t, e, i) {
    var n = URL.parse(t);
    n.port || (n.port = 0 === n.protocol.indexOf("https:") ? 443 : 80);
    var o = 0 === n.protocol.indexOf("https:") ? HTTPS : HTTP,
      r = o.request({
        hostname: n.hostname,
        port: n.port,
        path: n.path,
        method: "GET"
      }, function(t) {
        var n = "";
        e && t.setEncoding(e), t.on("end", function() {
          i(n)
        }), t.on("data", function(e) {
          200 === t.statusCode && (n += e)
        })
      });
    r.on("error", function(t) {
      t.errno === process.ECONNREFUSED ? fabric.log("ECONNREFUSED: connection refused to " + n.hostname + ":" + n.port) : fabric.log(t.message), i(null)
    }), r.end()
  }

  function requestFs(t, e) {
    var i = require("fs");
    i.readFile(t, function(t, i) {
      if (t) throw fabric.log(t), t;
      e(i)
    })
  }
  if ("undefined" == typeof document || "undefined" == typeof window) {
    var DOMParser = require("xmldom").DOMParser,
      URL = require("url"),
      HTTP = require("http"),
      HTTPS = require("https"),
      Canvas = require("canvas"),
      Image = require("canvas").Image;
    fabric.util.loadImage = function(t, e, i) {
      function n(n) {
        n ? (o.src = new Buffer(n, "binary"), o._src = t, e && e.call(i, o)) : (o = null, e && e.call(i, null, !0))
      }
      var o = new Image;
      t && (t instanceof Buffer || 0 === t.indexOf("data")) ? (o.src = o._src = t, e && e.call(i, o)) : t && 0 !== t.indexOf("http") ? requestFs(t, n) : t ? request(t, "binary", n) : e && e.call(i, t)
    }, fabric.loadSVGFromURL = function(t, e, i) {
      t = t.replace(/^\n\s*/, "").replace(/\?.*$/, "").trim(), 0 !== t.indexOf("http") ? requestFs(t, function(t) {
        fabric.loadSVGFromString(t.toString(), e, i)
      }) : request(t, "", function(t) {
        fabric.loadSVGFromString(t, e, i)
      })
    }, fabric.loadSVGFromString = function(t, e, i) {
      var n = (new DOMParser).parseFromString(t);
      fabric.parseSVGDocument(n.documentElement, function(t, i) {
        e && e(t, i)
      }, i)
    }, fabric.util.getScript = function(url, callback) {
      request(url, "", function(body) {
        eval(body), callback && callback()
      })
    }, fabric.createCanvasForNode = function(t, e, i, n) {
      n = n || i;
      var o = fabric.document.createElement("canvas"),
        r = new Canvas(t || 600, e || 600, n),
        s = new Canvas(t || 600, e || 600, n);
      o.style = {}, o.width = r.width, o.height = r.height, i = i || {}, i.nodeCanvas = r, i.nodeCacheCanvas = s;
      var a = fabric.Canvas || fabric.StaticCanvas,
        l = new a(o, i);
      return l.nodeCanvas = r, l.nodeCacheCanvas = s, l.contextContainer = r.getContext("2d"), l.contextCache = s.getContext("2d"), l.Font = Canvas.Font, l
    };
    var originaInitStatic = fabric.StaticCanvas.prototype._initStatic;
    fabric.StaticCanvas.prototype._initStatic = function(t, e) {
      t = t || fabric.document.createElement("canvas"), this.nodeCanvas = new Canvas(t.width, t.height), this.nodeCacheCanvas = new Canvas(t.width, t.height), originaInitStatic.call(this, t, e), this.contextContainer = this.nodeCanvas.getContext("2d"), this.contextCache = this.nodeCacheCanvas.getContext("2d"), this.Font = Canvas.Font
    }, fabric.StaticCanvas.prototype.createPNGStream = function() {
      return this.nodeCanvas.createPNGStream()
    }, fabric.StaticCanvas.prototype.createJPEGStream = function(t) {
      return this.nodeCanvas.createJPEGStream(t)
    }, fabric.StaticCanvas.prototype._initRetinaScaling = function() {
      if (this._isRetinaScaling()) return this.lowerCanvasEl.setAttribute("width", this.width * fabric.devicePixelRatio), this.lowerCanvasEl.setAttribute("height", this.height * fabric.devicePixelRatio), this.nodeCanvas.width = this.width * fabric.devicePixelRatio, this.nodeCanvas.height = this.height * fabric.devicePixelRatio, this.contextContainer.scale(fabric.devicePixelRatio, fabric.devicePixelRatio), this
    }, fabric.Canvas && (fabric.Canvas.prototype._initRetinaScaling = fabric.StaticCanvas.prototype._initRetinaScaling);
    var origSetBackstoreDimension = fabric.StaticCanvas.prototype._setBackstoreDimension;
    fabric.StaticCanvas.prototype._setBackstoreDimension = function(t, e) {
      return origSetBackstoreDimension.call(this, t, e), this.nodeCanvas[t] = e, this
    }, fabric.Canvas && (fabric.Canvas.prototype._setBackstoreDimension = fabric.StaticCanvas.prototype._setBackstoreDimension)
  }
}();
var App = function() {
  var t, e = !1,
    i = !1,
    n = !1,
    o = [],
    r = function() {
      e = !!navigator.userAgent.match(/MSIE 9.0/), i = !!navigator.userAgent.match(/MSIE 10.0/), n = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1, i && $("html").addClass("ie10"), e && $("html").addClass("ie9"), n && $("html").addClass("ie")
    },
    s = function() {
      for (var t = 0; t < o.length; t++) {
        var e = o[t];
        e.call()
      }
    },
    a = function() {
      $("[data-auto-height]").each(function() {
        var t = $(this),
          e = $("[data-height]", t),
          i = 0,
          n = t.attr("data-mode"),
          o = parseInt(t.attr("data-offset") ? t.attr("data-offset") : 0);
        e.each(function() {
          "height" == $(this).attr("data-height") ? $(this).css("height", "") : $(this).css("min-height", "");
          var t = "base-height" == n ? $(this).outerHeight() : $(this).outerHeight(!0);
          t > i && (i = t)
        }), i += o, e.each(function() {
          "height" == $(this).attr("data-height") ? $(this).css("height", i) : $(this).css("min-height", i)
        }), t.attr("data-related") && $(t.attr("data-related")).css("height", t.height())
      })
    },
    l = function() {
      var t;
      $(window).resize(function() {
        t && clearTimeout(t), t = setTimeout(function() {
          s()
        }, 50)
      })
    },
    c = function() {
      $("body").on("click", ".c-checkbox > label, .c-radio > label", function() {
        var t = $(this),
          e = $(this).children("span:first-child");
        e.addClass("inc");
        var i = e.clone(!0);
        e.before(i), $("." + e.attr("class") + ":last", t).remove()
      })
    },
    h = function() {
      $("body").on("shown.bs.collapse", ".accordion.scrollable", function(t) {
        Jango.scrollTo($(t.target))
      })
    },
    u = function() {
      $("body").on("hide.bs.modal", function() {
        $(".modal:visible").size() > 1 && $("html").hasClass("modal-open") === !1 ? $("html").addClass("modal-open") : $(".modal:visible").size() <= 1 && $("html").removeClass("modal-open")
      }), $("body").on("show.bs.modal", ".modal", function() {
        $(this).hasClass("modal-scroll") && $("body").addClass("modal-open-noscroll")
      }), $("body").on("hide.bs.modal", ".modal", function() {
        $("body").removeClass("modal-open-noscroll")
      }), $("body").on("hidden.bs.modal", ".modal:not(.modal-cached)", function() {
        $(this).removeData("bs.modal")
      })
    },
    d = function() {
      $(".tooltips").tooltip()
    },
    p = function() {
      $("body").on("click", ".dropdown-menu.hold-on-click", function(t) {
        t.stopPropagation()
      })
    },
    f = function() {
      $("body").on("click", '[data-close="alert"]', function(t) {
        $(this).parent(".alert").hide(), $(this).closest(".note").hide(), t.preventDefault()
      }), $("body").on("click", '[data-close="note"]', function(t) {
        $(this).closest(".note").hide(), t.preventDefault()
      }), $("body").on("click", '[data-remove="note"]', function(t) {
        $(this).closest(".note").remove(), t.preventDefault()
      })
    },
    g = function() {
      $(".popovers").popover(), $(document).on("click.bs.popover.data-api", function(e) {
        t && t.popover("hide")
      })
    },
    m = function() {
      (e || i) && $("input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)").each(function() {
        var t = $(this);
        "" === t.val() && "" !== t.attr("placeholder") && t.addClass("placeholder").val(t.attr("placeholder")), t.focus(function() {
          t.val() == t.attr("placeholder") && t.val("")
        }), t.blur(function() {
          "" !== t.val() && t.val() != t.attr("placeholder") || t.val(t.attr("placeholder"))
        })
      })
    };
  return {
    init: function() {
      a(), this.addResizeHandler(a), r(), l(), c(), f(), p(), d(), g(), h(), u(), m()
    },
    changeLogo: function(t) {
      var e = "../assets/jango/img/layout/logos/" + t + ".png";
      $(".c-brand img.c-desktop-logo").attr("src", e)
    },
    setLastPopedPopover: function(e) {
      t = e
    },
    addResizeHandler: function(t) {
      o.push(t)
    },
    runResizeHandlers: function() {
      s()
    },
    scrollTo: function(t, e) {
      var i = t && t.size() > 0 ? t.offset().top : 0;
      t && ($("body").hasClass("page-header-fixed") && (i -= $(".page-header").height()), i += e ? e : -1 * t.height()), $("html,body").animate({
        scrollTop: i
      }, "slow")
    },
    scrollTop: function() {
      Jango.scrollTo()
    },
    initFancybox: function() {
      handleFancybox()
    },
    getActualVal: function(t) {
      return t = $(t), t.val() === t.attr("placeholder") ? "" : t.val()
    },
    getURLParameter: function(t) {
      var e, i, n = window.location.search.substring(1),
        o = n.split("&");
      for (e = 0; e < o.length; e++)
        if (i = o[e].split("="), i[0] == t) return unescape(i[1]);
      return null
    },
    isTouchDevice: function() {
      try {
        return document.createEvent("TouchEvent"), !0
      } catch (t) {
        return !1
      }
    },
    getViewPort: function() {
      var t = window,
        e = "inner";
      return "innerWidth" in window || (e = "client", t = document.documentElement || document.body), {
        width: t[e + "Width"],
        height: t[e + "Height"]
      }
    },
    getUniqueID: function(t) {
      return "prefix_" + Math.floor(Math.random() * (new Date).getTime())
    },
    isIE: function() {
      return n
    },
    isIE9: function() {
      return e
    },
    isIE10: function() {
      return i
    },
    getBreakpoint: function(t) {
      var e = {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
      };
      return e[t] ? e[t] : 0
    }
  }
}();
! function(t, e, i, n) {
  "use strict";

  function o(e, i, n) {
    var r, s = this,
      a = "cbp";
    if (t.data(e, "cubeportfolio")) throw new Error("cubeportfolio is already initialized. Destroy it before initialize again!");
    t.data(e, "cubeportfolio", s), s.options = t.extend({}, t.fn.cubeportfolio.options, i), s.isAnimating = !0, s.defaultFilter = s.options.defaultFilter, s.registeredEvents = [], s.skipEvents = [], s.addedWrapp = !1, t.isFunction(n) && s._registerEvent("initFinish", n, !0), s.obj = e, s.$obj = t(e), r = s.$obj.children(), s.options.caption && (o.Private.modernBrowser || (s.options.caption = "minimal"), a += " cbp-caption-active cbp-caption-" + s.options.caption), s.$obj.addClass(a), (0 === r.length || r.first().hasClass("cbp-item")) && (s.wrapInner(s.obj, "cbp-wrapper"), s.addedWrapp = !0), s.$ul = s.$obj.children().addClass("cbp-wrapper"), s.wrapInner(s.obj, "cbp-wrapper-outer"), s.wrapper = s.$obj.children(".cbp-wrapper-outer"), s.blocks = s.$ul.children(".cbp-item"), s.wrapInner(s.blocks, "cbp-item-wrapper"), s.width = s.$obj.outerWidth(), s._load(s.$obj, s._display)
  }
  t.extend(o.prototype, {
    storeData: function(e) {
      e.each(function(e, i) {
        var n = t(i);
        n.data("cbp", {
          wrapper: n.children(".cbp-item-wrapper"),
          widthInitial: n.outerWidth(),
          heightInitial: n.outerHeight(),
          width: null,
          height: null,
          left: null,
          leftNew: null,
          top: null,
          topNew: null
        })
      })
    },
    wrapInner: function(t, e) {
      var o, r, s;
      if (e = e || "", !(t.length && t.length < 1))
        for (t.length === n && (t = [t]), r = t.length - 1; r >= 0; r--) {
          for (o = t[r], s = i.createElement("div"), s.setAttribute("class", e); o.childNodes.length;) s.appendChild(o.childNodes[0]);
          o.appendChild(s)
        }
    },
    _captionDestroy: function() {
      var t = this;
      t.$obj.removeClass("cbp-caption-active cbp-caption-" + t.options.caption)
    },
    resizeEvent: function() {
      var i, n, o = this;
      t(e).on("resize.cbp", function() {
        clearTimeout(i), i = setTimeout(function() {
          e.innerHeight != screen.height && ("alignCenter" === o.options.gridAdjustment && (o.obj.style.maxWidth = ""), n = o.$obj.outerWidth(), o.width !== n && (o.width = n, o._gridAdjust(), o._layout(), o.positionateItems(), o._resizeMainContainer(), "slider" === o.options.layoutMode && o._updateSlider(), o._triggerEvent("resizeGrid")), o._triggerEvent("resizeWindow"))
        }, 80)
      })
    },
    _load: function(e, i, n) {
      var o, r, s = this,
        a = 0;
      n = n || [], o = e.find("img:uncached").map(function() {
        return this.src
      }), r = o.length, 0 === r && i.apply(s, n), t.each(o, function(e, o) {
        var l = new Image;
        t(l).one("load.cbp error.cbp", function() {
          return t(this).off("load.cbp error.cbp"), a++, a === r ? (i.apply(s, n), !1) : void 0
        }), l.src = o
      })
    },
    _filterFromUrl: function() {
      var t = this,
        e = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href);
      null !== e && (t.defaultFilter = e[1])
    },
    _display: function() {
      var e = this;
      e.storeData(e.blocks), "grid" === e.options.layoutMode && e._filterFromUrl(), "*" !== e.defaultFilter ? (e.blocksOn = e.blocks.filter(e.defaultFilter), e.blocks.not(e.defaultFilter).addClass("cbp-item-off")) : e.blocksOn = e.blocks, e._plugins = t.map(o.Plugins, function(t) {
        return t(e)
      }), e._triggerEvent("initStartRead"), e._triggerEvent("initStartWrite"), e.localColumnWidth = e.options.gapVertical, e.blocks.length && (e.localColumnWidth += e.blocks.first().data("cbp").widthInitial), e.getColumnsType = t.isArray(e.options.mediaQueries) ? "_getColumnsBreakpoints" : "_getColumnsAuto", e._gridAdjust(), e["_" + e.options.layoutMode + "Markup"](), e._layout(), e.positionateItems(), e._resizeMainContainer(), e._triggerEvent("initEndRead"), e._triggerEvent("initEndWrite"), e.$obj.addClass("cbp-ready"), e._registerEvent("delayFrame", e.delayFrame), e._triggerEvent("delayFrame")
    },
    positionateItems: function() {
      var e, i = this;
      i.blocksOn.each(function(i, n) {
        e = t(n).data("cbp"), e.left = e.leftNew, e.top = e.topNew, n.style.left = e.left + "px", n.style.top = e.top + "px"
      })
    },
    delayFrame: function() {
      var t = this;
      requestAnimationFrame(function() {
        t.resizeEvent(), t._triggerEvent("initFinish"), t.isAnimating = !1, t.$obj.trigger("initComplete.cbp")
      })
    },
    _gridAdjust: function() {
      var e = this;
      "responsive" === e.options.gridAdjustment ? e._responsiveLayout() : e.blocks.each(function(e, i) {
        var n = t(i).data("cbp");
        n.width = n.widthInitial, n.height = n.heightInitial
      })
    },
    _layout: function() {
      var t = this;
      t["_" + t.options.layoutMode + "LayoutReset"](), t["_" + t.options.layoutMode + "Layout"](), t.$obj.removeClass(function(t, e) {
        return (e.match(/\bcbp-cols-\d+/gi) || []).join(" ")
      }), t.$obj.addClass("cbp-cols-" + t.cols)
    },
    _sliderMarkup: function() {
      var e = this;
      e.sliderStopEvents = !1, e.sliderActive = 0, e._registerEvent("updateSliderPosition", function() {
        e.$obj.addClass("cbp-mode-slider")
      }, !0), e.nav = t("<div/>", {
        class: "cbp-nav"
      }), e.nav.on("click.cbp", "[data-slider-action]", function(i) {
        if (i.preventDefault(), i.stopImmediatePropagation(), i.stopPropagation(), !e.sliderStopEvents) {
          var n = t(this),
            o = n.attr("data-slider-action");
          e["_" + o + "Slider"] && e["_" + o + "Slider"](n)
        }
      }), e.options.showNavigation && (e.controls = t("<div/>", {
        class: "cbp-nav-controls"
      }), e.navPrev = t("<div/>", {
        class: "cbp-nav-prev",
        "data-slider-action": "prev"
      }).appendTo(e.controls), e.navNext = t("<div/>", {
        class: "cbp-nav-next",
        "data-slider-action": "next"
      }).appendTo(e.controls), e.controls.appendTo(e.nav)), e.options.showPagination && (e.navPagination = t("<div/>", {
        class: "cbp-nav-pagination"
      }).appendTo(e.nav)), (e.controls || e.navPagination) && e.nav.appendTo(e.$obj), e._updateSliderPagination(), e.options.auto && (e.options.autoPauseOnHover && (e.mouseIsEntered = !1, e.$obj.on("mouseenter.cbp", function() {
        e.mouseIsEntered = !0, e._stopSliderAuto()
      }).on("mouseleave.cbp", function() {
        e.mouseIsEntered = !1, e._startSliderAuto()
      })), e._startSliderAuto()), e.options.drag && o.Private.modernBrowser && e._dragSlider()
    },
    _updateSlider: function() {
      var t = this;
      t._updateSliderPosition(), t._updateSliderPagination()
    },
    _updateSliderPagination: function() {
      var e, i, n = this;
      if (n.options.showPagination) {
        for (e = Math.ceil(n.blocksOn.length / n.cols), n.navPagination.empty(), i = e - 1; i >= 0; i--) t("<div/>", {
          class: "cbp-nav-pagination-item",
          "data-slider-action": "jumpTo"
        }).appendTo(n.navPagination);
        n.navPaginationItems = n.navPagination.children()
      }
      n._enableDisableNavSlider()
    },
    _destroySlider: function() {
      var t = this;
      "slider" === t.options.layoutMode && (t.$obj.off("click.cbp"), t.$obj.removeClass("cbp-mode-slider"), t.options.showNavigation && t.nav.remove(), t.navPagination && t.navPagination.remove())
    },
    _nextSlider: function() {
      var t = this;
      if (t._isEndSlider()) {
        if (!t.isRewindNav()) return;
        t.sliderActive = 0
      } else t.options.scrollByPage ? t.sliderActive = Math.min(t.sliderActive + t.cols, t.blocksOn.length - t.cols) : t.sliderActive += 1;
      t._goToSlider()
    },
    _prevSlider: function() {
      var t = this;
      if (t._isStartSlider()) {
        if (!t.isRewindNav()) return;
        t.sliderActive = t.blocksOn.length - t.cols
      } else t.options.scrollByPage ? t.sliderActive = Math.max(0, t.sliderActive - t.cols) : t.sliderActive -= 1;
      t._goToSlider()
    },
    _jumpToSlider: function(t) {
      var e = this,
        i = Math.min(t.index() * e.cols, e.blocksOn.length - e.cols);
      i !== e.sliderActive && (e.sliderActive = i, e._goToSlider())
    },
    _jumpDragToSlider: function(t) {
      var e, i, n, o = this,
        r = t > 0;
      o.options.scrollByPage ? (e = o.cols * o.localColumnWidth, i = o.cols) : (e = o.localColumnWidth, i = 1), t = Math.abs(t), n = Math.floor(t / e) * i, t % e > 20 && (n += i), o.sliderActive = r ? Math.min(o.sliderActive + n, o.blocksOn.length - o.cols) : Math.max(0, o.sliderActive - n), o._goToSlider()
    },
    _isStartSlider: function() {
      return 0 === this.sliderActive
    },
    _isEndSlider: function() {
      var t = this;
      return t.sliderActive + t.cols > t.blocksOn.length - 1
    },
    _goToSlider: function() {
      var t = this;
      t._enableDisableNavSlider(), t._updateSliderPosition()
    },
    _startSliderAuto: function() {
      var t = this;
      return t.isDrag ? void t._stopSliderAuto() : void(t.timeout = setTimeout(function() {
        t._nextSlider(), t._startSliderAuto()
      }, t.options.autoTimeout))
    },
    _stopSliderAuto: function() {
      clearTimeout(this.timeout)
    },
    _enableDisableNavSlider: function() {
      var t, e, i = this;
      i.isRewindNav() || (e = i._isStartSlider() ? "addClass" : "removeClass", i.navPrev[e]("cbp-nav-stop"), e = i._isEndSlider() ? "addClass" : "removeClass", i.navNext[e]("cbp-nav-stop")), i.options.showPagination && (t = i.options.scrollByPage ? Math.ceil(i.sliderActive / i.cols) : i._isEndSlider() ? i.navPaginationItems.length - 1 : Math.floor(i.sliderActive / i.cols), i.navPaginationItems.removeClass("cbp-nav-pagination-active").eq(t).addClass("cbp-nav-pagination-active"))
    },
    isRewindNav: function() {
      var t = this;
      return !t.options.showNavigation || !(t.blocksOn.length <= t.cols) && !!t.options.rewindNav
    },
    sliderItemsLength: function() {
      return this.blocksOn.length <= this.cols
    },
    _sliderLayout: function() {
      var e = this;
      e.blocksOn.each(function(i, n) {
        var o = t(n).data("cbp");
        o.leftNew = Math.round(e.localColumnWidth * i), o.topNew = 0, e.colVert.push(o.height + e.options.gapHorizontal)
      }), e.sliderColVert = e.colVert.slice(e.sliderActive, e.sliderActive + e.cols), e.ulWidth = e.localColumnWidth * e.blocksOn.length - e.options.gapVertical, e.$ul.width(e.ulWidth)
    },
    _updateSliderPosition: function() {
      var t = this,
        e = -t.sliderActive * t.localColumnWidth;
      t._triggerEvent("updateSliderPosition"), o.Private.modernBrowser ? t.$ul[0].style[o.Private.transform] = "translate3d(" + e + "px, 0px, 0)" : t.$ul[0].style.left = e + "px", t.sliderColVert = t.colVert.slice(t.sliderActive, t.sliderActive + t.cols), t._resizeMainContainer()
    },
    _dragSlider: function() {
      function r(e) {
        if (!m.sliderItemsLength()) {
          if (x ? g = e : e.preventDefault(), m.options.auto && m._stopSliderAuto(), y) return void t(d).one("click.cbp", function() {
            return !1
          });
          d = t(e.target), h = c(e).x, u = 0, p = -m.sliderActive * m.localColumnWidth, f = m.localColumnWidth * (m.blocksOn.length - m.cols), v.on(b.move, a), v.on(b.end, s), m.$obj.addClass("cbp-mode-slider-dragStart")
        }
      }

      function s() {
        m.$obj.removeClass("cbp-mode-slider-dragStart"), y = !0, 0 !== u ? (d.one("click.cbp", function() {
          return !1
        }), m._jumpDragToSlider(u), m.$ul.one(o.Private.transitionend, l)) : l.call(m), v.off(b.move), v.off(b.end)
      }

      function a(t) {
        u = h - c(t).x, (u > 8 || -8 > u) && t.preventDefault(), m.isDrag = !0;
        var e = p - u;
        0 > u && p > u ? e = (p - u) / 5 : u > 0 && -f > p - u && (e = -f + (f + p - u) / 5), o.Private.modernBrowser ? m.$ul[0].style[o.Private.transform] = "translate3d(" + e + "px, 0px, 0)" : m.$ul[0].style.left = e + "px"
      }

      function l() {
        if (y = !1, m.isDrag = !1, m.options.auto) {
          if (m.mouseIsEntered) return;
          m._startSliderAuto()
        }
      }

      function c(t) {
        return t.originalEvent !== n && t.originalEvent.touches !== n && (t = t.originalEvent.touches[0]), {
          x: t.pageX,
          y: t.pageY
        }
      }
      var h, u, d, p, f, g, m = this,
        v = t(i),
        y = !1,
        b = {},
        x = !1;
      m.isDrag = !1, "ontouchstart" in e || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? (b = {
        start: "touchstart.cbp",
        move: "touchmove.cbp",
        end: "touchend.cbp"
      }, x = !0) : b = {
        start: "mousedown.cbp",
        move: "mousemove.cbp",
        end: "mouseup.cbp"
      }, m.$ul.on(b.start, r)
    },
    _sliderLayoutReset: function() {
      var t = this;
      t.colVert = []
    },
    _gridMarkup: function() {},
    _gridLayout: function() {
      var e = this;
      e.blocksOn.each(function(i, n) {
        var o, r, s, a, l = Math.min.apply(Math, e.colVert),
          c = 0,
          h = t(n).data("cbp");
        for (s = 0, a = e.colVert.length; a > s; s++)
          if (e.colVert[s] === l) {
            c = s;
            break
          }
        for (h.leftNew = Math.round(e.localColumnWidth * c), h.topNew = Math.round(l), o = l + h.height + e.options.gapHorizontal, r = e.cols + 1 - a, s = 0; r > s; s++) e.colVert[c + s] = o
      })
    },
    _gridLayoutReset: function() {
      var t, e = this;
      for ("alignCenter" === e.options.gridAdjustment ? (e.cols = Math.max(Math.floor((e.width + e.options.gapVertical) / e.localColumnWidth), 1), e.width = e.cols * e.localColumnWidth - e.options.gapVertical, e.$obj.css("max-width", e.width)) : e.cols = Math.max(Math.floor((e.width + e.options.gapVertical) / e.localColumnWidth), 1), e.colVert = [], t = e.cols; t--;) e.colVert.push(0)
    },
    _responsiveLayout: function() {
      var e, i, n = this;
      n.columnWidthCache ? n.localColumnWidth = n.columnWidthCache : n.columnWidthCache = n.localColumnWidth, n.cols = n[n.getColumnsType](), e = n.width - n.options.gapVertical * (n.cols - 1), n.localColumnWidth = parseInt(e / n.cols, 10) + n.options.gapVertical, i = n.localColumnWidth - n.options.gapVertical, n.blocks.each(function(e, n) {
        n.style.width = i + "px", t(n).data("cbp").width = i
      }), n.blocks.each(function(e, i) {
        var n = t(i);
        n.data("cbp").height = n.outerHeight()
      })
    },
    _getColumnsAuto: function() {
      var t = this;
      return Math.max(Math.round(t.width / t.localColumnWidth), 1)
    },
    _getColumnsBreakpoints: function() {
      var e, i = this,
        o = i.width - i.options.gapVertical;
      return t.each(i.options.mediaQueries, function(t, i) {
        return o >= i.width ? (e = i.cols, !1) : void 0
      }), e === n && (e = i.options.mediaQueries[i.options.mediaQueries.length - 1].cols), e
    },
    _resizeMainContainer: function() {
      var t, e = this,
        i = e.sliderColVert || e.colVert;
      t = Math.max(Math.max.apply(Math, i) - e.options.gapHorizontal, 0), t !== e.height && (e.obj.style.height = t + "px", e.height !== n && (o.Private.modernBrowser ? e.$obj.one(o.Private.transitionend, function() {
        e.$obj.trigger("pluginResize.cbp")
      }) : e.$obj.trigger("pluginResize.cbp")), e.height = t)
    },
    _filter: function(t) {
      var e = this;
      e.blocksOnInitial = e.blocksOn, e.blocksOn = e.blocks.filter(t), e.blocksOff = e.blocks.not(t), e._layout(), e.filterLayout(t)
    },
    filterLayout: function() {
      var e = this;
      e.blocksOff.addClass("cbp-item-off"), e.blocksOn.removeClass("cbp-item-off").each(function(e, i) {
        var n = t(i).data("cbp");
        n.left = n.leftNew, n.top = n.topNew, i.style.left = n.left + "px", i.style.top = n.top + "px"
      }), e._resizeMainContainer(), e.filterFinish()
    },
    filterFinish: function() {
      var t = this;
      t.isAnimating = !1, t.$obj.trigger("filterComplete.cbp"), t._triggerEvent("filterFinish")
    },
    _registerEvent: function(t, e, i) {
      var n = this;
      n.registeredEvents[t] || (n.registeredEvents[t] = []), n.registeredEvents[t].push({
        func: e,
        oneTime: i || !1
      })
    },
    _triggerEvent: function(t, e) {
      var i, n, o = this;
      if (o.skipEvents[t]) return void delete o.skipEvents[t];
      if (o.registeredEvents[t])
        for (i = 0, n = o.registeredEvents[t].length; n > i; i++) o.registeredEvents[t][i].func.call(o, e), o.registeredEvents[t][i].oneTime && (o.registeredEvents[t].splice(i, 1), i--, n--)
    },
    _skipNextEvent: function(t) {
      var e = this;
      e.skipEvents[t] = !0
    },
    _addItems: function(e, i) {
      var n = this,
        r = t(e).filter(".cbp-item").addClass("cbp-loading-fadeIn").css("top", "1000%").wrapInner('<div class="cbp-item-wrapper"></div>');
      return r.length ? void n._load(r, function() {
        n.$obj.addClass("cbp-addItems"), r.appendTo(n.$ul), t.merge(n.blocks, r), n.storeData(r), "*" !== n.defaultFilter ? (n.blocksOn = n.blocks.filter(n.defaultFilter), n.blocks.not(n.defaultFilter).addClass("cbp-item-off")) : n.blocksOn = n.blocks, r.on(o.Private.animationend, function() {
          n.$obj.find(".cbp-loading-fadeIn").removeClass("cbp-loading-fadeIn"), n.$obj.removeClass("cbp-addItems")
        }), n._triggerEvent("addItemsToDOM", r), n._gridAdjust(), n._layout(), n.positionateItems(), n._resizeMainContainer(), "slider" === n.options.layoutMode && n._updateSlider(), n.elems && o.Public.showCounter.call(n.obj, n.elems), o.Private.modernBrowser ? r.last().one(o.Private.animationend, function() {
          n.isAnimating = !1, t.isFunction(i) && i.call(n)
        }) : (n.isAnimating = !1, t.isFunction(i) && i.call(n))
      }) : (n.isAnimating = !1, void(t.isFunction(i) && i.call(n)))
    }
  }), t.fn.cubeportfolio = function(t, e, i) {
    return this.each(function() {
      if ("object" == typeof t || !t) return o.Public.init.call(this, t, i);
      if (o.Public[t]) return o.Public[t].call(this, e, i);
      throw new Error("Method " + t + " does not exist on jquery.cubeportfolio.js")
    })
  }, t.fn.cubeportfolio.options = {
    filters: "",
    loadMore: "",
    loadMoreAction: "click",
    layoutMode: "grid",
    drag: !0,
    auto: !1,
    autoTimeout: 5e3,
    autoPauseOnHover: !0,
    showNavigation: !0,
    showPagination: !0,
    rewindNav: !0,
    scrollByPage: !1,
    defaultFilter: "*",
    filterDeeplinking: !1,
    animationType: "fadeOut",
    gridAdjustment: "responsive",
    mediaQueries: !1,
    gapHorizontal: 10,
    gapVertical: 10,
    caption: "pushTop",
    displayType: "lazyLoading",
    displayTypeSpeed: 400,
    lightboxDelegate: ".cbp-lightbox",
    lightboxGallery: !0,
    lightboxTitleSrc: "data-title",
    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    singlePageDelegate: ".cbp-singlePage",
    singlePageDeeplinking: !0,
    singlePageStickyNavigation: !0,
    singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
    singlePageAnimation: "left",
    singlePageCallback: function() {},
    singlePageInlineDelegate: ".cbp-singlePageInline",
    singlePageInlinePosition: "top",
    singlePageInlineInFocus: !0,
    singlePageInlineCallback: function() {}
  }, o.Plugins = {}, t.fn.cubeportfolio.Constructor = o
}(jQuery, window, document),
  function(t) {
    "use strict";

    function e(e) {
      var i = this;
      i.parent = e, i.filters = t(e.options.filters), i.wrap = t(), i.registerFilter()
    }
    var i = t.fn.cubeportfolio.Constructor;
    e.prototype.registerFilter = function() {
      var e, i = this,
        n = i.parent;
      i.filters.each(function(o, r) {
        var s, a = t(r);
        a.hasClass("cbp-l-filters-dropdown") ? (s = a.find(".cbp-l-filters-dropdownWrap"), s.on({
          "mouseover.cbp": function() {
            s.addClass("cbp-l-filters-dropdownWrap-open")
          },
          "mouseleave.cbp": function() {
            s.removeClass("cbp-l-filters-dropdownWrap-open")
          }
        }), e = function(t) {
          s.find(".cbp-filter-item").removeClass("cbp-filter-item-active"), s.find(".cbp-l-filters-dropdownHeader").text(t.text()), t.addClass("cbp-filter-item-active"), s.trigger("mouseleave.cbp")
        }, i.wrap.add(s)) : e = function(t) {
          t.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active")
        }, e(a.find(".cbp-filter-item").filter('[data-filter="' + n.defaultFilter + '"]')), a.on("click.cbp", ".cbp-filter-item", function() {
          var i = t(this);
          i.hasClass("cbp-filter-item-active") || (n.isAnimating || e.call(null, i), n.$obj.cubeportfolio("filter", i.data("filter")))
        }), n.$obj.cubeportfolio("showCounter", a.find(".cbp-filter-item"), function() {
          var t, i = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href);
          null !== i && (t = a.find(".cbp-filter-item").filter('[data-filter="' + i[1] + '"]'), t.length && e.call(null, t))
        })
      })
    }, e.prototype.destroy = function() {
      var t = this;
      t.filters.off(".cbp"), t.wrap && t.wrap.off(".cbp")
    }, i.Plugins.Filters = function(t) {
      return "" === t.options.filters ? null : new e(t)
    }
  }(jQuery, window, document),
  function(t, e) {
    "use strict";

    function i(e) {
      var i = this;
      i.parent = e, i.loadMore = t(e.options.loadMore).find(".cbp-l-loadMore-link"), e.options.loadMoreAction.length && i[e.options.loadMoreAction]()
    }
    var n = t.fn.cubeportfolio.Constructor;
    i.prototype.click = function() {
      var e = this,
        i = 0;
      e.loadMore.on("click.cbp", function(n) {
        var o = t(this);
        n.preventDefault(), o.hasClass("cbp-l-loadMore-stop") || (o.addClass("cbp-l-loadMore-loading"), i++, t.ajax({
          url: e.loadMore.attr("href"),
          type: "GET",
          dataType: "HTML"
        }).done(function(n) {
          var r, s;
          r = t(n).filter(function() {
            return t(this).is("div.cbp-loadMore-block" + i)
          }), e.parent.$obj.cubeportfolio("appendItems", r.html(), function() {
            o.removeClass("cbp-l-loadMore-loading"), s = t(n).filter(function() {
              return t(this).is("div.cbp-loadMore-block" + (i + 1))
            }), 0 === s.length && o.addClass("cbp-l-loadMore-stop")
          })
        }).fail(function() {}))
      })
    }, i.prototype.auto = function() {
      var i = this;
      i.parent.$obj.on("initComplete.cbp", function() {
        Object.create({
          init: function() {
            var n = this;
            n.isActive = !1, n.numberOfClicks = 0, i.loadMore.addClass("cbp-l-loadMore-loading"), n.window = t(e), n.addEvents(), n.getNewItems()
          },
          addEvents: function() {
            var t, e = this;
            i.loadMore.on("click.cbp", function(t) {
              t.preventDefault()
            }), e.window.on("scroll.loadMoreObject", function() {
              clearTimeout(t), t = setTimeout(function() {
                i.parent.isAnimating || e.getNewItems()
              }, 80)
            }), i.parent.$obj.on("filterComplete.cbp", function() {
              e.getNewItems()
            })
          },
          getNewItems: function() {
            var e, n, o = this;
            o.isActive || i.loadMore.hasClass("cbp-l-loadMore-stop") || (e = i.loadMore.offset().top, n = o.window.scrollTop() + o.window.height(), e > n || (o.isActive = !0, o.numberOfClicks++, t.ajax({
              url: i.loadMore.attr("href"),
              type: "GET",
              dataType: "HTML",
              cache: !0
            }).done(function(e) {
              var n, r;
              n = t(e).filter(function() {
                return t(this).is("div.cbp-loadMore-block" + o.numberOfClicks)
              }), i.parent.$obj.cubeportfolio("appendItems", n.html(), function() {
                r = t(e).filter(function() {
                  return t(this).is("div.cbp-loadMore-block" + (o.numberOfClicks + 1))
                }), 0 === r.length ? (i.loadMore.addClass("cbp-l-loadMore-stop"), o.window.off("scroll.loadMoreObject"), i.parent.$obj.off("filterComplete.cbp")) : (o.isActive = !1, o.window.trigger("scroll.loadMoreObject"))
              })
            }).fail(function() {
              o.isActive = !1
            })))
          }
        }).init()
      })
    }, i.prototype.destroy = function() {
      var i = this;
      i.loadMore.off(".cbp"), t(e).off("scroll.loadMoreObject")
    }, n.Plugins.LoadMore = function(t) {
      return "" === t.options.loadMore ? null : new i(t)
    }
  }(jQuery, window, document),
  function(t, e, i) {
    "use strict";

    function n(t) {
      var e = this;
      e.parent = t, t.options.lightboxShowCounter === !1 && (t.options.lightboxCounter = ""), t.options.singlePageShowCounter === !1 && (t.options.singlePageCounter = ""), e.run()
    }
    var o = t.fn.cubeportfolio.Constructor,
      r = {
        init: function(e, n) {
          var o, r = this;
          if (r.cubeportfolio = e, r.type = n, r.isOpen = !1, r.options = r.cubeportfolio.options, "lightbox" === n && r.cubeportfolio._registerEvent("resizeWindow", function() {
              r.resizeImage()
            }), "singlePageInline" === n) return r.startInline = -1, r.height = 0, r._createMarkupSinglePageInline(), void r.cubeportfolio._registerEvent("resizeGrid", function() {
            r.isOpen && r.close()
          });
          if (r._createMarkup(), "singlePage" === n && (r.cubeportfolio._registerEvent("resizeWindow", function() {
              if (r.options.singlePageStickyNavigation) {
                var t = r.wrap[0].clientWidth;
                t > 0 && (r.navigationWrap.width(t), r.navigation.width(t))
              }
            }), r.options.singlePageDeeplinking)) {
            r.url = location.href, "#" === r.url.slice(-1) && (r.url = r.url.slice(0, -1));
            var s = r.url.split("#cbp="),
              a = s.shift();
            if (t.each(s, function(e, i) {
                return r.cubeportfolio.blocksOn.each(function(e, n) {
                  var s = t(n).find(r.options.singlePageDelegate + '[href="' + i + '"]');
                  return s.length ? (o = s, !1) : void 0
                }), !o && void 0
              }), o) {
              r.url = a;
              var l = o,
                c = l.attr("data-cbp-singlePage"),
                h = [];
              c ? h = l.closest(t(".cbp-item")).find('[data-cbp-singlePage="' + c + '"]') : r.cubeportfolio.blocksOn.each(function(e, i) {
                var n = t(i);
                n.not(".cbp-item-off") && n.find(r.options.singlePageDelegate).each(function(e, i) {
                  t(i).attr("data-cbp-singlePage") || h.push(i)
                })
              }), r.openSinglePage(h, o[0])
            } else if (s.length) {
              var u = i.createElement("a");
              u.setAttribute("href", s[0]), r.openSinglePage([u], u)
            }
          }
        },
        _createMarkup: function() {
          var e = this,
            n = "";
          "singlePage" === e.type && "left" !== e.options.singlePageAnimation && (n = " cbp-popup-singlePage-" + e.options.singlePageAnimation), e.wrap = t("<div/>", {
            class: "cbp-popup-wrap cbp-popup-" + e.type + n,
            "data-action": "lightbox" === e.type ? "close" : ""
          }).on("click.cbp", function(i) {
            if (!e.stopEvents) {
              var n = t(i.target).attr("data-action");
              e[n] && (e[n](), i.preventDefault())
            }
          }), e.content = t("<div/>", {
            class: "cbp-popup-content"
          }).appendTo(e.wrap), t("<div/>", {
            class: "cbp-popup-loadingBox"
          }).appendTo(e.wrap), "ie8" === o.Private.browser && (e.bg = t("<div/>", {
            class: "cbp-popup-ie8bg",
            "data-action": "lightbox" === e.type ? "close" : ""
          }).appendTo(e.wrap)), e.navigationWrap = t("<div/>", {
            class: "cbp-popup-navigation-wrap"
          }).appendTo(e.wrap), e.navigation = t("<div/>", {
            class: "cbp-popup-navigation"
          }).appendTo(e.navigationWrap), e.closeButton = t("<div/>", {
            class: "cbp-popup-close",
            title: "Close (Esc arrow key)",
            "data-action": "close"
          }).appendTo(e.navigation), e.nextButton = t("<div/>", {
            class: "cbp-popup-next",
            title: "Next (Right arrow key)",
            "data-action": "next"
          }).appendTo(e.navigation), e.prevButton = t("<div/>", {
            class: "cbp-popup-prev",
            title: "Previous (Left arrow key)",
            "data-action": "prev"
          }).appendTo(e.navigation), "singlePage" === e.type && (e.options.singlePageCounter && (e.counter = t(e.options.singlePageCounter).appendTo(e.navigation), e.counter.text("")), e.content.on("click.cbp", e.options.singlePageDelegate, function(t) {
            t.preventDefault();
            var i, n = e.dataArray.length,
              o = this.getAttribute("href");
            for (i = 0; n > i && e.dataArray[i].url !== o; i++);
            e.singlePageJumpTo(i - e.current)
          }), e.wrap.on("mousewheel.cbp DOMMouseScroll.cbp", function(t) {
            t.stopImmediatePropagation()
          })), t(i).on("keydown.cbp", function(t) {
            e.isOpen && (e.stopEvents || (37 === t.keyCode ? e.prev() : 39 === t.keyCode ? e.next() : 27 === t.keyCode && e.close()))
          })
        },
        _createMarkupSinglePageInline: function() {
          var e = this;
          e.wrap = t("<div/>", {
            class: "cbp-popup-singlePageInline"
          }).on("click.cbp", function(i) {
            if (!e.stopEvents) {
              var n = t(i.target).attr("data-action");
              n && e[n] && (e[n](), i.preventDefault())
            }
          }), e.content = t("<div/>", {
            class: "cbp-popup-content"
          }).appendTo(e.wrap), e.navigation = t("<div/>", {
            class: "cbp-popup-navigation"
          }).appendTo(e.wrap), e.closeButton = t("<div/>", {
            class: "cbp-popup-close",
            title: "Close (Esc arrow key)",
            "data-action": "close"
          }).appendTo(e.navigation)
        },
        destroy: function() {
          var e = this,
            n = t("body");
          t(i).off("keydown.cbp"), n.off("click.cbp", e.options.lightboxDelegate), n.off("click.cbp", e.options.singlePageDelegate), e.content.off("click.cbp", e.options.singlePageDelegate), e.cubeportfolio.$obj.off("click.cbp", e.options.singlePageInlineDelegate), e.cubeportfolio.$obj.off("click.cbp", e.options.lightboxDelegate), e.cubeportfolio.$obj.off("click.cbp", e.options.singlePageDelegate), e.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"), e.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"), e.wrap.remove()
        },
        openLightbox: function(n, o) {
          var r, s, a = this,
            l = 0,
            c = [];
          if (!a.isOpen) {
            if (a.isOpen = !0, a.stopEvents = !1, a.dataArray = [], a.current = null, r = o.getAttribute("href"), null === r) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
            t.each(n, function(e, i) {
              var n, o = i.getAttribute("href"),
                s = o,
                h = "isImage";
              if (-1 === t.inArray(o, c)) {
                if (r === o) a.current = l;
                else if (!a.options.lightboxGallery) return;
                /youtube/i.test(o) ? (n = o.substring(o.lastIndexOf("v=") + 2), /autoplay=/i.test(n) || (n += "&autoplay=1"), n = n.replace(/\?|&/, "?"), s = "//www.youtube.com/embed/" + n, h = "isYoutube") : /vimeo/i.test(o) ? (n = o.substring(o.lastIndexOf("/") + 1), /autoplay=/i.test(n) || (n += "&autoplay=1"), n = n.replace(/\?|&/, "?"), s = "//player.vimeo.com/video/" + n, h = "isVimeo") : /ted\.com/i.test(o) ? (s = "http://embed.ted.com/talks/" + o.substring(o.lastIndexOf("/") + 1) + ".html", h = "isTed") : /soundcloud\.com/i.test(o) ? (s = o, h = "isSoundCloud") : /(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(o) ? (s = o.split(-1 !== o.indexOf("|") ? "|" : "%7C"), h = "isSelfHostedVideo") : /\.mp3$/i.test(o) && (s = o, h = "isSelfHostedAudio"), a.dataArray.push({
                  src: s,
                  title: i.getAttribute(a.options.lightboxTitleSrc),
                  type: h
                }), l++
              }
              c.push(o)
            }), a.counterTotal = a.dataArray.length, 1 === a.counterTotal ? (a.nextButton.hide(), a.prevButton.hide(), a.dataActionImg = "") : (a.nextButton.show(), a.prevButton.show(), a.dataActionImg = 'data-action="next"'), a.wrap.appendTo(i.body), a.scrollTop = t(e).scrollTop(), a.originalStyle = t("html").attr("style"), t("html").css({
              overflow: "hidden",
              paddingRight: e.innerWidth - t(i).width()
            }), a.wrap.show(), s = a.dataArray[a.current], a[s.type](s)
          }
        },
        openSinglePage: function(n, r) {
          var s, a = this,
            l = 0,
            c = [];
          if (!a.isOpen) {
            if (a.cubeportfolio.singlePageInline && a.cubeportfolio.singlePageInline.isOpen && a.cubeportfolio.singlePageInline.close(), a.isOpen = !0, a.stopEvents = !1, a.dataArray = [], a.current = null, s = r.getAttribute("href"), null === s) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
            if (t.each(n, function(e, i) {
                var n = i.getAttribute("href"); - 1 === t.inArray(n, c) && (s === n && (a.current = l), a.dataArray.push({
                  url: n,
                  element: i
                }), l++), c.push(n)
              }), a.counterTotal = a.dataArray.length, 1 === a.counterTotal ? (a.nextButton.hide(), a.prevButton.hide()) : (a.nextButton.show(), a.prevButton.show()), a.wrap.appendTo(i.body), a.scrollTop = t(e).scrollTop(), t("html").css({
                overflow: "hidden",
                paddingRight: e.innerWidth - t(i).width()
              }), a.wrap.scrollTop(0), a.wrap.show(), a.finishOpen = 2, a.navigationMobile = t(), a.wrap.one(o.Private.transitionend, function() {
                var e;
                a.options.singlePageStickyNavigation && (a.wrap.addClass("cbp-popup-singlePage-sticky"), e = a.wrap[0].clientWidth, a.navigationWrap.width(e), ("android" === o.Private.browser || "ios" === o.Private.browser) && (a.navigationMobile = t("<div/>", {
                  class: "cbp-popup-singlePage cbp-popup-singlePage-sticky",
                  id: a.wrap.attr("id")
                }).on("click.cbp", function(e) {
                  if (!a.stopEvents) {
                    var i = t(e.target).attr("data-action");
                    a[i] && (a[i](), e.preventDefault())
                  }
                }), a.navigationMobile.appendTo(i.body).append(a.navigationWrap))), a.finishOpen--, a.finishOpen <= 0 && a.updateSinglePageIsOpen.call(a)
              }), "ie8" === o.Private.browser || "ie9" === o.Private.browser) {
              if (a.options.singlePageStickyNavigation) {
                var h = a.wrap[0].clientWidth;
                a.navigationWrap.width(h), setTimeout(function() {
                  a.wrap.addClass("cbp-popup-singlePage-sticky")
                }, 1e3)
              }
              a.finishOpen--
            }
            a.wrap.addClass("cbp-popup-loading"), a.wrap.offset(), a.wrap.addClass("cbp-popup-singlePage-open"), a.options.singlePageDeeplinking && (a.url = a.url.split("#cbp=")[0], location.href = a.url + "#cbp=" + a.dataArray[a.current].url), t.isFunction(a.options.singlePageCallback) && a.options.singlePageCallback.call(a, a.dataArray[a.current].url, a.dataArray[a.current].element)
          }
        },
        openSinglePageInline: function(i, n, o) {
          var r, s, a, l, c = this;
          if (o = o || !1, c.fromOpen = o, c.storeBlocks = i, c.storeCurrentBlock = n, c.isOpen) return s = t(n).closest(".cbp-item").index(), void(c.dataArray[c.current].url !== n.getAttribute("href") || c.current !== s ? c.cubeportfolio.singlePageInline.close("open", {
            blocks: i,
            currentBlock: n,
            fromOpen: !0
          }) : c.close());
          if (c.isOpen = !0, c.stopEvents = !1, c.dataArray = [], c.current = null, r = n.getAttribute("href"), null === r) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
          if (a = t(n).closest(".cbp-item")[0], i.each(function(t, e) {
              a === e && (c.current = t)
            }), c.dataArray[c.current] = {
              url: r,
              element: n
            }, l = t(c.dataArray[c.current].element).parents(".cbp-item").addClass("cbp-singlePageInline-active"), c.counterTotal = i.length, c.wrap.insertBefore(c.cubeportfolio.wrapper), "top" === c.options.singlePageInlinePosition ? (c.startInline = 0, c.top = 0, c.firstRow = !0, c.lastRow = !1) : "bottom" === c.options.singlePageInlinePosition ? (c.startInline = c.counterTotal, c.top = c.cubeportfolio.height, c.firstRow = !1, c.lastRow = !0) : "above" === c.options.singlePageInlinePosition ? (c.startInline = c.cubeportfolio.cols * Math.floor(c.current / c.cubeportfolio.cols), c.top = t(i[c.current]).data("cbp").top, 0 === c.startInline ? c.firstRow = !0 : (c.top -= c.options.gapHorizontal, c.firstRow = !1), c.lastRow = !1) : (c.top = t(i[c.current]).data("cbp").top + t(i[c.current]).data("cbp").height, c.startInline = Math.min(c.cubeportfolio.cols * (Math.floor(c.current / c.cubeportfolio.cols) + 1), c.counterTotal), c.firstRow = !1, c.lastRow = c.startInline === c.counterTotal), c.wrap[0].style.height = c.wrap.outerHeight(!0) + "px", c.deferredInline = t.Deferred(), c.options.singlePageInlineInFocus) {
            c.scrollTop = t(e).scrollTop();
            var h = c.cubeportfolio.$obj.offset().top + c.top - 100;
            c.scrollTop !== h ? t("html,body").animate({
              scrollTop: h
            }, 350).promise().then(function() {
              c._resizeSinglePageInline(), c.deferredInline.resolve()
            }) : (c._resizeSinglePageInline(), c.deferredInline.resolve())
          } else c._resizeSinglePageInline(), c.deferredInline.resolve();
          c.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-open"), c.wrap.css({
            top: c.top
          }), t.isFunction(c.options.singlePageInlineCallback) && c.options.singlePageInlineCallback.call(c, c.dataArray[c.current].url, c.dataArray[c.current].element)
        },
        _resizeSinglePageInline: function() {
          var t = this;
          t.height = t.firstRow || t.lastRow ? t.wrap.outerHeight(!0) : t.wrap.outerHeight(!0) - t.options.gapHorizontal, t.storeBlocks.each(function(e, i) {
            e < t.startInline ? o.Private.modernBrowser ? i.style[o.Private.transform] = "" : i.style.marginTop = "" : o.Private.modernBrowser ? i.style[o.Private.transform] = "translate3d(0px, " + t.height + "px, 0)" : i.style.marginTop = t.height + "px"
          }), t.cubeportfolio.obj.style.height = t.cubeportfolio.height + t.height + "px"
        },
        _revertResizeSinglePageInline: function() {
          var e = this;
          e.deferredInline = t.Deferred(), e.storeBlocks.each(function(t, e) {
            o.Private.modernBrowser ? e.style[o.Private.transform] = "" : e.style.marginTop = ""
          }), e.cubeportfolio.obj.style.height = e.cubeportfolio.height + "px"
        },
        appendScriptsToWrap: function(t) {
          var e = this,
            n = 0,
            o = function(r) {
              var s = i.createElement("script"),
                a = r.src;
              s.type = "text/javascript", s.readyState ? s.onreadystatechange = function() {
                ("loaded" == s.readyState || "complete" == s.readyState) && (s.onreadystatechange = null, n++, t[n] && o(t[n]))
              } : s.onload = function() {
                n++, t[n] && o(t[n])
              }, a ? s.src = a : s.text = r.text, e.content[0].appendChild(s)
            };
          o(t[0])
        },
        updateSinglePage: function(e, i, n) {
          var o, r = this;
          r.content.addClass("cbp-popup-content").removeClass("cbp-popup-content-basic"), n === !1 && r.content.removeClass("cbp-popup-content").addClass("cbp-popup-content-basic"), r.counter && (o = t(r._getCounterMarkup(r.options.singlePageCounter, r.current + 1, r.counterTotal)), r.counter.text(o.text())), r.content.html(e), i && r.appendScriptsToWrap(i), r.cubeportfolio.$obj.trigger("updateSinglePageStart.cbp"), r.finishOpen--, r.finishOpen <= 0 && r.updateSinglePageIsOpen.call(r)
        },
        updateSinglePageIsOpen: function() {
          var e, i = this;
          i.wrap.addClass("cbp-popup-ready"), i.wrap.removeClass("cbp-popup-loading"), e = i.content.find(".cbp-slider"), e ? (e.find(".cbp-slider-item").addClass("cbp-item"), i.slider = e.cubeportfolio({
            layoutMode: "slider",
            mediaQueries: [{
              width: 1,
              cols: 1
            }],
            gapHorizontal: 0,
            gapVertical: 0,
            caption: "",
            coverRatio: ""
          })) : i.slider = null, ("android" === o.Private.browser || "ios" === o.Private.browser) && t("html").css({
            position: "fixed"
          }), i.cubeportfolio.$obj.trigger("updateSinglePageComplete.cbp")
        },
        updateSinglePageInline: function(t, e) {
          var i = this;
          i.content.html(t), e && i.appendScriptsToWrap(e), i.cubeportfolio.$obj.trigger("updateSinglePageInlineStart.cbp"), i.singlePageInlineIsOpen.call(i)
        },
        singlePageInlineIsOpen: function() {
          function t() {
            e.wrap.addClass("cbp-popup-singlePageInline-ready"), e.wrap[0].style.height = "", e._resizeSinglePageInline(), e.cubeportfolio.$obj.trigger("updateSinglePageInlineComplete.cbp")
          }
          var e = this;
          e.cubeportfolio._load(e.wrap, function() {
            var i = e.content.find(".cbp-slider");
            i.length ? (i.find(".cbp-slider-item").addClass("cbp-item"), i.one("initComplete.cbp", function() {
              e.deferredInline.done(t)
            }), i.on("pluginResize.cbp", function() {
              e.deferredInline.done(t)
            }), e.slider = i.cubeportfolio({
              layoutMode: "slider",
              displayType: "default",
              mediaQueries: [{
                width: 1,
                cols: 1
              }],
              gapHorizontal: 0,
              gapVertical: 0,
              caption: "",
              coverRatio: ""
            })) : (e.slider = null, e.deferredInline.done(t))
          })
        },
        isImage: function(e) {
          var i = this,
            n = new Image;
          i.tooggleLoading(!0), t('<img src="' + e.src + '">').is("img:uncached") ? (t(n).on("load.cbp error.cbp", function() {
            i.updateImagesMarkup(e.src, e.title, i._getCounterMarkup(i.options.lightboxCounter, i.current + 1, i.counterTotal)), i.tooggleLoading(!1)
          }), n.src = e.src) : (i.updateImagesMarkup(e.src, e.title, i._getCounterMarkup(i.options.lightboxCounter, i.current + 1, i.counterTotal)), i.tooggleLoading(!1))
        },
        isVimeo: function(t) {
          var e = this;
          e.updateVideoMarkup(t.src, t.title, e._getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal))
        },
        isYoutube: function(t) {
          var e = this;
          e.updateVideoMarkup(t.src, t.title, e._getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal))
        },
        isTed: function(t) {
          var e = this;
          e.updateVideoMarkup(t.src, t.title, e._getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal))
        },
        isSoundCloud: function(t) {
          var e = this;
          e.updateVideoMarkup(t.src, t.title, e._getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal))
        },
        isSelfHostedVideo: function(t) {
          var e = this;
          e.updateSelfHostedVideo(t.src, t.title, e._getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal))
        },
        isSelfHostedAudio: function(t) {
          var e = this;
          e.updateSelfHostedAudio(t.src, t.title, e._getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal))
        },
        _getCounterMarkup: function(t, e, i) {
          if (!t.length) return "";
          var n = {
            current: e,
            total: i
          };
          return t.replace(/\{\{current}}|\{\{total}}/gi, function(t) {
            return n[t.slice(2, -2)]
          })
        },
        updateSelfHostedVideo: function(t, e, i) {
          var n, o = this;
          o.wrap.addClass("cbp-popup-lightbox-isIframe");
          var r = '<div class="cbp-popup-lightbox-iframe"><video controls="controls" height="auto" style="width: 100%">';
          for (n = 0; n < t.length; n++) /(\.mp4)/i.test(t[n]) ? r += '<source src="' + t[n] + '" type="video/mp4">' : /(\.ogg)|(\.ogv)/i.test(t[n]) ? r += '<source src="' + t[n] + '" type="video/ogg">' : /(\.webm)/i.test(t[n]) && (r += '<source src="' + t[n] + '" type="video/webm">');
          r += 'Your browser does not support the video tag.</video><div class="cbp-popup-lightbox-bottom">' + (e ? '<div class="cbp-popup-lightbox-title">' + e + "</div>" : "") + i + "</div></div>", o.content.html(r), o.wrap.addClass("cbp-popup-ready"), o.preloadNearbyImages()
        },
        updateSelfHostedAudio: function(t, e, i) {
          var n = this;
          n.wrap.addClass("cbp-popup-lightbox-isIframe");
          var o = '<div class="cbp-popup-lightbox-iframe"><audio controls="controls" height="auto" style="width: 100%"><source src="' + t + '" type="audio/mpeg">Your browser does not support the audio tag.</audio><div class="cbp-popup-lightbox-bottom">' + (e ? '<div class="cbp-popup-lightbox-title">' + e + "</div>" : "") + i + "</div></div>";
          n.content.html(o), n.wrap.addClass("cbp-popup-ready"), n.preloadNearbyImages()
        },
        updateVideoMarkup: function(t, e, i) {
          var n = this;
          n.wrap.addClass("cbp-popup-lightbox-isIframe");
          var o = '<div class="cbp-popup-lightbox-iframe"><iframe src="' + t + '" frameborder="0" allowfullscreen scrolling="no"></iframe><div class="cbp-popup-lightbox-bottom">' + (e ? '<div class="cbp-popup-lightbox-title">' + e + "</div>" : "") + i + "</div></div>";
          n.content.html(o), n.wrap.addClass("cbp-popup-ready"), n.preloadNearbyImages()
        },
        updateImagesMarkup: function(t, e, i) {
          var n = this;
          n.wrap.removeClass("cbp-popup-lightbox-isIframe");
          var o = '<div class="cbp-popup-lightbox-figure"><img src="' + t + '" class="cbp-popup-lightbox-img" ' + n.dataActionImg + ' /><div class="cbp-popup-lightbox-bottom">' + (e ? '<div class="cbp-popup-lightbox-title">' + e + "</div>" : "") + i + "</div></div>";
          n.content.html(o), n.wrap.addClass("cbp-popup-ready"), n.resizeImage(), n.preloadNearbyImages()
        },
        next: function() {
          var t = this;
          t[t.type + "JumpTo"](1)
        },
        prev: function() {
          var t = this;
          t[t.type + "JumpTo"](-1)
        },
        lightboxJumpTo: function(t) {
          var e, i = this;
          i.current = i.getIndex(i.current + t), e = i.dataArray[i.current], i[e.type](e)
        },
        singlePageJumpTo: function(e) {
          var i = this;
          i.current = i.getIndex(i.current + e), t.isFunction(i.options.singlePageCallback) && (i.resetWrap(), i.wrap.scrollTop(0), i.wrap.addClass("cbp-popup-loading"), i.options.singlePageCallback.call(i, i.dataArray[i.current].url, i.dataArray[i.current].element), i.options.singlePageDeeplinking && (location.href = i.url + "#cbp=" + i.dataArray[i.current].url))
        },
        resetWrap: function() {
          var t = this;
          "singlePage" === t.type && t.options.singlePageDeeplinking && (location.href = t.url + "#")
        },
        getIndex: function(t) {
          var e = this;
          return t %= e.counterTotal, 0 > t && (t = e.counterTotal + t), t
        },
        close: function(i, n) {
          function r() {
            a.content.html(""), a.wrap.detach(), a.cubeportfolio.$obj.removeClass("cbp-popup-singlePageInline-open cbp-popup-singlePageInline-close"), "promise" === i && t.isFunction(n.callback) && n.callback.call(a.cubeportfolio)
          }

          function s() {
            a.options.singlePageInlineInFocus && "promise" !== i ? t("html,body").animate({
              scrollTop: a.scrollTop
            }, 350).promise().then(function() {
              r()
            }) : r()
          }
          var a = this;
          a.isOpen = !1, "singlePageInline" === a.type ? "open" === i ? (a.wrap.removeClass("cbp-popup-singlePageInline-ready"), t(a.dataArray[a.current].element).closest(".cbp-item").removeClass("cbp-singlePageInline-active"), a.openSinglePageInline(n.blocks, n.currentBlock, n.fromOpen)) : (a.height = 0, a._revertResizeSinglePageInline(), a.wrap.removeClass("cbp-popup-singlePageInline-ready"), a.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-close"), a.startInline = -1, a.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"), o.Private.modernBrowser ? a.wrap.one(o.Private.transitionend, function() {
            s()
          }) : s()) : "singlePage" === a.type ? (a.resetWrap(), a.wrap.removeClass("cbp-popup-ready"), ("android" === o.Private.browser || "ios" === o.Private.browser) && (t("html").css({
            position: ""
          }), a.navigationWrap.appendTo(a.wrap), a.navigationMobile.remove()), t(e).scrollTop(a.scrollTop), setTimeout(function() {
            a.stopScroll = !0, a.navigationWrap.css({
              top: a.wrap.scrollTop()
            }), a.wrap.removeClass("cbp-popup-singlePage-open cbp-popup-singlePage-sticky"), ("ie8" === o.Private.browser || "ie9" === o.Private.browser) && (a.content.html(""), a.wrap.detach(), t("html").css({
              overflow: "",
              paddingRight: "",
              position: ""
            }), a.navigationWrap.removeAttr("style"))
          }, 0), a.wrap.one(o.Private.transitionend, function() {
            a.content.html(""), a.wrap.detach(), t("html").css({
              overflow: "",
              paddingRight: "",
              position: ""
            }), a.navigationWrap.removeAttr("style")
          })) : (a.originalStyle ? t("html").attr("style", a.originalStyle) : t("html").css({
            overflow: "",
            paddingRight: ""
          }), t(e).scrollTop(a.scrollTop), a.content.html(""), a.wrap.detach())
        },
        tooggleLoading: function(t) {
          var e = this;
          e.stopEvents = t, e.wrap[t ? "addClass" : "removeClass"]("cbp-popup-loading")
        },
        resizeImage: function() {
          if (this.isOpen) {
            var i = t(e).height(),
              n = this.content.find("img"),
              o = parseInt(n.css("margin-top"), 10) + parseInt(n.css("margin-bottom"), 10);
            n.css("max-height", i - o + "px")
          }
        },
        preloadNearbyImages: function() {
          var e, i, n = [],
            o = this;
          n.push(o.getIndex(o.current + 1)), n.push(o.getIndex(o.current + 2)), n.push(o.getIndex(o.current + 3)), n.push(o.getIndex(o.current - 1)), n.push(o.getIndex(o.current - 2)), n.push(o.getIndex(o.current - 3));
          for (var r = n.length - 1; r >= 0; r--) "isImage" === o.dataArray[n[r]].type && (i = o.dataArray[n[r]].src, e = new Image, t('<img src="' + i + '">').is("img:uncached") && (e.src = i))
        }
      },
      s = !1,
      a = !1;
    n.prototype.run = function() {
      var e = this,
        n = e.parent,
        o = t(i.body);
      n.lightbox = null, n.options.lightboxDelegate && !s && (s = !0, n.lightbox = Object.create(r), n.lightbox.init(n, "lightbox"), o.on("click.cbp", n.options.lightboxDelegate, function(i) {
        i.preventDefault();
        var o = t(this),
          r = o.attr("data-cbp-lightbox"),
          s = e.detectScope(o),
          a = s.data("cubeportfolio"),
          l = [];
        a ? a.blocksOn.each(function(e, i) {
          var o = t(i);
          o.not(".cbp-item-off") && o.find(n.options.lightboxDelegate).each(function(e, i) {
            r ? t(i).attr("data-cbp-lightbox") === r && l.push(i) : l.push(i)
          })
        }) : l = s.find(r ? n.options.lightboxDelegate + "[data-cbp-lightbox=" + r + "]" : n.options.lightboxDelegate), n.lightbox.openLightbox(l, o[0])
      })), n.singlePage = null, n.options.singlePageDelegate && !a && (a = !0, n.singlePage = Object.create(r), n.singlePage.init(n, "singlePage"), o.on("click.cbp", n.options.singlePageDelegate, function(i) {
        i.preventDefault();
        var o = t(this),
          r = o.attr("data-cbp-singlePage"),
          s = e.detectScope(o),
          a = s.data("cubeportfolio"),
          l = [];
        a ? a.blocksOn.each(function(e, i) {
          var o = t(i);
          o.not(".cbp-item-off") && o.find(n.options.singlePageDelegate).each(function(e, i) {
            r ? t(i).attr("data-cbp-singlePage") === r && l.push(i) : l.push(i)
          })
        }) : l = s.find(r ? n.options.singlePageDelegate + "[data-cbp-singlePage=" + r + "]" : n.options.singlePageDelegate), n.singlePage.openSinglePage(l, o[0])
      })), n.singlePageInline = null, n.options.singlePageDelegate && (n.singlePageInline = Object.create(r), n.singlePageInline.init(n, "singlePageInline"), n.$obj.on("click.cbp", n.options.singlePageInlineDelegate, function(t) {
        t.preventDefault(), n.singlePageInline.openSinglePageInline(n.blocksOn, this)
      }))
    }, n.prototype.detectScope = function(e) {
      var n, o, r;
      return n = e.closest(".cbp-popup-singlePageInline"), n.length ? (r = e.closest(".cbp", n[0]), r.length ? r : n) : (o = e.closest(".cbp-popup-singlePage"), o.length ? (r = e.closest(".cbp", o[0]), r.length ? r : o) : (r = e.closest(".cbp"), r.length ? r : t(i.body)))
    }, n.prototype.destroy = function() {
      var e = this.parent;
      t(i.body).off("click.cbp"), s = !1, a = !1, e.lightbox && e.lightbox.destroy(), e.singlePage && e.singlePage.destroy(), e.singlePageInline && e.singlePageInline.destroy()
    }, o.Plugins.PopUp = function(t) {
      return new n(t)
    }
  }(jQuery, window, document),
  function(t, e, i, n) {
    "use strict";
    var o = t.fn.cubeportfolio.Constructor;
    o.Private = {
      checkInstance: function(e) {
        var i = t.data(this, "cubeportfolio");
        if (!i) throw new Error("cubeportfolio is not initialized. Initialize it before calling " + e + " method!");
        return i
      },
      browserInfo: function() {
        var t, i, r, s = o.Private,
          a = navigator.appVersion;
        s.browser = -1 !== a.indexOf("MSIE 8.") ? "ie8" : -1 !== a.indexOf("MSIE 9.") ? "ie9" : -1 !== a.indexOf("MSIE 10.") ? "ie10" : e.ActiveXObject || "ActiveXObject" in e ? "ie11" : /android/gi.test(a) ? "android" : /iphone|ipad|ipod/gi.test(a) ? "ios" : /chrome/gi.test(a) ? "chrome" : "", r = s.styleSupport("perspective"), typeof r !== n && (t = s.styleSupport("transition"), s.transitionend = {
          WebkitTransition: "webkitTransitionEnd",
          transition: "transitionend"
        }[t], i = s.styleSupport("animation"), s.animationend = {
          WebkitAnimation: "webkitAnimationEnd",
          animation: "animationend"
        }[i], s.animationDuration = {
          WebkitAnimation: "webkitAnimationDuration",
          animation: "animationDuration"
        }[i], s.animationDelay = {
          WebkitAnimation: "webkitAnimationDelay",
          animation: "animationDelay"
        }[i], s.transform = s.styleSupport("transform"), t && i && s.transform && (s.modernBrowser = !0))
      },
      styleSupport: function(t) {
        var e, n = "Webkit" + t.charAt(0).toUpperCase() + t.slice(1),
          o = i.createElement("div");
        return t in o.style ? e = t : n in o.style && (e = n), o = null, e
      }
    }, o.Private.browserInfo()
  }(jQuery, window, document),
  function(t, e, i) {
    "use strict";
    var n = t.fn.cubeportfolio.Constructor;
    n.Public = {
      init: function(t, e) {
        new n(this, t, e)
      },
      destroy: function(o) {
        var r = n.Private.checkInstance.call(this, "destroy");
        r._triggerEvent("beforeDestroy"), t.removeData(this, "cubeportfolio"), r.blocks.each(function() {
          t.removeData(this, "cbp-wxh")
        }), r.$obj.removeClass("cbp-ready cbp-addItemscbp-cols-" + r.cols).removeAttr("style"), r.$ul.removeClass("cbp-wrapper"), t(e).off("resize.cbp"), r.$obj.off(".cbp"), t(i).off(".cbp"), r.blocks.removeClass("cbp-item-off").removeAttr("style"), r.blocks.find(".cbp-item-wrapper").children().unwrap(), r.options.caption && r._captionDestroy(), r._destroySlider(), r.$ul.unwrap(), r.addedWrapp && r.blocks.unwrap(), t.each(r._plugins, function(t, e) {
          "function" == typeof e.destroy && e.destroy()
        }), t.isFunction(o) && o.call(r), r._triggerEvent("afterDestroy")
      },
      filter: function(e, i) {
        var o, r = n.Private.checkInstance.call(this, "filter");
        t.isFunction(i) && r._registerEvent("filterFinish", i, !0), r.isAnimating || r.defaultFilter === e || (r.isAnimating = !0, r.defaultFilter = e, r.singlePageInline && r.singlePageInline.isOpen ? r.singlePageInline.close("promise", {
          callback: function() {
            r._filter(e)
          }
        }) : r._filter(e), r.options.filterDeeplinking && (o = location.href.replace(/#cbpf=(.*?)([#|?&]|$)/gi, ""), location.href = o + "#cbpf=" + e, r.singlePage && r.singlePage.url && (r.singlePage.url = location.href)))
      },
      showCounter: function(e, i) {
        var o = n.Private.checkInstance.call(this, "showCounter");
        o.elems = e, t.each(e, function() {
          var e, i = t(this),
            n = i.data("filter");
          e = o.blocks.filter(n).length, i.find(".cbp-filter-counter").text(e)
        }), t.isFunction(i) && i.call(o)
      },
      appendItems: function(t, e) {
        var i = n.Private.checkInstance.call(this, "appendItems");
        i.isAnimating || (i.isAnimating = !0, i.singlePageInline && i.singlePageInline.isOpen ? i.singlePageInline.close("promise", {
          callback: function() {
            i._addItems(t, e)
          }
        }) : i._addItems(t, e))
      }
    }
  }(jQuery, window, document), "function" != typeof Object.create && (Object.create = function(t) {
  function e() {}
  return e.prototype = t, new e
}), jQuery.expr[":"].uncached = function(t) {
  if (!jQuery(t).is('img[src][src!=""]')) return !1;
  var e = new Image;
  return e.src = t.src, !e.complete || void 0 !== e.naturalWidth && 0 === e.naturalWidth
},
  function() {
    for (var t = 0, e = ["moz", "webkit"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
      var i = (new Date).getTime(),
        n = Math.max(0, 16 - (i - t)),
        o = window.setTimeout(function() {
          e(i + n)
        }, n);
      return t = i + n, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
      clearTimeout(t)
    })
  }(),
  function(t) {
    "use strict";

    function e(t) {
      var e = this;
      e.parent = t, t.filterLayout = e.filterLayout
    }
    var i = t.fn.cubeportfolio.Constructor;
    e.prototype.filterLayout = function(e) {
      function n() {
        o.blocks.removeClass("cbp-item-on2off cbp-item-off2on cbp-item-on2on").each(function(e, n) {
          var o = t(n).data("cbp");
          o.left = o.leftNew, o.top = o.topNew, n.style.left = o.left + "px", n.style.top = o.top + "px", n.style[i.Private.transform] = ""
        }), o.blocksOff.addClass("cbp-item-off"), o.$obj.removeClass("cbp-animation-" + o.options.animationType), o.filterFinish()
      }
      var o = this;
      o.$obj.addClass("cbp-animation-" + o.options.animationType), o.blocksOnInitial.filter(e).addClass("cbp-item-on2on").each(function(e, n) {
        var o = t(n).data("cbp");
        n.style[i.Private.transform] = "translate3d(" + (o.leftNew - o.left) + "px, " + (o.topNew - o.top) + "px, 0)"
      }), o.blocksOn2Off = o.blocksOnInitial.not(e).addClass("cbp-item-on2off"), o.blocksOff2On = o.blocksOn.filter(".cbp-item-off").removeClass("cbp-item-off").addClass("cbp-item-off2on").each(function(e, i) {
        var n = t(i).data("cbp");
        n.left = n.leftNew, n.top = n.topNew, i.style.left = n.left + "px", i.style.top = n.top + "px"
      }), o.blocksOn2Off.length ? o.blocksOn2Off.last().data("cbp").wrapper.one(i.Private.animationend, n) : o.blocksOff2On.length ? o.blocksOff2On.last().data("cbp").wrapper.one(i.Private.animationend, n) : n(), o._resizeMainContainer()
    }, e.prototype.destroy = function() {
      var t = this.parent;
      t.$obj.removeClass("cbp-animation-" + t.options.animationType)
    }, i.Plugins.AnimationClassic = function(n) {
      return !i.Private.modernBrowser || t.inArray(n.options.animationType, ["boxShadow", "fadeOut", "flipBottom", "flipOut", "quicksand", "scaleSides", "skew"]) < 0 ? null : new e(n)
    }
  }(jQuery, window, document),
  function(t) {
    "use strict";

    function e(t) {
      var e = this;
      e.parent = t, t.filterLayout = e.filterLayout
    }
    var i = t.fn.cubeportfolio.Constructor;
    e.prototype.filterLayout = function() {
      function e() {
        n.wrapper[0].removeChild(o), "sequentially" === n.options.animationType && n.blocksOn.each(function(e, n) {
          t(n).data("cbp").wrapper[0].style[i.Private.animationDelay] = ""
        }), n.$obj.removeClass("cbp-animation-" + n.options.animationType), n.filterFinish()
      }
      var n = this,
        o = n.$ul[0].cloneNode(!0);
      o.setAttribute("class", "cbp-wrapper-helper"), n.wrapper[0].insertBefore(o, n.$ul[0]), requestAnimationFrame(function() {
        n.$obj.addClass("cbp-animation-" + n.options.animationType), n.blocksOff.addClass("cbp-item-off"), n.blocksOn.removeClass("cbp-item-off").each(function(e, o) {
          var r = t(o).data("cbp");
          r.left = r.leftNew, r.top = r.topNew, o.style.left = r.left + "px", o.style.top = r.top + "px", "sequentially" === n.options.animationType && (r.wrapper[0].style[i.Private.animationDelay] = 60 * e + "ms")
        }), n.blocksOn.length ? n.blocksOn.last().data("cbp").wrapper.one(i.Private.animationend, e) : n.blocksOnInitial.length ? n.blocksOnInitial.last().data("cbp").wrapper.one(i.Private.animationend, e) : e(), n._resizeMainContainer()
      })
    }, e.prototype.destroy = function() {
      var t = this.parent;
      t.$obj.removeClass("cbp-animation-" + t.options.animationType)
    }, i.Plugins.AnimationClone = function(n) {
      return !i.Private.modernBrowser || t.inArray(n.options.animationType, ["fadeOutTop", "slideLeft", "sequentially"]) < 0 ? null : new e(n)
    }
  }(jQuery, window, document),
  function(t) {
    "use strict";

    function e(t) {
      var e = this;
      e.parent = t, t.filterLayout = e.filterLayout
    }
    var i = t.fn.cubeportfolio.Constructor;
    e.prototype.filterLayout = function() {
      function e() {
        o.wrapper[0].removeChild(n), o.$obj.removeClass("cbp-animation-" + o.options.animationType), o.blocks.each(function(e, n) {
          t(n).data("cbp").wrapper[0].style[i.Private.animationDelay] = ""
        }), o.filterFinish()
      }
      var n, o = this;
      n = o.$ul[0].cloneNode(!0), n.setAttribute("class", "cbp-wrapper-helper"), o.wrapper[0].insertBefore(n, o.$ul[0]), t(n).find(".cbp-item").not(".cbp-item-off").children(".cbp-item-wrapper").each(function(t, e) {
        e.style[i.Private.animationDelay] = 50 * t + "ms"
      }), requestAnimationFrame(function() {
        o.$obj.addClass("cbp-animation-" + o.options.animationType), o.blocksOff.addClass("cbp-item-off"), o.blocksOn.removeClass("cbp-item-off").each(function(e, n) {
          var o = t(n).data("cbp");
          o.left = o.leftNew, o.top = o.topNew, n.style.left = o.left + "px", n.style.top = o.top + "px", o.wrapper[0].style[i.Private.animationDelay] = 50 * e + "ms"
        }), o.blocksOn.length ? o.blocksOn.last().data("cbp").wrapper.one(i.Private.animationend, e) : o.blocksOnInitial.length ? o.blocksOnInitial.last().data("cbp").wrapper.one(i.Private.animationend, e) : e(), o._resizeMainContainer()
      })
    }, e.prototype.destroy = function() {
      var t = this.parent;
      t.$obj.removeClass("cbp-animation-" + t.options.animationType)
    }, i.Plugins.AnimationCloneDelay = function(n) {
      return !i.Private.modernBrowser || t.inArray(n.options.animationType, ["3dflip", "flipOutDelay", "foldLeft", "frontRow", "rotateRoom", "rotateSides", "scaleDown", "slideDelay", "unfold"]) < 0 ? null : new e(n)
    }
  }(jQuery, window, document),
  function(t) {
    "use strict";

    function e(t) {
      var e = this;
      e.parent = t, t.filterLayout = e.filterLayout
    }
    var i = t.fn.cubeportfolio.Constructor;
    e.prototype.filterLayout = function() {
      function e() {
        n.wrapper[0].removeChild(o), n.$obj.removeClass("cbp-animation-" + n.options.animationType), n.filterFinish()
      }
      var n = this,
        o = n.$ul[0].cloneNode(!0);
      o.setAttribute("class", "cbp-wrapper-helper"), n.wrapper[0].insertBefore(o, n.$ul[0]), requestAnimationFrame(function() {
        n.$obj.addClass("cbp-animation-" + n.options.animationType), n.blocksOff.addClass("cbp-item-off"), n.blocksOn.removeClass("cbp-item-off").each(function(e, i) {
          var n = t(i).data("cbp");
          n.left = n.leftNew, n.top = n.topNew, i.style.left = n.left + "px", i.style.top = n.top + "px"
        }), n.blocksOn.length ? n.$ul.one(i.Private.animationend, e) : n.blocksOnInitial.length ? t(o).one(i.Private.animationend, e) : e(), n._resizeMainContainer()
      })
    }, e.prototype.destroy = function() {
      var t = this.parent;
      t.$obj.removeClass("cbp-animation-" + t.options.animationType)
    }, i.Plugins.AnimationWrapper = function(n) {
      return !i.Private.modernBrowser || t.inArray(n.options.animationType, ["bounceBottom", "bounceLeft", "bounceTop", "moveLeft"]) < 0 ? null : new e(n)
    }
  }(jQuery, window, document),
  function(t) {
    "use strict";

    function e(e) {
      var n = this;
      n.parent = e, e._registerEvent("initFinish", function() {
        e.$obj.on("click.cbp", ".cbp-caption-defaultWrap", function(n) {
          if (n.preventDefault(), !e.isAnimating) {
            e.isAnimating = !0;
            var o = t(this),
              r = o.next(),
              s = o.parent(),
              a = {
                position: "relative",
                height: r.outerHeight(!0)
              },
              l = {
                position: "relative",
                height: 0
              };
            if (e.$obj.addClass("cbp-caption-expand-active"), s.hasClass("cbp-caption-expand-open")) {
              var c = l;
              l = a, a = c, s.removeClass("cbp-caption-expand-open")
            }
            r.css(a), e._gridAdjust(), e._layout(), e.positionateItems(), e._resizeMainContainer(), r.css(l), requestAnimationFrame(function() {
              s.addClass("cbp-caption-expand-open"), r.one(i.Private.transitionend, function() {
                e.isAnimating = !1, e.$obj.removeClass("cbp-caption-expand-active"), 0 === a.height && (s.removeClass("cbp-caption-expand-open"), r.attr("style", ""))
              }), r.css(a), "slider" === e.options.layoutMode && e._updateSlider(), e._triggerEvent("resizeGrid")
            })
          }
        })
      }, !0)
    }
    var i = t.fn.cubeportfolio.Constructor;
    e.prototype.destroy = function() {
      this.parent.$obj.find(".cbp-caption-defaultWrap").off("click.cbp").parent().removeClass("cbp-caption-expand-active")
    }, i.Plugins.CaptionExpand = function(t) {
      return "expand" !== t.options.caption ? null : new e(t)
    }
  }(jQuery, window, document),
  function(t) {
    "use strict";

    function e(t) {
      t._skipNextEvent("delayFrame"), t._registerEvent("initEndWrite", function() {
        t.blocksOn.each(function(e, n) {
          n.style[i.Private.animationDelay] = e * t.options.displayTypeSpeed + "ms"
        }), t.$obj.addClass("cbp-displayType-bottomToTop"), t.blocksOn.last().one(i.Private.animationend, function() {
          t.$obj.removeClass("cbp-displayType-bottomToTop"), t.blocksOn.each(function(t, e) {
            e.style[i.Private.animationDelay] = ""
          }), t._triggerEvent("delayFrame")
        })
      }, !0)
    }
    var i = t.fn.cubeportfolio.Constructor;
    i.Plugins.BottomToTop = function(t) {
      return i.Private.modernBrowser && "bottomToTop" === t.options.displayType && 0 !== t.blocks.length ? new e(t) : null
    }
  }(jQuery, window, document),
  function(t) {
    "use strict";

    function e(t) {
      t._skipNextEvent("delayFrame"), t._registerEvent("initEndWrite", function() {
        t.obj.style[i.Private.animationDuration] = t.options.displayTypeSpeed + "ms", t.$obj.addClass("cbp-displayType-fadeInToTop"), t.$obj.one(i.Private.animationend, function() {
          t.$obj.removeClass("cbp-displayType-fadeInToTop"), t.obj.style[i.Private.animationDuration] = "", t._triggerEvent("delayFrame")
        })
      }, !0)
    }
    var i = t.fn.cubeportfolio.Constructor;
    i.Plugins.FadeInToTop = function(t) {
      return i.Private.modernBrowser && "fadeInToTop" === t.options.displayType && 0 !== t.blocks.length ? new e(t) : null
    }
  }(jQuery, window, document),
  function(t) {
    "use strict";

    function e(t) {
      t._skipNextEvent("delayFrame"), t._registerEvent("initEndWrite", function() {
        t.obj.style[i.Private.animationDuration] = t.options.displayTypeSpeed + "ms", t.$obj.addClass("cbp-displayType-lazyLoading"), t.$obj.one(i.Private.animationend, function() {
          t.$obj.removeClass("cbp-displayType-lazyLoading"), t.obj.style[i.Private.animationDuration] = "", t._triggerEvent("delayFrame")
        })
      }, !0)
    }
    var i = t.fn.cubeportfolio.Constructor;
    i.Plugins.LazyLoading = function(t) {
      return !i.Private.modernBrowser || "lazyLoading" !== t.options.displayType && "fadeIn" !== t.options.displayType || 0 === t.blocks.length ? null : new e(t)
    }
  }(jQuery, window, document),
  function(t) {
    "use strict";

    function e(t) {
      t._skipNextEvent("delayFrame"), t._registerEvent("initEndWrite", function() {
        t.blocksOn.each(function(e, n) {
          n.style[i.Private.animationDelay] = e * t.options.displayTypeSpeed + "ms"
        }), t.$obj.addClass("cbp-displayType-sequentially"), t.blocksOn.last().one(i.Private.animationend, function() {
          t.$obj.removeClass("cbp-displayType-sequentially"), t.blocksOn.each(function(t, e) {
            e.style[i.Private.animationDelay] = ""
          }), t._triggerEvent("delayFrame")
        })
      }, !0)
    }
    var i = t.fn.cubeportfolio.Constructor;
    i.Plugins.DisplaySequentially = function(t) {
      return i.Private.modernBrowser && "sequentially" === t.options.displayType && 0 !== t.blocks.length ? new e(t) : null
    }
  }(jQuery, window, document);
var LayoutBrand = function() {
    return {
      init: function() {
        $("body").on("click", ".c-hor-nav-toggler", function() {
          var t = $(this).data("target");
          $(t).toggleClass("c-shown")
        })
      }
    }
  }(),
  LayoutHeaderCart = function() {
    return {
      init: function() {
        var t = $(".c-cart-menu");
        0 !== t.size() && (App.getViewPort().width < App.getBreakpoint("md") ? ($("body").on("click", ".c-cart-toggler", function(t) {
          t.preventDefault(), t.stopPropagation(), $("body").toggleClass("c-header-cart-shown")
        }), $("body").on("click", function(e) {
          t.is(e.target) || 0 !== t.has(e.target).length || $("body").removeClass("c-header-cart-shown")
        })) : ($("body").on("hover", ".c-cart-toggler, .c-cart-menu", function(t) {
          $("body").addClass("c-header-cart-shown")
        }), $("body").on("hover", ".c-mega-menu > .navbar-nav > li:not(.c-cart-toggler-wrapper)", function(t) {
          $("body").removeClass("c-header-cart-shown")
        }), $("body").on("mouseleave", ".c-cart-menu", function(t) {
          $("body").removeClass("c-header-cart-shown")
        })))
      }
    }
  }(),
  LayoutHeader = function() {
    var t = parseInt($(".c-layout-header").attr("data-minimize-offset") > 0 ? parseInt($(".c-layout-header").attr("data-minimize-offset")) : 0),
      e = function() {
        $(window).scrollTop() > t ? $("body").addClass("c-page-on-scroll") : $("body").removeClass("c-page-on-scroll")
      },
      i = function() {
        $(".c-layout-header .c-topbar-toggler").on("click", function(t) {
          $(".c-layout-header-topbar-collapse").toggleClass("c-topbar-expanded")
        })
      };
    return {
      init: function() {
        $("body").hasClass("c-layout-header-fixed-non-minimized") || (e(), i(), $(window).scroll(function() {
          e()
        }))
      }
    }
  }(),
  LayoutMegaMenu = function() {
    return {
      init: function() {
        $(".c-mega-menu").on("click", ".c-toggler", function(t) {
          App.getViewPort().width < App.getBreakpoint("md") && (t.preventDefault(), $(this).closest("li").hasClass("c-open") ? $(this).closest("li").removeClass("c-open") : $(this).closest("li").addClass("c-open"))
        }), $(".c-layout-header .c-hor-nav-toggler:not(.c-quick-sidebar-toggler)").on("click", function() {
          if ($(".c-layout-header").toggleClass("c-mega-menu-shown"), $("body").hasClass("c-layout-header-mobile-fixed")) {
            var t = App.getViewPort().height - $(".c-layout-header").outerHeight(!0) - 60;
            $(".c-mega-menu").css("max-height", t)
          }
        })
      }
    }
  }(),
  LayoutSidebarMenu = function() {
    return {
      init: function() {
        $(".c-layout-sidebar-menu > .c-sidebar-menu .c-toggler").on("click", function(t) {
          t.preventDefault(), $(this).closest(".c-dropdown").toggleClass("c-open")
        })
      }
    }
  }(),
  LayoutQuickSearch = function() {
    return {
      init: function() {
        $(".c-layout-header").on("click", ".c-mega-menu .c-search-toggler", function(t) {
          t.preventDefault(), $("body").addClass("c-layout-quick-search-shown"), App.isIE() === !1 && $(".c-quick-search > .form-control").focus()
        }), $(".c-layout-header").on("click", ".c-brand .c-search-toggler", function(t) {
          t.preventDefault(), $("body").addClass("c-layout-quick-search-shown"), App.isIE() === !1 && $(".c-quick-search > .form-control").focus()
        }), $(".c-quick-search").on("click", "> span", function(t) {
          t.preventDefault(), $("body").removeClass("c-layout-quick-search-shown")
        })
      }
    }
  }(),
  LayoutCartMenu = function() {
    return {
      init: function() {
        $(".c-layout-header").on("mouseenter", ".c-mega-menu .c-cart-toggler-wrapper", function(t) {
          t.preventDefault(), $(".c-cart-menu").addClass("c-layout-cart-menu-shown")
        }), $(".c-cart-menu, .c-layout-header").on("mouseleave", function(t) {
          t.preventDefault(), $(".c-cart-menu").removeClass("c-layout-cart-menu-shown")
        }), $(".c-layout-header").on("click", ".c-brand .c-cart-toggler", function(t) {
          t.preventDefault(), $(".c-cart-menu").toggleClass("c-layout-cart-menu-shown")
        })
      }
    }
  }(),
  LayoutQuickSidebar = function() {
    return {
      init: function() {
        $(".c-layout-header").on("click", ".c-quick-sidebar-toggler", function(t) {
          t.preventDefault(), t.stopPropagation(), $("body").hasClass("c-layout-quick-sidebar-shown") ? $("body").removeClass("c-layout-quick-sidebar-shown") : $("body").addClass("c-layout-quick-sidebar-shown")
        }), $(".c-layout-quick-sidebar").on("click", ".c-close", function(t) {
          t.preventDefault(), $("body").removeClass("c-layout-quick-sidebar-shown")
        }), $(".c-layout-quick-sidebar").on("click", function(t) {
          t.stopPropagation()
        }), $(document).on("click", ".c-layout-quick-sidebar-shown", function(t) {
          $(this).removeClass("c-layout-quick-sidebar-shown")
        })
      }
    }
  }(),
  LayoutGo2Top = function() {
    var t = function() {
      var t = $(window).scrollTop();
      t > 300 ? $(".c-layout-go2top").show() : $(".c-layout-go2top").hide()
    };
    return {
      init: function() {
        t(), navigator.userAgent.match(/iPhone|iPad|iPod/i) ? $(window).bind("touchend touchcancel touchleave", function(e) {
          t()
        }) : $(window).scroll(function() {
          t()
        }), $(".c-layout-go2top").on("click", function(t) {
          t.preventDefault(), $("html, body").animate({
            scrollTop: 0
          }, 600)
        })
      }
    }
  }(),
  LayoutOnepageNav = function() {
    var t = function() {
      var t, e, i;
      $("body").addClass("c-page-on-scroll"), t = $(".c-layout-header-onepage").outerHeight(!0), $("body").removeClass("c-page-on-scroll"), $(".c-mega-menu-onepage-dots").size() > 0 ? ($(".c-onepage-dots-nav").size() > 0 && $(".c-onepage-dots-nav").css("margin-top", -($(".c-onepage-dots-nav").outerHeight(!0) / 2)), e = $("body").scrollspy({
        target: ".c-mega-menu-onepage-dots",
        offset: t
      }), i = parseInt($(".c-mega-menu-onepage-dots").attr("data-onepage-animation-speed"))) : (e = $("body").scrollspy({
        target: ".c-mega-menu-onepage",
        offset: t
      }), i = parseInt($(".c-mega-menu-onepage").attr("data-onepage-animation-speed"))), e.on("activate.bs.scrollspy", function() {
        $(this).find(".c-onepage-link.c-active").removeClass("c-active"), $(this).find(".c-onepage-link.active").addClass("c-active")
      }), $(".c-onepage-link > a").on("click", function(e) {
        var n = $(this).attr("href"),
          o = 0;
        "#home" !== n && (o = $(n).offset().top - t + 1), $("html, body").stop().animate({
          scrollTop: o
        }, i, "easeInExpo"), e.preventDefault(), App.getViewPort().width < App.getBreakpoint("md") && $(".c-hor-nav-toggler").click()
      })
    };
    return {
      init: function() {
        t()
      }
    }
  }(),
  LayoutThemeSettings = function() {
    var t = function() {
      $(".c-settings .c-color").on("click", function() {
        var t = $(this).attr("data-color");
        $("#style_theme").attr("href", "../assets/base/css/themes/" + t + ".css"), $(".c-settings .c-color").removeClass("c-active"), $(this).addClass("c-active")
      }), $(".c-setting_header-type").on("click", function() {
        var t = $(this).attr("data-value");
        "fluid" == t ? ($(".c-layout-header .c-topbar > .container").removeClass("container").addClass("container-fluid"), $(".c-layout-header .c-navbar > .container").removeClass("container").addClass("container-fluid")) : ($(".c-layout-header .c-topbar > .container-fluid").removeClass("container-fluid").addClass("container"), $(".c-layout-header .c-navbar > .container-fluid").removeClass("container-fluid").addClass("container")), $(".c-setting_header-type").removeClass("active"), $(this).addClass("active")
      }), $(".c-setting_header-mode").on("click", function() {
        var t = $(this).attr("data-value");
        "static" == t ? $("body").removeClass("c-layout-header-fixed").addClass("c-layout-header-static") : $("body").removeClass("c-layout-header-static").addClass("c-layout-header-fixed"), $(".c-setting_header-mode").removeClass("active"), $(this).addClass("active")
      }), $(".c-setting_font-style").on("click", function() {
        var t = $(this).attr("data-value");
        "light" == t ? ($(".c-font-uppercase").addClass("c-font-uppercase-reset").removeClass("c-font-uppercase"), $(".c-font-bold").addClass("c-font-bold-reset").removeClass("c-font-bold"), $(".c-fonts-uppercase").addClass("c-fonts-uppercase-reset").removeClass("c-fonts-uppercase"), $(".c-fonts-bold").addClass("c-fonts-bold-reset").removeClass("c-fonts-bold")) : ($(".c-font-uppercase-reset").addClass("c-font-uppercase").removeClass("c-font-uppercase-reset"), $(".c-font-bold-reset").addClass("c-font-bold").removeClass("c-font-bold-reset"), $(".c-fonts-uppercase-reset").addClass("c-fonts-uppercase").removeClass("c-fonts-uppercase-reset"), $(".c-fonts-bold-reset").addClass("c-fonts-bold").removeClass("c-fonts-bold-reset")), $(".c-setting_font-style").removeClass("active"), $(this).addClass("active")
      }), $(".c-setting_megamenu-style").on("click", function() {
        var t = $(this).attr("data-value");
        "dark" == t ? $(".c-mega-menu").removeClass("c-mega-menu-light").addClass("c-mega-menu-dark") : $(".c-mega-menu").removeClass("c-mega-menu-dark").addClass("c-mega-menu-light"), $(".c-setting_megamenu-style").removeClass("active"), $(this).addClass("active")
      })
    };
    return {
      init: function() {
        t()
      }
    }
  }(),
  ContentOwlcarousel = function() {
    var t = function() {
      $("[data-slider='owl'] .owl-carousel").each(function() {
        var t, e, i, n, o, r, s = $(this),
          a = !!s.data("rtl") && s.data("rtl"),
          l = !s.data("loop") || s.data("loop"),
          c = !s.data("navigation-dots") || s.data("navigation-dots"),
          h = !!s.data("navigation-label") && s.data("navigation-label");
        1 == s.data("single-item") ? (t = 1, e = 1, i = 1, n = 1, o = 1, r = 1) : (t = s.data("items"), e = [1199, s.data("desktop-items") ? s.data("desktop-items") : t], i = [979, s.data("desktop-small-items") ? s.data("desktop-small-items") : 3], n = [768, s.data("tablet-items") ? s.data("tablet-items") : 2], r = [479, s.data("mobile-items") ? s.data("mobile-items") : 1]), $(this).owlCarousel({
          rtl: a,
          loop: l,
          items: t,
          responsive: {
            0: {
              items: s.data("mobile-items") ? s.data("mobile-items") : 1
            },
            480: {
              items: s.data("mobile-items") ? s.data("mobile-items") : 1
            },
            768: {
              items: s.data("tablet-items") ? s.data("tablet-items") : 2
            },
            980: {
              items: s.data("desktop-small-items") ? s.data("desktop-small-items") : 3
            },
            1200: {
              items: s.data("desktop-items") ? s.data("desktop-items") : t
            }
          },
          dots: c,
          nav: h,
          navText: !1,
          autoplay: !s.data("auto-play") || s.data("auto-play"),
          autoplayTimeout: s.data("slide-speed"),
          autoplayHoverPause: !!s.data("auto-play-hover-pause") && s.data("auto-play-hover-pause"),
          dotsSpeed: s.data("slide-speed")
        })
      })
    };
    return {
      init: function() {
        t()
      }
    }
  }(),
  ContentCubeLatestPortfolio = function() {
    var t = function() {
      $(".c-content-latest-works").cubeportfolio({
        filters: "#filters-container",
        loadMore: "#loadMore-container",
        loadMoreAction: "click",
        layoutMode: "grid",
        defaultFilter: "*",
        animationType: "quicksand",
        gapHorizontal: 20,
        gapVertical: 23,
        gridAdjustment: "responsive",
        mediaQueries: [{
          width: 1100,
          cols: 4
        }, {
          width: 800,
          cols: 3
        }, {
          width: 500,
          cols: 2
        }, {
          width: 320,
          cols: 1
        }],
        caption: "zoom",
        displayType: "lazyLoading",
        displayTypeSpeed: 100,
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: !0,
        lightboxTitleSrc: "data-title",
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        singlePageDelegate: ".cbp-singlePage",
        singlePageDeeplinking: !0,
        singlePageStickyNavigation: !0,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(t, e) {
          var i = this;
          $.ajax({
            url: t,
            type: "GET",
            dataType: "html",
            timeout: 5e3
          }).done(function(t) {
            i.updateSinglePage(t)
          }).fail(function() {
            i.updateSinglePage("Error! Please refresh the page!")
          })
        }
      }), $(".c-content-latest-works-fullwidth").cubeportfolio({
        loadMoreAction: "auto",
        layoutMode: "grid",
        defaultFilter: "*",
        animationType: "fadeOutTop",
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: "responsive",
        mediaQueries: [{
          width: 1600,
          cols: 5
        }, {
          width: 1200,
          cols: 4
        }, {
          width: 800,
          cols: 3
        }, {
          width: 500,
          cols: 2
        }, {
          width: 320,
          cols: 1
        }],
        caption: "zoom",
        displayType: "lazyLoading",
        displayTypeSpeed: 100,
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: !0,
        lightboxTitleSrc: "data-title",
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
      })
    };
    return {
      init: function() {
        t()
      }
    }
  }(),
  ContentCounterUp = function() {
    var t = function() {
      $("[data-counter='counterup']").counterUp({
        delay: 10,
        time: 1e3
      })
    };
    return {
      init: function() {
        t()
      }
    }
  }(),
  ContentFancybox = function() {
    var t = function() {
      $("[data-lightbox='fancybox']").fancybox()
    };
    return {
      init: function() {
        t()
      }
    }
  }(),
  ContentTwitter = function() {
    var t = function() {
      $(".twitter-timeline")[0] && ! function(t, e, i) {
        var n, o = t.getElementsByTagName(e)[0],
          r = /^http:/.test(t.location) ? "http" : "https";
        t.getElementById(i) || (n = t.createElement(e), n.id = i, n.src = r + "://platform.twitter.com/widgets.js", o.parentNode.insertBefore(n, o))
      }(document, "script", "twitter-wjs")
    };
    return {
      init: function() {
        t()
      }
    }
  }(),
  LayoutProgressBar = function(t) {
    return {
      init: function() {
        var e = 0;
        t(".c-progress-bar-line").each(function() {
          e++;
          var i = (t(this).attr("data-id", e), '.c-progress-bar-line[data-id="' + e + '"]'),
            n = t(this).data("progress-bar");
          n = n.toLowerCase().replace(/\b[a-z]/g, function(t) {
            return t.toUpperCase()
          }), "Semicircle" == n && (n = "SemiCircle");
          var o = t(this).css("border-top-color"),
            r = t(this).data("animation"),
            s = t(this).data("stroke-width"),
            a = t(this).data("duration"),
            l = t(this).data("trail-width"),
            c = t(this).data("trail-color"),
            h = t(this).data("progress"),
            u = t(this).css("color");
          "rgb(92, 104, 115)" == o && (o = "#32c5d2"), "" == c && (c = "#5c6873"), "" == l && (l = "0"), "" == h && (h = "1"), "" == s && (s = "3"), "" == r && (r = "easeInOut"), "" == a && (a = "1500");
          var d = new ProgressBar[n](i, {
              strokeWidth: s,
              easing: r,
              duration: a,
              color: o,
              trailWidth: l,
              trailColor: c,
              svgStyle: null,
              step: function(t, e) {
                e.setText(Math.round(100 * e.value()) + "%")
              },
              text: {
                style: {
                  color: u
                }
              }
            }),
            p = isScrolledIntoView(i);
          1 == p && d.animate(h), t(window).scroll(function(t) {
            var e = isScrolledIntoView(i);
            1 == e && d.animate(h)
          })
        })
      }
    }
  }(jQuery),
  LayoutCookies = function() {
    var t = function() {
      $(".c-cookies-bar-close").click(function() {
        $(".c-cookies-bar").animate({
          opacity: 0
        }, 500, function() {
          $(".c-cookies-bar").css("display", "none")
        })
      })
    };
    return {
      init: function() {
        t()
      }
    }
  }(),
  LayoutSmoothScroll = function() {
    var t = function() {
      $(".js-smoothscroll").on("click", function() {
        var t = $(this).data("target");
        return $.smoothScroll({
          scrollTarget: "#" + t
        }), !1
      })
    };
    return {
      init: function() {
        t()
      }
    }
  }();
$(document).ready(function() {
  LayoutBrand.init(), LayoutHeader.init(), LayoutHeaderCart.init(), LayoutMegaMenu.init(), LayoutSidebarMenu.init(), LayoutQuickSearch.init(), LayoutCartMenu.init(), LayoutQuickSidebar.init(), LayoutGo2Top.init(), LayoutOnepageNav.init(), LayoutThemeSettings.init(), LayoutProgressBar.init(), LayoutCookies.init(), LayoutSmoothScroll.init(), ContentOwlcarousel.init(), ContentCubeLatestPortfolio.init(), ContentCounterUp.init(), ContentFancybox.init(), ContentTwitter.init()
}), window.jscolor || (window.jscolor = function() {
  var t = {
    register: function() {
      t.attachDOMReadyEvent(t.init), t.attachEvent(document, "mousedown", t.onDocumentMouseDown), t.attachEvent(document, "touchstart", t.onDocumentTouchStart), t.attachEvent(document, "touchmove", t.onDocumentTouchMove), t.attachEvent(window, "resize", t.onWindowResize)
    },
    init: function() {
      t.jscolor.lookupClass && t.jscolor.installByClassName(t.jscolor.lookupClass)
    },
    tryInstallOnElements: function(e, i) {
      for (var n = new RegExp("(^|\\s)(" + i + ")(\\s*(\\{[^}]*\\})|\\s|$)", "i"), o = 0; o < e.length; o += 1)
        if (void 0 === e[o].type || "color" != e[o].type.toLowerCase() || !t.isColorAttrSupported) {
          var r;
          if (!e[o].jscolor && e[o].className && (r = e[o].className.match(n))) {
            var s = e[o],
              a = null,
              l = t.getDataAttr(s, "jscolor");
            null !== l ? a = l : r[4] && (a = r[4]);
            var c = {};
            if (a) try {
              c = new Function("return (" + a + ")")()
            } catch (e) {
              t.warn("Error parsing jscolor options: " + e + ":\n" + a)
            }
            s.jscolor = new t.jscolor(s, c)
          }
        }
    },
    isColorAttrSupported: function() {
      var t = document.createElement("input");
      return !(!t.setAttribute || (t.setAttribute("type", "color"), "color" != t.type.toLowerCase()))
    }(),
    isCanvasSupported: function() {
      var t = document.createElement("canvas");
      return !(!t.getContext || !t.getContext("2d"))
    }(),
    fetchElement: function(t) {
      return "string" == typeof t ? document.getElementById(t) : t
    },
    isElementType: function(t, e) {
      return t.nodeName.toLowerCase() === e.toLowerCase()
    },
    getDataAttr: function(t, e) {
      var i = "data-" + e,
        n = t.getAttribute(i);
      return null !== n ? n : null
    },
    attachEvent: function(t, e, i) {
      t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i)
    },
    detachEvent: function(t, e, i) {
      t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent && t.detachEvent("on" + e, i)
    },
    _attachedGroupEvents: {},
    attachGroupEvent: function(e, i, n, o) {
      t._attachedGroupEvents.hasOwnProperty(e) || (t._attachedGroupEvents[e] = []), t._attachedGroupEvents[e].push([i, n, o]), t.attachEvent(i, n, o)
    },
    detachGroupEvents: function(e) {
      if (t._attachedGroupEvents.hasOwnProperty(e)) {
        for (var i = 0; i < t._attachedGroupEvents[e].length; i += 1) {
          var n = t._attachedGroupEvents[e][i];
          t.detachEvent(n[0], n[1], n[2])
        }
        delete t._attachedGroupEvents[e]
      }
    },
    attachDOMReadyEvent: function(t) {
      var e = !1,
        i = function() {
          e || (e = !0, t())
        };
      if ("complete" === document.readyState) return void setTimeout(i, 1);
      if (document.addEventListener) document.addEventListener("DOMContentLoaded", i, !1), window.addEventListener("load", i, !1);
      else if (document.attachEvent && (document.attachEvent("onreadystatechange", function() {
          "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), i())
        }), window.attachEvent("onload", i), document.documentElement.doScroll && window == window.top)) {
        var n = function() {
          if (document.body) try {
            document.documentElement.doScroll("left"), i()
          } catch (t) {
            setTimeout(n, 1)
          }
        };
        n()
      }
    },
    warn: function(t) {
      window.console && window.console.warn && window.console.warn(t)
    },
    preventDefault: function(t) {
      t.preventDefault && t.preventDefault(), t.returnValue = !1
    },
    captureTarget: function(e) {
      e.setCapture && (t._capturedTarget = e, t._capturedTarget.setCapture())
    },
    releaseTarget: function() {
      t._capturedTarget && (t._capturedTarget.releaseCapture(), t._capturedTarget = null)
    },
    fireEvent: function(t, e) {
      if (t)
        if (document.createEvent) {
          var i = document.createEvent("HTMLEvents");
          i.initEvent(e, !0, !0), t.dispatchEvent(i)
        } else if (document.createEventObject) {
          var i = document.createEventObject();
          t.fireEvent("on" + e, i)
        } else t["on" + e] && t["on" + e]()
    },
    classNameToList: function(t) {
      return t.replace(/^\s+|\s+$/g, "").split(/\s+/)
    },
    hasClass: function(t, e) {
      return !!e && -1 != (" " + t.className.replace(/\s+/g, " ") + " ").indexOf(" " + e + " ")
    },
    setClass: function(e, i) {
      for (var n = t.classNameToList(i), o = 0; o < n.length; o += 1) t.hasClass(e, n[o]) || (e.className += (e.className ? " " : "") + n[o])
    },
    unsetClass: function(e, i) {
      for (var n = t.classNameToList(i), o = 0; o < n.length; o += 1) {
        var r = new RegExp("^\\s*" + n[o] + "\\s*|\\s*" + n[o] + "\\s*$|\\s+" + n[o] + "(\\s+)", "g");
        e.className = e.className.replace(r, "$1")
      }
    },
    getStyle: function(t) {
      return window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle
    },
    setStyle: function() {
      var t = document.createElement("div"),
        e = function(e) {
          for (var i = 0; i < e.length; i += 1)
            if (e[i] in t.style) return e[i]
        },
        i = {
          borderRadius: e(["borderRadius", "MozBorderRadius", "webkitBorderRadius"]),
          boxShadow: e(["boxShadow", "MozBoxShadow", "webkitBoxShadow"])
        };
      return function(t, e, n) {
        switch (e.toLowerCase()) {
          case "opacity":
            var o = Math.round(100 * parseFloat(n));
            t.style.opacity = n, t.style.filter = "alpha(opacity=" + o + ")";
            break;
          default:
            t.style[i[e]] = n
        }
      }
    }(),
    setBorderRadius: function(e, i) {
      t.setStyle(e, "borderRadius", i || "0")
    },
    setBoxShadow: function(e, i) {
      t.setStyle(e, "boxShadow", i || "none")
    },
    getElementPos: function(e, i) {
      var n = 0,
        o = 0,
        r = e.getBoundingClientRect();
      if (n = r.left, o = r.top, !i) {
        var s = t.getViewPos();
        n += s[0], o += s[1]
      }
      return [n, o]
    },
    getElementSize: function(t) {
      return [t.offsetWidth, t.offsetHeight]
    },
    getAbsPointerPos: function(t) {
      t || (t = window.event);
      var e = 0,
        i = 0;
      return "undefined" != typeof t.changedTouches && t.changedTouches.length ? (e = t.changedTouches[0].clientX, i = t.changedTouches[0].clientY) : "number" == typeof t.clientX && (e = t.clientX, i = t.clientY), {
        x: e,
        y: i
      }
    },
    getRelPointerPos: function(t) {
      t || (t = window.event);
      var e = t.target || t.srcElement,
        i = e.getBoundingClientRect(),
        n = 0,
        o = 0,
        r = 0,
        s = 0;
      return "undefined" != typeof t.changedTouches && t.changedTouches.length ? (r = t.changedTouches[0].clientX, s = t.changedTouches[0].clientY) : "number" == typeof t.clientX && (r = t.clientX, s = t.clientY), n = r - i.left, o = s - i.top, {
        x: n,
        y: o
      }
    },
    getViewPos: function() {
      var t = document.documentElement;
      return [(window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), (window.pageYOffset || t.scrollTop) - (t.clientTop || 0)]
    },
    getViewSize: function() {
      var t = document.documentElement;
      return [window.innerWidth || t.clientWidth, window.innerHeight || t.clientHeight]
    },
    redrawPosition: function() {
      if (t.picker && t.picker.owner) {
        var e, i, n = t.picker.owner;
        n.fixed ? (e = t.getElementPos(n.targetElement, !0), i = [0, 0]) : (e = t.getElementPos(n.targetElement), i = t.getViewPos());
        var o, r, s, a = t.getElementSize(n.targetElement),
          l = t.getViewSize(),
          c = t.getPickerOuterDims(n);
        switch (n.position.toLowerCase()) {
          case "left":
            o = 1, r = 0, s = -1;
            break;
          case "right":
            o = 1, r = 0, s = 1;
            break;
          case "top":
            o = 0, r = 1, s = -1;
            break;
          default:
            o = 0, r = 1, s = 1
        }
        var h = (a[r] + c[r]) / 2;
        if (n.smartPosition) var u = [-i[o] + e[o] + c[o] > l[o] && -i[o] + e[o] + a[o] / 2 > l[o] / 2 && e[o] + a[o] - c[o] >= 0 ? e[o] + a[o] - c[o] : e[o], -i[r] + e[r] + a[r] + c[r] - h + h * s > l[r] ? -i[r] + e[r] + a[r] / 2 > l[r] / 2 && e[r] + a[r] - h - h * s >= 0 ? e[r] + a[r] - h - h * s : e[r] + a[r] - h + h * s : e[r] + a[r] - h + h * s >= 0 ? e[r] + a[r] - h + h * s : e[r] + a[r] - h - h * s];
        else var u = [e[o], e[r] + a[r] - h + h * s];
        var d = u[o],
          p = u[r],
          f = n.fixed ? "fixed" : "absolute",
          g = (u[0] + c[0] > e[0] || u[0] < e[0] + a[0]) && u[1] + c[1] < e[1] + a[1];
        t._drawPosition(n, d, p, f, g)
      }
    },
    _drawPosition: function(e, i, n, o, r) {
      var s = r ? 0 : e.shadowBlur;
      t.picker.wrap.style.position = o, t.picker.wrap.style.left = i + "px", t.picker.wrap.style.top = n + "px", t.setBoxShadow(t.picker.boxS, e.shadow ? new t.BoxShadow(0, s, e.shadowBlur, 0, e.shadowColor) : null)
    },
    getPickerDims: function(e) {
      var i = !!t.getSliderComponent(e),
        n = [2 * e.insetWidth + 2 * e.padding + e.width + (i ? 2 * e.insetWidth + t.getPadToSliderPadding(e) + e.sliderSize : 0), 2 * e.insetWidth + 2 * e.padding + e.height + (e.closable ? 2 * e.insetWidth + e.padding + e.buttonHeight : 0)];
      return n
    },
    getPickerOuterDims: function(e) {
      var i = t.getPickerDims(e);
      return [i[0] + 2 * e.borderWidth, i[1] + 2 * e.borderWidth]
    },
    getPadToSliderPadding: function(t) {
      return Math.max(t.padding, 1.5 * (2 * t.pointerBorderWidth + t.pointerThickness))
    },
    getPadYComponent: function(t) {
      switch (t.mode.charAt(1).toLowerCase()) {
        case "v":
          return "v"
      }
      return "s"
    },
    getSliderComponent: function(t) {
      if (t.mode.length > 2) switch (t.mode.charAt(2).toLowerCase()) {
        case "s":
          return "s";
        case "v":
          return "v"
      }
      return null
    },
    onDocumentMouseDown: function(e) {
      e || (e = window.event);
      var i = e.target || e.srcElement;
      i._jscLinkedInstance ? i._jscLinkedInstance.showOnClick && i._jscLinkedInstance.show() : i._jscControlName ? t.onControlPointerStart(e, i, i._jscControlName, "mouse") : "jscolor-hex-in" === i.id || t.picker && t.picker.owner && t.picker.owner.hide()
    },
    onDocumentTouchStart: function(e) {
      e || (e = window.event);
      var i = e.target || e.srcElement;
      i._jscLinkedInstance ? i._jscLinkedInstance.showOnClick && i._jscLinkedInstance.show() : i._jscControlName ? t.onControlPointerStart(e, i, i._jscControlName, "touch") : "jscolor-hex-in" === i.id || t.picker && t.picker.owner && t.picker.owner.hide()
    },
    onWindowResize: function(e) {
      t.redrawPosition()
    },
    onParentScroll: function(e) {
      t.picker && t.picker.owner && t.picker.owner.hide()
    },
    _pointerMoveEvent: {
      mouse: "mousemove",
      touch: "touchmove"
    },
    _pointerEndEvent: {
      mouse: "mouseup",
      touch: "touchend"
    },
    _pointerOrigin: null,
    _capturedTarget: null,
    onControlPointerStart: function(e, i, n, o) {
      var r = i._jscInstance;
      t.preventDefault(e), t.captureTarget(i);
      var s = function(r, s) {
        t.attachGroupEvent("drag", r, t._pointerMoveEvent[o], t.onDocumentPointerMove(e, i, n, o, s)), t.attachGroupEvent("drag", r, t._pointerEndEvent[o], t.onDocumentPointerEnd(e, i, n, o))
      };
      if (s(document, [0, 0]), window.parent && window.frameElement) {
        var a = window.frameElement.getBoundingClientRect(),
          l = [-a.left, -a.top];
        s(window.parent.window.document, l)
      }
      var c = t.getAbsPointerPos(e),
        h = t.getRelPointerPos(e);
      switch (t._pointerOrigin = {
        x: c.x - h.x,
        y: c.y - h.y
      }, n) {
        case "pad":
          switch (t.getSliderComponent(r)) {
            case "s":
              0 === r.hsv[1] && r.fromHSV(null, 100, null);
              break;
            case "v":
              0 === r.hsv[2] && r.fromHSV(null, null, 100)
          }
          t.setPad(r, e, 0, 0);
          break;
        case "sld":
          t.setSld(r, e, 0)
      }
      t.dispatchFineChange(r)
    },
    onDocumentPointerMove: function(e, i, n, o, r) {
      return function(e) {
        var o = i._jscInstance;
        switch (n) {
          case "pad":
            e || (e = window.event), t.setPad(o, e, r[0], r[1]), t.dispatchFineChange(o);
            break;
          case "sld":
            e || (e = window.event), t.setSld(o, e, r[1]), t.dispatchFineChange(o)
        }
      }
    },
    onDocumentPointerEnd: function(e, i, n, o) {
      return function(e) {
        var n = i._jscInstance;
        t.detachGroupEvents("drag"), t.releaseTarget(), t.dispatchChange(n)
      }
    },
    dispatchChange: function(e) {
      e.valueElement && t.isElementType(e.valueElement, "input") && t.fireEvent(e.valueElement, "change")
    },
    dispatchFineChange: function(e) {
      if (e.onFineChange) {
        var i;
        i = "string" == typeof e.onFineChange ? new Function(e.onFineChange) : e.onFineChange, i.call(e)
      }
      t.picker && (t.picker.hexIn.value = e.toHEXString())
    },
    setPad: function(e, i, n, o) {
      var r = t.getAbsPointerPos(i),
        s = n + r.x - t._pointerOrigin.x - e.padding - e.insetWidth,
        a = o + r.y - t._pointerOrigin.y - e.padding - e.insetWidth,
        l = s * (360 / (e.width - 1)),
        c = 100 - a * (100 / (e.height - 1));
      switch (t.getPadYComponent(e)) {
        case "s":
          e.fromHSV(l, c, null, t.leaveSld);
          break;
        case "v":
          e.fromHSV(l, null, c, t.leaveSld)
      }
    },
    setSld: function(e, i, n) {
      var o = t.getAbsPointerPos(i),
        r = n + o.y - t._pointerOrigin.y - e.padding - e.insetWidth,
        s = 100 - r * (100 / (e.height - 1));
      switch (t.getSliderComponent(e)) {
        case "s":
          e.fromHSV(null, s, null, t.leavePad);
          break;
        case "v":
          e.fromHSV(null, null, s, t.leavePad)
      }
    },
    _vmlNS: "jsc_vml_",
    _vmlCSS: "jsc_vml_css_",
    _vmlReady: !1,
    initVML: function() {
      if (!t._vmlReady) {
        var e = document;
        if (e.namespaces[t._vmlNS] || e.namespaces.add(t._vmlNS, "urn:schemas-microsoft-com:vml"), !e.styleSheets[t._vmlCSS]) {
          var i = ["shape", "shapetype", "group", "background", "path", "formulas", "handles", "fill", "stroke", "shadow", "textbox", "textpath", "imagedata", "line", "polyline", "curve", "rect", "roundrect", "oval", "arc", "image"],
            n = e.createStyleSheet();
          n.owningElement.id = t._vmlCSS;
          for (var o = 0; o < i.length; o += 1) n.addRule(t._vmlNS + "\\:" + i[o], "behavior:url(#default#VML);")
        }
        t._vmlReady = !0
      }
    },
    createPalette: function() {
      var e = {
        elm: null,
        draw: null
      };
      if (t.isCanvasSupported) {
        var i = document.createElement("canvas"),
          n = i.getContext("2d"),
          o = function(t, e, o) {
            i.width = t, i.height = e, n.clearRect(0, 0, i.width, i.height);
            var r = n.createLinearGradient(0, 0, i.width, 0);
            r.addColorStop(0, "#F00"), r.addColorStop(1 / 6, "#FF0"), r.addColorStop(2 / 6, "#0F0"), r.addColorStop(.5, "#0FF"), r.addColorStop(4 / 6, "#00F"), r.addColorStop(5 / 6, "#F0F"), r.addColorStop(1, "#F00"), n.fillStyle = r, n.fillRect(0, 0, i.width, i.height);
            var s = n.createLinearGradient(0, 0, 0, i.height);
            switch (o.toLowerCase()) {
              case "s":
                s.addColorStop(0, "rgba(255,255,255,0)"), s.addColorStop(1, "rgba(255,255,255,1)");
                break;
              case "v":
                s.addColorStop(0, "rgba(0,0,0,0)"), s.addColorStop(1, "rgba(0,0,0,1)")
            }
            n.fillStyle = s, n.fillRect(0, 0, i.width, i.height)
          };
        e.elm = i, e.draw = o
      } else {
        t.initVML();
        var r = document.createElement("div");
        r.style.position = "relative", r.style.overflow = "hidden";
        var s = document.createElement(t._vmlNS + ":fill");
        s.type = "gradient", s.method = "linear", s.angle = "90", s.colors = "16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0";
        var a = document.createElement(t._vmlNS + ":rect");
        a.style.position = "absolute", a.style.left = "-1px", a.style.top = "-1px", a.stroked = !1, a.appendChild(s), r.appendChild(a);
        var l = document.createElement(t._vmlNS + ":fill");
        l.type = "gradient", l.method = "linear", l.angle = "180", l.opacity = "0";
        var c = document.createElement(t._vmlNS + ":rect");
        c.style.position = "absolute", c.style.left = "-1px", c.style.top = "-1px", c.stroked = !1, c.appendChild(l), r.appendChild(c);
        var o = function(t, e, i) {
          switch (r.style.width = t + "px", r.style.height = e + "px", a.style.width = c.style.width = t + 1 + "px", a.style.height = c.style.height = e + 1 + "px", s.color = "#F00", s.color2 = "#F00", i.toLowerCase()) {
            case "s":
              l.color = l.color2 = "#FFF";
              break;
            case "v":
              l.color = l.color2 = "#000"
          }
        };
        e.elm = r, e.draw = o
      }
      return e
    },
    createSliderGradient: function() {
      var e = {
        elm: null,
        draw: null
      };
      if (t.isCanvasSupported) {
        var i = document.createElement("canvas"),
          n = i.getContext("2d"),
          o = function(t, e, o, r) {
            i.width = t, i.height = e, n.clearRect(0, 0, i.width, i.height);
            var s = n.createLinearGradient(0, 0, 0, i.height);
            s.addColorStop(0, o), s.addColorStop(1, r), n.fillStyle = s, n.fillRect(0, 0, i.width, i.height)
          };
        e.elm = i, e.draw = o
      } else {
        t.initVML();
        var r = document.createElement("div");
        r.style.position = "relative", r.style.overflow = "hidden";
        var s = document.createElement(t._vmlNS + ":fill");
        s.type = "gradient", s.method = "linear", s.angle = "180";
        var a = document.createElement(t._vmlNS + ":rect");
        a.style.position = "absolute", a.style.left = "-1px", a.style.top = "-1px", a.stroked = !1, a.appendChild(s), r.appendChild(a);
        var o = function(t, e, i, n) {
          r.style.width = t + "px", r.style.height = e + "px", a.style.width = t + 1 + "px", a.style.height = e + 1 + "px", s.color = i, s.color2 = n
        };
        e.elm = r, e.draw = o
      }
      return e
    },
    leaveValue: 1,
    leaveStyle: 2,
    leavePad: 4,
    leaveSld: 8,
    BoxShadow: function() {
      var t = function(t, e, i, n, o, r) {
        this.hShadow = t, this.vShadow = e, this.blur = i, this.spread = n, this.color = o, this.inset = !!r
      };
      return t.prototype.toString = function() {
        var t = [Math.round(this.hShadow) + "px", Math.round(this.vShadow) + "px", Math.round(this.blur) + "px", Math.round(this.spread) + "px", this.color];
        return this.inset && t.push("inset"), t.join(" ")
      }, t
    }(),
    jscolor: function(e, i) {
      function n(t, e, i) {
        t /= 255, e /= 255, i /= 255;
        var n = Math.min(Math.min(t, e), i),
          o = Math.max(Math.max(t, e), i),
          r = o - n;
        if (0 === r) return [null, 0, 100 * o];
        var s = t === n ? 3 + (i - e) / r : e === n ? 5 + (t - i) / r : 1 + (e - t) / r;
        return [60 * (6 === s ? 0 : s), 100 * (r / o), 100 * o]
      }

      function o(t, e, i) {
        var n = 255 * (i / 100);
        if (null === t) return [n, n, n];
        t /= 60, e /= 100;
        var o = Math.floor(t),
          r = o % 2 ? t - o : 1 - (t - o),
          s = n * (1 - e),
          a = n * (1 - e * r);
        switch (o) {
          case 6:
          case 0:
            return [n, a, s];
          case 1:
            return [a, n, s];
          case 2:
            return [s, n, a];
          case 3:
            return [s, a, n];
          case 4:
            return [a, s, n];
          case 5:
            return [n, s, a]
        }
      }

      function r() {
        t.unsetClass(f.targetElement, f.activeClass), t.picker.wrap.parentNode.removeChild(t.picker.wrap), delete t.picker.owner
      }

      function s() {
        function e() {
          var t = f.insetColor.split(/\s+/),
            e = t.length < 2 ? t[0] : t[1] + " " + t[0] + " " + t[0] + " " + t[1];
          i.btn.style.borderColor = e
        }
        f._processParentElementsInDOM(), t.picker || (t.picker = {
          owner: null,
          wrap: document.createElement("div"),
          box: document.createElement("div"),
          boxS: document.createElement("div"),
          boxB: document.createElement("div"),
          pad: document.createElement("div"),
          padB: document.createElement("div"),
          padM: document.createElement("div"),
          padPal: t.createPalette(),
          cross: document.createElement("div"),
          crossBY: document.createElement("div"),
          crossBX: document.createElement("div"),
          crossLY: document.createElement("div"),
          crossLX: document.createElement("div"),
          sld: document.createElement("div"),
          sldB: document.createElement("div"),
          sldM: document.createElement("div"),
          sldGrad: t.createSliderGradient(),
          sldPtrS: document.createElement("div"),
          sldPtrIB: document.createElement("div"),
          sldPtrMB: document.createElement("div"),
          sldPtrOB: document.createElement("div"),
          btn: document.createElement("div"),
          hexIn: document.createElement("input"),
          hexLabel: document.createElement("div"),
          hexSave: document.createElement("button"),
          btnT: document.createElement("span")
        }, t.picker.pad.appendChild(t.picker.padPal.elm), t.picker.padB.appendChild(t.picker.pad), t.picker.cross.appendChild(t.picker.crossBY), t.picker.cross.appendChild(t.picker.crossBX), t.picker.cross.appendChild(t.picker.crossLY), t.picker.cross.appendChild(t.picker.crossLX), t.picker.padB.appendChild(t.picker.cross), t.picker.box.appendChild(t.picker.padB), t.picker.box.appendChild(t.picker.padM), t.picker.box.appendChild(t.picker.hexIn), t.picker.box.appendChild(t.picker.hexSave), t.picker.box.appendChild(t.picker.hexLabel), t.picker.sld.appendChild(t.picker.sldGrad.elm), t.picker.sldB.appendChild(t.picker.sld), t.picker.sldB.appendChild(t.picker.sldPtrOB), t.picker.sldPtrOB.appendChild(t.picker.sldPtrMB), t.picker.sldPtrMB.appendChild(t.picker.sldPtrIB), t.picker.sldPtrIB.appendChild(t.picker.sldPtrS), t.picker.box.appendChild(t.picker.sldB), t.picker.box.appendChild(t.picker.sldM), t.picker.btn.appendChild(t.picker.btnT), t.picker.box.appendChild(t.picker.btn), t.picker.boxB.appendChild(t.picker.box), t.picker.wrap.appendChild(t.picker.boxS), t.picker.wrap.appendChild(t.picker.boxB));
        var i = t.picker,
          n = !!t.getSliderComponent(f),
          o = t.getPickerDims(f),
          r = 2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
          s = t.getPadToSliderPadding(f),
          c = Math.min(f.borderRadius, Math.round(f.padding * Math.PI)),
          h = "crosshair";
        i.wrap.style.clear = "both", i.wrap.classList.add("jscolor-wrap"), i.wrap.style.width = o[0] + 2 * f.borderWidth + "px",
          i.wrap.style.height = o[1] + 2 * f.borderWidth + 24 + 10 + "px", i.wrap.style.zIndex = f.zIndex, i.box.style.width = o[0] + "px", i.box.classList.add("jscolor-box"), i.box.style.height = o[1] + 24 + 10 + "px", i.hexIn.style.position = "absolute", i.hexIn.classList.add("jscolor-hexIn"), i.hexIn.style.left = "55px", i.hexIn.style.bottom = "10px", i.hexIn.style.width = "70px", i.hexIn.value = f.toHEXString(), i.hexIn.id = "jscolor-hex-in", i.hexIn.onblur = function() {
          f.fromString(i.hexIn.value), i.hexIn.value = f.toHEXString(), t.dispatchFineChange(f)
        }, i.hexSave.style.position = "absolute", i.hexSave.classList.add("jscolor-hexSave"), i.hexSave.style.left = "130px", i.hexSave.style.bottom = "10px", i.hexSave.style.width = "65px", i.hexSave.innerHTML = "Close", i.hexLabel.style.position = "absolute", i.hexLabel.classList.add("jscolor-hexLabel"), i.hexLabel.style.left = "12px", i.hexLabel.style.bottom = "12px", i.hexLabel.style.width = "40px", i.hexLabel.innerHTML = "HEX:", i.boxS.style.position = "absolute", i.boxS.classList.add("jscolor-boxS"), i.boxS.style.left = "0", i.boxS.style.top = "0", i.boxS.style.width = "100%", i.boxS.style.height = "100%", t.setBorderRadius(i.boxS, c + "px"), i.boxB.style.position = "relative", i.boxB.classList.add("jscolor-boxB"), i.boxB.style.border = f.borderWidth + "px solid", i.boxB.style.borderColor = f.borderColor, i.boxB.style.background = f.backgroundColor, t.setBorderRadius(i.boxB, c + "px"), i.padM.style.background = i.sldM.style.background = "#FFF", t.setStyle(i.padM, "opacity", "0"), t.setStyle(i.sldM, "opacity", "0"), i.padM.classList.add("jscolor-padM"), i.sldM.classList.add("jscolor-sldM"), i.pad.style.position = "relative", i.pad.style.width = f.width + "px", i.pad.style.height = f.height + "px", i.pad.classList.add("jscolor-pad"), i.padPal.draw(f.width, f.height, t.getPadYComponent(f)), i.padB.style.position = "absolute", i.padB.style.left = f.padding + "px", i.padB.style.top = f.padding + "px", i.padB.classList.add("jscolor-padB"), i.padB.style.border = f.insetWidth + "px solid", i.padB.style.borderColor = f.insetColor, i.padM._jscInstance = f, i.padM._jscControlName = "pad", i.padM.style.position = "absolute", i.padM.style.left = "0", i.padM.style.top = "0", i.padM.style.width = f.padding + 2 * f.insetWidth + f.width + s / 2 + "px", i.padM.style.height = o[1] + "px", i.padM.style.cursor = h, i.padM.classList.add("jscolor-padM"), i.cross.style.position = "absolute", i.cross.style.left = i.cross.style.top = "0", i.cross.style.width = i.cross.style.height = r + "px", i.cross.classList.add("jscolor-cross"), i.crossBY.style.position = i.crossBX.style.position = "absolute", i.crossBY.style.background = i.crossBX.style.background = f.pointerBorderColor, i.crossBY.style.width = i.crossBX.style.height = 2 * f.pointerBorderWidth + f.pointerThickness + "px", i.crossBY.style.height = i.crossBX.style.width = r + "px", i.crossBY.style.left = i.crossBX.style.top = Math.floor(r / 2) - Math.floor(f.pointerThickness / 2) - f.pointerBorderWidth + "px", i.crossBY.style.top = i.crossBX.style.left = "0", i.crossLY.style.position = i.crossLX.style.position = "absolute", i.crossLY.style.background = i.crossLX.style.background = f.pointerColor, i.crossLY.style.height = i.crossLX.style.width = r - 2 * f.pointerBorderWidth + "px", i.crossLY.style.width = i.crossLX.style.height = f.pointerThickness + "px", i.crossLY.style.left = i.crossLX.style.top = Math.floor(r / 2) - Math.floor(f.pointerThickness / 2) + "px", i.crossLY.style.top = i.crossLX.style.left = f.pointerBorderWidth + "px", i.sld.style.overflow = "hidden", i.sld.style.width = f.sliderSize + "px", i.sld.style.height = f.height + "px", i.sld.classList.add("jscolor-sld"), i.sldGrad.draw(f.sliderSize, f.height, "#000", "#000"), i.sldB.style.display = n ? "block" : "none", i.sldB.style.position = "absolute", i.sldB.style.right = f.padding + "px", i.sldB.style.top = f.padding + "px", i.sldB.style.border = f.insetWidth + "px solid", i.sldB.style.borderColor = f.insetColor, i.sldM._jscInstance = f, i.sldM._jscControlName = "sld", i.sldM.style.display = n ? "block" : "none", i.sldM.style.position = "absolute", i.sldM.style.right = "0", i.sldM.style.top = "0", i.sldM.style.width = f.sliderSize + s / 2 + f.padding + 2 * f.insetWidth + "px", i.sldM.style.height = o[1] + "px", i.sldM.style.cursor = "default", i.sldPtrIB.style.border = i.sldPtrOB.style.border = f.pointerBorderWidth + "px solid " + f.pointerBorderColor, i.sldPtrOB.style.position = "absolute", i.sldPtrOB.style.left = -(2 * f.pointerBorderWidth + f.pointerThickness) + "px", i.sldPtrOB.style.top = "0", i.sldPtrMB.style.border = f.pointerThickness + "px solid " + f.pointerColor, i.sldPtrS.style.width = f.sliderSize + "px", i.sldPtrS.style.height = m + "px", i.btn.style.display = f.closable ? "block" : "none", i.btn.style.position = "absolute", i.btn.style.left = f.padding + "px", i.btn.style.bottom = f.padding + "px", i.btn.style.padding = "0 15px", i.btn.style.height = f.buttonHeight + "px", i.btn.style.border = f.insetWidth + "px solid", e(), i.btn.style.color = f.buttonColor, i.btn.style.font = "12px sans-serif", i.btn.style.textAlign = "center";
        try {
          i.btn.style.cursor = "pointer"
        } catch (t) {
          i.btn.style.cursor = "hand"
        }
        i.btn.onmousedown = function() {
          f.hide()
        }, i.btnT.style.lineHeight = f.buttonHeight + "px", i.btnT.innerHTML = "", i.btnT.appendChild(document.createTextNode(f.closeText)), a(), l(), t.picker.owner && t.picker.owner !== f && t.unsetClass(t.picker.owner.targetElement, f.activeClass), t.picker.owner = f, t.isElementType(g, "body") ? t.redrawPosition() : t._drawPosition(f, 0, 0, "relative", !1), i.wrap.parentNode != g && g.appendChild(i.wrap), t.setClass(f.targetElement, f.activeClass)
      }

      function a() {
        switch (t.getPadYComponent(f)) {
          case "s":
            var e = 1;
            break;
          case "v":
            var e = 2
        }
        var i = Math.round(f.hsv[0] / 360 * (f.width - 1)),
          n = Math.round((1 - f.hsv[e] / 100) * (f.height - 1)),
          r = 2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
          s = -Math.floor(r / 2);
        switch (t.picker.cross.style.left = i + s + "px", t.picker.cross.style.top = n + s + "px", t.getSliderComponent(f)) {
          case "s":
            var a = o(f.hsv[0], 100, f.hsv[2]),
              l = o(f.hsv[0], 0, f.hsv[2]),
              c = "rgb(" + Math.round(a[0]) + "," + Math.round(a[1]) + "," + Math.round(a[2]) + ")",
              h = "rgb(" + Math.round(l[0]) + "," + Math.round(l[1]) + "," + Math.round(l[2]) + ")";
            t.picker.sldGrad.draw(f.sliderSize, f.height, c, h);
            break;
          case "v":
            var u = o(f.hsv[0], f.hsv[1], 100),
              c = "rgb(" + Math.round(u[0]) + "," + Math.round(u[1]) + "," + Math.round(u[2]) + ")",
              h = "#000";
            t.picker.sldGrad.draw(f.sliderSize, f.height, c, h)
        }
      }

      function l() {
        var e = t.getSliderComponent(f);
        if (e) {
          switch (e) {
            case "s":
              var i = 1;
              break;
            case "v":
              var i = 2
          }
          var n = Math.round((1 - f.hsv[i] / 100) * (f.height - 1));
          t.picker.sldPtrOB.style.top = n - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(m / 2) + "px"
        }
      }

      function c() {
        return t.picker && t.picker.owner === f
      }

      function h() {
        f.importColor()
      }
      this.value = null, this.valueElement = e, this.styleElement = e, this.required = !0, this.refine = !0, this.hash = !1, this.uppercase = !0, this.onFineChange = null, this.activeClass = "jscolor-active", this.minS = 0, this.maxS = 100, this.minV = 0, this.maxV = 100, this.hsv = [0, 0, 100], this.rgb = [255, 255, 255], this.width = 181, this.height = 101, this.showOnClick = !0, this.mode = "HSV", this.position = "bottom", this.smartPosition = !0, this.sliderSize = 16, this.crossSize = 8, this.closable = !1, this.closeText = "Close", this.buttonColor = "#000000", this.buttonHeight = 18, this.padding = 12, this.backgroundColor = "#FFFFFF", this.borderWidth = 1, this.borderColor = "#BBBBBB", this.borderRadius = 8, this.insetWidth = 1, this.insetColor = "#BBBBBB", this.shadow = !0, this.shadowBlur = 15, this.shadowColor = "rgba(0,0,0,0.2)", this.pointerColor = "#4C4C4C", this.pointerBorderColor = "#FFFFFF", this.pointerBorderWidth = 1, this.pointerThickness = 2, this.zIndex = 1e3, this.container = null;
      for (var u in i) i.hasOwnProperty(u) && (this[u] = i[u]);
      if (this.hide = function() {
          document.body.height = "auto", document.body.style.overflow = "auto", c() && r()
        }, this.show = function() {
          document.body.height = document.documentElement.clientHeight + "px", document.body.style.overflow = "hidden", s()
        }, this.redraw = function() {
          c() && s()
        }, this.importColor = function() {
          this.valueElement && t.isElementType(this.valueElement, "input") ? this.refine ? !this.required && /^\s*$/.test(this.valueElement.value) ? (this.valueElement.value = "", this.styleElement && (this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage, this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor, this.styleElement.style.color = this.styleElement._jscOrigStyle.color), this.exportColor(t.leaveValue | t.leaveStyle)) : this.fromString(this.valueElement.value) || this.exportColor() : this.fromString(this.valueElement.value, t.leaveValue) || (this.styleElement && (this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage, this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor, this.styleElement.style.color = this.styleElement._jscOrigStyle.color), this.exportColor(t.leaveValue | t.leaveStyle)) : this.exportColor()
        }, this.exportColor = function(e) {
          if (!(e & t.leaveValue) && this.valueElement) {
            var i = this.toString();
            this.uppercase && (i = i.toUpperCase()), this.hash && (i = "#" + i), t.isElementType(this.valueElement, "input") ? this.valueElement.value = i : this.valueElement.innerHTML = i
          }
          e & t.leaveStyle || this.styleElement && (this.styleElement.style.backgroundImage = "none", this.styleElement.style.backgroundColor = "#" + this.toString(), this.styleElement.style.color = this.isLight() ? "#000" : "#FFF"), e & t.leavePad || !c() || a(), e & t.leaveSld || !c() || l()
        }, this.fromHSV = function(t, e, i, n) {
          if (null !== t) {
            if (isNaN(t)) return !1;
            t = Math.max(0, Math.min(360, t))
          }
          if (null !== e) {
            if (isNaN(e)) return !1;
            e = Math.max(0, Math.min(100, this.maxS, e), this.minS)
          }
          if (null !== i) {
            if (isNaN(i)) return !1;
            i = Math.max(0, Math.min(100, this.maxV, i), this.minV)
          }
          this.rgb = o(null === t ? this.hsv[0] : this.hsv[0] = t, null === e ? this.hsv[1] : this.hsv[1] = e, null === i ? this.hsv[2] : this.hsv[2] = i), this.exportColor(n)
        }, this.fromRGB = function(t, e, i, r) {
          if (null !== t) {
            if (isNaN(t)) return !1;
            t = Math.max(0, Math.min(255, t))
          }
          if (null !== e) {
            if (isNaN(e)) return !1;
            e = Math.max(0, Math.min(255, e))
          }
          if (null !== i) {
            if (isNaN(i)) return !1;
            i = Math.max(0, Math.min(255, i))
          }
          var s = n(null === t ? this.rgb[0] : t, null === e ? this.rgb[1] : e, null === i ? this.rgb[2] : i);
          null !== s[0] && (this.hsv[0] = Math.max(0, Math.min(360, s[0]))), 0 !== s[2] && (this.hsv[1] = null === s[1] ? null : Math.max(0, this.minS, Math.min(100, this.maxS, s[1]))), this.hsv[2] = null === s[2] ? null : Math.max(0, this.minV, Math.min(100, this.maxV, s[2]));
          var a = o(this.hsv[0], this.hsv[1], this.hsv[2]);
          this.rgb[0] = a[0], this.rgb[1] = a[1], this.rgb[2] = a[2], this.exportColor(r)
        }, this.fromString = function(t, e) {
          var i;
          if (i = t.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i)) return 6 === i[1].length ? this.fromRGB(parseInt(i[1].substr(0, 2), 16), parseInt(i[1].substr(2, 2), 16), parseInt(i[1].substr(4, 2), 16), e) : this.fromRGB(parseInt(i[1].charAt(0) + i[1].charAt(0), 16), parseInt(i[1].charAt(1) + i[1].charAt(1), 16), parseInt(i[1].charAt(2) + i[1].charAt(2), 16), e), !0;
          if (i = t.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {
            var n, o, r, s = i[1].split(","),
              a = /^\s*(\d*)(\.\d+)?\s*$/;
            if (s.length >= 3 && (n = s[0].match(a)) && (o = s[1].match(a)) && (r = s[2].match(a))) {
              var l = parseFloat((n[1] || "0") + (n[2] || "")),
                c = parseFloat((o[1] || "0") + (o[2] || "")),
                h = parseFloat((r[1] || "0") + (r[2] || ""));
              return this.fromRGB(l, c, h, e), !0
            }
          }
          return !1
        }, this.toString = function() {
          return (256 | Math.round(this.rgb[0])).toString(16).substr(1) + (256 | Math.round(this.rgb[1])).toString(16).substr(1) + (256 | Math.round(this.rgb[2])).toString(16).substr(1)
        }, this.toHEXString = function() {
          return "#" + this.toString().toUpperCase()
        }, this.toRGBString = function() {
          return "rgb(" + Math.round(this.rgb[0]) + "," + Math.round(this.rgb[1]) + "," + Math.round(this.rgb[2]) + ")"
        }, this.isLight = function() {
          return .213 * this.rgb[0] + .715 * this.rgb[1] + .072 * this.rgb[2] > 127.5
        }, this._processParentElementsInDOM = function() {
          if (!this._linkedElementsProcessed) {
            this._linkedElementsProcessed = !0;
            var e = this.targetElement;
            do {
              var i = t.getStyle(e);
              i && "fixed" === i.position.toLowerCase() && (this.fixed = !0), e !== this.targetElement && (e._jscEventsAttached || (t.attachEvent(e, "scroll", t.onParentScroll), e._jscEventsAttached = !0))
            } while ((e = e.parentNode) && !t.isElementType(e, "body"))
          }
        }, "string" == typeof e) {
        var d = e,
          p = document.getElementById(d);
        p ? this.targetElement = p : t.warn("Could not find target element with ID '" + d + "'")
      } else e ? this.targetElement = e : t.warn("Invalid target element: '" + e + "'");
      if (this.targetElement._jscLinkedInstance) return void t.warn("Cannot link jscolor twice to the same element. Skipping.");
      this.targetElement._jscLinkedInstance = this, this.valueElement = t.fetchElement(this.valueElement), this.styleElement = t.fetchElement(this.styleElement);
      var f = this,
        g = this.container ? t.fetchElement(this.container) : document.getElementsByTagName("body")[0],
        m = 3;
      if (t.isElementType(this.targetElement, "button"))
        if (this.targetElement.onclick) {
          var v = this.targetElement.onclick;
          this.targetElement.onclick = function(t) {
            return v.call(this, t), !1
          }
        } else this.targetElement.onclick = function() {
          return !1
        };
      if (this.valueElement && t.isElementType(this.valueElement, "input")) {
        var y = function() {
          f.fromString(f.valueElement.value, t.leaveValue), t.dispatchFineChange(f)
        };
        t.attachEvent(this.valueElement, "keyup", y), t.attachEvent(this.valueElement, "input", y), t.attachEvent(this.valueElement, "blur", h), this.valueElement.setAttribute("autocomplete", "off")
      }
      this.styleElement && (this.styleElement._jscOrigStyle = {
        backgroundImage: this.styleElement.style.backgroundImage,
        backgroundColor: this.styleElement.style.backgroundColor,
        color: this.styleElement.style.color
      }), this.value ? this.fromString(this.value) || this.exportColor() : this.importColor()
    }
  };
  return t.jscolor.lookupClass = "jscolor", t.jscolor.installByClassName = function(e) {
    var i = document.getElementsByTagName("input"),
      n = document.getElementsByTagName("button");
    t.tryInstallOnElements(i, e), t.tryInstallOnElements(n, e)
  }, t.register(), t.jscolor
}()), ! function t(objwithconfarray, i, n) {
  function o(s, a) {
    if (!i[s]) {
      if (!objwithconfarray[s]) {
        var l = "function" == typeof require && require;
        if (!a && l) return l(s, !0);
        if (r) return r(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var h = i[s] = {
        exports: {}
      };
      objwithconfarray[s][0].call(h.exports, function(t) {
        var i = objwithconfarray[s][1][t];
        return o(i ? i : t)
      }, h, h.exports, t, objwithconfarray, i, n)
    }
    return i[s].exports
  }
  for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
  return o
}({
  1: [function(t, e, i) {
    var n = t("./components/checkout"),
      o = t("./components/logo"),
      r = t("./components/login"),
      s = t("./components/contact"),
      a = t("./components/header"),
      l = t("./components/order"),
      c = t("./components/options"),
      h = t("./components/editor"),
      u = t("./components/category"),
      d = t("./components/stripe");
    window.LogomakerWrapper = {
      checkout: new n,
      logo: new o,
      login: new r,
      contact: new s,
      header: new a,
      order: new l,
      options: new c,
      editor: new h,
      category: new u,
      stripe: new d
    },
      function t() {
        if ("function" == typeof JL && "function" == typeof JL.createAjaxAppender) {
          var e = JL.createAjaxAppender(),
            i = JL.createConsoleAppender("consoleAppender");
          e.setOptions({
            url: "/logomaker/app/api/log"
          }), JL().setOptions({
            appenders: [e, i]
          })
        } else setTimeout(t, 500)
      }()
  }, {
    "./components/category": 5,
    "./components/checkout": 6,
    "./components/contact": 8,
    "./components/editor": 10,
    "./components/header": 12,
    "./components/login": 13,
    "./components/logo": 14,
    "./components/options": 15,
    "./components/order": 16,
    "./components/stripe": 19
  }],
  2: [function(t, e, i) {
    e.exports = {
      google: {
        families: ["Aclonica", "Allerta Stencil", "Amaranth", "Anton", "Architects Daughter", "Arvo", "Calligraffitti", "Clicker Script", "Coming Soon", "Courgette", "Crafty Girls", "Days One", "Delius Unicase", "Fjalla One", "Gloria Hallelujah", "Great Vibes", "Handlee", "IM Fell English", "Inconsolata", "Indie Flower", "Josefin Slab", "Just Another Hand", "Khula", "Lakki Reddy", "Leckerli One", "Nova Mono", "Orbitron", "Oswald", "Overpass", "PT Sans", "PT Serif", "Overpass", "Patrick Hand", "Prompt", "Rasa", "Reenie Beanie", "Roboto Condensed", "Rochester", "Rock Salt", "Rokkitt", "Rosario", "Rubik", "Ruda", "Ruge Boogie", "Russo One", "Sacramento", "Sarpanch", "Spinnaker", "Abril Fatface", "Allan", "Audiowide", "Baloo Chettan", "Bangers", "Bevan", "Boogaloo", "Bungee", "Bungee Inline", "Bungee Outline", "Bungee Shade", "Comfortaa", "Creepster", "Ewert", "Finger Paint", "Fontdiner Swanky", "Frijole", "Fruktur", "Gruppo", "Irish Grover", "Knewave", "Life Savers", "Lobster", "Londrina Outline", "Love Ya Like A Sister", "Luckiest Guy", "McLaren", "Megrim", "Miniver", "Mogra", "Monoton", "Nosifer", "Overlock SC", "Patua One", "Poiret One", "Press Start 2P", "Rakkas", "Rammetto One", "Revalia", "Righteous", "Rye", "Shrikhand", "Sigmar One", "Slackey", "Special Elite", "Unica One", "Unkempt", "Vampiro One", "Vast Shadow", "Yatra One"]
      }
    }
  }, {}],
  3: [function(t, e, i) {
    var n = t("./config"),
      o = t("./store"),
      r = function() {
        this.token = "", this.store = new o
      };
    r.prototype.goToLogin = function() {
      this.store.spliceInfo({}, {
        login: null,
        password: null
      }), n.getLoginUrl() !== document.location.href && (document.location.href = n.getLoginUrl())
    }, r.prototype.isLoggedIn = function(t, e, i, n, o) {
      var r = this;
      n = "function" == typeof n ? n : function() {}, o = "function" == typeof o ? o : this.goToLogin.bind(this), $.ajax({
        url: t,
        method: "POST",
        data: {
          email: e,
          password: i
        },
        dataType: "json",
        success: function(t) {
          t.success ? (r.token = t.token, $("#sign-in-menu-point2 a").html('<i class="icon-user"></i> My Account'), $("#sign-in-menu-point").addClass("hidden"), $("#sign-in-menu-point2").removeClass("hidden"), n.call(r, t)) : o.call(r, t)
        },
        error: o
      })
    }, e.exports = r
  }, {
    "./config": 7,
    "./store": 18
  }],
  4: [function(t, e, i) {
    var n = function() {
      this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
    n.prototype.base64encode = function(t) {
      var e, i, n, o, r, s, a, l = "",
        c = 0;
      for (t = this._utf8_encode(t); c < t.length;) e = t.charCodeAt(c++), i = t.charCodeAt(c++), n = t.charCodeAt(c++), o = e >> 2, r = (3 & e) << 4 | i >> 4, s = (15 & i) << 2 | n >> 6, a = 63 & n, isNaN(i) ? s = a = 64 : isNaN(n) && (a = 64), l = l + this._keyStr.charAt(o) + this._keyStr.charAt(r) + this._keyStr.charAt(s) + this._keyStr.charAt(a);
      return l
    }, n.prototype.base64decode = function(t) {
      var e, i, n, o, r, s, a, l = "",
        c = 0;
      for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length;) o = this._keyStr.indexOf(t.charAt(c++)), r = this._keyStr.indexOf(t.charAt(c++)), s = this._keyStr.indexOf(t.charAt(c++)), a = this._keyStr.indexOf(t.charAt(c++)), e = o << 2 | r >> 4, i = (15 & r) << 4 | s >> 2, n = (3 & s) << 6 | a, l += String.fromCharCode(e), 64 != s && (l += String.fromCharCode(i)), 64 != a && (l += String.fromCharCode(n));
      return l = this._utf8_decode(l)
    }, n.prototype._utf8_encode = function(t) {
      t = t.replace(/\r\n/g, "\n");
      for (var e = "", i = 0; i < t.length; i++) {
        var n = t.charCodeAt(i);
        n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128))
      }
      return e
    }, n.prototype._utf8_decode = function(t) {
      for (var e = "", i = 0, n = 0, o = 0, r = 0; i < t.length;) n = t.charCodeAt(i), n < 128 ? (e += String.fromCharCode(n), i++) : n > 191 && n < 224 ? (o = t.charCodeAt(i + 1), e += String.fromCharCode((31 & n) << 6 | 63 & o), i += 2) : (o = t.charCodeAt(i + 1), r = t.charCodeAt(i + 2), e += String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | 63 & r), i += 3);
      return e
    }, e.exports = n
  }, {}],
  5: [
    function(setConfigs, e, i) {
    "use strict";
    var n = setConfigs("./config"),
      o = setConfigs("./auth"),
      r = setConfigs("./store"),
      s = setConfigs("./base64"),
      a = setConfigs("./fabric"),
      vanvascreator = function() {
        this.auth = new o, this.store = new r, this.base64 = new s, this.fabric = new a, this.categories = [], this.category = "", this.info = {}, this.url = "", this.categories_svg = [], this.limit = 12, this.paginationSize = 9, this.active = 0, this.pages = [], this.currentPage = 1, this.svgs = [], this.canvaseNumbers = [], this.logoCanvases = [], this.availableFonts = []
      };
    vanvascreator.prototype.navigateByUrl = function(t) {
      document.location.href = t
    }, vanvascreator.prototype.categoryUrl = function(t) {
      return "string" == typeof t ? t.toLowerCase().replace(/\s/g, "").replace(/&/g, "") : t
    }, vanvascreator.prototype.makeUrl = function(t, e) {
      return "?category=" + this.categoryUrl(t) + "&page=" + e
    }, vanvascreator.prototype.getPaginationHidden = function(t) {
      var e = this.pages.length + 1;
      if (e <= 10) return !1;
      var i = Math.floor((this.paginationSize - 3) / 2);
      return this.currentPage < i || this.currentPage > e - i ? t > i + 1 && t < e - i - 1 && Math.ceil(e / 2) !== t : this.currentPage > i + 1 && this.currentPage < e - i - 1 ? t > i && t < this.currentPage - 1 || t > this.currentPage + 1 && t < e - i : this.currentPage === i || this.currentPage === i + 1 ? t > i + 3 && t < e - i : this.currentPage !== e - i && this.currentPage !== e - i - 1 || t > i && t < e - i - 3
    }, vanvascreator.prototype.getPageLabel = function(t) {
      var e = this.pages.length + 1;
      if (e <= 10) return t;
      var i = Math.floor((this.paginationSize - 3) / 2);
      return this.currentPage < i || this.currentPage > e - i ? i + 1 === t || e - i - 1 === t ? "..." : t : this.currentPage > i + 1 && this.currentPage < e - i - 1 ? i === t || e - i === t ? "..." : t : this.currentPage === i || this.currentPage === i + 1 ? i + 3 === t ? "..." : t : this.currentPage !== e - i && this.currentPage !== e - i - 1 || e - i - 3 !== t ? t : "..."
    }, vanvascreator.prototype.renderPagination = function() {
      var t = $(".pagination");
      t.empty(), t.append('<a class="arrows left" href="#"><svg xml:space="preserve" viewBox="0 0 50 80"><polyline fill="none" points="45.63,75.8 0.375,38.087 45.63,0.375 " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></polyline></svg></a>');
      for (var e = 0; e < this.pages.length; ++e) {
        var i = e + 1;
        if (!this.getPaginationHidden(i)) {
          var n = this.getPageLabel(i);
          i === this.currentPage ? t.append('<a class="pages active" href="#">' + n + "</a>") : "..." === n ? t.append('<a class="pages" href="#">&hellip;</a>') : t.append('<a class="pages" href="' + this.makeUrl(this.category, i) + '">' + n + "</a>")
        }
      }
      t.append('<a class="arrows right" href="#"><svg xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 80" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" points="0.375,0.375 45.63,38.087 0.375,75.8 " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></polyline></svg></a>')
    }, vanvascreator.prototype.initPage = function(t) {
      t ? this.currentPage = t : this.currentPage = this.info.categoryPage ? this.info.categoryPage : parseInt(n.parseQuery().page), (isNaN(this.currentPage) || this.currentPage <= 0) && (this.currentPage = 1), this.pages.length > 0 && this.currentPage > this.pages.length && (this.currentPage = this.pages.length), this.renderPagination()
    }, vanvascreator.prototype.placeBottom = function(t, e) {
      t.set({
        left: e.getLeft(),
        top: e.getTop() + e.getHeight() + 10
      })
    }, vanvascreator.prototype.placeTop = function(t, e) {
      t.set({
        left: e.getLeft(),
        top: e.getTop() - t.getHeight() - 10
      })
    }, vanvascreator.prototype.placeLeft = function(t, e) {
      e.set({
        left: t.getLeft() - e.getWidth() - 10,
        top: t.getTop()
      })
    }, vanvascreator.prototype.placeRight = function(t, e) {
      e.set({
        left: t.getLeft() + t.getWidth() + 10,
        top: t.getTop()
      })
    },
      vanvascreator.prototype.getRandomFont = function() {
      var t = this.availableFonts;
      if (!Array.isArray(t) || 0 === t.length) return "Anton";
      var e = Math.floor(Math.random() * t.length);
      return t[e % t.length]
    }
    , vanvascreator.prototype.processOneCanvas = function(t, e) {
      var i, SVGS = this;
      SVGS.logoCanvases[t] ? (i = SVGS.logoCanvases[t], i.clear()) : (i = new fabric.Canvas("wpc-tpl-thumb-" + parseInt(t)), SVGS.logoCanvases[t] = i), i.selection = !0;
      var o = document.getElementsByClassName("canvas_container_category")[0];
      o = o.offsetWidth - 30;
      var r = Math.floor(o / this.fabric.SIMPLE_MESH_STEP) * this.fabric.SIMPLE_MESH_STEP + 1,
        s = Math.floor(.65 * o / this.fabric.SIMPLE_MESH_STEP) * this.fabric.SIMPLE_MESH_STEP + 1;
      i.setHeight(s).setWidth(r), fabric.loadSVGFromString(SVGS.svgs[t], function(t) {
        var o = new fabric.Group(t);
        o.set({
          selectable: !1
        }).scaleToHeight(70), i.centerObject(o).add(o);
        var r, s, a;
        if (!SVGS.info.slogan && SVGS.info.name.length < 12) {
          var l = Math.random();
          r = SVGS.fabric.getColors(o), s = SVGS.getRandomFont(), a = new fabric.IText(SVGS.info.name, {
            fontFamily: s,
            fill: r.length > 0 ? r[0] : "#000",
            left: 0,
            fontSize: 16,
            selectable: !1
          }), i.centerObject(a), a.set({
            top: a.getTop() + 25
          }), i.add(a), l < .25 ? (a.scaleToWidth(o.getWidth()), SVGS.placeBottom(a, o)) : l < .5 ? (a.scaleToWidth(o.getWidth()), SVGS.placeTop(a, o)) : l < .75 ? (o.scaleToHeight(a.getHeight()), SVGS.placeLeft(a, o)) : (o.scaleToHeight(a.getHeight()), SVGS.placeRight(a, o))
        } else if (o.set({
            top: o.getTop() - 25
          }), r = SVGS.fabric.getColors(o), s = SVGS.getRandomFont(), a = new fabric.IText(SVGS.info.name, {
            fontFamily: s,
            fill: r.length > 0 ? r[0] : "#000",
            left: 0,
            fontSize: 16,
            selectable: !1
          }), i.centerObject(a), a.set({
            top: a.getTop() + 25
          }), i.add(a), SVGS.info.slogan) {
          var c = new fabric.IText(SVGS.info.slogan, {
            fontFamily: s,
            fill: r.length > 1 ? r[1] : "#000",
            left: 0,
            fontSize: 16,
            selectable: !1
          });
          i.centerObject(c), c.set({
            top: c.getTop() + 45
          }), i.add(c)
        }
        i.discardActiveGroup().deactivateAll().discardActiveObject();
        var h = i.getObjects().map(function(t) {
            return t.set({
              active: !0,
              controls: !0,
              transparentCorners: !0
            })
          }),
          u = new fabric.Group(h, {
            originX: "center",
            originY: "center",
            transparentCorners: !0
          });
        i.setActiveGroup(u.setCoords());
        var d = i.getActiveGroup();
        d.getWidth() / i.getWidth() > d.getHeight() / i.getHeight() ? d.scaleToWidth(.8 * i.getWidth()) : d.scaleToHeight(.8 * i.getHeight()), i.centerObject(d), i.discardActiveObject().discardActiveGroup().deactivateAll(), i.selection = !1, fabric.Image.fromURL(e, function(t) {
          i.setBackgroundImage(t), i.renderAll()
        }), i.renderAll()
      })
    }, vanvascreator.prototype.initCanvas = function() {
      var t = 360,
        e = this.fabric.makeMesh(t, t);
      this.logoCanvases.length < this.limit && (this.logoCanvases = new Array(this.limit));
      for (var i in this.svgs) $("#test" + i).show(), this.processOneCanvas(i, e);
      for (i = this.svgs.length; i < this.limit; ++i) $("#test" + i).hide();
      this.showLoader = !1
    }, vanvascreator.prototype.getSVG = function() {
      var t, e = [],
        i = this;
      if (window.logos) {
        i.svgs = [];
        for (t in window.logos) i.svgs.push(i.base64.base64decode(window.logos[t]));
        i.initCanvas()
      } else {
        for (t = (this.currentPage - 1) * this.limit; t < this.currentPage * this.limit; ++t) i.categories_svg[t] && e.push(this.base64.base64encode(i.categories_svg[t]));
        $.post(n.getApiUrl("logos/generated"), {
          logos: e
        }).done(function(e) {
          var n = e.data;
          if (n) {
            i.svgs = [];
            for (t in n) i.svgs.push(i.base64.base64decode(n[t]));
            i.initCanvas()
          }
        }).fail(function(t) {
          console.error(t)
        })
      }
    }, vanvascreator.prototype.getItems = function(t) {
      var e = this;
      this.categories_svg = [], window.logos ? e.getSVG() : $.get(t).done(function(t) {
        e.categories_svg = t;
        var i = Math.ceil(e.categories_svg.length / e.limit);
        e.pages = [];
        for (var n = 0; n < i; n++) e.pages.push(n);
        e.initPage(), e.getSVG()
      }).fail(function(t) {
        console.error(t)
      })
    }, vanvascreator.prototype.detailCanvas = function(t) {
      t.preventDefault();
      var e = ($(t.target).parents(".canvas_container_category:first").prop("id") + "").substr(4);
      this.logoCanvases[e] || (console.error("No canvas!"), document.location.reload(!0)), this.store.setCanvasState(JSON.stringify(this.logoCanvases[e].toJSON())), this.store.spliceInfo({
        referrer: "category"
      }), this.navigateByUrl(n.getAppUrl("../editor.html"))
    }, vanvascreator.prototype.goToPage = function(t) {
      n.isSPA() && t.preventDefault();
      var e = parseInt(n.parseQuery($(t.target).prop("href") + "").page);
      this.initPage(e), this.getSVG(), this.store.spliceInfo({
        categoryPage: e
      })
    }, vanvascreator.prototype.initForm = function() {
      var t = $("#mycat");
      t.empty();
      for (var e in n.svgGroups) {
        var i = n.svgGroups[e],
          o = this.info.category === i.name ? ' selected="selected"' : "";
        t.append('<option class="level-0" value="' + i.name + '"' + o + ">" + i.name + "</option>")
      }
      $("#wpc-current-cn").val(this.info.name ? this.info.name : ""), $("#wpc-current-cs").val(this.info.slogan ? this.info.slogan : "")
    }, vanvascreator.prototype.updateCategory = function(t) {
      t.preventDefault(), this.store.spliceInfo({
        category: $("#mycat").val(),
        categoryPage: 1
      }), this.initPage(1);
      var e = this;
      this.info = this.store.getInfo(), this.categories.forEach(function(t, i) {
        t.name === e.info.category && (e.info.category_index = i, e.url = t.url)
      }), n.isSPA() ? (console.log(this.currentPage), this.url = n.getAppUrl(this.categories[this.info.category_index].url), this.getItems(this.url)) : this.navigateByUrl(n.getAppUrl("../category.html" + this.makeUrl(this.info.category, 1)))
    }, vanvascreator.prototype.step = function(t) {
      t.preventDefault();
      var e;
      $(t.currentTarget).hasClass("left") && this.currentPage > 1 ? e = this.currentPage - 1 : $(t.currentTarget).hasClass("right") && this.currentPage < this.pages.length && (e = this.currentPage + 1), n.isSPA() ? (this.initPage(e), this.getSVG()) : (this.store.spliceInfo({
        categoryPage: e
      }), this.navigateByUrl(n.getAppUrl("../category.html" + this.makeUrl(this.info.category, e))))
    }, vanvascreator.prototype.init = function() {
      var t = this;
      this.categories = n.svgGroups, this.info = this.store.getInfo();
      for (var e = 0; e < this.limit; ++e) this.canvaseNumbers.push(e);
      if (this.info)
        if (this.info.name && this.info.category) {
          var i = n.parseQuery().category;
          i ? (this.category = this.categoryUrl(i), this.categories.forEach(function(e, n) {
            t.categoryUrl(e.name) === t.categoryUrl(i) && (t.info.category_index = n, t.url = e.url)
          })) : this.info.category && (this.category = this.categoryUrl(this.info.category), this.categories.forEach(function(e, i) {
            e.name === t.info.category && (t.info.category_index = i, t.url = e.url)
          })), this.categories[this.info.category_index] ? this.url = n.getAppUrl(this.categories[this.info.category_index].url) : this.navigateByUrl(n.getAppUrl("../index.html"))
        } else console.error("no category hit"), this.navigateByUrl(n.getAppUrl("../index.html"));
      else console.error("no data"), this.navigateByUrl(n.getAppUrl("../index.html"));
      this.initForm(), $(document).on("click", ".canvas_link", this.detailCanvas.bind(this)), $(document).on("click", "#wpc-form-submit", this.updateCategory.bind(this)), $(document).on("change", "#mycat", this.updateCategory.bind(this)), fabric.Object.prototype.objectCaching = !1, fabric.Object.prototype.statefullCache = !1, fabric.Object.prototype.noScaleCache = !0, this.availableFonts = currentFonts;
      var o = {
        google: {
          families: currentFonts
        }
      };
      o.active = o.inactive = function() {
        fabric.Object.prototype.objectCaching = !1, fabric.Object.prototype.statefullCache = !1, fabric.Object.prototype.noScaleCache = !0, this.getItems(this.url)
      }.bind(this), WebFont.load(o)
    }, e.exports = vanvascreator
  }, {
    "./auth": 3,
    "./base64": 4,
    "./config": 7,
    "./fabric": 11,
    "./store": 18
  }
  ],
  6: [
    function(t, e, i) {
    var n = t("./config"),
      o = t("./auth"),
      r = t("./store"),
      s = t("./discount"),
      a = function() {
        this.auth = new o, this.store = new r, this.discount = new s(this), this.coupon = {}, this.price = 29.95, this.ppCurrency = "USD", this.mspCurrency = "USD", this.$ppForm = $("#paypal-form"), this.$mspUrl = $("#multisafepay-url"), this.logo_id = null, this.plan = "pro", this.country = "US", this.logoCheckoutForm = $(".logo-checkout-form"), this.stripe = null, this.card = null, this.stpCurrency = "EUR", this.user = {}
      };
    a.prototype.showHidePaymentSys = function() {
      var t = n.paymentSystems;
      if (t && "object" == typeof t) {
        var e = !1,
          i = !1,
          o = !1,
          r = !1;
        e = "undefined" == typeof t.paypal[this.country] ? t.paypal.default : t.paypal[this.country], e = !1, i = "undefined" == typeof t.hipay[this.country] ? t.hipay.default : t.hipay[this.country], o = "undefined" == typeof t["stripe-card"][this.country] ? t["stripe-card"].default : t["stripe-card"][this.country], r = "undefined" == typeof t["stripe-alipay"][this.country] ? t["stripe-alipay"].default : t["stripe-alipay"][this.country], e ? ($("#paypal-block").show(), $("#paypal-radio").prop("checked", !0)) : $("#paypal-block").remove(), i ? ($("#hipay-block").show(), $("#hipay-radio").prop("checked", !0)) : $("#hipay-block").remove(), r ? ($("#stripe-alipay-block").css("display", "block"), $("#stripe-alipay-radio").prop("checked", !0)) : $("#stripe-alipay-block").remove(), o ? ($("#stripe-card-block").show(), $("#stripe-card-radio").prop("checked", !0)) : $("#stripe-card-block").remove()
      }
    }, a.prototype.fillHtml = function() {
      this.$ppForm.find('[name="item_number"]').val(this.logo_id), this.$ppForm.find('[name="amount"]').val(this.price), this.$ppForm.find('[name="discount_rate"]').val(this.discount.getDiscount()), this.$ppForm.find('[name="currency_code"]').val(this.ppCurrency), this.$ppForm.find('[name="notify_url"]').val(n.getApiUrl("paypal/notify/" + this.logo_id)), this.$ppForm.find('[name="return"]').val(n.getApiUrl("paypal/done/" + this.logo_id)), this.$ppForm.find('[name="cancel_return"]').val(n.getApiUrl("paypal/cancel/" + this.logo_id)), ~["USD", "EUR", "GBP"].indexOf(this.mspCurrency.toUpperCase()) || $("#paypal-radio").parents(".c-radio:first").hide();
      var t = "";
      try {
        t = n.currencySigns[this.mspCurrency] ? n.currencySigns[this.mspCurrency] : ""
      } catch (e) {
        console.error(e), t = ""
      }
      var e = "00" !== parseFloat(this.price).toFixed(2).toString().slice(-2) ? parseFloat(this.price).toFixed(2) : parseFloat(this.price).toFixed();
      if ($(".logo-price-value").html("<p>" + t + e + "</p>"), this.discount.getDiscount() > 0) {
        $(".logo-discount-text").show();
        var i = "00" !== parseFloat(this.price * this.discount.discount).toFixed(2).toString().slice(-2) ? parseFloat(this.price * this.discount.discount).toFixed(2) : parseFloat(this.price * this.discount.discount).toFixed();
        $(".logo-discount-value").html("<p>- " + t + i + "</p>")
      } else $(".logo-discount-text").hide();
      var o = this.price - (this.discount.getDiscount() ? this.price * this.discount.discount : 0),
        r = parseFloat(100 * (o - Math.floor(o))).toFixed(0);
      r = r < 10 ? "0" + r : r, $(".logo-total-value").html('<p class="c-font-bold c-font-30">' + t + Math.floor(o).toFixed(0) + '<span class="c-shipping-total">' + ("00" !== r.toString().slice(-2) ? "." + r : "") + "</span></p>")
    }, a.prototype.fillCouponHtml = function() {
      this.$ppForm.find('[name="item_number"]').val(this.logo_id), this.$ppForm.find('[name="amount"]').val(this.price), this.$ppForm.find('[name="discount_rate"]').val(this.coupon.discount), this.$ppForm.find('[name="currency_code"]').val(this.ppCurrency), this.$ppForm.find('[name="notify_url"]').val(n.getApiUrl("paypal/notify/" + this.logo_id)), this.$ppForm.find('[name="return"]').val(n.getApiUrl("paypal/done/" + this.logo_id)), this.$ppForm.find('[name="cancel_return"]').val(n.getApiUrl("paypal/cancel/" + this.logo_id)), ~["USD", "EUR", "GBP"].indexOf(this.mspCurrency.toUpperCase()) || $("#paypal-radio").parents(".c-radio:first").hide();
      var t = "";
      try {
        t = n.currencySigns[this.mspCurrency] ? n.currencySigns[this.mspCurrency] : ""
      } catch (e) {
        console.error(e), t = ""
      }
      var e = this.price,
        i = "00" !== parseFloat(e).toFixed(2).toString().slice(-2) ? parseFloat(e).toFixed(2) : parseFloat(e).toFixed();
      if ($(".logo-price-value").html("<p>" + t + i + "</p>"), this.coupon.hasOwnProperty("discount") && parseFloat(this.coupon.discount) > 0) {
        $(".logo-discount-text").show();
        var o = parseFloat(this.price) * parseFloat(this.coupon.discount) / 100,
          r = "00" !== parseFloat(o).toFixed(2).toString().slice(-2) ? parseFloat(o).toFixed(2) : parseFloat(o).toFixed();
        $(".logo-discount-value").html("<p>- " + t + r + "</p>"), e = this.price - (this.coupon.discount ? this.price * this.coupon.discount / 100 : 0)
      } else $(".logo-discount-text").hide();
      var s = parseFloat(100 * (e - Math.floor(e))).toFixed(0);
      s = s < 10 ? "0" + s : s, $(".logo-total-value").html('<p class="c-font-bold c-font-30">' + t + Math.floor(e).toFixed(0) + '<span class="c-shipping-total">' + ("00" !== s.toString().slice(-2) ? "." + s : "") + "</span></p>")
    }, a.prototype.placeInRect = function(t, e, i, n) {
      t.set({
        originX: "left",
        originY: "top"
      }), t.getHeight() / i.height > t.getWidth() / i.width ? t.scaleToHeight(i.height * n) : t.scaleToWidth(i.width * n), t.set({
        left: e.left + i.left + Math.floor((i.width - t.getWidth()) / 2),
        top: e.top + i.top + Math.floor((i.height - t.getHeight()) / 2),
        selectable: !1
      })
    }, a.prototype.drawLogo = function(t, e, i) {
      var n = this,
        o = t.width(),
        r = t.height(),
        s = "logo" + Math.random().toString().substr(2);
      t.wrap('<canvas id="' + s + '" class="foreground-img" width="' + o + '" height="' + r + '"></canvas>');
      var a = new fabric.Canvas(s);
      a.setWidth(o).setHeight(r), a.loadFromJSON(i, function() {
        var i = a.getObjects().map(function(t) {
            return t.set({
              active: !0,
              controls: !1,
              selectable: !1,
              transparentCorners: !0
            })
          }),
          o = new fabric.Group(i, {
            originX: "center",
            originY: "center",
            transparentCorners: !0
          });
        fabric.Image.fromURL(t.prop("src"), function(i) {
          t.remove(), a.clear(), i.set({
            selectable: !1
          }), a.add(i).centerObject(i), n.placeInRect(o, {
            left: i.getLeft(),
            top: i.getTop()
          }, e, .85), a.add(o).bringToFront(o), a.discardActiveGroup().renderAll(), a.selectable = !1
        })
      })
    }, a.prototype.drawLogos = function(t) {
      t && "object" == typeof t && t.logo_json ? (this.drawLogo($("#logo-preview-img-1"), {
        left: 10,
        top: 21,
        width: 138,
        height: 158
      }, t.logo_json), this.drawLogo($("#logo-preview-img-2"), {
        left: 88,
        top: 54,
        width: 80,
        height: 110
      }, t.logo_json), this.drawLogo($("#logo-preview-img-3"), {
        left: 53,
        top: 31,
        width: 86,
        height: 132
      }, t.logo_json)) : console.error("There are no json")
    }, a.prototype.loadOrderInfo = function() {
      var t = this.store.getInfo();
      t.logo_id || (console.error("No logo id"), document.location.href = n.getAppUrl("editlogo")), this.logo_id = t.logo_id;
      var e = this;
      $.ajax({
        url: n.getApiUrl("logo/" + this.logo_id),
        type: "GET",
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        dataType: "json",
        success: function(t) {
          if (t.success) {
            var i = n.webConfig;
            i.active = i.inactive = function() {
              e.drawLogos.call(e, t.data)
            }, WebFont.load(i)
          } else t.message && console.error(t.message)
        },
        error: function(t) {
          console.error(t)
        },
        complete: e.fillHtml.bind(e)
      })
    }, a.prototype.loadUserInfo = function() {
      var t = this;
      return $(".logo-checkout-form"), $.ajax({
        url: n.getApiUrl("me"),
        type: "GET",
        headers: {
          Authorization: "Bearer " + t.auth.token
        },
        dataType: "json",
        success: function(e) {
          if (e && "object" == typeof e) {
            "premium" === t.plan ? e.premiumPrice && !isNaN(parseFloat(e.premiumPrice)) && (t.price = parseFloat(e.premiumPrice)) : "pro" === t.plan ? e.proPrice && !isNaN(parseFloat(e.proPrice)) && (t.price = parseFloat(e.proPrice)) : e.businessPrice && !isNaN(parseFloat(e.businessPrice)) && (t.price = parseFloat(e.businessPrice)), e.ppCurrency && (t.ppCurrency = e.ppCurrency), e.mspCurrency && (t.mspCurrency = e.mspCurrency), t.country = e.country, t.showHidePaymentSys(), t.user = e;
            var i = t.user.firstName,
              o = t.user.lastName,
              r = t.user.email,
              s = t.user.country;
            $("#checkout-firstname").val(i), $("#checkout-lastname").val(o), $("#checkout-email").val(r), $("#checkout-country").val(s), e.stripeCurrency && (t.stpCurrency = e.stripeCurrency, $("div.c-radio").each(function() {
              if ($(this).data("currencies")) {
                var e = $(this).data("currencies").toString().replace(" ", "").toLowerCase().split(",");
                if (~e.indexOf(t.stpCurrency.toLowerCase()))
                  if (n.paymentSystems && "object" == typeof n.paymentSystems) {
                    var i = n.paymentSystems,
                      o = $(this).prop("id").replace("-block", "");
                    i[o] && "object" == typeof i[o] ? "undefined" == typeof i[o][t.user.country] ? i[o].default && $(this).show() : i[o][t.user.country] && $(this).show() : $(this).show()
                  } else $(this).show();
                else $(this).hide()
              }
            }))
          }
        }
      })
    }, a.prototype.goBack = function(t) {
      t && t.preventDefault(), n.isOptionsEnabled() ? document.location.href = n.getAppUrl("../options.html") : document.location.href = n.getAppUrl("../app/myaccount")
    }, a.prototype.beforeMSP = function() {
      var t = this;
      $.ajax({
        url: n.getApiUrl("multisafepay/" + this.logo_id),
        type: "POST",
        headers: {
          Authorization: "Bearer " + t.auth.token
        },
        data: {
          plan: t.plan,
          discountId: t.discount.discount_id ? t.discount.discount_id : "0",
          couponId: t.coupon.code ? t.coupon.code : "0"
        },
        dataType: "json",
        success: function(t) {
          t.error ? console.error(t.error) : document.location.href = t.url
        },
        error: function(t) {
          console.error(t)
        }
      })
    }, a.prototype.beforeHiPay = function() {
      var t = this;
      $.ajax({
        url: n.getApiUrl("hipay/" + this.logo_id),
        type: "POST",
        headers: {
          Authorization: "Bearer " + t.auth.token
        },
        data: {
          plan: t.plan,
          discountId: t.discount.discount_id ? t.discount.discount_id : "0",
          couponId: t.coupon.code ? t.coupon.code : "0"
        },
        dataType: "json",
        success: function(t) {
          t.error ? console.error(t.error) : document.location.href = t.url
        },
        error: function(t) {
          console.error(t)
        }
      })
    }, a.prototype.beforePayPal = function() {
      var t = this;
      $("#checkout-loading").css("display", "inline-block"), $.ajax({
        url: n.getApiUrl("paypal/" + this.logo_id),
        type: "POST",
        headers: {
          Authorization: "Bearer " + t.auth.token
        },
        data: {
          plan: t.plan,
          discountId: t.discount.discount_id ? t.discount.discount_id : "0",
          couponId: t.coupon.code ? t.coupon.code : "0"
        },
        dataType: "json",
        success: function(e) {
          $("#checkout-loading").css("display", "none"), e.error ? console.error(e.error) : t.$ppForm.submit()
        },
        error: function(t) {
          $("#checkout-loading").css("display", "none"), console.error(t)
        }
      })
    }, a.prototype.beforeStripe = function() {
      var t = this,
        e = this,
        i = t.store.getInfo();
      $("#checkout-loading").css("display", "inline-block"), console.log("Start stripe card"), this.stripe.createSource(this.card).then(function(o) {
        if (o.error) {
          console.log("Source create error===>", o.error.message);
          var r = document.getElementById("card-errors");
          r.textContent = o.error.message, $("#checkout-loading").css("display", "none")
        } else if (console.log("Take the token:"), "required" == o.source.card.three_d_secure) {
          console.log("3D secure status===>required");
          var s = (n.getLogomakerUrl("checkout.html"), !1),
            a = "?" + ["id=" + i.logo_id, "couponId=" + t.coupon.code ? t.coupon.code : "0", "discountId=" + t.discount.discount_id ? t.discount.discount_id : "0", "plan=" + t.plan].join("&");
          a + "&" + t.logoCheckoutForm.serialize();
          var l = function(e) {
            if (e.source.error) {
              console.log("Handler Error ===>", e.source.error.message);
              var o = e.source.error.message;
              $("#checkout-loading").css("display", "none");
              var r = document.getElementById("card-errors");
              return void(r.textContent = o)
            }
            if ("chargeable" == e.source.status) console.log("3D secure status===>chargeable"), $.ajax({
              url: n.getApiUrl("stripe/" + i.logo_id),
              type: "POST",
              headers: {
                Authorization: "Bearer " + t.auth.token
              },
              data: {
                plan: t.plan,
                discountId: t.discount.discount_id ? t.discount.discount_id : "0",
                couponId: t.coupon.code ? t.coupon.code : "0",
                tokenId: e.source.id,
                email: i.login,
                threeD: !0,
                logoCheckoutForm: t.logoCheckoutForm.serialize()
              },
              dataType: "json",
              success: function(t) {
                if ($("#checkout-loading").css("display", "none"), t.error) {
                  console.log("Charge Error ===> ", t.error);
                  var e = document.getElementById("card-errors");
                  e.textContent = t.error.message
                } else document.location.href = t.url
              },
              error: function(t) {
                $("#checkout-loading").css("display", "none"), console.log("Charge error0 ==>", t.message)
              }
            });
            else if ("pending" != e.source.status) return void console.log("3D Secure status ===> pending");
            s || ($("#checkout-loading").css("display", "none"), location.href = e.source.redirect.url, s = !0), t.stripe.retrieveSource({
              id: e.source.id,
              client_secret: e.source.client_secret
            }).then(l)
          };
          t.stripe.createSource({
            type: "three_d_secure",
            amount: Math.floor(100 * parseFloat(t.price)),
            currency: t.stpCurrency.toLowerCase(),
            three_d_secure: {
              card: o.source.id
            },
            redirect: {
              return_url: n.getApiUrl("stripe/source" + a)
            }
          }).then(l)
        } else console.log("Stripe::no 3D secure"), e.stripe.createToken(e.card).then(function(o) {
          if (o.error) {
            console.log("result error::", o.error);
            var r = document.getElementById("card-errors");
            return r.textContent = o.error.message, void $("#checkout-loading").css("display", "none")
          }
          $.ajax({
            url: n.getApiUrl("stripe/" + i.logo_id),
            type: "POST",
            headers: {
              Authorization: "Bearer " + t.auth.token
            },
            data: {
              plan: e.plan,
              discountId: e.discount.discount_id ? e.discount.discount_id : "0",
              couponId: e.coupon.code ? e.coupon.code : "0",
              tokenId: o.token.id,
              email: i.login,
              threeD: !1,
              logoCheckoutForm: t.logoCheckoutForm.serialize()
            },
            dataType: "json",
            success: function(t) {
              if ($("#checkout-loading").css("display", "none"), console.log("parseResponse", t), t.error) {
                console.error(t.error);
                var e = document.getElementById("card-errors");
                e.textContent = t.message
              } else document.location.href = t.url
            },
            error: function(t) {
              $("#checkout-loading").css("display", "none"), console.error(t);
              var e = document.getElementById("card-errors");
              e.textContent = t.message
            }
          })
        })
      })
    }, a.prototype.beforeStripeOld = function() {
      var t = this,
        e = this,
        i = t.store.getInfo();
      $("#checkout-loading").css("display", "inline-block"), console.log("Stripe::no 3D secure"), console.log("card object", t.card), this.stripe.createSource(this.card).then(function(o) {
        if (o.error) {
          var r = document.getElementById("card-errors");
          r.textContent = o.error.message, $("#checkout-loading").css("display", "none")
        } else if (console.log("result:::", o), "required" == o.source.card.three_d_secure) {
          var s = "?" + ["id=" + i.logo_id, "couponId=" + t.coupon.id, "discountId=" + t.discount.discount_id, "plan=" + t.plan].join("&");
          s + "&" + t.logoCheckoutForm.serialize();
          var a = 100 * (t.price - (t.discount.getDiscount() ? t.price * t.discount.discount : 0));
          t.stripe.createSource({
            type: "three_d_secure",
            amount: Math.floor(a),
            currency: t.stpCurrency.toLowerCase(),
            three_d_secure: {
              card: o.source.id
            },
            owner: {
              email: t.user.email
            },
            redirect: {
              return_url: n.getApiUrl("stripe/source" + s)
            }
          }).then(t.sourceHandler.bind(this))
        } else e.stripe.createToken(e.card).then(function(o) {
          if (o.error) {
            console.log("result error::", o.error);
            var r = document.getElementById("card-errors");
            r.textContent = o.error.message, $("#checkout-loading").css("display", "none")
          } else $.ajax({
            url: n.getApiUrl("stripe/" + i.logo_id),
            type: "POST",
            headers: {
              Authorization: "Bearer " + t.auth.token
            },
            data: {
              plan: e.plan,
              discountId: e.discount.discount_id ? e.discount.discount_id : "0",
              couponId: e.coupon.code ? e.coupon.code : "0",
              tokenId: o.token.id,
              email: i.login,
              threeD: !1,
              logoCheckoutForm: t.logoCheckoutForm.serialize()
            },
            dataType: "json",
            success: function(t) {
              if ($("#checkout-loading").css("display", "none"), console.log("parseResponse", t), t.error) {
                console.error(t.error);
                var e = document.getElementById("card-errors");
                e.textContent = t.message
              } else document.location.href = t.url
            },
            error: function(t) {
              $("#checkout-loading").css("display", "none"), console.error(t);
              var e = document.getElementById("card-errors");
              e.textContent = t.message
            }
          })
        })
      })
    }, a.prototype.createSource = function(t) {
      var e = "",
        i = parseFloat(this.price);
      this.user.firstName && (e = this.user.firstName), this.user.lastName && (e += " " + this.user.lastName);
      var o = this.store.getInfo(),
        r = "?" + ["id=" + o.logo_id, "couponId=" + this.coupon.id, "discountId=" + this.discount.discount_id, "plan=" + this.plan].join("&");
      r + "&" + this.logoCheckoutForm.serialize();
      var s = this.discount.hasOwnProperty("discount") ? parseFloat(this.discount.discount) : 0,
        a = this.coupon.hasOwnProperty("discount") ? parseFloat(this.coupon.discount) : 0;
      s < 1 && (s *= 100), a < 1 && (a *= 100), s && (i = parseFloat(this.price) - parseFloat(this.price) * parseFloat(s) / 100), a && (i = parseFloat(this.price) - parseFloat(this.price) * parseFloat(a) / 100), s && a && (i = parseFloat(s) > parseFloat(a) ? parseFloat(this.price) - parseFloat(this.price) * parseFloat(s) / 100 : parseFloat(this.price) - parseFloat(this.price) * parseFloat(a) / 100), $("#checkout-loading").css("display", "inline-block");
      var l = {
        type: t,
        amount: Math.floor(100 * i),
        currency: this.stpCurrency.toLowerCase(),
        owner: {
          name: e,
          email: this.user.email
        },
        redirect: {
          return_url: n.getApiUrl("stripe/source" + r)
        }
      };
      "sofort" == t && (l.sofort = {
        country: this.country
      }), console.log("payment", l), console.log("this", this), this.stripe.createSource(l).then(this.sourceHandler.bind(this))
    }, a.prototype.sourceHandler = function(t) {
      $("#checkout-loading").css("display", "none"), t.error ? (console.error(t.error.message), location.href = n.getAppUrl("../index.html")) : location.href = t.source.redirect.url
    }, a.prototype.createStripeToken = function() {
      this.store.getInfo()
    }, a.prototype.displaySummary = function(t, e) {
      e ? t.find(".error_summary").html(e).removeClass("hidden") : t.find(".error_summary").addClass("hidden")
    }, a.prototype.displayErrors = function(t, e) {
      t.find(".help-block").addClass("hidden"), t.find(".form-group").removeClass("has-error");
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var n = e[i].pop();
          t.find("." + i + "_error").html(n).removeClass("hidden").parents(".form-group:first").addClass("has-error")
        }
    }, a.prototype.validateOrder = function(t) {
      var e = this,
        i = $(".logo-checkout-form"),
        o = i.serialize();
      return $.ajax({
        url: n.getApiUrl("validate"),
        type: "POST",
        data: o,
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        dataType: "json",
        beforeSend: function() {
          e.displayErrors(i, {}), e.displaySummary(i, null)
        },
        success: function(n) {
          n.success ? t.call(e) : n.errors ? e.displayErrors(i, n.errors) : n.message ? e.displaySummary(i, n.message) : e.displaySummary(i, "Maintenance work, please come back later")
        },
        error: function(t) {
          t.responseJSON ? e.displayErrors(i, t.responseJSON) : t.responseText ? e.displaySummary(i, t.responseText) : e.displaySummary(i, "Transfer error")
        }
      })
    }, a.prototype.placeOrder = function(t) {
      if (t.preventDefault(), !this.auth.token) return void this.auth.goToLogin();
      var e = this;
      this.validateOrder(function() {
        if ($("#msp-radio").is(":checked")) e.beforeMSP();
        else if ($("#paypal-radio").is(":checked")) e.beforePayPal();
        else if ($("#hipay-radio").is(":checked")) e.beforeHiPay();
        else if ($("#stripe-card-radio").is(":checked")) "IN" == e.country ? e.beforeStripeOld() : e.beforeStripe();
        else if ($("#stripe-alipay-radio").is(":checked")) e.createSource("alipay");
        else if ($("#stripe-bancontact-radio").is(":checked")) e.createSource("bancontact");
        else if ($("#stripe-giropay-radio").is(":checked")) e.createSource("giropay");
        else if ($("#stripe-ideal-radio").is(":checked")) e.createSource("ideal");
        else if ($("#stripe-p24-radio").is(":checked")) e.createSource("p24");
        else if ($("#stripe-sepa-radio").is(":checked")) e.createSource("sepa_debit");
        else {
          if (!$("#stripe-sofort-radio").is(":checked")) throw new Error("No one pay method checked");
          e.createSource("sofort")
        }
      })
    }, a.prototype.onGoogleShare = function(t) {
      t && "object" == typeof t && "completed" == t.status && "shared" == t.action && this.discount.setDiscount("google")
    }, a.prototype.onFacebookShare = function(t) {
      t && "object" == typeof t && this.discount.setDiscount("facebook")
    }, a.prototype.facebookShare = function(t) {
      t.preventDefault(), FB.ui({
        method: "share",
        href: n.getDomain()
      }, this.onFacebookShare.bind(this))
    }, a.prototype.twitterShare = function(t) {
      t.preventDefault();
      var e = this;
      $.ajax({
        url: n.getApiUrl("twitter/discount"),
        type: "GET",
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        dataType: "json",
        success: function(t) {
          t.url ? document.location.href = t.url : $("#twitter-share").hide()
        },
        error: function(t) {
          console.error(t), $("#twitter-share").hide()
        }
      })
    }, a.prototype.loadInfo = function() {
      this.discount.loadMaxDiscount().then(this.loadUserInfo.bind(this)).then(this.loadOrderInfo.bind(this)).then(this.checkCoupon.bind(this)), $(document).on("click", ".logo-cancel-checkout", this.goBack.bind(this)), $(document).on("submit", ".logo-checkout-form", this.placeOrder.bind(this)), $(document).on("click", "#facebook-share", this.facebookShare.bind(this)), $(document).on("click", "#twitter-share", this.twitterShare.bind(this)), $(document).on("click", ".apply-coupon", this.applyCoupon.bind(this)), $(document).on("click", "#submitCardPayment", this.placeOrder.bind(this)), $(document).on("click", ".next-paypal-card-payment", this.placeOrder.bind(this)), $(document).on("click", ".next-stripe-card-payment", this.placeOrder.bind(this)), $(document).ready(function() {
        $("input[type=radio][name=checkout-payment]").change(function() {
          $(".display-payment-button").hide(), $(".tab-payment-color").css("background", "#fff"), $(".label-payment-color").css("color", "#454e56"), $(".tab-" + this.value + "-color").css("background", "#32c5d2"), $(".label-" + this.value + "-color").css("color", "#fff"), $(".display-" + this.value).show(), "card" == this.value ? $(".logo-checkout").text("Confirm Payment") : $(".logo-checkout").text("Next")
        }), $("#checkout-firstname").keydown(function() {
          $(".checkout-firstname").hasClass("has-error") && ($(".checkout-firstname").removeClass("has-error"), $(".checkout-firstname_error").addClass("hidden"))
        }), $("#checkout-lastname").keydown(function() {
          $(".checkout-lastname").hasClass("has-error") && ($(".checkout-lastname").removeClass("has-error"), $(".checkout-lastname_error").addClass("hidden"))
        }), $("#checkout-email").keydown(function() {
          $(".checkout-email").hasClass("has-error") && ($(".checkout-email").removeClass("has-error"), $(".checkout-email_error").addClass("hidden"))
        }), $('[data-toggle="tooltip"]').tooltip()
      })
    }, a.prototype.applyCoupon = function(t) {
      t.preventDefault();
      var e = this,
        i = $($(t.target).data("target")).val();
      $.ajax({
        url: n.getApiUrl("coupon/check/" + i),
        type: "GET",
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        dataType: "json",
        success: function(t) {
          t.model ? (e.coupon = t.model, t.model.discount >= 100 ? e.freeCoupon(e.plan) : e.store.spliceInfo({
            coupon: t.model.code
          }), $(".coupon-label").hide(), $(".logo-discount-block").hide(), $(".coupon-discount").html("You have <strong>" + t.model.discount + "%</strong> discount"), e.fillCouponHtml.call(e), $(".coupon-applied").show()) : ($("#info-popup .message").text("Sorry, there are no coupon with this code or coupon has been used already"), $("#info-popup").modal("show"))
        },
        error: function(t) {
          console.error(t), $("#info-popup .message").text("Connection error, please update page"), $("#info-popup").modal("show")
        }
      })
    }, a.prototype.checkCoupon = function() {
      var t = this,
        e = this.store.getInfo(),
        i = e.coupon;
      i && $.ajax({
        url: n.getApiUrl("coupon/check/" + i),
        type: "GET",
        headers: {
          Authorization: "Bearer " + t.auth.token
        },
        dataType: "json",
        success: function(e) {
          e.model ? (t.coupon = e.model, $(".coupon-label").hide(), $(".logo-discount-block").hide(), $(".coupon-discount").html("You have <strong>" + e.model.discount + "%</strong> discount"), t.fillCouponHtml.call(t), $(".coupon-applied").show()) : t.store.spliceInfo({}, {
            coupon: null
          })
        }
      })
    }, a.prototype.freeCoupon = function(t) {
      var e = this;
      e.logo_id && this.coupon && this.coupon.discount >= 100 && $.ajax({
        url: n.getApiUrl("coupon/apply/" + e.coupon.code),
        type: "POST",
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        data: {
          plan: t,
          logoId: e.logo_id
        },
        dataType: "json",
        success: function(t) {
          t.error ? ($("#info-popup .message").text(t.message), $("#info-popup").modal("show")) : document.location.href = n.getAppUrl("../order-complete.html")
        }
      })
    }, a.prototype.init = function() {
      try {
        var t = this.store.getInfo();
        n.isOptionsEnabled() || (t.plan = "premium"), !t.plan || "business" !== t.plan && "pro" !== t.plan && "premium" !== t.plan ? this.goBack(null) : this.plan = t.plan, t.login && t.password ? this.auth.isLoggedIn(n.getApiUrl("login"), t.login, t.password, this.loadInfo.bind(this)) : this.auth.goToLogin()
      } catch (t) {
        console.error(t), document.location.href = n.getAppUrl("../index.html")
      }
      this.stripe = Stripe(n.payment.stripe.publishable_key);
      var e = this.stripe.elements(),
        i = {
          base: {
            color: "#32325d",
            lineHeight: "18px",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        };
      this.card = e.create("card", {
        style: i
      }), this.card.mount("#card-element"), this.card.addEventListener("change", function(t) {
        var e = document.getElementById("card-errors");
        t.error ? e.textContent = t.error.message : e.textContent = ""
      })
    }, e.exports = a
  }, {
    "./auth": 3,
    "./config": 7,
    "./discount": 9,
    "./store": 18
  }],
  7: [function(t, e, i) {
    function n(t, e) {
      return s.hasOwnProperty(t) ? s[t] : e
    }
    var o = t("./WebConfig"),
      r = t("./svgGroups"),
      s = t("./publicConfig.json"),
      a = {
        appName: n("APP_NAME", "MLOF"),
        _domain: n("APP_DOMAIN", "https://www.makelogoonlinefree.com/"),
        _apiUrl: n("API_URL", "logomaker/app/api/"),
        _appUrl: n("APP_URI", "logomaker/app/"),
        _loginUrl: n("LOGIN_URL", "logomaker/register-login.html"),
        _SPA: !1,
        _optionsEnabled: n("OPTIONS_ENABLED", !0),
        getApiUrl: function(t) {
          return this._domain + this._apiUrl + t
        },
        getAppUrl: function(t) {
          return this._domain + this._appUrl + t
        },
        getLoginUrl: function() {
          return this._domain + this._loginUrl
        },
        getCountry: function() {
          var t = this;
          $.ajax({
            url: t.getApiUrl("country"),
            dataType: "json",
            success: function(t) {
              t.country_code && $("#sign_up_form select").val(t.country_code)
            }
          })
        },
        getDomain: function() {
          return this._domain
        },
        isSPA: function() {
          return this._SPA
        },
        isOptionsEnabled: function() {
          return this._optionsEnabled
        },
        getLogomakerUrl: function(t) {
          return this._domain + t
        },
        webConfig: o,
        svgGroups: r,
        currencySigns: {
          USD: "$",
          EUR: "â‚¬",
          GBP: "Â£",
          AUD: "A$",
          BRL: "R$",
          CAD: "C$",
          CHF: "CHF",
          CLP: "CP$",
          CZK: "CZK",
          DKK: "Kr",
          MXN: "MP$",
          NOK: "r",
          PEN: "S/",
          PLN: "Zl",
          RON: "Lei",
          SEK: "Kr",
          VEF: "Bs",
          INR: "â‚¹"
        },
        paymentSystems: n("PAYMENT_SYSTEMS", null),
        payment: {
          stripe: {
            publishable_key: n("STRIPE_PUBLIC_KEY")
          }
        },
        parseQuery: function(t) {
          t = t ? t : document.location.href;
          var e = {},
            i = t.split("?").pop().split("&");
          for (var n in i) {
            var o = i[n].split("=");
            2 === o.length && (e[o[0]] = decodeURIComponent(o[1]))
          }
          return e
        }
      };
    e.exports = a
  }, {
    "./WebConfig": 2,
    "./publicConfig.json": 17,
    "./svgGroups": 20
  }],
  8: [function(t, e, i) {
    var n = t("./config"),
      o = t("./auth"),
      r = t("./store"),
      s = t("./header"),
      a = function() {
        this.auth = new o, this.store = new r, this.header = new s, this.$form = $("#logo_contact_form")
      };
    a.prototype.displaySummary = function(t, e) {
      e ? t.find(".error_summary").html(e).removeClass("hidden") : t.find(".error_summary").addClass("hidden")
    }, a.prototype.displayErrors = function(t, e) {
      t.find(".help-block").addClass("hidden"), t.find(".form-group").removeClass("has-error");
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var n = e[i].pop();
          t.find("." + i + "_error").html(n).removeClass("hidden").parents(".form-group:first").addClass("has-error")
        }
    }, a.prototype.OnSubmit = function(t) {
      t.stopPropagation(), t.preventDefault();
      var e = this,
        i = e.$form.serialize(),
        o = n.getApiUrl("contact");
      $.ajax({
        url: o,
        method: "POST",
        data: i,
        dataType: "json",
        beforeSend: function() {
          e.displaySummary(e.$form, null), e.displayErrors(e.$form, {})
        },
        success: function(t) {
          t.success ? (e.$form.parents(".modal-content").find("button.close").trigger("click"), $("#info-popup .message").text(t.message), $("#info-popup").modal("show"), e.$form.trigger("reset")) : t.errors ? e.displayErrors(e.$form, t.errors) : t.message ? e.displaySummary(e.$form, t.message) : e.displaySummary(e.$form, "Maintenance work, please come back later")
        },
        error: function(t) {
          t.responseJSON ? e.displayErrors(e.$form, t.responseJSON) : t.responseJSON && t.responseJSON.message ? e.displaySummary(e.$form, t.responseJSON.message) : t.responseText ? e.displaySummary(e.$form, t.responseText) : e.displaySummary(e.$form, "Transfer error")
        }
      })
    }, a.prototype.nothing = function() {}, a.prototype.init = function() {
      this.header.init(), $(document).on("submit", "#logo_contact_form", this.OnSubmit.bind(this))
    }, e.exports = a
  }, {
    "./auth": 3,
    "./config": 7,
    "./header": 12,
    "./store": 18
  }],
  9: [function(t, e, i) {
    var n = t("./config"),
      o = function(t) {
        this.discount = null, this.discount_id = null, this.parent = t, this.$discountBlock = $(".logo-discount-block")
      };
    o.prototype.setDiscount = function(t) {
      var e = this;
      $.ajax({
        url: n.getApiUrl("discount/" + t),
        method: "GET",
        headers: {
          Authorization: "Bearer " + e.parent.auth.token
        },
        dataType: "json",
        success: function(t) {
          t.error ? console.error(t.message) : (e.discount = parseFloat(t.discount), e.discount_id = t.discount_id, isNaN(e.discount) ? (e.$discountBlock.show(), e.discount = 0) : (e.$discountBlock.hide(), e.parent.fillHtml()))
        },
        error: function(t) {
          console.error(t)
        }
      })
    }, o.prototype.listenGoogle = function(t) {
      try {
        var e = t.data.replace("!_", "");
        e = JSON.parse(e), e.s.indexOf("_g_restyleMe") != -1 && 1 == Object.keys(e.a[0]).length && e.a[0].hasOwnProperty("height") && this.setDiscount("google")
      } catch (t) {}
    }, o.prototype.loadMaxDiscount = function() {
      var t = this;
      return $.ajax({
        url: n.getApiUrl("discounts"),
        method: "GET",
        headers: {
          Authorization: "Bearer " + t.parent.auth.token
        },
        dataType: "json",
        success: function(e) {
          e.discount && e.discount_id && (t.discount = e.discount, t.discount_id = e.discount_id)
        },
        error: function(t) {
          console.error(t)
        },
        complete: function() {
          t.discount > 0 ? t.$discountBlock.hide() : window.onmessage = t.listenGoogle.bind(t)
        }
      })
    }, o.prototype.getDiscount = function() {
      return 0 < this.discount && this.discount < 1 ? 100 * this.discount : 0
    }, e.exports = o
  }, {
    "./config": 7
  }],
  10: [function(t, e, i) {
    "use strict";
    var n = t("./config"),
      o = t("./auth"),
      r = t("./store"),
      s = function() {
        this.auth = new o, this.store = new r, this.businessPrice = 20, this.proPrice = 35, this.discount = 0, this.currency = "USD", this.logo_id = null, this.canvas = null, this.title = "title", this.slogan = "slogan", this.pathColor = "#fff", this.activePath = null, this.fontFamily = "", this.uppercased = !1, this.bold = !1, this.italic = !1, this.underline = !1, this.objectX = null, this.objectY = null, this.objectW = null, this.objectH = null, this.objectFS = null, this.states = [], this.state_iter = 0, this.isRedoing = !1, this.svg_loaded = !1, this.active_header = !1, this.textActual = "", this.info = null, this.popup_login = !1, this.popup_preview = !1, this.preview_canvas = !1, this.pristine_load = !1, this.false_save = !1, this.color_timeout = null, this.c_size = null, this.select_drop_active = !1, this.colors = [], this.colors2 = [], this.colors3 = [], this.non_text_objects_fill = {}, this.non_text_objects_stroke = {}, this.text_colors = [], this.text_colors2 = [], this.text_colors3 = [], this.state = "", this.CANVAS_STATE = "canvas_state", this.CANVAS_COPY_STATE = "canvas_copy_state", this.LOGO_STORAGE = "LOGO_STORAGE", this.INFO = "info"
      };
    s.prototype.navigateByUrl = function(t) {
      document.location.href = t
    }, s.prototype.preventDefault = function(t) {
      t && "object" == typeof t && t.preventDefault()
    }, s.prototype.elementDimension = function(t) {
      var e, i, n = document.getElementById(t);
      return document.all ? (e = n.currentStyle.height, i = parseInt(n.currentStyle.marginTop, 10) + parseInt(n.currentStyle.marginBottom, 10) + "px") : (e = document.defaultView.getComputedStyle(n, "").getPropertyValue("height"), i = parseInt(document.defaultView.getComputedStyle(n, "").getPropertyValue("margin-top")) + parseInt(document.defaultView.getComputedStyle(n, "").getPropertyValue("margin-bottom")) + "px"), e + i
    }, s.prototype.setCanvasSize = function() {
      var t = document.getElementsByClassName("c-layout-header")[0].offsetHeight + document.getElementsByClassName("canvas_buttons_wrapper")[0].offsetHeight,
        e = window.innerHeight - t,
        i = document.getElementsByClassName("canvas-wrapper")[0].offsetWidth - 30;
      this.canvas.setHeight(e), this.canvas.setWidth(i)
    }, s.prototype.getCanvasState = function() {
      var t = "";
      try {
        t = JSON.parse(localStorage.getItem(this.CANVAS_STATE))
      } catch (t) {
        console.error(t)
      }
      return t
    }, s.prototype.getCopyStorage = function() {
      var t = "";
      try {
        t = JSON.parse(localStorage.getItem(this.CANVAS_COPY_STATE))
      } catch (t) {
        console.error(t)
      }
      return t
    }, s.prototype.saveLogoStorage = function(t) {
      try {
        localStorage.setItem(this.LOGO_STORAGE, JSON.stringify(t))
      } catch (e) {
        console.log(e), this.clearAndPut(null, t)
      }
    }, s.prototype.setCanvasState = function(t) {
      try {
        localStorage.setItem(this.CANVAS_STATE, JSON.stringify(t))
      } catch (e) {
        console.error(e), this.clearAndPut(null, t)
      }
    }, s.prototype.setCopyStorage = function(t) {
      try {
        localStorage.setItem(this.CANVAS_COPY_STATE, JSON.stringify(t))
      } catch (e) {
        console.error(e), this.clearAndPut(null, t)
      }
    }, s.prototype.clearAndPut = function(t, e) {
      null === t && (t = this.getInfo()), null === e && (e = this.getCanvasState());
      try {
        localStorage.clear(), localStorage.setItem(this.INFO, JSON.stringify(t)), localStorage.setItem(this.CANVAS_STATE, JSON.stringify(e))
      } catch (t) {
        console.error(t)
      }
    }, s.prototype.makeEditorMesh = function(t, e) {
      var i = "rgba(0, 197, 255, .1)",
        n = document.createElement("canvas"),
        o = n.getContext("2d");
      n.width = t, n.height = e, o.beginPath();
      for (var r = 25, s = 0; s <= t; s += r) o.moveTo(.5 + s, 0), o.lineTo(.5 + s, e);
      for (var a = 0; a <= e; a += r) o.moveTo(0, .5 + a), o.lineTo(t, .5 + a);
      for (o.strokeStyle = i, o.lineWidth = 1, o.stroke(), o.beginPath(), s = 0; s <= t; s += 5 * r) o.moveTo(.5 + s, 0), o.lineTo(.5 + s, e);
      for (a = 0; a <= e; a += 5 * r) o.moveTo(0, .5 + a), o.lineTo(t, .5 + a);
      return o.strokeStyle = i, o.lineWidth = 3, o.stroke(), n.toDataURL("image/png")
    }, s.prototype.rgb2hex = function(t, e, i) {
      var n = i | e << 8 | t << 16;
      return "#" + (16777216 + n).toString(16).slice(1).toUpperCase()
    }, s.prototype.rgb2hex2 = function(t) {
      t = t.toUpperCase();
      var e = t.replace("RGB(", "");
      e = e.replace(")", "");
      var i = e.split(",");
      return this.rgb2hex(i[0], i[1], i[2])
    }, s.prototype.normalizeColor = function(t, e) {
      if (e = e ? e : "#000000", t && ~t.toUpperCase().indexOf("RGB")) t = this.rgb2hex2(t);
      else if (t && /^#[0-9A-F]{3}$/i.test(t)) t = t.replace(/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i, "#$1$1$2$2$3$3");
      else if (t && /^[0-9A-F]{6}$/i.test(t)) t = "#" + t;
      else if (t && !/^#[0-9A-F]{6}$/i.test(t)) return e;
      return t.toString().toUpperCase()
    }, s.prototype.arrayUnique = function(t, e, i) {
      return i.indexOf(t) === e
    }, s.prototype.getAllColors = function(t, e) {
      var i = [];
      if (t && "object" == typeof t)
        if (Array.isArray(t))
          for (var n in t) i = i.concat(this.getAllColors(t[n]));
        else t.getFill() && (i = i.concat([t.getFill()])), t.getStroke() && (i = i.concat([t.getStroke()])), t._objects && (i = i.concat(this.getAllColors(t._objects)));
      for (n in i)
        if (i[n].indexOf("rgb") > -1) {
          var o = i[n].replace("rgb(", "");
          o = o.replace(")", "");
          var r = o.split(",");
          i[n] = this.rgb2hex(r[0], r[1], r[2])
        }
      return e ? i.filter(this.arrayUnique) : i
    }, s.prototype.getObjectsByStrokeColors = function(t, e) {
      if (e && "object" == typeof e)
        if (Array.isArray(e))
          for (var i in e) this.getObjectsByStrokeColors(t, e[i]);
        else if (e._objects) this.getObjectsByStrokeColors(t, e._objects);
        else {
          var n = e.getStroke();
          n && (n = this.normalizeColor(n), t[n] ? t[n].push(e) : t[n] = [e])
        }
      return t
    }, s.prototype.getObjectsByFillColors = function(t, e) {
      if (e && "object" == typeof e)
        if (Array.isArray(e))
          for (var i in e) this.getObjectsByFillColors(t, e[i]);
        else if (e._objects) this.getObjectsByFillColors(t, e._objects);
        else {
          var n = e.getFill();
          n && (n = this.normalizeColor(n), t[n] ? t[n].push(e) : t[n] = [e])
        }
      return t
    }, s.prototype.disableScroll = function() {
      window.screen.width > 680 && (this.canvas.allowTouchScrolling = !1)
    }, s.prototype.enableScroll = function() {
      this.canvas.allowTouchScrolling = !0
    }, s.prototype.textStates = function(t) {
      var e = t.target;
      e && e.isType("i-text") && (this.fontFamily = t.target.get("fontFamily"), this.uppercased = !!t.target.uppercase, this.bold = !!t.target.bold, this.italic = !!t.target.italic, this.underline = !!t.target.underline)
    }, s.prototype.getCoords = function(t) {
      var e = t.target;
      this.objectX.val(parseInt(e.getLeft(), 10)), this.objectY.val(parseInt(e.getTop(), 10)), this.objectW.val(parseInt(e.getWidth(), 10)), this.objectH.val(parseInt(e.getHeight(), 10));
      var i = e.get("fontSize");
      i ? (this.objectFS.val(i), this.objectFS.parent().show()) : this.objectFS.parent().hide()
    }, s.prototype.save = function() {
      var t = this.canvas.toJSON();
      this.states.push(t), this.state_iter++, this.pristine_load = !1
    }, s.prototype.undo = function(t) {
      this.preventDefault(t);
      var e = this;
      this.isRedoing = !0, this.state_iter > 0 && (this.state_iter--, this.canvas.loadFromJSON(JSON.stringify(e.states[e.state_iter]), function() {
        e.isRedoing = !1
      }), this.scanColors(), e.canvas.renderAll())
    }, s.prototype.redo = function(t) {
      this.preventDefault(t), this.isRedoing = !0;
      var e = this;
      this.state_iter + 1 < this.states.length && (this.state_iter++, this.canvas.loadFromJSON(JSON.stringify(e.states[e.state_iter]), function() {
        e.isRedoing = !1
      }), this.scanColors(), e.canvas.renderAll())
    }, s.prototype.changeSVGColor = function(t, e) {
      var i = this.normalizeColor(this.colors[e]),
        n = this.normalizeColor(t[e].toHEXString()),
        o = this.non_text_objects_fill[i];
      o && o.forEach(function(t) {
        t.getFill() && t.setFill(n)
      });
      var r = this.non_text_objects_stroke[i];
      r && r.forEach(function(t) {
        t.getStroke() && t.setStroke(n)
      }), this.canvas.getObjects().forEach(function(t) {
        t.dirty = !0
      }), this.canvas.renderAll(), this.save(), this.false_save = !1
    }, s.prototype.changeTextColor = function(t, e) {
      var i = this,
        n = this.normalizeColor(t[e].toHEXString()),
        o = i.canvas.getObjects().filter(function(t) {
          return t.isType("i-text")
        });
      o.length > e && o[e].setFill(n), this.canvas.renderAll(), this.save(), this.false_save = !1
    }, s.prototype.scanColors = function() {
      var t, e = this.canvas.getObjects().filter(function(t) {
        return !t.isType("i-text")
      });
      this.colors = this.getAllColors(e, !0), this.getObjectsByFillColors(this.non_text_objects_fill, e), this.getObjectsByStrokeColors(this.non_text_objects_stroke, e), $("#desktop-logo-colours .color_picker").remove(), this.colors2 = [];
      for (var i in this.colors) t = "desktop-logo-color-" + i, $("#desktop-logo-colours").append('<div id="' + t + '" class="color_picker"><span class="blob"></span></div>'), this.colors2[i] = new jscolor($("#" + t + " span.blob").get(0), {
        valueElement: null,
        onFineChange: this.changeSVGColor.bind(this, this.colors2, i)
      }), this.colors2[i].fromString(this.colors[i]);
      $("#mobile-logo-colours .color_picker").remove(), this.colors3 = [];
      for (var i in this.colors) t = "mobile-logo-color-" + i, $("#mobile-logo-colours").append('<div id="' + t + '" class="color_picker"><span class="blob"></span></div>'), this.colors3[i] = new jscolor($("#" + t + " span.blob").get(0), {
        valueElement: null,
        onFineChange: this.changeSVGColor.bind(this, this.colors3, i)
      }), this.colors3[i].fromString(this.colors[i]);
      var n = this.canvas.getObjects().filter(function(t) {
        return t.isType("i-text")
      });
      $("#desktop-text-colours .color_picker").remove(), this.text_colors = this.getAllColors(n), this.text_colors2 = [];
      for (i in this.text_colors) t = "desktop-text-color-" + i, $("#desktop-text-colours").append('<div id="' + t + '" class="color_picker"><span class="blob"></span></div>'), this.text_colors2[i] = new jscolor($("#" + t + " span.blob").get(0), {
        valueElement: null,
        onFineChange: this.changeTextColor.bind(this, this.text_colors2, i)
      }), this.text_colors2[i].fromString(this.text_colors[i]);
      $("#mobile-text-colours .color_picker").remove(), this.text_colors3 = [];
      for (i in this.text_colors) t = "mobile-text-color-" + i, $("#mobile-text-colours").append('<div id="' + t + '" class="color_picker"><span class="blob"></span></div>'), this.text_colors3[i] = new jscolor($("#" + t + " span.blob").get(0), {
        valueElement: null,
        onFineChange: this.changeTextColor.bind(this, this.text_colors3, i)
      }), this.text_colors3[i].fromString(this.text_colors[i])
    }, s.prototype.addText = function(t) {
      this.preventDefault(t);
      var e = new fabric.IText("Enter text", {
        fontFamily: this.fontFamily,
        left: this.canvas.width / 2,
        top: this.canvas.height / 2,
        fontSize: 36,
        fontStyle: "normal"
      });
      this.canvas.add(e).renderAll(), this.scanColors(), this.save(), this.false_save = !1
    }, s.prototype.deleteElement = function(t) {
      this.preventDefault(t);
      var e = this.canvas.getActiveObject() || this.canvas.getActiveGroup();
      e && this.canvas.remove(e), this.scanColors(), this.canvas.renderAll(), this.save()
    }, s.prototype.textTransform = function(t) {
      this.preventDefault(t);
      var e, i = this.canvas.getActiveObject();
      "undefined" != typeof i && "i-text" === i.get("type") && (i.uppercase ? (this.uppercased = !1, i.uppercase = !1, e = i.getText(), i.setText(e.toLowerCase()), this.canvas.renderAll()) : (this.uppercased = !0, i.uppercase = !0, e = i.getText(), i.setText(e.toUpperCase()), this.canvas.renderAll()), this.save())
    }, s.prototype.textBold = function(t) {
      this.preventDefault(t);
      var e = this.canvas.getActiveObject();
      "undefined" != typeof e && e.isType("i-text") && (e.bold ? (this.bold = !1, e.bold = !1, e.set({
        fontWeight: "400"
      }), e.setScaleX(1.01 * e.getScaleX())) : (this.bold = !0, e.bold = !0, e.set({
        fontWeight: "700"
      }), e.setScaleX(.99 * e.getScaleX())), this.canvas.renderAll(), this.save())
    }, s.prototype.textItalic = function(t) {
      this.preventDefault(t);
      var e = this.canvas.getActiveObject();
      "undefined" != typeof e && e.isType("i-text") && (e.italic ? (this.italic = !1, e.italic = !1, e.set({
        fontStyle: "normal"
      }), e.setScaleX(1.01 * e.getScaleX())) : (this.italic = !0, e.italic = !0, e.set({
        fontStyle: "italic"
      }), e.setScaleX(.99 * e.getScaleX())), this.canvas.renderAll(), this.save())
    }, s.prototype.align = function(t, e) {
      this.preventDefault(e);
      var i = this,
        n = this.canvas.getActiveObject() || this.canvas.getActiveGroup();
      n && ("left" === t ? n.set({
        left: 0
      }) : "center" === t ? n.centerH() : n.set({
        left: i.canvas.getWidth() - n.getWidth()
      }), n.setCoords(), this.canvas.renderAll(), this.save())
    }, s.prototype.spaceAlign = function(t, e) {
      this.preventDefault(e);
      var i = this.canvas.getActiveObject();
      i && ("forward" === t ? i.bringToFront() : i.sendToBack(), i.setCoords(), this.canvas.renderAll().calcOffset(), this.save())
    }, s.prototype.setFS = function(t) {
      var e = this.canvas.getActiveObject();
      e && t.target.valueAsNumber && (e.set({
        fontSize: t.target.valueAsNumber
      }), e.setCoords(), this.canvas.renderAll(), this.save())
    }, s.prototype.bindEventHandlers = function() {
      var t = this;
      this.canvas.on("object:selected", function(e) {
        t.textStates(e), t.getCoords(e), e.target.isType("i-text") ? (t.textActual.val(e.target.get("text")), t.textActual.show()) : t.textActual.hide()
      }), this.canvas.on("object:moving", function(e) {
        t.disableScroll(), t.getCoords(e), t.false_save = !1
      }), this.canvas.on("object:scaling", function(e) {
        t.disableScroll(), t.getCoords(e), t.false_save = !1
      }), this.canvas.on("object:modified", function(e) {
        t.getCoords(e), t.false_save = !1
      }), this.canvas.on("object:added", function(e) {
        t.getCoords(e), t.false_save = !1
      }), this.canvas.on("object:rotating", this.disableScroll.bind(this)), this.canvas.on("mouse:up", this.enableScroll.bind(this)), this.canvas.on("mouse:down", function(e) {
        t.disableScroll();
        try {
          e.target ? e.target.isType("i-text") && (t.activePath = e.target, t.pathColor = e.target.getFill(), t.canvas.renderAll(), t.false_save = !0) : (t.activePath && "object" == typeof t.activePath && (t.false_save = !0, t.activePath.set({
            opacity: 1
          })), t.activePath = !1)
        } catch (t) {
          console.error("error mousedown canvas", t)
        }
      })
    }, s.prototype.checkReferrer = function() {
      this.info = this.store.getInfo(), this.info.token && ("object" == typeof this.info && "save" === this.info.referrer ? (this.store.spliceInfo(null, {
        referrer: null
      }), this.saveLogo("void", !1)) : "object" == typeof this.info && "checkout" === this.info.referrer && (this.store.spliceInfo(null, {
        referrer: null
      }), this.saveLogo("void", !0)))
    }, s.prototype.initCanvas = function() {
      var t = this;
      this.canvas = new fabric.Canvas("canvas", {
        preserveObjectStacking: !0
      }), window.screen.width <= 680 && (this.canvas.allowTouchScrolling = !0, this.canvas.selection = !1), this.setCanvasSize();
      var e = this.getCanvasState();
      return !!e && void this.canvas.loadFromJSON(JSON.parse(e), function() {
        var e = t.canvas.getObjects().map(function(t) {
            return t.set({
              active: !0,
              controls: !0,
              transparentCorners: !0,
              objectCaching: !1
            })
          }),
          i = e.filter(function(t) {
            return t.isType("i-text")
          });
        t.scanColors();
        try {
          t.fontFamily = i.length > 0 ? i[0].getFontFamily() : "Aclonica", console.log("text_objects", t.fontFamily), $("#font-select-container select").css("font-family", t.fontFamily), $("#font-select-container select").val(t.fontFamily)
        } catch (t) {
          console.error(t)
        }
        if ("category" === t.info.referrer) {
          t.canvas.discardActiveGroup().deactivateAll().discardActiveObject();
          var n = t.canvas.getObjects().map(function(t) {
              return t.set({
                active: !0,
                controls: !0,
                transparentCorners: !0
              })
            }),
            o = new fabric.Group(n, {
              originX: "center",
              originY: "center",
              transparentCorners: !0
            });
          t.canvas.setActiveGroup(o.setCoords());
          var r = t.canvas.getActiveGroup();
          r.getWidth() / t.canvas.getWidth() > r.getHeight() / t.canvas.getHeight() ? r.scaleToWidth(.6 * t.canvas.getWidth()) : r.scaleToHeight(.6 * t.canvas.getHeight()), t.canvas.centerObject(r)
        }
        t.canvas.discardActiveObject().discardActiveGroup().deactivateAll().calcOffset().renderAll();
        var s = t.makeEditorMesh(t.canvas.getWidth(), t.canvas.getHeight());
        fabric.Image.fromURL(s, function(e) {
          t.canvas.setBackgroundImage(e), t.canvas.calcOffset().renderAll(), t.save()
        }), t.bindEventHandlers()
      })
    }, s.prototype.placeInRect = function(t, e, i, n) {
      n = n ? n : 1, t.getHeight() / i.height > t.getWidth() / i.width ? t.scaleToHeight(i.height * n) : t.scaleToWidth(i.width * n), t.set({
        left: e.left + i.left + Math.floor((i.width - t.getWidth()) / 2),
        top: e.top + i.top + Math.floor((i.height - t.getHeight()) / 2),
        selectable: !1
      })
    }, s.prototype.getRect = function(t, e, i, n, o, r) {
      return o = o ? o : 1, r = r ? r : 1, {
        left: t * o,
        top: e * r,
        width: (i - t) * o,
        height: (n - e) * r
      }
    }, s.prototype.preview = function(t) {
      if (this.preventDefault(t), !document.getElementById("popup_canvas").classList.contains("active") && !document.getElementById("popup_canvas").classList.contains("pre-active")) {
        var e = this;
        this.canvas.trigger("mouse:down", {
          x: 0,
          y: 0
        }), this.canvas.discardActiveGroup().deactivateAll().renderAll();
        var i = (document.getElementById("preview_canvas"), document.getElementById("popup_canvas"));
        i.classList.add("pre-active");
        var o, r, s = document.getElementById("preview_buttons").offsetHeight;
        if (window.innerWidth < 768) {
          window.innerWidth / window.innerHeight < 1 ? (o = window.innerWidth - 30, r = window.innerHeight - 30 - s - 20) : (o = .8 * window.innerWidth, r = .44 * window.innerHeight - s - 20), e.preview_canvas = new fabric.Canvas("preview_canvas"), e.preview_canvas.setWidth(o).setHeight(r);
          var a = e.preview_canvas;
          a.loadFromJSON(this.canvas.toJSON(), function() {
            a.centerTransform = !0, a.setBackgroundImage(0);
            var t = a.getObjects().map(function(t) {
                return t.isType("i-text") && fabric.util.clearFabricFontCache(t.getFontFamily()), t.set({
                  active: !0,
                  controls: !1,
                  selectable: !1,
                  transparentCorners: !0
                })
              }),
              o = new fabric.Group(t, {
                originX: "left",
                originY: "top",
                transparentCorners: !0
              });
            a.clear(), fabric.Image.fromURL(n.getDomain() + "images/editor/preview_logo.png", function(t) {
              e.placeInRect(t, {
                left: 0,
                top: 0
              }, {
                left: 50,
                top: 5,
                width: e.preview_canvas.getWidth() - 30,
                height: e.preview_canvas.getHeight() - 30
              }), e.preview_canvas.setWidth(t.getWidth() + 30).setHeight(t.getHeight()).add(t).centerObject(t), i.style.width = t.getWidth() + 30 + "px", i.style.height = t.getHeight() + 45 + s + "px", $(".popup.canvas .buttons_container a").css("padding", "0px 13px");
              var n = {
                left: t.getLeft(),
                top: t.getTop()
              };
              e.placeInRect(o, n, e.getRect(392, 40, 499, 233, t.scaleX, t.scaleY), .85), e.preview_canvas.add(o);
              var r = fabric.util.object.clone(o);
              e.placeInRect(r, n, e.getRect(75, 145, 250, 240, t.scaleX, t.scaleY), .85), e.preview_canvas.add(r);
              var a = fabric.util.object.clone(o);
              e.placeInRect(a, n, e.getRect(680, 100, 750, 180, t.scaleX, t.scaleY), .85), e.preview_canvas.add(a);
              var l = fabric.util.object.clone(o);
              e.placeInRect(l, n, e.getRect(620, 300, 730, 420, t.scaleX, t.scaleY), .85), e.preview_canvas.add(l);
              var c = fabric.util.object.clone(o);
              e.placeInRect(c, n, e.getRect(410, 375, 470, 440, t.scaleX, t.scaleY), .85), e.preview_canvas.add(c), e.preview_canvas.calcOffset().discardActiveGroup().deactivateAll().renderAll(), i.classList.remove("pre-active"), i.classList.add("active")
            })
          })
        } else {
          var l = 787,
            c = 575;
          l / window.innerWidth > c / window.innerHeight ? (o = .75 * window.innerWidth, r = .9 * o - s - 20) : (o = window.innerHeight, r = .9 * o - s - 20), e.preview_canvas = new fabric.Canvas("preview_canvas"), e.preview_canvas.setWidth(o).setHeight(r);
          var a = e.preview_canvas;
          a.loadFromJSON(this.canvas.toJSON(), function() {
            a.centerTransform = !0, a.setBackgroundImage(0);
            var t = a.getObjects().map(function(t) {
                return t.isType("i-text") && fabric.util.clearFabricFontCache(t.getFontFamily()), t.set({
                  active: !0,
                  controls: !1,
                  selectable: !1,
                  transparentCorners: !0
                })
              }),
              o = new fabric.Group(t, {
                originX: "left",
                originY: "top",
                transparentCorners: !0
              });
            a.clear(), fabric.Image.fromURL(n.getDomain() + "images/editor/preview_logo.png", function(t) {
              e.placeInRect(t, {
                left: 0,
                top: 0
              }, {
                left: 50,
                top: 50,
                width: e.preview_canvas.getWidth() - 100,
                height: e.preview_canvas.getHeight()
              }), e.preview_canvas.setWidth(t.getWidth() + 100).setHeight(t.getHeight()).add(t).centerObject(t), i.style.width = t.getWidth() + 100 + "px", i.style.height = t.getHeight() + 45 + s + "px";
              var n = {
                left: t.getLeft(),
                top: t.getTop()
              };
              e.placeInRect(o, n, e.getRect(392, 40, 499, 233, t.scaleX, t.scaleY), .85), e.preview_canvas.add(o);
              var r = fabric.util.object.clone(o);
              e.placeInRect(r, n, e.getRect(75, 145, 250, 240, t.scaleX, t.scaleY), .85), e.preview_canvas.add(r);
              var a = fabric.util.object.clone(o);
              e.placeInRect(a, n, e.getRect(680, 100, 750, 180, t.scaleX, t.scaleY), .85), e.preview_canvas.add(a);
              var l = fabric.util.object.clone(o);
              e.placeInRect(l, n, e.getRect(620, 300, 730, 420, t.scaleX, t.scaleY), .85), e.preview_canvas.add(l);
              var c = fabric.util.object.clone(o);
              e.placeInRect(c, n, e.getRect(410, 375, 470, 440, t.scaleX, t.scaleY), .85), e.preview_canvas.add(c), e.preview_canvas.calcOffset().discardActiveGroup().deactivateAll().renderAll(), i.classList.remove("pre-active"), i.classList.add("active")
            })
          })
        }
      }
    }, s.prototype.closePreview = function(t) {
      this.preventDefault(t), document.getElementById("popup_canvas").classList.remove("active")
    }, s.prototype.openSavedPopup = function(t) {
      this.preventDefault(t), $("#saved-popup").show()
    }, s.prototype.closeSavedPopup = function(t) {
      this.preventDefault(t), $("#saved-popup").hide()
    }, s.prototype.openLoginPopup = function(t) {
      this.preventDefault(t), $("#login-popup").show()
    }, s.prototype.closeLoginPopup = function(t) {
      this.preventDefault(t), $("#login-popup").hide()
    }, s.prototype.openAlertPopup = function(t) {
      this.preventDefault(t), $("#alert-popup").show()
    }, s.prototype.closeAlertPopup = function(t) {
      this.preventDefault(t), $("#alert-popup").hide(), $("#alert-popup .popup_text").empty()
    }, s.prototype.openAlertIconPopup = function(t) {
      this.preventDefault(t), $("#alert-icon-popup").show()
    }, s.prototype.closeAlertIconPopup = function(t) {
      this.preventDefault(t), $("#alert-icon-popup").hide(), $("#alert-icon-popup .popup_text").empty(), $("#search_input").val("").focus()
    }, s.prototype.copyFabric = function(t) {
      var e = document.createElement("canvas");
      e.width = t.getWidth(), e.height = t.getHeight();
      var i = new fabric.Canvas(e);
      return t.getObjects().forEach(function(t) {
        i.add(fabric.util.object.clone(t))
      }), i
    }, s.prototype.saveLogo = function(t, e) {
      this.preventDefault(t), this.canvas.trigger("mouse:down", {
        x: 0,
        y: 0
      }), this.canvas.discardActiveGroup().deactivateAll().renderAll();
      var i = this,
        o = this.store.getInfo(),
        r = {
          company: o.name,
          slogan: o.slogan,
          category: o.category,
          category_index: o.category_index
        };
      this.store.spliceInfo(null, {
        referrer: null
      });
      var s = this.copyFabric(i.canvas);
      this.setCanvasState(JSON.stringify(s.toJSON())), this.setCopyStorage(JSON.stringify(s.toJSON())), o.token ? $.ajax({
        url: n.getApiUrl("logo/save"),
        type: "POST",
        dataType: "json",
        data: {
          logo: i.getCopyStorage(),
          data: JSON.stringify(r)
        },
        headers: {
          Authorization: "Bearer " + o.token
        },
        success: function(t) {
          i.store.spliceInfo({
            logo_id: t.logo_id
          }), e ? n.isOptionsEnabled() ? i.navigateByUrl(n.getAppUrl("../options.html")) : i.navigateByUrl(n.getAppUrl("../checkout.html")) : i.openSavedPopup()
        },
        error: function(t) {
          console.log(t)
        }
      }) : (this.state = e ? "checkout" : "save", this.openLoginPopup())
    }, s.prototype.download = function(t) {
      this.preventDefault(t);
      var e = this.store.getInfo();
      if (this.closeSavedPopup(), e.login) this.saveLogo("void", !0);
      else {
        this.canvas.trigger("mouse:down", {
          x: 0,
          y: 0
        }), this.canvas.discardActiveGroup().deactivateAll().renderAll();
        var i = this,
          n = this.copyFabric(i.canvas);
        this.setCanvasState(JSON.stringify(n.toJSON())), this.setCopyStorage(JSON.stringify(n.toJSON())), this.openLoginPopup(), this.state = "checkout"
      }
    }, s.prototype.selectDrop = function(t) {
      this.preventDefault(t), t.stopPropagation(), $("#font-select-container").toggleClass("active")
    }, s.prototype.fontFamilyChange = function(t) {
      this.preventDefault(t), t.stopPropagation();
      var e = this.canvas.getActiveObject();
      e && (e.isType("group") || (e.set({
        fontFamily: t.target.innerText
      }), this.fontFamily = t.target.innerText, this.canvas.renderAll(), e.setCoords(), $("#font-select-container select").css("font-family", t.target.innerText), $("#font-select-container select").val(t.target.innerText))), $("#font-select-container").removeClass("active")
    }, s.prototype.initFonts = function(t) {
      for (var e in t) $("#font-select-container select").append('<option value="' + t[e] + '">' + t[e] + "</option>"), $("#font-select-container div.select_dropdown").append('<a class="font-link" href="' + t[e] + '" style="font-family: \'' + t[e] + "';\">" + t[e] + "</a>")
    }, s.prototype.saveState = function(t) {
      this.setCanvasState(JSON.stringify(this.canvas.toJSON())), this.store.spliceInfo({
        referrer: this.state
      }), this.navigateByUrl(n.getAppUrl("../register-login.html"))
    }, s.prototype.nothing = function() {}, s.prototype.addNewImage = function(t) {
      var e = this,
        i = this.canvas;
      fabric.Image.fromURL(t, function(t) {
        t.scaleToWidth(100), t.scaleToHeight(100), i.add(t).renderAll(), e.save()
      })
    }, s.prototype.addNewIcon = function(t) {
      var e = this,
        i = e.canvas;
      fabric.loadSVGFromString(t, function(t) {
        var n = new fabric.PathGroup(t, {
          left: 100,
          top: 100,
          width: 100,
          height: 100,
          fill: "rgb(0,0,0)"
        });
        i.add(n), i.renderAll(), e.scanColors(), e.save()
      })
    }, s.prototype.searchIconHandler = function(t) {
      var e = new XMLHttpRequest;
      e.open("POST", "/logomaker/icon-search", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.onreadystatechange = function() {
        if (e.readyState == XMLHttpRequest.DONE && 200 == e.status) {
          var t = JSON.parse(e.responseText);
          t.length > 0 ? (t.forEach(function(t) {
            if (200 === t.info.http_code) {
              var e = JSON.parse(t.body);
              if (e.icons.length > 0) {
                var i = 0;
                $(".customer-icons .icon-tab-content").prepend('<div role="tabpanel" class="tab-pane"><div class="row d-flex align-content-stretch flex-wrap "></div></div>'), e.icons.forEach(function(t) {
                  window.innerWidth < 768 && 9 == i && ($(".customer-icons .icon-tab-content").prepend('<div role="tabpanel" class="tab-pane"><div class="row d-flex align-content-stretch flex-wrap "></div></div>'), i = 0), $(document).find(".customer-icons .icon-tab-content .tab-pane:first .row").prepend('<div class="col-xs-4 col-sm-3 mb-3"><div class="customer-preview-icon-box" style="width:100%; height:100%; border:1px dashed #cccccc; background-image: url(' + t.preview_url_42 + '); background-position: center; background-repeat: no-repeat; background-size: contain;"><img src="' + t.icon_url + '" class="img-responsive img-thumbnail " style="visibility:hidden; width: 100%; height: 100%;" alt=""></div></div>'), i++
                }), $(document).find(".customer-icons .icon-tab-content .tab-pane").removeClass("active"), $(document).find(".customer-icons .icon-tab-content .tab-pane").first().addClass("active"), $(document).find(".customer-icons .icon-tab-content .tab-pane").size() > 1 && ($("#add_icons .icon-page-navigation").removeClass("hidden"), $(".icon-page-navigation .preview").addClass("disabled"))
              }
            }
          }), $("#search_input").val("").focus()) : ($("#alert-icon-popup .popup_text").html("It's something wrong with your tag. Try to search another tag"), $that.openAlertIconPopup())
        }
      }, e.send(t)
    }, s.prototype.init = function() {
      try {
        var t = this.store.getInfo();
        t.login && t.password && this.auth.isLoggedIn(n.getApiUrl("login"), t.login, t.password, this.checkReferrer.bind(this), this.nothing)
      } catch (t) {
        console.error(t), document.location.href = n.getAppUrl("../index.html")
      }
      if (this.objectX = $("#objectX"), this.objectY = $("#objectY"), this.objectW = $("#objectW"), this.objectH = $("#objectH"), this.objectFS = $("#objectFS"), this.textActual = $("#textActual"), this.info = this.store.getInfo(), !this.info || !this.info.category) return console.error("No category"), void this.navigateByUrl(n.getAppUrl("logo_text"));
      if (!this.getCanvasState()) return console.error("No canvas state"), void this.navigateByUrl(n.getAppUrl("logo_text"));
      fabric.Object.prototype.objectCaching = !1, fabric.Object.prototype.statefullCache = !1, fabric.Object.prototype.noScaleCache = !0, this.initCanvas();
      var e = n.webConfig;
      this.initFonts(e.google.families), e.active = e.inactive = function() {
        fabric.Object.prototype.objectCaching = !1, fabric.Object.prototype.statefullCache = !1, fabric.Object.prototype.noScaleCache = !0, this.canvas.getObjects().forEach(function(t) {
          t.isType("i-text") && t.getFontFamily() && (t.dirty = !0, t.setCoords(), this.canvas.calcOffset().renderAll())
        }.bind(this)), this.canvas.renderAll()
      }.bind(this), WebFont.load(e), $(document).on("click", "#undo", this.undo.bind(this)), $(document).on("click", "#redo", this.redo.bind(this)), $(document).on("click", "#add_text", this.addText.bind(this)), $(document).on("click", "#delete", this.deleteElement.bind(this)), $(document).on("click", "#align-left", this.align.bind(this, "left")), $(document).on("click", "#align-center", this.align.bind(this, "center")), $(document).on("click", "#align-right", this.align.bind(this, "right")), $(document).on("click", "#forward", this.spaceAlign.bind(this, "forward")), $(document).on("click", "#backward", this.spaceAlign.bind(this, "backward")), $(document).on("click", "#transform", this.textTransform.bind(this)), $(document).on("click", "#bold", this.textBold.bind(this)), $(document).on("click", "#italic", this.textItalic.bind(this)), $(document).on("click", "#preview", this.preview.bind(this)), $(document).on("click", "#save", this.saveLogo.bind(this)), $(document).on("click", "#download", this.download.bind(this)), $(document).on("click", "#mobile-preview", this.preview.bind(this)), $(document).on("click", "#mobile-save", this.saveLogo.bind(this)), $(document).on("click", "#mobile-download", this.download.bind(this)), $(document).on("click", "#close-popup-canvas", this.closePreview.bind(this)), $(document).on("click", "#save-from-preview", function(t) {
        this.preventDefault(t), this.closePreview(), this.saveLogo()
      }.bind(this)), $(document).on("click", "#download-from-preview", function(t) {
        this.preventDefault(t), this.closePreview(), this.download()
      }.bind(this)), $(document).on("click", "#saved-popup a.cross", this.closeSavedPopup.bind(this)), $(document).on("click", "#login-popup a.cross", this.closeLoginPopup.bind(this)), $(document).on("click", "#alert-popup a.cross, #close_btn", this.closeAlertPopup.bind(this)), $(document).on("click", "#alert-icon-popup a.cross, #close_icon_popup_btn", this.closeAlertIconPopup.bind(this)), $(document).on("change", "#objectFS", this.setFS.bind(this)), $(document).on("click", "#font-select-container", this.selectDrop.bind(this)), $(document).on("click", "#font-select", this.selectDrop.bind(this)), $(document).on("click", "#font-dropdown", this.selectDrop.bind(this)), $(document).on("click", ".font-link", this.fontFamilyChange.bind(this)), $(document).on("click", "#to-my-account", this.navigateByUrl.bind(this, n.getAppUrl("myaccount"))), $(document).on("click", "#download-after-save", this.download.bind(this)), $(document).on("click", "#to-login", this.saveState.bind(this, "login")), $(document).on("click", "#to-register", this.saveState.bind(this, "reg")), $(document).on("click", "#upload_new_image", function(t) {
        this.preventDefault(t), this.closeAlertPopup(t), $(document).find("#image_file").trigger("click")
      }.bind(this));
      var i = this;
      if ($(window).resize(function() {
          setTimeout(function(t) {
            $(".canvas-wrapper").empty();
            var e = document.createElement("canvas");
            e.setAttribute("id", "canvas"), document.getElementsByClassName("canvas-wrapper")[0].appendChild(e), i.initCanvas()
          }.bind(i), 500)
        }), $(document).on("click", "#customer_add_image_button", function(t) {
          this.preventDefault(t), this.closeAlertPopup(t), $(document).find("#customer_image_file").trigger("click")
        }.bind(this)), $(document).on("change", "#customer_image_file", function(t) {
          t.preventDefault();
          var e = !0,
            n = t.target.files[0],
            o = /image/g;
          if (o.test(n.type) || (e = !1, $("#alert-popup .popup_text").html("The uploaded image format isn't supported. Please upload in the following formats only: JPG, PNG, GIF etc..etc"), i.openAlertPopup()), n.size > 10485760 && (e = !1, $("#alert-popup .popup_text").html("The maximum image size allowed is 10MB. Please, upload a smaller file."), i.openAlertPopup()), e) {
            var r = new FileReader;
            r.onload = function(t) {
              var e = $(".customer-images .images-tab-content .tab-pane:first .row > div").size();
              0 === e && $(".customer-images .images-tab-content").prepend('<div role="tabpanel" class="tab-pane"><div class="row d-flex align-content-stretch flex-wrap "></div></div>');
              var i = 14;
              window.innerWidth < 768 && (i = 9), e < i ? $(document).find(".customer-images .images-tab-content .tab-pane:first .row").prepend('<div class="col-xs-4 col-sm-6 mb-3"><div class="customer-preview-box" style="width:100%; height:100%; border:1px solid #8c8c8c; background-image: url(' + t.target.result + '); background-position: center; background-repeat: no-repeat; background-size: contain;"><img src="' + t.target.result + '" class="img-responsive img-thumbnail " style="visibility:hidden; width: 100%; height: 100%;" alt=""></div></div>') : ($(".customer-images .images-tab-content").prepend('<div role="tabpanel" class="tab-pane"><div class="row d-flex align-content-stretch flex-wrap "></div></div>'), $(document).find(".customer-images .images-tab-content .tab-pane:first .row").prepend('<div class="col-xs-4 col-sm-6 mb-3"><div class="customer-preview-box" style="width:100%; height:100%; border:1px solid #8c8c8c; background-image: url(' + t.target.result + '); background-position: center; background-repeat: no-repeat; background-size: contain;"><img src="' + t.target.result + '" class="img-responsive img-thumbnail " style="visibility:hidden; width: 100%; height: 100%;" alt=""></div></div>')), $(document).find(".customer-images .images-tab-content .tab-pane").removeClass("active"), $(document).find(".customer-images .images-tab-content .tab-pane").first().addClass("active"), $(document).find(".customer-images .images-tab-content .tab-pane").size() > 1 && ($("#upload_image .customer-images-page-navigation").removeClass("hidden"), $(".customer-images-page-navigation .preview").addClass("disabled"))
            }, r.onerror = function(t) {
              e = !1, $("#alert-popup .popup_text").html("An error occured while uploading your image. Please contact us for further assistance."), i.openAlertPopup()
            }, r.readAsDataURL(n)
          }
          if (i.info.hasOwnProperty("login") || (e = !1), e) {
            var s = new FormData;
            s.append("image_file", n), s.append("login", i.info.login), s.append("_token", i.info.token);
            var a = new XMLHttpRequest;
            a.open("POST", "/logomaker/image-upload", !0), a.upload.onprogress = function(t) {
              if (t.lengthComputable) {
                var e = t.loaded / t.total * 100;
                console.log(e + "% uploaded")
              }
            }, a.onload = function() {
              if (200 == this.status) {
                var t = JSON.parse(a.responseText);
                "error" === t.response_status && console.log(t.error_info)
              }
            }, a.send(s)
          }
        }.bind(this)), $(document).on("click", ".customer-images .customer-preview-box", function(t) {
          i.addNewImage(t.target.children[0].src)
        }.bind(this)), $(document).on("click", ".customer-icons .customer-preview-icon-box", function(t) {
          var e = t.target.children[0].src,
            n = new XMLHttpRequest;
          n.open("POST", "/logomaker/get-content-from-url", !0), n.setRequestHeader("Content-type", "application/json"), n.onreadystatechange = function() {
            if (n.readyState == XMLHttpRequest.DONE && 200 == n.status) {
              var t = JSON.parse(n.responseText);
              i.addNewIcon(t.response_body)
            }
          }, n.send(JSON.stringify({
            file_source: e
          }))
        }.bind(this)), $(document).on("submit", "#search_form", function(t) {
          t.preventDefault();
          var e = $("#search_form").serialize();
          i.searchIconHandler(e)
        }.bind(this)), this.info.hasOwnProperty("login")) {
        var o = new XMLHttpRequest;
        o.open("POST", "/logomaker/get-image", !0), o.setRequestHeader("Content-type", "application/json"), o.onreadystatechange = function() {
          if (o.readyState == XMLHttpRequest.DONE && 200 == o.status) {
            var t = JSON.parse(o.responseText);
            if ("success" === t.response_status && t.response_body.length > 0) {
              $(".customer-images .images-tab-content").prepend('<div role="tabpanel" class="tab-pane"><div class="row d-flex align-content-stretch flex-wrap "></div></div>');
              var e = 0;
              t.response_body.forEach(function(t) {
                var i = 14;
                window.innerWidth < 768 && (i = 9), e == i && ($(".customer-images .images-tab-content").prepend('<div role="tabpanel" class="tab-pane"><div class="row d-flex align-content-stretch flex-wrap "></div></div>'), e = 0);
                var n = "/logomaker/uploads/" + t;
                $(document).find(".customer-images .images-tab-content .tab-pane:first .row").prepend('<div class="col-xs-4 col-sm-6 mb-3"><div class="customer-preview-box" style="width:100%; height:100%; border:1px solid #8c8c8c; background-image: url(' + n + '); background-position: center; background-repeat: no-repeat; background-size: contain;"><img src="' + n + '" class="img-responsive img-thumbnail " style="visibility:hidden; width: 100%; height: 100%;" alt=""></div></div>'), e++
              }), $(document).find(".customer-images .images-tab-content .tab-pane").removeClass("active"), $(document).find(".customer-images .images-tab-content .tab-pane").first().addClass("active"), $(document).find(".customer-images .images-tab-content .tab-pane").size() > 1 && ($("#upload_image .customer-images-page-navigation").removeClass("hidden"), $(".customer-images-page-navigation .preview").addClass("disabled"))
            }
          }
        }, o.send(JSON.stringify({
          _token: this.info.token
        }))
      }
      $(document).on("click", ".icon-page-navigation .preview", function() {
        if ($(".icon-page-navigation .next").removeClass("disabled"), !$(".icon-page-navigation .preview").hasClass("disabled")) {
          var t = $(document).find(".customer-icons .icon-tab-content .tab-pane.active").index();
          if (t > 0) {
            $(document).find(".customer-icons .icon-tab-content .tab-pane").removeClass("active");
            var e = t - 1;
            $(document).find(".customer-icons .icon-tab-content .tab-pane:eq(" + e + ")").addClass("active")
          } else $(".icon-page-navigation .preview").addClass("disabled")
        }
      }.bind(this)), $(document).on("click", ".customer-images-page-navigation .preview", function() {
        if ($(".customer-images-page-navigation .next").removeClass("disabled"), !$(".customer-images-page-navigation .preview").hasClass("disabled")) {
          var t = $(document).find(".customer-images .images-tab-content .tab-pane.active").index();
          if (t > 0) {
            $(document).find(".customer-images .images-tab-content .tab-pane").removeClass("active");
            var e = t - 1;
            $(document).find(".customer-images .images-tab-content .tab-pane:eq(" + e + ")").addClass("active")
          } else $(".customer-images-page-navigation .preview").addClass("disabled")
        }
      }.bind(this)), $(document).on("click", ".customer-images-page-navigation .next", function() {
        if ($(".customer-images-page-navigation .preview").removeClass("disabled"), !$(".customer-images-page-navigation .next").hasClass("disabled")) {
          var t = $(document).find(".customer-images .images-tab-content .tab-pane.active").index(),
            e = $(document).find(".customer-images .images-tab-content .tab-pane").size() - 1;
          if (t < e) {
            $(document).find(".customer-images .images-tab-content .tab-pane").removeClass("active");
            var i = t + 1;
            $(document).find(".customer-images .images-tab-content .tab-pane:eq(" + i + ")").addClass("active")
          } else $(".customer-images-page-navigation .next").addClass("disabled")
        }
      }.bind(this)), $(document).on("click", ".icon-page-navigation .next", function() {
        if ($(".icon-page-navigation .preview").removeClass("disabled"), !$(".icon-page-navigation .next").hasClass("disabled")) {
          var t = $(document).find(".customer-icons .icon-tab-content .tab-pane.active").index(),
            e = $(document).find(".customer-icons .icon-tab-content .tab-pane").size() - 1;
          if (t < e) {
            $(document).find(".customer-icons .icon-tab-content .tab-pane").removeClass("active");
            var i = t + 1;
            $(document).find(".customer-icons .icon-tab-content .tab-pane:eq(" + i + ")").addClass("active")
          } else $(".icon-page-navigation .next").addClass("disabled")
        }
      }.bind(this))
    }, e.exports = s
  }, {
    "./auth": 3,
    "./config": 7,
    "./store": 18
  }],
  11: [function(t, e, i) {
    var n = function() {
      this.SIMPLE_MESH_STEP = 10, this.DEPRECATED_COLORS = ["#FFFFFF", "#000000"], this.DEFAULT_COLOR = "#000000"
    };
    n.prototype.makeMesh = function(t, e, i) {
      i = i ? i : "rgba(0, 197, 255, .1)";
      var n = document.createElement("canvas"),
        o = n.getContext("2d");
      n.width = t, n.height = e, o.beginPath();
      for (var r = 0; r <= t; r += this.SIMPLE_MESH_STEP) o.moveTo(.5 + r, 0), o.lineTo(.5 + r, e);
      for (var s = 0; s <= e; s += this.SIMPLE_MESH_STEP) o.moveTo(0, .5 + s), o.lineTo(t, .5 + s);
      return o.strokeStyle = i, o.lineWidth = 1, o.stroke(), n.toDataURL("image/png")
    }, n.prototype.rgb2hex = function(t, e, i) {
      var n = i | e << 8 | t << 16;
      return "#" + (16777216 + n).toString(16).slice(1)
    }, n.prototype.rgb2hex2 = function(t) {
      t = t.toUpperCase();
      var e = t.replace("RGB(", "");
      e = e.replace(")", "");
      var i = e.split(",");
      return this.rgb2hex(i[0], i[1], i[2])
    }, n.prototype.normalizeColor = function(t, e) {
      if (e = e ? e : this.DEFAULT_COLOR, t && ~t.toUpperCase().indexOf("RGB")) t = this.rgb2hex2(t);
      else if (t && /^#[0-9A-F]{3}$/i.test(t)) t = t.replace(/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i, "#$1$1$2$2$3$3");
      else if (t && /^[0-9A-F]{6}$/i.test(t)) t = "#" + t;
      else if (t && !/^#[0-9A-F]{6}$/i.test(t)) return e;
      return t.toString().toUpperCase()
    }, n.prototype.getColors = function(t) {
      if ("object" == typeof t && "function" == typeof t.getObjects) {
        var e = [],
          i = t.getObjects();
        for (var n in i) {
          var o = i[n];
          "object" == typeof o && ("function" == typeof o.getFill && o.getFill() && e.push(this.normalizeColor(o.getFill())), "function" == typeof o.getStroke && o.getStroke() && e.push(this.normalizeColor(o.getStroke())))
        }
        var r = [];
        for (var s in e) {
          var a = e[s];
          !a || ~r.indexOf(a) || ~this.DEPRECATED_COLORS.indexOf(a) || r.push(a)
        }
        return r
      }
      return []
    }, e.exports = n
  }, {}],
  12: [function(t, e, i) {
    var n = t("./config"),
      o = t("./auth"),
      r = t("./store"),
      s = function() {
        this.auth = new o, this.store = new r
      };
    s.prototype.displaySummary = function(t, e) {
      e ? t.find(".error_summary").html(e).removeClass("hidden") : t.find(".error_summary").addClass("hidden")
    }, s.prototype.onRestoreFormSubmit = function(t) {
      t.stopPropagation(), t.preventDefault();
      var e = this,
        i = $("#password_recovery"),
        o = i.serialize(),
        r = n.getApiUrl("restore");
      $.ajax({
        url: r,
        method: "POST",
        data: o,
        dataType: "json",
        beforeSend: function() {
          e.displaySummary(i, null)
        },
        success: function(t) {
          t.success ? (i.parents(".modal-content").find("button.close").trigger("click"), $("#info-popup .message").text(t.message), $("#info-popup").modal("show")) : t.message ? e.displaySummary(i, t.message) : e.displaySummary(i, "Maintenance work, please come back later")
        },
        error: function(t) {
          t.responseJSON && t.responseJSON.message ? e.displaySummary(i, t.responseJSON.message) : t.responseText ? e.displaySummary(i, t.responseText) : e.displaySummary(i, "Transfer error")
        }
      })
    }, s.prototype.onSignUpFormSubmit = function(t) {
      t.stopPropagation(), t.preventDefault();
      var e = this,
        i = $("#sign_up_form"),
        o = i.serialize(),
        r = n.getApiUrl("registration");
      $.ajax({
        url: r,
        method: "POST",
        data: o,
        dataType: "json",
        beforeSend: function() {
          e.displaySummary(i, null)
        },
        success: function(t) {
          if (t.success) {
            var o = i.find('[name="email"]').val(),
              r = i.find('[name="password"]').val();
            e.auth.isLoggedIn(n.getApiUrl("login"), o, r, function(t) {
              var i = {
                login: o,
                password: r,
                token: t.token
              };
              e.store.updateInfo(i)
            }, e.nothing), i.parents(".modal-content").find("button.close").trigger("click")
          } else t.message ? e.displaySummary(i, t.message) : e.displaySummary(i, "Maintenance work, please come back later")
        },
        error: function(t) {
          t.responseJSON && t.responseJSON.message ? e.displaySummary(i, t.responseJSON.message) : t.responseText ? e.displaySummary(i, t.responseText) : e.displaySummary(i, "Transfer error")
        }
      })
    }, s.prototype.onSignInFormSubmit = function(t) {
      t.stopPropagation(), t.preventDefault();
      var e = this,
        i = $("#sign_in_form"),
        o = i.serialize(),
        r = n.getApiUrl("login");
      $.ajax({
        url: r,
        method: "POST",
        data: o,
        dataType: "json",
        beforeSend: function() {
          e.displaySummary(i, null)
        },
        success: function(t) {
          if (t.success) {
            var n = {
              login: $("#sign_in_form").find('[name="email"]').val(),
              password: $("#sign_in_form").find('[name="password"]').val(),
              token: t.token
            };
            e.store.updateInfo(n), i.parents(".modal-content").find("button.close").trigger("click"), $("#sign-in-menu-point2 a").html('<i class="icon-user"></i> My Account'), $("#sign-in-menu-point").addClass("hidden"), $("#sign-in-menu-point2").removeClass("hidden")
          } else t.message ? e.displaySummary(i, t.message) : e.displaySummary(i, "Maintenance work, please come back later")
        },
        error: function(t) {
          t.responseJSON && t.responseJSON.message ? e.displaySummary(i, t.responseJSON.message) : t.responseText ? e.displaySummary(i, t.responseText) : e.displaySummary(i, "Transfer error")
        }
      })
    }, s.prototype.nothing = function() {}, s.prototype.init = function() {
      $(document).on("submit", "#password_recovery", this.onRestoreFormSubmit.bind(this)), $(document).on("submit", "#sign_up_form", this.onSignUpFormSubmit.bind(this)), $(document).on("submit", "#sign_in_form", this.onSignInFormSubmit.bind(this));
      try {
        var t = this.store.getInfo();
        t.login && t.password ? this.auth.isLoggedIn(n.getApiUrl("login"), t.login, t.password, this.nothing, this.nothing) : n.getCountry()
      } catch (t) {
        console.error(t)
      }
    }, e.exports = s
  }, {
    "./auth": 3,
    "./config": 7,
    "./store": 18
  }],
  13: [function(t, e, i) {
    var n = t("./config"),
      o = t("./auth"),
      r = t("./store"),
      s = function() {
        this.auth = new o, this.store = new r, this.$signInForm = $("#sign_in_form"), this.$signUpForm = $("#sign_up_form"), this.CANVAS_STATE = "canvas_state", this.CANVAS_COPY_STATE = "canvas_copy_state", this.LOGO_STORAGE = "LOGO_STORAGE"
      };
    s.prototype.displaySummary = function(t, e) {
      e ? t.find(".error_summary").html(e).removeClass("hidden") : t.find(".error_summary").addClass("hidden")
    }, s.prototype.displayErrors = function(t, e) {
      t.find(".help-block").addClass("hidden"), t.find(".form-group").removeClass("has-error");
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var n = e[i].pop();
          t.find("." + i + "_error").html(n).removeClass("hidden").parents(".form-group:first").addClass("has-error")
        }
    }, s.prototype.signUpForm = function(t) {
      t.stopPropagation(), t.preventDefault();
      var e = this,
        i = this.$signUpForm.serialize();
      console.log("store 1::", e.store), $.ajax({
        url: n.getApiUrl("registration"),
        method: "POST",
        data: i,
        dataType: "json",
        beforeSend: function() {
          e.displaySummary(e.$signUpForm, null)
        },
        success: function(t) {
          if (t.success) {
            var i = {
              login: e.$signUpForm.find('[name="email"]').val(),
              password: e.$signUpForm.find('[name="password"]').val()
            };
            e.auth.isLoggedIn(n.getApiUrl("login"), i.login, i.password, function(t) {
              var n = {
                login: i.login,
                password: i.password,
                token: t.token
              };
              e.store.updateInfo(n), e.saveLogo()
            })
          } else t.message ? e.displaySummary(e.$signUpForm, t.message) : e.displaySummary(e.$signUpForm, "Maintenance work, please come back later")
        },
        error: function(t) {
          t.responseJSON && t.responseJSON.message ? e.displaySummary(e.$signUpForm, t.responseJSON.message) : t.responseText ? e.displaySummary(e.$signUpForm, t.responseText) : e.displaySummary(e.$signUpForm, "Transfer error")
        }
      })
    }, s.prototype.signInForm = function(t) {
      t.stopPropagation(), t.preventDefault();
      var e = this,
        i = this.$signInForm.serialize();
      $.ajax({
        url: n.getApiUrl("login"),
        method: "POST",
        data: i,
        dataType: "json",
        beforeSend: function() {
          e.displaySummary(e.$signInForm, null)
        },
        success: function(t) {
          if (t.success) {
            if ("undefined" != typeof Storage) {
              var i = {
                login: e.$signInForm.find('[name="email"]').val(),
                password: e.$signInForm.find('[name="password"]').val(),
                token: t.token
              };
              e.store.updateInfo(i), e.store.getInfo(), e.saveLogo()
            }
          } else t.message ? e.displaySummary(e.$signInForm, t.message) : e.displaySummary(e.$signInForm, "Maintenance work, please come back later")
        },
        error: function(t) {
          t.responseJSON && t.responseJSON.message ? e.displaySummary(e.$signInForm, t.responseJSON.message) : t.responseText ? e.displaySummary(e.$signInForm, t.responseText) : e.displaySummary(e.$signInForm, "Transfer error")
        }
      })
    }, s.prototype.getCopyStorage = function() {
      var t = "";
      try {
        t = JSON.parse(localStorage.getItem(this.CANVAS_COPY_STATE))
      } catch (t) {
        console.error(t)
      }
      return t
    }, s.prototype.getLogoStorage = function() {
      var t = "";
      try {
        t = JSON.parse(localStorage.getItem(this.LOGO_STORAGE))
      } catch (t) {
        console.error(t)
      }
      return t
    }, s.prototype.saveLogo = function() {
      var t = this,
        e = this.store.getInfo(),
        i = {
          company: e.name,
          slogan: e.slogan,
          category: e.category,
          category_index: e.category_index
        };
      this.store.spliceInfo(null, {
        referrer: null
      });
      var o = this.getCopyStorage();
      e.token && o ? $.ajax({
        url: n.getApiUrl("logo/save"),
        type: "POST",
        dataType: "json",
        data: {
          logo: JSON.stringify(o),
          data: JSON.stringify(i)
        },
        headers: {
          Authorization: "Bearer " + e.token
        },
        success: function(e) {
          t.store.spliceInfo({
            logo_id: e.logo_id
          }), document.location.href = n.getAppUrl("../options.html")
        },
        error: function(t) {
          console.log(t)
        }
      }) : document.location.href = n.getAppUrl("/myaccount")
    }, s.prototype.onRestoreFormSubmit = function(t) {
      t.stopPropagation(), t.preventDefault();
      var e = this,
        i = $("#password_recovery"),
        o = i.serialize(),
        r = n.getApiUrl("restore");
      $.ajax({
        url: r,
        method: "POST",
        data: o,
        dataType: "json",
        beforeSend: function() {
          e.displaySummary(i, null)
        },
        success: function(t) {
          t.success ? (i.parents(".modal-content").find("button.close").trigger("click"), $("#info-popup .message").text(t.message), $("#info-popup").modal("show")) : t.message ? e.displaySummary(i, t.message) : e.displaySummary(i, "Maintenance work, please come back later")
        },
        error: function(t) {
          t.responseJSON && t.responseJSON.message ? e.displaySummary(i, t.responseJSON.message) : t.responseText ? e.displaySummary(i, t.responseText) : e.displaySummary(i, "Transfer error")
        }
      })
    }, s.prototype.bindForms = function() {
      $(document).on("submit", "#password_recovery", this.onRestoreFormSubmit.bind(this)), $(document).on("submit", "#sign_up_form", this.signUpForm.bind(this)), $(document).on("submit", "#sign_in_form", this.signInForm.bind(this))
    }, s.prototype.init = function() {
      try {
        var t = this.store.getInfo();
        t.login && t.password ? this.auth.isLoggedIn(n.getApiUrl("login"), t.login, t.password, function() {
          document.location.href = n.getAppUrl("../index.html")
        }) : n.getCountry(), this.bindForms()
      } catch (t) {
        console.error(t)
      }
    }, e.exports = s
  }, {
    "./auth": 3,
    "./config": 7,
    "./store": 18
  }],
  14: [function(t, e, i) {
    var n = t("./config"),
      o = t("./auth"),
      r = t("./store"),
      s = function() {
        this.formSelector = "#logo_text", this.auth = new o, this.store = new r
      };
    s.prototype.displayErrors = function(t) {
      $(".help-block").addClass("hidden"), $(".form-group").removeClass("has-error");
      for (var e in t) {
        var i = t[e].pop();
        $("#" + e + "_error").html(i).removeClass("hidden").parents(".form-group:first").addClass("has-error")
      }
    }, s.prototype.displaySummary = function(t) {
      t ? $("#error_summary").html(t).removeClass("hidden") : $("#error_summary").addClass("hidden")
    }, s.prototype.formOnSubmit = function(t) {
      t.stopPropagation(), t.preventDefault();
      var e = this,
        i = $(this.formSelector),
        o = i.serialize(),
        r = n.getApiUrl("store");
      $.ajax({
        url: r,
        method: "POST",
        data: o,
        dataType: "json",
        beforeSend: function() {
          e.displayErrors({}), e.displaySummary(null)
        },
        success: function(t) {
          if (t.url) {
            var n = {};
            n.category = i.find('[name="category"]').val(), n.name = i.find('[name="brand"]').val(), n.slogan = i.find('[name="slogan"]').val(), e.store.updateInfo(n), document.location.href = t.url
          } else t.errors ? e.displayErrors(t.errors) : e.displaySummary("Maintenance work, please come back later")
        },
        error: function(t) {
          t.responseJSON ? e.displayErrors(t.responseJSON) : t.responseText ? e.displaySummary(t.responseText) : e.displaySummary("Transfer error")
        }
      })
    }, s.prototype.nothing = function() {}, s.prototype.init = function() {
      $(document).on("submit", this.formSelector, this.formOnSubmit.bind(this))
    }, e.exports = s
  }, {
    "./auth": 3,
    "./config": 7,
    "./store": 18
  }],
  15: [function(t, e, i) {
    var n = t("./config"),
      o = t("./auth"),
      r = t("./store"),
      s = function() {
        this.auth = new o, this.store = new r, this.businessPrice = 5, this.proPrice = 10, this.premiumPrice = 15, this.coupon = {}, this.discount = 0, this.currency = "USD", this.logo_id = null
      };
    s.prototype.listenGoogle = function(t) {
      var e = t.data.replace("!_", "");
      try {
        e = JSON.parse(e), e.s.indexOf("_g_restyleMe") != -1 && 1 == Object.keys(e.a[0]).length && e.a[0].hasOwnProperty("height") && (document.location.href = n.getAppUrl("../free-order-complete.html"))
      } catch (t) {}
    }, s.prototype.fillHtml = function() {
      var t = "$";
      try {
        t = n.currencySigns[this.currency] ? n.currencySigns[this.currency] : ""
      } catch (e) {
        console.error(e), t = "$"
      }
      var e = this.businessPrice,
        i = this.proPrice,
        o = this.premiumPrice;
      this.coupon && this.coupon.discount ? (e = e * (100 - this.coupon.discount) / 100, i = i * (100 - this.coupon.discount) / 100, o = o * (100 - this.coupon.discount) / 100) : this.discount && (e *= 1 - this.discount, i *= 1 - this.discount, o *= 1 - this.discount);
      var r = "00" !== parseFloat(e).toFixed(2).toString().slice(-2) ? parseFloat(e).toFixed(2) : parseFloat(e).toFixed();
      $("#business-price").html(r + "<sup>" + t + "</sup>");
      var r = "00" !== parseFloat(i).toFixed(2).toString().slice(-2) ? parseFloat(i).toFixed(2) : parseFloat(i).toFixed();
      $("#pro-price").html(r + "<sup>" + t + "</sup>");
      var r = "00" !== parseFloat(o).toFixed(2).toString().slice(-2) ? parseFloat(o).toFixed(2) : parseFloat(o).toFixed();
      $("#premium-price").html(r + "<sup>" + t + "</sup>")
    }, s.prototype.placeInRect = function(t, e, i, n) {
      t.set({
        originX: "left",
        originY: "top"
      }), t.getHeight() / i.height > t.getWidth() / i.width ? t.scaleToHeight(i.height * n) : t.scaleToWidth(i.width * n), t.set({
        left: e.left + i.left + Math.floor((i.width - t.getWidth()) / 2),
        top: e.top + i.top + Math.floor((i.height - t.getHeight()) / 2),
        selectable: !1
      })
    }, s.prototype.drawLogo = function(t, e, i) {
      var n = this,
        o = t.width(),
        r = t.height(),
        s = "logo" + Math.random().toString().substr(2);
      t.wrap('<canvas id="' + s + '" class="foreground-img" width="' + o + '" height="' + r + '"></canvas>');
      var a = new fabric.Canvas(s);
      a.setWidth(o).setHeight(r), a.loadFromJSON(i, function() {
        var i = a.getObjects().map(function(t) {
            return t.set({
              active: !0,
              controls: !1,
              selectable: !1,
              transparentCorners: !0
            })
          }),
          o = new fabric.Group(i, {
            originX: "center",
            originY: "center",
            transparentCorners: !0
          });
        fabric.Image.fromURL(t.prop("src"), function(i) {
          t.remove(), a.clear(), i.set({
            selectable: !1
          }), a.add(i).centerObject(i), n.placeInRect(o, {
            left: i.getLeft(),
            top: i.getTop()
          }, e, .85), a.add(o).bringToFront(o), a.discardActiveGroup().renderAll(), a.selectable = !1
        })
      })
    }, s.prototype.drawLogos = function(t) {
      t && "object" == typeof t && t.logo_json ? (this.drawLogo($("#logo-preview-img-1"), {
        left: 10,
        top: 21,
        width: 138,
        height: 158
      }, JSON.parse(t.logo_json)), this.drawLogo($("#logo-preview-img-2"), {
        left: 88,
        top: 54,
        width: 80,
        height: 110
      }, JSON.parse(t.logo_json)), this.drawLogo($("#logo-preview-img-3"), {
        left: 53,
        top: 31,
        width: 86,
        height: 132
      }, JSON.parse(t.logo_json))) : console.error("There are no json")
    }, s.prototype.loadOrderInfo = function() {
      var t = this.store.getInfo();
      t.logo_id || (console.log(t), console.error("No logo id"), document.location.href = n.getAppUrl("editlogo")), this.logo_id = t.logo_id;
      var e = this;
      return $.ajax({
        url: n.getApiUrl("logo/" + this.logo_id),
        type: "GET",
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        dataType: "json",
        success: function(t) {
          if (t.success) {
            var i = n.webConfig;
            i.active = i.inactive = function() {
              e.drawLogos.call(e, t.data)
            }, WebFont.load(i)
          } else t.message && console.error(t.message)
        },
        error: function(t) {
          console.error(t)
        },
        complete: e.fillHtml.bind(e)
      })
    }, s.prototype.loadUserInfo = function() {
      var t = this;
      return $.ajax({
        url: n.getApiUrl("me"),
        type: "GET",
        headers: {
          Authorization: "Bearer " + t.auth.token
        },
        dataType: "json",
        success: function(e) {
          e && "object" == typeof e && (e.businessPrice && !isNaN(parseFloat(e.businessPrice)) && (t.businessPrice = parseFloat(e.businessPrice)), e.proPrice && !isNaN(parseFloat(e.proPrice)) && (t.proPrice = parseFloat(e.proPrice)), e.premiumPrice && !isNaN(parseFloat(e.premiumPrice)) && (t.premiumPrice = parseFloat(e.premiumPrice)), e.mspCurrency && (t.currency = e.mspCurrency))
        }
      })
    }, s.prototype.goToCheckout = function(t, e) {
      return e && e.preventDefault(), this.auth.token ? (t && this.store.updateInfo({
        plan: t
      }), void(document.location.href = n.getAppUrl("../checkout.html"))) : void this.auth.goToLogin()
    }, s.prototype.onGoogleShare = function(t) {
      if (t && "object" == typeof t && "completed" == t.status && "shared" == t.action) {
        var e = this;
        $.ajax({
          url: n.getApiUrl("share/" + e.logo_id),
          type: "PUT",
          data: {
            type: "google",
            post_id: t.post_id
          },
          headers: {
            Authorization: "Bearer " + e.auth.token
          },
          dataType: "json",
          complete: function() {
            e.store.updateInfo({
              plan: "free"
            }), document.location.href = n.getAppUrl("../free-order-complete.html")
          }
        })
      }
    }, s.prototype.onFacebookShare = function(t) {
      if (t && "object" == typeof t) {
        var e = this;
        $.ajax({
          url: n.getApiUrl("share/" + e.logo_id),
          type: "PUT",
          data: {
            type: "facebook",
            post_id: t.post_id
          },
          headers: {
            Authorization: "Bearer " + e.auth.token
          },
          dataType: "json",
          complete: function() {
            e.store.updateInfo({
              plan: "free"
            }), document.location.href = n.getAppUrl("../free-order-complete.html")
          }
        })
      }
    }, s.prototype.facebookShare = function(t) {
      t.preventDefault(), FB.ui({
        method: "share",
        href: n.getDomain()
      }, this.onFacebookShare.bind(this))
    }, s.prototype.twitterShare = function(t) {
      t.preventDefault();
      var e = this;
      $.ajax({
        url: n.getApiUrl("twitter/free"),
        type: "POST",
        data: {
          logo_id: e.logo_id
        },
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        dataType: "json",
        success: function(t) {
          t.url ? (e.store.updateInfo({
            plan: "free"
          }), document.location.href = t.url) : $("#twitter-share").hide()
        },
        error: function(t) {
          console.error(t), $("#twitter-share").hide()
        }
      })
    }, s.prototype.setDiscount = function(t) {
      var e = this;
      $.ajax({
        url: n.getApiUrl("discount/" + t),
        method: "GET",
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        dataType: "json",
        success: function(t) {
          t.error ? console.error(t.message) : isNaN(parseFloat(t.discount)) ? ($(".discount-block").show(), $(".u-discount-block").hide()) : (e.discount = parseFloat(t.discount), $(".discount-block").hide(), $(".u-discount-block").show(), e.fillHtml())
        },
        error: function(t) {
          console.error(t)
        },
        complete: function() {
          e.goToCheckout(!1, !1)
        }
      })
    }, s.prototype.loadMaxDiscount = function() {
      var t = this;
      return $.ajax({
        url: n.getApiUrl("discounts"),
        method: "GET",
        headers: {
          Authorization: "Bearer " + t.auth.token
        },
        dataType: "json",
        success: function(e) {
          e.discount && e.discount_id && !isNaN(parseFloat(e.discount)) && (t.discount = parseFloat(e.discount), $(".discount-block").hide(), $(".u-discount-block").show())
        },
        error: function(t) {
          console.error(t)
        }
      })
    }, s.prototype.getPlan = function(t) {
      return t.parents(".c-tile:first").children(".c-label").data("plan").toLowerCase()
    }, s.prototype.onGoogleDiscount = function(t) {
      t && "object" == typeof t && "completed" == t.status && "shared" == t.action && this.setDiscount("google")
    }, s.prototype.onFacebookDiscount = function(t) {
      t && "object" == typeof t && this.setDiscount("facebook")
    }, s.prototype.facebookDiscount = function(t) {
      t.preventDefault(), this.store.updateInfo({
        plan: this.getPlan($(t.target))
      }), FB.ui({
        method: "share",
        href: n.getDomain()
      }, this.onFacebookDiscount.bind(this))
    }, s.prototype.twitterDiscount = function(t) {
      t.preventDefault(), this.store.updateInfo({
        plan: this.getPlan($(t.target))
      });
      var e = this;
      $.ajax({
        url: n.getApiUrl("twitter/options"),
        type: "GET",
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        dataType: "json",
        success: function(t) {
          t.url ? document.location.href = t.url : $(".twitter-share").hide()
        },
        error: function(t) {
          console.error(t), $(".twitter-share").hide()
        }
      })
    }, s.prototype.googleDiscount = function(t) {
      this.store.updateInfo({
        plan: this.getPlan($(t.target))
      })
    }, s.prototype.applyCoupon = function(t) {
      t.preventDefault();
      var e = this,
        i = $($(t.target).data("target")).val(),
        o = $(t.target).data("plan");
      console.log(o), $.ajax({
        url: n.getApiUrl("coupon/check/" + i),
        type: "GET",
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        dataType: "json",
        success: function(t) {
          t.model ? (e.coupon = t.model, t.model.discount >= 100 ? e.freeCoupon(o) : e.store.spliceInfo({
            coupon: t.model.code
          }), $(".coupon-label").hide(), $(".discount-block").hide(), $(".coupon-discount").html("You have <strong>" + t.model.discount + "%</strong> discount"), $(".coupon-applied").show()) : ($("#info-popup .message").text("Sorry, there are no coupon with this code or coupon has been used already"), $("#info-popup").modal("show"))
        },
        error: function(t) {
          console.error(t), $("#info-popup .message").text("Connection error, please update page"), $("#info-popup").modal("show")
        }
      })
    }, s.prototype.checkCoupon = function() {
      var t = this,
        e = this.store.getInfo(),
        i = e.coupon;
      i && $.ajax({
        url: n.getApiUrl("coupon/check/" + i),
        type: "GET",
        headers: {
          Authorization: "Bearer " + t.auth.token
        },
        dataType: "json",
        success: function(e) {
          e.model ? (t.coupon = e.model, $(".coupon-label").hide(), $(".discount-block").hide(), $(".coupon-discount").html("You have <strong>" + e.model.discount + "%</strong> discount"), $(".coupon-applied").show(), t.fillHtml()) : t.store.spliceInfo({}, {
            coupon: null
          })
        }
      })
    }, s.prototype.freeCoupon = function(t) {
      var e = this;
      e.logo_id && this.coupon && this.coupon.discount >= 100 && $.ajax({
        url: n.getApiUrl("coupon/apply/" + e.coupon.code),
        type: "POST",
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        data: {
          plan: t,
          logoId: e.logo_id
        },
        dataType: "json",
        success: function(t) {
          t.error ? ($("#info-popup .message").text(t.message), $("#info-popup").modal("show")) : document.location.href = n.getAppUrl("../order-complete.html")
        }
      })
    }, s.prototype.loadInfo = function() {
      this.loadMaxDiscount().then(this.loadUserInfo.bind(this)).then(this.loadOrderInfo.bind(this)).then(this.checkCoupon.bind(this)), $(document).on("click", "#business-purchase", this.goToCheckout.bind(this, "business")), $(document).on("click", "#pro-purchase", this.goToCheckout.bind(this, "pro")), $(document).on("click", "#premium-purchase", this.goToCheckout.bind(this, "premium")), $(document).on("click", "#facebook-share", this.facebookShare.bind(this)), $(document).on("click", "#twitter-share", this.twitterShare.bind(this)), $(document).on("click", ".facebook-share", this.facebookDiscount.bind(this)), $(document).on("click", ".twitter-share", this.twitterDiscount.bind(this)), $(document).on("click", ".google-plus-share", this.googleDiscount.bind(this)), $(document).on("click", ".apply-coupon", this.applyCoupon.bind(this))
    }, s.prototype.init = function() {
      if (console.log(n.isOptionsEnabled()), !n.isOptionsEnabled()) return this.goToCheckout("premium");
      try {
        var t = this.store.getInfo();
        t.login && t.password ? this.auth.isLoggedIn(n.getApiUrl("login"), t.login, t.password, this.loadInfo.bind(this)) : this.auth.goToLogin()
      } catch (t) {
        console.error(t), document.location.href = n.getAppUrl("../index.html")
      }
    }, e.exports = s
  }, {
    "./auth": 3,
    "./config": 7,
    "./store": 18
  }],
  16: [function(t, e, i) {
    var n = t("./config"),
      o = t("./auth"),
      r = t("./store"),
      s = function() {
        this.auth = new o, this.store = new r, this.logo_id = null, this.data = {}, this.plan = "free", this.timerInterval = null
      };
    s.prototype.startDownload = function() {
      this.startDownloadTimer(), this.download()
    }, s.prototype.download = function() {
      var t = this;
      console.log("data-->", t), $.ajax({
        url: n.getApiUrl("logo/download/" + t.plan),
        type: "POST",
        data: {
          logoId: t.logo_id,
          data: t.data,
          plan: t.plan
        },
        headers: {
          Authorization: "Bearer " + t.auth.token
        },
        dataType: "json",
        success: function(e) {
          e.url ? ($("#info-popup").modal("hide"), clearInterval(t.timerInterval), document.location.href = e.url) : e.error ? ($("#info-popup").modal("hide"), clearInterval(t.timerInterval), console.error(e.message)) : "generating" === e.message && ($("#info-popup").data("bs.modal") && $("#info-popup").data("bs.modal").isShown || ($("#info-popup .message").html('<div>Your logo is generating now, remaining time: <span id="download-timer" style="color: red; font-weight: bold;">05:00</span><br/>Please wait or try again in 5 minutes.</div><div style="height: 150px; position: relative;"><div class="ajax-container">\n  <div class="holder">\n    <div class="box"></div>\n  </div>\n  <div class="holder">\n    <div class="box"></div>\n  </div>\n  <div class="holder">\n    <div class="box"></div>\n  </div>\n</div></div>'), $("#info-popup").modal("show")), setTimeout(t.download.bind(t), 5e3))
        },
        error: function(t) {
          console.error(t)
        }
      })
    }, s.prototype.startDownloadTimer = function() {
      var t = 300;
      this.timerInterval = setInterval(function() {
        var e = Math.trunc(t / 60),
          i = t % 60;
        $("#download-timer").text((e < 10 ? "0" + e : e) + ":" + (i < 10 ? "0" + i : i)), --t < 0 && (t = 300)
      }, 1e3)
    }, s.prototype.bindUrl = function(t, e) {
      var i = t.toSVG(),
        n = t.toDataURL(),
        o = JSON.stringify(t.toJSON());
      this.data = {
        json: o,
        svg: i,
        png: n
      }, console.log(this.data), $(document).on("click", ".download-logo-url", this.startDownload.bind(this)), $(".download-logo-url").text("DOWNLOAD YOUR LOGO NOW!").removeClass("disabled")
    }, s.prototype.placeInRect = function(t, e, i, n) {
      t.set({
        originX: "left",
        originY: "top"
      }), t.getHeight() / i.height > t.getWidth() / i.width ? t.scaleToHeight(i.height * n) : t.scaleToWidth(i.width * n), t.set({
        left: e.left + i.left + Math.floor((i.width - t.getWidth()) / 2),
        top: e.top + i.top + Math.floor((i.height - t.getHeight()) / 2),
        selectable: !1
      })
    }, s.prototype.makeLogo = function(t) {
      var e = this;
      if (t && "object" == typeof t && t.logo_json) {
        var i = document.createElement("canvas"),
          n = {
            horizontal: 250,
            vertical: 250
          },
          o = ["premium", "pro", "business"];
        ~o.indexOf(e.plan.toLowerCase()) ? (i.width = 3e3, i.height = 3e3) : (i.width = 150, i.height = 150, n = {
          horizontal: 25,
          vertical: 25
        });
        var r = new fabric.Canvas(i);
        r.loadFromJSON(JSON.parse(t.logo_json), function() {
          r.centerTransform = !0, r.setBackgroundImage(0);
          var o = r.getObjects().map(function(t) {
              return t.set({
                active: !0,
                controls: !1,
                transparentCorners: !0
              })
            }),
            s = new fabric.Group(o, {
              originX: "center",
              originY: "center",
              transparentCorners: !0
            });
          r.setActiveGroup(s.setCoords()), e.placeInRect(r.getActiveGroup(), {
            left: n.horizontal,
            top: n.vertical
          }, {
            left: 0,
            top: 0,
            height: i.height - 2 * n.vertical,
            width: i.width - 2 * n.horizontal
          }, 1), r.discardActiveGroup(), r.calcOffset().discardActiveGroup().deactivateAll().renderAll(), e.bindUrl(r, JSON.parse(t.logo_json))
        })
      } else console.error("There are no json")
    }, s.prototype.loadOrderInfo = function() {
      var t = this.store.getInfo();
      if (!t.logo_id) throw console.log(t), new Error("No logo id");
      this.logo_id = t.logo_id;
      var e = this;
      $.ajax({
        url: n.getApiUrl("paid/" + this.logo_id),
        type: "GET",
        headers: {
          Authorization: "Bearer " + e.auth.token
        },
        dataType: "json",
        success: function(t) {
          if (t.success) {
            var i = n.webConfig;
            i.active = i.inactive = function() {
              e.makeLogo(t.data)
            }, WebFont.load(i)
          } else t.message && console.error(t.message)
        },
        error: function(t) {
          console.error(t)
        }
      })
    }, s.prototype.init = function() {
      try {
        var t = this.store.getInfo();
        t.plan && (this.plan = t.plan), t.login && t.password ? this.auth.isLoggedIn(n.getApiUrl("login"), t.login, t.password, this.loadOrderInfo.bind(this)) : this.auth.goToLogin()
      } catch (t) {
        console.error(t), document.location.href = n.getAppUrl("../index.html")
      }
    }, e.exports = s
  }, {
    "./auth": 3,
    "./config": 7,
    "./store": 18
  }],
  17: [function(t, e, i) {
    e.exports = {
      APP_NAME: "MLOF",
      APP_DOMAIN: "https://www.makelogoonlinefree.com/",
      APP_URI: "logomaker/app/",
      API_URL: "logomaker/app/api/",
      LOGIN_URL: "logomaker/register-login.html",
      APP_URL: "https://www.makelogoonlinefree.com/logomaker/app/",
      STRIPE_PUBLIC_KEY: "pk_live_CROeGCFiaaVaGt4Br7eX7Hij",
      PAYPAL_BUSINESS: "order@companydatabases.net",
      PAYPAL_URL: "https://www.paypal.com/cgi-bin/webscr",
      PAYPAL_SANDBOX: !1,
      PAYPAL_ITEM_NAME: "Unique Logo",
      GOOGLE_PLUS_CLIENT_ID: "126101876567-3c3uku7r664ktn2disqaa2bhtpnb5ush.apps.googleusercontent.com",
      GOOGLE_PLUS_CONTENT_URL: "https://www.makelogoonlinefree.com/",
      GOOGLE_PLUS_PREFILL_TEXT: "I just made a logo at make logo online free. Make yours now!",
      FACEBOOK_APP_ID: "1067419833402803",
      OPTIONS_ENABLED: !0,
      PAYMENT_SYSTEMS: {
        paypal: {
          default: !1
        },
        hipay: {
          default: !1,
          AD: !1
        },
        stripe: {
          default: !0,
          AD: !0
        },
        "stripe-card": {
          default: !0
        },
        "stripe-alipay": {
          default: !1,
          CN: !0
        },
        "stripe-bancontact": {
          default: !1,
          BE: !0
        },
        "stripe-giropay": {
          default: !1,
          DE: !0
        },
        "stripe-ideal": {
          default: !1,
          NL: !0
        },
        "stripe-p24": {
          default: !1,
          PL: !0
        },
        "stripe-sepa": {
          default: !1,
          NL: !1
        },
        "stripe-sofort": {
          default: !1,
          DE: !0,
          AT: !0,
          CH: !0,
          ES: !0,
          BE: !0,
          IT: !0,
          NL: !0,
          SK: !0
        }
      }
    }
  }, {}],
  18: [function(t, e, i) {
    var n = function() {
      this.infoKey = "info", this.CANVAS_STATE = "canvas_state", this.INFO = "info", "undefined" == typeof Storage && console.error("Storage isn't supported")
    };
    n.prototype.getInfo = function() {
      var t = {};
      try {
        "undefined" != typeof Storage && (t = JSON.parse(localStorage.getItem(this.infoKey)))
      } catch (t) {}
      return t ? t : {}
    }, n.prototype.setInfo = function(t) {
      if ("undefined" != typeof Storage) try {
        localStorage.setItem(this.infoKey, JSON.stringify(t))
      } catch (e) {
        localStorage.clear(), localStorage.setItem(this.infoKey, JSON.stringify(t))
      }
    }, n.prototype.updateInfo = function(t) {
      var e = this.getInfo();
      for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
      "undefined" != typeof Storage && localStorage.setItem(this.infoKey, JSON.stringify(e))
    }, n.prototype.spliceInfo = function(t, e) {
      var i, n = this.getInfo();
      if (t)
        for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
      if (e && "object" == typeof e)
        for (i in e) e.hasOwnProperty(i) && n.hasOwnProperty(i) && delete n[i];
      if (e && Array.isArray(e))
        for (var o = 0; o < e.length; ++o) n.hasOwnProperty(e[o]) && delete n[e[o]];
      this.setInfo(n)
    }, n.prototype.setCanvasState = function(t) {
      try {
        localStorage.setItem(this.CANVAS_STATE, JSON.stringify(t))
      } catch (e) {
        console.error(e), this.clearAndPut(null, t)
      }
    }, n.prototype.clearAndPut = function(t, e) {
      null === t && (t = this.getInfo()), null === e && (e = this.getCanvasState());
      try {
        localStorage.clear(), localStorage.setItem(this.INFO, JSON.stringify(t)), localStorage.setItem(this.CANVAS_STATE, JSON.stringify(e))
      } catch (t) {
        console.error(t)
      }
    }, e.exports = n
  }, {}],
  19: [function(t, e, i) {
    "use strict";
    var n = t("./config"),
      o = t("./auth"),
      r = t("./store"),
      s = t("./discount"),
      a = function() {
        this.auth = new o, this.store = new r, this.discount = new s(this), this.stripe = null, this.currency = "EUR", this.price = "10.99", this.coupon = {}, this.user = {}
      };
    a.prototype.goBack = function(t) {
      t && t.preventDefault(), document.location.href = n.getAppUrl("../checkout.html")
    }, a.prototype.beforeStripe = function() {
      var t = this,
        e = this.store.getInfo(),
        i = StripeCheckout.configure({
          key: n.payment.stripe.publishable_key,
          image: n.getDomain() + "dist/images/site-logo.jpg",
          name: n.appName,
          locale: "auto",
          token: function(i) {
            $.ajax({
              url: n.getApiUrl("stripe/" + e.logo_id),
              type: "POST",
              headers: {
                Authorization: "Bearer " + t.auth.token
              },
              data: {
                plan: t.plan,
                discountId: t.discount.discount_id ? t.discount.discount_id : "0",
                couponId: t.coupon.code ? t.coupon.code : "0",
                tokenId: i.id,
                email: i.email
              },
              dataType: "json",
              success: function(t) {
                t.error ? console.error(t.error) : document.location.href = t.url
              },
              error: function(t) {
                console.error(t)
              }
            })
          }
        }),
        o = 100 * (this.price - (this.discount.getDiscount() ? this.price * this.discount.discount : 0));
      i.open({
        description: "Unique logo design of " + t.plan + " plan",
        currency: t.currency,
        email: this.user.email,
        amount: o
      }), window.addEventListener("popstate", function() {
        i.close()
      })
    }, a.prototype.sourceHandler = function(t) {
      t.error ? (console.error(t.error.message), console.log(t.error), location.href = n.getAppUrl("../index.html")) : location.href = t.source.redirect.url
    }, a.prototype.createSource = function(t) {
      var e = "";
      this.user.firstName && (e = this.user.firstName), this.user.lastName && (e += " " + this.user.lastName);
      var i = this.store.getInfo(),
        o = "?" + ["id=" + i.logo_id, "couponId=" + this.coupon.id, "discountId=" + this.discount.discount_id, "plan=" + this.plan].join("&");
      console.log(o), this.stripe.createSource({
        type: t,
        amount: Math.floor(100 * parseFloat(this.price)),
        currency: this.currency.toLowerCase(),
        owner: {
          name: e,
          email: this.user.email
        },
        redirect: {
          return_url: n.getApiUrl("stripe/source" + o)
        }
      }).then(this.sourceHandler.bind(this))
    }, a.prototype.submitStripeCheckout = function(t) {
      if (t.preventDefault(), $("#stripe-card-radio").is(":checked")) this.beforeStripe();
      else if ($("#stripe-alipay-radio").is(":checked")) this.createSource("alipay");
      else if ($("#stripe-bancontact-radio").is(":checked")) this.createSource("bancontact");
      else if ($("#stripe-giropay-radio").is(":checked")) this.createSource("giropay");
      else if ($("#stripe-ideal-radio").is(":checked")) this.createSource("ideal");
      else if ($("#stripe-p24-radio").is(":checked")) this.createSource("p24");
      else if ($("#stripe-sepa-radio").is(":checked")) this.createSource("sepa_debit");
      else {
        if (!$("#stripe-sofort-radio").is(":checked")) throw new Error("No one pay method checked");
        this.createSource("sofort")
      }
    }, a.prototype.checkCoupon = function() {
      var t = this,
        e = this.store.getInfo(),
        i = e.coupon;
      i && $.ajax({
        url: n.getApiUrl("coupon/check/" + i),
        type: "GET",
        headers: {
          Authorization: "Bearer " + t.auth.token
        },
        dataType: "json",
        success: function(e) {
          console.log(e), e.model ? t.coupon = e.model : t.store.spliceInfo({}, {
            coupon: null
          })
        }
      })
    }, a.prototype.loadUserInfo = function() {
      var t = this;
      return $.ajax({
        url: n.getApiUrl("me"),
        type: "GET",
        headers: {
          Authorization: "Bearer " + t.auth.token
        },
        dataType: "json",
        success: function(e) {
          "premium" === t.plan ? e.premiumPrice && !isNaN(parseFloat(e.premiumPrice)) && (t.price = parseFloat(e.premiumPrice)) : "pro" === t.plan ? e.proPrice && !isNaN(parseFloat(e.proPrice)) && (t.price = parseFloat(e.proPrice)) : e.businessPrice && !isNaN(parseFloat(e.businessPrice)) && (t.price = parseFloat(e.businessPrice)), t.user = e, e.stripeCurrency && (t.currency = e.stripeCurrency, $("div.c-radio").each(function() {
            if ($(this).data("currencies")) {
              var e = $(this).data("currencies").toString().replace(" ", "").toLowerCase().split(",");
              if (console.log(e), ~e.indexOf(t.currency.toLowerCase()))
                if (n.paymentSystems && "object" == typeof n.paymentSystems) {
                  var i = n.paymentSystems,
                    o = $(this).prop("id").replace("-block", "");
                  i[o] && "object" == typeof i[o] ? (console.log(o, " ", i[o].default, " ", i[o][t.user.country]), (i[o].default || i[o][t.user.country]) && $(this).show()) : $(this).show()
                } else $(this).show();
              else $(this).hide()
            }
          }))
        }
      })
    }, a.prototype.loadInfo = function() {
      this.discount.loadMaxDiscount().then(this.loadUserInfo.bind(this)).then(this.checkCoupon.bind(this))
    }, a.prototype.init = function() {
      try {
        var t = this.store.getInfo();
        if (!t.plan || "business" !== t.plan && "pro" !== t.plan && "premium" !== t.plan ? this.goBack(null) : this.plan = t.plan, t.login && t.password ? this.auth.isLoggedIn(n.getApiUrl("login"), t.login, t.password, this.loadInfo.bind(this)) : this.auth.goToLogin(), "function" != typeof Stripe) throw new Error("Stripe object does not exist!")
      } catch (t) {
        console.error(t), document.location.href = n.getAppUrl("../index.html")
      }
      this.stripe = Stripe(n.payment.stripe.publishable_key), $(document).on("click", ".stripe-cancel-checkout", this.goBack.bind(this)), $(document).on("submit", "#stripe-checkout-form", this.submitStripeCheckout.bind(this))
    }, e.exports = a
  }, {
    "./auth": 3,
    "./config": 7,
    "./discount": 9,
    "./store": 18
  }],
  20: [function(t, e, i) {
    e.exports = [{
      name: "All Logo Categories",
      url: "./assets/xml/all.json"
    }, {
      name: "Business & Finance",
      url: "./assets/xml/business.json"
    }, {
      name: "Agriculture",
      url: "./assets/xml/agriculture_svg.json"
    }, {
      name: "Animals & Pets",
      url: "./assets/xml/animalspets.json"
    }, {
      name: "Car & Transport",
      url: "./assets/xml/cartransport.json"
    }, {
      name: "Cleaning",
      url: "./assets/xml/cleaning.json"
    }, {
      name: "Communication & Media",
      url: "./assets/xml/communication.json"
    }, {
      name: "Construction",
      url: "./assets/xml/construction.json"
    }, {
      name: "Dating & Romance",
      url: "./assets/xml/dating.json"
    }, {
      name: "Education",
      url: "./assets/xml/education.json"
    }, {
      name: "HR",
      url: "./assets/xml/hr.json"
    }, {
      name: "Energy",
      url: "./assets/xml/energy.json"
    }, {
      name: "Engineering",
      url: "./assets/xml/engineering.json"
    }, {
      name: "Entertainment",
      url: "./assets/xml/entertainment.json"
    }, {
      name: "Fashion",
      url: "./assets/xml/fashion.json"
    }, {
      name: "Community & Foundation",
      url: "./assets/xml/foundation.json"
    }, {
      name: "Home & Garden",
      url: "./assets/xml/garden.json"
    }, {
      name: "Legal",
      url: "./assets/xml/legal.json"
    }, {
      name: "Shopping",
      url: "./assets/xml/shopping.json"
    }, {
      name: "Sport & Fitness",
      url: "./assets/xml/sport.json"
    }, {
      name: "Nature",
      url: "./assets/xml/nature.json"
    }, {
      name: "Photography",
      url: "./assets/xml/photography.json"
    }, {
      name: "Real Estate",
      url: "./assets/xml/realestate.json"
    }, {
      name: "IT",
      url: "./assets/xml/it.json"
    }, {
      name: "Kids",
      url: "./assets/xml/kids.json"
    }, {
      name: "Food & Drinks",
      url: "./assets/xml/fooddrinks.json"
    }, {
      name: "Music",
      url: "./assets/xml/music.json"
    }, {
      name: "Travel",
      url: "./assets/xml/travel.json"
    }, {
      name: "Welness",
      url: "./assets/xml/welness.json"
    }]
  }, {}]
}, {}, [1]);
