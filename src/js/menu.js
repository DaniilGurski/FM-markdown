const asidePanel = document.querySelector("#aside-panel");
const burger = document.querySelector("#burger-menu")

burger.addEventListener("click", () => {
    if (burger.getAttribute("aria-expanded") === "true") {
        burger.setAttribute("aria-expanded", "false");
    } else {
        burger.setAttribute("aria-expanded", "true")
    }

    asidePanel.classList.toggle("aside--opened")
});