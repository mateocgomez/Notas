# Sagas

Es un tipo de funcion llamadas generadores.
Sagas reciben un action.
Generators: son funciones que pueden llamarse inmediatamente y esperar que termine la funcion.

importando de redux-saga/effects podemos traer las palabras reservadas como put.

1. Put es como si estuvieramos usando el dispatch
2. Yield se va ejecutar esa porcion de codigo y esperar que termine de forma sincronica.
3. Delay de saga  para hacer un timeout
4. takeevery para poder correr todas las sagas en el archivo que usemos, recibe la action y la saga que queremos correr.
```js 
// Generator function
function* logout(action) {

}
```