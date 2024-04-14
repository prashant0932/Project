document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (fullname === '' || email === '' || username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Perform form submission or further processing here
});