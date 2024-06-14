import { getDocumentStatus, updateDocumentStatus } from "./doc-status";
import { updatePanelList } from "./update-doc-list";

const primaryHeader = document.querySelector("#primary-header");
const main          = document.querySelector("#main");

const markdownInputArea = main.querySelector("#markdown-input-area");
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export function getDocumentName() {
    const documentNameString = primaryHeader.querySelector(".document-name-editor__input").value;

    return (documentNameString !== "") ? `${documentNameString}` : "untitled";
}


export function getDocumentData() {
    const creationDate  = new Date();
    const creationDay   = (creationDate.getDate()).toString().padStart(2, "0");
    const creationMonth = creationDate.getMonth()
    const creationYear  = creationDate.getFullYear();
    const formatedDate  = `${creationDay} ${monthNames[creationMonth]} ${creationYear}`;
    const markdownCode  = markdownInputArea.value;

    const documentData  = {
        createdAt: formatedDate,
        documentName: getDocumentName(),
        content:   markdownCode,
    };

    // add .md extention if needed
    if (!documentData.documentName.endsWith(".md")) {
        documentData.documentName += ".md";
    }

    return documentData;
}

export function saveDocumentChanges() {
    let documents = JSON.parse(localStorage.getItem("markdown-doc-array")) || [];

    const currentDocumentIndex = parseInt(localStorage.getItem("current-markdown-index")); 

    documents.splice(currentDocumentIndex, 1);
    documents.unshift(getDocumentData());
    console.log(documents)
    localStorage.setItem("markdown-doc-array", JSON.stringify(documents));

    updatePanelList(documents);
}


export function appendNewDocument() {
    const documents = JSON.parse(localStorage.getItem("markdown-doc-array")) ||[];
    const newDocumentData = getDocumentData();
    
    documents.unshift(newDocumentData); 
    localStorage.setItem("markdown-doc-array", JSON.stringify(documents));

    updateDocumentStatus("saved")
    updatePanelList(documents)

    // new markdown document is always the first in document list
    localStorage.setItem("current-markdown-index", 0);
}