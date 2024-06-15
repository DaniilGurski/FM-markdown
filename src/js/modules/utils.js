export function getCurrentDocumentIndex() {
    return parseInt(localStorage.getItem("current-markdown-index"))
}

export function getCurrentDocList() {
    return JSON.parse(localStorage.getItem("markdown-doc-array")) || [];
}