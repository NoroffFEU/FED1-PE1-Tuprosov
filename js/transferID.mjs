export function transferPostID(){
    const elements = document.querySelectorAll('.blog-item');
    const readMore = document.querySelector('.readMore');

    elements.forEach(element => {
        element.addEventListener('click', (event)=> {
            event.preventDefault();
            const id = element.getAttribute('id');
            window.location.href = `post/index.html?id=${id}&page=${window.location.pathname}`;
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
