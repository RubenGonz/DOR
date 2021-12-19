document.getElementById("botonOpciones").addEventListener("click", () => {
    if (document.getElementById("listaOpciones").classList.contains("d-none")) {
        document.getElementById("listaOpciones").classList.remove("d-none");
    } else {
        document.getElementById("listaOpciones").classList.add("d-none");
    }
});