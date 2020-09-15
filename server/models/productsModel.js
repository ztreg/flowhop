const {customersCollection, ordersCollection, productsCollection} = require('../database/database')

require('dotenv').config()

module.exports = {
    addProduct: async (product) => {
        console.log(product);
        try {
            return await productsCollection.insert(product);
        } catch (error) {
            console.log(error)
            return error
        }
    },
    updateProduct: async (productToUpdate) => {
        try {
            return await productsCollection.update({_id: productToUpdate._id},
                { $set: productToUpdate}, 
                {useFindAndModify: false, versionKey: false});
        } catch (error) {
            console.log(error);
            return error
        }
    },
    deleteProduct: async (deleteId) => {
        try {
            return await productsCollection.remove({_id: deleteId})
        } catch (error) {
            return error
        }
    },
    getProduct: async(productinfo) => {
        try {
            return await productsCollection.findOne(productinfo)
        } catch (error) {
            return error
        }      
    },
    getAllProducts: async (filter) => {
        try {
            return await productsCollection.find(filter)
        } catch (error) {
            return error
        }
    }
}

