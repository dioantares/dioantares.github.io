function handleSubmit(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let value = Object.fromEntries(data.entries());
    let jsonstring = JSON.stringify(value);
    console.log("JSONstring: " + jsonstring);
    console.log("JSONstring length: " + jsonstring.length);
}

let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);