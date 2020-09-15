/**
 * Modules here
 */
require("dotenv").config();
const express = require ('express')
const app = express();
const cors = require('cors')

/**
 * Route links here
 */
const customerRoute = require('./routes/customer')
const authenticationRoute = require('./routes/authentication')
const ordersRoute = require('./routes/orders')

const path = require('path')

/**
 * Middlewares here
 */

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('./public'))
app.use(cors())
app.use('/customer', customerRoute)
app.use('/authentication', authenticationRoute)
app.use('/orders', ordersRoute)

/**
 * Connection here
 */
const port = process.env.PORT || 3000;

console.log(process.env.TOKEN_SECRET);
app.listen(port, () => {
    console.log(`Listen on ${port}`);
})

