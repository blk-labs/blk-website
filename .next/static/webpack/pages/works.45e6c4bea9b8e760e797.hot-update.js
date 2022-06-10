webpackHotUpdate_N_E("pages/works",{

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
        backgroundColor: "#8494F8"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/services",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          children: "Services"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/works",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          children: "Our Work"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/about",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/contact",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pablo",
          className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bnMvSW5kZXhEcm9wZG93bi5qcyJdLCJuYW1lcyI6WyJJbmRleERyb3Bkb3duIiwiZHJvcGRvd25Qb3BvdmVyU2hvdyIsInNldERyb3Bkb3duUG9wb3ZlclNob3ciLCJSZWFjdCIsInVzZVN0YXRlIiwiYnRuRHJvcGRvd25SZWYiLCJjcmVhdGVSZWYiLCJwb3BvdmVyRHJvcGRvd25SZWYiLCJvcGVuRHJvcGRvd25Qb3BvdmVyIiwiY3JlYXRlUG9wcGVyIiwiY3VycmVudCIsInBsYWNlbWVudCIsImNsb3NlRHJvcGRvd25Qb3BvdmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHLE1BQU07QUFBQTs7QUFDMUI7QUFDQSxRQUFNLENBQUNDLG1CQUFELEVBQXNCQyxzQkFBdEIsSUFBZ0RDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQXREO0FBQ0EsUUFBTUMsY0FBYyxnQkFBR0YsNENBQUssQ0FBQ0csU0FBTixFQUF2QjtBQUNBLFFBQU1DLGtCQUFrQixnQkFBR0osNENBQUssQ0FBQ0csU0FBTixFQUEzQjs7QUFDQSxRQUFNRSxtQkFBbUIsR0FBRyxNQUFNO0FBQ2hDQyx1RUFBWSxDQUFDSixjQUFjLENBQUNLLE9BQWhCLEVBQXlCSCxrQkFBa0IsQ0FBQ0csT0FBNUMsRUFBcUQ7QUFDL0RDLGVBQVMsRUFBRTtBQURvRCxLQUFyRCxDQUFaO0FBR0FULDBCQUFzQixDQUFDLElBQUQsQ0FBdEI7QUFDRCxHQUxEOztBQU1BLFFBQU1VLG9CQUFvQixHQUFHLE1BQU07QUFDakNWLDBCQUFzQixDQUFDLEtBQUQsQ0FBdEI7QUFDRCxHQUZEOztBQUdBLHNCQUNFO0FBQUEsNEJBQ0E7QUFDRSxlQUFTLEVBQUMsd01BRFo7QUFFRSxVQUFJLEVBQUMsUUFGUDtBQUdFLFNBQUcsRUFBRUcsY0FIUDtBQUlFLGFBQU8sRUFBR1EsQ0FBRCxJQUFPO0FBQ2RBLFNBQUMsQ0FBQ0MsY0FBRjtBQUNBYiwyQkFBbUIsR0FBR1csb0JBQW9CLEVBQXZCLEdBQTRCSixtQkFBbUIsRUFBbEU7QUFDRCxPQVBIO0FBQUEsNkJBU0U7QUFBRyxpQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFhRTtBQUNFLFNBQUcsRUFBRUQsa0JBRFA7QUFFRSxlQUFTLEVBQ1AsQ0FBQ04sbUJBQW1CLEdBQUcsUUFBSCxHQUFjLFNBQWxDLElBQ0EsZ0ZBSko7QUFNRSxXQUFLLEVBQUU7QUFBQ2MsdUJBQWUsRUFBQztBQUFqQixPQU5UO0FBQUEsOEJBU0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxFQUNQLCtGQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQW1CRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQ1AsK0ZBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRixlQTZCRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQ1AsK0ZBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdCRixlQXVDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQ1AsK0ZBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZDRixlQWlERSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQ1AsK0ZBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpERixlQTJERSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQ1AsK0ZBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQSxrQkFERjtBQXVGRCxDQXJHRDs7R0FBTWYsYTs7S0FBQUEsYTtBQXVHU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd29ya3MuNDVlNmM0YmVhOWI4ZTc2MGU3OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcHBlciB9IGZyb20gXCJAcG9wcGVyanMvY29yZVwiO1xuXG5jb25zdCBJbmRleERyb3Bkb3duID0gKCkgPT4ge1xuICAvLyBkcm9wZG93biBwcm9wc1xuICBjb25zdCBbZHJvcGRvd25Qb3BvdmVyU2hvdywgc2V0RHJvcGRvd25Qb3BvdmVyU2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGJ0bkRyb3Bkb3duUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIGNvbnN0IHBvcG92ZXJEcm9wZG93blJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBjb25zdCBvcGVuRHJvcGRvd25Qb3BvdmVyID0gKCkgPT4ge1xuICAgIGNyZWF0ZVBvcHBlcihidG5Ecm9wZG93blJlZi5jdXJyZW50LCBwb3BvdmVyRHJvcGRvd25SZWYuY3VycmVudCwge1xuICAgICAgcGxhY2VtZW50OiBcImJvdHRvbS1zdGFydFwiLFxuICAgIH0pO1xuICAgIHNldERyb3Bkb3duUG9wb3ZlclNob3codHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGNsb3NlRHJvcGRvd25Qb3BvdmVyID0gKCkgPT4ge1xuICAgIHNldERyb3Bkb3duUG9wb3ZlclNob3coZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZUdyYXktNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGxnOm1yLTEgbGc6bWItMCBtbC0zIG1iLTMgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgcmVmPXtidG5Ecm9wZG93blJlZn1cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZHJvcGRvd25Qb3BvdmVyU2hvdyA/IGNsb3NlRHJvcGRvd25Qb3BvdmVyKCkgOiBvcGVuRHJvcGRvd25Qb3BvdmVyKCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzIHRleHQtd2hpdGVcIj48L2k+XG4gICAgPC9idXR0b24+XG4gICAgICBcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtwb3BvdmVyRHJvcGRvd25SZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKGRyb3Bkb3duUG9wb3ZlclNob3cgPyBcImJsb2NrIFwiIDogXCJoaWRkZW4gXCIpICtcbiAgICAgICAgICBcImJnLXdoaXRlIHRleHQtYmFzZSB6LTUwIGZsb2F0LWxlZnQgcHktMiBsaXN0LW5vbmUgdGV4dC1sZWZ0IHNoYWRvdy1sZyBtaW4tdy00OFwiXG4gICAgICAgIH1cbiAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjODQ5NEY4XCJ9fVxuICAgICAgPlxuICAgICAgICBcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0ZXh0LXNtIHB5LTIgcHgtNCBmb250LW5vcm1hbCBibG9jayB3LWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlR3JheS03MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlcnZpY2VzXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya3NcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgT3VyIFdvcmtcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0ZXh0LXNtIHB5LTIgcHgtNCBmb250LW5vcm1hbCBibG9jayB3LWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlR3JheS03MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwidGV4dC1zbSBweS0yIHB4LTQgZm9udC1ub3JtYWwgYmxvY2sgdy1mdWxsIHdoaXRlc3BhY2Utbm93cmFwIGJnLXRyYW5zcGFyZW50IHRleHQtYmx1ZUdyYXktNzAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleERyb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==