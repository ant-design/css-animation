webpackJsonp([1],{

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"css-animation\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




var style = '\n\n.box {\n  background:red;\n  width:100px;\n  height:100px;\n}\n.fade-enter {\n  opacity: 0;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n\n.fade-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n\n.fade-enter.fade-enter-active {\n  animation-name: rcDialogFadeIn;\n  animation-play-state: running;\n}\n\n.fade-leave.fade-leave-active {\n  animation-name: rcDialogFadeOut;\n  animation-play-state: running;\n}\n\n@keyframes rcDialogFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes rcDialogFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n';

var show = true;

function toggle() {
  var t = document.getElementById('t');
  var b = document.getElementById('b');
  b.disabled = true;
  t.style.visibility = '';
  __WEBPACK_IMPORTED_MODULE_0_css_animation___default()(t, 'fade-' + (show ? 'leave' : 'enter'), function () {
    t.style.visibility = show ? '' : 'hidden';
    b.disabled = false;
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

},[192]);
//# sourceMappingURL=simple.js.map