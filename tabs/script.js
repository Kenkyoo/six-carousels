const images = [
    "../tabs/images/mountains-8687536_1280.jpg",
    "../tabs/images/orange-flowers-8087066_1280.jpg",
    "../tabs/images/peach-blossoms-8709256_1280.jpg",
    "../tabs/images/turtle-4277398_1280.jpg",
    "../tabs/images/water-lilies-8307632_1280.jpg"
];

function generarElementos(array) {
    
    const row = document.getElementById('row');
    row.innerHTML = '';

    images.forEach(img => {
        const col = document.createElement('div');
        col.classList.add("col");

        col.innerHTML = `
            <img src="${img}" alt="Nature">
        `;
        row.appendChild(col);
    });
}

generarElementos(images);

const imgs = document.querySelectorAll("img");

imgs.forEach(img => {
    img.addEventListener("click", () => {
        expandedImages(img);
    })
});

function expandedImages(img) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = img.src;
    expandImg.parentElement.style.display = "block";
} 