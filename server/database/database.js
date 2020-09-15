var Datastore = require('nedb-promises')


const customersCollection = new Datastore({ filename: __dirname + '/customers.db', autoload: true });
const ordersCollection = new Datastore({ filename: __dirname + '/orders.db', autoload: true });
const productsCollection = new Datastore({ filename: __dirname + '/products.db', autoload: true });

module.exports = {customersCollection, ordersCollection, productsCollection};