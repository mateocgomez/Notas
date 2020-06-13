# REACT 
- Es una libreria js para crear interfaces de usuario
- Compatibilidad gracias a webpack y a babel
Maneja componentes, separando en distintas partes muy parecido a lo de Vue.js

Su ecosistema es el siguiente :
- ReactJS: Aprende el core.
- Redux: Manejar el estado global de la aplicación
- React Router: Navegar sin recargar el browser
- React Native: Interfaces de aplicaciones mobiles
- Next.js: framework en el servidor

## Estructura de un proyecto react 🚀 

1. App.js van los componentes del proyecto y parte de la logica del mismo
2. Index.js importa la libreria react y reactdom la cual son las que renderizan en la web
3. serviceWorker.js sirve para que la app sirva sin internet con algunas limitaciones.


## Componentes 📁 
1. Debe llamarse con la primera letra en mayuscula
2. No tener espacios
3. Importar react
4. El componente es una función
5. Todo lo que tenga return es lo que se muestra en pantalla
6. Antes del return es código js.
7. Se exporta al App
8. Terminan en .jsx para que sean archivos react o pueden ser .js
9. Al final se debe exportar la función o el componente.
10. Usar funciones flecha

## Creat react app

Evita configurar webpack y babel
1. Tener instalado node.js
2. En el github esta el creat react app https://github.com/facebook/create-react-app


## Snippets React
- imr snippet automatico para importar la libreria de react
- sfc snippet para crear la función automaticamente 🌚 


## Fragment
1. Importando esta libreria permite usar fragment como div padre y no lo va a generar en el DOM, de esta forma no se va a generar div que no se necesitan.
## Iniciar un proyecto

1. create-react-app 'nombre del proyecto'
2. Para lanzar el proyecto, mediante npm start

## Componentes del proyecto

- public: archivos estaticos
- src es donde estan todos los componentes

## Caracteristicas REACT
- Siempre debe tener un return.
- En la App van todos los componentes
- El core esta en App.js
- Se debe tener un div padre, pero se puede emplear fragment de react y con eso se evita crear html extra
- Debe tener las clases como className 

## Componentes en REACT
- Permite separar el codigo y los elementos de cada uno
- Son como funciones en js
- Se pasan datos mediante props
- Los datos fluyen de padre a hijo *usualmente*
 
 #### Tipos de componentes
Ya no se usa y ahora todo se usa REACT HOOKS
1. Class component
Este componente se basa en una POC, usando clases

- Es obligatorio en cualquier class component el render y la exportación del mismo componente

- State siempre debe ser un objeto
```js 
class App extends Component {
    render() {
        return(
            <p>Hola Mundo</p>
        )
    }
}

```

2. Functional component
Es un poco mas recomendado usar este functional component
Componente funcional 
```js
const App = props => (
    <p>Hola Mundo</p>
);
```


## Props

Es la forma de pasar datos de un componente a otro, forma en la que se comunican, se pasan del padre al hijo.
Se pueden pasear booleanos, strings , funciones.
Son un objeto y llegan a la funcion como props y de se pueden obtener del objeto
Se le aplica destruction y no se necesita llamar props como objeto
```js
const Header = ({titulo}) => {
    return ( 
        <header>
            <h1>{titulo}</h1>
        </header>
    );
}
```

## Ciclo de de vida en React.JS

- Son metodos o funciones que se ejecutan automaticamente en el componente.
- Solo existen en Class Components


## Formas de escribir codigo React

1. Clases y props
2. Context API
3. React hooks -> permite hacer mucho con poco codigo
4. Redux 

Todas se pueden mezclar, cualquier forma de escribir react

### Mas comunes -> Cambian ahora con los hooks useEffect
1. Componentdodmount -> el documento esta listo , es para llamado de api's

2. Componentwillmount -> Antes de que se cargue

3. Componentdidupdate -> Algo cambio en el componente

4. componentwillunmount -> carga antes de haberse cargado, casi nunca se utilizada

5. Mediante set state se puede hacer el llamado de los this.setState

6. Para setear con el this.setState en cualquier objeto se usa el e.target.name -> valor del objeto y con el e.target.value -> el valor que tenga el input

7. De esta forma se setea el state 
```js
...this.state.cita,
```


## Hooks 

useState -> retorna dos posiciones de un arreglo , el estado actual y el que cambia el state
useEffect -> metodos del ciclo de vida

## Eventos

Maneja los eventos como vue.js con onClick e.t.c


## State

Todos los datos que el usuario va almacenando puede ser un formulario o un carrito de compras 

## Información importante
Para guardar información se debe almacenar en el localstorage
## Compartir codigo amigablemente mediante:
- https://carbon.now.sh/
- https://gist.github.com/

## Extras para VSCode
- Bracket pair colorizer
- reactjs code snippets ES7 REACT
- generate-react-component
- prettier - code formatter
- Simple React Snippets
- React/Redux/react-router snippets

## Extras para Chrome
- Instalar react developer tools

