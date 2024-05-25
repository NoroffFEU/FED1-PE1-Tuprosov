function checkAccessToken() {
    const editBtn = document.querySelector('.details-edit');
    const account = document.querySelector('.account');
    const postEdit = document.getElementById('postEdit');
    const userDataString = localStorage.getItem('userData');
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const token = userData && userData.data && userData.data.accessToken ? userData.data.accessToken : false;
    const name = userData.data.name;

    if (token) {
        if(editBtn){
            editBtn.classList.remove('nodisplay')
        }

        if(account) {
            account.classList.remove('nodisplay');
            let p = document.createElement('p');
            p.textContent = `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}`
            account.appendChild(p);
        }

        if (postEdit){
            postEdit.style.display = 'block';
        }
    }
}

checkAccessToken();

