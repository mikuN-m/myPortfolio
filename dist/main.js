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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub/sub */ \"./src/sub/sub.js\");\n\r\n\r\n(0,_sub_sub__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/sub/sub.js":
/*!************************!*\
  !*** ./src/sub/sub.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Test = () => {\r\n    //マウスの位置を％で取得\r\n\r\n\r\n// タブ切り替え\r\nconst $contentTarget = document.getElementsByClassName('js-nav-target');\r\nconst $tabTrigger = document.getElementsByClassName('js-trigger');\r\n\r\n//初期化関数\r\nconst init = () => {\r\n  $contentTarget[0].style.display = 'block';\r\n}\r\ninit();\r\n\r\nconst contentInit = (target,trigger) => {\r\n  target.style.display = 'none';\r\n  trigger.classList.remove('now');\r\n}\r\n\r\n\r\n//click\r\nconst clickHander = (trigger,target) => {\r\n  trigger.addEventListener('click', () => {\r\n    for (let i=0; $tabTrigger.length>i; i++) {\r\n      contentInit($contentTarget[i],$tabTrigger[i]);\r\n    }\r\n\r\n    target.style.display = 'block'\r\n    trigger.classList.add('now');\r\n  });\r\n}\r\n\r\nfor (let i=0; $tabTrigger.length>i; i++) {\r\n  clickHander($tabTrigger[i],$contentTarget[i]);\r\n}\r\n\r\n\r\n// work\r\nconst workTarget = document.getElementById('js-work-target');\r\nconst workBackTrigger = document.getElementById('js-work-BackTrigger');\r\nconst workGoTrigger = document.getElementById('js-work-GoTrigger');\r\n\r\nconst imgBox = ['url(../stylesheets/image/work-img1.png)','url(../stylesheets/image/work-img2.png)'];\r\nlet showNum = 0;\r\n\r\nconst show = () => {\r\n  workTarget.style.backgroundImage = imgBox[showNum];\r\n}\r\n\r\nconst clickGo = () => {\r\n  if (showNum == imgBox.length-1) {\r\n    showNum = 0;\r\n  } else {\r\n    showNum++;\r\n  }\r\n  show();\r\n}\r\n\r\nconst clickBack = () => {\r\n  if (showNum == 0) {\r\n    showNum = imgBox.length-1\r\n  } else {\r\n    showNum--;\r\n  }\r\n  show();\r\n}\r\n\r\nworkGoTrigger.addEventListener('click', () => {\r\n  clickGo();\r\n});\r\nworkBackTrigger.addEventListener('click', () => {\r\n  clickBack();\r\n});\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);\n\n//# sourceURL=webpack://portfolio/./src/sub/sub.js?");

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