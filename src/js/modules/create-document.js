import { updateDocumentStatus } from "./doc-status";

const appContainer  = document.querySelector("#app-container");
const primaryHeader = appContainer.querySelector("#primary-header"); 
const main          = appContainer.querySelector("#main");

const documentName = primaryHeader.querySelector(".document-name-editor__input");
const markdownInput  = appContainer.querySelector("#markdown-input-area");
const previewBox     = appContainer.querySelector("#preview-box");


export function createNewDocument() {
    console.log("creating new document ...")
    updateDocumentStatus("new");
    markdownInput.value = "";
    documentName.value  = "";
    previewBox.innerHTML = "";
}