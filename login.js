function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (username === "" || password === "") {
    errorMessage.textContent = "Please fill in both username and password.";
    return false;
  }

  if (username === "admin" && password === "ismt123") {
    window.location.href = "dashboard.html";
    return false;
  } else {
    errorMessage.textContent = "Invalid username or password.";
    return false;
  }
}
