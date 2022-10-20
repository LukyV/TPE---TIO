let random = Math.random() * 100000;
random = Math.floor(random);
let numero = document.querySelector("#Random");
numero.innerHTML = random;
let boton = document.querySelector("#boton");
let inputCaptcha = document.querySelector("#IngresarCaptcha");
let resultado = document.querySelector("#respuesta");

boton.addEventListener("click",sent);

function sent(){
  if(inputCaptcha.value == random) {
   confirm( resultado.innerHTML = "Su respuesta es correcta");
  }
  else{
   confirm( resultado.innerHTML = "su respuesta es incorrecta");
  }
}

