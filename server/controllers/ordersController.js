const ordersModel = require('../models/ordersModel');

module.exports = {
    addOrder: async (req, res) => {

        const order = req.body.order

        let addedId = await ordersModel.addOrder(order)
        console.log(addedId);
        let status = addedId ? 201 : 400
        let msg = addedId ? 'New order created' : 'Couldnt add order ops'
        let timer = "15min" 
        res.status(status).json({msg: msg, orderId: addedId._id, timer: timer})
       
    },
    // updateOrder: async (req, res) => {
    //     let updateOrder = req.params.orderId;
    //     if(updateOrder) {
    //         if(!req.user.isOwner(updateOrder) ) {
    //             console.log('incorrect customer is trying to edit this customer')
    //             return res.status(401).json({msg: 'incorrect customer is trying to edit this customer'})
    //         }
    //         const orderToUpdate = {
    //             _id: updateOrder,

    //         }

    //         let lastId = await ordersModel.updateOrder(orderToUpdate)
    //         let status = lastId ? 201 : 500;
    //         res.status(status).json({updated_count: lastId});
    //     }

    // },
    deleteOrder: async (req, res) => {
        // No auth check heh
        let orderId = req.params.orderId
        let response = await ordersModel.deleteOrder(orderId)
        let status = response ? 200 : 500;

        return res.status(status).json({response: response});   
    },
    getOrder: async (req, res) => {
         // No auth check heh
         console.log('wat');
        res.json(await ordersModel.getOrder({_id: req.params.orderId}))  
    },
    getOrdersCustomer: async(req, res) => {
        console.log(req.user);
        let response = await ordersModel.getOrdersCustomer(req.user.userId)

        if(response.length > 0) {
            res.status(200).json(response) 
        } else {
            res.status(404).json("customerid not found") 
        }
         
    }
}