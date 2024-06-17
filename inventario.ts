import { Producto } from './producto';

export class Inventario {
    productos: Array<Producto>;

    constructor() {
        this.productos = [];
    }

    agregarProducto(producto: Producto): void {
      if(producto.precio > 0 ){
        if(producto.cantidad > 0){
          this.productos.push(producto);
        }
        else
          console.log("La cantidad debe ser mayor a 0");
       }
       else
        console.log("El precio debe ser mayor a 0");
    }

    listarProductos(): void {
      this.productos.forEach(producto => {
          producto.imprimirDetalles();
      });
    }

    decrementarCantidad(nombre: string, cantidad: number): boolean {
      const producto = this.productos.find(p => p.nombre === nombre);
      if (producto) {
          if (producto.cantidad >= cantidad) {
              producto.cantidad -= cantidad;
              console.log(`Se han vendido ${cantidad} unidades del producto '${nombre}'.`);
              return true;
          } else {
              console.log(`No hay suficientes unidades disponibles del producto '${nombre}'.`);
              return false;
          }
      }
      console.log(`No se encontró el producto '${nombre}' en el inventario.`);
      return false;
  }

    eliminarProducto(nombre: string): boolean {
      const indice = this.productos.findIndex(producto => producto.nombre === nombre);
      if (indice !== -1) {
          this.productos.splice(indice, 1);
          console.log(`Producto '${nombre}' eliminado del inventario.`);
          return true;
      }
      console.log(`No se encontró el producto '${nombre}' en el inventario.`);
      return false;
    }

    buscarPorNombre(nombre: string): Producto | null {
      const productoEncontrado = this.productos.find(producto => producto.nombre === nombre);
      if (productoEncontrado) {
          return productoEncontrado; // Devuelve el producto encontrado
      }
      console.log(`No se encontró el producto '${nombre}' en el inventario.`);
      return null; // Devuelve null si no se encontró el producto
  }

    buscarPorCategoria(categoria: string): Array<Producto> {
      const resultados: Array<Producto> = this.productos.filter(producto => producto.categoria === categoria);
      return resultados;
    }
}
