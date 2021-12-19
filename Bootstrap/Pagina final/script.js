onload = () => {
    ajustarPantalla();
}

onresize = () => {
    ajustarPantalla();
}

const ajustarPantalla = () => {
    let alturaPagina = document.body.clientHeight;
    let alturaCabecera = document.getElementsByTagName("header")[0].clientHeight;
    let alturaFooter = document.getElementsByTagName("footer")[0].clientHeight;
    let elementos = document.getElementsByClassName("scrollActivado");
    for (const elemento of elementos) {
        let alturaCuerpo = alturaPagina - alturaCabecera - alturaFooter;
        elemento.style.height = alturaCuerpo;
    }
}

document.getElementById("botonOpciones").addEventListener("click", () => {
    if (document.getElementById("listaOpciones").classList.contains("d-none")) {
        document.getElementById("listaOpciones").classList.remove("d-none");
    } else {
        document.getElementById("listaOpciones").classList.add("d-none");
    }
});