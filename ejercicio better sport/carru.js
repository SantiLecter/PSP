'use strict';

// Seleccionamos el contenedor principal que contiene todas las imágenes del carrusel
const grande = document.querySelector('.grande');

// Seleccionamos todos los puntos de navegación del carrusel
const puntos = document.querySelectorAll('.punto');

// Seleccionamos la flecha para mover a la imagen anterior
const arrowLeft = document.querySelector('.arrow-left');

// Seleccionamos la flecha para mover a la imagen siguiente
const arrowRight = document.querySelector('.arrow-right');

// Almacenamos el número total de imágenes (o puntos) en el carrusel
const totalSlides = puntos.length;

// Mantenemos el índice de la imagen actualmente visible
let currentIndex = 0;

// Función para actualizar el carrusel
function updateCarousel() {
    // Calculamos la operación para mover el contenedor de imágenes
    let operacion = currentIndex * -100;
    
    // Aplicamos la transformación al contenedor de imágenes
    grande.style.transform = `translateX(${operacion}%)`;
    
    // Deshabilitamos todos los puntos de navegación
    deshabilitarPuntos(puntos);
    
    // Activamos el punto correspondiente a la imagen actual
    puntos[currentIndex].classList.add('activo');
}

// Recorremos TODOS los puntos
puntos.forEach((punto, i) => {
    // Asignamos un CLICK a cada punto
    punto.addEventListener('click', () => {
        // Actualizamos el índice actual al índice del punto clicado
        currentIndex = i;
        
        // Actualizamos el carrusel
        updateCarousel();
    });
});

// Función para deshabilitar todos los puntos de navegación
function deshabilitarPuntos(puntos) {
    // Recorremos TODOS los puntos
    puntos.forEach(punto => {
        // Removemos la clase 'activo' de cada punto
        punto.classList.remove('activo');
    });
}

// Función para mover a la siguiente imagen
function moveNext() {
    // Incrementamos el índice actual y usamos el operador módulo para asegurar que no exceda el total
    currentIndex = (currentIndex + 1) % totalSlides;
    
    // Actualizamos el carrusel
    updateCarousel();
}

// Función para mover a la imagen anterior
function movePrev() {
    // Decrementamos el índice actual y usamos el operador módulo para asegurar que no sea negativo
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    
    // Actualizamos el carrusel
    updateCarousel();
}

// Asignamos eventos de clic a las flechas
arrowRight.addEventListener('click', moveNext);
arrowLeft.addEventListener('click', movePrev);

// Inicializamos el carrusel
updateCarousel();
