const userForm = document.querySelector('form');
const username = document.querySelector('#name');
const password = document.querySelector('#password');
const phone = document.querySelector('#phone');
const welcome = document.querySelector('#welcome-msg');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    welcome.textContent = '';

    fetch('/user', {
        method: "POST",
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            tel: phone.value
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((response) => {
        response.json().then((data) => {
            welcome.textContent = data.msg;
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

