const { marked }     = require("marked");

const main           = document.querySelector(".main");
const inputSection   = main.querySelector("#input-section");
const previewSection = main.querySelector("#preview-section");
const markdownInput  = inputSection.querySelector("#markdown-input-area");
const previewBox     = previewSection.querySelector("#preview-box");
const markdownStyledElements = {
    "ol": ["preview-list"],
    "ul": ["preview-list", "preview-list--unordered"],
    "blockquote": ["preview-blockquote", "bg-text-block", "bg-text-block--border", "font-weight-bold"], 
    "a": ["text-underline"],
    "pre": ["preview-code", "bg-text-block"],
    "code": ["inline-code"]
}


function styleMarkdown(container) {
    const markdownElements = Array.from(container.children);

    markdownElements.forEach(element => {
        const tagName = element.tagName.toLocaleLowerCase();
        console.log(tagName)

        if (Object.keys(markdownStyledElements).includes(tagName)) {
            const classNames = markdownStyledElements[tagName]; 
            classNames.forEach(className => {
                element.classList.add(className)
            });

        }
        if (element.hasChildNodes()) {
            styleMarkdown(element);
        }
    });
}


// function renderMarkdown(textLines) {
//     previewBox.innerHTML = "";

//     textLines.forEach(textLine => {
//         const markdownElement = marked.parse(textLine);
//         previewBox.insertAdjacentHTML("beforeend", markdownElement)
//         styleMarkdown();
//     })
// }


function writeDownLines() {
    previewBox.innerHTML = marked.parse(markdownInput.value);
    styleMarkdown(previewBox);
}


markdownInput.addEventListener("input", writeDownLines);
