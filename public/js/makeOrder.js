const orderForm = document.querySelector('form');
const mana_option = document.querySelector('#manaopt');
const description = document.querySelector('#description');
const orderMsg = document.querySelector('#msg');

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    orderMsg.textContent = '';

    // post to server to save order in DB
    fetch('/saveorder', {
        method: "POST",
        body: JSON.stringify({
            mana: mana_option.value,
            description: description.value
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((response) => {
        response.json().then((data) => {
            orderMsg.textContent = data.msg;
        })
    });
});