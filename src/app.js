import express from "express";
import handlebars from "express-handlebars";

import productRoutes from "./routes/productsRoutes.js";
import viewsRouter from "./routes/views.router.js"
import ProductManager from "./productManager.js";
import { Server } from "socket.io";

import __dirname from "./utils/utils.js"
import { join } from 'path';


const productManager = new ProductManager()

const app = express()

const port = 8080


app.use(express.json())

app.use(express.urlencoded({extended : true}))

app.use("/static", express.static(join(__dirname, '..', '/public')))

//handlebars config------------------
//const handlebars = handlebars

//Decirle a express que utilizamos un motor de plantillas
app.engine('handlebars', handlebars.engine());

//Indicamos la direccion donde tiene que buscar todas las plantillas
app.set('views', join(__dirname, '..', '/views'));

//Le decimos al motor cual vamos a utilizar, handlebars o .hbs
app.set('view engine', 'handlebars');
//-----------------------------------


app.use("/views", viewsRouter, (req,res) => {
    res.send(
        console.log("views")
    )
})

app.listen(port, ()=>{
    console.log("servidor funcionando");
})


app.use("/api/products", productRoutes, async (req,res) =>{
    const products = await productManager.getProducts()
    res.json(   
        products
    )
})

























/*
const app = express()

const port = 8080

const product = {
    name: "juan",
    age: 18
}

app.listen(port, ()=>{
    console.log("servidor funcionando");
})

app.get("/api/products/", (peticion,respuesta)=>{
    //en esta ruta tengo que listar todos los productos del path
    respuesta.send(product)
})

app.get("/api/products/:pid", (peticion,respuesta)=>{
    //en esta ruta tengo que traer sólo el producto con el id proporcionado
    respuesta.send(product)
})

app.post("/", ()=>{
    //debera agregar un nuevo producto con los campos id, title,etc..
})

app.put("/:pid", ()=>{
    //deberá tomar un producto y actualizarlo por los campos enviados 
    //desde body. NUNCA se debe actualizar o eliminar el id al momento
    //de hacer dicha actualización
})

app.delete("/:pid", ()=>{
    //deberá eliminar el producto con el pid indicado
})

//-------------------Para el Carrito-------------------------
// SE DEBERA CREAR UN CARRITO.JSON

app.post("/api/carts/", ()=>{
    //debera crear un nuevo carrito con la estructura
    //id (A elección, que nunca se dupliquen los ids y que este se autogenere)
    //products (Array que contendra objetos que representen cada producto)   
})

app.post("/api/carts/:cid/product/:pid ", ()=>{
    //debe contener el producto (solo el id)
    //quantity(cantidad del producto)
    //si un producto ya existente al agregarse el prod, incrementar el campo quantity de dicho producto
})

app.get("/api/carts/:cid", (peticion,respuesta)=>{
    //en esta ruta tengo que traer sólo el producto con el id proporcionado
})
*/