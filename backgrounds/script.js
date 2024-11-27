// script.js

const urlImgs = ["../backgrounds/images/pexels-8moments-1323550.jpg", "../backgrounds/images/pexels-catiamatos-1072179.jpg", "../backgrounds/images/pexels-francesco-ungaro-2835436.jpg", "../backgrounds/images/pexels-sanaan-3075993.jpg", "../backgrounds/images/pexels-timmossholder-1000653.jpg"];

const container = document.getElementById('container');

function generarElementos() {
    urlImgs.forEach(url => {
      const div = document.createElement('div');
      div.classList.add("slide");
      div.style.backgroundImage = `url(${url})`;
      container.appendChild(div);    
    });
      const activeClass = document.querySelector('#container div');
      activeClass.classList.add("active");    
}

generarElementos();

const body = document.body;
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let activeSlide = 0;

next.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBackground()
    setActiveSlide()
})

prev.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBackground()
    setActiveSlide()
})

setBackground();

function setBackground() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}

