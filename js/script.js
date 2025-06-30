// Select the span where the typing will appear
const typingElement = document.getElementById("typing");

// Text to type
const text = "Kaung Khant Ko";
let index = 0;
let isDeleting = false;

function type() {
  if (!isDeleting) {
    // Typing forward
    typingElement.textContent = text.substring(0, index + 1);
    index++;
    if (index === text.length) {
      // Pause at end
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, 150);
    }
  } else {
    // Deleting backward
    typingElement.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      // Pause before typing again
      isDeleting = false;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 100);
    }
  }
}

// Start typing
type();
