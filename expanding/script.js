document.addEventListener('DOMContentLoaded', function () {
    const panels = [
        { title: "Plants", url: "../expanding/images/ft-shafi-yXj3_8hhKQM-unsplash.jpg" },
        { title: "Space", url: "../expanding/images/kristaps-ungurs-l-njpPf3oGA-unsplash.jpg" },
        { title: "Waves", url: "../expanding/images/matheo-jbt-ZMEmMguGD1I-unsplash.jpg" },
        { title: "City", url: "../expanding/images/zhenyu-luo-7wOwcg9M5Fk-unsplash.jpg" },
        {title: "Flowers", url: "../expanding/images/aedrian-salazar-wuJqq5j6uxU-unsplash.jpg"}
    ];

    function generarElementos(array) {
        const container = document.getElementById('container');
        container.innerHTML = '';

        array.forEach(panel => {
            const div = document.createElement('div');
            div.classList.add('item');
            div.style.backgroundImage = `url('${panel.url}')`;
            div.innerHTML = `<h3>${panel.title}</h3>`;
            container.appendChild(div);
        });

        // Añadir event listeners después de que los elementos se han creado
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }

    function removeActiveClasses(items) {
        items.forEach(item => {
            item.classList.remove('active');
        });
    }

    // Llamada a la función para generar elementos
    generarElementos(panels);
});

