
export function header(){
    const token = JSON.parse(localStorage.getItem('userData')).data.accessToken;
    return{
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}
