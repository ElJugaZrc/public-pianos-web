document.getElementById("info_button").addEventListener("click", function() {
    const panel = document.getElementById("panel_informacion")
    const info_buttom = document.getElementById("info_button")
    panel.style.visibility = "visible";
    panel.style.pointerEvents = "all";
    info_buttom.style.visibility = "hidden";
    info_buttom.style.pointerEvents = "none";
})

document.getElementById("boton_cerrar_panel").addEventListener("click", function() {
    const panel = document.getElementById("panel_informacion")
    const info_buttom = document.getElementById("info_button")
    panel.style.visibility = "hidden";
    panel.style.pointerEvents = "none";
    info_buttom.style.visibility = "visible";
    info_buttom.style.pointerEvents = "all";
})