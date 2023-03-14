"use strict";
exports.id = 3117;
exports.ids = [3117];
exports.modules = {

/***/ 8728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_intro)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(1514);
;// CONCATENATED MODULE: ./src/data/sections/about-info1.json
const about_info1_namespaceObject = JSON.parse('{"TN":"Who I Am ?","X8":"I’m pasindu dewviman, a front-end designer currently working at Xline Digital and as a freelance designer.","i7":"I specialize in building digital experiences and creating websites. You can find me."}');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/About-intro/index.jsx






const AboutIntro = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "intro-section section-padding pb-0",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "htit sm-mb30",
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: about_info1_namespaceObject.TN
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 offset-lg-1 col-md-8",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Split/* default */.Z, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "wow txt mb-10 words chars splitting",
                "data-splitting": true,
                children: about_info1_namespaceObject.X8
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "wow txt words chars splitting",
                "data-splitting": true,
                children: about_info1_namespaceObject.i7
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const About_intro = (AboutIntro);

/***/ }),

/***/ 2786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1514);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const CallToAction = ({
  img
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "call-action section-padding sub-bg bg-img",
    style: {
      backgroundImage: `url(${img ? img : "/img/patrn.svg"})`
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "col-md-8 col-lg-9",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "content sm-mb30",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Split__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                className: "wow words chars splitting",
                "data-splitting": true,
                children: "Let\u2019s Talk"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h2", {
                className: "wow words chars splitting",
                "data-splitting": true,
                children: ["about your ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("b", {
                  className: "back-color",
                  children: "next project"
                }), "."]
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "col-md-4 col-lg-3 valign",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `/contact/contact-dark`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
              className: "butn bord curve wow fadeInUp",
              "data-wow-delay": ".5s",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                children: "Get In Touch"
              })
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallToAction);

/***/ }),

/***/ 6415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ clients)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/clients.json
const clients_namespaceObject = JSON.parse('[{"id":1,"lightImage":"/img/clients/brands/light/01.png","darkImage":"/img/clients/brands/dark/1.png","url":"www.elements.envato.com"},{"id":2,"lightImage":"/img/clients/brands/light/02.png","darkImage":"/img/clients/brands/dark/2.png","url":"www.namecheap.com"},{"id":3,"lightImage":"/img/clients/brands/light/03.png","darkImage":"/img/clients/brands/dark/3.png","url":"www.facebook.com"},{"id":4,"lightImage":"/img/clients/brands/light/04.png","darkImage":"/img/clients/brands/dark/4.png","url":"www.ads.google.com"},{"id":5,"lightImage":"/img/clients/brands/light/05.png","darkImage":"/img/clients/brands/dark/5.png","url":"www.elementor.com"},{"id":6,"lightImage":"/img/clients/brands/light/06.png","darkImage":"/img/clients/brands/dark/06.png","url":"www.Vie.com"},{"id":7,"lightImage":"/img/clients/brands/light/07.png","darkImage":"/img/clients/brands/dark/07.png","url":"www.Vie.com"},{"id":8,"lightImage":"/img/clients/brands/light/08.png","darkImage":"/img/clients/brands/dark/08.png","url":"www.Vie.com"}]');
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(1514);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Clients/clients.jsx
/* eslint-disable @next/next/no-img-element */






const Clients = ({
  theme
}) => {
  var first = clients_namespaceObject.slice(0, clients_namespaceObject.length / 2);
  var second = clients_namespaceObject.slice(4, clients_namespaceObject.length);
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "clients section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 valign md-mb50",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head mb-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Best Features"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow mb-20 color-font",
              children: "Our Clients"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "My web design and other services partners."
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "row bord",
              children: first.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-3 col-6 brands",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item wow fadeIn",
                  "data-wow-delay": `${item.id == 1 ? ".3" : item.id == 2 ? ".6" : item.id == 3 ? ".8" : item.id == 4 ? ".3" : ""}s`,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "img",
                    children: [theme === "light" ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: item.lightImage,
                      alt: ""
                    }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: item.darkImage,
                      alt: ""
                    }), /*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "#0",
                        className: "link words chars splitting",
                        "data-splitting": true,
                        children: item.url
                      })
                    })]
                  })
                })
              }, item.id))
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "row",
              children: second.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `${item.id == 5 ? "col-md-3 col-6 brands sm-mb30" : item.id == 6 ? "col-md-3 col-6 brands sm-mb30" : item.id == 7 ? "col-md-3 col-6 brands" : item.id == 8 ? "col-md-3 col-6 brands" : ""}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item wow fadeIn",
                  "data-wow-delay": `${item.id == 1 ? ".4" : item.id == 2 ? ".7" : item.id == 3 ? ".5" : item.id == 4 ? ".3" : ""}s`,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "img",
                    children: [theme === "light" ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: item.lightImage,
                      alt: ""
                    }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: item.darkImage,
                      alt: ""
                    }), /*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "#0",
                        className: "link words chars splitting",
                        "data-splitting": true,
                        children: item.url
                      })
                    })]
                  })
                })
              }, item.id))
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const clients = (Clients);

/***/ }),

/***/ 4345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ minimal_area)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/common/getSiblings.js
var getSiblings = __webpack_require__(7420);
;// CONCATENATED MODULE: ./src/common/cardMouseEffect.js


const cardMouseEffect = featureEl => {
  var featuresitems = featureEl;

  if (featuresitems) {
    featuresitems.forEach(item => {
      item.onmouseover = function (event) {
        item.classList.add("active");
        let siblings = (0,getSiblings/* default */.Z)(item),
            siblingEl = siblings.map(e => e.classList.remove("active"));
      };
    });
  }
};

/* harmony default export */ const common_cardMouseEffect = (cardMouseEffect);
;// CONCATENATED MODULE: ./src/common/thumparallax.js
const thumparallax = () => {
  var imageUp = document.getElementsByClassName("thumparallax");

  if (imageUp) {
    new simpleParallax(imageUp, {
      delay: 1,
      scale: 1.1
    });
  }
};
const thumparallaxDown = () => {
  var imageDown = document.getElementsByClassName("thumparallax-down");

  if (imageDown) {
    new simpleParallax(imageDown, {
      orientation: "down",
      delay: 1,
      scale: 1.1
    });
  }
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Minimal-Area/minimal-area.jsx
/* eslint-disable @next/next/no-img-element */






const MinimalArea = () => {
  external_react_default().useEffect(() => {
    common_cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "min-area sub-bg",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "img",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "thumparallax-down",
              src: "/img/myphoto.png",
              alt: ""
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content pt-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "wow color-font",
              children: "About me."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "wow txt",
              "data-splitting": true,
              children: "We Provide Best Digital Marketing Solutions"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "feat",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".2s",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "1"
                  }), " Our Mission"]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "We along with our team support your business or any digital activity. We always look forward to the happiness of our clients."
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".4s",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "2"
                  }), " Our Goals"]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "X Line Web Designs Custom web & app development with strategic insights to generate greater brand engagement, higher conversions & measurable results."
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".6s",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "3"
                  }), " Why Us?"]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Our team develops a comprehensive digital brand strategy that successfully reaches your target audience."
                })]
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const minimal_area = (MinimalArea);

/***/ }),

/***/ 5581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @next/next/no-img-element */




const PagesHeader = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
    className: "pages-header circle-bg valign",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row justify-content-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "cont mt-100 mb-50 text-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
              className: "color-font fw-700",
              children: "Our dedicated team of creatives is bursting with talent, experience and passion for what we do."
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "/img/slid/about.jpg",
              alt: ""
            })
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "half sub-bg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "circle-color",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "gradient-circle"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "gradient-circle two"
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagesHeader);

/***/ }),

/***/ 513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const SkillsCircle = ({
  from,
  theme
}) => {
  const cpStyle = {
    path: {
      stroke: "rgb(18, 194, 233)"
    },
    trail: {
      stroke: theme ? theme == "dark" ? "#0f1013" : "#e5e5e5" : ""
    },
    text: {
      fill: theme ? theme == "dark" ? "#ffffff" : "#4e4e4e" : "",
      // Text size
      fontSize: "16px"
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
    className: `skills-circle pt-50 pb-50 ${from ? from === "aboutPage" ? "sub-bg" : "" : ""}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-7",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "item wow fadeInLeft",
                  "data-wow-delay": ".6",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "skill",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__.CircularProgressbar, {
                      value: 90,
                      strokeWidth: 2,
                      text: `${90}%`,
                      styles: cpStyle
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "cont",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: "Project"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                      children: "Consulting"
                    })]
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "item wow fadeInLeft",
                  "data-wow-delay": ".3",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "skill",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__.CircularProgressbar, {
                      value: 75,
                      strokeWidth: 2,
                      text: `${75}%`,
                      styles: cpStyle
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "cont",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: "App"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                      children: "Development"
                    })]
                  })]
                })
              })]
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillsCircle);

/***/ }),

/***/ 1514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Split extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "target", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef());

    _defineProperty(this, "split", () => {
      if (this.target.current) {
        Splitting({
          target: this.target.current
        });
      }
    });

    _defineProperty(this, "componentDidMount", this.split);

    _defineProperty(this, "componentDidUpdate", this.split);
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      ref: this.target,
      children: this.props.children
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);

/***/ }),

/***/ 7397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ team)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/teamSkillsProgress.js
const teamSkillsProgress = () => {
  let teamSection = document.querySelector(".team-crv");

  if (teamSection) {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".skill-progress .progres").forEach(item => {
        let myVal = item.getAttribute("data-value");

        if (window.pageYOffset > teamSection.offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

/* harmony default export */ const common_teamSkillsProgress = (teamSkillsProgress);
// EXTERNAL MODULE: ./src/common/tooltipEffect.js + 1 modules
var tooltipEffect = __webpack_require__(850);
;// CONCATENATED MODULE: ./src/data/sections/team.json
const team_namespaceObject = JSON.parse('{"f":[{"id":1,"image":"/img/team/team-1.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/team/team-2.jpg","title":"Alex Regelman","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/team/team-3.jpg","title":"Stacey Stamper","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/team/team-4.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"}],"n":[{"id":1,"text":"UI / UX Design","value":"80%"},{"id":2,"text":"Web Development","value":"90%"}]}');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Team/team.jsx
/* eslint-disable @next/next/no-img-element */







const Team = () => {
  external_react_default().useEffect(() => {
    common_teamSkillsProgress();
    setTimeout(() => {
      (0,tooltipEffect/* default */.Z)();
    }, 1000);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "team-crv section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content wow fadeInUp md-mb30",
            "data-wow-delay": ".5s",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "sub-title",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Our Team"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "co-tit mb-15",
              children: "We help to create visual strategies."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "We are Custom web & app development with strategic insights to generate greater brand engagement, higher conversions & measurable results."
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "skills-box mt-40",
              children: team_namespaceObject.n.map(skill => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  className: "custom-font",
                  children: skill.text
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": skill.value
                  })
                })]
              }, skill.id))
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 offset-lg-1",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "img-box",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-sm-6 toright",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "full-width",
                  children: team_namespaceObject.f.slice(0, 2).map((team, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: `img sizxl ${index + 1 != team_namespaceObject.f.slice(0, 2).length ? "mb-30" : null}`,
                      "data-tooltip-tit": team.title,
                      "data-tooltip-sub": team.sub,
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: team.image,
                        alt: "",
                        className: "imago wow"
                      })
                    })
                  }, team.id))
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-sm-6 toleft valign",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "full-width text-left",
                  children: team_namespaceObject.f.slice(2, 4).map((team, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: `img sizxl ${index + 1 != team_namespaceObject.f.slice(2, 4).length ? "mb-30" : null}`,
                      "data-tooltip-tit": team.title,
                      "data-tooltip-sub": team.sub,
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: team.image,
                        alt: "",
                        className: "imago wow"
                      })
                    })
                  }, team.id))
                })
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const team = (Team);

/***/ }),

/***/ 434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */









const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "block-sec",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "background bg-img pt-100 pb-0 parallaxie",
      style: {
        backgroundImage: `url(/img/bg-vid.jpg)`
      },
      "data-overlay-dark": "5",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "vid-area",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "text",
                children: "Watch Video"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "vid-icon",
                children: [ false && /*#__PURE__*/0, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  className: "vid",
                  onClick: e => {
                    e.preventDefault();
                    setOpen(true);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "vid-butn",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                      className: "icon",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                        className: "fas fa-play"
                      })
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-lg-5 offset-lg-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "testim-box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "head-box",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                  className: "wow fadeIn",
                  "data-wow-delay": ".5s",
                  children: "Our Clients"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
                  className: "wow fadeInLeft",
                  "data-wow-delay": ".5s",
                  children: "What Client's Say?"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, settings), {}, {
                className: "slic-item wow fadeInUp",
                "data-wow-delay": ".5s",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "item",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                    children: "Highly recommended , 100% Satisfied"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "img",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                        className: "img-box",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                          src: "/img/clients/team-1.jpg",
                          alt: ""
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "cont",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "author",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                          className: "author-name ",
                          children: "Alex Regelman"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                          className: "author-details",
                          children: "Co-founder, codex"
                        })]
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "item",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                    children: "Highly recommended company and great experience. \uD83D\uDC4D"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "img",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                        className: "img-box",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                          src: "/img/clients/team-2.jpg",
                          alt: ""
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "cont",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "author",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                          className: "author-name ",
                          children: "James adam"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                          className: "author-details",
                          children: "founder, Colabox"
                        })]
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "item",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                    children: "Perfect And Fast Service, Fully Satisfied, Thank You."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "img",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                        className: "img-box",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                          src: "/img/clients/team-3.jpg",
                          alt: ""
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "cont",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "author",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                          className: "author-name ",
                          children: "Alex Regelman"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                          className: "author-details",
                          children: "Co-founder, Colabrio"
                        })]
                      })
                    })]
                  })]
                })]
              }))]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoWithTestimonials);

/***/ })

};
;