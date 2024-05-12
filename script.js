document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check if the entered email exists in local storage
        const storedPassword = localStorage.getItem(email);

        // Check if the entered password matches the stored password
        if (storedPassword && password === storedPassword) {
            // If matched, redirect to details page
            window.location.href = 'details.html';
        } else {
            // If not matched, display an error message
            alert('Invalid email or password. Please try again.');
        }
    });
});
