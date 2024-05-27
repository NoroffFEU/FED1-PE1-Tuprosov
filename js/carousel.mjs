import { populateBannerCard } from "./posts/constants.mjs";
import { transferPostID } from "./transferID.mjs";

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
        let slideID = slides[currentIndex].getAttribute('id')
        slides[currentIndex].classList.add('active')
        slides[prevIndex].classList.remove('active')
        carousel.style.transform = `translateX(-${slideWidth}px)`;
        carousel.insertBefore(slides[currentIndex], carousel.firstChild);
        populateBannerCard(slideID)

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
        currentIndex = (currentIndex + 1) % totalSlides;
        let slideID = slides[currentIndex].getAttribute('id')
        slides[currentIndex].classList.add('active')
        slides[prevIndex].classList.remove('active')
        carousel.style.transform = `translateX(-${slideWidth}px)`;
        populateBannerCard(slideID)

        setTimeout(() => {
            carousel.appendChild(slides[prevIndex]);
            carousel.classList.remove("sliding-transition");
            carousel.style.transform = "";
        }, 500);

        
    });
}

