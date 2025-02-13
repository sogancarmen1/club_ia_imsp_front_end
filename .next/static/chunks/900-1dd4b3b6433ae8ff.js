"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [900],
  {
    2323: function (e, t, l) {
      l.d(t, {
        _: function () {
          return c;
        },
        Q: function () {
          return u;
        },
      });
      var a = l(7752),
        r = l(5847),
        s = l(8250),
        n = l(3297),
        i = l(1228);
      let o = () => {
          let e = i.Z.get("Authorization");
          if (!e) return null;
          try {
            return (0, n.o)(e);
          } catch (e) {
            return (
              console.error("Erreur lors du d\xe9codage du token:", e), null
            );
          }
        },
        d = (0, r.createContext)(void 0),
        c = (e) => {
          let { children: t } = e,
            [l, n] = (0, r.useState)(null),
            [i, c] = (0, r.useState)(null),
            [u, h] = (0, r.useState)(null),
            [f, m] = (0, r.useState)(null),
            [p, x] = (0, r.useState)(null),
            [C, g] = (0, r.useState)(null),
            [w, b] = (0, r.useState)(null),
            [v, j] = (0, r.useState)(null),
            [k, y] = (0, r.useState)(!1),
            [N, H] = (0, r.useState)(""),
            [L, Z] = (0, r.useState)(null),
            [M, S] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(() => {
              let e = o();
              e && (Z(e), H(e.role));
            }, []),
            (0, r.useEffect)(() => {
              (async () => {
                try {
                  var e, t;
                  let l = await s.Z.get(
                    "https://club-ia-imsp-backend.onrender.com",
                    { withCredentials: !0 },
                  );
                  n(
                    null === (e = l.data.data) || void 0 === e
                      ? void 0
                      : e.length,
                  );
                  let a = await s.Z.get(
                    "https://club-ia-imsp-backend.onrender.com/articles/project",
                    { withCredentials: !0 },
                  );
                  b(a.data.data), h(a.data.data.length);
                  let r = await s.Z.get(
                    "https://club-ia-imsp-backend.onrender.com/articles/article",
                    { withCredentials: !0 },
                  );
                  g(r.data.data), m(r.data.data.length);
                  let i = await s.Z.get(
                    "https://club-ia-imsp-backend.onrender.com/articles/medias",
                    { withCredentials: !0 },
                  );
                  if ((x(i.data.data), "admin" == N)) {
                    let e = await s.Z.get(
                      "https://club-ia-imsp-backend.onrender.com/editor",
                      { withCredentials: !0 },
                    );
                    c(null === (t = e.data) || void 0 === t ? void 0 : t.data);
                  }
                } catch (e) {}
              })();
            }, [w]),
            (0, a.jsx)(d.Provider, {
              value: {
                totalSubscriber: l,
                totalProjects: u,
                totalArticles: f,
                totalMedias: p,
                allEditor: i,
                articles: C,
                projects: w,
                data: v,
                setData: j,
                isAllowed: k,
                setIsAllowed: y,
                role: N,
                setRole: H,
                token: L,
                setToken: Z,
                valueDecoded: M,
                setValueDecoded: S,
              },
              children: t,
            })
          );
        },
        u = () => {
          let e = (0, r.useContext)(d);
          if (!e)
            throw Error(
              "useDashboard doit \xeatre utilis\xe9 \xe0 l'int\xe9rieur de DashboardProvider",
            );
          return e;
        };
    },
    5900: function (e, t, l) {
      l.d(t, {
        default: function () {
          return g;
        },
      });
      var a = l(7752),
        r = l(5847),
        s = l(6796),
        n = l(2708),
        i = l(3343),
        o = (e) => {
          let { item: t } = e,
            l = (0, s.usePathname)();
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("ul", {
              className: "mb-5.5 mt-4 flex flex-col gap-2.5 pl-6",
              children: t.map((e, t) =>
                (0, a.jsx)(
                  "li",
                  {
                    children: (0, a.jsx)(n.default, {
                      href: e.route,
                      className:
                        "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ".concat(
                          l === e.route ? "text-white" : "",
                        ),
                      children: e.label,
                    }),
                  },
                  t,
                ),
              ),
            }),
          });
        },
        d = l(2323),
        c = (e) => {
          let { item: t, pageName: l, setPageName: r } = e,
            { setIsAllowed: i } = (0, d.Q)(),
            c = (0, s.usePathname)(),
            u = (e) =>
              e.route === c || (!!e.children && e.children.some((e) => u(e))),
            h = u(t);
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("li", {
              children: [
                (0, a.jsxs)(n.default, {
                  href: t.route,
                  onClick: () =>
                    r(l !== t.label.toLowerCase() ? t.label.toLowerCase() : ""),
                  className: "".concat(
                    h ? "bg-graydark dark:bg-meta-4" : "",
                    " group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4",
                  ),
                  children: [
                    t.icon,
                    t.label,
                    t.children &&
                      (0, a.jsx)("svg", {
                        className:
                          "absolute right-4 top-1/2 -translate-y-1/2 fill-current ".concat(
                            l === t.label.toLowerCase() && "rotate-180",
                          ),
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z",
                          fill: "",
                        }),
                      }),
                  ],
                }),
                t.children &&
                  (0, a.jsx)("div", {
                    className: "translate transform overflow-hidden ".concat(
                      l !== t.label.toLowerCase() && "hidden",
                    ),
                    children: (0, a.jsx)(o, { item: t.children }),
                  }),
              ],
            }),
          });
        },
        u = (e) => {
          let { children: t, exceptionRef: l, onClick: s, className: n } = e,
            i = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              let e = (e) => {
                (l
                  ? (i.current && i.current.contains(e.target)) ||
                    (l.current && l.current === e.target) ||
                    (l.current && l.current.contains(e.target))
                  : i.current && i.current.contains(e.target)) || s();
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [l, s]),
            (0, a.jsx)("div", {
              ref: i,
              className: "".concat(n || ""),
              children: t,
            })
          );
        },
        h = function (e, t) {
          let [l, a] = (0, r.useState)(() => {
            try {
              {
                let l = window.localStorage.getItem(e);
                return l ? JSON.parse(l) : t;
              }
            } catch (e) {
              return console.log(e), t;
            }
          });
          return (
            (0, r.useEffect)(() => {
              try {
                let t = "function" == typeof l ? l(l) : l;
                window.localStorage.setItem(e, JSON.stringify(t));
              } catch (e) {
                console.log(e);
              }
            }, [e, l]),
            [l, a]
          );
        };
      let f = [
        {
          name: "MENU",
          menuItems: [
            {
              icon: (0, a.jsxs)("svg", {
                className: "fill-current",
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("path", {
                    d: "M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z",
                    fill: "",
                  }),
                  (0, a.jsx)("path", {
                    d: "M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z",
                    fill: "",
                  }),
                  (0, a.jsx)("path", {
                    d: "M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z",
                    fill: "",
                  }),
                  (0, a.jsx)("path", {
                    d: "M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z",
                    fill: "",
                  }),
                ],
              }),
              label: "Dashboard",
              route: "/admin",
            },
            {
              icon: (0, a.jsxs)("svg", {
                className: "fill-current",
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("path", {
                    d: "M1.43425 7.5093H2.278C2.44675 7.5093 2.55925 7.3968 2.58737 7.31243L2.98112 6.32805H5.90612L6.27175 7.31243C6.328 7.48118 6.46862 7.5093 6.58112 7.5093H7.453C7.76237 7.48118 7.87487 7.25618 7.76237 7.03118L5.428 1.4343C5.37175 1.26555 5.3155 1.23743 5.14675 1.23743H3.88112C3.76862 1.23743 3.59987 1.29368 3.57175 1.4343L1.153 7.08743C1.0405 7.2843 1.20925 7.5093 1.43425 7.5093ZM4.47175 2.98118L5.3155 5.17493H3.59987L4.47175 2.98118Z",
                    fill: "",
                  }),
                  (0, a.jsx)("path", {
                    d: "M10.1249 2.5031H16.8749C17.2124 2.5031 17.5218 2.22185 17.5218 1.85623C17.5218 1.4906 17.2405 1.20935 16.8749 1.20935H10.1249C9.7874 1.20935 9.47803 1.4906 9.47803 1.85623C9.47803 2.22185 9.75928 2.5031 10.1249 2.5031Z",
                    fill: "",
                  }),
                  (0, a.jsx)("path", {
                    d: "M16.8749 6.21558H10.1249C9.7874 6.21558 9.47803 6.49683 9.47803 6.86245C9.47803 7.22808 9.75928 7.50933 10.1249 7.50933H16.8749C17.2124 7.50933 17.5218 7.22808 17.5218 6.86245C17.5218 6.49683 17.2124 6.21558 16.8749 6.21558Z",
                    fill: "",
                  }),
                  (0, a.jsx)("path", {
                    d: "M16.875 11.1656H1.77187C1.43438 11.1656 1.125 11.4469 1.125 11.8125C1.125 12.1781 1.40625 12.4594 1.77187 12.4594H16.875C17.2125 12.4594 17.5219 12.1781 17.5219 11.8125C17.5219 11.4469 17.2125 11.1656 16.875 11.1656Z",
                    fill: "",
                  }),
                  (0, a.jsx)("path", {
                    d: "M16.875 16.1156H1.77187C1.43438 16.1156 1.125 16.3969 1.125 16.7625C1.125 17.1281 1.40625 17.4094 1.77187 17.4094H16.875C17.2125 17.4094 17.5219 17.1281 17.5219 16.7625C17.5219 16.3969 17.2125 16.1156 16.875 16.1156Z",
                    fill: "white",
                  }),
                ],
              }),
              label: "Articles/projets",
              route: "#",
              children: [
                {
                  label: "Ajouter un article/projet",
                  route: "/forms/form-elements",
                },
              ],
            },
            {
              icon: (0, a.jsxs)("svg", {
                className: "fill-current",
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, a.jsx)("path", {
                    d: "M1.43425 7.5093H2.278C2.44675 7.5093 2.55925 7.3968 2.58737 7.31243L2.98112 6.32805H5.90612L6.27175 7.31243C6.328 7.48118 6.46862 7.5093 6.58112 7.5093H7.453C7.76237 7.48118 7.87487 7.25618 7.76237 7.03118L5.428 1.4343C5.37175 1.26555 5.3155 1.23743 5.14675 1.23743H3.88112C3.76862 1.23743 3.59987 1.29368 3.57175 1.4343L1.153 7.08743C1.0405 7.2843 1.20925 7.5093 1.43425 7.5093ZM4.47175 2.98118L5.3155 5.17493H3.59987L4.47175 2.98118Z",
                    fill: "",
                  }),
                  (0, a.jsx)("path", {
                    d: "M10.1249 2.5031H16.8749C17.2124 2.5031 17.5218 2.22185 17.5218 1.85623C17.5218 1.4906 17.2405 1.20935 16.8749 1.20935H10.1249C9.7874 1.20935 9.47803 1.4906 9.47803 1.85623C9.47803 2.22185 9.75928 2.5031 10.1249 2.5031Z",
                    fill: "",
                  }),
                  (0, a.jsx)("path", {
                    d: "M16.8749 6.21558H10.1249C9.7874 6.21558 9.47803 6.49683 9.47803 6.86245C9.47803 7.22808 9.75928 7.50933 10.1249 7.50933H16.8749C17.2124 7.50933 17.5218 7.22808 17.5218 6.86245C17.5218 6.49683 17.2124 6.21558 16.8749 6.21558Z",
                    fill: "",
                  }),
                  (0, a.jsx)("path", {
                    d: "M16.875 11.1656H1.77187C1.43438 11.1656 1.125 11.4469 1.125 11.8125C1.125 12.1781 1.40625 12.4594 1.77187 12.4594H16.875C17.2125 12.4594 17.5219 12.1781 17.5219 11.8125C17.5219 11.4469 17.2125 11.1656 16.875 11.1656Z",
                    fill: "",
                  }),
                  (0, a.jsx)("path", {
                    d: "M16.875 16.1156H1.77187C1.43438 16.1156 1.125 16.3969 1.125 16.7625C1.125 17.1281 1.40625 17.4094 1.77187 17.4094H16.875C17.2125 17.4094 17.5219 17.1281 17.5219 16.7625C17.5219 16.3969 17.2125 16.1156 16.875 16.1156Z",
                    fill: "white",
                  }),
                ],
              }),
              label: "Ajouter un \xe9diteur",
              route: "/forms/form-editor",
            },
          ],
        },
      ];
      var m = (e) => {
          let { sidebarOpen: t, setSidebarOpen: l } = e;
          (0, s.usePathname)();
          let [o, m] = h("selectedMenu", "dashboard"),
            { isAllowed: p, setIsAllowed: x, role: C } = (0, d.Q)(),
            [g, w] = (0, r.useState)(f);
          return (
            (0, r.useEffect)(() => {
              p &&
                w((e) => {
                  let t = [...e];
                  return (
                    t.forEach((e) => {
                      var t, l;
                      (null === (t = e.menuItems[1].children) || void 0 === t
                        ? void 0
                        : t.some(
                            (e) => "Mise \xe0 jour article/projet" === e.label,
                          )) ||
                        null === (l = e.menuItems[1].children) ||
                        void 0 === l ||
                        l.push({
                          label: "Mise \xe0 jour article/projet",
                          route: "/forms/form-layout",
                        });
                    }),
                    t
                  );
                });
            }, [p]),
            (0, a.jsx)(u, {
              onClick: () => l(!1),
              children: (0, a.jsxs)("aside", {
                className:
                  "fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ".concat(
                    t ? "translate-x-0" : "-translate-x-full",
                  ),
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5",
                    children: [
                      (0, a.jsx)(n.default, {
                        href: "/",
                        children: (0, a.jsx)(i.default, {
                          width: 176,
                          height: 32,
                          src: "/images/logo/logo.svg",
                          alt: "Logo",
                          priority: !0,
                        }),
                      }),
                      (0, a.jsx)("button", {
                        onClick: () => l(!t),
                        "aria-controls": "sidebar",
                        className: "block lg:hidden",
                        children: (0, a.jsx)("svg", {
                          className: "fill-current",
                          width: "20",
                          height: "18",
                          viewBox: "0 0 20 18",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, a.jsx)("path", {
                            d: "M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z",
                            fill: "",
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear",
                    children: (0, a.jsx)("nav", {
                      className: "mt-5 px-4 py-4 lg:mt-9 lg:px-6",
                      children: g.map((e, t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            children: [
                              (0, a.jsx)("h3", {
                                className:
                                  "mb-4 ml-4 text-sm font-semibold text-bodydark2",
                                children: e.name,
                              }),
                              (0, a.jsx)("ul", {
                                className: "mb-6 flex flex-col gap-1.5",
                                children: e.menuItems.map((e, t) =>
                                  (0, a.jsx)(
                                    c,
                                    { item: e, pageName: o, setPageName: m },
                                    t,
                                  ),
                                ),
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        p = l(8250),
        x = () => {
          let [e, t] = (0, r.useState)(!1),
            { valueDecoded: l, token: o } = (0, d.Q)(),
            [c, h] = (0, r.useState)(),
            f = (0, s.useRouter)();
          (0, r.useEffect)(() => {
            (async () => {
              try {
                if (o) {
                  let e = await p.Z.get(
                    "https://club-ia-imsp-backend.onrender.com/".concat(l._id),
                    { withCredentials: !0 },
                  );
                  h(e.data);
                }
              } catch (e) {}
            })();
          }, [o]);
          let m = async (e) => {
            try {
              await p.Z.post(
                "https://club-ia-imsp-backend.onrender.com/auth/logout",
                {},
                { withCredentials: !0 },
              ),
                f.push("/auth/signin");
            } catch (e) {}
          };
          return (0, a.jsxs)(u, {
            onClick: () => t(!1),
            className: "relative",
            children: [
              (0, a.jsxs)(n.default, {
                onClick: () => t(!e),
                className: "flex items-center gap-4",
                href: "#",
                children: [
                  (0, a.jsxs)("span", {
                    className: "hidden text-right lg:block",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "block text-sm font-medium text-black dark:text-white",
                        children: null == c ? void 0 : c.data.email,
                      }),
                      (0, a.jsx)("span", {
                        className: "block text-xs",
                        children: null == c ? void 0 : c.data.role,
                      }),
                    ],
                  }),
                  (0, a.jsx)("span", {
                    className: "h-12 w-12 rounded-full",
                    children: (0, a.jsx)(i.default, {
                      width: 112,
                      height: 112,
                      src: "/images/user/icons8-avatar-100.png",
                      style: { width: "auto", height: "auto" },
                      alt: "User",
                    }),
                  }),
                  (0, a.jsx)("svg", {
                    className: "hidden fill-current sm:block",
                    width: "12",
                    height: "8",
                    viewBox: "0 0 12 8",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z",
                      fill: "",
                    }),
                  }),
                ],
              }),
              e &&
                (0, a.jsx)("div", {
                  className:
                    "absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",
                  children: (0, a.jsxs)("button", {
                    onClick: m,
                    className:
                      "flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base",
                    children: [
                      (0, a.jsxs)("svg", {
                        className: "fill-current",
                        width: "22",
                        height: "22",
                        viewBox: "0 0 22 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, a.jsx)("path", {
                            d: "M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z",
                            fill: "",
                          }),
                          (0, a.jsx)("path", {
                            d: "M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z",
                            fill: "",
                          }),
                        ],
                      }),
                      "Log Out",
                    ],
                  }),
                }),
            ],
          });
        },
        C = (e) =>
          (0, a.jsx)("header", {
            className:
              "sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none",
            children: (0, a.jsxs)("div", {
              className:
                "flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-2 sm:gap-4 lg:hidden",
                  children: [
                    (0, a.jsx)("button", {
                      "aria-controls": "sidebar",
                      onClick: (t) => {
                        t.stopPropagation(), e.setSidebarOpen(!e.sidebarOpen);
                      },
                      className:
                        "z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden",
                      children: (0, a.jsxs)("span", {
                        className: "relative block h-5.5 w-5.5 cursor-pointer",
                        children: [
                          (0, a.jsxs)("span", {
                            className:
                              "du-block absolute right-0 h-full w-full",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ".concat(
                                    !e.sidebarOpen && "!w-full delay-300",
                                  ),
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ".concat(
                                    !e.sidebarOpen && "delay-400 !w-full",
                                  ),
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ".concat(
                                    !e.sidebarOpen && "!w-full delay-500",
                                  ),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("span", {
                            className:
                              "absolute right-0 h-full w-full rotate-45",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ".concat(
                                    !e.sidebarOpen && "!h-0 !delay-[0]",
                                  ),
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ".concat(
                                    !e.sidebarOpen && "!h-0 !delay-200",
                                  ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(n.default, {
                      className: "block flex-shrink-0 lg:hidden",
                      href: "/",
                      children: (0, a.jsx)(i.default, {
                        width: 32,
                        height: 32,
                        src: "/images/logo/logo-icon.svg",
                        alt: "Logo",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "hidden sm:block",
                  children: (0, a.jsx)("form", {
                    action: "https://formbold.com/s/unique_form_id",
                    method: "POST",
                    children: (0, a.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, a.jsx)("button", {
                          className: "absolute left-0 top-1/2 -translate-y-1/2",
                          children: (0, a.jsxs)("svg", {
                            className:
                              "fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z",
                                fill: "",
                              }),
                              (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z",
                                fill: "",
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("input", {
                          type: "text",
                          placeholder: "Type to search...",
                          className:
                            "w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3 2xsm:gap-7",
                  children: [
                    (0, a.jsx)("ul", {
                      className: "flex items-center gap-2 2xsm:gap-4",
                    }),
                    (0, a.jsx)(x, {}),
                  ],
                }),
              ],
            }),
          });
      function g(e) {
        let { children: t } = e,
          [l, s] = (0, r.useState)(!1);
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: "flex",
            children: [
              (0, a.jsx)(m, { sidebarOpen: l, setSidebarOpen: s }),
              (0, a.jsxs)("div", {
                className: "relative flex flex-1 flex-col lg:ml-72.5",
                children: [
                  (0, a.jsx)(C, { sidebarOpen: l, setSidebarOpen: s }),
                  (0, a.jsx)("main", {
                    children: (0, a.jsx)("div", {
                      className: "mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10",
                      children: t,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    1228: function (e, t, l) {
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var l = arguments[t];
          for (var a in l) e[a] = l[a];
        }
        return e;
      }
      l.d(t, {
        Z: function () {
          return r;
        },
      });
      var r = (function e(t, l) {
        function r(e, r, s) {
          if ("undefined" != typeof document) {
            "number" == typeof (s = a({}, l, s)).expires &&
              (s.expires = new Date(Date.now() + 864e5 * s.expires)),
              s.expires && (s.expires = s.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var n = "";
            for (var i in s)
              s[i] &&
                ((n += "; " + i),
                !0 !== s[i] && (n += "=" + s[i].split(";")[0]));
            return (document.cookie = e + "=" + t.write(r, e) + n);
          }
        }
        return Object.create(
          {
            set: r,
            get: function (e) {
              if ("undefined" != typeof document && (!arguments.length || e)) {
                for (
                  var l = document.cookie ? document.cookie.split("; ") : [],
                    a = {},
                    r = 0;
                  r < l.length;
                  r++
                ) {
                  var s = l[r].split("="),
                    n = s.slice(1).join("=");
                  try {
                    var i = decodeURIComponent(s[0]);
                    if (((a[i] = t.read(n, i)), e === i)) break;
                  } catch (e) {}
                }
                return e ? a[e] : a;
              }
            },
            remove: function (e, t) {
              r(e, "", a({}, t, { expires: -1 }));
            },
            withAttributes: function (t) {
              return e(this.converter, a({}, this.attributes, t));
            },
            withConverter: function (t) {
              return e(a({}, this.converter, t), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(l) },
            converter: { value: Object.freeze(t) },
          },
        );
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent,
            );
          },
        },
        { path: "/" },
      );
    },
    3297: function (e, t, l) {
      l.d(t, {
        o: function () {
          return r;
        },
      });
      class a extends Error {}
      function r(e, t) {
        let l;
        if ("string" != typeof e)
          throw new a("Invalid token specified: must be a string");
        t || (t = {});
        let r = !0 === t.header ? 0 : 1,
          s = e.split(".")[r];
        if ("string" != typeof s)
          throw new a(`Invalid token specified: missing part #${r + 1}`);
        try {
          l = (function (e) {
            let t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
              case 0:
                break;
              case 2:
                t += "==";
                break;
              case 3:
                t += "=";
                break;
              default:
                throw Error("base64 string is not of the correct length");
            }
            try {
              var l;
              return (
                (l = t),
                decodeURIComponent(
                  atob(l).replace(/(.)/g, (e, t) => {
                    let l = t.charCodeAt(0).toString(16).toUpperCase();
                    return l.length < 2 && (l = "0" + l), "%" + l;
                  }),
                )
              );
            } catch (e) {
              return atob(t);
            }
          })(s);
        } catch (e) {
          throw new a(
            `Invalid token specified: invalid base64 for part #${r + 1} (${e.message})`,
          );
        }
        try {
          return JSON.parse(l);
        } catch (e) {
          throw new a(
            `Invalid token specified: invalid json for part #${r + 1} (${e.message})`,
          );
        }
      }
      a.prototype.name = "InvalidTokenError";
    },
  },
]);
