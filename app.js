const express = require('express')
require('dotenv').config()
const app = express();

const _ = require('lodash');

const Producto = require('./src/services/productos.services')

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/health', (_req,res)=>{
    res.status(200).json({
        success:true,
        enviroment : process.env.enviroment,
        health:'up'
    })
})



app.get('/',(_req,res)=>{
    const products = new Producto;
     res.render('pages/home',{products: products.getProducto()})
     
})


app.post('/productos', (req,res)=>{
    const {
        name,  
        arg1,
        arg2,
        arg3,
        pol,
        mex,
        ara,
        email,
        apuest} = req.body;

    const products = new Producto();
    products.postProduct({
        name,
        arg1,
        arg2,
        arg3,
        pol,
        mex,
        ara,
        email,
        apuest
    })

    res.redirect('/')
})

module.exports=app;