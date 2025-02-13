(() => {
  var e = {};
  (e.id = 952),
    (e.ids = [952]),
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
      3432: (e, s, t) => {
        "use strict";
        t.r(s),
          t.d(s, {
            GlobalError: () => l.a,
            __next_app__: () => m,
            originalPathname: () => x,
            pages: () => o,
            routeModule: () => p,
            tree: () => n,
          }),
          t(6959),
          t(9863),
          t(3035);
        var r = t(8203),
          a = t(3617),
          i = t(8191),
          l = t.n(i),
          d = t(1905),
          c = {};
        for (let e in d)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (c[e] = () => d[e]);
        t.d(s, c);
        let n = [
            "",
            {
              children: [
                "tables",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 6959)),
                        "/root/club_ia_imsp_frontend/src/app/tables/page.tsx",
                      ],
                    },
                  ],
                },
                {
                  metadata: {
                    icon: [
                      async (e) =>
                        (await Promise.resolve().then(t.bind(t, 807))).default(
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
                () => Promise.resolve().then(t.bind(t, 9863)),
                "/root/club_ia_imsp_frontend/src/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(t.t.bind(t, 3035, 23)),
                "next/dist/client/components/not-found-error",
              ],
              metadata: {
                icon: [
                  async (e) =>
                    (await Promise.resolve().then(t.bind(t, 807))).default(e),
                ],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          o = ["/root/club_ia_imsp_frontend/src/app/tables/page.tsx"],
          x = "/tables/page",
          m = { require: t, loadChunk: () => Promise.resolve() },
          p = new r.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/tables/page",
              pathname: "/tables",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: n },
          });
      },
      3252: (e, s, t) => {
        Promise.resolve().then(t.t.bind(t, 1525, 23)),
          Promise.resolve().then(t.t.bind(t, 6052, 23)),
          Promise.resolve().then(t.bind(t, 953)),
          Promise.resolve().then(t.bind(t, 7120));
      },
      7120: (e, s, t) => {
        "use strict";
        t.d(s, { default: () => d });
        var r = t(7953),
          a = t(2776),
          i = t(1436),
          l = t(7201);
        let d = () => {
          let { allEditor: e, role: s } = (0, a.Q)();
          if ((l.Z.get("Authorization"), s && "admin" !== s))
            return r.jsx("p", {});
          let t = async (e) => {
            try {
              await i.Z.delete(
                `https://club-ia-imsp-backend.onrender.com/${e}`,
                { withCredentials: !0 },
              );
            } catch (e) {}
          };
          return r.jsx("div", {
            className:
              "rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1",
            children: r.jsx("div", {
              className: "max-w-full overflow-x-auto",
              children: (0, r.jsxs)("table", {
                className: "w-full table-auto",
                children: [
                  r.jsx("thead", {
                    children: (0, r.jsxs)("tr", {
                      className: "bg-gray-2 text-left dark:bg-meta-4",
                      children: [
                        r.jsx("th", {
                          className:
                            "min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11",
                          children: "Email \xe9diteurs",
                        }),
                        r.jsx("th", {
                          className:
                            "min-w-[150px] px-4 py-4 font-medium text-black dark:text-white",
                          children: "Date d'inscription",
                        }),
                        r.jsx("th", {
                          className:
                            "min-w-[120px] px-4 py-4 font-medium text-black dark:text-white",
                          children: "Etat compte",
                        }),
                        r.jsx("th", {
                          className:
                            "px-4 py-4 font-medium text-black dark:text-white",
                          children: "Actions",
                        }),
                      ],
                    }),
                  }),
                  r.jsx("tbody", {
                    children: e
                      ?.slice()
                      .reverse()
                      .map((e, s) =>
                        r.jsxs(
                          "tr",
                          {
                            children: [
                              r.jsx("td", {
                                className:
                                  "border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11",
                                children: r.jsx("h5", {
                                  className:
                                    "font-medium text-black dark:text-white",
                                  children: e.email,
                                }),
                              }),
                              r.jsx("td", {
                                className:
                                  "border-b border-[#eee] px-4 py-5 dark:border-strokedark",
                                children: r.jsx("p", {
                                  className: "text-black dark:text-white",
                                  children: e.data_inscription,
                                }),
                              }),
                              r.jsx("td", {
                                className:
                                  "border-b border-[#eee] px-4 py-5 dark:border-strokedark",
                                children: r.jsx("p", {
                                  className: `${"inactive" == e.state ? "text-red" : "text-green-500"} font-bold dark:text-white`,
                                  children:
                                    "inactive" == e.state ? "inactif" : "actif",
                                }),
                              }),
                              r.jsx("td", {
                                className:
                                  "border-b border-[#eee] px-4 py-5 dark:border-strokedark",
                                children: r.jsx("div", {
                                  className: "flex items-center space-x-3.5",
                                  children: r.jsx("button", {
                                    onClick: () => t(e.id),
                                    className: "hover:text-primary",
                                    children: r.jsxs("svg", {
                                      className: "fill-current",
                                      width: "18",
                                      height: "18",
                                      viewBox: "0 0 18 18",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: [
                                        r.jsx("path", {
                                          d: "M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z",
                                          fill: "",
                                        }),
                                        r.jsx("path", {
                                          d: "M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z",
                                          fill: "",
                                        }),
                                        r.jsx("path", {
                                          d: "M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z",
                                          fill: "",
                                        }),
                                        r.jsx("path", {
                                          d: "M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z",
                                          fill: "",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          },
                          s,
                        ),
                      ),
                  }),
                ],
              }),
            }),
          });
        };
      },
      6959: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => p, metadata: () => m });
        var r = t(94),
          a = t(9900),
          i = t(3041);
        let l = [
            {
              logo: "/images/brand/brand-01.svg",
              name: "Google",
              visitors: 3.5,
              revenues: "5,768",
              sales: 590,
              conversion: 4.8,
            },
            {
              logo: "/images/brand/brand-02.svg",
              name: "Twitter",
              visitors: 2.2,
              revenues: "4,635",
              sales: 467,
              conversion: 4.3,
            },
            {
              logo: "/images/brand/brand-03.svg",
              name: "Github",
              visitors: 2.1,
              revenues: "4,290",
              sales: 420,
              conversion: 3.7,
            },
            {
              logo: "/images/brand/brand-04.svg",
              name: "Vimeo",
              visitors: 1.5,
              revenues: "3,580",
              sales: 389,
              conversion: 2.5,
            },
            {
              logo: "/images/brand/brand-05.svg",
              name: "Facebook",
              visitors: 3.5,
              revenues: "6,768",
              sales: 390,
              conversion: 4.2,
            },
          ],
          d = () =>
            (0, r.jsxs)("div", {
              className:
                "rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1",
              children: [
                r.jsx("h4", {
                  className:
                    "mb-6 text-xl font-semibold text-black dark:text-white",
                  children: "Top Channels",
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5",
                      children: [
                        r.jsx("div", {
                          className: "p-2.5 xl:p-5",
                          children: r.jsx("h5", {
                            className:
                              "text-sm font-medium uppercase xsm:text-base",
                            children: "Source",
                          }),
                        }),
                        r.jsx("div", {
                          className: "p-2.5 text-center xl:p-5",
                          children: r.jsx("h5", {
                            className:
                              "text-sm font-medium uppercase xsm:text-base",
                            children: "Visitors",
                          }),
                        }),
                        r.jsx("div", {
                          className: "p-2.5 text-center xl:p-5",
                          children: r.jsx("h5", {
                            className:
                              "text-sm font-medium uppercase xsm:text-base",
                            children: "Revenues",
                          }),
                        }),
                        r.jsx("div", {
                          className: "hidden p-2.5 text-center sm:block xl:p-5",
                          children: r.jsx("h5", {
                            className:
                              "text-sm font-medium uppercase xsm:text-base",
                            children: "Sales",
                          }),
                        }),
                        r.jsx("div", {
                          className: "hidden p-2.5 text-center sm:block xl:p-5",
                          children: r.jsx("h5", {
                            className:
                              "text-sm font-medium uppercase xsm:text-base",
                            children: "Conversion",
                          }),
                        }),
                      ],
                    }),
                    l.map((e, s) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          className: `grid grid-cols-3 sm:grid-cols-5 ${s === l.length - 1 ? "" : "border-b border-stroke dark:border-strokedark"}`,
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center gap-3 p-2.5 xl:p-5",
                              children: [
                                r.jsx("div", {
                                  className: "flex-shrink-0",
                                  children: r.jsx(i.default, {
                                    src: e.logo,
                                    alt: "Brand",
                                    width: 48,
                                    height: 48,
                                  }),
                                }),
                                r.jsx("p", {
                                  className:
                                    "hidden text-black dark:text-white sm:block",
                                  children: e.name,
                                }),
                              ],
                            }),
                            r.jsx("div", {
                              className:
                                "flex items-center justify-center p-2.5 xl:p-5",
                              children: (0, r.jsxs)("p", {
                                className: "text-black dark:text-white",
                                children: [e.visitors, "K"],
                              }),
                            }),
                            r.jsx("div", {
                              className:
                                "flex items-center justify-center p-2.5 xl:p-5",
                              children: (0, r.jsxs)("p", {
                                className: "text-meta-3",
                                children: ["$", e.revenues],
                              }),
                            }),
                            r.jsx("div", {
                              className:
                                "hidden items-center justify-center p-2.5 sm:flex xl:p-5",
                              children: r.jsx("p", {
                                className: "text-black dark:text-white",
                                children: e.sales,
                              }),
                            }),
                            r.jsx("div", {
                              className:
                                "hidden items-center justify-center p-2.5 sm:flex xl:p-5",
                              children: (0, r.jsxs)("p", {
                                className: "text-meta-5",
                                children: [e.conversion, "%"],
                              }),
                            }),
                          ],
                        },
                        s,
                      ),
                    ),
                  ],
                }),
              ],
            }),
          c = (0, t(497).createProxy)(
            String.raw`/root/club_ia_imsp_frontend/src/components/Tables/TableThree.tsx#default`,
          ),
          n = [
            {
              image: "/images/product/product-01.png",
              name: "Apple Watch Series 7",
              category: "Electronics",
              price: 296,
              sold: 22,
              profit: 45,
            },
            {
              image: "/images/product/product-02.png",
              name: "Macbook Pro M1",
              category: "Electronics",
              price: 546,
              sold: 12,
              profit: 125,
            },
            {
              image: "/images/product/product-03.png",
              name: "Dell Inspiron 15",
              category: "Electronics",
              price: 443,
              sold: 64,
              profit: 247,
            },
            {
              image: "/images/product/product-04.png",
              name: "HP Probook 450",
              category: "Electronics",
              price: 499,
              sold: 72,
              profit: 103,
            },
          ],
          o = () =>
            (0, r.jsxs)("div", {
              className:
                "rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",
              children: [
                r.jsx("div", {
                  className: "px-4 py-6 md:px-6 xl:px-7.5",
                  children: r.jsx("h4", {
                    className:
                      "text-xl font-semibold text-black dark:text-white",
                    children: "Top Products",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5",
                  children: [
                    r.jsx("div", {
                      className: "col-span-3 flex items-center",
                      children: r.jsx("p", {
                        className: "font-medium",
                        children: "Product Name",
                      }),
                    }),
                    r.jsx("div", {
                      className: "col-span-2 hidden items-center sm:flex",
                      children: r.jsx("p", {
                        className: "font-medium",
                        children: "Category",
                      }),
                    }),
                    r.jsx("div", {
                      className: "col-span-1 flex items-center",
                      children: r.jsx("p", {
                        className: "font-medium",
                        children: "Price",
                      }),
                    }),
                    r.jsx("div", {
                      className: "col-span-1 flex items-center",
                      children: r.jsx("p", {
                        className: "font-medium",
                        children: "Sold",
                      }),
                    }),
                    r.jsx("div", {
                      className: "col-span-1 flex items-center",
                      children: r.jsx("p", {
                        className: "font-medium",
                        children: "Profit",
                      }),
                    }),
                  ],
                }),
                n.map((e, s) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className:
                        "grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5",
                      children: [
                        r.jsx("div", {
                          className: "col-span-3 flex items-center",
                          children: (0, r.jsxs)("div", {
                            className:
                              "flex flex-col gap-4 sm:flex-row sm:items-center",
                            children: [
                              r.jsx("div", {
                                className: "h-12.5 w-15 rounded-md",
                                children: r.jsx(i.default, {
                                  src: e.image,
                                  width: 60,
                                  height: 50,
                                  alt: "Product",
                                }),
                              }),
                              r.jsx("p", {
                                className: "text-sm text-black dark:text-white",
                                children: e.name,
                              }),
                            ],
                          }),
                        }),
                        r.jsx("div", {
                          className: "col-span-2 hidden items-center sm:flex",
                          children: r.jsx("p", {
                            className: "text-sm text-black dark:text-white",
                            children: e.category,
                          }),
                        }),
                        r.jsx("div", {
                          className: "col-span-1 flex items-center",
                          children: (0, r.jsxs)("p", {
                            className: "text-sm text-black dark:text-white",
                            children: ["$", e.price],
                          }),
                        }),
                        r.jsx("div", {
                          className: "col-span-1 flex items-center",
                          children: r.jsx("p", {
                            className: "text-sm text-black dark:text-white",
                            children: e.sold,
                          }),
                        }),
                        r.jsx("div", {
                          className: "col-span-1 flex items-center",
                          children: (0, r.jsxs)("p", {
                            className: "text-sm text-meta-3",
                            children: ["$", e.profit],
                          }),
                        }),
                      ],
                    },
                    s,
                  ),
                ),
              ],
            });
        var x = t(2625);
        let m = {
            title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
            description:
              "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
          },
          p = () =>
            (0, r.jsxs)(x.Z, {
              children: [
                r.jsx(a.Z, { pageName: "Tables" }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col gap-10",
                  children: [r.jsx(d, {}), r.jsx(o, {}), r.jsx(c, {})],
                }),
              ],
            });
      },
      9900: (e, s, t) => {
        "use strict";
        t.d(s, { Z: () => i });
        var r = t(94),
          a = t(4208);
        let i = ({ pageName: e }) =>
          (0, r.jsxs)("div", {
            className:
              "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
            children: [
              r.jsx("h2", {
                className:
                  "text-title-md2 font-semibold text-black dark:text-white",
                children: e,
              }),
              r.jsx("nav", {
                children: (0, r.jsxs)("ol", {
                  className: "flex items-center gap-2",
                  children: [
                    r.jsx("li", {
                      children: r.jsx(a.default, {
                        className: "font-medium",
                        href: "/",
                        children: "Dashboard /",
                      }),
                    }),
                    r.jsx("li", {
                      className: "font-medium text-primary",
                      children: e,
                    }),
                  ],
                }),
              }),
            ],
          });
      },
      2625: (e, s, t) => {
        "use strict";
        t.d(s, { Z: () => r });
        let r = (0, t(497).createProxy)(
          String.raw`/root/club_ia_imsp_frontend/src/components/Layouts/DefaultLayout.tsx#default`,
        );
      },
    });
  var s = require("../../webpack-runtime.js");
  s.C(e);
  var t = (e) => s((s.s = e)),
    r = s.X(0, [639, 610, 366, 700, 106, 522], () => t(3432));
  module.exports = r;
})();
