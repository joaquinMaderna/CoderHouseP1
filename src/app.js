import express from "express";
//import ProductManager from "./productManager.js";

const app = express()

const port = 8080

const user = {
    name: "juan",
    age: 18
}

app.listen(port, ()=>{
    console.log("servidor funcionando");
})

app.get("/api/products/", (peticion,respuesta)=>{
    //en esta ruta tengo que listar todos los productos del path
    respuesta.send(user)
})

app.get("/api/products/:pid", (peticion,respuesta)=>{
    //en esta ruta tengo que traer sólo el producto con el id proporcionado
    respuesta.send(user)
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


