document.getElementById("iniciar").addEventListener("click", function() {
    cambiarColor();
    //Acá llamamos a la función cambiarColor
});


// Acá tenemos las instrucciones para el cambio de color 
function cambiarColor() {
    let boton = document.getElementById("iniciar"); /*Obtencion y pasado a string del color*/
    if (boton.style.backgroundColor.toString() === "rgb(240, 193, 75)") { // Verificamos si el color es igual al que queremos cambiar
        boton.style.backgroundColor = "rgb(255, 38, 0)" // El color cambia a roo al igual que el contenido del boton(el texto)
        boton.innerText = "Cerrar Sesion" // Cambiamos A cerrar Sesion
    } else {
        boton.style.backgroundColor = "rgb(240, 193, 75)" // Si no, el color cambia a amarillo y su texto igualmente
        boton.innerText = "Iniciar Sesion" // Cambia su txto igual
    }
   // console.log(boton.style.backgroundColor); // Lo aplicamos para verificar funcionamiento del boton
}


// Eliminacion de boton al apretar click en este
document.getElementById("agregarDefinicion").addEventListener("click", function() {
    this.style.display = "none"; // Aignamos none para que desaparezca
});

// Selecciona todos los botones de "Me gusta"
const botonesLike = document.querySelectorAll('.botonlike');
// Agrega el evento click a cada botón
botonesLike.forEach(boton => {
    boton.addEventListener('click', function() {
        // Obtiene el título desde el atributo data-titulo
        const titulo = this.getAttribute('data-titulo');
        
        // Muestrsa la alerta con el título
        alert(`¡Te gustó la definición de: ${titulo}`);
        
        // Incrementa el contador de likes
        this.textContent = `${parseInt(this.textContent) + 1} me gusta`;
    });
});
