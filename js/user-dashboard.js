// ================= SIDEBAR NAV =================

const menuItems = document.querySelectorAll(".sidebar li[data-page]");
const pages = document.querySelectorAll(".page");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        pages.forEach(page => page.classList.remove("active"));

        document
            .getElementById(item.dataset.page)
            .classList.add("active");
    });
});


// ================= LOGOUT =================

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html";
}


// ================= MAIN LOGIC =================

document.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("loggedUser"));

    // if not logged in → redirect
    if (!user) {
        window.location.href = "index.html";
        return;
    }

    const email = user.email;
    const role = user.role;
    const name = user.name || email.split("@")[0];

    // ================= PROFILE =================

    document.getElementById("profileAvatar").textContent =
        email.charAt(0).toUpperCase();

    document.getElementById("profileEmail").textContent = email;
    document.getElementById("emailAddress").textContent = email;

    document.getElementById("profileRole").textContent = role;
    document.getElementById("roleText").textContent = role;

    document.getElementById("profileName").textContent = name;


    // ================= WELCOME TEXT =================

    let formattedName = name
        .replace(/[._-]/g, " ")
        .replace(/\d+/g, "")
        .trim();

    formattedName = formattedName
        .split(" ")
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ");

    const welcomeEl = document.getElementById("welcomeText");

    if (welcomeEl) {
        welcomeEl.textContent = `Welcome Back, ${formattedName} 👋`;
    }
});