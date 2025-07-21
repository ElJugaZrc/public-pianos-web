// Estructura para añadir pianos:
// "id" : int que sea el número del anterior + 1
// "latitud" : float de las coordenadas del piano
// "longitud" : float de las coordenadas del piano
// "estado" : int que indique el estado del piano. 1 para pianos en buen estado. 2 para pianos con desperfectos. 3 para pianos en pésimas condiciones. 4, 5 y 6 son los casos anteriores pero para pianos de accesibilidad reducida. 7 para pianos temporales, es decir, que están por algún evento o algo.
// "lugar" : texto corto que indique el lugar en el que se encuentra el piano
// "imagen" : añadir una imagen a la carpeta de pianos con el nombre piano_(numero del id)
// "descripcion" : descripcion del piano y como llegar a él
// "link" : link de google maps de las coordenadas del piano
// Poner esas cosas en el archivo json

const map = L.map('map').setView([37.3703279, -5.9996015], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',}).addTo(map); // Esta línea hace que el mapa se muestre

// Constante para que el icono sea gris (0)
const IconoGris = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea verde (1)
const IconoVerde = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea amarillo (2)
const iconoAmarillo = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea rojo (3)
const IconoRojo = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea negroverde (4)
const IconoNegroVerde = new L.Icon({
    iconUrl: 'images/marcadores/marker_negroverde.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea negroamarillo (5)
const IconoNegroAmarillo = new L.Icon({
    iconUrl: 'images/marcadores/marker_negroamarillo.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea negrojo (6)
const IconoNegrojo = new L.Icon({
    iconUrl: 'images/marcadores/marker_negrojo.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea negris (7)
const IconoNegris = new L.Icon({
    iconUrl: 'images/marcadores/marker_negris.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea morado (8)
const IconoMorado = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Función para los marcadores (hecha por Github copilot) :( me siento decepcionado conmigo mismo pero es que no entendía un carajo de esto xd)
fetch('pianos.json')
    .then(response => response.json())
    .then(pianos => {
        pianos.forEach(piano => {
            // Selecciona el icono según el estado
            let icono;
            switch (piano.estado) {
                case 0: icono = IconoGris; break;
                case 1: icono = IconoVerde; break;
                case 2: icono = iconoAmarillo; break;
                case 3: icono = IconoRojo; break;
                case 4: icono = IconoNegroVerde; break;
                case 5: icono = IconoNegroAmarillo; break;
                case 6: icono = IconoNegrojo; break;
                case 7: icono = IconoNegris; break;
                case 8: icono = IconoMorado; break;
                default: icono = IconoGris;
            }

            // Crea el marcador
            L.marker([piano.latitud, piano.longitud], { icon: icono })
                .addTo(map)
                .bindPopup(
                    `<h2>${piano.lugar}</h2>
                    <hr>
                    <img src='images/pianos/${piano.imagen}' width='300px'>
                    <p>${piano.descripcion}</p>
                    <table><tr><td><a href='${piano.link}' target='_blank' rel='noopener noreferrer'>Open in google maps</a></td><td><h5>Last update: ${piano.comprobacion}</h5></td></tr></table>`
                );
        });
    })
    .catch(error => {
        console.error("Error cargando pianos.json:", error);
    });