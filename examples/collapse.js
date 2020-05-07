webpackJsonp([3],{

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"css-animation\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




var style = '\n\n.box {\n  background:red;\n  width:100px;\n  height:100px;\n}\n.collapse-active {\n  transition: height .3s ease-out;\n}\n\n';

var show = true;

function toggle() {
  var t = document.getElementById('t');
  var b = document.getElementById('b');
  b.disabled = true;
  t.style.display = '';
  var height = void 0;
  __WEBPACK_IMPORTED_MODULE_0_css_animation___default()(t, 'collapse', {
    start: function start() {
      if (show) {
        t.style.height = t.offsetHeight + 'px';
      } else {
        height = t.offsetHeight;
        t.style.height = 0;
      }
    },
    active: function active() {
      t.style.height = (show ? height : 0) + 'px';
    },
    end: function end() {
      t.style.display = show ? '' : 'none';
      b.disabled = false;
      t.style.height = '';
    }
  });
  show = !show;
}

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: style } }),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'box', id: 't' }),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'button',
    { onClick: toggle, id: 'b' },
    'toggle'
  )
), document.getElementById('__react-content'));

/***/ })

},[190]);
//# sourceMappingURL=collapse.js.map