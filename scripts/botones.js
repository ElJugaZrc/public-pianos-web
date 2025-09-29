function toggle_key(toggled) {
    const key = document.getElementById("leyenda")
    const close_key_button = document.getElementById("cerrar_leyenda")
    const open_key_button = document.getElementById("abrir_leyenda")
    key.style.visibility = toggled ? "visible" : "hidden";
    boton_cerrar_leyenda.style.visibility = toggled ? "visible" : "hidden";
    boton_cerrar_leyenda.style.pointerEvents = toggled ? "all" : "none";
    boton_abrir_leyenda.style.visibility = !toggled ? "visible" : "hidden";
    boton_abrir_leyenda.style.pointerEvents = !toggled ? "all" : "none";
}

function toggle_info(toggled) {
    const panel = document.getElementById("panel_informacion")
    const info_buttom = document.getElementById("boton_info")
    panel.style.visibility = toggled ? "visible" : "hidden";
    panel.style.pointerEvents = toggled ? "all" : "none";
    info_buttom.style.visibility = !toggled ? "visible" : "hidden";
    info_buttom.style.pointerEvents = !toggled ? "all" : "none";
}

document.getElementById("boton_cerrar_leyenda").addEventListener("click", function() {
    toggle_key(false)
})

document.getElementById("boton_abrir_leyenda").addEventListener("click", function() {
    toggle_key(true)
})

document.getElementById("boton_info").addEventListener("click", function() {
    toggle_info(true)
})

document.getElementById("boton_cerrar_panel").addEventListener("click", function() {
    toggle_info(false)
})