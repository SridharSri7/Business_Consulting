fetch("components/auth-modal.html")
.then(response => response.text())
.then(data => {

    document.getElementById("auth-placeholder").innerHTML = data;

});

// AUTHENTICATION CODE

/* LOGIN BUTTON */

const authBtn = document.getElementById("authBtn");

updateAuthButton();

authBtn.addEventListener("click", () => {

    const user =
    localStorage.getItem("loggedUser");

    if(user){

        logoutUser();

    }else{

        openModal();

    }

});

function updateAuthButton(){

    const user =
    localStorage.getItem("loggedUser");

    if(user){

        authBtn.innerText = "Logout";

    }else{

        authBtn.innerText = "Getstarted";

    }

}

function openModal(){

    document
    .getElementById("authModal")
    .classList.add("active");
}

function closeModal(){

    document
    .getElementById("authModal")
    .classList.remove("active");
}

function showSignup(){

    document.getElementById("loginForm")
    .style.display="none";

    document.getElementById("signupForm")
    .style.display="block";
}

function showLogin(){

    document.getElementById("signupForm")
    .style.display="none";

    document.getElementById("loginForm")
    .style.display="block";
}

/* SIGNUP */

function signupUser(){

    const pass = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("signupConfirmPassword").value;
    const msg = document.getElementById("passwordMatchMsg");

    if(pass !== confirm){
        msg.textContent = "❌ Passwords do not match";
        msg.style.color = "#ef4444";

        return; // STOP SIGNUP
    }

    // continue signup logic
    console.log("Signup success");


    const password =
    document.getElementById("signupPassword").value;

    if(!isStrongPassword(password)){
        alert("Password must be 8+ chars with number, symbol & letter");
        return;
    }

    const user = {

        name:
        document.getElementById("signupName").value,

        email:
        document.getElementById("signupEmail").value,

        password:
        document.getElementById("signupPassword").value,

        role:
        document.getElementById("signupRole").value
    };

    localStorage.setItem(
        user.email,
        JSON.stringify(user)
    );

    alert("Account Created");

    showLogin();
}

/* LOGIN */

function loginUser(){

    const email =
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

    const role =
    document.getElementById("loginRole").value;

    // ❌ PASSWORD CHECK
    if(!isStrongPassword(password)){
        alert("Password must be 8+ chars with number, symbol & letter");
        return;
    }

    let user =
    JSON.parse(localStorage.getItem(email));

    if(user){

        if(user.password !== password){
            alert("Wrong password");
            return;
        }

    } else {

        user = {
            email,
            password,
            role,
            name: "Guest User"
        };

        localStorage.setItem(email, JSON.stringify(user));
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));

    

    updateAuthButton();
    closeModal();

    if(role === "admin"){
        window.location.href = "admin-dashboard.html";
    } else {
        window.location.href = "user-dashboard.html";
    }
}

/* LOGOUT */

function logoutUser(){

    localStorage.removeItem("loggedUser");

    updateAuthButton();

    window.location.href="index.html";
}

// ========================= PASSWORD VALIDATION =========================

function isStrongPassword(password) {

    if (!password) return false;

    password = password.trim(); // removes hidden spaces

    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    return regex.test(password);
}

// =========================================
function togglePassword(inputId, icon){

    const input = document.getElementById(inputId);

    if(input.type === "password"){
        input.type = "text";
        icon.innerHTML = "🙈";
    }else{
        input.type = "password";
        icon.innerHTML = "👁";
    }
}