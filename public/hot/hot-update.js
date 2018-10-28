webpackHotUpdate("main",{

/***/ "./src/layout/Main.jsx":
/*!*****************************!*\
  !*** ./src/layout/Main.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Api */ \"./src/components/Api.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Main =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  function Main() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Main)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      data: []\n    });\n\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      Object(_components_Api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('comics', function (res) {\n        _this2.setState({\n          data: res.body.data.results\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.state.data;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n        className: \"main\"\n      }, console.log('data:', data), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, data.length === 0 ? 'Carregando ...' : data.map(function (n, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"heroTitle\",\n          key: i\n        }, \"  \", n.images.path, n.title, \" \");\n      })))));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L01haW4uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9NYWluLmpzeD9iOGFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtYXJ2ZWxBcGkgZnJvbSAnLi4vY29tcG9uZW50cy9BcGknXG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRhdGE6IFtdXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgICAgIG1hcnZlbEFwaSgnY29taWNzJywgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogcmVzLmJvZHkuZGF0YS5yZXN1bHRzXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPiBcbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coJ2RhdGE6JywgZGF0YSl9XG4gICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgeyBkYXRhLmxlbmd0aCA9PT0gMCA/ICdDYXJyZWdhbmRvIC4uLicgOiAgZGF0YS5tYXAgKChuLCBpKSA9PiA8bGkgY2xhc3NOYW1lPVwiaGVyb1RpdGxlXCIga2V5PXtpfT4gIHtuLmltYWdlcy5wYXRofXsgbi50aXRsZX0gPC9saT5cdCl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTs7O0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTs7OztBQTlCQTtBQUNBO0FBaUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/Main.jsx\n");

/***/ })

})