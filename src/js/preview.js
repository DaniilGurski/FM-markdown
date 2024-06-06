const main                 = document.querySelector(".main");
const inputSection         = main.querySelector(".input-section");
const previewSection       = main.querySelector(".preview-section");

const previewToggleButtons = main.querySelectorAll(".markdown-section-header__toggle-preview");
const previewToggle = previewSection.querySelector("[data-toggle]");


window.addEventListener("load", () => {
    previewToggle.setAttribute("data-toggle", inputSection.hasAttribute("data-closed") ? "hide" : "show");
})


previewToggleButtons.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
        const toggleState = toggle.dataset.toggle;

        // hide input section and show preview if on mobile
        inputSection.toggleAttribute("data-closed", toggleState === "show");
        previewSection.toggleAttribute("data-opened", toggleState === "show");


        // If you press the toggle switch inside the input section (on mobile devices), the state of the toggle switch inside the preview section should be opposite.
        if (!toggle.closest(".preview-section")) {

            previewToggle.dataset.toggle = "hide";
            return
        }

        // Changing toggle mode in preview depending on whether input field is shown or not
        toggle.setAttribute("data-toggle", inputSection.hasAttribute("data-closed") ? "hide" : "show");
    })
})

