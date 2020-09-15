const customerRouter = require('express').Router();
const customerController = require('../controllers/customerController');
const {authorization} = require('../middlewares/authorization')


customerRouter.get('/', authorization, customerController.getcustomerAll);

customerRouter.get('/:customerId', authorization, customerController.getcustomer);


customerRouter.post('/', customerController.addcustomer);

customerRouter.delete('/:customerId', authorization, customerController.deletecustomer);

// customerRouter.get('/:customerId/orders', authorization, customerController.getcustomerTodos)
// 
 customerRouter.patch('/:customerId', authorization, customerController.updatecustomer)

module.exports = customerRouter