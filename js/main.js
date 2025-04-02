// Laad voorruitgang op
function saveProgress(section) {
    localStorage.setItem("current_section", section);
}

function loadProgress() {
    return localStorage.getItem("current_section") || "introduction";
}

// Game start scherm
function showStartScreen() {
    document.getElementById("game-start").classList.remove("hidden");
    document.getElementById("game-content").classList.add("hidden");
    document.getElementById("game-over").classList.add("hidden");
}

// Gsap voor titel en startknop animatie
gsap.to("h1", { 
    y: -20, 
    duration: 0.6, 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut" 
});

gsap.to("button", { 
    y: -10, 
    duration: 0.6, 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut" 
});


// Toon verhaal en keuzes
function displayStory(section) {
    saveProgress(section);
    fadeOutContent(); // Fade out oud voor nieuwe te laden

    setTimeout(() => {
        const currentStory = story[section]; 
        document.getElementById("story-image").src = currentStory.image;
        document.getElementById("story-text").innerText = currentStory.text;

        const buttonsContainer = document.getElementById("buttons-container");
        buttonsContainer.innerHTML = ''; 

        if (section === "gameOver") {
            showGameOver();
            return;
        }

        currentStory.choices.forEach(choice => {
            const button = document.createElement("button");
            button.innerText = choice.text;
            button.onclick = () => displayStory(choice.next);
            buttonsContainer.appendChild(button);
        });

        fadeInContent(); 
    }, 500); 
}

// Start game
document.addEventListener("DOMContentLoaded", () => {
    // achtergrond muziek
    const backgroundMusic = document.getElementById("achtergrond-muziek");

    showStartScreen();

    document.getElementById("start-button").addEventListener("click", () => {
        // Speel achtergrondmuziek wanneer start
        backgroundMusic.play();

        document.getElementById("game-start").classList.add("hidden");
        document.getElementById("game-content").classList.remove("hidden");
        displayStory("introduction");
    });

    document.getElementById("restart-button").addEventListener("click", () => {
        document.getElementById("game-over").classList.add("hidden");
        document.getElementById("game-content").classList.remove("hidden");
        displayStory("introduction");
    });
});


// Fade out huidige story content
function fadeOutContent() {
    const storyText = document.getElementById("story-text");
    const storyImage = document.getElementById("story-image-container");

    storyText.style.opacity = 0;
    storyImage.style.opacity = 0;
}

// Fade in nieuwe story content
function fadeInContent() {
    const storyText = document.getElementById("story-text");
    const storyImage = document.getElementById("story-image-container");

    storyText.style.opacity = 1;
    storyImage.style.opacity = 1;
}

// Game over
function showGameOver() {
    document.getElementById("game-over").classList.remove("hidden");
    document.getElementById("game-content").classList.add("hidden");
}
