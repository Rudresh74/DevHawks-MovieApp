"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (false) {}\nconst uri = \"mongodb+srv://rj0jasani:Admin567@cluster0.fthbhla.mongodb.net/\";\nconst options = {};\nlet client;\nlet clientPromise;\nclient = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\nclientPromise = client.connect();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL21vbmdvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0dBQWtHO0FBQzVEO0FBRXRDLElBQUksS0FBb0MsRUFBRSxFQUV6QztBQUVELE1BQU1LLE1BQWFKLGdFQUFtQztBQUN0RCxNQUFNSyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKRCxTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztBQUM5QkUsZ0JBQWdCRCxPQUFPRSxPQUFPO0FBRTlCLGlFQUFlRCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpY2tub3Rlcy8uL3NyYy9saWIvbW9uZ29kYi50cz81M2MyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpO1xufVxuXG5jb25zdCB1cmk6c3RyaW5nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkhO1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+O1xuXG5jbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbmNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT0RCX1VSSSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./src/lib/mongodb.ts\");\n\n\n\n\nconst db = \"Devhawks\";\nconst authOptions = {\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        databaseName: db,\n        collections: {\n            sessions: \"sessions\",\n            users: \"users\",\n            verificationRequests: \"verificationRequests\"\n        }\n    }),\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    secret: process.env.JWT_SECRET,\n    pages: {\n        signIn: \"/auth/signin\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()(req, res, authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7QUFDa0I7QUFDRztBQUNYO0FBRWhELE1BQU1JLEtBQUtDLFVBQXVDO0FBRTNDLE1BQU1HLGNBQWM7SUFDekJDLFNBQVNQLDBFQUFjQSxDQUFDQyxvREFBYUEsRUFBRTtRQUNyQ08sY0FBY047UUFDZE8sYUFBYTtZQUNYQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsc0JBQXNCO1FBQ3hCO0lBQ0Y7SUFDQUMsV0FBVztRQUNUZCxpRUFBY0EsQ0FBQztZQUNiZSxVQUFVWCxRQUFRQyxHQUFHLENBQUNXLGdCQUFnQjtZQUN0Q0MsY0FBY2IsUUFBUUMsR0FBRyxDQUFDYSxvQkFBb0I7UUFDaEQ7S0FDRDtJQUNEQyxRQUFRZixRQUFRQyxHQUFHLENBQUNlLFVBQVU7SUFDOUJDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBRTtBQUVGLGlFQUFlLENBQUNDLEtBQUtDLE1BQVF6QixxREFBUUEsQ0FBQ3dCLEtBQUtDLEtBQUtqQixZQUFXLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGlja25vdGVzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NzhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoL25leHQnO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvbW9uZ29kYi1hZGFwdGVyXCJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiXG5cbmNvbnN0IGRiID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9EQl9OQU1FO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UsIHtcbiAgICBkYXRhYmFzZU5hbWU6IGRiLFxuICAgIGNvbGxlY3Rpb25zOiB7XG4gICAgICBzZXNzaW9uczogXCJzZXNzaW9uc1wiLFxuICAgICAgdXNlcnM6IFwidXNlcnNcIixcbiAgICAgIHZlcmlmaWNhdGlvblJlcXVlc3RzOiBcInZlcmlmaWNhdGlvblJlcXVlc3RzXCIsXG4gICAgfSxcbiAgfSksXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9hdXRoL3NpZ25pbicsXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIGF1dGhPcHRpb25zKTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsImRiIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01PTkdPREJfREJfTkFNRSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsImRhdGFiYXNlTmFtZSIsImNvbGxlY3Rpb25zIiwic2Vzc2lvbnMiLCJ1c2VycyIsInZlcmlmaWNhdGlvblJlcXVlc3RzIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZWNyZXQiLCJKV1RfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();