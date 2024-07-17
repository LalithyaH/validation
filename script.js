document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Validate username
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // Uncomment the next line to actually submit the form
        // document.getElementById('myForm').submit();
    }
});
