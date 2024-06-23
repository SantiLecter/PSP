'use strict';

const grande = document.querySelector('.grande');
const puntos = document.querySelectorAll('.punto');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const totalSlides = puntos.length;
let currentIndex = 0;

function updateCarousel() {
    let operacion = currentIndex * -100;
    grande.style.transform = `translateX(${operacion}%)`;
    deshabilitarPuntos(puntos);
    puntos[currentIndex].classList.add('activo');
}

// Recorrer TODOS los puntos
puntos.forEach((punto, i) => {
    // Asignamos un CLICK a cada punto
    punto.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
    });
});

function deshabilitarPuntos(puntos) {
    // Recorremos TODOS los puntos
    puntos.forEach(punto => {
        punto.classList.remove('activo');
    });
}

// Function to move to the next image
function moveNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

// Function to move to the previous image
function movePrev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Event listeners for the arrows
arrowRight.addEventListener('click', moveNext);
arrowLeft.addEventListener('click', movePrev);

// Initialize the carousel
updateCarousel();
