const formInf = document.querySelector('.form');

formInf.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formInf);
    const data = Object.fromEntries(formData);

    fetch("https://discord.com/api/webhooks/1471990187914690601/Uu4EXbPn7XPjup7uWIlRGru3yOzEpJ5_TqChIeZUTJ0qds9BjLrYkL1-GFsuBxsQFI6o", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: `
                Nuevo formulario enviado:
                Place: ${data.place}
                Description: ${data.description}
                Image: ${data.image}
                State: ${data.state}
                Restricted area: ${data.restricted_area}
                Temporal: ${data.temp}
                Location: ${data.location}
                Email: ${data.email}
            `
        })
    });
    window.location.href = "../html/formulario_enviado.html";
});