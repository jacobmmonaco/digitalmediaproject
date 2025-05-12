document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// Expand/Collapse Biography
document.querySelectorAll(".view-more").forEach((button) => {
  button.addEventListener("click", function () {
    const fullDesc = this.previousElementSibling;
    fullDesc.classList.toggle("hidden");
    this.textContent = fullDesc.classList.contains("hidden")
      ? "View More"
      : "View Less";
  });
});

function toggleView(button) {
  const hiddenText = button.previousElementSibling;
  hiddenText.classList.toggle("hidden");
  button.textContent = hiddenText.classList.contains("hidden")
    ? "View More"
    : "View Less";
}
