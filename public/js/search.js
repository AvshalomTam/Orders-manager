const ordersButton = document.querySelector('#view-orders');
const orderOne = document.querySelector('#order-1');
const orderTwo = document.querySelector('#order-2');
const orderThree = document.querySelector('#order-3');
const orderFour = document.querySelector('#order-4');
const orderFive = document.querySelector('#order-5');
const orderSix = document.querySelector('#order-6');
const orderSeven = document.querySelector('#order-7');
const orderEight = document.querySelector('#order-8');
const orderNine = document.querySelector('#order-9');
const orderTen = document.querySelector('#order-10');

ordersButton.addEventListener('click', (e) => {
    e.preventDefault()
    orderOne.textContent = '';
    orderTwo.textContent = '';
    orderThree.textContent = '';
    orderFour.textContent = '';
    orderFive.textContent = '';
    orderSix.textContent = '';
    orderSeven.textContent = '';
    orderEight.textContent = '';
    orderNine.textContent = '';
    orderTen.textContent = '';

    fetch('/orders').then((response) => {
        response.json().then((data) => {
            orderOne.textContent = data.orderOne
            orderTwo.textContent = data.orderTwo
            orderThree.textContent = data.orderThree
            orderFour.textContent = data.orderFour
            orderFive.textContent = data.orderFive
            orderSix.textContent = data.orderSix
            orderSeven.textContent = data.orderSeven
            orderEight.textContent = data.orderEight
            orderNine.textContent = data.orderNine
            orderTen.textContent = data.orderTen
        })
    })
});