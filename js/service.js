// =======================================
// NAVBAR
// =======================================

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu after click
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 768) {
                navLinks.classList.remove("active");
            }

        });

    });

    // Mobile dropdown
    document.querySelectorAll(".dropdown").forEach(drop => {

        drop.addEventListener("click", function (e) {

            if (window.innerWidth <= 768) {

                if (e.target.closest(".dropdown > a")) {

                    e.preventDefault();
                    this.classList.toggle("active");

                }

            }

        });

    });

}

// =======================================
// CUSTOM CURSOR
// =======================================

const cursor = document.querySelector(".custom-cursor");
const glow = document.querySelector(".cursor-glow");

if (cursor && glow) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;

    });

}

// =======================================
// HERO SECTION
// =======================================

const svcHero = document.querySelector(".js-svc-hero");

if (svcHero) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                svcHero.querySelector(".s-top")?.classList.add("active-top");
                svcHero.querySelector(".s-left")?.classList.add("active-left");
                svcHero.querySelector(".s-right")?.classList.add("active-right");
                svcHero.querySelector(".s-bottom")?.classList.add("active-bottom");
                svcHero.querySelector(".s-fade")?.classList.add("active-fade");

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.3 });

    observer.observe(svcHero);

}

// =======================================
// SERVICE OVERVIEW
// =======================================

const overview = document.querySelector(".js-svc-overview");

if (overview) {

    const items = overview.querySelectorAll(".ovr-item");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                items.forEach((item, i) => {

                    setTimeout(() => {
                        item.classList.add("active");
                    }, i * 200);

                });

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.2 });

    observer.observe(overview);

}

// =======================================
// CORE SERVICES
// =======================================

const coreSection = document.querySelector(".js-core-services");

if (coreSection) {

    const cards = coreSection.querySelectorAll(".core-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                cards.forEach((card, i) => {

                    setTimeout(() => {
                        card.classList.add("active");
                    }, i * 150);

                });

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.2 });

    observer.observe(coreSection);

}

// =======================================
// HOW WE WORK
// =======================================

const howWork = document.querySelector(".js-how-work-triangle");

if (howWork) {

    const steps = howWork.querySelectorAll(".tri-step");
    const images = howWork.querySelectorAll(".hw-img");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                howWork.querySelector(".hw-top")?.classList.add("active");
                howWork.querySelector(".hw-bottom")?.classList.add("active");

                images.forEach((img, i) => {

                    setTimeout(() => {
                        img.classList.add("active");
                    }, i * 200);

                });

                steps.forEach((step, i) => {

                    setTimeout(() => {
                        step.classList.add("active");
                    }, i * 120);

                });

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.3 });

    observer.observe(howWork);

}

// =======================================
// INTERACTIVE SERVICES
// =======================================

const interactive = document.querySelector(".js-interactive-services");

if (interactive) {

    const items = interactive.querySelectorAll(".is-item");
    const img = interactive.querySelector(".preview-img");
    const title = interactive.querySelector(".is-text h3");
    const desc = interactive.querySelector(".is-text p");

    const dataMap = {
        "Business Strategy": "We design scalable strategies that drive long-term business growth.",
        "Digital Transformation": "We help companies adopt AI, automation and modern systems.",
        "Marketing Growth": "We build data-driven marketing systems for conversion growth.",
        "AI Automation": "We automate workflows for maximum efficiency and performance."
    };

    items.forEach(item => {

        item.addEventListener("mouseenter", () => {

            items.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const newImg = item.dataset.img;

            if (img) {

                img.classList.remove("active");

                setTimeout(() => {

                    img.src = newImg;
                    img.classList.add("active");

                }, 200);

            }

            if (title) title.textContent = item.textContent.trim();
            if (desc) desc.textContent = dataMap[item.textContent.trim()] || "";

        });

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                interactive.querySelector(".is-top")?.classList.add("active");
                interactive.querySelector(".is-bottom")?.classList.add("active");

                items.forEach((item, i) => {

                    setTimeout(() => {
                        item.classList.add("active");
                    }, i * 150);

                });

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.3 });

    observer.observe(interactive);

}

// =======================================
// WHY SERVICES
// =======================================

const whyServices = document.querySelector(".js-why-services");

if (whyServices) {

    const cards = whyServices.querySelectorAll(".ws-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                whyServices.querySelector(".ws-title")?.classList.add("active-top");
                whyServices.querySelector(".ws-sub")?.classList.add("active-right");

                cards.forEach((card, i) => {

                    setTimeout(() => {
                        card.classList.add("active");
                    }, i * 180);

                });

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.25 });

    observer.observe(whyServices);

}

// =======================================
// PRICING
// =======================================

const pricing = document.querySelector(".js-pricing");

if (pricing) {

    const cards = pricing.querySelectorAll(".price-card");

    let activeIndex = 1;

    function setActive(index) {

        cards.forEach((card, i) => {
            card.classList.toggle("active", i === index);
        });

    }

    setActive(activeIndex);

    cards.forEach((card, i) => {

        card.addEventListener("click", () => {
            activeIndex = i;
            setActive(i);
        });

        card.addEventListener("touchstart", () => {
            activeIndex = i;
            setActive(i);
        });

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                pricing.querySelector(".price-title")?.classList.add("active-top");
                pricing.querySelector(".price-sub")?.classList.add("active-bottom");

                cards.forEach((card, i) => {

                    setTimeout(() => {
                        card.classList.add("show");
                    }, i * 200);

                });

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.3 });

    observer.observe(pricing);

}

// =======================================
// FOOTER
// =======================================

const footer = document.querySelector(".js-footer");

if (footer) {

    const items = footer.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                items.forEach((el, i) => {

                    setTimeout(() => {
                        el.classList.add("active");
                    }, i * 120);

                });

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.2 });

    observer.observe(footer);

}

