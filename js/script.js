function mostraMensajesHtml(idTexto, opcion) {
    let mostarMensajeCaja = document.getElementById(idTexto);
    if (opcion == "1") {
        mostarMensajeCaja.style.display = "none";
    } else {
        mostarMensajeCaja.style.display = "flex";
    }

}

function encriptarTexto() {
    let textoHaEncriptar = document.getElementById("texto_a_trabajar").value;
    let textoEncriptado = "";
    if (!validaCampo()) return;
    console.log("textoHaEncriptar " + textoHaEncriptar);
    for (var i = 0; i < textoHaEncriptar.length; i++) {
        if (textoHaEncriptar[i] == "a") {
            textoEncriptado = textoEncriptado + "ai";
        } else if (textoHaEncriptar[i] == "e") {
            textoEncriptado = textoEncriptado + "enter";
        } else if (textoHaEncriptar[i] == "i") {
            textoEncriptado = textoEncriptado + "imes";
        } else if (textoHaEncriptar[i] == "o") {
            textoEncriptado = textoEncriptado + "ober";
        } else if (textoHaEncriptar[i] == "u") {
            textoEncriptado = textoEncriptado + "ufat";
        } else {
            textoEncriptado = textoEncriptado + textoHaEncriptar[i];
        }
    }
    console.log("textoEncriptado " + textoEncriptado);
    let campoMensaje = document.getElementById("resultado_encriptacion");
    campoMensaje.innerHTML = textoEncriptado;

    mostraMensajesHtml("mostrarResultado", 0);
    mostraMensajesHtml("mostarMensajeCaja", 1);
    document.getElementById("mensajeIngreso").innerHTML = " <i class='bi bi-exclamation-circle-fill icon_exclamacion'></i> Solo letras minúsculas y sin acentos";
    document.getElementById('mensajeIngreso').classList.remove('presentacion_mensaje_info_red');
    document.getElementById('mensajeIngreso').classList.add('presentacion_mensaje_info');
    return;

}

function desencriptarTexto() {
    let textoHaDesencriptar = document.getElementById("texto_a_trabajar").value;
    console.log("textoHaDesencriptar " + textoHaDesencriptar);
    let textoDesencriptado = textoHaDesencriptar.replace(/ai/g, "a");
    console.log("textoDesencriptado " + textoDesencriptado);
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    console.log("textoDesencriptado " + textoDesencriptado);

    let campoMensaje = document.getElementById("resultado_encriptacion");
    campoMensaje.innerHTML = textoDesencriptado;
    document.getElementById("mensajeIngreso").innerHTML = " <i class='bi bi-exclamation-circle-fill icon_exclamacion'></i> Solo letras minúsculas y sin acentos";
    document.getElementById('mensajeIngreso').classList.remove('presentacion_mensaje_info_red');
    document.getElementById('mensajeIngreso').classList.add('presentacion_mensaje_info');

    mostraMensajesHtml("mostarMensajeCaja", 1);
    mostraMensajesHtml("mostrarResultado", 0);
}

function validaCampo() {
    let texto_a_trabajar = document.getElementById("texto_a_trabajar");
    if (texto_a_trabajar.value == "") {
        texto_a_trabajar.focus();
        document.getElementById("mensajeIngreso").innerHTML = " <i class='bi bi-exclamation-circle-fill icon_exclamacion_red'></i> Debe Ingresar Datos";
        document.getElementById('mensajeIngreso').classList.remove('presentacion_mensaje_info');
        document.getElementById('mensajeIngreso').classList.add('presentacion_mensaje_info_red');
        return false;
    }

    let strRegex = new RegExp(/[^a-z0-9ñáéíóú]/);

    console.log("texto a validar (" + texto_a_trabajar.value + ")");
    console.log("validacion texto " + strRegex.test(texto_a_trabajar.value));
    if (strRegex.test(texto_a_trabajar.value)) {
        texto_a_trabajar.focus();
        document.getElementById("mensajeIngreso").innerHTML = " <i class='bi bi-exclamation-circle-fill icon_exclamacion_red'></i> Debe Ingresar minusculas o numeros";
        document.getElementById('mensajeIngreso').classList.remove('presentacion_mensaje_info');
        document.getElementById('mensajeIngreso').classList.add('presentacion_mensaje_info_red');
        return false;
    }
    return true;
}

function limpiar() {
    document.getElementById("texto_a_trabajar").value = "";
    document.getElementById("resultado_encriptacion").innerHTML = "";
    mostraMensajesHtml("mostarMensajeCaja", 0);
    mostraMensajesHtml("mostrarResultado", 1);
    document.getElementById("mensajeIngreso").innerHTML = " <i class='bi bi-exclamation-circle-fill icon_exclamacion'></i> Solo letras minúsculas y sin acentos";
    document.getElementById('mensajeIngreso').classList.remove('presentacion_mensaje_info_red');
    document.getElementById('mensajeIngreso').classList.add('presentacion_mensaje_info');

}

function copiarPortapapeles() {
    let campoMensaje = document.getElementById("resultado_encriptacion").innerHTML;
    console.log("campoMensaje ", campoMensaje);
    limpiar();

    navigator.clipboard.writeText(campoMensaje)
        .then(() => {
            console.log('Texto copiado al portapapeles')
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
        });

}