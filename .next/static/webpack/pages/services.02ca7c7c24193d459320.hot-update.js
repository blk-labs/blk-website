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
        padding: "45px 167px 59px 40px",
        gap: "10px"
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
          lineNumber: 45,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
          lineNumber: 56,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
          lineNumber: 67,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
          lineNumber: 78,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
          lineNumber: 89,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          lineNumber: 100,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bnMvSW5kZXhEcm9wZG93bi5qcyJdLCJuYW1lcyI6WyJJbmRleERyb3Bkb3duIiwiZHJvcGRvd25Qb3BvdmVyU2hvdyIsInNldERyb3Bkb3duUG9wb3ZlclNob3ciLCJSZWFjdCIsInVzZVN0YXRlIiwiYnRuRHJvcGRvd25SZWYiLCJjcmVhdGVSZWYiLCJwb3BvdmVyRHJvcGRvd25SZWYiLCJvcGVuRHJvcGRvd25Qb3BvdmVyIiwiY3JlYXRlUG9wcGVyIiwiY3VycmVudCIsInBsYWNlbWVudCIsImNsb3NlRHJvcGRvd25Qb3BvdmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImdhcCIsImZvbnRTaXplIiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxNQUFNO0FBQUE7O0FBQzFCO0FBQ0EsUUFBTSxDQUFDQyxtQkFBRCxFQUFzQkMsc0JBQXRCLElBQWdEQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUF0RDtBQUNBLFFBQU1DLGNBQWMsZ0JBQUdGLDRDQUFLLENBQUNHLFNBQU4sRUFBdkI7QUFDQSxRQUFNQyxrQkFBa0IsZ0JBQUdKLDRDQUFLLENBQUNHLFNBQU4sRUFBM0I7O0FBQ0EsUUFBTUUsbUJBQW1CLEdBQUcsTUFBTTtBQUNoQ0MsdUVBQVksQ0FBQ0osY0FBYyxDQUFDSyxPQUFoQixFQUF5Qkgsa0JBQWtCLENBQUNHLE9BQTVDLEVBQXFEO0FBQy9EQyxlQUFTLEVBQUU7QUFEb0QsS0FBckQsQ0FBWjtBQUdBVCwwQkFBc0IsQ0FBQyxJQUFELENBQXRCO0FBQ0QsR0FMRDs7QUFNQSxRQUFNVSxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDViwwQkFBc0IsQ0FBQyxLQUFELENBQXRCO0FBQ0Qs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LHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQSwrQkFDRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsbUJBQVMsRUFDUCwrRkFISjtBQUtFLGVBQUssRUFBRTtBQUFDSCxvQkFBUSxFQUFDLE1BQVY7QUFBa0JDLGlCQUFLLEVBQUMsU0FBeEI7QUFBbUNDLHNCQUFVLEVBQUMsTUFBOUM7QUFBc0RDLHNCQUFVLEVBQUM7QUFBakUsV0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBLGtCQURGO0FBK0ZELENBN0dEOztHQUFNckIsYTs7S0FBQUEsYTtBQStHU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuMDJjYTdjN2MyNDE5M2Q0NTkzMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcHBlciB9IGZyb20gXCJAcG9wcGVyanMvY29yZVwiO1xuXG5jb25zdCBJbmRleERyb3Bkb3duID0gKCkgPT4ge1xuICAvLyBkcm9wZG93biBwcm9wc1xuICBjb25zdCBbZHJvcGRvd25Qb3BvdmVyU2hvdywgc2V0RHJvcGRvd25Qb3BvdmVyU2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGJ0bkRyb3Bkb3duUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIGNvbnN0IHBvcG92ZXJEcm9wZG93blJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBjb25zdCBvcGVuRHJvcGRvd25Qb3BvdmVyID0gKCkgPT4ge1xuICAgIGNyZWF0ZVBvcHBlcihidG5Ecm9wZG93blJlZi5jdXJyZW50LCBwb3BvdmVyRHJvcGRvd25SZWYuY3VycmVudCwge1xuICAgICAgcGxhY2VtZW50OiBcImJvdHRvbS1zdGFydFwiLFxuICAgIH0pO1xuICAgIHNldERyb3Bkb3duUG9wb3ZlclNob3codHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGNsb3NlRHJvcGRvd25Qb3BvdmVyID0gKCkgPT4ge1xuICAgIHNldERyb3Bkb3duUG9wb3ZlclNob3coZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZUdyYXktNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGxnOm1yLTEgbGc6bWItMCBtbC0zIG1iLTMgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgcmVmPXtidG5Ecm9wZG93blJlZn1cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZHJvcGRvd25Qb3BvdmVyU2hvdyA/IGNsb3NlRHJvcGRvd25Qb3BvdmVyKCkgOiBvcGVuRHJvcGRvd25Qb3BvdmVyKCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzIHRleHQtd2hpdGVcIj48L2k+XG4gICAgPC9idXR0b24+XG4gICAgICBcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtwb3BvdmVyRHJvcGRvd25SZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKGRyb3Bkb3duUG9wb3ZlclNob3cgPyBcImJsb2NrIFwiIDogXCJoaWRkZW4gXCIpICtcbiAgICAgICAgICBcImJnLXdoaXRlIHRleHQtYmFzZSB6LTUwIGZsb2F0LWxlZnQgcHktMiBsaXN0LW5vbmUgdGV4dC1sZWZ0IHNoYWRvdy1sZyBtaW4tdy00OFwiXG4gICAgICAgIH1cbiAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjODQ5NEY4XCIsIFxuICAgICAgICBwYWRkaW5nOiBcIjQ1cHggMTY3cHggNTlweCA0MHB4XCIsXG4gICAgICAgIGdhcDogXCIxMHB4XCJ9fVxuICAgICAgPlxuICAgICAgICBcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLCBjb2xvcjpcIiNmZmZmZmZcIiwgbGluZUhlaWdodDpcIjQwcHhcIiwgZm9udFdlaWdodDpcIjcwMFwifX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLCBjb2xvcjpcIiNmZmZmZmZcIiwgbGluZUhlaWdodDpcIjQwcHhcIiwgZm9udFdlaWdodDpcIjcwMFwifX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTZXJ2aWNlc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3dvcmtzXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0ZXh0LXNtIHB5LTIgcHgtNCBmb250LW5vcm1hbCBibG9jayB3LWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlR3JheS03MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIiwgY29sb3I6XCIjZmZmZmZmXCIsIGxpbmVIZWlnaHQ6XCI0MHB4XCIsIGZvbnRXZWlnaHQ6XCI3MDBcIn19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgT3VyIFdvcmtcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLCBjb2xvcjpcIiNmZmZmZmZcIiwgbGluZUhlaWdodDpcIjQwcHhcIiwgZm9udFdlaWdodDpcIjcwMFwifX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCbG9nXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLCBjb2xvcjpcIiNmZmZmZmZcIiwgbGluZUhlaWdodDpcIjQwcHhcIiwgZm9udFdlaWdodDpcIjcwMFwifX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBYm91dFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLCBjb2xvcjpcIiNmZmZmZmZcIiwgbGluZUhlaWdodDpcIjQwcHhcIiwgZm9udFdlaWdodDpcIjcwMFwifX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleERyb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==