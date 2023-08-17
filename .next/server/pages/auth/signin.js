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
exports.id = "pages/auth/signin";
exports.ids = ["pages/auth/signin"];
exports.modules = {

/***/ "./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (false) {}\nconst uri = \"mongodb+srv://rj0jasani:Admin567@cluster0.fthbhla.mongodb.net/\";\nconst options = {};\nlet client;\nlet clientPromise;\nclient = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\nclientPromise = client.connect();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL21vbmdvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0dBQWtHO0FBQzVEO0FBRXRDLElBQUksS0FBb0MsRUFBRSxFQUV6QztBQUVELE1BQU1LLE1BQWFKLGdFQUFtQztBQUN0RCxNQUFNSyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKRCxTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztBQUM5QkUsZ0JBQWdCRCxPQUFPRSxPQUFPO0FBRTlCLGlFQUFlRCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpY2tub3Rlcy8uL3NyYy9saWIvbW9uZ29kYi50cz81M2MyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpO1xufVxuXG5jb25zdCB1cmk6c3RyaW5nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkhO1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+O1xuXG5jbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbmNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT0RCX1VSSSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/mongodb.ts\n");

/***/ }),

/***/ "./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/mongodb */ \"./src/lib/mongodb.ts\");\n\n\n\n\nconst db = \"Devhawks\";\nconst authOptions = {\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        databaseName: db,\n        collections: {\n            sessions: \"sessions\",\n            users: \"users\",\n            verificationRequests: \"verificationRequests\"\n        }\n    }),\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    secret: process.env.JWT_SECRET,\n    pages: {\n        signIn: \"/auth/signin\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()(req, res, authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7QUFDa0I7QUFDRztBQUNYO0FBRWhELE1BQU1JLEtBQUtDLFVBQXVDO0FBRTNDLE1BQU1HLGNBQWM7SUFDekJDLFNBQVNQLDBFQUFjQSxDQUFDQyxvREFBYUEsRUFBRTtRQUNyQ08sY0FBY047UUFDZE8sYUFBYTtZQUNYQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsc0JBQXNCO1FBQ3hCO0lBQ0Y7SUFDQUMsV0FBVztRQUNUZCxpRUFBY0EsQ0FBQztZQUNiZSxVQUFVWCxRQUFRQyxHQUFHLENBQUNXLGdCQUFnQjtZQUN0Q0MsY0FBY2IsUUFBUUMsR0FBRyxDQUFDYSxvQkFBb0I7UUFDaEQ7S0FDRDtJQUNEQyxRQUFRZixRQUFRQyxHQUFHLENBQUNlLFVBQVU7SUFDOUJDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBRTtBQUVGLGlFQUFlLENBQUNDLEtBQUtDLE1BQVF6QixxREFBUUEsQ0FBQ3dCLEtBQUtDLEtBQUtqQixZQUFXLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGlja25vdGVzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NzhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoL25leHQnO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvbW9uZ29kYi1hZGFwdGVyXCJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiXG5cbmNvbnN0IGRiID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9EQl9OQU1FO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UsIHtcbiAgICBkYXRhYmFzZU5hbWU6IGRiLFxuICAgIGNvbGxlY3Rpb25zOiB7XG4gICAgICBzZXNzaW9uczogXCJzZXNzaW9uc1wiLFxuICAgICAgdXNlcnM6IFwidXNlcnNcIixcbiAgICAgIHZlcmlmaWNhdGlvblJlcXVlc3RzOiBcInZlcmlmaWNhdGlvblJlcXVlc3RzXCIsXG4gICAgfSxcbiAgfSksXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9hdXRoL3NpZ25pbicsXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIGF1dGhPcHRpb25zKTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsImRiIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01PTkdPREJfREJfTkFNRSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsImRhdGFiYXNlTmFtZSIsImNvbGxlY3Rpb25zIiwic2Vzc2lvbnMiLCJ1c2VycyIsInZlcmlmaWNhdGlvblJlcXVlc3RzIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZWNyZXQiLCJKV1RfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "./src/pages/auth/signin.tsx":
/*!***********************************!*\
  !*** ./src/pages/auth/signin.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/auth/[...nextauth] */ \"./src/pages/api/auth/[...nextauth].js\");\n\n\n\n\nfunction SignIn({ providers  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen flex flex-col items-center pt-72\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-6 sm:px-0 sm:w-1/3 w-5/6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id),\n                        type: \"button\",\n                        className: \"text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"mr-2 -ml-1 w-4 h-4\",\n                                \"aria-hidden\": \"true\",\n                                focusable: \"false\",\n                                \"data-prefix\": \"fab\",\n                                \"data-icon\": \"google\",\n                                role: \"img\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                viewBox: \"0 0 488 512\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    fill: \"currentColor\",\n                                    d: \"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rudreshjasani/Desktop/sem 4/web2/react-project-devhawks/src/pages/auth/signin.tsx\",\n                                    lineNumber: 12,\n                                    columnNumber: 506\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rudreshjasani/Desktop/sem 4/web2/react-project-devhawks/src/pages/auth/signin.tsx\",\n                                lineNumber: 12,\n                                columnNumber: 328\n                            }, this),\n                            \"Sign in with Google\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/rudreshjasani/Desktop/sem 4/web2/react-project-devhawks/src/pages/auth/signin.tsx\",\n                                lineNumber: 12,\n                                columnNumber: 816\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rudreshjasani/Desktop/sem 4/web2/react-project-devhawks/src/pages/auth/signin.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rudreshjasani/Desktop/sem 4/web2/react-project-devhawks/src/pages/auth/signin.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this)\n            }, provider.name, false, {\n                fileName: \"/Users/rudreshjasani/Desktop/sem 4/web2/react-project-devhawks/src/pages/auth/signin.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this))\n    }, void 0, false);\n}\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(context.req, context.res, _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (session) {\n        return {\n            redirect: {\n                destination: \"/\"\n            }\n        };\n    }\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers: providers ?? []\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aC9zaWduaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDTDtBQUNPO0FBRXpDLFNBQVNJLE9BQU8sRUFBRUMsVUFBUyxFQUEwRCxFQUFFO0lBQ3BHLHFCQUNFO2tCQUNHQyxPQUFPQyxNQUFNLENBQUNGLFdBQVdHLEdBQUcsQ0FBQyxDQUFDQyx5QkFDN0IsOERBQUNDO2dCQUF3QkMsV0FBVTswQkFDakMsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBT0MsU0FBUyxJQUFNWix1REFBTUEsQ0FBQ1EsU0FBU0ssRUFBRTt3QkFBR0MsTUFBSzt3QkFBU0osV0FBVTs7MENBQXVQLDhEQUFDSztnQ0FBSUwsV0FBVTtnQ0FBcUJNLGVBQVk7Z0NBQU9DLFdBQVU7Z0NBQVFDLGVBQVk7Z0NBQU1DLGFBQVU7Z0NBQVNDLE1BQUs7Z0NBQU1DLE9BQU07Z0NBQTZCQyxTQUFROzBDQUFjLDRFQUFDQztvQ0FBS0MsTUFBSztvQ0FBZUMsR0FBRTs7Ozs7Ozs7Ozs7NEJBQXVROzBDQUFtQiw4REFBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7O2VBRjl4QkQsU0FBU2tCLElBQUk7Ozs7OztBQVEvQixDQUFDO0FBRU0sZUFBZUMsbUJBQW1CQyxPQUFrQyxFQUFFO0lBQzNFLE1BQU1DLFVBQVUsTUFBTTVCLGdFQUFnQkEsQ0FBQzJCLFFBQVFFLEdBQUcsRUFBRUYsUUFBUUcsR0FBRyxFQUFFN0IsNERBQVdBO0lBQzVFLElBQUkyQixTQUFTO1FBQ1gsT0FBTztZQUFFRyxVQUFVO2dCQUFFQyxhQUFhO1lBQUk7UUFBRTtJQUMxQyxDQUFDO0lBRUQsTUFBTTdCLFlBQVksTUFBTUwsNkRBQVlBO0lBRXBDLE9BQU87UUFDTG1DLE9BQU87WUFBRTlCLFdBQVdBLGFBQWEsRUFBRTtRQUFDO0lBQ3RDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWNrbm90ZXMvLi9zcmMvcGFnZXMvYXV0aC9zaWduaW4udHN4PzdiN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0LCBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0UHJvdmlkZXJzLCBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL25leHRcIlxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oeyBwcm92aWRlcnMgfTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcikgPT4gKFxuICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0gY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHQtNzJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgc206cHgtMCBzbTp3LTEvMyB3LTUvNlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4ocHJvdmlkZXIuaWQpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LWZ1bGwgIGJnLVsjNDI4NUY0XSBob3ZlcjpiZy1bIzQyODVGNF0vOTAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLVsjNDI4NUY0XS81MCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtbWQgcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBkYXJrOmZvY3VzOnJpbmctWyM0Mjg1RjRdLzU1IG1yLTIgbWItMlwiPjxzdmcgY2xhc3NOYW1lPVwibXItMiAtbWwtMSB3LTQgaC00XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhYlwiIGRhdGEtaWNvbj1cImdvb2dsZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0ODggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDg4IDI2MS44QzQ4OCA0MDMuMyAzOTEuMSA1MDQgMjQ4IDUwNCAxMTAuOCA1MDQgMCAzOTMuMiAwIDI1NlMxMTAuOCA4IDI0OCA4YzY2LjggMCAxMjMgMjQuNSAxNjYuMyA2NC45bC02Ny41IDY0LjlDMjU4LjUgNTIuNiA5NC4zIDExNi42IDk0LjMgMjU2YzAgODYuNSA2OS4xIDE1Ni42IDE1My43IDE1Ni42IDk4LjIgMCAxMzUtNzAuNCAxNDAuOC0xMDYuOUgyNDh2LTg1LjNoMjM2LjFjMi4zIDEyLjcgMy45IDI0LjkgMy45IDQxLjR6XCI+PC9wYXRoPjwvc3ZnPlNpZ24gaW4gd2l0aCBHb29nbGU8ZGl2PjwvZGl2PjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihjb250ZXh0LnJlcSwgY29udGV4dC5yZXMsIGF1dGhPcHRpb25zKTtcbiAgaWYgKHNlc3Npb24pIHtcbiAgICByZXR1cm4geyByZWRpcmVjdDogeyBkZXN0aW5hdGlvbjogXCIvXCIgfSB9O1xuICB9XG5cbiAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwcm92aWRlcnM6IHByb3ZpZGVycyA/PyBbXSB9LFxuICB9XG59Il0sIm5hbWVzIjpbImdldFByb3ZpZGVycyIsInNpZ25JbiIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIlNpZ25JbiIsInByb3ZpZGVycyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImlkIiwidHlwZSIsInN2ZyIsImFyaWEtaGlkZGVuIiwiZm9jdXNhYmxlIiwiZGF0YS1wcmVmaXgiLCJkYXRhLWljb24iLCJyb2xlIiwieG1sbnMiLCJ2aWV3Qm94IiwicGF0aCIsImZpbGwiLCJkIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzZXNzaW9uIiwicmVxIiwicmVzIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/auth/signin.tsx\n");

/***/ }),

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

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/auth/signin.tsx"));
module.exports = __webpack_exports__;

})();