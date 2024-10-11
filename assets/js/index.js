class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class carrito {
    constructor() {
        this.almacen = []
    }
    agregarproducto(producto) {
        this.almacen.push(producto);
    }
    calculartotal() {
        return this.carrito.reduce((total, producto) => total + producto.precio, 0)
    }
    finalizarcompra() {
    }
    detallescompra() {
        console.log("Detalles de compra: ");
        this.almacen.forEach(producto => {
            console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`)
        });
        console.log(`Total de la compra: ${this.calculartotal()}`)
    }
}

const tienda = new carrito();
let productosdisponibles = [
    new Producto("Leche", 1000),
    new Producto("Pan de molde", 2000),
    new Producto("Queso", 1200),
    new Producto("Mermelada", 890),
    new Producto("azucar", 1300)
];

while (true) {
    let productosLista = "";
    productosdisponibles.forEach((producto, i) => {
        productosLista += `${i + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });

    const seleccion = prompt(`Productos disponibles:\n${productosLista}\n o ingrese 'fin' para finalizar la compra` );
    if (seleccion === "fin") {
        break;
    }

}