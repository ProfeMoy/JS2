/*Banderas*/
var capturar = false;

/*Variables globales*/
var alumnos = [];
var calificaciones = [];
var posicion = 0;
var tableData = "";


/*Elementos*/

var buttonGuardar = document.getElementById("btnGuardar");
var buttonLimpiar = document.getElementById("btnLimpiar");
var buttonCapturar = document.getElementById("btnCapturar");

var infoBox = document.getElementById("info");

var textNombre = document.getElementById("nombre");
var textCalificacion = document.getElementById("calificacion");

var tableBody = document.getElementById("data");

/*Eventos globales*/
buttonCapturar.addEventListener("click", function() {

    capturar = !capturar;
    capturaInformacion();

});

buttonLimpiar.addEventListener("click", function() {

    textNombre.value = '';
    textCalificacion.value = '';

});

buttonGuardar.addEventListener("click", function() {

    if (textNombre.value.length > 1 && textCalificacion.value.length > 1) {
        alumnos[posicion] = textNombre.value;
        calificaciones[posicion] = textCalificacion.value;

        tableData += `
            <tr>
                <td>${posicion}</td>
                <td>${alumnos[posicion]}</td>
                <td>${calificaciones[posicion]}</td>
                <td>Sin definir</td>
            </tr>
        `;

        tableBody.innerHTML = tableData;


        posicion++;

    } else {
        alert("Ingrese información válida")
    }

    textNombre.value = '';
    textCalificacion.value = '';
    console.log(alumnos);
    console.log(calificaciones);
});


/*Funciones*/
function capturaInformacion() {

    if (capturar) {

        infoBox.classList.remove("d-none");
        infoBox.classList.add("d-block");
        buttonCapturar.classList.remove("btn-outline-primary");
        buttonCapturar.classList.add("btn-outline-danger");
        buttonCapturar.innerHTML = "Dejar de capturar";

    } else if (!capturar) {

        infoBox.classList.remove("d-block");
        infoBox.classList.add("d-none");
        buttonCapturar.classList.remove("btn-outline-danger");
        buttonCapturar.classList.add("btn-outline-primary");
        buttonCapturar.innerHTML = "Capturar";

    }

}








/*function menu() {

    var opcion;

    console.log("Elige una opción");
    console.log("1. Edad de Moy");
    console.log("2. Nombre de Moy");
    console.log("3. Lugar de nacimiento de Moy");

    opcion = Number(prompt("Elige una opción"));

    switch (opcion) {

        case 1:
            console.log("26");
            break;
        case 2:
            console.log("Moisés Ibáñez");
            break;
        case 3:
            console.log("Aguascalientes");
            break;
        default:
            console.log("Introduce una opción válida!");
            break;
    }

}

function saludar() {
    var saludar = "Sí";

    do {
        console.log("Hola!");
        saludar = prompt("Saludar otra vez?");
    }
    while (saludar == "Sí");

}

function capturaCalificaciones() {

    var continuar;
    var calificacion;

    do {
        calificacion = Number(prompt("Captura calificación"));

        switch (calificacion) {
            case 1:
                console.log("Reprobado");
                break;
            case 2:
                console.log("Reprobado");
                break;
            case 3:
                console.log("Reprobado");
                break;
            case 4:
                console.log("Reprobado");
                break;
            case 5:
                console.log("Reprobado");
                break;
            case 6:
                console.log("Aprobado");
                break;
            case 7:
                console.log("Aprobado");
                break;
            case 8:
                console.log("Aprobado");
                break;
            case 9:
                console.log("Sobresaliente");
                break;
            case 10:
                console.log("Sobresaliente");
                break;
            default:
                console.log("Seleccione una calificación entre 1 y 10");
                break;
        }

        continuar = prompt("Desea agregar otra calificación?  Sí/No");
    } while (continuar == "si" || continuar == "sí" || continuar == "Si" || continuar == "Sí");

}*/