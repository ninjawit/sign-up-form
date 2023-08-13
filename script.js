const password = document.getElementById("pw");
const confirm = document.getElementById("confirm-pw");

confirm.addEventListener("input", (event) => {
  if (password.value !== confirm.value) {
    password.setCustomValidity("Passwords do not match.");
    password.style.border = "1px solid red";
    confirm.style.border = "1px solid red";
  } else {
    password.setCustomValidity("");
    password.style.border = "1px solid darkgray";
    confirm.style.border = "1px solid darkgray";
  }
});
