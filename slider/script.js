const images = [
    { url: "../slider/images/pexels-fotios-photos-3838850.jpg", alt: "Descripción de la imagen 1" },
    { url: "../slider/images/pexels-freestockpro-1929611.jpg", alt: "Descripción de la imagen 2" },
    { url: "../slider/images/pexels-inga-sv-3139361.jpg", alt: "Descripción de la imagen 3" },
    { url: "../slider/images/pexels-koprivakart-3614358.jpg", alt: "Descripción de la imagen 4" },
    { url: "../slider/images/pexels-lilartsy-3709094.jpg", alt: "Descripción de la imagen 4" },
    { url: "../slider/images/pexels-nunoveludo-3558637.jpg", alt: "Descripción de la imagen 4" },
    { url: "../slider/images/pexels-rpnickson-3554423.jpg", alt: "Descripción de la imagen 4" },
    { url: "../slider/images/pexels-vincent-ma-janssen-2886284.jpg", alt: "Descripción de la imagen 4" },
    { url: "../slider/images/pexels-tatiana-azatskaya-3616232.jpg", alt: "Descripción de la imagen 4" }
];

function generarImagenes(imagenes) {

    const imgContainer = document.getElementById('imgs');


    imgContainer.innerHTML = '';

    images.forEach(image => {

        const img = document.createElement('img');

        img.src = image.url;
        img.alt = image.alt;

        imgContainer.appendChild(img);
    });
}

generarImagenes(images);

const imgs = document.getElementById("imgs");
const img = document.querySelectorAll('#imgs img');

let index = 0

let interval = setInterval(slider, 2000)

function slider() {
    index++
    updateSlider();
}

const updateSlider = () => {
    if (index >= img.length) {
        index = 0;
    } else if (index < 0) {
        index = img.length - 1;
    }
    imgs.style.transform = `translateX(${-index * 500}px)`;
};

function nextSlider() {
    index++;
    updateSlider();
    resetInterval();    
}

function prevSlider() {
    index--;
    updateSlider();
    resetInterval();    
}

function stopSlider() {
    clearInterval(interval);
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(slider, 2000)
}

const prev = document.getElementById("prev");
const stop = document.getElementById("stop");
const next = document.getElementById("next");

stop.addEventListener("click", function () {
    if (stop.classList.contains("fa-play")) {
        stop.classList.add("fa-pause");
        stop.classList.remove("fa-play");
        nextSlider();
    } else {
        stop.classList.remove("fa-pause");
        stop.classList.add("fa-play");
        stopSlider();
    }
});

prev.addEventListener("click", prevSlider);
next.addEventListener("click", nextSlider);