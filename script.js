document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['form'];
    const usernameInput = document.getElementById('username_input');
    const passwordInput = document.getElementById('password_input');
    const usernameError = document.getElementById('username_error');
    const passwordError = document.getElementById('password_error');

    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Reset previous error messages
        usernameError.textContent = '';
        passwordError.textContent = '';

        // Get the values entered by the user
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Simple validation
        if (username === '') {
            usernameError.textContent = 'Username is required';
            return;
        }

        if (password === '') {
            passwordError.textContent = 'Password is required';
            return;
        }

        // For simplicity, you can check a hardcoded username and password
        const validUsername = 'exampleuser' ;
        const validPassword = 'examplepassword';

        // Check if the entered credentials are valid
        if (username === validUsername && password === validPassword){
             window.location.href = 'main.html';
            }
        
        if(username==='admin' && password==='pass'){
            window.location.href='admin.html';
        }
    });
});
y
