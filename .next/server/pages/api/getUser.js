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
exports.id = "pages/api/getUser";
exports.ids = ["pages/api/getUser"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (false) {}\nconst uri = \"mongodb+srv://rj0jasani:Admin567@cluster0.fthbhla.mongodb.net/\";\nconst options = {};\nlet client;\nlet clientPromise;\nclient = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\nclientPromise = client.connect();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL21vbmdvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0dBQWtHO0FBQzVEO0FBRXRDLElBQUksS0FBb0MsRUFBRSxFQUV6QztBQUVELE1BQU1LLE1BQWFKLGdFQUFtQztBQUN0RCxNQUFNSyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKRCxTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztBQUM5QkUsZ0JBQWdCRCxPQUFPRSxPQUFPO0FBRTlCLGlFQUFlRCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpY2tub3Rlcy8uL3NyYy9saWIvbW9uZ29kYi50cz81M2MyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpO1xufVxuXG5jb25zdCB1cmk6c3RyaW5nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkhO1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+O1xuXG5jbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbmNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT0RCX1VSSSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/getUser.ts":
/*!**********************************!*\
  !*** ./src/pages/api/getUser.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./src/lib/mongodb.ts\");\n\nasync function handler(req, res) {\n    try {\n        const { userEmail  } = req.body;\n        const dbName = \"Devhawks\";\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const collection = client.db(dbName).collection(\"users\");\n        const user = await collection.findOne({\n            email: userEmail\n        });\n        if (user) {\n            res.status(200).json(user);\n        } else {\n            res.status(404).json({\n                message: \"User not found\"\n            });\n        }\n    } catch (error) {\n        res.status(500).json({\n            message: \"Internal server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldFVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDOEM7QUFFL0IsZUFBZUMsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUMvRSxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxVQUFTLEVBQUUsR0FBR0YsSUFBSUcsSUFBSTtRQUU5QixNQUFNQyxTQUFTQyxVQUF1QztRQUV0RCxNQUFNRyxTQUFTLE1BQU1WLG9EQUFhQTtRQUNsQyxNQUFNVyxhQUFhRCxPQUFPRSxFQUFFLENBQUNOLFFBQVFLLFVBQVUsQ0FBQztRQUNoRCxNQUFNRSxPQUFPLE1BQU1GLFdBQVdHLE9BQU8sQ0FBQztZQUFFQyxPQUFPWDtRQUFVO1FBRXpELElBQUlTLE1BQU07WUFDUlYsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0o7UUFDdkIsT0FBTztZQUNMVixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWlCO1FBQ25ELENBQUM7SUFDSCxFQUFFLE9BQU9DLE9BQU87UUFDZGhCLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUF3QjtJQUMxRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGlja25vdGVzLy4vc3JjL3BhZ2VzL2FwaS9nZXRVc2VyLnRzPzNiMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi8uLi9saWIvbW9uZ29kYic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVzZXJFbWFpbCB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBkYk5hbWUgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT0RCX0RCX05BTUU7XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBjbGllbnQuZGIoZGJOYW1lKS5jb2xsZWN0aW9uKCd1c2VycycpO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmUoeyBlbWFpbDogdXNlckVtYWlsIH0pO1xuXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdVc2VyIG5vdCBmb3VuZCcgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJFbWFpbCIsImJvZHkiLCJkYk5hbWUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9OR09EQl9EQl9OQU1FIiwiY2xpZW50IiwiY29sbGVjdGlvbiIsImRiIiwidXNlciIsImZpbmRPbmUiLCJlbWFpbCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/getUser.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/getUser.ts"));
module.exports = __webpack_exports__;

})();