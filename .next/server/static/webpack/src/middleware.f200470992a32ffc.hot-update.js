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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/.pnpm/next@14.2.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(req) {\n    const token = req.cookies.get(\"Authorization\")?.value;\n    if (!token) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/auth/signin\", req.url));\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/admin/:path*\",\n        \"/forms/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRXBDLFNBQVNDLFdBQVdDLEdBQVE7SUFDakMsTUFBTUMsUUFBUUQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCQztJQUVoRCxJQUFJLENBQUNILE9BQU8sT0FBT0gscURBQVlBLENBQUNPLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLGdCQUFnQk4sSUFBSU8sR0FBRztJQUV4RSxPQUFPVCxxREFBWUEsQ0FBQ1UsSUFBSTtBQUMxQjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUFpQjtLQUFnQjtBQUM3QyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4KSB7XG4gIGNvbnN0IHRva2VuID0gcmVxLmNvb2tpZXMuZ2V0KFwiQXV0aG9yaXphdGlvblwiKT8udmFsdWU7XG5cbiAgaWYgKCF0b2tlbikgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL2F1dGgvc2lnbmluXCIsIHJlcS51cmwpKTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogW1wiL2FkbWluLzpwYXRoKlwiLCBcIi9mb3Jtcy86cGF0aCpcIl0sXG59O1xuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});