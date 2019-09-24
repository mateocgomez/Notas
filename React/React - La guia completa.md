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


## Creat react app

Evita configurar webpack y babel
1. Tener instalado node.js
2. En el github esta el creat react app https://github.com/facebook/create-react-app

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

## Componentes en REACT
- Permite separar el codigo y los elementos de cada uno
- Son como funciones en js
- Se pasan datos mediante props
- Los datos fluyen de padre a hijo *usualmente*
 
 #### Tipos de componentes

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

### Mas comunes
1. Componentdodmount -> el documento esta listo , es para llamado de api's

2. Componentwillmount -> Antes de que se cargue

3. Componentdidupdate -> Algo cambio en el componente

4. componentwillunmount -> carga antes de haberse cargado, casi nunca se utilizada

5. Mediante set state se puede hacer el llamado de los this.setState

## Compartir codigo amigablemente mediante:
- https://carbon.now.sh/
- https://gist.github.com/

## Extras para VSCode
- Bracket pair colorizer
- reactjs code snippets
- generate-react-component
- prettier - code formatter

## Extras para Chrome
- Instalar react developer tools

