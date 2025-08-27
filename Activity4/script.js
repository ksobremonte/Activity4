document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  // Password Validation Rules
  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters long.";
    message.className = "error";
  } else if (password.length > 15) {
    message.textContent = "Password must be no more than 15 characters long.";
    message.className = "error";
  } else if (!/[A-Z]/.test(password)) {
    message.textContent = "Password must contain at least one uppercase letter.";
    message.className = "error";
  } else if (!/[a-z]/.test(password)) {
    message.textContent = "Password must contain at least one lowercase letter.";
    message.className = "error";
  } else if (!/[0-9]/.test(password)) {
    message.textContent = "Password must contain at least one number.";
    message.className = "error";
  } else if (!/[@$!%*?&]/.test(password)) {
    message.textContent = "Password must contain at least one special character (@$!%*?&).";
    message.className = "error";
  } else if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.className = "error";
  } else {
    message.textContent = "Registration successful!";
    message.className = "success";
  }
});
