# JAVASCRIPT BASICO

Para borrar un dato con JavaScript se usa SPLICE, se debe tener en cuenta que para borrar algun dato debe recibir un indice y con ese dato poder saber en que posición se va a borrar.

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