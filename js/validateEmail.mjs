export function validateEmail(email) {

    const emailPattern = /^[^\s@]+@stud\.noroff\.no$/;
    const errorMessage = document.querySelector('.error-message-email');
    if (!emailPattern.test(email)) {
        errorMessage.classList.remove('nodisplay');
        console.log('false')
        return false
        
    } else {
        errorMessage.classList.add('nodisplay');
        console.log('true')
        return true
    } 
}

