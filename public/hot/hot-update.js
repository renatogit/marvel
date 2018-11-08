webpackHotUpdate("main",{

/***/ "./src/api/Api.js":
/*!************************!*\
  !*** ./src/api/Api.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ \"./node_modules/superagent/lib/client.js\");\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! md5 */ \"./node_modules/md5/md5.js\");\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_2__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Url = \"http://gateway.marvel.com/v1/public/\";\nvar ts = moment__WEBPACK_IMPORTED_MODULE_1___default()().format();\nvar PUBLIC_KEY = '6ae3d7a8199b3e981ca22b094ee67e7f';\nvar PRIVATE_KEY = '12109bea940e0c5ddd39147e8328a322f660e2a3';\nvar hash = md5__WEBPACK_IMPORTED_MODULE_2___default()(ts + PRIVATE_KEY + PUBLIC_KEY);\n\nvar Api =\n/*#__PURE__*/\nfunction () {\n  function Api() {\n    _classCallCheck(this, Api);\n  }\n\n  _createClass(Api, null, [{\n    key: \"getMarvel\",\n    value: function getMarvel(path, callback) {\n      return superagent__WEBPACK_IMPORTED_MODULE_0___default.a.get(Url + path + '?ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash).set('Accept', 'application/json').then(callback).catch(function (err) {\n        err.message, err.response;\n      });\n    }\n  }]);\n\n  return Api;\n}(); // console.log('apikey: ', PUBLIC_KEY, 'ts: ', ts, 'hash: ', hash );\n\n\nconsole.log('Url: ', Url + 'characters' + '?ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL0FwaS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcGkvQXBpLmpzPzNhNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IG1kNSBmcm9tICdtZDUnXG5cbmNvbnN0IFVybCA9IFwiaHR0cDovL2dhdGV3YXkubWFydmVsLmNvbS92MS9wdWJsaWMvXCI7XG5cbnZhciB0cyA9IG1vbWVudCgpLmZvcm1hdCgpO1xuY29uc3QgUFVCTElDX0tFWSA9ICc2YWUzZDdhODE5OWIzZTk4MWNhMjJiMDk0ZWU2N2U3ZidcbmNvbnN0IFBSSVZBVEVfS0VZID0gJzEyMTA5YmVhOTQwZTBjNWRkZDM5MTQ3ZTgzMjhhMzIyZjY2MGUyYTMnXG5jb25zdCBoYXNoID0gbWQ1KHRzICsgUFJJVkFURV9LRVkgKyBQVUJMSUNfS0VZKTtcblxuY2xhc3MgQXBpIHtcblxuXHRzdGF0aWMgZ2V0TWFydmVsKHBhdGgsIGNhbGxiYWNrKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Rcblx0XHRcdC5nZXQoVXJsICsgcGF0aCArICc/dHM9JyArIHRzICsgJyZhcGlrZXk9JyArIFBVQkxJQ19LRVkgKyAnJmhhc2g9JyArIGhhc2gpXG5cdFx0XHQuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG5cdFx0XHQudGhlbihjYWxsYmFjaylcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRlcnIubWVzc2FnZSwgZXJyLnJlc3BvbnNlXG5cdFx0XHR9KTtcblx0fVxufVxuXG4vLyBjb25zb2xlLmxvZygnYXBpa2V5OiAnLCBQVUJMSUNfS0VZLCAndHM6ICcsIHRzLCAnaGFzaDogJywgaGFzaCApO1xuXG5jb25zb2xlLmxvZygnVXJsOiAnLFVybCArICdjaGFyYWN0ZXJzJyArICc/dHM9JyArIHRzICsgJyZhcGlrZXk9JyArIFBVQkxJQ19LRVkgKyAnJmhhc2g9JyArIGhhc2gpO1xuXG5leHBvcnQgZGVmYXVsdCBBcGk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/Api.js\n");

/***/ })

})