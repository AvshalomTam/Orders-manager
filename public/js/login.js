const userForm = document.querySelector('form');
const username = document.querySelector('#name');
const password = document.querySelector('#password');

const message = document.querySelector('#msg');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    message.textContent = '';

    fetch('/loginuser', {
        method: "POST",
        body: JSON.stringify({
            username: username.value,
            password: password.value
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((response) => {
        response.json().then((data) => {
            message.textContent = data.msg;
        })
    });
})

    // fetch('/userrouter').then((response) => {
    //     response.json().then((data) => {
    //         console.log(data.msg);
    //     })
    // });

    // fetch('/userrouter2').then((response) => {
    //     response.json().then((data) => {
    //         console.log(data.msg);
    //     })
    // });

