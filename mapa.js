const map = L.map('map').setView([37.3703279, -5.9996015], 3);

// 1 = Verde, 2 = Amarillo, 3 = Rojo, 4 = NegroVerde, 5 = NegroAmarillo, 6 = Negrojo, 7 = Morado

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',}).addTo(map); // Esta línea hace que el mapa se muestre

// Constante para que el icono sea rojo
const IconoRojo = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea amarillo
const iconoAmarillo = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea verde
const IconoVerde = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea negrojo
const IconoNegrojo = new L.Icon({
    iconUrl: 'images/marcadores/marker_negrojo.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea negroamarillo
const IconoNegroAmarillo = new L.Icon({
    iconUrl: 'images/marcadores/marker_negroamarillo.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea negroverde
const IconoNegroVerde = new L.Icon({
    iconUrl: 'images/marcadores/marker_negroverde.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea negroverde
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
                case 1: icono = IconoVerde; break;
                case 2: icono = iconoAmarillo; break;
                case 3: icono = IconoRojo; break;
                case 4: icono = IconoNegroVerde; break;
                case 5: icono = IconoNegroAmarillo; break;
                case 6: icono = IconoNegrojo; break;
                case 7: icono = IconoMorado; break;
                default: icono = IconoVerde;
            }

            // Crea el marcador
            L.marker([piano.latitud, piano.longitud], { icon: icono })
                .addTo(map)
                .bindPopup(
                    `<h2>${piano.lugar}</h2>
                    <hr>
                    <img src='images/pianos/${piano.imagen}' width='300px'>
                    <p>${piano.descripcion}</p>
                    <a href='${piano.link}' target='_blank' rel='noopener noreferrer'>Abrir en google maps</a>`
                );
        });
    })
    .catch(error => {
        console.error("Error cargando pianos.json:", error);
    });