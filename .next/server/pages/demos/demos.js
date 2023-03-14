"use strict";
(() => {
var exports = {};
exports.id = 9736;
exports.ids = [9736];
exports.modules = {

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

/***/ 5078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ demos)
});

;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/config/particle-config.js
var particle_config = __webpack_require__(4746);
// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(4753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(1514);
// EXTERNAL MODULE: ./src/layouts/Dark.jsx
var Dark = __webpack_require__(9516);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(5032);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/demos/demos.jsx


/* eslint-disable @next/next/no-img-element */










const Demos = () => {
  const [pageLoaded, setPageLoaded] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setPageLoaded(true);
    setTimeout(() => {
      if (pageLoaded) {
        (0,initIsotope/* default */.Z)();
      }
    }, 1000);
  }, [pageLoaded]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Dark/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "575932941",
      children: [".sec-head.jsx-575932941 h3.jsx-575932941{font-size:60px;font-weight:700;position:relative;}", ".sec-head.jsx-575932941 .tbg.jsx-575932941{position:absolute;top:-120px;left:0;width:100%;font-size:15vw;font-weight:900;line-height:1;background:linear-gradient( 180deg, #fff 0%, rgba(17,18,21,0.2) 70% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;opacity:0.1;}", ".sec-head.jsx-575932941 .tbg.jsx-575932941 b.jsx-575932941{font-weight:500;font-size:12vw;}", ".main-content.jsx-575932941{position:relative;z-index:999999;background:transparent;}", ".masonery.jsx-575932941 .gallery.jsx-575932941 .items.jsx-575932941{margin-top:30px;}", ".masonery.jsx-575932941 .container-fluid.jsx-575932941{padding:0 100px;}", "@media (max-width:768px){.masonery.jsx-575932941 .container-fluid.jsx-575932941{padding:0 20px;}.sec-head.jsx-575932941 h3.jsx-575932941{font-size:34px;}.sec-head.jsx-575932941{margin:0 auto 30px;}}", ".masonery.jsx-575932941 .item-img.jsx-575932941{padding:5px 15px 20px;border-radius:10px;background:#18191d;position:relative;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .dot.jsx-575932941{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,0.05);}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .img.jsx-575932941{border-radius:10px;overflow:hidden;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .img.jsx-575932941 img.jsx-575932941{-webkit-transition:all 0.4s;transition:all 0.4s;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .img.jsx-575932941:hover img.jsx-575932941{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941{margin-top:20px;text-align:center;position:relative;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 h6.jsx-575932941{font-size:16px;font-weight:500;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 .sta.jsx-575932941{position:absolute;top:-47px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);padding:5px 10px;border-radius:30px;box-shadow:0px 5px 20px rgba(255,255,255,0.05);font-size:12px;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 .sta.coming.jsx-575932941{background:#03be5f;}", ".masonery.jsx-575932941 .item-img.jsx-575932941 .cont.jsx-575932941 .sta.new.jsx-575932941{background:#ff4b4b;}"]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-575932941" + " " + "circle-bg",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-575932941" + " " + "circle-color fixed",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "gradient-circle"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "gradient-circle two"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      "data-overlay-dark": "4",
      style: {
        backgroundImage: "url(/demo-img/bg.png)",
        minHeight: "100vh",
        zIndex: 99999
      },
      className: "jsx-575932941" + " " + "works-header particles valign bg-img parallaxie",
      children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_tsparticles_default()), {
        id: "particles-js",
        options: particle_config/* default */.Z
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-575932941" + " " + "container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "row justify-content-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "col-lg-9 col-md-11 static",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "capt mt-50",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "bactxt custom-font valign",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  style: {
                    color: "transparent"
                  },
                  className: "jsx-575932941" + " " + "full-width",
                  children: "vie"
                })
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-575932941" + " " + "main-content section-padding pb-0",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "jsx-575932941" + " " + "masonery section-padding",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row justify-content-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-lg-8 col-md-10",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "sec-head text-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "jsx-575932941" + " " + "color-font",
                  children: "49+ stunning unique ready template"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "jsx-575932941" + " " + "tbg",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
                    className: "jsx-575932941",
                    children: "+"
                  }), "49"]
                })]
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container-fluid",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-575932941" + " " + "row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home1-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Main Demo"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home1-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/01.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Main Demo"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home2-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/2.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Creative Agency"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home2-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/02.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Creative Agency"
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/mobile-app/mobile-app-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/mobile1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Mobile app"
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "jsx-575932941" + " " + "sta new",
                          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "jsx-575932941",
                            children: "New Demo"
                          })
                        })]
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/mobile-app/mobile-app-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/mobile2.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Mobile app"
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "jsx-575932941" + " " + "sta new",
                          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "jsx-575932941",
                            children: "New Demo"
                          })
                        })]
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home7-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n2.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Freelancer"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home7-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n02.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Freelancer"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home8-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n3.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Architecture"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home8-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n03.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Architecture"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home5-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/3.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Digital Agency"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home5-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/03.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Digital Agency"
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home4-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/4.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Business One Page"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home4-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/04.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Business One Page"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home3-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/5.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Corporate Business"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home3-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/05.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Corporate Business"
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home6-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Modern Agency"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/homepage/home6-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/n01.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Modern Agency"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "jsx-575932941" + " " + "img",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "/demo-img/c3.png",
                      alt: "image",
                      className: "jsx-575932941"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-575932941" + " " + "cont",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                      className: "jsx-575932941",
                      children: "Restaurant"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "jsx-575932941" + " " + "sta coming",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "jsx-575932941",
                        children: "Coming Soon"
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "jsx-575932941" + " " + "img",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "/demo-img/c4.png",
                      alt: "image",
                      className: "jsx-575932941"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-575932941" + " " + "cont",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                      className: "jsx-575932941",
                      children: "Multipurpose"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "jsx-575932941" + " " + "sta coming",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "jsx-575932941",
                        children: "Coming Soon"
                      })
                    })]
                  })]
                })
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "jsx-575932941" + " " + "masonery section-padding position-re",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row justify-content-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-lg-8 col-md-10",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "sec-head text-center",
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "jsx-575932941" + " " + "color-font",
                  children: "Showcases"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container-fluid",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/showcase/showcase-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Full Screen"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/showcase/showcase-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s01.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Full Screen"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/showcase4/showcase4-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s2.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Showcase Carousel"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/showcase4/showcase4-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s02.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Showcase Carousel"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/showcase3/showcase3-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s3.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Showcase Circle"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/showcase3/showcase3-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/s03.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Showcase Circle"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works/works-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works 3 column"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works/works-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w01.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works 3 column"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w2.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works Filtering"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w02.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works Filtering"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works3/works3-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w3.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works Gallery"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works3/works3-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/w03.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Works Gallery"
                        })
                      })]
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "line top left"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "jsx-575932941" + " " + "masonery section-padding position-re",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row justify-content-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-lg-8 col-md-10",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "sec-head text-center",
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "jsx-575932941" + " " + "color-font",
                  children: "Inner Pages"
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container-fluid",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-575932941" + " " + "gallery full-width",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/standerd-blog-dark.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Standerd Blog"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog/blog-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/standerd-blog-light.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Standerd Blog"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog-list/blog-list-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-list-dark.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog List"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog-list/blog-list-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-list-light.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog List"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog-grid/blog-grid-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-grid-dark.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog Grid"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog-grid/blog-grid-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-grid-light.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog Grid"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog-details/blog-details-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-details-dark.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog Details"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog-details/blog-details-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/blog-details-light.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Blog Details"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/about/about-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/about.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "About Us"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/about/about-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/about1.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "About Us"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/contact/contact-dark",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/contact-dark.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Contact"
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "col-lg-3 col-md-6 items",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-575932941" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "dot"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/contact/contact-light",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      target: "_blank",
                      className: "jsx-575932941",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/demo-img/contact-light.png",
                          alt: "image",
                          className: "jsx-575932941"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "jsx-575932941" + " " + "cont",
                        children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                          className: "jsx-575932941",
                          children: "Contact"
                        })
                      })]
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "line top left"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "jsx-575932941" + " " + "services bords lficon section-padding position-re",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-575932941" + " " + "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-575932941" + " " + "row justify-content-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-lg-8 col-md-10",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "sec-head  text-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  "data-wow-delay": ".5s",
                  className: "jsx-575932941" + " " + "wow fadeIn",
                  children: "Best Features"
                }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "jsx-575932941" + " " + "wow color-font",
                  children: "Creative Agency, Corporate and Portfolio Template"
                })]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-575932941" + " " + "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              "data-wow-delay": ".5s",
              className: "jsx-575932941" + " " + "col-lg-6 wow fadeInLeft",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "item-box",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-575932941",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "icon pe-7s-paint-bucket"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "jsx-575932941" + " " + "cont",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                    className: "jsx-575932941",
                    children: "UI/UX Design"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "jsx-575932941",
                    children: "We provide the best design by following the latest trends."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              "data-wow-delay": ".7s",
              className: "jsx-575932941" + " " + "col-lg-6 wow fadeInLeft",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "item-box",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-575932941",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "icon pe-7s-phone"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "jsx-575932941" + " " + "cont",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                    className: "jsx-575932941",
                    children: "Easily Customizable"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "jsx-575932941",
                    children: "Build and customize stunning pages in minutes."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              "data-wow-delay": ".9s",
              className: "jsx-575932941" + " " + "col-lg-6 wow fadeInLeft",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "item-box",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-575932941",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "icon pe-7s-display1"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "jsx-575932941" + " " + "cont",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                    className: "jsx-575932941",
                    children: "One / Multi Page"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "jsx-575932941",
                    children: "Choose the layout style that fits your need."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              "data-wow-delay": ".5s",
              className: "jsx-575932941" + " " + "col-lg-6 wow fadeInLeft",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-575932941" + " " + "item-box",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-575932941",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "jsx-575932941" + " " + "icon pe-7s-diskette"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "jsx-575932941" + " " + "cont",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                    className: "jsx-575932941",
                    children: "24/7 Support"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "jsx-575932941",
                    children: "We commit to keep your site up-to-date."
                  })]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "line top right"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        style: {
          backgroundImage: "url(/img/patrn.svg)"
        },
        className: "jsx-575932941" + " " + "call-action section-padding bg-img",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-575932941" + " " + "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-575932941" + " " + "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-md-8 col-lg-9",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-575932941" + " " + "content sm-mb30",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Split/* default */.Z, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                    "data-splitting": true,
                    className: "jsx-575932941" + " " + "wow words chars splitting",
                    children: "Purchase The Vie"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                    "data-splitting": true,
                    className: "jsx-575932941" + " " + "wow words chars splitting",
                    children: ["and Make ", /*#__PURE__*/jsx_runtime_.jsx("br", {
                      className: "jsx-575932941"
                    }), /*#__PURE__*/jsx_runtime_.jsx("b", {
                      className: "jsx-575932941" + " " + "back-color",
                      children: "Your Life Easier"
                    }), "."]
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-575932941" + " " + "col-md-4 col-lg-3 valign",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#0",
                "data-wow-delay": ".5s",
                className: "jsx-575932941" + " " + "butn bord curve wow fadeInUp",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "jsx-575932941",
                  children: "Purchase Now"
                })
              })
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const demos = (Demos);

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

/***/ 4753:
/***/ ((module) => {

module.exports = require("react-tsparticles");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2189,676,1664,5032,4746], () => (__webpack_exec__(5078)));
module.exports = __webpack_exports__;

})();