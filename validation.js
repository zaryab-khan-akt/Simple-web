document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now
    
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (username === '' || password === '') {
        alert("Please fill in both fields.");
    } else {
        // You can handle login authentication here
        alert("Login successful!");
    }
});
