import { loadDocument } from "./load-document";

const asidePanel           = document.querySelector("#aside-panel");
const documentPanelList    = asidePanel.querySelector("#aside-document-list");
const newDocument          = asidePanel.querySelector("#create-new-document");

const documentNameEditor   = document.querySelector(".document-name-editor[data-template]");


function createDocumentSelector(documentObject, index, documentsArray) {
    const documentElement = documentNameEditor.content.cloneNode(true);
    const input = documentElement.querySelector("input");
    const label = documentElement.querySelector("label");
    const loadBtn = documentElement.querySelector("[data-load-doc]"); 

    const {createdAt, documentName} = documentObject;

    label.innerText = createdAt;
    input.value = documentName;    


    // load document from aside panel by clicking on doc icon
    loadBtn.addEventListener("click", () => {
        loadDocument(index)
    });


    // renaming document from aside panel
    input.addEventListener("blur", () => {
        const newDocumentName = input.value;
        documentObject.documentName = newDocumentName;
        localStorage.setItem("markdown-doc-array", JSON.stringify(documentsArray));
    });

    documentPanelList.appendChild(documentElement);
    }

export function updatePanelList(documents) {

    while (documentPanelList.firstChild) {
        documentPanelList.removeChild(documentPanelList.firstChild)
    }

    documents.forEach(createDocumentSelector);
}
