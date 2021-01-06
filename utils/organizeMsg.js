const organizeMsg = (orderOne='', orderTwo='', orderThree='', orderFour='', orderFive='') => {
    const validMsg = {
        orderOne,
        orderTwo,
        orderThree,
        orderFour,
        orderFive
    }
    return {
        orderOne: validMsg.orderOne ?  sentense(validMsg.orderOne) : '',
        orderTwo: validMsg.orderTwo ? sentense(validMsg.orderTwo) : '',
        orderThree: validMsg.orderThree ? sentense(validMsg.orderThree) : '',
        orderFour: validMsg.orderFour ? sentense(validMsg.orderFour) : '',
        orderFive: validMsg.orderFive ? sentense(validMsg.orderFive) : ''
    }
};

const sentense = (order) => {
    return `${order.ownername} orderd ${order.mana} in ${order.date}`;
}

module.exports = {
    organizeMsg
}