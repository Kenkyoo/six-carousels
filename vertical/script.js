// Selecciona los elementos del DOM necesarios
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

// Inicializa el índice de la diapositiva activa
let activeSlideIndex = 0;

// Configura la posición inicial del slide izquierdo
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Agrega listeners para los botones
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// Función para cambiar las diapositivas
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;

    if (direction === 'up') {
        activeSlideIndex = (activeSlideIndex + 1) % slidesLength;
    } else if (direction === 'down') {
        activeSlideIndex = (activeSlideIndex - 1 + slidesLength) % slidesLength;
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
