const ordersRouter = require('express').Router();
const ordersController = require('../controllers/ordersController');
const {authorization} = require('../middlewares/authorization')


ordersRouter.get('/:orderId', authorization, ordersController.getOrder);

ordersRouter.get('/customer/orders', authorization, ordersController.getOrdersCustomer);

ordersRouter.post('/', ordersController.addOrder);

ordersRouter.delete('/:orderId', authorization, ordersController.deleteOrder);

//ordersRouter.patch('/:orderId', authorization, ordersController.updateOrder)

module.exports = ordersRouter