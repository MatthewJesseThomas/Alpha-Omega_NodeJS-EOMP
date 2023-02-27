// =======================================
// .........The Controller Setup.........
// =======================================
const express = require('express');
// Path Structure...
const path = require('path');
// body-parser Variable...
const bodyParser = require('body-parser');
// Router Variable...
const route = express.Router();
// Models structure...
const {User, Product} = require('../model');
// Creating a User...
const user = new User();
// Creating a Product...
const product = new Product();
// Alpha & Omega Gaming Home Route...
route.get('^/$|/alpha-omega-gaming', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});
// =========USER Router========
// User Login, Logging In... Route Setup
route.get('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
});
// Retrieving all Known Users... Route
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
// Retrieving the specific User... Route
route.get('/users/:id', (req, res)=>{
    user.fetchUser(req, res);
});
// Updating User Information... Route
route.put('/users/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Registering Users... Route
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
});
// Deleting User... Route
route.delete('/users/:id', (req, res)=>{
    user.deleteUser(req, res);
});
// <================================================>
// <===============Products Router================>
// <================================================>
// Fetching all the products... Route Setup
route.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
});
// Fetching single product.. Route
route.get('/products/:id', (req, res)=> {
    product.fetchProduct(req, res);
});
// Adding a new product... Route
route.post('/products', bodyParser.json(), (req, res)=> {
    product.addProduct(req, res);
});
// Updating a product... Route
route.put('/products/:id', bodyParser.json(), (req, res)=> {
    product.updateProduct(req, res);
});
// Deleting a product... Route
route.delete('/products/:id', (req, res)=> {
    product.deleteProduct(req, res);
});
module.exports = route;