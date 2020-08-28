# Sagas

Es un tipo de funcion llamadas generadores.
Sagas reciben un action.
Generators: son funciones que pueden llamarse inmediatamente y esperar que termine la funcion.

importando de redux-saga/effects podemos traer las palabras reservadas como put.

1. Put es como si estuvieramos usando el dispatch

```js 
function* logout(action) {

}
```