document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Check if the entered username and password match the stored credentials
        if (email === 'anujkushwaha221@gmail.com' && password === '73358080') {
            // If matched, redirect to details page
            window.location.href = 'details.html';
        } else {
            // If not matched, display an error message
            alert('Invalid email or password. Please try again.');
        }
    });
});
