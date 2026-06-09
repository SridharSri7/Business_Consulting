

// =============================

document.addEventListener("DOMContentLoaded", () => {

  const lettersContainer = document.getElementById("letters");

  const chars = "STACKLYPROJECTSABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function createLetter(){
    if(!lettersContainer) return;

    const span = document.createElement("span");
    span.innerText = chars[Math.floor(Math.random() * chars.length)];

    span.style.left = Math.random() * window.innerWidth + "px";
    span.style.top = window.innerHeight + "px";
    span.style.fontSize = (12 + Math.random() * 20) + "px";
    span.style.animationDuration = (3 + Math.random() * 5) + "s";

    lettersContainer.appendChild(span);

    setTimeout(() => span.remove(), 6000);
  }

  setInterval(createLetter, 200);

  // HERO ANIMATION
  const tag = document.querySelector(".tag");
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  const stats = document.querySelectorAll(".stats div");
  const btn = document.querySelector(".btn");

  setTimeout(() => tag?.classList.add("show-left"), 200);
  setTimeout(() => h1?.classList.add("show-right"), 500);
  setTimeout(() => p?.classList.add("show-up"), 800);

  stats.forEach((el, i) => {
    setTimeout(() => el.classList.add("show-up"), 1100 + i * 200);
  });

  setTimeout(() => btn?.classList.add("show-scale"), 1800);

  animateCounters();

  function animateCounters() {
  const counters = document.querySelectorAll(".stats b");

  counters.forEach(counter => {
    const target = Number(counter.getAttribute("data-target"));

    let count = 0;
    const increment = Math.ceil(target / 100);

    function update() {
      count += increment;

      if (count < target) {
        counter.innerText = count;
        setTimeout(update, 20);
      } else {
        counter.innerText = target + "+";  // ✅ ADD HERE
      }
    }

    update();
  });
}

});

// ============== OUR PORTFOLIO ================
window.addEventListener("load",()=>{

    document
      .querySelector(".mini-tag")
      .classList.add("from-left");

    document
      .querySelector(".title")
      .classList.add("from-right");

    document
      .querySelector(".filter-buttons")
      .classList.add("from-up");

    const cards =
      document.querySelectorAll(".project-card");

    cards.forEach((card,index)=>{
        setTimeout(()=>{
            card.classList.add("show");
        },index * 200);
    });

});

// ======================= PROJECT DETAILS ======================
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:.2});

document.querySelectorAll(".content-block")
.forEach(block=>{
    observer.observe(block);
});

// ======================== TECHNOLOGIES USED ======================
const techObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show-tech");

        }

    });

},{
    threshold:0.2
});

document
.querySelectorAll(".tech-card")
.forEach(card=>{
    techObserver.observe(card);
});

document
.querySelector(".tech-image img")
&& techObserver.observe(
document.querySelector(".tech-image img")
);


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