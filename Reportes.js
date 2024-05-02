

// Necesitamos importar nuestro DAO hecho con anterioridad
const ProductoDAO = require('./ProductoDAO');

// Nuestro DAO nos permite extraer datos de un archivo, en este caso productos.csv
const productoDAO = new ProductoDAO();
productoDAO.cargarProductos('productos.csv'); 

// Nuestro DAO posee varios procedimientos, entre ellos buscar productos con existencia mayor a 20 y otro para buscar los productos
// con existencia menor a 15
console.log("Número de productos con existencia mayor a 20:", productoDAO.existenciaMayorA20());
console.log("Número de productos con existencia menor a 15:", productoDAO.existenciaMenorA15());

// Necesitamos definir una categoría para poder utilizar el siguiente procedimiento
const clasificacion = 'Proteína';

// Este procedimiento necesita que le mandemos una categoría para hacer una búsqueda de productos
console.log("Productos de clasificación"+clasificacion+" y precio mayor a 15.50:", productoDAO.clasificacionYPrecioMayorA15(clasificacion));

// Las siguientes 2 funciones no requieren parámetros adicionales, solo hacen uso de los productos del DAO
console.log('Productos con precio entre 20.30 y 45.00:', productoDAO.precioEntre20Y45());

console.log('Número de productos agrupados por clasificación:', productoDAO.contarProductosPorClasificacion());

