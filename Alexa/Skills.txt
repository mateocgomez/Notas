Alexa recibe un JSON y regresa un JSON.
El lenguaje siempre limita varios modelos y skills con los cuales se pueda trabajar.

Interaction Model: lo que le da el input y el output, son reglas de como manejar y dar prioridad dependiendo a lo que uno le diga al usuario.
    
    1. Invocation Name: Es la palabra clave para invocar el nombre de la skill, tiene reglas en especifico como:
        -Tener dos palabras
        -Alfabeto
        -En la pagina se pueden conocer un poco mas 

    Intents, Utterance Samples , Slots son los componentes del interaction model.
    El modelo se puede guardar y continuar trabajando con el, o build el modelo y se construye el y se preocesa el mismo.

    2. Intents: Lo que el usuario intenta hacer , acciones que el usuario quiere hacer, los intents son JSON, y se les llama intents schema, tienen unos intents que ya viene por defecto al crear el skill
    3. Utterances: Dentro de los intents estan los utterances son las intenciones que se intentan hacer, el usuario puede decir saluda a todos, saludar, saluda al mundo, entre mas se entre el algoritmo con las acciones que tenga que ver , 
        lo que el usuario habla, lo que el usuario dice para activar ese intento, es recomendable usar unos 10.
    4. Slots: son espacios para definir variables como primer nombre, cantidades entre otros, se deben crear los slots y seleccionar que tipo de dato es este slot, estan definidos por amazon que tiene un sin fin de datos almacenados por el


En node.js se puede trabajar con el ask-sdk-core 

    -Función LaunchRequestHandler = Cuando se invoca alexa empieza con esta funcion, es la primera funcion con la que se trabaja.
        Speak: habla  reprompt: es para volver a intentarlo
    -Función SaludarMundoIntentHandler = Es una de las intenciones con las que trabaja que se creo anteriormente.

    exports.handler = todos los handler se deben exportar

    developer.amazon/alexa
    @alexadevs
    @amazonalexa twitch


Componentes importantes 

    - Toda la instalación proceso y computo vive en la nube, todo es propiedad de amazon.
    - ASK : nos ayuda para crear nuestras skills para los desarrolladores

Componentes de las skils:
    - Wake Word: es la palabra para despertar nuestro dispositivo inteligente
    - launch word: abre , inicia, prende , pregunta , sirve para iniciar una skill
    - invocation name: es el nombre con el que vamos a invocar la skill, tiene normas
    - utterance: es la acción que queremos que haga nuestra skill, enunciado, puede ser de una o mas palabras, es importante entrenar este algoritmo, es recomendable maximo 10

Intenciones:
    - acciones que el usuario quiere que haga y las diversas maneras de pedirlo son los enunciados.
    - Una intencion es lo que el usuario lo intenta o quiere hacer.
    - cancelintent, help, stop son skills obligatorios
    - Una skill puede tener uno o varias intenciones

Partes al construir una skill
    - Interfaz de usuario de voz ( Voice UI ) , llamado también el front-end, pero como el usuario no ve nada se le llama voice ui -> ruta del front : tiene clave- valor /models/es-ES.json
    - Codigo (backend) (node)/lambda/custom/index.js --> puede ser con cualquier otro lenguaje
    - skill.json son metadatos , se encuentran caracteristicas de los datos, por ejemplo nombre del skill, nombre del creador, fecha de creacion entre otros.

Arquitectura de una skill de alexa

    - el usuario habla y se conecta a un dispositivo
    - el dispositivo le pega a la nube usando estos servicios ASR, NLU y con machine learning
    - una vez entiende va al codigo del backend y le hace la peticion y el handler maneja la respuesta

Pasos para crear un Skill backend

1. Libreto para el skill
2. model (portal alexa dev)
3. AWS ( backend )
4. Probar el skill
5. Subir aplicación


Slots Customizados:
    - Añadir, custom slots, se le van agregando distintos valores con distintos valores 
    - Para crear un slot se debe poner en mayuscula el slot como buena practica
    - Los sinonimos se pueden colocar para identificar distintas palabras que el usuario lo puede llamar
    - En los utterance se puden agregar los Slots

Skill Id: es el identificador del skill y se encuentra en el dashboard de los skills , en el punto donde dice skill id es el id al cual se va a trabajar.
            o en los endpoints del alexa developer console tambien se puede encontrar el skill id


Codigo en Node.JS de alexa

    1. Requiere el ask-sdk
    2. Siempre los handler que son los manejadores estan esperando una intencion para que se ejecute
    3. Tener en cuenta bien la semantica de español con acentos, signos de interrogación y admiración bien puestos.


ASK CLI  (Alexa Skills Kits CLI)
    1. En Windows instalar npm install -g --production windows-build-tools, usar powershell en administrador
    2. Instalar Ask CLI npm install -g ask-cli
    3. ask init inicia el alexa skills kit

COMANDO ASK CLI
    1. ask new -> crea un template de un proyecto completo
    2. ask deploy -> despliega el codigo a la nube
    3. ask clone -> se clona un proyecto que ya se tenga en la nube en el alexa developer console
    4. ask simulate -> simula mediante linea de comandos el skill de alexa
    4. ask diff -> compara la version remota contra la versión local

TIENDA SKILL
    1. https://www.amazon.es/b?ie=UTF8&node=13944662031
    2. En la pestaña de distribución se deben llenar los campos:
        a. Nombre del skill
        b. Una descripción de la skill en una frase
        c. Una descripción detallada de la skill
        d. Que ahí nuevo
        e. frases de ejemplo es recomendable empezar a usar alexa
        f. icono de la skill ( Alexa icon builder , mediante este podemos revisar los iconos o editarlos )
        g. Categorias : es importante tenerla clasificada en la categoria acorde con el fin de poder seleccionar la adecuada
        h. keywords: palabras claves que en el momento de busqueda sirvan de forma adecuada
        i. privacy policy url y terms of use, estas politicas sirven cuando se piden datos del usuario y se guarden a alguna base de datos, debe contener los terminos y privacidad para redactarlos
        j. privacy & compliance : se pueden hacer compras con dinero reglas
        k. si recolecta informacion personal
        l. si esta para niños pequeños menores de 13 años
        m. si contiene anuncios
        n. que la skill sirva para diferentes paises
        o. testing information: las personas que lo prueban instrucciones para estos
    3. Disponibilidad en diversos paises la cual es public
        Alexa for business organizations, skills para negocios
    
    BETA TEST -> pruebas para otros desarrolladores.

    Se envia para revisión

    ¿ Qué pasa cuando no se aprueba la skill?
        Code Review, se demora entre 1 a 3 días para la certificación
        Puede que existan alguno que no tienen sentido como por ejemplo el codigo de invocación 
        No se demora mucho tiempo en la revisión
        