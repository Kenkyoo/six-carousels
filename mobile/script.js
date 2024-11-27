const images = [
    "../mobile/images/gantas-vaiciulenas-efSUMaIC8lw-unsplash.jpg",
    "../mobile/images/jonny-gios-xMPeaguzfQk-unsplash.jpg",
    "../mobile/images/matthew-hamilton-m_TJgL0YQpU-unsplash.jpg",
    "../mobile/images/saffu-FawMxkOdtlg-unsplash.jpg"
]

const imageContainer = document.getElementById('container');

function generarElementos() {
    images.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.classList.add("content");
    imageContainer.appendChild(img);    
    });
    const showClass = document.querySelector("#container img");
    showClass.classList.add("show");
}

generarElementos();

const contents = document.querySelectorAll('.content');
const items = document.querySelectorAll("#btns div");

items.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    items.forEach(item => item.classList.remove('active'))
}
