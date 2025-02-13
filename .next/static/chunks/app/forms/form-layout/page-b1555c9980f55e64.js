(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43],
  {
    7019: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 4834));
    },
    4834: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return k;
          },
        });
      var a = t(7752),
        s = t(5847),
        l = t(5900),
        i = t(6796),
        d = t(7204),
        o = t(2323),
        n = t(8250);
      let c = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        m = function () {
          for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          return r
            .filter((e, r, t) => !!e && "" !== e.trim() && t.indexOf(e) === r)
            .join(" ")
            .trim();
        };
      var u = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let f = (0, s.forwardRef)((e, r) => {
          let {
            color: t = "currentColor",
            size: a = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: i,
            className: d = "",
            children: o,
            iconNode: n,
            ...c
          } = e;
          return (0, s.createElement)(
            "svg",
            {
              ref: r,
              ...u,
              width: a,
              height: a,
              stroke: t,
              strokeWidth: i ? (24 * Number(l)) / Number(a) : l,
              className: m("lucide", d),
              ...c,
            },
            [
              ...n.map((e) => {
                let [r, t] = e;
                return (0, s.createElement)(r, t);
              }),
              ...(Array.isArray(o) ? o : [o]),
            ],
          );
        }),
        b = ((e, r) => {
          let t = (0, s.forwardRef)((t, a) => {
            let { className: l, ...i } = t;
            return (0, s.createElement)(f, {
              ref: a,
              iconNode: r,
              className: m("lucide-".concat(c(e)), l),
              ...i,
            });
          });
          return (t.displayName = "".concat(e)), t;
        })("X", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]);
      var h = (e) => {
          let { files: r, onDelete: t } = e,
            [l, i] = (0, s.useState)(null);
          return (0, a.jsx)("div", {
            children: (0, a.jsx)("div", {
              className: "grid grid-cols-3 gap-4 p-4",
              children:
                null == r
                  ? void 0
                  : r.map((e, r) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "group relative",
                          children: [
                            (0, a.jsx)("img", {
                              src: "https://club-ia-imsp-backend.onrender.com/test-image/".concat(
                                e.files_names,
                              ),
                              alt: e.original_name,
                              className:
                                "h-32 w-full cursor-pointer rounded-lg shadow-md transition-transform duration-300 hover:scale-105",
                              onClick: () => i(e.files_names),
                            }),
                            (0, a.jsx)("button", {
                              className:
                                "absolute right-2 top-2 rounded-full bg-black/50 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100",
                              onClick: () => t(e.id),
                              children: (0, a.jsx)(b, { size: 16 }),
                            }),
                          ],
                        },
                        r,
                      ),
                    ),
            }),
          });
        },
        p = t(8948),
        x = () => {
          let { data: e } = (0, o.Q)(),
            [r, t] = (0, s.useState)(null),
            [l, i] = (0, s.useState)((null == e ? void 0 : e.files) || []);
          (0, s.useEffect)(() => {
            e && (t(e), m(e.title), f(e.contain), i(e.files || []));
          }, [e]);
          let [c, m] = (0, s.useState)(null == e ? void 0 : e.title),
            [u, f] = (0, s.useState)(null == e ? void 0 : e.contain),
            b = async (r) => {
              r.preventDefault();
              let t = new FormData();
              l &&
                Array.from(l).forEach((e) => {
                  t.append("media", e);
                }),
                c != (null == e ? void 0 : e.title) && t.append("title", c),
                t.append("contain", u);
              try {
                var a;
                let r = await n.Z.put(
                  "https://club-ia-imsp-backend.onrender.com/articles/".concat(
                    null == e ? void 0 : e.id,
                  ),
                  t,
                  {
                    withCredentials: !0,
                    headers: { "Content-Type": "multipart/form-data" },
                  },
                );
                i(
                  (null === (a = r.data.data) || void 0 === a
                    ? void 0
                    : a.files) || [],
                ),
                  p.Am.success(r.data.message);
              } catch (e) {
                p.Am.error(e.response.data.message);
              }
            },
            x = async (r) => {
              try {
                await n.Z.delete(
                  "https://club-ia-imsp-backend.onrender.com/articles/"
                    .concat(null == e ? void 0 : e.id, "/medias/")
                    .concat(r),
                  { withCredentials: !0 },
                ),
                  i((e) => e.filter((e) => e.id !== r));
              } catch (e) {}
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(d.Z, { pageName: "Mise \xe0 jour" }),
              (0, a.jsx)("form", {
                onSubmit: b,
                children: (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 gap-9 sm:grid-cols-2",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex flex-col gap-9",
                      children: (0, a.jsxs)("div", {
                        className:
                          "rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "border-b border-stroke px-6.5 py-4 dark:border-strokedark",
                            children: (0, a.jsx)("h3", {
                              className:
                                "font-medium text-black dark:text-white",
                              children: "Etape 1",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "p-6.5",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "mb-4.5",
                                children: [
                                  (0, a.jsx)("label", {
                                    className:
                                      "mb-3 block text-sm font-medium text-black dark:text-white",
                                    children: "Titre",
                                  }),
                                  (0, a.jsx)("input", {
                                    type: "text",
                                    value: c,
                                    onChange: (e) => {
                                      m(e.target.value);
                                    },
                                    className:
                                      "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mb-2",
                                children: [
                                  (0, a.jsx)("label", {
                                    className:
                                      "mb-3 block text-sm font-medium text-black dark:text-white",
                                    children: "Contenu",
                                  }),
                                  (0, a.jsx)("textarea", {
                                    rows: 6,
                                    value: u,
                                    onChange: (e) => {
                                      f(e.target.value);
                                    },
                                    placeholder: "Type your message",
                                    className:
                                      "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "flex flex-col gap-9",
                      children: (0, a.jsxs)("div", {
                        className:
                          "rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "border-b border-stroke px-6.5 py-4 dark:border-strokedark",
                            children: (0, a.jsx)("h3", {
                              className:
                                "font-medium text-black dark:text-white",
                              children: "Etape 2",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "p-6.5",
                            children: [
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("label", {
                                    className:
                                      "mb-3 block text-sm font-medium text-black dark:text-white",
                                    children:
                                      "Ajouter un ou plusieus fichiers (OPTIONNEL)",
                                  }),
                                  (0, a.jsx)("input", {
                                    type: "file",
                                    multiple: !0,
                                    onChange: (e) => {
                                      e.target.files &&
                                        e.target.files.length > 0 &&
                                        i(Array.from(e.target.files));
                                    },
                                    className:
                                      "w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "mb-5.5 mt-5 flex items-center justify-between",
                              }),
                              (0, a.jsx)("button", {
                                className:
                                  "flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90",
                                children: "Mettre \xe0 jour",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(h, { files: l, onDelete: x }),
            ],
          });
        },
        k = () => {
          let { token: e } = (0, o.Q)();
          return (
            (0, s.useEffect)(() => {
              e || (0, i.redirect)("/auth/signin");
            }, [e]),
            (0, a.jsx)(l.default, { children: (0, a.jsx)(x, {}) })
          );
        };
    },
    7204: function (e, r, t) {
      "use strict";
      var a = t(7752),
        s = t(2708);
      r.Z = (e) => {
        let { pageName: r } = e;
        return (0, a.jsxs)("div", {
          className:
            "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
          children: [
            (0, a.jsx)("h2", {
              className:
                "text-title-md2 font-semibold text-black dark:text-white",
              children: r,
            }),
            (0, a.jsx)("nav", {
              children: (0, a.jsxs)("ol", {
                className: "flex items-center gap-2",
                children: [
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(s.default, {
                      className: "font-medium",
                      href: "/",
                      children: "Dashboard /",
                    }),
                  }),
                  (0, a.jsx)("li", {
                    className: "font-medium text-primary",
                    children: r,
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
      return e((e.s = 7019));
    }),
      (_N_E = e.O());
  },
]);
