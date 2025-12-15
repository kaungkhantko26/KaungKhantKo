// =====================================
// SAFE LOADER (works only if #loader exists)
// =====================================
document.body.classList.add("loading");

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) {
    document.body.classList.remove("loading");
    return;
  }

  setTimeout(() => {
    loader.classList.add("hide");
    document.body.classList.remove("loading");
    setTimeout(() => loader.remove(), 900);
  }, 1000);
});


// =====================================
// RUN AFTER DOM IS READY
// =====================================
document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // TYPEWRITER (only if #typing-text exists)
  // =====================================
  const textElement = document.getElementById("typing-text");
  if (textElement) {
    const texts = [
      "Welcome to HOME",
      "Space for youth ",
      "Create. Connect. Inspire."
    ];

    let textIndex = 0;
    let index = 0;
    let isDeleting = false;

    const typingSpeed = 120;
    const deletingSpeed = 70;
    const pauseAfterTyping = 1200;
    const pauseAfterDeleting = 600;

    function typeLoop() {
      const text = texts[textIndex];

      if (!isDeleting) {
        textElement.textContent = text.slice(0, index + 1);
        index++;

        if (index === text.length) {
          setTimeout(() => (isDeleting = true), pauseAfterTyping);
        }
      } else {
        textElement.textContent = text.slice(0, index - 1);
        index--;

        if (index === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(() => {}, pauseAfterDeleting);
        }
      }

      setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeLoop();
  }


  // =====================================
  // SMOOTH SCROLL (only for same-page #links)
  // =====================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });


  // =====================================
  // TEAM MEMBERS (only if #team-members exists)
  // =====================================
  const teamMembers = [
    { name: "Pyae Hein Kyaw", role: "Founder", image: "team/IMG_3019.jpg" },
    { name: "Kaung Khant Ko", role: "IT support", image: "team/IMG_0943.jpg" },
    { name: "Phone Kyaw Myat", role: "Author", image: "team/IMG_3023.jpg" },
    { name: "Si Thu Min San", role: "Author", image: "team/IMG_0939.JPG" },
    { name: "Aung Nay Myo Khant", role: "Author", image: "team/IMG_3024.jpg" },
    { name: "Lwin Moe Naung", role: "Author", image: "team/IMG_3025.jpg" },

  ];

  function renderTeamMembers() {
    const teamContainer = document.getElementById("team-members");
    if (!teamContainer) return;

    teamContainer.innerHTML = "";

    teamMembers.forEach((member) => {
      const memberCard = document.createElement("div");
      memberCard.className = "category-card";
      memberCard.innerHTML = `
        <img src="${member.image}" alt="${member.name}" class="team-photo">
        <div class="team-info">
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: var(--color-dark);">
            ${member.name}
          </h3>
          <p style="margin: 0; font-size: 13px; color: var(--color-secondary); font-weight: 600;">
            ${member.role}
          </p>
        </div>
      `;
      teamContainer.appendChild(memberCard);
    });
  }

  renderTeamMembers();


  // =====================================
  // MOBILE MENU (THIS FIXES YOUR PROBLEM)
  // =====================================
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close if user taps outside menu
    document.addEventListener("click", (e) => {
      const clickedInside = navLinks.contains(e.target) || menuBtn.contains(e.target);
      if (!clickedInside) {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Close on resize to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

});
