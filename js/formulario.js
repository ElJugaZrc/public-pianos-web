const formInf = document.querySelector('.form');

formInf.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formInf);
    const data = Object.fromEntries(formData);
    
    fetch('https://reqres.in/api/users',{
        method:'POST',
        headers: {
            'Content-Type' : 'aplication/json'
       },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error));
});