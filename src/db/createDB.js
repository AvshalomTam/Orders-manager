require('./mongoose')
const {createOrder} = require('./createOrder');
const {createUser} = require('./createUser');

//const createUser = (username='', password='' ,tel='', isadmin=false)
// createUser('Avshalom', '1234', '0541', true);
// createUser('Yonatan', '1234', '0542', false);
// createUser('Ori', '1234', '0543', false);
// createUser('Yzhak', '1234', '0544', false);
// createUser('Yogev', '1234', '0545', false);

// createUser('aa', 'ddd', 404);

// const createOrder = (mana='', owner='', date='')
// createOrder(15, 'ori', '23.12.2020', '0545681258');
// createOrder(15, 'yonatan', '23.12.2020', '0508411111');
// createOrder(15, 'itzhak', '23.12.2020', '0555555555');
// createOrder(26, 'yogev', '23.12.2020', '0545682544558');
// createOrder(26, 'yonatan', '23.12.2020', '0508419999');
// createOrder(26, 'yaakov', '23.12.2020', '011111111');
// createOrder(26, 'shaul', '23.12.2020', '0808080880808');
// createOrder(157, 'yarden', '23.12.2020', '0545682544558');
// createOrder(157, 'dana', '23.12.2020', '0508419999');
// createOrder(157, 'rotem', '23.12.2020', '011111111');
// createOrder(157, 'miri', '23.12.2020', '0808080880808');
// createOrder(157, 'dalia', '23.12.2020', '0560211111');