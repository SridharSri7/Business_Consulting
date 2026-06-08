
const cursor = document.querySelector(".custom-cursor");
const glow = document.querySelector(".cursor-glow");

if (cursor && glow) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });
}
// .......................................................................

const svcHero = document.querySelector(".js-svc-hero");

if (svcHero) {

    const top = svcHero.querySelector(".s-top");
    const left = svcHero.querySelector(".s-left");
    const right = svcHero.querySelector(".s-right");
    const bottom = svcHero.querySelector(".s-bottom");
    const fade = svcHero.querySelector(".s-fade");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                top?.classList.add("active-top");
                left?.classList.add("active-left");
                right?.classList.add("active-right");
                bottom?.classList.add("active-bottom");
                fade?.classList.add("active-fade");

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(svcHero);
}

// SERVICE OVERVIEW SECTION
const overview = document.querySelector(".js-svc-overview");

if (overview) {

    const items = overview.querySelectorAll(".ovr-item");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                items.forEach((item, i) => {
                    setTimeout(() => {
                        item.classList.add("active");
                    }, i * 250);
                });

                observer.unobserve(entry.target);
            }

        });

    }, { threshold: 0.2 });

    observer.observe(overview);
}

// CORE SERVICES
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

    }, {
        threshold: 0.2
    });

    observer.observe(coreSection);
}

// HOW WE WORK
const howWork = document.querySelector(".js-how-work-triangle");

if (howWork) {

    const topText = howWork.querySelector(".hw-top");
    const bottomText = howWork.querySelector(".hw-bottom");
    const images = howWork.querySelectorAll(".hw-img");
    const steps = howWork.querySelectorAll(".tri-step");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                // TEXT from different directions
                topText?.classList.add("active");
                bottomText?.classList.add("active");

                // IMAGE POP
                images.forEach((img, i) => {
                    setTimeout(() => {
                        img.classList.add("active");
                    }, i * 200);
                });

                // TRIANGLE POP SEQUENCE
                steps.forEach((step, i) => {
                    setTimeout(() => {
                        step.classList.add("active");
                    }, i * 120);
                });

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(howWork);
}

// INTREVCTIVE SECTION
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

    // HOVER INTERACTION
    items.forEach(item => {

        item.addEventListener("mouseenter", () => {

            // active state
            items.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            // image change
            const newImg = item.getAttribute("data-img");

            img.classList.remove("active");

            setTimeout(() => {
                img.src = newImg;
                img.classList.add("active");
            }, 200);

            // text update
            const text = item.innerText.trim();
            title.innerText = text;
            desc.innerText = dataMap[text];

        });

    });

    // SCROLL ANIMATION (from different places)
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

// WHY OUR SERVICE
const whyServices = document.querySelector(".js-why-services");

if (whyServices) {

    const title = whyServices.querySelector(".ws-title");
    const sub = whyServices.querySelector(".ws-sub");
    const cards = whyServices.querySelectorAll(".ws-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                // TEXT ARRIVAL
                title?.classList.add("active-top");
                sub?.classList.add("active-right");

                // CARD POP STAGGER
                cards.forEach((card, i) => {
                    setTimeout(() => {
                        card.classList.add("active");
                    }, i * 180);
                });

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.25
    });

    observer.observe(whyServices);
}

// PRICING
const pricing = document.querySelector(".js-pricing");

if (pricing) {

    const title = pricing.querySelector(".price-title");
    const sub = pricing.querySelector(".price-sub");
    const cards = pricing.querySelectorAll(".price-card");

    let activeIndex = 1; // Pro default

    function setActive(index){
        cards.forEach((c, i) => {
            c.classList.remove("active");
            if(i === index){
                c.classList.add("active");
            }
        });
    }

    // INIT ACTIVE
    setActive(activeIndex);

    // CLICK + TOUCH SUPPORT
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

    // SCROLL ANIMATION
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                title?.classList.add("active-top");
                sub?.classList.add("active-bottom");

                cards.forEach((card, i) => {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, i * 200);
                });

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(pricing);
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