const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
let counter = 0;
for(let i = 0; i < foodSchedule.length; i++){
    let arrayresultante = foodSchedule[i];
    if(!arrayresultante.isVegan){
        arrayresultante.name = fruits[counter];
        counter++;
  }
  console.log(foodSchedule);
}
/*Explicación paso a paso:

Se definen dos arreglos: "fruits", que contiene nombres de frutas, y "foodSchedule", que contiene objetos con información sobre comidas.

Se declara una variable llamada "counter" y se inicializa en 0. Esta variable se utilizará para llevar un seguimiento de qué fruta se asigna a cada comida no vegana.

Se inicia un bucle "for" que recorre el arreglo "foodSchedule" utilizando una variable de control "i" que va desde 0 hasta la longitud del arreglo.

En cada iteración del bucle, se selecciona un elemento del arreglo "foodSchedule" en la posición actual "i" y se almacena en la variable "arrayresultante".

Se verifica si el valor de "isVegan" en el objeto actual (representando si la comida es vegana o no) es falso (no es vegano).

Si la comida no es vegana, se asigna el nombre de la fruta correspondiente a la propiedad "name" del objeto actual en "foodSchedule". La fruta se selecciona utilizando el valor de "counter" como índice en el arreglo "fruits".

Se incrementa el valor de "counter" para que en la próxima iteración se seleccione la siguiente fruta en la lista.

Se imprime en la consola el arreglo "foodSchedule" actualizado después de cada iteración.

El resultado final es que los nombres de las frutas se asignan a las comidas no veganas en el arreglo "foodSchedule", y el arreglo "foodSchedule" se imprime en la consola después de cada asignación. */