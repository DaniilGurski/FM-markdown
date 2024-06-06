const main           = document.querySelector(".main");
const inputSection   = main.querySelector("#input-section");
const previewSection = main.querySelector("#preview-section");
const markdownInput  = inputSection.querySelector("#markdown-input-area");
const previewBox     = previewSection.querySelector("#preview-box");

const markdownPatterns = {
    heading: /^#+\s*[^#]/,
    orderedList: /^\d+\.\s*\S+/,
}
const { heading, orderedList } = markdownPatterns;

let textLines        = [];
let currentListItems = []; 
let listFound        = false;



// TODO: move to different file
function cleanText(text) {
    return text.replace(/(#+)|(\d+\.)\s*/g, "");
}


function createHeading(textLine) {
    // create a header taking into account the number of hashtags in the string
    const hashString    = textLine.match(/^#+/)[0]; // returns all hashtags at the beginning of a line of text as a single line
    const headingLevel  = hashString.length; 

    const headingElement = document.createElement(`h${headingLevel}`);
    headingElement.textContent = cleanText(textLine);

    previewBox.appendChild(headingElement)
}


function createList() {
    const orderedListElement = document.createElement("ol"); 

    currentListItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = cleanText(item);

        orderedListElement.appendChild(li);
    })

    currentListItems = [];

    return orderedListElement; 
}


function renderTextLine(textLine) {
    let markdownElement; 

    // define how to render the passed line of text
    if (textLine.match(heading)) {
        markdownElement = createHeading(textLine);
    } 

    if (textLine.match(orderedList) && !listFound) {
        const index = textLines.indexOf(textLine);
        const searchArray = textLines.slice(index);

        for (const suspect of searchArray) {
            if (!suspect.match(orderedList)) {
                break
            }

            currentListItems.push(suspect)
            console.log(currentListItems)
        }
    }

}


function renderMarkdown() {
    previewBox.innerHTML = "";


    // go through each line and display it in the preview box
    textLines.forEach(textLine => {
        renderTextLine(textLine)
    })
}


function writeDownLines() {
    textLines = markdownInput.value.split("\n");
    renderMarkdown()
}


markdownInput.addEventListener("input", writeDownLines);
