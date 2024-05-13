
function checkAccessToken() {
    const editBtn = document.querySelector('.details-edit');
    let token = JSON.parse(localStorage.getItem('userData')).data.accessToken;
    if (token) {
        editBtn.classList.remove('nodisplay')
    } else {
        editBtn.classList.add('nodisplay')
    }
}

checkAccessToken();
