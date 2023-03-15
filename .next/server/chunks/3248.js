"use strict";
exports.id = 3248;
exports.ids = [3248];
exports.modules = {

/***/ 3248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/features.json
const features_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"Graphic Design","content":"Successful graphic design is the key to increasing your sales and therefore, benefits."},{"id":2,"icon":"pe-7s-phone","title":"Web & Mobile Design","content":"Working on web design our team creates astonishing products representing your brand."},{"id":3,"icon":"pe-7s-display1","title":"SEO & SMM","content":"We understand that social media plays an important role in driving traffic to your site."},{"id":4,"icon":"pe-7s-diskette","title":"Payment gateway integration","content":"Installing a payment gateway to get the necessary payment for your business website."}]');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Services/services.jsx






const Services = ({
  style,
  lines
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: `services bords section-padding ${style === "4item" ? "lficon" : lines ? "" : "pt-0"}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head  text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Best Features"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow color-font",
              children: "We are a new digital product development agency"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: style === "4item" ? features_namespaceObject.map(feature => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 wow fadeInLeft",
          "data-wow-delay": `${feature.id == 1 ? ".5" : feature.id === 2 ? ".7" : feature.id === 3 ? ".9" : "1.1"}s`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item-box",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: `icon ${feature.icon}`
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: feature.title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: feature.content
              })]
            })]
          })
        }, feature.id)) : // max item 3 in Home page
        features_namespaceObject.slice(0, 3).map(feature => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 wow fadeInLeft",
          "data-wow-delay": ".5s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item-box md-mb50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: `icon ${feature.icon}`
            }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: feature.title
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: feature.content
            })]
          })
        }, feature.id))
      })]
    }), lines ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "line top left"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "line bottom right"
      })]
    }) : null]
  });
};

/* harmony default export */ const services = (Services);

/***/ })

};
;