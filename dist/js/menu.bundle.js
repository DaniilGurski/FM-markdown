/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (() => {

eval("const asidePanel = document.querySelector(\"#aside-panel\");\r\nconst burger = document.querySelector(\"#burger-menu\")\r\n\r\nburger.addEventListener(\"click\", () => {\r\n    if (burger.getAttribute(\"aria-expanded\") === \"true\") {\r\n        burger.setAttribute(\"aria-expanded\", \"false\");\r\n    } else {\r\n        burger.setAttribute(\"aria-expanded\", \"true\")\r\n    }\r\n\r\n    asidePanel.classList.toggle(\"aside--opened\")\r\n});\n\n//# sourceURL=webpack://gulp-startup/./src/js/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/menu.js"]();
/******/ 	
/******/ })()
;