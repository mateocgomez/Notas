# GraphQL con AWS APP SYNC

## Query con filtro

```js
const allLogs = API.graphql(graphqlOperation(queries.listOsyadbs, { filter: {Nombre: { contains: "Mateo Castano" }} }));
console.log(allLogs);
```

## Mutation para actualizar dato

```js
    const newTodo = await API.graphql(graphqlOperation(mutations.updateOsyadb, {input: {CodigoEmpleado: "79940532", Estado: "Pendiente"}}));
    console.log(newTodo);
```




