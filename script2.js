const sections = document.querySelectorAll(".section");
const videos = document.querySelectorAll("video");

let current = 0;
let isAnimating = false;

/* INITIAL POSITION */
sections.forEach((section, i) => {
  section.style.transform = `translateY(${i * 100}vh)`;
});

/* SMOOTH SECTION MOVE */
function goToSection(index) {
  isAnimating = true;

  sections.forEach((section, i) => {
    section.style.transform = `translateY(${(i - index) * 100}vh)`;
  });

  setTimeout(() => {
    isAnimating = false;
  }, 1000);
}

/* WHEEL CONTROL */
window.addEventListener("wheel", (e) => {
  if (isAnimating) return;

  if (e.deltaY > 0 && current < sections.length - 1) {
    current++;
    goToSection(current);
  }

  if (e.deltaY < 0 && current > 0) {
    current--;
    goToSection(current);
  }
}, { passive: true });

/* AUDIO PROMPT */
const audioPrompt = document.getElementById("audioPrompt");
const yesAudio = document.getElementById("yesAudio");
const noAudio = document.getElementById("noAudio");

yesAudio.onclick = () => {
  videos.forEach(v => v.muted = false);
  closePrompt();
};

noAudio.onclick = closePrompt;

function closePrompt() {
  audioPrompt.style.opacity = "0";
  setTimeout(() => audioPrompt.remove(), 600);
}
