webpackHotUpdate_N_E("pages/services",{

/***/ "./components/Dropdowns/IndexDropdown.js":
/*!***********************************************!*\
  !*** ./components/Dropdowns/IndexDropdown.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");



var _jsxFileName = "C:\\reactapps\\blk-website\\components\\Dropdowns\\IndexDropdown.js",
    _s = $RefreshSig$();





const IndexDropdown = () => {
  _s();

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const btnDropdownRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  const popoverDropdownRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

  const openDropdownPopover = () => {
    Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "bg-blueGray-700 text-white text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
      type: "button",
      ref: btnDropdownRef,
      onClick: e => {
        e.preventDefault();
        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "fas fa-bars text-white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: popoverDropdownRef,
      className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg min-w-48",
      style: {
        backgroundColor: "#8494F8",
        width: "387px",
        padding: "45px 167px 59px 40px",
        gap: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          style: {
            fontSize: "30px",
            color: "#ffffff",
            lineHeight: "40px",
            fontWeight: "700"
          },
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/services",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          style: {
            fontSize: "30px",
            color: "#ffffff",
            lineHeight: "40px",
            fontWeight: "700"
          },
          children: "Services"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/works",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          style: {
            fontSize: "30px",
            color: "#ffffff",
            lineHeight: "40px",
            fontWeight: "700"
          },
          children: "Our Work"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          style: {
            fontSize: "30px",
            color: "#ffffff",
            lineHeight: "40px",
            fontWeight: "700"
          },
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/about",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          style: {
            fontSize: "30px",
            color: "#ffffff",
            lineHeight: "40px",
            fontWeight: "700"
          },
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/contact",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          style: {
            fontSize: "30px",
            color: "#ffffff",
            lineHeight: "40px",
            fontWeight: "700"
          },
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(IndexDropdown, "53KgDU6y31Eps6IlHPrrUv05sao=");

_c = IndexDropdown;
/* harmony default export */ __webpack_exports__["default"] = (IndexDropdown);

var _c;

$RefreshReg$(_c, "IndexDropdown");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bnMvSW5kZXhEcm9wZG93bi5qcyJdLCJuYW1lcyI6WyJJbmRleERyb3Bkb3duIiwiZHJvcGRvd25Qb3BvdmVyU2hvdyIsInNldERyb3Bkb3duUG9wb3ZlclNob3ciLCJSZWFjdCIsInVzZVN0YXRlIiwiYnRuRHJvcGRvd25SZWYiLCJjcmVhdGVSZWYiLCJwb3BvdmVyRHJvcGRvd25SZWYiLCJvcGVuRHJvcGRvd25Qb3BvdmVyIiwiY3JlYXRlUG9wcGVyIiwiY3VycmVudCIsInBsYWNlbWVudCIsImNsb3NlRHJvcGRvd25Qb3BvdmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJwYWRkaW5nIiwiZ2FwIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJjb2xvciIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHLE1BQU07QUFBQTs7QUFDMUI7QUFDQSxRQUFNLENBQUNDLG1CQUFELEVBQXNCQyxzQkFBdEIsSUFBZ0RDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQXREO0FBQ0EsUUFBTUMsY0FBYyxnQkFBR0YsNENBQUssQ0FBQ0csU0FBTixFQUF2QjtBQUNBLFFBQU1DLGtCQUFrQixnQkFBR0osNENBQUssQ0FBQ0csU0FBTixFQUEzQjs7QUFDQSxRQUFNRSxtQkFBbUIsR0FBRyxNQUFNO0FBQ2hDQyx1RUFBWSxDQUFDSixjQUFjLENBQUNLLE9BQWhCLEVBQXlCSCxrQkFBa0IsQ0FBQ0csT0FBNUMsRUFBcUQ7QUFDL0RDLGVBQVMsRUFBRTtBQURvRCxLQUFyRCxDQUFaO0FBR0FULDBCQUFzQixDQUFDLElBQUQsQ0FBdEI7QUFDRCxHQUxEOztBQU1BLFFBQU1VLG9CQUFv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aUJBQUssRUFBQyxTQUF4QjtBQUFtQ0Msc0JBQVUsRUFBQyxNQUE5QztBQUFzREMsc0JBQVUsRUFBQztBQUFqRSxXQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF4REYsZUFtRUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxFQUNQLCtGQUhKO0FBS0UsZUFBSyxFQUFFO0FBQUNILG9CQUFRLEVBQUMsTUFBVjtBQUFrQkMsaUJBQUssRUFBQyxTQUF4QjtBQUFtQ0Msc0JBQVUsRUFBQyxNQUE5QztBQUFzREMsc0JBQVUsRUFBQztBQUFqRSxXQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUEsa0JBREY7QUFnR0QsQ0E5R0Q7O0dBQU16QixhOztLQUFBQSxhO0FBZ0hTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXJ2aWNlcy42NDgyY2RlZDYwOTUwY2E2NGI4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgY3JlYXRlUG9wcGVyIH0gZnJvbSBcIkBwb3BwZXJqcy9jb3JlXCI7XG5cbmNvbnN0IEluZGV4RHJvcGRvd24gPSAoKSA9PiB7XG4gIC8vIGRyb3Bkb3duIHByb3BzXG4gIGNvbnN0IFtkcm9wZG93blBvcG92ZXJTaG93LCBzZXREcm9wZG93blBvcG92ZXJTaG93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYnRuRHJvcGRvd25SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgY29uc3QgcG9wb3ZlckRyb3Bkb3duUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIGNvbnN0IG9wZW5Ecm9wZG93blBvcG92ZXIgPSAoKSA9PiB7XG4gICAgY3JlYXRlUG9wcGVyKGJ0bkRyb3Bkb3duUmVmLmN1cnJlbnQsIHBvcG92ZXJEcm9wZG93blJlZi5jdXJyZW50LCB7XG4gICAgICBwbGFjZW1lbnQ6IFwiYm90dG9tLXN0YXJ0XCIsXG4gICAgfSk7XG4gICAgc2V0RHJvcGRvd25Qb3BvdmVyU2hvdyh0cnVlKTtcbiAgfTtcbiAgY29uc3QgY2xvc2VEcm9wZG93blBvcG92ZXIgPSAoKSA9PiB7XG4gICAgc2V0RHJvcGRvd25Qb3BvdmVyU2hvdyhmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJiZy1ibHVlR3JheS03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbGc6bXItMSBsZzptYi0wIG1sLTMgbWItMyBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICByZWY9e2J0bkRyb3Bkb3duUmVmfVxuICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkcm9wZG93blBvcG92ZXJTaG93ID8gY2xvc2VEcm9wZG93blBvcG92ZXIoKSA6IG9wZW5Ecm9wZG93blBvcG92ZXIoKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnMgdGV4dC13aGl0ZVwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgICAgIFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3BvcG92ZXJEcm9wZG93blJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAoZHJvcGRvd25Qb3BvdmVyU2hvdyA/IFwiYmxvY2sgXCIgOiBcImhpZGRlbiBcIikgK1xuICAgICAgICAgIFwiYmctd2hpdGUgdGV4dC1iYXNlIHotNTAgZmxvYXQtbGVmdCBweS0yIGxpc3Qtbm9uZSB0ZXh0LWxlZnQgc2hhZG93LWxnIG1pbi13LTQ4XCJcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiM4NDk0RjhcIiwgd2lkdGg6XCIzODdweFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjQ1cHggMTY3cHggNTlweCA0MHB4XCIsXG4gICAgICAgIGdhcDogXCIxMHB4XCIsIGRpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwifX1cbiAgICAgID5cbiAgICAgICAgXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0ZXh0LXNtIHB5LTIgcHgtNCBmb250LW5vcm1hbCBibG9jayB3LWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlR3JheS03MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIiwgY29sb3I6XCIjZmZmZmZmXCIsIGxpbmVIZWlnaHQ6XCI0MHB4XCIsIGZvbnRXZWlnaHQ6XCI3MDBcIn19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0ZXh0LXNtIHB5LTIgcHgtNCBmb250LW5vcm1hbCBibG9jayB3LWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlR3JheS03MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIiwgY29sb3I6XCIjZmZmZmZmXCIsIGxpbmVIZWlnaHQ6XCI0MHB4XCIsIGZvbnRXZWlnaHQ6XCI3MDBcIn19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VydmljZXNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi93b3Jrc1wiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwidGV4dC1zbSBweS0yIHB4LTQgZm9udC1ub3JtYWwgYmxvY2sgdy1mdWxsIHdoaXRlc3BhY2Utbm93cmFwIGJnLXRyYW5zcGFyZW50IHRleHQtYmx1ZUdyYXktNzAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6XCIzMHB4XCIsIGNvbG9yOlwiI2ZmZmZmZlwiLCBsaW5lSGVpZ2h0OlwiNDBweFwiLCBmb250V2VpZ2h0OlwiNzAwXCJ9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE91ciBXb3JrXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0ZXh0LXNtIHB5LTIgcHgtNCBmb250LW5vcm1hbCBibG9jayB3LWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlR3JheS03MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIiwgY29sb3I6XCIjZmZmZmZmXCIsIGxpbmVIZWlnaHQ6XCI0MHB4XCIsIGZvbnRXZWlnaHQ6XCI3MDBcIn19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0ZXh0LXNtIHB5LTIgcHgtNCBmb250LW5vcm1hbCBibG9jayB3LWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlR3JheS03MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIiwgY29sb3I6XCIjZmZmZmZmXCIsIGxpbmVIZWlnaHQ6XCI0MHB4XCIsIGZvbnRXZWlnaHQ6XCI3MDBcIn19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0ZXh0LXNtIHB5LTIgcHgtNCBmb250LW5vcm1hbCBibG9jayB3LWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlR3JheS03MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIiwgY29sb3I6XCIjZmZmZmZmXCIsIGxpbmVIZWlnaHQ6XCI0MHB4XCIsIGZvbnRXZWlnaHQ6XCI3MDBcIn19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=