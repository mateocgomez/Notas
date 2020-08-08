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
for_principal: for (let i = 1; i <= 5; i++) {
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
var Persona = function () {
  this.nombre = "mateo";
  this.apellido = "castano";
  this.cargo = "desarrollador de software";
};

var mateo = new Persona();

Persona.prototype.direccion = "Bogota";

for (propiedades in mateo) {
  console.log(mateo.hasOwnProperty(propiedades));
  console.log(this.propiedades);
}
```

- Mediante hasOwnProperty podemos ver las propiedades que pertenecen al objeto.

Mediante esta forma es recomendable recorrer un arreglo

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function (valor) {
  console.log(valor);
});
```

### Template Strings

Para ecmascript `${nombre variable}` mediante este simbolo estamos indicando que podemos escribir codigo y concatenar con template strings

### Funciones flechas

Si recibe un solo parametro se le pueden quitar los parentisis

```js
let viajando = (destino) => {
  return `Viajando a la ciudad de: ${destino}`;
};

let viaje = viajando("Paris");

console.log(viaje);
```

### Objeto constructor

Son aquellos objetos que tienen el this.nombre o this.apellido , implementando mediante los this.

### Prototipo
JS ES UN LENGUAJE BASADO EN PROTOTIPOS, TODO OBJETO TIENE UN PROTOTIPO
Para agregar un prototype se realiza de la siguiente forma, prototipo permite atar funciones a un objeto

```js
Tarea.prototype.mostrarinformacion = function () {};
```

### Object destructuring

Es extraer valores de un objeto

- la palabra de la variable se crea de acuerdo a lo que vaya de la palabra del objeto

```js
const aprendiendoJS = {
  version: {
    nueva: "ES6",
    anterior: "ES5",
  },
  frameworkrs: ["REACT", "VUEJS", "ANGULAR"],
};
let { anterior } = aprendiendoJS.version;
```

### literal enhancement

Creación de nuevos objetos

```js
const banda = "Muse";
const genero = "Alternative";
const canciones = ["Cydonia", "Workr", "LMFAO"];

//Para unir todas estas variables en un objeto con la nueva forma de ES6
const metallica = { banda, genero, canciones };
console.log(metallica);
```

De esta forma se une todas las variables en un objeto

### ARRAYS 🚀

.push -> ingresa un valor al final del arreglo
.unshift -> ingresa un valor al principio del arreglo

.pop -> remueve el ultimo valor del arreglo
.shift -> remueve el primer valor del arreglo

.indexOf() -> returna la posicion en la que esta el elemto el arreglo, si no esta en el arreglo retorna un -1 ya que no esta en el arreglo

### Validacion para el html en campos de numero

type="tel"
pattern="[0-9]\*"

### Objeto

Los objetos en JS tambien conocidos en otros lenguajes como clases son aquellos blueprint para poder sacar instancias, las instancias son aquellos atributos que se le pueden asignar al objeto.

```js

OBJETO
Persona {
  nombre
  edad
  trabajo
  calcularlaedad()
}

INSTANCIA
var mate {
  mateo,
  26,
  ingeniero,
  calcularlaedad()
}
```

Puedo tener otros objetos y re usar el objeto persona en otro objeto eso se conoce como inheritance

```js
Persona {
  nombre
  edad
  trabajo
  calcularlaedad()
}

atleta {
  olimpico,
  medallasolimpicas
  paseolimpicos()
}

inheritance

atleta {
  olimpico,
  medallasolimpicas
  paseolimpicos()
    nombre
  edad
  trabajo
  calcularlaedad()
}

```

### Datos primitivos y objetos

En js se le considera datos primitivos a los string, number, boolean, undefined y null. Al resto se le conocen como objetos como arrays, objects, functions,date , wrappers for number,string,boolean