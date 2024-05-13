document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    try {
        // Get form data
        const formData = new FormData(this);
        console.log('Form Data:', formData);

        // Convert formData to JSON object
        const accountDetails = {};
        formData.forEach((value, key) => {
            accountDetails[key] = value;
        });
        console.log('Account Details:', accountDetails);

        // Send form data to API
        const response = await fetch('https://v2.api.noroff.dev/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountDetails)
        });

        console.log('Response:', response);

        if (response.ok) {
            // Registration successful
            console.log('Registration successful');
            // Show message and link to sign in
            showMessage(this)
        } else {
            // Registration failed
            console.error('Registration failed');
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error
    }
});


function showMessage(form){
    form.classList.add('nodisplay');
    const formSection = document.querySelector('.form-section');
    let message = document.createElement('p');
    let link = document.createElement('a')
    message.textContent = "Registration Successful!"
    link.textContent = 'Sign in here'
    link.href = 'login.html'
    formSection.append(message, link)
}

