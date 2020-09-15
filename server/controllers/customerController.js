const customerModel = require('../models/customerModel');
const bcrypt = require('bcryptjs');
// const todoModel = require('../models/todoModel');
// const todoListModel = require('../models/todoListModel');

function hashPW (password) {
    return bcrypt.hashSync(password, 10)
}

module.exports = {
    addcustomer: async (req, res) => {
        const customer = {
            username: req.body.username,
            password: req.body.password,
            role: "member"
        }
        if(customer.role != 'admin') {
            let addedId = await customerModel.addcustomer(customer)
            let status = addedId ? 201 : 400
            let msg = addedId ? 'New account created' : 'That customername already exists'
            res.status(status).json({msg})
        }
        else {
            res.status(401).json({msg: 'Cannot add a admin'})
        }
       
    },
    updatecustomer: async (req, res) => {
        let customerToEdit = req.params.customerId;
        if(customerToEdit) {
            if(!req.user.isme(customerToEdit) ) {
                console.log('incorrect customer is trying to edit this customer')
                return res.status(401).json({msg: 'incorrect customer is trying to edit this customer'})
            }
            const customerToUpdate = {
                _id: customerToEdit,
            }
    
            if(req.body.username) customerToUpdate.username = req.body.username
            if(req.body.password) customerToUpdate.password = hashPW(req.body.password)

            // console.log(customerToUpdate)

            let lastId = await customerModel.updatecustomer(customerToUpdate)
            let status = lastId ? 201 : 500;
            res.status(status).json({updated_count: lastId});
        }

    },
    deletecustomer: async (req, res) => {
        let customerId = req.params.customerId
            if(!req.user.isme(customerId)) {
                console.log('incorrect customer is trying to delete this customer')
                return res.status(401).json({msg: 'incorrect customer is trying to delete this customer'})
            }
            
            // let deleteResult2 = await todoModel.clearAll({customerid: customerId})
            let response = await customerModel.deletecustomer(customerId)
            let status = response ? 200 : 500;

            return res.status(status).json({response: response});   
    },
    getcustomer: async (req, res) => {
        //console.log(req.params.customerId);
        if(!req.user.isme(req.params.customerId) && !req.user.isAdmin()) {
            console.log('incorrect customer is trying to get this customer')
            return res.status(401).json({msg: 'incorrect customer is trying to get this customer'})
        }
        res.json(await customerModel.getcustomer({_id: req.params.customerId}))  
    },
    getcustomerAll: async(req, res) => {
        console.log(req.user);
        if(!req.user.isAdmin()) {
            console.log('incorrect customer is trying to get all')
            return res.status(401).json({msg: 'incorrect customer is trying to get all'})
        }
        let customers = await customerModel.getcustomerAll({})
        // let lists = await todoListModel.getTodoLists(req.params.customerId)
        let response = {
            customers
        }
        if(customers.length > 0) {
            res.status(200).json(response) 
        } else {
            res.status(404).json("customerid not found") 
        }
         
    },
    getcustomerTodos: async(req, res) => {
        
        if(!req.user.isme(req.params.customerId)) {
            console.log('incorrect customer is trying to delete this customer')
            return res.status(401).json({msg: 'incorrect customer is trying to delete this customer'})
        }
        let response = await customerModel.getcustomerTodos(req.params.customerId)
        if(response.length > 0) {
            res.status(200).json(response) 
        } else {
            res.status(404).json("customerid not found") 
        }
         
    }
}