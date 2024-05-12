document.addEventListener('DOMContentLoaded', function () {
    const signinForm = document.getElementById('signin-form');

    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Save the username and password in localStorage
        localStorage.setItem(username, password);

        // Redirect to details.html
        window.location.href = 'index.html';
    });
});
