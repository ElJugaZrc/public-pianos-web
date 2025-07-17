document.getElementById("info_buttom").addEventListener("click", function() {
    const panel = document.getElementById("panel_informacion")
    const info_buttom = document.getElementById("info_buttom")
    panel.style.visibility = "visible";
    panel.style.pointerEvents = "all";
    info_buttom.style.visibility = "hidden";
    info_buttom.style.pointerEvents = "none";
})