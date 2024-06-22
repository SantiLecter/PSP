'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -20

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        deshabilitarPuntos(punto);

        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})


let deshabilitarPuntos = (asd) => {
    // Recorremos TODOS los punto
    asd.forEach( ( cadaPunto , i )=>{
        asd[i].classList.remove('activo')
    });

}

