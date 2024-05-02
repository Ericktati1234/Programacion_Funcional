
//Creamos nuestro DAO (Data Access Object)
const fs = require('fs');

//IMPORTANTE, es necesarios saber que el archivo que queramos IMPORTAR es necesario que el manejo de sus datos los haga por filas (para cada dato)
// y por comas (para cada atributo)

// Vamos a hacer una clase la cual podramos importar en nuestros ejercicios

class ProductoDAO {
    constructor() {
        this.productos = [];
    }

    cargarProductos(rutaArchivo) {
        
        //De la misma forma que en ejercicios pasados, vamos a leer nuestro archivo y vamos a dividirlo por filas
        const data = fs.readFileSync(rutaArchivo, 'utf8');
        
        const lineas = data.split('\n');
        
        //Vamos a ir añadiendo a nuestro arreglo que creamos arriba nuestros productos 
        for (let i = 0; i < lineas.length; i++) {
            const linea = lineas[i];
        
            //Realizamos la division de nuestra fila basado en las comas
            const [clave, descripcion, precio, clasificacion, cantidadExistencia, existenciaMinima, existenciaMaxima] = linea.split(',');
            
            //Añadiremos a nuestro arreglo con ayuda del comando push cada uno de nuestros productos
            this.productos.push({
                clave: clave,
                descripcion: descripcion,
                precio: parseFloat(precio),
                clasificacion: clasificacion,
                cantidadExistencia: parseInt(cantidadExistencia),
                existenciaMinima: parseInt(existenciaMinima),
                existenciaMaxima: parseInt(existenciaMaxima),
            });
        }
        
    }

     
     existenciaMayorA20() {
        //Funcion que nos permite filtrar los productos en donde su atributo cantidadExistencia sea mayor que 20
        return this.productos.filter(producto => producto.cantidadExistencia > 20);
    }

    
    existenciaMenorA15() {
        //Funcion que nos permite filtrar los productos en donde su atributo cantidadExistencia sea menor que 15
        return this.productos.filter(producto => producto.cantidadExistencia < 15);
    }

    clasificacionYPrecioMayorA15(clasificacion) {
        //Estas funcion pide un parametro el cual va a comparar y buscara aquellos productos que en su atributo .clasificacion
        // sean igual a la clasificacion que dimos entrada, ademas tambien filtrara aquellos productos en donde su atributo precio 
        // sea mayor a 15.50
        return this.productos.filter(producto => producto.clasificacion == clasificacion && producto.precio > 15.50);
    }

    precioEntre20Y45() {
        //Esta funcion mas sencilla busca los productos donde el precio ente entre 20.30 y 45, filtrando el arreglo de productos
        return this.productos.filter(producto => producto.precio > 20.30 && producto.precio < 45.00);
    }

    //Esta funcion es importante igualarlo a un arreglo el cual podamos imprimir libremente, ya que se enfoca en las clasificaciones
    // no en los productos
    contarProductosPorClasificacion() {
        const conteoPorClasificacion = {};
        this.productos.forEach(producto => {
            if (!conteoPorClasificacion[producto.clasificacion]) {
                conteoPorClasificacion[producto.clasificacion] = 0;
            }
            conteoPorClasificacion[producto.clasificacion]++;
        });
        return conteoPorClasificacion;
    }
}

module.exports = ProductoDAO;

