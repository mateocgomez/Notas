# AWS PINPOINT

Interactuar con los usuarios y hacer una alitica con esto.

 - Los canales son los tipos de mensajes que se estan enviando, existen dos tipos de canales los transaccionales y las campañas 

## Segmentos

Los segmentos son un camino para subdividir la audiencia, como por ejemplo si quiero enviar mensajes solo a una grupo de personas de una app vieja, es una segmentación de atributo de versión, podrian segmentarse a todos los que tienen iPhone y tienen la version de la app 1.1,

Podemos tener todos los usuarios pero los quiero segementar de la siguiente forma:
    - Los que usan iPhone
    - Los que viven en USA
    - Los que estan en la versión 1.1 

Si estos atributos cambian dependiendo de este segmento, el usuario se va cambiando de segmentación a medida que se van actualizando dichos cambios.

Existen dos tipos de segmentos los importados y los dinamicos.
    - Importados son un archivo o archivos que se importan a pinpoint: en archivos planos se importan para crear los segementos, pueden ser numeros, correos etc es como una lista de contactos.
    - Dinamicos: son aquellos segementos que van cambiando de acuerdo a distintos filtros, es decir tengo el semento de las personas que trabajana en la empresa por 5 años y tengo las personas que son aws certificadas, si una persona pasa a ser certificada cambia el segemento y asi sucesivamente

### Canales

Despues de segmentarlos, se debe escoger la forma en la que se van a comunicar estas personas, puede ser mediante cuatro formas:
    - SMS
    - Notificaciones push
    - Email
    - Voz

### Campañas 

Las campañas se usan para enviar mensajes agendados, pueden ser campañas recurrentes por dia, semana o como lo quiera programar.
Se pueden liminar la cantidad de mensajes que el usuario va a recibir por dia, por campaña o cuantas campañas van a recibir, las campañas se pueden guardar en templates

En las campañas se puede especificar la hora el dia y demas que queremos lanzar las campañas, como bien una campaña es para agendar el bombardeo de información

## Usuarios o endpoints

Los usuarios no reciben los mensajes, son sus dispositivos los que reciben los mensajes y a estos se les denomina endpoint 

<h3>DEVICE = ENDPOINT</H3>

Por eso se debe tener claro y ser inteligente en el momento de enviar mensajes ya que el endpoint es el device que el usuario mas usa.

### Crear un proyecto en pinpoint y crear un segmento

Se crea el archivo o la base de datos en un CSV, se sube a un bucket con el nombre del segmento
se va a pinpoint y se empieza a crear un segmento mediante una importación
Se pueden importar los segmentos en JSON o CSV


#### Segmentación dinamica

La segmentacion dinamica se puede clasificar por pais o por distintos tipos de dispositivos que usen y demás, podemos usar el buildsegment le ponemos el nombre por ejemplo iOSOnly
Seleccionamos el segmento y le realizamos el filtro que queremos que tenga ese Segmento, podemos agregar uno o mas filtros

###Creación a campaña

Las campañas son usadas para enviar mensajes en canales a endpoints y segmentos

1. Para crear una campaña se necesita un nombre
2. Existen dos tipos de campaña , estandar campaña es la cual se puede enviar un mensaje para todos los endpoints que se pueda enviar ese mensaje , por ejemplo si hago un envio de correo y algunos de esos segmentos son push notification no va a servir
3. A/B test campaña sirve para crear multiples mensajes para comprar rendimiento y enelitica


## GRAFICAS DE ANALITICA


Estas graficas muestran principalmente los endpoints activos, las sesiones de metricas y las autenticaciones de las metricas
Todas esta informacion se puede descargar en un csv y poder mirar como va la información que se esta procesando.

### ANÁLISIS DE EMBUDO

Estas sirven para controlar embudos o filtros que ayuden a mirar mejor los atributos de distintas graficas y de esta formar revisar cuales son satisfactorias o no son tan satisfactorios.

#### Metricas en CloudWatch

Todas las metricas se ven en cloudwatch, como normalmente se monitorea todos los servicios de AWS

