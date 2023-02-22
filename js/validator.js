// Validation script for the form

// Email and Password Input Checks
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-button");

emailInput.addEventListener("blur", function(event) {
    const email = emailInput.value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
    } else {
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
    }
});

passwordInput.addEventListener("blur", function(event) {
    let password = event.target.value;
    if (password.length === 0) {
        event.target.classList.add("invalid");
        passwordInput.classList.remove('valid');
    } else {
        passwordInput.classList.add('valid');
        event.target.classList.remove("invalid");
    }
});

// Show Password Functionality
function showPassword() {
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
};

// Form Submission Check
submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Sign user in if email and password are validated
    if (emailInput.classList.contains('valid') && passwordInput.classList.contains('valid')) {
        window.location.href = 'signed-in.html';
    } 
    
    // Check valid email input
    if (!emailInput.classList.contains('valid')) {
        emailInput.classList.add('invalid');
    }

    // Check valid password input
    if (!passwordInput.classList.contains('valid')) {
        passwordInput.classList.add('invalid');
    }
});

