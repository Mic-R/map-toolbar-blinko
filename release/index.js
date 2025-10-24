var jm = Object.defineProperty;
var Hm = ($t, k, pe) => k in $t ? jm($t, k, { enumerable: !0, configurable: !0, writable: !0, value: pe }) : $t[k] = pe;
var qh = ($t, k, pe) => (Hm($t, typeof k != "symbol" ? k + "" : k, pe), pe);
(function() {
  var $t, k, pe, Pe, So, Io, Lo, Ao, Ss, Is, Ls, bi = {}, bo = [], Jh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Mi = Array.isArray;
  function ie(n, t) {
    for (var e in t)
      n[e] = t[e];
    return n;
  }
  function As(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
  }
  function bs(n, t, e) {
    var i, s, r, o = {};
    for (r in t)
      r == "key" ? i = t[r] : r == "ref" ? s = t[r] : o[r] = t[r];
    if (arguments.length > 2 && (o.children = arguments.length > 3 ? $t.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
      for (r in n.defaultProps)
        o[r] === void 0 && (o[r] = n.defaultProps[r]);
    return En(n, o, i, s, null);
  }
  function En(n, t, e, i, s) {
    var r = { type: n, props: t, key: e, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: s ?? ++pe, __i: -1, __u: 0 };
    return s == null && k.vnode != null && k.vnode(r), r;
  }
  function qe(n) {
    return n.children;
  }
  function ne(n, t) {
    this.props = n, this.context = t;
  }
  function Je(n, t) {
    if (t == null)
      return n.__ ? Je(n.__, n.__i + 1) : null;
    for (var e; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null)
        return e.__e;
    return typeof n.type == "function" ? Je(n) : null;
  }
  function Mo(n) {
    var t, e;
    if ((n = n.__) != null && n.__c != null) {
      for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
        if ((e = n.__k[t]) != null && e.__e != null) {
          n.__e = n.__c.base = e.__e;
          break;
        }
      return Mo(n);
    }
  }
  function Po(n) {
    (!n.__d && (n.__d = !0) && Pe.push(n) && !xn.__r++ || So != k.debounceRendering) && ((So = k.debounceRendering) || Io)(xn);
  }
  function xn() {
    for (var n, t, e, i, s, r, o, a = 1; Pe.length; )
      Pe.length > a && Pe.sort(Lo), n = Pe.shift(), a = Pe.length, n.__d && (e = void 0, i = void 0, s = (i = (t = n).__v).__e, r = [], o = [], t.__P && ((e = ie({}, i)).__v = i.__v + 1, k.vnode && k.vnode(e), Ms(t.__P, e, i, t.__n, t.__P.namespaceURI, 32 & i.__u ? [s] : null, r, s ?? Je(i), !!(32 & i.__u), o), e.__v = i.__v, e.__.__k[e.__i] = e, No(r, e, o), i.__e = i.__ = null, e.__e != s && Mo(e)));
    xn.__r = 0;
  }
  function Do(n, t, e, i, s, r, o, a, l, h, c) {
    var u, d, f, g, p, _, m, y = i && i.__k || bo, w = t.length;
    for (l = Qh(e, t, y, l, w), u = 0; u < w; u++)
      (f = e.__k[u]) != null && (d = f.__i == -1 ? bi : y[f.__i] || bi, f.__i = u, _ = Ms(n, f, d, s, r, o, a, l, h, c), g = f.__e, f.ref && d.ref != f.ref && (d.ref && Ds(d.ref, null, f), c.push(f.ref, f.__c || g, f)), p == null && g != null && (p = g), (m = !!(4 & f.__u)) || d.__k === f.__k ? l = Oo(f, l, n, m) : typeof f.type == "function" && _ !== void 0 ? l = _ : g && (l = g.nextSibling), f.__u &= -7);
    return e.__e = p, l;
  }
  function Qh(n, t, e, i, s) {
    var r, o, a, l, h, c = e.length, u = c, d = 0;
    for (n.__k = new Array(s), r = 0; r < s; r++)
      (o = t[r]) != null && typeof o != "boolean" && typeof o != "function" ? (l = r + d, (o = n.__k[r] = typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? En(null, o, null, null, null) : Mi(o) ? En(qe, { children: o }, null, null, null) : o.constructor == null && o.__b > 0 ? En(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = n, o.__b = n.__b + 1, a = null, (h = o.__i = tc(o, e, l, u)) != -1 && (u--, (a = e[h]) && (a.__u |= 2)), a == null || a.__v == null ? (h == -1 && (s > c ? d-- : s < c && d++), typeof o.type != "function" && (o.__u |= 4)) : h != l && (h == l - 1 ? d-- : h == l + 1 ? d++ : (h > l ? d-- : d++, o.__u |= 4))) : n.__k[r] = null;
    if (u)
      for (r = 0; r < c; r++)
        (a = e[r]) != null && !(2 & a.__u) && (a.__e == i && (i = Je(a)), zo(a, a));
    return i;
  }
  function Oo(n, t, e, i) {
    var s, r;
    if (typeof n.type == "function") {
      for (s = n.__k, r = 0; s && r < s.length; r++)
        s[r] && (s[r].__ = n, t = Oo(s[r], t, e, i));
      return t;
    }
    n.__e != t && (i && (t && n.type && !t.parentNode && (t = Je(n)), e.insertBefore(n.__e, t || null)), t = n.__e);
    do
      t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function wn(n, t) {
    return t = t || [], n == null || typeof n == "boolean" || (Mi(n) ? n.some(function(e) {
      wn(e, t);
    }) : t.push(n)), t;
  }
  function tc(n, t, e, i) {
    var s, r, o, a = n.key, l = n.type, h = t[e], c = h != null && (2 & h.__u) == 0;
    if (h === null && n.key == null || c && a == h.key && l == h.type)
      return e;
    if (i > (c ? 1 : 0)) {
      for (s = e - 1, r = e + 1; s >= 0 || r < t.length; )
        if ((h = t[o = s >= 0 ? s-- : r++]) != null && !(2 & h.__u) && a == h.key && l == h.type)
          return o;
    }
    return -1;
  }
  function Fo(n, t, e) {
    t[0] == "-" ? n.setProperty(t, e ?? "") : n[t] = e == null ? "" : typeof e != "number" || Jh.test(t) ? e : e + "px";
  }
  function Cn(n, t, e, i, s) {
    var r, o;
    t:
      if (t == "style")
        if (typeof e == "string")
          n.style.cssText = e;
        else {
          if (typeof i == "string" && (n.style.cssText = i = ""), i)
            for (t in i)
              e && t in e || Fo(n.style, t, "");
          if (e)
            for (t in e)
              i && e[t] == i[t] || Fo(n.style, t, e[t]);
        }
      else if (t[0] == "o" && t[1] == "n")
        r = t != (t = t.replace(Ao, "$1")), o = t.toLowerCase(), t = o in n || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? i ? e.u = i.u : (e.u = Ss, n.addEventListener(t, r ? Ls : Is, r)) : n.removeEventListener(t, r ? Ls : Is, r);
      else {
        if (s == "http://www.w3.org/2000/svg")
          t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in n)
          try {
            n[t] = e ?? "";
            break t;
          } catch {
          }
        typeof e == "function" || (e == null || e === !1 && t[4] != "-" ? n.removeAttribute(t) : n.setAttribute(t, t == "popover" && e == 1 ? "" : e));
      }
  }
  function ko(n) {
    return function(t) {
      if (this.l) {
        var e = this.l[t.type + n];
        if (t.t == null)
          t.t = Ss++;
        else if (t.t < e.u)
          return;
        return e(k.event ? k.event(t) : t);
      }
    };
  }
  function Ms(n, t, e, i, s, r, o, a, l, h) {
    var c, u, d, f, g, p, _, m, y, w, E, x, C, T, R, S, L, A = t.type;
    if (t.constructor != null)
      return null;
    128 & e.__u && (l = !!(32 & e.__u), r = [a = t.__e = e.__e]), (c = k.__b) && c(t);
    t:
      if (typeof A == "function")
        try {
          if (m = t.props, y = "prototype" in A && A.prototype.render, w = (c = A.contextType) && i[c.__c], E = c ? w ? w.props.value : c.__ : i, e.__c ? _ = (u = t.__c = e.__c).__ = u.__E : (y ? t.__c = u = new A(m, E) : (t.__c = u = new ne(m, E), u.constructor = A, u.render = ic), w && w.sub(u), u.props = m, u.state || (u.state = {}), u.context = E, u.__n = i, d = u.__d = !0, u.__h = [], u._sb = []), y && u.__s == null && (u.__s = u.state), y && A.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = ie({}, u.__s)), ie(u.__s, A.getDerivedStateFromProps(m, u.__s))), f = u.props, g = u.state, u.__v = t, d)
            y && A.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), y && u.componentDidMount != null && u.__h.push(u.componentDidMount);
          else {
            if (y && A.getDerivedStateFromProps == null && m !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(m, E), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(m, u.__s, E) === !1 || t.__v == e.__v) {
              for (t.__v != e.__v && (u.props = m, u.state = u.__s, u.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.some(function(M) {
                M && (M.__ = t);
              }), x = 0; x < u._sb.length; x++)
                u.__h.push(u._sb[x]);
              u._sb = [], u.__h.length && o.push(u);
              break t;
            }
            u.componentWillUpdate != null && u.componentWillUpdate(m, u.__s, E), y && u.componentDidUpdate != null && u.__h.push(function() {
              u.componentDidUpdate(f, g, p);
            });
          }
          if (u.context = E, u.props = m, u.__P = n, u.__e = !1, C = k.__r, T = 0, y) {
            for (u.state = u.__s, u.__d = !1, C && C(t), c = u.render(u.props, u.state, u.context), R = 0; R < u._sb.length; R++)
              u.__h.push(u._sb[R]);
            u._sb = [];
          } else
            do
              u.__d = !1, C && C(t), c = u.render(u.props, u.state, u.context), u.state = u.__s;
            while (u.__d && ++T < 25);
          u.state = u.__s, u.getChildContext != null && (i = ie(ie({}, i), u.getChildContext())), y && !d && u.getSnapshotBeforeUpdate != null && (p = u.getSnapshotBeforeUpdate(f, g)), S = c, c != null && c.type === qe && c.key == null && (S = Go(c.props.children)), a = Do(n, Mi(S) ? S : [S], t, e, i, s, r, o, a, l, h), u.base = t.__e, t.__u &= -161, u.__h.length && o.push(u), _ && (u.__E = u.__ = null);
        } catch (M) {
          if (t.__v = null, l || r != null)
            if (M.then) {
              for (t.__u |= l ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; )
                a = a.nextSibling;
              r[r.indexOf(a)] = null, t.__e = a;
            } else {
              for (L = r.length; L--; )
                As(r[L]);
              Ps(t);
            }
          else
            t.__e = e.__e, t.__k = e.__k, M.then || Ps(t);
          k.__e(M, t, e);
        }
      else
        r == null && t.__v == e.__v ? (t.__k = e.__k, t.__e = e.__e) : a = t.__e = ec(e.__e, t, e, i, s, r, o, l, h);
    return (c = k.diffed) && c(t), 128 & t.__u ? void 0 : a;
  }
  function Ps(n) {
    n && n.__c && (n.__c.__e = !0), n && n.__k && n.__k.forEach(Ps);
  }
  function No(n, t, e) {
    for (var i = 0; i < e.length; i++)
      Ds(e[i], e[++i], e[++i]);
    k.__c && k.__c(t, n), n.some(function(s) {
      try {
        n = s.__h, s.__h = [], n.some(function(r) {
          r.call(s);
        });
      } catch (r) {
        k.__e(r, s.__v);
      }
    });
  }
  function Go(n) {
    return typeof n != "object" || n == null || n.__b && n.__b > 0 ? n : Mi(n) ? n.map(Go) : ie({}, n);
  }
  function ec(n, t, e, i, s, r, o, a, l) {
    var h, c, u, d, f, g, p, _ = e.props, m = t.props, y = t.type;
    if (y == "svg" ? s = "http://www.w3.org/2000/svg" : y == "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"), r != null) {
      for (h = 0; h < r.length; h++)
        if ((f = r[h]) && "setAttribute" in f == !!y && (y ? f.localName == y : f.nodeType == 3)) {
          n = f, r[h] = null;
          break;
        }
    }
    if (n == null) {
      if (y == null)
        return document.createTextNode(m);
      n = document.createElementNS(s, y, m.is && m), a && (k.__m && k.__m(t, r), a = !1), r = null;
    }
    if (y == null)
      _ === m || a && n.data == m || (n.data = m);
    else {
      if (r = r && $t.call(n.childNodes), _ = e.props || bi, !a && r != null)
        for (_ = {}, h = 0; h < n.attributes.length; h++)
          _[(f = n.attributes[h]).name] = f.value;
      for (h in _)
        if (f = _[h], h != "children") {
          if (h == "dangerouslySetInnerHTML")
            u = f;
          else if (!(h in m)) {
            if (h == "value" && "defaultValue" in m || h == "checked" && "defaultChecked" in m)
              continue;
            Cn(n, h, null, f, s);
          }
        }
      for (h in m)
        f = m[h], h == "children" ? d = f : h == "dangerouslySetInnerHTML" ? c = f : h == "value" ? g = f : h == "checked" ? p = f : a && typeof f != "function" || _[h] === f || Cn(n, h, f, _[h], s);
      if (c)
        a || u && (c.__html == u.__html || c.__html == n.innerHTML) || (n.innerHTML = c.__html), t.__k = [];
      else if (u && (n.innerHTML = ""), Do(t.type == "template" ? n.content : n, Mi(d) ? d : [d], t, e, i, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, r, o, r ? r[0] : e.__k && Je(e, 0), a, l), r != null)
        for (h = r.length; h--; )
          As(r[h]);
      a || (h = "value", y == "progress" && g == null ? n.removeAttribute("value") : g != null && (g !== n[h] || y == "progress" && !g || y == "option" && g != _[h]) && Cn(n, h, g, _[h], s), h = "checked", p != null && p != n[h] && Cn(n, h, p, _[h], s));
    }
    return n;
  }
  function Ds(n, t, e) {
    try {
      if (typeof n == "function") {
        var i = typeof n.__u == "function";
        i && n.__u(), i && t == null || (n.__u = n(t));
      } else
        n.current = t;
    } catch (s) {
      k.__e(s, e);
    }
  }
  function zo(n, t, e) {
    var i, s;
    if (k.unmount && k.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || Ds(i, null, t)), (i = n.__c) != null) {
      if (i.componentWillUnmount)
        try {
          i.componentWillUnmount();
        } catch (r) {
          k.__e(r, t);
        }
      i.base = i.__P = null;
    }
    if (i = n.__k)
      for (s = 0; s < i.length; s++)
        i[s] && zo(i[s], t, e || typeof n.type != "function");
    e || As(n.__e), n.__c = n.__ = n.__e = void 0;
  }
  function ic(n, t, e) {
    return this.constructor(n, e);
  }
  function Os(n, t, e) {
    var i, s, r, o;
    t == document && (t = document.documentElement), k.__ && k.__(n, t), s = (i = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], Ms(t, n = (!i && e || t).__k = bs(qe, null, [n]), s || bi, bi, t.namespaceURI, !i && e ? [e] : s ? null : t.firstChild ? $t.call(t.childNodes) : null, r, !i && e ? e : s ? s.__e : t.firstChild, i, o), No(r, n, o);
  }
  $t = bo.slice, k = { __e: function(n, t, e, i) {
    for (var s, r, o; t = t.__; )
      if ((s = t.__c) && !s.__)
        try {
          if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(n)), o = s.__d), s.componentDidCatch != null && (s.componentDidCatch(n, i || {}), o = s.__d), o)
            return s.__E = s;
        } catch (a) {
          n = a;
        }
    throw n;
  } }, pe = 0, ne.prototype.setState = function(n, t) {
    var e;
    e = this.__s != null && this.__s != this.state ? this.__s : this.__s = ie({}, this.state), typeof n == "function" && (n = n(ie({}, e), this.props)), n && ie(e, n), n != null && this.__v && (t && this._sb.push(t), Po(this));
  }, ne.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), Po(this));
  }, ne.prototype.render = qe, Pe = [], Io = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Lo = function(n, t) {
    return n.__v.__b - t.__v.__b;
  }, xn.__r = 0, Ao = /(PointerCapture)$|Capture$/i, Ss = 0, Is = ko(!1), Ls = ko(!0);
  var nc = 0;
  function et(n, t, e, i, s, r) {
    t || (t = {});
    var o, a, l = t;
    if ("ref" in l)
      for (a in l = {}, t)
        a == "ref" ? o = t[a] : l[a] = t[a];
    var h = { type: n, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --nc, __i: -1, __u: 0, __source: s, __self: r };
    if (typeof n == "function" && (o = n.defaultProps))
      for (a in o)
        l[a] === void 0 && (l[a] = o[a]);
    return k.vnode && k.vnode(h), h;
  }
  var Pi, ot, Fs, Wo, vn = 0, Xo = [], lt = k, Yo = lt.__b, Bo = lt.__r, Uo = lt.diffed, Ko = lt.__c, Zo = lt.unmount, $o = lt.__;
  function ks(n, t) {
    lt.__h && lt.__h(ot, n, vn || t), vn = 0;
    var e = ot.__H || (ot.__H = { __: [], __h: [] });
    return n >= e.__.length && e.__.push({}), e.__[n];
  }
  function Rn(n) {
    return vn = 1, sc(Ho, n);
  }
  function sc(n, t, e) {
    var i = ks(Pi++, 2);
    if (i.t = n, !i.__c && (i.__ = [e ? e(t) : Ho(void 0, t), function(a) {
      var l = i.__N ? i.__N[0] : i.__[0], h = i.t(l, a);
      l !== h && (i.__N = [h, i.__[1]], i.__c.setState({}));
    }], i.__c = ot, !ot.__f)) {
      var s = function(a, l, h) {
        if (!i.__c.__H)
          return !0;
        var c = i.__c.__H.__.filter(function(d) {
          return !!d.__c;
        });
        if (c.every(function(d) {
          return !d.__N;
        }))
          return !r || r.call(this, a, l, h);
        var u = i.__c.props !== a;
        return c.forEach(function(d) {
          if (d.__N) {
            var f = d.__[0];
            d.__ = d.__N, d.__N = void 0, f !== d.__[0] && (u = !0);
          }
        }), r && r.call(this, a, l, h) || u;
      };
      ot.__f = !0;
      var r = ot.shouldComponentUpdate, o = ot.componentWillUpdate;
      ot.componentWillUpdate = function(a, l, h) {
        if (this.__e) {
          var c = r;
          r = void 0, s(a, l, h), r = c;
        }
        o && o.call(this, a, l, h);
      }, ot.shouldComponentUpdate = s;
    }
    return i.__N || i.__;
  }
  function rc(n, t) {
    var e = ks(Pi++, 3);
    !lt.__s && jo(e.__H, t) && (e.__ = n, e.u = t, ot.__H.__h.push(e));
  }
  function Tn(n) {
    return vn = 5, oc(function() {
      return { current: n };
    }, []);
  }
  function oc(n, t) {
    var e = ks(Pi++, 7);
    return jo(e.__H, t) && (e.__ = n(), e.__H = t, e.__h = n), e.__;
  }
  function ac() {
    for (var n; n = Xo.shift(); )
      if (n.__P && n.__H)
        try {
          n.__H.__h.forEach(Sn), n.__H.__h.forEach(Ns), n.__H.__h = [];
        } catch (t) {
          n.__H.__h = [], lt.__e(t, n.__v);
        }
  }
  lt.__b = function(n) {
    ot = null, Yo && Yo(n);
  }, lt.__ = function(n, t) {
    n && t.__k && t.__k.__m && (n.__m = t.__k.__m), $o && $o(n, t);
  }, lt.__r = function(n) {
    Bo && Bo(n), Pi = 0;
    var t = (ot = n.__c).__H;
    t && (Fs === ot ? (t.__h = [], ot.__h = [], t.__.forEach(function(e) {
      e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
    })) : (t.__h.forEach(Sn), t.__h.forEach(Ns), t.__h = [], Pi = 0)), Fs = ot;
  }, lt.diffed = function(n) {
    Uo && Uo(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && (Xo.push(t) !== 1 && Wo === lt.requestAnimationFrame || ((Wo = lt.requestAnimationFrame) || lc)(ac)), t.__H.__.forEach(function(e) {
      e.u && (e.__H = e.u), e.u = void 0;
    })), Fs = ot = null;
  }, lt.__c = function(n, t) {
    t.some(function(e) {
      try {
        e.__h.forEach(Sn), e.__h = e.__h.filter(function(i) {
          return !i.__ || Ns(i);
        });
      } catch (i) {
        t.some(function(s) {
          s.__h && (s.__h = []);
        }), t = [], lt.__e(i, e.__v);
      }
    }), Ko && Ko(n, t);
  }, lt.unmount = function(n) {
    Zo && Zo(n);
    var t, e = n.__c;
    e && e.__H && (e.__H.__.forEach(function(i) {
      try {
        Sn(i);
      } catch (s) {
        t = s;
      }
    }), e.__H = void 0, t && lt.__e(t, e.__v));
  };
  var Vo = typeof requestAnimationFrame == "function";
  function lc(n) {
    var t, e = function() {
      clearTimeout(i), Vo && cancelAnimationFrame(t), setTimeout(n);
    }, i = setTimeout(e, 35);
    Vo && (t = requestAnimationFrame(e));
  }
  function Sn(n) {
    var t = ot, e = n.__c;
    typeof e == "function" && (n.__c = void 0, e()), ot = t;
  }
  function Ns(n) {
    var t = ot;
    n.__c = n.__(), ot = t;
  }
  function jo(n, t) {
    return !n || n.length !== t.length || t.some(function(e, i) {
      return e !== n[i];
    });
  }
  function Ho(n, t) {
    return typeof t == "function" ? t(n) : t;
  }
  function hc(n, t) {
    for (var e in t)
      n[e] = t[e];
    return n;
  }
  function qo(n, t) {
    for (var e in n)
      if (e !== "__source" && !(e in t))
        return !0;
    for (var i in t)
      if (i !== "__source" && n[i] !== t[i])
        return !0;
    return !1;
  }
  function Jo(n, t) {
    this.props = n, this.context = t;
  }
  (Jo.prototype = new ne()).isPureReactComponent = !0, Jo.prototype.shouldComponentUpdate = function(n, t) {
    return qo(this.props, n) || qo(this.state, t);
  };
  var Qo = k.__b;
  k.__b = function(n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), Qo && Qo(n);
  };
  var cc = k.__e;
  k.__e = function(n, t, e, i) {
    if (n.then) {
      for (var s, r = t; r = r.__; )
        if ((s = r.__c) && s.__c)
          return t.__e == null && (t.__e = e.__e, t.__k = e.__k), s.__c(n, t);
    }
    cc(n, t, e, i);
  };
  var ta = k.unmount;
  function ea(n, t, e) {
    return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(i) {
      typeof i.__c == "function" && i.__c();
    }), n.__c.__H = null), (n = hc({}, n)).__c != null && (n.__c.__P === e && (n.__c.__P = t), n.__c.__e = !0, n.__c = null), n.__k = n.__k && n.__k.map(function(i) {
      return ea(i, t, e);
    })), n;
  }
  function ia(n, t, e) {
    return n && e && (n.__v = null, n.__k = n.__k && n.__k.map(function(i) {
      return ia(i, t, e);
    }), n.__c && n.__c.__P === t && (n.__e && e.appendChild(n.__e), n.__c.__e = !0, n.__c.__P = e)), n;
  }
  function Gs() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function na(n) {
    var t = n.__.__c;
    return t && t.__a && t.__a(n);
  }
  function In() {
    this.i = null, this.l = null;
  }
  k.unmount = function(n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), ta && ta(n);
  }, (Gs.prototype = new ne()).__c = function(n, t) {
    var e = t.__c, i = this;
    i.o == null && (i.o = []), i.o.push(e);
    var s = na(i.__v), r = !1, o = function() {
      r || (r = !0, e.__R = null, s ? s(a) : a());
    };
    e.__R = o;
    var a = function() {
      if (!--i.__u) {
        if (i.state.__a) {
          var l = i.state.__a;
          i.__v.__k[0] = ia(l, l.__c.__P, l.__c.__O);
        }
        var h;
        for (i.setState({ __a: i.__b = null }); h = i.o.pop(); )
          h.forceUpdate();
      }
    };
    i.__u++ || 32 & t.__u || i.setState({ __a: i.__b = i.__v.__k[0] }), n.then(o, o);
  }, Gs.prototype.componentWillUnmount = function() {
    this.o = [];
  }, Gs.prototype.render = function(n, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var e = document.createElement("div"), i = this.__v.__k[0].__c;
        this.__v.__k[0] = ea(this.__b, e, i.__O = i.__P);
      }
      this.__b = null;
    }
    var s = t.__a && bs(qe, null, n.fallback);
    return s && (s.__u &= -33), [bs(qe, null, t.__a ? null : n.children), s];
  };
  var sa = function(n, t, e) {
    if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && (n.props.revealOrder[0] !== "t" || !n.l.size))
      for (e = n.i; e; ) {
        for (; e.length > 3; )
          e.pop()();
        if (e[1] < e[0])
          break;
        n.i = e = e[2];
      }
  };
  (In.prototype = new ne()).__a = function(n) {
    var t = this, e = na(t.__v), i = t.l.get(n);
    return i[0]++, function(s) {
      var r = function() {
        t.props.revealOrder ? (i.push(s), sa(t, n, i)) : s();
      };
      e ? e(r) : r();
    };
  }, In.prototype.render = function(n) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t = wn(n.children);
    n.revealOrder && n.revealOrder[0] === "b" && t.reverse();
    for (var e = t.length; e--; )
      this.l.set(t[e], this.i = [1, 0, this.i]);
    return n.children;
  }, In.prototype.componentDidUpdate = In.prototype.componentDidMount = function() {
    var n = this;
    this.l.forEach(function(t, e) {
      sa(n, e, t);
    });
  };
  var uc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, dc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, fc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, gc = /[A-Z0-9]/g, _c = typeof document < "u", mc = function(n) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(n);
  };
  function ra(n, t, e) {
    return t.__k == null && (t.textContent = ""), Os(n, t), typeof e == "function" && e(), n ? n.__c : null;
  }
  ne.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n) {
    Object.defineProperty(ne.prototype, n, { configurable: !0, get: function() {
      return this["UNSAFE_" + n];
    }, set: function(t) {
      Object.defineProperty(this, n, { configurable: !0, writable: !0, value: t });
    } });
  });
  var oa = k.event;
  function pc() {
  }
  function yc() {
    return this.cancelBubble;
  }
  function Ec() {
    return this.defaultPrevented;
  }
  k.event = function(n) {
    return oa && (n = oa(n)), n.persist = pc, n.isPropagationStopped = yc, n.isDefaultPrevented = Ec, n.nativeEvent = n;
  };
  var xc = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, aa = k.vnode;
  k.vnode = function(n) {
    typeof n.type == "string" && function(t) {
      var e = t.props, i = t.type, s = {}, r = i.indexOf("-") === -1;
      for (var o in e) {
        var a = e[o];
        if (!(o === "value" && "defaultValue" in e && a == null || _c && o === "children" && i === "noscript" || o === "class" || o === "className")) {
          var l = o.toLowerCase();
          o === "defaultValue" && "value" in e && e.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : l === "translate" && a === "no" ? a = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? o = "ondblclick" : l !== "onchange" || i !== "input" && i !== "textarea" || mc(e.type) ? l === "onfocus" ? o = "onfocusin" : l === "onblur" ? o = "onfocusout" : fc.test(o) && (o = l) : l = o = "oninput" : r && dc.test(o) ? o = o.replace(gc, "-$&").toLowerCase() : a === null && (a = void 0), l === "oninput" && s[o = l] && (o = "oninputCapture"), s[o] = a;
        }
      }
      i == "select" && s.multiple && Array.isArray(s.value) && (s.value = wn(e.children).forEach(function(h) {
        h.props.selected = s.value.indexOf(h.props.value) != -1;
      })), i == "select" && s.defaultValue != null && (s.value = wn(e.children).forEach(function(h) {
        h.props.selected = s.multiple ? s.defaultValue.indexOf(h.props.value) != -1 : s.defaultValue == h.props.value;
      })), e.class && !e.className ? (s.class = e.class, Object.defineProperty(s, "className", xc)) : (e.className && !e.class || e.class && e.className) && (s.class = s.className = e.className), t.props = s;
    }(n), n.$$typeof = uc, aa && aa(n);
  };
  var la = k.__r;
  k.__r = function(n) {
    la && la(n), n.__c;
  };
  var ha = k.diffed;
  k.diffed = function(n) {
    ha && ha(n);
    var t = n.props, e = n.__e;
    e != null && n.type === "textarea" && "value" in t && t.value !== e.value && (e.value = t.value == null ? "" : t.value);
  };
  const qm = "", vt = {
    /**
     * Triggered when an item is added to the collection.
     * @event module:ol/Collection.CollectionEvent#add
     * @api
     */
    ADD: "add",
    /**
     * Triggered when an item is removed from the collection.
     * @event module:ol/Collection.CollectionEvent#remove
     * @api
     */
    REMOVE: "remove"
  }, Qe = {
    /**
     * Triggered when a property is changed.
     * @event module:ol/Object.ObjectEvent#propertychange
     * @api
     */
    PROPERTYCHANGE: "propertychange"
  }, Y = {
    /**
     * Generic change event. Triggered when the revision counter is increased.
     * @event module:ol/events/Event~BaseEvent#change
     * @api
     */
    CHANGE: "change",
    /**
     * Generic error event. Triggered when an error occurs.
     * @event module:ol/events/Event~BaseEvent#error
     * @api
     */
    ERROR: "error",
    BLUR: "blur",
    CLEAR: "clear",
    CONTEXTMENU: "contextmenu",
    CLICK: "click",
    DBLCLICK: "dblclick",
    DRAGENTER: "dragenter",
    DRAGOVER: "dragover",
    DROP: "drop",
    FOCUS: "focus",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    LOAD: "load",
    RESIZE: "resize",
    TOUCHMOVE: "touchmove",
    WHEEL: "wheel"
  };
  class wc {
    constructor() {
      this.disposed = !1;
    }
    /**
     * Clean up.
     */
    dispose() {
      this.disposed || (this.disposed = !0, this.disposeInternal());
    }
    /**
     * Extension point for disposable objects.
     * @protected
     */
    disposeInternal() {
    }
  }
  const Ln = wc;
  function Cc(n, t, e) {
    let i, s;
    e = e || se;
    let r = 0, o = n.length, a = !1;
    for (; r < o; )
      i = r + (o - r >> 1), s = +e(n[i], t), s < 0 ? r = i + 1 : (o = i, a = !s);
    return a ? r : ~r;
  }
  function se(n, t) {
    return n > t ? 1 : n < t ? -1 : 0;
  }
  function vc(n, t) {
    return n < t ? 1 : n > t ? -1 : 0;
  }
  function zs(n, t, e) {
    if (n[0] <= t)
      return 0;
    const i = n.length;
    if (t <= n[i - 1])
      return i - 1;
    if (typeof e == "function") {
      for (let s = 1; s < i; ++s) {
        const r = n[s];
        if (r === t)
          return s;
        if (r < t)
          return e(t, n[s - 1], r) > 0 ? s - 1 : s;
      }
      return i - 1;
    }
    if (e > 0) {
      for (let s = 1; s < i; ++s)
        if (n[s] < t)
          return s - 1;
      return i - 1;
    }
    if (e < 0) {
      for (let s = 1; s < i; ++s)
        if (n[s] <= t)
          return s;
      return i - 1;
    }
    for (let s = 1; s < i; ++s) {
      if (n[s] == t)
        return s;
      if (n[s] < t)
        return n[s - 1] - t < t - n[s] ? s - 1 : s;
    }
    return i - 1;
  }
  function Rc(n, t, e) {
    for (; t < e; ) {
      const i = n[t];
      n[t] = n[e], n[e] = i, ++t, --e;
    }
  }
  function Ws(n, t) {
    const e = Array.isArray(t) ? t : [t], i = e.length;
    for (let s = 0; s < i; s++)
      n[n.length] = e[s];
  }
  function ye(n, t) {
    const e = n.length;
    if (e !== t.length)
      return !1;
    for (let i = 0; i < e; i++)
      if (n[i] !== t[i])
        return !1;
    return !0;
  }
  function Tc(n, t, e) {
    const i = t || se;
    return n.every(function(s, r) {
      if (r === 0)
        return !0;
      const o = i(n[r - 1], s);
      return !(o > 0 || e && o === 0);
    });
  }
  function Di() {
    return !0;
  }
  function An() {
    return !1;
  }
  function Oi() {
  }
  function ca(n) {
    let t, e, i;
    return function() {
      const s = Array.prototype.slice.call(arguments);
      return (!e || this !== i || !ye(s, e)) && (i = this, e = s, t = n.apply(this, arguments)), t;
    };
  }
  function Sc(n) {
    function t() {
      let e;
      try {
        e = n();
      } catch (i) {
        return Promise.reject(i);
      }
      return e instanceof Promise ? e : Promise.resolve(e);
    }
    return t();
  }
  function Fi(n) {
    for (const t in n)
      delete n[t];
  }
  function ti(n) {
    let t;
    for (t in n)
      return !1;
    return !t;
  }
  class Ic {
    /**
     * @param {string} type Type.
     */
    constructor(t) {
      this.propagationStopped, this.defaultPrevented, this.type = t, this.target = null;
    }
    /**
     * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
     * will be fired.
     * @api
     */
    preventDefault() {
      this.defaultPrevented = !0;
    }
    /**
     * Stop event propagation.
     * @api
     */
    stopPropagation() {
      this.propagationStopped = !0;
    }
  }
  const re = Ic;
  class Lc extends Ln {
    /**
     * @param {*} [target] Default event target for dispatched events.
     */
    constructor(t) {
      super(), this.eventTarget_ = t, this.pendingRemovals_ = null, this.dispatching_ = null, this.listeners_ = null;
    }
    /**
     * @param {string} type Type.
     * @param {import("../events.js").Listener} listener Listener.
     */
    addEventListener(t, e) {
      if (!t || !e)
        return;
      const i = this.listeners_ || (this.listeners_ = {}), s = i[t] || (i[t] = []);
      s.includes(e) || s.push(e);
    }
    /**
     * Dispatches an event and calls all listeners listening for events
     * of this type. The event parameter can either be a string or an
     * Object with a `type` property.
     *
     * @param {import("./Event.js").default|string} event Event object.
     * @return {boolean|undefined} `false` if anyone called preventDefault on the
     *     event object or if any of the listeners returned false.
     * @api
     */
    dispatchEvent(t) {
      const e = typeof t == "string", i = e ? t : t.type, s = this.listeners_ && this.listeners_[i];
      if (!s)
        return;
      const r = e ? new re(t) : (
        /** @type {Event} */
        t
      );
      r.target || (r.target = this.eventTarget_ || this);
      const o = this.dispatching_ || (this.dispatching_ = {}), a = this.pendingRemovals_ || (this.pendingRemovals_ = {});
      i in o || (o[i] = 0, a[i] = 0), ++o[i];
      let l;
      for (let h = 0, c = s.length; h < c; ++h)
        if ("handleEvent" in s[h] ? l = /** @type {import("../events.js").ListenerObject} */
        s[h].handleEvent(r) : l = /** @type {import("../events.js").ListenerFunction} */
        s[h].call(this, r), l === !1 || r.propagationStopped) {
          l = !1;
          break;
        }
      if (--o[i] === 0) {
        let h = a[i];
        for (delete a[i]; h--; )
          this.removeEventListener(i, Oi);
        delete o[i];
      }
      return l;
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.listeners_ && Fi(this.listeners_);
    }
    /**
     * Get the listeners for a specified event type. Listeners are returned in the
     * order that they will be called in.
     *
     * @param {string} type Type.
     * @return {Array<import("../events.js").Listener>|undefined} Listeners.
     */
    getListeners(t) {
      return this.listeners_ && this.listeners_[t] || void 0;
    }
    /**
     * @param {string} [type] Type. If not provided,
     *     `true` will be returned if this event target has any listeners.
     * @return {boolean} Has listeners.
     */
    hasListener(t) {
      return this.listeners_ ? t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0 : !1;
    }
    /**
     * @param {string} type Type.
     * @param {import("../events.js").Listener} listener Listener.
     */
    removeEventListener(t, e) {
      if (!this.listeners_)
        return;
      const i = this.listeners_[t];
      if (!i)
        return;
      const s = i.indexOf(e);
      s !== -1 && (this.pendingRemovals_ && t in this.pendingRemovals_ ? (i[s] = Oi, ++this.pendingRemovals_[t]) : (i.splice(s, 1), i.length === 0 && delete this.listeners_[t]));
    }
  }
  const bn = Lc;
  function $(n, t, e, i, s) {
    if (s) {
      const o = e;
      e = function(a) {
        return n.removeEventListener(t, e), o.call(i ?? this, a);
      };
    } else
      i && i !== n && (e = e.bind(i));
    const r = {
      target: n,
      type: t,
      listener: e
    };
    return n.addEventListener(t, e), r;
  }
  function Mn(n, t, e, i) {
    return $(n, t, e, i, !0);
  }
  function it(n) {
    n && n.target && (n.target.removeEventListener(n.type, n.listener), Fi(n));
  }
  class Pn extends bn {
    constructor() {
      super(), this.on = /** @type {ObservableOnSignature<import("./events").EventsKey>} */
      this.onInternal, this.once = /** @type {ObservableOnSignature<import("./events").EventsKey>} */
      this.onceInternal, this.un = /** @type {ObservableOnSignature<void>} */
      this.unInternal, this.revision_ = 0;
    }
    /**
     * Increases the revision counter and dispatches a 'change' event.
     * @api
     */
    changed() {
      ++this.revision_, this.dispatchEvent(Y.CHANGE);
    }
    /**
     * Get the version number for this object.  Each time the object is modified,
     * its version number will be incremented.
     * @return {number} Revision.
     * @api
     */
    getRevision() {
      return this.revision_;
    }
    /**
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
     * @protected
     */
    onInternal(t, e) {
      if (Array.isArray(t)) {
        const i = t.length, s = new Array(i);
        for (let r = 0; r < i; ++r)
          s[r] = $(this, t[r], e);
        return s;
      }
      return $(
        this,
        /** @type {string} */
        t,
        e
      );
    }
    /**
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
     * @protected
     */
    onceInternal(t, e) {
      let i;
      if (Array.isArray(t)) {
        const s = t.length;
        i = new Array(s);
        for (let r = 0; r < s; ++r)
          i[r] = Mn(this, t[r], e);
      } else
        i = Mn(
          this,
          /** @type {string} */
          t,
          e
        );
      return e.ol_key = i, i;
    }
    /**
     * Unlisten for a certain type of event.
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
     * @protected
     */
    unInternal(t, e) {
      const i = (
        /** @type {Object} */
        e.ol_key
      );
      if (i)
        Ac(i);
      else if (Array.isArray(t))
        for (let s = 0, r = t.length; s < r; ++s)
          this.removeEventListener(t[s], e);
      else
        this.removeEventListener(t, e);
    }
  }
  Pn.prototype.on, Pn.prototype.once, Pn.prototype.un;
  function Ac(n) {
    if (Array.isArray(n))
      for (let t = 0, e = n.length; t < e; ++t)
        it(n[t]);
    else
      it(
        /** @type {import("./events.js").EventsKey} */
        n
      );
  }
  const ua = Pn;
  function V() {
    throw new Error("Unimplemented abstract method.");
  }
  let bc = 0;
  function j(n) {
    return n.ol_uid || (n.ol_uid = String(++bc));
  }
  class da extends re {
    /**
     * @param {string} type The event type.
     * @param {string} key The property name.
     * @param {*} oldValue The old value for `key`.
     */
    constructor(t, e, i) {
      super(t), this.key = e, this.oldValue = i;
    }
  }
  class Mc extends ua {
    /**
     * @param {Object<string, *>} [values] An object with key-value pairs.
     */
    constructor(t) {
      super(), this.on, this.once, this.un, j(this), this.values_ = null, t !== void 0 && this.setProperties(t);
    }
    /**
     * Gets a value.
     * @param {string} key Key name.
     * @return {*} Value.
     * @api
     */
    get(t) {
      let e;
      return this.values_ && this.values_.hasOwnProperty(t) && (e = this.values_[t]), e;
    }
    /**
     * Get a list of object property names.
     * @return {Array<string>} List of property names.
     * @api
     */
    getKeys() {
      return this.values_ && Object.keys(this.values_) || [];
    }
    /**
     * Get an object of all property names and values.
     * @return {Object<string, *>} Object.
     * @api
     */
    getProperties() {
      return this.values_ && Object.assign({}, this.values_) || {};
    }
    /**
     * Get an object of all property names and values.
     * @return {Object<string, *>?} Object.
     */
    getPropertiesInternal() {
      return this.values_;
    }
    /**
     * @return {boolean} The object has properties.
     */
    hasProperties() {
      return !!this.values_;
    }
    /**
     * @param {string} key Key name.
     * @param {*} oldValue Old value.
     */
    notify(t, e) {
      let i;
      i = `change:${t}`, this.hasListener(i) && this.dispatchEvent(new da(i, t, e)), i = Qe.PROPERTYCHANGE, this.hasListener(i) && this.dispatchEvent(new da(i, t, e));
    }
    /**
     * @param {string} key Key name.
     * @param {import("./events.js").Listener} listener Listener.
     */
    addChangeListener(t, e) {
      this.addEventListener(`change:${t}`, e);
    }
    /**
     * @param {string} key Key name.
     * @param {import("./events.js").Listener} listener Listener.
     */
    removeChangeListener(t, e) {
      this.removeEventListener(`change:${t}`, e);
    }
    /**
     * Sets a value.
     * @param {string} key Key name.
     * @param {*} value Value.
     * @param {boolean} [silent] Update without triggering an event.
     * @api
     */
    set(t, e, i) {
      const s = this.values_ || (this.values_ = {});
      if (i)
        s[t] = e;
      else {
        const r = s[t];
        s[t] = e, r !== e && this.notify(t, r);
      }
    }
    /**
     * Sets a collection of key-value pairs.  Note that this changes any existing
     * properties and adds new ones (it does not remove any existing properties).
     * @param {Object<string, *>} values Values.
     * @param {boolean} [silent] Update without triggering an event.
     * @api
     */
    setProperties(t, e) {
      for (const i in t)
        this.set(i, t[i], e);
    }
    /**
     * Apply any properties from another object without triggering events.
     * @param {BaseObject} source The source object.
     * @protected
     */
    applyProperties(t) {
      t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_);
    }
    /**
     * Unsets a property.
     * @param {string} key Key name.
     * @param {boolean} [silent] Unset without triggering an event.
     * @api
     */
    unset(t, e) {
      if (this.values_ && t in this.values_) {
        const i = this.values_[t];
        delete this.values_[t], ti(this.values_) && (this.values_ = null), e || this.notify(t, i);
      }
    }
  }
  const Vt = Mc, fa = {
    LENGTH: "length"
  };
  class Dn extends re {
    /**
     * @param {import("./CollectionEventType.js").default} type Type.
     * @param {T} element Element.
     * @param {number} index The index of the added or removed element.
     */
    constructor(t, e, i) {
      super(t), this.element = e, this.index = i;
    }
  }
  class Pc extends Vt {
    /**
     * @param {Array<T>} [array] Array.
     * @param {Options} [options] Collection options.
     */
    constructor(t, e) {
      if (super(), this.on, this.once, this.un, e = e || {}, this.unique_ = !!e.unique, this.array_ = t || [], this.unique_)
        for (let i = 0, s = this.array_.length; i < s; ++i)
          this.assertUnique_(this.array_[i], i);
      this.updateLength_();
    }
    /**
     * Remove all elements from the collection.
     * @api
     */
    clear() {
      for (; this.getLength() > 0; )
        this.pop();
    }
    /**
     * Add elements to the collection.  This pushes each item in the provided array
     * to the end of the collection.
     * @param {!Array<T>} arr Array.
     * @return {Collection<T>} This collection.
     * @api
     */
    extend(t) {
      for (let e = 0, i = t.length; e < i; ++e)
        this.push(t[e]);
      return this;
    }
    /**
     * Iterate over each element, calling the provided callback.
     * @param {function(T, number, Array<T>): *} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array). The return value is ignored.
     * @api
     */
    forEach(t) {
      const e = this.array_;
      for (let i = 0, s = e.length; i < s; ++i)
        t(e[i], i, e);
    }
    /**
     * Get a reference to the underlying Array object. Warning: if the array
     * is mutated, no events will be dispatched by the collection, and the
     * collection's "length" property won't be in sync with the actual length
     * of the array.
     * @return {!Array<T>} Array.
     * @api
     */
    getArray() {
      return this.array_;
    }
    /**
     * Get the element at the provided index.
     * @param {number} index Index.
     * @return {T} Element.
     * @api
     */
    item(t) {
      return this.array_[t];
    }
    /**
     * Get the length of this collection.
     * @return {number} The length of the array.
     * @observable
     * @api
     */
    getLength() {
      return this.get(fa.LENGTH);
    }
    /**
     * Insert an element at the provided index.
     * @param {number} index Index.
     * @param {T} elem Element.
     * @api
     */
    insertAt(t, e) {
      if (t < 0 || t > this.getLength())
        throw new Error("Index out of bounds: " + t);
      this.unique_ && this.assertUnique_(e), this.array_.splice(t, 0, e), this.updateLength_(), this.dispatchEvent(
        new Dn(vt.ADD, e, t)
      );
    }
    /**
     * Remove the last element of the collection and return it.
     * Return `undefined` if the collection is empty.
     * @return {T|undefined} Element.
     * @api
     */
    pop() {
      return this.removeAt(this.getLength() - 1);
    }
    /**
     * Insert the provided element at the end of the collection.
     * @param {T} elem Element.
     * @return {number} New length of the collection.
     * @api
     */
    push(t) {
      this.unique_ && this.assertUnique_(t);
      const e = this.getLength();
      return this.insertAt(e, t), this.getLength();
    }
    /**
     * Remove the first occurrence of an element from the collection.
     * @param {T} elem Element.
     * @return {T|undefined} The removed element or undefined if none found.
     * @api
     */
    remove(t) {
      const e = this.array_;
      for (let i = 0, s = e.length; i < s; ++i)
        if (e[i] === t)
          return this.removeAt(i);
    }
    /**
     * Remove the element at the provided index and return it.
     * Return `undefined` if the collection does not contain this index.
     * @param {number} index Index.
     * @return {T|undefined} Value.
     * @api
     */
    removeAt(t) {
      if (t < 0 || t >= this.getLength())
        return;
      const e = this.array_[t];
      return this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(
        /** @type {CollectionEvent<T>} */
        new Dn(vt.REMOVE, e, t)
      ), e;
    }
    /**
     * Set the element at the provided index.
     * @param {number} index Index.
     * @param {T} elem Element.
     * @api
     */
    setAt(t, e) {
      const i = this.getLength();
      if (t >= i) {
        this.insertAt(t, e);
        return;
      }
      if (t < 0)
        throw new Error("Index out of bounds: " + t);
      this.unique_ && this.assertUnique_(e, t);
      const s = this.array_[t];
      this.array_[t] = e, this.dispatchEvent(
        /** @type {CollectionEvent<T>} */
        new Dn(vt.REMOVE, s, t)
      ), this.dispatchEvent(
        /** @type {CollectionEvent<T>} */
        new Dn(vt.ADD, e, t)
      );
    }
    /**
     * @private
     */
    updateLength_() {
      this.set(fa.LENGTH, this.array_.length);
    }
    /**
     * @private
     * @param {T} elem Element.
     * @param {number} [except] Optional index to ignore.
     */
    assertUnique_(t, e) {
      for (let i = 0, s = this.array_.length; i < s; ++i)
        if (this.array_[i] === t && i !== e)
          throw new Error("Duplicate item added to a unique collection");
    }
  }
  const jt = Pc;
  class Dc extends re {
    /**
     * @param {string} type Event type.
     * @param {import("./Map.js").default} map Map.
     * @param {?import("./Map.js").FrameState} [frameState] Frame state.
     */
    constructor(t, e, i) {
      super(t), this.map = e, this.frameState = i !== void 0 ? i : null;
    }
  }
  const ei = Dc;
  class Oc extends ei {
    /**
     * @param {string} type Event type.
     * @param {import("./Map.js").default} map Map.
     * @param {EVENT} originalEvent Original event.
     * @param {boolean} [dragging] Is the map currently being dragged?
     * @param {import("./Map.js").FrameState} [frameState] Frame state.
     * @param {Array<PointerEvent>} [activePointers] Active pointers.
     */
    constructor(t, e, i, s, r, o) {
      super(t, e, r), this.originalEvent = i, this.pixel_ = null, this.coordinate_ = null, this.dragging = s !== void 0 ? s : !1, this.activePointers = o;
    }
    /**
     * The map pixel relative to the viewport corresponding to the original event.
     * @type {import("./pixel.js").Pixel}
     * @api
     */
    get pixel() {
      return this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)), this.pixel_;
    }
    set pixel(t) {
      this.pixel_ = t;
    }
    /**
     * The coordinate corresponding to the original browser event.  This will be in the user
     * projection if one is set.  Otherwise it will be in the view projection.
     * @type {import("./coordinate.js").Coordinate}
     * @api
     */
    get coordinate() {
      return this.coordinate_ || (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)), this.coordinate_;
    }
    set coordinate(t) {
      this.coordinate_ = t;
    }
    /**
     * Prevents the default browser action.
     * See https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault.
     * @api
     * @override
     */
    preventDefault() {
      super.preventDefault(), "preventDefault" in this.originalEvent && this.originalEvent.preventDefault();
    }
    /**
     * Prevents further propagation of the current event.
     * See https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation.
     * @api
     * @override
     */
    stopPropagation() {
      super.stopPropagation(), "stopPropagation" in this.originalEvent && this.originalEvent.stopPropagation();
    }
  }
  const Ee = Oc, st = {
    /**
     * A true single click with no dragging and no double click. Note that this
     * event is delayed by 250 ms to ensure that it is not a double click.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#singleclick
     * @api
     */
    SINGLECLICK: "singleclick",
    /**
     * A click with no dragging. A double click will fire two of this.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#click
     * @api
     */
    CLICK: Y.CLICK,
    /**
     * A true double click, with no dragging.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
     * @api
     */
    DBLCLICK: Y.DBLCLICK,
    /**
     * Triggered when a pointer is dragged.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointerdrag
     * @api
     */
    POINTERDRAG: "pointerdrag",
    /**
     * Triggered when a pointer is moved. Note that on touch devices this is
     * triggered when the map is panned, so is not the same as mousemove.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointermove
     * @api
     */
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel"
  }, De = typeof navigator < "u" && typeof navigator.userAgent < "u" ? navigator.userAgent.toLowerCase() : "";
  De.includes("safari") && !De.includes("chrom") && (De.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(De));
  const Fc = De.includes("webkit") && !De.includes("edge"), ga = De.includes("macintosh"), kc = typeof devicePixelRatio < "u" ? devicePixelRatio : 1, Xs = typeof WorkerGlobalScope < "u" && typeof OffscreenCanvas < "u" && self instanceof WorkerGlobalScope, _a = typeof Image < "u" && Image.prototype.decode, ma = function() {
    let n = !1;
    try {
      const t = Object.defineProperty({}, "passive", {
        get: function() {
          n = !0;
        }
      });
      window.addEventListener("_", null, t), window.removeEventListener("_", null, t);
    } catch {
    }
    return n;
  }(), Ys = {
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel"
  };
  class Nc extends bn {
    /**
     * @param {import("./Map.js").default} map The map with the viewport to listen to events on.
     * @param {number} [moveTolerance] The minimal distance the pointer must travel to trigger a move.
     */
    constructor(t, e) {
      super(t), this.map_ = t, this.clickTimeoutId_, this.emulateClicks_ = !1, this.dragging_ = !1, this.dragListenerKeys_ = [], this.moveTolerance_ = e === void 0 ? 1 : e, this.down_ = null;
      const i = this.map_.getViewport();
      this.activePointers_ = [], this.trackedTouches_ = {}, this.element_ = i, this.pointerdownListenerKey_ = $(
        i,
        Ys.POINTERDOWN,
        this.handlePointerDown_,
        this
      ), this.originalPointerMoveEvent_, this.relayedListenerKey_ = $(
        i,
        Ys.POINTERMOVE,
        this.relayMoveEvent_,
        this
      ), this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this), this.element_.addEventListener(
        Y.TOUCHMOVE,
        this.boundHandleTouchMove_,
        ma ? { passive: !1 } : !1
      );
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    emulateClick_(t) {
      let e = new Ee(
        st.CLICK,
        this.map_,
        t
      );
      this.dispatchEvent(e), this.clickTimeoutId_ !== void 0 ? (clearTimeout(this.clickTimeoutId_), this.clickTimeoutId_ = void 0, e = new Ee(
        st.DBLCLICK,
        this.map_,
        t
      ), this.dispatchEvent(e)) : this.clickTimeoutId_ = setTimeout(() => {
        this.clickTimeoutId_ = void 0;
        const i = new Ee(
          st.SINGLECLICK,
          this.map_,
          t
        );
        this.dispatchEvent(i);
      }, 250);
    }
    /**
     * Keeps track on how many pointers are currently active.
     *
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    updateActivePointers_(t) {
      const e = t, i = e.pointerId;
      if (e.type == st.POINTERUP || e.type == st.POINTERCANCEL) {
        delete this.trackedTouches_[i];
        for (const s in this.trackedTouches_)
          if (this.trackedTouches_[s].target !== e.target) {
            delete this.trackedTouches_[s];
            break;
          }
      } else
        (e.type == st.POINTERDOWN || e.type == st.POINTERMOVE) && (this.trackedTouches_[i] = e);
      this.activePointers_ = Object.values(this.trackedTouches_);
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    handlePointerUp_(t) {
      this.updateActivePointers_(t);
      const e = new Ee(
        st.POINTERUP,
        this.map_,
        t,
        void 0,
        void 0,
        this.activePointers_
      );
      this.dispatchEvent(e), this.emulateClicks_ && !e.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(t) && this.emulateClick_(this.down_), this.activePointers_.length === 0 && (this.dragListenerKeys_.forEach(it), this.dragListenerKeys_.length = 0, this.dragging_ = !1, this.down_ = null);
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @return {boolean} If the left mouse button was pressed.
     * @private
     */
    isMouseActionButton_(t) {
      return t.button === 0;
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    handlePointerDown_(t) {
      this.emulateClicks_ = this.activePointers_.length === 0, this.updateActivePointers_(t);
      const e = new Ee(
        st.POINTERDOWN,
        this.map_,
        t,
        void 0,
        void 0,
        this.activePointers_
      );
      if (this.dispatchEvent(e), this.down_ = new PointerEvent(t.type, t), Object.defineProperty(this.down_, "target", {
        writable: !1,
        value: t.target
      }), this.dragListenerKeys_.length === 0) {
        const i = this.map_.getOwnerDocument();
        this.dragListenerKeys_.push(
          $(
            i,
            st.POINTERMOVE,
            this.handlePointerMove_,
            this
          ),
          $(i, st.POINTERUP, this.handlePointerUp_, this),
          /* Note that the listener for `pointercancel is set up on
           * `pointerEventHandler_` and not `documentPointerEventHandler_` like
           * the `pointerup` and `pointermove` listeners.
           *
           * The reason for this is the following: `TouchSource.vacuumTouches_()`
           * issues `pointercancel` events, when there was no `touchend` for a
           * `touchstart`. Now, let's say a first `touchstart` is registered on
           * `pointerEventHandler_`. The `documentPointerEventHandler_` is set up.
           * But `documentPointerEventHandler_` doesn't know about the first
           * `touchstart`. If there is no `touchend` for the `touchstart`, we can
           * only receive a `touchcancel` from `pointerEventHandler_`, because it is
           * only registered there.
           */
          $(
            this.element_,
            st.POINTERCANCEL,
            this.handlePointerUp_,
            this
          )
        ), this.element_.getRootNode && this.element_.getRootNode() !== i && this.dragListenerKeys_.push(
          $(
            this.element_.getRootNode(),
            st.POINTERUP,
            this.handlePointerUp_,
            this
          )
        );
      }
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    handlePointerMove_(t) {
      if (this.isMoving_(t)) {
        this.updateActivePointers_(t), this.dragging_ = !0;
        const e = new Ee(
          st.POINTERDRAG,
          this.map_,
          t,
          this.dragging_,
          void 0,
          this.activePointers_
        );
        this.dispatchEvent(e);
      }
    }
    /**
     * Wrap and relay a pointermove event.
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    relayMoveEvent_(t) {
      this.originalPointerMoveEvent_ = t;
      const e = !!(this.down_ && this.isMoving_(t));
      this.dispatchEvent(
        new Ee(
          st.POINTERMOVE,
          this.map_,
          t,
          e
        )
      );
    }
    /**
     * Flexible handling of a `touch-action: none` css equivalent: because calling
     * `preventDefault()` on a `pointermove` event does not stop native page scrolling
     * and zooming, we also listen for `touchmove` and call `preventDefault()` on it
     * when an interaction (currently `DragPan` handles the event.
     * @param {TouchEvent} event Event.
     * @private
     */
    handleTouchMove_(t) {
      const e = this.originalPointerMoveEvent_;
      (!e || e.defaultPrevented) && (typeof t.cancelable != "boolean" || t.cancelable === !0) && t.preventDefault();
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @return {boolean} Is moving.
     * @private
     */
    isMoving_(t) {
      return this.dragging_ || Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_;
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.relayedListenerKey_ && (it(this.relayedListenerKey_), this.relayedListenerKey_ = null), this.element_.removeEventListener(
        Y.TOUCHMOVE,
        this.boundHandleTouchMove_
      ), this.pointerdownListenerKey_ && (it(this.pointerdownListenerKey_), this.pointerdownListenerKey_ = null), this.dragListenerKeys_.forEach(it), this.dragListenerKeys_.length = 0, this.element_ = null, super.disposeInternal();
    }
  }
  const Gc = Nc, xe = {
    /**
     * Triggered after a map frame is rendered.
     * @event module:ol/MapEvent~MapEvent#postrender
     * @api
     */
    POSTRENDER: "postrender",
    /**
     * Triggered when the map starts moving.
     * @event module:ol/MapEvent~MapEvent#movestart
     * @api
     */
    MOVESTART: "movestart",
    /**
     * Triggered after the map is moved.
     * @event module:ol/MapEvent~MapEvent#moveend
     * @api
     */
    MOVEEND: "moveend",
    /**
     * Triggered when loading of additional map data (tiles, images, features) starts.
     * @event module:ol/MapEvent~MapEvent#loadstart
     * @api
     */
    LOADSTART: "loadstart",
    /**
     * Triggered when loading of additional map data has completed.
     * @event module:ol/MapEvent~MapEvent#loadend
     * @api
     */
    LOADEND: "loadend"
  }, mt = {
    LAYERGROUP: "layergroup",
    SIZE: "size",
    TARGET: "target",
    VIEW: "view"
  }, F = {
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    /**
     * Indicates that tile loading failed
     * @type {number}
     */
    ERROR: 3,
    EMPTY: 4
  };
  function q(n, t) {
    if (!n)
      throw new Error(t);
  }
  const On = 1 / 0;
  class zc {
    /**
     * @param {function(T): number} priorityFunction Priority function.
     * @param {function(T): string} keyFunction Key function.
     */
    constructor(t, e) {
      this.priorityFunction_ = t, this.keyFunction_ = e, this.elements_ = [], this.priorities_ = [], this.queuedElements_ = {};
    }
    /**
     * FIXME empty description for jsdoc
     */
    clear() {
      this.elements_.length = 0, this.priorities_.length = 0, Fi(this.queuedElements_);
    }
    /**
     * Remove and return the highest-priority element. O(log N).
     * @return {T} Element.
     */
    dequeue() {
      const t = this.elements_, e = this.priorities_, i = t[0];
      t.length == 1 ? (t.length = 0, e.length = 0) : (t[0] = /** @type {T} */
      t.pop(), e[0] = /** @type {number} */
      e.pop(), this.siftUp_(0));
      const s = this.keyFunction_(i);
      return delete this.queuedElements_[s], i;
    }
    /**
     * Enqueue an element. O(log N).
     * @param {T} element Element.
     * @return {boolean} The element was added to the queue.
     */
    enqueue(t) {
      q(
        !(this.keyFunction_(t) in this.queuedElements_),
        "Tried to enqueue an `element` that was already added to the queue"
      );
      const e = this.priorityFunction_(t);
      return e != On ? (this.elements_.push(t), this.priorities_.push(e), this.queuedElements_[this.keyFunction_(t)] = !0, this.siftDown_(0, this.elements_.length - 1), !0) : !1;
    }
    /**
     * @return {number} Count.
     */
    getCount() {
      return this.elements_.length;
    }
    /**
     * Gets the index of the left child of the node at the given index.
     * @param {number} index The index of the node to get the left child for.
     * @return {number} The index of the left child.
     * @private
     */
    getLeftChildIndex_(t) {
      return t * 2 + 1;
    }
    /**
     * Gets the index of the right child of the node at the given index.
     * @param {number} index The index of the node to get the right child for.
     * @return {number} The index of the right child.
     * @private
     */
    getRightChildIndex_(t) {
      return t * 2 + 2;
    }
    /**
     * Gets the index of the parent of the node at the given index.
     * @param {number} index The index of the node to get the parent for.
     * @return {number} The index of the parent.
     * @private
     */
    getParentIndex_(t) {
      return t - 1 >> 1;
    }
    /**
     * Make this a heap. O(N).
     * @private
     */
    heapify_() {
      let t;
      for (t = (this.elements_.length >> 1) - 1; t >= 0; t--)
        this.siftUp_(t);
    }
    /**
     * @return {boolean} Is empty.
     */
    isEmpty() {
      return this.elements_.length === 0;
    }
    /**
     * @param {string} key Key.
     * @return {boolean} Is key queued.
     */
    isKeyQueued(t) {
      return t in this.queuedElements_;
    }
    /**
     * @param {T} element Element.
     * @return {boolean} Is queued.
     */
    isQueued(t) {
      return this.isKeyQueued(this.keyFunction_(t));
    }
    /**
     * @param {number} index The index of the node to move down.
     * @private
     */
    siftUp_(t) {
      const e = this.elements_, i = this.priorities_, s = e.length, r = e[t], o = i[t], a = t;
      for (; t < s >> 1; ) {
        const l = this.getLeftChildIndex_(t), h = this.getRightChildIndex_(t), c = h < s && i[h] < i[l] ? h : l;
        e[t] = e[c], i[t] = i[c], t = c;
      }
      e[t] = r, i[t] = o, this.siftDown_(a, t);
    }
    /**
     * @param {number} startIndex The index of the root.
     * @param {number} index The index of the node to move up.
     * @private
     */
    siftDown_(t, e) {
      const i = this.elements_, s = this.priorities_, r = i[e], o = s[e];
      for (; e > t; ) {
        const a = this.getParentIndex_(e);
        if (s[a] > o)
          i[e] = i[a], s[e] = s[a], e = a;
        else
          break;
      }
      i[e] = r, s[e] = o;
    }
    /**
     * FIXME empty description for jsdoc
     */
    reprioritize() {
      const t = this.priorityFunction_, e = this.elements_, i = this.priorities_;
      let s = 0;
      const r = e.length;
      let o, a, l;
      for (a = 0; a < r; ++a)
        o = e[a], l = t(o), l == On ? delete this.queuedElements_[this.keyFunction_(o)] : (i[s] = l, e[s++] = o);
      e.length = s, i.length = s, this.heapify_();
    }
  }
  const Wc = zc;
  class Xc extends Wc {
    /**
     * @param {PriorityFunction} tilePriorityFunction Tile priority function.
     * @param {function(): ?} tileChangeCallback Function called on each tile change event.
     */
    constructor(t, e) {
      super(
        (i) => t.apply(null, i),
        (i) => i[0].getKey()
      ), this.boundHandleTileChange_ = this.handleTileChange.bind(this), this.tileChangeCallback_ = e, this.tilesLoading_ = 0, this.tilesLoadingKeys_ = {};
    }
    /**
     * @param {TileQueueElement} element Element.
     * @return {boolean} The element was added to the queue.
     * @override
     */
    enqueue(t) {
      const e = super.enqueue(t);
      return e && t[0].addEventListener(Y.CHANGE, this.boundHandleTileChange_), e;
    }
    /**
     * @return {number} Number of tiles loading.
     */
    getTilesLoading() {
      return this.tilesLoading_;
    }
    /**
     * @param {import("./events/Event.js").default} event Event.
     * @protected
     */
    handleTileChange(t) {
      const e = (
        /** @type {import("./Tile.js").default} */
        t.target
      ), i = e.getState();
      if (i === F.LOADED || i === F.ERROR || i === F.EMPTY) {
        i !== F.ERROR && e.removeEventListener(Y.CHANGE, this.boundHandleTileChange_);
        const s = e.getKey();
        s in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[s], --this.tilesLoading_), this.tileChangeCallback_();
      }
    }
    /**
     * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
     * @param {number} maxNewLoads Maximum number of new tiles to load.
     */
    loadMoreTiles(t, e) {
      let i = 0;
      for (; this.tilesLoading_ < t && i < e && this.getCount() > 0; ) {
        const s = this.dequeue()[0], r = s.getKey();
        s.getState() === F.IDLE && !(r in this.tilesLoadingKeys_) && (this.tilesLoadingKeys_[r] = !0, ++this.tilesLoading_, ++i, s.load());
      }
    }
  }
  const Yc = Xc;
  function Bc(n, t, e, i, s) {
    if (!n || !(e in n.wantedTiles) || !n.wantedTiles[e][t.getKey()])
      return On;
    const r = n.viewState.center, o = i[0] - r[0], a = i[1] - r[1];
    return 65536 * Math.log(s) + Math.sqrt(o * o + a * a) / s;
  }
  const pt = {
    ANIMATING: 0,
    INTERACTING: 1
  }, Yt = {
    CENTER: "center",
    RESOLUTION: "resolution",
    ROTATION: "rotation"
  };
  function nt(n, t, e) {
    return Math.min(Math.max(n, t), e);
  }
  function Uc(n, t, e, i, s, r) {
    const o = s - e, a = r - i;
    if (o !== 0 || a !== 0) {
      const l = ((n - e) * o + (t - i) * a) / (o * o + a * a);
      l > 1 ? (e = s, i = r) : l > 0 && (e += o * l, i += a * l);
    }
    return ii(n, t, e, i);
  }
  function ii(n, t, e, i) {
    const s = e - n, r = i - t;
    return s * s + r * r;
  }
  function Kc(n) {
    const t = n.length;
    for (let i = 0; i < t; i++) {
      let s = i, r = Math.abs(n[i][i]);
      for (let a = i + 1; a < t; a++) {
        const l = Math.abs(n[a][i]);
        l > r && (r = l, s = a);
      }
      if (r === 0)
        return null;
      const o = n[s];
      n[s] = n[i], n[i] = o;
      for (let a = i + 1; a < t; a++) {
        const l = -n[a][i] / n[i][i];
        for (let h = i; h < t + 1; h++)
          i == h ? n[a][h] = 0 : n[a][h] += l * n[i][h];
      }
    }
    const e = new Array(t);
    for (let i = t - 1; i >= 0; i--) {
      e[i] = n[i][t] / n[i][i];
      for (let s = i - 1; s >= 0; s--)
        n[s][t] -= n[s][i] * e[i];
    }
    return e;
  }
  function pa(n) {
    return n * 180 / Math.PI;
  }
  function we(n) {
    return n * Math.PI / 180;
  }
  function Oe(n, t) {
    const e = n % t;
    return e * t < 0 ? e + t : e;
  }
  function Pt(n, t, e) {
    return n + e * (t - n);
  }
  function Fn(n, t) {
    const e = Math.pow(10, t);
    return Math.round(n * e) / e;
  }
  function kn(n, t) {
    return Math.floor(Fn(n, t));
  }
  function Nn(n, t) {
    return Math.ceil(Fn(n, t));
  }
  function Bs(n, t, e) {
    if (n >= t && n < e)
      return n;
    const i = e - t;
    return ((n - t) % i + i) % i + t;
  }
  function ya(n, t, e) {
    return (
      /**
       * @param {import("./coordinate.js").Coordinate|undefined} center Center.
       * @param {number|undefined} resolution Resolution.
       * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @param {Array<number>} [centerShift] Shift between map center and viewport center.
       * @return {import("./coordinate.js").Coordinate|undefined} Center.
       */
      function(i, s, r, o, a) {
        if (!i)
          return;
        if (!s && !t)
          return i;
        const l = t ? 0 : r[0] * s, h = t ? 0 : r[1] * s, c = a ? a[0] : 0, u = a ? a[1] : 0;
        let d = n[0] + l / 2 + c, f = n[2] - l / 2 + c, g = n[1] + h / 2 + u, p = n[3] - h / 2 + u;
        d > f && (d = (f + d) / 2, f = d), g > p && (g = (p + g) / 2, p = g);
        let _ = nt(i[0], d, f), m = nt(i[1], g, p);
        if (o && e && s) {
          const y = 30 * s;
          _ += -y * Math.log(1 + Math.max(0, d - i[0]) / y) + y * Math.log(1 + Math.max(0, i[0] - f) / y), m += -y * Math.log(1 + Math.max(0, g - i[1]) / y) + y * Math.log(1 + Math.max(0, i[1] - p) / y);
        }
        return [_, m];
      }
    );
  }
  function Zc(n) {
    return n;
  }
  const ut = {
    UNKNOWN: 0,
    INTERSECTING: 1,
    ABOVE: 2,
    RIGHT: 4,
    BELOW: 8,
    LEFT: 16
  };
  function Ea(n) {
    const t = Dt();
    for (let e = 0, i = n.length; e < i; ++e)
      Gi(t, n[e]);
    return t;
  }
  function Us(n, t, e) {
    return e ? (e[0] = n[0] - t, e[1] = n[1] - t, e[2] = n[2] + t, e[3] = n[3] + t, e) : [
      n[0] - t,
      n[1] - t,
      n[2] + t,
      n[3] + t
    ];
  }
  function xa(n, t) {
    return t ? (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t) : n.slice();
  }
  function wa(n, t, e) {
    let i, s;
    return t < n[0] ? i = n[0] - t : n[2] < t ? i = t - n[2] : i = 0, e < n[1] ? s = n[1] - e : n[3] < e ? s = e - n[3] : s = 0, i * i + s * s;
  }
  function ni(n, t) {
    return Ca(n, t[0], t[1]);
  }
  function ki(n, t) {
    return n[0] <= t[0] && t[2] <= n[2] && n[1] <= t[1] && t[3] <= n[3];
  }
  function Ca(n, t, e) {
    return n[0] <= t && t <= n[2] && n[1] <= e && e <= n[3];
  }
  function Ks(n, t) {
    const e = n[0], i = n[1], s = n[2], r = n[3], o = t[0], a = t[1];
    let l = ut.UNKNOWN;
    return o < e ? l = l | ut.LEFT : o > s && (l = l | ut.RIGHT), a < i ? l = l | ut.BELOW : a > r && (l = l | ut.ABOVE), l === ut.UNKNOWN && (l = ut.INTERSECTING), l;
  }
  function Dt() {
    return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  }
  function Ce(n, t, e, i, s) {
    return s ? (s[0] = n, s[1] = t, s[2] = e, s[3] = i, s) : [n, t, e, i];
  }
  function Gn(n) {
    return Ce(1 / 0, 1 / 0, -1 / 0, -1 / 0, n);
  }
  function va(n, t) {
    const e = n[0], i = n[1];
    return Ce(e, i, e, i, t);
  }
  function Zs(n, t, e, i, s) {
    const r = Gn(s);
    return Ra(r, n, t, e, i);
  }
  function Ni(n, t) {
    return n[0] == t[0] && n[2] == t[2] && n[1] == t[1] && n[3] == t[3];
  }
  function $c(n, t) {
    return t[0] < n[0] && (n[0] = t[0]), t[2] > n[2] && (n[2] = t[2]), t[1] < n[1] && (n[1] = t[1]), t[3] > n[3] && (n[3] = t[3]), n;
  }
  function Gi(n, t) {
    t[0] < n[0] && (n[0] = t[0]), t[0] > n[2] && (n[2] = t[0]), t[1] < n[1] && (n[1] = t[1]), t[1] > n[3] && (n[3] = t[1]);
  }
  function Ra(n, t, e, i, s) {
    for (; e < i; e += s)
      Vc(n, t[e], t[e + 1]);
    return n;
  }
  function Vc(n, t, e) {
    n[0] = Math.min(n[0], t), n[1] = Math.min(n[1], e), n[2] = Math.max(n[2], t), n[3] = Math.max(n[3], e);
  }
  function Ta(n, t) {
    let e;
    return e = t(zn(n)), e || (e = t(Wn(n)), e) || (e = t(Xn(n)), e) || (e = t(Ne(n)), e) ? e : !1;
  }
  function $s(n) {
    let t = 0;
    return Yn(n) || (t = J(n) * yt(n)), t;
  }
  function zn(n) {
    return [n[0], n[1]];
  }
  function Wn(n) {
    return [n[2], n[1]];
  }
  function Fe(n) {
    return [(n[0] + n[2]) / 2, (n[1] + n[3]) / 2];
  }
  function jc(n, t) {
    let e;
    if (t === "bottom-left")
      e = zn(n);
    else if (t === "bottom-right")
      e = Wn(n);
    else if (t === "top-left")
      e = Ne(n);
    else if (t === "top-right")
      e = Xn(n);
    else
      throw new Error("Invalid corner");
    return e;
  }
  function Vs(n, t, e, i, s) {
    const [r, o, a, l, h, c, u, d] = Sa(
      n,
      t,
      e,
      i
    );
    return Ce(
      Math.min(r, a, h, u),
      Math.min(o, l, c, d),
      Math.max(r, a, h, u),
      Math.max(o, l, c, d),
      s
    );
  }
  function Sa(n, t, e, i) {
    const s = t * i[0] / 2, r = t * i[1] / 2, o = Math.cos(e), a = Math.sin(e), l = s * o, h = s * a, c = r * o, u = r * a, d = n[0], f = n[1];
    return [
      d - l + u,
      f - h - c,
      d - l - u,
      f - h + c,
      d + l - u,
      f + h + c,
      d + l + u,
      f + h - c,
      d - l + u,
      f - h - c
    ];
  }
  function yt(n) {
    return n[3] - n[1];
  }
  function ke(n, t, e) {
    const i = e || Dt();
    return Rt(n, t) ? (n[0] > t[0] ? i[0] = n[0] : i[0] = t[0], n[1] > t[1] ? i[1] = n[1] : i[1] = t[1], n[2] < t[2] ? i[2] = n[2] : i[2] = t[2], n[3] < t[3] ? i[3] = n[3] : i[3] = t[3]) : Gn(i), i;
  }
  function Ne(n) {
    return [n[0], n[3]];
  }
  function Xn(n) {
    return [n[2], n[3]];
  }
  function J(n) {
    return n[2] - n[0];
  }
  function Rt(n, t) {
    return n[0] <= t[2] && n[2] >= t[0] && n[1] <= t[3] && n[3] >= t[1];
  }
  function Yn(n) {
    return n[2] < n[0] || n[3] < n[1];
  }
  function Hc(n, t) {
    return t ? (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t) : n;
  }
  function qc(n, t, e) {
    let i = !1;
    const s = Ks(n, t), r = Ks(n, e);
    if (s === ut.INTERSECTING || r === ut.INTERSECTING)
      i = !0;
    else {
      const o = n[0], a = n[1], l = n[2], h = n[3], c = t[0], u = t[1], d = e[0], f = e[1], g = (f - u) / (d - c);
      let p, _;
      r & ut.ABOVE && !(s & ut.ABOVE) && (p = d - (f - h) / g, i = p >= o && p <= l), !i && r & ut.RIGHT && !(s & ut.RIGHT) && (_ = f - (d - l) * g, i = _ >= a && _ <= h), !i && r & ut.BELOW && !(s & ut.BELOW) && (p = d - (f - a) / g, i = p >= o && p <= l), !i && r & ut.LEFT && !(s & ut.LEFT) && (_ = f - (d - o) * g, i = _ >= a && _ <= h);
    }
    return i;
  }
  function Ia(n, t) {
    const e = t.getExtent(), i = Fe(n);
    if (t.canWrapX() && (i[0] < e[0] || i[0] >= e[2])) {
      const s = J(e), o = Math.floor(
        (i[0] - e[0]) / s
      ) * s;
      n[0] -= o, n[2] -= o;
    }
    return n;
  }
  function La(n, t, e) {
    if (t.canWrapX()) {
      const i = t.getExtent();
      if (!isFinite(n[0]) || !isFinite(n[2]))
        return [[i[0], n[1], i[2], n[3]]];
      Ia(n, t);
      const s = J(i);
      if (J(n) > s && !e)
        return [[i[0], n[1], i[2], n[3]]];
      if (n[0] < i[0])
        return [
          [n[0] + s, n[1], i[2], n[3]],
          [i[0], n[1], n[2], n[3]]
        ];
      if (n[2] > i[2])
        return [
          [n[0], n[1], i[2], n[3]],
          [i[0], n[1], n[2] - s, n[3]]
        ];
    }
    return [n];
  }
  function Jc(n, t) {
    return n[0] += +t[0], n[1] += +t[1], n;
  }
  function Bn(n, t) {
    let e = !0;
    for (let i = n.length - 1; i >= 0; --i)
      if (n[i] != t[i]) {
        e = !1;
        break;
      }
    return e;
  }
  function js(n, t) {
    const e = Math.cos(t), i = Math.sin(t), s = n[0] * e - n[1] * i, r = n[1] * e + n[0] * i;
    return n[0] = s, n[1] = r, n;
  }
  function Qc(n, t) {
    return n[0] *= t, n[1] *= t, n;
  }
  function Aa(n, t) {
    if (t.canWrapX()) {
      const e = J(t.getExtent()), i = tu(n, t, e);
      i && (n[0] -= i * e);
    }
    return n;
  }
  function tu(n, t, e) {
    const i = t.getExtent();
    let s = 0;
    return t.canWrapX() && (n[0] < i[0] || n[0] > i[2]) && (e = e || J(i), s = Math.floor(
      (n[0] - i[0]) / e
    )), s;
  }
  function ba(n) {
    return Math.pow(n, 3);
  }
  function si(n) {
    return 1 - ba(1 - n);
  }
  function eu(n) {
    return 3 * n * n - 2 * n * n * n;
  }
  function iu(n) {
    return n;
  }
  const nu = 63710088e-1;
  function Ma(n, t, e) {
    e = e || nu;
    const i = we(n[1]), s = we(t[1]), r = (s - i) / 2, o = we(t[0] - n[0]) / 2, a = Math.sin(r) * Math.sin(r) + Math.sin(o) * Math.sin(o) * Math.cos(i) * Math.cos(s);
    return 2 * e * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  const Pa = {
    info: 1,
    warn: 2,
    error: 3,
    none: 4
  };
  let su = Pa.info;
  function Da(...n) {
    su > Pa.warn || console.warn(...n);
  }
  const zi = {
    // use the radius of the Normal sphere
    radians: 6370997 / (2 * Math.PI),
    degrees: 2 * Math.PI * 6370997 / 360,
    ft: 0.3048,
    m: 1,
    "us-ft": 1200 / 3937
  };
  class ru {
    /**
     * @param {Options} options Projection options.
     */
    constructor(t) {
      this.code_ = t.code, this.units_ = /** @type {import("./Units.js").Units} */
      t.units, this.extent_ = t.extent !== void 0 ? t.extent : null, this.worldExtent_ = t.worldExtent !== void 0 ? t.worldExtent : null, this.axisOrientation_ = t.axisOrientation !== void 0 ? t.axisOrientation : "enu", this.global_ = t.global !== void 0 ? t.global : !1, this.canWrapX_ = !!(this.global_ && this.extent_), this.getPointResolutionFunc_ = t.getPointResolution, this.defaultTileGrid_ = null, this.metersPerUnit_ = t.metersPerUnit;
    }
    /**
     * @return {boolean} The projection is suitable for wrapping the x-axis
     */
    canWrapX() {
      return this.canWrapX_;
    }
    /**
     * Get the code for this projection, e.g. 'EPSG:4326'.
     * @return {string} Code.
     * @api
     */
    getCode() {
      return this.code_;
    }
    /**
     * Get the validity extent for this projection.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getExtent() {
      return this.extent_;
    }
    /**
     * Get the units of this projection.
     * @return {import("./Units.js").Units} Units.
     * @api
     */
    getUnits() {
      return this.units_;
    }
    /**
     * Get the amount of meters per unit of this projection.  If the projection is
     * not configured with `metersPerUnit` or a units identifier, the return is
     * `undefined`.
     * @return {number|undefined} Meters.
     * @api
     */
    getMetersPerUnit() {
      return this.metersPerUnit_ || zi[this.units_];
    }
    /**
     * Get the world extent for this projection.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getWorldExtent() {
      return this.worldExtent_;
    }
    /**
     * Get the axis orientation of this projection.
     * Example values are:
     * enu - the default easting, northing, elevation.
     * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
     *     or south orientated transverse mercator.
     * wnu - westing, northing, up - some planetary coordinate systems have
     *     "west positive" coordinate systems
     * @return {string} Axis orientation.
     * @api
     */
    getAxisOrientation() {
      return this.axisOrientation_;
    }
    /**
     * Is this projection a global projection which spans the whole world?
     * @return {boolean} Whether the projection is global.
     * @api
     */
    isGlobal() {
      return this.global_;
    }
    /**
     * Set if the projection is a global projection which spans the whole world
     * @param {boolean} global Whether the projection is global.
     * @api
     */
    setGlobal(t) {
      this.global_ = t, this.canWrapX_ = !!(t && this.extent_);
    }
    /**
     * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
     */
    getDefaultTileGrid() {
      return this.defaultTileGrid_;
    }
    /**
     * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
     */
    setDefaultTileGrid(t) {
      this.defaultTileGrid_ = t;
    }
    /**
     * Set the validity extent for this projection.
     * @param {import("../extent.js").Extent} extent Extent.
     * @api
     */
    setExtent(t) {
      this.extent_ = t, this.canWrapX_ = !!(this.global_ && t);
    }
    /**
     * Set the world extent for this projection.
     * @param {import("../extent.js").Extent} worldExtent World extent
     *     [minlon, minlat, maxlon, maxlat].
     * @api
     */
    setWorldExtent(t) {
      this.worldExtent_ = t;
    }
    /**
     * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
     * for this projection.
     * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
     * @api
     */
    setGetPointResolution(t) {
      this.getPointResolutionFunc_ = t;
    }
    /**
     * Get the custom point resolution function for this projection (if set).
     * @return {GetPointResolution|undefined} The custom point
     * resolution function (if set).
     */
    getPointResolutionFunc() {
      return this.getPointResolutionFunc_;
    }
  }
  const Hs = ru, Wi = 6378137, ri = Math.PI * Wi, ou = [-ri, -ri, ri, ri], au = [-180, -85, 180, 85], Un = Wi * Math.log(Math.tan(Math.PI / 2));
  class oi extends Hs {
    /**
     * @param {string} code Code.
     */
    constructor(t) {
      super({
        code: t,
        units: "m",
        extent: ou,
        global: !0,
        worldExtent: au,
        getPointResolution: function(e, i) {
          return e / Math.cosh(i[1] / Wi);
        }
      });
    }
  }
  const Oa = [
    new oi("EPSG:3857"),
    new oi("EPSG:102100"),
    new oi("EPSG:102113"),
    new oi("EPSG:900913"),
    new oi("http://www.opengis.net/def/crs/EPSG/0/3857"),
    new oi("http://www.opengis.net/gml/srs/epsg.xml#3857")
  ];
  function lu(n, t, e, i) {
    const s = n.length;
    e = e > 1 ? e : 2, i = i ?? e, t === void 0 && (e > 2 ? t = n.slice() : t = new Array(s));
    for (let r = 0; r < s; r += i) {
      t[r] = ri * n[r] / 180;
      let o = Wi * Math.log(Math.tan(Math.PI * (+n[r + 1] + 90) / 360));
      o > Un ? o = Un : o < -Un && (o = -Un), t[r + 1] = o;
    }
    return t;
  }
  function hu(n, t, e, i) {
    const s = n.length;
    e = e > 1 ? e : 2, i = i ?? e, t === void 0 && (e > 2 ? t = n.slice() : t = new Array(s));
    for (let r = 0; r < s; r += i)
      t[r] = 180 * n[r] / ri, t[r + 1] = 360 * Math.atan(Math.exp(n[r + 1] / Wi)) / Math.PI - 90;
    return t;
  }
  const cu = 6378137, Fa = [-180, -90, 180, 90], uu = Math.PI * cu / 180;
  class Ge extends Hs {
    /**
     * @param {string} code Code.
     * @param {string} [axisOrientation] Axis orientation.
     */
    constructor(t, e) {
      super({
        code: t,
        units: "degrees",
        extent: Fa,
        axisOrientation: e,
        global: !0,
        metersPerUnit: uu,
        worldExtent: Fa
      });
    }
  }
  const ka = [
    new Ge("CRS:84"),
    new Ge("EPSG:4326", "neu"),
    new Ge("urn:ogc:def:crs:OGC:1.3:CRS84"),
    new Ge("urn:ogc:def:crs:OGC:2:84"),
    new Ge("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
    new Ge("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
    new Ge("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
  ];
  let qs = {};
  function du(n) {
    return qs[n] || qs[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
  }
  function fu(n, t) {
    qs[n] = t;
  }
  let ai = {};
  function Xi(n, t, e) {
    const i = n.getCode(), s = t.getCode();
    i in ai || (ai[i] = {}), ai[i][s] = e;
  }
  function Js(n, t) {
    return n in ai && t in ai[n] ? ai[n][t] : null;
  }
  const Kn = 0.9996, Ot = 669438e-8, Zn = Ot * Ot, $n = Zn * Ot, ze = Ot / (1 - Ot), Na = Math.sqrt(1 - Ot), li = (1 - Na) / (1 + Na), Ga = li * li, Qs = Ga * li, tr = Qs * li, za = tr * li, Wa = 1 - Ot / 4 - 3 * Zn / 64 - 5 * $n / 256, gu = 3 * Ot / 8 + 3 * Zn / 32 + 45 * $n / 1024, _u = 15 * Zn / 256 + 45 * $n / 1024, mu = 35 * $n / 3072, pu = 3 / 2 * li - 27 / 32 * Qs + 269 / 512 * za, yu = 21 / 16 * Ga - 55 / 32 * tr, Eu = 151 / 96 * Qs - 417 / 128 * za, xu = 1097 / 512 * tr, Vn = 6378137;
  function wu(n, t, e) {
    const i = n - 5e5, o = (e.north ? t : t - 1e7) / Kn / (Vn * Wa), a = o + pu * Math.sin(2 * o) + yu * Math.sin(4 * o) + Eu * Math.sin(6 * o) + xu * Math.sin(8 * o), l = Math.sin(a), h = l * l, c = Math.cos(a), u = l / c, d = u * u, f = d * d, g = 1 - Ot * h, p = Math.sqrt(1 - Ot * h), _ = Vn / p, m = (1 - Ot) / g, y = ze * c ** 2, w = y * y, E = i / (_ * Kn), x = E * E, C = x * E, T = C * E, R = T * E, S = R * E, L = a - u / m * (x / 2 - T / 24 * (5 + 3 * d + 10 * y - 4 * w - 9 * ze)) + S / 720 * (61 + 90 * d + 298 * y + 45 * f - 252 * ze - 3 * w);
    let A = (E - C / 6 * (1 + 2 * d + y) + R / 120 * (5 - 2 * y + 28 * d - 3 * w + 8 * ze + 24 * f)) / c;
    return A = Bs(
      A + we(Ba(e.number)),
      -Math.PI,
      Math.PI
    ), [pa(A), pa(L)];
  }
  const Xa = -80, Ya = 84, Cu = -180, vu = 180;
  function Ru(n, t, e) {
    n = Bs(n, Cu, vu), t < Xa ? t = Xa : t > Ya && (t = Ya);
    const i = we(t), s = Math.sin(i), r = Math.cos(i), o = s / r, a = o * o, l = a * a, h = we(n), c = Ba(e.number), u = we(c), d = Vn / Math.sqrt(1 - Ot * s ** 2), f = ze * r ** 2, g = r * Bs(h - u, -Math.PI, Math.PI), p = g * g, _ = p * g, m = _ * g, y = m * g, w = y * g, E = Vn * (Wa * i - gu * Math.sin(2 * i) + _u * Math.sin(4 * i) - mu * Math.sin(6 * i)), x = Kn * d * (g + _ / 6 * (1 - a + f) + y / 120 * (5 - 18 * a + l + 72 * f - 58 * ze)) + 5e5;
    let C = Kn * (E + d * o * (p / 2 + m / 24 * (5 - a + 9 * f + 4 * f ** 2) + w / 720 * (61 - 58 * a + l + 600 * f - 330 * ze)));
    return e.north || (C += 1e7), [x, C];
  }
  function Ba(n) {
    return (n - 1) * 6 - 180 + 3;
  }
  const Tu = [
    /^EPSG:(\d+)$/,
    /^urn:ogc:def:crs:EPSG::(\d+)$/,
    /^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/
  ];
  function Ua(n) {
    let t = 0;
    for (const s of Tu) {
      const r = n.match(s);
      if (r) {
        t = parseInt(r[1]);
        break;
      }
    }
    if (!t)
      return null;
    let e = 0, i = !1;
    return t > 32700 && t < 32761 ? e = t - 32700 : t > 32600 && t < 32661 && (i = !0, e = t - 32600), e ? { number: e, north: i } : null;
  }
  function Ka(n, t) {
    return function(e, i, s, r) {
      const o = e.length;
      s = s > 1 ? s : 2, r = r ?? s, i || (s > 2 ? i = e.slice() : i = new Array(o));
      for (let a = 0; a < o; a += r) {
        const l = e[a], h = e[a + 1], c = n(l, h, t);
        i[a] = c[0], i[a + 1] = c[1];
      }
      return i;
    };
  }
  function Su(n) {
    return Ua(n) ? new Hs({ code: n, units: "m" }) : null;
  }
  function Iu(n) {
    const t = Ua(n.getCode());
    return t ? {
      forward: Ka(Ru, t),
      inverse: Ka(wu, t)
    } : null;
  }
  const Lu = [Iu], Au = [Su];
  let er = !0;
  function Za(n) {
    er = !(n === void 0 ? !0 : n);
  }
  function ir(n, t) {
    if (t !== void 0) {
      for (let e = 0, i = n.length; e < i; ++e)
        t[e] = n[e];
      t = t;
    } else
      t = n.slice();
    return t;
  }
  function nr(n) {
    fu(n.getCode(), n), Xi(n, n, ir);
  }
  function bu(n) {
    n.forEach(nr);
  }
  function Tt(n) {
    if (typeof n != "string")
      return n;
    const t = du(n);
    if (t)
      return t;
    for (const e of Au) {
      const i = e(n);
      if (i)
        return i;
    }
    return null;
  }
  function $a(n, t, e, i) {
    n = Tt(n);
    let s;
    const r = n.getPointResolutionFunc();
    if (r) {
      if (s = r(t, e), i && i !== n.getUnits()) {
        const o = n.getMetersPerUnit();
        o && (s = s * o / zi[i]);
      }
    } else {
      const o = n.getUnits();
      if (o == "degrees" && !i || i == "degrees")
        s = t;
      else {
        const a = Hn(
          n,
          Tt("EPSG:4326")
        );
        if (!a && o !== "degrees")
          s = t * n.getMetersPerUnit();
        else {
          let h = [
            e[0] - t / 2,
            e[1],
            e[0] + t / 2,
            e[1],
            e[0],
            e[1] - t / 2,
            e[0],
            e[1] + t / 2
          ];
          h = a(h, h, 2);
          const c = Ma(h.slice(0, 2), h.slice(2, 4)), u = Ma(h.slice(4, 6), h.slice(6, 8));
          s = (c + u) / 2;
        }
        const l = i ? zi[i] : n.getMetersPerUnit();
        l !== void 0 && (s /= l);
      }
    }
    return s;
  }
  function Va(n) {
    bu(n), n.forEach(function(t) {
      n.forEach(function(e) {
        t !== e && Xi(t, e, ir);
      });
    });
  }
  function Mu(n, t, e, i) {
    n.forEach(function(s) {
      t.forEach(function(r) {
        Xi(s, r, e), Xi(r, s, i);
      });
    });
  }
  function sr(n, t) {
    return n ? typeof n == "string" ? Tt(n) : (
      /** @type {Projection} */
      n
    ) : Tt(t);
  }
  function Pu(n) {
    return (
      /**
       * @param {Array<number>} input Input.
       * @param {Array<number>} [output] Output.
       * @param {number} [dimension] Dimensions that should be transformed.
       * @param {number} [stride] Stride.
       * @return {Array<number>} Output.
       */
      function(t, e, i, s) {
        const r = t.length;
        i = i !== void 0 ? i : 2, s = s ?? i, e = e !== void 0 ? e : new Array(r);
        for (let o = 0; o < r; o += s) {
          const a = n(t.slice(o, o + i)), l = a.length;
          for (let h = 0, c = s; h < c; ++h)
            e[o + h] = h >= l ? t[o + h] : a[h];
        }
        return e;
      }
    );
  }
  function jn(n, t) {
    return Za(), Jn(
      n,
      "EPSG:4326",
      t !== void 0 ? t : "EPSG:3857"
    );
  }
  function Du(n, t) {
    const e = Jn(
      n,
      t !== void 0 ? t : "EPSG:3857",
      "EPSG:4326"
    ), i = e[0];
    return (i < -180 || i > 180) && (e[0] = Oe(i + 180, 360) - 180), e;
  }
  function rr(n, t) {
    if (n === t)
      return !0;
    const e = n.getUnits() === t.getUnits();
    return (n.getCode() === t.getCode() || Hn(n, t) === ir) && e;
  }
  function Hn(n, t) {
    const e = n.getCode(), i = t.getCode();
    let s = Js(e, i);
    if (s)
      return s;
    let r = null, o = null;
    for (const l of Lu)
      r || (r = l(n)), o || (o = l(t));
    if (!r && !o)
      return null;
    const a = "EPSG:4326";
    if (o)
      if (r)
        s = or(
          r.inverse,
          o.forward
        );
      else {
        const l = Js(e, a);
        l && (s = or(
          l,
          o.forward
        ));
      }
    else {
      const l = Js(a, i);
      l && (s = or(
        r.inverse,
        l
      ));
    }
    return s && (nr(n), nr(t), Xi(n, t, s)), s;
  }
  function or(n, t) {
    return function(e, i, s, r) {
      return i = n(e, i, s, r), t(i, i, s, r);
    };
  }
  function qn(n, t) {
    const e = Tt(n), i = Tt(t);
    return Hn(e, i);
  }
  function Jn(n, t, e) {
    const i = qn(t, e);
    if (!i) {
      const s = Tt(t).getCode(), r = Tt(e).getCode();
      throw new Error(
        `No transform available between ${s} and ${r}`
      );
    }
    return i(n, void 0, n.length);
  }
  let Ou = null;
  function Fu() {
    return Ou;
  }
  function ar(n, t) {
    return n;
  }
  function oe(n, t) {
    return er && !Bn(n, [0, 0]) && n[0] >= -180 && n[0] <= 180 && n[1] >= -90 && n[1] <= 90 && (er = !1, Da(
      "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
    )), n;
  }
  function lr(n, t) {
    return n;
  }
  function ve(n, t) {
    return n;
  }
  function ku() {
    Va(Oa), Va(ka), Mu(
      ka,
      Oa,
      lu,
      hu
    );
  }
  ku(), new Array(6);
  function Bt() {
    return [1, 0, 0, 1, 0, 0];
  }
  function Nu(n, t) {
    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n;
  }
  function dt(n, t) {
    const e = t[0], i = t[1];
    return t[0] = n[0] * e + n[2] * i + n[4], t[1] = n[1] * e + n[3] * i + n[5], t;
  }
  function ae(n, t, e, i, s, r, o, a) {
    const l = Math.sin(r), h = Math.cos(r);
    return n[0] = i * h, n[1] = s * l, n[2] = -i * l, n[3] = s * h, n[4] = o * i * h - a * i * l + t, n[5] = o * s * l + a * s * h + e, n;
  }
  function ja(n, t) {
    const e = Gu(t);
    q(e !== 0, "Transformation matrix cannot be inverted");
    const i = t[0], s = t[1], r = t[2], o = t[3], a = t[4], l = t[5];
    return n[0] = o / e, n[1] = -s / e, n[2] = -r / e, n[3] = i / e, n[4] = (r * l - o * a) / e, n[5] = -(i * l - s * a) / e, n;
  }
  function Gu(n) {
    return n[0] * n[3] - n[1] * n[2];
  }
  const zu = [1e5, 1e5, 1e5, 1e5, 2, 2];
  function Wu(n) {
    return "matrix(" + n.join(", ") + ")";
  }
  function Ha(n) {
    return n.substring(7, n.length - 1).split(",").map(parseFloat);
  }
  function Xu(n, t) {
    const e = Ha(n), i = Ha(t);
    for (let s = 0; s < 6; ++s)
      if (Math.round((e[s] - i[s]) * zu[s]) !== 0)
        return !1;
    return !0;
  }
  function Re(n, t, e, i, s, r, o) {
    r = r || [], o = o || 2;
    let a = 0;
    for (let l = t; l < e; l += i) {
      const h = n[l], c = n[l + 1];
      r[a++] = s[0] * h + s[2] * c + s[4], r[a++] = s[1] * h + s[3] * c + s[5];
      for (let u = 2; u < o; u++)
        r[a++] = n[l + u];
    }
    return r && r.length != a && (r.length = a), r;
  }
  function qa(n, t, e, i, s, r, o) {
    o = o || [];
    const a = Math.cos(s), l = Math.sin(s), h = r[0], c = r[1];
    let u = 0;
    for (let d = t; d < e; d += i) {
      const f = n[d] - h, g = n[d + 1] - c;
      o[u++] = h + f * a - g * l, o[u++] = c + f * l + g * a;
      for (let p = d + 2; p < d + i; ++p)
        o[u++] = n[p];
    }
    return o && o.length != u && (o.length = u), o;
  }
  function Yu(n, t, e, i, s, r, o, a) {
    a = a || [];
    const l = o[0], h = o[1];
    let c = 0;
    for (let u = t; u < e; u += i) {
      const d = n[u] - l, f = n[u + 1] - h;
      a[c++] = l + s * d, a[c++] = h + r * f;
      for (let g = u + 2; g < u + i; ++g)
        a[c++] = n[g];
    }
    return a && a.length != c && (a.length = c), a;
  }
  function Bu(n, t, e, i, s, r, o) {
    o = o || [];
    let a = 0;
    for (let l = t; l < e; l += i) {
      o[a++] = n[l] + s, o[a++] = n[l + 1] + r;
      for (let h = l + 2; h < l + i; ++h)
        o[a++] = n[h];
    }
    return o && o.length != a && (o.length = a), o;
  }
  const Ja = Bt(), Uu = [NaN, NaN];
  class Ku extends Vt {
    constructor() {
      super(), this.extent_ = Dt(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = ca(
        (t, e, i) => {
          if (!i)
            return this.getSimplifiedGeometry(e);
          const s = this.clone();
          return s.applyTransform(i), s.getSimplifiedGeometry(e);
        }
      );
    }
    /**
     * Get a transformed and simplified version of the geometry.
     * @abstract
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
     * @return {Geometry} Simplified geometry.
     */
    simplifyTransformed(t, e) {
      return this.simplifyTransformedInternal(
        this.getRevision(),
        t,
        e
      );
    }
    /**
     * Make a complete copy of the geometry.
     * @abstract
     * @return {!Geometry} Clone.
     */
    clone() {
      return V();
    }
    /**
     * @abstract
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     */
    closestPointXY(t, e, i, s) {
      return V();
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     */
    containsXY(t, e) {
      return this.closestPointXY(t, e, Uu, Number.MIN_VALUE) === 0;
    }
    /**
     * Return the closest point of the geometry to the passed point as
     * {@link module:ol/coordinate~Coordinate coordinate}.
     * @param {import("../coordinate.js").Coordinate} point Point.
     * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
     * @return {import("../coordinate.js").Coordinate} Closest point.
     * @api
     */
    getClosestPoint(t, e) {
      return e = e || [NaN, NaN], this.closestPointXY(t[0], t[1], e, 1 / 0), e;
    }
    /**
     * Returns true if this geometry includes the specified coordinate. If the
     * coordinate is on the boundary of the geometry, returns false.
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains coordinate.
     * @api
     */
    intersectsCoordinate(t) {
      return this.containsXY(t[0], t[1]);
    }
    /**
     * @abstract
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     */
    computeExtent(t) {
      return V();
    }
    /**
     * Get the extent of the geometry.
     * @param {import("../extent.js").Extent} [extent] Extent.
     * @return {import("../extent.js").Extent} extent Extent.
     * @api
     */
    getExtent(t) {
      if (this.extentRevision_ != this.getRevision()) {
        const e = this.computeExtent(this.extent_);
        (isNaN(e[0]) || isNaN(e[1])) && Gn(e), this.extentRevision_ = this.getRevision();
      }
      return Hc(this.extent_, t);
    }
    /**
     * Rotate the geometry around a given coordinate. This modifies the geometry
     * coordinates in place.
     * @abstract
     * @param {number} angle Rotation angle in radians.
     * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
     * @api
     */
    rotate(t, e) {
      V();
    }
    /**
     * Scale the geometry (with an optional origin).  This modifies the geometry
     * coordinates in place.
     * @abstract
     * @param {number} sx The scaling factor in the x-direction.
     * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
     * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
     *     of the geometry extent).
     * @api
     */
    scale(t, e, i) {
      V();
    }
    /**
     * Create a simplified version of this geometry.  For linestrings, this uses
     * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
     * algorithm.  For polygons, a quantization-based
     * simplification is used to preserve topology.
     * @param {number} tolerance The tolerance distance for simplification.
     * @return {Geometry} A new, simplified version of the original geometry.
     * @api
     */
    simplify(t) {
      return this.getSimplifiedGeometry(t * t);
    }
    /**
     * Create a simplified version of this geometry using the Douglas Peucker
     * algorithm.
     * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
     * @abstract
     * @param {number} squaredTolerance Squared tolerance.
     * @return {Geometry} Simplified geometry.
     */
    getSimplifiedGeometry(t) {
      return V();
    }
    /**
     * Get the type of this geometry.
     * @abstract
     * @return {Type} Geometry type.
     */
    getType() {
      return V();
    }
    /**
     * Apply a transform function to the coordinates of the geometry.
     * The geometry is modified in place.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     * @abstract
     * @param {import("../proj.js").TransformFunction} transformFn Transform function.
     * Called with a flat array of geometry coordinates.
     */
    applyTransform(t) {
      V();
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @abstract
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     */
    intersectsExtent(t) {
      return V();
    }
    /**
     * Translate the geometry.  This modifies the geometry coordinates in place.  If
     * instead you want a new geometry, first `clone()` this geometry.
     * @abstract
     * @param {number} deltaX Delta X.
     * @param {number} deltaY Delta Y.
     * @api
     */
    translate(t, e) {
      V();
    }
    /**
     * Transform each coordinate of the geometry from one coordinate reference
     * system to another. The geometry is modified in place.
     * For example, a line will be transformed to a line and a circle to a circle.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     *
     * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
     *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
     * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
     *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
     * @return {this} This geometry.  Note that original geometry is
     *     modified in place.
     * @api
     */
    transform(t, e) {
      const i = Tt(t), s = i.getUnits() == "tile-pixels" ? function(r, o, a) {
        const l = i.getExtent(), h = i.getWorldExtent(), c = yt(h) / yt(l);
        ae(
          Ja,
          h[0],
          h[3],
          c,
          -c,
          0,
          0,
          0
        );
        const u = Re(
          r,
          0,
          r.length,
          a,
          Ja,
          o
        ), d = qn(i, e);
        return d ? d(u, u, a) : u;
      } : qn(i, e);
      return this.applyTransform(s), this;
    }
  }
  const Zu = Ku;
  class $u extends Zu {
    constructor() {
      super(), this.layout = "XY", this.stride = 2, this.flatCoordinates;
    }
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     * @override
     */
    computeExtent(t) {
      return Zs(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        t
      );
    }
    /**
     * @abstract
     * @return {Array<*> | null} Coordinates.
     */
    getCoordinates() {
      return V();
    }
    /**
     * Return the first coordinate of the geometry.
     * @return {import("../coordinate.js").Coordinate} First coordinate.
     * @api
     */
    getFirstCoordinate() {
      return this.flatCoordinates.slice(0, this.stride);
    }
    /**
     * @return {Array<number>} Flat coordinates.
     */
    getFlatCoordinates() {
      return this.flatCoordinates;
    }
    /**
     * Return the last coordinate of the geometry.
     * @return {import("../coordinate.js").Coordinate} Last point.
     * @api
     */
    getLastCoordinate() {
      return this.flatCoordinates.slice(
        this.flatCoordinates.length - this.stride
      );
    }
    /**
     * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
     * @return {import("./Geometry.js").GeometryLayout} Layout.
     * @api
     */
    getLayout() {
      return this.layout;
    }
    /**
     * Create a simplified version of this geometry using the Douglas Peucker algorithm.
     * @param {number} squaredTolerance Squared tolerance.
     * @return {SimpleGeometry} Simplified geometry.
     * @override
     */
    getSimplifiedGeometry(t) {
      if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && t <= this.simplifiedGeometryMaxMinSquaredTolerance)
        return this;
      const e = this.getSimplifiedGeometryInternal(t);
      return e.getFlatCoordinates().length < this.flatCoordinates.length ? e : (this.simplifiedGeometryMaxMinSquaredTolerance = t, this);
    }
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {SimpleGeometry} Simplified geometry.
     * @protected
     */
    getSimplifiedGeometryInternal(t) {
      return this;
    }
    /**
     * @return {number} Stride.
     */
    getStride() {
      return this.stride;
    }
    /**
     * @param {import("./Geometry.js").GeometryLayout} layout Layout.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     */
    setFlatCoordinates(t, e) {
      this.stride = Qa(t), this.layout = t, this.flatCoordinates = e;
    }
    /**
     * @abstract
     * @param {!Array<*>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    setCoordinates(t, e) {
      V();
    }
    /**
     * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
     * @param {Array<*>} coordinates Coordinates.
     * @param {number} nesting Nesting.
     * @protected
     */
    setLayout(t, e, i) {
      let s;
      if (t)
        s = Qa(t);
      else {
        for (let r = 0; r < i; ++r) {
          if (e.length === 0) {
            this.layout = "XY", this.stride = 2;
            return;
          }
          e = /** @type {Array<unknown>} */
          e[0];
        }
        s = e.length, t = Vu(s);
      }
      this.layout = t, this.stride = s;
    }
    /**
     * Apply a transform function to the coordinates of the geometry.
     * The geometry is modified in place.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     * @param {import("../proj.js").TransformFunction} transformFn Transform function.
     * Called with a flat array of geometry coordinates.
     * @api
     * @override
     */
    applyTransform(t) {
      this.flatCoordinates && (t(
        this.flatCoordinates,
        this.flatCoordinates,
        this.layout.startsWith("XYZ") ? 3 : 2,
        this.stride
      ), this.changed());
    }
    /**
     * Rotate the geometry around a given coordinate. This modifies the geometry
     * coordinates in place.
     * @param {number} angle Rotation angle in counter-clockwise radians.
     * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
     * @api
     * @override
     */
    rotate(t, e) {
      const i = this.getFlatCoordinates();
      if (i) {
        const s = this.getStride();
        qa(
          i,
          0,
          i.length,
          s,
          t,
          e,
          i
        ), this.changed();
      }
    }
    /**
     * Scale the geometry (with an optional origin).  This modifies the geometry
     * coordinates in place.
     * @param {number} sx The scaling factor in the x-direction.
     * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
     * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
     *     of the geometry extent).
     * @api
     * @override
     */
    scale(t, e, i) {
      e === void 0 && (e = t), i || (i = Fe(this.getExtent()));
      const s = this.getFlatCoordinates();
      if (s) {
        const r = this.getStride();
        Yu(
          s,
          0,
          s.length,
          r,
          t,
          e,
          i,
          s
        ), this.changed();
      }
    }
    /**
     * Translate the geometry.  This modifies the geometry coordinates in place.  If
     * instead you want a new geometry, first `clone()` this geometry.
     * @param {number} deltaX Delta X.
     * @param {number} deltaY Delta Y.
     * @api
     * @override
     */
    translate(t, e) {
      const i = this.getFlatCoordinates();
      if (i) {
        const s = this.getStride();
        Bu(
          i,
          0,
          i.length,
          s,
          t,
          e,
          i
        ), this.changed();
      }
    }
  }
  function Vu(n) {
    let t;
    return n == 2 ? t = "XY" : n == 3 ? t = "XYZ" : n == 4 && (t = "XYZM"), /** @type {import("./Geometry.js").GeometryLayout} */
    t;
  }
  function Qa(n) {
    let t;
    return n == "XY" ? t = 2 : n == "XYZ" || n == "XYM" ? t = 3 : n == "XYZM" && (t = 4), /** @type {number} */
    t;
  }
  function ju(n, t, e) {
    const i = n.getFlatCoordinates();
    if (!i)
      return null;
    const s = n.getStride();
    return Re(
      i,
      0,
      i.length,
      s,
      t,
      e
    );
  }
  const hr = $u;
  function tl(n, t, e, i) {
    let s = 0;
    const r = n[e - i], o = n[e - i + 1];
    let a = 0, l = 0;
    for (; t < e; t += i) {
      const h = n[t] - r, c = n[t + 1] - o;
      s += l * h - a * c, a = h, l = c;
    }
    return s / 2;
  }
  function Hu(n, t, e, i) {
    let s = 0;
    for (let r = 0, o = e.length; r < o; ++r) {
      const a = e[r];
      s += tl(n, t, a, i), t = a;
    }
    return s;
  }
  function el(n, t, e, i, s, r, o) {
    const a = n[t], l = n[t + 1], h = n[e] - a, c = n[e + 1] - l;
    let u;
    if (h === 0 && c === 0)
      u = t;
    else {
      const d = ((s - a) * h + (r - l) * c) / (h * h + c * c);
      if (d > 1)
        u = e;
      else if (d > 0) {
        for (let f = 0; f < i; ++f)
          o[f] = Pt(
            n[t + f],
            n[e + f],
            d
          );
        o.length = i;
        return;
      } else
        u = t;
    }
    for (let d = 0; d < i; ++d)
      o[d] = n[u + d];
    o.length = i;
  }
  function il(n, t, e, i, s) {
    let r = n[t], o = n[t + 1];
    for (t += i; t < e; t += i) {
      const a = n[t], l = n[t + 1], h = ii(r, o, a, l);
      h > s && (s = h), r = a, o = l;
    }
    return s;
  }
  function qu(n, t, e, i, s) {
    for (let r = 0, o = e.length; r < o; ++r) {
      const a = e[r];
      s = il(n, t, a, i, s), t = a;
    }
    return s;
  }
  function nl(n, t, e, i, s, r, o, a, l, h, c) {
    if (t == e)
      return h;
    let u, d;
    if (s === 0) {
      if (d = ii(
        o,
        a,
        n[t],
        n[t + 1]
      ), d < h) {
        for (u = 0; u < i; ++u)
          l[u] = n[t + u];
        return l.length = i, d;
      }
      return h;
    }
    c = c || [NaN, NaN];
    let f = t + i;
    for (; f < e; )
      if (el(
        n,
        f - i,
        f,
        i,
        o,
        a,
        c
      ), d = ii(o, a, c[0], c[1]), d < h) {
        for (h = d, u = 0; u < i; ++u)
          l[u] = c[u];
        l.length = i, f += i;
      } else
        f += i * Math.max(
          (Math.sqrt(d) - Math.sqrt(h)) / s | 0,
          1
        );
    if (r && (el(
      n,
      e - i,
      t,
      i,
      o,
      a,
      c
    ), d = ii(o, a, c[0], c[1]), d < h)) {
      for (h = d, u = 0; u < i; ++u)
        l[u] = c[u];
      l.length = i;
    }
    return h;
  }
  function Ju(n, t, e, i, s, r, o, a, l, h, c) {
    c = c || [NaN, NaN];
    for (let u = 0, d = e.length; u < d; ++u) {
      const f = e[u];
      h = nl(
        n,
        t,
        f,
        i,
        s,
        r,
        o,
        a,
        l,
        h,
        c
      ), t = f;
    }
    return h;
  }
  function Qu(n, t, e, i) {
    for (let s = 0, r = e.length; s < r; ++s)
      n[t++] = e[s];
    return t;
  }
  function sl(n, t, e, i) {
    for (let s = 0, r = e.length; s < r; ++s) {
      const o = e[s];
      for (let a = 0; a < i; ++a)
        n[t++] = o[a];
    }
    return t;
  }
  function td(n, t, e, i, s) {
    s = s || [];
    let r = 0;
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = sl(
        n,
        t,
        e[o],
        i
      );
      s[r++] = l, t = l;
    }
    return s.length = r, s;
  }
  function hi(n, t, e, i, s) {
    s = s !== void 0 ? s : [];
    let r = 0;
    for (let o = t; o < e; o += i)
      s[r++] = n.slice(o, o + i);
    return s.length = r, s;
  }
  function Qn(n, t, e, i, s) {
    s = s !== void 0 ? s : [];
    let r = 0;
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o];
      s[r++] = hi(
        n,
        t,
        l,
        i,
        s[r]
      ), t = l;
    }
    return s.length = r, s;
  }
  function rl(n, t, e, i, s) {
    s = s !== void 0 ? s : [];
    let r = 0;
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o];
      s[r++] = l.length === 1 && l[0] === t ? [] : Qn(
        n,
        t,
        l,
        i,
        s[r]
      ), t = l[l.length - 1];
    }
    return s.length = r, s;
  }
  function cr(n, t, e, i, s, r, o) {
    const a = (e - t) / i;
    if (a < 3) {
      for (; t < e; t += i)
        r[o++] = n[t], r[o++] = n[t + 1];
      return o;
    }
    const l = new Array(a);
    l[0] = 1, l[a - 1] = 1;
    const h = [t, e - i];
    let c = 0;
    for (; h.length > 0; ) {
      const u = h.pop(), d = h.pop();
      let f = 0;
      const g = n[d], p = n[d + 1], _ = n[u], m = n[u + 1];
      for (let y = d + i; y < u; y += i) {
        const w = n[y], E = n[y + 1], x = Uc(w, E, g, p, _, m);
        x > f && (c = y, f = x);
      }
      f > s && (l[(c - t) / i] = 1, d + i < c && h.push(d, c), c + i < u && h.push(c, u));
    }
    for (let u = 0; u < a; ++u)
      l[u] && (r[o++] = n[t + u * i], r[o++] = n[t + u * i + 1]);
    return o;
  }
  function ed(n, t, e, i, s, r, o, a) {
    for (let l = 0, h = e.length; l < h; ++l) {
      const c = e[l];
      o = cr(
        n,
        t,
        c,
        i,
        s,
        r,
        o
      ), a.push(o), t = c;
    }
    return o;
  }
  function We(n, t) {
    return t * Math.round(n / t);
  }
  function id(n, t, e, i, s, r, o) {
    if (t == e)
      return o;
    let a = We(n[t], s), l = We(n[t + 1], s);
    t += i, r[o++] = a, r[o++] = l;
    let h, c;
    do
      if (h = We(n[t], s), c = We(n[t + 1], s), t += i, t == e)
        return r[o++] = h, r[o++] = c, o;
    while (h == a && c == l);
    for (; t < e; ) {
      const u = We(n[t], s), d = We(n[t + 1], s);
      if (t += i, u == h && d == c)
        continue;
      const f = h - a, g = c - l, p = u - a, _ = d - l;
      if (f * _ == g * p && (f < 0 && p < f || f == p || f > 0 && p > f) && (g < 0 && _ < g || g == _ || g > 0 && _ > g)) {
        h = u, c = d;
        continue;
      }
      r[o++] = h, r[o++] = c, a = h, l = c, h = u, c = d;
    }
    return r[o++] = h, r[o++] = c, o;
  }
  function ol(n, t, e, i, s, r, o, a) {
    for (let l = 0, h = e.length; l < h; ++l) {
      const c = e[l];
      o = id(
        n,
        t,
        c,
        i,
        s,
        r,
        o
      ), a.push(o), t = c;
    }
    return o;
  }
  class ts extends hr {
    /**
     * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
     *     For internal use, flat coordinates in combination with `layout` are also accepted.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    constructor(t, e) {
      super(), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(
        e,
        /** @type {Array<number>} */
        t
      ) : this.setCoordinates(
        /** @type {Array<import("../coordinate.js").Coordinate>} */
        t,
        e
      );
    }
    /**
     * Make a complete copy of the geometry.
     * @return {!LinearRing} Clone.
     * @api
     * @override
     */
    clone() {
      return new ts(this.flatCoordinates.slice(), this.layout);
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     * @override
     */
    closestPointXY(t, e, i, s) {
      return s < wa(this.getExtent(), t, e) ? s : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
        il(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          0
        )
      ), this.maxDeltaRevision_ = this.getRevision()), nl(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        this.maxDelta_,
        !0,
        t,
        e,
        i,
        s
      ));
    }
    /**
     * Return the area of the linear ring on projected plane.
     * @return {number} Area (on projected plane).
     * @api
     */
    getArea() {
      return tl(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride
      );
    }
    /**
     * Return the coordinates of the linear ring.
     * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
     * @api
     * @override
     */
    getCoordinates() {
      return hi(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride
      );
    }
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {LinearRing} Simplified LinearRing.
     * @protected
     * @override
     */
    getSimplifiedGeometryInternal(t) {
      const e = [];
      return e.length = cr(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        t,
        e,
        0
      ), new ts(e, "XY");
    }
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     * @override
     */
    getType() {
      return "LinearRing";
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     * @override
     */
    intersectsExtent(t) {
      return !1;
    }
    /**
     * Set the coordinates of the linear ring.
     * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @api
     * @override
     */
    setCoordinates(t, e) {
      this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = sl(
        this.flatCoordinates,
        0,
        t,
        this.stride
      ), this.changed();
    }
  }
  const al = ts;
  class ur extends hr {
    /**
     * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    constructor(t, e) {
      super(), this.setCoordinates(t, e);
    }
    /**
     * Make a complete copy of the geometry.
     * @return {!Point} Clone.
     * @api
     * @override
     */
    clone() {
      const t = new ur(this.flatCoordinates.slice(), this.layout);
      return t.applyProperties(this), t;
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     * @override
     */
    closestPointXY(t, e, i, s) {
      const r = this.flatCoordinates, o = ii(
        t,
        e,
        r[0],
        r[1]
      );
      if (o < s) {
        const a = this.stride;
        for (let l = 0; l < a; ++l)
          i[l] = r[l];
        return i.length = a, o;
      }
      return s;
    }
    /**
     * Return the coordinate of the point.
     * @return {import("../coordinate.js").Coordinate} Coordinates.
     * @api
     * @override
     */
    getCoordinates() {
      return this.flatCoordinates.slice();
    }
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     * @override
     */
    computeExtent(t) {
      return va(this.flatCoordinates, t);
    }
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     * @override
     */
    getType() {
      return "Point";
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     * @override
     */
    intersectsExtent(t) {
      return Ca(t, this.flatCoordinates[0], this.flatCoordinates[1]);
    }
    /**
     * @param {!Array<*>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @api
     * @override
     */
    setCoordinates(t, e) {
      this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Qu(
        this.flatCoordinates,
        0,
        t,
        this.stride
      ), this.changed();
    }
  }
  const ll = ur;
  function nd(n, t, e, i, s) {
    return !Ta(
      s,
      /**
       * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
       * @return {boolean} Contains (x, y).
       */
      function(o) {
        return !Xe(
          n,
          t,
          e,
          i,
          o[0],
          o[1]
        );
      }
    );
  }
  function Xe(n, t, e, i, s, r) {
    let o = 0, a = n[e - i], l = n[e - i + 1];
    for (; t < e; t += i) {
      const h = n[t], c = n[t + 1];
      l <= r ? c > r && (h - a) * (r - l) - (s - a) * (c - l) > 0 && o++ : c <= r && (h - a) * (r - l) - (s - a) * (c - l) < 0 && o--, a = h, l = c;
    }
    return o !== 0;
  }
  function hl(n, t, e, i, s, r) {
    if (e.length === 0 || !Xe(n, t, e[0], i, s, r))
      return !1;
    for (let o = 1, a = e.length; o < a; ++o)
      if (Xe(n, e[o - 1], e[o], i, s, r))
        return !1;
    return !0;
  }
  function dr(n, t, e, i, s, r, o) {
    let a, l, h, c, u, d, f;
    const g = s[r + 1], p = [];
    for (let y = 0, w = e.length; y < w; ++y) {
      const E = e[y];
      for (c = n[E - i], d = n[E - i + 1], a = t; a < E; a += i)
        u = n[a], f = n[a + 1], (g <= d && f <= g || d <= g && g <= f) && (h = (g - d) / (f - d) * (u - c) + c, p.push(h)), c = u, d = f;
    }
    let _ = NaN, m = -1 / 0;
    for (p.sort(se), c = p[0], a = 1, l = p.length; a < l; ++a) {
      u = p[a];
      const y = Math.abs(u - c);
      y > m && (h = (c + u) / 2, hl(n, t, e, i, h, g) && (_ = h, m = y)), c = u;
    }
    return isNaN(_) && (_ = s[r]), o ? (o.push(_, g, m), o) : [_, g, m];
  }
  function sd(n, t, e, i, s) {
    let r = [];
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o];
      r = dr(
        n,
        t,
        l,
        i,
        s,
        2 * o,
        r
      ), t = l[l.length - 1];
    }
    return r;
  }
  function rd(n, t, e, i, s) {
    let r;
    for (t += i; t < e; t += i)
      if (r = s(
        n.slice(t - i, t),
        n.slice(t, t + i)
      ), r)
        return r;
    return !1;
  }
  function cl(n, t, e, i, s, r) {
    return r = r ?? Ra(Dt(), n, t, e, i), Rt(s, r) ? r[0] >= s[0] && r[2] <= s[2] || r[1] >= s[1] && r[3] <= s[3] ? !0 : rd(
      n,
      t,
      e,
      i,
      /**
       * @param {import("../../coordinate.js").Coordinate} point1 Start point.
       * @param {import("../../coordinate.js").Coordinate} point2 End point.
       * @return {boolean} `true` if the segment and the extent intersect,
       *     `false` otherwise.
       */
      function(o, a) {
        return qc(s, o, a);
      }
    ) : !1;
  }
  function ul(n, t, e, i, s) {
    return !!(cl(n, t, e, i, s) || Xe(
      n,
      t,
      e,
      i,
      s[0],
      s[1]
    ) || Xe(
      n,
      t,
      e,
      i,
      s[0],
      s[3]
    ) || Xe(
      n,
      t,
      e,
      i,
      s[2],
      s[1]
    ) || Xe(
      n,
      t,
      e,
      i,
      s[2],
      s[3]
    ));
  }
  function od(n, t, e, i, s) {
    if (!ul(n, t, e[0], i, s))
      return !1;
    if (e.length === 1)
      return !0;
    for (let r = 1, o = e.length; r < o; ++r)
      if (nd(
        n,
        e[r - 1],
        e[r],
        i,
        s
      ) && !cl(
        n,
        e[r - 1],
        e[r],
        i,
        s
      ))
        return !1;
    return !0;
  }
  function ad(n, t, e, i) {
    for (; t < e - i; ) {
      for (let s = 0; s < i; ++s) {
        const r = n[t + s];
        n[t + s] = n[e - i + s], n[e - i + s] = r;
      }
      t += i, e -= i;
    }
  }
  function fr(n, t, e, i) {
    let s = 0, r = n[e - i], o = n[e - i + 1];
    for (; t < e; t += i) {
      const a = n[t], l = n[t + 1];
      s += (a - r) * (l + o), r = a, o = l;
    }
    return s === 0 ? void 0 : s > 0;
  }
  function ld(n, t, e, i, s) {
    s = s !== void 0 ? s : !1;
    for (let r = 0, o = e.length; r < o; ++r) {
      const a = e[r], l = fr(
        n,
        t,
        a,
        i
      );
      if (r === 0) {
        if (s && l || !s && !l)
          return !1;
      } else if (s && !l || !s && l)
        return !1;
      t = a;
    }
    return !0;
  }
  function dl(n, t, e, i, s) {
    s = s !== void 0 ? s : !1;
    for (let r = 0, o = e.length; r < o; ++r) {
      const a = e[r], l = fr(
        n,
        t,
        a,
        i
      );
      (r === 0 ? s && l || !s && !l : s && !l || !s && l) && ad(n, t, a, i), t = a;
    }
    return t;
  }
  function hd(n, t) {
    const e = [];
    let i = 0, s = 0, r;
    for (let o = 0, a = t.length; o < a; ++o) {
      const l = t[o], h = fr(n, i, l, 2);
      if (r === void 0 && (r = h), h === r)
        e.push(t.slice(s, o + 1));
      else {
        if (e.length === 0)
          continue;
        e[e.length - 1].push(t[s]);
      }
      s = o + 1, i = l;
    }
    return e;
  }
  class Yi extends hr {
    /**
     * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
     *     Array of linear rings that define the polygon. The first linear ring of the
     *     array defines the outer-boundary or surface of the polygon. Each subsequent
     *     linear ring defines a hole in the surface of the polygon. A linear ring is
     *     an array of vertices' coordinates where the first coordinate and the last are
     *     equivalent. (For internal use, flat coordinates in combination with
     *     `layout` and `ends` are also accepted.)
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
     */
    constructor(t, e, i) {
      super(), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, e !== void 0 && i ? (this.setFlatCoordinates(
        e,
        /** @type {Array<number>} */
        t
      ), this.ends_ = i) : this.setCoordinates(
        /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
        t,
        e
      );
    }
    /**
     * Append the passed linear ring to this polygon.
     * @param {LinearRing} linearRing Linear ring.
     * @api
     */
    appendLinearRing(t) {
      this.flatCoordinates ? Ws(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
    }
    /**
     * Make a complete copy of the geometry.
     * @return {!Polygon} Clone.
     * @api
     * @override
     */
    clone() {
      const t = new Yi(
        this.flatCoordinates.slice(),
        this.layout,
        this.ends_.slice()
      );
      return t.applyProperties(this), t;
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     * @override
     */
    closestPointXY(t, e, i, s) {
      return s < wa(this.getExtent(), t, e) ? s : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
        qu(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          0
        )
      ), this.maxDeltaRevision_ = this.getRevision()), Ju(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        this.maxDelta_,
        !0,
        t,
        e,
        i,
        s
      ));
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     * @override
     */
    containsXY(t, e) {
      return hl(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        t,
        e
      );
    }
    /**
     * Return the area of the polygon on projected plane.
     * @return {number} Area (on projected plane).
     * @api
     */
    getArea() {
      return Hu(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride
      );
    }
    /**
     * Get the coordinate array for this geometry.  This array has the structure
     * of a GeoJSON coordinate array for polygons.
     *
     * @param {boolean} [right] Orient coordinates according to the right-hand
     *     rule (counter-clockwise for exterior and clockwise for interior rings).
     *     If `false`, coordinates will be oriented according to the left-hand rule
     *     (clockwise for exterior and counter-clockwise for interior rings).
     *     By default, coordinate orientation will depend on how the geometry was
     *     constructed.
     * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
     * @api
     * @override
     */
    getCoordinates(t) {
      let e;
      return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), dl(e, 0, this.ends_, this.stride, t)) : e = this.flatCoordinates, Qn(e, 0, this.ends_, this.stride);
    }
    /**
     * @return {Array<number>} Ends.
     */
    getEnds() {
      return this.ends_;
    }
    /**
     * @return {Array<number>} Interior point.
     */
    getFlatInteriorPoint() {
      if (this.flatInteriorPointRevision_ != this.getRevision()) {
        const t = Fe(this.getExtent());
        this.flatInteriorPoint_ = dr(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride,
          t,
          0
        ), this.flatInteriorPointRevision_ = this.getRevision();
      }
      return (
        /** @type {import("../coordinate.js").Coordinate} */
        this.flatInteriorPoint_
      );
    }
    /**
     * Return an interior point of the polygon.
     * @return {Point} Interior point as XYM coordinate, where M is the
     * length of the horizontal intersection that the point belongs to.
     * @api
     */
    getInteriorPoint() {
      return new ll(this.getFlatInteriorPoint(), "XYM");
    }
    /**
     * Return the number of rings of the polygon,  this includes the exterior
     * ring and any interior rings.
     *
     * @return {number} Number of rings.
     * @api
     */
    getLinearRingCount() {
      return this.ends_.length;
    }
    /**
     * Return the Nth linear ring of the polygon geometry. Return `null` if the
     * given index is out of range.
     * The exterior linear ring is available at index `0` and the interior rings
     * at index `1` and beyond.
     *
     * @param {number} index Index.
     * @return {LinearRing|null} Linear ring.
     * @api
     */
    getLinearRing(t) {
      return t < 0 || this.ends_.length <= t ? null : new al(
        this.flatCoordinates.slice(
          t === 0 ? 0 : this.ends_[t - 1],
          this.ends_[t]
        ),
        this.layout
      );
    }
    /**
     * Return the linear rings of the polygon.
     * @return {Array<LinearRing>} Linear rings.
     * @api
     */
    getLinearRings() {
      const t = this.layout, e = this.flatCoordinates, i = this.ends_, s = [];
      let r = 0;
      for (let o = 0, a = i.length; o < a; ++o) {
        const l = i[o], h = new al(
          e.slice(r, l),
          t
        );
        s.push(h), r = l;
      }
      return s;
    }
    /**
     * @return {Array<number>} Oriented flat coordinates.
     */
    getOrientedFlatCoordinates() {
      if (this.orientedRevision_ != this.getRevision()) {
        const t = this.flatCoordinates;
        ld(t, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = dl(
          this.orientedFlatCoordinates_,
          0,
          this.ends_,
          this.stride
        )), this.orientedRevision_ = this.getRevision();
      }
      return (
        /** @type {Array<number>} */
        this.orientedFlatCoordinates_
      );
    }
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {Polygon} Simplified Polygon.
     * @protected
     * @override
     */
    getSimplifiedGeometryInternal(t) {
      const e = [], i = [];
      return e.length = ol(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        Math.sqrt(t),
        e,
        0,
        i
      ), new Yi(e, "XY", i);
    }
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     * @override
     */
    getType() {
      return "Polygon";
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     * @override
     */
    intersectsExtent(t) {
      return od(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        t
      );
    }
    /**
     * Set the coordinates of the polygon.
     * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @api
     * @override
     */
    setCoordinates(t, e) {
      this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
      const i = td(
        this.flatCoordinates,
        0,
        t,
        this.stride,
        this.ends_
      );
      this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1], this.changed();
    }
  }
  function fl(n) {
    if (Yn(n))
      throw new Error("Cannot create polygon from empty extent");
    const t = n[0], e = n[1], i = n[2], s = n[3], r = [
      t,
      e,
      t,
      s,
      i,
      s,
      i,
      e,
      t,
      e
    ];
    return new Yi(r, "XY", [r.length]);
  }
  function gr(n, t, e, i) {
    const s = J(t) / e[0], r = yt(t) / e[1];
    return i ? Math.min(n, Math.max(s, r)) : Math.min(n, Math.min(s, r));
  }
  function _r(n, t, e) {
    let i = Math.min(n, t);
    const s = 50;
    return i *= Math.log(1 + s * Math.max(0, n / t - 1)) / s + 1, e && (i = Math.max(i, e), i /= Math.log(1 + s * Math.max(0, e / n - 1)) / s + 1), nt(i, e / 2, t * 2);
  }
  function cd(n, t, e, i) {
    return t = t !== void 0 ? t : !0, /**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */
    function(s, r, o, a) {
      if (s !== void 0) {
        const l = n[0], h = n[n.length - 1], c = e ? gr(
          l,
          e,
          o,
          i
        ) : l;
        if (a)
          return t ? _r(
            s,
            c,
            h
          ) : nt(s, h, c);
        const u = Math.min(c, s), d = Math.floor(zs(n, u, r));
        return n[d] > c && d < n.length - 1 ? n[d + 1] : n[d];
      }
    };
  }
  function ud(n, t, e, i, s, r) {
    return i = i !== void 0 ? i : !0, e = e !== void 0 ? e : 0, /**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */
    function(o, a, l, h) {
      if (o !== void 0) {
        const c = s ? gr(
          t,
          s,
          l,
          r
        ) : t;
        if (h)
          return i ? _r(
            o,
            c,
            e
          ) : nt(o, e, c);
        const u = 1e-9, d = Math.ceil(
          Math.log(t / c) / Math.log(n) - u
        ), f = -a * (0.5 - u) + 0.5, g = Math.min(c, o), p = Math.floor(
          Math.log(t / g) / Math.log(n) + f
        ), _ = Math.max(d, p), m = t / Math.pow(n, _);
        return nt(m, e, c);
      }
    };
  }
  function gl(n, t, e, i, s) {
    return e = e !== void 0 ? e : !0, /**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */
    function(r, o, a, l) {
      if (r !== void 0) {
        const h = i ? gr(
          n,
          i,
          a,
          s
        ) : n;
        return !e || !l ? nt(r, t, h) : _r(
          r,
          h,
          t
        );
      }
    };
  }
  function mr(n) {
    if (n !== void 0)
      return 0;
  }
  function _l(n) {
    if (n !== void 0)
      return n;
  }
  function dd(n) {
    const t = 2 * Math.PI / n;
    return (
      /**
       * @param {number|undefined} rotation Rotation.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Rotation.
       */
      function(e, i) {
        if (i)
          return e;
        if (e !== void 0)
          return e = Math.floor(e / t + 0.5) * t, e;
      }
    );
  }
  function fd(n) {
    const t = n === void 0 ? we(5) : n;
    return (
      /**
       * @param {number|undefined} rotation Rotation.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Rotation.
       */
      function(e, i) {
        return i || e === void 0 ? e : Math.abs(e) <= t ? 0 : e;
      }
    );
  }
  const gd = 42, pr = 256, yr = 0;
  class _d extends Vt {
    /**
     * @param {ViewOptions} [options] View options.
     */
    constructor(t) {
      super(), this.on, this.once, this.un, t = Object.assign({}, t), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = sr(t.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, t.projection && Za(), t.center && (t.center = oe(t.center, this.projection_)), t.extent && (t.extent = ve(t.extent, this.projection_)), this.applyOptions_(t);
    }
    /**
     * Set up the view with the given options.
     * @param {ViewOptions} options View options.
     */
    applyOptions_(t) {
      const e = Object.assign({}, t);
      for (const a in Yt)
        delete e[a];
      this.setProperties(e, !0);
      const i = pd(t);
      this.maxResolution_ = i.maxResolution, this.minResolution_ = i.minResolution, this.zoomFactor_ = i.zoomFactor, this.resolutions_ = t.resolutions, this.padding_ = t.padding, this.minZoom_ = i.minZoom;
      const s = md(t), r = i.constraint, o = yd(t);
      this.constraints_ = {
        center: s,
        resolution: r,
        rotation: o
      }, this.setRotation(t.rotation !== void 0 ? t.rotation : 0), this.setCenterInternal(
        t.center !== void 0 ? t.center : null
      ), t.resolution !== void 0 ? this.setResolution(t.resolution) : t.zoom !== void 0 && this.setZoom(t.zoom);
    }
    /**
     * Padding (in css pixels).
     * If the map viewport is partially covered with other content (overlays) along
     * its edges, this setting allows to shift the center of the viewport away from that
     * content. The order of the values in the array is top, right, bottom, left.
     * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
     * @type {Array<number>|undefined}
     * @api
     */
    get padding() {
      return this.padding_;
    }
    set padding(t) {
      let e = this.padding_;
      this.padding_ = t;
      const i = this.getCenterInternal();
      if (i) {
        const s = t || [0, 0, 0, 0];
        e = e || [0, 0, 0, 0];
        const r = this.getResolution(), o = r / 2 * (s[3] - e[3] + e[1] - s[1]), a = r / 2 * (s[0] - e[0] + e[2] - s[2]);
        this.setCenterInternal([i[0] + o, i[1] - a]);
      }
    }
    /**
     * Get an updated version of the view options used to construct the view.  The
     * current resolution (or zoom), center, and rotation are applied to any stored
     * options.  The provided options can be used to apply new min/max zoom or
     * resolution limits.
     * @param {ViewOptions} newOptions New options to be applied.
     * @return {ViewOptions} New options updated with the current view state.
     */
    getUpdatedOptions_(t) {
      const e = this.getProperties();
      return e.resolution !== void 0 ? e.resolution = this.getResolution() : e.zoom = this.getZoom(), e.center = this.getCenterInternal(), e.rotation = this.getRotation(), Object.assign({}, e, t);
    }
    /**
     * Animate the view.  The view's center, zoom (or resolution), and rotation
     * can be animated for smooth transitions between view states.  For example,
     * to animate the view to a new zoom level:
     *
     *     view.animate({zoom: view.getZoom() + 1});
     *
     * By default, the animation lasts one second and uses in-and-out easing.  You
     * can customize this behavior by including `duration` (in milliseconds) and
     * `easing` options (see {@link module:ol/easing}).
     *
     * To chain together multiple animations, call the method with multiple
     * animation objects.  For example, to first zoom and then pan:
     *
     *     view.animate({zoom: 10}, {center: [0, 0]});
     *
     * If you provide a function as the last argument to the animate method, it
     * will get called at the end of an animation series.  The callback will be
     * called with `true` if the animation series completed on its own or `false`
     * if it was cancelled.
     *
     * Animations are cancelled by user interactions (e.g. dragging the map) or by
     * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
     * (or another method that calls one of these).
     *
     * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
     *     options.  Multiple animations can be run in series by passing multiple
     *     options objects.  To run multiple animations in parallel, call the method
     *     multiple times.  An optional callback can be provided as a final
     *     argument.  The callback will be called with a boolean indicating whether
     *     the animation completed without being cancelled.
     * @api
     */
    animate(t) {
      this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
      const e = new Array(arguments.length);
      for (let i = 0; i < e.length; ++i) {
        let s = arguments[i];
        s.center && (s = Object.assign({}, s), s.center = oe(
          s.center,
          this.getProjection()
        )), s.anchor && (s = Object.assign({}, s), s.anchor = oe(
          s.anchor,
          this.getProjection()
        )), e[i] = s;
      }
      this.animateInternal.apply(this, e);
    }
    /**
     * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
     */
    animateInternal(t) {
      let e = arguments.length, i;
      e > 1 && typeof arguments[e - 1] == "function" && (i = arguments[e - 1], --e);
      let s = 0;
      for (; s < e && !this.isDef(); ++s) {
        const c = arguments[s];
        c.center && this.setCenterInternal(c.center), c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution), c.rotation !== void 0 && this.setRotation(c.rotation);
      }
      if (s === e) {
        i && es(i, !0);
        return;
      }
      let r = Date.now(), o = this.targetCenter_.slice(), a = this.targetResolution_, l = this.targetRotation_;
      const h = [];
      for (; s < e; ++s) {
        const c = (
          /** @type {AnimationOptions} */
          arguments[s]
        ), u = {
          start: r,
          complete: !1,
          anchor: c.anchor,
          duration: c.duration !== void 0 ? c.duration : 1e3,
          easing: c.easing || eu,
          callback: i
        };
        if (c.center && (u.sourceCenter = o, u.targetCenter = c.center.slice(), o = u.targetCenter), c.zoom !== void 0 ? (u.sourceResolution = a, u.targetResolution = this.getResolutionForZoom(c.zoom), a = u.targetResolution) : c.resolution && (u.sourceResolution = a, u.targetResolution = c.resolution, a = u.targetResolution), c.rotation !== void 0) {
          u.sourceRotation = l;
          const d = Oe(c.rotation - l + Math.PI, 2 * Math.PI) - Math.PI;
          u.targetRotation = l + d, l = u.targetRotation;
        }
        Ed(u) ? u.complete = !0 : r += u.duration, h.push(u);
      }
      this.animations_.push(h), this.setHint(pt.ANIMATING, 1), this.updateAnimations_();
    }
    /**
     * Determine if the view is being animated.
     * @return {boolean} The view is being animated.
     * @api
     */
    getAnimating() {
      return this.hints_[pt.ANIMATING] > 0;
    }
    /**
     * Determine if the user is interacting with the view, such as panning or zooming.
     * @return {boolean} The view is being interacted with.
     * @api
     */
    getInteracting() {
      return this.hints_[pt.INTERACTING] > 0;
    }
    /**
     * Cancel any ongoing animations.
     * @api
     */
    cancelAnimations() {
      this.setHint(pt.ANIMATING, -this.hints_[pt.ANIMATING]);
      let t;
      for (let e = 0, i = this.animations_.length; e < i; ++e) {
        const s = this.animations_[e];
        if (s[0].callback && es(s[0].callback, !1), !t)
          for (let r = 0, o = s.length; r < o; ++r) {
            const a = s[r];
            if (!a.complete) {
              t = a.anchor;
              break;
            }
          }
      }
      this.animations_.length = 0, this.cancelAnchor_ = t, this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
    }
    /**
     * Update all animations.
     */
    updateAnimations_() {
      if (this.updateAnimationKey_ !== void 0 && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), !this.getAnimating())
        return;
      const t = Date.now();
      let e = !1;
      for (let i = this.animations_.length - 1; i >= 0; --i) {
        const s = this.animations_[i];
        let r = !0;
        for (let o = 0, a = s.length; o < a; ++o) {
          const l = s[o];
          if (l.complete)
            continue;
          const h = t - l.start;
          let c = l.duration > 0 ? h / l.duration : 1;
          c >= 1 ? (l.complete = !0, c = 1) : r = !1;
          const u = l.easing(c);
          if (l.sourceCenter) {
            const d = l.sourceCenter[0], f = l.sourceCenter[1], g = l.targetCenter[0], p = l.targetCenter[1];
            this.nextCenter_ = l.targetCenter;
            const _ = d + u * (g - d), m = f + u * (p - f);
            this.targetCenter_ = [_, m];
          }
          if (l.sourceResolution && l.targetResolution) {
            const d = u === 1 ? l.targetResolution : l.sourceResolution + u * (l.targetResolution - l.sourceResolution);
            if (l.anchor) {
              const f = this.getViewportSize_(this.getRotation()), g = this.constraints_.resolution(
                d,
                0,
                f,
                !0
              );
              this.targetCenter_ = this.calculateCenterZoom(
                g,
                l.anchor
              );
            }
            this.nextResolution_ = l.targetResolution, this.targetResolution_ = d, this.applyTargetState_(!0);
          }
          if (l.sourceRotation !== void 0 && l.targetRotation !== void 0) {
            const d = u === 1 ? Oe(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : l.sourceRotation + u * (l.targetRotation - l.sourceRotation);
            if (l.anchor) {
              const f = this.constraints_.rotation(
                d,
                !0
              );
              this.targetCenter_ = this.calculateCenterRotate(
                f,
                l.anchor
              );
            }
            this.nextRotation_ = l.targetRotation, this.targetRotation_ = d;
          }
          if (this.applyTargetState_(!0), e = !0, !l.complete)
            break;
        }
        if (r) {
          this.animations_[i] = null, this.setHint(pt.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
          const o = s[0].callback;
          o && es(o, !0);
        }
      }
      this.animations_ = this.animations_.filter(Boolean), e && this.updateAnimationKey_ === void 0 && (this.updateAnimationKey_ = requestAnimationFrame(
        this.updateAnimations_.bind(this)
      ));
    }
    /**
     * @param {number} rotation Target rotation.
     * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
     * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
     */
    calculateCenterRotate(t, e) {
      let i;
      const s = this.getCenterInternal();
      return s !== void 0 && (i = [s[0] - e[0], s[1] - e[1]], js(i, t - this.getRotation()), Jc(i, e)), i;
    }
    /**
     * @param {number} resolution Target resolution.
     * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
     * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
     */
    calculateCenterZoom(t, e) {
      let i;
      const s = this.getCenterInternal(), r = this.getResolution();
      if (s !== void 0 && r !== void 0) {
        const o = e[0] - t * (e[0] - s[0]) / r, a = e[1] - t * (e[1] - s[1]) / r;
        i = [o, a];
      }
      return i;
    }
    /**
     * Returns the current viewport size.
     * @private
     * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
     * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
     */
    getViewportSize_(t) {
      const e = this.viewportSize_;
      if (t) {
        const i = e[0], s = e[1];
        return [
          Math.abs(i * Math.cos(t)) + Math.abs(s * Math.sin(t)),
          Math.abs(i * Math.sin(t)) + Math.abs(s * Math.cos(t))
        ];
      }
      return e;
    }
    /**
     * Stores the viewport size on the view. The viewport size is not read every time from the DOM
     * to avoid performance hit and layout reflow.
     * This should be done on map size change.
     * Note: the constraints are not resolved during an animation to avoid stopping it
     * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
     */
    setViewportSize(t) {
      this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100], this.getAnimating() || this.resolveConstraints(0);
    }
    /**
     * Get the view center.
     * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
     * @observable
     * @api
     */
    getCenter() {
      const t = this.getCenterInternal();
      return t && ar(t, this.getProjection());
    }
    /**
     * Get the view center without transforming to user projection.
     * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
     */
    getCenterInternal() {
      return (
        /** @type {import("./coordinate.js").Coordinate|undefined} */
        this.get(Yt.CENTER)
      );
    }
    /**
     * @return {Constraints} Constraints.
     */
    getConstraints() {
      return this.constraints_;
    }
    /**
     * @return {boolean} Resolution constraint is set
     */
    getConstrainResolution() {
      return this.get("constrainResolution");
    }
    /**
     * @param {Array<number>} [hints] Destination array.
     * @return {Array<number>} Hint.
     */
    getHints(t) {
      return t !== void 0 ? (t[0] = this.hints_[0], t[1] = this.hints_[1], t) : this.hints_.slice();
    }
    /**
     * Calculate the extent for the current view state and the passed box size.
     * @param {import("./size.js").Size} [size] The pixel dimensions of the box
     * into which the calculated extent should fit. Defaults to the size of the
     * map the view is associated with.
     * If no map or multiple maps are connected to the view, provide the desired
     * box size (e.g. `map.getSize()`).
     * @return {import("./extent.js").Extent} Extent.
     * @api
     */
    calculateExtent(t) {
      const e = this.calculateExtentInternal(t);
      return lr(e, this.getProjection());
    }
    /**
     * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
     * the map's last known viewport size will be used.
     * @return {import("./extent.js").Extent} Extent.
     */
    calculateExtentInternal(t) {
      t = t || this.getViewportSizeMinusPadding_();
      const e = (
        /** @type {!import("./coordinate.js").Coordinate} */
        this.getCenterInternal()
      );
      q(e, "The view center is not defined");
      const i = (
        /** @type {!number} */
        this.getResolution()
      );
      q(i !== void 0, "The view resolution is not defined");
      const s = (
        /** @type {!number} */
        this.getRotation()
      );
      return q(s !== void 0, "The view rotation is not defined"), Vs(e, i, s, t);
    }
    /**
     * Get the maximum resolution of the view.
     * @return {number} The maximum resolution of the view.
     * @api
     */
    getMaxResolution() {
      return this.maxResolution_;
    }
    /**
     * Get the minimum resolution of the view.
     * @return {number} The minimum resolution of the view.
     * @api
     */
    getMinResolution() {
      return this.minResolution_;
    }
    /**
     * Get the maximum zoom level for the view.
     * @return {number} The maximum zoom level.
     * @api
     */
    getMaxZoom() {
      return (
        /** @type {number} */
        this.getZoomForResolution(this.minResolution_)
      );
    }
    /**
     * Set a new maximum zoom level for the view.
     * @param {number} zoom The maximum zoom level.
     * @api
     */
    setMaxZoom(t) {
      this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t }));
    }
    /**
     * Get the minimum zoom level for the view.
     * @return {number} The minimum zoom level.
     * @api
     */
    getMinZoom() {
      return (
        /** @type {number} */
        this.getZoomForResolution(this.maxResolution_)
      );
    }
    /**
     * Set a new minimum zoom level for the view.
     * @param {number} zoom The minimum zoom level.
     * @api
     */
    setMinZoom(t) {
      this.applyOptions_(this.getUpdatedOptions_({ minZoom: t }));
    }
    /**
     * Set whether the view should allow intermediary zoom levels.
     * @param {boolean} enabled Whether the resolution is constrained.
     * @api
     */
    setConstrainResolution(t) {
      this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t }));
    }
    /**
     * Get the view projection.
     * @return {import("./proj/Projection.js").default} The projection of the view.
     * @api
     */
    getProjection() {
      return this.projection_;
    }
    /**
     * Get the view resolution.
     * @return {number|undefined} The resolution of the view.
     * @observable
     * @api
     */
    getResolution() {
      return (
        /** @type {number|undefined} */
        this.get(Yt.RESOLUTION)
      );
    }
    /**
     * Get the resolutions for the view. This returns the array of resolutions
     * passed to the constructor of the View, or undefined if none were given.
     * @return {Array<number>|undefined} The resolutions of the view.
     * @api
     */
    getResolutions() {
      return this.resolutions_;
    }
    /**
     * Get the resolution for a provided extent (in map units) and size (in pixels).
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {import("./size.js").Size} [size] Box pixel size.
     * @return {number} The resolution at which the provided extent will render at
     *     the given size.
     * @api
     */
    getResolutionForExtent(t, e) {
      return this.getResolutionForExtentInternal(
        ve(t, this.getProjection()),
        e
      );
    }
    /**
     * Get the resolution for a provided extent (in map units) and size (in pixels).
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {import("./size.js").Size} [size] Box pixel size.
     * @return {number} The resolution at which the provided extent will render at
     *     the given size.
     */
    getResolutionForExtentInternal(t, e) {
      e = e || this.getViewportSizeMinusPadding_();
      const i = J(t) / e[0], s = yt(t) / e[1];
      return Math.max(i, s);
    }
    /**
     * Return a function that returns a value between 0 and 1 for a
     * resolution. Exponential scaling is assumed.
     * @param {number} [power] Power.
     * @return {function(number): number} Resolution for value function.
     */
    getResolutionForValueFunction(t) {
      t = t || 2;
      const e = this.getConstrainedResolution(this.maxResolution_), i = this.minResolution_, s = Math.log(e / i) / Math.log(t);
      return (
        /**
         * @param {number} value Value.
         * @return {number} Resolution.
         */
        function(r) {
          return e / Math.pow(t, r * s);
        }
      );
    }
    /**
     * Get the view rotation.
     * @return {number} The rotation of the view in radians.
     * @observable
     * @api
     */
    getRotation() {
      return (
        /** @type {number} */
        this.get(Yt.ROTATION)
      );
    }
    /**
     * Return a function that returns a resolution for a value between
     * 0 and 1. Exponential scaling is assumed.
     * @param {number} [power] Power.
     * @return {function(number): number} Value for resolution function.
     */
    getValueForResolutionFunction(t) {
      const e = Math.log(t || 2), i = this.getConstrainedResolution(this.maxResolution_), s = this.minResolution_, r = Math.log(i / s) / e;
      return (
        /**
         * @param {number} resolution Resolution.
         * @return {number} Value.
         */
        function(o) {
          return Math.log(i / o) / e / r;
        }
      );
    }
    /**
     * Returns the size of the viewport minus padding.
     * @private
     * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
     * @return {import("./size.js").Size} Viewport size reduced by the padding.
     */
    getViewportSizeMinusPadding_(t) {
      let e = this.getViewportSize_(t);
      const i = this.padding_;
      return i && (e = [
        e[0] - i[1] - i[3],
        e[1] - i[0] - i[2]
      ]), e;
    }
    /**
     * @return {State} View state.
     */
    getState() {
      const t = this.getProjection(), e = this.getResolution(), i = this.getRotation();
      let s = (
        /** @type {import("./coordinate.js").Coordinate} */
        this.getCenterInternal()
      );
      const r = this.padding_;
      if (r) {
        const o = this.getViewportSizeMinusPadding_();
        s = Er(
          s,
          this.getViewportSize_(),
          [o[0] / 2 + r[3], o[1] / 2 + r[0]],
          e,
          i
        );
      }
      return {
        center: s.slice(0),
        projection: t !== void 0 ? t : null,
        resolution: e,
        nextCenter: this.nextCenter_,
        nextResolution: this.nextResolution_,
        nextRotation: this.nextRotation_,
        rotation: i,
        zoom: this.getZoom()
      };
    }
    /**
     * @return {ViewStateLayerStateExtent} Like `FrameState`, but just `viewState` and `extent`.
     */
    getViewStateAndExtent() {
      return {
        viewState: this.getState(),
        extent: this.calculateExtent()
      };
    }
    /**
     * Get the current zoom level. This method may return non-integer zoom levels
     * if the view does not constrain the resolution, or if an interaction or
     * animation is underway.
     * @return {number|undefined} Zoom.
     * @api
     */
    getZoom() {
      let t;
      const e = this.getResolution();
      return e !== void 0 && (t = this.getZoomForResolution(e)), t;
    }
    /**
     * Get the zoom level for a resolution.
     * @param {number} resolution The resolution.
     * @return {number|undefined} The zoom level for the provided resolution.
     * @api
     */
    getZoomForResolution(t) {
      let e = this.minZoom_ || 0, i, s;
      if (this.resolutions_) {
        const r = zs(this.resolutions_, t, 1);
        e = r, i = this.resolutions_[r], r == this.resolutions_.length - 1 ? s = 2 : s = i / this.resolutions_[r + 1];
      } else
        i = this.maxResolution_, s = this.zoomFactor_;
      return e + Math.log(i / t) / Math.log(s);
    }
    /**
     * Get the resolution for a zoom level.
     * @param {number} zoom Zoom level.
     * @return {number} The view resolution for the provided zoom level.
     * @api
     */
    getResolutionForZoom(t) {
      var e;
      if ((e = this.resolutions_) != null && e.length) {
        if (this.resolutions_.length === 1)
          return this.resolutions_[0];
        const i = nt(
          Math.floor(t),
          0,
          this.resolutions_.length - 2
        ), s = this.resolutions_[i] / this.resolutions_[i + 1];
        return this.resolutions_[i] / Math.pow(s, nt(t - i, 0, 1));
      }
      return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_);
    }
    /**
     * Fit the given geometry or extent based on the given map size and border.
     * The size is pixel dimensions of the box to fit the extent into.
     * In most cases you will want to use the map size, that is `map.getSize()`.
     * Takes care of the map angle.
     * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
     *     extent to fit the view to.
     * @param {FitOptions} [options] Options.
     * @api
     */
    fit(t, e) {
      let i;
      if (q(
        Array.isArray(t) || typeof /** @type {?} */
        t.getSimplifiedGeometry == "function",
        "Invalid extent or geometry provided as `geometry`"
      ), Array.isArray(t)) {
        q(
          !Yn(t),
          "Cannot fit empty extent provided as `geometry`"
        );
        const s = ve(t, this.getProjection());
        i = fl(s);
      } else if (t.getType() === "Circle") {
        const s = ve(
          t.getExtent(),
          this.getProjection()
        );
        i = fl(s), i.rotate(this.getRotation(), Fe(s));
      } else
        i = t;
      this.fitInternal(i, e);
    }
    /**
     * Calculate rotated extent
     * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
     * @return {import("./extent").Extent} The rotated extent for the geometry.
     */
    rotatedExtentForGeometry(t) {
      const e = this.getRotation(), i = Math.cos(e), s = Math.sin(-e), r = t.getFlatCoordinates(), o = t.getStride();
      let a = 1 / 0, l = 1 / 0, h = -1 / 0, c = -1 / 0;
      for (let u = 0, d = r.length; u < d; u += o) {
        const f = r[u] * i - r[u + 1] * s, g = r[u] * s + r[u + 1] * i;
        a = Math.min(a, f), l = Math.min(l, g), h = Math.max(h, f), c = Math.max(c, g);
      }
      return [a, l, h, c];
    }
    /**
     * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
     * @param {FitOptions} [options] Options.
     */
    fitInternal(t, e) {
      e = e || {};
      let i = e.size;
      i || (i = this.getViewportSizeMinusPadding_());
      const s = e.padding !== void 0 ? e.padding : [0, 0, 0, 0], r = e.nearest !== void 0 ? e.nearest : !1;
      let o;
      e.minResolution !== void 0 ? o = e.minResolution : e.maxZoom !== void 0 ? o = this.getResolutionForZoom(e.maxZoom) : o = 0;
      const a = this.rotatedExtentForGeometry(t);
      let l = this.getResolutionForExtentInternal(a, [
        i[0] - s[1] - s[3],
        i[1] - s[0] - s[2]
      ]);
      l = isNaN(l) ? o : Math.max(l, o), l = this.getConstrainedResolution(l, r ? 0 : 1);
      const h = this.getRotation(), c = Math.sin(h), u = Math.cos(h), d = Fe(a);
      d[0] += (s[1] - s[3]) / 2 * l, d[1] += (s[0] - s[2]) / 2 * l;
      const f = d[0] * u - d[1] * c, g = d[1] * u + d[0] * c, p = this.getConstrainedCenter([f, g], l), _ = e.callback ? e.callback : Oi;
      e.duration !== void 0 ? this.animateInternal(
        {
          resolution: l,
          center: p,
          duration: e.duration,
          easing: e.easing
        },
        _
      ) : (this.targetResolution_ = l, this.targetCenter_ = p, this.applyTargetState_(!1, !0), es(_, !0));
    }
    /**
     * Center on coordinate and view position.
     * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("./size.js").Size} size Box pixel size.
     * @param {import("./pixel.js").Pixel} position Position on the view to center on.
     * @api
     */
    centerOn(t, e, i) {
      this.centerOnInternal(
        oe(t, this.getProjection()),
        e,
        i
      );
    }
    /**
     * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("./size.js").Size} size Box pixel size.
     * @param {import("./pixel.js").Pixel} position Position on the view to center on.
     */
    centerOnInternal(t, e, i) {
      this.setCenterInternal(
        Er(
          t,
          e,
          i,
          this.getResolution(),
          this.getRotation()
        )
      );
    }
    /**
     * Calculates the shift between map and viewport center.
     * @param {import("./coordinate.js").Coordinate} center Center.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {import("./size.js").Size} size Size.
     * @return {Array<number>|undefined} Center shift.
     */
    calculateCenterShift(t, e, i, s) {
      let r;
      const o = this.padding_;
      if (o && t) {
        const a = this.getViewportSizeMinusPadding_(-i), l = Er(
          t,
          s,
          [a[0] / 2 + o[3], a[1] / 2 + o[0]],
          e,
          i
        );
        r = [
          t[0] - l[0],
          t[1] - l[1]
        ];
      }
      return r;
    }
    /**
     * @return {boolean} Is defined.
     */
    isDef() {
      return !!this.getCenterInternal() && this.getResolution() !== void 0;
    }
    /**
     * Adds relative coordinates to the center of the view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
     * @api
     */
    adjustCenter(t) {
      const e = ar(this.targetCenter_, this.getProjection());
      this.setCenter([
        e[0] + t[0],
        e[1] + t[1]
      ]);
    }
    /**
     * Adds relative coordinates to the center of the view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
     */
    adjustCenterInternal(t) {
      const e = this.targetCenter_;
      this.setCenterInternal([
        e[0] + t[0],
        e[1] + t[1]
      ]);
    }
    /**
     * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} ratio The ratio to apply on the view resolution.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     * @api
     */
    adjustResolution(t, e) {
      e = e && oe(e, this.getProjection()), this.adjustResolutionInternal(t, e);
    }
    /**
     * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} ratio The ratio to apply on the view resolution.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     */
    adjustResolutionInternal(t, e) {
      const i = this.getAnimating() || this.getInteracting(), s = this.getViewportSize_(this.getRotation()), r = this.constraints_.resolution(
        this.targetResolution_ * t,
        0,
        s,
        i
      );
      e && (this.targetCenter_ = this.calculateCenterZoom(r, e)), this.targetResolution_ *= t, this.applyTargetState_();
    }
    /**
     * Adds a value to the view zoom level, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} delta Relative value to add to the zoom level.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     * @api
     */
    adjustZoom(t, e) {
      this.adjustResolution(Math.pow(this.zoomFactor_, -t), e);
    }
    /**
     * Adds a value to the view rotation, optionally using an anchor. Any rotation
     * constraint will apply.
     * @param {number} delta Relative value to add to the zoom rotation, in radians.
     * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
     * @api
     */
    adjustRotation(t, e) {
      e && (e = oe(e, this.getProjection())), this.adjustRotationInternal(t, e);
    }
    /**
     * @param {number} delta Relative value to add to the zoom rotation, in radians.
     * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
     */
    adjustRotationInternal(t, e) {
      const i = this.getAnimating() || this.getInteracting(), s = this.constraints_.rotation(
        this.targetRotation_ + t,
        i
      );
      e && (this.targetCenter_ = this.calculateCenterRotate(s, e)), this.targetRotation_ += t, this.applyTargetState_();
    }
    /**
     * Set the center of the current view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
     * @observable
     * @api
     */
    setCenter(t) {
      this.setCenterInternal(
        t && oe(t, this.getProjection())
      );
    }
    /**
     * Set the center using the view projection (not the user projection).
     * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
     */
    setCenterInternal(t) {
      this.targetCenter_ = t, this.applyTargetState_();
    }
    /**
     * @param {import("./ViewHint.js").default} hint Hint.
     * @param {number} delta Delta.
     * @return {number} New value.
     */
    setHint(t, e) {
      return this.hints_[t] += e, this.changed(), this.hints_[t];
    }
    /**
     * Set the resolution for this view. Any resolution constraint will apply.
     * @param {number|undefined} resolution The resolution of the view.
     * @observable
     * @api
     */
    setResolution(t) {
      this.targetResolution_ = t, this.applyTargetState_();
    }
    /**
     * Set the rotation for this view. Any rotation constraint will apply.
     * @param {number} rotation The rotation of the view in radians.
     * @observable
     * @api
     */
    setRotation(t) {
      this.targetRotation_ = t, this.applyTargetState_();
    }
    /**
     * Zoom to a specific zoom level. Any resolution constrain will apply.
     * @param {number} zoom Zoom level.
     * @api
     */
    setZoom(t) {
      this.setResolution(this.getResolutionForZoom(t));
    }
    /**
     * Recompute rotation/resolution/center based on target values.
     * Note: we have to compute rotation first, then resolution and center considering that
     * parameters can influence one another in case a view extent constraint is present.
     * @param {boolean} [doNotCancelAnims] Do not cancel animations.
     * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
     * @private
     */
    applyTargetState_(t, e) {
      const i = this.getAnimating() || this.getInteracting() || e, s = this.constraints_.rotation(
        this.targetRotation_,
        i
      ), r = this.getViewportSize_(s), o = this.constraints_.resolution(
        this.targetResolution_,
        0,
        r,
        i
      ), a = this.constraints_.center(
        this.targetCenter_,
        o,
        r,
        i,
        this.calculateCenterShift(
          this.targetCenter_,
          o,
          s,
          r
        )
      );
      this.get(Yt.ROTATION) !== s && this.set(Yt.ROTATION, s), this.get(Yt.RESOLUTION) !== o && (this.set(Yt.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)), (!a || !this.get(Yt.CENTER) || !Bn(this.get(Yt.CENTER), a)) && this.set(Yt.CENTER, a), this.getAnimating() && !t && this.cancelAnimations(), this.cancelAnchor_ = void 0;
    }
    /**
     * If any constraints need to be applied, an animation will be triggered.
     * This is typically done on interaction end.
     * Note: calling this with a duration of 0 will apply the constrained values straight away,
     * without animation.
     * @param {number} [duration] The animation duration in ms.
     * @param {number} [resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     */
    resolveConstraints(t, e, i) {
      t = t !== void 0 ? t : 200;
      const s = e || 0, r = this.constraints_.rotation(this.targetRotation_), o = this.getViewportSize_(r), a = this.constraints_.resolution(
        this.targetResolution_,
        s,
        o
      ), l = this.constraints_.center(
        this.targetCenter_,
        a,
        o,
        !1,
        this.calculateCenterShift(
          this.targetCenter_,
          a,
          r,
          o
        )
      );
      if (t === 0 && !this.cancelAnchor_) {
        this.targetResolution_ = a, this.targetRotation_ = r, this.targetCenter_ = l, this.applyTargetState_();
        return;
      }
      i = i || (t === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, (this.getResolution() !== a || this.getRotation() !== r || !this.getCenterInternal() || !Bn(this.getCenterInternal(), l)) && (this.getAnimating() && this.cancelAnimations(), this.animateInternal({
        rotation: r,
        center: l,
        resolution: a,
        duration: t,
        easing: si,
        anchor: i
      }));
    }
    /**
     * Notify the View that an interaction has started.
     * The view state will be resolved to a stable one if needed
     * (depending on its constraints).
     * @api
     */
    beginInteraction() {
      this.resolveConstraints(0), this.setHint(pt.INTERACTING, 1);
    }
    /**
     * Notify the View that an interaction has ended. The view state will be resolved
     * to a stable one if needed (depending on its constraints).
     * @param {number} [duration] Animation duration in ms.
     * @param {number} [resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     * @api
     */
    endInteraction(t, e, i) {
      i = i && oe(i, this.getProjection()), this.endInteractionInternal(t, e, i);
    }
    /**
     * Notify the View that an interaction has ended. The view state will be resolved
     * to a stable one if needed (depending on its constraints).
     * @param {number} [duration] Animation duration in ms.
     * @param {number} [resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     */
    endInteractionInternal(t, e, i) {
      this.getInteracting() && (this.setHint(pt.INTERACTING, -1), this.resolveConstraints(t, e, i));
    }
    /**
     * Get a valid position for the view center according to the current constraints.
     * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
     * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
     * This is useful to guess a valid center position at a different zoom level.
     * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
     */
    getConstrainedCenter(t, e) {
      const i = this.getViewportSize_(this.getRotation());
      return this.constraints_.center(
        t,
        e || this.getResolution(),
        i
      );
    }
    /**
     * Get a valid zoom level according to the current view constraints.
     * @param {number|undefined} targetZoom Target zoom.
     * @param {number} [direction] Indicate which resolution should be used
     * by a renderer if the view resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     * @return {number|undefined} Valid zoom level.
     */
    getConstrainedZoom(t, e) {
      const i = this.getResolutionForZoom(t);
      return this.getZoomForResolution(
        this.getConstrainedResolution(i, e)
      );
    }
    /**
     * Get a valid resolution according to the current view constraints.
     * @param {number|undefined} targetResolution Target resolution.
     * @param {number} [direction] Indicate which resolution should be used
     * by a renderer if the view resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     * @return {number|undefined} Valid resolution.
     */
    getConstrainedResolution(t, e) {
      e = e || 0;
      const i = this.getViewportSize_(this.getRotation());
      return this.constraints_.resolution(t, e, i);
    }
  }
  function es(n, t) {
    setTimeout(function() {
      n(t);
    }, 0);
  }
  function md(n) {
    if (n.extent !== void 0) {
      const e = n.smoothExtentConstraint !== void 0 ? n.smoothExtentConstraint : !0;
      return ya(n.extent, n.constrainOnlyCenter, e);
    }
    const t = sr(n.projection, "EPSG:3857");
    if (n.multiWorld !== !0 && t.isGlobal()) {
      const e = t.getExtent().slice();
      return e[0] = -1 / 0, e[2] = 1 / 0, ya(e, !1, !1);
    }
    return Zc;
  }
  function pd(n) {
    let t, e, i, o = n.minZoom !== void 0 ? n.minZoom : yr, a = n.maxZoom !== void 0 ? n.maxZoom : 28;
    const l = n.zoomFactor !== void 0 ? n.zoomFactor : 2, h = n.multiWorld !== void 0 ? n.multiWorld : !1, c = n.smoothResolutionConstraint !== void 0 ? n.smoothResolutionConstraint : !0, u = n.showFullExtent !== void 0 ? n.showFullExtent : !1, d = sr(n.projection, "EPSG:3857"), f = d.getExtent();
    let g = n.constrainOnlyCenter, p = n.extent;
    if (!h && !p && d.isGlobal() && (g = !1, p = f), n.resolutions !== void 0) {
      const _ = n.resolutions;
      e = _[o], i = _[a] !== void 0 ? _[a] : _[_.length - 1], n.constrainResolution ? t = cd(
        _,
        c,
        !g && p,
        u
      ) : t = gl(
        e,
        i,
        c,
        !g && p,
        u
      );
    } else {
      const m = (f ? Math.max(J(f), yt(f)) : (
        // use an extent that can fit the whole world if need be
        360 * zi.degrees / d.getMetersPerUnit()
      )) / pr / Math.pow(2, yr), y = m / Math.pow(2, 28 - yr);
      e = n.maxResolution, e !== void 0 ? o = 0 : e = m / Math.pow(l, o), i = n.minResolution, i === void 0 && (n.maxZoom !== void 0 ? n.maxResolution !== void 0 ? i = e / Math.pow(l, a) : i = m / Math.pow(l, a) : i = y), a = o + Math.floor(
        Math.log(e / i) / Math.log(l)
      ), i = e / Math.pow(l, a - o), n.constrainResolution ? t = ud(
        l,
        e,
        i,
        c,
        !g && p,
        u
      ) : t = gl(
        e,
        i,
        c,
        !g && p,
        u
      );
    }
    return {
      constraint: t,
      maxResolution: e,
      minResolution: i,
      minZoom: o,
      zoomFactor: l
    };
  }
  function yd(n) {
    if (n.enableRotation !== void 0 ? n.enableRotation : !0) {
      const e = n.constrainRotation;
      return e === void 0 || e === !0 ? fd() : e === !1 ? _l : typeof e == "number" ? dd(e) : _l;
    }
    return mr;
  }
  function Ed(n) {
    return !(n.sourceCenter && n.targetCenter && !Bn(n.sourceCenter, n.targetCenter) || n.sourceResolution !== n.targetResolution || n.sourceRotation !== n.targetRotation);
  }
  function Er(n, t, e, i, s) {
    const r = Math.cos(-s);
    let o = Math.sin(-s), a = n[0] * r - n[1] * o, l = n[1] * r + n[0] * o;
    a += (t[0] / 2 - e[0]) * i, l += (e[1] - t[1] / 2) * i, o = -o;
    const h = a * r - l * o, c = l * r + a * o;
    return [h, c];
  }
  const Ht = _d, is = "ol-hidden", ns = "ol-unselectable", xr = "ol-control", ml = "ol-collapsed", xd = new RegExp(
    [
      "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
      "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
      "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
      "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
      `?\\s*([-,\\"\\'\\sa-z0-9]+?)\\s*$`
    ].join(""),
    "i"
  ), pl = [
    "style",
    "variant",
    "weight",
    "size",
    "lineHeight",
    "family"
  ], wr = {
    normal: 400,
    bold: 700
  }, Cr = function(n) {
    const t = n.match(xd);
    if (!t)
      return null;
    const e = (
      /** @type {FontParameters} */
      {
        lineHeight: "normal",
        size: "1.2em",
        style: "normal",
        weight: "400",
        variant: "normal"
      }
    );
    for (let i = 0, s = pl.length; i < s; ++i) {
      const r = t[i + 1];
      r !== void 0 && (e[pl[i]] = typeof r == "string" ? r.trim() : r);
    }
    return isNaN(Number(e.weight)) && e.weight in wr && (e.weight = wr[e.weight]), e.families = e.family.split(/,\s?/).map((i) => i.trim().replace(/^['"]|['"]$/g, "")), e;
  };
  function ht(n, t, e, i) {
    let s;
    return e && e.length ? s = /** @type {HTMLCanvasElement} */
    e.shift() : Xs ? s = new OffscreenCanvas(n || 300, t || 300) : s = document.createElement("canvas"), n && (s.width = n), t && (s.height = t), /** @type {CanvasRenderingContext2D} */
    s.getContext("2d", i);
  }
  let vr;
  function ss() {
    return vr || (vr = ht(1, 1)), vr;
  }
  function rs(n) {
    const t = n.canvas;
    t.width = 1, t.height = 1, n.clearRect(0, 0, 1, 1);
  }
  function yl(n, t) {
    const e = t.parentNode;
    e && e.replaceChild(n, t);
  }
  function wd(n) {
    for (; n.lastChild; )
      n.lastChild.remove();
  }
  function Cd(n, t) {
    const e = n.childNodes;
    for (let i = 0; ; ++i) {
      const s = e[i], r = t[i];
      if (!s && !r)
        break;
      if (s !== r) {
        if (!s) {
          n.appendChild(r);
          continue;
        }
        if (!r) {
          n.removeChild(s), --i;
          continue;
        }
        n.insertBefore(r, s);
      }
    }
  }
  class vd extends Vt {
    /**
     * @param {Options} options Control options.
     */
    constructor(t) {
      super();
      const e = t.element;
      e && !t.target && !e.style.pointerEvents && (e.style.pointerEvents = "auto"), this.element = e || null, this.target_ = null, this.map_ = null, this.listenerKeys = [], t.render && (this.render = t.render), t.target && this.setTarget(t.target);
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      var t;
      (t = this.element) == null || t.remove(), super.disposeInternal();
    }
    /**
     * Get the map associated with this control.
     * @return {import("../Map.js").default|null} Map.
     * @api
     */
    getMap() {
      return this.map_;
    }
    /**
     * Remove the control from its current map and attach it to the new map.
     * Pass `null` to just remove the control from the current map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     * @param {import("../Map.js").default|null} map Map.
     * @api
     */
    setMap(t) {
      var e;
      this.map_ && ((e = this.element) == null || e.remove());
      for (let i = 0, s = this.listenerKeys.length; i < s; ++i)
        it(this.listenerKeys[i]);
      if (this.listenerKeys.length = 0, this.map_ = t, t) {
        const i = this.target_ ?? t.getOverlayContainerStopEvent();
        this.element && i.appendChild(this.element), this.render !== Oi && this.listenerKeys.push(
          $(t, xe.POSTRENDER, this.render, this)
        ), t.render();
      }
    }
    /**
     * Renders the control.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @api
     */
    render(t) {
    }
    /**
     * This function is used to set a target element for the control. It has no
     * effect if it is called after the control has been added to the map (i.e.
     * after `setMap` is called on the control). If no `target` is set in the
     * options passed to the control constructor and if `setTarget` is not called
     * then the control is added to the map's overlay container.
     * @param {HTMLElement|string} target Target.
     * @api
     */
    setTarget(t) {
      this.target_ = typeof t == "string" ? document.getElementById(t) : t;
    }
  }
  const Rr = vd;
  class Rd extends Rr {
    /**
     * @param {Options} [options] Attribution options.
     */
    constructor(t) {
      t = t || {}, super({
        element: document.createElement("div"),
        render: t.render,
        target: t.target
      }), this.ulElement_ = document.createElement("ul"), this.collapsed_ = t.collapsed !== void 0 ? t.collapsed : !0, this.userCollapsed_ = this.collapsed_, this.overrideCollapsible_ = t.collapsible !== void 0, this.collapsible_ = t.collapsible !== void 0 ? t.collapsible : !0, this.collapsible_ || (this.collapsed_ = !1), this.attributions_ = t.attributions;
      const e = t.className !== void 0 ? t.className : "ol-attribution", i = t.tipLabel !== void 0 ? t.tipLabel : "Attributions", s = t.expandClassName !== void 0 ? t.expandClassName : e + "-expand", r = t.collapseLabel !== void 0 ? t.collapseLabel : "›", o = t.collapseClassName !== void 0 ? t.collapseClassName : e + "-collapse";
      typeof r == "string" ? (this.collapseLabel_ = document.createElement("span"), this.collapseLabel_.textContent = r, this.collapseLabel_.className = o) : this.collapseLabel_ = r;
      const a = t.label !== void 0 ? t.label : "i";
      typeof a == "string" ? (this.label_ = document.createElement("span"), this.label_.textContent = a, this.label_.className = s) : this.label_ = a;
      const l = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
      this.toggleButton_ = document.createElement("button"), this.toggleButton_.setAttribute("type", "button"), this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_)), this.toggleButton_.title = i, this.toggleButton_.appendChild(l), this.toggleButton_.addEventListener(
        Y.CLICK,
        this.handleClick_.bind(this),
        !1
      );
      const h = e + " " + ns + " " + xr + (this.collapsed_ && this.collapsible_ ? " " + ml : "") + (this.collapsible_ ? "" : " ol-uncollapsible"), c = this.element;
      c.className = h, c.appendChild(this.toggleButton_), c.appendChild(this.ulElement_), this.renderedAttributions_ = [], this.renderedVisible_ = !0;
    }
    /**
     * Collect a list of visible attributions and set the collapsible state.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @return {Array<string>} Attributions.
     * @private
     */
    collectSourceAttributions_(t) {
      const e = this.getMap().getAllLayers(), i = new Set(
        e.flatMap((s) => s.getAttributions(t))
      );
      if (this.attributions_ !== void 0 && (Array.isArray(this.attributions_) ? this.attributions_.forEach((s) => i.add(s)) : i.add(this.attributions_)), !this.overrideCollapsible_) {
        const s = !e.some(
          (r) => {
            var o;
            return ((o = r.getSource()) == null ? void 0 : o.getAttributionsCollapsible()) === !1;
          }
        );
        this.setCollapsible(s);
      }
      return Array.from(i);
    }
    /**
     * @private
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     */
    async updateElement_(t) {
      if (!t) {
        this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1);
        return;
      }
      const e = await Promise.all(
        this.collectSourceAttributions_(t).map(
          (s) => Sc(() => s)
        )
      ), i = e.length > 0;
      if (this.renderedVisible_ != i && (this.element.style.display = i ? "" : "none", this.renderedVisible_ = i), !ye(e, this.renderedAttributions_)) {
        wd(this.ulElement_);
        for (let s = 0, r = e.length; s < r; ++s) {
          const o = document.createElement("li");
          o.innerHTML = e[s], this.ulElement_.appendChild(o);
        }
        this.renderedAttributions_ = e;
      }
    }
    /**
     * @param {MouseEvent} event The event to handle
     * @private
     */
    handleClick_(t) {
      t.preventDefault(), this.handleToggle_(), this.userCollapsed_ = this.collapsed_;
    }
    /**
     * @private
     */
    handleToggle_() {
      this.element.classList.toggle(ml), this.collapsed_ ? yl(this.collapseLabel_, this.label_) : yl(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_, this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
    }
    /**
     * Return `true` if the attribution is collapsible, `false` otherwise.
     * @return {boolean} True if the widget is collapsible.
     * @api
     */
    getCollapsible() {
      return this.collapsible_;
    }
    /**
     * Set whether the attribution should be collapsible.
     * @param {boolean} collapsible True if the widget is collapsible.
     * @api
     */
    setCollapsible(t) {
      this.collapsible_ !== t && (this.collapsible_ = t, this.element.classList.toggle("ol-uncollapsible"), this.userCollapsed_ && this.handleToggle_());
    }
    /**
     * Collapse or expand the attribution according to the passed parameter. Will
     * not do anything if the attribution isn't collapsible or if the current
     * collapsed state is already the one requested.
     * @param {boolean} collapsed True if the widget is collapsed.
     * @api
     */
    setCollapsed(t) {
      this.userCollapsed_ = t, !(!this.collapsible_ || this.collapsed_ === t) && this.handleToggle_();
    }
    /**
     * Return `true` when the attribution is currently collapsed or `false`
     * otherwise.
     * @return {boolean} True if the widget is collapsed.
     * @api
     */
    getCollapsed() {
      return this.collapsed_;
    }
    /**
     * Update the attribution element.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @override
     */
    render(t) {
      this.updateElement_(t.frameState);
    }
  }
  const Td = Rd;
  class Sd extends Rr {
    /**
     * @param {Options} [options] Rotate options.
     */
    constructor(t) {
      t = t || {}, super({
        element: document.createElement("div"),
        render: t.render,
        target: t.target
      });
      const e = t.className !== void 0 ? t.className : "ol-rotate", i = t.label !== void 0 ? t.label : "⇧", s = t.compassClassName !== void 0 ? t.compassClassName : "ol-compass";
      this.label_ = null, typeof i == "string" ? (this.label_ = document.createElement("span"), this.label_.className = s, this.label_.textContent = i) : (this.label_ = i, this.label_.classList.add(s));
      const r = t.tipLabel ? t.tipLabel : "Reset rotation", o = document.createElement("button");
      o.className = e + "-reset", o.setAttribute("type", "button"), o.title = r, o.appendChild(this.label_), o.addEventListener(
        Y.CLICK,
        this.handleClick_.bind(this),
        !1
      );
      const a = e + " " + ns + " " + xr, l = this.element;
      l.className = a, l.appendChild(o), this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0, this.duration_ = t.duration !== void 0 ? t.duration : 250, this.autoHide_ = t.autoHide !== void 0 ? t.autoHide : !0, this.rotation_ = void 0, this.autoHide_ && this.element.classList.add(is);
    }
    /**
     * @param {MouseEvent} event The event to handle
     * @private
     */
    handleClick_(t) {
      t.preventDefault(), this.callResetNorth_ !== void 0 ? this.callResetNorth_() : this.resetNorth_();
    }
    /**
     * @private
     */
    resetNorth_() {
      const e = this.getMap().getView();
      if (!e)
        return;
      const i = e.getRotation();
      i !== void 0 && (this.duration_ > 0 && i % (2 * Math.PI) !== 0 ? e.animate({
        rotation: 0,
        duration: this.duration_,
        easing: si
      }) : e.setRotation(0));
    }
    /**
     * Update the rotate control element.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @override
     */
    render(t) {
      const e = t.frameState;
      if (!e)
        return;
      const i = e.viewState.rotation;
      if (i != this.rotation_) {
        const s = "rotate(" + i + "rad)";
        if (this.autoHide_) {
          const r = this.element.classList.contains(is);
          !r && i === 0 ? this.element.classList.add(is) : r && i !== 0 && this.element.classList.remove(is);
        }
        this.label_.style.transform = s;
      }
      this.rotation_ = i;
    }
  }
  const Id = Sd;
  class Ld extends Rr {
    /**
     * @param {Options} [options] Zoom options.
     */
    constructor(t) {
      t = t || {}, super({
        element: document.createElement("div"),
        target: t.target
      });
      const e = t.className !== void 0 ? t.className : "ol-zoom", i = t.delta !== void 0 ? t.delta : 1, s = t.zoomInClassName !== void 0 ? t.zoomInClassName : e + "-in", r = t.zoomOutClassName !== void 0 ? t.zoomOutClassName : e + "-out", o = t.zoomInLabel !== void 0 ? t.zoomInLabel : "+", a = t.zoomOutLabel !== void 0 ? t.zoomOutLabel : "–", l = t.zoomInTipLabel !== void 0 ? t.zoomInTipLabel : "Zoom in", h = t.zoomOutTipLabel !== void 0 ? t.zoomOutTipLabel : "Zoom out", c = document.createElement("button");
      c.className = s, c.setAttribute("type", "button"), c.title = l, c.appendChild(
        typeof o == "string" ? document.createTextNode(o) : o
      ), c.addEventListener(
        Y.CLICK,
        this.handleClick_.bind(this, i),
        !1
      );
      const u = document.createElement("button");
      u.className = r, u.setAttribute("type", "button"), u.title = h, u.appendChild(
        typeof a == "string" ? document.createTextNode(a) : a
      ), u.addEventListener(
        Y.CLICK,
        this.handleClick_.bind(this, -i),
        !1
      );
      const d = e + " " + ns + " " + xr, f = this.element;
      f.className = d, f.appendChild(c), f.appendChild(u), this.duration_ = t.duration !== void 0 ? t.duration : 250;
    }
    /**
     * @param {number} delta Zoom delta.
     * @param {MouseEvent} event The event to handle
     * @private
     */
    handleClick_(t, e) {
      e.preventDefault(), this.zoomByDelta_(t);
    }
    /**
     * @param {number} delta Zoom delta.
     * @private
     */
    zoomByDelta_(t) {
      const i = this.getMap().getView();
      if (!i)
        return;
      const s = i.getZoom();
      if (s !== void 0) {
        const r = i.getConstrainedZoom(s + t);
        this.duration_ > 0 ? (i.getAnimating() && i.cancelAnimations(), i.animate({
          zoom: r,
          duration: this.duration_,
          easing: si
        })) : i.setZoom(r);
      }
    }
  }
  const El = Ld;
  function xl(n) {
    n = n || {};
    const t = new jt();
    return (n.zoom !== void 0 ? n.zoom : !0) && t.push(new El(n.zoomOptions)), (n.rotate !== void 0 ? n.rotate : !0) && t.push(new Id(n.rotateOptions)), (n.attribution !== void 0 ? n.attribution : !0) && t.push(new Td(n.attributionOptions)), t;
  }
  class Ad {
    /**
     * @param {number} decay Rate of decay (must be negative).
     * @param {number} minVelocity Minimum velocity (pixels/millisecond).
     * @param {number} delay Delay to consider to calculate the kinetic
     *     initial values (milliseconds).
     */
    constructor(t, e, i) {
      this.decay_ = t, this.minVelocity_ = e, this.delay_ = i, this.points_ = [], this.angle_ = 0, this.initialVelocity_ = 0;
    }
    /**
     * FIXME empty description for jsdoc
     */
    begin() {
      this.points_.length = 0, this.angle_ = 0, this.initialVelocity_ = 0;
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     */
    update(t, e) {
      this.points_.push(t, e, Date.now());
    }
    /**
     * @return {boolean} Whether we should do kinetic animation.
     */
    end() {
      if (this.points_.length < 6)
        return !1;
      const t = Date.now() - this.delay_, e = this.points_.length - 3;
      if (this.points_[e + 2] < t)
        return !1;
      let i = e - 3;
      for (; i > 0 && this.points_[i + 2] > t; )
        i -= 3;
      const s = this.points_[e + 2] - this.points_[i + 2];
      if (s < 1e3 / 60)
        return !1;
      const r = this.points_[e] - this.points_[i], o = this.points_[e + 1] - this.points_[i + 1];
      return this.angle_ = Math.atan2(o, r), this.initialVelocity_ = Math.sqrt(r * r + o * o) / s, this.initialVelocity_ > this.minVelocity_;
    }
    /**
     * @return {number} Total distance travelled (pixels).
     */
    getDistance() {
      return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
    }
    /**
     * @return {number} Angle of the kinetic panning animation (radians).
     */
    getAngle() {
      return this.angle_;
    }
  }
  const bd = Ad, wl = {
    ACTIVE: "active"
  };
  class Md extends Vt {
    /**
     * @param {InteractionOptions} [options] Options.
     */
    constructor(t) {
      super(), this.on, this.once, this.un, t && t.handleEvent && (this.handleEvent = t.handleEvent), this.map_ = null, this.setActive(!0);
    }
    /**
     * Return whether the interaction is currently active.
     * @return {boolean} `true` if the interaction is active, `false` otherwise.
     * @observable
     * @api
     */
    getActive() {
      return (
        /** @type {boolean} */
        this.get(wl.ACTIVE)
      );
    }
    /**
     * Get the map associated with this interaction.
     * @return {import("../Map.js").default|null} Map.
     * @api
     */
    getMap() {
      return this.map_;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @api
     */
    handleEvent(t) {
      return !0;
    }
    /**
     * Activate or deactivate the interaction.
     * @param {boolean} active Active.
     * @observable
     * @api
     */
    setActive(t) {
      this.set(wl.ACTIVE, t);
    }
    /**
     * Remove the interaction from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     * @param {import("../Map.js").default|null} map Map.
     */
    setMap(t) {
      this.map_ = t;
    }
  }
  function Pd(n, t, e) {
    const i = n.getCenterInternal();
    if (i) {
      const s = [i[0] + t[0], i[1] + t[1]];
      n.animateInternal({
        duration: e !== void 0 ? e : 250,
        easing: iu,
        center: n.getConstrainedCenter(s)
      });
    }
  }
  function Tr(n, t, e, i) {
    const s = n.getZoom();
    if (s === void 0)
      return;
    const r = n.getConstrainedZoom(s + t), o = n.getResolutionForZoom(r);
    n.getAnimating() && n.cancelAnimations(), n.animate({
      resolution: o,
      anchor: e,
      duration: i !== void 0 ? i : 250,
      easing: si
    });
  }
  const Bi = Md;
  class Dd extends Bi {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      super(), t = t || {}, this.delta_ = t.delta ? t.delta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 250;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a
     * doubleclick) and eventually zooms the map.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(t) {
      let e = !1;
      if (t.type == st.DBLCLICK) {
        const i = (
          /** @type {MouseEvent} */
          t.originalEvent
        ), s = t.map, r = t.coordinate, o = i.shiftKey ? -this.delta_ : this.delta_, a = s.getView();
        Tr(a, o, r, this.duration_), i.preventDefault(), e = !0;
      }
      return !e;
    }
  }
  const Od = Dd;
  function Sr(n) {
    const t = arguments;
    return function(e) {
      let i = !0;
      for (let s = 0, r = t.length; s < r && (i = i && t[s](e), !!i); ++s)
        ;
      return i;
    };
  }
  const Fd = function(n) {
    const t = n.originalEvent;
    return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
  }, kd = function(n) {
    const t = n.map.getTargetElement(), e = t.getRootNode(), i = n.map.getOwnerDocument().activeElement;
    return e instanceof ShadowRoot ? e.host.contains(i) : t.contains(i);
  }, Cl = function(n) {
    const t = n.map.getTargetElement(), e = t.getRootNode();
    return (e instanceof ShadowRoot ? e.host : t).hasAttribute("tabindex") ? kd(n) : !0;
  }, Nd = Di, vl = function(n) {
    const t = n.originalEvent;
    return "pointerId" in t && t.button == 0 && !(Fc && ga && t.ctrlKey);
  }, Rl = function(n) {
    const t = (
      /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
      n.originalEvent
    );
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey;
  }, Gd = function(n) {
    const t = n.originalEvent;
    return ga ? t.metaKey : t.ctrlKey;
  }, zd = function(n) {
    const t = n.originalEvent;
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
  }, Tl = function(n) {
    const t = n.originalEvent, e = (
      /** @type {Element} */
      t.target.tagName
    );
    return e !== "INPUT" && e !== "SELECT" && e !== "TEXTAREA" && // `isContentEditable` is only available on `HTMLElement`, but it may also be a
    // different type like `SVGElement`.
    // @ts-ignore
    !t.target.isContentEditable;
  }, Ir = function(n) {
    const t = n.originalEvent;
    return "pointerId" in t && t.pointerType == "mouse";
  }, Wd = function(n) {
    const t = n.originalEvent;
    return "pointerId" in t && t.isPrimary && t.button === 0;
  };
  class Xd extends Bi {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      t = t || {}, super(
        /** @type {import("./Interaction.js").InteractionOptions} */
        t
      ), t.handleDownEvent && (this.handleDownEvent = t.handleDownEvent), t.handleDragEvent && (this.handleDragEvent = t.handleDragEvent), t.handleMoveEvent && (this.handleMoveEvent = t.handleMoveEvent), t.handleUpEvent && (this.handleUpEvent = t.handleUpEvent), t.stopDown && (this.stopDown = t.stopDown), this.handlingDownUpSequence = !1, this.targetPointers = [];
    }
    /**
     * Returns the current number of pointers involved in the interaction,
     * e.g. `2` when two fingers are used.
     * @return {number} The number of pointers.
     * @api
     */
    getPointerCount() {
      return this.targetPointers.length;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @protected
     */
    handleDownEvent(t) {
      return !1;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @protected
     */
    handleDragEvent(t) {
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into
     * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
     * detected.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @api
     * @override
     */
    handleEvent(t) {
      if (!t.originalEvent)
        return !0;
      let e = !1;
      if (this.updateTrackedPointers_(t), this.handlingDownUpSequence) {
        if (t.type == st.POINTERDRAG)
          this.handleDragEvent(t), t.originalEvent.preventDefault();
        else if (t.type == st.POINTERUP) {
          const i = this.handleUpEvent(t);
          this.handlingDownUpSequence = i && this.targetPointers.length > 0;
        }
      } else if (t.type == st.POINTERDOWN) {
        const i = this.handleDownEvent(t);
        this.handlingDownUpSequence = i, e = this.stopDown(i);
      } else
        t.type == st.POINTERMOVE && this.handleMoveEvent(t);
      return !e;
    }
    /**
     * Handle pointer move events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @protected
     */
    handleMoveEvent(t) {
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @protected
     */
    handleUpEvent(t) {
      return !1;
    }
    /**
     * This function is used to determine if "down" events should be propagated
     * to other interactions or should be stopped.
     * @param {boolean} handled Was the event handled by the interaction?
     * @return {boolean} Should the `down` event be stopped?
     */
    stopDown(t) {
      return t;
    }
    /**
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @private
     */
    updateTrackedPointers_(t) {
      t.activePointers && (this.targetPointers = t.activePointers);
    }
  }
  function Lr(n) {
    const t = n.length;
    let e = 0, i = 0;
    for (let s = 0; s < t; s++)
      e += n[s].clientX, i += n[s].clientY;
    return { clientX: e / t, clientY: i / t };
  }
  const Ui = Xd;
  class Yd extends Ui {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      super({
        stopDown: An
      }), t = t || {}, this.kinetic_ = t.kinetic, this.lastCentroid = null, this.lastPointersCount_, this.panning_ = !1;
      const e = t.condition ? t.condition : Sr(Rl, Wd);
      this.condition_ = t.onFocusOnly ? Sr(Cl, e) : e, this.noKinetic_ = !1;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(t) {
      const e = t.map;
      this.panning_ || (this.panning_ = !0, e.getView().beginInteraction());
      const i = this.targetPointers, s = e.getEventPixel(Lr(i));
      if (i.length == this.lastPointersCount_) {
        if (this.kinetic_ && this.kinetic_.update(s[0], s[1]), this.lastCentroid) {
          const r = [
            this.lastCentroid[0] - s[0],
            s[1] - this.lastCentroid[1]
          ], a = t.map.getView();
          Qc(r, a.getResolution()), js(r, a.getRotation()), a.adjustCenterInternal(r);
        }
      } else
        this.kinetic_ && this.kinetic_.begin();
      this.lastCentroid = s, this.lastPointersCount_ = i.length, t.originalEvent.preventDefault();
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(t) {
      const e = t.map, i = e.getView();
      if (this.targetPointers.length === 0) {
        if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
          const s = this.kinetic_.getDistance(), r = this.kinetic_.getAngle(), o = i.getCenterInternal(), a = e.getPixelFromCoordinateInternal(o), l = e.getCoordinateFromPixelInternal([
            a[0] - s * Math.cos(r),
            a[1] - s * Math.sin(r)
          ]);
          i.animateInternal({
            center: i.getConstrainedCenter(l),
            duration: 500,
            easing: si
          });
        }
        return this.panning_ && (this.panning_ = !1, i.endInteraction()), !1;
      }
      return this.kinetic_ && this.kinetic_.begin(), this.lastCentroid = null, !0;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(t) {
      if (this.targetPointers.length > 0 && this.condition_(t)) {
        const i = t.map.getView();
        return this.lastCentroid = null, i.getAnimating() && i.cancelAnimations(), this.kinetic_ && this.kinetic_.begin(), this.noKinetic_ = this.targetPointers.length > 1, !0;
      }
      return !1;
    }
  }
  const Bd = Yd;
  class Ud extends Ui {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      t = t || {}, super({
        stopDown: An
      }), this.condition_ = t.condition ? t.condition : Fd, this.lastAngle_ = void 0, this.duration_ = t.duration !== void 0 ? t.duration : 250;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(t) {
      if (!Ir(t))
        return;
      const e = t.map, i = e.getView();
      if (i.getConstraints().rotation === mr)
        return;
      const s = e.getSize(), r = t.pixel, o = Math.atan2(s[1] / 2 - r[1], r[0] - s[0] / 2);
      if (this.lastAngle_ !== void 0) {
        const a = o - this.lastAngle_;
        i.adjustRotationInternal(-a);
      }
      this.lastAngle_ = o;
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(t) {
      return Ir(t) ? (t.map.getView().endInteraction(this.duration_), !1) : !0;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(t) {
      return Ir(t) && vl(t) && this.condition_(t) ? (t.map.getView().beginInteraction(), this.lastAngle_ = void 0, !0) : !1;
    }
  }
  const Kd = Ud;
  class Zd extends Ln {
    /**
     * @param {string} className CSS class name.
     */
    constructor(t) {
      super(), this.geometry_ = null, this.element_ = document.createElement("div"), this.element_.style.position = "absolute", this.element_.style.pointerEvents = "auto", this.element_.className = "ol-box " + t, this.map_ = null, this.startPixel_ = null, this.endPixel_ = null;
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.setMap(null);
    }
    /**
     * @private
     */
    render_() {
      const t = this.startPixel_, e = this.endPixel_, i = "px", s = this.element_.style;
      s.left = Math.min(t[0], e[0]) + i, s.top = Math.min(t[1], e[1]) + i, s.width = Math.abs(e[0] - t[0]) + i, s.height = Math.abs(e[1] - t[1]) + i;
    }
    /**
     * @param {import("../Map.js").default|null} map Map.
     */
    setMap(t) {
      if (this.map_) {
        this.map_.getOverlayContainer().removeChild(this.element_);
        const e = this.element_.style;
        e.left = "inherit", e.top = "inherit", e.width = "inherit", e.height = "inherit";
      }
      this.map_ = t, this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
    }
    /**
     * @param {import("../pixel.js").Pixel} startPixel Start pixel.
     * @param {import("../pixel.js").Pixel} endPixel End pixel.
     */
    setPixels(t, e) {
      this.startPixel_ = t, this.endPixel_ = e, this.createOrUpdateGeometry(), this.render_();
    }
    /**
     * Creates or updates the cached geometry.
     */
    createOrUpdateGeometry() {
      if (!this.map_)
        return;
      const t = this.startPixel_, e = this.endPixel_, s = [
        t,
        [t[0], e[1]],
        e,
        [e[0], t[1]]
      ].map(
        this.map_.getCoordinateFromPixelInternal,
        this.map_
      );
      s[4] = s[0].slice(), this.geometry_ ? this.geometry_.setCoordinates([s]) : this.geometry_ = new Yi([s]);
    }
    /**
     * @return {import("../geom/Polygon.js").default} Geometry.
     */
    getGeometry() {
      return this.geometry_;
    }
  }
  const $d = Zd, ci = {
    /**
     * Triggered upon drag box start.
     * @event DragBoxEvent#boxstart
     * @api
     */
    BOXSTART: "boxstart",
    /**
     * Triggered on drag when box is active.
     * @event DragBoxEvent#boxdrag
     * @api
     */
    BOXDRAG: "boxdrag",
    /**
     * Triggered upon drag box end.
     * @event DragBoxEvent#boxend
     * @api
     */
    BOXEND: "boxend",
    /**
     * Triggered upon drag box canceled.
     * @event DragBoxEvent#boxcancel
     * @api
     */
    BOXCANCEL: "boxcancel"
  };
  class Ki extends re {
    /**
     * @param {string} type The event type.
     * @param {import("../coordinate.js").Coordinate} coordinate The event coordinate.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Originating event.
     */
    constructor(t, e, i) {
      super(t), this.coordinate = e, this.mapBrowserEvent = i;
    }
  }
  class Vd extends Ui {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      super(), this.on, this.once, this.un, t = t ?? {}, this.box_ = new $d(t.className || "ol-dragbox"), this.minArea_ = t.minArea ?? 64, t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd), this.startPixel_ = null, this.condition_ = t.condition ?? vl, this.boxEndCondition_ = t.boxEndCondition ?? this.defaultBoxEndCondition;
    }
    /**
     * The default condition for determining whether the boxend event
     * should fire.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent The originating MapBrowserEvent
     *     leading to the box end.
     * @param {import("../pixel.js").Pixel} startPixel The starting pixel of the box.
     * @param {import("../pixel.js").Pixel} endPixel The end pixel of the box.
     * @return {boolean} Whether or not the boxend condition should be fired.
     */
    defaultBoxEndCondition(t, e, i) {
      const s = i[0] - e[0], r = i[1] - e[1];
      return s * s + r * r >= this.minArea_;
    }
    /**
     * Returns geometry of last drawn box.
     * @return {import("../geom/Polygon.js").default} Geometry.
     * @api
     */
    getGeometry() {
      return this.box_.getGeometry();
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(t) {
      this.startPixel_ && (this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(
        new Ki(
          ci.BOXDRAG,
          t.coordinate,
          t
        )
      ));
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(t) {
      if (!this.startPixel_)
        return !1;
      const e = this.boxEndCondition_(
        t,
        this.startPixel_,
        t.pixel
      );
      return e && this.onBoxEnd(t), this.dispatchEvent(
        new Ki(
          e ? ci.BOXEND : ci.BOXCANCEL,
          t.coordinate,
          t
        )
      ), this.box_.setMap(null), this.startPixel_ = null, !1;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(t) {
      return this.condition_(t) ? (this.startPixel_ = t.pixel, this.box_.setMap(t.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(
        new Ki(
          ci.BOXSTART,
          t.coordinate,
          t
        )
      ), !0) : !1;
    }
    /**
     * Function to execute just before `onboxend` is fired
     * @param {import("../MapBrowserEvent.js").default} event Event.
     */
    onBoxEnd(t) {
    }
    /**
     * Activate or deactivate the interaction.
     * @param {boolean} active Active.
     * @observable
     * @api
     * @override
     */
    setActive(t) {
      t || (this.box_.setMap(null), this.startPixel_ && (this.dispatchEvent(
        new Ki(ci.BOXCANCEL, this.startPixel_, null)
      ), this.startPixel_ = null)), super.setActive(t);
    }
    /**
     * @param {import("../Map.js").default|null} map Map.
     * @override
     */
    setMap(t) {
      this.getMap() && (this.box_.setMap(null), this.startPixel_ && (this.dispatchEvent(
        new Ki(ci.BOXCANCEL, this.startPixel_, null)
      ), this.startPixel_ = null)), super.setMap(t);
    }
  }
  const jd = Vd;
  class Hd extends jd {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      t = t || {};
      const e = t.condition ? t.condition : zd;
      super({
        condition: e,
        className: t.className || "ol-dragzoom",
        minArea: t.minArea
      }), this.duration_ = t.duration !== void 0 ? t.duration : 200, this.out_ = t.out !== void 0 ? t.out : !1;
    }
    /**
     * Function to execute just before `onboxend` is fired
     * @param {import("../MapBrowserEvent.js").default} event Event.
     * @override
     */
    onBoxEnd(t) {
      const i = (
        /** @type {!import("../View.js").default} */
        this.getMap().getView()
      );
      let s = this.getGeometry();
      if (this.out_) {
        const r = i.rotatedExtentForGeometry(s), o = i.getResolutionForExtentInternal(r), a = i.getResolution() / o;
        s = s.clone(), s.scale(a * a);
      }
      i.fitInternal(s, {
        duration: this.duration_,
        easing: si
      });
    }
  }
  const qd = Hd, Ye = {
    LEFT: "ArrowLeft",
    UP: "ArrowUp",
    RIGHT: "ArrowRight",
    DOWN: "ArrowDown"
  };
  class Jd extends Bi {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      super(), t = t || {}, this.defaultCondition_ = function(e) {
        return Rl(e) && Tl(e);
      }, this.condition_ = t.condition !== void 0 ? t.condition : this.defaultCondition_, this.duration_ = t.duration !== void 0 ? t.duration : 100, this.pixelDelta_ = t.pixelDelta !== void 0 ? t.pixelDelta : 128;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
     * `KeyEvent`, and decides the direction to pan to (if an arrow key was
     * pressed).
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(t) {
      let e = !1;
      if (t.type == Y.KEYDOWN) {
        const i = (
          /** @type {KeyboardEvent} */
          t.originalEvent
        ), s = i.key;
        if (this.condition_(t) && (s == Ye.DOWN || s == Ye.LEFT || s == Ye.RIGHT || s == Ye.UP)) {
          const o = t.map.getView(), a = o.getResolution() * this.pixelDelta_;
          let l = 0, h = 0;
          s == Ye.DOWN ? h = -a : s == Ye.LEFT ? l = -a : s == Ye.RIGHT ? l = a : h = a;
          const c = [l, h];
          js(c, o.getRotation()), Pd(o, c, this.duration_), i.preventDefault(), e = !0;
        }
      }
      return !e;
    }
  }
  const Qd = Jd;
  class tf extends Bi {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      super(), t = t || {}, this.condition_ = t.condition ? t.condition : function(e) {
        return !Gd(e) && Tl(e);
      }, this.delta_ = t.delta ? t.delta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 100;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
     * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
     * key pressed was '+' or '-').
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(t) {
      let e = !1;
      if (t.type == Y.KEYDOWN || t.type == Y.KEYPRESS) {
        const i = (
          /** @type {KeyboardEvent} */
          t.originalEvent
        ), s = i.key;
        if (this.condition_(t) && (s === "+" || s === "-")) {
          const r = t.map, o = s === "+" ? this.delta_ : -this.delta_, a = r.getView();
          Tr(a, o, void 0, this.duration_), i.preventDefault(), e = !0;
        }
      }
      return !e;
    }
  }
  const ef = tf, nf = 40, sf = 300;
  class rf extends Bi {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      t = t || {}, super(
        /** @type {import("./Interaction.js").InteractionOptions} */
        t
      ), this.totalDelta_ = 0, this.lastDelta_ = 0, this.maxDelta_ = t.maxDelta !== void 0 ? t.maxDelta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 250, this.timeout_ = t.timeout !== void 0 ? t.timeout : 80, this.useAnchor_ = t.useAnchor !== void 0 ? t.useAnchor : !0, this.constrainResolution_ = t.constrainResolution !== void 0 ? t.constrainResolution : !1;
      const e = t.condition ? t.condition : Nd;
      this.condition_ = t.onFocusOnly ? Sr(Cl, e) : e, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_, this.mode_ = void 0, this.trackpadEventGap_ = 400, this.trackpadTimeoutId_, this.deltaPerZoom_ = 300;
    }
    /**
     * @private
     */
    endInteraction_() {
      this.trackpadTimeoutId_ = void 0;
      const t = this.getMap();
      if (!t)
        return;
      t.getView().endInteraction(
        void 0,
        this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0,
        this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null
      );
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a mousewheel-event) and eventually
     * zooms the map.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(t) {
      if (!this.condition_(t) || t.type !== Y.WHEEL)
        return !0;
      const i = t.map, s = (
        /** @type {WheelEvent} */
        t.originalEvent
      );
      s.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.pixel);
      let r = s.deltaY;
      switch (s.deltaMode) {
        case WheelEvent.DOM_DELTA_LINE:
          r *= nf;
          break;
        case WheelEvent.DOM_DELTA_PAGE:
          r *= sf;
          break;
      }
      if (r === 0)
        return !1;
      this.lastDelta_ = r;
      const o = Date.now();
      this.startTime_ === void 0 && (this.startTime_ = o), (!this.mode_ || o - this.startTime_ > this.trackpadEventGap_) && (this.mode_ = Math.abs(r) < 4 ? "trackpad" : "wheel");
      const a = i.getView();
      if (this.mode_ === "trackpad" && !(a.getConstrainResolution() || this.constrainResolution_))
        return this.trackpadTimeoutId_ ? clearTimeout(this.trackpadTimeoutId_) : (a.getAnimating() && a.cancelAnimations(), a.beginInteraction()), this.trackpadTimeoutId_ = setTimeout(
          this.endInteraction_.bind(this),
          this.timeout_
        ), a.adjustZoom(
          -r / this.deltaPerZoom_,
          this.lastAnchor_ ? i.getCoordinateFromPixel(this.lastAnchor_) : null
        ), this.startTime_ = o, !1;
      this.totalDelta_ += r;
      const l = Math.max(this.timeout_ - (o - this.startTime_), 0);
      return clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(
        this.handleWheelZoom_.bind(this, i),
        l
      ), !1;
    }
    /**
     * @private
     * @param {import("../Map.js").default} map Map.
     */
    handleWheelZoom_(t) {
      const e = t.getView();
      e.getAnimating() && e.cancelAnimations();
      let i = -nt(
        this.totalDelta_,
        -this.maxDelta_ * this.deltaPerZoom_,
        this.maxDelta_ * this.deltaPerZoom_
      ) / this.deltaPerZoom_;
      (e.getConstrainResolution() || this.constrainResolution_) && (i = i ? i > 0 ? 1 : -1 : 0), Tr(
        e,
        i,
        this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null,
        this.duration_
      ), this.mode_ = void 0, this.totalDelta_ = 0, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_ = void 0;
    }
    /**
     * Enable or disable using the mouse's location as an anchor when zooming
     * @param {boolean} useAnchor true to zoom to the mouse's location, false
     * to zoom to the center of the map
     * @api
     */
    setMouseAnchor(t) {
      this.useAnchor_ = t, t || (this.lastAnchor_ = null);
    }
  }
  const of = rf;
  class af extends Ui {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      t = t || {};
      const e = (
        /** @type {import("./Pointer.js").Options} */
        t
      );
      e.stopDown || (e.stopDown = An), super(e), this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.threshold_ = t.threshold !== void 0 ? t.threshold : 0.3, this.duration_ = t.duration !== void 0 ? t.duration : 250;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(t) {
      let e = 0;
      const i = this.targetPointers[0], s = this.targetPointers[1], r = Math.atan2(
        s.clientY - i.clientY,
        s.clientX - i.clientX
      );
      if (this.lastAngle_ !== void 0) {
        const l = r - this.lastAngle_;
        this.rotationDelta_ += l, !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0), e = l;
      }
      this.lastAngle_ = r;
      const o = t.map, a = o.getView();
      a.getConstraints().rotation !== mr && (this.anchor_ = o.getCoordinateFromPixelInternal(
        o.getEventPixel(Lr(this.targetPointers))
      ), this.rotating_ && (o.render(), a.adjustRotationInternal(e, this.anchor_)));
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(t) {
      return this.targetPointers.length < 2 ? (t.map.getView().endInteraction(this.duration_), !1) : !0;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(t) {
      if (this.targetPointers.length >= 2) {
        const e = t.map;
        return this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.handlingDownUpSequence || e.getView().beginInteraction(), !0;
      }
      return !1;
    }
  }
  const lf = af;
  class hf extends Ui {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      t = t || {};
      const e = (
        /** @type {import("./Pointer.js").Options} */
        t
      );
      e.stopDown || (e.stopDown = An), super(e), this.anchor_ = null, this.duration_ = t.duration !== void 0 ? t.duration : 400, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(t) {
      let e = 1;
      const i = this.targetPointers[0], s = this.targetPointers[1], r = i.clientX - s.clientX, o = i.clientY - s.clientY, a = Math.sqrt(r * r + o * o);
      this.lastDistance_ !== void 0 && (e = this.lastDistance_ / a), this.lastDistance_ = a;
      const l = t.map, h = l.getView();
      e != 1 && (this.lastScaleDelta_ = e), this.anchor_ = l.getCoordinateFromPixelInternal(
        l.getEventPixel(Lr(this.targetPointers))
      ), l.render(), h.adjustResolutionInternal(e, this.anchor_);
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(t) {
      if (this.targetPointers.length < 2) {
        const i = t.map.getView(), s = this.lastScaleDelta_ > 1 ? 1 : -1;
        return i.endInteraction(this.duration_, s), !1;
      }
      return !0;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(t) {
      if (this.targetPointers.length >= 2) {
        const e = t.map;
        return this.anchor_ = null, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1, this.handlingDownUpSequence || e.getView().beginInteraction(), !0;
      }
      return !1;
    }
  }
  const cf = hf;
  function uf(n) {
    n = n || {};
    const t = new jt(), e = new bd(-5e-3, 0.05, 100);
    return (n.altShiftDragRotate !== void 0 ? n.altShiftDragRotate : !0) && t.push(new Kd()), (n.doubleClickZoom !== void 0 ? n.doubleClickZoom : !0) && t.push(
      new Od({
        delta: n.zoomDelta,
        duration: n.zoomDuration
      })
    ), (n.dragPan !== void 0 ? n.dragPan : !0) && t.push(
      new Bd({
        onFocusOnly: n.onFocusOnly,
        kinetic: e
      })
    ), (n.pinchRotate !== void 0 ? n.pinchRotate : !0) && t.push(new lf()), (n.pinchZoom !== void 0 ? n.pinchZoom : !0) && t.push(
      new cf({
        duration: n.zoomDuration
      })
    ), (n.keyboard !== void 0 ? n.keyboard : !0) && (t.push(new Qd()), t.push(
      new ef({
        delta: n.zoomDelta,
        duration: n.zoomDuration
      })
    )), (n.mouseWheelZoom !== void 0 ? n.mouseWheelZoom : !0) && t.push(
      new of({
        onFocusOnly: n.onFocusOnly,
        duration: n.zoomDuration
      })
    ), (n.shiftDragZoom !== void 0 ? n.shiftDragZoom : !0) && t.push(
      new qd({
        duration: n.zoomDuration
      })
    ), t;
  }
  const Q = {
    OPACITY: "opacity",
    VISIBLE: "visible",
    EXTENT: "extent",
    Z_INDEX: "zIndex",
    MAX_RESOLUTION: "maxResolution",
    MIN_RESOLUTION: "minResolution",
    MAX_ZOOM: "maxZoom",
    MIN_ZOOM: "minZoom",
    SOURCE: "source",
    MAP: "map"
  };
  class df extends Vt {
    /**
     * @param {Options} options Layer options.
     */
    constructor(t) {
      super(), this.on, this.once, this.un, this.background_ = t.background;
      const e = Object.assign({}, t);
      typeof t.properties == "object" && (delete e.properties, Object.assign(e, t.properties)), e[Q.OPACITY] = t.opacity !== void 0 ? t.opacity : 1, q(
        typeof e[Q.OPACITY] == "number",
        "Layer opacity must be a number"
      ), e[Q.VISIBLE] = t.visible !== void 0 ? t.visible : !0, e[Q.Z_INDEX] = t.zIndex, e[Q.MAX_RESOLUTION] = t.maxResolution !== void 0 ? t.maxResolution : 1 / 0, e[Q.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0, e[Q.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0, e[Q.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0, this.className_ = e.className !== void 0 ? e.className : "ol-layer", delete e.className, this.setProperties(e), this.state_ = null;
    }
    /**
     * Get the background for this layer.
     * @return {BackgroundColor|false} Layer background.
     */
    getBackground() {
      return this.background_;
    }
    /**
     * @return {string} CSS class name.
     */
    getClassName() {
      return this.className_;
    }
    /**
     * This method is not meant to be called by layers or layer renderers because the state
     * is incorrect if the layer is included in a layer group.
     *
     * @param {boolean} [managed] Layer is managed.
     * @return {import("./Layer.js").State} Layer state.
     */
    getLayerState(t) {
      const e = this.state_ || /** @type {?} */
      {
        layer: this,
        managed: t === void 0 ? !0 : t
      }, i = this.getZIndex();
      return e.opacity = nt(Math.round(this.getOpacity() * 100) / 100, 0, 1), e.visible = this.getVisible(), e.extent = this.getExtent(), e.zIndex = i === void 0 && !e.managed ? 1 / 0 : i, e.maxResolution = this.getMaxResolution(), e.minResolution = Math.max(this.getMinResolution(), 0), e.minZoom = this.getMinZoom(), e.maxZoom = this.getMaxZoom(), this.state_ = e, e;
    }
    /**
     * @abstract
     * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
     *     modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     */
    getLayersArray(t) {
      return V();
    }
    /**
     * @abstract
     * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
     *     states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     */
    getLayerStatesArray(t) {
      return V();
    }
    /**
     * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
     * will be visible regardless of extent.
     * @return {import("../extent.js").Extent|undefined} The layer extent.
     * @observable
     * @api
     */
    getExtent() {
      return (
        /** @type {import("../extent.js").Extent|undefined} */
        this.get(Q.EXTENT)
      );
    }
    /**
     * Return the maximum resolution of the layer. Returns Infinity if
     * the layer has no maximum resolution set.
     * @return {number} The maximum resolution of the layer.
     * @observable
     * @api
     */
    getMaxResolution() {
      return (
        /** @type {number} */
        this.get(Q.MAX_RESOLUTION)
      );
    }
    /**
     * Return the minimum resolution of the layer. Returns 0 if
     * the layer has no minimum resolution set.
     * @return {number} The minimum resolution of the layer.
     * @observable
     * @api
     */
    getMinResolution() {
      return (
        /** @type {number} */
        this.get(Q.MIN_RESOLUTION)
      );
    }
    /**
     * Return the minimum zoom level of the layer. Returns -Infinity if
     * the layer has no minimum zoom set.
     * @return {number} The minimum zoom level of the layer.
     * @observable
     * @api
     */
    getMinZoom() {
      return (
        /** @type {number} */
        this.get(Q.MIN_ZOOM)
      );
    }
    /**
     * Return the maximum zoom level of the layer. Returns Infinity if
     * the layer has no maximum zoom set.
     * @return {number} The maximum zoom level of the layer.
     * @observable
     * @api
     */
    getMaxZoom() {
      return (
        /** @type {number} */
        this.get(Q.MAX_ZOOM)
      );
    }
    /**
     * Return the opacity of the layer (between 0 and 1).
     * @return {number} The opacity of the layer.
     * @observable
     * @api
     */
    getOpacity() {
      return (
        /** @type {number} */
        this.get(Q.OPACITY)
      );
    }
    /**
     * @abstract
     * @return {import("../source/Source.js").State} Source state.
     */
    getSourceState() {
      return V();
    }
    /**
     * Return the value of this layer's `visible` property. To find out whether the layer
     * is visible on a map, use `isVisible()` instead.
     * @return {boolean} The value of the `visible` property of the layer.
     * @observable
     * @api
     */
    getVisible() {
      return (
        /** @type {boolean} */
        this.get(Q.VISIBLE)
      );
    }
    /**
     * Return the Z-index of the layer, which is used to order layers before
     * rendering. Returns undefined if the layer is unmanaged.
     * @return {number|undefined} The Z-index of the layer.
     * @observable
     * @api
     */
    getZIndex() {
      return (
        /** @type {number|undefined} */
        this.get(Q.Z_INDEX)
      );
    }
    /**
     * Sets the background color.
     * @param {BackgroundColor} [background] Background color.
     */
    setBackground(t) {
      this.background_ = t, this.changed();
    }
    /**
     * Set the extent at which the layer is visible.  If `undefined`, the layer
     * will be visible at all extents.
     * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
     * @observable
     * @api
     */
    setExtent(t) {
      this.set(Q.EXTENT, t);
    }
    /**
     * Set the maximum resolution at which the layer is visible.
     * @param {number} maxResolution The maximum resolution of the layer.
     * @observable
     * @api
     */
    setMaxResolution(t) {
      this.set(Q.MAX_RESOLUTION, t);
    }
    /**
     * Set the minimum resolution at which the layer is visible.
     * @param {number} minResolution The minimum resolution of the layer.
     * @observable
     * @api
     */
    setMinResolution(t) {
      this.set(Q.MIN_RESOLUTION, t);
    }
    /**
     * Set the maximum zoom (exclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} maxZoom The maximum zoom of the layer.
     * @observable
     * @api
     */
    setMaxZoom(t) {
      this.set(Q.MAX_ZOOM, t);
    }
    /**
     * Set the minimum zoom (inclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} minZoom The minimum zoom of the layer.
     * @observable
     * @api
     */
    setMinZoom(t) {
      this.set(Q.MIN_ZOOM, t);
    }
    /**
     * Set the opacity of the layer, allowed values range from 0 to 1.
     * @param {number} opacity The opacity of the layer.
     * @observable
     * @api
     */
    setOpacity(t) {
      q(typeof t == "number", "Layer opacity must be a number"), this.set(Q.OPACITY, t);
    }
    /**
     * Set the visibility of the layer (`true` or `false`).
     * @param {boolean} visible The visibility of the layer.
     * @observable
     * @api
     */
    setVisible(t) {
      this.set(Q.VISIBLE, t);
    }
    /**
     * Set Z-index of the layer, which is used to order layers before rendering.
     * The default Z-index is 0.
     * @param {number} zindex The z-index of the layer.
     * @observable
     * @api
     */
    setZIndex(t) {
      this.set(Q.Z_INDEX, t);
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal();
    }
  }
  const Sl = df;
  class Te extends re {
    /**
     * @param {GroupEventType} type The event type.
     * @param {BaseLayer} layer The layer.
     */
    constructor(t, e) {
      super(t), this.layer = e;
    }
  }
  const Ar = {
    LAYERS: "layers"
  };
  class br extends Sl {
    /**
     * @param {Options} [options] Layer options.
     */
    constructor(t) {
      t = t || {};
      const e = (
        /** @type {Options} */
        Object.assign({}, t)
      );
      delete e.layers;
      let i = t.layers;
      super(e), this.on, this.once, this.un, this.layersListenerKeys_ = [], this.listenerKeys_ = {}, this.addChangeListener(Ar.LAYERS, this.handleLayersChanged_), i ? Array.isArray(i) ? i = new jt(i.slice(), { unique: !0 }) : q(
        typeof /** @type {?} */
        i.getArray == "function",
        "Expected `layers` to be an array or a `Collection`"
      ) : i = new jt(void 0, { unique: !0 }), this.setLayers(i);
    }
    /**
     * @private
     */
    handleLayerChange_() {
      this.changed();
    }
    /**
     * @private
     */
    handleLayersChanged_() {
      this.layersListenerKeys_.forEach(it), this.layersListenerKeys_.length = 0;
      const t = this.getLayers();
      this.layersListenerKeys_.push(
        $(t, vt.ADD, this.handleLayersAdd_, this),
        $(
          t,
          vt.REMOVE,
          this.handleLayersRemove_,
          this
        )
      );
      for (const i in this.listenerKeys_)
        this.listenerKeys_[i].forEach(it);
      Fi(this.listenerKeys_);
      const e = t.getArray();
      for (let i = 0, s = e.length; i < s; i++) {
        const r = e[i];
        this.registerLayerListeners_(r), this.dispatchEvent(new Te("addlayer", r));
      }
      this.changed();
    }
    /**
     * @param {BaseLayer} layer The layer.
     */
    registerLayerListeners_(t) {
      const e = [
        $(
          t,
          Qe.PROPERTYCHANGE,
          this.handleLayerChange_,
          this
        ),
        $(t, Y.CHANGE, this.handleLayerChange_, this)
      ];
      t instanceof br && e.push(
        $(t, "addlayer", this.handleLayerGroupAdd_, this),
        $(t, "removelayer", this.handleLayerGroupRemove_, this)
      ), this.listenerKeys_[j(t)] = e;
    }
    /**
     * @param {GroupEvent} event The layer group event.
     */
    handleLayerGroupAdd_(t) {
      this.dispatchEvent(new Te("addlayer", t.layer));
    }
    /**
     * @param {GroupEvent} event The layer group event.
     */
    handleLayerGroupRemove_(t) {
      this.dispatchEvent(new Te("removelayer", t.layer));
    }
    /**
     * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
     * @private
     */
    handleLayersAdd_(t) {
      const e = t.element;
      this.registerLayerListeners_(e), this.dispatchEvent(new Te("addlayer", e)), this.changed();
    }
    /**
     * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
     * @private
     */
    handleLayersRemove_(t) {
      const e = t.element, i = j(e);
      this.listenerKeys_[i].forEach(it), delete this.listenerKeys_[i], this.dispatchEvent(new Te("removelayer", e)), this.changed();
    }
    /**
     * Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     * @return {!Collection<import("./Base.js").default>} Collection of
     *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
     * @observable
     * @api
     */
    getLayers() {
      return (
        /** @type {!Collection<import("./Base.js").default>} */
        this.get(Ar.LAYERS)
      );
    }
    /**
     * Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     * @param {!Collection<import("./Base.js").default>} layers Collection of
     *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
     * @observable
     * @api
     */
    setLayers(t) {
      const e = this.getLayers();
      if (e) {
        const i = e.getArray();
        for (let s = 0, r = i.length; s < r; ++s)
          this.dispatchEvent(new Te("removelayer", i[s]));
      }
      this.set(Ar.LAYERS, t);
    }
    /**
     * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     * @override
     */
    getLayersArray(t) {
      return t = t !== void 0 ? t : [], this.getLayers().forEach(function(e) {
        e.getLayersArray(t);
      }), t;
    }
    /**
     * Get the layer states list and use this groups z-index as the default
     * for all layers in this and nested groups, if it is unset at this point.
     * If dest is not provided and this group's z-index is undefined
     * 0 is used a the default z-index.
     * @param {Array<import("./Layer.js").State>} [dest] Optional list
     * of layer states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     * @override
     */
    getLayerStatesArray(t) {
      const e = t !== void 0 ? t : [], i = e.length;
      this.getLayers().forEach(function(o) {
        o.getLayerStatesArray(e);
      });
      const s = this.getLayerState();
      let r = s.zIndex;
      !t && s.zIndex === void 0 && (r = 0);
      for (let o = i, a = e.length; o < a; o++) {
        const l = e[o];
        l.opacity *= s.opacity, l.visible = l.visible && s.visible, l.maxResolution = Math.min(
          l.maxResolution,
          s.maxResolution
        ), l.minResolution = Math.max(
          l.minResolution,
          s.minResolution
        ), l.minZoom = Math.max(l.minZoom, s.minZoom), l.maxZoom = Math.min(l.maxZoom, s.maxZoom), s.extent !== void 0 && (l.extent !== void 0 ? l.extent = ke(
          l.extent,
          s.extent
        ) : l.extent = s.extent), l.zIndex === void 0 && (l.zIndex = r);
      }
      return e;
    }
    /**
     * @return {import("../source/Source.js").State} Source state.
     * @override
     */
    getSourceState() {
      return "ready";
    }
  }
  const os = br, Ft = {
    /**
     * Triggered before a layer is rendered.
     * @event module:ol/render/Event~RenderEvent#prerender
     * @api
     */
    PRERENDER: "prerender",
    /**
     * Triggered after a layer is rendered.
     * @event module:ol/render/Event~RenderEvent#postrender
     * @api
     */
    POSTRENDER: "postrender",
    /**
     * Triggered before layers are composed.  When dispatched by the map, the event object will not have
     * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
     * WebGL layers currently dispatch this event.
     * @event module:ol/render/Event~RenderEvent#precompose
     * @api
     */
    PRECOMPOSE: "precompose",
    /**
     * Triggered after layers are composed.  When dispatched by the map, the event object will not have
     * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
     * WebGL layers currently dispatch this event.
     * @event module:ol/render/Event~RenderEvent#postcompose
     * @api
     */
    POSTCOMPOSE: "postcompose",
    /**
     * Triggered when rendering is complete, i.e. all sources and tiles have
     * finished loading for the current viewport, and all tiles are faded in.
     * The event object will not have a `context` set.
     * @event module:ol/render/Event~RenderEvent#rendercomplete
     * @api
     */
    RENDERCOMPLETE: "rendercomplete"
  };
  class ff extends Sl {
    /**
     * @param {Options<SourceType>} options Layer options.
     */
    constructor(t) {
      const e = Object.assign({}, t);
      delete e.source, super(e), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, t.render && (this.render = t.render), t.map && this.setMap(t.map), this.addChangeListener(
        Q.SOURCE,
        this.handleSourcePropertyChange_
      );
      const i = t.source ? (
        /** @type {SourceType} */
        t.source
      ) : null;
      this.setSource(i);
    }
    /**
     * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     * @override
     */
    getLayersArray(t) {
      return t = t || [], t.push(this), t;
    }
    /**
     * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     * @override
     */
    getLayerStatesArray(t) {
      return t = t || [], t.push(this.getLayerState()), t;
    }
    /**
     * Get the layer source.
     * @return {SourceType|null} The layer source (or `null` if not yet set).
     * @observable
     * @api
     */
    getSource() {
      return (
        /** @type {SourceType} */
        this.get(Q.SOURCE) || null
      );
    }
    /**
     * @return {SourceType|null} The source being rendered.
     */
    getRenderSource() {
      return this.getSource();
    }
    /**
     * @return {import("../source/Source.js").State} Source state.
     * @override
     */
    getSourceState() {
      const t = this.getSource();
      return t ? t.getState() : "undefined";
    }
    /**
     * @private
     */
    handleSourceChange_() {
      this.changed(), !(this.sourceReady_ || this.getSource().getState() !== "ready") && (this.sourceReady_ = !0, this.dispatchEvent("sourceready"));
    }
    /**
     * @private
     */
    handleSourcePropertyChange_() {
      this.sourceChangeKey_ && (it(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
      const t = this.getSource();
      t && (this.sourceChangeKey_ = $(
        t,
        Y.CHANGE,
        this.handleSourceChange_,
        this
      ), t.getState() === "ready" && (this.sourceReady_ = !0, setTimeout(() => {
        this.dispatchEvent("sourceready");
      }, 0))), this.changed();
    }
    /**
     * @param {import("../pixel").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
     * an array of features.
     */
    getFeatures(t) {
      return this.renderer_ ? this.renderer_.getFeatures(t) : Promise.resolve([]);
    }
    /**
     * @param {import("../pixel").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     */
    getData(t) {
      return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(t);
    }
    /**
     * The layer is visible on the map view, i.e. within its min/max resolution or zoom and
     * extent, not set to `visible: false`, and not inside a layer group that is set
     * to `visible: false`.
     * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
     * Only required when the layer is not added to a map.
     * @return {boolean} The layer is visible in the map view.
     * @api
     */
    isVisible(t) {
      let e;
      const i = this.getMapInternal();
      !t && i && (t = i.getView()), t instanceof Ht ? e = {
        viewState: t.getState(),
        extent: t.calculateExtent()
      } : e = t, !e.layerStatesArray && i && (e.layerStatesArray = i.getLayerGroup().getLayerStatesArray());
      let s;
      if (e.layerStatesArray) {
        if (s = e.layerStatesArray.find(
          (o) => o.layer === this
        ), !s)
          return !1;
      } else
        s = this.getLayerState();
      const r = this.getExtent();
      return Mr(s, e.viewState) && (!r || Rt(r, e.extent));
    }
    /**
     * Get the attributions of the source of this layer for the given view.
     * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
     * Only required when the layer is not added to a map.
     * @return {Array<string>} Attributions for this layer at the given view.
     * @api
     */
    getAttributions(t) {
      var r;
      if (!this.isVisible(t))
        return [];
      const e = (r = this.getSource()) == null ? void 0 : r.getAttributions();
      if (!e)
        return [];
      const i = t instanceof Ht ? t.getViewStateAndExtent() : t;
      let s = e(i);
      return Array.isArray(s) || (s = [s]), s;
    }
    /**
     * In charge to manage the rendering of the layer. One layer type is
     * bounded with one layer renderer.
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target which the renderer may (but need not) use
     * for rendering its content.
     * @return {HTMLElement|null} The rendered element.
     */
    render(t, e) {
      const i = this.getRenderer();
      return i.prepareFrame(t) ? (this.rendered = !0, i.renderFrame(t, e)) : null;
    }
    /**
     * Called when a layer is not visible during a map render.
     */
    unrender() {
      this.rendered = !1;
    }
    /** @return {string} Declutter */
    getDeclutter() {
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {import("../layer/Layer.js").State} layerState Layer state.
     */
    renderDeclutter(t, e) {
    }
    /**
     * When the renderer follows a layout -> render approach, do the final rendering here.
     * @param {import('../Map.js').FrameState} frameState Frame state
     */
    renderDeferred(t) {
      const e = this.getRenderer();
      e && e.renderDeferred(t);
    }
    /**
     * For use inside the library only.
     * @param {import("../Map.js").default|null} map Map.
     */
    setMapInternal(t) {
      t || this.unrender(), this.set(Q.MAP, t);
    }
    /**
     * For use inside the library only.
     * @return {import("../Map.js").default|null} Map.
     */
    getMapInternal() {
      return this.get(Q.MAP);
    }
    /**
     * Sets the layer to be rendered on top of other layers on a map. The map will
     * not manage this layer in its layers collection. This
     * is useful for temporary layers. To remove an unmanaged layer from the map,
     * use `#setMap(null)`.
     *
     * To add the layer to a map and have it managed by the map, use
     * {@link module:ol/Map~Map#addLayer} instead.
     * @param {import("../Map.js").default|null} map Map.
     * @api
     */
    setMap(t) {
      this.mapPrecomposeKey_ && (it(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), t || this.changed(), this.mapRenderKey_ && (it(this.mapRenderKey_), this.mapRenderKey_ = null), t && (this.mapPrecomposeKey_ = $(
        t,
        Ft.PRECOMPOSE,
        this.handlePrecompose_,
        this
      ), this.mapRenderKey_ = $(this, Y.CHANGE, t.render, t), this.changed());
    }
    /**
     * @param {import("../events/Event.js").default} renderEvent Render event
     * @private
     */
    handlePrecompose_(t) {
      const e = (
        /** @type {import("../render/Event.js").default} */
        t.frameState.layerStatesArray
      ), i = this.getLayerState(!1);
      q(
        !e.some(
          (s) => s.layer === i.layer
        ),
        "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."
      ), e.push(i);
    }
    /**
     * Set the layer source.
     * @param {SourceType|null} source The layer source.
     * @observable
     * @api
     */
    setSource(t) {
      this.set(Q.SOURCE, t);
    }
    /**
     * Get the renderer for this layer.
     * @return {RendererType|null} The layer renderer.
     */
    getRenderer() {
      return this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_;
    }
    /**
     * @return {boolean} The layer has a renderer.
     */
    hasRenderer() {
      return !!this.renderer_;
    }
    /**
     * Create a renderer for this layer.
     * @return {RendererType} A layer renderer.
     * @protected
     */
    createRenderer() {
      return null;
    }
    /**
     * This will clear the renderer so that a new one can be created next time it is needed
     */
    clearRenderer() {
      this.renderer_ && (this.renderer_.dispose(), delete this.renderer_);
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.clearRenderer(), this.setSource(null), super.disposeInternal();
    }
  }
  function Mr(n, t) {
    if (!n.visible)
      return !1;
    const e = t.resolution;
    if (e < n.minResolution || e >= n.maxResolution)
      return !1;
    const i = t.zoom;
    return i > n.minZoom && i <= n.maxZoom;
  }
  const as = ff;
  function Il(n, t, e = 0, i = n.length - 1, s = gf) {
    for (; i > e; ) {
      if (i - e > 600) {
        const l = i - e + 1, h = t - e + 1, c = Math.log(l), u = 0.5 * Math.exp(2 * c / 3), d = 0.5 * Math.sqrt(c * u * (l - u) / l) * (h - l / 2 < 0 ? -1 : 1), f = Math.max(e, Math.floor(t - h * u / l + d)), g = Math.min(i, Math.floor(t + (l - h) * u / l + d));
        Il(n, t, f, g, s);
      }
      const r = n[t];
      let o = e, a = i;
      for (Zi(n, e, t), s(n[i], r) > 0 && Zi(n, e, i); o < a; ) {
        for (Zi(n, o, a), o++, a--; s(n[o], r) < 0; )
          o++;
        for (; s(n[a], r) > 0; )
          a--;
      }
      s(n[e], r) === 0 ? Zi(n, e, a) : (a++, Zi(n, a, i)), a <= t && (e = a + 1), t <= a && (i = a - 1);
    }
  }
  function Zi(n, t, e) {
    const i = n[t];
    n[t] = n[e], n[e] = i;
  }
  function gf(n, t) {
    return n < t ? -1 : n > t ? 1 : 0;
  }
  let Ll = class {
    constructor(t = 9) {
      this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
    }
    all() {
      return this._all(this.data, []);
    }
    search(t) {
      let e = this.data;
      const i = [];
      if (!hs(t, e))
        return i;
      const s = this.toBBox, r = [];
      for (; e; ) {
        for (let o = 0; o < e.children.length; o++) {
          const a = e.children[o], l = e.leaf ? s(a) : a;
          hs(t, l) && (e.leaf ? i.push(a) : Dr(t, l) ? this._all(a, i) : r.push(a));
        }
        e = r.pop();
      }
      return i;
    }
    collides(t) {
      let e = this.data;
      if (!hs(t, e))
        return !1;
      const i = [];
      for (; e; ) {
        for (let s = 0; s < e.children.length; s++) {
          const r = e.children[s], o = e.leaf ? this.toBBox(r) : r;
          if (hs(t, o)) {
            if (e.leaf || Dr(t, o))
              return !0;
            i.push(r);
          }
        }
        e = i.pop();
      }
      return !1;
    }
    load(t) {
      if (!(t && t.length))
        return this;
      if (t.length < this._minEntries) {
        for (let i = 0; i < t.length; i++)
          this.insert(t[i]);
        return this;
      }
      let e = this._build(t.slice(), 0, t.length - 1, 0);
      if (!this.data.children.length)
        this.data = e;
      else if (this.data.height === e.height)
        this._splitRoot(this.data, e);
      else {
        if (this.data.height < e.height) {
          const i = this.data;
          this.data = e, e = i;
        }
        this._insert(e, this.data.height - e.height - 1, !0);
      }
      return this;
    }
    insert(t) {
      return t && this._insert(t, this.data.height - 1), this;
    }
    clear() {
      return this.data = di([]), this;
    }
    remove(t, e) {
      if (!t)
        return this;
      let i = this.data;
      const s = this.toBBox(t), r = [], o = [];
      let a, l, h;
      for (; i || r.length; ) {
        if (i || (i = r.pop(), l = r[r.length - 1], a = o.pop(), h = !0), i.leaf) {
          const c = _f(t, i.children, e);
          if (c !== -1)
            return i.children.splice(c, 1), r.push(i), this._condense(r), this;
        }
        !h && !i.leaf && Dr(i, s) ? (r.push(i), o.push(a), a = 0, l = i, i = i.children[0]) : l ? (a++, i = l.children[a], h = !1) : i = null;
      }
      return this;
    }
    toBBox(t) {
      return t;
    }
    compareMinX(t, e) {
      return t.minX - e.minX;
    }
    compareMinY(t, e) {
      return t.minY - e.minY;
    }
    toJSON() {
      return this.data;
    }
    fromJSON(t) {
      return this.data = t, this;
    }
    _all(t, e) {
      const i = [];
      for (; t; )
        t.leaf ? e.push(...t.children) : i.push(...t.children), t = i.pop();
      return e;
    }
    _build(t, e, i, s) {
      const r = i - e + 1;
      let o = this._maxEntries, a;
      if (r <= o)
        return a = di(t.slice(e, i + 1)), ui(a, this.toBBox), a;
      s || (s = Math.ceil(Math.log(r) / Math.log(o)), o = Math.ceil(r / Math.pow(o, s - 1))), a = di([]), a.leaf = !1, a.height = s;
      const l = Math.ceil(r / o), h = l * Math.ceil(Math.sqrt(o));
      Al(t, e, i, h, this.compareMinX);
      for (let c = e; c <= i; c += h) {
        const u = Math.min(c + h - 1, i);
        Al(t, c, u, l, this.compareMinY);
        for (let d = c; d <= u; d += l) {
          const f = Math.min(d + l - 1, u);
          a.children.push(this._build(t, d, f, s - 1));
        }
      }
      return ui(a, this.toBBox), a;
    }
    _chooseSubtree(t, e, i, s) {
      for (; s.push(e), !(e.leaf || s.length - 1 === i); ) {
        let r = 1 / 0, o = 1 / 0, a;
        for (let l = 0; l < e.children.length; l++) {
          const h = e.children[l], c = Pr(h), u = yf(t, h) - c;
          u < o ? (o = u, r = c < r ? c : r, a = h) : u === o && c < r && (r = c, a = h);
        }
        e = a || e.children[0];
      }
      return e;
    }
    _insert(t, e, i) {
      const s = i ? t : this.toBBox(t), r = [], o = this._chooseSubtree(s, this.data, e, r);
      for (o.children.push(t), Vi(o, s); e >= 0 && r[e].children.length > this._maxEntries; )
        this._split(r, e), e--;
      this._adjustParentBBoxes(s, r, e);
    }
    // split overflowed node into two
    _split(t, e) {
      const i = t[e], s = i.children.length, r = this._minEntries;
      this._chooseSplitAxis(i, r, s);
      const o = this._chooseSplitIndex(i, r, s), a = di(i.children.splice(o, i.children.length - o));
      a.height = i.height, a.leaf = i.leaf, ui(i, this.toBBox), ui(a, this.toBBox), e ? t[e - 1].children.push(a) : this._splitRoot(i, a);
    }
    _splitRoot(t, e) {
      this.data = di([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, ui(this.data, this.toBBox);
    }
    _chooseSplitIndex(t, e, i) {
      let s, r = 1 / 0, o = 1 / 0;
      for (let a = e; a <= i - e; a++) {
        const l = $i(t, 0, a, this.toBBox), h = $i(t, a, i, this.toBBox), c = Ef(l, h), u = Pr(l) + Pr(h);
        c < r ? (r = c, s = a, o = u < o ? u : o) : c === r && u < o && (o = u, s = a);
      }
      return s || i - e;
    }
    // sorts node children by the best axis for split
    _chooseSplitAxis(t, e, i) {
      const s = t.leaf ? this.compareMinX : mf, r = t.leaf ? this.compareMinY : pf, o = this._allDistMargin(t, e, i, s), a = this._allDistMargin(t, e, i, r);
      o < a && t.children.sort(s);
    }
    // total margin of all possible split distributions where each node is at least m full
    _allDistMargin(t, e, i, s) {
      t.children.sort(s);
      const r = this.toBBox, o = $i(t, 0, e, r), a = $i(t, i - e, i, r);
      let l = ls(o) + ls(a);
      for (let h = e; h < i - e; h++) {
        const c = t.children[h];
        Vi(o, t.leaf ? r(c) : c), l += ls(o);
      }
      for (let h = i - e - 1; h >= e; h--) {
        const c = t.children[h];
        Vi(a, t.leaf ? r(c) : c), l += ls(a);
      }
      return l;
    }
    _adjustParentBBoxes(t, e, i) {
      for (let s = i; s >= 0; s--)
        Vi(e[s], t);
    }
    _condense(t) {
      for (let e = t.length - 1, i; e >= 0; e--)
        t[e].children.length === 0 ? e > 0 ? (i = t[e - 1].children, i.splice(i.indexOf(t[e]), 1)) : this.clear() : ui(t[e], this.toBBox);
    }
  };
  function _f(n, t, e) {
    if (!e)
      return t.indexOf(n);
    for (let i = 0; i < t.length; i++)
      if (e(n, t[i]))
        return i;
    return -1;
  }
  function ui(n, t) {
    $i(n, 0, n.children.length, t, n);
  }
  function $i(n, t, e, i, s) {
    s || (s = di(null)), s.minX = 1 / 0, s.minY = 1 / 0, s.maxX = -1 / 0, s.maxY = -1 / 0;
    for (let r = t; r < e; r++) {
      const o = n.children[r];
      Vi(s, n.leaf ? i(o) : o);
    }
    return s;
  }
  function Vi(n, t) {
    return n.minX = Math.min(n.minX, t.minX), n.minY = Math.min(n.minY, t.minY), n.maxX = Math.max(n.maxX, t.maxX), n.maxY = Math.max(n.maxY, t.maxY), n;
  }
  function mf(n, t) {
    return n.minX - t.minX;
  }
  function pf(n, t) {
    return n.minY - t.minY;
  }
  function Pr(n) {
    return (n.maxX - n.minX) * (n.maxY - n.minY);
  }
  function ls(n) {
    return n.maxX - n.minX + (n.maxY - n.minY);
  }
  function yf(n, t) {
    return (Math.max(t.maxX, n.maxX) - Math.min(t.minX, n.minX)) * (Math.max(t.maxY, n.maxY) - Math.min(t.minY, n.minY));
  }
  function Ef(n, t) {
    const e = Math.max(n.minX, t.minX), i = Math.max(n.minY, t.minY), s = Math.min(n.maxX, t.maxX), r = Math.min(n.maxY, t.maxY);
    return Math.max(0, s - e) * Math.max(0, r - i);
  }
  function Dr(n, t) {
    return n.minX <= t.minX && n.minY <= t.minY && t.maxX <= n.maxX && t.maxY <= n.maxY;
  }
  function hs(n, t) {
    return t.minX <= n.maxX && t.minY <= n.maxY && t.maxX >= n.minX && t.maxY >= n.minY;
  }
  function di(n) {
    return {
      children: n,
      height: 1,
      leaf: !0,
      minX: 1 / 0,
      minY: 1 / 0,
      maxX: -1 / 0,
      maxY: -1 / 0
    };
  }
  function Al(n, t, e, i, s) {
    const r = [t, e];
    for (; r.length; ) {
      if (e = r.pop(), t = r.pop(), e - t <= i)
        continue;
      const o = t + Math.ceil((e - t) / i / 2) * i;
      Il(n, o, t, e, s), r.push(t, o, o, e);
    }
  }
  const Or = [NaN, NaN, NaN, 0];
  let Fr;
  function xf() {
    return Fr || (Fr = ht(1, 1, void 0, {
      willReadFrequently: !0,
      desynchronized: !0
    })), Fr;
  }
  const wf = /^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i, Cf = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i, vf = /^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i, Rf = /^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;
  function cs(n, t) {
    return n.endsWith("%") ? Number(n.substring(0, n.length - 1)) / t : Number(n);
  }
  function ji(n) {
    throw new Error('failed to parse "' + n + '" as color');
  }
  function bl(n) {
    if (n.toLowerCase().startsWith("rgb")) {
      const r = n.match(Cf) || n.match(wf) || n.match(vf);
      if (r) {
        const o = r[4], a = 100 / 255;
        return [
          nt(cs(r[1], a) + 0.5 | 0, 0, 255),
          nt(cs(r[2], a) + 0.5 | 0, 0, 255),
          nt(cs(r[3], a) + 0.5 | 0, 0, 255),
          o !== void 0 ? nt(cs(o, 100), 0, 1) : 1
        ];
      }
      ji(n);
    }
    if (n.startsWith("#")) {
      if (Rf.test(n)) {
        const r = n.substring(1), o = r.length <= 4 ? 1 : 2, a = [0, 0, 0, 255];
        for (let l = 0, h = r.length; l < h; l += o) {
          let c = parseInt(r.substring(l, l + o), 16);
          o === 1 && (c += c << 4), a[l / o] = c;
        }
        return a[3] = a[3] / 255, a;
      }
      ji(n);
    }
    const t = xf();
    t.fillStyle = "#abcdef";
    let e = t.fillStyle;
    t.fillStyle = n, t.fillStyle === e && (t.fillStyle = "#fedcba", e = t.fillStyle, t.fillStyle = n, t.fillStyle === e && ji(n));
    const i = t.fillStyle;
    if (i.startsWith("#") || i.startsWith("rgba"))
      return bl(i);
    t.clearRect(0, 0, 1, 1), t.fillRect(0, 0, 1, 1);
    const s = Array.from(t.getImageData(0, 0, 1, 1).data);
    return s[3] = Fn(s[3] / 255, 3), s;
  }
  function Tf(n) {
    return typeof n == "string" ? n : Yr(n);
  }
  const Sf = 1024, Hi = {};
  let kr = 0;
  function If(n) {
    if (n.length === 4)
      return n;
    const t = n.slice();
    return t[3] = 1, t;
  }
  function Nr(n) {
    return n > 31308e-7 ? Math.pow(n, 1 / 2.4) * 269.025 - 14.025 : n * 3294.6;
  }
  function Gr(n) {
    return n > 0.2068965 ? Math.pow(n, 3) : (n - 4 / 29) * (108 / 841);
  }
  function zr(n) {
    return n > 10.314724 ? Math.pow((n + 14.025) / 269.025, 2.4) : n / 3294.6;
  }
  function Wr(n) {
    return n > 88564e-7 ? Math.pow(n, 1 / 3) : n / (108 / 841) + 4 / 29;
  }
  function Ml(n) {
    const t = zr(n[0]), e = zr(n[1]), i = zr(n[2]), s = Wr(t * 0.222488403 + e * 0.716873169 + i * 0.06060791), r = 500 * (Wr(t * 0.452247074 + e * 0.399439023 + i * 0.148375274) - s), o = 200 * (s - Wr(t * 0.016863605 + e * 0.117638439 + i * 0.865350722)), a = Math.atan2(o, r) * (180 / Math.PI);
    return [
      116 * s - 16,
      Math.sqrt(r * r + o * o),
      a < 0 ? a + 360 : a,
      n[3]
    ];
  }
  function Lf(n) {
    const t = (n[0] + 16) / 116, e = n[1], i = n[2] * Math.PI / 180, s = Gr(t), r = Gr(t + e / 500 * Math.cos(i)), o = Gr(t - e / 200 * Math.sin(i)), a = Nr(r * 3.021973625 - s * 1.617392459 - o * 0.404875592), l = Nr(r * -0.943766287 + s * 1.916279586 + o * 0.027607165), h = Nr(r * 0.069407491 - s * 0.22898585 + o * 1.159737864);
    return [
      nt(a + 0.5 | 0, 0, 255),
      nt(l + 0.5 | 0, 0, 255),
      nt(h + 0.5 | 0, 0, 255),
      n[3]
    ];
  }
  function Xr(n) {
    if (n === "none")
      return Or;
    if (Hi.hasOwnProperty(n))
      return Hi[n];
    if (kr >= Sf) {
      let e = 0;
      for (const i in Hi)
        e++ & 3 || (delete Hi[i], --kr);
    }
    const t = bl(n);
    t.length !== 4 && ji(n);
    for (const e of t)
      isNaN(e) && ji(n);
    return Hi[n] = t, ++kr, t;
  }
  function fi(n) {
    return Array.isArray(n) ? n : Xr(n);
  }
  function Yr(n) {
    let t = n[0];
    t != (t | 0) && (t = t + 0.5 | 0);
    let e = n[1];
    e != (e | 0) && (e = e + 0.5 | 0);
    let i = n[2];
    i != (i | 0) && (i = i + 0.5 | 0);
    const s = n[3] === void 0 ? 1 : Math.round(n[3] * 1e3) / 1e3;
    return "rgba(" + t + "," + e + "," + i + "," + s + ")";
  }
  function Pl(n) {
    return n[0] > 0 && n[1] > 0;
  }
  function Af(n, t, e) {
    return e === void 0 && (e = [0, 0]), e[0] = n[0] * t + 0.5 | 0, e[1] = n[1] * t + 0.5 | 0, e;
  }
  function St(n, t) {
    return Array.isArray(n) ? n : (t === void 0 ? t = [n, n] : (t[0] = n, t[1] = n), t);
  }
  let Be = 0;
  const xt = 1 << Be++, Z = 1 << Be++, It = 1 << Be++, Ut = 1 << Be++, Ue = 1 << Be++, qi = 1 << Be++, us = Math.pow(2, Be) - 1, Br = {
    [xt]: "boolean",
    [Z]: "number",
    [It]: "string",
    [Ut]: "color",
    [Ue]: "number[]",
    [qi]: "size"
  }, bf = Object.keys(Br).map(Number).sort(se);
  function Mf(n) {
    return n in Br;
  }
  function Ji(n) {
    const t = [];
    for (const e of bf)
      Qi(n, e) && t.push(Br[e]);
    return t.length === 0 ? "untyped" : t.length < 3 ? t.join(" or ") : t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
  }
  function Qi(n, t) {
    return (n & t) === t;
  }
  function Se(n, t) {
    return n === t;
  }
  class ct {
    /**
     * @param {number} type The value type.
     * @param {LiteralValue} value The literal value.
     */
    constructor(t, e) {
      if (!Mf(t))
        throw new Error(
          `literal expressions must have a specific type, got ${Ji(t)}`
        );
      this.type = t, this.value = e;
    }
  }
  class Pf {
    /**
     * @param {number} type The return type.
     * @param {string} operator The operator.
     * @param {...Expression} args The arguments.
     */
    constructor(t, e, ...i) {
      this.type = t, this.operator = e, this.args = i;
    }
  }
  function Dl() {
    return {
      variables: /* @__PURE__ */ new Set(),
      properties: /* @__PURE__ */ new Set(),
      featureId: !1,
      geometryType: !1,
      mapState: !1
    };
  }
  function _t(n, t, e) {
    switch (typeof n) {
      case "boolean": {
        if (Se(t, It))
          return new ct(It, n ? "true" : "false");
        if (!Qi(t, xt))
          throw new Error(
            `got a boolean, but expected ${Ji(t)}`
          );
        return new ct(xt, n);
      }
      case "number": {
        if (Se(t, qi))
          return new ct(qi, St(n));
        if (Se(t, xt))
          return new ct(xt, !!n);
        if (Se(t, It))
          return new ct(It, n.toString());
        if (!Qi(t, Z))
          throw new Error(`got a number, but expected ${Ji(t)}`);
        return new ct(Z, n);
      }
      case "string": {
        if (Se(t, Ut))
          return new ct(Ut, Xr(n));
        if (Se(t, xt))
          return new ct(xt, !!n);
        if (!Qi(t, It))
          throw new Error(`got a string, but expected ${Ji(t)}`);
        return new ct(It, n);
      }
    }
    if (!Array.isArray(n))
      throw new Error("expression must be an array or a primitive value");
    if (n.length === 0)
      throw new Error("empty expression");
    if (typeof n[0] == "string")
      return Bf(n, t, e);
    for (const i of n)
      if (typeof i != "number")
        throw new Error("expected an array of numbers");
    if (Se(t, qi)) {
      if (n.length !== 2)
        throw new Error(
          `expected an array of two values for a size, got ${n.length}`
        );
      return new ct(qi, n);
    }
    if (Se(t, Ut)) {
      if (n.length === 3)
        return new ct(Ut, [...n, 1]);
      if (n.length === 4)
        return new ct(Ut, n);
      throw new Error(
        `expected an array of 3 or 4 values for a color, got ${n.length}`
      );
    }
    if (!Qi(t, Ue))
      throw new Error(
        `got an array of numbers, but expected ${Ji(t)}`
      );
    return new ct(Ue, n);
  }
  const v = {
    Get: "get",
    Var: "var",
    Concat: "concat",
    GeometryType: "geometry-type",
    LineMetric: "line-metric",
    Any: "any",
    All: "all",
    Not: "!",
    Resolution: "resolution",
    Zoom: "zoom",
    Time: "time",
    Equal: "==",
    NotEqual: "!=",
    GreaterThan: ">",
    GreaterThanOrEqualTo: ">=",
    LessThan: "<",
    LessThanOrEqualTo: "<=",
    Multiply: "*",
    Divide: "/",
    Add: "+",
    Subtract: "-",
    Clamp: "clamp",
    Mod: "%",
    Pow: "^",
    Abs: "abs",
    Floor: "floor",
    Ceil: "ceil",
    Round: "round",
    Sin: "sin",
    Cos: "cos",
    Atan: "atan",
    Sqrt: "sqrt",
    Match: "match",
    Between: "between",
    Interpolate: "interpolate",
    Coalesce: "coalesce",
    Case: "case",
    In: "in",
    Number: "number",
    String: "string",
    Array: "array",
    Color: "color",
    Id: "id",
    Band: "band",
    Palette: "palette",
    ToString: "to-string",
    Has: "has"
  }, Df = {
    [v.Get]: z(B(1, 1 / 0), Ol),
    [v.Var]: z(B(1, 1), Of),
    [v.Has]: z(B(1, 1 / 0), Ol),
    [v.Id]: z(Ff, gi),
    [v.Concat]: z(
      B(2, 1 / 0),
      H(It)
    ),
    [v.GeometryType]: z(kf, gi),
    [v.LineMetric]: z(gi),
    [v.Resolution]: z(Ur, gi),
    [v.Zoom]: z(Ur, gi),
    [v.Time]: z(Ur, gi),
    [v.Any]: z(
      B(2, 1 / 0),
      H(xt)
    ),
    [v.All]: z(
      B(2, 1 / 0),
      H(xt)
    ),
    [v.Not]: z(
      B(1, 1),
      H(xt)
    ),
    [v.Equal]: z(
      B(2, 2),
      H(us)
    ),
    [v.NotEqual]: z(
      B(2, 2),
      H(us)
    ),
    [v.GreaterThan]: z(
      B(2, 2),
      H(Z)
    ),
    [v.GreaterThanOrEqualTo]: z(
      B(2, 2),
      H(Z)
    ),
    [v.LessThan]: z(
      B(2, 2),
      H(Z)
    ),
    [v.LessThanOrEqualTo]: z(
      B(2, 2),
      H(Z)
    ),
    [v.Multiply]: z(
      B(2, 1 / 0),
      Fl
    ),
    [v.Coalesce]: z(
      B(2, 1 / 0),
      Fl
    ),
    [v.Divide]: z(
      B(2, 2),
      H(Z)
    ),
    [v.Add]: z(
      B(2, 1 / 0),
      H(Z)
    ),
    [v.Subtract]: z(
      B(2, 2),
      H(Z)
    ),
    [v.Clamp]: z(
      B(3, 3),
      H(Z)
    ),
    [v.Mod]: z(
      B(2, 2),
      H(Z)
    ),
    [v.Pow]: z(
      B(2, 2),
      H(Z)
    ),
    [v.Abs]: z(
      B(1, 1),
      H(Z)
    ),
    [v.Floor]: z(
      B(1, 1),
      H(Z)
    ),
    [v.Ceil]: z(
      B(1, 1),
      H(Z)
    ),
    [v.Round]: z(
      B(1, 1),
      H(Z)
    ),
    [v.Sin]: z(
      B(1, 1),
      H(Z)
    ),
    [v.Cos]: z(
      B(1, 1),
      H(Z)
    ),
    [v.Atan]: z(
      B(1, 2),
      H(Z)
    ),
    [v.Sqrt]: z(
      B(1, 1),
      H(Z)
    ),
    [v.Match]: z(
      B(4, 1 / 0),
      kl,
      Gf
    ),
    [v.Between]: z(
      B(3, 3),
      H(Z)
    ),
    [v.Interpolate]: z(
      B(6, 1 / 0),
      kl,
      zf
    ),
    [v.Case]: z(
      B(3, 1 / 0),
      Nf,
      Wf
    ),
    [v.In]: z(B(2, 2), Xf),
    [v.Number]: z(
      B(1, 1 / 0),
      H(us)
    ),
    [v.String]: z(
      B(1, 1 / 0),
      H(us)
    ),
    [v.Array]: z(
      B(1, 1 / 0),
      H(Z)
    ),
    [v.Color]: z(
      B(1, 4),
      H(Z)
    ),
    [v.Band]: z(
      B(1, 3),
      H(Z)
    ),
    [v.Palette]: z(
      B(2, 2),
      Yf
    ),
    [v.ToString]: z(
      B(1, 1),
      H(xt | Z | It | Ut)
    )
  };
  function Ol(n, t, e) {
    const i = n.length - 1, s = new Array(i);
    for (let r = 0; r < i; ++r) {
      const o = n[r + 1];
      switch (typeof o) {
        case "number": {
          s[r] = new ct(Z, o);
          break;
        }
        case "string": {
          s[r] = new ct(It, o);
          break;
        }
        default:
          throw new Error(
            `expected a string key or numeric array index for a get operation, got ${o}`
          );
      }
      r === 0 && e.properties.add(String(o));
    }
    return s;
  }
  function Of(n, t, e) {
    const i = n[1];
    if (typeof i != "string")
      throw new Error("expected a string argument for var operation");
    return e.variables.add(i), [new ct(It, i)];
  }
  function Ff(n, t, e) {
    e.featureId = !0;
  }
  function kf(n, t, e) {
    e.geometryType = !0;
  }
  function Ur(n, t, e) {
    e.mapState = !0;
  }
  function gi(n, t, e) {
    const i = n[0];
    if (n.length !== 1)
      throw new Error(`expected no arguments for ${i} operation`);
    return [];
  }
  function B(n, t) {
    return function(e, i, s) {
      const r = e[0], o = e.length - 1;
      if (n === t) {
        if (o !== n) {
          const a = n === 1 ? "" : "s";
          throw new Error(
            `expected ${n} argument${a} for ${r}, got ${o}`
          );
        }
      } else if (o < n || o > t) {
        const a = t === 1 / 0 ? `${n} or more` : `${n} to ${t}`;
        throw new Error(
          `expected ${a} arguments for ${r}, got ${o}`
        );
      }
    };
  }
  function Fl(n, t, e) {
    const i = n.length - 1, s = new Array(i);
    for (let r = 0; r < i; ++r) {
      const o = _t(n[r + 1], t, e);
      s[r] = o;
    }
    return s;
  }
  function H(n) {
    return function(t, e, i) {
      const s = t.length - 1, r = new Array(s);
      for (let o = 0; o < s; ++o) {
        const a = _t(t[o + 1], n, i);
        r[o] = a;
      }
      return r;
    };
  }
  function Nf(n, t, e) {
    const i = n[0], s = n.length - 1;
    if (s % 2 === 0)
      throw new Error(
        `expected an odd number of arguments for ${i}, got ${s} instead`
      );
  }
  function kl(n, t, e) {
    const i = n[0], s = n.length - 1;
    if (s % 2 === 1)
      throw new Error(
        `expected an even number of arguments for operation ${i}, got ${s} instead`
      );
  }
  function Gf(n, t, e) {
    const i = n.length - 1, s = It | Z | xt, r = _t(n[1], s, e), o = _t(n[n.length - 1], t, e), a = new Array(i - 2);
    for (let l = 0; l < i - 2; l += 2) {
      try {
        const h = _t(n[l + 2], r.type, e);
        a[l] = h;
      } catch (h) {
        throw new Error(
          `failed to parse argument ${l + 1} of match expression: ${h.message}`
        );
      }
      try {
        const h = _t(n[l + 3], o.type, e);
        a[l + 1] = h;
      } catch (h) {
        throw new Error(
          `failed to parse argument ${l + 2} of match expression: ${h.message}`
        );
      }
    }
    return [r, ...a, o];
  }
  function zf(n, t, e) {
    const i = n[1];
    let s;
    switch (i[0]) {
      case "linear":
        s = 1;
        break;
      case "exponential":
        const l = i[1];
        if (typeof l != "number" || l <= 0)
          throw new Error(
            `expected a number base for exponential interpolation, got ${JSON.stringify(l)} instead`
          );
        s = l;
        break;
      default:
        throw new Error(
          `invalid interpolation type: ${JSON.stringify(i)}`
        );
    }
    const r = new ct(Z, s);
    let o;
    try {
      o = _t(n[2], Z, e);
    } catch (l) {
      throw new Error(
        `failed to parse argument 1 in interpolate expression: ${l.message}`
      );
    }
    const a = new Array(n.length - 3);
    for (let l = 0; l < a.length; l += 2) {
      try {
        const h = _t(n[l + 3], Z, e);
        a[l] = h;
      } catch (h) {
        throw new Error(
          `failed to parse argument ${l + 2} for interpolate expression: ${h.message}`
        );
      }
      try {
        const h = _t(n[l + 4], t, e);
        a[l + 1] = h;
      } catch (h) {
        throw new Error(
          `failed to parse argument ${l + 3} for interpolate expression: ${h.message}`
        );
      }
    }
    return [r, o, ...a];
  }
  function Wf(n, t, e) {
    const i = _t(n[n.length - 1], t, e), s = new Array(n.length - 1);
    for (let r = 0; r < s.length - 1; r += 2) {
      try {
        const o = _t(n[r + 1], xt, e);
        s[r] = o;
      } catch (o) {
        throw new Error(
          `failed to parse argument ${r} of case expression: ${o.message}`
        );
      }
      try {
        const o = _t(n[r + 2], i.type, e);
        s[r + 1] = o;
      } catch (o) {
        throw new Error(
          `failed to parse argument ${r + 1} of case expression: ${o.message}`
        );
      }
    }
    return s[s.length - 1] = i, s;
  }
  function Xf(n, t, e) {
    let i = n[2];
    if (!Array.isArray(i))
      throw new Error(
        'the second argument for the "in" operator must be an array'
      );
    let s;
    if (typeof i[0] == "string") {
      if (i[0] !== "literal")
        throw new Error(
          'for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions'
        );
      if (!Array.isArray(i[1]))
        throw new Error(
          'failed to parse "in" expression: the literal operator must be followed by an array'
        );
      i = i[1], s = It;
    } else
      s = Z;
    const r = new Array(i.length);
    for (let a = 0; a < r.length; a++)
      try {
        const l = _t(i[a], s, e);
        r[a] = l;
      } catch (l) {
        throw new Error(
          `failed to parse haystack item ${a} for "in" expression: ${l.message}`
        );
      }
    return [_t(n[1], s, e), ...r];
  }
  function Yf(n, t, e) {
    let i;
    try {
      i = _t(n[1], Z, e);
    } catch (o) {
      throw new Error(
        `failed to parse first argument in palette expression: ${o.message}`
      );
    }
    const s = n[2];
    if (!Array.isArray(s))
      throw new Error("the second argument of palette must be an array");
    const r = new Array(s.length);
    for (let o = 0; o < r.length; o++) {
      let a;
      try {
        a = _t(s[o], Ut, e);
      } catch (l) {
        throw new Error(
          `failed to parse color at index ${o} in palette expression: ${l.message}`
        );
      }
      if (!(a instanceof ct))
        throw new Error(
          `the palette color at index ${o} must be a literal value`
        );
      r[o] = a;
    }
    return [i, ...r];
  }
  function z(...n) {
    return function(t, e, i) {
      const s = t[0];
      let r;
      for (let o = 0; o < n.length; o++) {
        const a = n[o](t, e, i);
        if (o == n.length - 1) {
          if (!a)
            throw new Error(
              "expected last argument validator to return the parsed args"
            );
          r = a;
        }
      }
      return new Pf(e, s, ...r);
    };
  }
  function Bf(n, t, e) {
    const i = n[0], s = Df[i];
    if (!s)
      throw new Error(`unknown operator: ${i}`);
    return s(n, t, e);
  }
  function Nl(n) {
    if (!n)
      return "";
    const t = n.getType();
    switch (t) {
      case "Point":
      case "LineString":
      case "Polygon":
        return t;
      case "MultiPoint":
      case "MultiLineString":
      case "MultiPolygon":
        return (
          /** @type {'Point'|'LineString'|'Polygon'} */
          t.substring(5)
        );
      case "Circle":
        return "Polygon";
      case "GeometryCollection":
        return Nl(
          /** @type {import("../geom/GeometryCollection.js").default} */
          n.getGeometries()[0]
        );
      default:
        return "";
    }
  }
  function Gl() {
    return {
      variables: {},
      properties: {},
      resolution: NaN,
      featureId: null,
      geometryType: ""
    };
  }
  function le(n, t, e) {
    const i = _t(n, t, e);
    return Kt(i);
  }
  function Kt(n, t) {
    if (n instanceof ct) {
      if (n.type === Ut && typeof n.value == "string") {
        const i = Xr(n.value);
        return function() {
          return i;
        };
      }
      return function() {
        return n.value;
      };
    }
    const e = n.operator;
    switch (e) {
      case v.Number:
      case v.String:
      case v.Coalesce:
        return Uf(n);
      case v.Get:
      case v.Var:
      case v.Has:
        return Kf(n);
      case v.Id:
        return (i) => i.featureId;
      case v.GeometryType:
        return (i) => i.geometryType;
      case v.Concat: {
        const i = n.args.map((s) => Kt(s));
        return (s) => "".concat(...i.map((r) => r(s).toString()));
      }
      case v.Resolution:
        return (i) => i.resolution;
      case v.Any:
      case v.All:
      case v.Between:
      case v.In:
      case v.Not:
        return $f(n);
      case v.Equal:
      case v.NotEqual:
      case v.LessThan:
      case v.LessThanOrEqualTo:
      case v.GreaterThan:
      case v.GreaterThanOrEqualTo:
        return Zf(n);
      case v.Multiply:
      case v.Divide:
      case v.Add:
      case v.Subtract:
      case v.Clamp:
      case v.Mod:
      case v.Pow:
      case v.Abs:
      case v.Floor:
      case v.Ceil:
      case v.Round:
      case v.Sin:
      case v.Cos:
      case v.Atan:
      case v.Sqrt:
        return Vf(n);
      case v.Case:
        return jf(n);
      case v.Match:
        return Hf(n);
      case v.Interpolate:
        return qf(n);
      case v.ToString:
        return Jf(n);
      default:
        throw new Error(`Unsupported operator ${e}`);
    }
  }
  function Uf(n, t) {
    const e = n.operator, i = n.args.length, s = new Array(i);
    for (let r = 0; r < i; ++r)
      s[r] = Kt(n.args[r]);
    switch (e) {
      case v.Coalesce:
        return (r) => {
          for (let o = 0; o < i; ++o) {
            const a = s[o](r);
            if (typeof a < "u" && a !== null)
              return a;
          }
          throw new Error("Expected one of the values to be non-null");
        };
      case v.Number:
      case v.String:
        return (r) => {
          for (let o = 0; o < i; ++o) {
            const a = s[o](r);
            if (typeof a === e)
              return a;
          }
          throw new Error(`Expected one of the values to be a ${e}`);
        };
      default:
        throw new Error(`Unsupported assertion operator ${e}`);
    }
  }
  function Kf(n, t) {
    const i = (
      /** @type {string} */
      /** @type {LiteralExpression} */
      n.args[0].value
    );
    switch (n.operator) {
      case v.Get:
        return (s) => {
          const r = n.args;
          let o = s.properties[i];
          for (let a = 1, l = r.length; a < l; ++a) {
            const c = (
              /** @type {string|number} */
              /** @type {LiteralExpression} */
              r[a].value
            );
            o = o[c];
          }
          return o;
        };
      case v.Var:
        return (s) => s.variables[i];
      case v.Has:
        return (s) => {
          const r = n.args;
          if (!(i in s.properties))
            return !1;
          let o = s.properties[i];
          for (let a = 1, l = r.length; a < l; ++a) {
            const c = (
              /** @type {string|number} */
              /** @type {LiteralExpression} */
              r[a].value
            );
            if (!o || !Object.hasOwn(o, c))
              return !1;
            o = o[c];
          }
          return !0;
        };
      default:
        throw new Error(`Unsupported accessor operator ${n.operator}`);
    }
  }
  function Zf(n, t) {
    const e = n.operator, i = Kt(n.args[0]), s = Kt(n.args[1]);
    switch (e) {
      case v.Equal:
        return (r) => i(r) === s(r);
      case v.NotEqual:
        return (r) => i(r) !== s(r);
      case v.LessThan:
        return (r) => i(r) < s(r);
      case v.LessThanOrEqualTo:
        return (r) => i(r) <= s(r);
      case v.GreaterThan:
        return (r) => i(r) > s(r);
      case v.GreaterThanOrEqualTo:
        return (r) => i(r) >= s(r);
      default:
        throw new Error(`Unsupported comparison operator ${e}`);
    }
  }
  function $f(n, t) {
    const e = n.operator, i = n.args.length, s = new Array(i);
    for (let r = 0; r < i; ++r)
      s[r] = Kt(n.args[r]);
    switch (e) {
      case v.Any:
        return (r) => {
          for (let o = 0; o < i; ++o)
            if (s[o](r))
              return !0;
          return !1;
        };
      case v.All:
        return (r) => {
          for (let o = 0; o < i; ++o)
            if (!s[o](r))
              return !1;
          return !0;
        };
      case v.Between:
        return (r) => {
          const o = s[0](r), a = s[1](r), l = s[2](r);
          return o >= a && o <= l;
        };
      case v.In:
        return (r) => {
          const o = s[0](r);
          for (let a = 1; a < i; ++a)
            if (o === s[a](r))
              return !0;
          return !1;
        };
      case v.Not:
        return (r) => !s[0](r);
      default:
        throw new Error(`Unsupported logical operator ${e}`);
    }
  }
  function Vf(n, t) {
    const e = n.operator, i = n.args.length, s = new Array(i);
    for (let r = 0; r < i; ++r)
      s[r] = Kt(n.args[r]);
    switch (e) {
      case v.Multiply:
        return (r) => {
          let o = 1;
          for (let a = 0; a < i; ++a)
            o *= s[a](r);
          return o;
        };
      case v.Divide:
        return (r) => s[0](r) / s[1](r);
      case v.Add:
        return (r) => {
          let o = 0;
          for (let a = 0; a < i; ++a)
            o += s[a](r);
          return o;
        };
      case v.Subtract:
        return (r) => s[0](r) - s[1](r);
      case v.Clamp:
        return (r) => {
          const o = s[0](r), a = s[1](r);
          if (o < a)
            return a;
          const l = s[2](r);
          return o > l ? l : o;
        };
      case v.Mod:
        return (r) => s[0](r) % s[1](r);
      case v.Pow:
        return (r) => Math.pow(s[0](r), s[1](r));
      case v.Abs:
        return (r) => Math.abs(s[0](r));
      case v.Floor:
        return (r) => Math.floor(s[0](r));
      case v.Ceil:
        return (r) => Math.ceil(s[0](r));
      case v.Round:
        return (r) => Math.round(s[0](r));
      case v.Sin:
        return (r) => Math.sin(s[0](r));
      case v.Cos:
        return (r) => Math.cos(s[0](r));
      case v.Atan:
        return i === 2 ? (r) => Math.atan2(s[0](r), s[1](r)) : (r) => Math.atan(s[0](r));
      case v.Sqrt:
        return (r) => Math.sqrt(s[0](r));
      default:
        throw new Error(`Unsupported numeric operator ${e}`);
    }
  }
  function jf(n, t) {
    const e = n.args.length, i = new Array(e);
    for (let s = 0; s < e; ++s)
      i[s] = Kt(n.args[s]);
    return (s) => {
      for (let r = 0; r < e - 1; r += 2)
        if (i[r](s))
          return i[r + 1](s);
      return i[e - 1](s);
    };
  }
  function Hf(n, t) {
    const e = n.args.length, i = new Array(e);
    for (let s = 0; s < e; ++s)
      i[s] = Kt(n.args[s]);
    return (s) => {
      const r = i[0](s);
      for (let o = 1; o < e - 1; o += 2)
        if (r === i[o](s))
          return i[o + 1](s);
      return i[e - 1](s);
    };
  }
  function qf(n, t) {
    const e = n.args.length, i = new Array(e);
    for (let s = 0; s < e; ++s)
      i[s] = Kt(n.args[s]);
    return (s) => {
      const r = i[0](s), o = i[1](s);
      let a, l;
      for (let h = 2; h < e; h += 2) {
        const c = i[h](s);
        let u = i[h + 1](s);
        const d = Array.isArray(u);
        if (d && (u = If(u)), c >= o)
          return h === 2 ? u : d ? Qf(
            r,
            o,
            a,
            l,
            c,
            u
          ) : tn(
            r,
            o,
            a,
            l,
            c,
            u
          );
        a = c, l = u;
      }
      return l;
    };
  }
  function Jf(n, t) {
    const e = n.operator, i = n.args.length, s = new Array(i);
    for (let r = 0; r < i; ++r)
      s[r] = Kt(n.args[r]);
    switch (e) {
      case v.ToString:
        return (r) => {
          const o = s[0](r);
          return n.args[0].type === Ut ? Yr(o) : o.toString();
        };
      default:
        throw new Error(`Unsupported convert operator ${e}`);
    }
  }
  function tn(n, t, e, i, s, r) {
    const o = s - e;
    if (o === 0)
      return i;
    const a = t - e, l = n === 1 ? a / o : (Math.pow(n, a) - 1) / (Math.pow(n, o) - 1);
    return i + l * (r - i);
  }
  function Qf(n, t, e, i, s, r) {
    if (s - e === 0)
      return i;
    const a = Ml(i), l = Ml(r);
    let h = l[2] - a[2];
    h > 180 ? h -= 360 : h < -180 && (h += 360);
    const c = [
      tn(n, t, e, a[0], s, l[0]),
      tn(n, t, e, a[1], s, l[1]),
      a[2] + tn(n, t, e, 0, s, h),
      tn(n, t, e, i[3], s, r[3])
    ];
    return Lf(c);
  }
  const U = {
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    ERROR: 3,
    EMPTY: 4
  };
  function tg(n, t, e) {
    const i = (
      /** @type {HTMLImageElement} */
      n
    );
    let s = !0, r = !1, o = !1;
    const a = [
      Mn(i, Y.LOAD, function() {
        o = !0, r || t();
      })
    ];
    return i.src && _a ? (r = !0, i.decode().then(function() {
      s && t();
    }).catch(function(l) {
      s && (o ? t() : e());
    })) : a.push(Mn(i, Y.ERROR, e)), function() {
      s = !1, a.forEach(it);
    };
  }
  function eg(n, t) {
    return new Promise((e, i) => {
      function s() {
        o(), e(n);
      }
      function r() {
        o(), i(new Error("Image load error"));
      }
      function o() {
        n.removeEventListener("load", s), n.removeEventListener("error", r);
      }
      n.addEventListener("load", s), n.addEventListener("error", r), t && (n.src = t);
    });
  }
  function ig(n, t) {
    return t && (n.src = t), n.src && _a ? new Promise(
      (e, i) => n.decode().then(() => e(n)).catch(
        (s) => n.complete && n.width ? e(n) : i(s)
      )
    ) : eg(n);
  }
  class ng {
    constructor() {
      this.cache_ = {}, this.patternCache_ = {}, this.cacheSize_ = 0, this.maxCacheSize_ = 1024;
    }
    /**
     * FIXME empty description for jsdoc
     */
    clear() {
      this.cache_ = {}, this.patternCache_ = {}, this.cacheSize_ = 0;
    }
    /**
     * @return {boolean} Can expire cache.
     */
    canExpireCache() {
      return this.cacheSize_ > this.maxCacheSize_;
    }
    /**
     * FIXME empty description for jsdoc
     */
    expire() {
      if (this.canExpireCache()) {
        let t = 0;
        for (const e in this.cache_) {
          const i = this.cache_[e];
          !(t++ & 3) && !i.hasListener() && (delete this.cache_[e], delete this.patternCache_[e], --this.cacheSize_);
        }
      }
    }
    /**
     * @param {string} src Src.
     * @param {?string} crossOrigin Cross origin.
     * @param {import("../color.js").Color|string|null} color Color.
     * @return {import("./IconImage.js").default} Icon image.
     */
    get(t, e, i) {
      const s = Kr(t, e, i);
      return s in this.cache_ ? this.cache_[s] : null;
    }
    /**
     * @param {string} src Src.
     * @param {?string} crossOrigin Cross origin.
     * @param {import("../color.js").Color|string|null} color Color.
     * @return {CanvasPattern} Icon image.
     */
    getPattern(t, e, i) {
      const s = Kr(t, e, i);
      return s in this.patternCache_ ? this.patternCache_[s] : null;
    }
    /**
     * @param {string} src Src.
     * @param {?string} crossOrigin Cross origin.
     * @param {import("../color.js").Color|string|null} color Color.
     * @param {import("./IconImage.js").default|null} iconImage Icon image.
     * @param {boolean} [pattern] Also cache a `'repeat'` pattern with this `iconImage`.
     */
    set(t, e, i, s, r) {
      const o = Kr(t, e, i), a = o in this.cache_;
      this.cache_[o] = s, r && (s.getImageState() === U.IDLE && s.load(), s.getImageState() === U.LOADING ? s.ready().then(() => {
        this.patternCache_[o] = ss().createPattern(
          s.getImage(1),
          "repeat"
        );
      }) : this.patternCache_[o] = ss().createPattern(
        s.getImage(1),
        "repeat"
      )), a || ++this.cacheSize_;
    }
    /**
     * Set the cache size of the icon cache. Default is `1024`. Change this value when
     * your map uses more than 1024 different icon images and you are not caching icon
     * styles on the application level.
     * @param {number} maxCacheSize Cache max size.
     * @api
     */
    setSize(t) {
      this.maxCacheSize_ = t, this.expire();
    }
  }
  function Kr(n, t, e) {
    const i = e ? fi(e) : "null";
    return t + ":" + n + ":" + i;
  }
  const kt = new ng();
  let en = null;
  class zl extends bn {
    /**
     * @param {HTMLImageElement|HTMLCanvasElement|ImageBitmap|null} image Image.
     * @param {string|undefined} src Src.
     * @param {?string} crossOrigin Cross origin.
     * @param {import("../ImageState.js").default|undefined} imageState Image state.
     * @param {import("../color.js").Color|string|null} color Color.
     */
    constructor(t, e, i, s, r) {
      super(), this.hitDetectionImage_ = null, this.image_ = t, this.crossOrigin_ = i, this.canvas_ = {}, this.color_ = r, this.imageState_ = s === void 0 ? U.IDLE : s, this.size_ = t && t.width && t.height ? [t.width, t.height] : null, this.src_ = e, this.tainted_, this.ready_ = null;
    }
    /**
     * @private
     */
    initializeImage_() {
      this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_);
    }
    /**
     * @private
     * @return {boolean} The image canvas is tainted.
     */
    isTainted_() {
      if (this.tainted_ === void 0 && this.imageState_ === U.LOADED) {
        en || (en = ht(1, 1, void 0, {
          willReadFrequently: !0
        })), en.drawImage(this.image_, 0, 0);
        try {
          en.getImageData(0, 0, 1, 1), this.tainted_ = !1;
        } catch {
          en = null, this.tainted_ = !0;
        }
      }
      return this.tainted_ === !0;
    }
    /**
     * @private
     */
    dispatchChangeEvent_() {
      this.dispatchEvent(Y.CHANGE);
    }
    /**
     * @private
     */
    handleImageError_() {
      this.imageState_ = U.ERROR, this.dispatchChangeEvent_();
    }
    /**
     * @private
     */
    handleImageLoad_() {
      this.imageState_ = U.LOADED, this.size_ = [this.image_.width, this.image_.height], this.dispatchChangeEvent_();
    }
    /**
     * @param {number} pixelRatio Pixel ratio.
     * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image or Canvas element or image bitmap.
     */
    getImage(t) {
      return this.image_ || this.initializeImage_(), this.replaceColor_(t), this.canvas_[t] ? this.canvas_[t] : this.image_;
    }
    /**
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Image or Canvas element.
     */
    getPixelRatio(t) {
      return this.replaceColor_(t), this.canvas_[t] ? t : 1;
    }
    /**
     * @return {import("../ImageState.js").default} Image state.
     */
    getImageState() {
      return this.imageState_;
    }
    /**
     * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image element.
     */
    getHitDetectionImage() {
      if (this.image_ || this.initializeImage_(), !this.hitDetectionImage_)
        if (this.isTainted_()) {
          const t = this.size_[0], e = this.size_[1], i = ht(t, e);
          i.fillRect(0, 0, t, e), this.hitDetectionImage_ = i.canvas;
        } else
          this.hitDetectionImage_ = this.image_;
      return this.hitDetectionImage_;
    }
    /**
     * Get the size of the icon (in pixels).
     * @return {import("../size.js").Size} Image size.
     */
    getSize() {
      return this.size_;
    }
    /**
     * @return {string|undefined} Image src.
     */
    getSrc() {
      return this.src_;
    }
    /**
     * Load not yet loaded URI.
     */
    load() {
      if (this.imageState_ === U.IDLE) {
        this.image_ || this.initializeImage_(), this.imageState_ = U.LOADING;
        try {
          this.src_ !== void 0 && (this.image_.src = this.src_);
        } catch {
          this.handleImageError_();
        }
        this.image_ instanceof HTMLImageElement && ig(this.image_, this.src_).then((t) => {
          this.image_ = t, this.handleImageLoad_();
        }).catch(this.handleImageError_.bind(this));
      }
    }
    /**
     * @param {number} pixelRatio Pixel ratio.
     * @private
     */
    replaceColor_(t) {
      if (!this.color_ || this.canvas_[t] || this.imageState_ !== U.LOADED)
        return;
      const e = this.image_, i = ht(
        Math.ceil(e.width * t),
        Math.ceil(e.height * t)
      ), s = i.canvas;
      i.scale(t, t), i.drawImage(e, 0, 0), i.globalCompositeOperation = "multiply", i.fillStyle = Tf(this.color_), i.fillRect(0, 0, s.width / t, s.height / t), i.globalCompositeOperation = "destination-in", i.drawImage(e, 0, 0), this.canvas_[t] = s;
    }
    /**
     * @return {Promise<void>} Promise that resolves when the image is loaded.
     */
    ready() {
      return this.ready_ || (this.ready_ = new Promise((t) => {
        if (this.imageState_ === U.LOADED || this.imageState_ === U.ERROR)
          t();
        else {
          const e = () => {
            (this.imageState_ === U.LOADED || this.imageState_ === U.ERROR) && (this.removeEventListener(Y.CHANGE, e), t());
          };
          this.addEventListener(Y.CHANGE, e);
        }
      })), this.ready_;
    }
  }
  function Zr(n, t, e, i, s, r) {
    let o = t === void 0 ? void 0 : kt.get(t, e, s);
    return o || (o = new zl(
      n,
      n && "src" in n ? n.src || void 0 : t,
      e,
      i,
      s
    ), kt.set(t, e, s, o, r)), r && o && !kt.getPattern(t, e, s) && kt.set(t, e, s, o, r), o;
  }
  function qt(n) {
    return n ? Array.isArray(n) ? Yr(n) : typeof n == "object" && "src" in n ? sg(n) : n : null;
  }
  function sg(n) {
    if (!n.offset || !n.size)
      return kt.getPattern(n.src, "anonymous", n.color);
    const t = n.src + ":" + n.offset, e = kt.getPattern(
      t,
      void 0,
      n.color
    );
    if (e)
      return e;
    const i = kt.get(n.src, "anonymous", null);
    if (i.getImageState() !== U.LOADED)
      return null;
    const s = ht(
      n.size[0],
      n.size[1]
    );
    return s.drawImage(
      i.getImage(1),
      n.offset[0],
      n.offset[1],
      n.size[0],
      n.size[1],
      0,
      0,
      n.size[0],
      n.size[1]
    ), Zr(
      s.canvas,
      t,
      void 0,
      U.LOADED,
      n.color,
      !0
    ), kt.getPattern(t, void 0, n.color);
  }
  const Wl = "10px sans-serif", Lt = "#000", _i = "round", he = [], ce = 0, mi = "round", nn = 10, sn = "#000", rn = "center", ds = "middle", Ke = [0, 0, 0, 0], on = 1, pi = new Vt();
  let an = null, Xl;
  const $r = {}, rg = /* @__PURE__ */ new Set([
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "emoji",
    "math",
    "fangsong"
  ]);
  function og(n, t, e) {
    return `${n} ${t} 16px "${e}"`;
  }
  const ag = function() {
    let t, e;
    async function i(r) {
      await e.ready;
      const o = await e.load(r);
      if (o.length === 0)
        return !1;
      const a = Cr(r), l = a.families[0].toLowerCase(), h = a.weight;
      return o.some(
        /**
         * @param {import('../css.js').FontParameters} f Font.
         * @return {boolean} Font matches.
         */
        (c) => {
          const u = c.family.replace(/^['"]|['"]$/g, "").toLowerCase(), d = wr[c.weight] || c.weight;
          return u === l && c.style === a.style && d == h;
        }
      );
    }
    async function s() {
      await e.ready;
      let r = !0;
      const o = pi.getProperties(), a = Object.keys(o).filter(
        (l) => o[l] < 100
      );
      for (let l = a.length - 1; l >= 0; --l) {
        const h = a[l];
        let c = o[h];
        c < 100 && (await i(h) ? (Fi($r), pi.set(h, 100)) : (c += 10, pi.set(h, c, !0), c < 100 && (r = !1)));
      }
      t = void 0, r || (t = setTimeout(s, 100));
    }
    return async function(r) {
      e || (e = Xs ? self.fonts : document.fonts);
      const o = Cr(r);
      if (!o)
        return;
      const a = o.families;
      let l = !1;
      for (const h of a) {
        if (rg.has(h))
          continue;
        const c = og(o.style, o.weight, h);
        pi.get(c) === void 0 && (pi.set(c, 0, !0), l = !0);
      }
      l && (clearTimeout(t), t = setTimeout(s, 100));
    };
  }(), lg = function() {
    let n;
    return function(t) {
      let e = $r[t];
      if (e == null) {
        if (Xs) {
          const i = Cr(t), s = Yl(t, "Žg");
          e = (isNaN(Number(i.lineHeight)) ? 1.2 : Number(i.lineHeight)) * (s.actualBoundingBoxAscent + s.actualBoundingBoxDescent);
        } else
          n || (n = document.createElement("div"), n.innerHTML = "M", n.style.minHeight = "0", n.style.maxHeight = "none", n.style.height = "auto", n.style.padding = "0", n.style.border = "none", n.style.position = "absolute", n.style.display = "block", n.style.left = "-99999px"), n.style.font = t, document.body.appendChild(n), e = n.offsetHeight, document.body.removeChild(n);
        $r[t] = e;
      }
      return e;
    };
  }();
  function Yl(n, t) {
    return an || (an = ht(1, 1)), n != Xl && (an.font = n, Xl = an.font), an.measureText(t);
  }
  function Bl(n, t) {
    return Yl(n, t).width;
  }
  function Ul(n, t, e) {
    if (t in e)
      return e[t];
    const i = t.split(`
`).reduce((s, r) => Math.max(s, Bl(n, r)), 0);
    return e[t] = i, i;
  }
  function hg(n, t) {
    const e = [], i = [], s = [];
    let r = 0, o = 0, a = 0, l = 0;
    for (let h = 0, c = t.length; h <= c; h += 2) {
      const u = t[h];
      if (u === `
` || h === c) {
        r = Math.max(r, o), s.push(o), o = 0, a += l, l = 0;
        continue;
      }
      const d = t[h + 1] || n.font, f = Bl(d, u);
      e.push(f), o += f;
      const g = lg(d);
      i.push(g), l = Math.max(l, g);
    }
    return { width: r, height: a, widths: e, heights: i, lineWidths: s };
  }
  function cg(n, t, e, i, s, r, o, a, l, h, c) {
    n.save(), e !== 1 && (n.globalAlpha === void 0 ? n.globalAlpha = (u) => u.globalAlpha *= e : n.globalAlpha *= e), t && n.transform.apply(n, t), /** @type {*} */
    i.contextInstructions ? (n.translate(l, h), n.scale(c[0], c[1]), ug(
      /** @type {Label} */
      i,
      n
    )) : c[0] < 0 || c[1] < 0 ? (n.translate(l, h), n.scale(c[0], c[1]), n.drawImage(
      /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
      i,
      s,
      r,
      o,
      a,
      0,
      0,
      o,
      a
    )) : n.drawImage(
      /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
      i,
      s,
      r,
      o,
      a,
      l,
      h,
      o * c[0],
      a * c[1]
    ), n.restore();
  }
  function ug(n, t) {
    const e = n.contextInstructions;
    for (let i = 0, s = e.length; i < s; i += 2)
      Array.isArray(e[i + 1]) ? t[e[i]].apply(
        t,
        e[i + 1]
      ) : t[e[i]] = e[i + 1];
  }
  class Vr {
    /**
     * @param {Options} options Options.
     */
    constructor(t) {
      this.opacity_ = t.opacity, this.rotateWithView_ = t.rotateWithView, this.rotation_ = t.rotation, this.scale_ = t.scale, this.scaleArray_ = St(t.scale), this.displacement_ = t.displacement, this.declutterMode_ = t.declutterMode;
    }
    /**
     * Clones the style.
     * @return {ImageStyle} The cloned style.
     * @api
     */
    clone() {
      const t = this.getScale();
      return new Vr({
        opacity: this.getOpacity(),
        scale: Array.isArray(t) ? t.slice() : t,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
    }
    /**
     * Get the symbolizer opacity.
     * @return {number} Opacity.
     * @api
     */
    getOpacity() {
      return this.opacity_;
    }
    /**
     * Determine whether the symbolizer rotates with the map.
     * @return {boolean} Rotate with map.
     * @api
     */
    getRotateWithView() {
      return this.rotateWithView_;
    }
    /**
     * Get the symoblizer rotation.
     * @return {number} Rotation.
     * @api
     */
    getRotation() {
      return this.rotation_;
    }
    /**
     * Get the symbolizer scale.
     * @return {number|import("../size.js").Size} Scale.
     * @api
     */
    getScale() {
      return this.scale_;
    }
    /**
     * Get the symbolizer scale array.
     * @return {import("../size.js").Size} Scale array.
     */
    getScaleArray() {
      return this.scaleArray_;
    }
    /**
     * Get the displacement of the shape
     * @return {Array<number>} Shape's center displacement
     * @api
     */
    getDisplacement() {
      return this.displacement_;
    }
    /**
     * Get the declutter mode of the shape
     * @return {import("./Style.js").DeclutterMode} Shape's declutter mode
     * @api
     */
    getDeclutterMode() {
      return this.declutterMode_;
    }
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     * @abstract
     * @return {Array<number>} Anchor.
     */
    getAnchor() {
      return V();
    }
    /**
     * Get the image element for the symbolizer.
     * @abstract
     * @param {number} pixelRatio Pixel ratio.
     * @return {import('../DataTile.js').ImageLike} Image element.
     */
    getImage(t) {
      return V();
    }
    /**
     * @abstract
     * @return {import('../DataTile.js').ImageLike} Image element.
     */
    getHitDetectionImage() {
      return V();
    }
    /**
     * Get the image pixel ratio.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Pixel ratio.
     */
    getPixelRatio(t) {
      return 1;
    }
    /**
     * @abstract
     * @return {import("../ImageState.js").default} Image state.
     */
    getImageState() {
      return V();
    }
    /**
     * @abstract
     * @return {import("../size.js").Size} Image size.
     */
    getImageSize() {
      return V();
    }
    /**
     * Get the origin of the symbolizer.
     * @abstract
     * @return {Array<number>} Origin.
     */
    getOrigin() {
      return V();
    }
    /**
     * Get the size of the symbolizer (in pixels).
     * @abstract
     * @return {import("../size.js").Size} Size.
     */
    getSize() {
      return V();
    }
    /**
     * Set the displacement.
     *
     * @param {Array<number>} displacement Displacement.
     * @api
     */
    setDisplacement(t) {
      this.displacement_ = t;
    }
    /**
     * Set the opacity.
     *
     * @param {number} opacity Opacity.
     * @api
     */
    setOpacity(t) {
      this.opacity_ = t;
    }
    /**
     * Set whether to rotate the style with the view.
     *
     * @param {boolean} rotateWithView Rotate with map.
     * @api
     */
    setRotateWithView(t) {
      this.rotateWithView_ = t;
    }
    /**
     * Set the rotation.
     *
     * @param {number} rotation Rotation.
     * @api
     */
    setRotation(t) {
      this.rotation_ = t;
    }
    /**
     * Set the scale.
     *
     * @param {number|import("../size.js").Size} scale Scale.
     * @api
     */
    setScale(t) {
      this.scale_ = t, this.scaleArray_ = St(t);
    }
    /**
     * @abstract
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     */
    listenImageChange(t) {
      V();
    }
    /**
     * Load not yet loaded URI.
     * @abstract
     */
    load() {
      V();
    }
    /**
     * @abstract
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     */
    unlistenImageChange(t) {
      V();
    }
    /**
     * @return {Promise<void>} `false` or Promise that resolves when the style is ready to use.
     */
    ready() {
      return Promise.resolve();
    }
  }
  const Kl = Vr;
  class jr extends Kl {
    /**
     * @param {Options} options Options.
     */
    constructor(t) {
      super({
        opacity: 1,
        rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
        rotation: t.rotation !== void 0 ? t.rotation : 0,
        scale: t.scale !== void 0 ? t.scale : 1,
        displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
        declutterMode: t.declutterMode
      }), this.hitDetectionCanvas_ = null, this.fill_ = t.fill !== void 0 ? t.fill : null, this.origin_ = [0, 0], this.points_ = t.points, this.radius = t.radius, this.radius2_ = t.radius2, this.angle_ = t.angle !== void 0 ? t.angle : 0, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.size_, this.renderOptions_, this.imageState_ = this.fill_ && this.fill_.loading() ? U.LOADING : U.LOADED, this.imageState_ === U.LOADING && this.ready().then(() => this.imageState_ = U.LOADED), this.render();
    }
    /**
     * Clones the style.
     * @return {RegularShape} The cloned style.
     * @api
     * @override
     */
    clone() {
      const t = this.getScale(), e = new jr({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        points: this.getPoints(),
        radius: this.getRadius(),
        radius2: this.getRadius2(),
        angle: this.getAngle(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        scale: Array.isArray(t) ? t.slice() : t,
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
      return e.setOpacity(this.getOpacity()), e;
    }
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     * @return {Array<number>} Anchor.
     * @api
     * @override
     */
    getAnchor() {
      const t = this.size_, e = this.getDisplacement(), i = this.getScaleArray();
      return [
        t[0] / 2 - e[0] / i[0],
        t[1] / 2 + e[1] / i[1]
      ];
    }
    /**
     * Get the angle used in generating the shape.
     * @return {number} Shape's rotation in radians.
     * @api
     */
    getAngle() {
      return this.angle_;
    }
    /**
     * Get the fill style for the shape.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getFill() {
      return this.fill_;
    }
    /**
     * Set the fill style.
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setFill(t) {
      this.fill_ = t, this.render();
    }
    /**
     * @return {HTMLCanvasElement} Image element.
     * @override
     */
    getHitDetectionImage() {
      return this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
        this.renderOptions_
      )), this.hitDetectionCanvas_;
    }
    /**
     * Get the image icon.
     * @param {number} pixelRatio Pixel ratio.
     * @return {HTMLCanvasElement} Image or Canvas element.
     * @api
     * @override
     */
    getImage(t) {
      var r, o;
      const e = (r = this.fill_) == null ? void 0 : r.getKey(), i = `${t},${this.angle_},${this.radius},${this.radius2_},${this.points_},${e}` + Object.values(this.renderOptions_).join(",");
      let s = (
        /** @type {HTMLCanvasElement} */
        (o = kt.get(i, null, null)) == null ? void 0 : o.getImage(1)
      );
      if (!s) {
        const a = this.renderOptions_, l = Math.ceil(a.size * t), h = ht(l, l);
        this.draw_(a, h, t), s = h.canvas, kt.set(
          i,
          null,
          null,
          new zl(s, void 0, null, U.LOADED, null)
        );
      }
      return s;
    }
    /**
     * Get the image pixel ratio.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Pixel ratio.
     * @override
     */
    getPixelRatio(t) {
      return t;
    }
    /**
     * @return {import("../size.js").Size} Image size.
     * @override
     */
    getImageSize() {
      return this.size_;
    }
    /**
     * @return {import("../ImageState.js").default} Image state.
     * @override
     */
    getImageState() {
      return this.imageState_;
    }
    /**
     * Get the origin of the symbolizer.
     * @return {Array<number>} Origin.
     * @api
     * @override
     */
    getOrigin() {
      return this.origin_;
    }
    /**
     * Get the number of points for generating the shape.
     * @return {number} Number of points for stars and regular polygons.
     * @api
     */
    getPoints() {
      return this.points_;
    }
    /**
     * Get the (primary) radius for the shape.
     * @return {number} Radius.
     * @api
     */
    getRadius() {
      return this.radius;
    }
    /**
     * Get the secondary radius for the shape.
     * @return {number|undefined} Radius2.
     * @api
     */
    getRadius2() {
      return this.radius2_;
    }
    /**
     * Get the size of the symbolizer (in pixels).
     * @return {import("../size.js").Size} Size.
     * @api
     * @override
     */
    getSize() {
      return this.size_;
    }
    /**
     * Get the stroke style for the shape.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getStroke() {
      return this.stroke_;
    }
    /**
     * Set the stroke style.
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setStroke(t) {
      this.stroke_ = t, this.render();
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    listenImageChange(t) {
    }
    /**
     * Load not yet loaded URI.
     * @override
     */
    load() {
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    unlistenImageChange(t) {
    }
    /**
     * Calculate additional canvas size needed for the miter.
     * @param {string} lineJoin Line join
     * @param {number} strokeWidth Stroke width
     * @param {number} miterLimit Miter limit
     * @return {number} Additional canvas size needed
     * @private
     */
    calculateLineJoinSize_(t, e, i) {
      if (e === 0 || this.points_ === 1 / 0 || t !== "bevel" && t !== "miter")
        return e;
      let s = this.radius, r = this.radius2_ === void 0 ? s : this.radius2_;
      if (s < r) {
        const C = s;
        s = r, r = C;
      }
      const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2, a = 2 * Math.PI / o, l = r * Math.sin(a), h = Math.sqrt(r * r - l * l), c = s - h, u = Math.sqrt(l * l + c * c), d = u / l;
      if (t === "miter" && d <= i)
        return d * e;
      const f = e / 2 / d, g = e / 2 * (c / u), _ = Math.sqrt((s + f) * (s + f) + g * g) - s;
      if (this.radius2_ === void 0 || t === "bevel")
        return _ * 2;
      const m = s * Math.sin(a), y = Math.sqrt(s * s - m * m), w = r - y, x = Math.sqrt(m * m + w * w) / m;
      if (x <= i) {
        const C = x * e / 2 - r - s;
        return 2 * Math.max(_, C);
      }
      return _ * 2;
    }
    /**
     * @return {RenderOptions}  The render options
     * @protected
     */
    createRenderOptions() {
      let t = _i, e = mi, i = 0, s = null, r = 0, o, a = 0;
      this.stroke_ && (o = qt(this.stroke_.getColor() ?? sn), a = this.stroke_.getWidth() ?? on, s = this.stroke_.getLineDash(), r = this.stroke_.getLineDashOffset() ?? 0, e = this.stroke_.getLineJoin() ?? mi, t = this.stroke_.getLineCap() ?? _i, i = this.stroke_.getMiterLimit() ?? nn);
      const l = this.calculateLineJoinSize_(e, a, i), h = Math.max(this.radius, this.radius2_ || 0), c = Math.ceil(2 * h + l);
      return {
        strokeStyle: o,
        strokeWidth: a,
        size: c,
        lineCap: t,
        lineDash: s,
        lineDashOffset: r,
        lineJoin: e,
        miterLimit: i
      };
    }
    /**
     * @protected
     */
    render() {
      this.renderOptions_ = this.createRenderOptions();
      const t = this.renderOptions_.size;
      this.hitDetectionCanvas_ = null, this.size_ = [t, t];
    }
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     * @param {CanvasRenderingContext2D} context The rendering context.
     * @param {number} pixelRatio The pixel ratio.
     */
    draw_(t, e, i) {
      if (e.scale(i, i), e.translate(t.size / 2, t.size / 2), this.createPath_(e), this.fill_) {
        let s = this.fill_.getColor();
        s === null && (s = Lt), e.fillStyle = qt(s), e.fill();
      }
      t.strokeStyle && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineCap = t.lineCap, e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
    }
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     * @return {HTMLCanvasElement} Canvas containing the icon
     */
    createHitDetectionCanvas_(t) {
      let e;
      if (this.fill_) {
        let i = this.fill_.getColor(), s = 0;
        typeof i == "string" && (i = fi(i)), i === null ? s = 1 : Array.isArray(i) && (s = i.length === 4 ? i[3] : 1), s === 0 && (e = ht(t.size, t.size), this.drawHitDetectionCanvas_(t, e));
      }
      return e ? e.canvas : this.getImage(1);
    }
    /**
     * @private
     * @param {CanvasRenderingContext2D} context The context to draw in.
     */
    createPath_(t) {
      let e = this.points_;
      const i = this.radius;
      if (e === 1 / 0)
        t.arc(0, 0, i, 0, 2 * Math.PI);
      else {
        const s = this.radius2_ === void 0 ? i : this.radius2_;
        this.radius2_ !== void 0 && (e *= 2);
        const r = this.angle_ - Math.PI / 2, o = 2 * Math.PI / e;
        for (let a = 0; a < e; a++) {
          const l = r + a * o, h = a % 2 === 0 ? i : s;
          t.lineTo(h * Math.cos(l), h * Math.sin(l));
        }
        t.closePath();
      }
    }
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     * @param {CanvasRenderingContext2D} context The context.
     */
    drawHitDetectionCanvas_(t, e) {
      e.translate(t.size / 2, t.size / 2), this.createPath_(e), e.fillStyle = Lt, e.fill(), t.strokeStyle && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
    }
    /**
     * @override
     */
    ready() {
      return this.fill_ ? this.fill_.ready() : Promise.resolve();
    }
  }
  const Zl = jr;
  class Hr extends Zl {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      t = t || { radius: 5 }, super({
        points: 1 / 0,
        fill: t.fill,
        radius: t.radius,
        stroke: t.stroke,
        scale: t.scale !== void 0 ? t.scale : 1,
        rotation: t.rotation !== void 0 ? t.rotation : 0,
        rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
        displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
        declutterMode: t.declutterMode
      });
    }
    /**
     * Clones the style.
     * @return {CircleStyle} The cloned style.
     * @api
     * @override
     */
    clone() {
      const t = this.getScale(), e = new Hr({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        radius: this.getRadius(),
        scale: Array.isArray(t) ? t.slice() : t,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
      return e.setOpacity(this.getOpacity()), e;
    }
    /**
     * Set the circle radius.
     *
     * @param {number} radius Circle radius.
     * @api
     */
    setRadius(t) {
      this.radius = t, this.render();
    }
  }
  const qr = Hr;
  class Jr {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      t = t || {}, this.patternImage_ = null, this.color_ = null, t.color !== void 0 && this.setColor(t.color);
    }
    /**
     * Clones the style. The color is not cloned if it is a {@link module:ol/colorlike~ColorLike}.
     * @return {Fill} The cloned style.
     * @api
     */
    clone() {
      const t = this.getColor();
      return new Jr({
        color: Array.isArray(t) ? t.slice() : t || void 0
      });
    }
    /**
     * Get the fill color.
     * @return {import("../color.js").Color|import("../colorlike.js").ColorLike|import('../colorlike.js').PatternDescriptor|null} Color.
     * @api
     */
    getColor() {
      return this.color_;
    }
    /**
     * Set the color.
     *
     * @param {import("../color.js").Color|import("../colorlike.js").ColorLike|import('../colorlike.js').PatternDescriptor|null} color Color.
     * @api
     */
    setColor(t) {
      if (t !== null && typeof t == "object" && "src" in t) {
        const e = Zr(
          null,
          t.src,
          "anonymous",
          void 0,
          t.offset ? null : t.color ? t.color : null,
          !(t.offset && t.size)
        );
        e.ready().then(() => {
          this.patternImage_ = null;
        }), e.getImageState() === U.IDLE && e.load(), e.getImageState() === U.LOADING && (this.patternImage_ = e);
      }
      this.color_ = t;
    }
    /**
     * @return {string} Key of the fill for cache lookup.
     */
    getKey() {
      const t = this.getColor();
      return t ? t instanceof CanvasPattern || t instanceof CanvasGradient ? j(t) : typeof t == "object" && "src" in t ? t.src + ":" + t.offset : fi(t).toString() : "";
    }
    /**
     * @return {boolean} The fill style is loading an image pattern.
     */
    loading() {
      return !!this.patternImage_;
    }
    /**
     * @return {Promise<void>} `false` or a promise that resolves when the style is ready to use.
     */
    ready() {
      return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
    }
  }
  const fs = Jr;
  function $l(n, t, e, i) {
    return e !== void 0 && i !== void 0 ? [e / n, i / t] : e !== void 0 ? e / n : i !== void 0 ? i / t : 1;
  }
  class Qr extends Kl {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      t = t || {};
      const e = t.opacity !== void 0 ? t.opacity : 1, i = t.rotation !== void 0 ? t.rotation : 0, s = t.scale !== void 0 ? t.scale : 1, r = t.rotateWithView !== void 0 ? t.rotateWithView : !1;
      super({
        opacity: e,
        rotation: i,
        scale: s,
        displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
        rotateWithView: r,
        declutterMode: t.declutterMode
      }), this.anchor_ = t.anchor !== void 0 ? t.anchor : [0.5, 0.5], this.normalizedAnchor_ = null, this.anchorOrigin_ = t.anchorOrigin !== void 0 ? t.anchorOrigin : "top-left", this.anchorXUnits_ = t.anchorXUnits !== void 0 ? t.anchorXUnits : "fraction", this.anchorYUnits_ = t.anchorYUnits !== void 0 ? t.anchorYUnits : "fraction", this.crossOrigin_ = t.crossOrigin !== void 0 ? t.crossOrigin : null;
      const o = t.img !== void 0 ? t.img : null;
      let a = t.src;
      q(
        !(a !== void 0 && o),
        "`image` and `src` cannot be provided at the same time"
      ), (a === void 0 || a.length === 0) && o && (a = /** @type {HTMLImageElement} */
      o.src || j(o)), q(
        a !== void 0 && a.length > 0,
        "A defined and non-empty `src` or `image` must be provided"
      ), q(
        !((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0),
        "`width` or `height` cannot be provided together with `scale`"
      );
      let l;
      if (t.src !== void 0 ? l = U.IDLE : o !== void 0 && ("complete" in o ? o.complete ? l = o.src ? U.LOADED : U.IDLE : l = U.LOADING : l = U.LOADED), this.color_ = t.color !== void 0 ? fi(t.color) : null, this.iconImage_ = Zr(
        o,
        /** @type {string} */
        a,
        this.crossOrigin_,
        l,
        this.color_
      ), this.offset_ = t.offset !== void 0 ? t.offset : [0, 0], this.offsetOrigin_ = t.offsetOrigin !== void 0 ? t.offsetOrigin : "top-left", this.origin_ = null, this.size_ = t.size !== void 0 ? t.size : null, this.initialOptions_, t.width !== void 0 || t.height !== void 0) {
        let h, c;
        if (t.size)
          [h, c] = t.size;
        else {
          const u = this.getImage(1);
          if (u.width && u.height)
            h = u.width, c = u.height;
          else if (u instanceof HTMLImageElement) {
            this.initialOptions_ = t;
            const d = () => {
              if (this.unlistenImageChange(d), !this.initialOptions_)
                return;
              const f = this.iconImage_.getSize();
              this.setScale(
                $l(
                  f[0],
                  f[1],
                  t.width,
                  t.height
                )
              );
            };
            this.listenImageChange(d);
            return;
          }
        }
        h !== void 0 && this.setScale(
          $l(h, c, t.width, t.height)
        );
      }
    }
    /**
     * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
     * @return {Icon} The cloned style.
     * @api
     * @override
     */
    clone() {
      let t, e, i;
      return this.initialOptions_ ? (e = this.initialOptions_.width, i = this.initialOptions_.height) : (t = this.getScale(), t = Array.isArray(t) ? t.slice() : t), new Qr({
        anchor: this.anchor_.slice(),
        anchorOrigin: this.anchorOrigin_,
        anchorXUnits: this.anchorXUnits_,
        anchorYUnits: this.anchorYUnits_,
        color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
        crossOrigin: this.crossOrigin_,
        offset: this.offset_.slice(),
        offsetOrigin: this.offsetOrigin_,
        opacity: this.getOpacity(),
        rotateWithView: this.getRotateWithView(),
        rotation: this.getRotation(),
        scale: t,
        width: e,
        height: i,
        size: this.size_ !== null ? this.size_.slice() : void 0,
        src: this.getSrc(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
    }
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     * @return {Array<number>} Anchor.
     * @api
     * @override
     */
    getAnchor() {
      let t = this.normalizedAnchor_;
      if (!t) {
        t = this.anchor_;
        const s = this.getSize();
        if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
          if (!s)
            return null;
          t = this.anchor_.slice(), this.anchorXUnits_ == "fraction" && (t[0] *= s[0]), this.anchorYUnits_ == "fraction" && (t[1] *= s[1]);
        }
        if (this.anchorOrigin_ != "top-left") {
          if (!s)
            return null;
          t === this.anchor_ && (t = this.anchor_.slice()), (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") && (t[0] = -t[0] + s[0]), (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") && (t[1] = -t[1] + s[1]);
        }
        this.normalizedAnchor_ = t;
      }
      const e = this.getDisplacement(), i = this.getScaleArray();
      return [
        t[0] - e[0] / i[0],
        t[1] + e[1] / i[1]
      ];
    }
    /**
     * Set the anchor point. The anchor determines the center point for the
     * symbolizer.
     *
     * @param {Array<number>} anchor Anchor.
     * @api
     */
    setAnchor(t) {
      this.anchor_ = t, this.normalizedAnchor_ = null;
    }
    /**
     * Get the icon color.
     * @return {import("../color.js").Color} Color.
     * @api
     */
    getColor() {
      return this.color_;
    }
    /**
     * Get the image icon.
     * @param {number} pixelRatio Pixel ratio.
     * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image or Canvas element. If the Icon
     * style was configured with `src` or with a not let loaded `img`, an `ImageBitmap` will be returned.
     * @api
     * @override
     */
    getImage(t) {
      return this.iconImage_.getImage(t);
    }
    /**
     * Get the pixel ratio.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} The pixel ratio of the image.
     * @api
     * @override
     */
    getPixelRatio(t) {
      return this.iconImage_.getPixelRatio(t);
    }
    /**
     * @return {import("../size.js").Size} Image size.
     * @override
     */
    getImageSize() {
      return this.iconImage_.getSize();
    }
    /**
     * @return {import("../ImageState.js").default} Image state.
     * @override
     */
    getImageState() {
      return this.iconImage_.getImageState();
    }
    /**
     * @return {HTMLImageElement|HTMLCanvasElement|ImageBitmap} Image element.
     * @override
     */
    getHitDetectionImage() {
      return this.iconImage_.getHitDetectionImage();
    }
    /**
     * Get the origin of the symbolizer.
     * @return {Array<number>} Origin.
     * @api
     * @override
     */
    getOrigin() {
      if (this.origin_)
        return this.origin_;
      let t = this.offset_;
      if (this.offsetOrigin_ != "top-left") {
        const e = this.getSize(), i = this.iconImage_.getSize();
        if (!e || !i)
          return null;
        t = t.slice(), (this.offsetOrigin_ == "top-right" || this.offsetOrigin_ == "bottom-right") && (t[0] = i[0] - e[0] - t[0]), (this.offsetOrigin_ == "bottom-left" || this.offsetOrigin_ == "bottom-right") && (t[1] = i[1] - e[1] - t[1]);
      }
      return this.origin_ = t, this.origin_;
    }
    /**
     * Get the image URL.
     * @return {string|undefined} Image src.
     * @api
     */
    getSrc() {
      return this.iconImage_.getSrc();
    }
    /**
     * Get the size of the icon (in pixels).
     * @return {import("../size.js").Size} Image size.
     * @api
     * @override
     */
    getSize() {
      return this.size_ ? this.size_ : this.iconImage_.getSize();
    }
    /**
     * Get the width of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
     * @return {number} Icon width (in pixels).
     * @api
     */
    getWidth() {
      const t = this.getScaleArray();
      if (this.size_)
        return this.size_[0] * t[0];
      if (this.iconImage_.getImageState() == U.LOADED)
        return this.iconImage_.getSize()[0] * t[0];
    }
    /**
     * Get the height of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
     * @return {number} Icon height (in pixels).
     * @api
     */
    getHeight() {
      const t = this.getScaleArray();
      if (this.size_)
        return this.size_[1] * t[1];
      if (this.iconImage_.getImageState() == U.LOADED)
        return this.iconImage_.getSize()[1] * t[1];
    }
    /**
     * Set the scale.
     *
     * @param {number|import("../size.js").Size} scale Scale.
     * @api
     * @override
     */
    setScale(t) {
      delete this.initialOptions_, super.setScale(t);
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    listenImageChange(t) {
      this.iconImage_.addEventListener(Y.CHANGE, t);
    }
    /**
     * Load not yet loaded URI.
     * When rendering a feature with an icon style, the vector renderer will
     * automatically call this method. However, you might want to call this
     * method yourself for preloading or other purposes.
     * @api
     * @override
     */
    load() {
      this.iconImage_.load();
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    unlistenImageChange(t) {
      this.iconImage_.removeEventListener(Y.CHANGE, t);
    }
    /**
     * @override
     */
    ready() {
      return this.iconImage_.ready();
    }
  }
  const Vl = Qr;
  class to {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      t = t || {}, this.color_ = t.color !== void 0 ? t.color : null, this.lineCap_ = t.lineCap, this.lineDash_ = t.lineDash !== void 0 ? t.lineDash : null, this.lineDashOffset_ = t.lineDashOffset, this.lineJoin_ = t.lineJoin, this.miterLimit_ = t.miterLimit, this.width_ = t.width;
    }
    /**
     * Clones the style.
     * @return {Stroke} The cloned style.
     * @api
     */
    clone() {
      const t = this.getColor();
      return new to({
        color: Array.isArray(t) ? t.slice() : t || void 0,
        lineCap: this.getLineCap(),
        lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
        lineDashOffset: this.getLineDashOffset(),
        lineJoin: this.getLineJoin(),
        miterLimit: this.getMiterLimit(),
        width: this.getWidth()
      });
    }
    /**
     * Get the stroke color.
     * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
     * @api
     */
    getColor() {
      return this.color_;
    }
    /**
     * Get the line cap type for the stroke.
     * @return {CanvasLineCap|undefined} Line cap.
     * @api
     */
    getLineCap() {
      return this.lineCap_;
    }
    /**
     * Get the line dash style for the stroke.
     * @return {Array<number>|null} Line dash.
     * @api
     */
    getLineDash() {
      return this.lineDash_;
    }
    /**
     * Get the line dash offset for the stroke.
     * @return {number|undefined} Line dash offset.
     * @api
     */
    getLineDashOffset() {
      return this.lineDashOffset_;
    }
    /**
     * Get the line join type for the stroke.
     * @return {CanvasLineJoin|undefined} Line join.
     * @api
     */
    getLineJoin() {
      return this.lineJoin_;
    }
    /**
     * Get the miter limit for the stroke.
     * @return {number|undefined} Miter limit.
     * @api
     */
    getMiterLimit() {
      return this.miterLimit_;
    }
    /**
     * Get the stroke width.
     * @return {number|undefined} Width.
     * @api
     */
    getWidth() {
      return this.width_;
    }
    /**
     * Set the color.
     *
     * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
     * @api
     */
    setColor(t) {
      this.color_ = t;
    }
    /**
     * Set the line cap.
     *
     * @param {CanvasLineCap|undefined} lineCap Line cap.
     * @api
     */
    setLineCap(t) {
      this.lineCap_ = t;
    }
    /**
     * Set the line dash.
     *
     * @param {Array<number>|null} lineDash Line dash.
     * @api
     */
    setLineDash(t) {
      this.lineDash_ = t;
    }
    /**
     * Set the line dash offset.
     *
     * @param {number|undefined} lineDashOffset Line dash offset.
     * @api
     */
    setLineDashOffset(t) {
      this.lineDashOffset_ = t;
    }
    /**
     * Set the line join.
     *
     * @param {CanvasLineJoin|undefined} lineJoin Line join.
     * @api
     */
    setLineJoin(t) {
      this.lineJoin_ = t;
    }
    /**
     * Set the miter limit.
     *
     * @param {number|undefined} miterLimit Miter limit.
     * @api
     */
    setMiterLimit(t) {
      this.miterLimit_ = t;
    }
    /**
     * Set the width.
     *
     * @param {number|undefined} width Width.
     * @api
     */
    setWidth(t) {
      this.width_ = t;
    }
  }
  const eo = to;
  class gs {
    /**
     * @param {Options} [options] Style options.
     */
    constructor(t) {
      t = t || {}, this.geometry_ = null, this.geometryFunction_ = Hl, t.geometry !== void 0 && this.setGeometry(t.geometry), this.fill_ = t.fill !== void 0 ? t.fill : null, this.image_ = t.image !== void 0 ? t.image : null, this.renderer_ = t.renderer !== void 0 ? t.renderer : null, this.hitDetectionRenderer_ = t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.text_ = t.text !== void 0 ? t.text : null, this.zIndex_ = t.zIndex;
    }
    /**
     * Clones the style.
     * @return {Style} The cloned style.
     * @api
     */
    clone() {
      let t = this.getGeometry();
      return t && typeof t == "object" && (t = /** @type {import("../geom/Geometry.js").default} */
      t.clone()), new gs({
        geometry: t ?? void 0,
        fill: this.getFill() ? this.getFill().clone() : void 0,
        image: this.getImage() ? this.getImage().clone() : void 0,
        renderer: this.getRenderer() ?? void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        text: this.getText() ? this.getText().clone() : void 0,
        zIndex: this.getZIndex()
      });
    }
    /**
     * Get the custom renderer function that was configured with
     * {@link #setRenderer} or the `renderer` constructor option.
     * @return {RenderFunction|null} Custom renderer function.
     * @api
     */
    getRenderer() {
      return this.renderer_;
    }
    /**
     * Sets a custom renderer function for this style. When set, `fill`, `stroke`
     * and `image` options of the style will be ignored.
     * @param {RenderFunction|null} renderer Custom renderer function.
     * @api
     */
    setRenderer(t) {
      this.renderer_ = t;
    }
    /**
     * Sets a custom renderer function for this style used
     * in hit detection.
     * @param {RenderFunction|null} renderer Custom renderer function.
     * @api
     */
    setHitDetectionRenderer(t) {
      this.hitDetectionRenderer_ = t;
    }
    /**
     * Get the custom renderer function that was configured with
     * {@link #setHitDetectionRenderer} or the `hitDetectionRenderer` constructor option.
     * @return {RenderFunction|null} Custom renderer function.
     * @api
     */
    getHitDetectionRenderer() {
      return this.hitDetectionRenderer_;
    }
    /**
     * Get the geometry to be rendered.
     * @return {string|import("../geom/Geometry.js").default|GeometryFunction|null}
     * Feature property or geometry or function that returns the geometry that will
     * be rendered with this style.
     * @api
     */
    getGeometry() {
      return this.geometry_;
    }
    /**
     * Get the function used to generate a geometry for rendering.
     * @return {!GeometryFunction} Function that is called with a feature
     * and returns the geometry to render instead of the feature's geometry.
     * @api
     */
    getGeometryFunction() {
      return this.geometryFunction_;
    }
    /**
     * Get the fill style.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getFill() {
      return this.fill_;
    }
    /**
     * Set the fill style.
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setFill(t) {
      this.fill_ = t;
    }
    /**
     * Get the image style.
     * @return {import("./Image.js").default|null} Image style.
     * @api
     */
    getImage() {
      return this.image_;
    }
    /**
     * Set the image style.
     * @param {import("./Image.js").default} image Image style.
     * @api
     */
    setImage(t) {
      this.image_ = t;
    }
    /**
     * Get the stroke style.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getStroke() {
      return this.stroke_;
    }
    /**
     * Set the stroke style.
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setStroke(t) {
      this.stroke_ = t;
    }
    /**
     * Get the text style.
     * @return {import("./Text.js").default|null} Text style.
     * @api
     */
    getText() {
      return this.text_;
    }
    /**
     * Set the text style.
     * @param {import("./Text.js").default} text Text style.
     * @api
     */
    setText(t) {
      this.text_ = t;
    }
    /**
     * Get the z-index for the style.
     * @return {number|undefined} ZIndex.
     * @api
     */
    getZIndex() {
      return this.zIndex_;
    }
    /**
     * Set a geometry that is rendered instead of the feature's geometry.
     *
     * @param {string|import("../geom/Geometry.js").default|GeometryFunction|null} geometry
     *     Feature property or geometry or function returning a geometry to render
     *     for this style.
     * @api
     */
    setGeometry(t) {
      typeof t == "function" ? this.geometryFunction_ = t : typeof t == "string" ? this.geometryFunction_ = function(e) {
        return (
          /** @type {import("../geom/Geometry.js").default} */
          e.get(t)
        );
      } : t ? t !== void 0 && (this.geometryFunction_ = function() {
        return (
          /** @type {import("../geom/Geometry.js").default} */
          t
        );
      }) : this.geometryFunction_ = Hl, this.geometry_ = t;
    }
    /**
     * Set the z-index.
     *
     * @param {number|undefined} zIndex ZIndex.
     * @api
     */
    setZIndex(t) {
      this.zIndex_ = t;
    }
  }
  function dg(n) {
    let t;
    if (typeof n == "function")
      t = n;
    else {
      let e;
      Array.isArray(n) ? e = n : (q(
        typeof /** @type {?} */
        n.getZIndex == "function",
        "Expected an `Style` or an array of `Style`"
      ), e = [
        /** @type {Style} */
        n
      ]), t = function() {
        return e;
      };
    }
    return t;
  }
  let io = null;
  function jl(n, t) {
    if (!io) {
      const e = new fs({
        color: "rgba(255,255,255,0.4)"
      }), i = new eo({
        color: "#3399CC",
        width: 1.25
      });
      io = [
        new gs({
          image: new qr({
            fill: e,
            stroke: i,
            radius: 5
          }),
          fill: e,
          stroke: i
        })
      ];
    }
    return io;
  }
  function Hl(n) {
    return n.getGeometry();
  }
  const ln = gs, fg = "#333";
  class no {
    /**
     * @param {Options} [options] Options.
     */
    constructor(t) {
      t = t || {}, this.font_ = t.font, this.rotation_ = t.rotation, this.rotateWithView_ = t.rotateWithView, this.keepUpright_ = t.keepUpright, this.scale_ = t.scale, this.scaleArray_ = St(t.scale !== void 0 ? t.scale : 1), this.text_ = t.text, this.textAlign_ = t.textAlign, this.justify_ = t.justify, this.repeat_ = t.repeat, this.textBaseline_ = t.textBaseline, this.fill_ = t.fill !== void 0 ? t.fill : new fs({ color: fg }), this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4, this.placement_ = t.placement !== void 0 ? t.placement : "point", this.overflow_ = !!t.overflow, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0, this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0, this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null, this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null, this.padding_ = t.padding === void 0 ? null : t.padding, this.declutterMode_ = t.declutterMode;
    }
    /**
     * Clones the style.
     * @return {Text} The cloned style.
     * @api
     */
    clone() {
      const t = this.getScale();
      return new no({
        font: this.getFont(),
        placement: this.getPlacement(),
        repeat: this.getRepeat(),
        maxAngle: this.getMaxAngle(),
        overflow: this.getOverflow(),
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        keepUpright: this.getKeepUpright(),
        scale: Array.isArray(t) ? t.slice() : t,
        text: this.getText(),
        textAlign: this.getTextAlign(),
        justify: this.getJustify(),
        textBaseline: this.getTextBaseline(),
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        offsetX: this.getOffsetX(),
        offsetY: this.getOffsetY(),
        backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
        backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0,
        padding: this.getPadding() || void 0,
        declutterMode: this.getDeclutterMode()
      });
    }
    /**
     * Get the `overflow` configuration.
     * @return {boolean} Let text overflow the length of the path they follow.
     * @api
     */
    getOverflow() {
      return this.overflow_;
    }
    /**
     * Get the font name.
     * @return {string|undefined} Font.
     * @api
     */
    getFont() {
      return this.font_;
    }
    /**
     * Get the maximum angle between adjacent characters.
     * @return {number} Angle in radians.
     * @api
     */
    getMaxAngle() {
      return this.maxAngle_;
    }
    /**
     * Get the label placement.
     * @return {TextPlacement} Text placement.
     * @api
     */
    getPlacement() {
      return this.placement_;
    }
    /**
     * Get the repeat interval of the text.
     * @return {number|undefined} Repeat interval in pixels.
     * @api
     */
    getRepeat() {
      return this.repeat_;
    }
    /**
     * Get the x-offset for the text.
     * @return {number} Horizontal text offset.
     * @api
     */
    getOffsetX() {
      return this.offsetX_;
    }
    /**
     * Get the y-offset for the text.
     * @return {number} Vertical text offset.
     * @api
     */
    getOffsetY() {
      return this.offsetY_;
    }
    /**
     * Get the fill style for the text.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getFill() {
      return this.fill_;
    }
    /**
     * Determine whether the text rotates with the map.
     * @return {boolean|undefined} Rotate with map.
     * @api
     */
    getRotateWithView() {
      return this.rotateWithView_;
    }
    /**
     * Determine whether the text can be rendered upside down.
     * @return {boolean|undefined} Keep text upright.
     * @api
     */
    getKeepUpright() {
      return this.keepUpright_;
    }
    /**
     * Get the text rotation.
     * @return {number|undefined} Rotation.
     * @api
     */
    getRotation() {
      return this.rotation_;
    }
    /**
     * Get the text scale.
     * @return {number|import("../size.js").Size|undefined} Scale.
     * @api
     */
    getScale() {
      return this.scale_;
    }
    /**
     * Get the symbolizer scale array.
     * @return {import("../size.js").Size} Scale array.
     */
    getScaleArray() {
      return this.scaleArray_;
    }
    /**
     * Get the stroke style for the text.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getStroke() {
      return this.stroke_;
    }
    /**
     * Get the text to be rendered.
     * @return {string|Array<string>|undefined} Text.
     * @api
     */
    getText() {
      return this.text_;
    }
    /**
     * Get the text alignment.
     * @return {CanvasTextAlign|undefined} Text align.
     * @api
     */
    getTextAlign() {
      return this.textAlign_;
    }
    /**
     * Get the justification.
     * @return {TextJustify|undefined} Justification.
     * @api
     */
    getJustify() {
      return this.justify_;
    }
    /**
     * Get the text baseline.
     * @return {CanvasTextBaseline|undefined} Text baseline.
     * @api
     */
    getTextBaseline() {
      return this.textBaseline_;
    }
    /**
     * Get the background fill style for the text.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getBackgroundFill() {
      return this.backgroundFill_;
    }
    /**
     * Get the background stroke style for the text.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getBackgroundStroke() {
      return this.backgroundStroke_;
    }
    /**
     * Get the padding for the text.
     * @return {Array<number>|null} Padding.
     * @api
     */
    getPadding() {
      return this.padding_;
    }
    /**
     * Get the declutter mode of the shape
     * @return {import("./Style.js").DeclutterMode} Shape's declutter mode
     * @api
     */
    getDeclutterMode() {
      return this.declutterMode_;
    }
    /**
     * Set the `overflow` property.
     *
     * @param {boolean} overflow Let text overflow the path that it follows.
     * @api
     */
    setOverflow(t) {
      this.overflow_ = t;
    }
    /**
     * Set the font.
     *
     * @param {string|undefined} font Font.
     * @api
     */
    setFont(t) {
      this.font_ = t;
    }
    /**
     * Set the maximum angle between adjacent characters.
     *
     * @param {number} maxAngle Angle in radians.
     * @api
     */
    setMaxAngle(t) {
      this.maxAngle_ = t;
    }
    /**
     * Set the x offset.
     *
     * @param {number} offsetX Horizontal text offset.
     * @api
     */
    setOffsetX(t) {
      this.offsetX_ = t;
    }
    /**
     * Set the y offset.
     *
     * @param {number} offsetY Vertical text offset.
     * @api
     */
    setOffsetY(t) {
      this.offsetY_ = t;
    }
    /**
     * Set the text placement.
     *
     * @param {TextPlacement} placement Placement.
     * @api
     */
    setPlacement(t) {
      this.placement_ = t;
    }
    /**
     * Set the repeat interval of the text.
     * @param {number|undefined} [repeat] Repeat interval in pixels.
     * @api
     */
    setRepeat(t) {
      this.repeat_ = t;
    }
    /**
     * Set whether to rotate the text with the view.
     *
     * @param {boolean} rotateWithView Rotate with map.
     * @api
     */
    setRotateWithView(t) {
      this.rotateWithView_ = t;
    }
    /**
     * Set whether the text can be rendered upside down.
     *
     * @param {boolean} keepUpright Keep text upright.
     * @api
     */
    setKeepUpright(t) {
      this.keepUpright_ = t;
    }
    /**
     * Set the fill.
     *
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setFill(t) {
      this.fill_ = t;
    }
    /**
     * Set the rotation.
     *
     * @param {number|undefined} rotation Rotation.
     * @api
     */
    setRotation(t) {
      this.rotation_ = t;
    }
    /**
     * Set the scale.
     *
     * @param {number|import("../size.js").Size|undefined} scale Scale.
     * @api
     */
    setScale(t) {
      this.scale_ = t, this.scaleArray_ = St(t !== void 0 ? t : 1);
    }
    /**
     * Set the stroke.
     *
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setStroke(t) {
      this.stroke_ = t;
    }
    /**
     * Set the text.
     *
     * @param {string|Array<string>|undefined} text Text.
     * @api
     */
    setText(t) {
      this.text_ = t;
    }
    /**
     * Set the text alignment.
     *
     * @param {CanvasTextAlign|undefined} textAlign Text align.
     * @api
     */
    setTextAlign(t) {
      this.textAlign_ = t;
    }
    /**
     * Set the justification.
     *
     * @param {TextJustify|undefined} justify Justification.
     * @api
     */
    setJustify(t) {
      this.justify_ = t;
    }
    /**
     * Set the text baseline.
     *
     * @param {CanvasTextBaseline|undefined} textBaseline Text baseline.
     * @api
     */
    setTextBaseline(t) {
      this.textBaseline_ = t;
    }
    /**
     * Set the background fill.
     *
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setBackgroundFill(t) {
      this.backgroundFill_ = t;
    }
    /**
     * Set the background stroke.
     *
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setBackgroundStroke(t) {
      this.backgroundStroke_ = t;
    }
    /**
     * Set the padding (`[top, right, bottom, left]`).
     *
     * @param {Array<number>|null} padding Padding.
     * @api
     */
    setPadding(t) {
      this.padding_ = t;
    }
  }
  const gg = no;
  function _g(n) {
    return !0;
  }
  function mg(n) {
    const t = Dl(), e = pg(n, t), i = Gl();
    return function(s, r) {
      if (i.properties = s.getPropertiesInternal(), i.resolution = r, t.featureId) {
        const o = s.getId();
        o !== void 0 ? i.featureId = o : i.featureId = null;
      }
      return t.geometryType && (i.geometryType = Nl(
        s.getGeometry()
      )), e(i);
    };
  }
  function ql(n) {
    const t = Dl(), e = n.length, i = new Array(e);
    for (let o = 0; o < e; ++o)
      i[o] = so(n[o], t);
    const s = Gl(), r = new Array(e);
    return function(o, a) {
      if (s.properties = o.getPropertiesInternal(), s.resolution = a, t.featureId) {
        const h = o.getId();
        h !== void 0 ? s.featureId = h : s.featureId = null;
      }
      let l = 0;
      for (let h = 0; h < e; ++h) {
        const c = i[h](s);
        c && (r[l] = c, l += 1);
      }
      return r.length = l, r;
    };
  }
  function pg(n, t) {
    const e = n.length, i = new Array(e);
    for (let s = 0; s < e; ++s) {
      const r = n[s], o = "filter" in r ? le(r.filter, xt, t) : _g;
      let a;
      if (Array.isArray(r.style)) {
        const l = r.style.length;
        a = new Array(l);
        for (let h = 0; h < l; ++h)
          a[h] = so(r.style[h], t);
      } else
        a = [so(r.style, t)];
      i[s] = { filter: o, styles: a };
    }
    return function(s) {
      const r = [];
      let o = !1;
      for (let a = 0; a < e; ++a) {
        const l = i[a].filter;
        if (l(s) && !(n[a].else && o)) {
          o = !0;
          for (const h of i[a].styles) {
            const c = h(s);
            c && r.push(c);
          }
        }
      }
      return r;
    };
  }
  function so(n, t) {
    const e = hn(n, "", t), i = cn(n, "", t), s = yg(n, t), r = Eg(n, t), o = At(n, "z-index", t);
    if (!e && !i && !s && !r && !ti(n))
      throw new Error(
        "No fill, stroke, point, or text symbolizer properties in style: " + JSON.stringify(n)
      );
    const a = new ln();
    return function(l) {
      let h = !0;
      if (e) {
        const c = e(l);
        c && (h = !1), a.setFill(c);
      }
      if (i) {
        const c = i(l);
        c && (h = !1), a.setStroke(c);
      }
      if (s) {
        const c = s(l);
        c && (h = !1), a.setText(c);
      }
      if (r) {
        const c = r(l);
        c && (h = !1), a.setImage(c);
      }
      return o && a.setZIndex(o(l)), h ? null : a;
    };
  }
  function hn(n, t, e) {
    let i;
    if (t + "fill-pattern-src" in n)
      i = vg(n, t + "fill-", e);
    else {
      if (n[t + "fill-color"] === "none")
        return (r) => null;
      i = ro(
        n,
        t + "fill-color",
        e
      );
    }
    if (!i)
      return null;
    const s = new fs();
    return function(r) {
      const o = i(r);
      return o === Or ? null : (s.setColor(o), s);
    };
  }
  function cn(n, t, e) {
    const i = At(
      n,
      t + "stroke-width",
      e
    ), s = ro(
      n,
      t + "stroke-color",
      e
    );
    if (!i && !s)
      return null;
    const r = ue(
      n,
      t + "stroke-line-cap",
      e
    ), o = ue(
      n,
      t + "stroke-line-join",
      e
    ), a = Jl(
      n,
      t + "stroke-line-dash",
      e
    ), l = At(
      n,
      t + "stroke-line-dash-offset",
      e
    ), h = At(
      n,
      t + "stroke-miter-limit",
      e
    ), c = new eo();
    return function(u) {
      if (s) {
        const d = s(u);
        if (d === Or)
          return null;
        c.setColor(d);
      }
      if (i && c.setWidth(i(u)), r) {
        const d = r(u);
        if (d !== "butt" && d !== "round" && d !== "square")
          throw new Error("Expected butt, round, or square line cap");
        c.setLineCap(d);
      }
      if (o) {
        const d = o(u);
        if (d !== "bevel" && d !== "round" && d !== "miter")
          throw new Error("Expected bevel, round, or miter line join");
        c.setLineJoin(d);
      }
      return a && c.setLineDash(a(u)), l && c.setLineDashOffset(l(u)), h && c.setMiterLimit(h(u)), c;
    };
  }
  function yg(n, t) {
    const e = "text-", i = ue(n, e + "value", t);
    if (!i)
      return null;
    const s = hn(n, e, t), r = hn(
      n,
      e + "background-",
      t
    ), o = cn(n, e, t), a = cn(
      n,
      e + "background-",
      t
    ), l = ue(n, e + "font", t), h = At(
      n,
      e + "max-angle",
      t
    ), c = At(
      n,
      e + "offset-x",
      t
    ), u = At(
      n,
      e + "offset-y",
      t
    ), d = yi(
      n,
      e + "overflow",
      t
    ), f = ue(
      n,
      e + "placement",
      t
    ), g = At(n, e + "repeat", t), p = ms(n, e + "scale", t), _ = yi(
      n,
      e + "rotate-with-view",
      t
    ), m = At(
      n,
      e + "rotation",
      t
    ), y = ue(n, e + "align", t), w = ue(
      n,
      e + "justify",
      t
    ), E = ue(
      n,
      e + "baseline",
      t
    ), x = yi(
      n,
      e + "keep-upright",
      t
    ), C = Jl(
      n,
      e + "padding",
      t
    ), T = ys(
      n,
      e + "declutter-mode"
    ), R = new gg({ declutterMode: T });
    return function(S) {
      if (R.setText(i(S)), s && R.setFill(s(S)), r && R.setBackgroundFill(r(S)), o && R.setStroke(o(S)), a && R.setBackgroundStroke(a(S)), l && R.setFont(l(S)), h && R.setMaxAngle(h(S)), c && R.setOffsetX(c(S)), u && R.setOffsetY(u(S)), d && R.setOverflow(d(S)), f) {
        const L = f(S);
        if (L !== "point" && L !== "line")
          throw new Error("Expected point or line for text-placement");
        R.setPlacement(L);
      }
      if (g && R.setRepeat(g(S)), p && R.setScale(p(S)), _ && R.setRotateWithView(_(S)), m && R.setRotation(m(S)), y) {
        const L = y(S);
        if (L !== "left" && L !== "center" && L !== "right" && L !== "end" && L !== "start")
          throw new Error(
            "Expected left, right, center, start, or end for text-align"
          );
        R.setTextAlign(L);
      }
      if (w) {
        const L = w(S);
        if (L !== "left" && L !== "right" && L !== "center")
          throw new Error("Expected left, right, or center for text-justify");
        R.setJustify(L);
      }
      if (E) {
        const L = E(S);
        if (L !== "bottom" && L !== "top" && L !== "middle" && L !== "alphabetic" && L !== "hanging")
          throw new Error(
            "Expected bottom, top, middle, alphabetic, or hanging for text-baseline"
          );
        R.setTextBaseline(L);
      }
      return C && R.setPadding(C(S)), x && R.setKeepUpright(x(S)), R;
    };
  }
  function Eg(n, t) {
    return "icon-src" in n ? xg(n, t) : "shape-points" in n ? wg(n, t) : "circle-radius" in n ? Cg(n, t) : null;
  }
  function xg(n, t) {
    const e = "icon-", i = e + "src", s = ih(n[i], i), r = _s(
      n,
      e + "anchor",
      t
    ), o = ms(n, e + "scale", t), a = At(
      n,
      e + "opacity",
      t
    ), l = _s(
      n,
      e + "displacement",
      t
    ), h = At(
      n,
      e + "rotation",
      t
    ), c = yi(
      n,
      e + "rotate-with-view",
      t
    ), u = th(n, e + "anchor-origin"), d = eh(
      n,
      e + "anchor-x-units"
    ), f = eh(
      n,
      e + "anchor-y-units"
    ), g = Ig(n, e + "color"), p = Tg(n, e + "cross-origin"), _ = Sg(n, e + "offset"), m = th(n, e + "offset-origin"), y = ps(n, e + "width"), w = ps(n, e + "height"), E = Rg(n, e + "size"), x = ys(
      n,
      e + "declutter-mode"
    ), C = new Vl({
      src: s,
      anchorOrigin: u,
      anchorXUnits: d,
      anchorYUnits: f,
      color: g,
      crossOrigin: p,
      offset: _,
      offsetOrigin: m,
      height: w,
      width: y,
      size: E,
      declutterMode: x
    });
    return function(T) {
      return a && C.setOpacity(a(T)), l && C.setDisplacement(l(T)), h && C.setRotation(h(T)), c && C.setRotateWithView(c(T)), o && C.setScale(o(T)), r && C.setAnchor(r(T)), C;
    };
  }
  function wg(n, t) {
    const e = "shape-", i = e + "points", s = e + "radius", r = oo(n[i], i), o = oo(n[s], s), a = hn(n, e, t), l = cn(n, e, t), h = ms(n, e + "scale", t), c = _s(
      n,
      e + "displacement",
      t
    ), u = At(
      n,
      e + "rotation",
      t
    ), d = yi(
      n,
      e + "rotate-with-view",
      t
    ), f = ps(n, e + "radius2"), g = ps(n, e + "angle"), p = ys(
      n,
      e + "declutter-mode"
    ), _ = new Zl({
      points: r,
      radius: o,
      radius2: f,
      angle: g,
      declutterMode: p
    });
    return function(m) {
      return a && _.setFill(a(m)), l && _.setStroke(l(m)), c && _.setDisplacement(c(m)), u && _.setRotation(u(m)), d && _.setRotateWithView(d(m)), h && _.setScale(h(m)), _;
    };
  }
  function Cg(n, t) {
    const e = "circle-", i = hn(n, e, t), s = cn(n, e, t), r = At(n, e + "radius", t), o = ms(n, e + "scale", t), a = _s(
      n,
      e + "displacement",
      t
    ), l = At(
      n,
      e + "rotation",
      t
    ), h = yi(
      n,
      e + "rotate-with-view",
      t
    ), c = ys(
      n,
      e + "declutter-mode"
    ), u = new qr({
      radius: 5,
      // this is arbitrary, but required - the evaluated radius is used below
      declutterMode: c
    });
    return function(d) {
      return r && u.setRadius(r(d)), i && u.setFill(i(d)), s && u.setStroke(s(d)), a && u.setDisplacement(a(d)), l && u.setRotation(l(d)), h && u.setRotateWithView(h(d)), o && u.setScale(o(d)), u;
    };
  }
  function At(n, t, e) {
    if (!(t in n))
      return;
    const i = le(n[t], Z, e);
    return function(s) {
      return oo(i(s), t);
    };
  }
  function ue(n, t, e) {
    if (!(t in n))
      return null;
    const i = le(n[t], It, e);
    return function(s) {
      return ih(i(s), t);
    };
  }
  function vg(n, t, e) {
    const i = ue(
      n,
      t + "pattern-src",
      e
    ), s = Ql(
      n,
      t + "pattern-offset",
      e
    ), r = Ql(
      n,
      t + "pattern-size",
      e
    ), o = ro(
      n,
      t + "color",
      e
    );
    return function(a) {
      return {
        src: i(a),
        offset: s && s(a),
        size: r && r(a),
        color: o && o(a)
      };
    };
  }
  function yi(n, t, e) {
    if (!(t in n))
      return null;
    const i = le(n[t], xt, e);
    return function(s) {
      const r = i(s);
      if (typeof r != "boolean")
        throw new Error(`Expected a boolean for ${t}`);
      return r;
    };
  }
  function ro(n, t, e) {
    if (!(t in n))
      return null;
    const i = le(n[t], Ut, e);
    return function(s) {
      return nh(i(s), t);
    };
  }
  function Jl(n, t, e) {
    if (!(t in n))
      return null;
    const i = le(n[t], Ue, e);
    return function(s) {
      return un(i(s), t);
    };
  }
  function _s(n, t, e) {
    if (!(t in n))
      return null;
    const i = le(n[t], Ue, e);
    return function(s) {
      const r = un(i(s), t);
      if (r.length !== 2)
        throw new Error(`Expected two numbers for ${t}`);
      return r;
    };
  }
  function Ql(n, t, e) {
    if (!(t in n))
      return null;
    const i = le(n[t], Ue, e);
    return function(s) {
      return sh(i(s), t);
    };
  }
  function ms(n, t, e) {
    if (!(t in n))
      return null;
    const i = le(
      n[t],
      Ue | Z,
      e
    );
    return function(s) {
      return Lg(i(s), t);
    };
  }
  function ps(n, t) {
    const e = n[t];
    if (e !== void 0) {
      if (typeof e != "number")
        throw new Error(`Expected a number for ${t}`);
      return e;
    }
  }
  function Rg(n, t) {
    const e = n[t];
    if (e !== void 0) {
      if (typeof e == "number")
        return St(e);
      if (!Array.isArray(e))
        throw new Error(`Expected a number or size array for ${t}`);
      if (e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number")
        throw new Error(`Expected a number or size array for ${t}`);
      return e;
    }
  }
  function Tg(n, t) {
    const e = n[t];
    if (e !== void 0) {
      if (typeof e != "string")
        throw new Error(`Expected a string for ${t}`);
      return e;
    }
  }
  function th(n, t) {
    const e = n[t];
    if (e !== void 0) {
      if (e !== "bottom-left" && e !== "bottom-right" && e !== "top-left" && e !== "top-right")
        throw new Error(
          `Expected bottom-left, bottom-right, top-left, or top-right for ${t}`
        );
      return e;
    }
  }
  function eh(n, t) {
    const e = n[t];
    if (e !== void 0) {
      if (e !== "pixels" && e !== "fraction")
        throw new Error(`Expected pixels or fraction for ${t}`);
      return e;
    }
  }
  function Sg(n, t) {
    const e = n[t];
    if (e !== void 0)
      return un(e, t);
  }
  function ys(n, t) {
    const e = n[t];
    if (e !== void 0) {
      if (typeof e != "string")
        throw new Error(`Expected a string for ${t}`);
      if (e !== "declutter" && e !== "obstacle" && e !== "none")
        throw new Error(`Expected declutter, obstacle, or none for ${t}`);
      return e;
    }
  }
  function Ig(n, t) {
    const e = n[t];
    if (e !== void 0)
      return nh(e, t);
  }
  function un(n, t) {
    if (!Array.isArray(n))
      throw new Error(`Expected an array for ${t}`);
    const e = n.length;
    for (let i = 0; i < e; ++i)
      if (typeof n[i] != "number")
        throw new Error(`Expected an array of numbers for ${t}`);
    return n;
  }
  function ih(n, t) {
    if (typeof n != "string")
      throw new Error(`Expected a string for ${t}`);
    return n;
  }
  function oo(n, t) {
    if (typeof n != "number")
      throw new Error(`Expected a number for ${t}`);
    return n;
  }
  function nh(n, t) {
    if (typeof n == "string")
      return n;
    const e = un(n, t), i = e.length;
    if (i < 3 || i > 4)
      throw new Error(`Expected a color with 3 or 4 values for ${t}`);
    return e;
  }
  function sh(n, t) {
    const e = un(n, t);
    if (e.length !== 2)
      throw new Error(`Expected an array of two numbers for ${t}`);
    return e;
  }
  function Lg(n, t) {
    return typeof n == "number" ? n : sh(n, t);
  }
  const rh = {
    RENDER_ORDER: "renderOrder"
  };
  class Ag extends as {
    /**
     * @param {Options<FeatureType, VectorSourceType>} [options] Options.
     */
    constructor(t) {
      t = t || {};
      const e = Object.assign({}, t);
      delete e.style, delete e.renderBuffer, delete e.updateWhileAnimating, delete e.updateWhileInteracting, super(e), this.declutter_ = t.declutter ? String(t.declutter) : void 0, this.renderBuffer_ = t.renderBuffer !== void 0 ? t.renderBuffer : 100, this.style_ = null, this.styleFunction_ = void 0, this.setStyle(t.style), this.updateWhileAnimating_ = t.updateWhileAnimating !== void 0 ? t.updateWhileAnimating : !1, this.updateWhileInteracting_ = t.updateWhileInteracting !== void 0 ? t.updateWhileInteracting : !1;
    }
    /**
     * @return {string} Declutter group.
     * @override
     */
    getDeclutter() {
      return this.declutter_;
    }
    /**
     * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
     * that resolves with an array of features. The array will either contain the topmost feature
     * when a hit was detected, or it will be empty.
     *
     * The hit detection algorithm used for this method is optimized for performance, but is less
     * accurate than the one used in [map.getFeaturesAtPixel()]{@link import("../Map.js").default#getFeaturesAtPixel}.
     * Text is not considered, and icons are only represented by their bounding box instead of the exact
     * image.
     *
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with an array of features.
     * @api
     * @override
     */
    getFeatures(t) {
      return super.getFeatures(t);
    }
    /**
     * @return {number|undefined} Render buffer.
     */
    getRenderBuffer() {
      return this.renderBuffer_;
    }
    /**
     * @return {import("../render.js").OrderFunction|null|undefined} Render order.
     */
    getRenderOrder() {
      return (
        /** @type {import("../render.js").OrderFunction|null|undefined} */
        this.get(rh.RENDER_ORDER)
      );
    }
    /**
     * Get the style for features.  This returns whatever was passed to the `style`
     * option at construction or to the `setStyle` method.
     * @return {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null|undefined} Layer style.
     * @api
     */
    getStyle() {
      return this.style_;
    }
    /**
     * Get the style function.
     * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
     * @api
     */
    getStyleFunction() {
      return this.styleFunction_;
    }
    /**
     * @return {boolean} Whether the rendered layer should be updated while
     *     animating.
     */
    getUpdateWhileAnimating() {
      return this.updateWhileAnimating_;
    }
    /**
     * @return {boolean} Whether the rendered layer should be updated while
     *     interacting.
     */
    getUpdateWhileInteracting() {
      return this.updateWhileInteracting_;
    }
    /**
     * Render declutter items for this layer
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {import("../layer/Layer.js").State} layerState Layer state.
     * @override
     */
    renderDeclutter(t, e) {
      const i = this.getDeclutter();
      i in t.declutter || (t.declutter[i] = new Ll(9)), this.getRenderer().renderDeclutter(t, e);
    }
    /**
     * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
     *     Render order.
     */
    setRenderOrder(t) {
      this.set(rh.RENDER_ORDER, t);
    }
    /**
     * Set the style for features.  This can be a single style object, an array
     * of styles, or a function that takes a feature and resolution and returns
     * an array of styles. If set to `null`, the layer has no style (a `null` style),
     * so only features that have their own styles will be rendered in the layer. Call
     * `setStyle()` without arguments to reset to the default style. See
     * [the ol/style/Style module]{@link module:ol/style/Style~Style} for information on the default style.
     *
     * If your layer has a static style, you can use [flat style]{@link module:ol/style/flat~FlatStyle} object
     * literals instead of using the `Style` and symbolizer constructors (`Fill`, `Stroke`, etc.):
     * ```js
     * vectorLayer.setStyle({
     *   "fill-color": "yellow",
     *   "stroke-color": "black",
     *   "stroke-width": 4
     * })
     * ```
     *
     * @param {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null} [style] Layer style.
     * @api
     */
    setStyle(t) {
      this.style_ = t === void 0 ? jl : t;
      const e = bg(t);
      this.styleFunction_ = t === null ? void 0 : dg(e), this.changed();
    }
    /**
     * @param {boolean|string|number} declutter Declutter images and text.
     * @api
     */
    setDeclutter(t) {
      this.declutter_ = t ? String(t) : void 0, this.changed();
    }
  }
  function bg(n) {
    if (n === void 0)
      return jl;
    if (!n)
      return null;
    if (typeof n == "function" || n instanceof ln)
      return n;
    if (!Array.isArray(n))
      return ql([n]);
    if (n.length === 0)
      return [];
    const t = n.length, e = n[0];
    if (e instanceof ln) {
      const s = new Array(t);
      for (let r = 0; r < t; ++r) {
        const o = n[r];
        if (!(o instanceof ln))
          throw new Error("Expected a list of style instances");
        s[r] = o;
      }
      return s;
    }
    if ("style" in e) {
      const s = new Array(t);
      for (let r = 0; r < t; ++r) {
        const o = n[r];
        if (!("style" in o))
          throw new Error("Expected a list of rules with a style property");
        s[r] = o;
      }
      return mg(s);
    }
    return ql(
      /** @type {Array<import("../style/flat.js").FlatStyle>} */
      n
    );
  }
  const oh = Ag;
  class Mg extends re {
    /**
     * @param {import("./EventType.js").default} type Type.
     * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
     *     CSS pixels to rendered pixels.
     * @param {import("../Map.js").FrameState} [frameState] Frame state.
     * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
     */
    constructor(t, e, i, s) {
      super(t), this.inversePixelTransform = e, this.frameState = i, this.context = s;
    }
  }
  const ah = Mg;
  class Pg extends Ln {
    /**
     * @param {import("../Map.js").default} map Map.
     */
    constructor(t) {
      super(), this.map_ = t;
    }
    /**
     * @abstract
     * @param {import("../render/EventType.js").default} type Event type.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     */
    dispatchRenderEvent(t, e) {
      V();
    }
    /**
     * @param {import("../Map.js").FrameState} frameState FrameState.
     * @protected
     */
    calculateMatrices2D(t) {
      const e = t.viewState, i = t.coordinateToPixelTransform, s = t.pixelToCoordinateTransform;
      ae(
        i,
        t.size[0] / 2,
        t.size[1] / 2,
        1 / e.resolution,
        -1 / e.resolution,
        -e.rotation,
        -e.center[0],
        -e.center[1]
      ), ja(s, i);
    }
    /**
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../Map.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {boolean} checkWrapped Check for wrapped geometries.
     * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
     * @param {S} thisArg Value to use as `this` when executing `callback`.
     * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
     *     function, only layers which are visible and for which this function
     *     returns `true` will be tested for features.  By default, all visible
     *     layers will be tested.
     * @param {U} thisArg2 Value to use as `this` when executing `layerFilter`.
     * @return {T|undefined} Callback result.
     * @template S,T,U
     */
    forEachFeatureAtCoordinate(t, e, i, s, r, o, a, l) {
      let h;
      const c = e.viewState;
      function u(E, x, C, T) {
        return r.call(o, x, E ? C : null, T);
      }
      const d = c.projection, f = Aa(t.slice(), d), g = [[0, 0]];
      if (d.canWrapX() && s) {
        const E = d.getExtent(), x = J(E);
        g.push([-x, 0], [x, 0]);
      }
      const p = e.layerStatesArray, _ = p.length, m = (
        /** @type {Array<HitMatch<T>>} */
        []
      ), y = [];
      for (let E = 0; E < g.length; E++)
        for (let x = _ - 1; x >= 0; --x) {
          const C = p[x], T = C.layer;
          if (T.hasRenderer() && Mr(C, c) && a.call(l, T)) {
            const R = T.getRenderer(), S = T.getSource();
            if (R && S) {
              const L = S.getWrapX() ? f : t, A = u.bind(
                null,
                C.managed
              );
              y[0] = L[0] + g[E][0], y[1] = L[1] + g[E][1], h = R.forEachFeatureAtCoordinate(
                y,
                e,
                i,
                A,
                m
              );
            }
            if (h)
              return h;
          }
        }
      if (m.length === 0)
        return;
      const w = 1 / m.length;
      return m.forEach((E, x) => E.distanceSq += x * w), m.sort((E, x) => E.distanceSq - x.distanceSq), m.some((E) => h = E.callback(E.feature, E.layer, E.geometry)), h;
    }
    /**
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../Map.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {boolean} checkWrapped Check for wrapped geometries.
     * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
     *     function, only layers which are visible and for which this function
     *     returns `true` will be tested for features.  By default, all visible
     *     layers will be tested.
     * @param {U} thisArg Value to use as `this` when executing `layerFilter`.
     * @return {boolean} Is there a feature at the given coordinate?
     * @template U
     */
    hasFeatureAtCoordinate(t, e, i, s, r, o) {
      return this.forEachFeatureAtCoordinate(
        t,
        e,
        i,
        s,
        Di,
        this,
        r,
        o
      ) !== void 0;
    }
    /**
     * @return {import("../Map.js").default} Map.
     */
    getMap() {
      return this.map_;
    }
    /**
     * Render.
     * @abstract
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     */
    renderFrame(t) {
      V();
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @protected
     */
    scheduleExpireIconCache(t) {
      kt.canExpireCache() && t.postRenderFunctions.push(Dg);
    }
  }
  function Dg(n, t) {
    kt.expire();
  }
  const Og = Pg;
  class Fg extends Og {
    /**
     * @param {import("../Map.js").default} map Map.
     */
    constructor(t) {
      super(t), this.fontChangeListenerKey_ = $(
        pi,
        Qe.PROPERTYCHANGE,
        t.redrawText,
        t
      ), this.element_ = document.createElement("div");
      const e = this.element_.style;
      e.position = "absolute", e.width = "100%", e.height = "100%", e.zIndex = "0", this.element_.className = ns + " ol-layers";
      const i = t.getViewport();
      i.insertBefore(this.element_, i.firstChild || null), this.children_ = [], this.renderedVisible_ = !0;
    }
    /**
     * @param {import("../render/EventType.js").default} type Event type.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @override
     */
    dispatchRenderEvent(t, e) {
      const i = this.getMap();
      if (i.hasListener(t)) {
        const s = new ah(t, void 0, e);
        i.dispatchEvent(s);
      }
    }
    /**
     * @override
     */
    disposeInternal() {
      it(this.fontChangeListenerKey_), this.element_.remove(), super.disposeInternal();
    }
    /**
     * Render.
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     * @override
     */
    renderFrame(t) {
      if (!t) {
        this.renderedVisible_ && (this.element_.style.display = "none", this.renderedVisible_ = !1);
        return;
      }
      this.calculateMatrices2D(t), this.dispatchRenderEvent(Ft.PRECOMPOSE, t);
      const e = t.layerStatesArray.sort(
        (a, l) => a.zIndex - l.zIndex
      );
      e.some(
        (a) => a.layer instanceof oh && a.layer.getDeclutter()
      ) && (t.declutter = {});
      const s = t.viewState;
      this.children_.length = 0;
      const r = [];
      let o = null;
      for (let a = 0, l = e.length; a < l; ++a) {
        const h = e[a];
        t.layerIndex = a;
        const c = h.layer, u = c.getSourceState();
        if (!Mr(h, s) || u != "ready" && u != "undefined") {
          c.unrender();
          continue;
        }
        const d = c.render(t, o);
        d && (d !== o && (this.children_.push(d), o = d), r.push(h));
      }
      this.declutter(t, r), Cd(this.element_, this.children_), this.dispatchRenderEvent(Ft.POSTCOMPOSE, t), this.renderedVisible_ || (this.element_.style.display = "", this.renderedVisible_ = !0), this.scheduleExpireIconCache(t);
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {Array<import('../layer/Layer.js').State>} layerStates Layers.
     */
    declutter(t, e) {
      if (t.declutter) {
        for (let i = e.length - 1; i >= 0; --i) {
          const s = e[i], r = s.layer;
          r.getDeclutter() && r.renderDeclutter(t, s);
        }
        e.forEach(
          (i) => i.layer.renderDeferred(t)
        );
      }
    }
  }
  const kg = Fg;
  function lh(n) {
    if (n instanceof as) {
      n.setMapInternal(null);
      return;
    }
    n instanceof os && n.getLayers().forEach(lh);
  }
  function hh(n, t) {
    if (n instanceof as) {
      n.setMapInternal(t);
      return;
    }
    if (n instanceof os) {
      const e = n.getLayers().getArray();
      for (let i = 0, s = e.length; i < s; ++i)
        hh(e[i], t);
    }
  }
  let Ng = class extends Vt {
    /**
     * @param {MapOptions} [options] Map options.
     */
    constructor(t) {
      super(), t = t || {}, this.on, this.once, this.un;
      const e = Gg(t);
      this.renderComplete_ = !1, this.loaded_ = !0, this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this), this.maxTilesLoading_ = t.maxTilesLoading !== void 0 ? t.maxTilesLoading : 16, this.pixelRatio_ = t.pixelRatio !== void 0 ? t.pixelRatio : kc, this.postRenderTimeoutHandle_, this.animationDelayKey_, this.animationDelay_ = this.animationDelay_.bind(this), this.coordinateToPixelTransform_ = Bt(), this.pixelToCoordinateTransform_ = Bt(), this.frameIndex_ = 0, this.frameState_ = null, this.previousExtent_ = null, this.viewPropertyListenerKey_ = null, this.viewChangeListenerKey_ = null, this.layerGroupPropertyListenerKeys_ = null, this.viewport_ = document.createElement("div"), this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : ""), this.viewport_.style.position = "relative", this.viewport_.style.overflow = "hidden", this.viewport_.style.width = "100%", this.viewport_.style.height = "100%", this.overlayContainer_ = document.createElement("div"), this.overlayContainer_.style.position = "absolute", this.overlayContainer_.style.zIndex = "0", this.overlayContainer_.style.width = "100%", this.overlayContainer_.style.height = "100%", this.overlayContainer_.style.pointerEvents = "none", this.overlayContainer_.className = "ol-overlaycontainer", this.viewport_.appendChild(this.overlayContainer_), this.overlayContainerStopEvent_ = document.createElement("div"), this.overlayContainerStopEvent_.style.position = "absolute", this.overlayContainerStopEvent_.style.zIndex = "0", this.overlayContainerStopEvent_.style.width = "100%", this.overlayContainerStopEvent_.style.height = "100%", this.overlayContainerStopEvent_.style.pointerEvents = "none", this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent", this.viewport_.appendChild(this.overlayContainerStopEvent_), this.mapBrowserEventHandler_ = null, this.moveTolerance_ = t.moveTolerance, this.keyboardEventTarget_ = e.keyboardEventTarget, this.targetChangeHandlerKeys_ = null, this.targetElement_ = null, this.resizeObserver_ = new ResizeObserver(() => this.updateSize()), this.controls = e.controls || xl(), this.interactions = e.interactions || uf({
        onFocusOnly: !0
      }), this.overlays_ = e.overlays, this.overlayIdIndex_ = {}, this.renderer_ = null, this.postRenderFunctions_ = [], this.tileQueue_ = new Yc(
        this.getTilePriority.bind(this),
        this.handleTileChange_.bind(this)
      ), this.addChangeListener(
        mt.LAYERGROUP,
        this.handleLayerGroupChanged_
      ), this.addChangeListener(mt.VIEW, this.handleViewChanged_), this.addChangeListener(mt.SIZE, this.handleSizeChanged_), this.addChangeListener(mt.TARGET, this.handleTargetChanged_), this.setProperties(e.values);
      const i = this;
      t.view && !(t.view instanceof Ht) && t.view.then(function(s) {
        i.setView(new Ht(s));
      }), this.controls.addEventListener(
        vt.ADD,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent
         */
        (s) => {
          s.element.setMap(this);
        }
      ), this.controls.addEventListener(
        vt.REMOVE,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent.
         */
        (s) => {
          s.element.setMap(null);
        }
      ), this.interactions.addEventListener(
        vt.ADD,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
         */
        (s) => {
          s.element.setMap(this);
        }
      ), this.interactions.addEventListener(
        vt.REMOVE,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
         */
        (s) => {
          s.element.setMap(null);
        }
      ), this.overlays_.addEventListener(
        vt.ADD,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
         */
        (s) => {
          this.addOverlayInternal_(s.element);
        }
      ), this.overlays_.addEventListener(
        vt.REMOVE,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
         */
        (s) => {
          const r = s.element.getId();
          r !== void 0 && delete this.overlayIdIndex_[r.toString()], s.element.setMap(null);
        }
      ), this.controls.forEach(
        /**
         * @param {import("./control/Control.js").default} control Control.
         */
        (s) => {
          s.setMap(this);
        }
      ), this.interactions.forEach(
        /**
         * @param {import("./interaction/Interaction.js").default} interaction Interaction.
         */
        (s) => {
          s.setMap(this);
        }
      ), this.overlays_.forEach(this.addOverlayInternal_.bind(this));
    }
    /**
     * Add the given control to the map.
     * @param {import("./control/Control.js").default} control Control.
     * @api
     */
    addControl(t) {
      this.getControls().push(t);
    }
    /**
     * Add the given interaction to the map. If you want to add an interaction
     * at another point of the collection use `getInteractions()` and the methods
     * available on {@link module:ol/Collection~Collection}. This can be used to
     * stop the event propagation from the handleEvent function. The interactions
     * get to handle the events in the reverse order of this collection.
     * @param {import("./interaction/Interaction.js").default} interaction Interaction to add.
     * @api
     */
    addInteraction(t) {
      this.getInteractions().push(t);
    }
    /**
     * Adds the given layer to the top of this map. If you want to add a layer
     * elsewhere in the stack, use `getLayers()` and the methods available on
     * {@link module:ol/Collection~Collection}.
     * @param {import("./layer/Base.js").default} layer Layer.
     * @api
     */
    addLayer(t) {
      this.getLayerGroup().getLayers().push(t);
    }
    /**
     * @param {import("./layer/Group.js").GroupEvent} event The layer add event.
     * @private
     */
    handleLayerAdd_(t) {
      hh(t.layer, this);
    }
    /**
     * Add the given overlay to the map.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @api
     */
    addOverlay(t) {
      this.getOverlays().push(t);
    }
    /**
     * This deals with map's overlay collection changes.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @private
     */
    addOverlayInternal_(t) {
      const e = t.getId();
      e !== void 0 && (this.overlayIdIndex_[e.toString()] = t), t.setMap(this);
    }
    /**
     *
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.controls.clear(), this.interactions.clear(), this.overlays_.clear(), this.resizeObserver_.disconnect(), this.setTarget(null), super.disposeInternal();
    }
    /**
     * Detect features that intersect a pixel on the viewport, and execute a
     * callback with each intersecting feature. Layers included in the detection can
     * be configured through the `layerFilter` option in `options`.
     * For polygons without a fill, only the stroke will be used for hit detection.
     * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
     * The fill can be transparent.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {function(import("./Feature.js").FeatureLike, import("./layer/Layer.js").default<import("./source/Source").default>, import("./geom/SimpleGeometry.js").default): T} callback Feature callback. The callback will be
     *     called with two arguments. The first argument is one
     *     {@link module:ol/Feature~Feature feature} or
     *     {@link module:ol/render/Feature~RenderFeature render feature} at the pixel, the second is
     *     the {@link module:ol/layer/Layer~Layer layer} of the feature and will be null for
     *     unmanaged layers. To stop detection, callback functions can return a
     *     truthy value.
     * @param {AtPixelOptions} [options] Optional options.
     * @return {T|undefined} Callback result, i.e. the return value of last
     * callback execution, or the first truthy callback return value.
     * @template T
     * @api
     */
    forEachFeatureAtPixel(t, e, i) {
      if (!this.frameState_ || !this.renderer_)
        return;
      const s = this.getCoordinateFromPixelInternal(t);
      i = i !== void 0 ? i : {};
      const r = i.hitTolerance !== void 0 ? i.hitTolerance : 0, o = i.layerFilter !== void 0 ? i.layerFilter : Di, a = i.checkWrapped !== !1;
      return this.renderer_.forEachFeatureAtCoordinate(
        s,
        this.frameState_,
        r,
        a,
        e,
        null,
        o,
        null
      );
    }
    /**
     * Get all features that intersect a pixel on the viewport.
     * For polygons without a fill, only the stroke will be used for hit detection.
     * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
     * The fill can be transparent.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {AtPixelOptions} [options] Optional options.
     * @return {Array<import("./Feature.js").FeatureLike>} The detected features or
     * an empty array if none were found.
     * @api
     */
    getFeaturesAtPixel(t, e) {
      const i = [];
      return this.forEachFeatureAtPixel(
        t,
        function(s) {
          i.push(s);
        },
        e
      ), i;
    }
    /**
     * Get all layers from all layer groups.
     * @return {Array<import("./layer/Layer.js").default>} Layers.
     * @api
     */
    getAllLayers() {
      const t = [];
      function e(i) {
        i.forEach(function(s) {
          s instanceof os ? e(s.getLayers()) : t.push(s);
        });
      }
      return e(this.getLayers()), t;
    }
    /**
     * Detect if features intersect a pixel on the viewport. Layers included in the
     * detection can be configured through the `layerFilter` option.
     * For polygons without a fill, only the stroke will be used for hit detection.
     * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
     * The fill can be transparent.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {AtPixelOptions} [options] Optional options.
     * @return {boolean} Is there a feature at the given pixel?
     * @api
     */
    hasFeatureAtPixel(t, e) {
      if (!this.frameState_ || !this.renderer_)
        return !1;
      const i = this.getCoordinateFromPixelInternal(t);
      e = e !== void 0 ? e : {};
      const s = e.layerFilter !== void 0 ? e.layerFilter : Di, r = e.hitTolerance !== void 0 ? e.hitTolerance : 0, o = e.checkWrapped !== !1;
      return this.renderer_.hasFeatureAtCoordinate(
        i,
        this.frameState_,
        r,
        o,
        s,
        null
      );
    }
    /**
     * Returns the coordinate in user projection for a browser event.
     * @param {MouseEvent} event Event.
     * @return {import("./coordinate.js").Coordinate} Coordinate.
     * @api
     */
    getEventCoordinate(t) {
      return this.getCoordinateFromPixel(this.getEventPixel(t));
    }
    /**
     * Returns the coordinate in view projection for a browser event.
     * @param {MouseEvent} event Event.
     * @return {import("./coordinate.js").Coordinate} Coordinate.
     */
    getEventCoordinateInternal(t) {
      return this.getCoordinateFromPixelInternal(this.getEventPixel(t));
    }
    /**
     * Returns the map pixel position for a browser event relative to the viewport.
     * @param {UIEvent|{clientX: number, clientY: number}} event Event.
     * @return {import("./pixel.js").Pixel} Pixel.
     * @api
     */
    getEventPixel(t) {
      const i = this.viewport_.getBoundingClientRect(), s = this.getSize(), r = i.width / s[0], o = i.height / s[1], a = (
        //FIXME Are we really calling this with a TouchEvent anywhere?
        "changedTouches" in t ? (
          /** @type {TouchEvent} */
          t.changedTouches[0]
        ) : (
          /** @type {MouseEvent} */
          t
        )
      );
      return [
        (a.clientX - i.left) / r,
        (a.clientY - i.top) / o
      ];
    }
    /**
     * Get the target in which this map is rendered.
     * Note that this returns what is entered as an option or in setTarget:
     * if that was an element, it returns an element; if a string, it returns that.
     * @return {HTMLElement|string|undefined} The Element or id of the Element that the
     *     map is rendered in.
     * @observable
     * @api
     */
    getTarget() {
      return (
        /** @type {HTMLElement|string|undefined} */
        this.get(mt.TARGET)
      );
    }
    /**
     * Get the DOM element into which this map is rendered. In contrast to
     * `getTarget` this method always return an `Element`, or `null` if the
     * map has no target.
     * @return {HTMLElement} The element that the map is rendered in.
     * @api
     */
    getTargetElement() {
      return this.targetElement_;
    }
    /**
     * Get the coordinate for a given pixel.  This returns a coordinate in the
     * user projection.
     * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
     * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
     * @api
     */
    getCoordinateFromPixel(t) {
      return ar(
        this.getCoordinateFromPixelInternal(t),
        this.getView().getProjection()
      );
    }
    /**
     * Get the coordinate for a given pixel.  This returns a coordinate in the
     * map view projection.
     * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
     * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
     */
    getCoordinateFromPixelInternal(t) {
      const e = this.frameState_;
      return e ? dt(e.pixelToCoordinateTransform, t.slice()) : null;
    }
    /**
     * Get the map controls. Modifying this collection changes the controls
     * associated with the map.
     * @return {Collection<import("./control/Control.js").default>} Controls.
     * @api
     */
    getControls() {
      return this.controls;
    }
    /**
     * Get the map overlays. Modifying this collection changes the overlays
     * associated with the map.
     * @return {Collection<import("./Overlay.js").default>} Overlays.
     * @api
     */
    getOverlays() {
      return this.overlays_;
    }
    /**
     * Get an overlay by its identifier (the value returned by overlay.getId()).
     * Note that the index treats string and numeric identifiers as the same. So
     * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
     * @param {string|number} id Overlay identifier.
     * @return {import("./Overlay.js").default|null} Overlay.
     * @api
     */
    getOverlayById(t) {
      const e = this.overlayIdIndex_[t.toString()];
      return e !== void 0 ? e : null;
    }
    /**
     * Get the map interactions. Modifying this collection changes the interactions
     * associated with the map.
     *
     * Interactions are used for e.g. pan, zoom and rotate.
     * @return {Collection<import("./interaction/Interaction.js").default>} Interactions.
     * @api
     */
    getInteractions() {
      return this.interactions;
    }
    /**
     * Get the layergroup associated with this map.
     * @return {LayerGroup} A layer group containing the layers in this map.
     * @observable
     * @api
     */
    getLayerGroup() {
      return (
        /** @type {LayerGroup} */
        this.get(mt.LAYERGROUP)
      );
    }
    /**
     * Clear any existing layers and add layers to the map.
     * @param {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>} layers The layers to be added to the map.
     * @api
     */
    setLayers(t) {
      const e = this.getLayerGroup();
      if (t instanceof jt) {
        e.setLayers(t);
        return;
      }
      const i = e.getLayers();
      i.clear(), i.extend(t);
    }
    /**
     * Get the collection of layers associated with this map.
     * @return {!Collection<import("./layer/Base.js").default>} Layers.
     * @api
     */
    getLayers() {
      return this.getLayerGroup().getLayers();
    }
    /**
     * @return {boolean} Layers have sources that are still loading.
     */
    getLoadingOrNotReady() {
      const t = this.getLayerGroup().getLayerStatesArray();
      for (let e = 0, i = t.length; e < i; ++e) {
        const s = t[e];
        if (!s.visible)
          continue;
        const r = s.layer.getRenderer();
        if (r && !r.ready)
          return !0;
        const o = s.layer.getSource();
        if (o && o.loading)
          return !0;
      }
      return !1;
    }
    /**
     * Get the pixel for a coordinate.  This takes a coordinate in the user
     * projection and returns the corresponding pixel.
     * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
     * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
     * @api
     */
    getPixelFromCoordinate(t) {
      const e = oe(
        t,
        this.getView().getProjection()
      );
      return this.getPixelFromCoordinateInternal(e);
    }
    /**
     * Get the pixel for a coordinate.  This takes a coordinate in the map view
     * projection and returns the corresponding pixel.
     * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
     * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
     */
    getPixelFromCoordinateInternal(t) {
      const e = this.frameState_;
      return e ? dt(
        e.coordinateToPixelTransform,
        t.slice(0, 2)
      ) : null;
    }
    /**
     * Get the map renderer.
     * @return {import("./renderer/Map.js").default|null} Renderer
     */
    getRenderer() {
      return this.renderer_;
    }
    /**
     * Get the size of this map.
     * @return {import("./size.js").Size|undefined} The size in pixels of the map in the DOM.
     * @observable
     * @api
     */
    getSize() {
      return (
        /** @type {import("./size.js").Size|undefined} */
        this.get(mt.SIZE)
      );
    }
    /**
     * Get the view associated with this map. A view manages properties such as
     * center and resolution.
     * @return {View} The view that controls this map.
     * @observable
     * @api
     */
    getView() {
      return (
        /** @type {View} */
        this.get(mt.VIEW)
      );
    }
    /**
     * Get the element that serves as the map viewport.
     * @return {HTMLElement} Viewport.
     * @api
     */
    getViewport() {
      return this.viewport_;
    }
    /**
     * Get the element that serves as the container for overlays.  Elements added to
     * this container will let mousedown and touchstart events through to the map,
     * so clicks and gestures on an overlay will trigger {@link module:ol/MapBrowserEvent~MapBrowserEvent}
     * events.
     * @return {!HTMLElement} The map's overlay container.
     */
    getOverlayContainer() {
      return this.overlayContainer_;
    }
    /**
     * Get the element that serves as a container for overlays that don't allow
     * event propagation. Elements added to this container won't let mousedown and
     * touchstart events through to the map, so clicks and gestures on an overlay
     * don't trigger any {@link module:ol/MapBrowserEvent~MapBrowserEvent}.
     * @return {!HTMLElement} The map's overlay container that stops events.
     */
    getOverlayContainerStopEvent() {
      return this.overlayContainerStopEvent_;
    }
    /**
     * @return {!Document} The document where the map is displayed.
     */
    getOwnerDocument() {
      const t = this.getTargetElement();
      return t ? t.ownerDocument : document;
    }
    /**
     * @param {import("./Tile.js").default} tile Tile.
     * @param {string} tileSourceKey Tile source key.
     * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
     * @param {number} tileResolution Tile resolution.
     * @return {number} Tile priority.
     */
    getTilePriority(t, e, i, s) {
      return Bc(
        this.frameState_,
        t,
        e,
        i,
        s
      );
    }
    /**
     * @param {PointerEvent|KeyboardEvent|WheelEvent} browserEvent Browser event.
     * @param {string} [type] Type.
     */
    handleBrowserEvent(t, e) {
      e = e || t.type;
      const i = new Ee(e, this, t);
      this.handleMapBrowserEvent(i);
    }
    /**
     * @param {MapBrowserEvent} mapBrowserEvent The event to handle.
     */
    handleMapBrowserEvent(t) {
      if (!this.frameState_)
        return;
      const e = t.originalEvent, i = e.type;
      if (i === Ys.POINTERDOWN || i === Y.WHEEL || i === Y.KEYDOWN) {
        const s = this.getOwnerDocument(), r = this.viewport_.getRootNode ? this.viewport_.getRootNode() : s, o = (
          /** @type {Node} */
          e.target
        ), a = r instanceof ShadowRoot ? r.host === o ? r.host.ownerDocument : r : r === s ? s.documentElement : r;
        if (
          // Abort if the target is a child of the container for elements whose events are not meant
          // to be handled by map interactions.
          this.overlayContainerStopEvent_.contains(o) || // Abort if the event target is a child of the container that is no longer in the page.
          // It's possible for the target to no longer be in the page if it has been removed in an
          // event listener, this might happen in a Control that recreates it's content based on
          // user interaction either manually or via a render in something like https://reactjs.org/
          !a.contains(o)
        )
          return;
      }
      if (t.frameState = this.frameState_, this.dispatchEvent(t) !== !1) {
        const s = this.getInteractions().getArray().slice();
        for (let r = s.length - 1; r >= 0; r--) {
          const o = s[r];
          if (o.getMap() !== this || !o.getActive() || !this.getTargetElement())
            continue;
          if (!o.handleEvent(t) || t.propagationStopped)
            break;
        }
      }
    }
    /**
     * @protected
     */
    handlePostRender() {
      const t = this.frameState_, e = this.tileQueue_;
      if (!e.isEmpty()) {
        let s = this.maxTilesLoading_, r = s;
        if (t) {
          const o = t.viewHints;
          if (o[pt.ANIMATING] || o[pt.INTERACTING]) {
            const a = Date.now() - t.time > 8;
            s = a ? 0 : 8, r = a ? 0 : 2;
          }
        }
        e.getTilesLoading() < s && (e.reprioritize(), e.loadMoreTiles(s, r));
      }
      t && this.renderer_ && !t.animate && (this.renderComplete_ ? (this.hasListener(Ft.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(
        Ft.RENDERCOMPLETE,
        t
      ), this.loaded_ === !1 && (this.loaded_ = !0, this.dispatchEvent(
        new ei(xe.LOADEND, this, t)
      ))) : this.loaded_ === !0 && (this.loaded_ = !1, this.dispatchEvent(
        new ei(xe.LOADSTART, this, t)
      )));
      const i = this.postRenderFunctions_;
      if (t)
        for (let s = 0, r = i.length; s < r; ++s)
          i[s](this, t);
      i.length = 0;
    }
    /**
     * @private
     */
    handleSizeChanged_() {
      this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render();
    }
    /**
     * @private
     */
    handleTargetChanged_() {
      if (this.mapBrowserEventHandler_) {
        for (let i = 0, s = this.targetChangeHandlerKeys_.length; i < s; ++i)
          it(this.targetChangeHandlerKeys_[i]);
        this.targetChangeHandlerKeys_ = null, this.viewport_.removeEventListener(
          Y.CONTEXTMENU,
          this.boundHandleBrowserEvent_
        ), this.viewport_.removeEventListener(
          Y.WHEEL,
          this.boundHandleBrowserEvent_
        ), this.mapBrowserEventHandler_.dispose(), this.mapBrowserEventHandler_ = null, this.viewport_.remove();
      }
      if (this.targetElement_) {
        this.resizeObserver_.unobserve(this.targetElement_);
        const i = this.targetElement_.getRootNode();
        i instanceof ShadowRoot && this.resizeObserver_.unobserve(i.host), this.setSize(void 0);
      }
      const t = this.getTarget(), e = typeof t == "string" ? document.getElementById(t) : t;
      if (this.targetElement_ = e, !e)
        this.renderer_ && (clearTimeout(this.postRenderTimeoutHandle_), this.postRenderTimeoutHandle_ = void 0, this.postRenderFunctions_.length = 0, this.renderer_.dispose(), this.renderer_ = null), this.animationDelayKey_ && (cancelAnimationFrame(this.animationDelayKey_), this.animationDelayKey_ = void 0);
      else {
        e.appendChild(this.viewport_), this.renderer_ || (this.renderer_ = new kg(this)), this.mapBrowserEventHandler_ = new Gc(
          this,
          this.moveTolerance_
        );
        for (const r in st)
          this.mapBrowserEventHandler_.addEventListener(
            st[r],
            this.handleMapBrowserEvent.bind(this)
          );
        this.viewport_.addEventListener(
          Y.CONTEXTMENU,
          this.boundHandleBrowserEvent_,
          !1
        ), this.viewport_.addEventListener(
          Y.WHEEL,
          this.boundHandleBrowserEvent_,
          ma ? { passive: !1 } : !1
        );
        let i;
        if (this.keyboardEventTarget_)
          i = this.keyboardEventTarget_;
        else {
          const r = e.getRootNode();
          i = r instanceof ShadowRoot ? r.host : e;
        }
        this.targetChangeHandlerKeys_ = [
          $(
            i,
            Y.KEYDOWN,
            this.handleBrowserEvent,
            this
          ),
          $(
            i,
            Y.KEYPRESS,
            this.handleBrowserEvent,
            this
          )
        ];
        const s = e.getRootNode();
        s instanceof ShadowRoot && this.resizeObserver_.observe(s.host), this.resizeObserver_.observe(e);
      }
      this.updateSize();
    }
    /**
     * @private
     */
    handleTileChange_() {
      this.render();
    }
    /**
     * @private
     */
    handleViewPropertyChanged_() {
      this.render();
    }
    /**
     * @private
     */
    handleViewChanged_() {
      this.viewPropertyListenerKey_ && (it(this.viewPropertyListenerKey_), this.viewPropertyListenerKey_ = null), this.viewChangeListenerKey_ && (it(this.viewChangeListenerKey_), this.viewChangeListenerKey_ = null);
      const t = this.getView();
      t && (this.updateViewportSize_(this.getSize()), this.viewPropertyListenerKey_ = $(
        t,
        Qe.PROPERTYCHANGE,
        this.handleViewPropertyChanged_,
        this
      ), this.viewChangeListenerKey_ = $(
        t,
        Y.CHANGE,
        this.handleViewPropertyChanged_,
        this
      ), t.resolveConstraints(0)), this.render();
    }
    /**
     * @private
     */
    handleLayerGroupChanged_() {
      this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_.forEach(it), this.layerGroupPropertyListenerKeys_ = null);
      const t = this.getLayerGroup();
      t && (this.handleLayerAdd_(new Te("addlayer", t)), this.layerGroupPropertyListenerKeys_ = [
        $(t, Qe.PROPERTYCHANGE, this.render, this),
        $(t, Y.CHANGE, this.render, this),
        $(t, "addlayer", this.handleLayerAdd_, this),
        $(t, "removelayer", this.handleLayerRemove_, this)
      ]), this.render();
    }
    /**
     * @return {boolean} Is rendered.
     */
    isRendered() {
      return !!this.frameState_;
    }
    /**
     * @private
     */
    animationDelay_() {
      this.animationDelayKey_ = void 0, this.renderFrame_(Date.now());
    }
    /**
     * Requests an immediate render in a synchronous manner.
     * @api
     */
    renderSync() {
      this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_), this.animationDelay_();
    }
    /**
     * Redraws all text after new fonts have loaded
     */
    redrawText() {
      if (!this.frameState_)
        return;
      const t = this.frameState_.layerStatesArray;
      for (let e = 0, i = t.length; e < i; ++e) {
        const s = t[e].layer;
        s.hasRenderer() && s.getRenderer().handleFontsChanged();
      }
    }
    /**
     * Request a map rendering (at the next animation frame).
     * @api
     */
    render() {
      this.renderer_ && this.animationDelayKey_ === void 0 && (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
    }
    /**
     * Remove the given control from the map.
     * @param {import("./control/Control.js").default} control Control.
     * @return {import("./control/Control.js").default|undefined} The removed control (or undefined
     *     if the control was not found).
     * @api
     */
    removeControl(t) {
      return this.getControls().remove(t);
    }
    /**
     * Remove the given interaction from the map.
     * @param {import("./interaction/Interaction.js").default} interaction Interaction to remove.
     * @return {import("./interaction/Interaction.js").default|undefined} The removed interaction (or
     *     undefined if the interaction was not found).
     * @api
     */
    removeInteraction(t) {
      return this.getInteractions().remove(t);
    }
    /**
     * Removes the given layer from the map.
     * @param {import("./layer/Base.js").default} layer Layer.
     * @return {import("./layer/Base.js").default|undefined} The removed layer (or undefined if the
     *     layer was not found).
     * @api
     */
    removeLayer(t) {
      return this.getLayerGroup().getLayers().remove(t);
    }
    /**
     * @param {import("./layer/Group.js").GroupEvent} event The layer remove event.
     * @private
     */
    handleLayerRemove_(t) {
      lh(t.layer);
    }
    /**
     * Remove the given overlay from the map.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @return {import("./Overlay.js").default|undefined} The removed overlay (or undefined
     *     if the overlay was not found).
     * @api
     */
    removeOverlay(t) {
      return this.getOverlays().remove(t);
    }
    /**
     * @param {number} time Time.
     * @private
     */
    renderFrame_(t) {
      const e = this.getSize(), i = this.getView(), s = this.frameState_;
      let r = null;
      if (e !== void 0 && Pl(e) && i && i.isDef()) {
        const o = i.getHints(
          this.frameState_ ? this.frameState_.viewHints : void 0
        ), a = i.getState();
        if (r = {
          animate: !1,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutter: null,
          extent: Vs(
            a.center,
            a.resolution,
            a.rotation,
            e
          ),
          index: this.frameIndex_++,
          layerIndex: 0,
          layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
          pixelRatio: this.pixelRatio_,
          pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
          postRenderFunctions: [],
          size: e,
          tileQueue: this.tileQueue_,
          time: t,
          usedTiles: {},
          viewState: a,
          viewHints: o,
          wantedTiles: {},
          mapId: j(this),
          renderTargets: {}
        }, a.nextCenter && a.nextResolution) {
          const l = isNaN(a.nextRotation) ? a.rotation : a.nextRotation;
          r.nextExtent = Vs(
            a.nextCenter,
            a.nextResolution,
            l,
            e
          );
        }
      }
      this.frameState_ = r, this.renderer_.renderFrame(r), r && (r.animate && this.render(), Array.prototype.push.apply(
        this.postRenderFunctions_,
        r.postRenderFunctions
      ), s && (!this.previousExtent_ || !Yn(this.previousExtent_) && !Ni(r.extent, this.previousExtent_)) && (this.dispatchEvent(
        new ei(xe.MOVESTART, this, s)
      ), this.previousExtent_ = Gn(this.previousExtent_)), this.previousExtent_ && !r.viewHints[pt.ANIMATING] && !r.viewHints[pt.INTERACTING] && !Ni(r.extent, this.previousExtent_) && (this.dispatchEvent(
        new ei(xe.MOVEEND, this, r)
      ), xa(r.extent, this.previousExtent_))), this.dispatchEvent(new ei(xe.POSTRENDER, this, r)), this.renderComplete_ = (this.hasListener(xe.LOADSTART) || this.hasListener(xe.LOADEND) || this.hasListener(Ft.RENDERCOMPLETE)) && !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady(), this.postRenderTimeoutHandle_ || (this.postRenderTimeoutHandle_ = setTimeout(() => {
        this.postRenderTimeoutHandle_ = void 0, this.handlePostRender();
      }, 0));
    }
    /**
     * Sets the layergroup of this map.
     * @param {LayerGroup} layerGroup A layer group containing the layers in this map.
     * @observable
     * @api
     */
    setLayerGroup(t) {
      const e = this.getLayerGroup();
      e && this.handleLayerRemove_(new Te("removelayer", e)), this.set(mt.LAYERGROUP, t);
    }
    /**
     * Set the size of this map.
     * @param {import("./size.js").Size|undefined} size The size in pixels of the map in the DOM.
     * @observable
     * @api
     */
    setSize(t) {
      this.set(mt.SIZE, t);
    }
    /**
     * Set the target element to render this map into.
     * For accessibility (focus and keyboard events for map navigation), the `target` element must have a
     *  properly configured `tabindex` attribute. If the `target` element is inside a Shadow DOM, the
     *  `tabindex` atribute must be set on the custom element's host element.
     * @param {HTMLElement|string} [target] The Element or id of the Element
     *     that the map is rendered in.
     * @observable
     * @api
     */
    setTarget(t) {
      this.set(mt.TARGET, t);
    }
    /**
     * Set the view for this map.
     * @param {View|Promise<import("./View.js").ViewOptions>|null} view The view that controls this map.
     * It is also possible to pass a promise that resolves to options for constructing a view.  This
     * alternative allows view properties to be resolved by sources or other components that load
     * view-related metadata.
     * @observable
     * @api
     */
    setView(t) {
      if (!t || t instanceof Ht) {
        this.set(mt.VIEW, t);
        return;
      }
      this.set(mt.VIEW, new Ht());
      const e = this;
      t.then(function(i) {
        e.setView(new Ht(i));
      });
    }
    /**
     * Force a recalculation of the map viewport size.  This should be called when
     * third-party code changes the size of the map viewport.
     * @api
     */
    updateSize() {
      const t = this.getTargetElement();
      let e;
      if (t) {
        const s = getComputedStyle(t), r = t.offsetWidth - parseFloat(s.borderLeftWidth) - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight) - parseFloat(s.borderRightWidth), o = t.offsetHeight - parseFloat(s.borderTopWidth) - parseFloat(s.paddingTop) - parseFloat(s.paddingBottom) - parseFloat(s.borderBottomWidth);
        !isNaN(r) && !isNaN(o) && (e = [Math.max(0, r), Math.max(0, o)], !Pl(e) && (t.offsetWidth || t.offsetHeight || t.getClientRects().length) && Da(
          "No map visible because the map container's width or height are 0."
        ));
      }
      const i = this.getSize();
      e && (!i || !ye(e, i)) && (this.setSize(e), this.updateViewportSize_(e));
    }
    /**
     * Recomputes the viewport size and save it on the view object (if any)
     * @param {import("./size.js").Size|undefined} size The size.
     * @private
     */
    updateViewportSize_(t) {
      const e = this.getView();
      e && e.setViewportSize(t);
    }
  };
  function Gg(n) {
    let t = null;
    n.keyboardEventTarget !== void 0 && (t = typeof n.keyboardEventTarget == "string" ? document.getElementById(n.keyboardEventTarget) : n.keyboardEventTarget);
    const e = {}, i = n.layers && typeof /** @type {?} */
    n.layers.getLayers == "function" ? (
      /** @type {LayerGroup} */
      n.layers
    ) : new os({
      layers: (
        /** @type {Collection<import("./layer/Base.js").default>|Array<import("./layer/Base.js").default>} */
        n.layers
      )
    });
    e[mt.LAYERGROUP] = i, e[mt.TARGET] = n.target, e[mt.VIEW] = n.view instanceof Ht ? n.view : new Ht();
    let s;
    n.controls !== void 0 && (Array.isArray(n.controls) ? s = new jt(n.controls.slice()) : (q(
      typeof /** @type {?} */
      n.controls.getArray == "function",
      "Expected `controls` to be an array or an `ol/Collection.js`"
    ), s = n.controls));
    let r;
    n.interactions !== void 0 && (Array.isArray(n.interactions) ? r = new jt(n.interactions.slice()) : (q(
      typeof /** @type {?} */
      n.interactions.getArray == "function",
      "Expected `interactions` to be an array or an `ol/Collection.js`"
    ), r = n.interactions));
    let o;
    return n.overlays !== void 0 ? Array.isArray(n.overlays) ? o = new jt(n.overlays.slice()) : (q(
      typeof /** @type {?} */
      n.overlays.getArray == "function",
      "Expected `overlays` to be an array or an `ol/Collection.js`"
    ), o = n.overlays) : o = new jt(), {
      controls: s,
      interactions: r,
      keyboardEventTarget: t,
      overlays: o,
      values: e
    };
  }
  const zg = Ng;
  class Wg extends bn {
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("./TileState.js").default} state State.
     * @param {Options} [options] Tile options.
     */
    constructor(t, e, i) {
      super(), i = i || {}, this.tileCoord = t, this.state = e, this.key = "", this.transition_ = i.transition === void 0 ? 250 : i.transition, this.transitionStarts_ = {}, this.interpolate = !!i.interpolate;
    }
    /**
     * @protected
     */
    changed() {
      this.dispatchEvent(Y.CHANGE);
    }
    /**
     * Called by the tile cache when the tile is removed from the cache due to expiry
     */
    release() {
      this.setState(F.EMPTY);
    }
    /**
     * @return {string} Key.
     */
    getKey() {
      return this.key + "/" + this.tileCoord;
    }
    /**
     * Get the tile coordinate for this tile.
     * @return {import("./tilecoord.js").TileCoord} The tile coordinate.
     * @api
     */
    getTileCoord() {
      return this.tileCoord;
    }
    /**
     * @return {import("./TileState.js").default} State.
     */
    getState() {
      return this.state;
    }
    /**
     * Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,
     * it is important to set the state correctly to {@link module:ol/TileState~ERROR}
     * when the tile cannot be loaded. Otherwise the tile cannot be removed from
     * the tile queue and will block other requests.
     * @param {import("./TileState.js").default} state State.
     * @api
     */
    setState(t) {
      if (this.state !== F.EMPTY) {
        if (this.state !== F.ERROR && this.state > t)
          throw new Error("Tile load sequence violation");
        this.state = t, this.changed();
      }
    }
    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     * @abstract
     * @api
     */
    load() {
      V();
    }
    /**
     * Get the alpha value for rendering.
     * @param {string} id An id for the renderer.
     * @param {number} time The render frame time.
     * @return {number} A number between 0 and 1.
     */
    getAlpha(t, e) {
      if (!this.transition_)
        return 1;
      let i = this.transitionStarts_[t];
      if (!i)
        i = e, this.transitionStarts_[t] = i;
      else if (i === -1)
        return 1;
      const s = e - i + 1e3 / 60;
      return s >= this.transition_ ? 1 : ba(s / this.transition_);
    }
    /**
     * Determine if a tile is in an alpha transition.  A tile is considered in
     * transition if tile.getAlpha() has not yet been called or has been called
     * and returned 1.
     * @param {string} id An id for the renderer.
     * @return {boolean} The tile is in transition.
     */
    inTransition(t) {
      return this.transition_ ? this.transitionStarts_[t] !== -1 : !1;
    }
    /**
     * Mark a transition as complete.
     * @param {string} id An id for the renderer.
     */
    endTransition(t) {
      this.transition_ && (this.transitionStarts_[t] = -1);
    }
    /**
     * @override
     */
    disposeInternal() {
      this.release(), super.disposeInternal();
    }
  }
  const ao = Wg;
  function lo(n) {
    return n instanceof Image || n instanceof HTMLCanvasElement || n instanceof HTMLVideoElement || n instanceof ImageBitmap ? n : null;
  }
  const Xg = new Error("disposed"), Yg = [256, 256];
  class Bg extends ao {
    /**
     * @param {Options} options Tile options.
     */
    constructor(t) {
      const e = F.IDLE;
      super(t.tileCoord, e, {
        transition: t.transition,
        interpolate: t.interpolate
      }), this.loader_ = t.loader, this.data_ = null, this.error_ = null, this.size_ = t.size || null, this.controller_ = t.controller || null;
    }
    /**
     * Get the tile size.
     * @return {import('./size.js').Size} Tile size.
     */
    getSize() {
      if (this.size_)
        return this.size_;
      const t = lo(this.data_);
      return t ? [t.width, t.height] : Yg;
    }
    /**
     * Get the data for the tile.
     * @return {Data} Tile data.
     * @api
     */
    getData() {
      return this.data_;
    }
    /**
     * Get any loading error.
     * @return {Error} Loading error.
     * @api
     */
    getError() {
      return this.error_;
    }
    /**
     * Load the tile data.
     * @api
     * @override
     */
    load() {
      if (this.state !== F.IDLE && this.state !== F.ERROR)
        return;
      this.state = F.LOADING, this.changed();
      const t = this;
      this.loader_().then(function(e) {
        t.data_ = e, t.state = F.LOADED, t.changed();
      }).catch(function(e) {
        t.error_ = e, t.state = F.ERROR, t.changed();
      });
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.controller_ && (this.controller_.abort(Xg), this.controller_ = null), super.disposeInternal();
    }
  }
  const ch = Bg;
  class Ug extends ao {
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("./TileState.js").default} state State.
     * @param {string} src Image source URI.
     * @param {?string} crossOrigin Cross origin.
     * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @param {import("./Tile.js").Options} [options] Tile options.
     */
    constructor(t, e, i, s, r, o) {
      super(t, e, o), this.crossOrigin_ = s, this.src_ = i, this.key = i, this.image_ = new Image(), s !== null && (this.image_.crossOrigin = s), this.unlisten_ = null, this.tileLoadFunction_ = r;
    }
    /**
     * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
     * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
     * @api
     */
    getImage() {
      return this.image_;
    }
    /**
     * Sets an HTML image element for this tile (may be a Canvas or preloaded Image).
     * @param {HTMLCanvasElement|HTMLImageElement} element Element.
     */
    setImage(t) {
      this.image_ = t, this.state = F.LOADED, this.unlistenImage_(), this.changed();
    }
    /**
     * Tracks loading or read errors.
     *
     * @private
     */
    handleImageError_() {
      this.state = F.ERROR, this.unlistenImage_(), this.image_ = Kg(), this.changed();
    }
    /**
     * Tracks successful image load.
     *
     * @private
     */
    handleImageLoad_() {
      const t = (
        /** @type {HTMLImageElement} */
        this.image_
      );
      t.naturalWidth && t.naturalHeight ? this.state = F.LOADED : this.state = F.EMPTY, this.unlistenImage_(), this.changed();
    }
    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     *
     * To retry loading tiles on failed requests, use a custom `tileLoadFunction`
     * that checks for error status codes and reloads only when the status code is
     * 408, 429, 500, 502, 503 and 504, and only when not too many retries have been
     * made already:
     *
     * ```js
     * const retryCodes = [408, 429, 500, 502, 503, 504];
     * const retries = {};
     * source.setTileLoadFunction((tile, src) => {
     *   const image = tile.getImage();
     *   fetch(src)
     *     .then((response) => {
     *       if (retryCodes.includes(response.status)) {
     *         retries[src] = (retries[src] || 0) + 1;
     *         if (retries[src] <= 3) {
     *           setTimeout(() => tile.load(), retries[src] * 1000);
     *         }
     *         return Promise.reject();
     *       }
     *       return response.blob();
     *     })
     *     .then((blob) => {
     *       const imageUrl = URL.createObjectURL(blob);
     *       image.src = imageUrl;
     *       setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
     *     })
     *     .catch(() => tile.setState(3)); // error
     * });
     * ```
     * @api
     * @override
     */
    load() {
      this.state == F.ERROR && (this.state = F.IDLE, this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_)), this.state == F.IDLE && (this.state = F.LOADING, this.changed(), this.tileLoadFunction_(this, this.src_), this.unlisten_ = tg(
        this.image_,
        this.handleImageLoad_.bind(this),
        this.handleImageError_.bind(this)
      ));
    }
    /**
     * Discards event handlers which listen for load completion or errors.
     *
     * @private
     */
    unlistenImage_() {
      this.unlisten_ && (this.unlisten_(), this.unlisten_ = null);
    }
    /**
     * @override
     */
    disposeInternal() {
      this.unlistenImage_(), this.image_ = null, super.disposeInternal();
    }
  }
  function Kg() {
    const n = ht(1, 1);
    return n.fillStyle = "rgba(0,0,0,0)", n.fillRect(0, 0, 1, 1), n.canvas;
  }
  const uh = Ug;
  class dh {
    /**
     * @param {number} minX Minimum X.
     * @param {number} maxX Maximum X.
     * @param {number} minY Minimum Y.
     * @param {number} maxY Maximum Y.
     */
    constructor(t, e, i, s) {
      this.minX = t, this.maxX = e, this.minY = i, this.maxY = s;
    }
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {boolean} Contains tile coordinate.
     */
    contains(t) {
      return this.containsXY(t[1], t[2]);
    }
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Contains.
     */
    containsTileRange(t) {
      return this.minX <= t.minX && t.maxX <= this.maxX && this.minY <= t.minY && t.maxY <= this.maxY;
    }
    /**
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @return {boolean} Contains coordinate.
     */
    containsXY(t, e) {
      return this.minX <= t && t <= this.maxX && this.minY <= e && e <= this.maxY;
    }
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Equals.
     */
    equals(t) {
      return this.minX == t.minX && this.minY == t.minY && this.maxX == t.maxX && this.maxY == t.maxY;
    }
    /**
     * @param {TileRange} tileRange Tile range.
     */
    extend(t) {
      t.minX < this.minX && (this.minX = t.minX), t.maxX > this.maxX && (this.maxX = t.maxX), t.minY < this.minY && (this.minY = t.minY), t.maxY > this.maxY && (this.maxY = t.maxY);
    }
    /**
     * @return {number} Height.
     */
    getHeight() {
      return this.maxY - this.minY + 1;
    }
    /**
     * @return {import("./size.js").Size} Size.
     */
    getSize() {
      return [this.getWidth(), this.getHeight()];
    }
    /**
     * @return {number} Width.
     */
    getWidth() {
      return this.maxX - this.minX + 1;
    }
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Intersects.
     */
    intersects(t) {
      return this.minX <= t.maxX && this.maxX >= t.minX && this.minY <= t.maxY && this.maxY >= t.minY;
    }
  }
  function Ei(n, t, e, i, s) {
    return s !== void 0 ? (s.minX = n, s.maxX = t, s.minY = e, s.maxY = i, s) : new dh(n, t, e, i);
  }
  const fh = dh;
  let ho;
  const xi = [];
  function gh(n, t, e, i, s) {
    n.beginPath(), n.moveTo(0, 0), n.lineTo(t, e), n.lineTo(i, s), n.closePath(), n.save(), n.clip(), n.fillRect(0, 0, Math.max(t, i) + 1, Math.max(e, s)), n.restore();
  }
  function co(n, t) {
    return Math.abs(n[t * 4] - 210) > 2 || Math.abs(n[t * 4 + 3] - 0.75 * 255) > 2;
  }
  function Zg() {
    if (ho === void 0) {
      const n = ht(6, 6, xi);
      n.globalCompositeOperation = "lighter", n.fillStyle = "rgba(210, 0, 0, 0.75)", gh(n, 4, 5, 4, 0), gh(n, 4, 5, 0, 5);
      const t = n.getImageData(0, 0, 3, 3).data;
      ho = co(t, 0) || co(t, 4) || co(t, 8), rs(n), xi.push(n.canvas);
    }
    return ho;
  }
  function _h(n, t, e, i) {
    const s = Jn(e, t, n);
    let r = $a(
      t,
      i,
      e
    );
    const o = t.getMetersPerUnit();
    o !== void 0 && (r *= o);
    const a = n.getMetersPerUnit();
    a !== void 0 && (r /= a);
    const l = n.getExtent();
    if (!l || ni(l, s)) {
      const h = $a(n, r, s) / r;
      isFinite(h) && h > 0 && (r /= h);
    }
    return r;
  }
  function $g(n, t, e, i) {
    const s = Fe(e);
    let r = _h(
      n,
      t,
      s,
      i
    );
    return (!isFinite(r) || r <= 0) && Ta(e, function(o) {
      return r = _h(
        n,
        t,
        o,
        i
      ), isFinite(r) && r > 0;
    }), r;
  }
  function Vg(n, t, e, i, s, r, o, a, l, h, c, u, d, f) {
    const g = ht(
      Math.round(e * n),
      Math.round(e * t),
      xi
    );
    if (u || (g.imageSmoothingEnabled = !1), l.length === 0)
      return g.canvas;
    g.scale(e, e);
    function p(x) {
      return Math.round(x * e) / e;
    }
    g.globalCompositeOperation = "lighter";
    const _ = Dt();
    l.forEach(function(x, C, T) {
      $c(_, x.extent);
    });
    let m;
    const y = e / i, w = (u ? 1 : 1 + Math.pow(2, -24)) / y;
    if (!d || l.length !== 1 || h !== 0) {
      if (m = ht(
        Math.round(J(_) * y),
        Math.round(yt(_) * y),
        xi
      ), u || (m.imageSmoothingEnabled = !1), s && f) {
        const x = (s[0] - _[0]) * y, C = -(s[3] - _[3]) * y, T = J(s) * y, R = yt(s) * y;
        m.rect(x, C, T, R), m.clip();
      }
      l.forEach(function(x, C, T) {
        if (x.image.width > 0 && x.image.height > 0) {
          if (x.clipExtent) {
            m.save();
            const M = (x.clipExtent[0] - _[0]) * y, b = -(x.clipExtent[3] - _[3]) * y, P = J(x.clipExtent) * y, G = yt(x.clipExtent) * y;
            m.rect(
              u ? M : Math.round(M),
              u ? b : Math.round(b),
              u ? P : Math.round(M + P) - Math.round(M),
              u ? G : Math.round(b + G) - Math.round(b)
            ), m.clip();
          }
          const R = (x.extent[0] - _[0]) * y, S = -(x.extent[3] - _[3]) * y, L = J(x.extent) * y, A = yt(x.extent) * y;
          m.drawImage(
            x.image,
            h,
            h,
            x.image.width - 2 * h,
            x.image.height - 2 * h,
            u ? R : Math.round(R),
            u ? S : Math.round(S),
            u ? L : Math.round(R + L) - Math.round(R),
            u ? A : Math.round(S + A) - Math.round(S)
          ), x.clipExtent && m.restore();
        }
      });
    }
    const E = Ne(o);
    return a.getTriangles().forEach(function(x, C, T) {
      const R = x.source, S = x.target;
      let L = R[0][0], A = R[0][1], M = R[1][0], b = R[1][1], P = R[2][0], G = R[2][1];
      const O = p((S[0][0] - E[0]) / r), W = p(
        -(S[0][1] - E[1]) / r
      ), D = p((S[1][0] - E[0]) / r), X = p(
        -(S[1][1] - E[1]) / r
      ), K = p((S[2][0] - E[0]) / r), tt = p(
        -(S[2][1] - E[1]) / r
      ), I = L, ft = A;
      L = 0, A = 0, M -= I, b -= ft, P -= I, G -= ft;
      const wt = [
        [M, b, 0, 0, D - O],
        [P, G, 0, 0, K - O],
        [0, 0, M, b, X - W],
        [0, 0, P, G, tt - W]
      ], at = Kc(wt);
      if (!at)
        return;
      if (g.save(), g.beginPath(), Zg() || !u) {
        g.moveTo(D, X);
        const Et = 4, Qt = O - D, Zt = W - X;
        for (let Mt = 0; Mt < Et; Mt++)
          g.lineTo(
            D + p((Mt + 1) * Qt / Et),
            X + p(Mt * Zt / (Et - 1))
          ), Mt != Et - 1 && g.lineTo(
            D + p((Mt + 1) * Qt / Et),
            X + p((Mt + 1) * Zt / (Et - 1))
          );
        g.lineTo(K, tt);
      } else
        g.moveTo(D, X), g.lineTo(O, W), g.lineTo(K, tt);
      g.clip(), g.transform(
        at[0],
        at[2],
        at[1],
        at[3],
        O,
        W
      ), g.translate(
        _[0] - I,
        _[3] - ft
      );
      let bt;
      if (m)
        bt = m.canvas, g.scale(w, -w);
      else {
        const Et = l[0], Qt = Et.extent;
        bt = Et.image, g.scale(
          J(Qt) / bt.width,
          -yt(Qt) / bt.height
        );
      }
      g.drawImage(bt, 0, 0), g.restore();
    }), m && (rs(m), xi.push(m.canvas)), c && (g.save(), g.globalCompositeOperation = "source-over", g.strokeStyle = "black", g.lineWidth = 1, a.getTriangles().forEach(function(x, C, T) {
      const R = x.target, S = (R[0][0] - E[0]) / r, L = -(R[0][1] - E[1]) / r, A = (R[1][0] - E[0]) / r, M = -(R[1][1] - E[1]) / r, b = (R[2][0] - E[0]) / r, P = -(R[2][1] - E[1]) / r;
      g.beginPath(), g.moveTo(A, M), g.lineTo(S, L), g.lineTo(b, P), g.closePath(), g.stroke();
    }), g.restore()), g.canvas;
  }
  const jg = 10, mh = 0.25;
  class Hg {
    /**
     * @param {import("../proj/Projection.js").default} sourceProj Source projection.
     * @param {import("../proj/Projection.js").default} targetProj Target projection.
     * @param {import("../extent.js").Extent} targetExtent Target extent to triangulate.
     * @param {import("../extent.js").Extent} maxSourceExtent Maximal source extent that can be used.
     * @param {number} errorThreshold Acceptable error (in source units).
     * @param {?number} destinationResolution The (optional) resolution of the destination.
     * @param {import("../transform.js").Transform} [sourceMatrix] Source transform matrix.
     */
    constructor(t, e, i, s, r, o, a) {
      this.sourceProj_ = t, this.targetProj_ = e;
      let l = {};
      const h = a ? Pu(
        (w) => dt(
          a,
          Jn(w, this.targetProj_, this.sourceProj_)
        )
      ) : qn(this.targetProj_, this.sourceProj_);
      this.transformInv_ = function(w) {
        const E = w[0] + "/" + w[1];
        return l[E] || (l[E] = h(w)), l[E];
      }, this.maxSourceExtent_ = s, this.errorThresholdSquared_ = r * r, this.triangles_ = [], this.wrapsXInSource_ = !1, this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!s && !!this.sourceProj_.getExtent() && J(s) >= J(this.sourceProj_.getExtent()), this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? J(this.sourceProj_.getExtent()) : null, this.targetWorldWidth_ = this.targetProj_.getExtent() ? J(this.targetProj_.getExtent()) : null;
      const c = Ne(i), u = Xn(i), d = Wn(i), f = zn(i), g = this.transformInv_(c), p = this.transformInv_(u), _ = this.transformInv_(d), m = this.transformInv_(f), y = jg + (o ? Math.max(
        0,
        Math.ceil(
          Math.log2(
            $s(i) / (o * o * 256 * 256)
          )
        )
      ) : 0);
      if (this.addQuad_(
        c,
        u,
        d,
        f,
        g,
        p,
        _,
        m,
        y
      ), this.wrapsXInSource_) {
        let w = 1 / 0;
        this.triangles_.forEach(function(E, x, C) {
          w = Math.min(
            w,
            E.source[0][0],
            E.source[1][0],
            E.source[2][0]
          );
        }), this.triangles_.forEach((E) => {
          if (Math.max(
            E.source[0][0],
            E.source[1][0],
            E.source[2][0]
          ) - w > this.sourceWorldWidth_ / 2) {
            const x = [
              [E.source[0][0], E.source[0][1]],
              [E.source[1][0], E.source[1][1]],
              [E.source[2][0], E.source[2][1]]
            ];
            x[0][0] - w > this.sourceWorldWidth_ / 2 && (x[0][0] -= this.sourceWorldWidth_), x[1][0] - w > this.sourceWorldWidth_ / 2 && (x[1][0] -= this.sourceWorldWidth_), x[2][0] - w > this.sourceWorldWidth_ / 2 && (x[2][0] -= this.sourceWorldWidth_);
            const C = Math.min(
              x[0][0],
              x[1][0],
              x[2][0]
            );
            Math.max(
              x[0][0],
              x[1][0],
              x[2][0]
            ) - C < this.sourceWorldWidth_ / 2 && (E.source = x);
          }
        });
      }
      l = {};
    }
    /**
     * Adds triangle to the triangulation.
     * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
     * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
     * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
     * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
     * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
     * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
     * @private
     */
    addTriangle_(t, e, i, s, r, o) {
      this.triangles_.push({
        source: [s, r, o],
        target: [t, e, i]
      });
    }
    /**
     * Adds quad (points in clock-wise order) to the triangulation
     * (and reprojects the vertices) if valid.
     * Performs quad subdivision if needed to increase precision.
     *
     * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
     * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
     * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
     * @param {import("../coordinate.js").Coordinate} d The target d coordinate.
     * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
     * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
     * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
     * @param {import("../coordinate.js").Coordinate} dSrc The source d coordinate.
     * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
     * @private
     */
    addQuad_(t, e, i, s, r, o, a, l, h) {
      const c = Ea([r, o, a, l]), u = this.sourceWorldWidth_ ? J(c) / this.sourceWorldWidth_ : null, d = (
        /** @type {number} */
        this.sourceWorldWidth_
      ), f = this.sourceProj_.canWrapX() && u > 0.5 && u < 1;
      let g = !1;
      if (h > 0) {
        if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
          const _ = Ea([t, e, i, s]);
          g = J(_) / this.targetWorldWidth_ > mh || g;
        }
        !f && this.sourceProj_.isGlobal() && u && (g = u > mh || g);
      }
      if (!g && this.maxSourceExtent_ && isFinite(c[0]) && isFinite(c[1]) && isFinite(c[2]) && isFinite(c[3]) && !Rt(c, this.maxSourceExtent_))
        return;
      let p = 0;
      if (!g && (!isFinite(r[0]) || !isFinite(r[1]) || !isFinite(o[0]) || !isFinite(o[1]) || !isFinite(a[0]) || !isFinite(a[1]) || !isFinite(l[0]) || !isFinite(l[1]))) {
        if (h > 0)
          g = !0;
        else if (p = (!isFinite(r[0]) || !isFinite(r[1]) ? 8 : 0) + (!isFinite(o[0]) || !isFinite(o[1]) ? 4 : 0) + (!isFinite(a[0]) || !isFinite(a[1]) ? 2 : 0) + (!isFinite(l[0]) || !isFinite(l[1]) ? 1 : 0), p != 1 && p != 2 && p != 4 && p != 8)
          return;
      }
      if (h > 0) {
        if (!g) {
          const _ = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], m = this.transformInv_(_);
          let y;
          f ? y = (Oe(r[0], d) + Oe(a[0], d)) / 2 - Oe(m[0], d) : y = (r[0] + a[0]) / 2 - m[0];
          const w = (r[1] + a[1]) / 2 - m[1];
          g = y * y + w * w > this.errorThresholdSquared_;
        }
        if (g) {
          if (Math.abs(t[0] - i[0]) <= Math.abs(t[1] - i[1])) {
            const _ = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2], m = this.transformInv_(_), y = [(s[0] + t[0]) / 2, (s[1] + t[1]) / 2], w = this.transformInv_(y);
            this.addQuad_(
              t,
              e,
              _,
              y,
              r,
              o,
              m,
              w,
              h - 1
            ), this.addQuad_(
              y,
              _,
              i,
              s,
              w,
              m,
              a,
              l,
              h - 1
            );
          } else {
            const _ = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2], m = this.transformInv_(_), y = [(i[0] + s[0]) / 2, (i[1] + s[1]) / 2], w = this.transformInv_(y);
            this.addQuad_(
              t,
              _,
              y,
              s,
              r,
              m,
              w,
              l,
              h - 1
            ), this.addQuad_(
              _,
              e,
              i,
              y,
              m,
              o,
              a,
              w,
              h - 1
            );
          }
          return;
        }
      }
      if (f) {
        if (!this.canWrapXInSource_)
          return;
        this.wrapsXInSource_ = !0;
      }
      p & 11 || this.addTriangle_(t, i, s, r, a, l), p & 14 || this.addTriangle_(t, i, e, r, a, o), p && (p & 13 || this.addTriangle_(e, s, t, o, l, r), p & 7 || this.addTriangle_(e, s, i, o, l, a));
    }
    /**
     * Calculates extent of the `source` coordinates from all the triangles.
     *
     * @return {import("../extent.js").Extent} Calculated extent.
     */
    calculateSourceExtent() {
      const t = Dt();
      return this.triangles_.forEach(function(e, i, s) {
        const r = e.source;
        Gi(t, r[0]), Gi(t, r[1]), Gi(t, r[2]);
      }), t;
    }
    /**
     * @return {Array<Triangle>} Array of the calculated triangles.
     */
    getTriangles() {
      return this.triangles_;
    }
  }
  const qg = Hg, Jg = 0.5;
  class Qg extends ao {
    /**
     * @param {import("../proj/Projection.js").default} sourceProj Source projection.
     * @param {import("../tilegrid/TileGrid.js").default} sourceTileGrid Source tile grid.
     * @param {import("../proj/Projection.js").default} targetProj Target projection.
     * @param {import("../tilegrid/TileGrid.js").default} targetTileGrid Target tile grid.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Coordinate of the tile.
     * @param {import("../tilecoord.js").TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
     * @param {number} pixelRatio Pixel ratio.
     * @param {number} gutter Gutter of the source tiles.
     * @param {FunctionType} getTileFunction
     *     Function returning source tiles (z, x, y, pixelRatio).
     * @param {number} [errorThreshold] Acceptable reprojection error (in px).
     * @param {boolean} [renderEdges] Render reprojection edges.
     * @param {import("../Tile.js").Options} [options] Tile options.
     */
    constructor(t, e, i, s, r, o, a, l, h, c, u, d) {
      super(r, F.IDLE, d), this.renderEdges_ = u !== void 0 ? u : !1, this.pixelRatio_ = a, this.gutter_ = l, this.canvas_ = null, this.sourceTileGrid_ = e, this.targetTileGrid_ = s, this.wrappedTileCoord_ = o || r, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0, this.clipExtent_ = t.canWrapX() ? t.getExtent() : void 0;
      const f = s.getTileCoordExtent(
        this.wrappedTileCoord_
      ), g = this.targetTileGrid_.getExtent();
      let p = this.sourceTileGrid_.getExtent();
      const _ = g ? ke(f, g) : f;
      if ($s(_) === 0) {
        this.state = F.EMPTY;
        return;
      }
      const m = t.getExtent();
      m && (p ? p = ke(p, m) : p = m);
      const y = s.getResolution(
        this.wrappedTileCoord_[0]
      ), w = $g(
        t,
        i,
        _,
        y
      );
      if (!isFinite(w) || w <= 0) {
        this.state = F.EMPTY;
        return;
      }
      const E = c !== void 0 ? c : Jg;
      if (this.triangulation_ = new qg(
        t,
        i,
        _,
        p,
        w * E,
        y
      ), this.triangulation_.getTriangles().length === 0) {
        this.state = F.EMPTY;
        return;
      }
      this.sourceZ_ = e.getZForResolution(w);
      let x = this.triangulation_.calculateSourceExtent();
      if (p && (t.canWrapX() ? (x[1] = nt(
        x[1],
        p[1],
        p[3]
      ), x[3] = nt(
        x[3],
        p[1],
        p[3]
      )) : x = ke(x, p)), !$s(x))
        this.state = F.EMPTY;
      else {
        let C = 0, T = 0;
        t.canWrapX() && (C = J(m), T = Math.floor(
          (x[0] - m[0]) / C
        )), La(
          x.slice(),
          t,
          !0
        ).forEach((S) => {
          const L = e.getTileRangeForExtentAndZ(
            S,
            this.sourceZ_
          );
          for (let A = L.minX; A <= L.maxX; A++)
            for (let M = L.minY; M <= L.maxY; M++) {
              const b = h(this.sourceZ_, A, M, a);
              if (b) {
                const P = T * C;
                this.sourceTiles_.push({ tile: b, offset: P });
              }
            }
          ++T;
        }), this.sourceTiles_.length === 0 && (this.state = F.EMPTY);
      }
    }
    /**
     * Get the HTML Canvas element for this tile.
     * @return {HTMLCanvasElement} Canvas.
     */
    getImage() {
      return this.canvas_;
    }
    /**
     * @private
     */
    reproject_() {
      const t = [];
      if (this.sourceTiles_.forEach((e) => {
        var s;
        const i = e.tile;
        if (i && i.getState() == F.LOADED) {
          const r = this.sourceTileGrid_.getTileCoordExtent(i.tileCoord);
          r[0] += e.offset, r[2] += e.offset;
          const o = (s = this.clipExtent_) == null ? void 0 : s.slice();
          o && (o[0] += e.offset, o[2] += e.offset), t.push({
            extent: r,
            clipExtent: o,
            image: i.getImage()
          });
        }
      }), this.sourceTiles_.length = 0, t.length === 0)
        this.state = F.ERROR;
      else {
        const e = this.wrappedTileCoord_[0], i = this.targetTileGrid_.getTileSize(e), s = typeof i == "number" ? i : i[0], r = typeof i == "number" ? i : i[1], o = this.targetTileGrid_.getResolution(e), a = this.sourceTileGrid_.getResolution(
          this.sourceZ_
        ), l = this.targetTileGrid_.getTileCoordExtent(
          this.wrappedTileCoord_
        );
        this.canvas_ = Vg(
          s,
          r,
          this.pixelRatio_,
          a,
          this.sourceTileGrid_.getExtent(),
          o,
          l,
          this.triangulation_,
          t,
          this.gutter_,
          this.renderEdges_,
          this.interpolate
        ), this.state = F.LOADED;
      }
      this.changed();
    }
    /**
     * Load not yet loaded URI.
     * @override
     */
    load() {
      if (this.state == F.IDLE) {
        this.state = F.LOADING, this.changed();
        let t = 0;
        this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach(({ tile: e }) => {
          const i = e.getState();
          if (i == F.IDLE || i == F.LOADING) {
            t++;
            const s = $(e, Y.CHANGE, (r) => {
              const o = e.getState();
              (o == F.LOADED || o == F.ERROR || o == F.EMPTY) && (it(s), t--, t === 0 && (this.unlistenSources_(), this.reproject_()));
            });
            this.sourcesListenerKeys_.push(s);
          }
        }), t === 0 ? setTimeout(this.reproject_.bind(this), 0) : this.sourceTiles_.forEach(function({ tile: e }, i, s) {
          e.getState() == F.IDLE && e.load();
        });
      }
    }
    /**
     * @private
     */
    unlistenSources_() {
      this.sourcesListenerKeys_.forEach(it), this.sourcesListenerKeys_ = null;
    }
    /**
     * Remove from the cache due to expiry
     * @override
     */
    release() {
      this.canvas_ && (rs(this.canvas_.getContext("2d")), xi.push(this.canvas_), this.canvas_ = null), super.release();
    }
  }
  const ph = Qg;
  class t_ {
    /**
     * @param {number} [highWaterMark] High water mark.
     */
    constructor(t) {
      this.highWaterMark = t !== void 0 ? t : 2048, this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
    }
    deleteOldest() {
      const t = this.pop();
      t instanceof Ln && t.dispose();
    }
    /**
     * @return {boolean} Can expire cache.
     */
    canExpireCache() {
      return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
    }
    /**
     * Expire the cache. When the cache entry is a {@link module:ol/Disposable~Disposable},
     * the entry will be disposed.
     * @param {!Object<string, boolean>} [keep] Keys to keep. To be implemented by subclasses.
     */
    expireCache(t) {
      for (; this.canExpireCache(); )
        this.deleteOldest();
    }
    /**
     * FIXME empty description for jsdoc
     */
    clear() {
      for (; this.oldest_; )
        this.deleteOldest();
    }
    /**
     * @param {string} key Key.
     * @return {boolean} Contains key.
     */
    containsKey(t) {
      return this.entries_.hasOwnProperty(t);
    }
    /**
     * @param {function(T, string, LRUCache<T>): ?} f The function
     *     to call for every entry from the oldest to the newer. This function takes
     *     3 arguments (the entry value, the entry key and the LRUCache object).
     *     The return value is ignored.
     */
    forEach(t) {
      let e = this.oldest_;
      for (; e; )
        t(e.value_, e.key_, this), e = e.newer;
    }
    /**
     * @param {string} key Key.
     * @param {*} [options] Options (reserved for subclasses).
     * @return {T} Value.
     */
    get(t, e) {
      const i = this.entries_[t];
      return q(
        i !== void 0,
        "Tried to get a value for a key that does not exist in the cache"
      ), i === this.newest_ || (i === this.oldest_ ? (this.oldest_ = /** @type {Entry} */
      this.oldest_.newer, this.oldest_.older = null) : (i.newer.older = i.older, i.older.newer = i.newer), i.newer = null, i.older = this.newest_, this.newest_.newer = i, this.newest_ = i), i.value_;
    }
    /**
     * Remove an entry from the cache.
     * @param {string} key The entry key.
     * @return {T} The removed entry.
     */
    remove(t) {
      const e = this.entries_[t];
      return q(
        e !== void 0,
        "Tried to get a value for a key that does not exist in the cache"
      ), e === this.newest_ ? (this.newest_ = /** @type {Entry} */
      e.older, this.newest_ && (this.newest_.newer = null)) : e === this.oldest_ ? (this.oldest_ = /** @type {Entry} */
      e.newer, this.oldest_ && (this.oldest_.older = null)) : (e.newer.older = e.older, e.older.newer = e.newer), delete this.entries_[t], --this.count_, e.value_;
    }
    /**
     * @return {number} Count.
     */
    getCount() {
      return this.count_;
    }
    /**
     * @return {Array<string>} Keys.
     */
    getKeys() {
      const t = new Array(this.count_);
      let e = 0, i;
      for (i = this.newest_; i; i = i.older)
        t[e++] = i.key_;
      return t;
    }
    /**
     * @return {Array<T>} Values.
     */
    getValues() {
      const t = new Array(this.count_);
      let e = 0, i;
      for (i = this.newest_; i; i = i.older)
        t[e++] = i.value_;
      return t;
    }
    /**
     * @return {T} Last value.
     */
    peekLast() {
      return this.oldest_.value_;
    }
    /**
     * @return {string} Last key.
     */
    peekLastKey() {
      return this.oldest_.key_;
    }
    /**
     * Get the key of the newest item in the cache.  Throws if the cache is empty.
     * @return {string} The newest key.
     */
    peekFirstKey() {
      return this.newest_.key_;
    }
    /**
     * Return an entry without updating least recently used time.
     * @param {string} key Key.
     * @return {T|undefined} Value.
     */
    peek(t) {
      var e;
      return (e = this.entries_[t]) == null ? void 0 : e.value_;
    }
    /**
     * @return {T} value Value.
     */
    pop() {
      const t = this.oldest_;
      return delete this.entries_[t.key_], t.newer && (t.newer.older = null), this.oldest_ = /** @type {Entry} */
      t.newer, this.oldest_ || (this.newest_ = null), --this.count_, t.value_;
    }
    /**
     * @param {string} key Key.
     * @param {T} value Value.
     */
    replace(t, e) {
      this.get(t), this.entries_[t].value_ = e;
    }
    /**
     * @param {string} key Key.
     * @param {T} value Value.
     */
    set(t, e) {
      q(
        !(t in this.entries_),
        "Tried to set a value for a key that is used already"
      );
      const i = {
        key_: t,
        newer: null,
        older: this.newest_,
        value_: e
      };
      this.newest_ ? this.newest_.newer = i : this.oldest_ = i, this.newest_ = i, this.entries_[t] = i, ++this.count_;
    }
    /**
     * Set a maximum number of entries for the cache.
     * @param {number} size Cache size.
     * @api
     */
    setSize(t) {
      this.highWaterMark = t;
    }
  }
  const e_ = t_;
  function Es(n, t, e, i) {
    return i !== void 0 ? (i[0] = n, i[1] = t, i[2] = e, i) : [n, t, e];
  }
  function i_(n, t, e) {
    return n + "/" + t + "/" + e;
  }
  function n_(n) {
    return s_(n[0], n[1], n[2]);
  }
  function s_(n, t, e) {
    return (t << n) + e;
  }
  function r_(n, t) {
    const e = n[0], i = n[1], s = n[2];
    if (t.getMinZoom() > e || e > t.getMaxZoom())
      return !1;
    const r = t.getFullTileRange(e);
    return r ? r.containsXY(i, s) : !0;
  }
  class o_ {
    constructor() {
      /**
       * @private
       * @param {...*} args Args.
       * @return {ZIndexContext} This.
       */
      qh(this, "pushMethodArgs_", (...t) => (this.push_(t), this));
      this.instructions_ = [], this.zIndex = 0, this.offset_ = 0, this.context_ = /** @type {ZIndexContextProxy} */
      new Proxy(ss(), {
        get: (t, e) => {
          if (typeof /** @type {*} */
          ss()[e] == "function")
            return this.push_(e), this.pushMethodArgs_;
        },
        set: (t, e, i) => (this.push_(e, i), !0)
      });
    }
    /**
     * @param {...*} args Arguments to push to the instructions array.
     * @private
     */
    push_(...t) {
      const e = this.instructions_, i = this.zIndex + this.offset_;
      e[i] || (e[i] = []), e[i].push(...t);
    }
    /**
     * Push a function that renders to the context directly.
     * @param {function(CanvasRenderingContext2D): void} render Function.
     */
    pushFunction(t) {
      this.push_(t);
    }
    /**
     * Get a proxy for CanvasRenderingContext2D which does not support getting state
     * (e.g. `context.globalAlpha`, which will return `undefined`). To set state, if it relies on a
     * previous state (e.g. `context.globalAlpha = context.globalAlpha / 2`), set a function,
     * e.g. `context.globalAlpha = (context) => context.globalAlpha / 2`.
     * @return {ZIndexContextProxy} Context.
     */
    getContext() {
      return this.context_;
    }
    /**
     * @param {CanvasRenderingContext2D} context Context.
     */
    draw(t) {
      this.instructions_.forEach((e) => {
        for (let i = 0, s = e.length; i < s; ++i) {
          const r = e[i];
          if (typeof r == "function") {
            r(t);
            continue;
          }
          const o = e[++i];
          if (typeof /** @type {*} */
          t[r] == "function")
            t[r](...o);
          else {
            if (typeof o == "function") {
              t[r] = o(t);
              continue;
            }
            t[r] = o;
          }
        }
      });
    }
    clear() {
      this.instructions_.length = 0, this.zIndex = 0, this.offset_ = 0;
    }
    /**
     * Offsets the zIndex by the highest current zIndex. Useful for rendering multiple worlds or tiles, to
     * avoid conflicting context.clip() or context.save()/restore() calls.
     */
    offset() {
      this.offset_ = this.instructions_.length, this.zIndex = 0;
    }
  }
  const yh = o_, a_ = 5;
  class l_ extends ua {
    /**
     * @param {LayerType} layer Layer.
     */
    constructor(t) {
      super(), this.ready = !0, this.boundHandleImageChange_ = this.handleImageChange_.bind(this), this.layer_ = t, this.staleKeys_ = new Array(), this.maxStaleKeys = a_;
    }
    /**
     * @return {Array<string>} Get the list of stale keys.
     */
    getStaleKeys() {
      return this.staleKeys_;
    }
    /**
     * @param {string} key The new stale key.
     */
    prependStaleKey(t) {
      this.staleKeys_.unshift(t), this.staleKeys_.length > this.maxStaleKeys && (this.staleKeys_.length = this.maxStaleKeys);
    }
    /**
     * Asynchronous layer level hit detection.
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
     * an array of features.
     */
    getFeatures(t) {
      return V();
    }
    /**
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     */
    getData(t) {
      return null;
    }
    /**
     * Determine whether render should be called.
     * @abstract
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @return {boolean} Layer is ready to be rendered.
     */
    prepareFrame(t) {
      return V();
    }
    /**
     * Render the layer.
     * @abstract
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement|null} target Target that may be used to render content to.
     * @return {HTMLElement} The rendered element.
     */
    renderFrame(t, e) {
      return V();
    }
    /**
     * @abstract
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
     * @param {Array<import("./Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
     * @return {T|undefined} Callback result.
     * @template T
     */
    forEachFeatureAtCoordinate(t, e, i, s, r) {
    }
    /**
     * @return {LayerType} Layer.
     */
    getLayer() {
      return this.layer_;
    }
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     * @abstract
     */
    handleFontsChanged() {
    }
    /**
     * Handle changes in image state.
     * @param {import("../events/Event.js").default} event Image change event.
     * @private
     */
    handleImageChange_(t) {
      const e = (
        /** @type {import("../Image.js").default} */
        t.target
      );
      (e.getState() === U.LOADED || e.getState() === U.ERROR) && this.renderIfReadyAndVisible();
    }
    /**
     * Load the image if not already loaded, and register the image change
     * listener if needed.
     * @param {import("../Image.js").default} image Image.
     * @return {boolean} `true` if the image is already loaded, `false` otherwise.
     * @protected
     */
    loadImage(t) {
      let e = t.getState();
      return e != U.LOADED && e != U.ERROR && t.addEventListener(Y.CHANGE, this.boundHandleImageChange_), e == U.IDLE && (t.load(), e = t.getState()), e == U.LOADED;
    }
    /**
     * @protected
     */
    renderIfReadyAndVisible() {
      const t = this.getLayer();
      t && t.getVisible() && t.getSourceState() === "ready" && t.changed();
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     */
    renderDeferred(t) {
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      delete this.layer_, super.disposeInternal();
    }
  }
  const h_ = l_, Eh = [];
  let wi = null;
  function c_() {
    wi = ht(1, 1, void 0, {
      willReadFrequently: !0
    });
  }
  class u_ extends h_ {
    /**
     * @param {LayerType} layer Layer.
     */
    constructor(t) {
      super(t), this.container = null, this.renderedResolution, this.tempTransform = Bt(), this.pixelTransform = Bt(), this.inversePixelTransform = Bt(), this.context = null, this.deferredContext_ = null, this.containerReused = !1, this.frameState = null;
    }
    /**
     * @param {import('../../DataTile.js').ImageLike} image Image.
     * @param {number} col The column index.
     * @param {number} row The row index.
     * @return {Uint8ClampedArray|null} The image data.
     */
    getImageData(t, e, i) {
      wi || c_(), wi.clearRect(0, 0, 1, 1);
      let s;
      try {
        wi.drawImage(t, e, i, 1, 1, 0, 0, 1, 1), s = wi.getImageData(0, 0, 1, 1).data;
      } catch {
        return wi = null, null;
      }
      return s;
    }
    /**
     * @param {import('../../Map.js').FrameState} frameState Frame state.
     * @return {string} Background color.
     */
    getBackground(t) {
      let i = this.getLayer().getBackground();
      return typeof i == "function" && (i = i(t.viewState.resolution)), i || void 0;
    }
    /**
     * Get a rendering container from an existing target, if compatible.
     * @param {HTMLElement} target Potential render target.
     * @param {string} transform CSS transform matrix.
     * @param {string} [backgroundColor] Background color.
     */
    useContainer(t, e, i) {
      const s = this.getLayer().getClassName();
      let r, o;
      if (t && t.className === s && (!i || t && t.style.backgroundColor && ye(
        fi(t.style.backgroundColor),
        fi(i)
      ))) {
        const a = t.firstElementChild;
        a instanceof HTMLCanvasElement && (o = a.getContext("2d"));
      }
      if (o && Xu(o.canvas.style.transform, e) ? (this.container = t, this.context = o, this.containerReused = !0) : this.containerReused ? (this.container = null, this.context = null, this.containerReused = !1) : this.container && (this.container.style.backgroundColor = null), !this.container) {
        r = document.createElement("div"), r.className = s;
        let a = r.style;
        a.position = "absolute", a.width = "100%", a.height = "100%", o = ht();
        const l = o.canvas;
        r.appendChild(l), a = l.style, a.position = "absolute", a.left = "0", a.transformOrigin = "top left", this.container = r, this.context = o;
      }
      !this.containerReused && i && !this.container.style.backgroundColor && (this.container.style.backgroundColor = i);
    }
    /**
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {import("../../extent.js").Extent} extent Clip extent.
     * @protected
     */
    clipUnrotated(t, e, i) {
      const s = Ne(i), r = Xn(i), o = Wn(i), a = zn(i);
      dt(e.coordinateToPixelTransform, s), dt(e.coordinateToPixelTransform, r), dt(e.coordinateToPixelTransform, o), dt(e.coordinateToPixelTransform, a);
      const l = this.inversePixelTransform;
      dt(l, s), dt(l, r), dt(l, o), dt(l, a), t.save(), t.beginPath(), t.moveTo(Math.round(s[0]), Math.round(s[1])), t.lineTo(Math.round(r[0]), Math.round(r[1])), t.lineTo(Math.round(o[0]), Math.round(o[1])), t.lineTo(Math.round(a[0]), Math.round(a[1])), t.clip();
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target that may be used to render content to.
     * @protected
     */
    prepareContainer(t, e) {
      const i = t.extent, s = t.viewState.resolution, r = t.viewState.rotation, o = t.pixelRatio, a = Math.round(J(i) / s * o), l = Math.round(yt(i) / s * o);
      ae(
        this.pixelTransform,
        t.size[0] / 2,
        t.size[1] / 2,
        1 / o,
        1 / o,
        r,
        -a / 2,
        -l / 2
      ), ja(this.inversePixelTransform, this.pixelTransform);
      const h = Wu(this.pixelTransform);
      if (this.useContainer(e, h, this.getBackground(t)), !this.containerReused) {
        const c = this.context.canvas;
        c.width != a || c.height != l ? (c.width = a, c.height = l) : this.context.clearRect(0, 0, a, l), h !== c.style.transform && (c.style.transform = h);
      }
    }
    /**
     * @param {import("../../render/EventType.js").default} type Event type.
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @private
     */
    dispatchRenderEvent_(t, e, i) {
      const s = this.getLayer();
      if (s.hasListener(t)) {
        const r = new ah(
          t,
          this.inversePixelTransform,
          i,
          e
        );
        s.dispatchEvent(r);
      }
    }
    /**
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @protected
     */
    preRender(t, e) {
      this.frameState = e, !e.declutter && this.dispatchRenderEvent_(Ft.PRERENDER, t, e);
    }
    /**
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @protected
     */
    postRender(t, e) {
      e.declutter || this.dispatchRenderEvent_(Ft.POSTRENDER, t, e);
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     */
    renderDeferredInternal(t) {
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {import('../../render/canvas/ZIndexContext.js').ZIndexContextProxy} Context.
     */
    getRenderContext(t) {
      return t.declutter && !this.deferredContext_ && (this.deferredContext_ = new yh()), t.declutter ? this.deferredContext_.getContext() : this.context;
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @override
     */
    renderDeferred(t) {
      t.declutter && (this.dispatchRenderEvent_(
        Ft.PRERENDER,
        this.context,
        t
      ), t.declutter && this.deferredContext_ && (this.deferredContext_.draw(this.context), this.deferredContext_.clear()), this.renderDeferredInternal(t), this.dispatchRenderEvent_(
        Ft.POSTRENDER,
        this.context,
        t
      ));
    }
    /**
     * Creates a transform for rendering to an element that will be rotated after rendering.
     * @param {import("../../coordinate.js").Coordinate} center Center.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {number} pixelRatio Pixel ratio.
     * @param {number} width Width of the rendered element (in pixels).
     * @param {number} height Height of the rendered element (in pixels).
     * @param {number} offsetX Offset on the x-axis in view coordinates.
     * @protected
     * @return {!import("../../transform.js").Transform} Transform.
     */
    getRenderTransform(t, e, i, s, r, o, a) {
      const l = r / 2, h = o / 2, c = s / e, u = -c, d = -t[0] + a, f = -t[1];
      return ae(
        this.tempTransform,
        l,
        h,
        c,
        u,
        -i,
        d,
        f
      );
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      delete this.frameState, super.disposeInternal();
    }
  }
  const xh = u_;
  function uo(n, t, e, i, s) {
    return `${j(n)},${t},${i_(e, i, s)}`;
  }
  function fo(n, t, e) {
    if (!(e in n))
      return n[e] = /* @__PURE__ */ new Set([t]), !0;
    const i = n[e], s = i.has(t);
    return s || i.add(t), !s;
  }
  function d_(n, t, e) {
    const i = n[e];
    return i ? i.delete(t) : !1;
  }
  function wh(n, t) {
    const e = n.layerStatesArray[n.layerIndex];
    e.extent && (t = ke(
      t,
      ve(e.extent, n.viewState.projection)
    ));
    const i = (
      /** @type {import("../../source/Tile.js").default} */
      e.layer.getRenderSource()
    );
    if (!i.getWrapX()) {
      const s = i.getTileGridForProjection(n.viewState.projection).getExtent();
      s && (t = ke(t, s));
    }
    return t;
  }
  class f_ extends xh {
    /**
     * @param {LayerType} tileLayer Tile layer.
     * @param {Options} [options] Options.
     */
    constructor(t, e) {
      super(t), e = e || {}, this.extentChanged = !0, this.renderComplete = !1, this.renderedExtent_ = null, this.renderedPixelRatio, this.renderedProjection = null, this.renderedTiles = [], this.renderedSourceKey_, this.renderedSourceRevision_, this.tempExtent = Dt(), this.tempTileRange_ = new fh(0, 0, 0, 0), this.tempTileCoord_ = Es(0, 0, 0);
      const i = e.cacheSize !== void 0 ? e.cacheSize : 512;
      this.tileCache_ = new e_(i), this.maxStaleKeys = i * 0.5;
    }
    /**
     * @return {LRUCache} Tile cache.
     */
    getTileCache() {
      return this.tileCache_;
    }
    /**
     * Get a tile from the cache or create one if needed.
     *
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {import("../../Tile.js").default|null} Tile (or null if outside source extent).
     * @protected
     */
    getOrCreateTile(t, e, i, s) {
      const r = this.tileCache_, a = this.getLayer().getSource(), l = uo(a, a.getKey(), t, e, i);
      let h;
      if (r.containsKey(l))
        h = r.get(l);
      else {
        if (h = a.getTile(
          t,
          e,
          i,
          s.pixelRatio,
          s.viewState.projection
        ), !h)
          return null;
        r.set(l, h);
      }
      return h;
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {import("../../Tile.js").default|null} Tile (or null if outside source extent).
     * @protected
     */
    getTile(t, e, i, s) {
      const r = this.getOrCreateTile(t, e, i, s);
      return r || null;
    }
    /**
     * @param {import("../../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray} Data at the pixel location.
     * @override
     */
    getData(t) {
      const e = this.frameState;
      if (!e)
        return null;
      const i = this.getLayer(), s = dt(
        e.pixelToCoordinateTransform,
        t.slice()
      ), r = i.getExtent();
      if (r && !ni(r, s))
        return null;
      const o = e.viewState, a = i.getRenderSource(), l = a.getTileGridForProjection(o.projection), h = a.getTilePixelRatio(e.pixelRatio);
      for (let c = l.getZForResolution(o.resolution); c >= l.getMinZoom(); --c) {
        const u = l.getTileCoordForCoordAndZ(s, c), d = this.getTile(c, u[1], u[2], e);
        if (!d || d.getState() !== F.LOADED)
          continue;
        const f = l.getOrigin(c), g = St(l.getTileSize(c)), p = l.getResolution(c);
        let _;
        if (d instanceof uh || d instanceof ph)
          _ = d.getImage();
        else if (d instanceof ch) {
          if (_ = lo(d.getData()), !_)
            continue;
        } else
          continue;
        const m = Math.floor(
          h * ((s[0] - f[0]) / p - u[1] * g[0])
        ), y = Math.floor(
          h * ((f[1] - s[1]) / p - u[2] * g[1])
        ), w = Math.round(
          h * a.getGutterForProjection(o.projection)
        );
        return this.getImageData(_, m + w, y + w);
      }
      return null;
    }
    /**
     * Determine whether render should be called.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {boolean} Layer is ready to be rendered.
     * @override
     */
    prepareFrame(t) {
      this.renderedProjection ? t.viewState.projection !== this.renderedProjection && (this.tileCache_.clear(), this.renderedProjection = t.viewState.projection) : this.renderedProjection = t.viewState.projection;
      const e = this.getLayer().getSource();
      if (!e)
        return !1;
      const i = e.getRevision();
      return this.renderedSourceRevision_ ? this.renderedSourceRevision_ !== i && (this.renderedSourceRevision_ = i, this.renderedSourceKey_ === e.getKey() && this.tileCache_.clear()) : this.renderedSourceRevision_ = i, !0;
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {import("../../extent.js").Extent} extent The extent to be rendered.
     * @param {number} initialZ The zoom level.
     * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
     * @param {number} preload Number of additional levels to load.
     */
    enqueueTiles(t, e, i, s, r) {
      const o = t.viewState, a = this.getLayer(), l = a.getRenderSource(), h = l.getTileGridForProjection(o.projection), c = j(l);
      c in t.wantedTiles || (t.wantedTiles[c] = {});
      const u = t.wantedTiles[c], d = a.getMapInternal(), f = Math.max(
        i - r,
        h.getMinZoom(),
        h.getZForResolution(
          Math.min(
            a.getMaxResolution(),
            d ? d.getView().getResolutionForZoom(Math.max(a.getMinZoom(), 0)) : h.getResolution(0)
          ),
          l.zDirection
        )
      ), g = o.rotation, p = g ? Sa(
        o.center,
        o.resolution,
        g,
        t.size
      ) : void 0;
      for (let _ = i; _ >= f; --_) {
        const m = h.getTileRangeForExtentAndZ(
          e,
          _,
          this.tempTileRange_
        ), y = h.getResolution(_);
        for (let w = m.minX; w <= m.maxX; ++w)
          for (let E = m.minY; E <= m.maxY; ++E) {
            if (g && !h.tileCoordIntersectsViewport([_, w, E], p))
              continue;
            const x = this.getTile(_, w, E, t);
            if (!x || !fo(s, x, _))
              continue;
            const T = x.getKey();
            if (u[T] = !0, x.getState() === F.IDLE && !t.tileQueue.isKeyQueued(T)) {
              const R = Es(_, w, E, this.tempTileCoord_);
              t.tileQueue.enqueue([
                x,
                c,
                h.getTileCoordCenter(R),
                y
              ]);
            }
          }
      }
    }
    /**
     * Look for tiles covering the provided tile coordinate at an alternate
     * zoom level.  Loaded tiles will be added to the provided tile texture lookup.
     * @param {import("../../tilecoord.js").TileCoord} tileCoord The target tile coordinate.
     * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
     * @return {boolean} The tile coordinate is covered by loaded tiles at the alternate zoom level.
     * @private
     */
    findStaleTile_(t, e) {
      const i = this.tileCache_, s = t[0], r = t[1], o = t[2], a = this.getStaleKeys();
      for (let l = 0; l < a.length; ++l) {
        const h = uo(
          this.getLayer().getSource(),
          a[l],
          s,
          r,
          o
        );
        if (i.containsKey(h)) {
          const c = i.peek(h);
          if (c.getState() === F.LOADED)
            return c.endTransition(j(this)), fo(e, c, s), !0;
        }
      }
      return !1;
    }
    /**
     * Look for tiles covering the provided tile coordinate at an alternate
     * zoom level.  Loaded tiles will be added to the provided tile texture lookup.
     * @param {import("../../tilegrid/TileGrid.js").default} tileGrid The tile grid.
     * @param {import("../../tilecoord.js").TileCoord} tileCoord The target tile coordinate.
     * @param {number} altZ The alternate zoom level.
     * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
     * @return {boolean} The tile coordinate is covered by loaded tiles at the alternate zoom level.
     * @private
     */
    findAltTiles_(t, e, i, s) {
      const r = t.getTileRangeForTileCoordAndZ(
        e,
        i,
        this.tempTileRange_
      );
      if (!r)
        return !1;
      let o = !0;
      const a = this.tileCache_, l = this.getLayer().getRenderSource(), h = l.getKey();
      for (let c = r.minX; c <= r.maxX; ++c)
        for (let u = r.minY; u <= r.maxY; ++u) {
          const d = uo(l, h, i, c, u);
          let f = !1;
          if (a.containsKey(d)) {
            const g = a.peek(d);
            g.getState() === F.LOADED && (fo(s, g, i), f = !0);
          }
          f || (o = !1);
        }
      return o;
    }
    /**
     * Render the layer.
     *
     * The frame rendering logic has three parts:
     *
     *  1. Enqueue tiles
     *  2. Find alt tiles for those that are not yet loaded
     *  3. Render loaded tiles
     *
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target that may be used to render content to.
     * @return {HTMLElement} The rendered element.
     * @override
     */
    renderFrame(t, e) {
      this.renderComplete = !0;
      const i = t.layerStatesArray[t.layerIndex], s = t.viewState, r = s.projection, o = s.resolution, a = s.center, l = t.pixelRatio, h = this.getLayer(), c = h.getSource(), u = c.getTileGridForProjection(r), d = u.getZForResolution(o, c.zDirection), f = u.getResolution(d), g = c.getKey();
      this.renderedSourceKey_ ? this.renderedSourceKey_ !== g && (this.prependStaleKey(this.renderedSourceKey_), this.renderedSourceKey_ = g) : this.renderedSourceKey_ = g;
      let p = t.extent;
      const _ = c.getTilePixelRatio(l);
      this.prepareContainer(t, e);
      const m = this.context.canvas.width, y = this.context.canvas.height, w = i.extent && ve(i.extent);
      w && (p = ke(
        p,
        ve(i.extent)
      ));
      const E = f * m / 2 / _, x = f * y / 2 / _, C = [
        a[0] - E,
        a[1] - x,
        a[0] + E,
        a[1] + x
      ], T = {};
      this.renderedTiles.length = 0;
      const R = h.getPreload();
      if (t.nextExtent) {
        const D = u.getZForResolution(
          s.nextResolution,
          c.zDirection
        ), X = wh(t, t.nextExtent);
        this.enqueueTiles(t, X, D, T, R);
      }
      const S = wh(t, p);
      if (this.enqueueTiles(t, S, d, T, 0), R > 0 && setTimeout(() => {
        this.enqueueTiles(
          t,
          S,
          d - 1,
          T,
          R - 1
        );
      }, 0), !(d in T))
        return this.container;
      const L = j(this), A = t.time;
      for (const D of T[d]) {
        const X = D.getState();
        if (X === F.EMPTY)
          continue;
        const K = D.tileCoord;
        if (X === F.LOADED && D.getAlpha(L, A) === 1) {
          D.endTransition(L);
          continue;
        }
        if (X !== F.ERROR && (this.renderComplete = !1), this.findStaleTile_(K, T)) {
          d_(T, D, d), t.animate = !0;
          continue;
        }
        if (this.findAltTiles_(
          u,
          K,
          d + 1,
          T
        ))
          continue;
        const ft = u.getMinZoom();
        for (let wt = d - 1; wt >= ft && !this.findAltTiles_(
          u,
          K,
          wt,
          T
        ); --wt)
          ;
      }
      const M = f / o * l / _, b = this.getRenderContext(t);
      ae(
        this.tempTransform,
        m / 2,
        y / 2,
        M,
        M,
        0,
        -m / 2,
        -y / 2
      ), i.extent && this.clipUnrotated(b, t, w), c.getInterpolate() || (b.imageSmoothingEnabled = !1), this.preRender(b, t);
      const P = Object.keys(T).map(Number);
      P.sort(se);
      let G;
      const O = [], W = [];
      for (let D = P.length - 1; D >= 0; --D) {
        const X = P[D], K = c.getTilePixelSize(
          X,
          l,
          r
        ), I = u.getResolution(X) / f, ft = K[0] * I * M, wt = K[1] * I * M, at = u.getTileCoordForCoordAndZ(
          Ne(C),
          X
        ), bt = u.getTileCoordExtent(at), Et = dt(this.tempTransform, [
          _ * (bt[0] - C[0]) / f,
          _ * (C[3] - bt[3]) / f
        ]), Qt = _ * c.getGutterForProjection(r);
        for (const Zt of T[X]) {
          if (Zt.getState() !== F.LOADED)
            continue;
          const Mt = Zt.tileCoord, vs = at[1] - Mt[1], xo = Math.round(Et[0] - (vs - 1) * ft), gn = at[2] - Mt[2], Ve = Math.round(Et[1] - (gn - 1) * wt), Gt = Math.round(Et[0] - vs * ft), te = Math.round(Et[1] - gn * wt), Si = xo - Gt, Ii = Ve - te, _n = P.length === 1;
          let je = !1;
          G = [Gt, te, Gt + Si, te, Gt + Si, te + Ii, Gt, te + Ii];
          for (let Li = 0, Ai = O.length; Li < Ai; ++Li)
            if (!_n && X < W[Li]) {
              const gt = O[Li];
              Rt(
                [Gt, te, Gt + Si, te + Ii],
                [gt[0], gt[3], gt[4], gt[7]]
              ) && (je || (b.save(), je = !0), b.beginPath(), b.moveTo(G[0], G[1]), b.lineTo(G[2], G[3]), b.lineTo(G[4], G[5]), b.lineTo(G[6], G[7]), b.moveTo(gt[6], gt[7]), b.lineTo(gt[4], gt[5]), b.lineTo(gt[2], gt[3]), b.lineTo(gt[0], gt[1]), b.clip());
            }
          O.push(G), W.push(X), this.drawTile(Zt, t, Gt, te, Si, Ii, Qt, _n), je && b.restore(), this.renderedTiles.unshift(Zt), this.updateUsedTiles(t.usedTiles, c, Zt);
        }
      }
      if (this.renderedResolution = f, this.extentChanged = !this.renderedExtent_ || !Ni(this.renderedExtent_, C), this.renderedExtent_ = C, this.renderedPixelRatio = l, this.postRender(this.context, t), i.extent && b.restore(), b.imageSmoothingEnabled = !0, this.renderComplete) {
        const D = (X, K) => {
          const tt = j(c), I = K.wantedTiles[tt], ft = I ? Object.keys(I).length : 0;
          this.updateCacheSize(ft), this.tileCache_.expireCache();
        };
        t.postRenderFunctions.push(D);
      }
      return this.container;
    }
    /**
     * Increases the cache size if needed
     * @param {number} tileCount Minimum number of tiles needed.
     */
    updateCacheSize(t) {
      this.tileCache_.highWaterMark = Math.max(
        this.tileCache_.highWaterMark,
        t * 2
      );
    }
    /**
     * @param {import("../../Tile.js").default} tile Tile.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {number} x Left of the tile.
     * @param {number} y Top of the tile.
     * @param {number} w Width of the tile.
     * @param {number} h Height of the tile.
     * @param {number} gutter Tile gutter.
     * @param {boolean} transition Apply an alpha transition.
     * @protected
     */
    drawTile(t, e, i, s, r, o, a, l) {
      let h;
      if (t instanceof ch) {
        if (h = lo(t.getData()), !h)
          throw new Error("Rendering array data is not yet supported");
      } else
        h = this.getTileImage(
          /** @type {import("../../ImageTile.js").default} */
          t
        );
      if (!h)
        return;
      const c = this.getRenderContext(e), u = j(this), d = e.layerStatesArray[e.layerIndex], f = d.opacity * (l ? t.getAlpha(u, e.time) : 1), g = f !== c.globalAlpha;
      g && (c.save(), c.globalAlpha = f), c.drawImage(
        h,
        a,
        a,
        h.width - 2 * a,
        h.height - 2 * a,
        i,
        s,
        r,
        o
      ), g && c.restore(), f !== d.opacity ? e.animate = !0 : l && t.endTransition(u);
    }
    /**
     * @return {HTMLCanvasElement} Image
     */
    getImage() {
      const t = this.context;
      return t ? t.canvas : null;
    }
    /**
     * Get the image from a tile.
     * @param {import("../../ImageTile.js").default} tile Tile.
     * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
     * @protected
     */
    getTileImage(t) {
      return t.getImage();
    }
    /**
     * @param {!Object<string, !Object<string, boolean>>} usedTiles Used tiles.
     * @param {import("../../source/Tile.js").default} tileSource Tile source.
     * @param {import('../../Tile.js').default} tile Tile.
     * @protected
     */
    updateUsedTiles(t, e, i) {
      const s = j(e);
      s in t || (t[s] = {}), t[s][i.getKey()] = !0;
    }
  }
  const g_ = f_, xs = {
    PRELOAD: "preload",
    USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError"
  };
  class __ extends as {
    /**
     * @param {Options<TileSourceType>} [options] Tile layer options.
     */
    constructor(t) {
      t = t || {};
      const e = Object.assign({}, t), i = t.cacheSize;
      delete t.cacheSize, delete e.preload, delete e.useInterimTilesOnError, super(e), this.on, this.once, this.un, this.cacheSize_ = i, this.setPreload(t.preload !== void 0 ? t.preload : 0), this.setUseInterimTilesOnError(
        t.useInterimTilesOnError !== void 0 ? t.useInterimTilesOnError : !0
      );
    }
    /**
     * @return {number|undefined} The suggested cache size
     * @protected
     */
    getCacheSize() {
      return this.cacheSize_;
    }
    /**
     * Return the level as number to which we will preload tiles up to.
     * @return {number} The level to preload tiles up to.
     * @observable
     * @api
     */
    getPreload() {
      return (
        /** @type {number} */
        this.get(xs.PRELOAD)
      );
    }
    /**
     * Set the level as number to which we will preload tiles up to.
     * @param {number} preload The level to preload tiles up to.
     * @observable
     * @api
     */
    setPreload(t) {
      this.set(xs.PRELOAD, t);
    }
    /**
     * Deprecated.  Whether we use interim tiles on error.
     * @return {boolean} Use interim tiles on error.
     * @observable
     * @api
     */
    getUseInterimTilesOnError() {
      return (
        /** @type {boolean} */
        this.get(xs.USE_INTERIM_TILES_ON_ERROR)
      );
    }
    /**
     * Deprecated.  Set whether we use interim tiles on error.
     * @param {boolean} useInterimTilesOnError Use interim tiles on error.
     * @observable
     * @api
     */
    setUseInterimTilesOnError(t) {
      this.set(xs.USE_INTERIM_TILES_ON_ERROR, t);
    }
    /**
     * Get data for a pixel location.  The return type depends on the source data.  For image tiles,
     * a four element RGBA array will be returned.  For data tiles, the array length will match the
     * number of bands in the dataset.  For requests outside the layer extent, `null` will be returned.
     * Data for a image tiles can only be retrieved if the source's `crossOrigin` property is set.
     *
     * ```js
     * // display layer data on every pointer move
     * map.on('pointermove', (event) => {
     *   console.log(layer.getData(event.pixel));
     * });
     * ```
     * @param {import("../pixel").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     * @api
     * @override
     */
    getData(t) {
      return super.getData(t);
    }
  }
  const m_ = __;
  class p_ extends m_ {
    /**
     * @param {import("./BaseTile.js").Options<TileSourceType>} [options] Tile layer options.
     */
    constructor(t) {
      super(t);
    }
    /**
     * @override
     */
    createRenderer() {
      return new g_(this, {
        cacheSize: this.getCacheSize()
      });
    }
  }
  const y_ = p_, Ci = [0, 0, 0], Ie = 5;
  class E_ {
    /**
     * @param {Options} options Tile grid options.
     */
    constructor(t) {
      this.minZoom = t.minZoom !== void 0 ? t.minZoom : 0, this.resolutions_ = t.resolutions, q(
        Tc(
          this.resolutions_,
          /**
           * @param {number} a First resolution
           * @param {number} b Second resolution
           * @return {number} Comparison result
           */
          (s, r) => r - s,
          !0
        ),
        "`resolutions` must be sorted in descending order"
      );
      let e;
      if (!t.origins) {
        for (let s = 0, r = this.resolutions_.length - 1; s < r; ++s)
          if (!e)
            e = this.resolutions_[s] / this.resolutions_[s + 1];
          else if (this.resolutions_[s] / this.resolutions_[s + 1] !== e) {
            e = void 0;
            break;
          }
      }
      this.zoomFactor_ = e, this.maxZoom = this.resolutions_.length - 1, this.origin_ = t.origin !== void 0 ? t.origin : null, this.origins_ = null, t.origins !== void 0 && (this.origins_ = t.origins, q(
        this.origins_.length == this.resolutions_.length,
        "Number of `origins` and `resolutions` must be equal"
      ));
      const i = t.extent;
      i !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = Ne(i)), q(
        !this.origin_ && this.origins_ || this.origin_ && !this.origins_,
        "Either `origin` or `origins` must be configured, never both"
      ), this.tileSizes_ = null, t.tileSizes !== void 0 && (this.tileSizes_ = t.tileSizes, q(
        this.tileSizes_.length == this.resolutions_.length,
        "Number of `tileSizes` and `resolutions` must be equal"
      )), this.tileSize_ = t.tileSize !== void 0 ? t.tileSize : this.tileSizes_ ? null : pr, q(
        !this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_,
        "Either `tileSize` or `tileSizes` must be configured, never both"
      ), this.extent_ = i !== void 0 ? i : null, this.fullTileRanges_ = null, this.tmpSize_ = [0, 0], this.tmpExtent_ = [0, 0, 0, 0], t.sizes !== void 0 ? this.fullTileRanges_ = t.sizes.map((s, r) => {
        const o = new fh(
          Math.min(0, s[0]),
          Math.max(s[0] - 1, -1),
          Math.min(0, s[1]),
          Math.max(s[1] - 1, -1)
        );
        if (i) {
          const a = this.getTileRangeForExtentAndZ(i, r);
          o.minX = Math.max(a.minX, o.minX), o.maxX = Math.min(a.maxX, o.maxX), o.minY = Math.max(a.minY, o.minY), o.maxY = Math.min(a.maxY, o.maxY);
        }
        return o;
      }) : i && this.calculateTileRanges_(i);
    }
    /**
     * Call a function with each tile coordinate for a given extent and zoom level.
     *
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} zoom Integer zoom level.
     * @param {function(import("../tilecoord.js").TileCoord): void} callback Function called with each tile coordinate.
     * @api
     */
    forEachTileCoord(t, e, i) {
      const s = this.getTileRangeForExtentAndZ(t, e);
      for (let r = s.minX, o = s.maxX; r <= o; ++r)
        for (let a = s.minY, l = s.maxY; a <= l; ++a)
          i([e, r, a]);
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {function(number, import("../TileRange.js").default): boolean} callback Callback.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
     * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
     * @return {boolean} Callback succeeded.
     */
    forEachTileCoordParentTileRange(t, e, i, s) {
      let r, o, a, l = null, h = t[0] - 1;
      for (this.zoomFactor_ === 2 ? (o = t[1], a = t[2]) : l = this.getTileCoordExtent(t, s); h >= this.minZoom; ) {
        if (o !== void 0 && a !== void 0 ? (o = Math.floor(o / 2), a = Math.floor(a / 2), r = Ei(o, o, a, a, i)) : r = this.getTileRangeForExtentAndZ(
          l,
          h,
          i
        ), e(h, r))
          return !0;
        --h;
      }
      return !1;
    }
    /**
     * Get the extent for this tile grid, if it was configured.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getExtent() {
      return this.extent_;
    }
    /**
     * Get the maximum zoom level for the grid.
     * @return {number} Max zoom.
     * @api
     */
    getMaxZoom() {
      return this.maxZoom;
    }
    /**
     * Get the minimum zoom level for the grid.
     * @return {number} Min zoom.
     * @api
     */
    getMinZoom() {
      return this.minZoom;
    }
    /**
     * Get the origin for the grid at the given zoom level.
     * @param {number} z Integer zoom level.
     * @return {import("../coordinate.js").Coordinate} Origin.
     * @api
     */
    getOrigin(t) {
      return this.origin_ ? this.origin_ : this.origins_[t];
    }
    /**
     * Get the resolution for the given zoom level.
     * @param {number} z Integer zoom level.
     * @return {number} Resolution.
     * @api
     */
    getResolution(t) {
      return this.resolutions_[t];
    }
    /**
     * Get the list of resolutions for the tile grid.
     * @return {Array<number>} Resolutions.
     * @api
     */
    getResolutions() {
      return this.resolutions_;
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
     * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
     * @return {import("../TileRange.js").default|null} Tile range.
     */
    getTileCoordChildTileRange(t, e, i) {
      if (t[0] < this.maxZoom) {
        if (this.zoomFactor_ === 2) {
          const r = t[1] * 2, o = t[2] * 2;
          return Ei(
            r,
            r + 1,
            o,
            o + 1,
            e
          );
        }
        const s = this.getTileCoordExtent(
          t,
          i || this.tmpExtent_
        );
        return this.getTileRangeForExtentAndZ(
          s,
          t[0] + 1,
          e
        );
      }
      return null;
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {number} z Integer zoom level.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
     * @return {import("../TileRange.js").default|null} Tile range.
     */
    getTileRangeForTileCoordAndZ(t, e, i) {
      if (e > this.maxZoom || e < this.minZoom)
        return null;
      const s = t[0], r = t[1], o = t[2];
      if (e === s)
        return Ei(
          r,
          o,
          r,
          o,
          i
        );
      if (this.zoomFactor_) {
        const l = Math.pow(this.zoomFactor_, e - s), h = Math.floor(r * l), c = Math.floor(o * l);
        if (e < s)
          return Ei(h, h, c, c, i);
        const u = Math.floor(l * (r + 1)) - 1, d = Math.floor(l * (o + 1)) - 1;
        return Ei(h, u, c, d, i);
      }
      const a = this.getTileCoordExtent(t, this.tmpExtent_);
      return this.getTileRangeForExtentAndZ(a, e, i);
    }
    /**
     * Get a tile range for the given extent and integer zoom level.
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} z Integer zoom level.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary tile range object.
     * @return {import("../TileRange.js").default} Tile range.
     */
    getTileRangeForExtentAndZ(t, e, i) {
      this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, Ci);
      const s = Ci[1], r = Ci[2];
      this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, Ci);
      const o = Ci[1], a = Ci[2];
      return Ei(s, o, r, a, i);
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {import("../coordinate.js").Coordinate} Tile center.
     */
    getTileCoordCenter(t) {
      const e = this.getOrigin(t[0]), i = this.getResolution(t[0]), s = St(this.getTileSize(t[0]), this.tmpSize_);
      return [
        e[0] + (t[1] + 0.5) * s[0] * i,
        e[1] - (t[2] + 0.5) * s[1] * i
      ];
    }
    /**
     * Get the extent of a tile coordinate.
     *
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../extent.js").Extent} [tempExtent] Temporary extent object.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getTileCoordExtent(t, e) {
      const i = this.getOrigin(t[0]), s = this.getResolution(t[0]), r = St(this.getTileSize(t[0]), this.tmpSize_), o = i[0] + t[1] * r[0] * s, a = i[1] - (t[2] + 1) * r[1] * s, l = o + r[0] * s, h = a + r[1] * s;
      return Ce(o, a, l, h, e);
    }
    /**
     * Get the tile coordinate for the given map coordinate and resolution.  This
     * method considers that coordinates that intersect tile boundaries should be
     * assigned the higher tile coordinate.
     *
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {number} resolution Resolution.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @api
     */
    getTileCoordForCoordAndResolution(t, e, i) {
      return this.getTileCoordForXYAndResolution_(
        t[0],
        t[1],
        e,
        !1,
        i
      );
    }
    /**
     * Note that this method should not be called for resolutions that correspond
     * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {number} resolution Resolution (for a non-integer zoom level).
     * @param {boolean} reverseIntersectionPolicy Instead of letting edge
     *     intersections go to the higher tile coordinate, let edge intersections
     *     go to the lower tile coordinate.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @private
     */
    getTileCoordForXYAndResolution_(t, e, i, s, r) {
      const o = this.getZForResolution(i), a = i / this.getResolution(o), l = this.getOrigin(o), h = St(this.getTileSize(o), this.tmpSize_);
      let c = a * (t - l[0]) / i / h[0], u = a * (l[1] - e) / i / h[1];
      return s ? (c = Nn(c, Ie) - 1, u = Nn(u, Ie) - 1) : (c = kn(c, Ie), u = kn(u, Ie)), Es(o, c, u, r);
    }
    /**
     * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
     * they should have separate implementations.  This method is for integer zoom
     * levels.  The other method should only be called for resolutions corresponding
     * to non-integer zoom levels.
     * @param {number} x Map x coordinate.
     * @param {number} y Map y coordinate.
     * @param {number} z Integer zoom level.
     * @param {boolean} reverseIntersectionPolicy Instead of letting edge
     *     intersections go to the higher tile coordinate, let edge intersections
     *     go to the lower tile coordinate.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @private
     */
    getTileCoordForXYAndZ_(t, e, i, s, r) {
      const o = this.getOrigin(i), a = this.getResolution(i), l = St(this.getTileSize(i), this.tmpSize_);
      let h = (t - o[0]) / a / l[0], c = (o[1] - e) / a / l[1];
      return s ? (h = Nn(h, Ie) - 1, c = Nn(c, Ie) - 1) : (h = kn(h, Ie), c = kn(c, Ie)), Es(i, h, c, r);
    }
    /**
     * Get a tile coordinate given a map coordinate and zoom level.
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {number} z Integer zoom level, e.g. the result of a `getZForResolution()` method call
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @api
     */
    getTileCoordForCoordAndZ(t, e, i) {
      return this.getTileCoordForXYAndZ_(
        t[0],
        t[1],
        e,
        !1,
        i
      );
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {number} Tile resolution.
     */
    getTileCoordResolution(t) {
      return this.resolutions_[t[0]];
    }
    /**
     * Get the tile size for a zoom level. The type of the return value matches the
     * `tileSize` or `tileSizes` that the tile grid was configured with. To always
     * get an {@link import("../size.js").Size}, run the result through {@link module:ol/size.toSize}.
     * @param {number} z Z.
     * @return {number|import("../size.js").Size} Tile size.
     * @api
     */
    getTileSize(t) {
      return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t];
    }
    /**
     * @param {number} z Zoom level.
     * @return {import("../TileRange.js").default|null} Extent tile range for the specified zoom level.
     */
    getFullTileRange(t) {
      return this.fullTileRanges_ ? this.fullTileRanges_[t] : this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, t) : null;
    }
    /**
     * @param {number} resolution Resolution.
     * @param {number|import("../array.js").NearestDirectionFunction} [opt_direction]
     *     If 0, the nearest resolution will be used.
     *     If 1, the nearest higher resolution (lower Z) will be used. If -1, the
     *     nearest lower resolution (higher Z) will be used. Default is 0.
     *     Use a {@link module:ol/array~NearestDirectionFunction} for more precise control.
     *
     * For example to change tile Z at the midpoint of zoom levels
     * ```js
     * function(value, high, low) {
     *   return value - low * Math.sqrt(high / low);
     * }
     * ```
     * @return {number} Z.
     * @api
     */
    getZForResolution(t, e) {
      const i = zs(
        this.resolutions_,
        t,
        e || 0
      );
      return nt(i, this.minZoom, this.maxZoom);
    }
    /**
     * The tile with the provided tile coordinate intersects the given viewport.
     * @param {import('../tilecoord.js').TileCoord} tileCoord Tile coordinate.
     * @param {Array<number>} viewport Viewport as returned from {@link module:ol/extent.getRotatedViewport}.
     * @return {boolean} The tile with the provided tile coordinate intersects the given viewport.
     */
    tileCoordIntersectsViewport(t, e) {
      return ul(
        e,
        0,
        e.length,
        2,
        this.getTileCoordExtent(t)
      );
    }
    /**
     * @param {!import("../extent.js").Extent} extent Extent for this tile grid.
     * @private
     */
    calculateTileRanges_(t) {
      const e = this.resolutions_.length, i = new Array(e);
      for (let s = this.minZoom; s < e; ++s)
        i[s] = this.getTileRangeForExtentAndZ(t, s);
      this.fullTileRanges_ = i;
    }
  }
  const Ch = E_;
  function vh(n) {
    let t = n.getDefaultTileGrid();
    return t || (t = v_(n), n.setDefaultTileGrid(t)), t;
  }
  function x_(n, t, e) {
    const i = t[0], s = n.getTileCoordCenter(t), r = go(e);
    if (!ni(r, s)) {
      const o = J(r), a = Math.ceil(
        (r[0] - s[0]) / o
      );
      return s[0] += o * a, n.getTileCoordForCoordAndZ(s, i);
    }
    return t;
  }
  function w_(n, t, e, i) {
    i = i !== void 0 ? i : "top-left";
    const s = Rh(n, t, e);
    return new Ch({
      extent: n,
      origin: jc(n, i),
      resolutions: s,
      tileSize: e
    });
  }
  function C_(n) {
    const t = n || {}, e = t.extent || Tt("EPSG:3857").getExtent(), i = {
      extent: e,
      minZoom: t.minZoom,
      tileSize: t.tileSize,
      resolutions: Rh(
        e,
        t.maxZoom,
        t.tileSize,
        t.maxResolution
      )
    };
    return new Ch(i);
  }
  function Rh(n, t, e, i) {
    t = t !== void 0 ? t : gd, e = St(e !== void 0 ? e : pr);
    const s = yt(n), r = J(n);
    i = i > 0 ? i : Math.max(r / e[0], s / e[1]);
    const o = t + 1, a = new Array(o);
    for (let l = 0; l < o; ++l)
      a[l] = i / Math.pow(2, l);
    return a;
  }
  function v_(n, t, e, i) {
    const s = go(n);
    return w_(s, t, e, i);
  }
  function go(n) {
    n = Tt(n);
    let t = n.getExtent();
    if (!t) {
      const e = 180 * zi.degrees / n.getMetersPerUnit();
      t = Ce(-e, -e, e, e);
    }
    return t;
  }
  const R_ = /\{z\}/g, T_ = /\{x\}/g, S_ = /\{y\}/g, I_ = /\{-y\}/g;
  function L_(n, t, e, i, s) {
    return n.replace(R_, t.toString()).replace(T_, e.toString()).replace(S_, i.toString()).replace(I_, function() {
      if (s === void 0)
        throw new Error(
          "If the URL template has a {-y} placeholder, the grid extent must be known"
        );
      return (s - i).toString();
    });
  }
  function A_(n) {
    const t = [];
    let e = /\{([a-z])-([a-z])\}/.exec(n);
    if (e) {
      const i = e[1].charCodeAt(0), s = e[2].charCodeAt(0);
      let r;
      for (r = i; r <= s; ++r)
        t.push(n.replace(e[0], String.fromCharCode(r)));
      return t;
    }
    if (e = /\{(\d+)-(\d+)\}/.exec(n), e) {
      const i = parseInt(e[2], 10);
      for (let s = parseInt(e[1], 10); s <= i; s++)
        t.push(n.replace(e[0], s.toString()));
      return t;
    }
    return t.push(n), t;
  }
  function b_(n, t) {
    return (
      /**
       * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
       * @param {number} pixelRatio Pixel ratio.
       * @param {import("./proj/Projection.js").default} projection Projection.
       * @return {string|undefined} Tile URL.
       */
      function(e, i, s) {
        if (!e)
          return;
        let r;
        const o = e[0];
        if (t) {
          const a = t.getFullTileRange(o);
          a && (r = a.getHeight() - 1);
        }
        return L_(n, o, e[1], e[2], r);
      }
    );
  }
  function M_(n, t) {
    const e = n.length, i = new Array(e);
    for (let s = 0; s < e; ++s)
      i[s] = b_(n[s], t);
    return P_(i);
  }
  function P_(n) {
    return n.length === 1 ? n[0] : (
      /**
       * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
       * @param {number} pixelRatio Pixel ratio.
       * @param {import("./proj/Projection.js").default} projection Projection.
       * @return {string|undefined} Tile URL.
       */
      function(t, e, i) {
        if (!t)
          return;
        const s = n_(t), r = Oe(s, n.length);
        return n[r](t, e, i);
      }
    );
  }
  class D_ extends Vt {
    /**
     * @param {Options} options Source options.
     */
    constructor(t) {
      super(), this.projection = Tt(t.projection), this.attributions_ = Th(t.attributions), this.attributionsCollapsible_ = t.attributionsCollapsible ?? !0, this.loading = !1, this.state_ = t.state !== void 0 ? t.state : "ready", this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1, this.interpolate_ = !!t.interpolate, this.viewResolver = null, this.viewRejector = null;
      const e = this;
      this.viewPromise_ = new Promise(function(i, s) {
        e.viewResolver = i, e.viewRejector = s;
      });
    }
    /**
     * Get the attribution function for the source.
     * @return {?Attribution} Attribution function.
     * @api
     */
    getAttributions() {
      return this.attributions_;
    }
    /**
     * @return {boolean} Attributions are collapsible.
     * @api
     */
    getAttributionsCollapsible() {
      return this.attributionsCollapsible_;
    }
    /**
     * Get the projection of the source.
     * @return {import("../proj/Projection.js").default|null} Projection.
     * @api
     */
    getProjection() {
      return this.projection;
    }
    /**
     * @param {import("../proj/Projection").default} [projection] Projection.
     * @return {Array<number>|null} Resolutions.
     */
    getResolutions(t) {
      return null;
    }
    /**
     * @return {Promise<import("../View.js").ViewOptions>} A promise for view-related properties.
     */
    getView() {
      return this.viewPromise_;
    }
    /**
     * Get the state of the source, see {@link import("./Source.js").State} for possible states.
     * @return {import("./Source.js").State} State.
     * @api
     */
    getState() {
      return this.state_;
    }
    /**
     * @return {boolean|undefined} Wrap X.
     */
    getWrapX() {
      return this.wrapX_;
    }
    /**
     * @return {boolean} Use linear interpolation when resampling.
     */
    getInterpolate() {
      return this.interpolate_;
    }
    /**
     * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
     * @api
     */
    refresh() {
      this.changed();
    }
    /**
     * Set the attributions of the source.
     * @param {AttributionLike|undefined} attributions Attributions.
     *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
     *     or `undefined`.
     * @api
     */
    setAttributions(t) {
      this.attributions_ = Th(t), this.changed();
    }
    /**
     * Set the state of the source.
     * @param {import("./Source.js").State} state State.
     */
    setState(t) {
      this.state_ = t, this.changed();
    }
  }
  function Th(n) {
    return n ? typeof n == "function" ? n : (Array.isArray(n) || (n = [n]), (t) => n) : null;
  }
  const Sh = D_;
  class O_ extends Sh {
    /**
     * @param {Options} options SourceTile source options.
     */
    constructor(t) {
      super({
        attributions: t.attributions,
        attributionsCollapsible: t.attributionsCollapsible,
        projection: t.projection,
        state: t.state,
        wrapX: t.wrapX,
        interpolate: t.interpolate
      }), this.on, this.once, this.un, this.tilePixelRatio_ = t.tilePixelRatio !== void 0 ? t.tilePixelRatio : 1, this.tileGrid = t.tileGrid !== void 0 ? t.tileGrid : null;
      const e = [256, 256];
      this.tileGrid && St(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), e), this.tmpSize = [0, 0], this.key_ = t.key || j(this), this.tileOptions = {
        transition: t.transition,
        interpolate: t.interpolate
      }, this.zDirection = t.zDirection ? t.zDirection : 0;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {number} Gutter.
     */
    getGutterForProjection(t) {
      return 0;
    }
    /**
     * Return the key to be used for all tiles in the source.
     * @return {string} The key for all tiles.
     */
    getKey() {
      return this.key_;
    }
    /**
     * Set the value to be used as the key for all tiles in the source.
     * @param {string} key The key for tiles.
     * @protected
     */
    setKey(t) {
      this.key_ !== t && (this.key_ = t, this.changed());
    }
    /**
     * @param {import("../proj/Projection").default} [projection] Projection.
     * @return {Array<number>|null} Resolutions.
     * @override
     */
    getResolutions(t) {
      const e = t ? this.getTileGridForProjection(t) : this.tileGrid;
      return e ? e.getResolutions() : null;
    }
    /**
     * @abstract
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {TileType|null} Tile.
     */
    getTile(t, e, i, s, r) {
      return V();
    }
    /**
     * Return the tile grid of the tile source.
     * @return {import("../tilegrid/TileGrid.js").default|null} Tile grid.
     * @api
     */
    getTileGrid() {
      return this.tileGrid;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
     */
    getTileGridForProjection(t) {
      return this.tileGrid ? this.tileGrid : vh(t);
    }
    /**
     * Get the tile pixel ratio for this source. Subclasses may override this
     * method, which is meant to return a supported pixel ratio that matches the
     * provided `pixelRatio` as close as possible.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Tile pixel ratio.
     */
    getTilePixelRatio(t) {
      return this.tilePixelRatio_;
    }
    /**
     * @param {number} z Z.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {import("../size.js").Size} Tile size.
     */
    getTilePixelSize(t, e, i) {
      const s = this.getTileGridForProjection(i), r = this.getTilePixelRatio(e), o = St(s.getTileSize(t), this.tmpSize);
      return r == 1 ? o : Af(o, r, this.tmpSize);
    }
    /**
     * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
     * is outside the resolution and extent range of the tile grid, `null` will be
     * returned.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../proj/Projection.js").default} [projection] Projection.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate to be passed to the tileUrlFunction or
     *     null if no tile URL should be created for the passed `tileCoord`.
     */
    getTileCoordForTileUrlFunction(t, e) {
      const i = e !== void 0 ? e : this.getProjection(), s = e !== void 0 ? this.getTileGridForProjection(i) : this.tileGrid || this.getTileGridForProjection(i);
      return this.getWrapX() && i.isGlobal() && (t = x_(s, t, i)), r_(t, s) ? t : null;
    }
    /**
     * Remove all cached reprojected tiles from the source. The next render cycle will create new tiles.
     * @api
     */
    clear() {
    }
    /**
     * @override
     */
    refresh() {
      this.clear(), super.refresh();
    }
  }
  class F_ extends re {
    /**
     * @param {string} type Type.
     * @param {import("../Tile.js").default} tile The tile.
     */
    constructor(t, e) {
      super(t), this.tile = e;
    }
  }
  const k_ = O_, _o = {
    /**
     * Triggered when a tile starts loading.
     * @event module:ol/source/Tile.TileSourceEvent#tileloadstart
     * @api
     */
    TILELOADSTART: "tileloadstart",
    /**
     * Triggered when a tile finishes loading, either when its data is loaded,
     * or when loading was aborted because the tile is no longer needed.
     * @event module:ol/source/Tile.TileSourceEvent#tileloadend
     * @api
     */
    TILELOADEND: "tileloadend",
    /**
     * Triggered if tile loading results in an error. Note that this is not the
     * right place to re-fetch tiles. See {@link module:ol/ImageTile~ImageTile#load}
     * for details.
     * @event module:ol/source/Tile.TileSourceEvent#tileloaderror
     * @api
     */
    TILELOADERROR: "tileloaderror"
  };
  class mo extends k_ {
    /**
     * @param {Options} options Image tile options.
     */
    constructor(t) {
      super({
        attributions: t.attributions,
        cacheSize: t.cacheSize,
        projection: t.projection,
        state: t.state,
        tileGrid: t.tileGrid,
        tilePixelRatio: t.tilePixelRatio,
        wrapX: t.wrapX,
        transition: t.transition,
        interpolate: t.interpolate,
        key: t.key,
        attributionsCollapsible: t.attributionsCollapsible,
        zDirection: t.zDirection
      }), this.generateTileUrlFunction_ = this.tileUrlFunction === mo.prototype.tileUrlFunction, this.tileLoadFunction = t.tileLoadFunction, t.tileUrlFunction && (this.tileUrlFunction = t.tileUrlFunction), this.urls = null, t.urls ? this.setUrls(t.urls) : t.url && this.setUrl(t.url), this.tileLoadingKeys_ = {};
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Return the tile load function of the source.
     * @return {import("../Tile.js").LoadFunction} TileLoadFunction
     * @api
     */
    getTileLoadFunction() {
      return this.tileLoadFunction;
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Return the tile URL function of the source.
     * @return {import("../Tile.js").UrlFunction} TileUrlFunction
     * @api
     */
    getTileUrlFunction() {
      return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction;
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Return the URLs used for this source.
     * When a tileUrlFunction is used instead of url or urls,
     * null will be returned.
     * @return {!Array<string>|null} URLs.
     * @api
     */
    getUrls() {
      return this.urls;
    }
    /**
     * Handle tile change events.
     * @param {import("../events/Event.js").default} event Event.
     * @protected
     */
    handleTileChange(t) {
      const e = (
        /** @type {import("../Tile.js").default} */
        t.target
      ), i = j(e), s = e.getState();
      let r;
      s == F.LOADING ? (this.tileLoadingKeys_[i] = !0, r = _o.TILELOADSTART) : i in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[i], r = s == F.ERROR ? _o.TILELOADERROR : s == F.LOADED ? _o.TILELOADEND : void 0), r != null && this.dispatchEvent(new F_(r, e));
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Set the tile load function of the source.
     * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @api
     */
    setTileLoadFunction(t) {
      this.tileLoadFunction = t, this.changed();
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Set the tile URL function of the source.
     * @param {import("../Tile.js").UrlFunction} tileUrlFunction Tile URL function.
     * @param {string} [key] Optional new tile key for the source.
     * @api
     */
    setTileUrlFunction(t, e) {
      this.tileUrlFunction = t, typeof e < "u" ? this.setKey(e) : this.changed();
    }
    /**
     * Set the URL to use for requests.
     * @param {string} url URL.
     * @api
     */
    setUrl(t) {
      const e = A_(t);
      this.urls = e, this.setUrls(e);
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Set the URLs to use for requests.
     * @param {Array<string>} urls URLs.
     * @api
     */
    setUrls(t) {
      this.urls = t;
      const e = t.join(`
`);
      this.generateTileUrlFunction_ ? this.setTileUrlFunction(M_(t, this.tileGrid), e) : this.setKey(e);
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    tileUrlFunction(t, e, i) {
    }
  }
  const N_ = mo;
  class G_ extends N_ {
    /**
     * @param {!Options} options Image tile options.
     */
    constructor(t) {
      super({
        attributions: t.attributions,
        cacheSize: t.cacheSize,
        projection: t.projection,
        state: t.state,
        tileGrid: t.tileGrid,
        tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : z_,
        tilePixelRatio: t.tilePixelRatio,
        tileUrlFunction: t.tileUrlFunction,
        url: t.url,
        urls: t.urls,
        wrapX: t.wrapX,
        transition: t.transition,
        interpolate: t.interpolate !== void 0 ? t.interpolate : !0,
        key: t.key,
        attributionsCollapsible: t.attributionsCollapsible,
        zDirection: t.zDirection
      }), this.crossOrigin = t.crossOrigin !== void 0 ? t.crossOrigin : null, this.tileClass = t.tileClass !== void 0 ? t.tileClass : uh, this.tileGridForProjection = {}, this.reprojectionErrorThreshold_ = t.reprojectionErrorThreshold, this.renderReprojectionEdges_ = !1;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {number} Gutter.
     * @override
     */
    getGutterForProjection(t) {
      return this.getProjection() && t && !rr(this.getProjection(), t) ? 0 : this.getGutter();
    }
    /**
     * @return {number} Gutter.
     */
    getGutter() {
      return 0;
    }
    /**
     * Return the key to be used for all tiles in the source.
     * @return {string} The key for all tiles.
     * @override
     */
    getKey() {
      let t = super.getKey();
      return this.getInterpolate() || (t += ":disable-interpolation"), t;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
     * @override
     */
    getTileGridForProjection(t) {
      const e = this.getProjection();
      if (this.tileGrid && (!e || rr(e, t)))
        return this.tileGrid;
      const i = j(t);
      return i in this.tileGridForProjection || (this.tileGridForProjection[i] = vh(t)), this.tileGridForProjection[i];
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {string} key The key set on the tile.
     * @return {!ImageTile} Tile.
     * @private
     */
    createTile_(t, e, i, s, r, o) {
      const a = [t, e, i], l = this.getTileCoordForTileUrlFunction(
        a,
        r
      ), h = l ? this.tileUrlFunction(l, s, r) : void 0, c = new this.tileClass(
        a,
        h !== void 0 ? F.IDLE : F.EMPTY,
        h !== void 0 ? h : "",
        this.crossOrigin,
        this.tileLoadFunction,
        this.tileOptions
      );
      return c.key = o, c.addEventListener(Y.CHANGE, this.handleTileChange.bind(this)), c;
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!(ImageTile|ReprojTile)} Tile.
     * @override
     */
    getTile(t, e, i, s, r) {
      const o = this.getProjection();
      if (!o || !r || rr(o, r))
        return this.getTileInternal(
          t,
          e,
          i,
          s,
          o || r
        );
      const a = [t, e, i], l = this.getKey(), h = this.getTileGridForProjection(o), c = this.getTileGridForProjection(r), u = this.getTileCoordForTileUrlFunction(
        a,
        r
      ), d = new ph(
        o,
        h,
        r,
        c,
        a,
        u,
        this.getTilePixelRatio(s),
        this.getGutter(),
        (f, g, p, _) => this.getTileInternal(f, g, p, _, o),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.tileOptions
      );
      return d.key = l, d;
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {!import("../proj/Projection.js").default} projection Projection.
     * @return {!ImageTile} Tile.
     * @protected
     */
    getTileInternal(t, e, i, s, r) {
      const o = this.getKey();
      return this.createTile_(t, e, i, s, r, o);
    }
    /**
     * Sets whether to render reprojection edges or not (usually for debugging).
     * @param {boolean} render Render the edges.
     * @api
     */
    setRenderReprojectionEdges(t) {
      this.renderReprojectionEdges_ != t && (this.renderReprojectionEdges_ = t, this.changed());
    }
    /**
     * Sets the tile grid to use when reprojecting the tiles to the given
     * projection instead of the default tile grid for the projection.
     *
     * This can be useful when the default tile grid cannot be created
     * (e.g. projection has no extent defined) or
     * for optimization reasons (custom tile size, resolutions, ...).
     *
     * @param {import("../proj.js").ProjectionLike} projection Projection.
     * @param {import("../tilegrid/TileGrid.js").default} tilegrid Tile grid to use for the projection.
     * @api
     */
    setTileGridForProjection(t, e) {
      const i = Tt(t);
      if (i) {
        const s = j(i);
        s in this.tileGridForProjection || (this.tileGridForProjection[s] = e);
      }
    }
  }
  function z_(n, t) {
    n.getImage().src = t;
  }
  const W_ = G_;
  class X_ extends W_ {
    /**
     * @param {Options} [options] XYZ options.
     */
    constructor(t) {
      t = t || {};
      const e = t.projection !== void 0 ? t.projection : "EPSG:3857", i = t.tileGrid !== void 0 ? t.tileGrid : C_({
        extent: go(e),
        maxResolution: t.maxResolution,
        maxZoom: t.maxZoom,
        minZoom: t.minZoom,
        tileSize: t.tileSize
      });
      super({
        attributions: t.attributions,
        cacheSize: t.cacheSize,
        crossOrigin: t.crossOrigin,
        interpolate: t.interpolate,
        projection: e,
        reprojectionErrorThreshold: t.reprojectionErrorThreshold,
        tileGrid: i,
        tileLoadFunction: t.tileLoadFunction,
        tilePixelRatio: t.tilePixelRatio,
        tileUrlFunction: t.tileUrlFunction,
        url: t.url,
        urls: t.urls,
        wrapX: t.wrapX !== void 0 ? t.wrapX : !0,
        transition: t.transition,
        attributionsCollapsible: t.attributionsCollapsible,
        zDirection: t.zDirection
      }), this.gutter_ = t.gutter !== void 0 ? t.gutter : 0;
    }
    /**
     * @return {number} Gutter.
     * @override
     */
    getGutter() {
      return this.gutter_;
    }
  }
  const Y_ = X_;
  class po extends Vt {
    /**
     * @param {Geometry|ObjectWithGeometry<Geometry>} [geometryOrProperties]
     *     You may pass a Geometry object directly, or an object literal containing
     *     properties. If you pass an object literal, you may include a Geometry
     *     associated with a `geometry` key.
     */
    constructor(t) {
      if (super(), this.on, this.once, this.un, this.id_ = void 0, this.geometryName_ = "geometry", this.style_ = null, this.styleFunction_ = void 0, this.geometryChangeKey_ = null, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), t)
        if (typeof /** @type {?} */
        t.getSimplifiedGeometry == "function") {
          const e = (
            /** @type {Geometry} */
            t
          );
          this.setGeometry(e);
        } else {
          const e = t;
          this.setProperties(e);
        }
    }
    /**
     * Clone this feature. If the original feature has a geometry it
     * is also cloned. The feature id is not set in the clone.
     * @return {Feature<Geometry>} The clone.
     * @api
     */
    clone() {
      const t = (
        /** @type {Feature<Geometry>} */
        new po(this.hasProperties() ? this.getProperties() : null)
      );
      t.setGeometryName(this.getGeometryName());
      const e = this.getGeometry();
      e && t.setGeometry(
        /** @type {Geometry} */
        e.clone()
      );
      const i = this.getStyle();
      return i && t.setStyle(i), t;
    }
    /**
     * Get the feature's default geometry.  A feature may have any number of named
     * geometries.  The "default" geometry (the one that is rendered by default) is
     * set when calling {@link module:ol/Feature~Feature#setGeometry}.
     * @return {Geometry|undefined} The default geometry for the feature.
     * @api
     * @observable
     */
    getGeometry() {
      return (
        /** @type {Geometry|undefined} */
        this.get(this.geometryName_)
      );
    }
    /**
     * Get the feature identifier.  This is a stable identifier for the feature and
     * is either set when reading data from a remote source or set explicitly by
     * calling {@link module:ol/Feature~Feature#setId}.
     * @return {number|string|undefined} Id.
     * @api
     */
    getId() {
      return this.id_;
    }
    /**
     * Get the name of the feature's default geometry.  By default, the default
     * geometry is named `geometry`.
     * @return {string} Get the property name associated with the default geometry
     *     for this feature.
     * @api
     */
    getGeometryName() {
      return this.geometryName_;
    }
    /**
     * Get the feature's style. Will return what was provided to the
     * {@link module:ol/Feature~Feature#setStyle} method.
     * @return {import("./style/Style.js").StyleLike|undefined} The feature style.
     * @api
     */
    getStyle() {
      return this.style_;
    }
    /**
     * Get the feature's style function.
     * @return {import("./style/Style.js").StyleFunction|undefined} Return a function
     * representing the current style of this feature.
     * @api
     */
    getStyleFunction() {
      return this.styleFunction_;
    }
    /**
     * @private
     */
    handleGeometryChange_() {
      this.changed();
    }
    /**
     * @private
     */
    handleGeometryChanged_() {
      this.geometryChangeKey_ && (it(this.geometryChangeKey_), this.geometryChangeKey_ = null);
      const t = this.getGeometry();
      t && (this.geometryChangeKey_ = $(
        t,
        Y.CHANGE,
        this.handleGeometryChange_,
        this
      )), this.changed();
    }
    /**
     * Set the default geometry for the feature.  This will update the property
     * with the name returned by {@link module:ol/Feature~Feature#getGeometryName}.
     * @param {Geometry|undefined} geometry The new geometry.
     * @api
     * @observable
     */
    setGeometry(t) {
      this.set(this.geometryName_, t);
    }
    /**
     * Set the style for the feature to override the layer style.  This can be a
     * single style object, an array of styles, or a function that takes a
     * resolution and returns an array of styles. To unset the feature style, call
     * `setStyle()` without arguments or a falsey value.
     * @param {import("./style/Style.js").StyleLike} [style] Style for this feature.
     * @api
     * @fires module:ol/events/Event~BaseEvent#event:change
     */
    setStyle(t) {
      this.style_ = t, this.styleFunction_ = t ? B_(t) : void 0, this.changed();
    }
    /**
     * Set the feature id.  The feature id is considered stable and may be used when
     * requesting features or comparing identifiers returned from a remote source.
     * The feature id can be used with the
     * {@link module:ol/source/Vector~VectorSource#getFeatureById} method.
     * @param {number|string|undefined} id The feature id.
     * @api
     * @fires module:ol/events/Event~BaseEvent#event:change
     */
    setId(t) {
      this.id_ = t, this.changed();
    }
    /**
     * Set the property name to be used when getting the feature's default geometry.
     * When calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with
     * this name will be returned.
     * @param {string} name The property name of the default geometry.
     * @api
     */
    setGeometryName(t) {
      this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_), this.geometryName_ = t, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), this.handleGeometryChanged_();
    }
  }
  function B_(n) {
    if (typeof n == "function")
      return n;
    let t;
    return Array.isArray(n) ? t = n : (q(
      typeof /** @type {?} */
      n.getZIndex == "function",
      "Expected an `ol/style/Style` or an array of `ol/style/Style.js`"
    ), t = [
      /** @type {import("./style/Style.js").default} */
      n
    ]), function() {
      return t;
    };
  }
  const U_ = po;
  function Ih(n, t, e, i, s, r, o) {
    let a, l;
    const h = (e - t) / i;
    if (h === 1)
      a = t;
    else if (h === 2)
      a = t, l = s;
    else if (h !== 0) {
      let c = n[t], u = n[t + 1], d = 0;
      const f = [0];
      for (let _ = t + i; _ < e; _ += i) {
        const m = n[_], y = n[_ + 1];
        d += Math.sqrt((m - c) * (m - c) + (y - u) * (y - u)), f.push(d), c = m, u = y;
      }
      const g = s * d, p = Cc(f, g);
      p < 0 ? (l = (g - f[-p - 2]) / (f[-p - 1] - f[-p - 2]), a = t + (-p - 2) * i) : a = t + p * i;
    }
    o = o > 1 ? o : 2, r = r || new Array(o);
    for (let c = 0; c < o; ++c)
      r[c] = a === void 0 ? NaN : l === void 0 ? n[a + c] : Pt(n[a + c], n[a + i + c], l);
    return r;
  }
  function K_(n, t, e, i) {
    let s = n[t], r = n[t + 1], o = 0;
    for (let a = t + i; a < e; a += i) {
      const l = n[a], h = n[a + 1];
      o += Math.sqrt((l - s) * (l - s) + (h - r) * (h - r)), s = l, r = h;
    }
    return o;
  }
  class Z_ {
    /**
     * Render a geometry with a custom renderer.
     *
     * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     * @param {Function} renderer Renderer.
     * @param {Function} hitDetectionRenderer Renderer.
     * @param {number} [index] Render order index.
     */
    drawCustom(t, e, i, s, r) {
    }
    /**
     * Render a geometry.
     *
     * @param {import("../geom/Geometry.js").default} geometry The geometry to render.
     */
    drawGeometry(t) {
    }
    /**
     * Set the rendering style.
     *
     * @param {import("../style/Style.js").default} style The rendering style.
     */
    setStyle(t) {
    }
    /**
     * @param {import("../geom/Circle.js").default} circleGeometry Circle geometry.
     * @param {import("../Feature.js").default} feature Feature.
     * @param {number} [index] Render order index.
     */
    drawCircle(t, e, i) {
    }
    /**
     * @param {import("../Feature.js").default} feature Feature.
     * @param {import("../style/Style.js").default} style Style.
     * @param {number} [index] Render order index.
     */
    drawFeature(t, e, i) {
    }
    /**
     * @param {import("../geom/GeometryCollection.js").default} geometryCollectionGeometry Geometry collection.
     * @param {import("../Feature.js").default} feature Feature.
     * @param {number} [index] Render order index.
     */
    drawGeometryCollection(t, e, i) {
    }
    /**
     * @param {import("../geom/LineString.js").default|import("./Feature.js").default} lineStringGeometry Line string geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     */
    drawLineString(t, e, i) {
    }
    /**
     * @param {import("../geom/MultiLineString.js").default|import("./Feature.js").default} multiLineStringGeometry MultiLineString geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     */
    drawMultiLineString(t, e, i) {
    }
    /**
     * @param {import("../geom/MultiPoint.js").default|import("./Feature.js").default} multiPointGeometry MultiPoint geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     */
    drawMultiPoint(t, e, i) {
    }
    /**
     * @param {import("../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     */
    drawMultiPolygon(t, e, i) {
    }
    /**
     * @param {import("../geom/Point.js").default|import("./Feature.js").default} pointGeometry Point geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     */
    drawPoint(t, e, i) {
    }
    /**
     * @param {import("../geom/Polygon.js").default|import("./Feature.js").default} polygonGeometry Polygon geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     */
    drawPolygon(t, e, i) {
    }
    /**
     * @param {import("../geom/SimpleGeometry.js").default|import("./Feature.js").default} geometry Geometry.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     */
    drawText(t, e, i) {
    }
    /**
     * @param {import("../style/Fill.js").default} fillStyle Fill style.
     * @param {import("../style/Stroke.js").default} strokeStyle Stroke style.
     */
    setFillStrokeStyle(t, e) {
    }
    /**
     * @param {import("../style/Image.js").default} imageStyle Image style.
     * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with a text style.
     */
    setImageStyle(t, e) {
    }
    /**
     * @param {import("../style/Text.js").default} textStyle Text style.
     * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with an image style.
     */
    setTextStyle(t, e) {
    }
  }
  const Lh = Z_;
  class $_ extends Lh {
    /**
     * @param {CanvasRenderingContext2D} context Context.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../../extent.js").Extent} extent Extent.
     * @param {import("../../transform.js").Transform} transform Transform.
     * @param {number} viewRotation View rotation.
     * @param {number} [squaredTolerance] Optional squared tolerance for simplification.
     * @param {import("../../proj.js").TransformFunction} [userTransform] Transform from user to view projection.
     */
    constructor(t, e, i, s, r, o, a) {
      super(), this.context_ = t, this.pixelRatio_ = e, this.extent_ = i, this.transform_ = s, this.transformRotation_ = s ? Fn(Math.atan2(s[1], s[0]), 10) : 0, this.viewRotation_ = r, this.squaredTolerance_ = o, this.userTransform_ = a, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = Bt();
    }
    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @private
     */
    drawImages_(t, e, i, s) {
      if (!this.image_)
        return;
      const r = Re(
        t,
        e,
        i,
        s,
        this.transform_,
        this.pixelCoordinates_
      ), o = this.context_, a = this.tmpLocalTransform_, l = o.globalAlpha;
      this.imageOpacity_ != 1 && (o.globalAlpha = l * this.imageOpacity_);
      let h = this.imageRotation_;
      this.transformRotation_ === 0 && (h -= this.viewRotation_), this.imageRotateWithView_ && (h += this.viewRotation_);
      for (let c = 0, u = r.length; c < u; c += 2) {
        const d = r[c] - this.imageAnchorX_, f = r[c + 1] - this.imageAnchorY_;
        if (h !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
          const g = d + this.imageAnchorX_, p = f + this.imageAnchorY_;
          ae(
            a,
            g,
            p,
            1,
            1,
            h,
            -g,
            -p
          ), o.save(), o.transform.apply(o, a), o.translate(g, p), o.scale(this.imageScale_[0], this.imageScale_[1]), o.drawImage(
            this.image_,
            this.imageOriginX_,
            this.imageOriginY_,
            this.imageWidth_,
            this.imageHeight_,
            -this.imageAnchorX_,
            -this.imageAnchorY_,
            this.imageWidth_,
            this.imageHeight_
          ), o.restore();
        } else
          o.drawImage(
            this.image_,
            this.imageOriginX_,
            this.imageOriginY_,
            this.imageWidth_,
            this.imageHeight_,
            d,
            f,
            this.imageWidth_,
            this.imageHeight_
          );
      }
      this.imageOpacity_ != 1 && (o.globalAlpha = l);
    }
    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @private
     */
    drawText_(t, e, i, s) {
      if (!this.textState_ || this.text_ === "")
        return;
      this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
      const r = Re(
        t,
        e,
        i,
        s,
        this.transform_,
        this.pixelCoordinates_
      ), o = this.context_;
      let a = this.textRotation_;
      for (this.transformRotation_ === 0 && (a -= this.viewRotation_), this.textRotateWithView_ && (a += this.viewRotation_); e < i; e += s) {
        const l = r[e] + this.textOffsetX_, h = r[e + 1] + this.textOffsetY_;
        a !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1 ? (o.save(), o.translate(l - this.textOffsetX_, h - this.textOffsetY_), o.rotate(a), o.translate(this.textOffsetX_, this.textOffsetY_), o.scale(this.textScale_[0], this.textScale_[1]), this.textStrokeState_ && o.strokeText(this.text_, 0, 0), this.textFillState_ && o.fillText(this.text_, 0, 0), o.restore()) : (this.textStrokeState_ && o.strokeText(this.text_, l, h), this.textFillState_ && o.fillText(this.text_, l, h));
      }
    }
    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {boolean} close Close.
     * @private
     * @return {number} end End.
     */
    moveToLineTo_(t, e, i, s, r) {
      const o = this.context_, a = Re(
        t,
        e,
        i,
        s,
        this.transform_,
        this.pixelCoordinates_
      );
      o.moveTo(a[0], a[1]);
      let l = a.length;
      r && (l -= 2);
      for (let h = 2; h < l; h += 2)
        o.lineTo(a[h], a[h + 1]);
      return r && o.closePath(), i;
    }
    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @private
     * @return {number} End.
     */
    drawRings_(t, e, i, s) {
      for (let r = 0, o = i.length; r < o; ++r)
        e = this.moveToLineTo_(
          t,
          e,
          i[r],
          s,
          !0
        );
      return e;
    }
    /**
     * Render a circle geometry into the canvas.  Rendering is immediate and uses
     * the current fill and stroke styles.
     *
     * @param {import("../../geom/Circle.js").default} geometry Circle geometry.
     * @api
     * @override
     */
    drawCircle(t) {
      if (this.squaredTolerance_ && (t = /** @type {import("../../geom/Circle.js").default} */
      t.simplifyTransformed(
        this.squaredTolerance_,
        this.userTransform_
      )), !!Rt(this.extent_, t.getExtent())) {
        if (this.fillState_ || this.strokeState_) {
          this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
          const e = ju(
            t,
            this.transform_,
            this.pixelCoordinates_
          ), i = e[2] - e[0], s = e[3] - e[1], r = Math.sqrt(i * i + s * s), o = this.context_;
          o.beginPath(), o.arc(
            e[0],
            e[1],
            r,
            0,
            2 * Math.PI
          ), this.fillState_ && o.fill(), this.strokeState_ && o.stroke();
        }
        this.text_ !== "" && this.drawText_(t.getCenter(), 0, 2, 2);
      }
    }
    /**
     * Set the rendering style.  Note that since this is an immediate rendering API,
     * any `zIndex` on the provided style will be ignored.
     *
     * @param {import("../../style/Style.js").default} style The rendering style.
     * @api
     * @override
     */
    setStyle(t) {
      this.setFillStrokeStyle(t.getFill(), t.getStroke()), this.setImageStyle(t.getImage()), this.setTextStyle(t.getText());
    }
    /**
     * @param {import("../../transform.js").Transform} transform Transform.
     */
    setTransform(t) {
      this.transform_ = t;
    }
    /**
     * Render a geometry into the canvas.  Call
     * {@link module:ol/render/canvas/Immediate~CanvasImmediateRenderer#setStyle renderer.setStyle()} first to set the rendering style.
     *
     * @param {import("../../geom/Geometry.js").default|import("../Feature.js").default} geometry The geometry to render.
     * @api
     * @override
     */
    drawGeometry(t) {
      switch (t.getType()) {
        case "Point":
          this.drawPoint(
            /** @type {import("../../geom/Point.js").default} */
            t
          );
          break;
        case "LineString":
          this.drawLineString(
            /** @type {import("../../geom/LineString.js").default} */
            t
          );
          break;
        case "Polygon":
          this.drawPolygon(
            /** @type {import("../../geom/Polygon.js").default} */
            t
          );
          break;
        case "MultiPoint":
          this.drawMultiPoint(
            /** @type {import("../../geom/MultiPoint.js").default} */
            t
          );
          break;
        case "MultiLineString":
          this.drawMultiLineString(
            /** @type {import("../../geom/MultiLineString.js").default} */
            t
          );
          break;
        case "MultiPolygon":
          this.drawMultiPolygon(
            /** @type {import("../../geom/MultiPolygon.js").default} */
            t
          );
          break;
        case "GeometryCollection":
          this.drawGeometryCollection(
            /** @type {import("../../geom/GeometryCollection.js").default} */
            t
          );
          break;
        case "Circle":
          this.drawCircle(
            /** @type {import("../../geom/Circle.js").default} */
            t
          );
          break;
      }
    }
    /**
     * Render a feature into the canvas.  Note that any `zIndex` on the provided
     * style will be ignored - features are rendered immediately in the order that
     * this method is called.  If you need `zIndex` support, you should be using an
     * {@link module:ol/layer/Vector~VectorLayer} instead.
     *
     * @param {import("../../Feature.js").default} feature Feature.
     * @param {import("../../style/Style.js").default} style Style.
     * @api
     * @override
     */
    drawFeature(t, e) {
      const i = e.getGeometryFunction()(t);
      i && (this.setStyle(e), this.drawGeometry(i));
    }
    /**
     * Render a GeometryCollection to the canvas.  Rendering is immediate and
     * uses the current styles appropriate for each geometry in the collection.
     *
     * @param {import("../../geom/GeometryCollection.js").default} geometry Geometry collection.
     * @override
     */
    drawGeometryCollection(t) {
      const e = t.getGeometriesArray();
      for (let i = 0, s = e.length; i < s; ++i)
        this.drawGeometry(e[i]);
    }
    /**
     * Render a Point geometry into the canvas.  Rendering is immediate and uses
     * the current style.
     *
     * @param {import("../../geom/Point.js").default|import("../Feature.js").default} geometry Point geometry.
     * @override
     */
    drawPoint(t) {
      this.squaredTolerance_ && (t = /** @type {import("../../geom/Point.js").default} */
      t.simplifyTransformed(
        this.squaredTolerance_,
        this.userTransform_
      ));
      const e = t.getFlatCoordinates(), i = t.getStride();
      this.image_ && this.drawImages_(e, 0, e.length, i), this.text_ !== "" && this.drawText_(e, 0, e.length, i);
    }
    /**
     * Render a MultiPoint geometry  into the canvas.  Rendering is immediate and
     * uses the current style.
     *
     * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} geometry MultiPoint geometry.
     * @override
     */
    drawMultiPoint(t) {
      this.squaredTolerance_ && (t = /** @type {import("../../geom/MultiPoint.js").default} */
      t.simplifyTransformed(
        this.squaredTolerance_,
        this.userTransform_
      ));
      const e = t.getFlatCoordinates(), i = t.getStride();
      this.image_ && this.drawImages_(e, 0, e.length, i), this.text_ !== "" && this.drawText_(e, 0, e.length, i);
    }
    /**
     * Render a LineString into the canvas.  Rendering is immediate and uses
     * the current style.
     *
     * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} geometry LineString geometry.
     * @override
     */
    drawLineString(t) {
      if (this.squaredTolerance_ && (t = /** @type {import("../../geom/LineString.js").default} */
      t.simplifyTransformed(
        this.squaredTolerance_,
        this.userTransform_
      )), !!Rt(this.extent_, t.getExtent())) {
        if (this.strokeState_) {
          this.setContextStrokeState_(this.strokeState_);
          const e = this.context_, i = t.getFlatCoordinates();
          e.beginPath(), this.moveToLineTo_(
            i,
            0,
            i.length,
            t.getStride(),
            !1
          ), e.stroke();
        }
        if (this.text_ !== "") {
          const e = t.getFlatMidpoint();
          this.drawText_(e, 0, 2, 2);
        }
      }
    }
    /**
     * Render a MultiLineString geometry into the canvas.  Rendering is immediate
     * and uses the current style.
     *
     * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} geometry MultiLineString geometry.
     * @override
     */
    drawMultiLineString(t) {
      this.squaredTolerance_ && (t = /** @type {import("../../geom/MultiLineString.js").default} */
      t.simplifyTransformed(
        this.squaredTolerance_,
        this.userTransform_
      ));
      const e = t.getExtent();
      if (Rt(this.extent_, e)) {
        if (this.strokeState_) {
          this.setContextStrokeState_(this.strokeState_);
          const i = this.context_, s = t.getFlatCoordinates();
          let r = 0;
          const o = (
            /** @type {Array<number>} */
            t.getEnds()
          ), a = t.getStride();
          i.beginPath();
          for (let l = 0, h = o.length; l < h; ++l)
            r = this.moveToLineTo_(
              s,
              r,
              o[l],
              a,
              !1
            );
          i.stroke();
        }
        if (this.text_ !== "") {
          const i = t.getFlatMidpoints();
          this.drawText_(i, 0, i.length, 2);
        }
      }
    }
    /**
     * Render a Polygon geometry into the canvas.  Rendering is immediate and uses
     * the current style.
     *
     * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} geometry Polygon geometry.
     * @override
     */
    drawPolygon(t) {
      if (this.squaredTolerance_ && (t = /** @type {import("../../geom/Polygon.js").default} */
      t.simplifyTransformed(
        this.squaredTolerance_,
        this.userTransform_
      )), !!Rt(this.extent_, t.getExtent())) {
        if (this.strokeState_ || this.fillState_) {
          this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
          const e = this.context_;
          e.beginPath(), this.drawRings_(
            t.getOrientedFlatCoordinates(),
            0,
            /** @type {Array<number>} */
            t.getEnds(),
            t.getStride()
          ), this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
        }
        if (this.text_ !== "") {
          const e = t.getFlatInteriorPoint();
          this.drawText_(e, 0, 2, 2);
        }
      }
    }
    /**
     * Render MultiPolygon geometry into the canvas.  Rendering is immediate and
     * uses the current style.
     * @param {import("../../geom/MultiPolygon.js").default} geometry MultiPolygon geometry.
     * @override
     */
    drawMultiPolygon(t) {
      if (this.squaredTolerance_ && (t = /** @type {import("../../geom/MultiPolygon.js").default} */
      t.simplifyTransformed(
        this.squaredTolerance_,
        this.userTransform_
      )), !!Rt(this.extent_, t.getExtent())) {
        if (this.strokeState_ || this.fillState_) {
          this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
          const e = this.context_, i = t.getOrientedFlatCoordinates();
          let s = 0;
          const r = t.getEndss(), o = t.getStride();
          e.beginPath();
          for (let a = 0, l = r.length; a < l; ++a) {
            const h = r[a];
            s = this.drawRings_(i, s, h, o);
          }
          this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
        }
        if (this.text_ !== "") {
          const e = t.getFlatInteriorPoints();
          this.drawText_(e, 0, e.length, 2);
        }
      }
    }
    /**
     * @param {import("../canvas.js").FillState} fillState Fill state.
     * @private
     */
    setContextFillState_(t) {
      const e = this.context_, i = this.contextFillState_;
      i ? i.fillStyle != t.fillStyle && (i.fillStyle = t.fillStyle, e.fillStyle = t.fillStyle) : (e.fillStyle = t.fillStyle, this.contextFillState_ = {
        fillStyle: t.fillStyle
      });
    }
    /**
     * @param {import("../canvas.js").StrokeState} strokeState Stroke state.
     * @private
     */
    setContextStrokeState_(t) {
      const e = this.context_, i = this.contextStrokeState_;
      i ? (i.lineCap != t.lineCap && (i.lineCap = t.lineCap, e.lineCap = t.lineCap), ye(i.lineDash, t.lineDash) || e.setLineDash(
        i.lineDash = t.lineDash
      ), i.lineDashOffset != t.lineDashOffset && (i.lineDashOffset = t.lineDashOffset, e.lineDashOffset = t.lineDashOffset), i.lineJoin != t.lineJoin && (i.lineJoin = t.lineJoin, e.lineJoin = t.lineJoin), i.lineWidth != t.lineWidth && (i.lineWidth = t.lineWidth, e.lineWidth = t.lineWidth), i.miterLimit != t.miterLimit && (i.miterLimit = t.miterLimit, e.miterLimit = t.miterLimit), i.strokeStyle != t.strokeStyle && (i.strokeStyle = t.strokeStyle, e.strokeStyle = t.strokeStyle)) : (e.lineCap = t.lineCap, e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset, e.lineJoin = t.lineJoin, e.lineWidth = t.lineWidth, e.miterLimit = t.miterLimit, e.strokeStyle = t.strokeStyle, this.contextStrokeState_ = {
        lineCap: t.lineCap,
        lineDash: t.lineDash,
        lineDashOffset: t.lineDashOffset,
        lineJoin: t.lineJoin,
        lineWidth: t.lineWidth,
        miterLimit: t.miterLimit,
        strokeStyle: t.strokeStyle
      });
    }
    /**
     * @param {import("../canvas.js").TextState} textState Text state.
     * @private
     */
    setContextTextState_(t) {
      const e = this.context_, i = this.contextTextState_, s = t.textAlign ? t.textAlign : rn;
      i ? (i.font != t.font && (i.font = t.font, e.font = t.font), i.textAlign != s && (i.textAlign = s, e.textAlign = s), i.textBaseline != t.textBaseline && (i.textBaseline = t.textBaseline, e.textBaseline = t.textBaseline)) : (e.font = t.font, e.textAlign = s, e.textBaseline = t.textBaseline, this.contextTextState_ = {
        font: t.font,
        textAlign: s,
        textBaseline: t.textBaseline
      });
    }
    /**
     * Set the fill and stroke style for subsequent draw operations.  To clear
     * either fill or stroke styles, pass null for the appropriate parameter.
     *
     * @param {import("../../style/Fill.js").default} fillStyle Fill style.
     * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
     * @override
     */
    setFillStrokeStyle(t, e) {
      if (!t)
        this.fillState_ = null;
      else {
        const i = t.getColor();
        this.fillState_ = {
          fillStyle: qt(
            i || Lt
          )
        };
      }
      if (!e)
        this.strokeState_ = null;
      else {
        const i = e.getColor(), s = e.getLineCap(), r = e.getLineDash(), o = e.getLineDashOffset(), a = e.getLineJoin(), l = e.getWidth(), h = e.getMiterLimit(), c = r || he;
        this.strokeState_ = {
          lineCap: s !== void 0 ? s : _i,
          lineDash: this.pixelRatio_ === 1 ? c : c.map((u) => u * this.pixelRatio_),
          lineDashOffset: (o || ce) * this.pixelRatio_,
          lineJoin: a !== void 0 ? a : mi,
          lineWidth: (l !== void 0 ? l : on) * this.pixelRatio_,
          miterLimit: h !== void 0 ? h : nn,
          strokeStyle: qt(
            i || sn
          )
        };
      }
    }
    /**
     * Set the image style for subsequent draw operations.  Pass null to remove
     * the image style.
     *
     * @param {import("../../style/Image.js").default} imageStyle Image style.
     * @override
     */
    setImageStyle(t) {
      let e;
      if (!t || !(e = t.getSize())) {
        this.image_ = null;
        return;
      }
      const i = t.getPixelRatio(this.pixelRatio_), s = t.getAnchor(), r = t.getOrigin();
      this.image_ = t.getImage(this.pixelRatio_), this.imageAnchorX_ = s[0] * i, this.imageAnchorY_ = s[1] * i, this.imageHeight_ = e[1] * i, this.imageOpacity_ = t.getOpacity(), this.imageOriginX_ = r[0], this.imageOriginY_ = r[1], this.imageRotateWithView_ = t.getRotateWithView(), this.imageRotation_ = t.getRotation();
      const o = t.getScaleArray();
      this.imageScale_ = [
        o[0] * this.pixelRatio_ / i,
        o[1] * this.pixelRatio_ / i
      ], this.imageWidth_ = e[0] * i;
    }
    /**
     * Set the text style for subsequent draw operations.  Pass null to
     * remove the text style.
     *
     * @param {import("../../style/Text.js").default} textStyle Text style.
     * @override
     */
    setTextStyle(t) {
      if (!t)
        this.text_ = "";
      else {
        const e = t.getFill();
        if (!e)
          this.textFillState_ = null;
        else {
          const f = e.getColor();
          this.textFillState_ = {
            fillStyle: qt(
              f || Lt
            )
          };
        }
        const i = t.getStroke();
        if (!i)
          this.textStrokeState_ = null;
        else {
          const f = i.getColor(), g = i.getLineCap(), p = i.getLineDash(), _ = i.getLineDashOffset(), m = i.getLineJoin(), y = i.getWidth(), w = i.getMiterLimit();
          this.textStrokeState_ = {
            lineCap: g !== void 0 ? g : _i,
            lineDash: p || he,
            lineDashOffset: _ || ce,
            lineJoin: m !== void 0 ? m : mi,
            lineWidth: y !== void 0 ? y : on,
            miterLimit: w !== void 0 ? w : nn,
            strokeStyle: qt(
              f || sn
            )
          };
        }
        const s = t.getFont(), r = t.getOffsetX(), o = t.getOffsetY(), a = t.getRotateWithView(), l = t.getRotation(), h = t.getScaleArray(), c = t.getText(), u = t.getTextAlign(), d = t.getTextBaseline();
        this.textState_ = {
          font: s !== void 0 ? s : Wl,
          textAlign: u !== void 0 ? u : rn,
          textBaseline: d !== void 0 ? d : ds
        }, this.text_ = c !== void 0 ? Array.isArray(c) ? c.reduce((f, g, p) => f += p % 2 ? " " : g, "") : c : "", this.textOffsetX_ = r !== void 0 ? this.pixelRatio_ * r : 0, this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0, this.textRotateWithView_ = a !== void 0 ? a : !1, this.textRotation_ = l !== void 0 ? l : 0, this.textScale_ = [
          this.pixelRatio_ * h[0],
          this.pixelRatio_ * h[1]
        ];
      }
    }
  }
  const V_ = $_, j_ = 0.5, Ah = {
    Point: nm,
    LineString: tm,
    Polygon: rm,
    MultiPoint: sm,
    MultiLineString: em,
    MultiPolygon: im,
    GeometryCollection: Q_,
    Circle: q_
  };
  function H_(n, t) {
    return parseInt(j(n), 10) - parseInt(j(t), 10);
  }
  function bh(n, t) {
    const e = Mh(n, t);
    return e * e;
  }
  function Mh(n, t) {
    return j_ * n / t;
  }
  function q_(n, t, e, i, s) {
    const r = e.getFill(), o = e.getStroke();
    if (r || o) {
      const l = n.getBuilder(e.getZIndex(), "Circle");
      l.setFillStrokeStyle(r, o), l.drawCircle(t, i, s);
    }
    const a = e.getText();
    if (a && a.getText()) {
      const l = n.getBuilder(e.getZIndex(), "Text");
      l.setTextStyle(a), l.drawText(t, i);
    }
  }
  function Ph(n, t, e, i, s, r, o, a) {
    const l = [], h = e.getImage();
    if (h) {
      let d = !0;
      const f = h.getImageState();
      f == U.LOADED || f == U.ERROR ? d = !1 : f == U.IDLE && h.load(), d && l.push(h.ready());
    }
    const c = e.getFill();
    c && c.loading() && l.push(c.ready());
    const u = l.length > 0;
    return u && Promise.all(l).then(() => s(null)), J_(
      n,
      t,
      e,
      i,
      r,
      o,
      a
    ), u;
  }
  function J_(n, t, e, i, s, r, o) {
    const a = e.getGeometryFunction()(t);
    if (!a)
      return;
    const l = a.simplifyTransformed(
      i,
      s
    );
    if (e.getRenderer())
      Dh(n, l, e, t, o);
    else {
      const c = Ah[l.getType()];
      c(
        n,
        l,
        e,
        t,
        o,
        r
      );
    }
  }
  function Dh(n, t, e, i, s) {
    if (t.getType() == "GeometryCollection") {
      const o = (
        /** @type {import("../geom/GeometryCollection.js").default} */
        t.getGeometries()
      );
      for (let a = 0, l = o.length; a < l; ++a)
        Dh(n, o[a], e, i, s);
      return;
    }
    n.getBuilder(e.getZIndex(), "Default").drawCustom(
      /** @type {import("../geom/SimpleGeometry.js").default} */
      t,
      i,
      e.getRenderer(),
      e.getHitDetectionRenderer(),
      s
    );
  }
  function Q_(n, t, e, i, s, r) {
    const o = t.getGeometriesArray();
    let a, l;
    for (a = 0, l = o.length; a < l; ++a) {
      const h = Ah[o[a].getType()];
      h(
        n,
        o[a],
        e,
        i,
        s,
        r
      );
    }
  }
  function tm(n, t, e, i, s) {
    const r = e.getStroke();
    if (r) {
      const a = n.getBuilder(
        e.getZIndex(),
        "LineString"
      );
      a.setFillStrokeStyle(null, r), a.drawLineString(t, i, s);
    }
    const o = e.getText();
    if (o && o.getText()) {
      const a = n.getBuilder(e.getZIndex(), "Text");
      a.setTextStyle(o), a.drawText(t, i, s);
    }
  }
  function em(n, t, e, i, s) {
    const r = e.getStroke();
    if (r) {
      const a = n.getBuilder(
        e.getZIndex(),
        "LineString"
      );
      a.setFillStrokeStyle(null, r), a.drawMultiLineString(t, i, s);
    }
    const o = e.getText();
    if (o && o.getText()) {
      const a = n.getBuilder(e.getZIndex(), "Text");
      a.setTextStyle(o), a.drawText(t, i, s);
    }
  }
  function im(n, t, e, i, s) {
    const r = e.getFill(), o = e.getStroke();
    if (o || r) {
      const l = n.getBuilder(e.getZIndex(), "Polygon");
      l.setFillStrokeStyle(r, o), l.drawMultiPolygon(t, i, s);
    }
    const a = e.getText();
    if (a && a.getText()) {
      const l = n.getBuilder(e.getZIndex(), "Text");
      l.setTextStyle(a), l.drawText(t, i, s);
    }
  }
  function nm(n, t, e, i, s, r) {
    const o = e.getImage(), a = e.getText(), l = a && a.getText(), h = r && o && l ? {} : void 0;
    if (o) {
      if (o.getImageState() != U.LOADED)
        return;
      const c = n.getBuilder(e.getZIndex(), "Image");
      c.setImageStyle(o, h), c.drawPoint(t, i, s);
    }
    if (l) {
      const c = n.getBuilder(e.getZIndex(), "Text");
      c.setTextStyle(a, h), c.drawText(t, i, s);
    }
  }
  function sm(n, t, e, i, s, r) {
    const o = e.getImage(), a = o && o.getOpacity() !== 0, l = e.getText(), h = l && l.getText(), c = r && a && h ? {} : void 0;
    if (a) {
      if (o.getImageState() != U.LOADED)
        return;
      const u = n.getBuilder(e.getZIndex(), "Image");
      u.setImageStyle(o, c), u.drawMultiPoint(t, i, s);
    }
    if (h) {
      const u = n.getBuilder(e.getZIndex(), "Text");
      u.setTextStyle(l, c), u.drawText(t, i, s);
    }
  }
  function rm(n, t, e, i, s) {
    const r = e.getFill(), o = e.getStroke();
    if (r || o) {
      const l = n.getBuilder(e.getZIndex(), "Polygon");
      l.setFillStrokeStyle(r, o), l.drawPolygon(t, i, s);
    }
    const a = e.getText();
    if (a && a.getText()) {
      const l = n.getBuilder(e.getZIndex(), "Text");
      l.setTextStyle(a), l.drawText(t, i, s);
    }
  }
  let om = !1;
  function am(n, t, e, i, s, r, o) {
    const a = new XMLHttpRequest();
    a.open(
      "GET",
      typeof n == "function" ? n(e, i, s) : n,
      !0
    ), t.getType() == "arraybuffer" && (a.responseType = "arraybuffer"), a.withCredentials = om, a.onload = function(l) {
      if (!a.status || a.status >= 200 && a.status < 300) {
        const h = t.getType();
        try {
          let c;
          h == "text" || h == "json" ? c = a.responseText : h == "xml" ? c = a.responseXML || a.responseText : h == "arraybuffer" && (c = /** @type {ArrayBuffer} */
          a.response), c ? r(
            /** @type {Array<FeatureType>} */
            t.readFeatures(c, {
              extent: e,
              featureProjection: s
            }),
            t.readProjection(c)
          ) : o();
        } catch {
          o();
        }
      } else
        o();
    }, a.onerror = o, a.send();
  }
  function Oh(n, t) {
    return function(e, i, s, r, o) {
      am(
        n,
        t,
        e,
        i,
        s,
        /**
         * @param {Array<FeatureType>} features The loaded features.
         * @param {import("./proj/Projection.js").default} dataProjection Data
         * projection.
         */
        (a, l) => {
          this.addFeatures(a), r !== void 0 && r(a);
        },
        () => {
          this.changed(), o !== void 0 && o();
        }
      );
    };
  }
  function lm(n, t) {
    return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
  }
  function hm(n, t, e, i) {
    const s = [];
    let r = Dt();
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o];
      r = Zs(
        n,
        t,
        l[0],
        i
      ), s.push((r[0] + r[2]) / 2, (r[1] + r[3]) / 2), t = l[l.length - 1];
    }
    return s;
  }
  const Fh = Bt();
  class vi {
    /**
     * @param {Type} type Geometry type.
     * @param {Array<number>} flatCoordinates Flat coordinates. These always need
     *     to be right-handed for polygons.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {Object<string, *>} properties Properties.
     * @param {number|string|undefined} id Feature id.
     */
    constructor(t, e, i, s, r, o) {
      this.styleFunction, this.extent_, this.id_ = o, this.type_ = t, this.flatCoordinates_ = e, this.flatInteriorPoints_ = null, this.flatMidpoints_ = null, this.ends_ = i || null, this.properties_ = r, this.squaredTolerance_, this.stride_ = s, this.simplifiedGeometry_;
    }
    /**
     * Get a feature property by its key.
     * @param {string} key Key
     * @return {*} Value for the requested key.
     * @api
     */
    get(t) {
      return this.properties_[t];
    }
    /**
     * Get the extent of this feature's geometry.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getExtent() {
      return this.extent_ || (this.extent_ = this.type_ === "Point" ? va(this.flatCoordinates_) : Zs(
        this.flatCoordinates_,
        0,
        this.flatCoordinates_.length,
        2
      )), this.extent_;
    }
    /**
     * @return {Array<number>} Flat interior points.
     */
    getFlatInteriorPoint() {
      if (!this.flatInteriorPoints_) {
        const t = Fe(this.getExtent());
        this.flatInteriorPoints_ = dr(
          this.flatCoordinates_,
          0,
          this.ends_,
          2,
          t,
          0
        );
      }
      return this.flatInteriorPoints_;
    }
    /**
     * @return {Array<number>} Flat interior points.
     */
    getFlatInteriorPoints() {
      if (!this.flatInteriorPoints_) {
        const t = hd(this.flatCoordinates_, this.ends_), e = hm(this.flatCoordinates_, 0, t, 2);
        this.flatInteriorPoints_ = sd(
          this.flatCoordinates_,
          0,
          t,
          2,
          e
        );
      }
      return this.flatInteriorPoints_;
    }
    /**
     * @return {Array<number>} Flat midpoint.
     */
    getFlatMidpoint() {
      return this.flatMidpoints_ || (this.flatMidpoints_ = Ih(
        this.flatCoordinates_,
        0,
        this.flatCoordinates_.length,
        2,
        0.5
      )), this.flatMidpoints_;
    }
    /**
     * @return {Array<number>} Flat midpoints.
     */
    getFlatMidpoints() {
      if (!this.flatMidpoints_) {
        this.flatMidpoints_ = [];
        const t = this.flatCoordinates_;
        let e = 0;
        const i = (
          /** @type {Array<number>} */
          this.ends_
        );
        for (let s = 0, r = i.length; s < r; ++s) {
          const o = i[s], a = Ih(t, e, o, 2, 0.5);
          Ws(this.flatMidpoints_, a), e = o;
        }
      }
      return this.flatMidpoints_;
    }
    /**
     * Get the feature identifier.  This is a stable identifier for the feature and
     * is set when reading data from a remote source.
     * @return {number|string|undefined} Id.
     * @api
     */
    getId() {
      return this.id_;
    }
    /**
     * @return {Array<number>} Flat coordinates.
     */
    getOrientedFlatCoordinates() {
      return this.flatCoordinates_;
    }
    /**
     * For API compatibility with {@link module:ol/Feature~Feature}, this method is useful when
     * determining the geometry type in style function (see {@link #getType}).
     * @return {RenderFeature} Feature.
     * @api
     */
    getGeometry() {
      return this;
    }
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {RenderFeature} Simplified geometry.
     */
    getSimplifiedGeometry(t) {
      return this;
    }
    /**
     * Get a transformed and simplified version of the geometry.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
     * @return {RenderFeature} Simplified geometry.
     */
    simplifyTransformed(t, e) {
      return this;
    }
    /**
     * Get the feature properties.
     * @return {Object<string, *>} Feature properties.
     * @api
     */
    getProperties() {
      return this.properties_;
    }
    /**
     * Get an object of all property names and values.  This has the same behavior as getProperties,
     * but is here to conform with the {@link module:ol/Feature~Feature} interface.
     * @return {Object<string, *>?} Object.
     */
    getPropertiesInternal() {
      return this.properties_;
    }
    /**
     * @return {number} Stride.
     */
    getStride() {
      return this.stride_;
    }
    /**
     * @return {import('../style/Style.js').StyleFunction|undefined} Style
     */
    getStyleFunction() {
      return this.styleFunction;
    }
    /**
     * Get the type of this feature's geometry.
     * @return {Type} Geometry type.
     * @api
     */
    getType() {
      return this.type_;
    }
    /**
     * Transform geometry coordinates from tile pixel space to projected.
     *
     * @param {import("../proj.js").ProjectionLike} projection The data projection
     */
    transform(t) {
      t = Tt(t);
      const e = t.getExtent(), i = t.getWorldExtent();
      if (e && i) {
        const s = yt(i) / yt(e);
        ae(
          Fh,
          i[0],
          i[3],
          s,
          -s,
          0,
          0,
          0
        ), Re(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          Fh,
          this.flatCoordinates_
        );
      }
    }
    /**
     * Apply a transform function to the coordinates of the geometry.
     * The geometry is modified in place.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     * @param {import("../proj.js").TransformFunction} transformFn Transform function.
     */
    applyTransform(t) {
      t(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
    }
    /**
     * @return {RenderFeature} A cloned render feature.
     */
    clone() {
      var t;
      return new vi(
        this.type_,
        this.flatCoordinates_.slice(),
        (t = this.ends_) == null ? void 0 : t.slice(),
        this.stride_,
        Object.assign({}, this.properties_),
        this.id_
      );
    }
    /**
     * @return {Array<number>|null} Ends.
     */
    getEnds() {
      return this.ends_;
    }
    /**
     * Add transform and resolution based geometry simplification to this instance.
     * @return {RenderFeature} This render feature.
     */
    enableSimplifyTransformed() {
      return this.simplifyTransformed = ca((t, e) => {
        if (t === this.squaredTolerance_)
          return this.simplifiedGeometry_;
        this.simplifiedGeometry_ = this.clone(), e && this.simplifiedGeometry_.applyTransform(e);
        const i = this.simplifiedGeometry_.getFlatCoordinates();
        let s;
        switch (this.type_) {
          case "LineString":
            i.length = cr(
              i,
              0,
              this.simplifiedGeometry_.flatCoordinates_.length,
              this.simplifiedGeometry_.stride_,
              t,
              i,
              0
            ), s = [i.length];
            break;
          case "MultiLineString":
            s = [], i.length = ed(
              i,
              0,
              this.simplifiedGeometry_.ends_,
              this.simplifiedGeometry_.stride_,
              t,
              i,
              0,
              s
            );
            break;
          case "Polygon":
            s = [], i.length = ol(
              i,
              0,
              this.simplifiedGeometry_.ends_,
              this.simplifiedGeometry_.stride_,
              Math.sqrt(t),
              i,
              0,
              s
            );
            break;
        }
        return s && (this.simplifiedGeometry_ = new vi(
          this.type_,
          i,
          s,
          2,
          this.properties_,
          this.id_
        )), this.squaredTolerance_ = t, this.simplifiedGeometry_;
      }), this;
    }
  }
  vi.prototype.getFlatCoordinates = vi.prototype.getOrientedFlatCoordinates;
  const Ri = vi;
  class cm {
    /**
     * @param {number} [maxEntries] Max entries.
     */
    constructor(t) {
      this.rbush_ = new Ll(t), this.items_ = {};
    }
    /**
     * Insert a value into the RBush.
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {T} value Value.
     */
    insert(t, e) {
      const i = {
        minX: t[0],
        minY: t[1],
        maxX: t[2],
        maxY: t[3],
        value: e
      };
      this.rbush_.insert(i), this.items_[j(e)] = i;
    }
    /**
     * Bulk-insert values into the RBush.
     * @param {Array<import("../extent.js").Extent>} extents Extents.
     * @param {Array<T>} values Values.
     */
    load(t, e) {
      const i = new Array(e.length);
      for (let s = 0, r = e.length; s < r; s++) {
        const o = t[s], a = e[s], l = {
          minX: o[0],
          minY: o[1],
          maxX: o[2],
          maxY: o[3],
          value: a
        };
        i[s] = l, this.items_[j(a)] = l;
      }
      this.rbush_.load(i);
    }
    /**
     * Remove a value from the RBush.
     * @param {T} value Value.
     * @return {boolean} Removed.
     */
    remove(t) {
      const e = j(t), i = this.items_[e];
      return delete this.items_[e], this.rbush_.remove(i) !== null;
    }
    /**
     * Update the extent of a value in the RBush.
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {T} value Value.
     */
    update(t, e) {
      const i = this.items_[j(e)], s = [i.minX, i.minY, i.maxX, i.maxY];
      Ni(s, t) || (this.remove(e), this.insert(t, e));
    }
    /**
     * Return all values in the RBush.
     * @return {Array<T>} All.
     */
    getAll() {
      return this.rbush_.all().map(function(e) {
        return e.value;
      });
    }
    /**
     * Return all values in the given extent.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {Array<T>} All in extent.
     */
    getInExtent(t) {
      const e = {
        minX: t[0],
        minY: t[1],
        maxX: t[2],
        maxY: t[3]
      };
      return this.rbush_.search(e).map(function(s) {
        return s.value;
      });
    }
    /**
     * Calls a callback function with each value in the tree.
     * If the callback returns a truthy value, this value is returned without
     * checking the rest of the tree.
     * @param {function(T): R} callback Callback.
     * @return {R|undefined} Callback return value.
     * @template R
     */
    forEach(t) {
      return this.forEach_(this.getAll(), t);
    }
    /**
     * Calls a callback function with each value in the provided extent.
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {function(T): R} callback Callback.
     * @return {R|undefined} Callback return value.
     * @template R
     */
    forEachInExtent(t, e) {
      return this.forEach_(this.getInExtent(t), e);
    }
    /**
     * @param {Array<T>} values Values.
     * @param {function(T): R} callback Callback.
     * @return {R|undefined} Callback return value.
     * @template R
     * @private
     */
    forEach_(t, e) {
      let i;
      for (let s = 0, r = t.length; s < r; s++)
        if (i = e(t[s]), i)
          return i;
      return i;
    }
    /**
     * @return {boolean} Is empty.
     */
    isEmpty() {
      return ti(this.items_);
    }
    /**
     * Remove all values from the RBush.
     */
    clear() {
      this.rbush_.clear(), this.items_ = {};
    }
    /**
     * @param {import("../extent.js").Extent} [extent] Extent.
     * @return {import("../extent.js").Extent} Extent.
     */
    getExtent(t) {
      const e = this.rbush_.toJSON();
      return Ce(e.minX, e.minY, e.maxX, e.maxY, t);
    }
    /**
     * @param {RBush<T>} rbush R-Tree.
     */
    concat(t) {
      this.rbush_.load(t.rbush_.all());
      for (const e in t.items_)
        this.items_[e] = t.items_[e];
    }
  }
  const kh = cm, Nt = {
    /**
     * Triggered when a feature is added to the source.
     * @event module:ol/source/Vector.VectorSourceEvent#addfeature
     * @api
     */
    ADDFEATURE: "addfeature",
    /**
     * Triggered when a feature is updated.
     * @event module:ol/source/Vector.VectorSourceEvent#changefeature
     * @api
     */
    CHANGEFEATURE: "changefeature",
    /**
     * Triggered when the clear method is called on the source.
     * @event module:ol/source/Vector.VectorSourceEvent#clear
     * @api
     */
    CLEAR: "clear",
    /**
     * Triggered when a feature is removed from the source.
     * See {@link module:ol/source/Vector~VectorSource#clear source.clear()} for exceptions.
     * @event module:ol/source/Vector.VectorSourceEvent#removefeature
     * @api
     */
    REMOVEFEATURE: "removefeature",
    /**
     * Triggered when features starts loading.
     * @event module:ol/source/Vector.VectorSourceEvent#featuresloadstart
     * @api
     */
    FEATURESLOADSTART: "featuresloadstart",
    /**
     * Triggered when features finishes loading.
     * @event module:ol/source/Vector.VectorSourceEvent#featuresloadend
     * @api
     */
    FEATURESLOADEND: "featuresloadend",
    /**
     * Triggered if feature loading results in an error.
     * @event module:ol/source/Vector.VectorSourceEvent#featuresloaderror
     * @api
     */
    FEATURESLOADERROR: "featuresloaderror"
  };
  class Le extends re {
    /**
     * @param {string} type Type.
     * @param {FeatureType} [feature] Feature.
     * @param {Array<FeatureType>} [features] Features.
     */
    constructor(t, e, i) {
      super(t), this.feature = e, this.features = i;
    }
  }
  class um extends Sh {
    /**
     * @param {Options<FeatureType>} [options] Vector source options.
     */
    constructor(t) {
      t = t || {}, super({
        attributions: t.attributions,
        interpolate: !0,
        projection: void 0,
        state: "ready",
        wrapX: t.wrapX !== void 0 ? t.wrapX : !0
      }), this.on, this.once, this.un, this.loader_ = Oi, this.format_ = t.format || null, this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps, this.url_ = t.url, t.loader !== void 0 ? this.loader_ = t.loader : this.url_ !== void 0 && (q(this.format_, "`format` must be set when `url` is set"), this.loader_ = Oh(this.url_, this.format_)), this.strategy_ = t.strategy !== void 0 ? t.strategy : lm;
      const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0;
      this.featuresRtree_ = e ? new kh() : null, this.loadedExtentsRtree_ = new kh(), this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
      let i, s;
      Array.isArray(t.features) ? s = t.features : t.features && (i = t.features, s = i.getArray()), !e && i === void 0 && (i = new jt(s)), s !== void 0 && this.addFeaturesInternal(s), i !== void 0 && this.bindFeaturesCollection_(i);
    }
    /**
     * Add a single feature to the source.  If you want to add a batch of features
     * at once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}
     * instead. A feature will not be added to the source if feature with
     * the same id is already there. The reason for this behavior is to avoid
     * feature duplication when using bbox or tile loading strategies.
     * Note: this also applies if a {@link module:ol/Collection~Collection} is used for features,
     * meaning that if a feature with a duplicate id is added in the collection, it will
     * be removed from it right away.
     * @param {FeatureType} feature Feature to add.
     * @api
     */
    addFeature(t) {
      this.addFeatureInternal(t), this.changed();
    }
    /**
     * Add a feature without firing a `change` event.
     * @param {FeatureType} feature Feature.
     * @protected
     */
    addFeatureInternal(t) {
      const e = j(t);
      if (!this.addToIndex_(e, t)) {
        this.featuresCollection_ && this.featuresCollection_.remove(t);
        return;
      }
      this.setupChangeEvents_(e, t);
      const i = t.getGeometry();
      if (i) {
        const s = i.getExtent();
        this.featuresRtree_ && this.featuresRtree_.insert(s, t);
      } else
        this.nullGeometryFeatures_[e] = t;
      this.dispatchEvent(
        new Le(Nt.ADDFEATURE, t)
      );
    }
    /**
     * @param {string} featureKey Unique identifier for the feature.
     * @param {FeatureType} feature The feature.
     * @private
     */
    setupChangeEvents_(t, e) {
      e instanceof Ri || (this.featureChangeKeys_[t] = [
        $(e, Y.CHANGE, this.handleFeatureChange_, this),
        $(
          e,
          Qe.PROPERTYCHANGE,
          this.handleFeatureChange_,
          this
        )
      ]);
    }
    /**
     * @param {string} featureKey Unique identifier for the feature.
     * @param {FeatureType} feature The feature.
     * @return {boolean} The feature is "valid", in the sense that it is also a
     *     candidate for insertion into the Rtree.
     * @private
     */
    addToIndex_(t, e) {
      let i = !0;
      if (e.getId() !== void 0) {
        const s = String(e.getId());
        if (!(s in this.idIndex_))
          this.idIndex_[s] = e;
        else if (e instanceof Ri) {
          const r = this.idIndex_[s];
          r instanceof Ri ? Array.isArray(r) ? r.push(e) : this.idIndex_[s] = [r, e] : i = !1;
        } else
          i = !1;
      }
      return i && (q(
        !(t in this.uidIndex_),
        "The passed `feature` was already added to the source"
      ), this.uidIndex_[t] = e), i;
    }
    /**
     * Add a batch of features to the source.
     * @param {Array<FeatureType>} features Features to add.
     * @api
     */
    addFeatures(t) {
      this.addFeaturesInternal(t), this.changed();
    }
    /**
     * Add features without firing a `change` event.
     * @param {Array<FeatureType>} features Features.
     * @protected
     */
    addFeaturesInternal(t) {
      const e = [], i = [], s = [];
      for (let r = 0, o = t.length; r < o; r++) {
        const a = t[r], l = j(a);
        this.addToIndex_(l, a) && i.push(a);
      }
      for (let r = 0, o = i.length; r < o; r++) {
        const a = i[r], l = j(a);
        this.setupChangeEvents_(l, a);
        const h = a.getGeometry();
        if (h) {
          const c = h.getExtent();
          e.push(c), s.push(a);
        } else
          this.nullGeometryFeatures_[l] = a;
      }
      if (this.featuresRtree_ && this.featuresRtree_.load(e, s), this.hasListener(Nt.ADDFEATURE))
        for (let r = 0, o = i.length; r < o; r++)
          this.dispatchEvent(
            new Le(Nt.ADDFEATURE, i[r])
          );
    }
    /**
     * @param {!Collection<FeatureType>} collection Collection.
     * @private
     */
    bindFeaturesCollection_(t) {
      let e = !1;
      this.addEventListener(
        Nt.ADDFEATURE,
        /**
         * @param {VectorSourceEvent<FeatureType>} evt The vector source event
         */
        function(i) {
          e || (e = !0, t.push(i.feature), e = !1);
        }
      ), this.addEventListener(
        Nt.REMOVEFEATURE,
        /**
         * @param {VectorSourceEvent<FeatureType>} evt The vector source event
         */
        function(i) {
          e || (e = !0, t.remove(i.feature), e = !1);
        }
      ), t.addEventListener(
        vt.ADD,
        /**
         * @param {import("../Collection.js").CollectionEvent<FeatureType>} evt The collection event
         */
        (i) => {
          e || (e = !0, this.addFeature(i.element), e = !1);
        }
      ), t.addEventListener(
        vt.REMOVE,
        /**
         * @param {import("../Collection.js").CollectionEvent<FeatureType>} evt The collection event
         */
        (i) => {
          e || (e = !0, this.removeFeature(i.element), e = !1);
        }
      ), this.featuresCollection_ = t;
    }
    /**
     * Remove all features from the source.
     * @param {boolean} [fast] Skip dispatching of {@link module:ol/source/Vector.VectorSourceEvent#event:removefeature} events.
     * @api
     */
    clear(t) {
      if (t) {
        for (const i in this.featureChangeKeys_)
          this.featureChangeKeys_[i].forEach(it);
        this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.uidIndex_ = {});
      } else if (this.featuresRtree_) {
        this.featuresRtree_.forEach((i) => {
          this.removeFeatureInternal(i);
        });
        for (const i in this.nullGeometryFeatures_)
          this.removeFeatureInternal(this.nullGeometryFeatures_[i]);
      }
      this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.nullGeometryFeatures_ = {};
      const e = new Le(Nt.CLEAR);
      this.dispatchEvent(e), this.changed();
    }
    /**
     * Iterate through all features on the source, calling the provided callback
     * with each one.  If the callback returns any "truthy" value, iteration will
     * stop and the function will return the same value.
     * Note: this function only iterate through the feature that have a defined geometry.
     *
     * @param {function(FeatureType): T} callback Called with each feature
     *     on the source.  Return a truthy value to stop iteration.
     * @return {T|undefined} The return value from the last call to the callback.
     * @template T
     * @api
     */
    forEachFeature(t) {
      if (this.featuresRtree_)
        return this.featuresRtree_.forEach(t);
      this.featuresCollection_ && this.featuresCollection_.forEach(t);
    }
    /**
     * Iterate through all features whose geometries contain the provided
     * coordinate, calling the callback with each feature.  If the callback returns
     * a "truthy" value, iteration will stop and the function will return the same
     * value.
     *
     * For {@link module:ol/render/Feature~RenderFeature} features, the callback will be
     * called for all features.
     *
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {function(FeatureType): T} callback Called with each feature
     *     whose goemetry contains the provided coordinate.
     * @return {T|undefined} The return value from the last call to the callback.
     * @template T
     */
    forEachFeatureAtCoordinateDirect(t, e) {
      const i = [t[0], t[1], t[0], t[1]];
      return this.forEachFeatureInExtent(i, function(s) {
        const r = s.getGeometry();
        if (r instanceof Ri || r.intersectsCoordinate(t))
          return e(s);
      });
    }
    /**
     * Iterate through all features whose bounding box intersects the provided
     * extent (note that the feature's geometry may not intersect the extent),
     * calling the callback with each feature.  If the callback returns a "truthy"
     * value, iteration will stop and the function will return the same value.
     *
     * If you are interested in features whose geometry intersects an extent, call
     * the {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.
     *
     * When `useSpatialIndex` is set to false, this method will loop through all
     * features, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.
     *
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {function(FeatureType): T} callback Called with each feature
     *     whose bounding box intersects the provided extent.
     * @return {T|undefined} The return value from the last call to the callback.
     * @template T
     * @api
     */
    forEachFeatureInExtent(t, e) {
      if (this.featuresRtree_)
        return this.featuresRtree_.forEachInExtent(t, e);
      this.featuresCollection_ && this.featuresCollection_.forEach(e);
    }
    /**
     * Iterate through all features whose geometry intersects the provided extent,
     * calling the callback with each feature.  If the callback returns a "truthy"
     * value, iteration will stop and the function will return the same value.
     *
     * If you only want to test for bounding box intersection, call the
     * {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.
     *
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {function(FeatureType): T} callback Called with each feature
     *     whose geometry intersects the provided extent.
     * @return {T|undefined} The return value from the last call to the callback.
     * @template T
     * @api
     */
    forEachFeatureIntersectingExtent(t, e) {
      return this.forEachFeatureInExtent(
        t,
        /**
         * @param {FeatureType} feature Feature.
         * @return {T|undefined} The return value from the last call to the callback.
         */
        function(i) {
          const s = i.getGeometry();
          if (s instanceof Ri || s.intersectsExtent(t)) {
            const r = e(i);
            if (r)
              return r;
          }
        }
      );
    }
    /**
     * Get the features collection associated with this source. Will be `null`
     * unless the source was configured with `useSpatialIndex` set to `false`, or
     * with a {@link module:ol/Collection~Collection} as `features`.
     * @return {Collection<FeatureType>|null} The collection of features.
     * @api
     */
    getFeaturesCollection() {
      return this.featuresCollection_;
    }
    /**
     * Get a snapshot of the features currently on the source in random order. The returned array
     * is a copy, the features are references to the features in the source.
     * @return {Array<FeatureType>} Features.
     * @api
     */
    getFeatures() {
      let t;
      return this.featuresCollection_ ? t = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (t = this.featuresRtree_.getAll(), ti(this.nullGeometryFeatures_) || Ws(t, Object.values(this.nullGeometryFeatures_))), t;
    }
    /**
     * Get all features whose geometry intersects the provided coordinate.
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {Array<FeatureType>} Features.
     * @api
     */
    getFeaturesAtCoordinate(t) {
      const e = [];
      return this.forEachFeatureAtCoordinateDirect(t, function(i) {
        e.push(i);
      }), e;
    }
    /**
     * Get all features whose bounding box intersects the provided extent.  Note that this returns an array of
     * all features intersecting the given extent in random order (so it may include
     * features whose geometries do not intersect the extent).
     *
     * When `useSpatialIndex` is set to false, this method will return all
     * features.
     *
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {import("../proj/Projection.js").default} [projection] Include features
     * where `extent` exceeds the x-axis bounds of `projection` and wraps around the world.
     * @return {Array<FeatureType>} Features.
     * @api
     */
    getFeaturesInExtent(t, e) {
      if (this.featuresRtree_) {
        if (!(e && e.canWrapX() && this.getWrapX()))
          return this.featuresRtree_.getInExtent(t);
        const s = La(t, e);
        return [].concat(
          ...s.map((r) => this.featuresRtree_.getInExtent(r))
        );
      }
      return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : [];
    }
    /**
     * Get the closest feature to the provided coordinate.
     *
     * This method is not available when the source is configured with
     * `useSpatialIndex` set to `false` and the features in this source are of type
     * {@link module:ol/Feature~Feature}.
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {function(FeatureType):boolean} [filter] Feature filter function.
     *     The filter function will receive one argument, the {@link module:ol/Feature~Feature feature}
     *     and it should return a boolean value. By default, no filtering is made.
     * @return {FeatureType|null} Closest feature (or `null` if none found).
     * @api
     */
    getClosestFeatureToCoordinate(t, e) {
      const i = t[0], s = t[1];
      let r = null;
      const o = [NaN, NaN];
      let a = 1 / 0;
      const l = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
      return e = e || Di, this.featuresRtree_.forEachInExtent(
        l,
        /**
         * @param {FeatureType} feature Feature.
         */
        function(h) {
          if (e(h)) {
            const c = h.getGeometry(), u = a;
            if (a = c instanceof Ri ? 0 : c.closestPointXY(i, s, o, a), a < u) {
              r = h;
              const d = Math.sqrt(a);
              l[0] = i - d, l[1] = s - d, l[2] = i + d, l[3] = s + d;
            }
          }
        }
      ), r;
    }
    /**
     * Get the extent of the features currently in the source.
     *
     * This method is not available when the source is configured with
     * `useSpatialIndex` set to `false`.
     * @param {import("../extent.js").Extent} [extent] Destination extent. If provided, no new extent
     *     will be created. Instead, that extent's coordinates will be overwritten.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getExtent(t) {
      return this.featuresRtree_.getExtent(t);
    }
    /**
     * Get a feature by its identifier (the value returned by feature.getId()). When `RenderFeature`s
     * are used, `getFeatureById()` can return an array of `RenderFeature`s. This allows for handling
     * of `GeometryCollection` geometries, where format readers create one `RenderFeature` per
     * `GeometryCollection` member.
     * Note that the index treats string and numeric identifiers as the same.  So
     * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
     *
     * @param {string|number} id Feature identifier.
     * @return {FeatureClassOrArrayOfRenderFeatures<FeatureType>|null} The feature (or `null` if not found).
     * @api
     */
    getFeatureById(t) {
      const e = this.idIndex_[t.toString()];
      return e !== void 0 ? (
        /** @type {FeatureClassOrArrayOfRenderFeatures<FeatureType>} */
        e
      ) : null;
    }
    /**
     * Get a feature by its internal unique identifier (using `getUid`).
     *
     * @param {string} uid Feature identifier.
     * @return {FeatureType|null} The feature (or `null` if not found).
     */
    getFeatureByUid(t) {
      const e = this.uidIndex_[t];
      return e !== void 0 ? e : null;
    }
    /**
     * Get the format associated with this source.
     *
     * @return {import("../format/Feature.js").default<FeatureType>|null}} The feature format.
     * @api
     */
    getFormat() {
      return this.format_;
    }
    /**
     * @return {boolean} The source can have overlapping geometries.
     */
    getOverlaps() {
      return this.overlaps_;
    }
    /**
     * Get the url associated with this source.
     *
     * @return {string|import("../featureloader.js").FeatureUrlFunction|undefined} The url.
     * @api
     */
    getUrl() {
      return this.url_;
    }
    /**
     * @param {Event} event Event.
     * @private
     */
    handleFeatureChange_(t) {
      const e = (
        /** @type {FeatureType} */
        t.target
      ), i = j(e), s = e.getGeometry();
      if (!s)
        i in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(e), this.nullGeometryFeatures_[i] = e);
      else {
        const o = s.getExtent();
        i in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[i], this.featuresRtree_ && this.featuresRtree_.insert(o, e)) : this.featuresRtree_ && this.featuresRtree_.update(o, e);
      }
      const r = e.getId();
      if (r !== void 0) {
        const o = r.toString();
        this.idIndex_[o] !== e && (this.removeFromIdIndex_(e), this.idIndex_[o] = e);
      } else
        this.removeFromIdIndex_(e), this.uidIndex_[i] = e;
      this.changed(), this.dispatchEvent(
        new Le(Nt.CHANGEFEATURE, e)
      );
    }
    /**
     * Returns true if the feature is contained within the source.
     * @param {FeatureType} feature Feature.
     * @return {boolean} Has feature.
     * @api
     */
    hasFeature(t) {
      const e = t.getId();
      return e !== void 0 ? e in this.idIndex_ : j(t) in this.uidIndex_;
    }
    /**
     * @return {boolean} Is empty.
     */
    isEmpty() {
      return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && ti(this.nullGeometryFeatures_) : this.featuresCollection_ ? this.featuresCollection_.getLength() === 0 : !0;
    }
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @param {import("../proj/Projection.js").default} projection Projection.
     */
    loadFeatures(t, e, i) {
      const s = this.loadedExtentsRtree_, r = this.strategy_(t, e, i);
      for (let o = 0, a = r.length; o < a; ++o) {
        const l = r[o];
        s.forEachInExtent(
          l,
          /**
           * @param {{extent: import("../extent.js").Extent}} object Object.
           * @return {boolean} Contains.
           */
          function(c) {
            return ki(c.extent, l);
          }
        ) || (++this.loadingExtentsCount_, this.dispatchEvent(
          new Le(Nt.FEATURESLOADSTART)
        ), this.loader_.call(
          this,
          l,
          e,
          i,
          /**
           * @param {Array<FeatureType>} features Loaded features
           */
          (c) => {
            --this.loadingExtentsCount_, this.dispatchEvent(
              new Le(
                Nt.FEATURESLOADEND,
                void 0,
                c
              )
            );
          },
          () => {
            --this.loadingExtentsCount_, this.dispatchEvent(
              new Le(Nt.FEATURESLOADERROR)
            );
          }
        ), s.insert(l, { extent: l.slice() }));
      }
      this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
    }
    /**
     * @override
     */
    refresh() {
      this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
    }
    /**
     * Remove an extent from the list of loaded extents.
     * @param {import("../extent.js").Extent} extent Extent.
     * @api
     */
    removeLoadedExtent(t) {
      const e = this.loadedExtentsRtree_, i = e.forEachInExtent(t, function(s) {
        if (Ni(s.extent, t))
          return s;
      });
      i && e.remove(i);
    }
    /**
     * Batch remove features from the source.  If you want to remove all features
     * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
     * instead.
     * @param {Array<FeatureType>} features Features to remove.
     * @api
     */
    removeFeatures(t) {
      let e = !1;
      for (let i = 0, s = t.length; i < s; ++i)
        e = this.removeFeatureInternal(t[i]) || e;
      e && this.changed();
    }
    /**
     * Remove a single feature from the source. If you want to batch remove
     * features, use the {@link module:ol/source/Vector~VectorSource#removeFeatures #removeFeatures()} method
     * instead.
     * @param {FeatureType} feature Feature to remove.
     * @api
     */
    removeFeature(t) {
      if (!t)
        return;
      this.removeFeatureInternal(t) && this.changed();
    }
    /**
     * Remove feature without firing a `change` event.
     * @param {FeatureType} feature Feature.
     * @return {boolean} True if the feature was removed, false if it was not found.
     * @protected
     */
    removeFeatureInternal(t) {
      const e = j(t);
      if (!(e in this.uidIndex_))
        return !1;
      e in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[e] : this.featuresRtree_ && this.featuresRtree_.remove(t);
      const i = this.featureChangeKeys_[e];
      i == null || i.forEach(it), delete this.featureChangeKeys_[e];
      const s = t.getId();
      if (s !== void 0) {
        const r = s.toString(), o = this.idIndex_[r];
        o === t ? delete this.idIndex_[r] : Array.isArray(o) && (o.splice(o.indexOf(t), 1), o.length === 1 && (this.idIndex_[r] = o[0]));
      }
      return delete this.uidIndex_[e], this.hasListener(Nt.REMOVEFEATURE) && this.dispatchEvent(
        new Le(Nt.REMOVEFEATURE, t)
      ), !0;
    }
    /**
     * Remove a feature from the id index.  Called internally when the feature id
     * may have changed.
     * @param {FeatureType} feature The feature.
     * @private
     */
    removeFromIdIndex_(t) {
      for (const e in this.idIndex_)
        if (this.idIndex_[e] === t) {
          delete this.idIndex_[e];
          break;
        }
    }
    /**
     * Set the new loader of the source. The next render cycle will use the
     * new loader.
     * @param {import("../featureloader.js").FeatureLoader} loader The loader to set.
     * @api
     */
    setLoader(t) {
      this.loader_ = t;
    }
    /**
     * Points the source to a new url. The next render cycle will use the new url.
     * @param {string|import("../featureloader.js").FeatureUrlFunction} url Url.
     * @api
     */
    setUrl(t) {
      q(this.format_, "`format` must be set when `url` is set"), this.url_ = t, this.setLoader(Oh(t, this.format_));
    }
    /**
     * @param {boolean} overlaps The source can have overlapping geometries.
     */
    setOverlaps(t) {
      this.overlaps_ = t, this.changed();
    }
  }
  const dm = um, dn = {
    BEGIN_GEOMETRY: 0,
    BEGIN_PATH: 1,
    CIRCLE: 2,
    CLOSE_PATH: 3,
    CUSTOM: 4,
    DRAW_CHARS: 5,
    DRAW_IMAGE: 6,
    END_GEOMETRY: 7,
    FILL: 8,
    MOVE_TO_LINE_TO: 9,
    SET_FILL_STYLE: 10,
    SET_STROKE_STYLE: 11,
    STROKE: 12
  }, ws = [dn.FILL], Ae = [dn.STROKE], Ze = [dn.BEGIN_PATH], Nh = [dn.CLOSE_PATH], N = dn;
  class fm extends Lh {
    /**
     * @param {number} tolerance Tolerance.
     * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     */
    constructor(t, e, i, s) {
      super(), this.tolerance = t, this.maxExtent = e, this.pixelRatio = s, this.maxLineWidth = 0, this.resolution = i, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_ = null, this.bufferedMaxExtent_ = null, this.instructions = [], this.coordinates = [], this.tmpCoordinate_ = [], this.hitDetectionInstructions = [], this.state = /** @type {import("../canvas.js").FillStrokeState} */
      {};
    }
    /**
     * @protected
     * @param {Array<number>} dashArray Dash array.
     * @return {Array<number>} Dash array with pixel ratio applied
     */
    applyPixelRatio(t) {
      const e = this.pixelRatio;
      return e == 1 ? t : t.map(function(i) {
        return i * e;
      });
    }
    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} stride Stride.
     * @protected
     * @return {number} My end
     */
    appendFlatPointCoordinates(t, e) {
      const i = this.getBufferedMaxExtent(), s = this.tmpCoordinate_, r = this.coordinates;
      let o = r.length;
      for (let a = 0, l = t.length; a < l; a += e)
        s[0] = t[a], s[1] = t[a + 1], ni(i, s) && (r[o++] = s[0], r[o++] = s[1]);
      return o;
    }
    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {boolean} closed Last input coordinate equals first.
     * @param {boolean} skipFirst Skip first coordinate.
     * @protected
     * @return {number} My end.
     */
    appendFlatLineCoordinates(t, e, i, s, r, o) {
      const a = this.coordinates;
      let l = a.length;
      const h = this.getBufferedMaxExtent();
      o && (e += s);
      let c = t[e], u = t[e + 1];
      const d = this.tmpCoordinate_;
      let f = !0, g, p, _;
      for (g = e + s; g < i; g += s)
        d[0] = t[g], d[1] = t[g + 1], _ = Ks(h, d), _ !== p ? (f && (a[l++] = c, a[l++] = u, f = !1), a[l++] = d[0], a[l++] = d[1]) : _ === ut.INTERSECTING ? (a[l++] = d[0], a[l++] = d[1], f = !1) : f = !0, c = d[0], u = d[1], p = _;
      return (r && f || g === e + s) && (a[l++] = c, a[l++] = u), l;
    }
    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {Array<number>} builderEnds Builder ends.
     * @return {number} Offset.
     */
    drawCustomCoordinates_(t, e, i, s, r) {
      for (let o = 0, a = i.length; o < a; ++o) {
        const l = i[o], h = this.appendFlatLineCoordinates(
          t,
          e,
          l,
          s,
          !1,
          !1
        );
        r.push(h), e = l;
      }
      return e;
    }
    /**
     * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {Function} renderer Renderer.
     * @param {Function} hitDetectionRenderer Renderer.
     * @param {number} [index] Render order index.
     * @override
     */
    drawCustom(t, e, i, s, r) {
      this.beginGeometry(t, e, r);
      const o = t.getType(), a = t.getStride(), l = this.coordinates.length;
      let h, c, u, d, f;
      switch (o) {
        case "MultiPolygon":
          h = /** @type {import("../../geom/MultiPolygon.js").default} */
          t.getOrientedFlatCoordinates(), d = [];
          const g = (
            /** @type {import("../../geom/MultiPolygon.js").default} */
            t.getEndss()
          );
          f = 0;
          for (let p = 0, _ = g.length; p < _; ++p) {
            const m = [];
            f = this.drawCustomCoordinates_(
              h,
              f,
              g[p],
              a,
              m
            ), d.push(m);
          }
          this.instructions.push([
            N.CUSTOM,
            l,
            d,
            t,
            i,
            rl,
            r
          ]), this.hitDetectionInstructions.push([
            N.CUSTOM,
            l,
            d,
            t,
            s || i,
            rl,
            r
          ]);
          break;
        case "Polygon":
        case "MultiLineString":
          u = [], h = o == "Polygon" ? (
            /** @type {import("../../geom/Polygon.js").default} */
            t.getOrientedFlatCoordinates()
          ) : t.getFlatCoordinates(), f = this.drawCustomCoordinates_(
            h,
            0,
            /** @type {import("../../geom/Polygon.js").default|import("../../geom/MultiLineString.js").default} */
            t.getEnds(),
            a,
            u
          ), this.instructions.push([
            N.CUSTOM,
            l,
            u,
            t,
            i,
            Qn,
            r
          ]), this.hitDetectionInstructions.push([
            N.CUSTOM,
            l,
            u,
            t,
            s || i,
            Qn,
            r
          ]);
          break;
        case "LineString":
        case "Circle":
          h = t.getFlatCoordinates(), c = this.appendFlatLineCoordinates(
            h,
            0,
            h.length,
            a,
            !1,
            !1
          ), this.instructions.push([
            N.CUSTOM,
            l,
            c,
            t,
            i,
            hi,
            r
          ]), this.hitDetectionInstructions.push([
            N.CUSTOM,
            l,
            c,
            t,
            s || i,
            hi,
            r
          ]);
          break;
        case "MultiPoint":
          h = t.getFlatCoordinates(), c = this.appendFlatPointCoordinates(h, a), c > l && (this.instructions.push([
            N.CUSTOM,
            l,
            c,
            t,
            i,
            hi,
            r
          ]), this.hitDetectionInstructions.push([
            N.CUSTOM,
            l,
            c,
            t,
            s || i,
            hi,
            r
          ]));
          break;
        case "Point":
          h = t.getFlatCoordinates(), this.coordinates.push(h[0], h[1]), c = this.coordinates.length, this.instructions.push([
            N.CUSTOM,
            l,
            c,
            t,
            i,
            void 0,
            r
          ]), this.hitDetectionInstructions.push([
            N.CUSTOM,
            l,
            c,
            t,
            s || i,
            void 0,
            r
          ]);
          break;
      }
      this.endGeometry(e);
    }
    /**
     * @protected
     * @param {import("../../geom/Geometry").default|import("../Feature.js").default} geometry The geometry.
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {number} index Render order index
     */
    beginGeometry(t, e, i) {
      this.beginGeometryInstruction1_ = [
        N.BEGIN_GEOMETRY,
        e,
        0,
        t,
        i
      ], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [
        N.BEGIN_GEOMETRY,
        e,
        0,
        t,
        i
      ], this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
    }
    /**
     * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
     */
    finish() {
      return {
        instructions: this.instructions,
        hitDetectionInstructions: this.hitDetectionInstructions,
        coordinates: this.coordinates
      };
    }
    /**
     * Reverse the hit detection instructions.
     */
    reverseHitDetectionInstructions() {
      const t = this.hitDetectionInstructions;
      t.reverse();
      let e;
      const i = t.length;
      let s, r, o = -1;
      for (e = 0; e < i; ++e)
        s = t[e], r = /** @type {import("./Instruction.js").default} */
        s[0], r == N.END_GEOMETRY ? o = e : r == N.BEGIN_GEOMETRY && (s[2] = e, Rc(this.hitDetectionInstructions, o, e), o = -1);
    }
    /**
     * @param {import("../../style/Fill.js").default} fillStyle Fill style.
     * @param {import('../canvas.js').FillStrokeState} [state] State.
     * @return {import('../canvas.js').FillStrokeState} State.
     */
    fillStyleToState(t, e = (
      /** @type {import('../canvas.js').FillStrokeState} */
      {}
    )) {
      if (t) {
        const i = t.getColor();
        e.fillPatternScale = i && typeof i == "object" && "src" in i ? this.pixelRatio : 1, e.fillStyle = qt(
          i || Lt
        );
      } else
        e.fillStyle = void 0;
      return e;
    }
    /**
     * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
     * @param {import("../canvas.js").FillStrokeState} state State.
     * @return {import("../canvas.js").FillStrokeState} State.
     */
    strokeStyleToState(t, e = (
      /** @type {import('../canvas.js').FillStrokeState} */
      {}
    )) {
      if (t) {
        const i = t.getColor();
        e.strokeStyle = qt(
          i || sn
        );
        const s = t.getLineCap();
        e.lineCap = s !== void 0 ? s : _i;
        const r = t.getLineDash();
        e.lineDash = r ? r.slice() : he;
        const o = t.getLineDashOffset();
        e.lineDashOffset = o || ce;
        const a = t.getLineJoin();
        e.lineJoin = a !== void 0 ? a : mi;
        const l = t.getWidth();
        e.lineWidth = l !== void 0 ? l : on;
        const h = t.getMiterLimit();
        e.miterLimit = h !== void 0 ? h : nn, e.lineWidth > this.maxLineWidth && (this.maxLineWidth = e.lineWidth, this.bufferedMaxExtent_ = null);
      } else
        e.strokeStyle = void 0, e.lineCap = void 0, e.lineDash = null, e.lineDashOffset = void 0, e.lineJoin = void 0, e.lineWidth = void 0, e.miterLimit = void 0;
      return e;
    }
    /**
     * @param {import("../../style/Fill.js").default} fillStyle Fill style.
     * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
     * @override
     */
    setFillStrokeStyle(t, e) {
      const i = this.state;
      this.fillStyleToState(t, i), this.strokeStyleToState(e, i);
    }
    /**
     * @param {import("../canvas.js").FillStrokeState} state State.
     * @return {Array<*>} Fill instruction.
     */
    createFill(t) {
      const e = t.fillStyle, i = [N.SET_FILL_STYLE, e];
      return typeof e != "string" && i.push(t.fillPatternScale), i;
    }
    /**
     * @param {import("../canvas.js").FillStrokeState} state State.
     */
    applyStroke(t) {
      this.instructions.push(this.createStroke(t));
    }
    /**
     * @param {import("../canvas.js").FillStrokeState} state State.
     * @return {Array<*>} Stroke instruction.
     */
    createStroke(t) {
      return [
        N.SET_STROKE_STYLE,
        t.strokeStyle,
        t.lineWidth * this.pixelRatio,
        t.lineCap,
        t.lineJoin,
        t.miterLimit,
        t.lineDash ? this.applyPixelRatio(t.lineDash) : null,
        t.lineDashOffset * this.pixelRatio
      ];
    }
    /**
     * @param {import("../canvas.js").FillStrokeState} state State.
     * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState):Array<*>} createFill Create fill.
     */
    updateFillStyle(t, e) {
      const i = t.fillStyle;
      (typeof i != "string" || t.currentFillStyle != i) && (this.instructions.push(e.call(this, t)), t.currentFillStyle = i);
    }
    /**
     * @param {import("../canvas.js").FillStrokeState} state State.
     * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState): void} applyStroke Apply stroke.
     */
    updateStrokeStyle(t, e) {
      const i = t.strokeStyle, s = t.lineCap, r = t.lineDash, o = t.lineDashOffset, a = t.lineJoin, l = t.lineWidth, h = t.miterLimit;
      (t.currentStrokeStyle != i || t.currentLineCap != s || r != t.currentLineDash && !ye(t.currentLineDash, r) || t.currentLineDashOffset != o || t.currentLineJoin != a || t.currentLineWidth != l || t.currentMiterLimit != h) && (e.call(this, t), t.currentStrokeStyle = i, t.currentLineCap = s, t.currentLineDash = r, t.currentLineDashOffset = o, t.currentLineJoin = a, t.currentLineWidth = l, t.currentMiterLimit = h);
    }
    /**
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     */
    endGeometry(t) {
      this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
      const e = [N.END_GEOMETRY, t];
      this.instructions.push(e), this.hitDetectionInstructions.push(e);
    }
    /**
     * Get the buffered rendering extent.  Rendering will be clipped to the extent
     * provided to the constructor.  To account for symbolizers that may intersect
     * this extent, we calculate a buffered extent (e.g. based on stroke width).
     * @return {import("../../extent.js").Extent} The buffered rendering extent.
     * @protected
     */
    getBufferedMaxExtent() {
      if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = xa(this.maxExtent), this.maxLineWidth > 0)) {
        const t = this.resolution * (this.maxLineWidth + 1) / 2;
        Us(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
      }
      return this.bufferedMaxExtent_;
    }
  }
  const fn = fm;
  class gm extends fn {
    /**
     * @param {number} tolerance Tolerance.
     * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     */
    constructor(t, e, i, s) {
      super(t, e, i, s), this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
    }
    /**
     * @param {import("../../geom/Point.js").default|import("../Feature.js").default} pointGeometry Point geometry.
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     * @override
     */
    drawPoint(t, e, i) {
      if (!this.image_ || this.maxExtent && !ni(this.maxExtent, t.getFlatCoordinates()))
        return;
      this.beginGeometry(t, e, i);
      const s = t.getFlatCoordinates(), r = t.getStride(), o = this.coordinates.length, a = this.appendFlatPointCoordinates(s, r);
      this.instructions.push([
        N.DRAW_IMAGE,
        o,
        a,
        this.image_,
        // Remaining arguments to DRAW_IMAGE are in alphabetical order
        this.anchorX_ * this.imagePixelRatio_,
        this.anchorY_ * this.imagePixelRatio_,
        Math.ceil(this.height_ * this.imagePixelRatio_),
        this.opacity_,
        this.originX_ * this.imagePixelRatio_,
        this.originY_ * this.imagePixelRatio_,
        this.rotateWithView_,
        this.rotation_,
        [
          this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
          this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
        ],
        Math.ceil(this.width_ * this.imagePixelRatio_),
        this.declutterMode_,
        this.declutterImageWithText_
      ]), this.hitDetectionInstructions.push([
        N.DRAW_IMAGE,
        o,
        a,
        this.hitDetectionImage_,
        // Remaining arguments to DRAW_IMAGE are in alphabetical order
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_
      ]), this.endGeometry(e);
    }
    /**
     * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} multiPointGeometry MultiPoint geometry.
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     * @override
     */
    drawMultiPoint(t, e, i) {
      if (!this.image_)
        return;
      this.beginGeometry(t, e, i);
      const s = t.getFlatCoordinates(), r = [];
      for (let l = 0, h = s.length; l < h; l += t.getStride())
        (!this.maxExtent || ni(this.maxExtent, s.slice(l, l + 2))) && r.push(
          s[l],
          s[l + 1]
        );
      const o = this.coordinates.length, a = this.appendFlatPointCoordinates(r, 2);
      this.instructions.push([
        N.DRAW_IMAGE,
        o,
        a,
        this.image_,
        // Remaining arguments to DRAW_IMAGE are in alphabetical order
        this.anchorX_ * this.imagePixelRatio_,
        this.anchorY_ * this.imagePixelRatio_,
        Math.ceil(this.height_ * this.imagePixelRatio_),
        this.opacity_,
        this.originX_ * this.imagePixelRatio_,
        this.originY_ * this.imagePixelRatio_,
        this.rotateWithView_,
        this.rotation_,
        [
          this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
          this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
        ],
        Math.ceil(this.width_ * this.imagePixelRatio_),
        this.declutterMode_,
        this.declutterImageWithText_
      ]), this.hitDetectionInstructions.push([
        N.DRAW_IMAGE,
        o,
        a,
        this.hitDetectionImage_,
        // Remaining arguments to DRAW_IMAGE are in alphabetical order
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_
      ]), this.endGeometry(e);
    }
    /**
     * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
     * @override
     */
    finish() {
      return this.reverseHitDetectionInstructions(), this.anchorX_ = void 0, this.anchorY_ = void 0, this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.height_ = void 0, this.scale_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.width_ = void 0, super.finish();
    }
    /**
     * @param {import("../../style/Image.js").default} imageStyle Image style.
     * @param {Object} [sharedData] Shared data.
     * @override
     */
    setImageStyle(t, e) {
      const i = t.getAnchor(), s = t.getSize(), r = t.getOrigin();
      this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio), this.anchorX_ = i[0], this.anchorY_ = i[1], this.hitDetectionImage_ = t.getHitDetectionImage(), this.image_ = t.getImage(this.pixelRatio), this.height_ = s[1], this.opacity_ = t.getOpacity(), this.originX_ = r[0], this.originY_ = r[1], this.rotateWithView_ = t.getRotateWithView(), this.rotation_ = t.getRotation(), this.scale_ = t.getScaleArray(), this.width_ = s[0], this.declutterMode_ = t.getDeclutterMode(), this.declutterImageWithText_ = e;
    }
  }
  const _m = gm;
  class mm extends fn {
    /**
     * @param {number} tolerance Tolerance.
     * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     */
    constructor(t, e, i, s) {
      super(t, e, i, s);
    }
    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @private
     * @return {number} end.
     */
    drawFlatCoordinates_(t, e, i, s) {
      const r = this.coordinates.length, o = this.appendFlatLineCoordinates(
        t,
        e,
        i,
        s,
        !1,
        !1
      ), a = [
        N.MOVE_TO_LINE_TO,
        r,
        o
      ];
      return this.instructions.push(a), this.hitDetectionInstructions.push(a), i;
    }
    /**
     * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} lineStringGeometry Line string geometry.
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     * @override
     */
    drawLineString(t, e, i) {
      const s = this.state, r = s.strokeStyle, o = s.lineWidth;
      if (r === void 0 || o === void 0)
        return;
      this.updateStrokeStyle(s, this.applyStroke), this.beginGeometry(t, e, i), this.hitDetectionInstructions.push(
        [
          N.SET_STROKE_STYLE,
          s.strokeStyle,
          s.lineWidth,
          s.lineCap,
          s.lineJoin,
          s.miterLimit,
          he,
          ce
        ],
        Ze
      );
      const a = t.getFlatCoordinates(), l = t.getStride();
      this.drawFlatCoordinates_(
        a,
        0,
        a.length,
        l
      ), this.hitDetectionInstructions.push(Ae), this.endGeometry(e);
    }
    /**
     * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} multiLineStringGeometry MultiLineString geometry.
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     * @override
     */
    drawMultiLineString(t, e, i) {
      const s = this.state, r = s.strokeStyle, o = s.lineWidth;
      if (r === void 0 || o === void 0)
        return;
      this.updateStrokeStyle(s, this.applyStroke), this.beginGeometry(t, e, i), this.hitDetectionInstructions.push(
        [
          N.SET_STROKE_STYLE,
          s.strokeStyle,
          s.lineWidth,
          s.lineCap,
          s.lineJoin,
          s.miterLimit,
          he,
          ce
        ],
        Ze
      );
      const a = t.getEnds(), l = t.getFlatCoordinates(), h = t.getStride();
      let c = 0;
      for (let u = 0, d = a.length; u < d; ++u)
        c = this.drawFlatCoordinates_(
          l,
          c,
          /** @type {number} */
          a[u],
          h
        );
      this.hitDetectionInstructions.push(Ae), this.endGeometry(e);
    }
    /**
     * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
     * @override
     */
    finish() {
      const t = this.state;
      return t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(Ae), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
    }
    /**
     * @param {import("../canvas.js").FillStrokeState} state State.
     * @override
     */
    applyStroke(t) {
      t.lastStroke != null && t.lastStroke != this.coordinates.length && (this.instructions.push(Ae), t.lastStroke = this.coordinates.length), t.lastStroke = 0, super.applyStroke(t), this.instructions.push(Ze);
    }
  }
  const pm = mm;
  class ym extends fn {
    /**
     * @param {number} tolerance Tolerance.
     * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     */
    constructor(t, e, i, s) {
      super(t, e, i, s);
    }
    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @private
     * @return {number} End.
     */
    drawFlatCoordinatess_(t, e, i, s) {
      const r = this.state, o = r.fillStyle !== void 0, a = r.strokeStyle !== void 0, l = i.length;
      this.instructions.push(Ze), this.hitDetectionInstructions.push(Ze);
      for (let h = 0; h < l; ++h) {
        const c = i[h], u = this.coordinates.length, d = this.appendFlatLineCoordinates(
          t,
          e,
          c,
          s,
          !0,
          !a
        ), f = [
          N.MOVE_TO_LINE_TO,
          u,
          d
        ];
        this.instructions.push(f), this.hitDetectionInstructions.push(f), a && (this.instructions.push(Nh), this.hitDetectionInstructions.push(Nh)), e = c;
      }
      return o && (this.instructions.push(ws), this.hitDetectionInstructions.push(ws)), a && (this.instructions.push(Ae), this.hitDetectionInstructions.push(Ae)), e;
    }
    /**
     * @param {import("../../geom/Circle.js").default} circleGeometry Circle geometry.
     * @param {import("../../Feature.js").default} feature Feature.
     * @param {number} [index] Render order index.
     * @override
     */
    drawCircle(t, e, i) {
      const s = this.state, r = s.fillStyle, o = s.strokeStyle;
      if (r === void 0 && o === void 0)
        return;
      this.setFillStrokeStyles_(), this.beginGeometry(t, e, i), s.fillStyle !== void 0 && this.hitDetectionInstructions.push([
        N.SET_FILL_STYLE,
        Lt
      ]), s.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
        N.SET_STROKE_STYLE,
        s.strokeStyle,
        s.lineWidth,
        s.lineCap,
        s.lineJoin,
        s.miterLimit,
        he,
        ce
      ]);
      const a = t.getFlatCoordinates(), l = t.getStride(), h = this.coordinates.length;
      this.appendFlatLineCoordinates(
        a,
        0,
        a.length,
        l,
        !1,
        !1
      );
      const c = [N.CIRCLE, h];
      this.instructions.push(Ze, c), this.hitDetectionInstructions.push(Ze, c), s.fillStyle !== void 0 && (this.instructions.push(ws), this.hitDetectionInstructions.push(ws)), s.strokeStyle !== void 0 && (this.instructions.push(Ae), this.hitDetectionInstructions.push(Ae)), this.endGeometry(e);
    }
    /**
     * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} polygonGeometry Polygon geometry.
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     * @override
     */
    drawPolygon(t, e, i) {
      const s = this.state, r = s.fillStyle, o = s.strokeStyle;
      if (r === void 0 && o === void 0)
        return;
      this.setFillStrokeStyles_(), this.beginGeometry(t, e, i), s.fillStyle !== void 0 && this.hitDetectionInstructions.push([
        N.SET_FILL_STYLE,
        Lt
      ]), s.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
        N.SET_STROKE_STYLE,
        s.strokeStyle,
        s.lineWidth,
        s.lineCap,
        s.lineJoin,
        s.miterLimit,
        he,
        ce
      ]);
      const a = t.getEnds(), l = t.getOrientedFlatCoordinates(), h = t.getStride();
      this.drawFlatCoordinatess_(
        l,
        0,
        /** @type {Array<number>} */
        a,
        h
      ), this.endGeometry(e);
    }
    /**
     * @param {import("../../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     * @override
     */
    drawMultiPolygon(t, e, i) {
      const s = this.state, r = s.fillStyle, o = s.strokeStyle;
      if (r === void 0 && o === void 0)
        return;
      this.setFillStrokeStyles_(), this.beginGeometry(t, e, i), s.fillStyle !== void 0 && this.hitDetectionInstructions.push([
        N.SET_FILL_STYLE,
        Lt
      ]), s.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
        N.SET_STROKE_STYLE,
        s.strokeStyle,
        s.lineWidth,
        s.lineCap,
        s.lineJoin,
        s.miterLimit,
        he,
        ce
      ]);
      const a = t.getEndss(), l = t.getOrientedFlatCoordinates(), h = t.getStride();
      let c = 0;
      for (let u = 0, d = a.length; u < d; ++u)
        c = this.drawFlatCoordinatess_(
          l,
          c,
          a[u],
          h
        );
      this.endGeometry(e);
    }
    /**
     * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
     * @override
     */
    finish() {
      this.reverseHitDetectionInstructions(), this.state = null;
      const t = this.tolerance;
      if (t !== 0) {
        const e = this.coordinates;
        for (let i = 0, s = e.length; i < s; ++i)
          e[i] = We(e[i], t);
      }
      return super.finish();
    }
    /**
     * @private
     */
    setFillStrokeStyles_() {
      const t = this.state;
      this.updateFillStyle(t, this.createFill), this.updateStrokeStyle(t, this.applyStroke);
    }
  }
  const Gh = ym;
  function Em(n, t, e, i, s) {
    const r = [];
    let o = e, a = 0, l = t.slice(e, 2);
    for (; a < n && o + s < i; ) {
      const [h, c] = l.slice(-2), u = t[o + s], d = t[o + s + 1], f = Math.sqrt(
        (u - h) * (u - h) + (d - c) * (d - c)
      );
      if (a += f, a >= n) {
        const g = (n - a + f) / f, p = Pt(h, u, g), _ = Pt(c, d, g);
        l.push(p, _), r.push(l), l = [p, _], a == n && (o += s), a = 0;
      } else if (a < n)
        l.push(
          t[o + s],
          t[o + s + 1]
        ), o += s;
      else {
        const g = f - a, p = Pt(h, u, g / f), _ = Pt(c, d, g / f);
        l.push(p, _), r.push(l), l = [p, _], a = 0, o += s;
      }
    }
    return a > 0 && r.push(l), r;
  }
  function xm(n, t, e, i, s) {
    let r = e, o = e, a = 0, l = 0, h = e, c, u, d, f, g, p, _, m, y, w;
    for (u = e; u < i; u += s) {
      const E = t[u], x = t[u + 1];
      g !== void 0 && (y = E - g, w = x - p, f = Math.sqrt(y * y + w * w), _ !== void 0 && (l += d, c = Math.acos((_ * y + m * w) / (d * f)), c > n && (l > a && (a = l, r = h, o = u), l = 0, h = u - s)), d = f, _ = y, m = w), g = E, p = x;
    }
    return l += f, l > a ? [h, u] : [r, o];
  }
  const Cs = {
    left: 0,
    center: 0.5,
    right: 1,
    top: 0,
    middle: 0.5,
    hanging: 0.2,
    alphabetic: 0.8,
    ideographic: 0.8,
    bottom: 1
  };
  class wm extends fn {
    /**
     * @param {number} tolerance Tolerance.
     * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     */
    constructor(t, e, i, s) {
      super(t, e, i, s), this.labels_ = null, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textKeepUpright_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.fillStates[Lt] = { fillStyle: Lt }, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = /** @type {import("../canvas.js").TextState} */
      {}, this.textStates = {}, this.textKey_ = "", this.fillKey_ = "", this.strokeKey_ = "", this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
    }
    /**
     * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
     * @override
     */
    finish() {
      const t = super.finish();
      return t.textStates = this.textStates, t.fillStates = this.fillStates, t.strokeStates = this.strokeStates, t;
    }
    /**
     * @param {import("../../geom/SimpleGeometry.js").default|import("../Feature.js").default} geometry Geometry.
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {number} [index] Render order index.
     * @override
     */
    drawText(t, e, i) {
      const s = this.textFillState_, r = this.textStrokeState_, o = this.textState_;
      if (this.text_ === "" || !o || !s && !r)
        return;
      const a = this.coordinates;
      let l = a.length;
      const h = t.getType();
      let c = null, u = t.getStride();
      if (o.placement === "line" && (h == "LineString" || h == "MultiLineString" || h == "Polygon" || h == "MultiPolygon")) {
        if (!Rt(this.maxExtent, t.getExtent()))
          return;
        let d;
        if (c = t.getFlatCoordinates(), h == "LineString")
          d = [c.length];
        else if (h == "MultiLineString")
          d = /** @type {import("../../geom/MultiLineString.js").default} */
          t.getEnds();
        else if (h == "Polygon")
          d = /** @type {import("../../geom/Polygon.js").default} */
          t.getEnds().slice(0, 1);
        else if (h == "MultiPolygon") {
          const _ = (
            /** @type {import("../../geom/MultiPolygon.js").default} */
            t.getEndss()
          );
          d = [];
          for (let m = 0, y = _.length; m < y; ++m)
            d.push(_[m][0]);
        }
        this.beginGeometry(t, e, i);
        const f = o.repeat, g = f ? void 0 : o.textAlign;
        let p = 0;
        for (let _ = 0, m = d.length; _ < m; ++_) {
          let y;
          f ? y = Em(
            f * this.resolution,
            c,
            p,
            d[_],
            u
          ) : y = [c.slice(p, d[_])];
          for (let w = 0, E = y.length; w < E; ++w) {
            const x = y[w];
            let C = 0, T = x.length;
            if (g == null) {
              const S = xm(
                o.maxAngle,
                x,
                0,
                x.length,
                2
              );
              C = S[0], T = S[1];
            }
            for (let S = C; S < T; S += u)
              a.push(x[S], x[S + 1]);
            const R = a.length;
            p = d[_], this.drawChars_(l, R), l = R;
          }
        }
        this.endGeometry(e);
      } else {
        let d = o.overflow ? null : [];
        switch (h) {
          case "Point":
          case "MultiPoint":
            c = /** @type {import("../../geom/MultiPoint.js").default} */
            t.getFlatCoordinates();
            break;
          case "LineString":
            c = /** @type {import("../../geom/LineString.js").default} */
            t.getFlatMidpoint();
            break;
          case "Circle":
            c = /** @type {import("../../geom/Circle.js").default} */
            t.getCenter();
            break;
          case "MultiLineString":
            c = /** @type {import("../../geom/MultiLineString.js").default} */
            t.getFlatMidpoints(), u = 2;
            break;
          case "Polygon":
            c = /** @type {import("../../geom/Polygon.js").default} */
            t.getFlatInteriorPoint(), o.overflow || d.push(c[2] / this.resolution), u = 3;
            break;
          case "MultiPolygon":
            const E = (
              /** @type {import("../../geom/MultiPolygon.js").default} */
              t.getFlatInteriorPoints()
            );
            c = [];
            for (let x = 0, C = E.length; x < C; x += 3)
              o.overflow || d.push(E[x + 2] / this.resolution), c.push(E[x], E[x + 1]);
            if (c.length === 0)
              return;
            u = 2;
            break;
        }
        const f = this.appendFlatPointCoordinates(c, u);
        if (f === l)
          return;
        if (d && (f - l) / 2 !== c.length / u) {
          let E = l / 2;
          d = d.filter((x, C) => {
            const T = a[(E + C) * 2] === c[C * u] && a[(E + C) * 2 + 1] === c[C * u + 1];
            return T || --E, T;
          });
        }
        this.saveTextStates_();
        const g = o.backgroundFill ? this.createFill(this.fillStyleToState(o.backgroundFill)) : null, p = o.backgroundStroke ? this.createStroke(this.strokeStyleToState(o.backgroundStroke)) : null;
        this.beginGeometry(t, e, i);
        let _ = o.padding;
        if (_ != Ke && (o.scale[0] < 0 || o.scale[1] < 0)) {
          let E = o.padding[0], x = o.padding[1], C = o.padding[2], T = o.padding[3];
          o.scale[0] < 0 && (x = -x, T = -T), o.scale[1] < 0 && (E = -E, C = -C), _ = [E, x, C, T];
        }
        const m = this.pixelRatio;
        this.instructions.push([
          N.DRAW_IMAGE,
          l,
          f,
          null,
          NaN,
          NaN,
          NaN,
          1,
          0,
          0,
          this.textRotateWithView_,
          this.textRotation_,
          [1, 1],
          NaN,
          this.declutterMode_,
          this.declutterImageWithText_,
          _ == Ke ? Ke : _.map(function(E) {
            return E * m;
          }),
          g,
          p,
          this.text_,
          this.textKey_,
          this.strokeKey_,
          this.fillKey_,
          this.textOffsetX_,
          this.textOffsetY_,
          d
        ]);
        const y = 1 / m, w = g ? g.slice(0) : null;
        w && (w[1] = Lt), this.hitDetectionInstructions.push([
          N.DRAW_IMAGE,
          l,
          f,
          null,
          NaN,
          NaN,
          NaN,
          1,
          0,
          0,
          this.textRotateWithView_,
          this.textRotation_,
          [y, y],
          NaN,
          this.declutterMode_,
          this.declutterImageWithText_,
          _,
          w,
          p,
          this.text_,
          this.textKey_,
          this.strokeKey_,
          this.fillKey_ ? Lt : this.fillKey_,
          this.textOffsetX_,
          this.textOffsetY_,
          d
        ]), this.endGeometry(e);
      }
    }
    /**
     * @private
     */
    saveTextStates_() {
      const t = this.textStrokeState_, e = this.textState_, i = this.textFillState_, s = this.strokeKey_;
      t && (s in this.strokeStates || (this.strokeStates[s] = {
        strokeStyle: t.strokeStyle,
        lineCap: t.lineCap,
        lineDashOffset: t.lineDashOffset,
        lineWidth: t.lineWidth,
        lineJoin: t.lineJoin,
        miterLimit: t.miterLimit,
        lineDash: t.lineDash
      }));
      const r = this.textKey_;
      r in this.textStates || (this.textStates[r] = {
        font: e.font,
        textAlign: e.textAlign || rn,
        justify: e.justify,
        textBaseline: e.textBaseline || ds,
        scale: e.scale
      });
      const o = this.fillKey_;
      i && (o in this.fillStates || (this.fillStates[o] = {
        fillStyle: i.fillStyle
      }));
    }
    /**
     * @private
     * @param {number} begin Begin.
     * @param {number} end End.
     */
    drawChars_(t, e) {
      const i = this.textStrokeState_, s = this.textState_, r = this.strokeKey_, o = this.textKey_, a = this.fillKey_;
      this.saveTextStates_();
      const l = this.pixelRatio, h = Cs[s.textBaseline], c = this.textOffsetY_ * l, u = this.text_, d = i ? i.lineWidth * Math.abs(s.scale[0]) / 2 : 0;
      this.instructions.push([
        N.DRAW_CHARS,
        t,
        e,
        h,
        s.overflow,
        a,
        s.maxAngle,
        l,
        c,
        r,
        d * l,
        u,
        o,
        1,
        this.declutterMode_,
        this.textKeepUpright_
      ]), this.hitDetectionInstructions.push([
        N.DRAW_CHARS,
        t,
        e,
        h,
        s.overflow,
        a && Lt,
        s.maxAngle,
        l,
        c,
        r,
        d * l,
        u,
        o,
        1 / l,
        this.declutterMode_,
        this.textKeepUpright_
      ]);
    }
    /**
     * @param {import("../../style/Text.js").default} textStyle Text style.
     * @param {Object} [sharedData] Shared data.
     * @override
     */
    setTextStyle(t, e) {
      let i, s, r;
      if (!t)
        this.text_ = "";
      else {
        const o = t.getFill();
        o ? (s = this.textFillState_, s || (s = /** @type {import("../canvas.js").FillState} */
        {}, this.textFillState_ = s), s.fillStyle = qt(
          o.getColor() || Lt
        )) : (s = null, this.textFillState_ = s);
        const a = t.getStroke();
        if (!a)
          r = null, this.textStrokeState_ = r;
        else {
          r = this.textStrokeState_, r || (r = /** @type {import("../canvas.js").StrokeState} */
          {}, this.textStrokeState_ = r);
          const p = a.getLineDash(), _ = a.getLineDashOffset(), m = a.getWidth(), y = a.getMiterLimit();
          r.lineCap = a.getLineCap() || _i, r.lineDash = p ? p.slice() : he, r.lineDashOffset = _ === void 0 ? ce : _, r.lineJoin = a.getLineJoin() || mi, r.lineWidth = m === void 0 ? on : m, r.miterLimit = y === void 0 ? nn : y, r.strokeStyle = qt(
            a.getColor() || sn
          );
        }
        i = this.textState_;
        const l = t.getFont() || Wl;
        ag(l);
        const h = t.getScaleArray();
        i.overflow = t.getOverflow(), i.font = l, i.maxAngle = t.getMaxAngle(), i.placement = t.getPlacement(), i.textAlign = t.getTextAlign(), i.repeat = t.getRepeat(), i.justify = t.getJustify(), i.textBaseline = t.getTextBaseline() || ds, i.backgroundFill = t.getBackgroundFill(), i.backgroundStroke = t.getBackgroundStroke(), i.padding = t.getPadding() || Ke, i.scale = h === void 0 ? [1, 1] : h;
        const c = t.getOffsetX(), u = t.getOffsetY(), d = t.getRotateWithView(), f = t.getKeepUpright(), g = t.getRotation();
        this.text_ = t.getText() || "", this.textOffsetX_ = c === void 0 ? 0 : c, this.textOffsetY_ = u === void 0 ? 0 : u, this.textRotateWithView_ = d === void 0 ? !1 : d, this.textKeepUpright_ = f === void 0 ? !0 : f, this.textRotation_ = g === void 0 ? 0 : g, this.strokeKey_ = r ? (typeof r.strokeStyle == "string" ? r.strokeStyle : j(r.strokeStyle)) + r.lineCap + r.lineDashOffset + "|" + r.lineWidth + r.lineJoin + r.miterLimit + "[" + r.lineDash.join() + "]" : "", this.textKey_ = i.font + i.scale + (i.textAlign || "?") + (i.repeat || "?") + (i.justify || "?") + (i.textBaseline || "?"), this.fillKey_ = s && s.fillStyle ? typeof s.fillStyle == "string" ? s.fillStyle : "|" + j(s.fillStyle) : "";
      }
      this.declutterMode_ = t.getDeclutterMode(), this.declutterImageWithText_ = e;
    }
  }
  const Cm = {
    Circle: Gh,
    Default: fn,
    Image: _m,
    LineString: pm,
    Polygon: Gh,
    Text: wm
  };
  class vm {
    /**
     * @param {number} tolerance Tolerance.
     * @param {import("../../extent.js").Extent} maxExtent Max extent.
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     */
    constructor(t, e, i, s) {
      this.tolerance_ = t, this.maxExtent_ = e, this.pixelRatio_ = s, this.resolution_ = i, this.buildersByZIndex_ = {};
    }
    /**
     * @return {!Object<string, !Object<import("../canvas.js").BuilderType, import("./Builder.js").SerializableInstructions>>} The serializable instructions
     */
    finish() {
      const t = {};
      for (const e in this.buildersByZIndex_) {
        t[e] = t[e] || {};
        const i = this.buildersByZIndex_[e];
        for (const s in i) {
          const r = i[s].finish();
          t[e][s] = r;
        }
      }
      return t;
    }
    /**
     * @param {number|undefined} zIndex Z index.
     * @param {import("../canvas.js").BuilderType} builderType Replay type.
     * @return {import("../VectorContext.js").default} Replay.
     */
    getBuilder(t, e) {
      const i = t !== void 0 ? t.toString() : "0";
      let s = this.buildersByZIndex_[i];
      s === void 0 && (s = {}, this.buildersByZIndex_[i] = s);
      let r = s[e];
      if (r === void 0) {
        const o = Cm[e];
        r = new o(
          this.tolerance_,
          this.maxExtent_,
          this.resolution_,
          this.pixelRatio_
        ), s[e] = r;
      }
      return r;
    }
  }
  const Rm = vm;
  function Tm(n, t, e, i, s, r, o, a, l, h, c, u, d = !0) {
    let f = n[t], g = n[t + 1], p = 0, _ = 0, m = 0, y = 0;
    function w() {
      p = f, _ = g, t += i, f = n[t], g = n[t + 1], y += m, m = Math.sqrt((f - p) * (f - p) + (g - _) * (g - _));
    }
    do
      w();
    while (t < e - i && y + m < r);
    let E = m === 0 ? 0 : (r - y) / m;
    const x = Pt(p, f, E), C = Pt(_, g, E), T = t - i, R = y, S = r + a * l(h, s, c);
    for (; t < e - i && y + m < S; )
      w();
    E = m === 0 ? 0 : (S - y) / m;
    const L = Pt(p, f, E), A = Pt(_, g, E);
    let M = !1;
    if (d)
      if (u) {
        const W = [x, C, L, A];
        qa(W, 0, 4, 2, u, W, W), M = W[0] > W[2];
      } else
        M = x > L;
    const b = Math.PI, P = [], G = T + i === t;
    t = T, m = 0, y = R, f = n[t], g = n[t + 1];
    let O;
    if (G) {
      w(), O = Math.atan2(g - _, f - p), M && (O += O > 0 ? -b : b);
      const W = (L + x) / 2, D = (A + C) / 2;
      return P[0] = [W, D, (S - r) / 2, O, s], P;
    }
    s = s.replace(/\n/g, " ");
    for (let W = 0, D = s.length; W < D; ) {
      w();
      let X = Math.atan2(g - _, f - p);
      if (M && (X += X > 0 ? -b : b), O !== void 0) {
        let at = X - O;
        if (at += at > b ? -2 * b : at < -b ? 2 * b : 0, Math.abs(at) > o)
          return null;
      }
      O = X;
      const K = W;
      let tt = 0;
      for (; W < D; ++W) {
        const at = M ? D - W - 1 : W, bt = a * l(h, s[at], c);
        if (t + i < e && y + m < r + tt + bt / 2)
          break;
        tt += bt;
      }
      if (W === K)
        continue;
      const I = M ? s.substring(D - K, D - W) : s.substring(K, W);
      E = m === 0 ? 0 : (r + tt / 2 - y) / m;
      const ft = Pt(p, f, E), wt = Pt(_, g, E);
      P.push([ft, wt, tt / 2, X, I]), r += tt;
    }
    return P;
  }
  const Ti = Dt(), be = [], de = [], fe = [], Me = [];
  function zh(n) {
    return n[3].declutterBox;
  }
  const Wh = new RegExp(
    /* eslint-disable prettier/prettier */
    "[" + String.fromCharCode(1425) + "-" + String.fromCharCode(2303) + String.fromCharCode(64285) + "-" + String.fromCharCode(65023) + String.fromCharCode(65136) + "-" + String.fromCharCode(65276) + String.fromCharCode(67584) + "-" + String.fromCharCode(69631) + String.fromCharCode(124928) + "-" + String.fromCharCode(126975) + "]"
    /* eslint-enable prettier/prettier */
  );
  function yo(n, t) {
    return t === "start" ? t = Wh.test(n) ? "right" : "left" : t === "end" && (t = Wh.test(n) ? "left" : "right"), Cs[t];
  }
  function Sm(n, t, e) {
    return e > 0 && n.push(`
`, ""), n.push(t, ""), n;
  }
  function Im(n, t, e) {
    return e % 2 === 0 && (n += t), n;
  }
  class Lm {
    /**
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     * @param {boolean} overlaps The replay can have overlapping geometries.
     * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions.
     * @param {boolean} [deferredRendering] Enable deferred rendering.
     */
    constructor(t, e, i, s, r) {
      this.overlaps = i, this.pixelRatio = e, this.resolution = t, this.alignAndScaleFill_, this.instructions = s.instructions, this.coordinates = s.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = Bt(), this.hitDetectionInstructions = s.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = s.fillStates || {}, this.strokeStates = s.strokeStates || {}, this.textStates = s.textStates || {}, this.widths_ = {}, this.labels_ = {}, this.zIndexContext_ = r ? new yh() : null;
    }
    /**
     * @return {ZIndexContext} ZIndex context.
     */
    getZIndexContext() {
      return this.zIndexContext_;
    }
    /**
     * @param {string|Array<string>} text Text.
     * @param {string} textKey Text style key.
     * @param {string} fillKey Fill style key.
     * @param {string} strokeKey Stroke style key.
     * @return {import("../canvas.js").Label} Label.
     */
    createLabel(t, e, i, s) {
      const r = t + e + i + s;
      if (this.labels_[r])
        return this.labels_[r];
      const o = s ? this.strokeStates[s] : null, a = i ? this.fillStates[i] : null, l = this.textStates[e], h = this.pixelRatio, c = [
        l.scale[0] * h,
        l.scale[1] * h
      ], u = l.justify ? Cs[l.justify] : yo(
        Array.isArray(t) ? t[0] : t,
        l.textAlign || rn
      ), d = s && o.lineWidth ? o.lineWidth : 0, f = Array.isArray(t) ? t : String(t).split(`
`).reduce(Sm, []), { width: g, height: p, widths: _, heights: m, lineWidths: y } = hg(
        l,
        f
      ), w = g + d, E = [], x = (w + 2) * c[0], C = (p + d) * c[1], T = {
        width: x < 0 ? Math.floor(x) : Math.ceil(x),
        height: C < 0 ? Math.floor(C) : Math.ceil(C),
        contextInstructions: E
      };
      (c[0] != 1 || c[1] != 1) && E.push("scale", c), s && (E.push("strokeStyle", o.strokeStyle), E.push("lineWidth", d), E.push("lineCap", o.lineCap), E.push("lineJoin", o.lineJoin), E.push("miterLimit", o.miterLimit), E.push("setLineDash", [o.lineDash]), E.push("lineDashOffset", o.lineDashOffset)), i && E.push("fillStyle", a.fillStyle), E.push("textBaseline", "middle"), E.push("textAlign", "center");
      const R = 0.5 - u;
      let S = u * w + R * d;
      const L = [], A = [];
      let M = 0, b = 0, P = 0, G = 0, O;
      for (let W = 0, D = f.length; W < D; W += 2) {
        const X = f[W];
        if (X === `
`) {
          b += M, M = 0, S = u * w + R * d, ++G;
          continue;
        }
        const K = f[W + 1] || l.font;
        K !== O && (s && L.push("font", K), i && A.push("font", K), O = K), M = Math.max(M, m[P]);
        const tt = [
          X,
          S + R * _[P] + u * (_[P] - y[G]),
          0.5 * (d + M) + b
        ];
        S += _[P], s && L.push("strokeText", tt), i && A.push("fillText", tt), ++P;
      }
      return Array.prototype.push.apply(E, L), Array.prototype.push.apply(E, A), this.labels_[r] = T, T;
    }
    /**
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import("../../coordinate.js").Coordinate} p1 1st point of the background box.
     * @param {import("../../coordinate.js").Coordinate} p2 2nd point of the background box.
     * @param {import("../../coordinate.js").Coordinate} p3 3rd point of the background box.
     * @param {import("../../coordinate.js").Coordinate} p4 4th point of the background box.
     * @param {Array<*>} fillInstruction Fill instruction.
     * @param {Array<*>} strokeInstruction Stroke instruction.
     */
    replayTextBackground_(t, e, i, s, r, o, a) {
      t.beginPath(), t.moveTo.apply(t, e), t.lineTo.apply(t, i), t.lineTo.apply(t, s), t.lineTo.apply(t, r), t.lineTo.apply(t, e), o && (this.alignAndScaleFill_ = /** @type {number} */
      o[2], t.fillStyle = /** @type {string} */
      o[1], this.fill_(t)), a && (this.setStrokeStyle_(
        t,
        /** @type {Array<*>} */
        a
      ), t.stroke());
    }
    /**
     * @private
     * @param {number} sheetWidth Width of the sprite sheet.
     * @param {number} sheetHeight Height of the sprite sheet.
     * @param {number} centerX X.
     * @param {number} centerY Y.
     * @param {number} width Width.
     * @param {number} height Height.
     * @param {number} anchorX Anchor X.
     * @param {number} anchorY Anchor Y.
     * @param {number} originX Origin X.
     * @param {number} originY Origin Y.
     * @param {number} rotation Rotation.
     * @param {import("../../size.js").Size} scale Scale.
     * @param {boolean} snapToPixel Snap to pixel.
     * @param {Array<number>} padding Padding.
     * @param {boolean} fillStroke Background fill or stroke.
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @return {ImageOrLabelDimensions} Dimensions for positioning and decluttering the image or label.
     */
    calculateImageOrLabelDimensions_(t, e, i, s, r, o, a, l, h, c, u, d, f, g, p, _) {
      a *= d[0], l *= d[1];
      let m = i - a, y = s - l;
      const w = r + h > t ? t - h : r, E = o + c > e ? e - c : o, x = g[3] + w * d[0] + g[1], C = g[0] + E * d[1] + g[2], T = m - g[3], R = y - g[0];
      (p || u !== 0) && (be[0] = T, Me[0] = T, be[1] = R, de[1] = R, de[0] = T + x, fe[0] = de[0], fe[1] = R + C, Me[1] = fe[1]);
      let S;
      return u !== 0 ? (S = ae(
        Bt(),
        i,
        s,
        1,
        1,
        u,
        -i,
        -s
      ), dt(S, be), dt(S, de), dt(S, fe), dt(S, Me), Ce(
        Math.min(be[0], de[0], fe[0], Me[0]),
        Math.min(be[1], de[1], fe[1], Me[1]),
        Math.max(be[0], de[0], fe[0], Me[0]),
        Math.max(be[1], de[1], fe[1], Me[1]),
        Ti
      )) : Ce(
        Math.min(T, T + x),
        Math.min(R, R + C),
        Math.max(T, T + x),
        Math.max(R, R + C),
        Ti
      ), f && (m = Math.round(m), y = Math.round(y)), {
        drawImageX: m,
        drawImageY: y,
        drawImageW: w,
        drawImageH: E,
        originX: h,
        originY: c,
        declutterBox: {
          minX: Ti[0],
          minY: Ti[1],
          maxX: Ti[2],
          maxY: Ti[3],
          value: _
        },
        canvasTransform: S,
        scale: d
      };
    }
    /**
     * @private
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size.
     * @param {import("../canvas.js").Label|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} imageOrLabel Image.
     * @param {ImageOrLabelDimensions} dimensions Dimensions.
     * @param {number} opacity Opacity.
     * @param {Array<*>} fillInstruction Fill instruction.
     * @param {Array<*>} strokeInstruction Stroke instruction.
     * @return {boolean} The image or label was rendered.
     */
    replayImageOrLabel_(t, e, i, s, r, o, a) {
      const l = !!(o || a), h = s.declutterBox, c = a ? a[2] * s.scale[0] / 2 : 0;
      return h.minX - c <= e[0] && h.maxX + c >= 0 && h.minY - c <= e[1] && h.maxY + c >= 0 && (l && this.replayTextBackground_(
        t,
        be,
        de,
        fe,
        Me,
        /** @type {Array<*>} */
        o,
        /** @type {Array<*>} */
        a
      ), cg(
        t,
        s.canvasTransform,
        r,
        i,
        s.originX,
        s.originY,
        s.drawImageW,
        s.drawImageH,
        s.drawImageX,
        s.drawImageY,
        s.scale
      )), !0;
    }
    /**
     * @private
     * @param {CanvasRenderingContext2D} context Context.
     */
    fill_(t) {
      const e = this.alignAndScaleFill_;
      if (e) {
        const i = dt(this.renderedTransform_, [0, 0]), s = 512 * this.pixelRatio;
        t.save(), t.translate(i[0] % s, i[1] % s), e !== 1 && t.scale(e, e), t.rotate(this.viewRotation_);
      }
      t.fill(), e && t.restore();
    }
    /**
     * @private
     * @param {CanvasRenderingContext2D} context Context.
     * @param {Array<*>} instruction Instruction.
     */
    setStrokeStyle_(t, e) {
      t.strokeStyle = /** @type {import("../../colorlike.js").ColorLike} */
      e[1], e[1] && (t.lineWidth = /** @type {number} */
      e[2], t.lineCap = /** @type {CanvasLineCap} */
      e[3], t.lineJoin = /** @type {CanvasLineJoin} */
      e[4], t.miterLimit = /** @type {number} */
      e[5], t.lineDashOffset = /** @type {number} */
      e[7], t.setLineDash(
        /** @type {Array<number>} */
        e[6]
      ));
    }
    /**
     * @private
     * @param {string|Array<string>} text The text to draw.
     * @param {string} textKey The key of the text state.
     * @param {string} strokeKey The key for the stroke state.
     * @param {string} fillKey The key for the fill state.
     * @return {{label: import("../canvas.js").Label, anchorX: number, anchorY: number}} The text image and its anchor.
     */
    drawLabelWithPointPlacement_(t, e, i, s) {
      const r = this.textStates[e], o = this.createLabel(t, e, s, i), a = this.strokeStates[i], l = this.pixelRatio, h = yo(
        Array.isArray(t) ? t[0] : t,
        r.textAlign || rn
      ), c = Cs[r.textBaseline || ds], u = a && a.lineWidth ? a.lineWidth : 0, d = o.width / l - 2 * r.scale[0], f = h * d + 2 * (0.5 - h) * u, g = c * o.height / l + 2 * (0.5 - c) * u;
      return {
        label: o,
        anchorX: f,
        anchorY: g
      };
    }
    /**
     * @private
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size
     * @param {import("../../transform.js").Transform} transform Transform.
     * @param {Array<*>} instructions Instructions array.
     * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
     * @param {FeatureCallback<T>} [featureCallback] Feature callback.
     * @param {import("../../extent.js").Extent} [hitExtent] Only check
     *     features that intersect this extent.
     * @param {import("rbush").default<DeclutterEntry>} [declutterTree] Declutter tree.
     * @return {T|undefined} Callback result.
     * @template T
     */
    execute_(t, e, i, s, r, o, a, l) {
      const h = this.zIndexContext_;
      let c;
      this.pixelCoordinates_ && ye(i, this.renderedTransform_) ? c = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), c = Re(
        this.coordinates,
        0,
        this.coordinates.length,
        2,
        i,
        this.pixelCoordinates_
      ), Nu(this.renderedTransform_, i));
      let u = 0;
      const d = s.length;
      let f = 0, g, p, _, m, y, w, E, x, C, T, R, S, L, A = 0, M = 0;
      const b = this.coordinateCache_, P = this.viewRotation_, G = Math.round(Math.atan2(-i[1], i[0]) * 1e12) / 1e12, O = (
        /** @type {import("../../render.js").State} */
        {
          context: t,
          pixelRatio: this.pixelRatio,
          resolution: this.resolution,
          rotation: P
        }
      ), W = this.instructions != s || this.overlaps ? 0 : 200;
      let D, X, K, tt;
      for (; u < d; ) {
        const I = s[u];
        switch (
          /** @type {import("./Instruction.js").default} */
          I[0]
        ) {
          case N.BEGIN_GEOMETRY:
            D = /** @type {import("../../Feature.js").FeatureLike} */
            I[1], tt = I[3], D.getGeometry() ? a !== void 0 && !Rt(a, tt.getExtent()) ? u = /** @type {number} */
            I[2] + 1 : ++u : u = /** @type {number} */
            I[2], h && (h.zIndex = I[4]);
            break;
          case N.BEGIN_PATH:
            A > W && (this.fill_(t), A = 0), M > W && (t.stroke(), M = 0), !A && !M && (t.beginPath(), y = NaN, w = NaN), ++u;
            break;
          case N.CIRCLE:
            f = /** @type {number} */
            I[1];
            const wt = c[f], at = c[f + 1], bt = c[f + 2], Et = c[f + 3], Qt = bt - wt, Zt = Et - at, Mt = Math.sqrt(Qt * Qt + Zt * Zt);
            t.moveTo(wt + Mt, at), t.arc(wt, at, Mt, 0, 2 * Math.PI, !0), ++u;
            break;
          case N.CLOSE_PATH:
            t.closePath(), ++u;
            break;
          case N.CUSTOM:
            f = /** @type {number} */
            I[1], g = I[2];
            const vs = (
              /** @type {import("../../geom/SimpleGeometry.js").default} */
              I[3]
            ), xo = I[4], gn = I[5];
            O.geometry = vs, O.feature = D, u in b || (b[u] = []);
            const Ve = b[u];
            gn ? gn(c, f, g, 2, Ve) : (Ve[0] = c[f], Ve[1] = c[f + 1], Ve.length = 2), h && (h.zIndex = I[6]), xo(Ve, O), ++u;
            break;
          case N.DRAW_IMAGE:
            f = /** @type {number} */
            I[1], g = /** @type {number} */
            I[2], C = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
            I[3], p = /** @type {number} */
            I[4], _ = /** @type {number} */
            I[5];
            let Gt = (
              /** @type {number} */
              I[6]
            );
            const te = (
              /** @type {number} */
              I[7]
            ), Si = (
              /** @type {number} */
              I[8]
            ), Ii = (
              /** @type {number} */
              I[9]
            ), _n = (
              /** @type {boolean} */
              I[10]
            );
            let je = (
              /** @type {number} */
              I[11]
            );
            const Li = (
              /** @type {import("../../size.js").Size} */
              I[12]
            );
            let Ai = (
              /** @type {number} */
              I[13]
            );
            m = I[14] || "declutter";
            const gt = (
              /** @type {{args: import("../canvas.js").DeclutterImageWithText, declutterMode: import('../../style/Style.js').DeclutterMode}} */
              I[15]
            );
            if (!C && I.length >= 20) {
              T = /** @type {string} */
              I[19], R = /** @type {string} */
              I[20], S = /** @type {string} */
              I[21], L = /** @type {string} */
              I[22];
              const zt = this.drawLabelWithPointPlacement_(
                T,
                R,
                S,
                L
              );
              C = zt.label, I[3] = C;
              const He = (
                /** @type {number} */
                I[23]
              );
              p = (zt.anchorX - He) * this.pixelRatio, I[4] = p;
              const Wt = (
                /** @type {number} */
                I[24]
              );
              _ = (zt.anchorY - Wt) * this.pixelRatio, I[5] = _, Gt = C.height, I[6] = Gt, Ai = C.width, I[13] = Ai;
            }
            let wo;
            I.length > 25 && (wo = /** @type {number} */
            I[25]);
            let Co, Rs, Ts;
            I.length > 17 ? (Co = /** @type {Array<number>} */
            I[16], Rs = /** @type {Array<*>} */
            I[17], Ts = /** @type {Array<*>} */
            I[18]) : (Co = Ke, Rs = null, Ts = null), _n && G ? je += P : !_n && !G && (je -= P);
            let Um = 0;
            for (; f < g; f += 2) {
              if (wo && wo[Um++] < Ai / this.pixelRatio)
                continue;
              const zt = this.calculateImageOrLabelDimensions_(
                C.width,
                C.height,
                c[f],
                c[f + 1],
                Ai,
                Gt,
                p,
                _,
                Si,
                Ii,
                je,
                Li,
                r,
                Co,
                !!Rs || !!Ts,
                D
              ), He = [
                t,
                e,
                C,
                zt,
                te,
                Rs,
                Ts
              ];
              if (l) {
                let Wt, ee, Xt;
                if (gt) {
                  const rt = g - f;
                  if (!gt[rt]) {
                    gt[rt] = { args: He, declutterMode: m };
                    continue;
                  }
                  const Ct = gt[rt];
                  Wt = Ct.args, ee = Ct.declutterMode, delete gt[rt], Xt = zh(Wt);
                }
                let ge, _e;
                if (Wt && (ee !== "declutter" || !l.collides(Xt)) && (ge = !0), (m !== "declutter" || !l.collides(zt.declutterBox)) && (_e = !0), ee === "declutter" && m === "declutter") {
                  const rt = ge && _e;
                  ge = rt, _e = rt;
                }
                ge && (ee !== "none" && l.insert(Xt), this.replayImageOrLabel_.apply(this, Wt)), _e && (m !== "none" && l.insert(zt.declutterBox), this.replayImageOrLabel_.apply(this, He));
              } else
                this.replayImageOrLabel_.apply(this, He);
            }
            ++u;
            break;
          case N.DRAW_CHARS:
            const Uh = (
              /** @type {number} */
              I[1]
            ), Kh = (
              /** @type {number} */
              I[2]
            ), vo = (
              /** @type {number} */
              I[3]
            ), Km = (
              /** @type {number} */
              I[4]
            );
            L = /** @type {string} */
            I[5];
            const Zm = (
              /** @type {number} */
              I[6]
            ), Zh = (
              /** @type {number} */
              I[7]
            ), $h = (
              /** @type {number} */
              I[8]
            );
            S = /** @type {string} */
            I[9];
            const Ro = (
              /** @type {number} */
              I[10]
            );
            T = /** @type {string|Array<string>} */
            I[11], Array.isArray(T) && (T = T.reduce(Im, "")), R = /** @type {string} */
            I[12];
            const Vh = [
              /** @type {number} */
              I[13],
              /** @type {number} */
              I[13]
            ];
            m = I[14] || "declutter";
            const $m = (
              /** @type {boolean} */
              I[15]
            ), To = this.textStates[R], mn = To.font, pn = [
              To.scale[0] * Zh,
              To.scale[1] * Zh
            ];
            let yn;
            mn in this.widths_ ? yn = this.widths_[mn] : (yn = {}, this.widths_[mn] = yn);
            const jh = K_(c, Uh, Kh, 2), Hh = Math.abs(pn[0]) * Ul(mn, T, yn);
            if (Km || Hh <= jh) {
              const zt = this.textStates[R].textAlign, He = (jh - Hh) * yo(T, zt), Wt = Tm(
                c,
                Uh,
                Kh,
                2,
                T,
                He,
                Zm,
                Math.abs(pn[0]),
                Ul,
                mn,
                yn,
                G ? 0 : this.viewRotation_,
                $m
              );
              t:
                if (Wt) {
                  const ee = [];
                  let Xt, ge, _e, rt, Ct;
                  if (S)
                    for (Xt = 0, ge = Wt.length; Xt < ge; ++Xt) {
                      Ct = Wt[Xt], _e = /** @type {string} */
                      Ct[4], rt = this.createLabel(_e, R, "", S), p = /** @type {number} */
                      Ct[2] + (pn[0] < 0 ? -Ro : Ro), _ = vo * rt.height + (0.5 - vo) * 2 * Ro * pn[1] / pn[0] - $h;
                      const me = this.calculateImageOrLabelDimensions_(
                        rt.width,
                        rt.height,
                        Ct[0],
                        Ct[1],
                        rt.width,
                        rt.height,
                        p,
                        _,
                        0,
                        0,
                        Ct[3],
                        Vh,
                        !1,
                        Ke,
                        !1,
                        D
                      );
                      if (l && m === "declutter" && l.collides(me.declutterBox))
                        break t;
                      ee.push([
                        t,
                        e,
                        rt,
                        me,
                        1,
                        null,
                        null
                      ]);
                    }
                  if (L)
                    for (Xt = 0, ge = Wt.length; Xt < ge; ++Xt) {
                      Ct = Wt[Xt], _e = /** @type {string} */
                      Ct[4], rt = this.createLabel(_e, R, L, ""), p = /** @type {number} */
                      Ct[2], _ = vo * rt.height - $h;
                      const me = this.calculateImageOrLabelDimensions_(
                        rt.width,
                        rt.height,
                        Ct[0],
                        Ct[1],
                        rt.width,
                        rt.height,
                        p,
                        _,
                        0,
                        0,
                        Ct[3],
                        Vh,
                        !1,
                        Ke,
                        !1,
                        D
                      );
                      if (l && m === "declutter" && l.collides(me.declutterBox))
                        break t;
                      ee.push([
                        t,
                        e,
                        rt,
                        me,
                        1,
                        null,
                        null
                      ]);
                    }
                  l && m !== "none" && l.load(ee.map(zh));
                  for (let me = 0, Vm = ee.length; me < Vm; ++me)
                    this.replayImageOrLabel_.apply(this, ee[me]);
                }
            }
            ++u;
            break;
          case N.END_GEOMETRY:
            if (o !== void 0) {
              D = /** @type {import("../../Feature.js").FeatureLike} */
              I[1];
              const zt = o(
                D,
                tt,
                m
              );
              if (zt)
                return zt;
            }
            ++u;
            break;
          case N.FILL:
            W ? A++ : this.fill_(t), ++u;
            break;
          case N.MOVE_TO_LINE_TO:
            for (f = /** @type {number} */
            I[1], g = /** @type {number} */
            I[2], X = c[f], K = c[f + 1], t.moveTo(X, K), y = X + 0.5 | 0, w = K + 0.5 | 0, f += 2; f < g; f += 2)
              X = c[f], K = c[f + 1], E = X + 0.5 | 0, x = K + 0.5 | 0, (f == g - 2 || E !== y || x !== w) && (t.lineTo(X, K), y = E, w = x);
            ++u;
            break;
          case N.SET_FILL_STYLE:
            this.alignAndScaleFill_ = I[2], A && (this.fill_(t), A = 0, M && (t.stroke(), M = 0)), t.fillStyle = I[1], ++u;
            break;
          case N.SET_STROKE_STYLE:
            M && (t.stroke(), M = 0), this.setStrokeStyle_(
              t,
              /** @type {Array<*>} */
              I
            ), ++u;
            break;
          case N.STROKE:
            W ? M++ : t.stroke(), ++u;
            break;
          default:
            ++u;
            break;
        }
      }
      A && this.fill_(t), M && t.stroke();
    }
    /**
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size.
     * @param {import("../../transform.js").Transform} transform Transform.
     * @param {number} viewRotation View rotation.
     * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
     * @param {import("rbush").default<DeclutterEntry>} [declutterTree] Declutter tree.
     */
    execute(t, e, i, s, r, o) {
      this.viewRotation_ = s, this.execute_(
        t,
        e,
        i,
        this.instructions,
        r,
        void 0,
        void 0,
        o
      );
    }
    /**
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import("../../transform.js").Transform} transform Transform.
     * @param {number} viewRotation View rotation.
     * @param {FeatureCallback<T>} [featureCallback] Feature callback.
     * @param {import("../../extent.js").Extent} [hitExtent] Only check
     *     features that intersect this extent.
     * @return {T|undefined} Callback result.
     * @template T
     */
    executeHitDetection(t, e, i, s, r) {
      return this.viewRotation_ = i, this.execute_(
        t,
        [t.canvas.width, t.canvas.height],
        e,
        this.hitDetectionInstructions,
        !0,
        s,
        r
      );
    }
  }
  const Am = Lm, $e = [
    "Polygon",
    "Circle",
    "LineString",
    "Image",
    "Text",
    "Default"
  ], Xh = ["Image", "Text"], bm = $e.filter(
    (n) => !Xh.includes(n)
  );
  class Mm {
    /**
     * @param {import("../../extent.js").Extent} maxExtent Max extent for clipping. When a
     * `maxExtent` was set on the Builder for this executor group, the same `maxExtent`
     * should be set here, unless the target context does not exceed that extent (which
     * can be the case when rendering to tiles).
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     * @param {boolean} overlaps The executor group can have overlapping geometries.
     * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions
     * The serializable instructions.
     * @param {number} [renderBuffer] Optional rendering buffer.
     * @param {boolean} [deferredRendering] Enable deferred rendering with renderDeferred().
     */
    constructor(t, e, i, s, r, o, a) {
      this.maxExtent_ = t, this.overlaps_ = s, this.pixelRatio_ = i, this.resolution_ = e, this.renderBuffer_ = o, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = Bt(), this.renderedContext_ = null, this.deferredZIndexContexts_ = {}, this.createExecutors_(r, a);
    }
    /**
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import("../../transform.js").Transform} transform Transform.
     */
    clip(t, e) {
      const i = this.getClipCoords(e);
      t.beginPath(), t.moveTo(i[0], i[1]), t.lineTo(i[2], i[3]), t.lineTo(i[4], i[5]), t.lineTo(i[6], i[7]), t.clip();
    }
    /**
     * Create executors and populate them using the provided instructions.
     * @private
     * @param {!Object<string, !Object<string, import("../canvas.js").SerializableInstructions>>} allInstructions The serializable instructions
     * @param {boolean} deferredRendering Enable deferred rendering.
     */
    createExecutors_(t, e) {
      for (const i in t) {
        let s = this.executorsByZIndex_[i];
        s === void 0 && (s = {}, this.executorsByZIndex_[i] = s);
        const r = t[i];
        for (const o in r) {
          const a = r[o];
          s[o] = new Am(
            this.resolution_,
            this.pixelRatio_,
            this.overlaps_,
            a,
            e
          );
        }
      }
    }
    /**
     * @param {Array<import("../canvas.js").BuilderType>} executors Executors.
     * @return {boolean} Has executors of the provided types.
     */
    hasExecutors(t) {
      for (const e in this.executorsByZIndex_) {
        const i = this.executorsByZIndex_[e];
        for (let s = 0, r = t.length; s < r; ++s)
          if (t[s] in i)
            return !0;
      }
      return !1;
    }
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {function(import("../../Feature.js").FeatureLike, import("../../geom/SimpleGeometry.js").default, number): T} callback Feature callback.
     * @param {Array<import("../../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
     * @return {T|undefined} Callback result.
     * @template T
     */
    forEachFeatureAtCoordinate(t, e, i, s, r, o) {
      s = Math.round(s);
      const a = s * 2 + 1, l = ae(
        this.hitDetectionTransform_,
        s + 0.5,
        s + 0.5,
        1 / e,
        -1 / e,
        -i,
        -t[0],
        -t[1]
      ), h = !this.hitDetectionContext_;
      h && (this.hitDetectionContext_ = ht(
        a,
        a
      ));
      const c = this.hitDetectionContext_;
      c.canvas.width !== a || c.canvas.height !== a ? (c.canvas.width = a, c.canvas.height = a) : h || c.clearRect(0, 0, a, a);
      let u;
      this.renderBuffer_ !== void 0 && (u = Dt(), Gi(u, t), Us(
        u,
        e * (this.renderBuffer_ + s),
        u
      ));
      const d = Pm(s);
      let f;
      function g(x, C, T) {
        const R = c.getImageData(
          0,
          0,
          a,
          a
        ).data;
        for (let S = 0, L = d.length; S < L; S++)
          if (R[d[S]] > 0) {
            if (!o || T === "none" || f !== "Image" && f !== "Text" || o.includes(x)) {
              const A = (d[S] - 3) / 4, M = s - A % a, b = s - (A / a | 0), P = r(x, C, M * M + b * b);
              if (P)
                return P;
            }
            c.clearRect(0, 0, a, a);
            break;
          }
      }
      const p = Object.keys(this.executorsByZIndex_).map(Number);
      p.sort(se);
      let _, m, y, w, E;
      for (_ = p.length - 1; _ >= 0; --_) {
        const x = p[_].toString();
        for (y = this.executorsByZIndex_[x], m = $e.length - 1; m >= 0; --m)
          if (f = $e[m], w = y[f], w !== void 0 && (E = w.executeHitDetection(
            c,
            l,
            i,
            g,
            u
          ), E))
            return E;
      }
    }
    /**
     * @param {import("../../transform.js").Transform} transform Transform.
     * @return {Array<number>|null} Clip coordinates.
     */
    getClipCoords(t) {
      const e = this.maxExtent_;
      if (!e)
        return null;
      const i = e[0], s = e[1], r = e[2], o = e[3], a = [i, s, i, o, r, o, r, s];
      return Re(a, 0, 8, 2, t, a), a;
    }
    /**
     * @return {boolean} Is empty.
     */
    isEmpty() {
      return ti(this.executorsByZIndex_);
    }
    /**
     * @param {CanvasRenderingContext2D} targetContext Context.
     * @param {import('../../size.js').Size} scaledCanvasSize Scale of the context.
     * @param {import("../../transform.js").Transform} transform Transform.
     * @param {number} viewRotation View rotation.
     * @param {boolean} snapToPixel Snap point symbols and test to integer pixel.
     * @param {Array<import("../canvas.js").BuilderType>} [builderTypes] Ordered replay types to replay.
     *     Default is {@link module:ol/render/replay~ALL}
     * @param {import("rbush").default<import('./Executor.js').DeclutterEntry>|null} [declutterTree] Declutter tree.
     *     When set to null, no decluttering is done, even when the executor group has a `ZIndexContext`.
     */
    execute(t, e, i, s, r, o, a) {
      const l = Object.keys(this.executorsByZIndex_).map(Number);
      l.sort(a ? vc : se), o = o || $e;
      const h = $e.length;
      for (let c = 0, u = l.length; c < u; ++c) {
        const d = l[c].toString(), f = this.executorsByZIndex_[d];
        for (let g = 0, p = o.length; g < p; ++g) {
          const _ = o[g], m = f[_];
          if (m !== void 0) {
            const y = a === null ? void 0 : m.getZIndexContext(), w = y ? y.getContext() : t, E = this.maxExtent_ && _ !== "Image" && _ !== "Text";
            if (E && (w.save(), this.clip(w, i)), !y || _ === "Text" || _ === "Image" ? m.execute(
              w,
              e,
              i,
              s,
              r,
              a
            ) : y.pushFunction(
              (x) => m.execute(
                x,
                e,
                i,
                s,
                r,
                a
              )
            ), E && w.restore(), y) {
              y.offset();
              const x = l[c] * h + $e.indexOf(_);
              this.deferredZIndexContexts_[x] || (this.deferredZIndexContexts_[x] = []), this.deferredZIndexContexts_[x].push(y);
            }
          }
        }
      }
      this.renderedContext_ = t;
    }
    getDeferredZIndexContexts() {
      return this.deferredZIndexContexts_;
    }
    getRenderedContext() {
      return this.renderedContext_;
    }
    renderDeferred() {
      const t = this.deferredZIndexContexts_, e = Object.keys(t).map(Number).sort(se);
      for (let i = 0, s = e.length; i < s; ++i)
        t[e[i]].forEach((r) => {
          r.draw(this.renderedContext_), r.clear();
        }), t[e[i]].length = 0;
    }
  }
  const Eo = {};
  function Pm(n) {
    if (Eo[n] !== void 0)
      return Eo[n];
    const t = n * 2 + 1, e = n * n, i = new Array(e + 1);
    for (let r = 0; r <= n; ++r)
      for (let o = 0; o <= n; ++o) {
        const a = r * r + o * o;
        if (a > e)
          break;
        let l = i[a];
        l || (l = [], i[a] = l), l.push(((n + r) * t + (n + o)) * 4 + 3), r > 0 && l.push(((n - r) * t + (n + o)) * 4 + 3), o > 0 && (l.push(((n + r) * t + (n - o)) * 4 + 3), r > 0 && l.push(((n - r) * t + (n - o)) * 4 + 3));
      }
    const s = [];
    for (let r = 0, o = i.length; r < o; ++r)
      i[r] && s.push(...i[r]);
    return Eo[n] = s, s;
  }
  const Dm = Mm, Jt = 0.5;
  function Om(n, t, e, i, s, r, o, a, l) {
    const h = l ? lr(s) : s, c = n[0] * Jt, u = n[1] * Jt, d = ht(c, u);
    d.imageSmoothingEnabled = !1;
    const f = d.canvas, g = new V_(
      d,
      Jt,
      s,
      null,
      o,
      a,
      l ? Hn(Fu(), l) : null
    ), p = e.length, _ = Math.floor((256 * 256 * 256 - 1) / p), m = {};
    for (let w = 1; w <= p; ++w) {
      const E = e[w - 1], x = E.getStyleFunction() || i;
      if (!x)
        continue;
      let C = x(E, r);
      if (!C)
        continue;
      Array.isArray(C) || (C = [C]);
      const R = (w * _).toString(16).padStart(7, "#00000");
      for (let S = 0, L = C.length; S < L; ++S) {
        const A = C[S], M = A.getGeometryFunction()(E);
        if (!M || !Rt(h, M.getExtent()))
          continue;
        const b = A.clone(), P = b.getFill();
        P && P.setColor(R);
        const G = b.getStroke();
        G && (G.setColor(R), G.setLineDash(null)), b.setText(void 0);
        const O = A.getImage();
        if (O) {
          const K = O.getImageSize();
          if (!K)
            continue;
          const tt = ht(
            K[0],
            K[1],
            void 0,
            { alpha: !1 }
          ), I = tt.canvas;
          tt.fillStyle = R, tt.fillRect(0, 0, I.width, I.height), b.setImage(
            new Vl({
              img: I,
              anchor: O.getAnchor(),
              anchorXUnits: "pixels",
              anchorYUnits: "pixels",
              offset: O.getOrigin(),
              opacity: 1,
              size: O.getSize(),
              scale: O.getScale(),
              rotation: O.getRotation(),
              rotateWithView: O.getRotateWithView()
            })
          );
        }
        const W = b.getZIndex() || 0;
        let D = m[W];
        D || (D = {}, m[W] = D, D.Polygon = [], D.Circle = [], D.LineString = [], D.Point = []);
        const X = M.getType();
        if (X === "GeometryCollection") {
          const K = (
            /** @type {import("../../geom/GeometryCollection.js").default} */
            M.getGeometriesArrayRecursive()
          );
          for (let tt = 0, I = K.length; tt < I; ++tt) {
            const ft = K[tt];
            D[ft.getType().replace("Multi", "")].push(
              ft,
              b
            );
          }
        } else
          D[X.replace("Multi", "")].push(M, b);
      }
    }
    const y = Object.keys(m).map(Number).sort(se);
    for (let w = 0, E = y.length; w < E; ++w) {
      const x = m[y[w]];
      for (const C in x) {
        const T = x[C];
        for (let R = 0, S = T.length; R < S; R += 2) {
          g.setStyle(T[R + 1]);
          for (let L = 0, A = t.length; L < A; ++L)
            g.setTransform(t[L]), g.drawGeometry(T[R]);
        }
      }
    }
    return d.getImageData(0, 0, f.width, f.height);
  }
  function Fm(n, t, e) {
    const i = [];
    if (e) {
      const s = Math.floor(Math.round(n[0]) * Jt), r = Math.floor(Math.round(n[1]) * Jt), o = (nt(s, 0, e.width - 1) + nt(r, 0, e.height - 1) * e.width) * 4, a = e.data[o], l = e.data[o + 1], c = e.data[o + 2] + 256 * (l + 256 * a), u = Math.floor((256 * 256 * 256 - 1) / t.length);
      c && c % u === 0 && i.push(t[c / u - 1]);
    }
    return i;
  }
  class km extends xh {
    /**
     * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
     */
    constructor(t) {
      super(t), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.clipped_ = !1, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = Dt(), this.wrappedRenderedExtent_ = Dt(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedPixelRatio_ = 1, this.renderedRenderOrder_ = null, this.renderedFrameDeclutter_, this.replayGroup_ = null, this.replayGroupChanged = !0, this.clipping = !0, this.targetContext_ = null, this.opacity_ = 1;
    }
    /**
     * @param {ExecutorGroup} executorGroup Executor group.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {boolean} [declutterable] `true` to only render declutterable items,
     *     `false` to only render non-declutterable items, `undefined` to render all.
     */
    renderWorlds(t, e, i) {
      const s = e.extent, r = e.viewState, o = r.center, a = r.resolution, l = r.projection, h = r.rotation, c = l.getExtent(), u = this.getLayer().getSource(), d = this.getLayer().getDeclutter(), f = e.pixelRatio, g = e.viewHints, p = !(g[pt.ANIMATING] || g[pt.INTERACTING]), _ = this.context, m = Math.round(J(s) / a * f), y = Math.round(yt(s) / a * f), w = u.getWrapX() && l.canWrapX(), E = w ? J(c) : null, x = w ? Math.ceil((s[2] - c[2]) / E) + 1 : 1;
      let C = w ? Math.floor((s[0] - c[0]) / E) : 0;
      do {
        let T = this.getRenderTransform(
          o,
          a,
          0,
          f,
          m,
          y,
          C * E
        );
        e.declutter && (T = T.slice(0)), t.execute(
          _,
          [_.canvas.width, _.canvas.height],
          T,
          h,
          p,
          i === void 0 ? $e : i ? Xh : bm,
          i ? d && e.declutter[d] : void 0
        );
      } while (++C < x);
    }
    /**
     * @private
     */
    setDrawContext_() {
      this.opacity_ !== 1 && (this.targetContext_ = this.context, this.context = ht(
        this.context.canvas.width,
        this.context.canvas.height,
        Eh
      ));
    }
    /**
     * @private
     */
    resetDrawContext_() {
      if (this.opacity_ !== 1 && this.targetContext_) {
        const t = this.targetContext_.globalAlpha;
        this.targetContext_.globalAlpha = this.opacity_, this.targetContext_.drawImage(this.context.canvas, 0, 0), this.targetContext_.globalAlpha = t, rs(this.context), Eh.push(this.context.canvas), this.context = this.targetContext_, this.targetContext_ = null;
      }
    }
    /**
     * Render declutter items for this layer
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     */
    renderDeclutter(t) {
      !this.replayGroup_ || !this.getLayer().getDeclutter() || this.renderWorlds(this.replayGroup_, t, !0);
    }
    /**
     * Render deferred instructions.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @override
     */
    renderDeferredInternal(t) {
      this.replayGroup_ && (this.replayGroup_.renderDeferred(), this.clipped_ && this.context.restore(), this.resetDrawContext_());
    }
    /**
     * Render the layer.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement|null} target Target that may be used to render content to.
     * @return {HTMLElement} The rendered element.
     * @override
     */
    renderFrame(t, e) {
      const i = t.layerStatesArray[t.layerIndex];
      this.opacity_ = i.opacity;
      const s = t.viewState;
      this.prepareContainer(t, e);
      const r = this.context, o = this.replayGroup_;
      let a = o && !o.isEmpty();
      if (!a && !(this.getLayer().hasListener(Ft.PRERENDER) || this.getLayer().hasListener(Ft.POSTRENDER)))
        return this.container;
      if (this.setDrawContext_(), this.preRender(r, t), s.projection, this.clipped_ = !1, a && i.extent && this.clipping) {
        const l = ve(i.extent);
        a = Rt(l, t.extent), this.clipped_ = a && !ki(l, t.extent), this.clipped_ && this.clipUnrotated(r, t, l);
      }
      return a && this.renderWorlds(
        o,
        t,
        this.getLayer().getDeclutter() ? !1 : void 0
      ), !t.declutter && this.clipped_ && r.restore(), this.postRender(r, t), this.renderedRotation_ !== s.rotation && (this.renderedRotation_ = s.rotation, this.hitDetectionImageData_ = null), t.declutter || this.resetDrawContext_(), this.container;
    }
    /**
     * Asynchronous layer level hit detection.
     * @param {import("../../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../../Feature").default>>} Promise
     * that resolves with an array of features.
     * @override
     */
    getFeatures(t) {
      return new Promise((e) => {
        if (this.frameState && !this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
          const i = this.frameState.size.slice(), s = this.renderedCenter_, r = this.renderedResolution_, o = this.renderedRotation_, a = this.renderedProjection_, l = this.wrappedRenderedExtent_, h = this.getLayer(), c = [], u = i[0] * Jt, d = i[1] * Jt;
          c.push(
            this.getRenderTransform(
              s,
              r,
              o,
              Jt,
              u,
              d,
              0
            ).slice()
          );
          const f = h.getSource(), g = a.getExtent();
          if (f.getWrapX() && a.canWrapX() && !ki(g, l)) {
            let p = l[0];
            const _ = J(g);
            let m = 0, y;
            for (; p < g[0]; )
              --m, y = _ * m, c.push(
                this.getRenderTransform(
                  s,
                  r,
                  o,
                  Jt,
                  u,
                  d,
                  y
                ).slice()
              ), p += _;
            for (m = 0, p = l[2]; p > g[2]; )
              ++m, y = _ * m, c.push(
                this.getRenderTransform(
                  s,
                  r,
                  o,
                  Jt,
                  u,
                  d,
                  y
                ).slice()
              ), p -= _;
          }
          this.hitDetectionImageData_ = Om(
            i,
            c,
            this.renderedFeatures_,
            h.getStyleFunction(),
            l,
            r,
            o,
            bh(r, this.renderedPixelRatio_),
            null
          );
        }
        e(
          Fm(t, this.renderedFeatures_, this.hitDetectionImageData_)
        );
      });
    }
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
     * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
     * @return {T|undefined} Callback result.
     * @template T
     * @override
     */
    forEachFeatureAtCoordinate(t, e, i, s, r) {
      var d, f;
      if (!this.replayGroup_)
        return;
      const o = e.viewState.resolution, a = e.viewState.rotation, l = this.getLayer(), h = {}, c = function(g, p, _) {
        const m = j(g), y = h[m];
        if (y) {
          if (y !== !0 && _ < y.distanceSq) {
            if (_ === 0)
              return h[m] = !0, r.splice(r.lastIndexOf(y), 1), s(g, l, p);
            y.geometry = p, y.distanceSq = _;
          }
        } else {
          if (_ === 0)
            return h[m] = !0, s(g, l, p);
          r.push(
            h[m] = {
              feature: g,
              layer: l,
              geometry: p,
              distanceSq: _,
              callback: s
            }
          );
        }
      }, u = this.getLayer().getDeclutter();
      return this.replayGroup_.forEachFeatureAtCoordinate(
        t,
        o,
        a,
        i,
        c,
        u ? (f = (d = e.declutter) == null ? void 0 : d[u]) == null ? void 0 : f.all().map((g) => g.value) : null
      );
    }
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     * @override
     */
    handleFontsChanged() {
      const t = this.getLayer();
      t.getVisible() && this.replayGroup_ && t.changed();
    }
    /**
     * Handle changes in image style state.
     * @param {import("../../events/Event.js").default} event Image style change event.
     * @private
     */
    handleStyleImageChange_(t) {
      this.renderIfReadyAndVisible();
    }
    /**
     * Determine whether render should be called.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {boolean} Layer is ready to be rendered.
     * @override
     */
    prepareFrame(t) {
      const e = this.getLayer(), i = e.getSource();
      if (!i)
        return !1;
      const s = t.viewHints[pt.ANIMATING], r = t.viewHints[pt.INTERACTING], o = e.getUpdateWhileAnimating(), a = e.getUpdateWhileInteracting();
      if (this.ready && !o && s || !a && r)
        return this.animatingOrInteracting_ = !0, !0;
      this.animatingOrInteracting_ = !1;
      const l = t.extent, h = t.viewState, c = h.projection, u = h.resolution, d = t.pixelRatio, f = e.getRevision(), g = e.getRenderBuffer();
      let p = e.getRenderOrder();
      p === void 0 && (p = H_);
      const _ = h.center.slice(), m = Us(
        l,
        g * u
      ), y = m.slice(), w = [m.slice()], E = c.getExtent();
      if (i.getWrapX() && c.canWrapX() && !ki(E, t.extent)) {
        const P = J(E), G = Math.max(J(m) / 2, P);
        m[0] = E[0] - G, m[2] = E[2] + G, Aa(_, c);
        const O = Ia(w[0], c);
        O[0] < E[0] && O[2] < E[2] ? w.push([
          O[0] + P,
          O[1],
          O[2] + P,
          O[3]
        ]) : O[0] > E[0] && O[2] > E[2] && w.push([
          O[0] - P,
          O[1],
          O[2] - P,
          O[3]
        ]);
      }
      if (this.ready && this.renderedResolution_ == u && this.renderedRevision_ == f && this.renderedRenderOrder_ == p && this.renderedFrameDeclutter_ === !!t.declutter && ki(this.wrappedRenderedExtent_, m))
        return ye(this.renderedExtent_, y) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = y), this.renderedCenter_ = _, this.replayGroupChanged = !1, !0;
      this.replayGroup_ = null;
      const x = new Rm(
        Mh(u, d),
        m,
        u,
        d
      );
      let C;
      for (let P = 0, G = w.length; P < G; ++P)
        i.loadFeatures(w[P], u, c);
      const T = bh(u, d);
      let R = !0;
      const S = (
        /**
         * @param {import("../../Feature.js").default} feature Feature.
         * @param {number} index Index.
         */
        (P, G) => {
          let O;
          const W = P.getStyleFunction() || e.getStyleFunction();
          if (W && (O = W(P, u)), O) {
            const D = this.renderFeature(
              P,
              T,
              O,
              x,
              C,
              this.getLayer().getDeclutter(),
              G
            );
            R = R && !D;
          }
        }
      ), L = lr(m), A = i.getFeaturesInExtent(L);
      p && A.sort(p);
      for (let P = 0, G = A.length; P < G; ++P)
        S(A[P], P);
      this.renderedFeatures_ = A, this.ready = R;
      const M = x.finish(), b = new Dm(
        m,
        u,
        d,
        i.getOverlaps(),
        M,
        e.getRenderBuffer(),
        !!t.declutter
      );
      return this.renderedResolution_ = u, this.renderedRevision_ = f, this.renderedRenderOrder_ = p, this.renderedFrameDeclutter_ = !!t.declutter, this.renderedExtent_ = y, this.wrappedRenderedExtent_ = m, this.renderedCenter_ = _, this.renderedProjection_ = c, this.renderedPixelRatio_ = d, this.replayGroup_ = b, this.hitDetectionImageData_ = null, this.replayGroupChanged = !0, !0;
    }
    /**
     * @param {import("../../Feature.js").default} feature Feature.
     * @param {number} squaredTolerance Squared render tolerance.
     * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
     * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Builder group.
     * @param {import("../../proj.js").TransformFunction} [transform] Transform from user to view projection.
     * @param {boolean} [declutter] Enable decluttering.
     * @param {number} [index] Render order index.
     * @return {boolean} `true` if an image is loading.
     */
    renderFeature(t, e, i, s, r, o, a) {
      if (!i)
        return !1;
      let l = !1;
      if (Array.isArray(i))
        for (let h = 0, c = i.length; h < c; ++h)
          l = Ph(
            s,
            t,
            i[h],
            e,
            this.boundHandleStyleImageChange_,
            r,
            o,
            a
          ) || l;
      else
        l = Ph(
          s,
          t,
          i,
          e,
          this.boundHandleStyleImageChange_,
          r,
          o,
          a
        );
      return l;
    }
  }
  const Nm = km;
  class Gm extends oh {
    /**
     * @param {Options<VectorSourceType, FeatureType>} [options] Options.
     */
    constructor(t) {
      super(t);
    }
    /**
     * @override
     */
    createRenderer() {
      return new Nm(this);
    }
  }
  const zm = Gm, Yh = document.createElement("style");
  Yh.textContent = `
  @keyframes locationFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes cardFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .location-card {
    transition: transform 0.2s ease;
  }
  
  .location-card:hover {
    transform: scale(1.03);
  }
  
  .location-card:active {
    transform: scale(0.97);
  }
`, document.head.appendChild(Yh);
  function Wm({ locationInfo: n }) {
    return n != null && n.name ? /* @__PURE__ */ et(
      "div",
      {
        className: "text-sm text-desc w-fit rounded-md flex gap-1 mb-2 items-center",
        style: {
          animation: "locationFadeIn 0.3s ease-out forwards"
        },
        children: [
          /* @__PURE__ */ et("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", children: /* @__PURE__ */ et("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", children: [
            /* @__PURE__ */ et("path", { d: "M12.56 20.82a.96.96 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0 1 12 3c2 0 3.919.785 5.333 2.181c5.181 5.116.056 12.196-4.773 15.64" }),
            /* @__PURE__ */ et("path", { d: "M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4" })
          ] }) }),
          n == null ? void 0 : n.name
        ]
      }
    ) : null;
  }
  function Xm({ locationInfo: n, note: t }) {
    return n != null && n.name ? /* @__PURE__ */ et(
      "div",
      {
        className: "text-sm text-desc w-fit rounded-md flex gap-1 mb-2 items-center cursor-pointer ",
        onClick: () => {
          console.log("showDialog"), window.Blinko.showDialog({
            title: window.Blinko.i18n.t("location"),
            size: "md",
            content: () => {
              const e = document.createElement("div");
              if (e.setAttribute("data-plugin", "my-note-plugin"), n == null)
                try {
                  delete t.metadata.name, delete t.metadata.lat, delete t.metadata.lng;
                } catch (i) {
                  console.error(i);
                }
              else
                try {
                  t.metadata.name = n.name, t.metadata.lat = n.lat, t.metadata.lng = n.lng;
                } catch (i) {
                  console.error(i);
                }
              return Os(/* @__PURE__ */ et(
                Bh,
                {
                  style: { width: "100%", height: "400px" },
                  onClick: async (i) => {
                    if (console.log("Location updated:", i), i)
                      try {
                        t.metadata.name = i.name, t.metadata.lat = i.lat, t.metadata.lng = i.lng;
                      } catch (s) {
                        console.error(s);
                      }
                    else
                      try {
                        t.metadata.name = "", t.metadata.lat = 0, t.metadata.lng = 0;
                      } catch (s) {
                        console.error(s);
                      }
                    await window.Blinko.api.notes.upsert.mutate({
                      id: t.id,
                      metadata: {
                        ...t.metadata
                      }
                    }), window.Blinko.closeDialog(), window.Blinko.store.blinkoStore.updateTicker++;
                  }
                }
              ), e), e;
            }
          });
        },
        children: [
          /* @__PURE__ */ et("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", children: /* @__PURE__ */ et("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", children: [
            /* @__PURE__ */ et("path", { d: "M12.56 20.82a.96.96 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0 1 12 3c2 0 3.919.785 5.333 2.181c5.181 5.116.056 12.196-4.773 15.64" }),
            /* @__PURE__ */ et("path", { d: "M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4" })
          ] }) }),
          n == null ? void 0 : n.name
        ]
      }
    ) : null;
  }
  function Bh({
    onClick: n,
    style: t
  }) {
    const [e, i] = Rn(
      null
    ), [s, r] = Rn(""), [o, a] = Rn(!0), [l, h] = Rn(!1), c = Tn(null), u = Tn(null), d = Tn(null), f = Tn(null), g = window.Blinko.i18n, p = () => new ln({
      image: new qr({
        radius: 8,
        fill: new fs({
          color: "#FF4D4F"
        }),
        stroke: new eo({
          color: "#FFFFFF",
          width: 2
        })
      })
    }), _ = (C, T, R) => {
      R.clear();
      const S = new U_({
        geometry: new ll(C)
      });
      S.setStyle(p()), R.addFeature(S);
      const L = Du(C);
      return {
        lng: L[0],
        lat: L[1]
      };
    }, m = () => new Promise((C, T) => {
      if (!navigator.geolocation) {
        T(new Error(g.t("map.browserNotSupport")));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (R) => C(R),
        (R) => T(R),
        { timeout: 1e4, enableHighAccuracy: !0 }
      );
    }), y = async (C, T) => {
      var R, S;
      try {
        h(!0);
        const A = `${navigator.language || ((R = navigator.languages) == null ? void 0 : R[0]) || "en"},en-US;q=0.8,en;q=0.5`, M = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${C}&lon=${T}&zoom=18&addressdetails=1`,
          {
            headers: {
              "Accept-Language": A,
              // Use browser language
              "User-Agent": "Blinko-Map-App"
              // Must provide user agent
            }
          }
        );
        if (!M.ok)
          throw new Error(g.t("map.cannotGetLocation"));
        const b = await M.json();
        let P = "";
        if (b.address) {
          const G = b.address, O = G.state || G.province, W = G.city, D = G.district || G.county || G.city_district, X = G.road || G.street, K = G.house_number, tt = navigator.language || ((S = navigator.languages) == null ? void 0 : S[0]) || "en", I = [];
          if (O && I.push(O), W && W !== O && I.push(W), D && D !== W && I.push(D), X && (K ? I.push(`${K} ${X}`) : I.push(X)), I.length > 0) {
            const ft = ", ";
            P = I.join(ft);
          } else
            P = b.display_name.split(",")[0];
        } else
          P = b.display_name ? b.display_name.split(",")[0] : g.t("map.locationPoint", {
            lat: C.toFixed(4),
            lng: T.toFixed(4)
          });
        return P;
      } catch (L) {
        return console.error("Failed to get location name:", L), g.t("map.locationPoint", {
          lat: C.toFixed(4),
          lng: T.toFixed(4)
        });
      } finally {
        h(!1);
      }
    }, w = async (C) => {
      i(C);
      try {
        const T = await y(
          C.lat,
          C.lng
        );
        r(T);
      } catch (T) {
        console.error("Failed to get location name:", T), r(
          g.t("map.locationPoint", {
            lat: C.lat.toFixed(4),
            lng: C.lng.toFixed(4)
          })
        );
      }
    }, E = (C) => {
      window.Blinko.addEditorFooterSlot({
        name: "location",
        content: (T) => {
          const R = document.createElement("div");
          return R.setAttribute("data-plugin", "my-note-plugin"), Os(/* @__PURE__ */ et(Wm, { locationInfo: C }), R), R;
        }
      });
    }, x = () => {
      if (e) {
        let C = {
          name: s || g.t("map.unnamed"),
          lat: e.lat,
          lng: e.lng
        };
        if (n) {
          n(C);
          return;
        }
        console.log(g.t("map.saveLocation") + ":", C), window.Blinko.closeToolBarContent("location"), window.Blinko.setEditorMetadata(C), E(C), window.Blinko.eventBus.once("upsertNote", () => {
          E(null);
        });
      }
    };
    return rc(() => {
      if (c.current && !u.current) {
        a(!0);
        const C = new dm();
        f.current = C;
        const T = new zm({
          source: C,
          style: p(),
          zIndex: 999
        });
        d.current = T;
        const R = new y_({
          source: new Y_({
            url: "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=32ahtgDDiU89EdGil0SC",
            tileSize: 512,
            maxZoom: 18
          })
        }), S = new zg({
          target: c.current,
          layers: [R, T],
          controls: xl({
            zoom: !1,
            rotate: !1
          }).extend([
            new El({
              className: "custom-zoom"
            })
          ]),
          view: new Ht({
            center: jn([116.4074, 39.9042]),
            // Default: Beijing
            zoom: 13
          })
        });
        u.current = S, m().then((L) => {
          const { longitude: A, latitude: M } = L.coords;
          S.getView().setCenter(jn([A, M]));
          const b = _(
            jn([A, M]),
            S,
            C
          );
          w(b), console.log("Current location:", b);
        }).catch((L) => {
          console.warn("Unable to get current location:", L.message);
          const A = { lng: 116.4074, lat: 39.9042 }, M = jn([
            A.lng,
            A.lat
          ]);
          _(M, S, C), w(A);
        }).finally(() => {
          a(!1);
        }), S.on("click", (L) => {
          const A = _(L.coordinate, S, C);
          w(A), console.log("Selected location:", A);
        });
      }
      return () => {
        u.current && (u.current.setTarget(void 0), u.current = null);
      };
    }, []), /* @__PURE__ */ et(
      "div",
      {
        style: {
          width: "300px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          ...t
        },
        children: [
          /* @__PURE__ */ et(
            "div",
            {
              ref: c,
              style: {
                flex: 1,
                borderRadius: "8px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer"
              },
              children: o && /* @__PURE__ */ et(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1e3
                  },
                  children: /* @__PURE__ */ et("div", { children: g.t("map.loading") })
                }
              )
            }
          ),
          e && /* @__PURE__ */ et(
            "div",
            {
              style: {
                padding: "12px 16px",
                position: "relative"
              },
              children: [
                /* @__PURE__ */ et(
                  "div",
                  {
                    style: {
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      paddingRight: "140px"
                    },
                    children: [
                      s,
                      l && /* @__PURE__ */ et(
                        "span",
                        {
                          style: { marginLeft: "5px", fontSize: "12px", opacity: 0.7 },
                          children: g.t("map.gettingLocation")
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ et(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      display: "flex",
                      gap: "8px"
                    },
                    children: [
                      /* @__PURE__ */ et(
                        "button",
                        {
                          onClick: () => {
                            i(null), r(""), f.current && f.current.clear(), n ? n(null) : (E(null), window.Blinko.closeToolBarContent("location"));
                          },
                          style: {
                            border: "none",
                            borderRadius: "4px",
                            padding: "5px 12px",
                            fontSize: "14px",
                            cursor: "pointer"
                          },
                          children: g.t("map.clear")
                        }
                      ),
                      /* @__PURE__ */ et(
                        "button",
                        {
                          onClick: x,
                          className: "bg-primary text-primary-foreground",
                          style: {
                            border: "none",
                            borderRadius: "4px",
                            padding: "5px 12px",
                            fontSize: "14px",
                            cursor: "pointer"
                          },
                          children: g.t("map.confirm")
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
  const Ym = {
    name: "blinko-toolbar-map",
    author: "blinko-offical",
    url: "https://github.com/Mic-R/blinko-toolbar-map",
    version: "0.0.2",
    minAppVersion: "0.45.3",
    displayName: {
      default: "Blinko Toolbar Map"
    },
    description: {
      default: "This is a blinko plugin for map, you can use it to insert map location points."
    },
    readme: {
      default: "README.md"
    }
  }, Bm = {
    location: "Location",
    map: {
      loading: "Loading...",
      confirm: "Confirm",
      gettingLocation: "Getting...",
      unnamed: "Unnamed Location",
      locationPoint: "Location ({{lat}},{{lng}})",
      browserNotSupport: "Browser does not support geolocation",
      cannotGetLocation: "Cannot get location information",
      saveLocation: "Save Location",
      clear: "Clear"
    }
  };
  System.register([], (n) => ({
    execute: () => {
      n("default", class {
        constructor() {
          Object.assign(this, Ym);
        }
        async init() {
          this.initI18n(), window.Blinko.addToolBarIcon({
            name: "location",
            icon: "mynaui:location",
            placement: "top",
            tooltip: window.Blinko.i18n.t("location"),
            content: (e) => {
              const i = document.createElement("div");
              return i.setAttribute("data-plugin", "my-note-plugin"), ra(/* @__PURE__ */ et(Bh, {}), i), i;
            }
          }), window.Blinko.addCardFooterSlot({
            name: "location",
            content: (e) => {
              const i = document.createElement("div");
              return i.setAttribute("data-plugin", "my-note-plugin"), ra(/* @__PURE__ */ et(Xm, { locationInfo: e.metadata, note: e }), i), i;
            }
          });
        }
        initI18n() {
          window.Blinko.i18n.addResourceBundle("en", "translation", Bm);
        }
        destroy() {
          console.log("Plugin destroyed");
        }
      });
    }
  }));
})();
