let number = 0;
let data = null; // Variable para almacenar los datos de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  if (!data) { // Verifica si los datos aún no se han cargado
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        data = JSON.parse(request.responseText); // Almacena los datos en la variable data
        changeVideo(); // Llama a la función para cambiar el video
      }
    };
    request.open("GET", "ajax.json");
    request.send();
  } else {
    changeVideo(); // Si los datos ya están cargados, cambia el video directamente
  }
}

function changeVideo() {
  if (data) {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number == 2 ? (number = 0) : number++;
  }
}

window.onload = getData;

button.addEventListener('click', changeVideo); // Ahora, llamamos directamente a changeVideo al hacer clic en el botón
