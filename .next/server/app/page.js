(() => {
  var e = {};
  (e.id = 931),
    (e.ids = [931]),
    (e.modules = {
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      7790: (e) => {
        "use strict";
        e.exports = require("assert");
      },
      7702: (e) => {
        "use strict";
        e.exports = require("events");
      },
      2048: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      2615: (e) => {
        "use strict";
        e.exports = require("http");
      },
      5240: (e) => {
        "use strict";
        e.exports = require("https");
      },
      9801: (e) => {
        "use strict";
        e.exports = require("os");
      },
      5315: (e) => {
        "use strict";
        e.exports = require("path");
      },
      6162: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      4175: (e) => {
        "use strict";
        e.exports = require("tty");
      },
      7360: (e) => {
        "use strict";
        e.exports = require("url");
      },
      1764: (e) => {
        "use strict";
        e.exports = require("util");
      },
      1568: (e) => {
        "use strict";
        e.exports = require("zlib");
      },
      9686: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => p,
            originalPathname: () => c,
            pages: () => u,
            routeModule: () => h,
            tree: () => d,
          }),
          r(8694),
          r(9863),
          r(3035);
        var s = r(8203),
          a = r(3617),
          i = r(8191),
          n = r.n(i),
          o = r(1905),
          l = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => o[e]);
        r.d(t, l);
        let d = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(r.bind(r, 8694)),
                    "/root/club_ia_imsp_frontend/src/app/page.tsx",
                  ],
                  metadata: {
                    icon: [
                      async (e) =>
                        (await Promise.resolve().then(r.bind(r, 807))).default(
                          e,
                        ),
                    ],
                    apple: [],
                    openGraph: [],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 9863)),
                "/root/club_ia_imsp_frontend/src/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 3035, 23)),
                "next/dist/client/components/not-found-error",
              ],
              metadata: {
                icon: [
                  async (e) =>
                    (await Promise.resolve().then(r.bind(r, 807))).default(e),
                ],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          u = ["/root/club_ia_imsp_frontend/src/app/page.tsx"],
          c = "/page",
          p = { require: r, loadChunk: () => Promise.resolve() },
          h = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      4857: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 92, 23)),
          Promise.resolve().then(r.t.bind(r, 7800, 23)),
          Promise.resolve().then(r.t.bind(r, 4830, 23)),
          Promise.resolve().then(r.t.bind(r, 8341, 23)),
          Promise.resolve().then(r.t.bind(r, 4114, 23)),
          Promise.resolve().then(r.t.bind(r, 4152, 23));
      },
      2165: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5375));
      },
      3577: () => {},
      2776: (e, t, r) => {
        "use strict";
        r.d(t, { _: () => u, Q: () => c });
        var s = r(7953),
          a = r(5130),
          i = r(1436),
          n = r(5806),
          o = r(7201);
        let l = () => {
            let e = o.Z.get("Authorization");
            if (!e) return null;
            try {
              return (0, n.o)(e);
            } catch (e) {
              return (
                console.error("Erreur lors du d\xe9codage du token:", e), null
              );
            }
          },
          d = (0, a.createContext)(void 0),
          u = ({ children: e }) => {
            let [t, r] = (0, a.useState)(null),
              [n, o] = (0, a.useState)(null),
              [u, c] = (0, a.useState)(null),
              [p, h] = (0, a.useState)(null),
              [x, m] = (0, a.useState)(null),
              [b, f] = (0, a.useState)(null),
              [g, v] = (0, a.useState)(null),
              [_, P] = (0, a.useState)(null),
              [j, w] = (0, a.useState)(!1),
              [q, y] = (0, a.useState)(""),
              [S, k] = (0, a.useState)(null),
              [C, E] = (0, a.useState)(null);
            return (
              (0, a.useEffect)(() => {
                let e = l();
                e && (k(e), y(e.role));
              }, []),
              (0, a.useEffect)(() => {
                (async () => {
                  try {
                    let e = await i.Z.get(
                      "https://club-ia-imsp-backend.onrender.com",
                      { withCredentials: !0 },
                    );
                    r(e.data.data?.length);
                    let t = await i.Z.get(
                      "http://localhost:4000/articles/project",
                      { withCredentials: !0 },
                    );
                    v(t.data.data), c(t.data.data.length);
                    let s = await i.Z.get(
                      "http://localhost:4000/articles/article",
                      { withCredentials: !0 },
                    );
                    f(s.data.data), h(s.data.data.length);
                    let a = await i.Z.get(
                      "http://localhost:4000/articles/medias",
                      { withCredentials: !0 },
                    );
                    if ((m(a.data.data), "admin" == q)) {
                      let e = await i.Z.get(
                        "https://club-ia-imsp-backend.onrender.com/editor",
                        { withCredentials: !0 },
                      );
                      o(e.data?.data);
                    }
                  } catch (e) {}
                })();
              }, [g]),
              s.jsx(d.Provider, {
                value: {
                  totalSubscriber: t,
                  totalProjects: u,
                  totalArticles: p,
                  totalMedias: x,
                  allEditor: n,
                  articles: b,
                  projects: g,
                  data: _,
                  setData: P,
                  isAllowed: j,
                  setIsAllowed: w,
                  role: q,
                  setRole: y,
                  token: S,
                  setToken: k,
                  valueDecoded: C,
                  setValueDecoded: E,
                },
                children: e,
              })
            );
          },
          c = () => {
            let e = (0, a.useContext)(d);
            if (!e)
              throw Error(
                "useDashboard doit \xeatre utilis\xe9 \xe0 l'int\xe9rieur de DashboardProvider",
              );
            return e;
          };
      },
      5375: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => l });
        var s = r(7953);
        r(2526), r(3806), r(5125), r(511);
        var a = r(5130);
        let i = () =>
          s.jsx("div", {
            className:
              "flex h-screen items-center justify-center bg-white dark:bg-black",
            children: s.jsx("div", {
              className:
                "h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent",
            }),
          });
        var n = r(2776),
          o = r(5974);
        function l({ children: e }) {
          let [t, r] = (0, a.useState)(!1),
            [l, d] = (0, a.useState)(!0);
          return s.jsx("html", {
            lang: "en",
            children: (0, s.jsxs)("body", {
              suppressHydrationWarning: !0,
              children: [
                s.jsx("div", {
                  children: s.jsx(o.Ix, { position: "top-right" }),
                }),
                s.jsx("div", {
                  className: "dark:bg-boxdark-2 dark:text-bodydark",
                  children: s.jsx(n._, { children: l ? s.jsx(i, {}) : e }),
                }),
              ],
            }),
          });
        }
      },
      9863: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        let s = (0, r(497).createProxy)(
          String.raw`/root/club_ia_imsp_frontend/src/app/layout.tsx#default`,
        );
      },
      8694: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => i, metadata: () => a });
        var s = r(94);
        let a = {
          title:
            "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
          description: "This is Next.js Home for TailAdmin Dashboard Template",
        };
        function i() {
          return s.jsx(s.Fragment, {});
        }
      },
      807: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => a });
        var s = r(4366);
        let a = (e) => [
          {
            type: "image/x-icon",
            sizes: "16x16",
            url: (0, s.fillMetadataSegment)(".", e.params, "favicon.ico") + "",
          },
        ];
      },
      5125: () => {},
      511: () => {},
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [639, 610, 366], () => r(9686));
  module.exports = s;
})();
