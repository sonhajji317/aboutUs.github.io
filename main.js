let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const audio = document.getElementById("myAudio");
const nextButton = document.getElementById("nextButton");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  const carouselInner = document.getElementById("carouselInner");
  const offset = -index * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function startSlideshow() {
  audio.currentTime = 21;
  audio.play();
  currentIndex = 1;
  showSlide(currentIndex);
  nextButton.style.display = "block"; // Show navigation button
}

window.onload = function () {
  audio.currentTime = 21;
  audio.play();
};
