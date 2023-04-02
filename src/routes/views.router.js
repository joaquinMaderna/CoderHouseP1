import { Router } from "express"
import ProductManager from "./../productManager.js";

const productManager = new ProductManager()
const routerHbl = Router()

routerHbl.get("/productos", async (req, res)=>{
    const testProducts = await productManager.getProducts()
    res.render("index", {
        testProducts,
        style : "index.css"
    })
})

routerHbl.get("/realTimeProducts", async (req, res)=>{
    const testProducts = await productManager.getProducts()
    res.render("realTimeProducts", testProducts)
})

export default routerHbl 