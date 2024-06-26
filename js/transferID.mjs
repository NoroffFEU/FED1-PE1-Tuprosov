import { repo } from "./posts/constants.mjs";
export function transferPostID(){
    const elements = document.querySelectorAll('.blog-item');
    const readMore = document.querySelector('.readMore');

    elements.forEach(element => {
        element.addEventListener('click', (event)=> {
            event.preventDefault();
            const id = element.getAttribute('id');
            if (window.location.pathname === `${repo}/` || window.location.pathname === `${repo}/index.html` || window.location.pathname === '/' || window.location.pathname === '/index.html'){
                window.location.href = `post/index.html?id=${id}&page=${window.location.pathname}`;
            } else if (window.location.pathname === `${repo}/post/articles.html` || window.location.pathname === 'post/articles.html') {
                window.location.href = `index.html?id=${id}&page=${window.location.pathname}`;
            }
        }) 
    })

    if (readMore) {
        readMore.addEventListener('click', (event) => {
            event.preventDefault()
            const activeSlideID = document.querySelector('.active').getAttribute('id')
            window.location.href = `post/index.html?id=${activeSlideID}&page=${window.location.pathname}`;
        })        
    }
}
