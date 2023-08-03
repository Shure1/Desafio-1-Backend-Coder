class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        const prod = this.products.find(prod => prod.code === product.code)

        if (prod) {
            console.log("Producto ya encontrado")
            return
        } else {
            this.products.push(product)
        }
    }

    getProducts() {
        console.log(this.products)
    }

    getProductById(id) {
        const prod = this.products.find(prod => prod.id === id)

        if (prod) {
            console.log(prod)
        } else {
            console.log("Producto no encontrado")
        }
    }

    uptadeProduct(id,campo,actualizacion){

        const producto = this.products.find(producto => producto.id === id)
        producto[campo] = actualizacion


    }

    /* Manera de actualizar mas de un campo a la vez (no se si esta bien o si se puede hacer de otra forma)
    uptadeProduct(id,actualizaciones){

        const producto = this.products.find(producto => producto.id === id)
        Object.assign(producto, actualizaciones);


    } */

    deleteProduct(id){
        const verificar = this.products.find(producto => producto.id === id)

        !verificar || (this.products = this.products.filter(productos => productos.id !== id))

        if(!verificar){
            console.log("error de id")
        }
        
       
    }


}

class Product {
    constructor(title, description, price, code, stock, thumbnail) {
        this.title = title
        this.description = description
        this.price = price
        this.code = code
        this.stock = stock
        this.thumbnail = thumbnail
        this.id = Product.incrementarId() //Mi Id es el resultado de lo que devuelva este metodo
    }
    //Defino un metodo de CLASE
    static incrementarId() {
        //Si existe esta propiedad, la aumento en 1 o la creo
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const producto1 = new Product("Arroz", "Rico", 300, "AA123LE", 20, [])
const producto2 = new Product("Lentejas", "Ricas", 300, "LL123LE", 20, [])
const producto3 = new Product("Garbanzos", "Rico", 300, "GG123LE", 20, [])

const productManager = new ProductManager()

productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3)

/* productManager.getProducts() */

productManager.getProductById(2)

/* actualizamos el campo title de producto de id = 2 */
productManager.uptadeProduct(2,'title','cereal')

productManager.getProductById(2)

productManager.deleteProduct(4)