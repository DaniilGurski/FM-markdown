const appContainer = document.querySelector("#app-container");

/**
 * Update data-new in appContainer either to true or false
 * @param {string} status - saved / new
*/
export function updateDocumentStatus(status) {
    if (!["saved", "new"].includes(status)) {
        throw new Error("Invalid status. Status must be either 'save' or 'new'");
    }

    appContainer.setAttribute("data-new-doc", status)
    localStorage.setItem("current-markdown-status", status);
}

export function getDocumentStatus() {
    return localStorage.getItem("current-markdown-status") || "new";
}
