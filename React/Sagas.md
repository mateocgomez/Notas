# Sagas

Es un tipo de funcion llamadas generadores.
Sagas reciben un action.
Generators: son funciones que pueden llamarse inmediatamente y esperar que termine la funcion.

importando de redux-saga/effects podemos traer las palabras reservadas como put.

1. Put es como si estuvieramos usando el dispatch
2. Yield se va ejecutar esa porcion de codigo y esperar que termine de forma sincronica.
3. Delay de saga  para hacer un timeout
4. takeevery para poder correr todas las sagas en el archivo que usemos, recibe la action y la saga que queremos correr, esto sirve para que corra en un while y este constantemente en un loop y revisando que saque lo que necesitamos
5. call mediante call podemos pasar un arraytodos los elementos que necesitamos por ejemplo un localstorage en donde necesitamos remove item, mediante call funciona como un async await.
6. all se pasa un array y se pueden llamar todos los action que vayamos a querer llamar, cuando todas las promesas estan realizadas termina de resto no
7. Fork crea procesos hijo tenemos un main y crea fork para los procesos por ejemplo fork1 puede traer los usuarios, fork2 puede crear nuevos usuarios, fork3 puede eliminar los usuarios, si algun hijo tinee algun error los otros no se van a parar.
```js 
// Generator function
function* logout(action) {

}
```

```js 
    yield call([localStorage, "removeItem"], "token");
    yield call([localStorage, "removeItem"], "expirationDate");
    yield call([localStorage, "removeItem"], "userId");
```