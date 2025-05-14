
// Navbar Toggle
const toggleBtn = document.querySelector(".togglebtn");
const navLinks = document.querySelector(".navlinks");

toggleBtn.addEventListener("click", function () {
    this.classList.toggle("click");
    navLinks.classList.toggle("open");
    const expanded = this.classList.contains("click") ? "true" : "false";
    this.setAttribute("aria-expanded", expanded);
});

// Typed.js for Typing Effect
if (typeof Typed !== "undefined") {
    const typed = new Typed(".typing", {
        strings: ["Kalindi Mishra", "AI Enthusiast", "Machine Learning","Data Analyst", "Robotics Student"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}

// Project Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");

        // Get filter value
        const filter = button.getAttribute("data-filter");

        // Show/hide projects
        projectCards.forEach(card => {
            const category = card.getAttribute("data-category");
            if (filter === "all" || filter === category) {
                card.style.display = "block";
                card.style.opacity = "0";
                // Fade-in animation
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transition = "opacity 0.5s";
                }, 50);
            } else {
                card.style.opacity = "0";
                setTimeout(() => {
                    card.style.display = "none";
                }, 500);
            }
        });
    });
});