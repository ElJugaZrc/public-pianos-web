const map = L.map('map').setView([37.3703279, -5.9996015], 3); // Sevilla

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
    iconUrl: 'images/marker_negrojo.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea negroamarillo
const IconoNegroAmarillo = new L.Icon({
    iconUrl: 'images/marker_negroamarillo.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Constante para que el icono sea negroverde
const IconoNegroVerde = new L.Icon({
    iconUrl: 'images/marker_negroverde.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Usar el icono rojo en el marcador
var marker = L.marker([41.288997, 2.074828], { icon: IconoNegroVerde}).addTo(map);
marker.bindPopup("<h2>Aeropuerto de El Prat</h2><hr></hr><img src='images/imagen_prueba.png.jpg' width='300px'></img><p>Piano en buenas condiciones y bien afinado. Su acceso está limitado ya que se necesita una tarjeta de embarque para acceder al aeropuerto.</p><a href = 'https://www.google.com/maps/@41.2894063,2.0753324,206m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D' target='_blank' rel='noopener noreferrer'>Abrir en google maps</a>")