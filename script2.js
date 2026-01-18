const sections = document.querySelectorAll('.section');

sections.forEach(section => {

  // Auto-hide text after 3 seconds (when section becomes active)
  setTimeout(() => {
    section.classList.add('hide-text');
  }, 3000);

  // Tap / click to toggle text
  section.addEventListener('click', () => {
    section.classList.toggle('hide-text');
  });

});

const videos = document.querySelectorAll(".bg-video");
const audioPrompt = document.getElementById("audioPrompt");

let currentIndex = 0;
let isScrolling = false;
let audioEnabled = false;

/* INITIAL STATE */
sections[0].classList.add("active");
updateVideos();

/* SECTION NAVIGATION */
function goToSection(index) {
  if (index < 0 || index >= sections.length || isScrolling) return;

  isScrolling = true;

  sections[currentIndex].classList.remove("active");
  currentIndex = index;
  sections[currentIndex].classList.add("active");

  updateVideos();

  setTimeout(() => {
    isScrolling = false;
  }, 900);
}

/* MOUSE WHEEL */
window.addEventListener("wheel", e => {
  if (e.deltaY > 0) {
    goToSection(currentIndex + 1);
  } else {
    goToSection(currentIndex - 1);
  }
});

/* KEYBOARD */
window.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") goToSection(currentIndex + 1);
  if (e.key === "ArrowUp") goToSection(currentIndex - 1);
});

/* AUDIO PROMPT */
document.getElementById("yesAudio").onclick = () => {
  audioEnabled = true;
  audioPrompt.style.display = "none";
  updateVideos();
};

document.getElementById("noAudio").onclick = () => {
  audioEnabled = false;
  audioPrompt.style.display = "none";
};

/* VIDEO CONTROL */
function updateVideos() {
  videos.forEach((video, index) => {
    if (index === currentIndex) {
      video.muted = !audioEnabled;
      video.currentTime = 0;
      video.play();
    } else {
      video.pause();
      video.muted = true;
    }
  });
}
