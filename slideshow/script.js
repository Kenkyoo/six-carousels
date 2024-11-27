const images = [
    { title: "Arbolado", url: "../slideshow/images/avenue-2215317_1280.jpg" },
    { title: "Tormenta", url: "../slideshow/images/thunderstorm-3625405_1280.jpg" },
    { title: "Chapoteo", url: "../slideshow/images/drop-3698073_1280.jpg" },
    { title: "Naturaleza", url: "../slideshow/images/nature-3082832_1280.jpg" }
];

function generarElementos(array) {

    const container = document.getElementById('container');

    container.innerHTML = '';

    images.forEach(img => {
        const div = document.createElement('div');
        div.classList.add("slide");

        div.innerHTML = `
            <img src="${img.url}" class="slide-img" alt="" />
            <h1>${img.title}</h1>
        `;

        container.appendChild(div);
    });
}

generarElementos(images);


const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});

function carousel() {

    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
