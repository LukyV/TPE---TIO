document.addEventListener("DOMContentLoaded", cargartabla);
function cargartabla() {
    let tabla = [
        {
            nombre: "Marquinhos",
            campeon: "Brasil",
            subcampeon: "Francia",
            tercer: "España",
        },
        {
            nombre: "Nahuel",
            campeon: "Argentina",
            subcampeon: "Croacia",
            tercer: "Inglaterra",
        },

    ];

    mostrartabla();
    let formulario = document.querySelector("#formtabla");
    let boton3 = document.querySelector("#botonenviar3");
    let botonEliminar = document.querySelector("#Borrar");
    formulario.addEventListener("submit", enviar);
    botonEliminar.addEventListener("click", borrar_tabla);

    function borrar_tabla() {
        document.getElementById("contenidotabla").innerHTML = "";
        tabla = [];
    }

    function enviar() {
        tabla.push({
            nombre: "Marquinhos",
            campeon: "Brasil",
            subcampeon: "Francia",
            tercer: "España",
        });
        tabla.push({
            nombres: "Nahuel",
            campeon: "Argentina",
            subcampeon: "Croacia",
            tercer: "Inglaterra",
        });
        mostrartabla();
    }

    function mostrartabla() {
        document.getElementById("contenidotabla").innerHTML = "";
        for (const item of tabla) {
            document.getElementById("contenidotabla").innerHTML += "<tr>" + "<td>" + item.nombre + "</td>" +
                "<td>" + item.campeon + "</td>"
                + "<td>" + item.subcampeon + "</td>"
                + "<td>" + item.tercer + "</td>"

                + "</tr>"
        }
    }

    function enviar(e) {
        e.preventDefault();
        let formData = new FormData(formulario);
        let imagen = null;
        let nombre = formData.get("nombre");
        let campeon = formData.get("campeon");
        let subcampeon = formData.get("subcampeon");
        let tercer = formData.get("tercer");
        let NuevoUsuario = {
            nombre: nombre,
            campeon: campeon,
            subcampeon: subcampeon,
            tercer: tercer,


        }
        tabla.push(NuevoUsuario);
        mostrartabla();
        console.log(tabla);
    }
}