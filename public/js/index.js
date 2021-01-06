const logoutButton = document.querySelector('#logout-button');
const message = document.querySelector('#msg');

logoutButton.addEventListener('click', (e) => {
    e.preventDefault();

    message.textContent = '';

    fetch('/logout', {
        method: "PATCH",
        body: JSON.stringify({
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((response) => {
        response.json().then((data) => {
            msg.textContent = data.msg;
        })
    });
});
