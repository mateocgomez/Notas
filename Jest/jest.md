## Enzyme renderizado

1. Shallow Rendering
Renderiza solamente el componente por el cual estamos trabajando, los componentes hijos no los renderiza, esto lo hace para que los componentes trabajen en una sola unidad y sea mas sencillo escribir los test.

2. Full Rendering

Toma el componente, renderiza el html y lo monta en un dom, para poder poder hacer las interacciones que va a tener nuestro componente con el mismo DOM.

3. Static Rendering

Toma el componente y genera un html como un texto no lo monta sobre el dom y genera una api para poder revisar lo que va haciendo el componente.

## MOCKS

Son funciones u objetos que nos permite saber cuantas veces se llamaron y con que argumentos se llamaron.

### Shallow rendering (OnClicks)

- describe: permite como su nombre lo dice va describiendo el proyecto.
- it: es el objeto en donde va ir toda la logica para la prueba del componente.
    1. Revisar las funciones que se vayan a probar cuando es una funcion que tenga algun evento debe invocarse mediante jest.fn(), cuando es un valor fijo se pone sea string, number, boolean etc, cuando es un objeto se completa de acuerdo a lo que se va llenando.
- shallow: genera el renderizado de la app, tomamos el componente y le pasamos lo que el componente vaya a necesitar para poderlo renderizar.

- .find : se busca en que se quiere simular la prueba sea un boton, sea un input etc
- .at: si existen dos o mas que numero del arreglo del componente queremos modificar.
- .simulate: mediante este permite saber cual es el listener que queremos ejecutar un click etc.

- expect : asercion la cual funciona para lanzar un error en algun caso que no se cumpla.

### Shallow rendering (onForms- test de integracion)

Test de integracion, esto debido a que se estan simulando cambios en el input y en el estado, estamos probando toda una cadena de eventos que se estan llamando.

1. Renderizar el componente
2. Mock para la funcion de addTodo
3. Simular el onchange en el input
4. Simular el onSubmit

### Testing custom hooks