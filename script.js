document.addEventListener('DOMContentLoaded', () => {
    let footballElementClicked = 0,
        favoriteMoviesElementClicked = 0;
   
    const footballElement = document.getElementById('football'),
        favoriteMoviesElement = document.querySelector('.favorite-movies');

    footballElement.addEventListener('click', () => {
        if (footballElementClicked === 0) {
            footballElement.classList.add('blue');
        } else {
            handleClicks([footballElement, favoriteMoviesElement]);
        }
        footballElementClicked++;
    });

    favoriteMoviesElement.addEventListener('click', () => {
        if (favoriteMoviesElementClicked === 0) {
            favoriteMoviesElement.classList.add('green');
        } else {
            handleClicks([footballElement, favoriteMoviesElement]);
        }
        favoriteMoviesElementClicked++;
    });

    function handleClicks(elements) {
        elements.forEach(element => {
            element.classList.toggle('blue');
            element.classList.toggle('green');
        });
    }

    const btnIncrease = document.getElementById('btn-increase'),
        btnDecrease = document.getElementById('btn-decrease'),
        btnAdd = document.getElementById('btn-add'),
        btnRemove = document.getElementById('btn-remove'),
        placeImageWrapper = document.querySelector('.place-image-wrapper'),
        placeImage = document.querySelector('.place-image');

    btnIncrease.addEventListener('click', () => {
        placeImage.classList.add('img-increase');
    });

    btnDecrease.addEventListener('click', () => {
        placeImage.classList.remove('img-increase');
    });

    btnAdd.addEventListener('click', () => {
        placeImageWrapper.classList.remove('hide');
    });

    btnRemove.addEventListener('click', () => {
        placeImageWrapper.classList.add('hide');
    });
});