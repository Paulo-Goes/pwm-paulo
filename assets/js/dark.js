document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("DMT");
    let pressCount = localStorage.getItem('pressCount') ? parseInt(localStorage.getItem('pressCount')) : 0;
    const audio = document.createElement("audio");
    let time = localStorage.getItem('audioTime');
    audio.src = "/assets/content/caramell.mp3";

    console.log("Saved presses: " + pressCount);

    if (localStorage.getItem("theme") === "dark") {
        enableDarkMode();
    }

    enableRainbowMode();

    toggleButton.addEventListener("click", () => {
        pressCount++;

        time = localStorage.getItem('audioTime');

        console.log("Pressed: " + pressCount);

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
        if (pressCount === 5) {
            document.body.classList.add('rainbow');
            audio.loop = true;
            audio.currentTime = localStorage.getItem('audioTime');
            document.body.appendChild(audio);
            audio.play();
            updateButtonText();
        } else {
            document.body.classList.remove('rainbow');
            audio.remove();
            pressCount = 0;
            localStorage.setItem('pressCount', pressCount);
            console.log('Audio set to 0');
            localStorage.setItem('audioTime', 0);
        }
    }
    function updateButtonText() {
        if(pressCount === 5){
            toggleButton.textContent = "Desativar Modo Rainbow";
        } else {
            if (document.getElementById("dark-stylesheet")) {
                toggleButton.textContent = "Desativar Modo Escuro";
            } else {
                toggleButton.textContent = "Ativar Modo Escuro";
            }
        }
    }
    window.addEventListener('beforeunload', () => {
        if (audio) {
            audio.pause();
            localStorage.setItem('audioTime', audio.currentTime);
        }
    });
});