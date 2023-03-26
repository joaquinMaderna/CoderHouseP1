import { Router } from "express"
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
    )
})



export default userRoutes 
