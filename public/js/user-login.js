// const URL_PROD = "http://localhost:3000";
const URL_PROD = "https://tisw-censure-chat.herokuapp.com/";

$("#loadChat").click(function(event) {

    event.preventDefault();

    let userData = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    };
    userData = JSON.stringify(userData);

    fetch(URL_PROD + "/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: userData
        })
        .then(data => { return data.json() })
        .then(res => {
            console.log(res);
            let sala = document.querySelector("#sala").value;

            window.location = URL_PROD + `/chat.html?nombre=${res.usuario.nombre}&sala=${sala}`;
        })
        .catch(error => { console.log(error); });

});