export default () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(
      "p > img"
    ) as NodeListOf<HTMLImageElement>;
    const prevButton = carousel.querySelector("button:first-child");
    const nextButton = carousel.querySelector("button:last-child");
    let currentIndex = 0;

    // Show first image, hide others
    images.forEach((img, index) => {
      if (index !== 0) {
        img.style.display = "none";
      }
    });

    // Previous button click handler
    prevButton?.addEventListener("click", () => {
      images[currentIndex].style.display = "none";
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      images[currentIndex].style.display = "block";
    });

    // Next button click handler
    nextButton?.addEventListener("click", () => {
      images[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = "block";
    });
  });
};
