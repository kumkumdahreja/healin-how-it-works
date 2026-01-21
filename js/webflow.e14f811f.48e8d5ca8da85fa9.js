(() => {
  var e = {
      9904: function () {
        "use strict";
        !(function () {
          if ("undefined" == typeof window) return;
          let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
            a = !!e && parseInt(e[1], 10) >= 16;
          if ("objectFit" in document.documentElement.style != !1 && !a) {
            window.objectFitPolyfill = function () {
              return !1;
            };
            return;
          }
          let t = function (e) {
              let a = window.getComputedStyle(e, null),
                t = a.getPropertyValue("position"),
                n = a.getPropertyValue("overflow"),
                i = a.getPropertyValue("display");
              (t && "static" !== t) || (e.style.position = "relative"),
                "hidden" !== n && (e.style.overflow = "hidden"),
                (i && "inline" !== i) || (e.style.display = "block"),
                0 === e.clientHeight && (e.style.height = "100%"),
                -1 === e.className.indexOf("object-fit-polyfill") &&
                  (e.className += " object-fit-polyfill");
            },
            n = function (e) {
              let a = window.getComputedStyle(e, null),
                t = {
                  "max-width": "none",
                  "max-height": "none",
                  "min-width": "0px",
                  "min-height": "0px",
                  top: "auto",
                  right: "auto",
                  bottom: "auto",
                  left: "auto",
                  "margin-top": "0px",
                  "margin-right": "0px",
                  "margin-bottom": "0px",
                  "margin-left": "0px",
                };
              for (let n in t)
                a.getPropertyValue(n) !== t[n] && (e.style[n] = t[n]);
            },
            i = function (e) {
              let a = e.parentNode;
              t(a),
                n(e),
                (e.style.position = "absolute"),
                (e.style.height = "100%"),
                (e.style.width = "auto"),
                e.clientWidth > a.clientWidth
                  ? ((e.style.top = "0"),
                    (e.style.marginTop = "0"),
                    (e.style.left = "50%"),
                    (e.style.marginLeft = -(e.clientWidth / 2) + "px"))
                  : ((e.style.width = "100%"),
                    (e.style.height = "auto"),
                    (e.style.left = "0"),
                    (e.style.marginLeft = "0"),
                    (e.style.top = "50%"),
                    (e.style.marginTop = -(e.clientHeight / 2) + "px"));
            },
            d = function (e) {
              if (void 0 === e || e instanceof Event)
                e = document.querySelectorAll("[data-object-fit]");
              else if (e && e.nodeName) e = [e];
              else if ("object" != typeof e || !e.length || !e[0].nodeName)
                return !1;
              for (let t = 0; t < e.length; t++) {
                if (!e[t].nodeName) continue;
                let n = e[t].nodeName.toLowerCase();
                if ("img" === n) {
                  if (a) continue;
                  e[t].complete
                    ? i(e[t])
                    : e[t].addEventListener("load", function () {
                        i(this);
                      });
                } else
                  "video" === n
                    ? e[t].readyState > 0
                      ? i(e[t])
                      : e[t].addEventListener("loadedmetadata", function () {
                          i(this);
                        })
                    : i(e[t]);
              }
              return !0;
            };
          "loading" === document.readyState
            ? document.addEventListener("DOMContentLoaded", d)
            : d(),
            window.addEventListener("resize", d),
            (window.objectFitPolyfill = d);
        })();
      },
      1724: function () {
        "use strict";
        function e(e) {
          Webflow.env("design") ||
            ($("video").each(function () {
              e && $(this).prop("autoplay") ? this.play() : this.pause();
            }),
            $(".w-background-video--control").each(function () {
              e ? t($(this)) : a($(this));
            }));
        }
        function a(e) {
          e.find("> span").each(function (e) {
            $(this).prop("hidden", () => 0 === e);
          });
        }
        function t(e) {
          e.find("> span").each(function (e) {
            $(this).prop("hidden", () => 1 === e);
          });
        }
        "undefined" != typeof window &&
          $(document).ready(() => {
            let n = window.matchMedia("(prefers-reduced-motion: reduce)");
            n.addEventListener("change", (a) => {
              e(!a.matches);
            }),
              n.matches && e(!1),
              $("video:not([autoplay])").each(function () {
                $(this)
                  .parent()
                  .find(".w-background-video--control")
                  .each(function () {
                    a($(this));
                  });
              }),
              $(document).on(
                "click",
                ".w-background-video--control",
                function (e) {
                  if (Webflow.env("design")) return;
                  let n = $(e.currentTarget),
                    i = $(`video#${n.attr("aria-controls")}`).get(0);
                  if (i)
                    if (i.paused) {
                      let e = i.play();
                      t(n),
                        e &&
                          "function" == typeof e.catch &&
                          e.catch(() => {
                            a(n);
                          });
                    } else i.pause(), a(n);
                }
              );
          });
      },
      5487: function () {
        "use strict";
        window.tram = (function (e) {
          function a(e, a) {
            return new M.Bare().init(e, a);
          }
          function t(e) {
            var a = parseInt(e.slice(1), 16);
            return [(a >> 16) & 255, (a >> 8) & 255, 255 & a];
          }
          function n(e, a, t) {
            return (
              "#" + (0x1000000 | (e << 16) | (a << 8) | t).toString(16).slice(1)
            );
          }
          function i() {}
          function d(e, a, t) {
            if ((void 0 !== a && (t = a), void 0 === e)) return t;
            var n = t;
            return (
              Q.test(e) || !q.test(e)
                ? (n = parseInt(e, 10))
                : q.test(e) && (n = 1e3 * parseFloat(e)),
              0 > n && (n = 0),
              n == n ? n : t
            );
          }
          function l(e) {
            X.debug && window && window.console.warn(e);
          }
          var o,
            c,
            r,
            u = (function (e, a, t) {
              function n(e) {
                return "object" == typeof e;
              }
              function i(e) {
                return "function" == typeof e;
              }
              function d() {}
              return function l(o, c) {
                function r() {
                  var e = new u();
                  return i(e.init) && e.init.apply(e, arguments), e;
                }
                function u() {}
                c === t && ((c = o), (o = Object)), (r.Bare = u);
                var s,
                  f = (d[e] = o[e]),
                  g = (u[e] = r[e] = new d());
                return (
                  (g.constructor = r),
                  (r.mixin = function (a) {
                    return (u[e] = r[e] = l(r, a)[e]), r;
                  }),
                  (r.open = function (e) {
                    if (
                      ((s = {}),
                      i(e) ? (s = e.call(r, g, f, r, o)) : n(e) && (s = e),
                      n(s))
                    )
                      for (var t in s) a.call(s, t) && (g[t] = s[t]);
                    return i(g.init) || (g.init = o), r;
                  }),
                  r.open(c)
                );
              };
            })("prototype", {}.hasOwnProperty),
            s = {
              ease: [
                "ease",
                function (e, a, t, n) {
                  var i = (e /= n) * e,
                    d = i * e;
                  return (
                    a +
                    t *
                      (-2.75 * d * i +
                        11 * i * i +
                        -15.5 * d +
                        8 * i +
                        0.25 * e)
                  );
                },
              ],
              "ease-in": [
                "ease-in",
                function (e, a, t, n) {
                  var i = (e /= n) * e,
                    d = i * e;
                  return a + t * (-1 * d * i + 3 * i * i + -3 * d + 2 * i);
                },
              ],
              "ease-out": [
                "ease-out",
                function (e, a, t, n) {
                  var i = (e /= n) * e,
                    d = i * e;
                  return (
                    a +
                    t *
                      (0.3 * d * i +
                        -1.6 * i * i +
                        2.2 * d +
                        -1.8 * i +
                        1.9 * e)
                  );
                },
              ],
              "ease-in-out": [
                "ease-in-out",
                function (e, a, t, n) {
                  var i = (e /= n) * e,
                    d = i * e;
                  return a + t * (2 * d * i + -5 * i * i + 2 * d + 2 * i);
                },
              ],
              linear: [
                "linear",
                function (e, a, t, n) {
                  return (t * e) / n + a;
                },
              ],
              "ease-in-quad": [
                "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                function (e, a, t, n) {
                  return t * (e /= n) * e + a;
                },
              ],
              "ease-out-quad": [
                "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                function (e, a, t, n) {
                  return -t * (e /= n) * (e - 2) + a;
                },
              ],
              "ease-in-out-quad": [
                "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                function (e, a, t, n) {
                  return (e /= n / 2) < 1
                    ? (t / 2) * e * e + a
                    : (-t / 2) * (--e * (e - 2) - 1) + a;
                },
              ],
              "ease-in-cubic": [
                "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                function (e, a, t, n) {
                  return t * (e /= n) * e * e + a;
                },
              ],
              "ease-out-cubic": [
                "cubic-bezier(0.215, 0.610, 0.355, 1)",
                function (e, a, t, n) {
                  return t * ((e = e / n - 1) * e * e + 1) + a;
                },
              ],
              "ease-in-out-cubic": [
                "cubic-bezier(0.645, 0.045, 0.355, 1)",
                function (e, a, t, n) {
                  return (e /= n / 2) < 1
                    ? (t / 2) * e * e * e + a
                    : (t / 2) * ((e -= 2) * e * e + 2) + a;
                },
              ],
              "ease-in-quart": [
                "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                function (e, a, t, n) {
                  return t * (e /= n) * e * e * e + a;
                },
              ],
              "ease-out-quart": [
                "cubic-bezier(0.165, 0.840, 0.440, 1)",
                function (e, a, t, n) {
                  return -t * ((e = e / n - 1) * e * e * e - 1) + a;
                },
              ],
              "ease-in-out-quart": [
                "cubic-bezier(0.770, 0, 0.175, 1)",
                function (e, a, t, n) {
                  return (e /= n / 2) < 1
                    ? (t / 2) * e * e * e * e + a
                    : (-t / 2) * ((e -= 2) * e * e * e - 2) + a;
                },
              ],
              "ease-in-quint": [
                "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                function (e, a, t, n) {
                  return t * (e /= n) * e * e * e * e + a;
                },
              ],
              "ease-out-quint": [
                "cubic-bezier(0.230, 1, 0.320, 1)",
                function (e, a, t, n) {
                  return t * ((e = e / n - 1) * e * e * e * e + 1) + a;
                },
              ],
              "ease-in-out-quint": [
                "cubic-bezier(0.860, 0, 0.070, 1)",
                function (e, a, t, n) {
                  return (e /= n / 2) < 1
                    ? (t / 2) * e * e * e * e * e + a
                    : (t / 2) * ((e -= 2) * e * e * e * e + 2) + a;
                },
              ],
              "ease-in-sine": [
                "cubic-bezier(0.470, 0, 0.745, 0.715)",
                function (e, a, t, n) {
                  return -t * Math.cos((e / n) * (Math.PI / 2)) + t + a;
                },
              ],
              "ease-out-sine": [
                "cubic-bezier(0.390, 0.575, 0.565, 1)",
                function (e, a, t, n) {
                  return t * Math.sin((e / n) * (Math.PI / 2)) + a;
                },
              ],
              "ease-in-out-sine": [
                "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                function (e, a, t, n) {
                  return (-t / 2) * (Math.cos((Math.PI * e) / n) - 1) + a;
                },
              ],
              "ease-in-expo": [
                "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                function (e, a, t, n) {
                  return 0 === e ? a : t * Math.pow(2, 10 * (e / n - 1)) + a;
                },
              ],
              "ease-out-expo": [
                "cubic-bezier(0.190, 1, 0.220, 1)",
                function (e, a, t, n) {
                  return e === n
                    ? a + t
                    : t * (-Math.pow(2, (-10 * e) / n) + 1) + a;
                },
              ],
              "ease-in-out-expo": [
                "cubic-bezier(1, 0, 0, 1)",
                function (e, a, t, n) {
                  return 0 === e
                    ? a
                    : e === n
                    ? a + t
                    : (e /= n / 2) < 1
                    ? (t / 2) * Math.pow(2, 10 * (e - 1)) + a
                    : (t / 2) * (-Math.pow(2, -10 * --e) + 2) + a;
                },
              ],
              "ease-in-circ": [
                "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                function (e, a, t, n) {
                  return -t * (Math.sqrt(1 - (e /= n) * e) - 1) + a;
                },
              ],
              "ease-out-circ": [
                "cubic-bezier(0.075, 0.820, 0.165, 1)",
                function (e, a, t, n) {
                  return t * Math.sqrt(1 - (e = e / n - 1) * e) + a;
                },
              ],
              "ease-in-out-circ": [
                "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                function (e, a, t, n) {
                  return (e /= n / 2) < 1
                    ? (-t / 2) * (Math.sqrt(1 - e * e) - 1) + a
                    : (t / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + a;
                },
              ],
              "ease-in-back": [
                "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                function (e, a, t, n, i) {
                  return (
                    void 0 === i && (i = 1.70158),
                    t * (e /= n) * e * ((i + 1) * e - i) + a
                  );
                },
              ],
              "ease-out-back": [
                "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                function (e, a, t, n, i) {
                  return (
                    void 0 === i && (i = 1.70158),
                    t * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + a
                  );
                },
              ],
              "ease-in-out-back": [
                "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                function (e, a, t, n, i) {
                  return (
                    void 0 === i && (i = 1.70158),
                    (e /= n / 2) < 1
                      ? (t / 2) * e * e * (((i *= 1.525) + 1) * e - i) + a
                      : (t / 2) *
                          ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                        a
                  );
                },
              ],
            },
            f = {
              "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
              "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
              "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
            },
            g = window,
            b = "bkwld-tram",
            _ = /[\-\.0-9]/g,
            y = /[A-Z]/,
            T = "number",
            E = /^(rgb|#)/,
            I = /(em|cm|mm|in|pt|pc|px)$/,
            p = /(em|cm|mm|in|pt|pc|px|%)$/,
            O = /(deg|rad|turn)$/,
            m = "unitless",
            V = /(all|none) 0s ease 0s/,
            h = /^(width|height)$/,
            v = document.createElement("a"),
            R = ["Webkit", "Moz", "O", "ms"],
            S = ["-webkit-", "-moz-", "-o-", "-ms-"],
            L = function (e) {
              if (e in v.style) return { dom: e, css: e };
              var a,
                t,
                n = "",
                i = e.split("-");
              for (a = 0; a < i.length; a++)
                n += i[a].charAt(0).toUpperCase() + i[a].slice(1);
              for (a = 0; a < R.length; a++)
                if ((t = R[a] + n) in v.style) return { dom: t, css: S[a] + e };
            },
            A = (a.support = {
              bind: Function.prototype.bind,
              transform: L("transform"),
              transition: L("transition"),
              backface: L("backface-visibility"),
              timing: L("transition-timing-function"),
            });
          if (A.transition) {
            var C = A.timing.dom;
            if (((v.style[C] = s["ease-in-back"][0]), !v.style[C]))
              for (var N in f) s[N][0] = f[N];
          }
          var G = (a.frame =
              (o =
                g.requestAnimationFrame ||
                g.webkitRequestAnimationFrame ||
                g.mozRequestAnimationFrame ||
                g.oRequestAnimationFrame ||
                g.msRequestAnimationFrame) && A.bind
                ? o.bind(g)
                : function (e) {
                    g.setTimeout(e, 16);
                  }),
            w = (a.now =
              (r =
                (c = g.performance) &&
                (c.now || c.webkitNow || c.msNow || c.mozNow)) && A.bind
                ? r.bind(c)
                : Date.now ||
                  function () {
                    return +new Date();
                  }),
            U = u(function (a) {
              function t(e, a) {
                var t = (function (e) {
                    for (var a = -1, t = e ? e.length : 0, n = []; ++a < t; ) {
                      var i = e[a];
                      i && n.push(i);
                    }
                    return n;
                  })(("" + e).split(" ")),
                  n = t[0];
                a = a || {};
                var i = K[n];
                if (!i) return l("Unsupported property: " + n);
                if (!a.weak || !this.props[n]) {
                  var d = i[0],
                    o = this.props[n];
                  return (
                    o || (o = this.props[n] = new d.Bare()),
                    o.init(this.$el, t, i, a),
                    o
                  );
                }
              }
              function n(e, a, n) {
                if (e) {
                  var l = typeof e;
                  if (
                    (a ||
                      (this.timer && this.timer.destroy(),
                      (this.queue = []),
                      (this.active = !1)),
                    "number" == l && a)
                  )
                    return (
                      (this.timer = new x({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      void (this.active = !0)
                    );
                  if ("string" == l && a) {
                    switch (e) {
                      case "hide":
                        c.call(this);
                        break;
                      case "stop":
                        o.call(this);
                        break;
                      case "redraw":
                        r.call(this);
                        break;
                      default:
                        t.call(this, e, n && n[1]);
                    }
                    return i.call(this);
                  }
                  if ("function" == l) return void e.call(this, this);
                  if ("object" == l) {
                    var f = 0;
                    s.call(
                      this,
                      e,
                      function (e, a) {
                        e.span > f && (f = e.span), e.stop(), e.animate(a);
                      },
                      function (e) {
                        "wait" in e && (f = d(e.wait, 0));
                      }
                    ),
                      u.call(this),
                      f > 0 &&
                        ((this.timer = new x({ duration: f, context: this })),
                        (this.active = !0),
                        a && (this.timer.complete = i));
                    var g = this,
                      b = !1,
                      _ = {};
                    G(function () {
                      s.call(g, e, function (e) {
                        e.active && ((b = !0), (_[e.name] = e.nextStyle));
                      }),
                        b && g.$el.css(_);
                    });
                  }
                }
              }
              function i() {
                if (
                  (this.timer && this.timer.destroy(),
                  (this.active = !1),
                  this.queue.length)
                ) {
                  var e = this.queue.shift();
                  n.call(this, e.options, !0, e.args);
                }
              }
              function o(e) {
                var a;
                this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1),
                  "string" == typeof e
                    ? ((a = {})[e] = 1)
                    : (a = "object" == typeof e && null != e ? e : this.props),
                  s.call(this, a, f),
                  u.call(this);
              }
              function c() {
                o.call(this), (this.el.style.display = "none");
              }
              function r() {
                this.el.offsetHeight;
              }
              function u() {
                var e,
                  a,
                  t = [];
                for (e in (this.upstream && t.push(this.upstream), this.props))
                  (a = this.props[e]).active && t.push(a.string);
                (t = t.join(",")),
                  this.style !== t &&
                    ((this.style = t), (this.el.style[A.transition.dom] = t));
              }
              function s(e, a, n) {
                var i,
                  d,
                  l,
                  o,
                  c = a !== f,
                  r = {};
                for (i in e)
                  (l = e[i]),
                    i in W
                      ? (r.transform || (r.transform = {}),
                        (r.transform[i] = l))
                      : (y.test(i) &&
                          (i = i.replace(/[A-Z]/g, function (e) {
                            return "-" + e.toLowerCase();
                          })),
                        i in K ? (r[i] = l) : (o || (o = {}), (o[i] = l)));
                for (i in r) {
                  if (((l = r[i]), !(d = this.props[i]))) {
                    if (!c) continue;
                    d = t.call(this, i);
                  }
                  a.call(this, d, l);
                }
                n && o && n.call(this, o);
              }
              function f(e) {
                e.stop();
              }
              function g(e, a) {
                e.set(a);
              }
              function _(e) {
                this.$el.css(e);
              }
              function T(e, t) {
                a[e] = function () {
                  return this.children
                    ? E.call(this, t, arguments)
                    : (this.el && t.apply(this, arguments), this);
                };
              }
              function E(e, a) {
                var t,
                  n = this.children.length;
                for (t = 0; n > t; t++) e.apply(this.children[t], a);
                return this;
              }
              (a.init = function (a) {
                if (
                  ((this.$el = e(a)),
                  (this.el = this.$el[0]),
                  (this.props = {}),
                  (this.queue = []),
                  (this.style = ""),
                  (this.active = !1),
                  X.keepInherited && !X.fallback)
                ) {
                  var t = H(this.el, "transition");
                  t && !V.test(t) && (this.upstream = t);
                }
                A.backface &&
                  X.hideBackface &&
                  z(this.el, A.backface.css, "hidden");
              }),
                T("add", t),
                T("start", n),
                T("wait", function (e) {
                  (e = d(e, 0)),
                    this.active
                      ? this.queue.push({ options: e })
                      : ((this.timer = new x({
                          duration: e,
                          context: this,
                          complete: i,
                        })),
                        (this.active = !0));
                }),
                T("then", function (e) {
                  return this.active
                    ? (this.queue.push({ options: e, args: arguments }),
                      void (this.timer.complete = i))
                    : l(
                        "No active transition timer. Use start() or wait() before then()."
                      );
                }),
                T("next", i),
                T("stop", o),
                T("set", function (e) {
                  o.call(this, e), s.call(this, e, g, _);
                }),
                T("show", function (e) {
                  "string" != typeof e && (e = "block"),
                    (this.el.style.display = e);
                }),
                T("hide", c),
                T("redraw", r),
                T("destroy", function () {
                  o.call(this),
                    e.removeData(this.el, b),
                    (this.$el = this.el = null);
                });
            }),
            M = u(U, function (a) {
              function t(a, t) {
                var n = e.data(a, b) || e.data(a, b, new U.Bare());
                return n.el || n.init(a), t ? n.start(t) : n;
              }
              a.init = function (a, n) {
                var i = e(a);
                if (!i.length) return this;
                if (1 === i.length) return t(i[0], n);
                var d = [];
                return (
                  i.each(function (e, a) {
                    d.push(t(a, n));
                  }),
                  (this.children = d),
                  this
                );
              };
            }),
            P = u(function (e) {
              function a() {
                var e = this.get();
                this.update("auto");
                var a = this.get();
                return this.update(e), a;
              }
              (e.init = function (e, a, t, n) {
                (this.$el = e), (this.el = e[0]);
                var i,
                  l,
                  o,
                  c = a[0];
                t[2] && (c = t[2]),
                  j[c] && (c = j[c]),
                  (this.name = c),
                  (this.type = t[1]),
                  (this.duration = d(a[1], this.duration, 500)),
                  (this.ease =
                    ((i = a[2]),
                    (l = this.ease),
                    (o = "ease"),
                    void 0 !== l && (o = l),
                    i in s ? i : o)),
                  (this.delay = d(a[3], this.delay, 0)),
                  (this.span = this.duration + this.delay),
                  (this.active = !1),
                  (this.nextStyle = null),
                  (this.auto = h.test(this.name)),
                  (this.unit = n.unit || this.unit || X.defaultUnit),
                  (this.angle = n.angle || this.angle || X.defaultAngle),
                  X.fallback || n.fallback
                    ? (this.animate = this.fallback)
                    : ((this.animate = this.transition),
                      (this.string =
                        this.name +
                        " " +
                        this.duration +
                        "ms" +
                        ("ease" != this.ease ? " " + s[this.ease][0] : "") +
                        (this.delay ? " " + this.delay + "ms" : "")));
              }),
                (e.set = function (e) {
                  (e = this.convert(e, this.type)),
                    this.update(e),
                    this.redraw();
                }),
                (e.transition = function (e) {
                  (this.active = !0),
                    (e = this.convert(e, this.type)),
                    this.auto &&
                      ("auto" == this.el.style[this.name] &&
                        (this.update(this.get()), this.redraw()),
                      "auto" == e && (e = a.call(this))),
                    (this.nextStyle = e);
                }),
                (e.fallback = function (e) {
                  var t =
                    this.el.style[this.name] ||
                    this.convert(this.get(), this.type);
                  (e = this.convert(e, this.type)),
                    this.auto &&
                      ("auto" == t && (t = this.convert(this.get(), this.type)),
                      "auto" == e && (e = a.call(this))),
                    (this.tween = new F({
                      from: t,
                      to: e,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease,
                      update: this.update,
                      context: this,
                    }));
                }),
                (e.get = function () {
                  return H(this.el, this.name);
                }),
                (e.update = function (e) {
                  z(this.el, this.name, e);
                }),
                (e.stop = function () {
                  (this.active || this.nextStyle) &&
                    ((this.active = !1),
                    (this.nextStyle = null),
                    z(this.el, this.name, this.get()));
                  var e = this.tween;
                  e && e.context && e.destroy();
                }),
                (e.convert = function (e, a) {
                  if ("auto" == e && this.auto) return e;
                  var t,
                    i,
                    d = "number" == typeof e,
                    o = "string" == typeof e;
                  switch (a) {
                    case T:
                      if (d) return e;
                      if (o && "" === e.replace(_, "")) return +e;
                      i = "number(unitless)";
                      break;
                    case E:
                      if (o) {
                        if ("" === e && this.original) return this.original;
                        if (a.test(e))
                          return "#" == e.charAt(0) && 7 == e.length
                            ? e
                            : ((t = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                                ? n(t[1], t[2], t[3])
                                : e
                              ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                      }
                      i = "hex or rgb string";
                      break;
                    case I:
                      if (d) return e + this.unit;
                      if (o && a.test(e)) return e;
                      i = "number(px) or string(unit)";
                      break;
                    case p:
                      if (d) return e + this.unit;
                      if (o && a.test(e)) return e;
                      i = "number(px) or string(unit or %)";
                      break;
                    case O:
                      if (d) return e + this.angle;
                      if (o && a.test(e)) return e;
                      i = "number(deg) or string(angle)";
                      break;
                    case m:
                      if (d || (o && p.test(e))) return e;
                      i = "number(unitless) or string(unit or %)";
                  }
                  return (
                    l(
                      "Type warning: Expected: [" +
                        i +
                        "] Got: [" +
                        typeof e +
                        "] " +
                        e
                    ),
                    e
                  );
                }),
                (e.redraw = function () {
                  this.el.offsetHeight;
                });
            }),
            k = u(P, function (e, a) {
              e.init = function () {
                a.init.apply(this, arguments),
                  this.original ||
                    (this.original = this.convert(this.get(), E));
              };
            }),
            D = u(P, function (e, a) {
              (e.init = function () {
                a.init.apply(this, arguments), (this.animate = this.fallback);
              }),
                (e.get = function () {
                  return this.$el[this.name]();
                }),
                (e.update = function (e) {
                  this.$el[this.name](e);
                });
            }),
            Y = u(P, function (e, a) {
              function t(e, a) {
                var t, n, i, d, l;
                for (t in e)
                  (i = (d = W[t])[0]),
                    (n = d[1] || t),
                    (l = this.convert(e[t], i)),
                    a.call(this, n, l, i);
              }
              (e.init = function () {
                a.init.apply(this, arguments),
                  this.current ||
                    ((this.current = {}),
                    W.perspective &&
                      X.perspective &&
                      ((this.current.perspective = X.perspective),
                      z(this.el, this.name, this.style(this.current)),
                      this.redraw()));
              }),
                (e.set = function (e) {
                  t.call(this, e, function (e, a) {
                    this.current[e] = a;
                  }),
                    z(this.el, this.name, this.style(this.current)),
                    this.redraw();
                }),
                (e.transition = function (e) {
                  var a = this.values(e);
                  this.tween = new B({
                    current: this.current,
                    values: a,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                  });
                  var t,
                    n = {};
                  for (t in this.current)
                    n[t] = t in a ? a[t] : this.current[t];
                  (this.active = !0), (this.nextStyle = this.style(n));
                }),
                (e.fallback = function (e) {
                  var a = this.values(e);
                  this.tween = new B({
                    current: this.current,
                    values: a,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  });
                }),
                (e.update = function () {
                  z(this.el, this.name, this.style(this.current));
                }),
                (e.style = function (e) {
                  var a,
                    t = "";
                  for (a in e) t += a + "(" + e[a] + ") ";
                  return t;
                }),
                (e.values = function (e) {
                  var a,
                    n = {};
                  return (
                    t.call(this, e, function (e, t, i) {
                      (n[e] = t),
                        void 0 === this.current[e] &&
                          ((a = 0),
                          ~e.indexOf("scale") && (a = 1),
                          (this.current[e] = this.convert(a, i)));
                    }),
                    n
                  );
                });
            }),
            F = u(function (a) {
              function d() {
                var e,
                  a,
                  t,
                  n = c.length;
                if (n)
                  for (G(d), a = w(), e = n; e--; ) (t = c[e]) && t.render(a);
              }
              var o = { ease: s.ease[1], from: 0, to: 1 };
              (a.init = function (e) {
                (this.duration = e.duration || 0), (this.delay = e.delay || 0);
                var a = e.ease || o.ease;
                s[a] && (a = s[a][1]),
                  "function" != typeof a && (a = o.ease),
                  (this.ease = a),
                  (this.update = e.update || i),
                  (this.complete = e.complete || i),
                  (this.context = e.context || this),
                  (this.name = e.name);
                var t = e.from,
                  n = e.to;
                void 0 === t && (t = o.from),
                  void 0 === n && (n = o.to),
                  (this.unit = e.unit || ""),
                  "number" == typeof t && "number" == typeof n
                    ? ((this.begin = t), (this.change = n - t))
                    : this.format(n, t),
                  (this.value = this.begin + this.unit),
                  (this.start = w()),
                  !1 !== e.autoplay && this.play();
              }),
                (a.play = function () {
                  this.active ||
                    (this.start || (this.start = w()),
                    (this.active = !0),
                    1 === c.push(this) && G(d));
                }),
                (a.stop = function () {
                  var a, t;
                  this.active &&
                    ((this.active = !1),
                    (t = e.inArray(this, c)) >= 0 &&
                      ((a = c.slice(t + 1)),
                      (c.length = t),
                      a.length && (c = c.concat(a))));
                }),
                (a.render = function (e) {
                  var a,
                    t = e - this.start;
                  if (this.delay) {
                    if (t <= this.delay) return;
                    t -= this.delay;
                  }
                  if (t < this.duration) {
                    var i,
                      d,
                      l = this.ease(t, 0, 1, this.duration);
                    return (
                      (a = this.startRGB
                        ? ((i = this.startRGB),
                          (d = this.endRGB),
                          n(
                            i[0] + l * (d[0] - i[0]),
                            i[1] + l * (d[1] - i[1]),
                            i[2] + l * (d[2] - i[2])
                          ))
                        : Math.round((this.begin + l * this.change) * r) / r),
                      (this.value = a + this.unit),
                      void this.update.call(this.context, this.value)
                    );
                  }
                  (a = this.endHex || this.begin + this.change),
                    (this.value = a + this.unit),
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy();
                }),
                (a.format = function (e, a) {
                  if (((a += ""), "#" == (e += "").charAt(0)))
                    return (
                      (this.startRGB = t(a)),
                      (this.endRGB = t(e)),
                      (this.endHex = e),
                      (this.begin = 0),
                      void (this.change = 1)
                    );
                  if (!this.unit) {
                    var n = a.replace(_, "");
                    n !== e.replace(_, "") &&
                      l("Units do not match [tween]: " + a + ", " + e),
                      (this.unit = n);
                  }
                  (a = parseFloat(a)),
                    (e = parseFloat(e)),
                    (this.begin = this.value = a),
                    (this.change = e - a);
                }),
                (a.destroy = function () {
                  this.stop(),
                    (this.context = null),
                    (this.ease = this.update = this.complete = i);
                });
              var c = [],
                r = 1e3;
            }),
            x = u(F, function (e) {
              (e.init = function (e) {
                (this.duration = e.duration || 0),
                  (this.complete = e.complete || i),
                  (this.context = e.context),
                  this.play();
              }),
                (e.render = function (e) {
                  e - this.start < this.duration ||
                    (this.complete.call(this.context), this.destroy());
                });
            }),
            B = u(F, function (e, a) {
              (e.init = function (e) {
                var a, t;
                for (a in ((this.context = e.context),
                (this.update = e.update),
                (this.tweens = []),
                (this.current = e.current),
                e.values))
                  (t = e.values[a]),
                    this.current[a] !== t &&
                      this.tweens.push(
                        new F({
                          name: a,
                          from: this.current[a],
                          to: t,
                          duration: e.duration,
                          delay: e.delay,
                          ease: e.ease,
                          autoplay: !1,
                        })
                      );
                this.play();
              }),
                (e.render = function (e) {
                  var a,
                    t,
                    n = this.tweens.length,
                    i = !1;
                  for (a = n; a--; )
                    (t = this.tweens[a]).context &&
                      (t.render(e), (this.current[t.name] = t.value), (i = !0));
                  return i
                    ? void (this.update && this.update.call(this.context))
                    : this.destroy();
                }),
                (e.destroy = function () {
                  if ((a.destroy.call(this), this.tweens)) {
                    var e;
                    for (e = this.tweens.length; e--; )
                      this.tweens[e].destroy();
                    (this.tweens = null), (this.current = null);
                  }
                });
            }),
            X = (a.config = {
              debug: !1,
              defaultUnit: "px",
              defaultAngle: "deg",
              keepInherited: !1,
              hideBackface: !1,
              perspective: "",
              fallback: !A.transition,
              agentTests: [],
            });
          (a.fallback = function (e) {
            if (!A.transition) return (X.fallback = !0);
            X.agentTests.push("(" + e + ")");
            var a = RegExp(X.agentTests.join("|"), "i");
            X.fallback = a.test(navigator.userAgent);
          }),
            a.fallback("6.0.[2-5] Safari"),
            (a.tween = function (e) {
              return new F(e);
            }),
            (a.delay = function (e, a, t) {
              return new x({ complete: a, duration: e, context: t });
            }),
            (e.fn.tram = function (e) {
              return a.call(null, this, e);
            });
          var z = e.style,
            H = e.css,
            j = { transform: A.transform && A.transform.css },
            K = {
              color: [k, E],
              background: [k, E, "background-color"],
              "outline-color": [k, E],
              "border-color": [k, E],
              "border-top-color": [k, E],
              "border-right-color": [k, E],
              "border-bottom-color": [k, E],
              "border-left-color": [k, E],
              "border-width": [P, I],
              "border-top-width": [P, I],
              "border-right-width": [P, I],
              "border-bottom-width": [P, I],
              "border-left-width": [P, I],
              "border-spacing": [P, I],
              "letter-spacing": [P, I],
              margin: [P, I],
              "margin-top": [P, I],
              "margin-right": [P, I],
              "margin-bottom": [P, I],
              "margin-left": [P, I],
              padding: [P, I],
              "padding-top": [P, I],
              "padding-right": [P, I],
              "padding-bottom": [P, I],
              "padding-left": [P, I],
              "outline-width": [P, I],
              opacity: [P, T],
              top: [P, p],
              right: [P, p],
              bottom: [P, p],
              left: [P, p],
              "font-size": [P, p],
              "text-indent": [P, p],
              "word-spacing": [P, p],
              width: [P, p],
              "min-width": [P, p],
              "max-width": [P, p],
              height: [P, p],
              "min-height": [P, p],
              "max-height": [P, p],
              "line-height": [P, m],
              "scroll-top": [D, T, "scrollTop"],
              "scroll-left": [D, T, "scrollLeft"],
            },
            W = {};
          A.transform &&
            ((K.transform = [Y]),
            (W = {
              x: [p, "translateX"],
              y: [p, "translateY"],
              rotate: [O],
              rotateX: [O],
              rotateY: [O],
              scale: [T],
              scaleX: [T],
              scaleY: [T],
              skew: [O],
              skewX: [O],
              skewY: [O],
            })),
            A.transform &&
              A.backface &&
              ((W.z = [p, "translateZ"]),
              (W.rotateZ = [O]),
              (W.scaleZ = [T]),
              (W.perspective = [I]));
          var Q = /ms/,
            q = /s|\./;
          return (e.tram = a);
        })(window.jQuery);
      },
      5756: function (e, a, t) {
        "use strict";
        var n,
          i,
          d,
          l,
          o,
          c,
          r,
          u,
          s,
          f,
          g,
          b,
          _,
          y,
          T,
          E,
          I,
          p,
          O,
          m,
          V = window.$,
          h = t(5487) && V.tram;
        ((n = {}).VERSION = "1.6.0-Webflow"),
          (i = {}),
          (d = Array.prototype),
          (l = Object.prototype),
          (o = Function.prototype),
          d.push,
          (c = d.slice),
          d.concat,
          l.toString,
          (r = l.hasOwnProperty),
          (u = d.forEach),
          (s = d.map),
          d.reduce,
          d.reduceRight,
          (f = d.filter),
          d.every,
          (g = d.some),
          (b = d.indexOf),
          d.lastIndexOf,
          (_ = Object.keys),
          o.bind,
          (y =
            n.each =
            n.forEach =
              function (e, a, t) {
                if (null == e) return e;
                if (u && e.forEach === u) e.forEach(a, t);
                else if (e.length === +e.length) {
                  for (var d = 0, l = e.length; d < l; d++)
                    if (a.call(t, e[d], d, e) === i) return;
                } else
                  for (var o = n.keys(e), d = 0, l = o.length; d < l; d++)
                    if (a.call(t, e[o[d]], o[d], e) === i) return;
                return e;
              }),
          (n.map = n.collect =
            function (e, a, t) {
              var n = [];
              return null == e
                ? n
                : s && e.map === s
                ? e.map(a, t)
                : (y(e, function (e, i, d) {
                    n.push(a.call(t, e, i, d));
                  }),
                  n);
            }),
          (n.find = n.detect =
            function (e, a, t) {
              var n;
              return (
                T(e, function (e, i, d) {
                  if (a.call(t, e, i, d)) return (n = e), !0;
                }),
                n
              );
            }),
          (n.filter = n.select =
            function (e, a, t) {
              var n = [];
              return null == e
                ? n
                : f && e.filter === f
                ? e.filter(a, t)
                : (y(e, function (e, i, d) {
                    a.call(t, e, i, d) && n.push(e);
                  }),
                  n);
            }),
          (T =
            n.some =
            n.any =
              function (e, a, t) {
                a || (a = n.identity);
                var d = !1;
                return null == e
                  ? d
                  : g && e.some === g
                  ? e.some(a, t)
                  : (y(e, function (e, n, l) {
                      if (d || (d = a.call(t, e, n, l))) return i;
                    }),
                    !!d);
              }),
          (n.contains = n.include =
            function (e, a) {
              return (
                null != e &&
                (b && e.indexOf === b
                  ? -1 != e.indexOf(a)
                  : T(e, function (e) {
                      return e === a;
                    }))
              );
            }),
          (n.delay = function (e, a) {
            var t = c.call(arguments, 2);
            return setTimeout(function () {
              return e.apply(null, t);
            }, a);
          }),
          (n.defer = function (e) {
            return n.delay.apply(n, [e, 1].concat(c.call(arguments, 1)));
          }),
          (n.throttle = function (e) {
            var a, t, n;
            return function () {
              a ||
                ((a = !0),
                (t = arguments),
                (n = this),
                h.frame(function () {
                  (a = !1), e.apply(n, t);
                }));
            };
          }),
          (n.debounce = function (e, a, t) {
            var i,
              d,
              l,
              o,
              c,
              r = function () {
                var u = n.now() - o;
                u < a
                  ? (i = setTimeout(r, a - u))
                  : ((i = null), t || ((c = e.apply(l, d)), (l = d = null)));
              };
            return function () {
              (l = this), (d = arguments), (o = n.now());
              var u = t && !i;
              return (
                i || (i = setTimeout(r, a)),
                u && ((c = e.apply(l, d)), (l = d = null)),
                c
              );
            };
          }),
          (n.defaults = function (e) {
            if (!n.isObject(e)) return e;
            for (var a = 1, t = arguments.length; a < t; a++) {
              var i = arguments[a];
              for (var d in i) void 0 === e[d] && (e[d] = i[d]);
            }
            return e;
          }),
          (n.keys = function (e) {
            if (!n.isObject(e)) return [];
            if (_) return _(e);
            var a = [];
            for (var t in e) n.has(e, t) && a.push(t);
            return a;
          }),
          (n.has = function (e, a) {
            return r.call(e, a);
          }),
          (n.isObject = function (e) {
            return e === Object(e);
          }),
          (n.now =
            Date.now ||
            function () {
              return new Date().getTime();
            }),
          (n.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g,
          }),
          (E = /(.)^/),
          (I = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029",
          }),
          (p = /\\|'|\r|\n|\u2028|\u2029/g),
          (O = function (e) {
            return "\\" + I[e];
          }),
          (m = /^\s*(\w|\$)+\s*$/),
          (n.template = function (e, a, t) {
            !a && t && (a = t);
            var i,
              d = RegExp(
                [
                  ((a = n.defaults({}, a, n.templateSettings)).escape || E)
                    .source,
                  (a.interpolate || E).source,
                  (a.evaluate || E).source,
                ].join("|") + "|$",
                "g"
              ),
              l = 0,
              o = "__p+='";
            e.replace(d, function (a, t, n, i, d) {
              return (
                (o += e.slice(l, d).replace(p, O)),
                (l = d + a.length),
                t
                  ? (o += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'")
                  : n
                  ? (o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'")
                  : i && (o += "';\n" + i + "\n__p+='"),
                a
              );
            }),
              (o += "';\n");
            var c = a.variable;
            if (c) {
              if (!m.test(c))
                throw Error("variable is not a bare identifier: " + c);
            } else (o = "with(obj||{}){\n" + o + "}\n"), (c = "obj");
            o =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              o +
              "return __p;\n";
            try {
              i = Function(a.variable || "obj", "_", o);
            } catch (e) {
              throw ((e.source = o), e);
            }
            var r = function (e) {
              return i.call(this, e, n);
            };
            return (r.source = "function(" + c + "){\n" + o + "}"), r;
          }),
          (e.exports = n);
      },
      9461: function (e, a, t) {
        "use strict";
        var n = t(3949);
        n.define(
          "brand",
          (e.exports = function (e) {
            var a,
              t = {},
              i = document,
              d = e("html"),
              l = e("body"),
              o = window.location,
              c = /PhantomJS/i.test(navigator.userAgent),
              r =
                "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
            function u() {
              var t =
                i.fullScreen ||
                i.mozFullScreen ||
                i.webkitIsFullScreen ||
                i.msFullscreenElement ||
                !!i.webkitFullscreenElement;
              e(a).attr("style", t ? "display: none !important;" : "");
            }
            function s() {
              var e = l.children(".w-webflow-badge"),
                t = e.length && e.get(0) === a,
                i = n.env("editor");
              if (t) {
                i && e.remove();
                return;
              }
              e.length && e.remove(), i || l.append(a);
            }
            return (
              (t.ready = function () {
                var t,
                  n,
                  l,
                  f = d.attr("data-wf-status"),
                  g = d.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(g) && o.hostname !== g && (f = !0),
                  f &&
                    !c &&
                    ((a =
                      a ||
                      ((t = e('<a class="w-webflow-badge"></a>').attr(
                        "href",
                        "https://webflow.com?utm_campaign=brandjs"
                      )),
                      (n = e("<img>")
                        .attr(
                          "src",
                          "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                        )
                        .attr("alt", "")
                        .css({ marginRight: "4px", width: "26px" })),
                      (l = e("<img>")
                        .attr(
                          "src",
                          "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                        )
                        .attr("alt", "Made in Webflow")),
                      t.append(n, l),
                      t[0])),
                    s(),
                    setTimeout(s, 500),
                    e(i).off(r, u).on(r, u));
              }),
              t
            );
          })
        );
      },
      322: function (e, a, t) {
        "use strict";
        var n = t(3949);
        n.define(
          "edit",
          (e.exports = function (e, a, t) {
            if (
              ((t = t || {}),
              (n.env("test") || n.env("frame")) &&
                !t.fixture &&
                !(function () {
                  try {
                    return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                  } catch (e) {
                    return !1;
                  }
                })())
            )
              return { exit: 1 };
            var i,
              d = e(window),
              l = e(document.documentElement),
              o = document.location,
              c = "hashchange",
              r =
                t.load ||
                function () {
                  var a, t, n;
                  (i = !0),
                    (window.WebflowEditor = !0),
                    d.off(c, s),
                    (a = function (a) {
                      var t;
                      e.ajax({
                        url: g(
                          "https://editor-api.webflow.com/api/editor/view"
                        ),
                        data: { siteId: l.attr("data-wf-site") },
                        xhrFields: { withCredentials: !0 },
                        dataType: "json",
                        crossDomain: !0,
                        success:
                          ((t = a),
                          function (a) {
                            var n, i, d;
                            if (!a)
                              return void console.error(
                                "Could not load editor data"
                              );
                            (a.thirdPartyCookiesSupported = t),
                              (i =
                                (n = a.scriptPath).indexOf("//") >= 0
                                  ? n
                                  : g("https://editor-api.webflow.com" + n)),
                              (d = function () {
                                window.WebflowEditor(a);
                              }),
                              e
                                .ajax({
                                  type: "GET",
                                  url: i,
                                  dataType: "script",
                                  cache: !0,
                                })
                                .then(d, f);
                          }),
                      });
                    }),
                    ((t = window.document.createElement("iframe")).src =
                      "https://webflow.com/site/third-party-cookie-check.html"),
                    (t.style.display = "none"),
                    (t.sandbox = "allow-scripts allow-same-origin"),
                    (n = function (e) {
                      "WF_third_party_cookies_unsupported" === e.data
                        ? (b(t, n), a(!1))
                        : "WF_third_party_cookies_supported" === e.data &&
                          (b(t, n), a(!0));
                    }),
                    (t.onerror = function () {
                      b(t, n), a(!1);
                    }),
                    window.addEventListener("message", n, !1),
                    window.document.body.appendChild(t);
                },
              u = !1;
            try {
              u =
                localStorage &&
                localStorage.getItem &&
                localStorage.getItem("WebflowEditor");
            } catch (e) {}
            function s() {
              !i && /\?edit/.test(o.hash) && r();
            }
            function f(e, a, t) {
              throw (console.error("Could not load editor script: " + a), t);
            }
            function g(e) {
              return e.replace(/([^:])\/\//g, "$1/");
            }
            function b(e, a) {
              window.removeEventListener("message", a, !1), e.remove();
            }
            return (
              u
                ? r()
                : o.search
                ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) ||
                    /\?edit$/.test(o.href)) &&
                  r()
                : d.on(c, s).triggerHandler(c),
              {}
            );
          })
        );
      },
      2338: function (e, a, t) {
        "use strict";
        t(3949).define(
          "focus-visible",
          (e.exports = function () {
            return {
              ready: function () {
                if ("undefined" != typeof document)
                  try {
                    document.querySelector(":focus-visible");
                  } catch (e) {
                    !(function (e) {
                      var a = !0,
                        t = !1,
                        n = null,
                        i = {
                          text: !0,
                          search: !0,
                          url: !0,
                          tel: !0,
                          email: !0,
                          password: !0,
                          number: !0,
                          date: !0,
                          month: !0,
                          week: !0,
                          time: !0,
                          datetime: !0,
                          "datetime-local": !0,
                        };
                      function d(e) {
                        return (
                          !!e &&
                          e !== document &&
                          "HTML" !== e.nodeName &&
                          "BODY" !== e.nodeName &&
                          "classList" in e &&
                          "contains" in e.classList
                        );
                      }
                      function l(e) {
                        e.getAttribute("data-wf-focus-visible") ||
                          e.setAttribute("data-wf-focus-visible", "true");
                      }
                      function o() {
                        a = !1;
                      }
                      function c() {
                        document.addEventListener("mousemove", r),
                          document.addEventListener("mousedown", r),
                          document.addEventListener("mouseup", r),
                          document.addEventListener("pointermove", r),
                          document.addEventListener("pointerdown", r),
                          document.addEventListener("pointerup", r),
                          document.addEventListener("touchmove", r),
                          document.addEventListener("touchstart", r),
                          document.addEventListener("touchend", r);
                      }
                      function r(e) {
                        (e.target.nodeName &&
                          "html" === e.target.nodeName.toLowerCase()) ||
                          ((a = !1),
                          document.removeEventListener("mousemove", r),
                          document.removeEventListener("mousedown", r),
                          document.removeEventListener("mouseup", r),
                          document.removeEventListener("pointermove", r),
                          document.removeEventListener("pointerdown", r),
                          document.removeEventListener("pointerup", r),
                          document.removeEventListener("touchmove", r),
                          document.removeEventListener("touchstart", r),
                          document.removeEventListener("touchend", r));
                      }
                      document.addEventListener(
                        "keydown",
                        function (t) {
                          t.metaKey ||
                            t.altKey ||
                            t.ctrlKey ||
                            (d(e.activeElement) && l(e.activeElement),
                            (a = !0));
                        },
                        !0
                      ),
                        document.addEventListener("mousedown", o, !0),
                        document.addEventListener("pointerdown", o, !0),
                        document.addEventListener("touchstart", o, !0),
                        document.addEventListener(
                          "visibilitychange",
                          function () {
                            "hidden" === document.visibilityState &&
                              (t && (a = !0), c());
                          },
                          !0
                        ),
                        c(),
                        e.addEventListener(
                          "focus",
                          function (e) {
                            if (d(e.target)) {
                              var t, n, o;
                              (a ||
                                ((n = (t = e.target).type),
                                ("INPUT" === (o = t.tagName) &&
                                  i[n] &&
                                  !t.readOnly) ||
                                  ("TEXTAREA" === o && !t.readOnly) ||
                                  t.isContentEditable ||
                                  0)) &&
                                l(e.target);
                            }
                          },
                          !0
                        ),
                        e.addEventListener(
                          "blur",
                          function (e) {
                            if (
                              d(e.target) &&
                              e.target.hasAttribute("data-wf-focus-visible")
                            ) {
                              var a;
                              (t = !0),
                                window.clearTimeout(n),
                                (n = window.setTimeout(function () {
                                  t = !1;
                                }, 100)),
                                (a = e.target).getAttribute(
                                  "data-wf-focus-visible"
                                ) && a.removeAttribute("data-wf-focus-visible");
                            }
                          },
                          !0
                        );
                    })(document);
                  }
              },
            };
          })
        );
      },
      8334: function (e, a, t) {
        "use strict";
        var n = t(3949);
        n.define(
          "focus",
          (e.exports = function () {
            var e = [],
              a = !1;
            function t(t) {
              a &&
                (t.preventDefault(),
                t.stopPropagation(),
                t.stopImmediatePropagation(),
                e.unshift(t));
            }
            function i(t) {
              var n, i;
              (i = (n = t.target).tagName),
                ((/^a$/i.test(i) && null != n.href) ||
                  (/^(button|textarea)$/i.test(i) && !0 !== n.disabled) ||
                  (/^input$/i.test(i) &&
                    /^(button|reset|submit|radio|checkbox)$/i.test(n.type) &&
                    !n.disabled) ||
                  (!/^(button|input|textarea|select|a)$/i.test(i) &&
                    !Number.isNaN(Number.parseFloat(n.tabIndex))) ||
                  /^audio$/i.test(i) ||
                  (/^video$/i.test(i) && !0 === n.controls)) &&
                  ((a = !0),
                  setTimeout(() => {
                    for (a = !1, t.target.focus(); e.length > 0; ) {
                      var n = e.pop();
                      n.target.dispatchEvent(new MouseEvent(n.type, n));
                    }
                  }, 0));
            }
            return {
              ready: function () {
                "undefined" != typeof document &&
                  document.body.hasAttribute("data-wf-focus-within") &&
                  n.env.safari &&
                  (document.addEventListener("mousedown", i, !0),
                  document.addEventListener("mouseup", t, !0),
                  document.addEventListener("click", t, !0));
              },
            };
          })
        );
      },
      7199: function (e) {
        "use strict";
        var a = window.jQuery,
          t = {},
          n = [],
          i = ".w-ix",
          d = {
            reset: function (e, a) {
              a.__wf_intro = null;
            },
            intro: function (e, n) {
              n.__wf_intro ||
                ((n.__wf_intro = !0), a(n).triggerHandler(t.types.INTRO));
            },
            outro: function (e, n) {
              n.__wf_intro &&
                ((n.__wf_intro = null), a(n).triggerHandler(t.types.OUTRO));
            },
          };
        (t.triggers = {}),
          (t.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
          (t.init = function () {
            for (var e = n.length, i = 0; i < e; i++) {
              var l = n[i];
              l[0](0, l[1]);
            }
            (n = []), a.extend(t.triggers, d);
          }),
          (t.async = function () {
            for (var e in d) {
              var a = d[e];
              d.hasOwnProperty(e) &&
                (t.triggers[e] = function (e, t) {
                  n.push([a, t]);
                });
            }
          }),
          t.async(),
          (e.exports = t);
      },
      5134: function (e, a, t) {
        "use strict";
        var n = t(7199);
        function i(e, a) {
          var t = document.createEvent("CustomEvent");
          t.initCustomEvent(a, !0, !0, null), e.dispatchEvent(t);
        }
        var d = window.jQuery,
          l = {},
          o = ".w-ix";
        (l.triggers = {}),
          (l.types = { INTRO: "w-ix-intro" + o, OUTRO: "w-ix-outro" + o }),
          d.extend(l.triggers, {
            reset: function (e, a) {
              n.triggers.reset(e, a);
            },
            intro: function (e, a) {
              n.triggers.intro(e, a), i(a, "COMPONENT_ACTIVE");
            },
            outro: function (e, a) {
              n.triggers.outro(e, a), i(a, "COMPONENT_INACTIVE");
            },
          }),
          (e.exports = l);
      },
      941: function (e, a, t) {
        "use strict";
        var n = t(3949),
          i = t(6011);
        i.setEnv(n.env),
          n.define(
            "ix2",
            (e.exports = function () {
              return i;
            })
          );
      },
      3949: function (e, a, t) {
        "use strict";
        var n,
          i,
          d = {},
          l = {},
          o = [],
          c = window.Webflow || [],
          r = window.jQuery,
          u = r(window),
          s = r(document),
          f = r.isFunction,
          g = (d._ = t(5756)),
          b = (d.tram = t(5487) && r.tram),
          _ = !1,
          y = !1;
        function T(e) {
          d.env() &&
            (f(e.design) && u.on("__wf_design", e.design),
            f(e.preview) && u.on("__wf_preview", e.preview)),
            f(e.destroy) && u.on("__wf_destroy", e.destroy),
            e.ready &&
              f(e.ready) &&
              (function (e) {
                if (_) return e.ready();
                g.contains(o, e.ready) || o.push(e.ready);
              })(e);
        }
        function E(e) {
          var a;
          f(e.design) && u.off("__wf_design", e.design),
            f(e.preview) && u.off("__wf_preview", e.preview),
            f(e.destroy) && u.off("__wf_destroy", e.destroy),
            e.ready &&
              f(e.ready) &&
              ((a = e),
              (o = g.filter(o, function (e) {
                return e !== a.ready;
              })));
        }
        (b.config.hideBackface = !1),
          (b.config.keepInherited = !0),
          (d.define = function (e, a, t) {
            l[e] && E(l[e]);
            var n = (l[e] = a(r, g, t) || {});
            return T(n), n;
          }),
          (d.require = function (e) {
            return l[e];
          }),
          (d.push = function (e) {
            if (_) {
              f(e) && e();
              return;
            }
            c.push(e);
          }),
          (d.env = function (e) {
            var a = window.__wf_design,
              t = void 0 !== a;
            return e
              ? "design" === e
                ? t && a
                : "preview" === e
                ? t && !a
                : "slug" === e
                ? t && window.__wf_slug
                : "editor" === e
                ? window.WebflowEditor
                : "test" === e
                ? window.__wf_test
                : "frame" === e
                ? window !== window.top
                : void 0
              : t;
          });
        var I = navigator.userAgent.toLowerCase(),
          p = (d.env.touch =
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof window.DocumentTouch)),
          O = (d.env.chrome =
            /chrome/.test(I) &&
            /Google/.test(navigator.vendor) &&
            parseInt(I.match(/chrome\/(\d+)\./)[1], 10)),
          m = (d.env.ios = /(ipod|iphone|ipad)/.test(I));
        (d.env.safari = /safari/.test(I) && !O && !m),
          p &&
            s.on("touchstart mousedown", function (e) {
              n = e.target;
            }),
          (d.validClick = p
            ? function (e) {
                return e === n || r.contains(e, n);
              }
            : function () {
                return !0;
              });
        var V = "resize.webflow orientationchange.webflow load.webflow",
          h = "scroll.webflow " + V;
        function v(e, a) {
          var t = [],
            n = {};
          return (
            (n.up = g.throttle(function (e) {
              g.each(t, function (a) {
                a(e);
              });
            })),
            e && a && e.on(a, n.up),
            (n.on = function (e) {
              "function" == typeof e && (g.contains(t, e) || t.push(e));
            }),
            (n.off = function (e) {
              if (!arguments.length) {
                t = [];
                return;
              }
              t = g.filter(t, function (a) {
                return a !== e;
              });
            }),
            n
          );
        }
        function R(e) {
          f(e) && e();
        }
        function S() {
          i && (i.reject(), u.off("load", i.resolve)),
            (i = new r.Deferred()),
            u.on("load", i.resolve);
        }
        (d.resize = v(u, V)),
          (d.scroll = v(u, h)),
          (d.redraw = v()),
          (d.location = function (e) {
            window.location = e;
          }),
          d.env() && (d.location = function () {}),
          (d.ready = function () {
            (_ = !0),
              y ? ((y = !1), g.each(l, T)) : g.each(o, R),
              g.each(c, R),
              d.resize.up();
          }),
          (d.load = function (e) {
            i.then(e);
          }),
          (d.destroy = function (e) {
            (e = e || {}),
              (y = !0),
              u.triggerHandler("__wf_destroy"),
              null != e.domready && (_ = e.domready),
              g.each(l, E),
              d.resize.off(),
              d.scroll.off(),
              d.redraw.off(),
              (o = []),
              (c = []),
              "pending" === i.state() && S();
          }),
          r(d.ready),
          S(),
          (e.exports = window.Webflow = d);
      },
      7624: function (e, a, t) {
        "use strict";
        var n = t(3949);
        n.define(
          "links",
          (e.exports = function (e, a) {
            var t,
              i,
              d,
              l = {},
              o = e(window),
              c = n.env(),
              r = window.location,
              u = document.createElement("a"),
              s = "w--current",
              f = /index\.(html|php)$/,
              g = /\/$/;
            function b() {
              var e = o.scrollTop(),
                t = o.height();
              a.each(i, function (a) {
                if (!a.link.attr("hreflang")) {
                  var n = a.link,
                    i = a.sec,
                    d = i.offset().top,
                    l = i.outerHeight(),
                    o = 0.5 * t,
                    c = i.is(":visible") && d + l - o >= e && d + o <= e + t;
                  a.active !== c && ((a.active = c), _(n, s, c));
                }
              });
            }
            function _(e, a, t) {
              var n = e.hasClass(a);
              (!t || !n) && (t || n) && (t ? e.addClass(a) : e.removeClass(a));
            }
            return (
              (l.ready =
                l.design =
                l.preview =
                  function () {
                    (t = c && n.env("design")),
                      (d = n.env("slug") || r.pathname || ""),
                      n.scroll.off(b),
                      (i = []);
                    for (var a = document.links, l = 0; l < a.length; ++l)
                      !(function (a) {
                        if (!a.getAttribute("hreflang")) {
                          var n =
                            (t && a.getAttribute("href-disabled")) ||
                            a.getAttribute("href");
                          if (((u.href = n), !(n.indexOf(":") >= 0))) {
                            var l = e(a);
                            if (
                              u.hash.length > 1 &&
                              u.host + u.pathname === r.host + r.pathname
                            ) {
                              if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                              var o = e(u.hash);
                              o.length &&
                                i.push({ link: l, sec: o, active: !1 });
                              return;
                            }
                            "#" !== n &&
                              "" !== n &&
                              _(
                                l,
                                s,
                                u.href === r.href ||
                                  n === d ||
                                  (f.test(n) && g.test(d))
                              );
                          }
                        }
                      })(a[l]);
                    i.length && (n.scroll.on(b), b());
                  }),
              l
            );
          })
        );
      },
      286: function (e, a, t) {
        "use strict";
        var n = t(3949);
        n.define(
          "scroll",
          (e.exports = function (e) {
            var a = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll",
              },
              t = window.location,
              i = !(function () {
                try {
                  return !!window.frameElement;
                } catch (e) {
                  return !0;
                }
              })()
                ? window.history
                : null,
              d = e(window),
              l = e(document),
              o = e(document.body),
              c =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (e) {
                  window.setTimeout(e, 15);
                },
              r = n.env("editor") ? ".w-editor-body" : "body",
              u =
                "header, " +
                r +
                " > .header, " +
                r +
                " > .w-nav:not([data-no-scroll])",
              s = 'a[href="#"]',
              f = 'a[href*="#"]:not(.w-tab-link):not(' + s + ")",
              g = document.createElement("style");
            g.appendChild(
              document.createTextNode(
                '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              )
            );
            var b = /^#[a-zA-Z0-9][\w:.-]*$/;
            let _ =
              "function" == typeof window.matchMedia &&
              window.matchMedia("(prefers-reduced-motion: reduce)");
            function y(e, a) {
              var t;
              switch (a) {
                case "add":
                  (t = e.attr("tabindex"))
                    ? e.attr("data-wf-tabindex-swap", t)
                    : e.attr("tabindex", "-1");
                  break;
                case "remove":
                  (t = e.attr("data-wf-tabindex-swap"))
                    ? (e.attr("tabindex", t),
                      e.removeAttr("data-wf-tabindex-swap"))
                    : e.removeAttr("tabindex");
              }
              e.toggleClass("wf-force-outline-none", "add" === a);
            }
            function T(a) {
              var l = a.currentTarget;
              if (
                !(
                  n.env("design") ||
                  (window.$.mobile &&
                    /(?:^|\s)ui-link(?:$|\s)/.test(l.className))
                )
              ) {
                var r =
                  b.test(l.hash) && l.host + l.pathname === t.host + t.pathname
                    ? l.hash
                    : "";
                if ("" !== r) {
                  var s,
                    f = e(r);
                  f.length &&
                    (a && (a.preventDefault(), a.stopPropagation()),
                    (s = r),
                    t.hash !== s &&
                      i &&
                      i.pushState &&
                      !(n.env.chrome && "file:" === t.protocol) &&
                      (i.state && i.state.hash) !== s &&
                      i.pushState({ hash: s }, "", s),
                    window.setTimeout(function () {
                      !(function (a, t) {
                        var n = d.scrollTop(),
                          i = (function (a) {
                            var t = e(u),
                              n =
                                "fixed" === t.css("position")
                                  ? t.outerHeight()
                                  : 0,
                              i = a.offset().top - n;
                            if ("mid" === a.data("scroll")) {
                              var l = d.height() - n,
                                o = a.outerHeight();
                              o < l && (i -= Math.round((l - o) / 2));
                            }
                            return i;
                          })(a);
                        if (n !== i) {
                          var l = (function (e, a, t) {
                              if (
                                "none" ===
                                  document.body.getAttribute(
                                    "data-wf-scroll-motion"
                                  ) ||
                                _.matches
                              )
                                return 0;
                              var n = 1;
                              return (
                                o.add(e).each(function (e, a) {
                                  var t = parseFloat(
                                    a.getAttribute("data-scroll-time")
                                  );
                                  !isNaN(t) && t >= 0 && (n = t);
                                }),
                                (472.143 * Math.log(Math.abs(a - t) + 125) -
                                  2e3) *
                                  n
                              );
                            })(a, n, i),
                            r = Date.now(),
                            s = function () {
                              var e,
                                a,
                                d,
                                o,
                                u,
                                f = Date.now() - r;
                              window.scroll(
                                0,
                                ((e = n),
                                (a = i),
                                (d = f) > (o = l)
                                  ? a
                                  : e +
                                    (a - e) *
                                      ((u = d / o) < 0.5
                                        ? 4 * u * u * u
                                        : (u - 1) * (2 * u - 2) * (2 * u - 2) +
                                          1))
                              ),
                                f <= l ? c(s) : "function" == typeof t && t();
                            };
                          c(s);
                        }
                      })(f, function () {
                        y(f, "add"),
                          f.get(0).focus({ preventScroll: !0 }),
                          y(f, "remove");
                      });
                    }, 300 * !a));
                }
              }
            }
            return {
              ready: function () {
                var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: t } = a;
                l.on(t, f, T),
                  l.on(e, s, function (e) {
                    e.preventDefault();
                  }),
                  document.head.insertBefore(g, document.head.firstChild);
              },
            };
          })
        );
      },
      3695: function (e, a, t) {
        "use strict";
        t(3949).define(
          "touch",
          (e.exports = function (e) {
            var a = {},
              t = window.getSelection;
            function n(a) {
              var n,
                i,
                d = !1,
                l = !1,
                o = Math.min(Math.round(0.04 * window.innerWidth), 40);
              function c(e) {
                var a = e.touches;
                (a && a.length > 1) ||
                  ((d = !0),
                  a ? ((l = !0), (n = a[0].clientX)) : (n = e.clientX),
                  (i = n));
              }
              function r(a) {
                if (d) {
                  if (l && "mousemove" === a.type) {
                    a.preventDefault(), a.stopPropagation();
                    return;
                  }
                  var n,
                    c,
                    r,
                    u,
                    f = a.touches,
                    g = f ? f[0].clientX : a.clientX,
                    b = g - i;
                  (i = g),
                    Math.abs(b) > o &&
                      t &&
                      "" === String(t()) &&
                      ((n = "swipe"),
                      (c = a),
                      (r = { direction: b > 0 ? "right" : "left" }),
                      (u = e.Event(n, { originalEvent: c })),
                      e(c.target).trigger(u, r),
                      s());
                }
              }
              function u(e) {
                if (d && ((d = !1), l && "mouseup" === e.type)) {
                  e.preventDefault(), e.stopPropagation(), (l = !1);
                  return;
                }
              }
              function s() {
                d = !1;
              }
              a.addEventListener("touchstart", c, !1),
                a.addEventListener("touchmove", r, !1),
                a.addEventListener("touchend", u, !1),
                a.addEventListener("touchcancel", s, !1),
                a.addEventListener("mousedown", c, !1),
                a.addEventListener("mousemove", r, !1),
                a.addEventListener("mouseup", u, !1),
                a.addEventListener("mouseout", s, !1),
                (this.destroy = function () {
                  a.removeEventListener("touchstart", c, !1),
                    a.removeEventListener("touchmove", r, !1),
                    a.removeEventListener("touchend", u, !1),
                    a.removeEventListener("touchcancel", s, !1),
                    a.removeEventListener("mousedown", c, !1),
                    a.removeEventListener("mousemove", r, !1),
                    a.removeEventListener("mouseup", u, !1),
                    a.removeEventListener("mouseout", s, !1),
                    (a = null);
                });
            }
            return (
              (e.event.special.tap = {
                bindType: "click",
                delegateType: "click",
              }),
              (a.init = function (a) {
                return (a = "string" == typeof a ? e(a).get(0) : a)
                  ? new n(a)
                  : null;
              }),
              (a.instance = a.init(document)),
              a
            );
          })
        );
      },
      3946: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n = {
          actionListPlaybackChanged: function () {
            return H;
          },
          animationFrameChanged: function () {
            return Y;
          },
          clearRequested: function () {
            return M;
          },
          elementStateChanged: function () {
            return z;
          },
          eventListenerAdded: function () {
            return P;
          },
          eventStateChanged: function () {
            return D;
          },
          instanceAdded: function () {
            return x;
          },
          instanceRemoved: function () {
            return X;
          },
          instanceStarted: function () {
            return B;
          },
          mediaQueriesDefined: function () {
            return K;
          },
          parameterChanged: function () {
            return F;
          },
          playbackRequested: function () {
            return w;
          },
          previewRequested: function () {
            return G;
          },
          rawDataImported: function () {
            return L;
          },
          sessionInitialized: function () {
            return A;
          },
          sessionStarted: function () {
            return C;
          },
          sessionStopped: function () {
            return N;
          },
          stopRequested: function () {
            return U;
          },
          testFrameRendered: function () {
            return k;
          },
          viewportWidthChanged: function () {
            return j;
          },
        };
        for (var i in n)
          Object.defineProperty(a, i, { enumerable: !0, get: n[i] });
        let d = t(7087),
          l = t(9468),
          {
            IX2_RAW_DATA_IMPORTED: o,
            IX2_SESSION_INITIALIZED: c,
            IX2_SESSION_STARTED: r,
            IX2_SESSION_STOPPED: u,
            IX2_PREVIEW_REQUESTED: s,
            IX2_PLAYBACK_REQUESTED: f,
            IX2_STOP_REQUESTED: g,
            IX2_CLEAR_REQUESTED: b,
            IX2_EVENT_LISTENER_ADDED: _,
            IX2_TEST_FRAME_RENDERED: y,
            IX2_EVENT_STATE_CHANGED: T,
            IX2_ANIMATION_FRAME_CHANGED: E,
            IX2_PARAMETER_CHANGED: I,
            IX2_INSTANCE_ADDED: p,
            IX2_INSTANCE_STARTED: O,
            IX2_INSTANCE_REMOVED: m,
            IX2_ELEMENT_STATE_CHANGED: V,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: h,
            IX2_VIEWPORT_WIDTH_CHANGED: v,
            IX2_MEDIA_QUERIES_DEFINED: R,
          } = d.IX2EngineActionTypes,
          { reifyState: S } = l.IX2VanillaUtils,
          L = (e) => ({ type: o, payload: { ...S(e) } }),
          A = ({ hasBoundaryNodes: e, reducedMotion: a }) => ({
            type: c,
            payload: { hasBoundaryNodes: e, reducedMotion: a },
          }),
          C = () => ({ type: r }),
          N = () => ({ type: u }),
          G = ({ rawData: e, defer: a }) => ({
            type: s,
            payload: { defer: a, rawData: e },
          }),
          w = ({
            actionTypeId: e = d.ActionTypeConsts.GENERAL_START_ACTION,
            actionListId: a,
            actionItemId: t,
            eventId: n,
            allowEvents: i,
            immediate: l,
            testManual: o,
            verbose: c,
            rawData: r,
          }) => ({
            type: f,
            payload: {
              actionTypeId: e,
              actionListId: a,
              actionItemId: t,
              testManual: o,
              eventId: n,
              allowEvents: i,
              immediate: l,
              verbose: c,
              rawData: r,
            },
          }),
          U = (e) => ({ type: g, payload: { actionListId: e } }),
          M = () => ({ type: b }),
          P = (e, a) => ({
            type: _,
            payload: { target: e, listenerParams: a },
          }),
          k = (e = 1) => ({ type: y, payload: { step: e } }),
          D = (e, a) => ({ type: T, payload: { stateKey: e, newState: a } }),
          Y = (e, a) => ({ type: E, payload: { now: e, parameters: a } }),
          F = (e, a) => ({ type: I, payload: { key: e, value: a } }),
          x = (e) => ({ type: p, payload: { ...e } }),
          B = (e, a) => ({ type: O, payload: { instanceId: e, time: a } }),
          X = (e) => ({ type: m, payload: { instanceId: e } }),
          z = (e, a, t, n) => ({
            type: V,
            payload: {
              elementId: e,
              actionTypeId: a,
              current: t,
              actionItem: n,
            },
          }),
          H = ({ actionListId: e, isPlaying: a }) => ({
            type: h,
            payload: { actionListId: e, isPlaying: a },
          }),
          j = ({ width: e, mediaQueries: a }) => ({
            type: v,
            payload: { width: e, mediaQueries: a },
          }),
          K = () => ({ type: R });
      },
      6011: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n,
          i = {
            actions: function () {
              return r;
            },
            destroy: function () {
              return b;
            },
            init: function () {
              return g;
            },
            setEnv: function () {
              return f;
            },
            store: function () {
              return s;
            },
          };
        for (var d in i)
          Object.defineProperty(a, d, { enumerable: !0, get: i[d] });
        let l = t(9516),
          o = (n = t(7243)) && n.__esModule ? n : { default: n },
          c = t(1970),
          r = (function (e, a) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var t = u(a);
            if (t && t.has(e)) return t.get(e);
            var n = { __proto__: null },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var d in e)
              if (
                "default" !== d &&
                Object.prototype.hasOwnProperty.call(e, d)
              ) {
                var l = i ? Object.getOwnPropertyDescriptor(e, d) : null;
                l && (l.get || l.set)
                  ? Object.defineProperty(n, d, l)
                  : (n[d] = e[d]);
              }
            return (n.default = e), t && t.set(e, n), n;
          })(t(3946));
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var a = new WeakMap(),
            t = new WeakMap();
          return (u = function (e) {
            return e ? t : a;
          })(e);
        }
        let s = (0, l.createStore)(o.default);
        function f(e) {
          e() && (0, c.observeRequests)(s);
        }
        function g(e) {
          b(), (0, c.startEngine)({ store: s, rawData: e, allowEvents: !0 });
        }
        function b() {
          (0, c.stopEngine)(s);
        }
      },
      5012: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n = {
          elementContains: function () {
            return I;
          },
          getChildElements: function () {
            return O;
          },
          getClosestElement: function () {
            return V;
          },
          getProperty: function () {
            return b;
          },
          getQuerySelector: function () {
            return y;
          },
          getRefType: function () {
            return h;
          },
          getSiblingElements: function () {
            return m;
          },
          getStyle: function () {
            return g;
          },
          getValidDocument: function () {
            return T;
          },
          isSiblingNode: function () {
            return p;
          },
          matchSelector: function () {
            return _;
          },
          queryDocument: function () {
            return E;
          },
          setStyle: function () {
            return f;
          },
        };
        for (var i in n)
          Object.defineProperty(a, i, { enumerable: !0, get: n[i] });
        let d = t(9468),
          l = t(7087),
          { ELEMENT_MATCHES: o } = d.IX2BrowserSupport,
          {
            IX2_ID_DELIMITER: c,
            HTML_ELEMENT: r,
            PLAIN_OBJECT: u,
            WF_PAGE: s,
          } = l.IX2EngineConstants;
        function f(e, a, t) {
          e.style[a] = t;
        }
        function g(e, a) {
          return a.startsWith("--")
            ? window
                .getComputedStyle(document.documentElement)
                .getPropertyValue(a)
            : e.style instanceof CSSStyleDeclaration
            ? e.style[a]
            : void 0;
        }
        function b(e, a) {
          return e[a];
        }
        function _(e) {
          return (a) => a[o](e);
        }
        function y({ id: e, selector: a }) {
          if (e) {
            let a = e;
            if (-1 !== e.indexOf(c)) {
              let t = e.split(c),
                n = t[0];
              if (((a = t[1]), n !== document.documentElement.getAttribute(s)))
                return null;
            }
            return `[data-w-id="${a}"], [data-w-id^="${a}_instance"]`;
          }
          return a;
        }
        function T(e) {
          return null == e || e === document.documentElement.getAttribute(s)
            ? document
            : null;
        }
        function E(e, a) {
          return Array.prototype.slice.call(
            document.querySelectorAll(a ? e + " " + a : e)
          );
        }
        function I(e, a) {
          return e.contains(a);
        }
        function p(e, a) {
          return e !== a && e.parentNode === a.parentNode;
        }
        function O(e) {
          let a = [];
          for (let t = 0, { length: n } = e || []; t < n; t++) {
            let { children: n } = e[t],
              { length: i } = n;
            if (i) for (let e = 0; e < i; e++) a.push(n[e]);
          }
          return a;
        }
        function m(e = []) {
          let a = [],
            t = [];
          for (let n = 0, { length: i } = e; n < i; n++) {
            let { parentNode: i } = e[n];
            if (!i || !i.children || !i.children.length || -1 !== t.indexOf(i))
              continue;
            t.push(i);
            let d = i.firstElementChild;
            for (; null != d; )
              -1 === e.indexOf(d) && a.push(d), (d = d.nextElementSibling);
          }
          return a;
        }
        let V = Element.prototype.closest
          ? (e, a) =>
              document.documentElement.contains(e) ? e.closest(a) : null
          : (e, a) => {
              if (!document.documentElement.contains(e)) return null;
              let t = e;
              do {
                if (t[o] && t[o](a)) return t;
                t = t.parentNode;
              } while (null != t);
              return null;
            };
        function h(e) {
          return null != e && "object" == typeof e
            ? e instanceof Element
              ? r
              : u
            : null;
        }
      },
      1970: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n = {
          observeRequests: function () {
            return Z;
          },
          startActionGroup: function () {
            return e_;
          },
          startEngine: function () {
            return ei;
          },
          stopActionGroup: function () {
            return eb;
          },
          stopAllActionGroups: function () {
            return eg;
          },
          stopEngine: function () {
            return ed;
          },
        };
        for (var i in n)
          Object.defineProperty(a, i, { enumerable: !0, get: n[i] });
        let d = E(t(9777)),
          l = E(t(4738)),
          o = E(t(4659)),
          c = E(t(3452)),
          r = E(t(6633)),
          u = E(t(3729)),
          s = E(t(2397)),
          f = E(t(5082)),
          g = t(7087),
          b = t(9468),
          _ = t(3946),
          y = (function (e, a) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var t = I(a);
            if (t && t.has(e)) return t.get(e);
            var n = { __proto__: null },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var d in e)
              if (
                "default" !== d &&
                Object.prototype.hasOwnProperty.call(e, d)
              ) {
                var l = i ? Object.getOwnPropertyDescriptor(e, d) : null;
                l && (l.get || l.set)
                  ? Object.defineProperty(n, d, l)
                  : (n[d] = e[d]);
              }
            return (n.default = e), t && t.set(e, n), n;
          })(t(5012)),
          T = E(t(8955));
        function E(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function I(e) {
          if ("function" != typeof WeakMap) return null;
          var a = new WeakMap(),
            t = new WeakMap();
          return (I = function (e) {
            return e ? t : a;
          })(e);
        }
        let p = Object.keys(g.QuickEffectIds),
          O = (e) => p.includes(e),
          {
            COLON_DELIMITER: m,
            BOUNDARY_SELECTOR: V,
            HTML_ELEMENT: h,
            RENDER_GENERAL: v,
            W_MOD_IX: R,
          } = g.IX2EngineConstants,
          {
            getAffectedElements: S,
            getElementId: L,
            getDestinationValues: A,
            observeStore: C,
            getInstanceId: N,
            renderHTMLElement: G,
            clearAllStyles: w,
            getMaxDurationItemIndex: U,
            getComputedStyle: M,
            getInstanceOrigin: P,
            reduceListToGroup: k,
            shouldNamespaceEventParameter: D,
            getNamespacedParameterId: Y,
            shouldAllowMediaQuery: F,
            cleanupHTMLElement: x,
            clearObjectCache: B,
            stringifyTarget: X,
            mediaQueriesEqual: z,
            shallowEqual: H,
          } = b.IX2VanillaUtils,
          {
            isPluginType: j,
            createPluginInstance: K,
            getPluginDuration: W,
          } = b.IX2VanillaPlugins,
          Q = navigator.userAgent,
          q = Q.match(/iPad/i) || Q.match(/iPhone/);
        function Z(e) {
          C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: J }),
            C({
              store: e,
              select: ({ ixRequest: e }) => e.playback,
              onChange: ea,
            }),
            C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
            C({
              store: e,
              select: ({ ixRequest: e }) => e.clear,
              onChange: en,
            });
        }
        function J({ rawData: e, defer: a }, t) {
          let n = () => {
            ei({ store: t, rawData: e, allowEvents: !0 }), ee();
          };
          a ? setTimeout(n, 0) : n();
        }
        function ee() {
          document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }
        function ea(e, a) {
          let {
              actionTypeId: t,
              actionListId: n,
              actionItemId: i,
              eventId: d,
              allowEvents: l,
              immediate: o,
              testManual: c,
              verbose: r = !0,
            } = e,
            { rawData: u } = e;
          if (n && i && u && o) {
            let e = u.actionLists[n];
            e && (u = k({ actionList: e, actionItemId: i, rawData: u }));
          }
          if (
            (ei({ store: a, rawData: u, allowEvents: l, testManual: c }),
            (n && t === g.ActionTypeConsts.GENERAL_START_ACTION) || O(t))
          ) {
            eb({ store: a, actionListId: n }),
              ef({ store: a, actionListId: n, eventId: d });
            let e = e_({
              store: a,
              eventId: d,
              actionListId: n,
              immediate: o,
              verbose: r,
            });
            r &&
              e &&
              a.dispatch(
                (0, _.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !o,
                })
              );
          }
        }
        function et({ actionListId: e }, a) {
          e ? eb({ store: a, actionListId: e }) : eg({ store: a }), ed(a);
        }
        function en(e, a) {
          ed(a), w({ store: a, elementApi: y });
        }
        function ei({ store: e, rawData: a, allowEvents: t, testManual: n }) {
          let { ixSession: i } = e.getState();
          if ((a && e.dispatch((0, _.rawDataImported)(a)), !i.active)) {
            (e.dispatch(
              (0, _.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(V),
                reducedMotion:
                  document.body.hasAttribute("data-wf-ix-vacation") &&
                  window.matchMedia("(prefers-reduced-motion)").matches,
              })
            ),
            t) &&
              ((function (e) {
                let { ixData: a } = e.getState(),
                  { eventTypeMap: t } = a;
                ec(e),
                  (0, s.default)(t, (a, t) => {
                    let n = T.default[t];
                    if (!n)
                      return void console.warn(
                        `IX2 event type not configured: ${t}`
                      );
                    !(function ({ logic: e, store: a, events: t }) {
                      !(function (e) {
                        if (!q) return;
                        let a = {},
                          t = "";
                        for (let n in e) {
                          let { eventTypeId: i, target: d } = e[n],
                            l = y.getQuerySelector(d);
                          a[l] ||
                            ((i === g.EventTypeConsts.MOUSE_CLICK ||
                              i === g.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                              ((a[l] = !0),
                              (t +=
                                l +
                                "{cursor: pointer;touch-action: manipulation;}")));
                        }
                        if (t) {
                          let e = document.createElement("style");
                          (e.textContent = t), document.body.appendChild(e);
                        }
                      })(t);
                      let { types: n, handler: i } = e,
                        { ixData: c } = a.getState(),
                        { actionLists: r } = c,
                        u = er(t, es);
                      if (!(0, o.default)(u)) return;
                      (0, s.default)(u, (e, n) => {
                        let i = t[n],
                          {
                            action: o,
                            id: u,
                            mediaQueries: s = c.mediaQueryKeys,
                          } = i,
                          { actionListId: f } = o.config;
                        z(s, c.mediaQueryKeys) ||
                          a.dispatch((0, _.mediaQueriesDefined)()),
                          o.actionTypeId ===
                            g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                            (Array.isArray(i.config)
                              ? i.config
                              : [i.config]
                            ).forEach((t) => {
                              let { continuousParameterGroupId: n } = t,
                                i = (0, l.default)(
                                  r,
                                  `${f}.continuousParameterGroups`,
                                  []
                                ),
                                o = (0, d.default)(i, ({ id: e }) => e === n),
                                c = (t.smoothing || 0) / 100,
                                s = (t.restingState || 0) / 100;
                              o &&
                                e.forEach((e, n) => {
                                  !(function ({
                                    store: e,
                                    eventStateKey: a,
                                    eventTarget: t,
                                    eventId: n,
                                    eventConfig: i,
                                    actionListId: d,
                                    parameterGroup: o,
                                    smoothing: c,
                                    restingValue: r,
                                  }) {
                                    let { ixData: u, ixSession: s } =
                                        e.getState(),
                                      { events: f } = u,
                                      b = f[n],
                                      { eventTypeId: _ } = b,
                                      T = {},
                                      E = {},
                                      I = [],
                                      { continuousActionGroups: p } = o,
                                      { id: O } = o;
                                    D(_, i) && (O = Y(a, O));
                                    let h =
                                      s.hasBoundaryNodes && t
                                        ? y.getClosestElement(t, V)
                                        : null;
                                    p.forEach((e) => {
                                      let { keyframe: a, actionItems: n } = e;
                                      n.forEach((e) => {
                                        let { actionTypeId: n } = e,
                                          { target: i } = e.config;
                                        if (!i) return;
                                        let d = i.boundaryMode ? h : null,
                                          l = X(i) + m + n;
                                        if (
                                          ((E[l] = (function (e = [], a, t) {
                                            let n,
                                              i = [...e];
                                            return (
                                              i.some(
                                                (e, t) =>
                                                  e.keyframe === a &&
                                                  ((n = t), !0)
                                              ),
                                              null == n &&
                                                ((n = i.length),
                                                i.push({
                                                  keyframe: a,
                                                  actionItems: [],
                                                })),
                                              i[n].actionItems.push(t),
                                              i
                                            );
                                          })(E[l], a, e)),
                                          !T[l])
                                        ) {
                                          T[l] = !0;
                                          let { config: a } = e;
                                          S({
                                            config: a,
                                            event: b,
                                            eventTarget: t,
                                            elementRoot: d,
                                            elementApi: y,
                                          }).forEach((e) => {
                                            I.push({ element: e, key: l });
                                          });
                                        }
                                      });
                                    }),
                                      I.forEach(({ element: a, key: t }) => {
                                        let i = E[t],
                                          o = (0, l.default)(
                                            i,
                                            "[0].actionItems[0]",
                                            {}
                                          ),
                                          { actionTypeId: u } = o,
                                          s = (
                                            u === g.ActionTypeConsts.PLUGIN_RIVE
                                              ? 0 ===
                                                (
                                                  o.config?.target
                                                    ?.selectorGuids || []
                                                ).length
                                              : j(u)
                                          )
                                            ? K(u)?.(a, o)
                                            : null,
                                          f = A(
                                            {
                                              element: a,
                                              actionItem: o,
                                              elementApi: y,
                                            },
                                            s
                                          );
                                        ey({
                                          store: e,
                                          element: a,
                                          eventId: n,
                                          actionListId: d,
                                          actionItem: o,
                                          destination: f,
                                          continuous: !0,
                                          parameterId: O,
                                          actionGroups: i,
                                          smoothing: c,
                                          restingValue: r,
                                          pluginInstance: s,
                                        });
                                      });
                                  })({
                                    store: a,
                                    eventStateKey: u + m + n,
                                    eventTarget: e,
                                    eventId: u,
                                    eventConfig: t,
                                    actionListId: f,
                                    parameterGroup: o,
                                    smoothing: c,
                                    restingValue: s,
                                  });
                                });
                            }),
                          (o.actionTypeId ===
                            g.ActionTypeConsts.GENERAL_START_ACTION ||
                            O(o.actionTypeId)) &&
                            ef({ store: a, actionListId: f, eventId: u });
                      });
                      let b = (e) => {
                          let { ixSession: n } = a.getState();
                          eu(u, (d, l, o) => {
                            let r = t[l],
                              u = n.eventState[o],
                              {
                                action: s,
                                mediaQueries: f = c.mediaQueryKeys,
                              } = r;
                            if (!F(f, n.mediaQueryKey)) return;
                            let b = (t = {}) => {
                              let n = i(
                                {
                                  store: a,
                                  element: d,
                                  event: r,
                                  eventConfig: t,
                                  nativeEvent: e,
                                  eventStateKey: o,
                                },
                                u
                              );
                              H(n, u) ||
                                a.dispatch((0, _.eventStateChanged)(o, n));
                            };
                            s.actionTypeId ===
                            g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                              ? (Array.isArray(r.config)
                                  ? r.config
                                  : [r.config]
                                ).forEach(b)
                              : b();
                          });
                        },
                        T = (0, f.default)(b, 12),
                        E = ({
                          target: e = document,
                          types: t,
                          throttle: n,
                        }) => {
                          t.split(" ")
                            .filter(Boolean)
                            .forEach((t) => {
                              let i = n ? T : b;
                              e.addEventListener(t, i),
                                a.dispatch(
                                  (0, _.eventListenerAdded)(e, [t, i])
                                );
                            });
                        };
                      Array.isArray(n)
                        ? n.forEach(E)
                        : "string" == typeof n && E(e);
                    })({ logic: n, store: e, events: a });
                  });
                let { ixSession: n } = e.getState();
                n.eventListeners.length &&
                  (function (e) {
                    let a = () => {
                      ec(e);
                    };
                    eo.forEach((t) => {
                      window.addEventListener(t, a),
                        e.dispatch((0, _.eventListenerAdded)(window, [t, a]));
                    }),
                      a();
                  })(e);
              })(e),
              (function () {
                let { documentElement: e } = document;
                -1 === e.className.indexOf(R) && (e.className += ` ${R}`);
              })(),
              e.getState().ixSession.hasDefinedMediaQueries &&
                C({
                  store: e,
                  select: ({ ixSession: e }) => e.mediaQueryKey,
                  onChange: () => {
                    ed(e),
                      w({ store: e, elementApi: y }),
                      ei({ store: e, allowEvents: !0 }),
                      ee();
                  },
                }));
            e.dispatch((0, _.sessionStarted)()),
              (function (e, a) {
                let t = (n) => {
                  let { ixSession: i, ixParameters: d } = e.getState();
                  if (i.active)
                    if ((e.dispatch((0, _.animationFrameChanged)(n, d)), a)) {
                      let a = C({
                        store: e,
                        select: ({ ixSession: e }) => e.tick,
                        onChange: (e) => {
                          t(e), a();
                        },
                      });
                    } else requestAnimationFrame(t);
                };
                t(window.performance.now());
              })(e, n);
          }
        }
        function ed(e) {
          let { ixSession: a } = e.getState();
          if (a.active) {
            let { eventListeners: t } = a;
            t.forEach(el), B(), e.dispatch((0, _.sessionStopped)());
          }
        }
        function el({ target: e, listenerParams: a }) {
          e.removeEventListener.apply(e, a);
        }
        let eo = ["resize", "orientationchange"];
        function ec(e) {
          let { ixSession: a, ixData: t } = e.getState(),
            n = window.innerWidth;
          if (n !== a.viewportWidth) {
            let { mediaQueries: a } = t;
            e.dispatch(
              (0, _.viewportWidthChanged)({ width: n, mediaQueries: a })
            );
          }
        }
        let er = (e, a) => (0, c.default)((0, u.default)(e, a), r.default),
          eu = (e, a) => {
            (0, s.default)(e, (e, t) => {
              e.forEach((e, n) => {
                a(e, t, t + m + n);
              });
            });
          },
          es = (e) =>
            S({
              config: { target: e.target, targets: e.targets },
              elementApi: y,
            });
        function ef({ store: e, actionListId: a, eventId: t }) {
          let { ixData: n, ixSession: i } = e.getState(),
            { actionLists: d, events: o } = n,
            c = o[t],
            r = d[a];
          if (r && r.useFirstGroupAsInitialState) {
            let d = (0, l.default)(r, "actionItemGroups[0].actionItems", []);
            if (
              !F(
                (0, l.default)(c, "mediaQueries", n.mediaQueryKeys),
                i.mediaQueryKey
              )
            )
              return;
            d.forEach((n) => {
              let { config: i, actionTypeId: d } = n,
                l = S({
                  config:
                    i?.target?.useEventTarget === !0 &&
                    i?.target?.objectId == null
                      ? { target: c.target, targets: c.targets }
                      : i,
                  event: c,
                  elementApi: y,
                }),
                o = j(d);
              l.forEach((i) => {
                let l = o ? K(d)?.(i, n) : null;
                ey({
                  destination: A(
                    { element: i, actionItem: n, elementApi: y },
                    l
                  ),
                  immediate: !0,
                  store: e,
                  element: i,
                  eventId: t,
                  actionItem: n,
                  actionListId: a,
                  pluginInstance: l,
                });
              });
            });
          }
        }
        function eg({ store: e }) {
          let { ixInstances: a } = e.getState();
          (0, s.default)(a, (a) => {
            if (!a.continuous) {
              let { actionListId: t, verbose: n } = a;
              eT(a, e),
                n &&
                  e.dispatch(
                    (0, _.actionListPlaybackChanged)({
                      actionListId: t,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function eb({
          store: e,
          eventId: a,
          eventTarget: t,
          eventStateKey: n,
          actionListId: i,
        }) {
          let { ixInstances: d, ixSession: o } = e.getState(),
            c = o.hasBoundaryNodes && t ? y.getClosestElement(t, V) : null;
          (0, s.default)(d, (t) => {
            let d = (0, l.default)(t, "actionItem.config.target.boundaryMode"),
              o = !n || t.eventStateKey === n;
            if (t.actionListId === i && t.eventId === a && o) {
              if (c && d && !y.elementContains(c, t.element)) return;
              eT(t, e),
                t.verbose &&
                  e.dispatch(
                    (0, _.actionListPlaybackChanged)({
                      actionListId: i,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function e_({
          store: e,
          eventId: a,
          eventTarget: t,
          eventStateKey: n,
          actionListId: i,
          groupIndex: d = 0,
          immediate: o,
          verbose: c,
        }) {
          let { ixData: r, ixSession: u } = e.getState(),
            { events: s } = r,
            f = s[a] || {},
            { mediaQueries: g = r.mediaQueryKeys } = f,
            { actionItemGroups: b, useFirstGroupAsInitialState: _ } = (0,
            l.default)(r, `actionLists.${i}`, {});
          if (!b || !b.length) return !1;
          d >= b.length && (0, l.default)(f, "config.loop") && (d = 0),
            0 === d && _ && d++;
          let T =
              (0 === d || (1 === d && _)) && O(f.action?.actionTypeId)
                ? f.config.delay
                : void 0,
            E = (0, l.default)(b, [d, "actionItems"], []);
          if (!E.length || !F(g, u.mediaQueryKey)) return !1;
          let I = u.hasBoundaryNodes && t ? y.getClosestElement(t, V) : null,
            p = U(E),
            m = !1;
          return (
            E.forEach((l, r) => {
              let { config: u, actionTypeId: s } = l,
                g = j(s),
                { target: b } = u;
              b &&
                S({
                  config: u,
                  event: f,
                  eventTarget: t,
                  elementRoot: b.boundaryMode ? I : null,
                  elementApi: y,
                }).forEach((u, f) => {
                  let b = g ? K(s)?.(u, l) : null,
                    _ = g ? W(s)(u, l) : null;
                  m = !0;
                  let E = M({ element: u, actionItem: l }),
                    I = A({ element: u, actionItem: l, elementApi: y }, b);
                  ey({
                    store: e,
                    element: u,
                    actionItem: l,
                    eventId: a,
                    eventTarget: t,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: d,
                    isCarrier: p === r && 0 === f,
                    computedStyle: E,
                    destination: I,
                    immediate: o,
                    verbose: c,
                    pluginInstance: b,
                    pluginDuration: _,
                    instanceDelay: T,
                  });
                });
            }),
            m
          );
        }
        function ey(e) {
          let a,
            { store: t, computedStyle: n, ...i } = e,
            {
              element: d,
              actionItem: l,
              immediate: o,
              pluginInstance: c,
              continuous: r,
              restingValue: u,
              eventId: s,
            } = i,
            f = N(),
            { ixElements: b, ixSession: T, ixData: E } = t.getState(),
            I = L(b, d),
            { refState: p } = b[I] || {},
            O = y.getRefType(d),
            m = T.reducedMotion && g.ReducedMotionTypes[l.actionTypeId];
          if (m && r)
            switch (E.events[s]?.eventTypeId) {
              case g.EventTypeConsts.MOUSE_MOVE:
              case g.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                a = u;
                break;
              default:
                a = 0.5;
            }
          let V = P(d, p, n, l, y, c);
          if (
            (t.dispatch(
              (0, _.instanceAdded)({
                instanceId: f,
                elementId: I,
                origin: V,
                refType: O,
                skipMotion: m,
                skipToValue: a,
                ...i,
              })
            ),
            eE(document.body, "ix2-animation-started", f),
            o)
          )
            return void (function (e, a) {
              let { ixParameters: t } = e.getState();
              e.dispatch((0, _.instanceStarted)(a, 0)),
                e.dispatch((0, _.animationFrameChanged)(performance.now(), t));
              let { ixInstances: n } = e.getState();
              eI(n[a], e);
            })(t, f);
          C({ store: t, select: ({ ixInstances: e }) => e[f], onChange: eI }),
            r || t.dispatch((0, _.instanceStarted)(f, T.tick));
        }
        function eT(e, a) {
          eE(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: a.getState(),
          });
          let { elementId: t, actionItem: n } = e,
            { ixElements: i } = a.getState(),
            { ref: d, refType: l } = i[t] || {};
          l === h && x(d, n, y), a.dispatch((0, _.instanceRemoved)(e.id));
        }
        function eE(e, a, t) {
          let n = document.createEvent("CustomEvent");
          n.initCustomEvent(a, !0, !0, t), e.dispatchEvent(n);
        }
        function eI(e, a) {
          let {
              active: t,
              continuous: n,
              complete: i,
              elementId: d,
              actionItem: l,
              actionTypeId: o,
              renderType: c,
              current: r,
              groupIndex: u,
              eventId: s,
              eventTarget: f,
              eventStateKey: g,
              actionListId: b,
              isCarrier: T,
              styleProp: E,
              verbose: I,
              pluginInstance: p,
            } = e,
            { ixData: O, ixSession: m } = a.getState(),
            { events: V } = O,
            { mediaQueries: R = O.mediaQueryKeys } = V && V[s] ? V[s] : {};
          if (F(R, m.mediaQueryKey) && (n || t || i)) {
            if (r || (c === v && i)) {
              a.dispatch((0, _.elementStateChanged)(d, o, r, l));
              let { ixElements: e } = a.getState(),
                { ref: t, refType: n, refState: i } = e[d] || {},
                u = i && i[o];
              (n === h || j(o)) && G(t, i, u, s, l, E, y, c, p);
            }
            if (i) {
              if (T) {
                let e = e_({
                  store: a,
                  eventId: s,
                  eventTarget: f,
                  eventStateKey: g,
                  actionListId: b,
                  groupIndex: u + 1,
                  verbose: I,
                });
                I &&
                  !e &&
                  a.dispatch(
                    (0, _.actionListPlaybackChanged)({
                      actionListId: b,
                      isPlaying: !1,
                    })
                  );
              }
              eT(e, a);
            }
          }
        }
      },
      8955: function (e, a, t) {
        "use strict";
        let n;
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "default", {
            enumerable: !0,
            get: function () {
              return eb;
            },
          });
        let i = s(t(5801)),
          d = s(t(4738)),
          l = s(t(3789)),
          o = t(7087),
          c = t(1970),
          r = t(3946),
          u = t(9468);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            MOUSE_CLICK: f,
            MOUSE_SECOND_CLICK: g,
            MOUSE_DOWN: b,
            MOUSE_UP: _,
            MOUSE_OVER: y,
            MOUSE_OUT: T,
            DROPDOWN_CLOSE: E,
            DROPDOWN_OPEN: I,
            SLIDER_ACTIVE: p,
            SLIDER_INACTIVE: O,
            TAB_ACTIVE: m,
            TAB_INACTIVE: V,
            NAVBAR_CLOSE: h,
            NAVBAR_OPEN: v,
            MOUSE_MOVE: R,
            PAGE_SCROLL_DOWN: S,
            SCROLL_INTO_VIEW: L,
            SCROLL_OUT_OF_VIEW: A,
            PAGE_SCROLL_UP: C,
            SCROLLING_IN_VIEW: N,
            PAGE_FINISH: G,
            ECOMMERCE_CART_CLOSE: w,
            ECOMMERCE_CART_OPEN: U,
            PAGE_START: M,
            PAGE_SCROLL: P,
          } = o.EventTypeConsts,
          k = "COMPONENT_ACTIVE",
          D = "COMPONENT_INACTIVE",
          { COLON_DELIMITER: Y } = o.IX2EngineConstants,
          { getNamespacedParameterId: F } = u.IX2VanillaUtils,
          x = (e) => (a) => !!("object" == typeof a && e(a)) || a,
          B = x(({ element: e, nativeEvent: a }) => e === a.target),
          X = x(({ element: e, nativeEvent: a }) => e.contains(a.target)),
          z = (0, i.default)([B, X]),
          H = (e, a) => {
            if (a) {
              let { ixData: t } = e.getState(),
                { events: n } = t,
                i = n[a];
              if (i && !ea[i.eventTypeId]) return i;
            }
            return null;
          },
          j = ({ store: e, event: a }) => {
            let { action: t } = a,
              { autoStopEventId: n } = t.config;
            return !!H(e, n);
          },
          K = ({ store: e, event: a, element: t, eventStateKey: n }, i) => {
            let { action: l, id: o } = a,
              { actionListId: r, autoStopEventId: u } = l.config,
              s = H(e, u);
            return (
              s &&
                (0, c.stopActionGroup)({
                  store: e,
                  eventId: u,
                  eventTarget: t,
                  eventStateKey: u + Y + n.split(Y)[1],
                  actionListId: (0, d.default)(s, "action.config.actionListId"),
                }),
              (0, c.stopActionGroup)({
                store: e,
                eventId: o,
                eventTarget: t,
                eventStateKey: n,
                actionListId: r,
              }),
              (0, c.startActionGroup)({
                store: e,
                eventId: o,
                eventTarget: t,
                eventStateKey: n,
                actionListId: r,
              }),
              i
            );
          },
          W = (e, a) => (t, n) => !0 === e(t, n) ? a(t, n) : n,
          Q = { handler: W(z, K) },
          q = { ...Q, types: [k, D].join(" ") },
          Z = [
            { target: window, types: "resize orientationchange", throttle: !0 },
            {
              target: document,
              types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
              throttle: !0,
            },
          ],
          J = "mouseover mouseout",
          ee = { types: Z },
          ea = { PAGE_START: M, PAGE_FINISH: G },
          et = (() => {
            let e = void 0 !== window.pageXOffset,
              a =
                "CSS1Compat" === document.compatMode
                  ? document.documentElement
                  : document.body;
            return () => ({
              scrollLeft: e ? window.pageXOffset : a.scrollLeft,
              scrollTop: e ? window.pageYOffset : a.scrollTop,
              stiffScrollTop: (0, l.default)(
                e ? window.pageYOffset : a.scrollTop,
                0,
                a.scrollHeight - window.innerHeight
              ),
              scrollWidth: a.scrollWidth,
              scrollHeight: a.scrollHeight,
              clientWidth: a.clientWidth,
              clientHeight: a.clientHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            });
          })(),
          en = (e, a) =>
            !(
              e.left > a.right ||
              e.right < a.left ||
              e.top > a.bottom ||
              e.bottom < a.top
            ),
          ei = ({ element: e, nativeEvent: a }) => {
            let { type: t, target: n, relatedTarget: i } = a,
              d = e.contains(n);
            if ("mouseover" === t && d) return !0;
            let l = e.contains(i);
            return "mouseout" === t && !!d && !!l;
          },
          ed = (e) => {
            let {
                element: a,
                event: { config: t },
              } = e,
              { clientWidth: n, clientHeight: i } = et(),
              d = t.scrollOffsetValue,
              l = "PX" === t.scrollOffsetUnit ? d : (i * (d || 0)) / 100;
            return en(a.getBoundingClientRect(), {
              left: 0,
              top: l,
              right: n,
              bottom: i - l,
            });
          },
          el = (e) => (a, t) => {
            let { type: n } = a.nativeEvent,
              i = -1 !== [k, D].indexOf(n) ? n === k : t.isActive,
              d = { ...t, isActive: i };
            return ((!t || d.isActive !== t.isActive) && e(a, d)) || d;
          },
          eo = (e) => (a, t) => {
            let n = { elementHovered: ei(a) };
            return (
              ((t ? n.elementHovered !== t.elementHovered : n.elementHovered) &&
                e(a, n)) ||
              n
            );
          },
          ec =
            (e) =>
            (a, t = {}) => {
              let n,
                i,
                { stiffScrollTop: d, scrollHeight: l, innerHeight: o } = et(),
                {
                  event: { config: c, eventTypeId: r },
                } = a,
                { scrollOffsetValue: u, scrollOffsetUnit: s } = c,
                f = l - o,
                g = Number((d / f).toFixed(2));
              if (t && t.percentTop === g) return t;
              let b = ("PX" === s ? u : (o * (u || 0)) / 100) / f,
                _ = 0;
              t &&
                ((n = g > t.percentTop),
                (_ = (i = t.scrollingDown !== n) ? g : t.anchorTop));
              let y = r === S ? g >= _ + b : g <= _ - b,
                T = {
                  ...t,
                  percentTop: g,
                  inBounds: y,
                  anchorTop: _,
                  scrollingDown: n,
                };
              return (
                (t && y && (i || T.inBounds !== t.inBounds) && e(a, T)) || T
              );
            },
          er = (e, a) =>
            e.left > a.left &&
            e.left < a.right &&
            e.top > a.top &&
            e.top < a.bottom,
          eu =
            (e) =>
            (a, t = { clickCount: 0 }) => {
              let n = { clickCount: (t.clickCount % 2) + 1 };
              return (n.clickCount !== t.clickCount && e(a, n)) || n;
            },
          es = (e = !0) => ({
            ...q,
            handler: W(
              e ? z : B,
              el((e, a) => (a.isActive ? Q.handler(e, a) : a))
            ),
          }),
          ef = (e = !0) => ({
            ...q,
            handler: W(
              e ? z : B,
              el((e, a) => (a.isActive ? a : Q.handler(e, a)))
            ),
          }),
          eg = {
            ...ee,
            handler:
              ((n = (e, a) => {
                let { elementVisible: t } = a,
                  { event: n, store: i } = e,
                  { ixData: d } = i.getState(),
                  { events: l } = d;
                return !l[n.action.config.autoStopEventId] && a.triggered
                  ? a
                  : (n.eventTypeId === L) === t
                  ? (K(e), { ...a, triggered: !0 })
                  : a;
              }),
              (e, a) => {
                let t = { ...a, elementVisible: ed(e) };
                return (
                  ((a
                    ? t.elementVisible !== a.elementVisible
                    : t.elementVisible) &&
                    n(e, t)) ||
                  t
                );
              }),
          },
          eb = {
            [p]: es(),
            [O]: ef(),
            [I]: es(),
            [E]: ef(),
            [v]: es(!1),
            [h]: ef(!1),
            [m]: es(),
            [V]: ef(),
            [U]: { types: "ecommerce-cart-open", handler: W(z, K) },
            [w]: { types: "ecommerce-cart-close", handler: W(z, K) },
            [f]: {
              types: "click",
              handler: W(
                z,
                eu((e, { clickCount: a }) => {
                  j(e) ? 1 === a && K(e) : K(e);
                })
              ),
            },
            [g]: {
              types: "click",
              handler: W(
                z,
                eu((e, { clickCount: a }) => {
                  2 === a && K(e);
                })
              ),
            },
            [b]: { ...Q, types: "mousedown" },
            [_]: { ...Q, types: "mouseup" },
            [y]: {
              types: J,
              handler: W(
                z,
                eo((e, a) => {
                  a.elementHovered && K(e);
                })
              ),
            },
            [T]: {
              types: J,
              handler: W(
                z,
                eo((e, a) => {
                  a.elementHovered || K(e);
                })
              ),
            },
            [R]: {
              types: "mousemove mouseout scroll",
              handler: (
                {
                  store: e,
                  element: a,
                  eventConfig: t,
                  nativeEvent: n,
                  eventStateKey: i,
                },
                d = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
              ) => {
                let {
                    basedOn: l,
                    selectedAxis: c,
                    continuousParameterGroupId: u,
                    reverse: s,
                    restingState: f = 0,
                  } = t,
                  {
                    clientX: g = d.clientX,
                    clientY: b = d.clientY,
                    pageX: _ = d.pageX,
                    pageY: y = d.pageY,
                  } = n,
                  T = "X_AXIS" === c,
                  E = "mouseout" === n.type,
                  I = f / 100,
                  p = u,
                  O = !1;
                switch (l) {
                  case o.EventBasedOn.VIEWPORT:
                    I = T
                      ? Math.min(g, window.innerWidth) / window.innerWidth
                      : Math.min(b, window.innerHeight) / window.innerHeight;
                    break;
                  case o.EventBasedOn.PAGE: {
                    let {
                      scrollLeft: e,
                      scrollTop: a,
                      scrollWidth: t,
                      scrollHeight: n,
                    } = et();
                    I = T ? Math.min(e + _, t) / t : Math.min(a + y, n) / n;
                    break;
                  }
                  case o.EventBasedOn.ELEMENT:
                  default: {
                    p = F(i, u);
                    let e = 0 === n.type.indexOf("mouse");
                    if (e && !0 !== z({ element: a, nativeEvent: n })) break;
                    let t = a.getBoundingClientRect(),
                      { left: d, top: l, width: o, height: c } = t;
                    if (!e && !er({ left: g, top: b }, t)) break;
                    (O = !0), (I = T ? (g - d) / o : (b - l) / c);
                  }
                }
                return (
                  E && (I > 0.95 || I < 0.05) && (I = Math.round(I)),
                  (l !== o.EventBasedOn.ELEMENT ||
                    O ||
                    O !== d.elementHovered) &&
                    ((I = s ? 1 - I : I),
                    e.dispatch((0, r.parameterChanged)(p, I))),
                  {
                    elementHovered: O,
                    clientX: g,
                    clientY: b,
                    pageX: _,
                    pageY: y,
                  }
                );
              },
            },
            [P]: {
              types: Z,
              handler: ({ store: e, eventConfig: a }) => {
                let { continuousParameterGroupId: t, reverse: n } = a,
                  { scrollTop: i, scrollHeight: d, clientHeight: l } = et(),
                  o = i / (d - l);
                (o = n ? 1 - o : o), e.dispatch((0, r.parameterChanged)(t, o));
              },
            },
            [N]: {
              types: Z,
              handler: (
                { element: e, store: a, eventConfig: t, eventStateKey: n },
                i = { scrollPercent: 0 }
              ) => {
                let {
                    scrollLeft: d,
                    scrollTop: l,
                    scrollWidth: c,
                    scrollHeight: u,
                    clientHeight: s,
                  } = et(),
                  {
                    basedOn: f,
                    selectedAxis: g,
                    continuousParameterGroupId: b,
                    startsEntering: _,
                    startsExiting: y,
                    addEndOffset: T,
                    addStartOffset: E,
                    addOffsetValue: I = 0,
                    endOffsetValue: p = 0,
                  } = t;
                if (f === o.EventBasedOn.VIEWPORT) {
                  let e = "X_AXIS" === g ? d / c : l / u;
                  return (
                    e !== i.scrollPercent &&
                      a.dispatch((0, r.parameterChanged)(b, e)),
                    { scrollPercent: e }
                  );
                }
                {
                  let t = F(n, b),
                    d = e.getBoundingClientRect(),
                    l = (E ? I : 0) / 100,
                    o = (T ? p : 0) / 100;
                  (l = _ ? l : 1 - l), (o = y ? o : 1 - o);
                  let c = d.top + Math.min(d.height * l, s),
                    f = Math.min(s + (d.top + d.height * o - c), u),
                    g = Math.min(Math.max(0, s - c), f) / f;
                  return (
                    g !== i.scrollPercent &&
                      a.dispatch((0, r.parameterChanged)(t, g)),
                    { scrollPercent: g }
                  );
                }
              },
            },
            [L]: eg,
            [A]: eg,
            [S]: {
              ...ee,
              handler: ec((e, a) => {
                a.scrollingDown && K(e);
              }),
            },
            [C]: {
              ...ee,
              handler: ec((e, a) => {
                a.scrollingDown || K(e);
              }),
            },
            [G]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: W(B, (e, a) => {
                let t = { finished: "complete" === document.readyState };
                return t.finished && !(a && a.finshed) && K(e), t;
              }),
            },
            [M]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: W(B, (e, a) => (a || K(e), { started: !0 })),
            },
          };
      },
      4609: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "ixData", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let { IX2_RAW_DATA_IMPORTED: n } = t(7087).IX2EngineActionTypes,
          i = (e = Object.freeze({}), a) =>
            a.type === n ? a.payload.ixData || Object.freeze({}) : e;
      },
      7718: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "ixInstances", {
            enumerable: !0,
            get: function () {
              return O;
            },
          });
        let n = t(7087),
          i = t(9468),
          d = t(1185),
          {
            IX2_RAW_DATA_IMPORTED: l,
            IX2_SESSION_STOPPED: o,
            IX2_INSTANCE_ADDED: c,
            IX2_INSTANCE_STARTED: r,
            IX2_INSTANCE_REMOVED: u,
            IX2_ANIMATION_FRAME_CHANGED: s,
          } = n.IX2EngineActionTypes,
          {
            optimizeFloat: f,
            applyEasing: g,
            createBezierEasing: b,
          } = i.IX2EasingUtils,
          { RENDER_GENERAL: _ } = n.IX2EngineConstants,
          {
            getItemConfigByKey: y,
            getRenderType: T,
            getStyleProp: E,
          } = i.IX2VanillaUtils,
          I = (e, a) => {
            let t,
              n,
              i,
              l,
              {
                position: o,
                parameterId: c,
                actionGroups: r,
                destinationKeys: u,
                smoothing: s,
                restingValue: b,
                actionTypeId: _,
                customEasingFn: T,
                skipMotion: E,
                skipToValue: I,
              } = e,
              { parameters: p } = a.payload,
              O = Math.max(1 - s, 0.01),
              m = p[c];
            null == m && ((O = 1), (m = b));
            let V = f((Math.max(m, 0) || 0) - o),
              h = E ? I : f(o + V * O),
              v = 100 * h;
            if (h === o && e.current) return e;
            for (let e = 0, { length: a } = r; e < a; e++) {
              let { keyframe: a, actionItems: d } = r[e];
              if ((0 === e && (t = d[0]), v >= a)) {
                t = d[0];
                let o = r[e + 1],
                  c = o && v !== a;
                (n = c ? o.actionItems[0] : null),
                  c && ((i = a / 100), (l = (o.keyframe - a) / 100));
              }
            }
            let R = {};
            if (t && !n)
              for (let e = 0, { length: a } = u; e < a; e++) {
                let a = u[e];
                R[a] = y(_, a, t.config);
              }
            else if (t && n && void 0 !== i && void 0 !== l) {
              let e = (h - i) / l,
                a = g(t.config.easing, e, T);
              for (let e = 0, { length: i } = u; e < i; e++) {
                let i = u[e],
                  d = y(_, i, t.config),
                  l = (y(_, i, n.config) - d) * a + d;
                R[i] = l;
              }
            }
            return (0, d.merge)(e, { position: h, current: R });
          },
          p = (e, a) => {
            let {
                active: t,
                origin: n,
                start: i,
                immediate: l,
                renderType: o,
                verbose: c,
                actionItem: r,
                destination: u,
                destinationKeys: s,
                pluginDuration: b,
                instanceDelay: y,
                customEasingFn: T,
                skipMotion: E,
              } = e,
              I = r.config.easing,
              { duration: p, delay: O } = r.config;
            null != b && (p = b),
              (O = null != y ? y : O),
              o === _ ? (p = 0) : (l || E) && (p = O = 0);
            let { now: m } = a.payload;
            if (t && n) {
              let a = m - (i + O);
              if (c) {
                let a = p + O,
                  t = f(Math.min(Math.max(0, (m - i) / a), 1));
                e = (0, d.set)(e, "verboseTimeElapsed", a * t);
              }
              if (a < 0) return e;
              let t = f(Math.min(Math.max(0, a / p), 1)),
                l = g(I, t, T),
                o = {},
                r = null;
              return (
                s.length &&
                  (r = s.reduce((e, a) => {
                    let t = u[a],
                      i = parseFloat(n[a]) || 0,
                      d = parseFloat(t) - i;
                    return (e[a] = d * l + i), e;
                  }, {})),
                (o.current = r),
                (o.position = t),
                1 === t && ((o.active = !1), (o.complete = !0)),
                (0, d.merge)(e, o)
              );
            }
            return e;
          },
          O = (e = Object.freeze({}), a) => {
            switch (a.type) {
              case l:
                return a.payload.ixInstances || Object.freeze({});
              case o:
                return Object.freeze({});
              case c: {
                let {
                    instanceId: t,
                    elementId: n,
                    actionItem: i,
                    eventId: l,
                    eventTarget: o,
                    eventStateKey: c,
                    actionListId: r,
                    groupIndex: u,
                    isCarrier: s,
                    origin: f,
                    destination: g,
                    immediate: _,
                    verbose: y,
                    continuous: I,
                    parameterId: p,
                    actionGroups: O,
                    smoothing: m,
                    restingValue: V,
                    pluginInstance: h,
                    pluginDuration: v,
                    instanceDelay: R,
                    skipMotion: S,
                    skipToValue: L,
                  } = a.payload,
                  { actionTypeId: A } = i,
                  C = T(A),
                  N = E(C, A),
                  G = Object.keys(g).filter(
                    (e) => null != g[e] && "string" != typeof g[e]
                  ),
                  { easing: w } = i.config;
                return (0, d.set)(e, t, {
                  id: t,
                  elementId: n,
                  active: !1,
                  position: 0,
                  start: 0,
                  origin: f,
                  destination: g,
                  destinationKeys: G,
                  immediate: _,
                  verbose: y,
                  current: null,
                  actionItem: i,
                  actionTypeId: A,
                  eventId: l,
                  eventTarget: o,
                  eventStateKey: c,
                  actionListId: r,
                  groupIndex: u,
                  renderType: C,
                  isCarrier: s,
                  styleProp: N,
                  continuous: I,
                  parameterId: p,
                  actionGroups: O,
                  smoothing: m,
                  restingValue: V,
                  pluginInstance: h,
                  pluginDuration: v,
                  instanceDelay: R,
                  skipMotion: S,
                  skipToValue: L,
                  customEasingFn:
                    Array.isArray(w) && 4 === w.length ? b(w) : void 0,
                });
              }
              case r: {
                let { instanceId: t, time: n } = a.payload;
                return (0, d.mergeIn)(e, [t], {
                  active: !0,
                  complete: !1,
                  start: n,
                });
              }
              case u: {
                let { instanceId: t } = a.payload;
                if (!e[t]) return e;
                let n = {},
                  i = Object.keys(e),
                  { length: d } = i;
                for (let a = 0; a < d; a++) {
                  let d = i[a];
                  d !== t && (n[d] = e[d]);
                }
                return n;
              }
              case s: {
                let t = e,
                  n = Object.keys(e),
                  { length: i } = n;
                for (let l = 0; l < i; l++) {
                  let i = n[l],
                    o = e[i],
                    c = o.continuous ? I : p;
                  t = (0, d.set)(t, i, c(o, a));
                }
                return t;
              }
              default:
                return e;
            }
          };
      },
      1540: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "ixParameters", {
            enumerable: !0,
            get: function () {
              return l;
            },
          });
        let {
            IX2_RAW_DATA_IMPORTED: n,
            IX2_SESSION_STOPPED: i,
            IX2_PARAMETER_CHANGED: d,
          } = t(7087).IX2EngineActionTypes,
          l = (e = {}, a) => {
            switch (a.type) {
              case n:
                return a.payload.ixParameters || {};
              case i:
                return {};
              case d: {
                let { key: t, value: n } = a.payload;
                return (e[t] = n), e;
              }
              default:
                return e;
            }
          };
      },
      7243: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "default", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let n = t(9516),
          i = t(4609),
          d = t(628),
          l = t(5862),
          o = t(9468),
          c = t(7718),
          r = t(1540),
          { ixElements: u } = o.IX2ElementsReducer,
          s = (0, n.combineReducers)({
            ixData: i.ixData,
            ixRequest: d.ixRequest,
            ixSession: l.ixSession,
            ixElements: u,
            ixInstances: c.ixInstances,
            ixParameters: r.ixParameters,
          });
      },
      628: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "ixRequest", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let n = t(7087),
          i = t(1185),
          {
            IX2_PREVIEW_REQUESTED: d,
            IX2_PLAYBACK_REQUESTED: l,
            IX2_STOP_REQUESTED: o,
            IX2_CLEAR_REQUESTED: c,
          } = n.IX2EngineActionTypes,
          r = { preview: {}, playback: {}, stop: {}, clear: {} },
          u = Object.create(null, {
            [d]: { value: "preview" },
            [l]: { value: "playback" },
            [o]: { value: "stop" },
            [c]: { value: "clear" },
          }),
          s = (e = r, a) => {
            if (a.type in u) {
              let t = [u[a.type]];
              return (0, i.setIn)(e, [t], { ...a.payload });
            }
            return e;
          };
      },
      5862: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "ixSession", {
            enumerable: !0,
            get: function () {
              return y;
            },
          });
        let n = t(7087),
          i = t(1185),
          {
            IX2_SESSION_INITIALIZED: d,
            IX2_SESSION_STARTED: l,
            IX2_TEST_FRAME_RENDERED: o,
            IX2_SESSION_STOPPED: c,
            IX2_EVENT_LISTENER_ADDED: r,
            IX2_EVENT_STATE_CHANGED: u,
            IX2_ANIMATION_FRAME_CHANGED: s,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
            IX2_VIEWPORT_WIDTH_CHANGED: g,
            IX2_MEDIA_QUERIES_DEFINED: b,
          } = n.IX2EngineActionTypes,
          _ = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1,
          },
          y = (e = _, a) => {
            switch (a.type) {
              case d: {
                let { hasBoundaryNodes: t, reducedMotion: n } = a.payload;
                return (0, i.merge)(e, {
                  hasBoundaryNodes: t,
                  reducedMotion: n,
                });
              }
              case l:
                return (0, i.set)(e, "active", !0);
              case o: {
                let {
                  payload: { step: t = 20 },
                } = a;
                return (0, i.set)(e, "tick", e.tick + t);
              }
              case c:
                return _;
              case s: {
                let {
                  payload: { now: t },
                } = a;
                return (0, i.set)(e, "tick", t);
              }
              case r: {
                let t = (0, i.addLast)(e.eventListeners, a.payload);
                return (0, i.set)(e, "eventListeners", t);
              }
              case u: {
                let { stateKey: t, newState: n } = a.payload;
                return (0, i.setIn)(e, ["eventState", t], n);
              }
              case f: {
                let { actionListId: t, isPlaying: n } = a.payload;
                return (0, i.setIn)(e, ["playbackState", t], n);
              }
              case g: {
                let { width: t, mediaQueries: n } = a.payload,
                  d = n.length,
                  l = null;
                for (let e = 0; e < d; e++) {
                  let { key: a, min: i, max: d } = n[e];
                  if (t >= i && t <= d) {
                    l = a;
                    break;
                  }
                }
                return (0, i.merge)(e, { viewportWidth: t, mediaQueryKey: l });
              }
              case b:
                return (0, i.set)(e, "hasDefinedMediaQueries", !0);
              default:
                return e;
            }
          };
      },
      7377: function (e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var t = {
          clearPlugin: function () {
            return u;
          },
          createPluginInstance: function () {
            return c;
          },
          getPluginConfig: function () {
            return i;
          },
          getPluginDestination: function () {
            return o;
          },
          getPluginDuration: function () {
            return d;
          },
          getPluginOrigin: function () {
            return l;
          },
          renderPlugin: function () {
            return r;
          },
        };
        for (var n in t)
          Object.defineProperty(a, n, { enumerable: !0, get: t[n] });
        let i = (e) => e.value,
          d = (e, a) => {
            if ("auto" !== a.config.duration) return null;
            let t = parseFloat(e.getAttribute("data-duration"));
            return t > 0
              ? 1e3 * t
              : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
          },
          l = (e) => e || { value: 0 },
          o = (e) => ({ value: e.value }),
          c = (e) => {
            let a = window.Webflow.require("lottie");
            if (!a) return null;
            let t = a.createInstance(e);
            return t.stop(), t.setSubframe(!0), t;
          },
          r = (e, a, t) => {
            if (!e) return;
            let n = a[t.actionTypeId].value / 100;
            e.goToFrame(e.frames * n);
          },
          u = (e) => {
            let a = window.Webflow.require("lottie");
            a && a.createInstance(e).stop();
          };
      },
      2570: function (e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var t = {
          clearPlugin: function () {
            return b;
          },
          createPluginInstance: function () {
            return f;
          },
          getPluginConfig: function () {
            return c;
          },
          getPluginDestination: function () {
            return s;
          },
          getPluginDuration: function () {
            return r;
          },
          getPluginOrigin: function () {
            return u;
          },
          renderPlugin: function () {
            return g;
          },
        };
        for (var n in t)
          Object.defineProperty(a, n, { enumerable: !0, get: t[n] });
        let i = "--wf-rive-fit",
          d = "--wf-rive-alignment",
          l = (e) => document.querySelector(`[data-w-id="${e}"]`),
          o = () => window.Webflow.require("rive"),
          c = (e, a) => e.value.inputs[a],
          r = () => null,
          u = (e, a) => {
            if (e) return e;
            let t = {},
              { inputs: n = {} } = a.config.value;
            for (let e in n) null == n[e] && (t[e] = 0);
            return t;
          },
          s = (e) => e.value.inputs ?? {},
          f = (e, a) => {
            if ((a.config?.target?.selectorGuids || []).length > 0) return e;
            let t = a?.config?.target?.pluginElement;
            return t ? l(t) : null;
          },
          g = (e, { PLUGIN_RIVE: a }, t) => {
            let n = o();
            if (!n) return;
            let l = n.getInstance(e),
              c = n.rive.StateMachineInputType,
              { name: r, inputs: u = {} } = t.config.value || {};
            function s(e) {
              if (e.loaded) t();
              else {
                let a = () => {
                  t(), e?.off("load", a);
                };
                e?.on("load", a);
              }
              function t() {
                let t = e.stateMachineInputs(r);
                if (null != t) {
                  if ((e.isPlaying || e.play(r, !1), i in u || d in u)) {
                    let a = e.layout,
                      t = u[i] ?? a.fit,
                      n = u[d] ?? a.alignment;
                    (t !== a.fit || n !== a.alignment) &&
                      (e.layout = a.copyWith({ fit: t, alignment: n }));
                  }
                  for (let e in u) {
                    if (e === i || e === d) continue;
                    let n = t.find((a) => a.name === e);
                    if (null != n)
                      switch (n.type) {
                        case c.Boolean:
                          null != u[e] && (n.value = !!u[e]);
                          break;
                        case c.Number: {
                          let t = a[e];
                          null != t && (n.value = t);
                          break;
                        }
                        case c.Trigger:
                          u[e] && n.fire();
                      }
                  }
                }
              }
            }
            l?.rive ? s(l.rive) : n.setLoadHandler(e, s);
          },
          b = (e, a) => null;
      },
      2866: function (e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var t = {
          clearPlugin: function () {
            return b;
          },
          createPluginInstance: function () {
            return f;
          },
          getPluginConfig: function () {
            return o;
          },
          getPluginDestination: function () {
            return s;
          },
          getPluginDuration: function () {
            return c;
          },
          getPluginOrigin: function () {
            return u;
          },
          renderPlugin: function () {
            return g;
          },
        };
        for (var n in t)
          Object.defineProperty(a, n, { enumerable: !0, get: t[n] });
        let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
          d = () => window.Webflow.require("spline"),
          l = (e, a) => e.filter((e) => !a.includes(e)),
          o = (e, a) => e.value[a],
          c = () => null,
          r = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          }),
          u = (e, a) => {
            let t = Object.keys(a.config.value);
            if (e) {
              let a = l(t, Object.keys(e));
              return a.length ? a.reduce((e, a) => ((e[a] = r[a]), e), e) : e;
            }
            return t.reduce((e, a) => ((e[a] = r[a]), e), {});
          },
          s = (e) => e.value,
          f = (e, a) => {
            let t = a?.config?.target?.pluginElement;
            return t ? i(t) : null;
          },
          g = (e, a, t) => {
            let n = d();
            if (!n) return;
            let i = n.getInstance(e),
              l = t.config.target.objectId,
              o = (e) => {
                if (!e)
                  throw Error("Invalid spline app passed to renderSpline");
                let t = l && e.findObjectById(l);
                if (!t) return;
                let { PLUGIN_SPLINE: n } = a;
                null != n.positionX && (t.position.x = n.positionX),
                  null != n.positionY && (t.position.y = n.positionY),
                  null != n.positionZ && (t.position.z = n.positionZ),
                  null != n.rotationX && (t.rotation.x = n.rotationX),
                  null != n.rotationY && (t.rotation.y = n.rotationY),
                  null != n.rotationZ && (t.rotation.z = n.rotationZ),
                  null != n.scaleX && (t.scale.x = n.scaleX),
                  null != n.scaleY && (t.scale.y = n.scaleY),
                  null != n.scaleZ && (t.scale.z = n.scaleZ);
              };
            i ? o(i.spline) : n.setLoadHandler(e, o);
          },
          b = () => null;
      },
      1407: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n = {
          clearPlugin: function () {
            return g;
          },
          createPluginInstance: function () {
            return u;
          },
          getPluginConfig: function () {
            return l;
          },
          getPluginDestination: function () {
            return r;
          },
          getPluginDuration: function () {
            return o;
          },
          getPluginOrigin: function () {
            return c;
          },
          renderPlugin: function () {
            return f;
          },
        };
        for (var i in n)
          Object.defineProperty(a, i, { enumerable: !0, get: n[i] });
        let d = t(380),
          l = (e, a) => e.value[a],
          o = () => null,
          c = (e, a) => {
            if (e) return e;
            let t = a.config.value,
              n = a.config.target.objectId,
              i = getComputedStyle(document.documentElement).getPropertyValue(
                n
              );
            return null != t.size
              ? { size: parseInt(i, 10) }
              : "%" === t.unit || "-" === t.unit
              ? { size: parseFloat(i) }
              : null != t.red && null != t.green && null != t.blue
              ? (0, d.normalizeColor)(i)
              : void 0;
          },
          r = (e) => e.value,
          u = () => null,
          s = {
            color: {
              match: ({ red: e, green: a, blue: t, alpha: n }) =>
                [e, a, t, n].every((e) => null != e),
              getValue: ({ red: e, green: a, blue: t, alpha: n }) =>
                `rgba(${e}, ${a}, ${t}, ${n})`,
            },
            size: {
              match: ({ size: e }) => null != e,
              getValue: ({ size: e }, a) => ("-" === a ? e : `${e}${a}`),
            },
          },
          f = (e, a, t) => {
            let {
                target: { objectId: n },
                value: { unit: i },
              } = t.config,
              d = a.PLUGIN_VARIABLE,
              l = Object.values(s).find((e) => e.match(d, i));
            l &&
              document.documentElement.style.setProperty(n, l.getValue(d, i));
          },
          g = (e, a) => {
            let t = a.config.target.objectId;
            document.documentElement.style.removeProperty(t);
          };
      },
      3690: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "pluginMethodMap", {
            enumerable: !0,
            get: function () {
              return u;
            },
          });
        let n = t(7087),
          i = r(t(7377)),
          d = r(t(2866)),
          l = r(t(2570)),
          o = r(t(1407));
        function c(e) {
          if ("function" != typeof WeakMap) return null;
          var a = new WeakMap(),
            t = new WeakMap();
          return (c = function (e) {
            return e ? t : a;
          })(e);
        }
        function r(e, a) {
          if (!a && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = c(a);
          if (t && t.has(e)) return t.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var d in e)
            if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, d) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, d, l)
                : (n[d] = e[d]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
        let u = new Map([
          [n.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
          [n.ActionTypeConsts.PLUGIN_SPLINE, { ...d }],
          [n.ActionTypeConsts.PLUGIN_RIVE, { ...l }],
          [n.ActionTypeConsts.PLUGIN_VARIABLE, { ...o }],
        ]);
      },
      8023: function (e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var t = {
          IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
            return p;
          },
          IX2_ANIMATION_FRAME_CHANGED: function () {
            return b;
          },
          IX2_CLEAR_REQUESTED: function () {
            return s;
          },
          IX2_ELEMENT_STATE_CHANGED: function () {
            return I;
          },
          IX2_EVENT_LISTENER_ADDED: function () {
            return f;
          },
          IX2_EVENT_STATE_CHANGED: function () {
            return g;
          },
          IX2_INSTANCE_ADDED: function () {
            return y;
          },
          IX2_INSTANCE_REMOVED: function () {
            return E;
          },
          IX2_INSTANCE_STARTED: function () {
            return T;
          },
          IX2_MEDIA_QUERIES_DEFINED: function () {
            return m;
          },
          IX2_PARAMETER_CHANGED: function () {
            return _;
          },
          IX2_PLAYBACK_REQUESTED: function () {
            return r;
          },
          IX2_PREVIEW_REQUESTED: function () {
            return c;
          },
          IX2_RAW_DATA_IMPORTED: function () {
            return i;
          },
          IX2_SESSION_INITIALIZED: function () {
            return d;
          },
          IX2_SESSION_STARTED: function () {
            return l;
          },
          IX2_SESSION_STOPPED: function () {
            return o;
          },
          IX2_STOP_REQUESTED: function () {
            return u;
          },
          IX2_TEST_FRAME_RENDERED: function () {
            return V;
          },
          IX2_VIEWPORT_WIDTH_CHANGED: function () {
            return O;
          },
        };
        for (var n in t)
          Object.defineProperty(a, n, { enumerable: !0, get: t[n] });
        let i = "IX2_RAW_DATA_IMPORTED",
          d = "IX2_SESSION_INITIALIZED",
          l = "IX2_SESSION_STARTED",
          o = "IX2_SESSION_STOPPED",
          c = "IX2_PREVIEW_REQUESTED",
          r = "IX2_PLAYBACK_REQUESTED",
          u = "IX2_STOP_REQUESTED",
          s = "IX2_CLEAR_REQUESTED",
          f = "IX2_EVENT_LISTENER_ADDED",
          g = "IX2_EVENT_STATE_CHANGED",
          b = "IX2_ANIMATION_FRAME_CHANGED",
          _ = "IX2_PARAMETER_CHANGED",
          y = "IX2_INSTANCE_ADDED",
          T = "IX2_INSTANCE_STARTED",
          E = "IX2_INSTANCE_REMOVED",
          I = "IX2_ELEMENT_STATE_CHANGED",
          p = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
          O = "IX2_VIEWPORT_WIDTH_CHANGED",
          m = "IX2_MEDIA_QUERIES_DEFINED",
          V = "IX2_TEST_FRAME_RENDERED";
      },
      2686: function (e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var t = {
          ABSTRACT_NODE: function () {
            return et;
          },
          AUTO: function () {
            return z;
          },
          BACKGROUND: function () {
            return D;
          },
          BACKGROUND_COLOR: function () {
            return k;
          },
          BAR_DELIMITER: function () {
            return K;
          },
          BORDER_COLOR: function () {
            return Y;
          },
          BOUNDARY_SELECTOR: function () {
            return c;
          },
          CHILDREN: function () {
            return W;
          },
          COLON_DELIMITER: function () {
            return j;
          },
          COLOR: function () {
            return F;
          },
          COMMA_DELIMITER: function () {
            return H;
          },
          CONFIG_UNIT: function () {
            return y;
          },
          CONFIG_VALUE: function () {
            return f;
          },
          CONFIG_X_UNIT: function () {
            return g;
          },
          CONFIG_X_VALUE: function () {
            return r;
          },
          CONFIG_Y_UNIT: function () {
            return b;
          },
          CONFIG_Y_VALUE: function () {
            return u;
          },
          CONFIG_Z_UNIT: function () {
            return _;
          },
          CONFIG_Z_VALUE: function () {
            return s;
          },
          DISPLAY: function () {
            return x;
          },
          FILTER: function () {
            return w;
          },
          FLEX: function () {
            return B;
          },
          FONT_VARIATION_SETTINGS: function () {
            return U;
          },
          HEIGHT: function () {
            return P;
          },
          HTML_ELEMENT: function () {
            return ee;
          },
          IMMEDIATE_CHILDREN: function () {
            return Q;
          },
          IX2_ID_DELIMITER: function () {
            return i;
          },
          OPACITY: function () {
            return G;
          },
          PARENT: function () {
            return Z;
          },
          PLAIN_OBJECT: function () {
            return ea;
          },
          PRESERVE_3D: function () {
            return J;
          },
          RENDER_GENERAL: function () {
            return ei;
          },
          RENDER_PLUGIN: function () {
            return el;
          },
          RENDER_STYLE: function () {
            return ed;
          },
          RENDER_TRANSFORM: function () {
            return en;
          },
          ROTATE_X: function () {
            return R;
          },
          ROTATE_Y: function () {
            return S;
          },
          ROTATE_Z: function () {
            return L;
          },
          SCALE_3D: function () {
            return v;
          },
          SCALE_X: function () {
            return m;
          },
          SCALE_Y: function () {
            return V;
          },
          SCALE_Z: function () {
            return h;
          },
          SIBLINGS: function () {
            return q;
          },
          SKEW: function () {
            return A;
          },
          SKEW_X: function () {
            return C;
          },
          SKEW_Y: function () {
            return N;
          },
          TRANSFORM: function () {
            return T;
          },
          TRANSLATE_3D: function () {
            return O;
          },
          TRANSLATE_X: function () {
            return E;
          },
          TRANSLATE_Y: function () {
            return I;
          },
          TRANSLATE_Z: function () {
            return p;
          },
          WF_PAGE: function () {
            return d;
          },
          WIDTH: function () {
            return M;
          },
          WILL_CHANGE: function () {
            return X;
          },
          W_MOD_IX: function () {
            return o;
          },
          W_MOD_JS: function () {
            return l;
          },
        };
        for (var n in t)
          Object.defineProperty(a, n, { enumerable: !0, get: t[n] });
        let i = "|",
          d = "data-wf-page",
          l = "w-mod-js",
          o = "w-mod-ix",
          c = ".w-dyn-item",
          r = "xValue",
          u = "yValue",
          s = "zValue",
          f = "value",
          g = "xUnit",
          b = "yUnit",
          _ = "zUnit",
          y = "unit",
          T = "transform",
          E = "translateX",
          I = "translateY",
          p = "translateZ",
          O = "translate3d",
          m = "scaleX",
          V = "scaleY",
          h = "scaleZ",
          v = "scale3d",
          R = "rotateX",
          S = "rotateY",
          L = "rotateZ",
          A = "skew",
          C = "skewX",
          N = "skewY",
          G = "opacity",
          w = "filter",
          U = "font-variation-settings",
          M = "width",
          P = "height",
          k = "backgroundColor",
          D = "background",
          Y = "borderColor",
          F = "color",
          x = "display",
          B = "flex",
          X = "willChange",
          z = "AUTO",
          H = ",",
          j = ":",
          K = "|",
          W = "CHILDREN",
          Q = "IMMEDIATE_CHILDREN",
          q = "SIBLINGS",
          Z = "PARENT",
          J = "preserve-3d",
          ee = "HTML_ELEMENT",
          ea = "PLAIN_OBJECT",
          et = "ABSTRACT_NODE",
          en = "RENDER_TRANSFORM",
          ei = "RENDER_GENERAL",
          ed = "RENDER_STYLE",
          el = "RENDER_PLUGIN";
      },
      262: function (e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var t = {
          ActionAppliesTo: function () {
            return d;
          },
          ActionTypeConsts: function () {
            return i;
          },
        };
        for (var n in t)
          Object.defineProperty(a, n, { enumerable: !0, get: t[n] });
        let i = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
          },
          d = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
          };
      },
      7087: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n = {
          ActionTypeConsts: function () {
            return l.ActionTypeConsts;
          },
          IX2EngineActionTypes: function () {
            return o;
          },
          IX2EngineConstants: function () {
            return c;
          },
          QuickEffectIds: function () {
            return d.QuickEffectIds;
          },
        };
        for (var i in n)
          Object.defineProperty(a, i, { enumerable: !0, get: n[i] });
        let d = r(t(1833), a),
          l = r(t(262), a);
        r(t(8704), a), r(t(3213), a);
        let o = s(t(8023)),
          c = s(t(2686));
        function r(e, a) {
          return (
            Object.keys(e).forEach(function (t) {
              "default" === t ||
                Object.prototype.hasOwnProperty.call(a, t) ||
                Object.defineProperty(a, t, {
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                });
            }),
            e
          );
        }
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var a = new WeakMap(),
            t = new WeakMap();
          return (u = function (e) {
            return e ? t : a;
          })(e);
        }
        function s(e, a) {
          if (!a && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = u(a);
          if (t && t.has(e)) return t.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var d in e)
            if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, d) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, d, l)
                : (n[d] = e[d]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
      },
      3213: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "ReducedMotionTypes", {
            enumerable: !0,
            get: function () {
              return u;
            },
          });
        let {
            TRANSFORM_MOVE: n,
            TRANSFORM_SCALE: i,
            TRANSFORM_ROTATE: d,
            TRANSFORM_SKEW: l,
            STYLE_SIZE: o,
            STYLE_FILTER: c,
            STYLE_FONT_VARIATION: r,
          } = t(262).ActionTypeConsts,
          u = { [n]: !0, [i]: !0, [d]: !0, [l]: !0, [o]: !0, [c]: !0, [r]: !0 };
      },
      1833: function (e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var t = {
          EventAppliesTo: function () {
            return d;
          },
          EventBasedOn: function () {
            return l;
          },
          EventContinuousMouseAxes: function () {
            return o;
          },
          EventLimitAffectedElements: function () {
            return c;
          },
          EventTypeConsts: function () {
            return i;
          },
          QuickEffectDirectionConsts: function () {
            return u;
          },
          QuickEffectIds: function () {
            return r;
          },
        };
        for (var n in t)
          Object.defineProperty(a, n, { enumerable: !0, get: t[n] });
        let i = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL",
          },
          d = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
          l = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
          o = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
          c = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
          },
          r = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
          },
          u = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
          };
      },
      8704: function (e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "InteractionTypeConsts", {
            enumerable: !0,
            get: function () {
              return t;
            },
          });
        let t = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
            "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION",
        };
      },
      380: function (e, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "normalizeColor", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        let t = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aqua: "#00FFFF",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blue: "#0000FF",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          fuchsia: "#FF00FF",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#ADFF2F",
          grey: "#808080",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgray: "#D3D3D3",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          lime: "#00FF00",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          maroon: "#800000",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          navy: "#000080",
          oldlace: "#FDF5E6",
          olive: "#808000",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#FF0000",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          silver: "#C0C0C0",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          teal: "#008080",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          white: "#FFFFFF",
          whitesmoke: "#F5F5F5",
          yellow: "#FFFF00",
          yellowgreen: "#9ACD32",
        };
        function n(e) {
          let a,
            n,
            i,
            d = 1,
            l = e.replace(/\s/g, "").toLowerCase(),
            o = ("string" == typeof t[l] ? t[l].toLowerCase() : null) || l;
          if (o.startsWith("#")) {
            let e = o.substring(1);
            3 === e.length || 4 === e.length
              ? ((a = parseInt(e[0] + e[0], 16)),
                (n = parseInt(e[1] + e[1], 16)),
                (i = parseInt(e[2] + e[2], 16)),
                4 === e.length && (d = parseInt(e[3] + e[3], 16) / 255))
              : (6 === e.length || 8 === e.length) &&
                ((a = parseInt(e.substring(0, 2), 16)),
                (n = parseInt(e.substring(2, 4), 16)),
                (i = parseInt(e.substring(4, 6), 16)),
                8 === e.length && (d = parseInt(e.substring(6, 8), 16) / 255));
          } else if (o.startsWith("rgba")) {
            let e = o.match(/rgba\(([^)]+)\)/)[1].split(",");
            (a = parseInt(e[0], 10)),
              (n = parseInt(e[1], 10)),
              (i = parseInt(e[2], 10)),
              (d = parseFloat(e[3]));
          } else if (o.startsWith("rgb")) {
            let e = o.match(/rgb\(([^)]+)\)/)[1].split(",");
            (a = parseInt(e[0], 10)),
              (n = parseInt(e[1], 10)),
              (i = parseInt(e[2], 10));
          } else if (o.startsWith("hsla")) {
            let e,
              t,
              l,
              c = o.match(/hsla\(([^)]+)\)/)[1].split(","),
              r = parseFloat(c[0]),
              u = parseFloat(c[1].replace("%", "")) / 100,
              s = parseFloat(c[2].replace("%", "")) / 100;
            d = parseFloat(c[3]);
            let f = (1 - Math.abs(2 * s - 1)) * u,
              g = f * (1 - Math.abs(((r / 60) % 2) - 1)),
              b = s - f / 2;
            r >= 0 && r < 60
              ? ((e = f), (t = g), (l = 0))
              : r >= 60 && r < 120
              ? ((e = g), (t = f), (l = 0))
              : r >= 120 && r < 180
              ? ((e = 0), (t = f), (l = g))
              : r >= 180 && r < 240
              ? ((e = 0), (t = g), (l = f))
              : r >= 240 && r < 300
              ? ((e = g), (t = 0), (l = f))
              : ((e = f), (t = 0), (l = g)),
              (a = Math.round((e + b) * 255)),
              (n = Math.round((t + b) * 255)),
              (i = Math.round((l + b) * 255));
          } else if (o.startsWith("hsl")) {
            let e,
              t,
              d,
              l = o.match(/hsl\(([^)]+)\)/)[1].split(","),
              c = parseFloat(l[0]),
              r = parseFloat(l[1].replace("%", "")) / 100,
              u = parseFloat(l[2].replace("%", "")) / 100,
              s = (1 - Math.abs(2 * u - 1)) * r,
              f = s * (1 - Math.abs(((c / 60) % 2) - 1)),
              g = u - s / 2;
            c >= 0 && c < 60
              ? ((e = s), (t = f), (d = 0))
              : c >= 60 && c < 120
              ? ((e = f), (t = s), (d = 0))
              : c >= 120 && c < 180
              ? ((e = 0), (t = s), (d = f))
              : c >= 180 && c < 240
              ? ((e = 0), (t = f), (d = s))
              : c >= 240 && c < 300
              ? ((e = f), (t = 0), (d = s))
              : ((e = s), (t = 0), (d = f)),
              (a = Math.round((e + g) * 255)),
              (n = Math.round((t + g) * 255)),
              (i = Math.round((d + g) * 255));
          }
          if (Number.isNaN(a) || Number.isNaN(n) || Number.isNaN(i))
            throw Error(
              `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
            );
          return { red: a, green: n, blue: i, alpha: d };
        }
      },
      9468: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n = {
          IX2BrowserSupport: function () {
            return d;
          },
          IX2EasingUtils: function () {
            return o;
          },
          IX2Easings: function () {
            return l;
          },
          IX2ElementsReducer: function () {
            return c;
          },
          IX2VanillaPlugins: function () {
            return r;
          },
          IX2VanillaUtils: function () {
            return u;
          },
        };
        for (var i in n)
          Object.defineProperty(a, i, { enumerable: !0, get: n[i] });
        let d = f(t(2662)),
          l = f(t(8686)),
          o = f(t(3767)),
          c = f(t(5861)),
          r = f(t(1799)),
          u = f(t(4124));
        function s(e) {
          if ("function" != typeof WeakMap) return null;
          var a = new WeakMap(),
            t = new WeakMap();
          return (s = function (e) {
            return e ? t : a;
          })(e);
        }
        function f(e, a) {
          if (!a && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = s(a);
          if (t && t.has(e)) return t.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var d in e)
            if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, d) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, d, l)
                : (n[d] = e[d]);
            }
          return (n.default = e), t && t.set(e, n), n;
        }
      },
      2662: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n,
          i = {
            ELEMENT_MATCHES: function () {
              return r;
            },
            FLEX_PREFIXED: function () {
              return u;
            },
            IS_BROWSER_ENV: function () {
              return o;
            },
            TRANSFORM_PREFIXED: function () {
              return s;
            },
            TRANSFORM_STYLE_PREFIXED: function () {
              return g;
            },
            withBrowser: function () {
              return c;
            },
          };
        for (var d in i)
          Object.defineProperty(a, d, { enumerable: !0, get: i[d] });
        let l = (n = t(9777)) && n.__esModule ? n : { default: n },
          o = "undefined" != typeof window,
          c = (e, a) => (o ? e() : a),
          r = c(() =>
            (0, l.default)(
              [
                "matches",
                "matchesSelector",
                "mozMatchesSelector",
                "msMatchesSelector",
                "oMatchesSelector",
                "webkitMatchesSelector",
              ],
              (e) => e in Element.prototype
            )
          ),
          u = c(() => {
            let e = document.createElement("i"),
              a = [
                "flex",
                "-webkit-flex",
                "-ms-flexbox",
                "-moz-box",
                "-webkit-box",
              ];
            try {
              let { length: t } = a;
              for (let n = 0; n < t; n++) {
                let t = a[n];
                if (((e.style.display = t), e.style.display === t)) return t;
              }
              return "";
            } catch (e) {
              return "";
            }
          }, "flex"),
          s = c(() => {
            let e = document.createElement("i");
            if (null == e.style.transform) {
              let a = ["Webkit", "Moz", "ms"],
                { length: t } = a;
              for (let n = 0; n < t; n++) {
                let t = a[n] + "Transform";
                if (void 0 !== e.style[t]) return t;
              }
            }
            return "transform";
          }, "transform"),
          f = s.split("transform")[0],
          g = f ? f + "TransformStyle" : "transformStyle";
      },
      3767: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n,
          i = {
            applyEasing: function () {
              return s;
            },
            createBezierEasing: function () {
              return u;
            },
            optimizeFloat: function () {
              return r;
            },
          };
        for (var d in i)
          Object.defineProperty(a, d, { enumerable: !0, get: i[d] });
        let l = (function (e, a) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var t = c(a);
            if (t && t.has(e)) return t.get(e);
            var n = { __proto__: null },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var d in e)
              if (
                "default" !== d &&
                Object.prototype.hasOwnProperty.call(e, d)
              ) {
                var l = i ? Object.getOwnPropertyDescriptor(e, d) : null;
                l && (l.get || l.set)
                  ? Object.defineProperty(n, d, l)
                  : (n[d] = e[d]);
              }
            return (n.default = e), t && t.set(e, n), n;
          })(t(8686)),
          o = (n = t(1361)) && n.__esModule ? n : { default: n };
        function c(e) {
          if ("function" != typeof WeakMap) return null;
          var a = new WeakMap(),
            t = new WeakMap();
          return (c = function (e) {
            return e ? t : a;
          })(e);
        }
        function r(e, a = 5, t = 10) {
          let n = Math.pow(t, a),
            i = Number(Math.round(e * n) / n);
          return Math.abs(i) > 1e-4 ? i : 0;
        }
        function u(e) {
          return (0, o.default)(...e);
        }
        function s(e, a, t) {
          return 0 === a
            ? 0
            : 1 === a
            ? 1
            : t
            ? r(a > 0 ? t(a) : a)
            : r(a > 0 && e && l[e] ? l[e](a) : a);
        }
      },
      8686: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n,
          i = {
            bounce: function () {
              return B;
            },
            bouncePast: function () {
              return X;
            },
            ease: function () {
              return o;
            },
            easeIn: function () {
              return c;
            },
            easeInOut: function () {
              return u;
            },
            easeOut: function () {
              return r;
            },
            inBack: function () {
              return w;
            },
            inCirc: function () {
              return A;
            },
            inCubic: function () {
              return b;
            },
            inElastic: function () {
              return P;
            },
            inExpo: function () {
              return R;
            },
            inOutBack: function () {
              return M;
            },
            inOutCirc: function () {
              return N;
            },
            inOutCubic: function () {
              return y;
            },
            inOutElastic: function () {
              return D;
            },
            inOutExpo: function () {
              return L;
            },
            inOutQuad: function () {
              return g;
            },
            inOutQuart: function () {
              return I;
            },
            inOutQuint: function () {
              return m;
            },
            inOutSine: function () {
              return v;
            },
            inQuad: function () {
              return s;
            },
            inQuart: function () {
              return T;
            },
            inQuint: function () {
              return p;
            },
            inSine: function () {
              return V;
            },
            outBack: function () {
              return U;
            },
            outBounce: function () {
              return G;
            },
            outCirc: function () {
              return C;
            },
            outCubic: function () {
              return _;
            },
            outElastic: function () {
              return k;
            },
            outExpo: function () {
              return S;
            },
            outQuad: function () {
              return f;
            },
            outQuart: function () {
              return E;
            },
            outQuint: function () {
              return O;
            },
            outSine: function () {
              return h;
            },
            swingFrom: function () {
              return F;
            },
            swingFromTo: function () {
              return Y;
            },
            swingTo: function () {
              return x;
            },
          };
        for (var d in i)
          Object.defineProperty(a, d, { enumerable: !0, get: i[d] });
        let l = (n = t(1361)) && n.__esModule ? n : { default: n },
          o = (0, l.default)(0.25, 0.1, 0.25, 1),
          c = (0, l.default)(0.42, 0, 1, 1),
          r = (0, l.default)(0, 0, 0.58, 1),
          u = (0, l.default)(0.42, 0, 0.58, 1);
        function s(e) {
          return Math.pow(e, 2);
        }
        function f(e) {
          return -(Math.pow(e - 1, 2) - 1);
        }
        function g(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 2)
            : -0.5 * ((e -= 2) * e - 2);
        }
        function b(e) {
          return Math.pow(e, 3);
        }
        function _(e) {
          return Math.pow(e - 1, 3) + 1;
        }
        function y(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 3)
            : 0.5 * (Math.pow(e - 2, 3) + 2);
        }
        function T(e) {
          return Math.pow(e, 4);
        }
        function E(e) {
          return -(Math.pow(e - 1, 4) - 1);
        }
        function I(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 4)
            : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
        }
        function p(e) {
          return Math.pow(e, 5);
        }
        function O(e) {
          return Math.pow(e - 1, 5) + 1;
        }
        function m(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 5)
            : 0.5 * (Math.pow(e - 2, 5) + 2);
        }
        function V(e) {
          return -Math.cos((Math.PI / 2) * e) + 1;
        }
        function h(e) {
          return Math.sin((Math.PI / 2) * e);
        }
        function v(e) {
          return -0.5 * (Math.cos(Math.PI * e) - 1);
        }
        function R(e) {
          return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
        }
        function S(e) {
          return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
        }
        function L(e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (e /= 0.5) < 1
            ? 0.5 * Math.pow(2, 10 * (e - 1))
            : 0.5 * (-Math.pow(2, -10 * --e) + 2);
        }
        function A(e) {
          return -(Math.sqrt(1 - e * e) - 1);
        }
        function C(e) {
          return Math.sqrt(1 - Math.pow(e - 1, 2));
        }
        function N(e) {
          return (e /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        }
        function G(e) {
          return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function w(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function U(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function M(e) {
          let a = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((a *= 1.525) + 1) * e - a))
            : 0.5 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2);
        }
        function P(e) {
          let a = 1.70158,
            t = 0,
            n = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (t || (t = 0.3),
              n < 1
                ? ((n = 1), (a = t / 4))
                : (a = (t / (2 * Math.PI)) * Math.asin(1 / n)),
              -(
                n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - a)) / t)
              ));
        }
        function k(e) {
          let a = 1.70158,
            t = 0,
            n = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (t || (t = 0.3),
              n < 1
                ? ((n = 1), (a = t / 4))
                : (a = (t / (2 * Math.PI)) * Math.asin(1 / n)),
              n * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - a)) / t) +
                1);
        }
        function D(e) {
          let a = 1.70158,
            t = 0,
            n = 1;
          return 0 === e
            ? 0
            : 2 == (e /= 0.5)
            ? 1
            : (t || (t = 0.3 * 1.5),
              n < 1
                ? ((n = 1), (a = t / 4))
                : (a = (t / (2 * Math.PI)) * Math.asin(1 / n)),
              e < 1)
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - a)) / t))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - a)) / t) *
                0.5 +
              1;
        }
        function Y(e) {
          let a = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((a *= 1.525) + 1) * e - a))
            : 0.5 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2);
        }
        function F(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function x(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function B(e) {
          return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function X(e) {
          return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
            : e < 2.5 / 2.75
            ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
            : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
        }
      },
      1799: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n = {
          clearPlugin: function () {
            return _;
          },
          createPluginInstance: function () {
            return g;
          },
          getPluginConfig: function () {
            return r;
          },
          getPluginDestination: function () {
            return f;
          },
          getPluginDuration: function () {
            return s;
          },
          getPluginOrigin: function () {
            return u;
          },
          isPluginType: function () {
            return o;
          },
          renderPlugin: function () {
            return b;
          },
        };
        for (var i in n)
          Object.defineProperty(a, i, { enumerable: !0, get: n[i] });
        let d = t(2662),
          l = t(3690);
        function o(e) {
          return l.pluginMethodMap.has(e);
        }
        let c = (e) => (a) => {
            if (!d.IS_BROWSER_ENV) return () => null;
            let t = l.pluginMethodMap.get(a);
            if (!t) throw Error(`IX2 no plugin configured for: ${a}`);
            let n = t[e];
            if (!n) throw Error(`IX2 invalid plugin method: ${e}`);
            return n;
          },
          r = c("getPluginConfig"),
          u = c("getPluginOrigin"),
          s = c("getPluginDuration"),
          f = c("getPluginDestination"),
          g = c("createPluginInstance"),
          b = c("renderPlugin"),
          _ = c("clearPlugin");
      },
      4124: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n = {
          cleanupHTMLElement: function () {
            return ej;
          },
          clearAllStyles: function () {
            return eX;
          },
          clearObjectCache: function () {
            return ef;
          },
          getActionListProgress: function () {
            return e$;
          },
          getAffectedElements: function () {
            return eO;
          },
          getComputedStyle: function () {
            return em;
          },
          getDestinationValues: function () {
            return eC;
          },
          getElementId: function () {
            return ey;
          },
          getInstanceId: function () {
            return eb;
          },
          getInstanceOrigin: function () {
            return eR;
          },
          getItemConfigByKey: function () {
            return eA;
          },
          getMaxDurationItemIndex: function () {
            return eQ;
          },
          getNamespacedParameterId: function () {
            return eJ;
          },
          getRenderType: function () {
            return eN;
          },
          getStyleProp: function () {
            return eG;
          },
          mediaQueriesEqual: function () {
            return e5;
          },
          observeStore: function () {
            return eI;
          },
          reduceListToGroup: function () {
            return eq;
          },
          reifyState: function () {
            return eT;
          },
          renderHTMLElement: function () {
            return ew;
          },
          shallowEqual: function () {
            return u.default;
          },
          shouldAllowMediaQuery: function () {
            return e0;
          },
          shouldNamespaceEventParameter: function () {
            return eZ;
          },
          stringifyTarget: function () {
            return e1;
          },
        };
        for (var i in n)
          Object.defineProperty(a, i, { enumerable: !0, get: n[i] });
        let d = _(t(4075)),
          l = _(t(1455)),
          o = _(t(5720)),
          c = t(1185),
          r = t(7087),
          u = _(t(7164)),
          s = t(3767),
          f = t(380),
          g = t(1799),
          b = t(2662);
        function _(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            BACKGROUND: y,
            TRANSFORM: T,
            TRANSLATE_3D: E,
            SCALE_3D: I,
            ROTATE_X: p,
            ROTATE_Y: O,
            ROTATE_Z: m,
            SKEW: V,
            PRESERVE_3D: h,
            FLEX: v,
            OPACITY: R,
            FILTER: S,
            FONT_VARIATION_SETTINGS: L,
            WIDTH: A,
            HEIGHT: C,
            BACKGROUND_COLOR: N,
            BORDER_COLOR: G,
            COLOR: w,
            CHILDREN: U,
            IMMEDIATE_CHILDREN: M,
            SIBLINGS: P,
            PARENT: k,
            DISPLAY: D,
            WILL_CHANGE: Y,
            AUTO: F,
            COMMA_DELIMITER: x,
            COLON_DELIMITER: B,
            BAR_DELIMITER: X,
            RENDER_TRANSFORM: z,
            RENDER_GENERAL: H,
            RENDER_STYLE: j,
            RENDER_PLUGIN: K,
          } = r.IX2EngineConstants,
          {
            TRANSFORM_MOVE: W,
            TRANSFORM_SCALE: Q,
            TRANSFORM_ROTATE: q,
            TRANSFORM_SKEW: Z,
            STYLE_OPACITY: J,
            STYLE_FILTER: ee,
            STYLE_FONT_VARIATION: ea,
            STYLE_SIZE: et,
            STYLE_BACKGROUND_COLOR: en,
            STYLE_BORDER: ei,
            STYLE_TEXT_COLOR: ed,
            GENERAL_DISPLAY: el,
            OBJECT_VALUE: eo,
          } = r.ActionTypeConsts,
          ec = (e) => e.trim(),
          er = Object.freeze({ [en]: N, [ei]: G, [ed]: w }),
          eu = Object.freeze({
            [b.TRANSFORM_PREFIXED]: T,
            [N]: y,
            [R]: R,
            [S]: S,
            [A]: A,
            [C]: C,
            [L]: L,
          }),
          es = new Map();
        function ef() {
          es.clear();
        }
        let eg = 1;
        function eb() {
          return "i" + eg++;
        }
        let e_ = 1;
        function ey(e, a) {
          for (let t in e) {
            let n = e[t];
            if (n && n.ref === a) return n.id;
          }
          return "e" + e_++;
        }
        function eT({ events: e, actionLists: a, site: t } = {}) {
          let n = (0, l.default)(
              e,
              (e, a) => {
                let { eventTypeId: t } = a;
                return e[t] || (e[t] = {}), (e[t][a.id] = a), e;
              },
              {}
            ),
            i = t && t.mediaQueries,
            d = [];
          return (
            i
              ? (d = i.map((e) => e.key))
              : ((i = []),
                console.warn("IX2 missing mediaQueries in site data")),
            {
              ixData: {
                events: e,
                actionLists: a,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: d,
              },
            }
          );
        }
        let eE = (e, a) => e === a;
        function eI({ store: e, select: a, onChange: t, comparator: n = eE }) {
          let { getState: i, subscribe: d } = e,
            l = d(function () {
              let d = a(i());
              if (null == d) return void l();
              n(d, o) || t((o = d), e);
            }),
            o = a(i());
          return l;
        }
        function ep(e) {
          let a = typeof e;
          if ("string" === a) return { id: e };
          if (null != e && "object" === a) {
            let {
              id: a,
              objectId: t,
              selector: n,
              selectorGuids: i,
              appliesTo: d,
              useEventTarget: l,
            } = e;
            return {
              id: a,
              objectId: t,
              selector: n,
              selectorGuids: i,
              appliesTo: d,
              useEventTarget: l,
            };
          }
          return {};
        }
        function eO({
          config: e,
          event: a,
          eventTarget: t,
          elementRoot: n,
          elementApi: i,
        }) {
          let d, l, o;
          if (!i) throw Error("IX2 missing elementApi");
          let { targets: c } = e;
          if (Array.isArray(c) && c.length > 0)
            return c.reduce(
              (e, d) =>
                e.concat(
                  eO({
                    config: { target: d },
                    event: a,
                    eventTarget: t,
                    elementRoot: n,
                    elementApi: i,
                  })
                ),
              []
            );
          let {
              getValidDocument: u,
              getQuerySelector: s,
              queryDocument: f,
              getChildElements: g,
              getSiblingElements: _,
              matchSelector: y,
              elementContains: T,
              isSiblingNode: E,
            } = i,
            { target: I } = e;
          if (!I) return [];
          let {
            id: p,
            objectId: O,
            selector: m,
            selectorGuids: V,
            appliesTo: h,
            useEventTarget: v,
          } = ep(I);
          if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
          if (h === r.EventAppliesTo.PAGE) {
            let e = u(p);
            return e ? [e] : [];
          }
          let R = (a?.action?.config?.affectedElements ?? {})[p || m] || {},
            S = !!(R.id || R.selector),
            L = a && s(ep(a.target));
          if (
            (S
              ? ((d = R.limitAffectedElements), (l = L), (o = s(R)))
              : (l = o = s({ id: p, selector: m, selectorGuids: V })),
            a && v)
          ) {
            let e = t && (o || !0 === v) ? [t] : f(L);
            if (o) {
              if (v === k) return f(o).filter((a) => e.some((e) => T(a, e)));
              if (v === U) return f(o).filter((a) => e.some((e) => T(e, a)));
              if (v === P) return f(o).filter((a) => e.some((e) => E(e, a)));
            }
            return e;
          }
          return null == l || null == o
            ? []
            : b.IS_BROWSER_ENV && n
            ? f(o).filter((e) => n.contains(e))
            : d === U
            ? f(l, o)
            : d === M
            ? g(f(l)).filter(y(o))
            : d === P
            ? _(f(l)).filter(y(o))
            : f(o);
        }
        function em({ element: e, actionItem: a }) {
          if (!b.IS_BROWSER_ENV) return {};
          let { actionTypeId: t } = a;
          switch (t) {
            case et:
            case en:
            case ei:
            case ed:
            case el:
              return window.getComputedStyle(e);
            default:
              return {};
          }
        }
        let eV = /px/,
          eh = (e, a) =>
            a.reduce(
              (e, a) => (null == e[a.type] && (e[a.type] = eM[a.type]), e),
              e || {}
            ),
          ev = (e, a) =>
            a.reduce(
              (e, a) => (
                null == e[a.type] &&
                  (e[a.type] = eP[a.type] || a.defaultValue || 0),
                e
              ),
              e || {}
            );
        function eR(e, a = {}, t = {}, n, i) {
          let { getStyle: l } = i,
            { actionTypeId: o } = n;
          if ((0, g.isPluginType)(o)) return (0, g.getPluginOrigin)(o)(a[o], n);
          switch (n.actionTypeId) {
            case W:
            case Q:
            case q:
            case Z:
              return a[n.actionTypeId] || eU[n.actionTypeId];
            case ee:
              return eh(a[n.actionTypeId], n.config.filters);
            case ea:
              return ev(a[n.actionTypeId], n.config.fontVariations);
            case J:
              return { value: (0, d.default)(parseFloat(l(e, R)), 1) };
            case et: {
              let a,
                i = l(e, A),
                o = l(e, C);
              return {
                widthValue:
                  n.config.widthUnit === F
                    ? eV.test(i)
                      ? parseFloat(i)
                      : parseFloat(t.width)
                    : (0, d.default)(parseFloat(i), parseFloat(t.width)),
                heightValue:
                  n.config.heightUnit === F
                    ? eV.test(o)
                      ? parseFloat(o)
                      : parseFloat(t.height)
                    : (0, d.default)(parseFloat(o), parseFloat(t.height)),
              };
            }
            case en:
            case ei:
            case ed:
              return (function ({
                element: e,
                actionTypeId: a,
                computedStyle: t,
                getStyle: n,
              }) {
                let i = er[a],
                  l = n(e, i),
                  o = (function (e, a) {
                    let t = e.exec(a);
                    return t ? t[1] : "";
                  })(eF, eY.test(l) ? l : t[i]).split(x);
                return {
                  rValue: (0, d.default)(parseInt(o[0], 10), 255),
                  gValue: (0, d.default)(parseInt(o[1], 10), 255),
                  bValue: (0, d.default)(parseInt(o[2], 10), 255),
                  aValue: (0, d.default)(parseFloat(o[3]), 1),
                };
              })({
                element: e,
                actionTypeId: n.actionTypeId,
                computedStyle: t,
                getStyle: l,
              });
            case el:
              return { value: (0, d.default)(l(e, D), t.display) };
            case eo:
              return a[n.actionTypeId] || { value: 0 };
            default:
              return;
          }
        }
        let eS = (e, a) => (a && (e[a.type] = a.value || 0), e),
          eL = (e, a) => (a && (e[a.type] = a.value || 0), e),
          eA = (e, a, t) => {
            if ((0, g.isPluginType)(e)) return (0, g.getPluginConfig)(e)(t, a);
            switch (e) {
              case ee: {
                let e = (0, o.default)(t.filters, ({ type: e }) => e === a);
                return e ? e.value : 0;
              }
              case ea: {
                let e = (0, o.default)(
                  t.fontVariations,
                  ({ type: e }) => e === a
                );
                return e ? e.value : 0;
              }
              default:
                return t[a];
            }
          };
        function eC({ element: e, actionItem: a, elementApi: t }) {
          if ((0, g.isPluginType)(a.actionTypeId))
            return (0, g.getPluginDestination)(a.actionTypeId)(a.config);
          switch (a.actionTypeId) {
            case W:
            case Q:
            case q:
            case Z: {
              let { xValue: e, yValue: t, zValue: n } = a.config;
              return { xValue: e, yValue: t, zValue: n };
            }
            case et: {
              let { getStyle: n, setStyle: i, getProperty: d } = t,
                { widthUnit: l, heightUnit: o } = a.config,
                { widthValue: c, heightValue: r } = a.config;
              if (!b.IS_BROWSER_ENV) return { widthValue: c, heightValue: r };
              if (l === F) {
                let a = n(e, A);
                i(e, A, ""), (c = d(e, "offsetWidth")), i(e, A, a);
              }
              if (o === F) {
                let a = n(e, C);
                i(e, C, ""), (r = d(e, "offsetHeight")), i(e, C, a);
              }
              return { widthValue: c, heightValue: r };
            }
            case en:
            case ei:
            case ed: {
              let {
                rValue: n,
                gValue: i,
                bValue: d,
                aValue: l,
                globalSwatchId: o,
              } = a.config;
              if (o && o.startsWith("--")) {
                let { getStyle: a } = t,
                  n = a(e, o),
                  i = (0, f.normalizeColor)(n);
                return {
                  rValue: i.red,
                  gValue: i.green,
                  bValue: i.blue,
                  aValue: i.alpha,
                };
              }
              return { rValue: n, gValue: i, bValue: d, aValue: l };
            }
            case ee:
              return a.config.filters.reduce(eS, {});
            case ea:
              return a.config.fontVariations.reduce(eL, {});
            default: {
              let { value: e } = a.config;
              return { value: e };
            }
          }
        }
        function eN(e) {
          return /^TRANSFORM_/.test(e)
            ? z
            : /^STYLE_/.test(e)
            ? j
            : /^GENERAL_/.test(e)
            ? H
            : /^PLUGIN_/.test(e)
            ? K
            : void 0;
        }
        function eG(e, a) {
          return e === j ? a.replace("STYLE_", "").toLowerCase() : null;
        }
        function ew(e, a, t, n, i, d, o, c, r) {
          switch (c) {
            case z:
              var u = e,
                s = a,
                f = t,
                _ = i,
                y = o;
              let T = eD
                  .map((e) => {
                    let a = eU[e],
                      {
                        xValue: t = a.xValue,
                        yValue: n = a.yValue,
                        zValue: i = a.zValue,
                        xUnit: d = "",
                        yUnit: l = "",
                        zUnit: o = "",
                      } = s[e] || {};
                    switch (e) {
                      case W:
                        return `${E}(${t}${d}, ${n}${l}, ${i}${o})`;
                      case Q:
                        return `${I}(${t}${d}, ${n}${l}, ${i}${o})`;
                      case q:
                        return `${p}(${t}${d}) ${O}(${n}${l}) ${m}(${i}${o})`;
                      case Z:
                        return `${V}(${t}${d}, ${n}${l})`;
                      default:
                        return "";
                    }
                  })
                  .join(" "),
                { setStyle: R } = y;
              ex(u, b.TRANSFORM_PREFIXED, y),
                R(u, b.TRANSFORM_PREFIXED, T),
                (function (
                  { actionTypeId: e },
                  { xValue: a, yValue: t, zValue: n }
                ) {
                  return (
                    (e === W && void 0 !== n) ||
                    (e === Q && void 0 !== n) ||
                    (e === q && (void 0 !== a || void 0 !== t))
                  );
                })(_, f) && R(u, b.TRANSFORM_STYLE_PREFIXED, h);
              return;
            case j:
              return (function (e, a, t, n, i, d) {
                let { setStyle: o } = d;
                switch (n.actionTypeId) {
                  case et: {
                    let { widthUnit: a = "", heightUnit: i = "" } = n.config,
                      { widthValue: l, heightValue: c } = t;
                    void 0 !== l &&
                      (a === F && (a = "px"), ex(e, A, d), o(e, A, l + a)),
                      void 0 !== c &&
                        (i === F && (i = "px"), ex(e, C, d), o(e, C, c + i));
                    break;
                  }
                  case ee:
                    var c = n.config;
                    let r = (0, l.default)(
                        t,
                        (e, a, t) => `${e} ${t}(${a}${ek(t, c)})`,
                        ""
                      ),
                      { setStyle: u } = d;
                    ex(e, S, d), u(e, S, r);
                    break;
                  case ea:
                    n.config;
                    let s = (0, l.default)(
                        t,
                        (e, a, t) => (e.push(`"${t}" ${a}`), e),
                        []
                      ).join(", "),
                      { setStyle: f } = d;
                    ex(e, L, d), f(e, L, s);
                    break;
                  case en:
                  case ei:
                  case ed: {
                    let a = er[n.actionTypeId],
                      i = Math.round(t.rValue),
                      l = Math.round(t.gValue),
                      c = Math.round(t.bValue),
                      r = t.aValue;
                    ex(e, a, d),
                      o(
                        e,
                        a,
                        r >= 1
                          ? `rgb(${i},${l},${c})`
                          : `rgba(${i},${l},${c},${r})`
                      );
                    break;
                  }
                  default: {
                    let { unit: a = "" } = n.config;
                    ex(e, i, d), o(e, i, t.value + a);
                  }
                }
              })(e, 0, t, i, d, o);
            case H:
              var N = e,
                G = i,
                w = o;
              let { setStyle: U } = w;
              if (G.actionTypeId === el) {
                let { value: e } = G.config;
                U(N, D, e === v && b.IS_BROWSER_ENV ? b.FLEX_PREFIXED : e);
              }
              return;
            case K: {
              let { actionTypeId: e } = i;
              if ((0, g.isPluginType)(e))
                return (0, g.renderPlugin)(e)(r, a, i);
            }
          }
        }
        let eU = {
            [W]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [Q]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
            [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [Z]: Object.freeze({ xValue: 0, yValue: 0 }),
          },
          eM = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100,
          }),
          eP = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
          ek = (e, a) => {
            let t = (0, o.default)(a.filters, ({ type: a }) => a === e);
            if (t && t.unit) return t.unit;
            switch (e) {
              case "blur":
                return "px";
              case "hue-rotate":
                return "deg";
              default:
                return "%";
            }
          },
          eD = Object.keys(eU),
          eY = /^rgb/,
          eF = RegExp("rgba?\\(([^)]+)\\)");
        function ex(e, a, t) {
          if (!b.IS_BROWSER_ENV) return;
          let n = eu[a];
          if (!n) return;
          let { getStyle: i, setStyle: d } = t,
            l = i(e, Y);
          if (!l) return void d(e, Y, n);
          let o = l.split(x).map(ec);
          -1 === o.indexOf(n) && d(e, Y, o.concat(n).join(x));
        }
        function eB(e, a, t) {
          if (!b.IS_BROWSER_ENV) return;
          let n = eu[a];
          if (!n) return;
          let { getStyle: i, setStyle: d } = t,
            l = i(e, Y);
          l &&
            -1 !== l.indexOf(n) &&
            d(
              e,
              Y,
              l
                .split(x)
                .map(ec)
                .filter((e) => e !== n)
                .join(x)
            );
        }
        function eX({ store: e, elementApi: a }) {
          let { ixData: t } = e.getState(),
            { events: n = {}, actionLists: i = {} } = t;
          Object.keys(n).forEach((e) => {
            let t = n[e],
              { config: d } = t.action,
              { actionListId: l } = d,
              o = i[l];
            o && ez({ actionList: o, event: t, elementApi: a });
          }),
            Object.keys(i).forEach((e) => {
              ez({ actionList: i[e], elementApi: a });
            });
        }
        function ez({ actionList: e = {}, event: a, elementApi: t }) {
          let { actionItemGroups: n, continuousParameterGroups: i } = e;
          n &&
            n.forEach((e) => {
              eH({ actionGroup: e, event: a, elementApi: t });
            }),
            i &&
              i.forEach((e) => {
                let { continuousActionGroups: n } = e;
                n.forEach((e) => {
                  eH({ actionGroup: e, event: a, elementApi: t });
                });
              });
        }
        function eH({ actionGroup: e, event: a, elementApi: t }) {
          let { actionItems: n } = e;
          n.forEach((e) => {
            let n,
              { actionTypeId: i, config: d } = e;
            (n = (0, g.isPluginType)(i)
              ? (a) => (0, g.clearPlugin)(i)(a, e)
              : eK({ effect: eW, actionTypeId: i, elementApi: t })),
              eO({ config: d, event: a, elementApi: t }).forEach(n);
          });
        }
        function ej(e, a, t) {
          let { setStyle: n, getStyle: i } = t,
            { actionTypeId: d } = a;
          if (d === et) {
            let { config: t } = a;
            t.widthUnit === F && n(e, A, ""), t.heightUnit === F && n(e, C, "");
          }
          i(e, Y) && eK({ effect: eB, actionTypeId: d, elementApi: t })(e);
        }
        let eK =
          ({ effect: e, actionTypeId: a, elementApi: t }) =>
          (n) => {
            switch (a) {
              case W:
              case Q:
              case q:
              case Z:
                e(n, b.TRANSFORM_PREFIXED, t);
                break;
              case ee:
                e(n, S, t);
                break;
              case ea:
                e(n, L, t);
                break;
              case J:
                e(n, R, t);
                break;
              case et:
                e(n, A, t), e(n, C, t);
                break;
              case en:
              case ei:
              case ed:
                e(n, er[a], t);
                break;
              case el:
                e(n, D, t);
            }
          };
        function eW(e, a, t) {
          let { setStyle: n } = t;
          eB(e, a, t),
            n(e, a, ""),
            a === b.TRANSFORM_PREFIXED && n(e, b.TRANSFORM_STYLE_PREFIXED, "");
        }
        function eQ(e) {
          let a = 0,
            t = 0;
          return (
            e.forEach((e, n) => {
              let { config: i } = e,
                d = i.delay + i.duration;
              d >= a && ((a = d), (t = n));
            }),
            t
          );
        }
        function e$(e, a) {
          let { actionItemGroups: t, useFirstGroupAsInitialState: n } = e,
            { actionItem: i, verboseTimeElapsed: d = 0 } = a,
            l = 0,
            o = 0;
          return (
            t.forEach((e, a) => {
              if (n && 0 === a) return;
              let { actionItems: t } = e,
                c = t[eQ(t)],
                { config: r, actionTypeId: u } = c;
              i.id === c.id && (o = l + d);
              let s = eN(u) === H ? 0 : r.duration;
              l += r.delay + s;
            }),
            l > 0 ? (0, s.optimizeFloat)(o / l) : 0
          );
        }
        function eq({ actionList: e, actionItemId: a, rawData: t }) {
          let { actionItemGroups: n, continuousParameterGroups: i } = e,
            d = [],
            l = (e) => (
              d.push((0, c.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
              e.id === a
            );
          return (
            n && n.some(({ actionItems: e }) => e.some(l)),
            i &&
              i.some((e) => {
                let { continuousActionGroups: a } = e;
                return a.some(({ actionItems: e }) => e.some(l));
              }),
            (0, c.setIn)(t, ["actionLists"], {
              [e.id]: { id: e.id, actionItemGroups: [{ actionItems: d }] },
            })
          );
        }
        function eZ(e, { basedOn: a }) {
          return (
            (e === r.EventTypeConsts.SCROLLING_IN_VIEW &&
              (a === r.EventBasedOn.ELEMENT || null == a)) ||
            (e === r.EventTypeConsts.MOUSE_MOVE && a === r.EventBasedOn.ELEMENT)
          );
        }
        function eJ(e, a) {
          return e + B + a;
        }
        function e0(e, a) {
          return null == a || -1 !== e.indexOf(a);
        }
        function e5(e, a) {
          return (0, u.default)(e && e.sort(), a && a.sort());
        }
        function e1(e) {
          if ("string" == typeof e) return e;
          if (e.pluginElement && e.objectId)
            return e.pluginElement + X + e.objectId;
          if (e.objectId) return e.objectId;
          let { id: a = "", selector: t = "", useEventTarget: n = "" } = e;
          return a + X + t + X + n;
        }
      },
      7164: function (e, a) {
        "use strict";
        function t(e, a) {
          return e === a
            ? 0 !== e || 0 !== a || 1 / e == 1 / a
            : e != e && a != a;
        }
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "default", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        let n = function (e, a) {
          if (t(e, a)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof a ||
            null === a
          )
            return !1;
          let n = Object.keys(e),
            i = Object.keys(a);
          if (n.length !== i.length) return !1;
          for (let i = 0; i < n.length; i++)
            if (!Object.hasOwn(a, n[i]) || !t(e[n[i]], a[n[i]])) return !1;
          return !0;
        };
      },
      5861: function (e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var n = {
          createElementState: function () {
            return V;
          },
          ixElements: function () {
            return m;
          },
          mergeActionState: function () {
            return h;
          },
        };
        for (var i in n)
          Object.defineProperty(a, i, { enumerable: !0, get: n[i] });
        let d = t(1185),
          l = t(7087),
          {
            HTML_ELEMENT: o,
            PLAIN_OBJECT: c,
            ABSTRACT_NODE: r,
            CONFIG_X_VALUE: u,
            CONFIG_Y_VALUE: s,
            CONFIG_Z_VALUE: f,
            CONFIG_VALUE: g,
            CONFIG_X_UNIT: b,
            CONFIG_Y_UNIT: _,
            CONFIG_Z_UNIT: y,
            CONFIG_UNIT: T,
          } = l.IX2EngineConstants,
          {
            IX2_SESSION_STOPPED: E,
            IX2_INSTANCE_ADDED: I,
            IX2_ELEMENT_STATE_CHANGED: p,
          } = l.IX2EngineActionTypes,
          O = {},
          m = (e = O, a = {}) => {
            switch (a.type) {
              case E:
                return O;
              case I: {
                let {
                    elementId: t,
                    element: n,
                    origin: i,
                    actionItem: l,
                    refType: o,
                  } = a.payload,
                  { actionTypeId: c } = l,
                  r = e;
                return (
                  (0, d.getIn)(r, [t, n]) !== n && (r = V(r, n, o, t, l)),
                  h(r, t, c, i, l)
                );
              }
              case p: {
                let {
                  elementId: t,
                  actionTypeId: n,
                  current: i,
                  actionItem: d,
                } = a.payload;
                return h(e, t, n, i, d);
              }
              default:
                return e;
            }
          };
        function V(e, a, t, n, i) {
          let l =
            t === c ? (0, d.getIn)(i, ["config", "target", "objectId"]) : null;
          return (0, d.mergeIn)(e, [n], {
            id: n,
            ref: a,
            refId: l,
            refType: t,
          });
        }
        function h(e, a, t, n, i) {
          let l = (function (e) {
            let { config: a } = e;
            return v.reduce((e, t) => {
              let n = t[0],
                i = t[1],
                d = a[n],
                l = a[i];
              return null != d && null != l && (e[i] = l), e;
            }, {});
          })(i);
          return (0, d.mergeIn)(e, [a, "refState", t], n, l);
        }
        let v = [
          [u, b],
          [s, _],
          [f, y],
          [g, T],
        ];
      },
      7518: function () {
        Webflow.require("ix2").init({
          events: {
            e: {
              id: "e",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-p",
                  smoothing: 50,
                  startsEntering: !1,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !0,
                  endOffsetValue: 4,
                },
              ],
              createdOn: 0x17b4f019637,
            },
            "e-3": {
              id: "e-3",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-2",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-4",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|5046f710-0801-f8ca-24d0-c5562ca60f8d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5046f710-0801-f8ca-24d0-c5562ca60f8d",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b4f729675,
            },
            "e-9": {
              id: "e-9",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-10",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|b918c7f8-c00e-2390-d7de-a31b08125cf5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|b918c7f8-c00e-2390-d7de-a31b08125cf5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 10,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b5011d4fb,
            },
            "e-11": {
              id: "e-11",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-7",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-7-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !0,
                  addOffsetValue: 25,
                  startsExiting: !0,
                  addEndOffset: !0,
                  endOffsetValue: 25,
                },
              ],
              createdOn: 0x17b53c8da0f,
            },
            "e-12": {
              id: "e-12",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-5",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-5-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !0,
                  addOffsetValue: 21,
                  startsExiting: !0,
                  addEndOffset: !0,
                  endOffsetValue: 23,
                },
              ],
              createdOn: 0x17b53d0104f,
            },
            "e-13": {
              id: "e-13",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-8",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-8-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !0,
                  addOffsetValue: 27,
                  startsExiting: !0,
                  addEndOffset: !0,
                  endOffsetValue: 39,
                },
              ],
              createdOn: 0x17b53fe2c8d,
            },
            "e-14": {
              id: "e-14",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-15",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|09d25aba-c69b-c379-1540-cbb022b83ec8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|09d25aba-c69b-c379-1540-cbb022b83ec8",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b5455b164,
            },
            "e-16": {
              id: "e-16",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-9",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-9-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !0,
                  addOffsetValue: 0,
                  startsExiting: !0,
                  addEndOffset: !0,
                  endOffsetValue: 82,
                },
              ],
              createdOn: 0x17b547307e9,
            },
            "e-18": {
              id: "e-18",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-19",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|d9850e9b-3c77-7157-754e-9b53fe9b4b04",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|d9850e9b-3c77-7157-754e-9b53fe9b4b04",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b59325812,
            },
            "e-20": {
              id: "e-20",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-21",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|a1d8be7b-f127-fc21-3896-78390550e59f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|a1d8be7b-f127-fc21-3896-78390550e59f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b59dc0784,
            },
            "e-22": {
              id: "e-22",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-12",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-23",
                },
              },
              mediaQueries: ["main", "medium", "small"],
              target: {
                id: "611a557eddbf9c6379e20043|3f1b73cc-1ce0-7596-f44e-50efa03cf4f8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|3f1b73cc-1ce0-7596-f44e-50efa03cf4f8",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b59e10eaa,
            },
            "e-24": {
              id: "e-24",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-25",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|da5fab83-3092-4430-e797-cc30f079c00b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|da5fab83-3092-4430-e797-cc30f079c00b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b5a1452cf,
            },
            "e-26": {
              id: "e-26",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-13",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-13-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !0,
                  addOffsetValue: 20,
                  startsExiting: !0,
                  addEndOffset: !0,
                  endOffsetValue: 65,
                },
              ],
              createdOn: 0x17b5e91878c,
            },
            "e-27": {
              id: "e-27",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-10",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-10-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !0,
                  addOffsetValue: 98,
                  startsExiting: !0,
                  addEndOffset: !0,
                  endOffsetValue: 100,
                },
              ],
              createdOn: 0x17b5eb8c799,
            },
            "e-28": {
              id: "e-28",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-14",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-29",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "611a557eddbf9c6379e20043|14968050-1e0c-c95c-52e9-465f39b7fbbe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|14968050-1e0c-c95c-52e9-465f39b7fbbe",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 20,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b5ec6f02b,
            },
            "e-30": {
              id: "e-30",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-15",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-31",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|87bb59de-bc77-7642-853b-5a92c74df6be",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|87bb59de-bc77-7642-853b-5a92c74df6be",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 20,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b5ee977ea,
            },
            "e-32": {
              id: "e-32",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-16",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-33",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|87bb59de-bc77-7642-853b-5a92c74df6be",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|87bb59de-bc77-7642-853b-5a92c74df6be",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 20,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b5f1be62a,
            },
            "e-34": {
              id: "e-34",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-35",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "611a557eddbf9c6379e20043|7d7edcf0-27e0-2d8b-0e41-fc020092b1c1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|7d7edcf0-27e0-2d8b-0e41-fc020092b1c1",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 20,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b5f4c4efc,
            },
            "e-36": {
              id: "e-36",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-19",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-19-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !0,
                  addOffsetValue: 73,
                  startsExiting: !0,
                  addEndOffset: !0,
                  endOffsetValue: 100,
                },
              ],
              createdOn: 0x17b7dad5d7a,
            },
            "e-37": {
              id: "e-37",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-21",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-21-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !0,
                  addOffsetValue: 73,
                  startsExiting: !0,
                  addEndOffset: !0,
                  endOffsetValue: 100,
                },
              ],
              createdOn: 0x17b82397058,
            },
            "e-38": {
              id: "e-38",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-3",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|611a557eddbf9caeace20044",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|611a557eddbf9caeace20044",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-3-p",
                  smoothing: 50,
                  startsEntering: !1,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !0,
                  endOffsetValue: 4,
                },
              ],
              createdOn: 0x17b9c8579b8,
            },
            "e-49": {
              id: "e-49",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-24",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-24-p",
                  smoothing: 50,
                  startsEntering: !1,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x17b9d16a02b,
            },
            "e-50": {
              id: "e-50",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-25",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-25-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 90,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-25-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 90,
                  restingState: 50,
                },
              ],
              createdOn: 0x17b9d567543,
            },
            "e-51": {
              id: "e-51",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-26",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-52",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|dbf46a22-3ad5-3404-89d6-9567aa3b595b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|dbf46a22-3ad5-3404-89d6-9567aa3b595b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9d6d67ba,
            },
            "e-52": {
              id: "e-52",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-27",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-51",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|dbf46a22-3ad5-3404-89d6-9567aa3b595b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|dbf46a22-3ad5-3404-89d6-9567aa3b595b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9d6d67bb,
            },
            "e-53": {
              id: "e-53",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-26",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-54",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|b918c7f8-c00e-2390-d7de-a31b08125cf5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|b918c7f8-c00e-2390-d7de-a31b08125cf5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbaf67c,
            },
            "e-54": {
              id: "e-54",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-27",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-53",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|b918c7f8-c00e-2390-d7de-a31b08125cf5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|b918c7f8-c00e-2390-d7de-a31b08125cf5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbaf67d,
            },
            "e-55": {
              id: "e-55",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-26",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-56",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|d9850e9b-3c77-7157-754e-9b53fe9b4b04",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|d9850e9b-3c77-7157-754e-9b53fe9b4b04",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbbdafa,
            },
            "e-56": {
              id: "e-56",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-27",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-55",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|d9850e9b-3c77-7157-754e-9b53fe9b4b04",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|d9850e9b-3c77-7157-754e-9b53fe9b4b04",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbbdafb,
            },
            "e-57": {
              id: "e-57",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-26",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-58",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|a1d8be7b-f127-fc21-3896-78390550e59f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|a1d8be7b-f127-fc21-3896-78390550e59f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbc54f1,
            },
            "e-58": {
              id: "e-58",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-27",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-57",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|a1d8be7b-f127-fc21-3896-78390550e59f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|a1d8be7b-f127-fc21-3896-78390550e59f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbc550b,
            },
            "e-59": {
              id: "e-59",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-26",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-60",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|da5fab83-3092-4430-e797-cc30f079c00b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|da5fab83-3092-4430-e797-cc30f079c00b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbcce82,
            },
            "e-60": {
              id: "e-60",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-27",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-59",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|da5fab83-3092-4430-e797-cc30f079c00b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|da5fab83-3092-4430-e797-cc30f079c00b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbcce9d,
            },
            "e-61": {
              id: "e-61",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-26",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-62",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|96d47f48-66ae-ec77-745f-ee85d84d42c1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|96d47f48-66ae-ec77-745f-ee85d84d42c1",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbd3122,
            },
            "e-62": {
              id: "e-62",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-27",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-61",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|96d47f48-66ae-ec77-745f-ee85d84d42c1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|96d47f48-66ae-ec77-745f-ee85d84d42c1",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbd3124,
            },
            "e-63": {
              id: "e-63",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-26",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-64",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|09d25aba-c69b-c379-1540-cbb022b83ec8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|09d25aba-c69b-c379-1540-cbb022b83ec8",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbf4466,
            },
            "e-64": {
              id: "e-64",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-27",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-63",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|09d25aba-c69b-c379-1540-cbb022b83ec8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|09d25aba-c69b-c379-1540-cbb022b83ec8",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dbf4468,
            },
            "e-65": {
              id: "e-65",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-66",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|65c794e9-08b2-18d3-e257-dd5daa03f633",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|65c794e9-08b2-18d3-e257-dd5daa03f633",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dc1e1b9,
            },
            "e-66": {
              id: "e-66",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-65",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "611a557eddbf9c6379e20043|65c794e9-08b2-18d3-e257-dd5daa03f633",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|65c794e9-08b2-18d3-e257-dd5daa03f633",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17b9dc1e1bb,
            },
            "e-75": {
              id: "e-75",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-36",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-76",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|048e759b-b54c-5d31-071a-c23131983cdc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|048e759b-b54c-5d31-071a-c23131983cdc",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba68c1a14,
            },
            "e-79": {
              id: "e-79",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-80",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__secondary-link",
                originalId:
                  "611a557eddbf9c6379e20043|e07c76c1-2571-0209-60e6-b39fbc878115",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__secondary-link",
                  originalId:
                    "611a557eddbf9c6379e20043|e07c76c1-2571-0209-60e6-b39fbc878115",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba6f11590,
            },
            "e-80": {
              id: "e-80",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-35",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-79",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__secondary-link",
                originalId:
                  "611a557eddbf9c6379e20043|e07c76c1-2571-0209-60e6-b39fbc878115",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__secondary-link",
                  originalId:
                    "611a557eddbf9c6379e20043|e07c76c1-2571-0209-60e6-b39fbc878115",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba6f11591,
            },
            "e-81": {
              id: "e-81",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-82",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|a15cbe82-db88-ab51-25de-ea9a75e652d5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|a15cbe82-db88-ab51-25de-ea9a75e652d5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba6f89b5c,
            },
            "e-83": {
              id: "e-83",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-84",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|048e759b-b54c-5d31-071a-c23131983cdc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|048e759b-b54c-5d31-071a-c23131983cdc",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba70088ee,
            },
            "e-84": {
              id: "e-84",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-83",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|048e759b-b54c-5d31-071a-c23131983cdc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|048e759b-b54c-5d31-071a-c23131983cdc",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba70088f0,
            },
            "e-85": {
              id: "e-85",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-86",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__link",
                originalId:
                  "611a557eddbf9c6379e20043|87068202-6c8a-9581-7b8d-f261f79bca03",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__link",
                  originalId:
                    "611a557eddbf9c6379e20043|87068202-6c8a-9581-7b8d-f261f79bca03",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba701ea69,
            },
            "e-86": {
              id: "e-86",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-85",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__link",
                originalId:
                  "611a557eddbf9c6379e20043|87068202-6c8a-9581-7b8d-f261f79bca03",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__link",
                  originalId:
                    "611a557eddbf9c6379e20043|87068202-6c8a-9581-7b8d-f261f79bca03",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba701ea84,
            },
            "e-87": {
              id: "e-87",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-88",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__legal-link",
                originalId:
                  "611a557eddbf9c6379e20043|6eabae97-eb80-86b6-4c2f-4edff8fa9c45",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__legal-link",
                  originalId:
                    "611a557eddbf9c6379e20043|6eabae97-eb80-86b6-4c2f-4edff8fa9c45",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba703dc12,
            },
            "e-88": {
              id: "e-88",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-87",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__legal-link",
                originalId:
                  "611a557eddbf9c6379e20043|6eabae97-eb80-86b6-4c2f-4edff8fa9c45",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__legal-link",
                  originalId:
                    "611a557eddbf9c6379e20043|6eabae97-eb80-86b6-4c2f-4edff8fa9c45",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba703dc13,
            },
            "e-89": {
              id: "e-89",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-90",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__secondary-link",
                originalId:
                  "611a557eddbf9c6379e20043|029a1ec5-42f1-90ff-a3d5-fa7fbbe45e74",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__secondary-link",
                  originalId:
                    "611a557eddbf9c6379e20043|029a1ec5-42f1-90ff-a3d5-fa7fbbe45e74",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba7046bdf,
            },
            "e-90": {
              id: "e-90",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-89",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__secondary-link",
                originalId:
                  "611a557eddbf9c6379e20043|029a1ec5-42f1-90ff-a3d5-fa7fbbe45e74",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__secondary-link",
                  originalId:
                    "611a557eddbf9c6379e20043|029a1ec5-42f1-90ff-a3d5-fa7fbbe45e74",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba7046bf9,
            },
            "e-91": {
              id: "e-91",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-92",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|be93b5b2-81f8-cfeb-167d-8514e7662291",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|be93b5b2-81f8-cfeb-167d-8514e7662291",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba704c52d,
            },
            "e-92": {
              id: "e-92",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-91",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|be93b5b2-81f8-cfeb-167d-8514e7662291",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|be93b5b2-81f8-cfeb-167d-8514e7662291",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba704c52f,
            },
            "e-93": {
              id: "e-93",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-94",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|984b123c-df39-884f-fa1f-087fc10c9484",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|984b123c-df39-884f-fa1f-087fc10c9484",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba7053e99,
            },
            "e-94": {
              id: "e-94",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-93",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|984b123c-df39-884f-fa1f-087fc10c9484",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|984b123c-df39-884f-fa1f-087fc10c9484",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba7053eb7,
            },
            "e-95": {
              id: "e-95",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-96",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__sm-link",
                originalId:
                  "611a557eddbf9c6379e20043|03010dab-cd56-410d-232d-a1409aa32728",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__sm-link",
                  originalId:
                    "611a557eddbf9c6379e20043|03010dab-cd56-410d-232d-a1409aa32728",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba7057948,
            },
            "e-96": {
              id: "e-96",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-95",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__sm-link",
                originalId:
                  "611a557eddbf9c6379e20043|03010dab-cd56-410d-232d-a1409aa32728",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__sm-link",
                  originalId:
                    "611a557eddbf9c6379e20043|03010dab-cd56-410d-232d-a1409aa32728",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba7057965,
            },
            "e-97": {
              id: "e-97",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-98",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|a15cbe82-db88-ab51-25de-ea9a75e652d5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|a15cbe82-db88-ab51-25de-ea9a75e652d5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba7061277,
            },
            "e-98": {
              id: "e-98",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-97",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|a15cbe82-db88-ab51-25de-ea9a75e652d5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|a15cbe82-db88-ab51-25de-ea9a75e652d5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ba706127a,
            },
            "e-99": {
              id: "e-99",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-100",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|5dfde7b1-ebab-8a7f-30a3-1b78878ef546",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5dfde7b1-ebab-8a7f-30a3-1b78878ef546",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17babc6f368,
            },
            "e-102": {
              id: "e-102",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-39",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-101",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17bbb7d373e,
            },
            "e-103": {
              id: "e-103",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-4",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-104",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "611a557eddbf9c6379e20043|8a080daf-966e-7c6c-3ac2-4cb8673767b3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|8a080daf-966e-7c6c-3ac2-4cb8673767b3",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 10,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17bbbaeb01d,
            },
            "e-105": {
              id: "e-105",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-32",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-106",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__link",
                originalId:
                  "611a557eddbf9c6379e20043|87068202-6c8a-9581-7b8d-f261f79bca03",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__link",
                  originalId:
                    "611a557eddbf9c6379e20043|87068202-6c8a-9581-7b8d-f261f79bca03",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17bc5d157ff,
            },
            "e-106": {
              id: "e-106",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-33",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-105",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav__link",
                originalId:
                  "611a557eddbf9c6379e20043|87068202-6c8a-9581-7b8d-f261f79bca03",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav__link",
                  originalId:
                    "611a557eddbf9c6379e20043|87068202-6c8a-9581-7b8d-f261f79bca03",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17bc5d15802,
            },
            "e-107": {
              id: "e-107",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-40",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["medium"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-40-p",
                  smoothing: 50,
                  startsEntering: !1,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x17bcad8b592,
            },
            "e-108": {
              id: "e-108",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  smoothing: 50,
                  startsEntering: !1,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x17bcb35a9dc,
            },
            "e-109": {
              id: "e-109",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["small"],
              target: {
                id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|5a20b661-643f-5224-c570-7a5dd8ec53cd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  smoothing: 50,
                  startsEntering: !1,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x17bcb771e6a,
            },
            "e-110": {
              id: "e-110",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-43",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-111",
                },
              },
              mediaQueries: ["small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|7d7edcf0-27e0-2d8b-0e41-fc020092b1c1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|7d7edcf0-27e0-2d8b-0e41-fc020092b1c1",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 20,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17bcffe88e0,
            },
            "e-114": {
              id: "e-114",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-44",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-115",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "611a557eddbf9c6379e20043|4a98e4db-bb48-9b85-99d0-0f7998f73f4e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "611a557eddbf9c6379e20043|4a98e4db-bb48-9b85-99d0-0f7998f73f4e",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17bd0331784,
            },
          },
          actionLists: {
            a: {
              id: "a",
              title: "Horizontal Scroll Animation",
              continuousParameterGroups: [
                {
                  id: "a-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__frame",
                              selectorGuids: [
                                "743c11dc-833f-e3b5-e469-cccdf3fa10bc",
                              ],
                            },
                            xValue: 0,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__frame",
                              selectorGuids: [
                                "743c11dc-833f-e3b5-e469-cccdf3fa10bc",
                              ],
                            },
                            xValue: -1080,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b4f01d2f6,
            },
            "a-2": {
              id: "a-2",
              title: "Home / Hero - Text Animation / On",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-2-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__hero-h.home__hero-h--1",
                          selectorGuids: [
                            "79243fb3-25bb-e254-b7db-3ed6fe317db9",
                            "c39fa40c-7d4d-27e3-2fc0-0e325b03208c",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-2-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__hero-h.home__hero-h--2",
                          selectorGuids: [
                            "79243fb3-25bb-e254-b7db-3ed6fe317db9",
                            "68190f05-1a13-28e5-ecbb-8c2b8fcc7b9f",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-2-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__hero-h.home__hero-h--1",
                          selectorGuids: [
                            "79243fb3-25bb-e254-b7db-3ed6fe317db9",
                            "c39fa40c-7d4d-27e3-2fc0-0e325b03208c",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-2-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__hero-h.home__hero-h--2",
                          selectorGuids: [
                            "79243fb3-25bb-e254-b7db-3ed6fe317db9",
                            "68190f05-1a13-28e5-ecbb-8c2b8fcc7b9f",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-2-n-5",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 8e3,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__hero-h.home__hero-h--1",
                          selectorGuids: [
                            "79243fb3-25bb-e254-b7db-3ed6fe317db9",
                            "c39fa40c-7d4d-27e3-2fc0-0e325b03208c",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-2-n-7",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 8e3,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__hero-h.home__hero-h--1",
                          selectorGuids: [
                            "79243fb3-25bb-e254-b7db-3ed6fe317db9",
                            "c39fa40c-7d4d-27e3-2fc0-0e325b03208c",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-2-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 8100,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__hero-h.home__hero-h--2",
                          selectorGuids: [
                            "79243fb3-25bb-e254-b7db-3ed6fe317db9",
                            "68190f05-1a13-28e5-ecbb-8c2b8fcc7b9f",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-2-n-6",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 8100,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__hero-h.home__hero-h--2",
                          selectorGuids: [
                            "79243fb3-25bb-e254-b7db-3ed6fe317db9",
                            "68190f05-1a13-28e5-ecbb-8c2b8fcc7b9f",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17b4f0954e5,
            },
            "a-6": {
              id: "a-6",
              title: "Home / Style 1 Arrow Animation / On",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-6-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-cta-arrow",
                          selectorGuids: [
                            "a4c57ec5-7eaf-8bd3-8ec1-2ef4f9748865",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-6-n-3",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "611a557eddbf9c6379e20043|b918c7f8-c00e-2390-d7de-a31b08125cf5",
                        },
                        xValue: 0,
                        yValue: 0,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-6-n-4",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: !0,
                          id: "611a557eddbf9c6379e20043|b918c7f8-c00e-2390-d7de-a31b08125cf5",
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-6-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-cta-arrow",
                          selectorGuids: [
                            "a4c57ec5-7eaf-8bd3-8ec1-2ef4f9748865",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17b5011eb1b,
            },
            "a-7": {
              id: "a-7",
              title: "Home / Style 1 Box Animation",
              continuousParameterGroups: [
                {
                  id: "a-7-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-7-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__style1-c",
                              selectorGuids: [
                                "a7bb710e-65be-40d8-eba7-76aa5fadc834",
                              ],
                            },
                            xValue: null,
                            yValue: 150,
                            xUnit: "px",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-7-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__style1-c",
                              selectorGuids: [
                                "a7bb710e-65be-40d8-eba7-76aa5fadc834",
                              ],
                            },
                            yValue: -70,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b502b0609,
            },
            "a-5": {
              id: "a-5",
              title: "Home / Style 1 Image Scroll Animation",
              continuousParameterGroups: [
                {
                  id: "a-5-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-5-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__style1-image",
                              selectorGuids: [
                                "18a502f4-c0c5-2038-a1ea-3baea2e66113",
                              ],
                            },
                            xValue: -23,
                            xUnit: "%",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-5-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__style1-image",
                              selectorGuids: [
                                "18a502f4-c0c5-2038-a1ea-3baea2e66113",
                              ],
                            },
                            xValue: 18,
                            xUnit: "%",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b4fbcc529,
            },
            "a-8": {
              id: "a-8",
              title: "Home / Wine Image Animation",
              continuousParameterGroups: [
                {
                  id: "a-8-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-8-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__wine-image",
                              selectorGuids: [
                                "1f0bba8a-6fca-528d-b284-679a0ff5cb47",
                              ],
                            },
                            xValue: -51,
                            xUnit: "%",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-8-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__wine-image",
                              selectorGuids: [
                                "1f0bba8a-6fca-528d-b284-679a0ff5cb47",
                              ],
                            },
                            xValue: 40,
                            xUnit: "%",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b54000f25,
            },
            "a-9": {
              id: "a-9",
              title: "Home / Style 2 Text Animation",
              continuousParameterGroups: [
                {
                  id: "a-9-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-9-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__style2-c",
                              selectorGuids: [
                                "9d566aec-ea72-de14-3c56-9a7546d85ed5",
                              ],
                            },
                            yValue: 125,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-9-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__style2-c",
                              selectorGuids: [
                                "9d566aec-ea72-de14-3c56-9a7546d85ed5",
                              ],
                            },
                            yValue: -178,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b546114cc,
            },
            "a-12": {
              id: "a-12",
              title: "Home / Compass Animation / On",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-12-n",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 1500,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__compass",
                          selectorGuids: [
                            "f3f3f41c-fc59-4e24-6b2c-d013a5cfba9d",
                          ],
                        },
                        zValue: 15,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-12-n-3",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 700,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__compass",
                          selectorGuids: [
                            "f3f3f41c-fc59-4e24-6b2c-d013a5cfba9d",
                          ],
                        },
                        zValue: -13,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-12-n-2",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 600,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__compass",
                          selectorGuids: [
                            "f3f3f41c-fc59-4e24-6b2c-d013a5cfba9d",
                          ],
                        },
                        zValue: 15,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17b59e13559,
            },
            "a-13": {
              id: "a-13",
              title: "Home / Style 2 Move Animation",
              continuousParameterGroups: [
                {
                  id: "a-13-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-13-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__style2-sticky",
                              selectorGuids: [
                                "85d36a3b-fbf7-cc11-abe2-bfcddd793009",
                              ],
                            },
                            xValue: -155,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-13-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__style2-sticky",
                              selectorGuids: [
                                "85d36a3b-fbf7-cc11-abe2-bfcddd793009",
                              ],
                            },
                            xValue: 193,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b546114cc,
            },
            "a-10": {
              id: "a-10",
              title: "Home / Shop Image Animation",
              continuousParameterGroups: [
                {
                  id: "a-10-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-10-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__shop-image",
                              selectorGuids: [
                                "1a8d32b5-bac7-a136-3ff3-533cb2a63228",
                              ],
                            },
                            xValue: 40,
                            xUnit: "%",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-10-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__shop-image",
                              selectorGuids: [
                                "1a8d32b5-bac7-a136-3ff3-533cb2a63228",
                              ],
                            },
                            xValue: -34,
                            xUnit: "%",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b58e66fe9,
            },
            "a-14": {
              id: "a-14",
              title: "Home / Style 2 Text Animation",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-14-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--1",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "a1ca40cd-7805-b3d4-97ea-636e601cf6f3",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--2",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "8f6c9546-3322-7a53-afd0-721b2c2f8ab2",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--3",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "3f911281-8780-ef14-0a42-24ba3ec17553",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--4",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "a96bfd42-52fc-6a37-8707-4e1566a04060",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-5",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--5",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "3e74d9e6-6df0-90f3-10d0-9ca22ccb3e01",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--1",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "a1ca40cd-7805-b3d4-97ea-636e601cf6f3",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-14-n-7",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--2",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "8f6c9546-3322-7a53-afd0-721b2c2f8ab2",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-14-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--3",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "3f911281-8780-ef14-0a42-24ba3ec17553",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-14-n-9",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--4",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "a96bfd42-52fc-6a37-8707-4e1566a04060",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-14-n-10",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--5",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "3e74d9e6-6df0-90f3-10d0-9ca22ccb3e01",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-14-n-11",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 500,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--1",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "a1ca40cd-7805-b3d4-97ea-636e601cf6f3",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-16",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 500,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--1",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "a1ca40cd-7805-b3d4-97ea-636e601cf6f3",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-14-n-17",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 600,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--2",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "8f6c9546-3322-7a53-afd0-721b2c2f8ab2",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-14-n-12",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 600,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--2",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "8f6c9546-3322-7a53-afd0-721b2c2f8ab2",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-13",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 700,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--3",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "3f911281-8780-ef14-0a42-24ba3ec17553",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-18",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 700,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--3",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "3f911281-8780-ef14-0a42-24ba3ec17553",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-14-n-14",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 800,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--4",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "a96bfd42-52fc-6a37-8707-4e1566a04060",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-19",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 800,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--4",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "a96bfd42-52fc-6a37-8707-4e1566a04060",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-14-n-15",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 900,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--5",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "3e74d9e6-6df0-90f3-10d0-9ca22ccb3e01",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-20",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 900,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style2-p.home__style2-p--5",
                          selectorGuids: [
                            "6832b893-0457-8d18-c318-500bc6030e21",
                            "3e74d9e6-6df0-90f3-10d0-9ca22ccb3e01",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17b5ec7102c,
            },
            "a-15": {
              id: "a-15",
              title: "Home / Shop Text Animation",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-15-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-h-w.home__shop-h-w--1",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "b4a87a4e-96af-210c-1cac-83ad4732cf4c",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-15-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--black.home__shop-h-w--2",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "25f264b6-6082-5b48-872e-80ee6721c3a2",
                            "c4156625-60c3-9ea2-1eb6-101277fbf627",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-15-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--margin.home__shop-h-w--3",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "b1037507-5bdb-5cd0-d013-5cdf0179906c",
                            "fe9ba2d6-1059-5125-dc2d-9f4880fcfad2",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-15-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--black.home__shop-h-w--4",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "25f264b6-6082-5b48-872e-80ee6721c3a2",
                            "a60cfa8d-91c4-dfb6-fc5e-aa489194b988",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-15-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-h-w.home__shop-h-w--1",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "b4a87a4e-96af-210c-1cac-83ad4732cf4c",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-15-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--black.home__shop-h-w--2",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "25f264b6-6082-5b48-872e-80ee6721c3a2",
                            "c4156625-60c3-9ea2-1eb6-101277fbf627",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-15-n-7",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--margin.home__shop-h-w--3",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "b1037507-5bdb-5cd0-d013-5cdf0179906c",
                            "fe9ba2d6-1059-5125-dc2d-9f4880fcfad2",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-15-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--black.home__shop-h-w--4",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "25f264b6-6082-5b48-872e-80ee6721c3a2",
                            "a60cfa8d-91c4-dfb6-fc5e-aa489194b988",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-15-n-9",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 500,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-h-w.home__shop-h-w--1",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "b4a87a4e-96af-210c-1cac-83ad4732cf4c",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-15-n-13",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 500,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-h-w.home__shop-h-w--1",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "b4a87a4e-96af-210c-1cac-83ad4732cf4c",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-15-n-10",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 600,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--black.home__shop-h-w--2",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "25f264b6-6082-5b48-872e-80ee6721c3a2",
                            "c4156625-60c3-9ea2-1eb6-101277fbf627",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-15-n-14",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 600,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--black.home__shop-h-w--2",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "25f264b6-6082-5b48-872e-80ee6721c3a2",
                            "c4156625-60c3-9ea2-1eb6-101277fbf627",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-15-n-11",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 700,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--margin.home__shop-h-w--3",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "b1037507-5bdb-5cd0-d013-5cdf0179906c",
                            "fe9ba2d6-1059-5125-dc2d-9f4880fcfad2",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-15-n-15",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 700,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--margin.home__shop-h-w--3",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "b1037507-5bdb-5cd0-d013-5cdf0179906c",
                            "fe9ba2d6-1059-5125-dc2d-9f4880fcfad2",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-15-n-16",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 800,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--black.home__shop-h-w--4",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "25f264b6-6082-5b48-872e-80ee6721c3a2",
                            "a60cfa8d-91c4-dfb6-fc5e-aa489194b988",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-15-n-12",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 800,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-h-w.home__shop-h-w--black.home__shop-h-w--4",
                          selectorGuids: [
                            "62c59b44-fbfc-6f6d-56d2-886aa9ceffba",
                            "25f264b6-6082-5b48-872e-80ee6721c3a2",
                            "a60cfa8d-91c4-dfb6-fc5e-aa489194b988",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17b5ee98ca0,
            },
            "a-16": {
              id: "a-16",
              title: "Home / Shop Circle Animation",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-16-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-info-mask.home__shop-info-mask--1",
                          selectorGuids: [
                            "c9464efe-062f-0ba3-b8cd-0cd1b3a282c8",
                            "16752437-2e6f-9fe7-6dc7-64ab51dd5473",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vw",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bar.home__shop-bar--1",
                          selectorGuids: [
                            "42c8e640-c4fd-329f-c4f3-b6bdd1238d8d",
                            "af198a52-9a5c-fb57-7f38-64f09c2394e8",
                          ],
                        },
                        widthValue: 0,
                        widthUnit: "%",
                        heightUnit: "PX",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-16-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-top.home__shop-top--1",
                          selectorGuids: [
                            "24a1d520-03d8-67f0-f7f4-fc10b941f948",
                            "8d079dbb-be61-2a3e-093a-bc5fdfde693c",
                          ],
                        },
                        yValue: 32,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-top.home__shop-top--1",
                          selectorGuids: [
                            "24a1d520-03d8-67f0-f7f4-fc10b941f948",
                            "8d079dbb-be61-2a3e-093a-bc5fdfde693c",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-16-n-11",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bottom.home__shop-bottom--1",
                          selectorGuids: [
                            "1f0d7586-b3fc-c90f-e223-cbbdcfa50dc4",
                            "6b37d8d8-92dc-7eb6-2129-658988660146",
                          ],
                        },
                        yValue: -32,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-12",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bottom.home__shop-bottom--1",
                          selectorGuids: [
                            "1f0d7586-b3fc-c90f-e223-cbbdcfa50dc4",
                            "6b37d8d8-92dc-7eb6-2129-658988660146",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-16-n-13",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-info-mask.home__shop-info-mask--2",
                          selectorGuids: [
                            "c9464efe-062f-0ba3-b8cd-0cd1b3a282c8",
                            "4f17ab87-6b8b-7e0f-549a-2134ece6e47a",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vw",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-18",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bottom.home__shop-bottom--2",
                          selectorGuids: [
                            "1f0d7586-b3fc-c90f-e223-cbbdcfa50dc4",
                            "2d46e17e-e348-c85b-b92e-bfe719b6d405",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-16-n-17",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bottom.home__shop-bottom--2",
                          selectorGuids: [
                            "1f0d7586-b3fc-c90f-e223-cbbdcfa50dc4",
                            "2d46e17e-e348-c85b-b92e-bfe719b6d405",
                          ],
                        },
                        yValue: -32,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-16",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-top.home__shop-top--2",
                          selectorGuids: [
                            "24a1d520-03d8-67f0-f7f4-fc10b941f948",
                            "82675e0b-6542-8b52-6554-0e3219010762",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-16-n-15",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-top.home__shop-top--2",
                          selectorGuids: [
                            "24a1d520-03d8-67f0-f7f4-fc10b941f948",
                            "82675e0b-6542-8b52-6554-0e3219010762",
                          ],
                        },
                        yValue: 32,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-14",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bar.home__shop-bar--2",
                          selectorGuids: [
                            "42c8e640-c4fd-329f-c4f3-b6bdd1238d8d",
                            "6aaeb453-3deb-991b-40e4-f081e3b867ec",
                          ],
                        },
                        widthValue: 0,
                        widthUnit: "%",
                        heightUnit: "PX",
                        locked: !1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-16-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 500,
                        easing: "",
                        duration: 1e3,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-info-mask.home__shop-info-mask--1",
                          selectorGuids: [
                            "c9464efe-062f-0ba3-b8cd-0cd1b3a282c8",
                            "16752437-2e6f-9fe7-6dc7-64ab51dd5473",
                          ],
                        },
                        yValue: 42,
                        xUnit: "PX",
                        yUnit: "vw",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-4",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 1e3,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bar.home__shop-bar--1",
                          selectorGuids: [
                            "42c8e640-c4fd-329f-c4f3-b6bdd1238d8d",
                            "af198a52-9a5c-fb57-7f38-64f09c2394e8",
                          ],
                        },
                        widthValue: 80,
                        widthUnit: "%",
                        heightUnit: "PX",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-16-n-19",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1e3,
                        easing: "",
                        duration: 1e3,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector:
                            ".home__shop-info-mask.home__shop-info-mask--2",
                          selectorGuids: [
                            "c9464efe-062f-0ba3-b8cd-0cd1b3a282c8",
                            "4f17ab87-6b8b-7e0f-549a-2134ece6e47a",
                          ],
                        },
                        yValue: 42,
                        xUnit: "PX",
                        yUnit: "vw",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1200,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-top.home__shop-top--1",
                          selectorGuids: [
                            "24a1d520-03d8-67f0-f7f4-fc10b941f948",
                            "8d079dbb-be61-2a3e-093a-bc5fdfde693c",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-8",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1200,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-top.home__shop-top--1",
                          selectorGuids: [
                            "24a1d520-03d8-67f0-f7f4-fc10b941f948",
                            "8d079dbb-be61-2a3e-093a-bc5fdfde693c",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-16-n-9",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1200,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bottom.home__shop-bottom--1",
                          selectorGuids: [
                            "1f0d7586-b3fc-c90f-e223-cbbdcfa50dc4",
                            "6b37d8d8-92dc-7eb6-2129-658988660146",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-10",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1200,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bottom.home__shop-bottom--1",
                          selectorGuids: [
                            "1f0d7586-b3fc-c90f-e223-cbbdcfa50dc4",
                            "6b37d8d8-92dc-7eb6-2129-658988660146",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-16-n-22",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 1500,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bar.home__shop-bar--2",
                          selectorGuids: [
                            "42c8e640-c4fd-329f-c4f3-b6bdd1238d8d",
                            "6aaeb453-3deb-991b-40e4-f081e3b867ec",
                          ],
                        },
                        widthValue: 80,
                        widthUnit: "%",
                        heightUnit: "PX",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-16-n-20",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1700,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-top.home__shop-top--2",
                          selectorGuids: [
                            "24a1d520-03d8-67f0-f7f4-fc10b941f948",
                            "82675e0b-6542-8b52-6554-0e3219010762",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-21",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1700,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-top.home__shop-top--2",
                          selectorGuids: [
                            "24a1d520-03d8-67f0-f7f4-fc10b941f948",
                            "82675e0b-6542-8b52-6554-0e3219010762",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-16-n-23",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1700,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bottom.home__shop-bottom--2",
                          selectorGuids: [
                            "1f0d7586-b3fc-c90f-e223-cbbdcfa50dc4",
                            "2d46e17e-e348-c85b-b92e-bfe719b6d405",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-16-n-24",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1700,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__shop-bottom.home__shop-bottom--2",
                          selectorGuids: [
                            "1f0d7586-b3fc-c90f-e223-cbbdcfa50dc4",
                            "2d46e17e-e348-c85b-b92e-bfe719b6d405",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17b5f1c3e63,
            },
            "a-17": {
              id: "a-17",
              title: "Home / Wines Text Animation - Desktop & Tablet",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-17-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-h",
                          selectorGuids: [
                            "417e4699-865c-e17a-afc8-3e22a6cb3963",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-17-n-5",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-h",
                          selectorGuids: [
                            "417e4699-865c-e17a-afc8-3e22a6cb3963",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--1",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "a54da4a1-371f-3dff-d8f2-026f1520f68f",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-17-n-6",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--1",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "a54da4a1-371f-3dff-d8f2-026f1520f68f",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--2",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "13769061-fc8f-a892-9bb4-de2e5fb9c07d",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-17-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--2",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "13769061-fc8f-a892-9bb4-de2e5fb9c07d",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--3",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "5102f195-b443-8b02-45ba-5eb8db5c48e8",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-17-n-8",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--3",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "5102f195-b443-8b02-45ba-5eb8db5c48e8",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-17-n-9",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 500,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-h",
                          selectorGuids: [
                            "417e4699-865c-e17a-afc8-3e22a6cb3963",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-17-n-10",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 500,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-h",
                          selectorGuids: [
                            "417e4699-865c-e17a-afc8-3e22a6cb3963",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-11",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 600,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--1",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "a54da4a1-371f-3dff-d8f2-026f1520f68f",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-17-n-12",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 600,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--1",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "a54da4a1-371f-3dff-d8f2-026f1520f68f",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-14",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 700,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--2",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "13769061-fc8f-a892-9bb4-de2e5fb9c07d",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-13",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 700,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--2",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "13769061-fc8f-a892-9bb4-de2e5fb9c07d",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-17-n-16",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 800,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--3",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "5102f195-b443-8b02-45ba-5eb8db5c48e8",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-15",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 800,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--3",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "5102f195-b443-8b02-45ba-5eb8db5c48e8",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17b5f4c7b4a,
            },
            "a-19": {
              id: "a-19",
              title: "Home / Territory Image Animation",
              continuousParameterGroups: [
                {
                  id: "a-19-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 64,
                      actionItems: [
                        {
                          id: "a-19-n",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__territory-image",
                              selectorGuids: [
                                "a5f183e6-9737-9bd3-594f-ed57a39e9f0e",
                              ],
                            },
                            widthValue: 0,
                            widthUnit: "vw",
                            heightUnit: "PX",
                            locked: !1,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 71,
                      actionItems: [
                        {
                          id: "a-19-n-2",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__territory-image",
                              selectorGuids: [
                                "a5f183e6-9737-9bd3-594f-ed57a39e9f0e",
                              ],
                            },
                            widthValue: 60,
                            widthUnit: "vw",
                            heightUnit: "PX",
                            locked: !1,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b7dadc40a,
            },
            "a-21": {
              id: "a-21",
              title: "Home / Territory Sticky Animation",
              continuousParameterGroups: [
                {
                  id: "a-21-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 70,
                      actionItems: [
                        {
                          id: "a-21-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__territory-h-sticky",
                              selectorGuids: [
                                "cb5358f7-4f2b-122b-dc29-e8d4930eb239",
                              ],
                            },
                            xValue: 0,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 72,
                      actionItems: [
                        {
                          id: "a-21-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__territory-bg",
                              selectorGuids: [
                                "d78fde2b-6468-31c6-678e-3a952890b58a",
                              ],
                            },
                            xValue: 0,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-21-n-5",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__territory-embed",
                              selectorGuids: [
                                "443e32bb-f0fa-d00b-25a3-df99e5a7957d",
                              ],
                            },
                            xValue: 0,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 78,
                      actionItems: [
                        {
                          id: "a-21-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__territory-bg",
                              selectorGuids: [
                                "d78fde2b-6468-31c6-678e-3a952890b58a",
                              ],
                            },
                            xValue: 90,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 82,
                      actionItems: [
                        {
                          id: "a-21-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__territory-h-sticky",
                              selectorGuids: [
                                "cb5358f7-4f2b-122b-dc29-e8d4930eb239",
                              ],
                            },
                            xValue: 80,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 90,
                      actionItems: [
                        {
                          id: "a-21-n-6",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".home__territory-embed",
                              selectorGuids: [
                                "443e32bb-f0fa-d00b-25a3-df99e5a7957d",
                              ],
                            },
                            xValue: 150,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b8239b47b,
            },
            "a-3": {
              id: "a-3",
              title: "Loading bar animation",
              continuousParameterGroups: [
                {
                  id: "a-3-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-3-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".nav__loading-bar",
                              selectorGuids: [
                                "58199bf7-a9d2-e03c-ff83-f79f82faed89",
                              ],
                            },
                            yValue: -100,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-3-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".nav__loading-bar",
                              selectorGuids: [
                                "58199bf7-a9d2-e03c-ff83-f79f82faed89",
                              ],
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b4f5e0221,
            },
            "a-24": {
              id: "a-24",
              title: "Nav Bar / Colors Change - Desktop",
              continuousParameterGroups: [
                {
                  id: "a-24-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-24-n-5",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0,
                          },
                        },
                        {
                          id: "a-24-n-6",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-25",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-36",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-47",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-58",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-69",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-24-n-80",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 9,
                      actionItems: [
                        {
                          id: "a-24-n-7",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0,
                          },
                        },
                        {
                          id: "a-24-n-8",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-26",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-37",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-48",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-59",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-70",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-24-n-81",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 10,
                      actionItems: [
                        {
                          id: "a-24-n",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-3",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-27",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-24-n-38",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-24-n-49",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-60",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-71",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-24-n-82",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 33,
                      actionItems: [
                        {
                          id: "a-24-n-11",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-12",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-28",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-24-n-39",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-24-n-50",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-61",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-72",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-24-n-83",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 34,
                      actionItems: [
                        {
                          id: "a-24-n-9",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-10",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-29",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-42",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-51",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-62",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-73",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-24-n-84",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 51,
                      actionItems: [
                        {
                          id: "a-24-n-15",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-16",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-30",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-43",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-52",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-63",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-74",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-24-n-85",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 52,
                      actionItems: [
                        {
                          id: "a-24-n-13",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-14",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-31",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-24-n-40",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-24-n-53",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-64",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-75",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-24-n-86",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 69,
                      actionItems: [
                        {
                          id: "a-24-n-19",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-20",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-32",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-24-n-46",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-24-n-54",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-65",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-76",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-24-n-87",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 70,
                      actionItems: [
                        {
                          id: "a-24-n-17",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-18",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-34",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-44",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-55",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-66",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-77",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-24-n-88",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 86,
                      actionItems: [
                        {
                          id: "a-24-n-23",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-24",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-35",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-45",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-56",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-67",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-78",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-24-n-89",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 87,
                      actionItems: [
                        {
                          id: "a-24-n-21",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-22",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-33",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-24-n-41",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-24-n-57",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-68",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-24-n-79",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-24-n-90",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b9d115e4d,
            },
            "a-25": {
              id: "a-25",
              title: "Cursor Move",
              continuousParameterGroups: [
                {
                  id: "a-25-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-25-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "611a557eddbf9c6379e20043|ef1b96a3-8fda-5488-beaa-21048ae668ae",
                            },
                            xValue: -50,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-25-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "611a557eddbf9c6379e20043|ef1b96a3-8fda-5488-beaa-21048ae668ae",
                            },
                            xValue: 50,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "a-25-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-25-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "611a557eddbf9c6379e20043|ef1b96a3-8fda-5488-beaa-21048ae668ae",
                            },
                            yValue: -50,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-25-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "611a557eddbf9c6379e20043|ef1b96a3-8fda-5488-beaa-21048ae668ae",
                            },
                            yValue: 50,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b9d56d0e6,
            },
            "a-26": {
              id: "a-26",
              title: "Cursor - BG",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-26-n",
                      actionTypeId: "STYLE_BORDER",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".cursor",
                          selectorGuids: [
                            "c9fe7074-062f-bdfc-9aa9-d1efdb7e4bbf",
                          ],
                        },
                        globalSwatchId: "",
                        rValue: 0,
                        bValue: 0,
                        gValue: 0,
                        aValue: 0,
                      },
                    },
                    {
                      id: "a-26-n-2",
                      actionTypeId: "STYLE_BACKGROUND_COLOR",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".cursor",
                          selectorGuids: [
                            "c9fe7074-062f-bdfc-9aa9-d1efdb7e4bbf",
                          ],
                        },
                        globalSwatchId: "423dab69",
                        rValue: 255,
                        bValue: 255,
                        gValue: 255,
                        aValue: 1,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17b9d6d9eb0,
            },
            "a-27": {
              id: "a-27",
              title: "Cursor - Border",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-27-n",
                      actionTypeId: "STYLE_BORDER",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".cursor",
                          selectorGuids: [
                            "c9fe7074-062f-bdfc-9aa9-d1efdb7e4bbf",
                          ],
                        },
                        globalSwatchId: "423dab69",
                        rValue: 255,
                        bValue: 255,
                        gValue: 255,
                        aValue: 1,
                      },
                    },
                    {
                      id: "a-27-n-2",
                      actionTypeId: "STYLE_BACKGROUND_COLOR",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".cursor",
                          selectorGuids: [
                            "c9fe7074-062f-bdfc-9aa9-d1efdb7e4bbf",
                          ],
                        },
                        globalSwatchId: "",
                        rValue: 0,
                        bValue: 0,
                        gValue: 0,
                        aValue: 0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17b9d6d9eb0,
            },
            "a-28": {
              id: "a-28",
              title: "Nav Bar / Cursor - Bigger",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-28-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".cursor",
                          selectorGuids: [
                            "c9fe7074-062f-bdfc-9aa9-d1efdb7e4bbf",
                          ],
                        },
                        widthValue: 7,
                        heightValue: 7,
                        widthUnit: "em",
                        heightUnit: "em",
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-28-n-2",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          selector: ".cursor",
                          selectorGuids: [
                            "c9fe7074-062f-bdfc-9aa9-d1efdb7e4bbf",
                          ],
                        },
                        widthValue: 9,
                        heightValue: 9,
                        widthUnit: "em",
                        heightUnit: "em",
                        locked: !0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17b9dc2535a,
            },
            "a-29": {
              id: "a-29",
              title: "Nav Bar / Cursor - Default Size",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-29-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          selector: ".cursor",
                          selectorGuids: [
                            "c9fe7074-062f-bdfc-9aa9-d1efdb7e4bbf",
                          ],
                        },
                        widthValue: 7,
                        heightValue: 7,
                        widthUnit: "em",
                        heightUnit: "em",
                        locked: !0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17b9dc2535a,
            },
            "a-36": {
              id: "a-36",
              title: "Nav Bar / Menu - Open",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-36-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__menu",
                          selectorGuids: [
                            "277bcfd8-6037-ae89-07ac-69b3e640ea99",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-96",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav__button-line.nav__button-line--2",
                          selectorGuids: [
                            "335ee605-9a57-a409-c9d2-0c0c176f206d",
                            "7ecc170c-625c-3f97-b60d-774c28e4c684",
                          ],
                        },
                        xValue: 0,
                        xUnit: "em",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-14",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--1",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "c587eb22-b621-d697-45f6-db98595477a8",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-12",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--1",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "c587eb22-b621-d697-45f6-db98595477a8",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-10",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--1",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "c587eb22-b621-d697-45f6-db98595477a8",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-9",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__close-mask",
                          selectorGuids: [
                            "06bc6a48-8cb4-ef9a-7669-87dc5dee7fdb",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -34,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-7",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__close-mask",
                          selectorGuids: [
                            "06bc6a48-8cb4-ef9a-7669-87dc5dee7fdb",
                          ],
                        },
                        xValue: 0,
                        yValue: 0,
                        zValue: null,
                        xUnit: "em",
                        yUnit: "em",
                        zUnit: "em",
                      },
                    },
                    {
                      id: "a-36-n-5",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__emblem",
                          selectorGuids: [
                            "1fdb5463-995f-bca5-8c9a-3a9a8722386b",
                          ],
                        },
                        xValue: 0.95,
                        yValue: 0.95,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-36-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__emblem-w",
                          selectorGuids: [
                            "97de5b67-dd5e-f173-ae06-36faa8f28904",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-16",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--2",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "9fea2ca3-6ea9-a08d-1b7b-6bef7913e348",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-17",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--2",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "9fea2ca3-6ea9-a08d-1b7b-6bef7913e348",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-18",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--2",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "9fea2ca3-6ea9-a08d-1b7b-6bef7913e348",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-19",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--3",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "985375a9-82e4-e798-411a-2eb15a7e62a9",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-20",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--3",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "985375a9-82e4-e798-411a-2eb15a7e62a9",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-21",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--3",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "985375a9-82e4-e798-411a-2eb15a7e62a9",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-22",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--4",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "c9809c17-683b-89b4-b6a5-8bbf66f5c562",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-23",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--4",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "c9809c17-683b-89b4-b6a5-8bbf66f5c562",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-24",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__link.nav__link--4",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "c9809c17-683b-89b4-b6a5-8bbf66f5c562",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-34",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--1",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "4a65f97c-0ea3-e972-2484-ed93553de0aa",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-36",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--1",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "4a65f97c-0ea3-e972-2484-ed93553de0aa",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-35",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--1",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "4a65f97c-0ea3-e972-2484-ed93553de0aa",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-37",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--2",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "1a720aaa-f8d3-adef-7ac1-13891261458b",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-39",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--2",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "1a720aaa-f8d3-adef-7ac1-13891261458b",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-38",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--2",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "1a720aaa-f8d3-adef-7ac1-13891261458b",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-40",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__legal-link.nav__legal-link--3",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "59c4807e-f300-1e15-6dc0-c95f7b626c14",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-42",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__legal-link.nav__legal-link--3",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "59c4807e-f300-1e15-6dc0-c95f7b626c14",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-41",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__legal-link.nav__legal-link--3",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "59c4807e-f300-1e15-6dc0-c95f7b626c14",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-52",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--1",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "d5487d49-99a2-3077-f850-5518ef26a8d7",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-54",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--1",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "d5487d49-99a2-3077-f850-5518ef26a8d7",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-53",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--1",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "d5487d49-99a2-3077-f850-5518ef26a8d7",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-55",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--2",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "fc780d58-d43c-c72b-6df2-df1a83eeaf6c",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-57",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--2",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "fc780d58-d43c-c72b-6df2-df1a83eeaf6c",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-56",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--2",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "fc780d58-d43c-c72b-6df2-df1a83eeaf6c",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-58",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--3",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "168ab216-ee80-e6ad-de18-ace966b469fb",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-60",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--3",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "168ab216-ee80-e6ad-de18-ace966b469fb",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-59",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--3",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "168ab216-ee80-e6ad-de18-ace966b469fb",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-70",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__language-it",
                          selectorGuids: [
                            "cc8cbcb8-95cc-41cb-db44-5e90c85bcd3a",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-72",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__language-it",
                          selectorGuids: [
                            "cc8cbcb8-95cc-41cb-db44-5e90c85bcd3a",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-71",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__language-it",
                          selectorGuids: [
                            "cc8cbcb8-95cc-41cb-db44-5e90c85bcd3a",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-73",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__language-en",
                          selectorGuids: [
                            "f409e84c-8154-9cff-bdbb-013e4270170b",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-75",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__language-en",
                          selectorGuids: [
                            "f409e84c-8154-9cff-bdbb-013e4270170b",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-74",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__language-en",
                          selectorGuids: [
                            "f409e84c-8154-9cff-bdbb-013e4270170b",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-82",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__sm-link.nav__sm-link--margin.nav__sm-link--1",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "ba8ffe03-a7e9-1de4-558f-a2d5360f5195",
                            "5388f013-15ec-e612-b479-4a42b822bfce",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-84",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__sm-link.nav__sm-link--margin.nav__sm-link--1",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "ba8ffe03-a7e9-1de4-558f-a2d5360f5195",
                            "5388f013-15ec-e612-b479-4a42b822bfce",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-83",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector:
                            ".nav__sm-link.nav__sm-link--margin.nav__sm-link--1",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "ba8ffe03-a7e9-1de4-558f-a2d5360f5195",
                            "5388f013-15ec-e612-b479-4a42b822bfce",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-85",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__sm-link.nav__sm-link--2",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "71ad0cbb-1036-2c5c-0ea3-0bc4dd29b5c3",
                          ],
                        },
                        yValue: 1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-87",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__sm-link.nav__sm-link--2",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "71ad0cbb-1036-2c5c-0ea3-0bc4dd29b5c3",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-86",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 0,
                        target: {
                          selector: ".nav__sm-link.nav__sm-link--2",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "71ad0cbb-1036-2c5c-0ea3-0bc4dd29b5c3",
                          ],
                        },
                        zValue: 6,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-36-n-99",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".nav__button-close",
                          selectorGuids: [
                            "97c2c4ce-647f-f324-9e85-050018c8934e",
                          ],
                        },
                        value: "block",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-36-n-95",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".nav__menu",
                          selectorGuids: [
                            "277bcfd8-6037-ae89-07ac-69b3e640ea99",
                          ],
                        },
                        value: "block",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-36-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 400,
                        target: {
                          selector: ".nav__menu",
                          selectorGuids: [
                            "277bcfd8-6037-ae89-07ac-69b3e640ea99",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 800,
                        target: {
                          selector: ".nav__emblem-w",
                          selectorGuids: [
                            "97de5b67-dd5e-f173-ae06-36faa8f28904",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-6",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 800,
                        target: {
                          selector: ".nav__emblem",
                          selectorGuids: [
                            "1fdb5463-995f-bca5-8c9a-3a9a8722386b",
                          ],
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-36-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 900,
                        target: {
                          selector: ".nav__close-mask",
                          selectorGuids: [
                            "06bc6a48-8cb4-ef9a-7669-87dc5dee7fdb",
                          ],
                        },
                        xValue: -7,
                        yValue: 7,
                        zValue: null,
                        xUnit: "em",
                        yUnit: "em",
                        zUnit: "em",
                      },
                    },
                    {
                      id: "a-36-n-11",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--1",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "c587eb22-b621-d697-45f6-db98595477a8",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-13",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--1",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "c587eb22-b621-d697-45f6-db98595477a8",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-15",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--1",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "c587eb22-b621-d697-45f6-db98595477a8",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-25",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--2",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "9fea2ca3-6ea9-a08d-1b7b-6bef7913e348",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-26",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--2",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "9fea2ca3-6ea9-a08d-1b7b-6bef7913e348",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-27",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--2",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "9fea2ca3-6ea9-a08d-1b7b-6bef7913e348",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-28",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1500,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--3",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "985375a9-82e4-e798-411a-2eb15a7e62a9",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-30",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1500,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--3",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "985375a9-82e4-e798-411a-2eb15a7e62a9",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-29",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1500,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--3",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "985375a9-82e4-e798-411a-2eb15a7e62a9",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-31",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1700,
                        target: {
                          selector: ".nav__link.nav__link--4",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "c9809c17-683b-89b4-b6a5-8bbf66f5c562",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-33",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1700,
                        target: {
                          selector: ".nav__link.nav__link--4",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "c9809c17-683b-89b4-b6a5-8bbf66f5c562",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-32",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1700,
                        target: {
                          selector: ".nav__link.nav__link--4",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "c9809c17-683b-89b4-b6a5-8bbf66f5c562",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-43",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2e3,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--1",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "4a65f97c-0ea3-e972-2484-ed93553de0aa",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-45",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2e3,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--1",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "4a65f97c-0ea3-e972-2484-ed93553de0aa",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-44",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2e3,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--1",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "4a65f97c-0ea3-e972-2484-ed93553de0aa",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-46",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2300,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--2",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "1a720aaa-f8d3-adef-7ac1-13891261458b",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-48",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2300,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--2",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "1a720aaa-f8d3-adef-7ac1-13891261458b",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-47",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2300,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--2",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "1a720aaa-f8d3-adef-7ac1-13891261458b",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-49",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2600,
                        target: {
                          selector: ".nav__legal-link.nav__legal-link--3",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "59c4807e-f300-1e15-6dc0-c95f7b626c14",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-51",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2600,
                        target: {
                          selector: ".nav__legal-link.nav__legal-link--3",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "59c4807e-f300-1e15-6dc0-c95f7b626c14",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-50",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2600,
                        target: {
                          selector: ".nav__legal-link.nav__legal-link--3",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "59c4807e-f300-1e15-6dc0-c95f7b626c14",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-61",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--1",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "d5487d49-99a2-3077-f850-5518ef26a8d7",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-63",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--1",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "d5487d49-99a2-3077-f850-5518ef26a8d7",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-62",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--1",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "d5487d49-99a2-3077-f850-5518ef26a8d7",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-64",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--2",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "fc780d58-d43c-c72b-6df2-df1a83eeaf6c",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-66",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--2",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "fc780d58-d43c-c72b-6df2-df1a83eeaf6c",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-65",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--2",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "fc780d58-d43c-c72b-6df2-df1a83eeaf6c",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-67",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1600,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--3",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "168ab216-ee80-e6ad-de18-ace966b469fb",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-69",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1600,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--3",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "168ab216-ee80-e6ad-de18-ace966b469fb",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-68",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1600,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--3",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "168ab216-ee80-e6ad-de18-ace966b469fb",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-76",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1900,
                        target: {
                          selector: ".nav__language-it",
                          selectorGuids: [
                            "cc8cbcb8-95cc-41cb-db44-5e90c85bcd3a",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-78",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1900,
                        target: {
                          selector: ".nav__language-it",
                          selectorGuids: [
                            "cc8cbcb8-95cc-41cb-db44-5e90c85bcd3a",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-77",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1900,
                        target: {
                          selector: ".nav__language-it",
                          selectorGuids: [
                            "cc8cbcb8-95cc-41cb-db44-5e90c85bcd3a",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-79",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2200,
                        target: {
                          selector: ".nav__language-en",
                          selectorGuids: [
                            "f409e84c-8154-9cff-bdbb-013e4270170b",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-81",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2200,
                        target: {
                          selector: ".nav__language-en",
                          selectorGuids: [
                            "f409e84c-8154-9cff-bdbb-013e4270170b",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-80",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2200,
                        target: {
                          selector: ".nav__language-en",
                          selectorGuids: [
                            "f409e84c-8154-9cff-bdbb-013e4270170b",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-88",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2500,
                        target: {
                          selector:
                            ".nav__sm-link.nav__sm-link--margin.nav__sm-link--1",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "ba8ffe03-a7e9-1de4-558f-a2d5360f5195",
                            "5388f013-15ec-e612-b479-4a42b822bfce",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-90",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2500,
                        target: {
                          selector:
                            ".nav__sm-link.nav__sm-link--margin.nav__sm-link--1",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "ba8ffe03-a7e9-1de4-558f-a2d5360f5195",
                            "5388f013-15ec-e612-b479-4a42b822bfce",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-89",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2500,
                        target: {
                          selector:
                            ".nav__sm-link.nav__sm-link--margin.nav__sm-link--1",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "ba8ffe03-a7e9-1de4-558f-a2d5360f5195",
                            "5388f013-15ec-e612-b479-4a42b822bfce",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-91",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2800,
                        target: {
                          selector: ".nav__sm-link.nav__sm-link--2",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "71ad0cbb-1036-2c5c-0ea3-0bc4dd29b5c3",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: 0,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-36-n-93",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2800,
                        target: {
                          selector: ".nav__sm-link.nav__sm-link--2",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "71ad0cbb-1036-2c5c-0ea3-0bc4dd29b5c3",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-36-n-92",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2800,
                        target: {
                          selector: ".nav__sm-link.nav__sm-link--2",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "71ad0cbb-1036-2c5c-0ea3-0bc4dd29b5c3",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-97",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav__button-line.nav__button-line--2",
                          selectorGuids: [
                            "335ee605-9a57-a409-c9d2-0c0c176f206d",
                            "7ecc170c-625c-3f97-b60d-774c28e4c684",
                          ],
                        },
                        xValue: -0.5,
                        xUnit: "em",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17ba214202a,
            },
            "a-34": {
              id: "a-34",
              title: "Nav Bar / Secondary Link - Hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-34-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav__secondary-link-text",
                          selectorGuids: [
                            "0e8327ec-738f-82be-1482-eec8e47d39fb",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-34-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav__secondary-link-text",
                          selectorGuids: [
                            "0e8327ec-738f-82be-1482-eec8e47d39fb",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17ba1ea1aa3,
            },
            "a-35": {
              id: "a-35",
              title: "Nav Bar / Secondary Link - Hover Out",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-35-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav__secondary-link-text",
                          selectorGuids: [
                            "0e8327ec-738f-82be-1482-eec8e47d39fb",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17ba1ea1aa3,
            },
            "a-38": {
              id: "a-38",
              title: "Nav Bar / Menu - Close",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-38-n-48",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 800,
                        target: {
                          selector: ".nav__emblem-w",
                          selectorGuids: [
                            "97de5b67-dd5e-f173-ae06-36faa8f28904",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-49",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 800,
                        target: {
                          selector: ".nav__emblem",
                          selectorGuids: [
                            "1fdb5463-995f-bca5-8c9a-3a9a8722386b",
                          ],
                        },
                        xValue: 0.95,
                        yValue: 0.95,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-38-n-50",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 900,
                        target: {
                          selector: ".nav__close-mask",
                          selectorGuids: [
                            "06bc6a48-8cb4-ef9a-7669-87dc5dee7fdb",
                          ],
                        },
                        xValue: 0,
                        yValue: 0,
                        zValue: null,
                        xUnit: "em",
                        yUnit: "em",
                        zUnit: "em",
                      },
                    },
                    {
                      id: "a-38-n-51",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--1",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "c587eb22-b621-d697-45f6-db98595477a8",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-52",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--1",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "c587eb22-b621-d697-45f6-db98595477a8",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-53",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--1",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "c587eb22-b621-d697-45f6-db98595477a8",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-54",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--2",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "9fea2ca3-6ea9-a08d-1b7b-6bef7913e348",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-55",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--2",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "9fea2ca3-6ea9-a08d-1b7b-6bef7913e348",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-56",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--2",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "9fea2ca3-6ea9-a08d-1b7b-6bef7913e348",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-57",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1500,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--3",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "985375a9-82e4-e798-411a-2eb15a7e62a9",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-58",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1500,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--3",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "985375a9-82e4-e798-411a-2eb15a7e62a9",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-59",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1500,
                        target: {
                          selector: ".nav__link.nav__link--margin.nav__link--3",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "a569b10a-957c-50e3-3d56-68ffa6018aea",
                            "985375a9-82e4-e798-411a-2eb15a7e62a9",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-60",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1700,
                        target: {
                          selector: ".nav__link.nav__link--4",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "c9809c17-683b-89b4-b6a5-8bbf66f5c562",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-61",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1700,
                        target: {
                          selector: ".nav__link.nav__link--4",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "c9809c17-683b-89b4-b6a5-8bbf66f5c562",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-62",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1700,
                        target: {
                          selector: ".nav__link.nav__link--4",
                          selectorGuids: [
                            "c9bde0e6-649c-c757-7f76-f34809082907",
                            "c9809c17-683b-89b4-b6a5-8bbf66f5c562",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-63",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2e3,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--1",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "4a65f97c-0ea3-e972-2484-ed93553de0aa",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-64",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2e3,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--1",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "4a65f97c-0ea3-e972-2484-ed93553de0aa",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-65",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2e3,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--1",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "4a65f97c-0ea3-e972-2484-ed93553de0aa",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-66",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2300,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--2",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "1a720aaa-f8d3-adef-7ac1-13891261458b",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-67",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2300,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--2",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "1a720aaa-f8d3-adef-7ac1-13891261458b",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-68",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2300,
                        target: {
                          selector:
                            ".nav__legal-link.nav__legal-link--margin.nav__legal-link--2",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "067e8298-1e72-3a26-5dba-be2daa90963a",
                            "1a720aaa-f8d3-adef-7ac1-13891261458b",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-69",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2600,
                        target: {
                          selector: ".nav__legal-link.nav__legal-link--3",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "59c4807e-f300-1e15-6dc0-c95f7b626c14",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-70",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2600,
                        target: {
                          selector: ".nav__legal-link.nav__legal-link--3",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "59c4807e-f300-1e15-6dc0-c95f7b626c14",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-71",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2600,
                        target: {
                          selector: ".nav__legal-link.nav__legal-link--3",
                          selectorGuids: [
                            "a8cbab5f-3d35-db69-047d-df3ecd194688",
                            "59c4807e-f300-1e15-6dc0-c95f7b626c14",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-72",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--1",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "d5487d49-99a2-3077-f850-5518ef26a8d7",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-73",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--1",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "d5487d49-99a2-3077-f850-5518ef26a8d7",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-74",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1e3,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--1",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "d5487d49-99a2-3077-f850-5518ef26a8d7",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-75",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--2",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "fc780d58-d43c-c72b-6df2-df1a83eeaf6c",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-76",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--2",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "fc780d58-d43c-c72b-6df2-df1a83eeaf6c",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-77",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1300,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--2",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "fc780d58-d43c-c72b-6df2-df1a83eeaf6c",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-78",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1600,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--3",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "168ab216-ee80-e6ad-de18-ace966b469fb",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-79",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1600,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--3",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "168ab216-ee80-e6ad-de18-ace966b469fb",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-80",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1600,
                        target: {
                          selector:
                            ".nav__secondary-link.nav__secondary-link--margin.nav__secondary-link--3",
                          selectorGuids: [
                            "e8e80b85-ff04-a090-42d7-f6b9153a2b31",
                            "6abd14e3-d6c6-def5-06c0-ab4af13bc0ed",
                            "168ab216-ee80-e6ad-de18-ace966b469fb",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-81",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1900,
                        target: {
                          selector: ".nav__language-it",
                          selectorGuids: [
                            "cc8cbcb8-95cc-41cb-db44-5e90c85bcd3a",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-82",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1900,
                        target: {
                          selector: ".nav__language-it",
                          selectorGuids: [
                            "cc8cbcb8-95cc-41cb-db44-5e90c85bcd3a",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-83",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 1900,
                        target: {
                          selector: ".nav__language-it",
                          selectorGuids: [
                            "cc8cbcb8-95cc-41cb-db44-5e90c85bcd3a",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-84",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2200,
                        target: {
                          selector: ".nav__language-en",
                          selectorGuids: [
                            "f409e84c-8154-9cff-bdbb-013e4270170b",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-85",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2200,
                        target: {
                          selector: ".nav__language-en",
                          selectorGuids: [
                            "f409e84c-8154-9cff-bdbb-013e4270170b",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-86",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2200,
                        target: {
                          selector: ".nav__language-en",
                          selectorGuids: [
                            "f409e84c-8154-9cff-bdbb-013e4270170b",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-87",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2500,
                        target: {
                          selector:
                            ".nav__sm-link.nav__sm-link--margin.nav__sm-link--1",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "ba8ffe03-a7e9-1de4-558f-a2d5360f5195",
                            "5388f013-15ec-e612-b479-4a42b822bfce",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-88",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2500,
                        target: {
                          selector:
                            ".nav__sm-link.nav__sm-link--margin.nav__sm-link--1",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "ba8ffe03-a7e9-1de4-558f-a2d5360f5195",
                            "5388f013-15ec-e612-b479-4a42b822bfce",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-38-n-89",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2500,
                        target: {
                          selector:
                            ".nav__sm-link.nav__sm-link--margin.nav__sm-link--1",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "ba8ffe03-a7e9-1de4-558f-a2d5360f5195",
                            "5388f013-15ec-e612-b479-4a42b822bfce",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-90",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2800,
                        target: {
                          selector: ".nav__sm-link.nav__sm-link--2",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "71ad0cbb-1036-2c5c-0ea3-0bc4dd29b5c3",
                          ],
                        },
                        xValue: null,
                        yValue: null,
                        zValue: -6,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-38-n-91",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2800,
                        target: {
                          selector: ".nav__sm-link.nav__sm-link--2",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "71ad0cbb-1036-2c5c-0ea3-0bc4dd29b5c3",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-38-n-92",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 2800,
                        target: {
                          selector: ".nav__sm-link.nav__sm-link--2",
                          selectorGuids: [
                            "ac838259-75ed-c54d-3d7b-6b48e9d788ef",
                            "71ad0cbb-1036-2c5c-0ea3-0bc4dd29b5c3",
                          ],
                        },
                        yValue: -1.5,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-38-n-94",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeInOut",
                        duration: 200,
                        target: {
                          selector: ".nav__menu",
                          selectorGuids: [
                            "277bcfd8-6037-ae89-07ac-69b3e640ea99",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-38-n-93",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          selector: ".nav__button-line.nav__button-line--2",
                          selectorGuids: [
                            "335ee605-9a57-a409-c9d2-0c0c176f206d",
                            "7ecc170c-625c-3f97-b60d-774c28e4c684",
                          ],
                        },
                        xValue: 0,
                        xUnit: "em",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-38-n-95",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".nav__menu",
                          selectorGuids: [
                            "277bcfd8-6037-ae89-07ac-69b3e640ea99",
                          ],
                        },
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-38-n-96",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".nav__button-close",
                          selectorGuids: [
                            "97c2c4ce-647f-f324-9e85-050018c8934e",
                          ],
                        },
                        value: "none",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17ba214202a,
            },
            "a-39": {
              id: "a-39",
              title: "Preloader",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-39-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          id: "611a557eddbf9c6379e20043|1bbb4cc6-54db-16aa-6a4a-4738e913d9f5",
                        },
                        value: "flex",
                      },
                    },
                    {
                      id: "a-39-n-16",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          id: "611a557eddbf9c6379e20043|704ca2c3-1fb6-2ee9-111b-c2aa81da2af1",
                        },
                        value: "block",
                      },
                    },
                    {
                      id: "a-39-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "611a557eddbf9c6379e20043|6d3a60e1-2645-7a07-d4b8-3b3dca7a1005",
                        },
                        yValue: 1,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-39-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "611a557eddbf9c6379e20043|05e4e217-ca65-5b47-31c4-39915263c68e",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-39-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "611a557eddbf9c6379e20043|577f0064-7690-9d24-e80f-fdb571e86924",
                        },
                        yValue: 1,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-39-n-7",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "611a557eddbf9c6379e20043|7f275943-5286-7959-3b72-a7e353496565",
                        },
                        yValue: 1,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-39-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "611a557eddbf9c6379e20043|d6c56b34-962a-4158-8cb2-979f61f8a9cb",
                        },
                        yValue: 1,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-39-n-15",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "611a557eddbf9c6379e20043|704ca2c3-1fb6-2ee9-111b-c2aa81da2af1",
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-39-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "611a557eddbf9c6379e20043|05e4e217-ca65-5b47-31c4-39915263c68e",
                        },
                        value: 0.3,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-39-n-9",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          id: "611a557eddbf9c6379e20043|6d3a60e1-2645-7a07-d4b8-3b3dca7a1005",
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-39-n-10",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 150,
                        easing: "",
                        duration: 300,
                        target: {
                          id: "611a557eddbf9c6379e20043|577f0064-7690-9d24-e80f-fdb571e86924",
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-39-n-11",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 300,
                        easing: "",
                        duration: 300,
                        target: {
                          id: "611a557eddbf9c6379e20043|7f275943-5286-7959-3b72-a7e353496565",
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-39-n-12",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 450,
                        easing: "",
                        duration: 300,
                        target: {
                          id: "611a557eddbf9c6379e20043|d6c56b34-962a-4158-8cb2-979f61f8a9cb",
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-39-n-13",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          id: "611a557eddbf9c6379e20043|a4ed14f4-46e1-a895-03da-3b787726f5d6",
                        },
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-39-n-14",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 5e3,
                        easing: "",
                        duration: 1300,
                        target: {
                          id: "611a557eddbf9c6379e20043|704ca2c3-1fb6-2ee9-111b-c2aa81da2af1",
                        },
                        yValue: -150,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-39-n-18",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 5600,
                        easing: "",
                        duration: 0,
                        target: {
                          id: "611a557eddbf9c6379e20043|1bbb4cc6-54db-16aa-6a4a-4738e913d9f5",
                        },
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-39-n-17",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          id: "611a557eddbf9c6379e20043|704ca2c3-1fb6-2ee9-111b-c2aa81da2af1",
                        },
                        value: "none",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17bbb7d42ed,
            },
            "a-4": {
              id: "a-4",
              title: "Home / Style 1 Intro - animation / on",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-4-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-emblem",
                          selectorGuids: [
                            "166a4e41-024a-5efd-53d0-ff29d12ad3e5",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--1",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "351b1754-cc14-c071-845f-f0f8c5555f7a",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--2",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "52e99a94-81e6-99a8-94b6-10a01d051239",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--3",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "fb7f93bc-6d04-33e0-cb3a-d9abee879f75",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--4",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "018ce109-a59d-4571-9ac6-339dadf12031",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--1",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "351b1754-cc14-c071-845f-f0f8c5555f7a",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-8",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--2",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "52e99a94-81e6-99a8-94b6-10a01d051239",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-9",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--3",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "fb7f93bc-6d04-33e0-cb3a-d9abee879f75",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-10",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--4",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "018ce109-a59d-4571-9ac6-339dadf12031",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-11",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--1",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "9dbd8121-e2e7-13d2-5d6a-f68da80e44e2",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-12",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--2",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "af7ef95c-f420-319d-f262-d6d17b6452db",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-13",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--3",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "46a2f5f5-9a4c-c4c3-5251-ecde14875098",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-14",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--4",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "60400e30-d613-a097-1fa2-8255f638c194",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-15",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--1",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "9dbd8121-e2e7-13d2-5d6a-f68da80e44e2",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-16",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--2",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "af7ef95c-f420-319d-f262-d6d17b6452db",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-17",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--3",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "46a2f5f5-9a4c-c4c3-5251-ecde14875098",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-18",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--4",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "60400e30-d613-a097-1fa2-8255f638c194",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-4-n-19",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 500,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--1",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "351b1754-cc14-c071-845f-f0f8c5555f7a",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-23",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 500,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--1",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "351b1754-cc14-c071-845f-f0f8c5555f7a",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-24",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 600,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--2",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "52e99a94-81e6-99a8-94b6-10a01d051239",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-20",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 600,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--2",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "52e99a94-81e6-99a8-94b6-10a01d051239",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-25",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 700,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--3",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "fb7f93bc-6d04-33e0-cb3a-d9abee879f75",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-21",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 700,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--3",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "fb7f93bc-6d04-33e0-cb3a-d9abee879f75",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-26",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 800,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--4",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "018ce109-a59d-4571-9ac6-339dadf12031",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-22",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 800,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-h.home__style1-h--4",
                          selectorGuids: [
                            "75df4cd3-f4e0-3ad5-5be0-dce2dd8a14a8",
                            "018ce109-a59d-4571-9ac6-339dadf12031",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-31",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 900,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--1",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "9dbd8121-e2e7-13d2-5d6a-f68da80e44e2",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-27",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 900,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--1",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "9dbd8121-e2e7-13d2-5d6a-f68da80e44e2",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1e3,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-emblem",
                          selectorGuids: [
                            "166a4e41-024a-5efd-53d0-ff29d12ad3e5",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-32",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1e3,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--2",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "af7ef95c-f420-319d-f262-d6d17b6452db",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-28",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1e3,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--2",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "af7ef95c-f420-319d-f262-d6d17b6452db",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-33",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1100,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--3",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "46a2f5f5-9a4c-c4c3-5251-ecde14875098",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-29",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1100,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--3",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "46a2f5f5-9a4c-c4c3-5251-ecde14875098",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-4-n-34",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1200,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--4",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "60400e30-d613-a097-1fa2-8255f638c194",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-30",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1200,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__style1-p.home__style1-p--4",
                          selectorGuids: [
                            "7f1fa9d4-7541-4818-be76-f67ebdcf9e57",
                            "60400e30-d613-a097-1fa2-8255f638c194",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17b4f9cb6a6,
            },
            "a-32": {
              id: "a-32",
              title: "Nav Bar / Link - Hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-32-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav__link-text",
                          selectorGuids: [
                            "63a10c76-dbf8-11a0-03b5-6be348f1eeae",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-32-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav__link-text",
                          selectorGuids: [
                            "63a10c76-dbf8-11a0-03b5-6be348f1eeae",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17ba1ea1aa3,
            },
            "a-33": {
              id: "a-33",
              title: "Nav Bar / Link - Hover Out",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-33-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav__link-text",
                          selectorGuids: [
                            "63a10c76-dbf8-11a0-03b5-6be348f1eeae",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17ba1ea1aa3,
            },
            "a-40": {
              id: "a-40",
              title: "Nav Bar / Colors Change - Tablet",
              continuousParameterGroups: [
                {
                  id: "a-40-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-40-n",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0,
                          },
                        },
                        {
                          id: "a-40-n-2",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-3",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-4",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-5",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-6",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-7",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-40-n-8",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 5,
                      actionItems: [
                        {
                          id: "a-40-n-9",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0,
                          },
                        },
                        {
                          id: "a-40-n-10",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-11",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-12",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-13",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-14",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-15",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-40-n-16",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 6,
                      actionItems: [
                        {
                          id: "a-40-n-17",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-18",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-19",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-40-n-20",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-40-n-21",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-22",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-23",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-40-n-24",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 20,
                      actionItems: [
                        {
                          id: "a-40-n-25",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-26",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-27",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-40-n-28",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-40-n-29",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-30",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-31",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-40-n-32",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 21,
                      actionItems: [
                        {
                          id: "a-40-n-33",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-34",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-35",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-36",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-37",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-38",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-39",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-40-n-40",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 40,
                      actionItems: [
                        {
                          id: "a-40-n-41",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-42",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-43",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-44",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-45",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-46",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-47",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-40-n-48",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 41,
                      actionItems: [
                        {
                          id: "a-40-n-49",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-50",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-51",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-40-n-52",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-40-n-53",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-54",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-55",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-40-n-56",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 55,
                      actionItems: [
                        {
                          id: "a-40-n-57",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-58",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-59",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-40-n-60",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-40-n-61",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-62",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-63",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-40-n-64",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 56,
                      actionItems: [
                        {
                          id: "a-40-n-65",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-66",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-67",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-68",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-69",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-70",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-71",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-40-n-72",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 74,
                      actionItems: [
                        {
                          id: "a-40-n-73",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-74",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-75",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-76",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-77",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-78",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-79",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-40-n-80",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 75,
                      actionItems: [
                        {
                          id: "a-40-n-81",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-82",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-83",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-40-n-84",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-40-n-85",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-86",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-40-n-87",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-40-n-88",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b9d115e4d,
            },
            "a-41": {
              id: "a-41",
              title: "Nav Bar / Colors Change - Mobile",
              continuousParameterGroups: [
                {
                  id: "a-41-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-41-n",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0,
                          },
                        },
                        {
                          id: "a-41-n-2",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-3",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-4",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-5",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-6",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-7",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-41-n-8",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 11,
                      actionItems: [
                        {
                          id: "a-41-n-9",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0,
                          },
                        },
                        {
                          id: "a-41-n-10",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-11",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-12",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-13",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-14",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-15",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-41-n-16",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 12,
                      actionItems: [
                        {
                          id: "a-41-n-17",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-18",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-19",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-41-n-20",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-41-n-21",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-22",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-23",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-41-n-24",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 25,
                      actionItems: [
                        {
                          id: "a-41-n-25",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-26",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-27",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-41-n-28",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-41-n-29",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-30",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-31",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-41-n-32",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 26,
                      actionItems: [
                        {
                          id: "a-41-n-33",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-34",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-35",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-36",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-37",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-38",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-39",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-41-n-40",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 40,
                      actionItems: [
                        {
                          id: "a-41-n-41",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-42",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-43",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-44",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-45",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-46",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-47",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-41-n-48",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 41,
                      actionItems: [
                        {
                          id: "a-41-n-49",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-50",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-51",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-41-n-52",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-41-n-53",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-54",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-55",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-41-n-56",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 62,
                      actionItems: [
                        {
                          id: "a-41-n-57",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-58",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-59",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-41-n-60",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-41-n-61",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-62",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-63",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-41-n-64",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 63,
                      actionItems: [
                        {
                          id: "a-41-n-65",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-66",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-67",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-68",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-69",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-70",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-71",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-41-n-72",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 76,
                      actionItems: [
                        {
                          id: "a-41-n-73",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-74",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-75",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-76",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-77",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-78",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-79",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-41-n-80",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 77,
                      actionItems: [
                        {
                          id: "a-41-n-81",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-82",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-83",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-41-n-84",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-41-n-85",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-86",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-41-n-87",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-41-n-88",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b9d115e4d,
            },
            "a-42": {
              id: "a-42",
              title: "Nav Bar / Colors Change - Mobile Landscape",
              continuousParameterGroups: [
                {
                  id: "a-42-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-42-n",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0,
                          },
                        },
                        {
                          id: "a-42-n-2",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-3",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-4",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-5",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-6",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-7",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-42-n-8",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 5,
                      actionItems: [
                        {
                          id: "a-42-n-9",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0,
                          },
                        },
                        {
                          id: "a-42-n-10",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-11",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-12",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-13",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-14",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-15",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-42-n-16",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 6,
                      actionItems: [
                        {
                          id: "a-42-n-17",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-18",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-19",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-42-n-20",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-42-n-21",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-22",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-23",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-42-n-24",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 22,
                      actionItems: [
                        {
                          id: "a-42-n-25",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-26",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-27",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-42-n-28",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-42-n-29",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-30",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-31",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-42-n-32",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 23,
                      actionItems: [
                        {
                          id: "a-42-n-33",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-34",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-35",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-36",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-37",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-38",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-39",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-42-n-40",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 41,
                      actionItems: [
                        {
                          id: "a-42-n-41",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-42",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-43",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-44",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-45",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-46",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-47",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-42-n-48",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 42,
                      actionItems: [
                        {
                          id: "a-42-n-49",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-50",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-51",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-42-n-52",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-42-n-53",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-54",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-55",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-42-n-56",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 54,
                      actionItems: [
                        {
                          id: "a-42-n-57",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-58",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-59",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-42-n-60",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-42-n-61",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-62",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-63",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-42-n-64",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 55,
                      actionItems: [
                        {
                          id: "a-42-n-65",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-66",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-67",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-68",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-69",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-70",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-71",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-42-n-72",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 65,
                      actionItems: [
                        {
                          id: "a-42-n-73",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "315fe6e7",
                            rValue: 178,
                            bValue: 120,
                            gValue: 143,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-74",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-75",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-76",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-77",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-78",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "423dab69",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-79",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                        {
                          id: "a-42-n-80",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 0.5,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 66,
                      actionItems: [
                        {
                          id: "a-42-n-81",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav",
                              selectorGuids: [
                                "2a37acfd-7107-4148-3b16-385b3fcbaebf",
                              ],
                            },
                            globalSwatchId: "b1a362a2",
                            rValue: 254,
                            bValue: 236,
                            gValue: 247,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-82",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-line",
                              selectorGuids: [
                                "335ee605-9a57-a409-c9d2-0c0c176f206d",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-83",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__button-w",
                              selectorGuids: [
                                "a7e7bbdb-c269-d171-a09a-e35c5d04cebc",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.4,
                          },
                        },
                        {
                          id: "a-42-n-84",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__bar",
                              selectorGuids: [
                                "eab61218-38b5-ffc8-9624-1c4f8ca64413",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-42-n-85",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__logo",
                              selectorGuids: [
                                "3afd2c1d-43dd-8a13-e7c5-8bf7f5243041",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-86",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__year",
                              selectorGuids: [
                                "728e919c-cdeb-fc25-e9b7-40523a086879",
                              ],
                            },
                            globalSwatchId: "1471c956",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 1,
                          },
                        },
                        {
                          id: "a-42-n-87",
                          actionTypeId: "STYLE_BORDER",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-w",
                              selectorGuids: [
                                "e3782b91-b6a4-657d-253c-e8700e1a4439",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                        {
                          id: "a-42-n-88",
                          actionTypeId: "STYLE_BACKGROUND_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".nav__loading-lines",
                              selectorGuids: [
                                "e5186e1b-76fa-bb20-b6b8-69254e6fe605",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 0,
                            bValue: 0,
                            gValue: 0,
                            aValue: 0.2,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17b9d115e4d,
            },
            "a-43": {
              id: "a-43",
              title: "Home / Wines Text Animation - Mobile",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-43-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-h",
                          selectorGuids: [
                            "417e4699-865c-e17a-afc8-3e22a6cb3963",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-43-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-h",
                          selectorGuids: [
                            "417e4699-865c-e17a-afc8-3e22a6cb3963",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-43-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--mobile",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "7c4a1419-e90b-e2ee-0827-053d901f35e8",
                          ],
                        },
                        yValue: 3,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-43-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--mobile",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "7c4a1419-e90b-e2ee-0827-053d901f35e8",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-43-n-9",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 500,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-h",
                          selectorGuids: [
                            "417e4699-865c-e17a-afc8-3e22a6cb3963",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-43-n-10",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 500,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-h",
                          selectorGuids: [
                            "417e4699-865c-e17a-afc8-3e22a6cb3963",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-43-n-11",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 600,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--mobile",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "7c4a1419-e90b-e2ee-0827-053d901f35e8",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "vh",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-43-n-12",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 600,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".home__wines-p.home__wines-p--mobile",
                          selectorGuids: [
                            "9f9f04cf-8adf-6577-33eb-27f3bd1702f4",
                            "7c4a1419-e90b-e2ee-0827-053d901f35e8",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17b5f4c7b4a,
            },
            "a-44": {
              id: "a-44",
              title: "Disclaimer Close",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-44-n",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "PARENT",
                          selector: ".disclaimer",
                          selectorGuids: [
                            "575a607a-e2e7-9120-4e0b-d1c39c4755c3",
                          ],
                        },
                        value: "none",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x175e28dd3de,
            },
          },
          site: {
            mediaQueries: [
              { key: "main", min: 992, max: 1e4 },
              { key: "medium", min: 768, max: 991 },
              { key: "small", min: 480, max: 767 },
              { key: "tiny", min: 0, max: 479 },
            ],
          },
        });
      },
      8466: function (e, a, t) {
        t(9461),
          t(7624),
          t(286),
          t(8334),
          t(2338),
          t(3695),
          t(322),
          t(941),
          t(5134),
          t(9904),
          t(1724),
          t(7518);
      },
    },
    a = {};
  function t(n) {
    var i = a[n];
    if (void 0 !== i) return i.exports;
    var d = (a[n] = { id: n, loaded: !1, exports: {} });
    return e[n](d, d.exports, t), (d.loaded = !0), d.exports;
  }
  (t.m = e),
    (t.d = (e, a) => {
      for (var n in a)
        t.o(a, n) &&
          !t.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (t.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (t.g = (() => {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = [];
      t.O = (a, n, i, d) => {
        if (n) {
          d = d || 0;
          for (var l = e.length; l > 0 && e[l - 1][2] > d; l--) e[l] = e[l - 1];
          e[l] = [n, i, d];
          return;
        }
        for (var o = 1 / 0, l = 0; l < e.length; l++) {
          for (var [n, i, d] = e[l], c = !0, r = 0; r < n.length; r++)
            (!1 & d || o >= d) && Object.keys(t.O).every((e) => t.O[e](n[r]))
              ? n.splice(r--, 1)
              : ((c = !1), d < o && (o = d));
          if (c) {
            e.splice(l--, 1);
            var u = i();
            void 0 !== u && (a = u);
          }
        }
        return a;
      };
    })(),
    (t.rv = () => "1.3.9"),
    (() => {
      var e = { 806: 0 };
      t.O.j = (a) => 0 === e[a];
      var a = (a, n) => {
          var i,
            d,
            [l, o, c] = n,
            r = 0;
          if (l.some((a) => 0 !== e[a])) {
            for (i in o) t.o(o, i) && (t.m[i] = o[i]);
            if (c) var u = c(t);
          }
          for (a && a(n); r < l.length; r++)
            (d = l[r]), t.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return t.O(u);
        },
        n = (self.webpackChunk = self.webpackChunk || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })(),
    (t.ruid = "bundler=rspack@1.3.9");
  var n = t.O(void 0, ["87"], function () {
    return t(8466);
  });
  n = t.O(n);
})();
