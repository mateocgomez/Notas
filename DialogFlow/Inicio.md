# DialogFlow

## Chatbot con fb messenger

1. Crear la cuenta de facebook developer
2. Tener la cuenta de dialog flow
3. Crear la pagina en facebook
4. Ir a integraciones y conectarlos

### Conectar Dialog flow con fb messenger

1. Se debe ir a la pagina de facebook en la sección de messenger.
2. Se debe agregar la pagina y pedir los permisos correspondientes para que pueda funcionar
3. Se debe generar el token "Page Access Token" el cual se copia desde el identificador de messenger y se pone en dialogflow.
4. Verify token es la conexion entre dialogflow y messenger esta uno la crea.
5. En dialog flow se pone start bot una vez se crea el bot, el devuelve una url la cual es lo que devuelve desde dialog flow, y en el otro esta el verify token este es el que nos inventamos en dialog flow y lo ponemos alla

### Intenciones

Estas son las que desencaden el chatbot una intencione esta compuesta por:

- Frases de entrenamiento -> estas frases son las que puede escribir el usuario y el bot puede entender
- Acciones -> Estas acciones son desencadenadas por las frases de entrenamiento y puede obteener valos especificos del usuario