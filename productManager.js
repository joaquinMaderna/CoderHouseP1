import  fs  from 'fs/promises'
import fileSystem from "fs"

class Product {
    constructor (title,description,price,thumbnail,stock,id){
        this.title = title
        this.descripcion = description
        this.price = price
        this.thumbnail = thumbnail
        this.stock = stock
        this.id = id
    }
}

class ProductManager {
    constructor () {
        this.path = "./data.json"
        this.dataBase = new Array
        this.id 
    }
    async createDataBase() {
        if (!fileSystem.existsSync(this.path)) {
            fs.writeFile(this.path,JSON.stringify([]),(err) =>{
                console.log("la base de datos se creo");
                if (err) {
                    throw ("Error al crear la base de datos")
                } else (
                    []
                )
            })   
        }
    }
    async addProduct(title,description,price,thumbnail,stock) {
        await this.createDataBase();
        let users = await this.getProducts()
        let newProd
        try {
            if (users.length===0) {
                this.id=1;
                newProd = new Product(title,description,price,thumbnail,stock,this.id)
                this.dataBase.push(newProd)
                fs.writeFile(this.path,JSON.stringify(this.dataBase, null, 2))
            } else {
                this.id = users.length + 1 
                newProd = new Product(title,description,price,thumbnail,stock,this.id)
                users.push(newProd)
                fs.writeFile(this.path,JSON.stringify(users, null, 2),(err) => {
                    if (err) {
                        throw err 
                    }
                })
            }}
            catch (error) {
                throw Error ("No se pudo añadir el producto a la base de datos") 
            }
            return newProd
    }
    async getProducts() {
        await this.createDataBase()
        try {
            if (fileSystem.existsSync(this.path)) {
                let datos = await fs.readFile(this.path,"utf-8")
                let datosParseados = JSON.parse(datos)
            return datosParseados
            }
        } catch (error) {
            throw Error ("No se pudo leer la base de datos") 
        }
        
    }
    async getProductById(code){
        let datos = await this.getProducts()
        datos = datos.filter(function (datos) {return datos.id == code; });
        return datos
    }
    async deleteProducts(code){
        try {
            let datos = await this.getProducts()
            const index = datos.findIndex(objeto => objeto.id === code);
            console.log(index);
            if (index !== -1) {
                let objectDeleted = datos.slice(index, index + 1)[0];
                datos.splice(index, 1);
                datos.push ({ title : "producto eliminado" , id : objectDeleted.id})
                fileSystem.writeFileSync(this.path,JSON.stringify (datos, null, 2))
                return console.log("el producto fue eliminado correctamente");
            }else{
                console.log("el archivo que deseas borrar no existe");
            }
        } catch (error) {
            throw Error("no funciona")
        }
    }
}

let test = new ProductManager;
//let test1 = new ProductManager;
//await test.addProduct("remera", "descripcion", 100, "img",10);
//await test1.addProduct("remera", "descripcion", 101, "img",10);
//test.getProductById(2).then(val => console.log(val))
//test.getProducts().then(val => console.log(val));
//test.deleteProducts(5).then(val => console.log(val));

export default ProductManager