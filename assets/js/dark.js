document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("DMT");
    let pressCount = localStorage.getItem('pressCount') ? parseInt(localStorage.getItem('pressCount')) : 0;
    console.log(pressCount);

    if (localStorage.getItem("theme") === "dark") {
        enableDarkMode();
    }

    toggleButton.addEventListener("click", () => {
        pressCount++;

        localStorage.setItem('pressCount', pressCount);

        if(pressCount >= 5){
            enableRainbowMode();
        } else {
            if (document.getElementById("dark-stylesheet")) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        }
        updateButtonText();
    });

    if(pressCount >= 5) {
        enableRainbowMode();
    }

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
    function enableRainbowMode() {
        if (pressCount <= 5) {
            document.body.classList.add('rainbow');
        } else {
            document.body.classList.remove('rainbow');
            pressCount = 0;
            localStorage.setItem('pressCount', pressCount);

        }
    }
    function updateButtonText() {
        if(pressCount === 5){
            toggleButton.textContent = "Disable Rainbow Mode";
        } else {
            if (document.getElementById("dark-stylesheet")) {
                toggleButton.textContent = "Disable Dark Mode";
            } else {
                toggleButton.textContent = "Enable Dark Mode";
            }
        }
    }
});