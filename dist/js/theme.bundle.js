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

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ (() => {

eval("const aside = document.querySelector(\"aside\");\r\nconst body  = document.querySelector(\"body\");\r\nconst themeToggle = aside.querySelector(\"#theme-toggle\");\r\nlet lightModeEnabled = JSON.parse(localStorage.getItem(\"markdown-light-theme\")) || false;\r\n\r\nbody.classList.toggle(\"dark-mode\", !lightModeEnabled);\r\nthemeToggle.checked = lightModeEnabled;\r\n\r\n\r\nconst togglePageTheme = () => {\r\n    lightModeEnabled = !lightModeEnabled\r\n    localStorage.setItem(\"markdown-light-theme\", lightModeEnabled);\r\n    body.classList.toggle(\"dark-mode\", !lightModeEnabled);\r\n}\r\n\r\n\r\nthemeToggle.addEventListener(\"change\", togglePageTheme);\n\n//# sourceURL=webpack://gulp-startup/./src/js/theme.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/theme.js"]();
/******/ 	
/******/ })()
;