// ================= NAVBAR =================
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        // Disable / Enable body scroll
        if (navLinks.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });

    // Close menu when clicking any nav link
    navItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    });

    // Close menu on desktop resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });
}


// ================= MOBILE DROPDOWN =================
document.querySelectorAll(".dropdown").forEach(drop => {

    drop.addEventListener("click", function(e) {

        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.toggle("active");
        }

    });

});

// ========================================

/* Scroll reveal on load */
window.addEventListener("load", () => {
    const items = document.querySelectorAll(".reveal");

    items.forEach((el, i) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.animationPlayState = "running";
        }, i * 150);
    });
});

/* Intersection animation */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".reveal");

            items.forEach((el, i) => {
                setTimeout(() => {
                    el.style.opacity = "1";
                    el.style.animationPlayState = "running";
                }, i * 200);
            });
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".cta-section").forEach(section => {
    observer.observe(section);
});

/* Click outside to close menu */
document.addEventListener("click", (e) => {
    if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
    }
});