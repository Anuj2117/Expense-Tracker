document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-box form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.querySelector('.login-box input[type="email"]').value;
        const password = document.querySelector('.login-box input[type="password"]').value;

        // Save the email and password in localStorage
        localStorage.setItem(email, password);

        // Redirect to index.html
        window.location.href = 'index.html';
    });
});
