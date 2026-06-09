const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Mobile Dropdown */
document.querySelectorAll(".dropdown").forEach(drop => {

    drop.addEventListener("click", function(e){

        if(window.innerWidth <= 768){

            e.preventDefault();
            this.classList.toggle("active");
        }

    });

});

// ==================== HERO BACKGROUND SLIDER ====================
const hero = document.querySelector(".hero");

if (hero) {
    const images = [
        "images/hero1.jpg",
        "images/hero2.jpg",
        "images/hero3.jpg",
        "images/hero4.jpg"
    ];

    let current = 0;

    setInterval(() => {
        current = (current + 1) % images.length;
        hero.style.backgroundImage = `url(${images[current]})`;
    }, 5000);
}

// ============== ABOUT OUR COMPANY =================

const counters = document.querySelectorAll(".count");

function startCount(el) {
    const target = +el.getAttribute("data-target");
    let count = 0;

    const speed = target / 60; // animation speed control

    function update() {
        count += speed;

        if (count < target) {
            el.textContent = Math.ceil(count) + "+";
            requestAnimationFrame(update);
        } else {
            el.textContent = target + "+";
        }
    }

    update();
}

// ...
const aboutSection = document.querySelector(".about-company-section");

if (aboutSection) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                aboutSection.classList.add("active");

                // start counter animation
                counters.forEach(startCount);

                observer.unobserve(aboutSection); // run once only
            }

        });

    }, { threshold: 0.3 });

    observer.observe(aboutSection);
}



// ==================== SERVICES SECTION ====================
const servicesSection = document.querySelector(".js-services");

if (servicesSection) {
    const topText = servicesSection.querySelector(".reveal-top");
    const leftText = servicesSection.querySelector(".reveal-left");
    const rightText = servicesSection.querySelector(".reveal-right");
    const cards = servicesSection.querySelectorAll(".service-card");

    let animated = false;

    window.addEventListener("scroll", () => {
        const triggerPoint = window.innerHeight - 120;
        const sectionTop = servicesSection.getBoundingClientRect().top;

        if (!animated && sectionTop < triggerPoint) {
            animated = true;

            if (topText) topText.classList.add("active-top");
            if (leftText) leftText.classList.add("active-left");
            if (rightText) rightText.classList.add("active-right");

            cards.forEach((card, i) => {
                setTimeout(() => {
                    card.classList.add("active-card");
                }, i * 200);
            });
        }
    });

    // glow text effect
    if (leftText) {
        setInterval(() => {
            leftText.style.textShadow = `
                0 0 10px rgba(124,58,237,0.6),
                0 0 25px rgba(159,103,255,0.4)
            `;

            setTimeout(() => {
                leftText.style.textShadow = "none";
            }, 700);
        }, 2500);
    }

    // 3D hover tilt (safe)
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


// ==================== PROJECT SECTION ====================
const projectSection = document.querySelector(".js-projects");

if (projectSection) {
    const topText = projectSection.querySelector(".proj-top");
    const leftText = projectSection.querySelector(".proj-left");
    const rightText = projectSection.querySelector(".proj-right");
    const items = projectSection.querySelectorAll(".project-item");
    const buttons = projectSection.querySelectorAll(".filter-btn");

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

    // filter active UI only
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
}


// ==================== TESTIMONIAL SLIDER ====================
const testimonialSection = document.querySelector(".js-testimonial");

if (testimonialSection) {
    const track = testimonialSection.querySelector(".testimonial-track");
    const cards = testimonialSection.querySelectorAll(".t-card");

    let index = 0;

    function moveSlider() {
        index = (index + 1) % cards.length;

        const cardWidth = cards[0].getBoundingClientRect().width + 20;

        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    let autoSlide = setInterval(moveSlider, 3000);

    track.addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
    });

    track.addEventListener("mouseleave", () => {
        autoSlide = setInterval(moveSlider, 3000);
    });
}


// ==================== FOOTER REVEAL ====================
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

