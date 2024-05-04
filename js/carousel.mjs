export function initializeSlider() {
    const carousel = document.querySelector('.banner-carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const slides = carousel.querySelectorAll('.slide');

    let currentIndex = 0;
    let prevIndex;

    const totalSlides = Object.keys(slides).length;
    const slideWidth = slides[1].getBoundingClientRect().width

    prevButton.addEventListener('click', () => {
        prevIndex = currentIndex;
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        carousel.style.transform = `translateX(-${slideWidth}px)`;
        carousel.insertBefore(slides[currentIndex], carousel.firstChild);

        setTimeout(() => {
            carousel.classList.add("sliding-transition");
            carousel.style.transform = "";
        }, 10);

        setTimeout(() => {
            carousel.classList.remove("sliding-transition");
        }, 490);

    });

    nextButton.addEventListener('click', () => {
        carousel.classList.add("sliding-transition");
        prevIndex = currentIndex;
        console.log(currentIndex)
        currentIndex = (currentIndex + 1) % totalSlides;
        carousel.style.transform = `translateX(-${slideWidth}px)`;

        setTimeout(() => {
            carousel.appendChild(slides[prevIndex]);
            carousel.classList.remove("sliding-transition");
            carousel.style.transform = "";
        }, 500);

        
    });
}

// export function slider() {
//     const carousel = document.querySelector('.carousel');
//     const slides = document.querySelectorAll('.slide');
//     const prev = document.querySelector('.prev');
//     const next = document.querySelector('.next');

//     let currentSlide = 0;

//     const goToSlide = (index) => {
//     slides.forEach((slide, i) => {
//         slide.style.transform = `translateX(${100 * (i - index)}%)`;
//     });
//     currentSlide = index;
//     };

//     const nextSlide = () => {
//     if (currentSlide === slides.length - 1) {
//         goToSlide(0);
//     } else {
//         goToSlide(currentSlide + 1);
//     }
//     };

//     const prevSlide = () => {
//     if (currentSlide === 0) {
//         goToSlide(slides.length - 1);
//     } else {
//         goToSlide(currentSlide - 1);
//     }
//     };

//     next.addEventListener('click', nextSlide);
//     prev.addEventListener('click', prevSlide);

//     goToSlide(currentSlide);
// }
