function validateEmail(email) {
    // Regular expression pattern for validating email addresses
    const emailPattern = /^[^\s@]+@stud\.noroff\.no$/;
    let errorMessage = document.querySelector('.error-message');
    if (!emailPattern.test(email)) {
        errorMessage.classList.remove('nodisplay');
        
    } else {
        errorMessage.classList.add('nodisplay');
    }
}

const emailInput = document.getElementById('email');
// Add event listener to the input field that listens for changes in its value

emailInput.addEventListener('change', function(){
    validateEmail(this.value)
} )
