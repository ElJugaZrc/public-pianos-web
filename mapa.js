//Creamos las capas que van a contener cadad tipo de marcador
var marcadoresVerdes = L.layerGroup();
var marcadoresAmarillos = L.layerGroup();
var marcadoresRojos = L.layerGroup();
var marcadoresGrises = L.layerGroup();
var marcadoresMorados = L.layerGroup();

const map = L.map('map',{
    center: [37.3703279, -5.9996015],
    zoom: 3,
    inertia: true,
    worldCopyJump: true,
    minZoom: 2,
    layers: [marcadoresVerdes,marcadoresAmarillos,marcadoresRojos,marcadoresGrises,marcadoresMorados]
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',}).addTo(map); // Esta línea hace que el mapa se muestre


// Función para los marcadores (hecha por Github copilot las siguientes 5 líneas)
fetch('pianos.json')
    .then(response => response.json())
    .then(pianos => {
        pianos.forEach(piano => {

            //Creamos el icono del marcador:
            const icono = L.icon({
                iconUrl: `images/marcadores/${piano.estado}.png`,
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })

            // Crea el marcador
            const marcador =  L.marker([piano.latitud, piano.longitud], { icon: icono })
                .bindPopup(
                    `<h2 style="margin-bottom: 10px;">${piano.lugar}</h2>
                    <h6 style="margin:0px;">ID(${piano.id})</h6>
                    <hr>
                    <img src='images/pianos/piano_${piano.foto}.webp' width='300px'>
                    <p>${piano.descripcion}</p>
                    <table style="width:100%"><tr><td><a href='${piano.link}' target='_blank' rel='noopener noreferrer'>Open in google maps</a></td><td><h5 style="margin: 0px;">Last update: ${piano.comprobacion}</h5></td></tr></table>`
                );
            
            //Metemos el marcador en la capa correspondiente:
            if (piano.estado == 1 || piano.estado == 5) {
                marcador.addTo(marcadoresVerdes)
            } else if (piano.estado == 2 || piano.estado == 6) {
                marcador.addTo(marcadoresAmarillos)
            } else if (piano.estado == 3 || piano.estado == 7) {
                marcador.addTo(marcadoresRojos)
            } else if (piano.estado == 0 || piano.estado == 4) {
                marcador.addTo(marcadoresGrises)
            } else {
                marcador.addTo(marcadoresMorados)
            }
        });
    })
    .catch(error => {
        console.error("Error cargando pianos.json:", error);
    });

var filtroPianos = {
    '<img src="images/marcadores/1.png" width="20" class = "iconos_filtro"> <hr>' : marcadoresVerdes,
    '<img src="images/marcadores/2.png" width="20" class = "iconos_filtro"> <hr>' : marcadoresAmarillos,
    '<img src="images/marcadores/3.png" width="20" class = "iconos_filtro"> <hr>' : marcadoresRojos,
    '<img src="images/marcadores/0.png" width="20" class = "iconos_filtro"> <hr>' : marcadoresGrises,
    '<img src="images/marcadores/8.png" width="20" class = "iconos_filtro">' : marcadoresMorados
};

var layerControl = L.control.layers(null,filtroPianos).addTo(map);