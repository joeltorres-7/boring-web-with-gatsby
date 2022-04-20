"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");



const Layout = ({
  pageTitle,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // events

const itemSpace = {
  marginLeft: 30,
  marginRight: 30,
  fontWeight: 600
};
const linkItem = { ...itemSpace,
  textDecoration: "none",
  color: "#031926"
};
const imageStyle = {
  width: 28,
  height: 28
};

function MouseOver(event) {
  event.target.style.background = '#EF476F';
  event.target.style.padding = "12";
  event.target.style.borderRadius = 15;
}

function MouseOut(event) {
  event.target.style.background = "#fff";
}

const Navbar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "flex bg-red"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    onMouseOver: MouseOver,
    onMouseOut: MouseOut,
    class: "link-element",
    style: linkItem,
    href: "#"
  }, "about"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    onMouseOver: MouseOver,
    onMouseOut: MouseOut,
    class: "link-element",
    style: linkItem,
    href: "#"
  }, "projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    style: imageStyle && itemSpace,
    src: __webpack_require__(/*! ../images/icons/logo/logo.svg */ "./src/images/icons/logo/logo.svg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    onMouseOver: MouseOver,
    onMouseOut: MouseOut,
    style: linkItem,
    href: "#"
  }, "illustrations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    onMouseOver: MouseOver,
    onMouseOut: MouseOut,
    class: "link-element",
    style: linkItem,
    href: "#"
  }, "let's talk!"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");




const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageTitle: "Joel Torres"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Test"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/images/icons/logo/logo.svg":
/*!****************************************!*\
  !*** ./src/images/icons/logo/logo.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBpZD0i44Os44Kk44Ok44O8XzEiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI4IDI4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZvbnQtc2l6ZToxNy4zNnB4O2ZpbGw6IzA3M2I0Yztmb250LWZhbWlseTpNb250c2VycmF0LUV4dHJhQm9sZCwgTW9udHNlcnJhdDtmb250LXdlaWdodDo4MDA7fS5jbHMtMntmaWxsOm5vbmU7fTwvc3R5bGU+PC9kZWZzPjx0ZXh0IGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC41IDIwLjc1KSI+SjwvdGV4dD48dGV4dCBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjg5IDIwLjc2KSI+VDwvdGV4dD48cmVjdCBjbGFzcz0iY2xzLTIiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIvPjwvc3ZnPg==");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map