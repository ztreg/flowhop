const productsModel = require('../models/productsModel');

module.exports = {
    addProduct: async (req, res) => {
        const product = req.body.product
        let addedProduct = await productsModel.addProduct(product)

        let status = addedProduct ? 201 : 400
        let msg = addedProduct ? 'New product created' : 'Couldnt add product ops'
        res.status(status).json({msg: msg, product: addedProduct})
       
    },
    updateProduct: async (req, res) => {
        console.log(req.params.productId);
        let updateproduct = await productsModel.getProduct({_id: req.params.productId})
        if(updateproduct) {
            if(!req.user.isOwner(updateproduct) && (!req.user.isAdmin())) {
                console.log('incorrect customer is trying to edit this customer')
                return res.status(401).json({msg: 'incorrect customer is trying to edit this customer'})
            }
            const productToUpdate = {
                _id: updateproduct._id,
                productName: req.body.productName,
                productDesc: req.body.productDesc,
                productPrice: req.body.productPrice,
                makeTime: req.body.makeTime
            }
            //Potential image links
            if(req.body.imageUrl) productToUpdate.imageUrl = req.body.imageUrl

            let lastId = await productsModel.updateProduct(productToUpdate)
            let status = lastId ? 201 : 500;
            res.status(status).json({updated_count: lastId});
        } else {
            res.status(404).json({msg : "That product does not exist"});
        }

    },
    deleteProduct: async (req, res) => {
        // No auth check heh
        let productId = req.params.productId
        let response = await productsModel.deleteProduct(productId)
        let status = response ? 200 : 500;

        return res.status(status).json({response: response});   
    },
    getProduct: async (req, res) => {
         // No auth check heh
         console.log('wat');
        res.json(await productsModel.getProduct({_id: req.params.productId}))  
    },
    getAllProducts: async(req, res) => {
        let products = await productsModel.getAllProducts({})
        let status = products ? 200 : 500;
        return res.status(status).json({response: products});   
    },
}