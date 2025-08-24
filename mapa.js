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

const map = L.map('map',{
    center: [37.3703279, -5.9996015],
    zoom: 3
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',}).addTo(map); // Esta línea hace que el mapa se muestre


// Función para los marcadores (hecha por Github copilot las líneas 18 a 24)
fetch('pianos.json')
    .then(response => response.json())
    .then(pianos => {
        pianos.forEach(piano => {

            // Crea el marcador
            L.marker([piano.latitud, piano.longitud], { icon: L.icon({
                iconUrl: `images/marcadores/${piano.estado}.png`,
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            }) })
                .addTo(map)
                .bindPopup(
                    `<h2 style="margin-bottom: 10px;">${piano.lugar}</h2>
                    <h6 style="margin:0px;">ID(${piano.id})</h6>
                    <hr>
                    <img src='images/pianos/piano_${piano.id}.webp' width='300px'>
                    <p>${piano.descripcion}</p>
                    <table style="width:100%"><tr><td><a href='${piano.link}' target='_blank' rel='noopener noreferrer'>Open in google maps</a></td><td><h5 style="margin: 0px;">Last update: ${piano.comprobacion}</h5></td></tr></table>`
                );
        });
    })
    .catch(error => {
        console.error("Error cargando pianos.json:", error);
    });