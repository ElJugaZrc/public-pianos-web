const formInf = document.querySelector('.form');

formInf.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formInf);
    const data = Object.fromEntries(formData);

    fetch("url_webhook", {
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
});