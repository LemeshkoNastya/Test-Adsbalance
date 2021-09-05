// Majic String
const classArrowSlider = '.slick-arrow';
const classArrow = 'arrow';
const urlArrowSprite = '../img/sprite.svg#arrow';
const classBurger = '.burger';
const classSidebar = '.burger__sidebar';
const classShadowed = '.shadowed';
const classLink = '.burger__link';
const classDisplayNone = 'none';
const classDisplayBlock = 'block';
const classBurgerRotate = '.burger__rotate';
const classSidebarActive = 'burger__sidebar_active';
const classTitleCard = '.card__title';
const classLetterCard = '.card__letter';
const attributeHref = 'href';
const classHeaderListLink = '.header__link';

// Variables
const burger = document.querySelector(classBurger);
const rotateBurger = document.querySelector(classBurgerRotate);
const sidebar = document.querySelector(classSidebar);
const shadowed = document.querySelector(classShadowed);
const links = document.querySelectorAll(classLink);
const titleCards = document.querySelectorAll(classTitleCard);
const letterCards = document.querySelectorAll(classLetterCard);
const headerListLink = document.querySelectorAll(classHeaderListLink);

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

const hideBurger = () => {
    shadowed.style.display = classDisplayNone;
    rotateBurger.style.display = classDisplayNone;
    sidebar.classList.remove(classSidebarActive);
}

const showBurger = () => {
    shadowed.style.display = classDisplayBlock;
    rotateBurger.style.display = classDisplayBlock;
    sidebar.classList.add(classSidebarActive);
}

const scrollElement = (element) => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
    
        const href = this.getAttribute(attributeHref).substring(1);
        const scrollTarget = document.getElementById(href);

        if (scrollTarget) {
            scrollTarget.scrollIntoView({ behavior: 'smooth' });
        }
    });
};

const scrollSection = (listLink) => {
    listLink.forEach(link => {
        scrollElement(link);
    });
};

// Event
window.addEventListener('load', () => {
    addContentArrowSlider();
});

burger.addEventListener('click', () => {
    showBurger();
});

rotateBurger.addEventListener('click', () => {
    hideBurger();
});

shadowed.addEventListener('click', () => {
    hideBurger();
});

links.forEach(link => {
    link.addEventListener('click', () => {
        hideBurger();
    });
});

titleCards.forEach((title, index) => {
    letterCards[index].innerHTML = title.innerHTML.slice(0, 1);
});

scrollSection(headerListLink);