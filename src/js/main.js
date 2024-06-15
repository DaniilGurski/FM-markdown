import { getDocumentStatus } from "./modules/doc-status";
import { updatePanelList } from "./modules/update-doc-list";
import { createNewDocument } from "./modules/create-document";
import { formatToMarkdown } from "./modules/markdown";
import { getDocumentData, appendNewDocument, saveDocumentChanges } from "./modules/save-doc";
import { loadDocument } from "./modules/load-document";
import { getCurrentDocumentIndex, getCurrentDocList } from "./modules/utils";

let documents = getCurrentDocList();
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
    const currentDocumentIndex = getCurrentDocumentIndex();;

    updatePanelList(documents);
    loadDocument(currentDocumentIndex);

    appContainer.setAttribute("data-new-doc", getDocumentStatus());
})
