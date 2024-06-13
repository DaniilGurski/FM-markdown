import { createNewDocument } from "./create-document";
import { formatToMarkdown } from "./markdown";

const appContainer  = document.querySelector("#app-container");
const primaryHeader = appContainer.querySelector("#primary-header"); 

const documentNameElement   = primaryHeader.querySelector(".document-name-editor__input");
const markdownInputElement  = appContainer.querySelector("#markdown-input-area");
const previewBox            = appContainer.querySelector("#preview-box");


export function loadDocument(documentIndex) {
    const documents = JSON.parse(localStorage.getItem("markdown-doc-array")); 

    if (documents.length <= 0) {
        createNewDocument()
        return 
    }

    const {documentName, content} = documents[documentIndex];

    appContainer.dataset.newDoc = "saved"; 
    localStorage.setItem("current-markdown-status", "saved");

    documentNameElement.value = documentName;
    markdownInputElement.value = content;
    formatToMarkdown();

    localStorage.setItem("current-markdown-index", documentIndex);
}