class Producto {
    constructor(nombre, precio, cantidad = 1) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
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
        return this.almacen.reduce((total, producto) => total + producto.precio, 0)
    }
    finalizarcompra() {
    }
    detallescompra() {
        console.log("Detalles de compra: ");
        this.almacen.forEach(producto => {
            console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}, cantidad: ${producto.cantidad}`)
        });
        console.log(`Total de la compra: ${this.calculartotal()}`)
    }
}

const tienda = new carrito();
let totalcompra = 0;
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

    const seleccion = prompt(`Productos disponibles:\n${productosLista}\n Ingrese el número del producto que deseas agregar al carrito 
        \n o ingrese 'fin' para finalizar la compra`);
    if (seleccion === "fin") {
        break;
    }
    const seleccionnum = parseInt(seleccion);
    if( !isNaN(seleccionnum) && seleccionnum > 0 && seleccionnum <= productosdisponibles.length){
        const productoseleccionado = productosdisponibles [seleccion - 1];
        tienda.agregarproducto(productoseleccionado);
        totalcompra += productoseleccionado.precio;
        alert(`${productoseleccionado.nombre} ha sido agregado al carrito`);

        const cantidad = parseInt (prompt (`Ingrese la cantidad de ${productoseleccionado.nombre} que desea`))
        productoseleccionado.cantidad = cantidad;
        totalcompra += productoseleccionado.precio * cantidad; 

        const continuar = confirm(`Total actual de su compra es: $${totalcompra}.\n ¿Desea agregar otro producto al carrito?`);
        if(!continuar){
            break;
        }
    } else {
        alert("Seleción no valida. Por favor, seleccione un producto disponible");
    }

}

alert(`Total de su compra es ${totalcompra}`)
tienda.detallescompra();
tienda.finalizarcompra();