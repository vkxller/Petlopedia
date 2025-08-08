document.getElementById("iniciar").addEventListener("click", function() {
    cambiarColor();
    //Acá llamamos a la función cambiarColor
});

let status = true;

// Acá tenemos las instrucciones para el cambio de color 
function cambiarColor() {
    let boton = document.getElementById("iniciar"); /*Obtencion y pasado a string del color*/
    if (boton.style.backgroundColor.toString() === "rgb(240, 193, 75)") {
        boton.style.backgroundColor = "rgb(255, 38, 0)"
        boton.innerText = "Cerrar Sesion"
    } else {
        boton.style.backgroundColor = "rgb(240, 193, 75)"
        boton.innerText = "Iniciar Sesion"
    }
    console.log(boton.style.backgroundColor);
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
        const contador = parseInt(this.textContent.match(/\d+/)[0]);
        this.textContent = `${contador + 1} me gusta`;
    });
});
