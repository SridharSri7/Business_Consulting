
// ================================================

const menuItems = document.querySelectorAll(".sidebar li[data-page]");
const pages = document.querySelectorAll(".page");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i =>
            i.classList.remove("active")
        );

        item.classList.add("active");

        pages.forEach(page =>
            page.classList.remove("active")
        );

        document
            .getElementById(item.dataset.page)
            .classList.add("active");

    });

});

// ========================

function logout() {

    localStorage.removeItem("loggedUser");

    window.location.href = "index.html";

}

// ===================
const user = JSON.parse(localStorage.getItem("loggedUser"));

if (!user) {
    window.location.href = "index.html";
}

const email = user.email;
const role = user.role;
const name = user.name || email.split("@")[0];

// avatar
document.getElementById("profileAvatar").textContent =
    email.charAt(0).toUpperCase();

// email
document.getElementById("profileEmail").textContent = email;
document.getElementById("emailAddress").textContent = email;

// role
document.getElementById("profileRole").textContent = role;
document.getElementById("roleText").textContent = role;

// name
document.getElementById("profileName").textContent = name;

// ========= INBOX ===========
