// const database = require('../database/database')
const {customersCollection, ordersCollection} = require('../database/database')
// const orders = database.ordersCollection

const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcryptjs')
async function hashPW (password) {
    return bcrypt.hashSync(password, 10)
}
module.exports = {
    addcustomer: async (customer) => {
        console.log(customersCollection);
        try {
            // const checkIfExists = await customersCollection.find({username: customer.username})
            const checkIfExists = null;
            if(checkIfExists){
                return false
            } 
            else {
                customer.password = await hashPW(customer.password)
                return await customersCollection.insert(customer);
            }
        } catch (error) {
            console.log(error)
            return error
        }
    },
    updatecustomer: async (customerToUpdate) => {
        try {
            return await customersCollection.update({_id: customerToUpdate._id},
                { $set: customerToUpdate}, 
                {useFindAndModify: false, versionKey: false});
        } catch (error) {
            console.log(error);
            return error
        }
    },
    deletecustomer: async (deleteId) => {
        console.log('wat');
        try {
            return await customersCollection.remove({_id: deleteId})
        } catch (error) {
            return error
        }
    },
    getcustomer: async(customerinfo) => {
        console.log(customerinfo);
        try {
            const test =  await customersCollection.findOne(customerinfo)
            console.log(test);
            return test
        } catch (error) {
            return error
        }      
    },
    getcustomerAll: async(filter) => {
        try {
            return await customersCollection.find(filter)
        } catch (error) {
            console.log(error);
            return error
        }
    },
    getcustomerOrders: async (customerid) => {
        try {
            return await customersCollection.find({customerid: customerid})
        } catch (error) {
            return error
        }
    },
    verifyToken: async (token) => {
        // console.log('verifierar token')
        const payload = jwt.verify(token, process.env.TOKEN_SECRET)
        return { 
            ...payload,
            owns(document) {
                return document.customerid === this.userId
            },
            isme(id) {
                return id === this.userId
            },
            isOwner(document){
                return document._id == this.userId
            },
            isAdmin(){
                return this.role === 'admin'
            },
            isMember() {
                return this.role === 'member'
            },
            isListCollaborator(document) {
                return document.includes(this.userId)
            }
        }
   
    }
}

