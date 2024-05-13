document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    try {
        // Get email and password from form inputs
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Send login request to API
        const response = await fetch('https://v2.api.noroff.dev/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            if(!localStorage.getItem('userData')) {
                localStorage.setItem('userData', JSON.stringify(data));
            }
            
            // Redirect user to home page
            window.location.href = '../post/index.html';
        } else {
            // Login failed
            const message = document.querySelector('.error-message-login');
            message.style.display = 'block';
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error
    }
});
