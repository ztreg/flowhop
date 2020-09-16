const {customersCollection, ordersCollection} = require('../database/database')

require('dotenv').config()

module.exports = {
    addOrder: async (order) => {
        try {
            return await ordersCollection.insert(order);
        } catch (error) {
            console.log(error)
            return error
        }
    },
    // updateOrder: async (orderToUpdate) => {
    //     try {
    //         return await ordersCollection.update({_id: orderToUpdate._id},
    //             { $set: orderToUpdate}, 
    //             {useFindAndModify: false, versionKey: false});
    //     } catch (error) {
    //         console.log(error);
    //         return error
    //     }
    // },
    deleteOrder: async (deleteId) => {
        try {
            return await ordersCollection.remove({_id: deleteId})
        } catch (error) {
            return error
        }
    },
    getOrder: async(orderinfo) => {
        try {
            return await ordersCollection.findOne(orderinfo)
        } catch (error) {
            return error
        }      
    },
    getOrdersCustomer: async (customerid) => {
        try {
            return await ordersCollection.find({user: customerid})
        } catch (error) {
            return error
        }
    }
}

