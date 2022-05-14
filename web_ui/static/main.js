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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_widgets_dropdown_list_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/widgets/dropdown_list.jsx */ \"./src/js/widgets/dropdown_list.jsx\");\n/* harmony import */ var _js_widgets_input_fileds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/widgets/input_fileds */ \"./src/js/widgets/input_fileds.jsx\");\n\n\n\n\nvar renderer = React.createElement;\nvar domContainers = [document.querySelector('#drop'), document.querySelector('#input')];\nReactDOM.render(renderer(_js_widgets_dropdown_list_jsx__WEBPACK_IMPORTED_MODULE_0__.DropdownApp), domContainers[0]);\nReactDOM.render(renderer(_js_widgets_input_fileds__WEBPACK_IMPORTED_MODULE_1__.InputFieldsApp), domContainers[1]);\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/js/widgets/dropdown_list.jsx":
/*!******************************************!*\
  !*** ./src/js/widgets/dropdown_list.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DropdownApp\": () => (/* binding */ DropdownApp)\n/* harmony export */ });\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar DynamicSelect = /*#__PURE__*/function (_React$Component) {\n  _inherits(DynamicSelect, _React$Component);\n\n  var _super = _createSuper(DynamicSelect);\n\n  function DynamicSelect(props) {\n    var _this;\n\n    _classCallCheck(this, DynamicSelect);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (event) {\n      var selectedValue = event.target.value;\n\n      _this.props.onSelectChange(selectedValue);\n    });\n\n    return _this;\n  }\n\n  _createClass(DynamicSelect, [{\n    key: \"render\",\n    value: function render() {\n      var label = this.props.label;\n      var arrayOfData = this.props.arrayOfData;\n      var options = arrayOfData.map(function (data) {\n        return React.createElement(\"option\", {\n          key: data.name,\n          value: data.name\n        }, data.name);\n      });\n      var name = label.toLowerCase().trim();\n      return React.createElement(\"div\", null, React.createElement(\"p\", null, label), React.createElement(\"select\", {\n        required: true,\n        className: \"form-select\",\n        onChange: this.handleChange,\n        name: name\n      }, React.createElement(\"option\", null, \"Select Item\"), options));\n    }\n  }]);\n\n  return DynamicSelect;\n}(React.Component);\n\nvar winery = [{\n  id: '0',\n  name: 'other'\n}, {\n  id: '1',\n  name: 'Artadi'\n}, {\n  id: '2',\n  name: 'Vega Sicilia'\n}, {\n  id: '3',\n  name: 'Toro Albala'\n}, {\n  id: '4',\n  name: 'Dominio de Pingus'\n}, {\n  id: '5',\n  name: 'Alvaro Palacios'\n}, {\n  id: '6',\n  name: 'Vina Sastre'\n}, {\n  id: '7',\n  name: 'Sierra Cantabria'\n}, {\n  id: '8',\n  name: 'La Rioja Alta'\n}, {\n  id: '9',\n  name: 'Marques de Murrieta'\n}, {\n  id: '10',\n  name: 'Vinedos de Paganos'\n}, {\n  id: '11',\n  name: 'Emilio Moro'\n}, {\n  id: '12',\n  name: 'Remirez de Ganuza'\n}, {\n  id: '13',\n  name: 'Bodegas Roda'\n}, {\n  id: '14',\n  name: 'Martinet'\n}, {\n  id: '15',\n  name: 'Matarromera'\n}, {\n  id: '16',\n  name: 'Contino'\n}, {\n  id: '17',\n  name: 'Abadia Retuerta'\n}, {\n  id: '18',\n  name: 'Vina Pedrosa'\n}, {\n  id: '19',\n  name: 'Sei Solo'\n}, {\n  id: '20',\n  name: 'Losada'\n}, {\n  id: '21',\n  name: 'Matsu'\n}, {\n  id: '22',\n  name: 'La Vicalanda'\n}, {\n  id: '23',\n  name: 'Mustiguillo'\n}, {\n  id: '24',\n  name: 'Portal del Priorat'\n}, {\n  id: '25',\n  name: 'Ramon Bilbao'\n}, {\n  id: '26',\n  name: 'Imperial'\n}, {\n  id: '27',\n  name: 'Conreria d\\'Scala Dei'\n}, {\n  id: '28',\n  name: 'Campillo'\n}, {\n  id: '29',\n  name: 'Mar de Frades'\n}, {\n  id: '30',\n  name: 'Bodegas La Horra'\n}, {\n  id: '31',\n  name: 'Enrique Mendoza'\n}, {\n  id: '32',\n  name: 'Clos Pons'\n}];\nvar region = [{\n  id: '0',\n  name: 'other'\n}, {\n  id: '1',\n  name: 'Toro'\n}, {\n  id: '2',\n  name: 'Vino de Espana'\n}, {\n  id: '3',\n  name: 'Ribera del Duero'\n}, {\n  id: '4',\n  name: 'Montilla-Moriles'\n}, {\n  id: '5',\n  name: 'Jumilla'\n}, {\n  id: '6',\n  name: 'Priorato'\n}, {\n  id: '7',\n  name: 'Rioja Alta'\n}, {\n  id: '8',\n  name: 'Somontano'\n}, {\n  id: '9',\n  name: 'Mallorca'\n}, {\n  id: '10',\n  name: 'Costers del Segre'\n}, {\n  id: '11',\n  name: 'Sardon de Duero'\n}, {\n  id: '12',\n  name: 'Rueda'\n}, {\n  id: '13',\n  name: 'Montsant'\n}, {\n  id: '14',\n  name: 'Rias Baixas'\n}, {\n  id: '15',\n  name: 'Penedes'\n}, {\n  id: '16',\n  name: 'Alicante'\n}];\nvar types = [{\n  id: '1',\n  name: 'Toro Red'\n}, {\n  id: '2',\n  name: 'Tempranillo'\n}, {\n  id: '3',\n  name: 'Ribera Del Duero Red'\n}, {\n  id: '4',\n  name: 'Pedro Ximenez'\n}, {\n  id: '5',\n  name: 'Red'\n}, {\n  id: '6',\n  name: 'Priorat Red'\n}, {\n  id: '7',\n  name: 'Rioja Red'\n}, {\n  id: '8',\n  name: 'Rioja White'\n}, {\n  id: '9',\n  name: 'Grenache'\n}, {\n  id: '10',\n  name: 'Cava'\n}, {\n  id: '11',\n  name: 'Sherry'\n}, {\n  id: '12',\n  name: 'Verdejo'\n}, {\n  id: '13',\n  name: 'Syrah'\n}, {\n  id: '14',\n  name: 'Monastrell'\n}, {\n  id: '15',\n  name: 'Mencia'\n}, {\n  id: '16',\n  name: 'Sparkling'\n}, {\n  id: '17',\n  name: 'Montsant Red'\n}, {\n  id: '18',\n  name: 'Albarino'\n}, {\n  id: '19',\n  name: 'Chardonnay'\n}, {\n  id: '20',\n  name: 'Cabernet Sauvignon'\n}, {\n  id: '21',\n  name: 'Sauvignon Blanc'\n}];\nvar base = [{\n  name: '1'\n}, {\n  name: '2'\n}, {\n  name: '3'\n}, {\n  name: '4'\n}, {\n  name: '5'\n}];\nvar acidity = [{\n  name: '1'\n}, {\n  name: '2'\n}, {\n  name: '3'\n}, {\n  name: '4'\n}, {\n  name: '5'\n}];\n\nvar DropdownApp = /*#__PURE__*/function (_React$Component2) {\n  _inherits(DropdownApp, _React$Component2);\n\n  var _super2 = _createSuper(DropdownApp);\n\n  function DropdownApp(props) {\n    var _this2;\n\n    _classCallCheck(this, DropdownApp);\n\n    _this2 = _super2.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this2), \"handleSelectChange\", function (selectedValue) {\n      _this2.setState({\n        selectedValue: selectedValue\n      });\n    });\n\n    _this2.state = {\n      selectedValue: 'other'\n    };\n    return _this2;\n  }\n\n  _createClass(DropdownApp, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"div\", {\n        className: \"DropdownApp\"\n      }, React.createElement(DynamicSelect, {\n        label: \"Winery\",\n        arrayOfData: winery,\n        onSelectChange: this.handleSelectChange\n      }), React.createElement(DynamicSelect, {\n        label: \"Region\",\n        arrayOfData: region,\n        onSelectChange: this.handleSelectChange\n      }), React.createElement(DynamicSelect, {\n        label: \"Grape type\",\n        arrayOfData: types,\n        onSelectChange: this.handleSelectChange\n      })), React.createElement(\"div\", {\n        className: \"DropdownApp\"\n      }, React.createElement(DynamicSelect, {\n        label: \"Base\",\n        arrayOfData: base,\n        onSelectChange: this.handleSelectChange\n      }), React.createElement(DynamicSelect, {\n        label: \"Acidity\",\n        arrayOfData: acidity,\n        onSelectChange: this.handleSelectChange\n      })));\n    }\n  }]);\n\n  return DropdownApp;\n}(React.Component);\n\n\n\n//# sourceURL=webpack://webpack/./src/js/widgets/dropdown_list.jsx?");

/***/ }),

/***/ "./src/js/widgets/input_fileds.jsx":
/*!*****************************************!*\
  !*** ./src/js/widgets/input_fileds.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputFieldsApp\": () => (/* binding */ InputFieldsApp)\n/* harmony export */ });\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar InputFields = /*#__PURE__*/function (_React$Component) {\n  _inherits(InputFields, _React$Component);\n\n  var _super = _createSuper(InputFields);\n\n  function InputFields(props) {\n    _classCallCheck(this, InputFields);\n\n    return _super.call(this, props);\n  }\n  /*\r\n  handleChange = (event) =>\r\n  {\r\n      alert(event.target.value)\r\n  }\r\n  */\n\n\n  _createClass(InputFields, [{\n    key: \"render\",\n    value: function render() {\n      var label = this.props.label;\n      var name = this.props.name;\n      return React.createElement(\"div\", {\n        className: \"form-group\"\n      }, React.createElement(\"label\", null, label), React.createElement(\"input\", {\n        type: \"number\",\n        className: \"form-control\",\n        placeholder: \"Enter number\",\n        \"aria-label\": \"Enter number\",\n        onChange: this.handleChange,\n        name: name\n      }));\n    }\n  }]);\n\n  return InputFields;\n}(React.Component);\n\nvar InputFieldsApp = /*#__PURE__*/function (_React$Component2) {\n  _inherits(InputFieldsApp, _React$Component2);\n\n  var _super2 = _createSuper(InputFieldsApp);\n\n  function InputFieldsApp(props) {\n    _classCallCheck(this, InputFieldsApp);\n\n    return _super2.call(this, props);\n  }\n\n  _createClass(InputFieldsApp, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        id: \"InputFields\"\n      }, React.createElement(InputFields, {\n        label: \"Year\",\n        name: \"year\"\n      }), React.createElement(InputFields, {\n        label: \"Price €\",\n        name: \"price\"\n      }));\n    }\n  }]);\n\n  return InputFieldsApp;\n}(React.Component);\n\n\n\n//# sourceURL=webpack://webpack/./src/js/widgets/input_fileds.jsx?");

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