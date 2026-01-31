/** @type {HTMLButtonElement} */
const mainContainer = document.querySelector("#main");
/** @type {HTMLButtonElement} */
const cursor = document.querySelector("#cursor");
/** @type {HTMLButtonElement} */
const image = document.querySelector(".image");

mainContainer.addEventListener(`mousemove`, (event) => {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 0.7,
    // ease: `elastic`,
  });
});

image.addEventListener("mouseenter", () => {
  gsap.to(cursor, { scale: 4, overwrite: true });
});

image.addEventListener("mouseleave", () => {
  gsap.to(cursor, { scale: 1, overwrite: true });
});
