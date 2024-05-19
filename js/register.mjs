import { validateEmail } from "./validateEmail.mjs";

document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const emailInput = document.getElementById('email');
    const validated = validateEmail(emailInput.value);
    
    try {
        if (validated) {
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
                let messageContent = 'Registration successful'
                let linkContent = 'Sign in here'
                let href = 'login.html'
                console.log('Registration successful');
                showMessage(this, messageContent, linkContent, href)
            } else {
                // Registration failed
                let messageContent = 'Registration failed.'
                let linkContent = 'Try again'
                let href = 'register.html'
                console.error('Registration failed');
                showMessage(this, messageContent, linkContent, href)
            }
        }

    } catch (error) {
        console.error('Error:', error);
        // Handle error
    }
});


function showMessage(form, messageContent, linkContent, href){
    form.style.display = 'none';
    const formSection = document.querySelector('.form-section');
    let message = document.createElement('p');
    let link = document.createElement('a')
    message.textContent = messageContent;
    link.textContent = linkContent;
    link.href = href;
    formSection.append(message, link)
}

