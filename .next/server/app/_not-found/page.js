(() => {
  var e = {};
  (e.id = 409),
    (e.ids = [409]),
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
      2766: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => p,
            originalPathname: () => c,
            pages: () => d,
            routeModule: () => f,
            tree: () => u,
          }),
          r(3297),
          r(3035),
          r(9863);
        var s = r(8203),
          n = r(3617),
          o = r(8191),
          a = r.n(o),
          i = r(1905),
          l = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => i[e]);
        r.d(t, l);
        let u = [
            "",
            {
              children: [
                "/_not-found",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.t.bind(r, 3035, 23)),
                        "next/dist/client/components/not-found-error",
                      ],
                    },
                  ],
                },
                {},
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
            },
          ],
          d = [],
          c = "/_not-found/page",
          p = { require: r, loadChunk: () => Promise.resolve() },
          f = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/_not-found/page",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: u },
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
      2776: (e, t, r) => {
        "use strict";
        r.d(t, { _: () => d, Q: () => c });
        var s = r(7953),
          n = r(5130),
          o = r(1436),
          a = r(5806),
          i = r(7201);
        let l = () => {
            let e = i.Z.get("Authorization");
            if (!e) return null;
            try {
              return (0, a.o)(e);
            } catch (e) {
              return (
                console.error("Erreur lors du d\xe9codage du token:", e), null
              );
            }
          },
          u = (0, n.createContext)(void 0),
          d = ({ children: e }) => {
            let [t, r] = (0, n.useState)(null),
              [a, i] = (0, n.useState)(null),
              [d, c] = (0, n.useState)(null),
              [p, f] = (0, n.useState)(null),
              [h, x] = (0, n.useState)(null),
              [_, b] = (0, n.useState)(null),
              [m, g] = (0, n.useState)(null),
              [v, P] = (0, n.useState)(null),
              [j, y] = (0, n.useState)(!1),
              [q, w] = (0, n.useState)(""),
              [S, E] = (0, n.useState)(null),
              [O, k] = (0, n.useState)(null);
            return (
              (0, n.useEffect)(() => {
                let e = l();
                e && (E(e), w(e.role));
              }, []),
              (0, n.useEffect)(() => {
                (async () => {
                  try {
                    let e = await o.Z.get(
                      "https://club-ia-imsp-backend.onrender.com",
                      { withCredentials: !0 },
                    );
                    r(e.data.data?.length);
                    let t = await o.Z.get(
                      "https://club-ia-imsp-backend.onrender.com/articles/project",
                      { withCredentials: !0 },
                    );
                    g(t.data.data), c(t.data.data.length);
                    let s = await o.Z.get(
                      "https://club-ia-imsp-backend.onrender.com/articles/article",
                      { withCredentials: !0 },
                    );
                    b(s.data.data), f(s.data.data.length);
                    let n = await o.Z.get(
                      "https://club-ia-imsp-backend.onrender.com/articles/medias",
                      { withCredentials: !0 },
                    );
                    if ((x(n.data.data), "admin" == q)) {
                      let e = await o.Z.get(
                        "https://club-ia-imsp-backend.onrender.com/editor",
                        { withCredentials: !0 },
                      );
                      i(e.data?.data);
                    }
                  } catch (e) {}
                })();
              }, [m]),
              s.jsx(u.Provider, {
                value: {
                  totalSubscriber: t,
                  totalProjects: d,
                  totalArticles: p,
                  totalMedias: h,
                  allEditor: a,
                  articles: _,
                  projects: m,
                  data: v,
                  setData: P,
                  isAllowed: j,
                  setIsAllowed: y,
                  role: q,
                  setRole: w,
                  token: S,
                  setToken: E,
                  valueDecoded: O,
                  setValueDecoded: k,
                },
                children: e,
              })
            );
          },
          c = () => {
            let e = (0, n.useContext)(u);
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
        var n = r(5130);
        let o = () =>
          s.jsx("div", {
            className:
              "flex h-screen items-center justify-center bg-white dark:bg-black",
            children: s.jsx("div", {
              className:
                "h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent",
            }),
          });
        var a = r(2776),
          i = r(5974);
        function l({ children: e }) {
          let [t, r] = (0, n.useState)(!1),
            [l, u] = (0, n.useState)(!0);
          return s.jsx("html", {
            lang: "en",
            children: (0, s.jsxs)("body", {
              suppressHydrationWarning: !0,
              children: [
                s.jsx("div", {
                  children: s.jsx(i.Ix, { position: "top-right" }),
                }),
                s.jsx("div", {
                  className: "dark:bg-boxdark-2 dark:text-bodydark",
                  children: s.jsx(a._, { children: l ? s.jsx(o, {}) : e }),
                }),
              ],
            }),
          });
        }
      },
      2044: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            isNotFoundError: function () {
              return n;
            },
            notFound: function () {
              return s;
            },
          });
        let r = "NEXT_NOT_FOUND";
        function s() {
          let e = Error(r);
          throw ((e.digest = r), e);
        }
        function n(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "digest" in e &&
            e.digest === r
          );
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      3297: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            PARALLEL_ROUTE_DEFAULT_PATH: function () {
              return n;
            },
            default: function () {
              return o;
            },
          });
        let s = r(2044),
          n = "next/dist/client/components/parallel-route-default.js";
        function o() {
          (0, s.notFound)();
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      9863: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        let s = (0, r(497).createProxy)(
          String.raw`/root/club_ia_imsp_frontend/src/app/layout.tsx#default`,
        );
      },
      5125: () => {},
      511: () => {},
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [639, 610], () => r(2766));
  module.exports = s;
})();
