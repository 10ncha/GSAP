/** @type {NodeListOf<HTMLElement>} */
const textElements = document.querySelectorAll(".text");

/**
 * Splits text into individual letter spans for animation
 * @param {HTMLElement} element - The element to split
 */
function splitText(element) {
  const text = element.getAttribute("data-text") || element.innerText;
  element.innerHTML = "";

  // Create two blocks for the animation effect
  for (let i = 0; i < 2; i++) {
    const block = document.createElement("div");
    block.classList.add("block");

    // Split text into individual letters
    for (let letter of text) {
      const span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter");
      block.appendChild(span);
    }

    element.appendChild(block);
  }
}

// Initialize all text elements
textElements.forEach((element) => {
  splitText(element);

  // Optional: Add click handler to trigger animation
  element.addEventListener("click", (e) => {
    e.preventDefault();
    element.classList.add("play");

    // Remove class after animation completes
    setTimeout(() => {
      element.classList.remove("play");
    }, 1000);
  });
});

// Optional: Trigger animation on page load for demo
window.addEventListener("load", () => {
  setTimeout(() => {
    textElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("play");
        setTimeout(() => {
          element.classList.remove("play");
        }, 1000);
      }, index * 200);
    });
  }, 500);
});
