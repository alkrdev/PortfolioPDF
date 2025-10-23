const button = document.getElementById("view-cv");
const label = button.querySelector("span");
const pdf = document.getElementById("pdf-container");
const content = document.querySelector(".content");
const layout = document.querySelector(".layout");
const overlay = document.getElementById("overlay");

// Smooth toggle with synchronized label fade
function toggleCV(show) {
  const isVisible = show ?? !pdf.classList.contains("visible");

  pdf.classList.toggle("visible", isVisible);
  content.classList.toggle("active", isVisible);
  layout.classList.toggle("active", isVisible);

  // Fade out label
  button.classList.add("fading");

  // Wait briefly to sync with slide start
  setTimeout(() => {
    label.textContent = isVisible ? "Hide CV" : "View CV";
  }, 250);

  // Fade label back in
  setTimeout(() => {
    button.classList.remove("fading");
  }, 450);
}

// Button click
button.addEventListener("click", () => toggleCV());

// Click outside (overlay)
overlay.addEventListener("click", () => toggleCV(false));

// Keyboard accessibility — press Esc to close
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && pdf.classList.contains("visible")) {
    toggleCV(false);
  }
});
