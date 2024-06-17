interface producto {
    nombre: string;
    categoria: string;
    precio: number;
    cantidad: number;
  }

export class Producto{
    nombre: string;
    categoria: string;
    precio: number;
    cantidad: number;

    constructor(nombre: string, categoria: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    // Método para imprimir todos los atributos del producto
    imprimirDetalles(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Categoría: ${this.categoria}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Cantidad: ${this.cantidad}`);
        console.log('---'); 
    }
}

//const p: Producto = new producto("Mouse", "Accesorios", 20, 20)
    