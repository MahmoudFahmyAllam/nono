const words = ["I Love You", "أحبك", "Te Amo", "Ich Liebe Dich", "Ti Amo","Love You in all Languages", " أحبك بكل اللغات", "Seni Seviyorum", "я тебя люблю", "我爱你", "أحبك من كل قلبى", "愛してます"];
const glowingWord = document.getElementById("glowing-word");
const changeWordBtn = document.getElementById("change-word-btn");

function createFallingElement() {
    const element = document.createElement('div');
    element.classList.add('falling-element');

    const symbols = ['💖', '🌸', '💗', '🌼', '❤️', '🌹'];
    element.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = Math.random() * 2 + 3 + 's';
    element.style.fontSize = Math.random() * 20 + 20 + 'px';

    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 5000);
}

changeWordBtn.addEventListener("click", () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    glowingWord.textContent = randomWord;

    for (let i = 0; i < 15; i++) {
        setTimeout(createFallingElement, i * 200);
    }
});
