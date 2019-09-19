# JAVASCRIPT BASICO

Para borrar un dato con JavaScript se usa SPLICE, se debe tener en cuenta que para borrar algun dato debe recibir un indice y con ese dato poder saber en que posición se va a borrar.

### Metodos
Un metodo es una función dentro de un objeto

### Palabra this
Javascript maneja un objeto window el cual llama a todo lo que esta en el codigo de javascript, mediante la palabra this llamando el objeto window y llamamos al objeto que queremos usar o a la propiedad que queremos usar del objeto.

Tener mucha atención con esta palabra que apunta a nuestra window.

### Palabra new
Mediante esta palabra new lo que hace es crear un nuevo objeto.

### Rotular un bucle en JavaScript

Un bucle se puede rotular sin que tenga alguna palabra reservada y se escribe de la siguiente forma: 

```js
    for_principal:
        for (let i = 1; i <= 5; i++) {

            console.log("i", i);
            for (let j = 1; j <= 5; j++) {
                console.log("j", j);
                continue for_principal;

            }
        }
```
La palabra continue permite continuar un bucle, de esta forma no hace perder alguno de estos.

- Un bucle rotulado nos sirve para hacer alguna accion en especifica ya sea continuar o romber en algun punto en donde este anidado con alguna otra palabra.

### Reflejo y forin

El reflejo es conocido como la propiedad de conocer el objeto y agregarle otros elementos mediante un prototipo por ejemplo

```js
var Persona = function (){
    this.nombre = "mateo";
    this.apellido = "castano";
    this.cargo = "desarrollador de software";
}

var mateo = new Persona();

Persona.prototype.direccion = "Bogota";

for (propiedades in mateo){
    console.log( mateo.hasOwnProperty(propiedades) );
    console.log(this.propiedades);
}

```

- Mediante hasOwnProperty podemos ver las propiedades que pertenecen al objeto.


Mediante esta forma es recomendable recorrer un arreglo
```js
[1,2,3,4,5,6,7,8,9].forEach(function(valor){
    console.log(valor);
})

```