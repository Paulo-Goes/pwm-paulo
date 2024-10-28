document.addEventListener("DOMContentLoaded", function () {
    const volumeLevel = 0.3;
    const mediaElements = document.querySelectorAll(".volume");

    mediaElements.forEach(media => {
        media.volume = volumeLevel;
    });
});