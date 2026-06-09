
function openAuth(){
  document.getElementById("authModal").style.display = "flex";
}

function closeAuth(){
  document.getElementById("authModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

/* LOGIN */
loginForm.addEventListener("submit", function(e){
  e.preventDefault(); // 🔥 THIS STOPS HOME PAGE REDIRECT

  const email = loginForm.querySelector("input[type='email']").value;
  const pass = document.getElementById("loginPass").value;
  const role = document.getElementById("loginRole").value;

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if(!email || !pass || !role){
    alert("Fill all fields");
    return;
  }

  if(!passwordRegex.test(pass)){
    alert("Password must be 8+ chars (letter + number + symbol)");
    return;
  }

  const savedRole = localStorage.getItem("userRole");

  if(savedRole && savedRole !== role){
    alert("Role mismatch!");
    return;
  }

  alert("Login success as " + role);

  // CLOSE MODAL (if needed)
  document.getElementById("authModal").style.display = "none";

  // REDIRECT
  setTimeout(() => {
    window.location.href =
      role === "admin"
        ? "./admin-dashboard.html"
        : "./user-dashboard.html";
  }, 200);

});

/* SIGNUP */
signupForm.addEventListener("submit", function(e){
  e.preventDefault();

  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("cpass").value;
  const role = document.getElementById("signupRole").value;

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if(!role){
    alert("Select role");
    return;
  }

  if(!passwordRegex.test(pass)){
    alert("Weak password");
    return;
  }

  if(pass !== cpass){
    alert("Passwords do not match");
    return;
  }

  localStorage.setItem("userRole", role);

  alert("Signup success");
  document.getElementById("authModal").style.display = "none";
});

});