document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    document.querySelector(".glass-card").style.transform =
        `translate(${x}px, ${y}px)`;
});