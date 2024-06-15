const { createNewDocument } = require("./modules/create-document");
const { getDocumentStatus } = require("./modules/doc-status");
const { updatePanelList } = require("./modules/update-doc-list");
const { getDocumentName } = require("./modules/save-doc");
const { getCurrentDocumentIndex } = require("./modules/utils");

const removeDocumentBtn = document.querySelector("#remove-document-btn");
const modal = document.querySelector("#modal");
const closeModalBtns = modal.querySelectorAll("[data-close-modal]");
const confirmDocumentRemoval = modal.querySelector("#confirm-doc-removal");

removeDocumentBtn.addEventListener("click", () => {
    const currentDocumentName = document.querySelector("#document-name").value; 
    const currentDocumentNameDisplay = modal.querySelector("#remove-document-name");

    currentDocumentNameDisplay.innerText = `'${getDocumentName()}'`;
    modal.showModal();
});


closeModalBtns.forEach(button => {
    button.addEventListener("click", () => {
        modal.close();
    })
});


confirmDocumentRemoval.addEventListener("click", () => {
    const currentDocStatus = getDocumentStatus(); 

    if (currentDocStatus === "saved") {
        const currentDocIndex = getCurrentDocumentIndex();; 
        const documents = JSON.parse(localStorage.getItem("markdown-doc-array")); 

        documents.splice(currentDocIndex, 1);

        localStorage.setItem("markdown-doc-array", JSON.stringify(documents));
        updatePanelList(documents);
    }

    createNewDocument();
});

