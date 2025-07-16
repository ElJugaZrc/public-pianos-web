const map = L.map('map').setView([37.3703279, -5.9996015], 3); // Sevilla

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',}).addTo(map); // Esta línea hace que el mapa se muestre