// Create the blur overlay
const blurTransition = document.createElement('div');
blurTransition.classList.add('blur-transition');
blurTransition.innerHTML = `<img src="i/logo.png" alt="Logo" class="logo">`;
document.body.appendChild(blurTransition);

// Attach click handler to all nav links
document.querySelectorAll('a').forEach(link => {
  if (link.getAttribute('href') && !link.getAttribute('href').startsWith('#')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      // Activate overlay
      blurTransition.classList.add('active');
      // Wait for fade in
      setTimeout(() => {
        window.location.href = href;
      }, 700);
    });
  }
});
