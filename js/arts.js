// Select carousel and images
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');

let currentIndex = 0;

// Initial render
updateActive();

// Arrow navigation
document.querySelector('.arrow.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateActive();
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateActive();
});

function updateActive() {
  // Move carousel to show current image
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update active/blur classes
  images.forEach((img, index) => {
    if (index === currentIndex) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

// Lightbox Elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close-btn");

// Show lightbox when clicking any image
images.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

// Hide lightbox when clicking background or close button
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === closeBtn) {
    lightbox.classList.remove("active");
  }
});
