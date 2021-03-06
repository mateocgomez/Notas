# Vue.js

<h1>Directivas Vue.js</h1>

    1. v-bind : es un enlace de datos, hacia un atributo que este en data, se implementa con :src los dos puntos es la abreviatura
    2. v-model : permite una connexion directa entre un dato  , le podemos poner a los v-model que son de tipo number ej: v-model.number, enlace de datos doble es decir recibe la informacion que se envia desde cualquier input o cualquier otro campo
    3. v-text: sirve para mostrar texto dentro de cualquier elemento del html, y este almacenado en data, es lo mismo que hacer una interpolación {{es recomendado de esta forma}}
    4. v-html: muestra cadenas de html que esten en una variable y se puede mostrar en la vista
    5. v-if: elimina el elemento del DOM, es una condición
    5. v-else: sirve con el condicional de v-if
    6. Etiqueta <template></template>: es una etiqueta de HTML5 y sirve para no ser mostrada en el DOM!, y de esta forma podemos agrupar elementos con v-if sin necesidad de implementar un div
    7. v-else-if: como su nombre lo dice, anidada las condiciones para poder usar distintos condicionales
    8. v-show: No desaparece como el v-if del dom todo el elemento, simplemente lo esconde añadiendole css con display:none
    9. v-for: se le asigna una variable y se recorre el arreglo que vayamos a recorrer ejemplo v-for="pais in paises", de esta forma se recorre el arreglo, se puede entrar al objeto mediante pais.nombre y de esta forma se entra al atributo del objeto
    10. Indice del v-for: dentro del v-for se realiza de la siguiente forma v-for"(pais, index) in paises" y lo interpolamos con {{indice + 1}} - {{pais}} y podemos ver las posiciones en las que se encuentran
    11. template con v-for: mediante template evitamos que se creen otras etiquetas en el DOM.
    12. v-for con objetos: mediante v-for="(valor, llave) in empleado" mediante la opcion de llave podemos mostrar los atributos y los valores que tiene el objeto.

Eventos Vue.js

1. v-on: se implementa mediante @click es un ejemplo y llama una funcion en metodos, existen distintos metodos que se pueden ver en la documentación
2. Pasar argumentos: mediante los eventos podemos pasar argumentos , como por ejemplo: @click="alert('mensaje de prueba') y la funcion en los metodos seria (mensaje) => {alert(mensaje)} de esta forma pasamos argumentos o parametros a nuestros metodos y funciones.
3. Objeto event: cualquier funcion que se este creando tiene por defecto un parametro que se llama evento, el cual es enviado por vue.js y lo podemos usar
4. se puede usar mas de un evento en cualquier div.

Estructura de vue

new Vue({
el: '#app', este hace referencia en donde se va a trabajar con vue.js
data: {
este hace referencia a las variables con las que se va a trabajar
},
methods: {
este hace referentcia a los metodos los cuales se va a trabajar
},
})

<h1>Componentes Vue.js</h1>

Crear componentes:

1. Crear el archivo con el template y el script

Vue.component('nombre del componente',{
template: 'aca es donde va el HTML',
data: function(){
//retorna esta función los objetos
return {
titulo: 'aca estan los datos'
}
no usamos data como objeto si no como una función
}
})

2. Importar el componente en app.vue
3. Agregarlo en el template ej <cabecera></cabecera>

v-model -> permite una connexion directa entre un dato , le podemos poner a los v-model que son de tipo number ej: v-model.number

Key Modifiers -> @keyup.enter -> sirve para darle interacción con cualquier

Computed -> son un arreglo y sirve para las operaciones

:class="['p-3','text-white']" estos son clases propias de vue.js

Cuando traemos una imagen y la queremos llamar con src le podemos poner @/assets/logo.png el @ indica que estamos llamando desde la carpeta src

- Recordemos usar store en donde se almacena toda la informacion
- con mapactions podemos llamar la funcion y poderla usar en la vista

<h2>Instalación de CLI</h2>

npm install --global vue-cli
vue use 'nombre de la plantilla' 'nombre del proyecto'

### Estructura de Vue.js

1. Babel es el transpilador o a traudcir codigo de la ultima versión de javascript a una versión mas antigua que pueden leer todos los navegadores

2. Index.html es el punto de encuentro del html

UTILIZAR ROUTER LINK EN VUE.JS

- Para usar router debemos seguir los siguientes pasos, para crear adecuadamente nuestra vista y enrulara con lazy routes:

1. En router.js debemos crear la siguiente estructura
   {
   path: '/servicios',
   name: 'servicios',
   component: () => import(/_ webpackChunkName: "about" _/ './views/ nombre.vue
   }
2. Crear nuestra vista en views.
3. En App.vue debemos colocar la etiqueta <router-view/> y si tenemos algún nabab o algo parecido debemos colocar <router-link to=“path”></router-link>

### Componentes

En export default llamamos los componentes que se esten usando y de esta forma ya se puede usar el componente, ademas de esto toca importarlo

```js
import titulo from "./components/Titulo.vue";

export default {
  components: {
    titulo
  }
};
```

Mediante props en el componente en el cual se le va enviar la información podemos pasar la información.
Props puede ser un arreglo o un objeto y dentro de ese objeto puede tener

### Pasar información al componente padre

Se pasan mediante eventos como por ejemplo this.\$emit('se pasa lo que queremos enviar', 'algun parametro')
y despues tenemos que ir al componente padre que escuche el evento que estamos pasando

### Bus de datos

se va al main.js

```js
export var bus = new Vue();
```

Se importa en el componente que queremos usar y llamamos al bus con un evento también

```js
bus.$emit('nombre del evento', parametro que pasamos)
```

para escuchar el evento

```js
bus.$on('nombre del contador', funcion que se hace)


```

### Compartir metodos entre componentes

```js
export var bus = new Vue({
  methods:{
    nombredelMetodo(){
      this.$emit('como queremos que se llame el metodo a invocar', parametro que le pasamos);
    }
  }
})
```

### Redirigir a otra pagina

Para redirigir a otra pagina se implementa mediante el codigo

```js
this.$router.push({ name: "LOGIN" });
```

### Slots

Sirven para transferir información y no tener que duplicar o crear mas componentes cuando ya existen.

Con la etiqueta slot puedo pasar información <slot></slot> mediante esta etiqueta lo que haces es pasar todo el bloque al componente

#### ¿Como usar el componente y usar una sola sección sin usar todo el bloque?

Con la etiqueta slot pongo las secciónes que necesito para poder diferenciar las secciones que necesitamos, mediante la siguiente forma:

```js
Esto es para el componente principal nombrando el slot que quiero apuntar
<slot="titulo">Hola Mundo!</slot>
Esto es para el componente que lo recibe y muestra la información de esos elementos
<slot name="titulo"></slot>
```

#### ¿Como puedo cambiar los estilos de los slots?

Los slots se modifican sus estilos en el componente el cual recibe la información.

- Slots por defecto: son aquellos slot que se ven como slots name

#### Componentes dinamicos

mediante un enlace de datos de la siguiente forma

```js
<keep-alive>
<component :is = "componenteSeleccionado"></component>
</keep-alive>
El componente debe tener ser igual al slot que estamos llamando
```

-> Para evitar la destrucción del componente cuando intercambiemos entre distintos componentes dinamicos, podemos implementar la siguiente ETIQUETA keep-alive, mediante esto ya no llamaremos mas el ciclo de vida destoyed, si usamos keep alive el ciclo de vi se caera, si queremos seguir usando destroyed podemos usar la alternativa de activated(){} y deactivated(){}
