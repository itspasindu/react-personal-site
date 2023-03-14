"use strict";
(() => {
var exports = {};
exports.id = 7096;
exports.ids = [7096];
exports.modules = {

/***/ 9516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-css-tags */






const DarkTheme = ({
  children,
  useSkin,
  mobileappstyle
}) => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    window.theme = "dark";
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        rel: "stylesheet",
        href: "/css/dark.css"
      }), useSkin ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        rel: "stylesheet",
        href: "/css/arch-skin-dark.css"
      }) : "", mobileappstyle ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        href: "/css/mobile-app-dark.css",
        rel: "stylesheet"
      }) : ""]
    }), children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkTheme);

/***/ }),

/***/ 5987:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9516);
/* harmony import */ var _components_Navbar_mobile_app_navbar_mobile_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4715);
/* harmony import */ var _components_Intro6_intro6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4936);
/* harmony import */ var _components_Clients3_clients3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5945);
/* harmony import */ var _components_Services7_services7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3042);
/* harmony import */ var _components_Services8_services8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6570);
/* harmony import */ var _components_Screenshots_screenshots__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2363);
/* harmony import */ var _components_Progress_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2456);
/* harmony import */ var _components_Video_with_team_video_with_team__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5006);
/* harmony import */ var _components_Price_packages_price_packages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9090);
/* harmony import */ var _components_Testimonials_testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1787);
/* harmony import */ var _components_Download_app_download_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8308);
/* harmony import */ var _components_Blogs2_blogs2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(861);
/* harmony import */ var _components_Footer2_footer2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9681);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Screenshots_screenshots__WEBPACK_IMPORTED_MODULE_8__, _components_Testimonials_testimonials__WEBPACK_IMPORTED_MODULE_12__]);
([_components_Screenshots_screenshots__WEBPACK_IMPORTED_MODULE_8__, _components_Testimonials_testimonials__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-page-custom-font */




















const MobileAppDark = () => {
  const navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
        rel: "stylesheet"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      mobileappstyle: true,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Navbar_mobile_app_navbar_mobile_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        nr: navbarRef
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Intro6_intro6__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Clients3_clients3__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Services7_services7__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Services8_services8__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Screenshots_screenshots__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Progress_progress__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Video_with_team_video_with_team__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Price_packages_price_packages__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Testimonials_testimonials__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Download_app_download_app__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Blogs2_blogs2__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Footer2_footer2__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileAppDark);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2189,676,1664,1779,4716,4739,8308,9053], () => (__webpack_exec__(5987)));
module.exports = __webpack_exports__;

})();