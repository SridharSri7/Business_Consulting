// Main Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.innerHTML =
        navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});


// Mobile Dropdown
const dropdown = document.querySelector(".dropdown");
const pagesLink = document.querySelector(".pages-link");

pagesLink.addEventListener("click", (e) => {

    if(window.innerWidth <= 768){
        e.preventDefault();
        dropdown.classList.toggle("active");
    }

});

// ==================== HERO SECTION ANIMATION =====================
const hero = document.querySelector(".hero");

const images = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg",
    "images/hero4.jpg"
];

let current = 0;

setInterval(() => {

    current++;

    if(current >= images.length){
        current = 0;
    }

    hero.style.backgroundImage =
        `url(${images[current]})`;

}, 5000);

// ============================== OUR SERVICES SECTION ====================================
// SCROLL REVEAL ANIMATION

/* =========================
   SERVICES SECTION (SCOPED)
========================= */

const servicesSection = document.querySelector(".js-services");

if (servicesSection) {

    const topText = servicesSection.querySelector(".reveal-top");
    const leftText = servicesSection.querySelector(".reveal-left");
    const rightText = servicesSection.querySelector(".reveal-right");
    const cards = servicesSection.querySelectorAll(".service-card");

    let animated = false; // prevents re-trigger

    /* =========================
       SCROLL REVEAL
    ========================= */

    window.addEventListener("scroll", () => {

        const triggerPoint = window.innerHeight - 120;
        const sectionTop = servicesSection.getBoundingClientRect().top;

        if (!animated && sectionTop < triggerPoint) {

            animated = true;

            // TEXT ANIMATIONS
            if (topText) topText.classList.add("active-top");
            if (leftText) leftText.classList.add("active-left");
            if (rightText) rightText.classList.add("active-right");

            // CARD STAGGER ANIMATION
            cards.forEach((card, i) => {
                setTimeout(() => {
                    card.classList.add("active-card");
                }, i * 200);
            });
        }
    });


    /* =========================
       HEADER GLOW LOOP
    ========================= */

    const header = servicesSection.querySelector(".reveal-left");

    if (header) {
        setInterval(() => {

            header.style.textShadow = `
                0 0 10px rgba(124,58,237,0.6),
                0 0 25px rgba(159,103,255,0.4)
            `;

            setTimeout(() => {
                header.style.textShadow = "none";
            }, 700);

        }, 2500);
    }


    /* =========================
       3D HOVER TILT EFFECT
    ========================= */

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
            `;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
        });

    });

}

// ============================= RECENT PROJECTS ================================
const projectSection = document.querySelector(".js-projects");

if (projectSection) {

    const topText = projectSection.querySelector(".proj-top");
    const leftText = projectSection.querySelector(".proj-left");
    const rightText = projectSection.querySelector(".proj-right");
    const items = projectSection.querySelectorAll(".project-item");

    let animated = false;

    window.addEventListener("scroll", () => {

        const trigger = window.innerHeight - 120;
        const sectionTop = projectSection.getBoundingClientRect().top;

        if (!animated && sectionTop < trigger) {

            animated = true;

            if (topText) topText.classList.add("active-top");
            if (leftText) leftText.classList.add("active-left");
            if (rightText) rightText.classList.add("active-right");

            items.forEach((item, i) => {
                setTimeout(() => {
                    item.classList.add("active-item");
                }, i * 200);
            });

        }

    });

    // FILTER UI ONLY (no functionality yet)
    const buttons = projectSection.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

}


// ===================== TESTIMONIAL SECTION =============================
const testimonialSection = document.querySelector(".js-testimonial");

if (testimonialSection) {

    const track = testimonialSection.querySelector(".testimonial-track");
    const cards = testimonialSection.querySelectorAll(".t-card");

    let index = 0;

    function moveSlider() {

        index++;

        if (index > cards.length - 1) {
            index = 0;
        }

        const cardWidth = cards[0].offsetWidth + 20;

        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    let autoSlide = setInterval(moveSlider, 3000);

    // pause on hover
    track.addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
    });

    track.addEventListener("mouseleave", () => {
        autoSlide = setInterval(moveSlider, 3000);
    });

}


// ===================== FOOTER ==========================
const footer = document.querySelector(".js-footer");

if (footer) {

    const items = footer.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                items.forEach((el, i) => {
                    setTimeout(() => {
                        el.classList.add("active");
                    }, i * 120);
                });

                obs.unobserve(entry.target);
            }

        });

    }, { threshold: 0.2 });

    observer.observe(footer);
}