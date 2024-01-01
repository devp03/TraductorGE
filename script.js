
var traducciones;

fetch('traducciones.json')
    .then(response => response.json())
    .then(data => traducciones = data)
    .catch(error => console.error('Error al cargar las traducciones', error));

const mostrar = ()=>{
    var frase = document.getElementById("search").value;

    var traduccionEncontrada = traducciones.find(traduccion => traduccion.hasOwnProperty(frase));

    if (traduccionEncontrada) {
        if (traduccionEncontrada[frase]) {
            document.getElementById("respuesta").innerHTML = traduccionEncontrada[frase];
        }
        else if (Array.isArray(traduccionEncontrada["que tal"])) {
            document.getElementById("respuesta").innerHTML = traduccionEncontrada["que tal"].join(', ');
        }
    } else {
        document.getElementById("respuesta").innerHTML = "No encontrado";
    }
}


var input = document.getElementById("search");
input.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("btn-buscar").click();
    }
});






