const aside = document.querySelector("aside");
const body  = document.querySelector("body");
const themeToggle = aside.querySelector("#theme-toggle");
let lightModeEnabled = JSON.parse(localStorage.getItem("markdown-light-theme")) || false;

body.classList.toggle("dark-mode", !lightModeEnabled);
themeToggle.checked = lightModeEnabled;


const togglePageTheme = () => {
    lightModeEnabled = !lightModeEnabled
    localStorage.setItem("markdown-light-theme", lightModeEnabled);
    body.classList.toggle("dark-mode", !lightModeEnabled);
}


themeToggle.addEventListener("change", togglePageTheme);