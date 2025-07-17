document.getElementById("boton_info").addEventListener("click", function() {
    const panel = document.getElementById("panel_informacion")
    const info_buttom = document.getElementById("boton_info")
    panel.style.visibility = "visible";
    panel.style.pointerEvents = "all";
    info_buttom.style.visibility = "hidden";
    info_buttom.style.pointerEvents = "none";
})

document.getElementById("boton_cerrar_panel").addEventListener("click", function() {
    const panel = document.getElementById("panel_informacion")
    const info_buttom = document.getElementById("boton_info")
    panel.style.visibility = "hidden";
    panel.style.pointerEvents = "none";
    info_buttom.style.visibility = "visible";
    info_buttom.style.pointerEvents = "all";
})