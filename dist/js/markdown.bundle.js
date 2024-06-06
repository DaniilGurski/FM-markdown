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

/***/ "./src/js/markdown.js":
/*!****************************!*\
  !*** ./src/js/markdown.js ***!
  \****************************/
/***/ (() => {

eval("const main           = document.querySelector(\".main\");\r\nconst inputSection   = main.querySelector(\"#input-section\");\r\nconst previewSection = main.querySelector(\"#preview-section\");\r\nconst markdownInput  = inputSection.querySelector(\"#markdown-input-area\");\r\nconst previewBox     = previewSection.querySelector(\"#preview-box\");\r\n\r\nconst markdownPatterns = {\r\n    heading: /^#+\\s*[^#]/,\r\n    orderedList: /^\\d+\\.\\s*\\S+/,\r\n}\r\nconst { heading, orderedList } = markdownPatterns;\r\n\r\nlet textLines        = [];\r\nlet currentListItems = []; \r\nlet listFound        = false;\r\n\r\n\r\n\r\n// TODO: move to different file\r\nfunction cleanText(text) {\r\n    return text.replace(/(#+)|(\\d+\\.)\\s*/g, \"\");\r\n}\r\n\r\n\r\nfunction createHeading(textLine) {\r\n    // create a header taking into account the number of hashtags in the string\r\n    const hashString    = textLine.match(/^#+/)[0]; // returns all hashtags at the beginning of a line of text as a single line\r\n    const headingLevel  = hashString.length; \r\n\r\n    const headingElement = document.createElement(`h${headingLevel}`);\r\n    headingElement.textContent = cleanText(textLine);\r\n\r\n    previewBox.appendChild(headingElement)\r\n}\r\n\r\n\r\nfunction createList() {\r\n    const orderedListElement = document.createElement(\"ol\"); \r\n\r\n    currentListItems.forEach(item => {\r\n        const li = document.createElement(\"li\");\r\n        li.textContent = cleanText(item);\r\n\r\n        orderedListElement.appendChild(li);\r\n    })\r\n\r\n    currentListItems = [];\r\n\r\n    return orderedListElement; \r\n}\r\n\r\n\r\nfunction renderTextLine(textLine) {\r\n    let markdownElement; \r\n\r\n    // define how to render the passed line of text\r\n    if (textLine.match(heading)) {\r\n        markdownElement = createHeading(textLine);\r\n    } \r\n\r\n    if (textLine.match(orderedList) && !listFound) {\r\n        const index = textLines.indexOf(textLine);\r\n        const searchArray = textLines.slice(index);\r\n\r\n        for (const suspect of searchArray) {\r\n            if (!suspect.match(orderedList)) {\r\n                break\r\n            }\r\n\r\n            currentListItems.push(suspect)\r\n            console.log(currentListItems)\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction renderMarkdown() {\r\n    previewBox.innerHTML = \"\";\r\n\r\n\r\n    // go through each line and display it in the preview box\r\n    textLines.forEach(textLine => {\r\n        renderTextLine(textLine)\r\n    })\r\n}\r\n\r\n\r\nfunction writeDownLines() {\r\n    textLines = markdownInput.value.split(\"\\n\");\r\n    renderMarkdown()\r\n}\r\n\r\n\r\nmarkdownInput.addEventListener(\"input\", writeDownLines);\r\n\n\n//# sourceURL=webpack://gulp-startup/./src/js/markdown.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/markdown.js"]();
/******/ 	
/******/ })()
;