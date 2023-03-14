"use strict";
exports.id = 8697;
exports.ids = [8697];
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

/***/ 8697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Navbar/navbar.jsx
var navbar = __webpack_require__(15);
// EXTERNAL MODULE: ./src/components/Footer/footer.jsx
var footer = __webpack_require__(5914);
// EXTERNAL MODULE: ./src/layouts/Dark.jsx
var Dark = __webpack_require__(9516);
// EXTERNAL MODULE: external "typewriter-effect"
var external_typewriter_effect_ = __webpack_require__(2589);
var external_typewriter_effect_default = /*#__PURE__*/__webpack_require__.n(external_typewriter_effect_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Freelancre-intro/freelancre-intro.jsx
/* eslint-disable @next/next/no-img-element */





const FreelancreIntro = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "freelancre valign",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "img",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/img/myphoto.png",
              alt: ""
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 valign",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "cont",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              className: "cd-headline clip",
              children: ["Hello, My name is pasindu", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " iam \xA0", /*#__PURE__*/jsx_runtime_.jsx("span", {
                style: {
                  fontSize: "35px",
                  lineHeight: "49px"
                },
                className: "cd-words-wrapper",
                children: /*#__PURE__*/jsx_runtime_.jsx((external_typewriter_effect_default()), {
                  options: {
                    wrapperClassName: "color-font fw-600",
                    strings: ["Front-end Developer", "Ui/Ux Designer", "WordPress "],
                    autoStart: true,
                    loop: true
                  },
                  loop: true,
                  onInit: typewriter => {
                    typewriter;
                  }
                })
              })]
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "states",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "flex",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: "flex",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "numb valign",
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "2+"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text valign",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: ["Years ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Of Experience"]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: "flex",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "numb valign",
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "27"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text valign",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: ["Projects Completed ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " In 9 Countries"]
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "mail-us",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "mailto:admin@xline.lk?subject=Freelancing Web Projects",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "flex",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "text valign",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "full-width",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: "Get In Touch"
                      }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                        children: "admin@xline.lk"
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "mail-icon",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "icon-box",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "icon color-font pe-7s-mail"
                      })
                    })
                  })]
                })
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "line bottom left"
    })]
  });
};

/* harmony default export */ const freelancre_intro = (FreelancreIntro);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(5032);
;// CONCATENATED MODULE: ./src/components/Works-style4/works-style4.jsx
/* eslint-disable @next/next/no-img-element */






const WorksStyle4 = () => {
  external_react_default().useEffect(() => {
    setTimeout(() => {
      (0,initIsotope/* default */.Z)();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "portfolio-frl section-padding pb-70",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head  text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Portfolio"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              className: "wow color-font",
              children: ["Our Recent Web Design & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Some Past Projects."]
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "filtering col-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "filter wow fadeIn",
            "data-wow-delay": ".5s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": "*",
              className: "active",
              children: "All"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".brand",
              children: "Web Developmeent"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".web",
              children: "WordPress"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".graphic",
              children: "UI/UX Design"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "gallery full-width",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items graphic lg-mr wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Web Design Agency"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "WordPress Web Design Project"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/freelancer/p1.png",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "tags",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Web Developmeent"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "WordPress"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Creative"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items web wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Learning Managment System"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "WordPress Web Design Project"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/freelancer/p3.png",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "tags",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Web Developmeent"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "WordPress"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Creative"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items web wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Web Hosting Website"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Custom Coding Project"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/freelancer/3.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "tags",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Web Developmeent"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Custom Coding"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Creative"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items web graphic wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Digital Marketing Website"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "WordPress Web Design Project"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/freelancer/p4.png",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "tags",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Web Developmeent"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "WordPress"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Creative"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items brand wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Affiliate Marketing Project"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "WordPress Web Design Project"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/freelancer/p5.png",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "tags",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Web Developmeent"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "WordPress"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Creative"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 items brand wow fadeInUp",
            "data-wow-delay": ".4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "item-img",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cont",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "School Web Project"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Custom Coding Website"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "rota",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/freelancer/p6.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "tags",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Web Developmeent"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Custom Coding"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/works2/works2-dark",
                    children: "Creative"
                  })
                })]
              })]
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const works_style4 = (WorksStyle4);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/Full-testimonials/full-testimonials.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */







class FullTestimonials extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderArrows", () => {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "arrows",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            onClick: () => this.slider.slickNext(),
            className: "next cursor-pointer",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "pe-7s-angle-right"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            onClick: () => this.slider.slickPrev(),
            className: "prev cursor-pointer",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "pe-7s-angle-left"
            })
          })]
        })
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: `testimonials ${this.props.withIMG ? "section-padding bg-img" : this.props.withCOLOR ? "section-padding back-color" : this.props.noPadding ? "" : "section-padding"} ${this.props.classText ? this.props.classText : ""}`,
      style: {
        backgroundImage: `${this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"}`
      },
      children: [this.props.showHead && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-8 col-md-10",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "sec-head  text-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                className: "wow fadeIn",
                "data-wow-delay": ".5s",
                children: "Testimonials"
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "wow color-font",
                children: "We love our clients from all over the world."
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container-fluid position-re",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row wow fadeInUp",
          "data-wow-delay": ".5s",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), {
              className: "slic-item",
              ref: c => this.slider = c,
              dots: false,
              infinite: true,
              arrows: true,
              centerMode: true,
              autoplay: true,
              rows: 1,
              slidesToScroll: 1,
              slidesToShow: 3,
              responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }],
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/img/clients/team-1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Cartfull"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "\"I had an amazing experience working with this web development team. They were very professional, responsive, and delivered a high-quality website that exceeded my expectations. I highly recommend them!\""
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/img/clients/team-2.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                        className: "author-name color-font",
                        children: "Jimmy Peterson"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "author-details",
                        children: "founder, EasyGo"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "\"I am extremely satisfied with the website that this team built for my business. They took the time to understand my needs and goals, and created a custom solution that is user-friendly and visually appealing. Their attention to detail and commitment to excellence is impressive.\""
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/img/clients/team-3.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                        className: "author-name color-font",
                        children: "Carey Clark"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "author-details",
                        children: "CEO, Daraflex"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/img/clients/team-4.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                        className: "author-name color-font",
                        children: "Patrick Cate"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Diablo"
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "\"I was very impressed with the level of expertise and creativity that this web development team brought to the table. They listened to my ideas and provided valuable input to ensure that the website was optimized for SEO and user engagement. I would definitely work with them again in the future.\""
                })]
              })]
            })
          })
        }), this.renderArrows()]
      })]
    });
  }

}

/* harmony default export */ const full_testimonials = (FullTestimonials);
;// CONCATENATED MODULE: ./src/components/blogs/Blogs2/blogs2.jsx
/* eslint-disable @next/next/no-img-element */





const Blogs2 = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "blog-list section-padding sub-bg",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "head md-mb50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "back-color",
              children: "Get The Latest News"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "What Our Trending News."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "We provide company and finance service for startups and company business."
            }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/blog/blog-dark",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "More Blog Posts"
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-lg-7 offset-lg-1",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item wow fadeInUp",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "img valign",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/blog/1.jpg",
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cont valign",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "info",
                  children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "date",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          children: "06"
                        }), " August"]
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "/"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "tag",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "WordPress"
                      })
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog-details/blog-details-dark",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "How to use solid color combine with simple furnitures."
                    })
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item wow fadeInUp",
            "data-wow-delay": ".5s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "img valign",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/blog/2.jpg",
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cont valign",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "info",
                  children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "date",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          children: "06"
                        }), " August"]
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "/"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "tag",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "WordPress"
                      })
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog-details/blog-details-dark",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "How to use solid color combine with simple furnitures."
                    })
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item wow fadeInUp",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "img valign",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/blog/3.jpg",
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cont valign",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "info",
                  children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "date",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          children: "06"
                        }), " August"]
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "/"
                  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog/blog-dark",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "tag",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "WordPress"
                      })
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    href: "/blog-details/blog-details-dark",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "How to use solid color combine with simple furnitures."
                    })
                  })
                })]
              })
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const blogs2 = (Blogs2);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
;// CONCATENATED MODULE: ./src/components/s-contact-form/s-contact-form.jsx





const SContactForm = ({
  noLine
}) => {
  const messageRef = external_react_default().useRef(null);

  function validateEmail(value) {
    let error;

    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }

    return error;
  }

  const sendMessage = ms => new Promise(r => setTimeout(r, ms));

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "contact-sec section-padding position-re",
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
              children: "Contact Us"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow color-font",
              children: "Let\u2019s Get in Touch And Hire Me"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form wow fadeInUp",
            "data-wow-delay": ".5s",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
              initialValues: {
                name: "",
                email: "",
                message: ""
              },
              onSubmit: async values => {
                await sendMessage(500);
                alert(JSON.stringify(values, null, 2)); // show message

                messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon."; // Reset the values

                values.name = "";
                values.email = "";
                values.message = ""; // clear message

                setTimeout(() => {
                  messageRef.current.innerText = "";
                }, 2000);
              },
              children: ({
                errors,
                touched
              }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
                id: "contact-form",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "messages",
                  ref: messageRef
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "controls",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "col-lg-6",
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "form-group",
                        children: /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                          id: "form_name",
                          type: "text",
                          name: "name",
                          placeholder: "Name",
                          required: "required"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "col-lg-6",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [/*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                          validate: validateEmail,
                          id: "form_email",
                          type: "email",
                          name: "email",
                          placeholder: "Email",
                          required: "required"
                        }), errors.email && touched.email && /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: errors.email
                        })]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "col-12",
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "form-group",
                        children: /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                          as: "textarea",
                          id: "form_message",
                          name: "message",
                          placeholder: "Message",
                          rows: "4",
                          required: "required"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "col-12",
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                          type: "submit",
                          className: "nb butn bord curve mt-30",
                          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                            children: "Send Massege"
                          })
                        })
                      })
                    })]
                  })
                })]
              })
            })
          })
        })
      })]
    }), !noLine ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "line bottom left"
    }) : ""]
  });
};

/* harmony default export */ const s_contact_form = (SContactForm);
;// CONCATENATED MODULE: ./src/pages/homepage/home.jsx
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/Services5/services5'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/About-us5/about-us5'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());














const Homepage = () => {
  const navbarRef = external_react_default().useRef(null);
  const logoRef = external_react_default().useRef(null);
  external_react_default().useEffect(() => {
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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Dark/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(navbar/* default */.Z, {
      nr: navbarRef,
      lr: logoRef
    }), /*#__PURE__*/jsx_runtime_.jsx(freelancre_intro, {}), /*#__PURE__*/jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/Services5/services5'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/jsx_runtime_.jsx(works_style4, {}), /*#__PURE__*/jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/About-us5/about-us5'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/jsx_runtime_.jsx(full_testimonials, {
      showHead: true
    }), /*#__PURE__*/jsx_runtime_.jsx(blogs2, {}), /*#__PURE__*/jsx_runtime_.jsx(s_contact_form, {
      noLine: true
    }), /*#__PURE__*/jsx_runtime_.jsx(footer/* default */.Z, {})]
  });
};

/* harmony default export */ const home = (Homepage);

/***/ })

};
;