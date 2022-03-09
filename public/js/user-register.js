// const URL_PROD = "http://localhost:3000";
const URL_PROD = "https://tisw-censure-chat.herokuapp.com/";

$("#registrar").click(function(event) {

    event.preventDefault();

    let userData = {
        nombre: document.querySelector("#nombre").value,
        apellido: document.querySelector("#apellido").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        born: document.querySelector("#born").value,
        sex: document.querySelector("#nombre").value
    };
    userData = JSON.stringify(userData);

    fetch(URL_PROD + "/user", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: userData
        })
        .then(data => { return data.json() })
        .then(res => { console.log(res); })
        .catch(error => { console.log(error); });

    window.location = URL_PROD;

});