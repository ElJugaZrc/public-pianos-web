const marcadoresVerdes = L.layerGroup();
const marcadoresAmarillos = L.layerGroup();
const marcadoresRojos = L.layerGroup();
const marcadoresGrises = L.layerGroup();
const marcadoresMorados = L.layerGroup();

const map = L.map('map',{
    center: [37.3703279, -5.9996015],
    zoom: 3,
    inertia: true,
    worldCopyJump: true,
    minZoom: 2,
    layers: [marcadoresVerdes,marcadoresAmarillos,marcadoresRojos,marcadoresGrises,marcadoresMorados]
})

L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
}).addTo(map);


fetch('pianos.json')
    .then(res => {
        res.pianos.forEach(piano => {

            // Creamos el icono del marcador:
            var icono = L.icon({
                iconUrl: `images/marcadores/${piano.estado}.png`,
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });

            // Crea el marcador
            var marcador =  L.marker([piano.latitud, piano.longitud], { icon: icono })
                .bindPopup(
                    `<h2 style="margin-bottom: 10px;">${piano.lugar}</h2>
                    <h6 style="margin:0px;">ID(${piano.id})</h6>
                    <hr>
                    <img src='images/pianos/piano_${piano.foto}.webp' width='300px'>
                    <p>${piano.descripcion}</p>
                    <table style="width:100%"><tr><td><a href='${piano.link}' target='_blank' rel='noopener noreferrer'>Open in google maps</a></td><td><h5 style="margin: 0px;">Last update: ${piano.comprobacion}</h5></td></tr></table>`
                );
            
            // Metemos el marcador en la capa correspondiente:
            var categ_marcador;
            switch(piano.estado) {
                case 1:
                case 5:
                    categ_marcador = marcadoresVerdes;
                case 2:
                case 6:
                    categ_marcador = marcadoresAmarillos;
                case 3:
                case 7:
                    categ_marcador = marcadoresRojos;
                case 0:
                case 4:
                    categ_marcador = marcadoresGrises;
                default:
                    categ_marcador = marcadoresMorados;
            }

            marcador.addTo(categ_marcador);
        });
    })
    .catch(error => {
        alert("Error cargando pianos.json, recarga la página.")
        console.error("Error cargando pianos.json:", error);
    });

var filtroPianos = {
    '<img src="images/marcadores/1.png" width="20" class = "iconos_filtro"> <hr>': marcadoresVerdes,
    '<img src="images/marcadores/2.png" width="20" class = "iconos_filtro"> <hr>': marcadoresAmarillos,
    '<img src="images/marcadores/3.png" width="20" class = "iconos_filtro"> <hr>': marcadoresRojos,
    '<img src="images/marcadores/0.png" width="20" class = "iconos_filtro"> <hr>': marcadoresGrises,
    '<img src="images/marcadores/8.png" width="20" class = "iconos_filtro">': marcadoresMorados
};

var layerControl = L.control.layers(null, filtroPianos).addTo(map);