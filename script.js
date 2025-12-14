// Logo loading animation control
document.body.classList.add("loading");

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
    document.body.classList.remove("loading");

    // remove loader completely
    setTimeout(() => loader.remove(), 900);
  }, 1000); // logo display time
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Team members data structure
const teamMembers = [
  {
    name: "Pyae Hein Kyaw",
    role: "Founder",
    image: "https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/a7423660-1b3b-4d53-890b-39db85efc38c"
  },
  {
    name: "Kaung Khant Ko",
    role: "Support Engineer",
    image: "https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/02c2dbd2-4507-476c-9083-28ed555abb99"
  },
  {
    name: "Phone Kyaw Myat",
    role: "Customer Success Manager",
    image: "https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/16f3a3ce-5fdd-48d4-aa4c-e8784e8df13a"
  },
  {
    name: "Si Thu Min San",
    role: "Head of Research & Insights",
    image: ""
  }
];

// Function to render team members
function renderTeamMembers() {
  const teamContainer = document.getElementById("team-members");
  if (!teamContainer) return;

  teamContainer.innerHTML = "";

  teamMembers.forEach(member => {
    const memberCard = document.createElement("div");
    memberCard.className = "category-card";
    memberCard.innerHTML = `
      <img src="${member.image}" alt="${member.name}" class="team-photo">
      <div class="team-info">
        <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: var(--color-dark);">${member.name}</h3>
        <p style="margin: 0; font-size: 13px; color: var(--color-secondary); font-weight: 600;">${member.role}</p>
      </div>
    `;
    teamContainer.appendChild(memberCard);
  });
}

// Initial render
renderTeamMembers();
