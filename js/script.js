// Majic String
const classArrowSlider = '.slick-arrow';
const classSlider = '.slider__item';
const classArrow = 'arrow';
const urlArrowSprite = '../img/sprite.svg#arrow';
const classInfoSlide = 'slider__info';
const classTitleSlide = 'slider__title';
const classSubtitleSlide = 'slider__subtitle';
const classButtonSlide = 'slider__button';
const titleSlide = 'providing';
const subtitleSlide = 'highquality service for men & women';
const textButtonSlide = 'learn more';

// Functions
const addContentArrowSlider = () => {
    const arrows = document.querySelectorAll(classArrowSlider);

    arrows.forEach(arrow => {
        arrow.innerHTML = `
            <svg class=${classArrow}>
                <use xlink:href=${urlArrowSprite}></use>
            </svg>
        `;
    });
};

const addContentSlides = () => {
    const slides = document.querySelectorAll(classSlider);

    slides.forEach(slide => {
        slide.innerHTML += `
            <div class=${classInfoSlide}>
                <h2 class=${classTitleSlide}>${titleSlide}</h2>
                <p class=${classSubtitleSlide}>${subtitleSlide}</p>
                <button class=${classButtonSlide}>${textButtonSlide}</button>
            </div>
        `;
    });
};

// Event
window.addEventListener('load', () => {
    addContentArrowSlider();
    addContentSlides();
});