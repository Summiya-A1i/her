// CHANGE YOUR PASSWORD INSIDE THE QUOTES BELOW:
const SECRET_PASSWORD = "bestie";

const unlockBtn = document.getElementById("unlock-btn");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");

function checkPassword() {
  const entered = passwordInput.value.trim().toLowerCase();
  if (entered === SECRET_PASSWORD.toLowerCase()) {
    document.getElementById("lock-screen").classList.remove("active");
    document.getElementById("main-screen").classList.add("active");
  } else {
    errorMsg.textContent = "Wrong password! Try again 🌸";
  }
}

unlockBtn.addEventListener("click", checkPassword);
passwordInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});

// Open one of the 3 boxes
function openSection(sectionId) {
  document.getElementById("main-screen").classList.remove("active");
  document.getElementById(sectionId).classList.add("active");
  window.scrollTo(0, 0);
}

// Go back to the 3 boxes
function goBack() {
  document.querySelectorAll(".sub-page").forEach(page => {
    page.classList.remove("active");
  });
  document.getElementById("main-screen").classList.add("active");
  window.scrollTo(0, 0);
}

// Open & close the cute scattered mini-cards
function showPopupNote(message) {
  document.getElementById("modal-text").textContent = message;
  document.getElementById("note-modal").classList.add("active");
}

function closePopupNote() {
  document.getElementById("note-modal").classList.remove("active");
}
