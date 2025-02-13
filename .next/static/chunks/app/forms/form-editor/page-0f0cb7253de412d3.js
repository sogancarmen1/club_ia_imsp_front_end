(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [734],
  {
    6462: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 5810));
    },
    3324: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = r(5847),
        n = {
          cm: !0,
          mm: !0,
          in: !0,
          px: !0,
          pt: !0,
          pc: !0,
          em: !0,
          ex: !0,
          ch: !0,
          rem: !0,
          vw: !0,
          vh: !0,
          vmin: !0,
          vmax: !0,
          "%": !0,
        };
      function s(e) {
        var t = (function (e) {
          if ("number" == typeof e) return { value: e, unit: "px" };
          var t,
            r = (e.match(/^[0-9.]*/) || "").toString();
          t = r.includes(".") ? parseFloat(r) : parseInt(r, 10);
          var a = (e.match(/[^0-9]*$/) || "").toString();
          return n[a]
            ? { value: t, unit: a }
            : (console.warn(
                "React Spinners: "
                  .concat(e, " is not a valid css value. Defaulting to ")
                  .concat(t, "px."),
              ),
              { value: t, unit: "px" });
        })(e);
        return "".concat(t.value).concat(t.unit);
      }
      var i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, r = 1, a = arguments.length; r < a; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        o = function (e, t) {
          var r = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (r[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var n = 0, a = Object.getOwnPropertySymbols(e);
              n < a.length;
              n++
            )
              0 > t.indexOf(a[n]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
                (r[a[n]] = e[a[n]]);
          return r;
        },
        l = (function (e, t, r) {
          var a = "react-spinners-".concat(e, "-").concat(r);
          if ("undefined" == typeof window || !window.document) return a;
          var n = document.createElement("style");
          document.head.appendChild(n);
          var s = n.sheet,
            i = "\n    @keyframes "
              .concat(a, " {\n      ")
              .concat(t, "\n    }\n  ");
          return s && s.insertRule(i, 0), a;
        })(
          "BeatLoader",
          "50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}",
          "beat",
        ),
        c = function (e) {
          var t = e.loading,
            r = e.color,
            n = void 0 === r ? "#000000" : r,
            c = e.speedMultiplier,
            d = void 0 === c ? 1 : c,
            u = e.cssOverride,
            m = e.size,
            p = void 0 === m ? 15 : m,
            f = e.margin,
            h = void 0 === f ? 2 : f,
            b = o(e, [
              "loading",
              "color",
              "speedMultiplier",
              "cssOverride",
              "size",
              "margin",
            ]),
            x = i({ display: "inherit" }, void 0 === u ? {} : u),
            v = function (e) {
              return {
                display: "inline-block",
                backgroundColor: n,
                width: s(p),
                height: s(p),
                margin: s(h),
                borderRadius: "100%",
                animation: ""
                  .concat(l, " ")
                  .concat(0.7 / d, "s ")
                  .concat(
                    e % 2 ? "0s" : "".concat(0.35 / d, "s"),
                    " infinite linear",
                  ),
                animationFillMode: "both",
              };
            };
          return void 0 === t || t
            ? a.createElement(
                "span",
                i({ style: x }, b),
                a.createElement("span", { style: v(1) }),
                a.createElement("span", { style: v(2) }),
                a.createElement("span", { style: v(3) }),
              )
            : null;
        };
    },
    5810: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return p;
          },
        });
      var a = r(7752),
        n = r(5847),
        s = r(5900),
        i = r(7204),
        o = r(8250),
        l = r(8948),
        c = r(3324),
        d = () => {
          let [e, t] = (0, n.useState)(""),
            [r, s] = (0, n.useState)(!1),
            [d, u] = (0, n.useState)(!0),
            [m, p] = (0, n.useState)(!0);
          (0, n.useEffect)(() => {
            setTimeout(() => p(!1), 1e3);
          }, []);
          let f = async (r) => {
            r.preventDefault();
            try {
              s(!0), u(!1);
              let r = await o.Z.post(
                "https://club-ia-imsp-backend.onrender.com",
                { email: e },
                { withCredentials: !0 },
              );
              t(""),
                r.data.sucess && (s(!1), u(!0)),
                l.Am.success(r.data.message);
            } catch (e) {
              s(!1), u(!0), l.Am.error(e.response.data.message);
            }
          };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(i.Z, { pageName: "Ajouter un \xe9diteur" }),
              (0, a.jsx)("form", {
                onSubmit: f,
                children: (0, a.jsx)("div", {
                  className: "",
                  children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-9",
                    children: (0, a.jsxs)("div", {
                      className:
                        "rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "border-b border-stroke px-6.5 py-4 dark:border-strokedark",
                          children: (0, a.jsx)("h3", {
                            className: "font-medium text-black dark:text-white",
                            children: "Champ",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-5.5 p-6.5",
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("label", {
                                  className:
                                    "mb-3 block text-sm font-medium text-black dark:text-white",
                                  children: "Email",
                                }),
                                (0, a.jsx)("input", {
                                  type: "email",
                                  value: e,
                                  onChange: (e) => {
                                    t(e.target.value);
                                  },
                                  placeholder: "Email de l'\xe9diteur",
                                  required: !0,
                                  className:
                                    "w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "mb-5",
                              children: [
                                r &&
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90",
                                    children: (0, a.jsx)(c.Z, {
                                      color: "white",
                                      className: "text-center",
                                    }),
                                  }),
                                d &&
                                  (0, a.jsx)("input", {
                                    type: "submit",
                                    value: "Ajouter",
                                    className:
                                      "w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90",
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        u = r(6796),
        m = r(2323),
        p = () => {
          let { token: e } = (0, m.Q)();
          return (
            (0, n.useEffect)(() => {
              e || (0, u.redirect)("/auth/signin");
            }, [e]),
            (0, a.jsx)(s.default, { children: (0, a.jsx)(d, {}) })
          );
        };
    },
    7204: function (e, t, r) {
      "use strict";
      var a = r(7752),
        n = r(2708);
      t.Z = (e) => {
        let { pageName: t } = e;
        return (0, a.jsxs)("div", {
          className:
            "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
          children: [
            (0, a.jsx)("h2", {
              className:
                "text-title-md2 font-semibold text-black dark:text-white",
              children: t,
            }),
            (0, a.jsx)("nav", {
              children: (0, a.jsxs)("ol", {
                className: "flex items-center gap-2",
                children: [
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(n.default, {
                      className: "font-medium",
                      href: "/",
                      children: "Dashboard /",
                    }),
                  }),
                  (0, a.jsx)("li", {
                    className: "font-medium text-primary",
                    children: t,
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [250, 570, 948, 900, 42, 516, 744], function () {
      return e((e.s = 6462));
    }),
      (_N_E = e.O());
  },
]);
