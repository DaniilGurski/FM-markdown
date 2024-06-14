import { updateDocumentStatus } from "./doc-status";
import { formatToMarkdown } from "./markdown";

const appContainer  = document.querySelector("#app-container");
const primaryHeader = appContainer.querySelector("#primary-header"); 
const main          = appContainer.querySelector("#main");

const documentName = primaryHeader.querySelector(".document-name-editor__input");
const markdownInput  = appContainer.querySelector("#markdown-input-area");


export function createNewDocument() {
    updateDocumentStatus("new");
    localStorage.setItem("current-markdown-index", 0)
    markdownInput.value = "";
    documentName.value  = "";
    formatToMarkdown()
}