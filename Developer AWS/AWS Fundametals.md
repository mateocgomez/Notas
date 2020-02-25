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
```js
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