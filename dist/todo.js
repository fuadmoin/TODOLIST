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

/***/ "./modules/completed.js":
/*!******************************!*\
  !*** ./modules/completed.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar isCompleted = function isCompleted(i) {\n  var todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];\n  var checkboxes = document.querySelectorAll(\"input[type='checkbox']\");\n  if (checkboxes[i].checked) {\n    todos[i].completed = true;\n  } else todos[i].completed = false;\n  console.log(todos[i]);\n  return localStorage.setItem('todoArray', JSON.stringify(todos));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isCompleted);\n\n//# sourceURL=webpack://todolist/./modules/completed.js?");

/***/ }),

/***/ "./modules/todoitems.js":
/*!******************************!*\
  !*** ./modules/todoitems.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDoItems)\n/* harmony export */ });\n/* harmony import */ var _img_select_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/select.png */ \"./img/select.png\");\n/* harmony import */ var _img_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/delete.png */ \"./img/delete.png\");\n/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/edit.png */ \"./img/edit.png\");\n/* harmony import */ var _img_save_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/save.png */ \"./img/save.png\");\n/* harmony import */ var _completed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./completed */ \"./modules/completed.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\nvar toDoItems = /*#__PURE__*/function () {\n  function toDoItems(text, completed, index) {\n    _classCallCheck(this, toDoItems);\n    this.text = text;\n    this.completed = completed;\n    this.index = index;\n  }\n  _createClass(toDoItems, null, [{\n    key: \"add\",\n    value: function add(text) {\n      var todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];\n      todos.push(text);\n      localStorage.setItem('todoArray', JSON.stringify(todos));\n    }\n  }, {\n    key: \"displayAll\",\n    value: function displayAll() {\n      var _this = this;\n      var ul = document.querySelector('.todoList');\n      ul.innerHTML = '';\n      var todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];\n      var _loop = function _loop(i) {\n        var isCompleted = todos[i].completed ? 'complete' : '';\n        var node = document.createElement('li');\n        node.setAttribute('class', \"todo-item \".concat(isCompleted));\n        node.setAttribute('data-key', todos[i].index);\n        node.innerHTML = '';\n        node.innerHTML = \" \\n            <input class=\\\"checkbox\\\" id=\\\"\".concat(todos[i].index, \"\\\" type=\\\"checkbox\\\"/>\\n          <img class=\\\"select\\\"  src=\").concat(_img_select_png__WEBPACK_IMPORTED_MODULE_0__, \" alt=\\\"\\\"/> <img class=\\\"save\\\"  src=\").concat(_img_save_png__WEBPACK_IMPORTED_MODULE_3__, \" alt=\\\"\\\"/>\\n            <img class=\\\"delete\\\"  src=\").concat(_img_delete_png__WEBPACK_IMPORTED_MODULE_1__, \" alt=\\\"\\\"/> <img class=\\\"edit\\\"  src=\").concat(_img_edit_png__WEBPACK_IMPORTED_MODULE_2__, \" alt=\\\"\\\"/>\\n           <span class=\\\"items\\\">\").concat(todos[i].text, \"</span>\\n        \\n            \");\n        ul.append(node);\n        var checkboxes = document.querySelectorAll(\"input[type='checkbox']\");\n        var option2 = document.querySelectorAll('.select');\n        var option3 = document.querySelectorAll('.delete');\n        var option1 = document.querySelectorAll('.edit');\n        var option = document.querySelectorAll('.save');\n        option3[i].addEventListener('click', function () {\n          toDoItems.remove(i);\n        });\n        option2[i].addEventListener('click', function () {\n          option2[i].style.display = 'none';\n          option[i].style.display = 'block';\n          option1[i].style.display = 'block';\n          _this.edit();\n        });\n        checkboxes[i].addEventListener('click', function (event) {\n          var parent = event.target.parentNode;\n          (0,_completed__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(i);\n          if (checkboxes[i].checked) {\n            parent.classList.add('complete');\n            option2[i].style.display = 'none';\n            option[i].style.display = 'none';\n            option1[i].style.display = 'none';\n          } else {\n            option2[i].style.display = 'block';\n            parent.classList.remove('complete');\n          }\n        });\n        if (todos[i].completed === true) {\n          checkboxes[i].checked = true;\n        } else {\n          checkboxes[i].checked = false;\n        }\n      };\n      for (var i = 0; i < todos.length; i += 1) {\n        _loop(i);\n      }\n    }\n  }, {\n    key: \"edit\",\n    value: function edit() {\n      var todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];\n      var tasks = document.querySelectorAll('.todoList li');\n      var _loop2 = function _loop2(i) {\n        var option1 = document.querySelectorAll('.edit');\n        var option2 = document.querySelectorAll('.select');\n        var option = document.querySelectorAll('.save');\n        var input4 = document.createElement('input');\n        option1[i].addEventListener('click', function () {\n          var key = todos[i].index;\n          var item = todos.findIndex(function (item) {\n            return item.index === key;\n          });\n          var text = todos[item].text;\n          input4.setAttribute('class', 'editable');\n          input4.type = 'text';\n          input4.value = text;\n          tasks[i].lastChild.replaceWith(input4);\n        });\n        option[i].addEventListener('click', function () {\n          var span = document.createElement('span');\n          span.textContent = input4.value;\n          var key = todos[i].index;\n          var task = todos.find(function (t) {\n            return t.index === key;\n          });\n          if (input4.value !== '') {\n            task.text = span.textContent;\n            localStorage.setItem('todoArray', JSON.stringify(todos));\n            toDoItems.displayAll();\n          }\n          input4.setAttribute('class', 'disabled');\n          option2[i].style.display = 'block';\n          option[i].style.display = 'none';\n          option1[i].style.display = 'none';\n        });\n      };\n      for (var i = 0; i < tasks.length; i += 1) {\n        _loop2(i);\n      }\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(i) {\n      var todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];\n      var key = todos[i].index;\n      var task = todos.find(function (t) {\n        return t.index === key;\n      });\n      todos = todos.filter(function (item) {\n        return item !== task;\n      });\n      localStorage.setItem('todoArray', JSON.stringify(todos));\n      var todos2 = JSON.parse(window.localStorage.getItem('todoArray')) || [];\n      for (var _i = 1; _i <= todos2.length; _i += 1) {\n        todos2[_i - 1].index = _i;\n      }\n      localStorage.setItem('todoArray', JSON.stringify(todos2));\n      this.displayAll();\n    }\n  }, {\n    key: \"removeAll\",\n    value: function removeAll() {\n      var todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];\n      var tasks = document.querySelectorAll('.todoList li');\n      var tobeDeleted = [];\n      var _loop3 = function _loop3() {\n        var checkboxes = document.querySelectorAll(\"input[type='checkbox']\");\n        if (checkboxes[i].checked) {\n          var key = todos[i].index;\n          var task = todos.find(function (t) {\n            return t.index === key;\n          });\n          tobeDeleted.push(task);\n        }\n      };\n      for (var i = 0; i < tasks.length; i += 1) {\n        _loop3();\n      }\n      todos = todos.filter(function (item) {\n        return !tobeDeleted.includes(item);\n      });\n      localStorage.setItem('todoArray', JSON.stringify(todos));\n      var todos2 = JSON.parse(window.localStorage.getItem('todoArray')) || [];\n      for (var _i2 = 1; _i2 <= todos2.length; _i2 += 1) {\n        todos2[_i2 - 1].index = _i2;\n      }\n      localStorage.setItem('todoArray', JSON.stringify(todos2));\n      this.displayAll();\n    }\n  }]);\n  return toDoItems;\n}();\n\n\n//# sourceURL=webpack://todolist/./modules/todoitems.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_todoitems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/todoitems.js */ \"./modules/todoitems.js\");\n/* harmony import */ var _img_refresh_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/refresh.png */ \"./img/refresh.png\");\n\n\n\nvar container = document.getElementById('container');\nvar form = document.querySelector('form');\nform.innerHTML = \"\\n<label class=\\\"title\\\"\\n>Today's To Do <img class=\\\"refresh\\\" src=\".concat(_img_refresh_png__WEBPACK_IMPORTED_MODULE_2__, \" alt=\\\"refresh\\\"\\n/></label>\\n<input\\nclass=\\\"inputText\\\"\\nplaceholder=\\\"Add to your list...\\\"\\ntype=\\\"text\\\"\\n/>\\n\");\nvar input = document.querySelector('.inputText');\nform.addEventListener('submit', function (event) {\n  event.preventDefault();\n  var inputed = input.value;\n  if (input !== '') {\n    var todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];\n    var length = todos.length + 1;\n    var todo = new _modules_todoitems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputed, false, length);\n    _modules_todoitems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add(todo);\n    _modules_todoitems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayAll();\n    input.value = '';\n    input.focus();\n  }\n});\nvar btnDeleteAll = document.createElement('button');\nbtnDeleteAll.setAttribute('class', 'delete-all');\nbtnDeleteAll.textContent = 'Clear all completed';\ncontainer.append(btnDeleteAll);\nbtnDeleteAll.addEventListener('click', function () {\n  _modules_todoitems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeAll();\n});\nwindow.onload = _modules_todoitems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayAll();\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#container {\\r\\n  left: 30%;\\r\\n  position: relative;\\r\\n  top: 50px;\\r\\n  width: 30%;\\r\\n  border: 1px solid wheat;\\r\\n  padding: 20px 20px 0 20px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: block;\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n.refresh {\\r\\n  float: right;\\r\\n  position: relative;\\r\\n  top: 3px;\\r\\n  right: -15px;\\r\\n}\\r\\n\\r\\n.inputText {\\r\\n  margin-top: 15px;\\r\\n  width: 108%;\\r\\n  height: 40px;\\r\\n  position: relative;\\r\\n  left: -20px;\\r\\n  font-size: 18px;\\r\\n  border: 1px solid wheat;\\r\\n  border-left: none;\\r\\n  border-right: none;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-style: italic;\\r\\n  position: relative;\\r\\n  left: 15px;\\r\\n}\\r\\n\\r\\n.todo-item {\\r\\n  text-decoration: none;\\r\\n  min-height: 27px;\\r\\n  width: 105%;\\r\\n  border-bottom: 1px solid wheat;\\r\\n  list-style: none;\\r\\n  font-size: 20px;\\r\\n  padding: 13px 10px;\\r\\n  left: -20px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  display: none;\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.edit {\\r\\n  display: none;\\r\\n  position: relative;\\r\\n  left: -30px;\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  display: inline-block;\\r\\n  margin-left: 15px;\\r\\n  top: 5px;\\r\\n  width: 340px;\\r\\n}\\r\\n\\r\\n.select {\\r\\n  display: block;\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.save {\\r\\n  float: right;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.delete-all {\\r\\n  height: 50px;\\r\\n  width: 109%;\\r\\n  position: relative;\\r\\n  top: 0;\\r\\n  left: -20px;\\r\\n  border-style: none;\\r\\n}\\r\\n\\r\\n.complete span {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.complete .delete {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.complete .select {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.editable {\\r\\n  display: block;\\r\\n  position: relative;\\r\\n  top: 10px;\\r\\n  height: 20px;\\r\\n}\\r\\n\\r\\n.complete .editable {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.disabled {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n  position: relative;\\r\\n  right: 40px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./img/delete.png":
/*!************************!*\
  !*** ./img/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0484fb5a0c6903b28b2b.png\";\n\n//# sourceURL=webpack://todolist/./img/delete.png?");

/***/ }),

/***/ "./img/edit.png":
/*!**********************!*\
  !*** ./img/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74eca6f311eb08ca96ee.png\";\n\n//# sourceURL=webpack://todolist/./img/edit.png?");

/***/ }),

/***/ "./img/refresh.png":
/*!*************************!*\
  !*** ./img/refresh.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"95fe9ff30905b13de203.png\";\n\n//# sourceURL=webpack://todolist/./img/refresh.png?");

/***/ }),

/***/ "./img/save.png":
/*!**********************!*\
  !*** ./img/save.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ec86e14f4728d9f9874f.png\";\n\n//# sourceURL=webpack://todolist/./img/save.png?");

/***/ }),

/***/ "./img/select.png":
/*!************************!*\
  !*** ./img/select.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a70d8793503778e2a955.png\";\n\n//# sourceURL=webpack://todolist/./img/select.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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