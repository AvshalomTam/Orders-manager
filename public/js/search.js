const ordersButton = document.querySelector('#view-orders');
const orderOne = document.querySelector('#order-1');
const orderTwo = document.querySelector('#order-2');
const orderThree = document.querySelector('#order-3');
const orderFour = document.querySelector('#order-4');
const orderFive = document.querySelector('#order-5');

ordersButton.addEventListener('click', (e) => {
    e.preventDefault()
    orderOne.textContent = '';
    orderTwo.textContent = '';
    orderThree.textContent = '';
    orderFour.textContent = '';
    orderFive.textContent = '';

    fetch('/orders').then((response) => {
        response.json().then((data) => {
            orderOne.textContent = data.orderOne
            orderTwo.textContent = data.orderTwo
            orderThree.textContent = data.orderThree
            orderFour.textContent = data.orderFour
            orderFive.textContent = data.orderFive
        })
    })
});