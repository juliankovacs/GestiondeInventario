import { Producto } from './producto';

export class Inventario {
    productos: Array<Producto>;

    constructor() {
        this.productos = [];
    }

    agregarProducto(producto: Producto): void {
        if (producto.precio <= 0) {
            console.log("El precio debe ser mayor a 0");
            return;
        }

        if (producto.cantidad <= 0) {
            console.log("La cantidad debe ser mayor a 0");
            return;
        }

        this.productos.push(producto);
    }

    listarProductos(): void {
        this.productos.forEach(producto => {
            producto.imprimirDetalles();
        });
    }

    decrementarCantidad(nombre: string, cantidad: number): boolean {
        const producto = this.productos.find(p => p.nombre === nombre);

        if (!producto) {
            console.log(`No se encontró el producto '${nombre}' en el inventario.`);
            return false;
        }

        if (producto.cantidad < cantidad) {
            console.log(`No hay suficientes unidades disponibles del producto '${nombre}'.`);
            return false;
        }

        producto.cantidad -= cantidad;
        console.log(`Se han vendido ${cantidad} unidades del producto '${nombre}'.`);
        return true;
    }

    eliminarProducto(nombre: string): boolean {
        const indice = this.productos.findIndex(producto => producto.nombre === nombre);
        if (indice === -1) {
            console.log(`No se encontró el producto '${nombre}' en el inventario.`);
            return false;
        }

        this.productos.splice(indice, 1);
        console.log(`Producto '${nombre}' eliminado del inventario.`);
        return true;
    }

    buscarPorNombre(nombre: string): Producto | null {
        const productoEncontrado = this.productos.find(producto => producto.nombre === nombre);
        if (!productoEncontrado) {
            console.log(`No se encontró el producto '${nombre}' en el inventario.`);
            return null;
        }

        return productoEncontrado; // Devuelve el producto encontrado
    }

    buscarPorCategoria(categoria: string): Array<Producto> {
        return this.productos.filter(producto => producto.categoria === categoria);
    }
}
