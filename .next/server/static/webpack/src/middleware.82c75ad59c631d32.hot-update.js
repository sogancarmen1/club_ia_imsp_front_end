"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/.pnpm/next@14.2.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(req) {\n    const token = req.cookies.get(\"Authorization\");\n    if (!token) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/auth/signin\", req.url));\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/admin/:path*\",\n        \"/forms/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRXBDLFNBQVNDLFdBQVdDLEdBQWlCO0lBQzFDLE1BQU1DLFFBQVFELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBRTlCLElBQUksQ0FBQ0YsT0FBTyxPQUFPSCxxREFBWUEsQ0FBQ00sUUFBUSxDQUFDLElBQUlDLElBQUksZ0JBQWdCTCxJQUFJTSxHQUFHO0lBRXhFLE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJO0FBQzFCO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO1FBQWlCO0tBQWdCO0FBQzdDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxOiBOZXh0UmVzcG9uc2UpIHtcbiAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcy5nZXQoXCJBdXRob3JpemF0aW9uXCIpO1xuXG4gIGlmICghdG9rZW4pIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9hdXRoL3NpZ25pblwiLCByZXEudXJsKSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFtcIi9hZG1pbi86cGF0aCpcIiwgXCIvZm9ybXMvOnBhdGgqXCJdLFxufTtcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwidG9rZW4iLCJjb29raWVzIiwiZ2V0IiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJuZXh0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});