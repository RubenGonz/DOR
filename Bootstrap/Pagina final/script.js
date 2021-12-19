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