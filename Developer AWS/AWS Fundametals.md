# Fundamentals

AWS Regions -> estan en todo el mundo y cada region tiene zonas habilitadas, se reconocen por que terminan con una letra,

Las zonas habilitadas son fisicamente centros de datos que estan separadas una de la otra, estan separadas por cualquier desastre y no se caiga la zona habilitadas.

Consolas de AWS tienen alcanzes de zonas menos IAM y S3

## IAM (Identity and Access Management)

Toda la seguridad de AWS esta aca:
1. Usuarios
2. Grupos
3. Roles

Una cuenta root y se compartir
Usuarios se crear para tener permisos 
IAM es el centro de AWS
Se tienen policies que se escriben en JSON

Usuarios son personas fisicas
Grupos se puede por funciones o por equipoes que contienne usuarios
Role Estos roles son para usos internos y recursos de AWS, son para maquinas

Todos tienen politicas en JSON que definen que pueden hacer y que no pueden hacer.

IAM tiene una vista global, permisos y gobierno por politicas, mfa se puede poner, iam tiene politicas definidas, como buena practica es mejor dar los permisos que necesite  para hacer su trabajo.

### IAM Federation
Esto es para empresas grandes, credenciales de la compañoa y se puede integrar con directorios activos

Usuario -> Persona fisica
Roles -> para las aplicaciones que se van a usar

Las credenciales IAM nunca deben ser compartidas, las credenciales nunca se deben escribir en el codigo, es muy malo y es la peor practica y pueden generar bastantes gastos.

Nunca se deben comitiar las credenciales, NUNCA.

Nunca se debe usar la cuenta de ROOT como credenciales y otras cosas solo se debe usar para la configuracion inicial.


1. Nunca usar las keys del root
2. Habilitar MFA
3. Crear usuarios individuales
4. Grupos para administradores, devops y otros que pueden servir dependiendo de los permisos que se necesiten para cada uno y se le pueden agregar los permisos que se necesiten dependiendo del grupo que necesite
5. IAM Strong policy, es una politica que se crean con diferentes requisitos para que los passwords sean fuertes y no pueda entrar cualquier.

Uno puede customizar el nombre para la cuenta desde el IAM y customizar

## EC2
Es uno de los servicios mas importantes de AWS

- Es uno de los servicios mas ofrecidos AWS
- Rentar maquinar virtuales
- Almacena la informacion en discos virtuales
- Distribuye la carga en maquinas 
- Escalabe mediante grupos de auto escalamiento

SUBNET SE PUEDE PONER EN ALGUN AZ QUE QUERAMOS

Security group en las instancias es para configurar el firewall

Para las conexiones de SSH se puede mendiante MAC- LINUX O WINDOWS10-SUPERIOR
Si se tiene windows menor al 10 mediante putty, tambien se puede conectar mediante EC2 Instance Connect

### SSH Connect MAC/LINUX

SSH es una de las funciones mas importantes esta permite el control remoto de una maquina usando linea de comandos, teniendo acceso mediante el puerto 22.


```js
Para iniciar en la cuenta se debe tener la dirección ip publica que dan en EC2 y se escribe el siguiente comando en la terminal
ssh -i llave.pem elusuario@laipalaquemeconecto

En algunas ocasiones no nos podemos conectar debido a que le tenemos que dar permiso a la llave para que no sea visible publicamente y sea privada por lo tanto agregamos el siguiente comando

chmod 400 llave.pem
```

### EC2 Instance Connect

Conectarse por el browser, uno va a la consola pone el nombre con la que se quiere conectar, conectar y ya se conecta mediante el browser sin necesidad de usar terminal o keys, permitiendo conectarse sin terminal, esta conexión no se puede bloqueando ssh port, no deja conectar y esta regla no permitar conectarse a la maquina.


AMI ID da una descripción de que plataforma se esta usando y al descripción de la instancia.
### Tags
Clave valor parejas -> para indentificar las instancias y poderlas clasificar


# Security Groups

Son la seguridad fundamental de las redes en AWS, controlan y permiten el trafico dentro y fuera de las maquinas de EC2.
Es la parte fundamental para solucionar problemas de redes, actuan como firewall

De entrada y de salida para los EC2 IMPORTANTE!!

inbound -> permite todo el trafico de entrada
outbound -> todo el trafico de salida de la maquina
tags -> clasificar

En la sección de security group se puede modificar el inbound y el outbound

1. Acceso a los puertos
2. Ip sea IPv4 o IPv6
3. Control de las entradas y salidas de la red

Pueden ser aplicados en multiples instancias
Pueden ser guardadas por una region y vpc combinacion
Es bueno tener un grupo serparado de accesos ssh
Si hace timeout es un asunto del security group y su configuración
Si da un problema con conexión rechazada es un error de aplicación
todo el trafico de entrada esta bloqueado por defecto y de salida esta autorizado por defecto

También se le pueden dar permisos a ciertos security group en otras instancias y bloquear o permitir otros security group

### Ip privada vs publica
Existen dos tipos de ips, ipv4 and ipv6
Es mejor usar ipv4 ya que es la mas comun para usar en linea, mientras que la ipv6 is nueva y soluciona problemas para cosas como el internet de las cosas
ip publica permite contectarse al internet, geolocalizacion facil y debe ser unica en la web
Priva solo puede ser identificada en la red pruvada, la ip es unica, pueden existir dos ips iguales en diferentes redes privadas, y tienen un rango en especifico

#### Elastic IP

Cuando uno para y comienza una instancia de EC2 esta cambia la ip publica, por lo tanto si uno necesita una ip publica para la instancia fija, entonces necesita una ip elastica, y trabaja con ipv4.

Solo se pueden tener 5 elastic ip en la cuenta y se pueden tener mas, es recomendable tratar de evitar las elastic ip, esto refleja decisiones de arquitectura pobres, y para una mejor resolución se una un balanceador de cargas y no se usa una ip publica.

Cuando se apaga y se prende una maquina o se para en EC2 se cambia la ip publica pero se mantiene la ip prrivada pero para eso se usa la elastic ip.

Para asignar una elastic ip se va, alojar nueva direccion y next y da una nueva, click derecho en la ip y asociar la direccion ip a una instancia, se selecciona la ip y se asocia y ya se le asigna esa elastic ip, cuando nos devolvemos a la instancia nos podemos dar cuenta que la ip publica se vuelve como un link y la ip publica se mantiene y no se pierde, esta persiste.

Para quitarla click derecho en la instancia, networking y desasociar elastic ip y se quita automaticamente y la ip publica que teniamos antes ya no aparece

### Lanzar un servidor apache en EC2

Instalar apache web server para mostrar una pagina web
Mostrar un index.html en la maquina de EC2
```sh
1. Se corren los siguientes comandos sudo su para entrar como super usuario
2. Se actualizan todos los paquetes con yum update -y
3. instalamos yum install -y httpd.x86_64
3. Se instala systemctl start httpd.service -> Para amazon linux 2
4. systemctl enable httpd.service
5. Si esta bien podemos ver curl localhost:80 esto hace cargar cualquier costa en ese localhost
6. Si se queda haciendo timeout es error de security group por que no le hemos dado acceso en el puerto 80 para que pueda apuntar afuera
7. Modificamos las reglas de entrada y decimos de tipo http puerto 80 y que permita todo en el security group.
8. Ya tenemos nuestro servidor web arriba
```

### ec2 user data
Se puede crear un script para que cada vez que se lanze la maquina se lanzen estos scriopt mediante el ec2 user data, para este ejemplo se creara un bootstrap que se llama o scripty se asegure de tener instalado apache http server instalado correctamente.

Para configurar el USER DATA se lanza la instancia y en configuracion y detalles de la instancia en la pestaña de detalles avanzados esta un campo que se llama USER DATA , en esa seccion es donde va el script
Este es un script para mantener actualizado el servidor y poder mantenerle apache iniciado e instalado correctamente, estos scripts siempre corren en sudo
```sh
#!/bin/bash
# install httpd(Linux 2 version)
yum update -y
yum install -y httpd.x86_64
systemctl start httpd.service
systemctl enable httpd.service
echo "Hello World for Workr.r" > /var/www/html/index.html
```


### ec2 instance launch types
1. Instancias en demanda -> pequeñas cargas de tragajo
2. Instancias reservadas: trabajos largos y se reserva mayor a un año
3. Convertible reserved instances: puedes ser instancias flexibles
4. reserved scheduled: reservadas para una semana o un dia
5. spot instances: pequeñas cargas de trajo
6. dedicated instances: ningun otro cliente va a tener tu hardware
7. dedicated hosts: servidor fisico control de la instancia en el lugar

### ec2 on demand
1. se paga por el uso cobro por segundo despues del primer minuto
2. tiene el costo mas alto pero no tiene pago por adelantado
3. no tiene compromiso a largo plazo
3. Recomendado para cargas de trabajo a corto plazo e ininterrumpidas, donde no se puede predecir cómo se comportará la aplicación.

### EC2 Reserved Instances

Hasta un 75% de descuento en comparación con la demanda
- Paga por adelantado lo que usas con un compromiso a largo plazo
- El período de reserva puede ser de 1 o 3 años
- Reservar un tipo de instancia específica
- Recomendado para aplicaciones de uso en estado estacionario (base de datos think)
- Convertible Reservado Instancia - puede cambiar el tipo de instancia EC2 - Hasta un 54% de descuento
- Instancias reservadas programadas
- lanzamiento dentro de la ventana de tiempo que usted reserva
- Cuando se requiere una fracción del día / semana / mes

### EC2 Spot Instances Instancias puntuales

Puede obtener un descuento de hasta el 90% comparado con el de la demanda
- Pides un precio y obtienes la instancia siempre y cuando esté por debajo del precio
- El precio varía según la oferta y la demanda
- Las instancias de spot son reclamadas con una notificación de 2 minutos de aviso cuando el precio spot sube por encima de su oferta.
- Se utiliza para trabajos por lotes, análisis de grandes datos o cargas de trabajo que son resistentes a los fallos.
- No es muy bueno para trabajos críticos o bases de datos

### EC2 Dedicated Hosts

- Servidor físico dedicado de EC2 para su uso
- Control total de la colocación de la instancia EC2
- Visibilidad en los enchufes subyacentes / núcleos físicos del hardware
- Asignado para su cuenta para una reserva de 3 años
- Más caro
- Útil para el software que tiene un modelo de licencia complicado (BYOL - Bring Your Own License)
- O para las empresas que tienen fuertes necesidades de regulación o de cumplimiento


### EC2 Dedicated Instances
- Instancias que se ejecutan en un hardware dedicado a ti
- Puede compartir el hardware con otras instancias en la misma cuenta
- No hay control sobre la colocación de la instancia (puede mover el hardware después de Stop / Start)


### EC2 Pricing

- Los precios de las instancias de EC2 (por hora) varían en función de estos parámetros: 
- La región en la que estás
- Tipo de instancia que estás usando
- A la carta vs. Al contado vs. Reservado vs. Anfitrión dedicado
- Linux vs. Windows vs. Sistema Operativo Privado (RHEL, SLES, Windows SQL)
- Se le factura por segundos, con un mínimo de 60 segundos.
- También pagas por otros factores como el almacenamiento, la transferencia de datos, las direcciones IP públicas fijas, el balanceo de carga
- No se paga por la instancia si la instancia se detiene

### AMI

Sirve para crear tus propias imagenes, es decir una imagen para crear nuestras instancias, se pueden crear para windows o linux.

El uso de un IAM construido a medida puede proporcionar las siguientes ventajas: 
- Se necesitan paquetes preinstalados
- Un tiempo de arranque más rápido (no hay necesidad de largos datos de usuario ec2 en el momento del arranque)
- La máquina viene configurada con un software de monitoreo y de empresa
- Preocupaciones de seguridad - control sobre las máquinas de la red
- Control de mantenimiento y actualizaciones de los IAM a lo largo del tiempo
- Integración del Directorio Activo fuera de la caja
- Instalar su aplicación con antelación (para un despliegue más rápido cuando la escala automática)
- Usando el AMI de otra persona que está optimizado para ejecutar una aplicación, DB, etc...
- Los AMI están construidos para una región específica de AWS (!)


### Nomenclautura de las instancias

• R/C/P/G/H/X/I/F/Z/CR are specialised in RAM, CPU, I/O, Network, GPU
• M instance types are balanced
• T2/T3 instance types are “burstable”

### Burstable Instances (T2)

Cuando estas instancias son bursatiles significa que son en general y que su rendimiento de cpu esta bien, pueden manejar picos de carga de trabajo usando creditos de burst

### T2 Unlimited
Sale en el 2017 y se pueden tener creditos de burst ilimiados, pagando un dinero extra y no se pierde el rendimiento de la cpu, si no se monitera adecuadamente los costos pueden ser bastantes costos

## LOAD BALANCER

Son servidores que reenvían el tráfico de Internet a múltiples servidores (EC2 Instances) de bajada.
Repartir la carga entre múltiples instancias descendentes
- Exponer un único punto de acceso (DNS) a su aplicación
- Manejar sin problemas los fallos de las instancias descendentes 
- Realizar comprobaciones regulares del estado de sus instancias 
- Proporcionar terminación SSL (HTTPS) para sus sitios web 
- Aplicar la adherencia con las cookies 
- Alta disponibilidad en todas las zonas 
- Separar el tráfico público del privado

ELB -> ELASTIC LOAD BALANCER , aws proporciona su propio balanceador de cargas y garantiza que trabaje eficientemente y no con un balanceador de cargas que quiera implementar usted mismo, garantiza el mantenimiento las actualizaciones y la alta disponibilidad.

Existen 3 tipos de ELB en AWS
1. Classic load balancer -> v1 lanzado en 2009
2. Application load balancer -> de los nuevos balanceadores de carga v2 lanzado despues del 2016
3.Network load balancer -> de los nuevos balanceadores de carga v2 lanzado despues del 2017

Recomendado por amazon usar la nueva generación de los balanceadores de carga, Amazon también deja configurar los ELB privados o publicos.

### Health Checks

- Los controles de salud son cruciales para los equilibradores de carga
- Permiten que el equilibrador de carga sepa si los casos que se presentan reenvían el tráfico a
están disponibles para responder a las solicitudes
- El chequeo médico se hace en un puerto y una ruta (/salud es común)
- Si la respuesta no es 200 (OK), entonces la instancia no es saludable

### Application load balancer

- Los equilibradores de carga de aplicación (Capa 7) permiten hacer:
- Equilibrar la carga de múltiples aplicaciones HTTP entre máquinas (grupos objetivo)
- Balanceo de carga para múltiples aplicaciones en la misma máquina (ex: contenedores)
- Equilibrio de carga basado en la ruta en la URL
- Equilibrio de carga basado en el nombre del host en la URL
- Básicamente, son increíbles para los micro servicios y las aplicaciones basadas en contenedores.
(ejemplo: Docker & Amazon ECS)
- Tiene una función de mapeo de puertos para redirigir a un puerto dinámico
- En comparación, necesitaríamos crear un equilibrador de carga clásico por
solicitud antes. ¡Eso era muy caro e ineficiente!

- La adherencia puede activarse a nivel del grupo objetivo
- La misma petición va a la misma instancia
- La adherencia es generada directamente por el ALB (no la aplicación)
- ALB soporta los protocolos HTTP/HTTPS y Websockets
- Los servidores de aplicación no ven la IP del cliente directamente
- La verdadera IP del cliente se inserta en la cabecera X-Forwarded-For
- También podemos obtener Puerto (X-Forwarded-Port) y proto (X-Forwarded-Proto)

EC2 nunca ve la ip privada de la instancia 

### Network load balancer

- Los equilibradores de carga de la red (Capa 4) permiten hacer:
- Reenviar el tráfico TCP a sus instancias
- Manejar millones de solicitudes por segundos
- Soporte para IP estática o IP elástica
- Menos latencia ~100 ms (vs 400 ms para ALB)
- Los equilibradores de carga de la red se utilizan principalmente para el rendimiento extremo y no debería ser el equilibrador de carga que elija por defecto
- En general, el proceso de creación es el mismo que el de los equilibradores de carga de la aplicación

### IMPORTANTE 

1. Los balanceadores de carga clasicos estan obsoletos
- ALB para HTTP/HTTPS Y WEBSOCKETS
- NLB para TCP
2. CLB y ALB soporta SSL cerificados y proveen terminación SSL
3. Todos los ELB tienen la capacidad de health checj
4. ALB puede rutear en un hostname/path
4. ALB es perfecto para DOCKER
5. Cualquier ELB tiene una static host name
6. ELB se puede escalar pero no instantaneamente se debe contactar a AWS
7. NLB ve el cliente directamente
8. errores 4xx son por el cliente
9. errores 5xx son de aplicaciones
    - error 503 de capacidad o no tiene un objetivo registrado
Si los ELB no pueden conectar a la aplicación se deben revisar los security group

En la creacion de un balanceador de cargas el schema puede ser de dos tipos:
1. internet-facing -> para cuando la aplicacion va para internet y va a ser publica
2. internal -> cuando la aplicacion va a ser internet

## Auto Scaling Group (ASG)
- En la vida real, la carga de sus sitios web y aplicaciones puede cambiar
- En la nube, puedes crear y deshacerte de los servidores muy rápidamente
- El objetivo de un Grupo de Auto Escala (ASG) es:
- Escalar (agregar instancias de EC2) para igualar una carga incrementada
- Escala en (quitar los casos de EC2) para que coincida con una carga disminuida
- Asegúrate de que tenemos un mínimo y un máximo de máquinas funcionando
- Registrar automáticamente nuevas instancias a un balanceador de carga

### Configuración ASG
Que se necita para configurar un ASG
AMI + TIPO DE INSTANCIA
EC2 User Data
EBS Volumnes
Security Groups
SSH Key Pair
Min & max & initial size
Network + subnets 
Balanceador de cargar
Politicas de escalamiento

### Auto Scaling Alarms
1. Se puede escalar mediante alarmas de CloudWatch

c
Se pueden definir nuevas reglas de autoescalamiento por EC2
-> Numero de requerimientos de la ELB por instancia
-> Promedio CPU de uso
-> Promedio de entrada de red
-> Promedio de entrada de salida


### Auto Scaling Custom Metric
-> Se puede escalar basado en metricas custom por ejemplo numero de conexiones por usuario


### ASG Brain dump

- Las políticas de escalamiento pueden ser en la CPU, la Red... e incluso pueden ser en métricas personalizadas o basadas en un horario (si conoces los patrones de tus visitantes)
- Los ASGs usan configuraciones de lanzamiento y se actualiza un ASG proporcionando una nueva configuración de lanzamiento
- Los roles IAM asignados a un ASG se asignarán a las instancias del EC2
- Los ASG son gratuitos. Pagas por los recursos subyacentes que se lanzan
- Tener instancias bajo un ASG significa que si se terminan por cualquier razón, el ASG las reiniciará. ¡Seguridad extra!
- El ASG puede terminar las instancias marcadas como insalubres por un LB (y por lo tanto reemplazarlas)

### EBS Volume (Elastic Block Store)

- Una máquina EC2 pierde su volumen de raíz (unidad principal) cuando se termina manualmente.
- Pueden ocurrir terminaciones inesperadas de vez en cuando (AWS le enviaría un correo electrónico)
- A veces, necesitas una forma de almacenar los datos de tu instancia en algún lugar
- Un volumen EBS (Elastic Block Store) es una unidad de red que puedes conectar
 a sus instancias mientras corren
- Permite que sus instancias persistan los datos
- Almacena los datos si se llega a perder alguna información
- Es un disco duro en la red no es un disco duro fisico.
- Este usa la comunicacion de la red para comunicarse con la instancia, esto quiere decir que va a ver un poco de latencia.
- Este permite quitarse de una EC2 y conectarse a otra rapidamente.
- Se establece en una sola az
- Es decir que no puede estar en us-east-1 a us-east-1b
- Para mover un volumen de un lado a otro se necesita tomar un snapshot a este.
- Tiene una capacidad provisionada
- Uno puede incrementar la capacidad del disco durante el tiempo

### Tipos de volumenes de EBS

-> Los volumenes de EBS vienen en 4 tipos
1. GP2 (SSD): PROPOSITOS generales buenos precios, rndimiento
2. IOI: remdimiento alto, baja latencia y grandes cargas de trabajo
3. STI: bajo costo ya que los volumenes de discos son HDD
4. SCI: bajo costo 

Tiene la caracteristica de que se puede por tamaño, ips

Se pueden aumentar los volumenes, como el tamaño los iops y despues de aumentarlos se puede repartir

### EBS Snapshots
- Un volumen de ebs se puede realizar el backend mediante snapshots
- Los snapshots solo puede tomar el espacio actual en el volumen
- Solo toma el snapshot que se este usando
- Sirve para backups, migraciones, encriptar una unidad, cambiar el tipo de unidad, aumentar el tamaño

### EBS Encryption

Cuando se crea una EBS encriptada:
    1. Los datos encriptados se meten dentro del volumen
    2. Todos los datos que entren o salgan seran encriptados
    3. Todos los snapshots tambien seran encriptados
    4. Todos los volumenes creados para el snapshot
La encripcion y descripcion es transparente
La encripcion tiene un minimo impacto en la latencia
La encriptacion usa las llaves de KMS
Cuando se copia un snapshot sin encriptacion permite la encriptacion

### EBS vs Instance Store

Alguna instancia no viene con ROOT EBS volumenes
Ellos vienen con Instance Store
Instance store viene con la maquina
Pros: Mejor I/O 
Cons: 
- Cuando se apaga, el instance store se pierde
- No se puede cambiar el tamaño del instance store
- Backups son operados por el usuario.

EBS Solo puede ser metida en una instancia al tiempo
EBS esta bloqueada por la AZ nivel
Para hacer migraciones de EBS de un AZ tiene que tener un snapshot para luego poder hacer el otro 
EBS backups solo usan io

## Route 53
Route 53 se manega por los DNS
El DNS es una colección de reglas y registros que ayuda a los clientes a entender cómo llegar a un servidor a través de las URL.
Los registros mas comunes son : 
• A: URL to IPv4
• AAAA: URL to IPv6
• CNAME: URL to URL
• Alias: URL to AWS resource.