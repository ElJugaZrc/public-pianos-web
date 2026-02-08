//Hasta la línea 8 está hecho por chat gpt porque no se todavía mucho de javascript
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const globoTexto = document.getElementById("globo_texto");
    globoTexto.classList.add("globo_texto_visible");
  }, 2000); // 30 segundos
});

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

document.getElementById("boton_cerrar_leyenda").addEventListener("click", function() {
    const leyenda = document.getElementById("leyenda")
    const boton_cerrar_leyenda = document.getElementById("cerrar_leyenda")
    const boton_abrir_leyenda = document.getElementById("abrir_leyenda")
    leyenda.style.visibility = "hidden";
    boton_cerrar_leyenda.style.visibility = "hidden";
    boton_cerrar_leyenda.style.pointerEvents = "none";
    boton_abrir_leyenda.style.visibility = "visible";
    boton_abrir_leyenda.style.pointerEvents = "all";
})

document.getElementById("boton_abrir_leyenda").addEventListener("click", function() {
    const leyenda = document.getElementById("leyenda")
    const boton_cerrar_leyenda = document.getElementById("cerrar_leyenda")
    const boton_abrir_leyenda = document.getElementById("abrir_leyenda")
    leyenda.style.visibility = "visible";
    boton_cerrar_leyenda.style.visibility = "visible";
    boton_cerrar_leyenda.style.pointerEvents = "all";
    boton_abrir_leyenda.style.visibility = "hidden";
    boton_abrir_leyenda.style.pointerEvents = "none";
})