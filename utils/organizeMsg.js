const organizeMsg = (orderOne='', orderTwo='', orderThree='', orderFour='', orderFive='', orderSix='', orderSeven='', orderEight='', orderNine='', orderTen='') => {
    const validMsg = {
        orderOne,
        orderTwo,
        orderThree,
        orderFour,
        orderFive,
        orderSix,
        orderSeven,
        orderEight,
        orderNine,
        orderTen
    }
    return {
        orderOne: validMsg.orderOne ?  sentense(validMsg.orderOne) : '',
        orderTwo: validMsg.orderTwo ? sentense(validMsg.orderTwo) : '',
        orderThree: validMsg.orderThree ? sentense(validMsg.orderThree) : '',
        orderFour: validMsg.orderFour ? sentense(validMsg.orderFour) : '',
        orderFive: validMsg.orderFive ? sentense(validMsg.orderFive) : '',
        orderSix: validMsg.orderSix ?  sentense(validMsg.orderSix) : '',
        orderSeven: validMsg.orderSeven ? sentense(validMsg.orderSeven) : '',
        orderEight: validMsg.orderEight ? sentense(validMsg.orderEight) : '',
        orderNine: validMsg.orderNine ? sentense(validMsg.orderNine) : '',
        orderTen: validMsg.orderTen ? sentense(validMsg.orderTen) : ''
    }
};

const sentense = (order) => {
    return `${order.ownername} orderd ${order.mana} in ${order.date}`;
}

module.exports = {
    organizeMsg
}