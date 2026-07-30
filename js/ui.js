var leyenda = document.getElementById("leyenda")
var boton_cerrar_leyenda = document.getElementById("cerrar_leyenda")
var boton_abrir_leyenda = document.getElementById("abrir_leyenda")

var panel = document.getElementById("panel_informacion")
var info_buttom = document.getElementById("boton_info")

document.getElementById("boton_info").addEventListener("click", function() {
    /* panel and info_button defined in lines 5 and 6 */
    panel.style.visibility                   = "visible";
    panel.style.pointerEvents                = "all";
    info_buttom.style.visibility             = "hidden";
    info_buttom.style.pointerEvents          = "none";
})

document.getElementById("boton_cerrar_panel").addEventListener("click", function() {
    /* panel and info_button defined in lines 5 and 6 */
    panel.style.visibility                   = "hidden";
    panel.style.pointerEvents                = "none";
    info_buttom.style.visibility             = "visible";
    info_buttom.style.pointerEvents          = "all";
})

boton_cerrar_leyenda.addEventListener("click", function() {
    /* leyenda and boton_* defined the first 3 lines*/
    leyenda.style.visibility                 = "hidden";
    boton_cerrar_leyenda.style.visibility    = "hidden";
    boton_cerrar_leyenda.style.pointerEvents = "none";
    boton_abrir_leyenda.style.visibility     = "visible";
    boton_abrir_leyenda.style.pointerEvents  = "all";
})

boton_abrir_leyenda.addEventListener("click", function() {
    /* leyenda and boton_* defined in the first 3 lines*/
    leyenda.style.visibility                 = "visible";
    boton_cerrar_leyenda.style.visibility    = "visible";
    boton_cerrar_leyenda.style.pointerEvents = "all";
    boton_abrir_leyenda.style.visibility     = "hidden";
    boton_abrir_leyenda.style.pointerEvents  = "none";
})