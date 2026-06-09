window.addEventListener("load", () => {

    const items = document.querySelectorAll(".reveal");

    items.forEach((el, i) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.animationPlayState = "running";
        }, i * 150);
    });

});

// ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){

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