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

/***/ "./src/js/preview.js":
/*!***************************!*\
  !*** ./src/js/preview.js ***!
  \***************************/
/***/ (() => {

eval("const main                 = document.querySelector(\".main\");\r\nconst inputSection         = main.querySelector(\".input-section\");\r\nconst previewSection       = main.querySelector(\".preview-section\");\r\n\r\nconst previewToggleButtons = main.querySelectorAll(\".markdown-section-header__toggle-preview\");\r\nconst previewToggle = previewSection.querySelector(\"[data-toggle]\");\r\n\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    previewToggle.setAttribute(\"data-toggle\", inputSection.hasAttribute(\"data-closed\") ? \"hide\" : \"show\");\r\n})\r\n\r\n\r\npreviewToggleButtons.forEach((toggle) => {\r\n    toggle.addEventListener(\"click\", (event) => {\r\n        const toggleState = toggle.dataset.toggle;\r\n\r\n        // hide input section and show preview if on mobile\r\n        inputSection.toggleAttribute(\"data-closed\", toggleState === \"show\");\r\n        previewSection.toggleAttribute(\"data-opened\", toggleState === \"show\");\r\n\r\n\r\n        // If you press the toggle switch inside the input section (on mobile devices), the state of the toggle switch inside the preview section should be opposite.\r\n        if (!toggle.closest(\".preview-section\")) {\r\n\r\n            previewToggle.dataset.toggle = \"hide\";\r\n            return\r\n        }\r\n\r\n        // Changing toggle mode in preview depending on whether input field is shown or not\r\n        toggle.setAttribute(\"data-toggle\", inputSection.hasAttribute(\"data-closed\") ? \"hide\" : \"show\");\r\n    })\r\n})\r\n\r\n\n\n//# sourceURL=webpack://gulp-startup/./src/js/preview.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/preview.js"]();
/******/ 	
/******/ })()
;