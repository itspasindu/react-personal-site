"use strict";
exports.id = 1779;
exports.ids = [1779];
exports.modules = {

/***/ 7420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getSiblings = e => {
  let siblings = [];

  if (!e.parentNode) {
    return siblings;
  }

  let sibling = e.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSiblings);

/***/ }),

/***/ 1108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ handleMobileDropdown),
/* harmony export */   "z": () => (/* binding */ handleDropdown)
/* harmony export */ });
/* harmony import */ var _getSiblings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7420);

const handleDropdown = e => {
  (0,_getSiblings__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(e.target.parentElement).filter(item => item.classList.contains("show")).map(item => {
    item.classList.remove("show");

    if (item.childNodes[0]) {
      item.childNodes[0].setAttribute("aria-expanded", false);
    }

    if (item.childNodes[1]) {
      item.childNodes[1].classList.remove("show");
    }
  });
  e.target.parentElement.classList.toggle("show");
  e.target.setAttribute("aria-expanded", true);
  e.target.parentElement.childNodes[1].classList.toggle("show");
};
const handleMobileDropdown = e => {
  document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
};

/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = JSON.parse('{"E8":"/img/art-logo.png","Q1":"/img/art-logo.png","QP":true}');

/***/ })

};
;