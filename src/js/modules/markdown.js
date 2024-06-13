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


marked.setOptions({
    breaks: true,
})


export function styleMarkdown(container) {
    const markdownElements = Array.from(container.children);

    markdownElements.forEach(element => {
        const tagName = element.tagName.toLocaleLowerCase();

        if (Object.keys(markdownStyledElements).includes(tagName)) {
            const classNames = markdownStyledElements[tagName]; 
            classNames.forEach(className => {
                element.classList.add(className)
            });
        };
        
        if (element.hasChildNodes()) {
            styleMarkdown(element);
        };
    });
}


export function formatToMarkdown() {
    previewBox.innerHTML = marked.parse(markdownInput.value);
    styleMarkdown(previewBox);
}