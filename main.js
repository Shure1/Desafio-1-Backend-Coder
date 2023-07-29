const { parse } = require('path');

const readline = require('readline');

        const rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        })

console.log('hola');

class ProductManager{
    constructor(){
        this.products = []
    }

    
    //Metodos
    async addProduct(){
        
        const titulo = await question(rl, "Ingrese el nombre del producto: ");
        const description = await question(rl, "Ingrese descripción del producto: ");
        const price = parseInt(await question(rl, "Ingrese el precio del producto: "));
        const stock = parseInt(await question(rl, "Ingrese el stock del producto: "));
    
        const thumbnail= "undefined";
        
        /* verificamos si hay campos vacios */
        if([titulo,description,price,thumbnail,stock].includes('')){
            return
        }

        const verificar = true
        while(verificar){
            let id = 0
            const code = parseInt(await question(rl, "Ingrese el código del producto: "));
            const comprobarProducto = this.products.find( producto => {return producto.code === code })

            /* optimizar con otro ternario pendiente */
            !comprobarProducto ? 
            console.log(`el producto ${nombre} no puede ser agregado debido a que estaria suplicado`) : 
            console.log(`el producto ${nombre} es agregado satisfavtoriamente`)
            id =+1 ;
            verificar = false;
            
            rl.close()
        };

        


        const producto = new Producto(titulo,description,price,thumbnail,code,stock,id);

        this.products=[...this.products,producto];
    }

    getProducts(){
        const mostrar = this.products.forEach(producto => { 
            console.log(JSON.stringify(producto, null, 2))})

        return mostrar;
    }

    async getProductbyID(){
       /*  const readline = require('readline');

        const rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        }) */
        const idRequest = await question('digite el id del producto que desea encontrar: ')
        const idRequestInt = parseInt(idRequest);
        const productosRequest = this.products.filter(producto => {return producto.id === idRequestInt})
        

        

        console.log(JSON.stringify(productosRequest, null, 2));
        return productosRequest

    }


}

class Producto{
    constructor(titulo,description,price,thumbnail,code,stock,id){
        this.titulo=titulo;
        this.description=description;
        this.price=price;
        this.thumbnail=thumbnail;
        this.code=code;
        this.stock=stock;
        this.id=id;
    }
    
}

function question(prompt) {
    return new Promise((resolve) => {
      rl.question(prompt, resolve);
    });
  }

/* MAIN  */
const manager = new ProductManager()
const menu = {
    '1': () => manager.addProduct(),
    '2': () => manager.getProducts(),
    '3': () => manager.getProductbyID()
    
}

const mostrarMenu = () => {
    console.log('1. Agregar producto')
    console.log('2. Mostrar todos los productos');
    console.log('3. Mostrar producto por ID');
    console.log('0. Salir');
    rl.question('Ingrese el numero de opcion: ' , (opcion) => {
        opcion === '0' ? rl.close() : menu[opcion] ? (menu[opcion](), mostrarMenu()) : (console.log('opcion invalida ingres una opcion valida por favor '), mostrarMenu())
    });
}

mostrarMenu();