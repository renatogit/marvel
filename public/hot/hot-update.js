webpackHotUpdate("main",{

/***/ "./src/layout/Main.jsx":
/*!*****************************!*\
  !*** ./src/layout/Main.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Api */ \"./src/components/Api.js\");\n/* harmony import */ var _assets_image_dbb2129035f83c491af200bb58e257cc_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/image/dbb2129035f83c491af200bb58e257cc.jpg */ \"./src/assets/image/dbb2129035f83c491af200bb58e257cc.jpg\");\n/* harmony import */ var _assets_image_dbb2129035f83c491af200bb58e257cc_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_dbb2129035f83c491af200bb58e257cc_jpg__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Main =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  function Main() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Main)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      data: [],\n      characters: [],\n      series: []\n    });\n\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      Object(_components_Api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('comics', function (res) {\n        _this2.setState({\n          data: res.body.data.results\n        });\n      });\n    } // componentDidMount(){\n    //   marvelApi('characters', res => {\n    //     this.setState({ characters: res.body })\n    //   })\n    // }\n    // componentDidMount(){\n    //   marvelApi('series', res => {\n    //     this.setState({ series: res.body.data.results })\n    //   })\n    // }\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          data = _this$state.data,\n          characters = _this$state.characters,\n          series = _this$state.series;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n        className: \"main\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, series.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"loading\"\n      }, \"Carregando ...\") : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"hero\"\n      }, data.map(function (n, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: i,\n          className: \"hero__content\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n          className: \"hero__title\"\n        }, \" \", n.title, \" \"), n.images.length > 0 ? n.images.map(function (n) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n            className: \"hero__img\",\n            src: n.path + '.' + n.extension\n          });\n        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          className: \"hero__img\",\n          src: _assets_image_dbb2129035f83c491af200bb58e257cc_jpg__WEBPACK_IMPORTED_MODULE_2___default.a\n        }));\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"hero\"\n      }, series.map(function (n, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: i,\n          className: \"hero__content\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          className: \"hero__img\",\n          src: n.thumbnail.path + '.' + n.thumbnail.extension\n        }));\n      })))));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L01haW4uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9NYWluLmpzeD9iOGFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtYXJ2ZWxBcGkgZnJvbSAnLi4vY29tcG9uZW50cy9BcGknXG5pbXBvcnQgTWFydmVsSW1nIGZyb21cdCcuLi9hc3NldHMvaW1hZ2UvZGJiMjEyOTAzNWY4M2M0OTFhZjIwMGJiNThlMjU3Y2MuanBnJ1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIFxuICAgIHN0YXRlID0ge1xuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRjaGFyYWN0ZXJzOiBbXSxcblx0XHRcdHNlcmllczogW11cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgbWFydmVsQXBpKCdjb21pY3MnLCByZXMgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogcmVzLmJvZHkuZGF0YS5yZXN1bHRzIH0pXG4gICAgICB9KVxuXHRcdH1cblx0XHQvLyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIC8vICAgbWFydmVsQXBpKCdjaGFyYWN0ZXJzJywgcmVzID0+IHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXJhY3RlcnM6IHJlcy5ib2R5IH0pXG4gICAgLy8gICB9KVxuXHRcdC8vIH1cblxuXHRcdC8vIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgLy8gICBtYXJ2ZWxBcGkoJ3NlcmllcycsIHJlcyA9PiB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBzZXJpZXM6IHJlcy5ib2R5LmRhdGEucmVzdWx0cyB9KVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3Qge2RhdGEsY2hhcmFjdGVycywgc2VyaWVzfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+IFxuICAgICAgICAgICAgey8qIHtjb25zb2xlLmxvZygnc2VyaWVzOicsIHNlcmllcyl9ICovfVxuICAgICAgICAgICAgPHNlY3Rpb24+XG5cdFx0XHRcdFx0XHRcdHtzZXJpZXMubGVuZ3RoID09PSAwID8gPGgyIGNsYXNzTmFtZT1cImxvYWRpbmdcIj5DYXJyZWdhbmRvIC4uLjwvaDI+IDogbnVsbCB9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG4gICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhlcm9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdHsgZGF0YS5tYXAoIChuLCBpKT0+IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJoZXJvX19jb250ZW50XCI+ICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDIgIGNsYXNzTmFtZT1cImhlcm9fX3RpdGxlXCI+XHR7IG4udGl0bGV9IDwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7KG4uaW1hZ2VzLmxlbmd0aCA+IDAgPyBuLmltYWdlcy5tYXAobiA9PiA8aW1nIGNsYXNzTmFtZT1cImhlcm9fX2ltZ1wiIHNyYz17IG4ucGF0aCArICcuJysgbi5leHRlbnNpb259IC8+KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogPGltZyBjbGFzc05hbWU9XCJoZXJvX19pbWdcIiBzcmM9e01hcnZlbEltZ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgPC91bD5cblx0XHRcdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdFx0XHRcdHsvKiBBUyBDSEFNQURBUyBOw4JPIFBPREVNIFNFUiBGRUlUQVMgSlVOVEFTICovfVxuXHRcdFx0XHRcdFx0XHQ8bmF2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoZXJvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgc2VyaWVzLm1hcCggKG4sIGkpID0+IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17aX0gY2xhc3NOYW1lPVwiaGVyb19fY29udGVudFwiPiAgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJoZXJvX19pbWdcIiBzcmM9eyBuLnRodW1ibmFpbC5wYXRoICsgJy4nKyBuLnRodW1ibmFpbC5leHRlbnNpb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTs7Ozs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQVlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBWUE7Ozs7QUE1REE7QUFDQTtBQThEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layout/Main.jsx\n");

/***/ })

})