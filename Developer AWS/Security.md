# Security

#Encryption 101

Encryption in flight (SSL)

Para enviar documentos como tarjetas de credito y demas en linea, se encripta antes de ser enviada y se desencripta cuando se recibe
SSL certificacion ayuda a encriptar

Encriptacion en el lado del servidor

Los datos se encriptar y se almacenan encriptados en el servidor
Se guarda encriptada en data key
El servidor maneja la encriptacion y desencriptacion en el lado del servidor

Clien side encryption
La encriptacion se encarga el lado del cliente y nunca se encripta en el servidor
El servidor nunca desencripta

## KMS (Servicio de gestión de claves)

Cuando sea encriptacion en AWS debe ser con KMS
Tiene integracion con IAM para autorización
Se puede integrar con distintos servicios como: 
EBS , S3 , Redshift , RDS, SSM

Se puede usar el CLI/SDK

Cuando se necesite compartir informacion sensible se usa KMS

Nunca guardar claves secretas en el codigo, se pueden guardar en variables de ambiente.

KMS solo ayuda a encriptar 4kb de datos por llamado.

Si la data supera los 4kb se usa envelope encryption.

Con kms se pueden crear, compartir, deshabilitar y habilitar keys.

Se puede auditar el uso de las llaves mediante CloudTrail

Existen 3 tipos de Customer Master Keys(CMK)
 - Por defecto existe un servicio que es gratus de CMK, DEFAULT KEY
 - User keys pueden ser creadas en KSM y valen 1 dolar poe mes.
 - User Keys importadas vale 1 dolar por mes y por cada callamado a KMS vale $0.03

 Como trabaja KMS??


 El cliente mediante el CLI o SDK envia un password para ser encriptado, el lo manda a KMS usando CMK, pero antes de eso IAM revisa si tiene los permisos de IAM si es asi envia la clave secretada encriptada.

 Cliente envia la clave para desencriptarla , se revisa el CMK, revisa los permisos y devuelve la llave desenciptada en un texto plano desencriptado.

 Mediante el sdk podemos encriptar o desencriptar con KMS , estas se encriptan con las variables de entorno para encriptar y desencriptar

 ### AWS Encryption SDK

 Como usar una encriptacion mas de 4kb usando KMS? --> ENVELOPE ENCRYPTION

 Todo lo que sea más de 4 KB de datos que necesite ser encriptado debe usar el SDK de encriptación == Envelope Encryption == GenerateDataKey API


 ### Parameter Store
- Almacenamiento seguro para la configuración y los secretos
- Cifrado sin fisuras opcional usando KMS
- Sin servidor, escalable, duradero, fácil SDK, gratuito
- Seguimiento de versiones de configuraciones / secretos
- Gestión de la configuración mediante ruta y IAM - Notificaciones con eventos de CloudWatch
- Integración con CloudFormation
- Trabaje directamente con KMS


Comando para tomar los parameter store aws ssm get-parameters --names /my-app/dev/db-url /my-app/dev/db-password --with-decription 

tambien se puede hacer por path y traer todos los que estan por path

aws ssm get-parameters-by-path --path /myapp/dev

o traer todos los recursos sean de dev y de prod 

aws ssm get-parameters-by-path --path /myapp/dev --recursive

Se pueden monitar las API mediante CLOUDTRAIL 


Como las politicas son evaluadas?
1. Si hay un NEGADO explícito, termina la decisión y NEGA
2. Si hay un PERMISO, termina la decisión con PERMISO
3. Else DENY


Policies Dynamic

Permiten usar policies para cualquier usuario y sea dinamico de esta forma
## Temas del examen
1. Seguridad
2. Sección dedicada