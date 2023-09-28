const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}];
let suma = 0;
for(let i = 0; i < products.length; i++){
    suma += products[i].sellCount;
    
}
console.log(suma / products.length);

/*Explicación paso a paso:

Se define un arreglo llamado "products", que contiene objetos que representan diferentes productos. Cada objeto tiene dos propiedades: "name" (nombre del producto) y "sellCount" (cantidad de ventas del producto).

Se declara una variable llamada "suma" y se inicializa en 0. Esta variable se utilizará para calcular la suma total de ventas de todos los productos.

Se inicia un bucle "for" que recorre el arreglo "products". La variable de control "i" se utiliza para acceder a cada elemento del arreglo en cada iteración.

Dentro del bucle, se selecciona un elemento del arreglo "products" en la posición actual "i" y se accede a la propiedad "sellCount" para obtener la cantidad de ventas de ese producto. Esta cantidad se suma al valor actual de la variable "suma".

El bucle recorre todos los productos, acumulando la suma total de ventas en la variable "suma".

Después de que el bucle haya terminado de recorrer todos los productos, se calcula el promedio de ventas dividiendo la suma total de ventas (almacenada en "suma") entre la cantidad de productos en el arreglo "products".

Finalmente, se imprime en la consola el resultado del promedio de ventas.

El resultado final impreso en la consola será el promedio de ventas de los productos en el arreglo "products". */