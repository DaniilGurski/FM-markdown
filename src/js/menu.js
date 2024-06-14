const asidePanel = document.querySelector("#aside-panel");
const burger = document.querySelector("#burger-menu");
const createDocBtn = asidePanel.querySelector("#create-new-document");

burger.addEventListener("click", () => {
    if (burger.getAttribute("aria-expanded") === "true") {
        burger.setAttribute("aria-expanded", "false");
    } else {
        burger.setAttribute("aria-expanded", "true")
    }

    asidePanel.setAttribute("aria-hidden", burger.getAttribute("aria-expanded") === "true" ? "false" : "true");
    asidePanel.classList.toggle("aside--opened")
});