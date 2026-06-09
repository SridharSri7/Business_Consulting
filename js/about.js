
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML = "✕";
    }else{
        menuToggle.innerHTML = "☰";
    }
});
// ==========================================================

const aboutHero = document.querySelector(".js-about-hero");

if (aboutHero) {

    const topEl = aboutHero.querySelector(".a-top");
    const leftEl = aboutHero.querySelector(".a-left");
    const rightEl = aboutHero.querySelector(".a-right");
    const bottomEl = aboutHero.querySelector(".a-bottom");
    const fadeEl = aboutHero.querySelector(".a-fade");

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                // TOP
                if (topEl) topEl.classList.add("active-top");

                // LEFT
                if (leftEl) leftEl.classList.add("active-left");

                // RIGHT
                if (rightEl) rightEl.classList.add("active-right");

                // BOTTOM
                if (bottomEl) bottomEl.classList.add("active-bottom");

                // BUTTON FADE
                if (fadeEl) fadeEl.classList.add("active-fade");

                obs.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(aboutHero);
}

// ==================== STORY TELLING SECTION ============================
const storySection = document.querySelector(".js-story");

if (storySection) {

    const topText = storySection.querySelector(".s-top");
    const leftText = storySection.querySelector(".s-left");
    const rightText = storySection.querySelector(".s-right");
    const items = storySection.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                if (topText) topText.classList.add("active-top");
                if (leftText) leftText.classList.add("active-left");
                if (rightText) rightText.classList.add("active-right");

                items.forEach((item, i) => {
                    setTimeout(() => {
                        item.classList.add("active-item");
                    }, i * 200);
                });

                obs.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.2
    });

    observer.observe(storySection);
}

// MISSION/VISSION
const mvSection = document.querySelector(".js-mv");

if (mvSection){

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                mvSection.querySelector(".mv-top")
                    ?.classList.add("active-mv-top");

                mvSection.querySelector(".mv-left")
                    ?.classList.add("active-mv-left");

                mvSection.querySelector(".mv-right")
                    ?.classList.add("active-mv-right");

                mvSection.querySelector(".mission-card")
                    ?.classList.add("active-mission");

                mvSection.querySelector(".vision-card")
                    ?.classList.add("active-vision");

            }

        });

    }, {
        threshold:0.3
    });

    observer.observe(mvSection);
}

// OUR IMPACT
const impactSection = document.querySelector(".js-impact-team");

if (impactSection) {

    const tag = impactSection.querySelector(".impact-tag");
    const title = impactSection.querySelector(".impact-title");
    const desc = impactSection.querySelector(".impact-desc");

    const stats = impactSection.querySelectorAll(".impact-stat-card");
    const teams = impactSection.querySelectorAll(".impact-team-card");

    const banner = impactSection.querySelector(".impact-banner");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                tag?.classList.add("impact-top-active");
                title?.classList.add("impact-left-active");
                desc?.classList.add("impact-right-active");

                stats.forEach((card, i) => {
                    setTimeout(() => {
                        card.classList.add("impact-pop-active");
                    }, i * 150);
                });

                teams.forEach((card, i) => {
                    setTimeout(() => {
                        card.classList.add("impact-pop-active");
                    }, 600 + (i * 200));
                });

                setTimeout(() => {
                    banner?.classList.add("impact-banner-active");
                }, 1200);

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.25
    });

    observer.observe(impactSection);
}

// TRUSTED BY
const clientsSection = document.querySelector(".js-clients");

if (clientsSection) {

    const top = clientsSection.querySelector(".c-top");
    const left = clientsSection.querySelector(".c-left");
    const right = clientsSection.querySelector(".c-right");

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                top?.classList.add("active-c-top");
                left?.classList.add("active-c-left");
                right?.classList.add("active-c-right");

                obs.unobserve(entry.target);
            }

        });

    }, { threshold: 0.3 });

    observer.observe(clientsSection);
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

