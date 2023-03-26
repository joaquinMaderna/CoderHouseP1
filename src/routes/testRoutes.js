import express from "express";
import userRoutes from "./productsRoutes.js";
import ProductManager from "../../productManager.js";

const productManager = new ProductManager()

const app = express()

const port = 8080

const user = {
    name: "juan",
    age: 18
}

app.use(express.json())

app.use(express.urlencoded({extended : true}))

app.listen(port, ()=>{
    console.log("servidor funcionando");
})

app.use("/api/users", userRoutes, async (req,res) =>{
    const users = await productManager.getProducts()
    res.json(   
        users
    )
})

