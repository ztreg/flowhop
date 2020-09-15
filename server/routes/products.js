const productsRouter = require('express').Router();
const productsController = require('../controllers/productsController');
const {authorization} = require('../middlewares/authorization')

productsRouter.get('/:productId', productsController.getProduct);

productsRouter.get('/', productsController.getAllProducts);

productsRouter.post('/', productsController.addProduct);

productsRouter.delete('/:productId', authorization, productsController.deleteProduct);

productsRouter.patch('/:productId', authorization, productsController.updateProduct)

module.exports = productsRouter