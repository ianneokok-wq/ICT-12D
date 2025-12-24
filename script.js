const PASSWORD = "ict12d"; // CHANGE PASSWORD HERE

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("errorText");

  if (input === PASSWORD) {
    document.getElementById("passwordScreen").style.display = "none";

    const welcome = document.getElementById("welcomeScreen");
    welcome.style.display = "flex";

    setTimeout(() => {
      welcome.style.display = "none";
      document.getElementById("gallery").classList.remove("hidden");
    }, 2000);

  } else {
    error.textContent = "Wrong password!";
  }
}

/* IMAGE POPUP */
function openPopup(images) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popupImg").src = images[0];
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
