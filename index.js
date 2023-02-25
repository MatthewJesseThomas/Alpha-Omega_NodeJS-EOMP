const express = require('express');
const route = require('./controller');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = parseInt(process.env.PORT) || 4000;
const app = express();
// MiddleWare
const {errorHandling} = require('./middleware/ErrorHandling');
// 
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});
app.use(route);
app.use(cors(), cookieParser(), express.json, express.urlencoded({extended: false}));
// Server Running on...
app.listen(port, ()=> {
    console.log(`Server Running on Port:${port}`);
});
// Handling all errors...
app.use(errorHandling);