import { getDocumentStatus } from "./modules/doc-status";
import { updatePanelList } from "./modules/update-doc-list";
import { createNewDocument } from "./modules/create-document";
import { formatToMarkdown } from "./modules/markdown";
import { getDocumentData, appendNewDocument, saveDocumentChanges } from "./modules/save-doc";
import { loadDocument } from "./modules/load-document";

let documents = JSON.parse(localStorage.getItem("markdown-doc-array")) || [];
const appContainer  = document.querySelector("#app-container");
const asidePanel    = document.querySelector("#aside-panel");
const primaryHeader = document.querySelector("#primary-header");

const newDocument   = asidePanel.querySelector("#create-new-document");
const inputSection  = appContainer.querySelector("#input-section");
const markdownInput = inputSection.querySelector("#markdown-input-area");
const saveDocument  = primaryHeader.querySelector("#save-document"); 


markdownInput.addEventListener("input", formatToMarkdown);
newDocument.addEventListener("click", createNewDocument)
saveDocument.addEventListener("click", () => {
    if (appContainer.dataset.newDoc === "new") {
        appendNewDocument()
        return
    }

    saveDocumentChanges();
});


window.addEventListener("load", () => {
    const currentDocumentIndex = parseInt(localStorage.getItem("current-markdown-index"));

    updatePanelList(documents);
    loadDocument(currentDocumentIndex);

    appContainer.setAttribute("data-new-doc", getDocumentStatus());
})


// TODO: move changed doc to top with splice() (removes items from x to y and returns them as an array)