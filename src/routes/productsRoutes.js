import { Router } from "express"
<<<<<<< HEAD
import ProductManager from "../../productManager.js";

const productManager = new ProductManager()

const userRoutes = Router()
// GET http://localhost:port/api/users/oa
userRoutes.get("/:pid", async (req, res) => {
    const { pid } = req.params
    const userId = await productManager.getProductById(pid)
    res.send(userId)
})

userRoutes.post("/query", async (req, res)=>{
    const {title,descripcion,price,thumbnail,stock} = req.query
    const newUser = await productManager.addProduct(title, descripcion, price, thumbnail, stock)
    res.send(
        newUser
    )
})

userRoutes.delete("/query", async (req, res)=>{
    const { id } = req.query
    // const { pid } = req.params
    //Number(pid)
    const deletedUser = await productManager.deleteProducts(id)
    res.send(
        deletedUser.then(val => console.log(val))
=======
import ProductManager from "./../productManager.js";

const productManager = new ProductManager()

const productRoutes = Router()
// GET http://localhost:port/api/products/oa
productRoutes.get("/:pid", async (req, res) => {
    const { pid } = req.params
    const productId = await productManager.getProductById(pid)
    res.send(productId)
})

productRoutes.post("/query", async (req, res)=>{
    const {title,descripcion,price,thumbnail,stock} = req.query
    const newProduct = await productManager.addProduct(title, descripcion, price, thumbnail, stock)
    res.send(
        newProduct
    )
})

productRoutes.delete("/query", async (req, res)=>{
    const { id } = req.query
    // const { pid } = req.params
    //Number(pid)
    const deletedProduct = await productManager.deleteProducts(id)
    return res.send(
        deletedProduct.then(val => console.log(val))
>>>>>>> d5af1c6 (preEntregaProyecto1)
    )
})



<<<<<<< HEAD
export default userRoutes 
=======

export default productRoutes 
>>>>>>> d5af1c6 (preEntregaProyecto1)
