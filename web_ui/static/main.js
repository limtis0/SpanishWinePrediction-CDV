/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_widgets_dropdown_list_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/widgets/dropdown_list.jsx */ \"./src/js/widgets/dropdown_list.jsx\");\n\n\n\nvar renderer = React.createElement;\nvar domContainers = [document.querySelector('#drop')];\nReactDOM.render(renderer(_js_widgets_dropdown_list_jsx__WEBPACK_IMPORTED_MODULE_0__.DropdownApp), domContainers[0]);\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/js/widgets/dropdown_list.jsx":
/*!******************************************!*\
  !*** ./src/js/widgets/dropdown_list.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DropdownApp\": () => (/* binding */ DropdownApp)\n/* harmony export */ });\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar DynamicSelect = /*#__PURE__*/function (_React$Component) {\n  _inherits(DynamicSelect, _React$Component);\n\n  var _super = _createSuper(DynamicSelect);\n\n  function DynamicSelect(props) {\n    var _this;\n\n    _classCallCheck(this, DynamicSelect);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (event) {\n      var selectedValue = event.target.value;\n\n      _this.props.onSelectChange(selectedValue);\n    });\n\n    return _this;\n  }\n\n  _createClass(DynamicSelect, [{\n    key: \"render\",\n    value: function render() {\n      var label = this.props.label;\n      var arrayOfData = this.props.arrayOfData;\n      var options = arrayOfData.map(function (data) {\n        return React.createElement(\"option\", {\n          key: data.id,\n          value: data.id\n        }, data.name);\n      });\n      return React.createElement(\"div\", null, React.createElement(\"p\", null, label), React.createElement(\"select\", {\n        className: \"form-select\",\n        onChange: this.handleChange\n      }, React.createElement(\"option\", null, \"Select Item\"), options));\n    }\n  }]);\n\n  return DynamicSelect;\n}(React.Component);\n\nvar arrayOfData = [{\n  id: '1 - Jerry',\n  name: 'Jerry'\n}, {\n  id: '2 - Elaine',\n  name: 'Elaine'\n}, {\n  id: '3 - Kramer',\n  name: 'Kramer'\n}, {\n  id: '4 - George',\n  name: 'George'\n}];\n\nvar DropdownApp = /*#__PURE__*/function (_React$Component2) {\n  _inherits(DropdownApp, _React$Component2);\n\n  var _super2 = _createSuper(DropdownApp);\n\n  function DropdownApp(props) {\n    var _this2;\n\n    _classCallCheck(this, DropdownApp);\n\n    _this2 = _super2.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this2), \"handleSelectChange\", function (selectedValue) {\n      _this2.setState({\n        selectedValue: selectedValue\n      });\n    });\n\n    _this2.state = {\n      selectedValue: 'Nothing selected'\n    };\n    return _this2;\n  }\n\n  _createClass(DropdownApp, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        id: \"DropdownApp\"\n      }, React.createElement(DynamicSelect, {\n        label: \"F\",\n        arrayOfData: arrayOfData,\n        onSelectChange: this.handleSelectChange\n      }), React.createElement(DynamicSelect, {\n        label: \"F\",\n        arrayOfData: arrayOfData,\n        onSelectChange: this.handleSelectChange\n      }), React.createElement(DynamicSelect, {\n        label: \"F\",\n        arrayOfData: arrayOfData,\n        onSelectChange: this.handleSelectChange\n      }), React.createElement(DynamicSelect, {\n        label: \"F\",\n        arrayOfData: arrayOfData,\n        onSelectChange: this.handleSelectChange\n      }));\n    }\n  }]);\n\n  return DropdownApp;\n}(React.Component);\n\n\n\n//# sourceURL=webpack://webpack/./src/js/widgets/dropdown_list.jsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;