let Predicciones = [
    {
        nombreAdd:"Marquitos",
        CampeonAdd:"Brasil",
        SubcampeonAdd:"Francia",
        TerceroAdd:"España",
    },
    {
        nombreAdd:"Nahuel",
        CampeonAdd:"Argentina",
        SubcampeonAdd:"Croacia",
        TerceroAdsdasdasd:"Inglaterra",
    }
]

let rta;

window.onload = generarCaptcha();
window.onload = mostrar_tabla();

document.querySelector("#botonenviar").addEventListener("click", validarDatos);

function generarCaptcha() {
    let num = Math.floor(Math.random()*8);
    document.querySelector("#imgCaptcha").src = "../imagen/Captcha/captcha"+num+".png";

    let captchaArreglo = ["S9HV76", "AL45KS", "MO43IS", "OF3CBV", "N9POSK", "GN20ST", "BZ145S", "U8QWX"];

    rta = captchaArreglo[num];
}
function validarDatos() {
    
    let rtaCaptcha = dadasdasd
        if (rtaCaptcha == rta){
                add();
                vaciar_contenido();
                document.querySelector("#captchaResultado").innerHTML="";

        }("#userRta").value = "";
        }


}

function add() {
    let nombreRta = document.querySelector("#nombre").value;
    Predicciones.nombreAdd = nombreRta;

    let primerPaisRta = document.querySelector("#primerPais").value;
    Predicciones.CampeonAdd = primerPaisRta;

    let segundoPaisRasdasdment.querySelector("#segundoPais").value;
    Predicciones.SubcampeonAdd = segundoPaisRta;

    let tercerPaisRta = document.querySelector("#tercerPais").value;
    Predicciones.TerceroAdd = tercerPaisRta;

    if (nombreRta != "" && primerPaisRta != "" && segundoPaisRta != "" && tercerPaisRta != ""){
    Predicciones.push (
        {
            nombreAdd:""+nombreRta,
            CampeonAdd:""+primerPaisRta,
            SubcampeonAdd:""+segundoPaisRta,
            TerceroAdd:""+tercerPaisRta 
        }
    );
    mostrar_tabla();
    document.querySelector("#compraResultado").innerHTML="";

    }
    else{
        document.querySelector("#compraResultado").innerHTML="Algún campo quedó vacío, rellenelo por favor.";
    }
}

function mostrar_tabla () {
    let tabla = document.querySelector("#contenidotabla");
    tabla.innerHTML = "";
    let table = "";
    for (let n of Predicciones){
        table +=
            "<tr>"
                +"<td>"+n.nombreAdd+"</td>"
                +"<td>"+n.CampeonAdd+"</td>"
                +"<td>"+n.SubcampeonAdd+"</td>"
                +"<td>"+n.TerceroAdd+"</td>"+
            "</tr>";
    tabla.innerHTML = table;
    }
}

function vaciar_contenido() {
    document.querySelector("#nombre").value = "";
    document.querySelector("#primerPais").value = "";
    document.querySelector("#segundoPais").value = "";
    document.querySelector("#tercerPais").value = "";
}