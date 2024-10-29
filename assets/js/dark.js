document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("DMT");
    if (localStorage.getItem("theme") === "dark") {
        enableDarkMode();
    }

    toggleButton.addEventListener("click", () => {
        if (document.getElementById("dark-stylesheet")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        const darkModeLink = document.createElement("link");
        darkModeLink.id = "dark-stylesheet";
        darkModeLink.rel = "stylesheet";
        darkModeLink.href = "/assets/content/dark.css";
        document.head.appendChild(darkModeLink);
        localStorage.setItem("theme", "dark");
    }

    function disableDarkMode() {
        const darkModeLink = document.getElementById("dark-stylesheet");
        if (darkModeLink) {
            darkModeLink.remove();
        }
        localStorage.setItem("theme", "light");
    }
});