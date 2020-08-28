## Store

Contiene el state y solo tiene uno por aplicacion.
Solo existe un store con todo el state de la aplicacion.
El state se modifica por medio de funciones (actions).

## Dispatch

Ejectua el action que actualizara el state.

## Action

Objetos JS, tienen un type y un payload.
Corren codigo asincrono.

Las funciones de action son las que se usan en el componente.

Se exporta una funcion en donde va a tener un return dispatch y la funcion que queramos donde se va agregar el type y el payload

```js
export function crearNuevoProductoAction(producto) {
  return (dispatch) => {
    dispatch(agregarProducto());
    try {
      dispatch(agregarProductoExito(producto));
    } catch (error) {
      dispatch(agregarProductoExito(error));
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
});
```

### Actions in the component

Para versiones de React 16.x+
Pasos para usarla: 1. Se importa el action 2. Se importa de react-redux el useDispatch y el useSelector que son dos hooks

    ```js
    const dispatch = useDispatch();
    // Manda llamar la action de productoAction
    const agregarProducto = () => dispatch(llamammos el action que queremos usar);
    ```
    3. useSelector

### Types

Describen lo que esta pasando en la aplicacion, se usan en el action y en el reducer

Action describiendo cada paso.
Reducer se evalua y se modifica el state de acuerdo a lo que va sucendiendo.

## Subscribe

Similar a un event listener para el state

## Reducers

Funciones , saben que hacer con los actions y el payload.
Corren codigo sincrono.
Cada reducer tiene su initialState como por ejemplo un inital state de productos

```js
const initialState = {
  productos: [],
  error: null,
  loading: false,
};
```

El reducer siempre es una function por lo tanto le tenemos que pasar el state que debe ser igual al initialState y debe tener un action.

```js
export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
```
