webpackHotUpdate_N_E("pages/index",{

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
        style: {
          fontSize: "36px"
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bnMvSW5kZXhEcm9wZG93bi5qcyJdLCJuYW1lcyI6WyJJbmRleERyb3Bkb3duIiwiZHJvcGRvd25Qb3BvdmVyU2hvdyIsInNldERyb3Bkb3duUG9wb3ZlclNob3ciLCJSZWFjdCIsInVzZVN0YXRlIiwiYnRuRHJvcGRvd25SZWYiLCJjcmVhdGVSZWYiLCJwb3BvdmVyRHJvcGRvd25SZWYiLCJvcGVuRHJvcGRvd25Qb3BvdmVyIiwiY3JlYXRlUG9wcGVyIiwiY3VycmVudCIsInBsYWNlbWVudCIsImNsb3NlRHJvcGRvd25Qb3BvdmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUFBOztBQUMxQjtBQUNBLFFBQU0sQ0FBQ0MsbUJBQUQsRUFBc0JDLHNCQUF0QixJQUFnREMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBdEQ7QUFDQSxRQUFNQyxjQUFjLGdCQUFHRiw0Q0FBSyxDQUFDRyxTQUFOLEVBQXZCO0FBQ0EsUUFBTUMsa0JBQWtCLGdCQUFHSiw0Q0FBSyxDQUFDRyxTQUFOLEVBQTNCOztBQUNBLFFBQU1FLG1CQUFtQixHQUFHLE1BQU07QUFDaENDLHVFQUFZLENBQUNKLGNBQWMsQ0FBQ0ssT0FBaEIsRUFBeUJILGtCQUFrQixDQUFDRyxPQUE1QyxFQUFxRDtBQUMvREMsZUFBUyxFQUFFO0FBRG9ELEtBQXJELENBQVo7QUFHQVQsMEJBQXNCLENBQUMsSUFBRCxDQUF0QjtBQUNELEdBTEQ7O0FBTUEsUUFBTVUsb0JBQW9CLEdBQUcsTUFBTTtBQUNqQ1YsMEJBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFBQSw0QkFDQTtBQUNFLGVBQVMsRUFBQyx3TUFEWjtBQUVFLFVBQUksRUFBQyxRQUZQO0FBR0UsU0FBRyxFQUFFRyxjQUhQO0FBSUUsYUFBTyxFQUFHUSxDQUFELElBQU87QUFDZEEsU0FBQyxDQUFDQyxjQUFGO0FBQ0FiLDJCQUFtQixHQUFHVyxvQkFBb0IsRUFBdkIsR0FBNEJKLG1CQUFtQixFQUFsRTtBQUNELE9BUEg7QUFBQSw2QkFTRTtBQUFHLGlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQWFFO0FBQ0UsU0FBRyxFQUFFRCxrQkFEUDtBQUVFLGVBQVMsRUFDUCxDQUFDTixtQkFBbUIsR0FBRyxRQUFILEdBQWMsU0FBbEMsSUFDQSxnRkFKSjtBQU1FLFdBQUssRUFBRTtBQUFDYyx1QkFBZSxFQUFDO0FBQWpCLE9BTlQ7QUFBQSw4QkFTRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQ1AsK0ZBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBbUJFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFdBQVg7QUFBdUIsYUFBSyxFQUFFO0FBQUNDLGtCQUFRLEVBQUM7QUFBVixTQUE5QjtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxFQUNQLCtGQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkYsZUE2QkUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxFQUNQLCtGQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3QkYsZUF1Q0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxFQUNQLCtGQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2Q0YsZUFpREUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxFQUNQLCtGQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqREYsZUEyREUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxFQUNQLCtGQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEzREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUEsa0JBREY7QUF1RkQsQ0FyR0Q7O0dBQU1oQixhOztLQUFBQSxhO0FBdUdTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZGJhNzEyNzUyMTE1ZTkzNWM2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgY3JlYXRlUG9wcGVyIH0gZnJvbSBcIkBwb3BwZXJqcy9jb3JlXCI7XG5cbmNvbnN0IEluZGV4RHJvcGRvd24gPSAoKSA9PiB7XG4gIC8vIGRyb3Bkb3duIHByb3BzXG4gIGNvbnN0IFtkcm9wZG93blBvcG92ZXJTaG93LCBzZXREcm9wZG93blBvcG92ZXJTaG93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYnRuRHJvcGRvd25SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgY29uc3QgcG9wb3ZlckRyb3Bkb3duUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIGNvbnN0IG9wZW5Ecm9wZG93blBvcG92ZXIgPSAoKSA9PiB7XG4gICAgY3JlYXRlUG9wcGVyKGJ0bkRyb3Bkb3duUmVmLmN1cnJlbnQsIHBvcG92ZXJEcm9wZG93blJlZi5jdXJyZW50LCB7XG4gICAgICBwbGFjZW1lbnQ6IFwiYm90dG9tLXN0YXJ0XCIsXG4gICAgfSk7XG4gICAgc2V0RHJvcGRvd25Qb3BvdmVyU2hvdyh0cnVlKTtcbiAgfTtcbiAgY29uc3QgY2xvc2VEcm9wZG93blBvcG92ZXIgPSAoKSA9PiB7XG4gICAgc2V0RHJvcGRvd25Qb3BvdmVyU2hvdyhmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJiZy1ibHVlR3JheS03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbGc6bXItMSBsZzptYi0wIG1sLTMgbWItMyBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICByZWY9e2J0bkRyb3Bkb3duUmVmfVxuICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkcm9wZG93blBvcG92ZXJTaG93ID8gY2xvc2VEcm9wZG93blBvcG92ZXIoKSA6IG9wZW5Ecm9wZG93blBvcG92ZXIoKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnMgdGV4dC13aGl0ZVwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgICAgIFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3BvcG92ZXJEcm9wZG93blJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAoZHJvcGRvd25Qb3BvdmVyU2hvdyA/IFwiYmxvY2sgXCIgOiBcImhpZGRlbiBcIikgK1xuICAgICAgICAgIFwiYmctd2hpdGUgdGV4dC1iYXNlIHotNTAgZmxvYXQtbGVmdCBweS0yIGxpc3Qtbm9uZSB0ZXh0LWxlZnQgc2hhZG93LWxnIG1pbi13LTQ4XCJcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiM4NDk0RjhcIn19XG4gICAgICA+XG4gICAgICAgIFxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwidGV4dC1zbSBweS0yIHB4LTQgZm9udC1ub3JtYWwgYmxvY2sgdy1mdWxsIHdoaXRlc3BhY2Utbm93cmFwIGJnLXRyYW5zcGFyZW50IHRleHQtYmx1ZUdyYXktNzAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIiBzdHlsZT17e2ZvbnRTaXplOlwiMzZweFwifX0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0ZXh0LXNtIHB5LTIgcHgtNCBmb250LW5vcm1hbCBibG9jayB3LWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlR3JheS03MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlcnZpY2VzXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya3NcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgT3VyIFdvcmtcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0ZXh0LXNtIHB5LTIgcHgtNCBmb250LW5vcm1hbCBibG9jayB3LWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlR3JheS03MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwidGV4dC1zbSBweS0yIHB4LTQgZm9udC1ub3JtYWwgYmxvY2sgdy1mdWxsIHdoaXRlc3BhY2Utbm93cmFwIGJnLXRyYW5zcGFyZW50IHRleHQtYmx1ZUdyYXktNzAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleERyb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==