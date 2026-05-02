const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

function handleReveal() {
  const trigger = window.innerHeight - 80;

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < trigger) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);