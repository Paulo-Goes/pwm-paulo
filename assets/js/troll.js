document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("gura");
    let text;

    async function fetchTextFile() {
        try {
            const response = await fetch("/assets/content/troll.txt");
            if (!response.ok) throw new Error("Failed to load file.");
                text = await response.text();
        } catch (error) {
            console.error("Error fetching the text file:", error);
        }
    }

    fetchTextFile();

    video.addEventListener("play", () => {
        video.removeAttribute("controls");
        video.loop = true;
        setTimeout(() => {
            if (text) {
                alert(text);
            } else {
                alert("Text file content is unavailable.");
            }
        }, 5000);
    });
});