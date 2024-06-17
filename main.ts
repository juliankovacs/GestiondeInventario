import { Producto } from './producto';
import { Inventario} from './inventario'

function main() {
    const i = new Inventario();
    const producto1 = new Producto("Mouse", "Accesorios", 4000, 30);
    const producto2 = new Producto("Laptop", "Electronica", 300000, 5);

    i.agregarProducto(producto1);
    i.agregarProducto(producto2);

    console.log("Lista de productos en el inventario:");
    console.log(i.listarProductos());

    console.log("--------------------------------Realizar una venta----------------------------------------------");
    const nombreProductoAVender = "Mouse";
    const cantidadAVender = 3;
    const ventaExitosa = i.decrementarCantidad(nombreProductoAVender, cantidadAVender);

    if (ventaExitosa) {
        console.log(`Venta de ${cantidadAVender} unidades del producto '${nombreProductoAVender}' realizada correctamente.`);
    } else {
        console.log(`No se pudo realizar la venta del producto '${nombreProductoAVender}'.`);
    }

    console.log("--------------------------------Buscar un producto por nombre------------------------------");
    const nombreProductoABuscar = "Mouse";
    const productoEncontrado = i.buscarPorNombre(nombreProductoABuscar);

    if (productoEncontrado) {
        console.log(`Detalles del producto '${nombreProductoABuscar}':`);
        console.log(`Nombre: ${productoEncontrado.nombre}`);
        console.log(`Categoría: ${productoEncontrado.categoria}`);
        console.log(`Precio: ${productoEncontrado.precio}`);
        console.log(`Cantidad: ${productoEncontrado.cantidad}`);
    } else {
        console.log(`No se encontró el producto '${nombreProductoABuscar}' en el inventario.`);
    }


    console.log("---------------------------Buscar producto por categoria----------------------------------");
    const categoriaBuscada = "Electronica";
        console.log(`Productos en la categoría '${categoriaBuscada}':`);
        const productosEnCategoria = i.buscarPorCategoria(categoriaBuscada);
        productosEnCategoria.forEach(producto => {
            producto.imprimirDetalles();
        });

    console.log("--------------------------Eliminar un producto del inventario-----------------------------");
    const productoAEliminar = "Mouse";
    i.eliminarProducto(productoAEliminar);
    console.log('---------------------------------------');
    console.log("Lista de productos después de eliminar:");
    i.listarProductos();  

}

main();