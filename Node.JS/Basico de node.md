Node JS
    - Comillas invertidas ` ` hace referencia a templates sin necesidad de concatenar, como por ejemplo
        `El resultado es ${a==b}`
    - variable reservada como __dirname me dice donde esta ubicado el archivo
    - variable reservada como __filename toda la dirección del arhivo

Procesos: nos dice el ambiente en el que se esta ejecutando, como puede ser su ambiente.

se implementa mediante process.argv para llamar procesos

Otra forma de imprimir en consola mediante procesos se puede implementar con :

    process.stdout.write : para escribir en consola
    process.stdin.on : para leer en consola
    push: inyecto las respuestas al codigo

    Es mejor usar el modulo de READLINE

Los modulos de Node.js.

    Cada vez que use un modulo se debe asignarle una variable y la palabra reservada require es el llamado al modulo
    Para exportar un modulo se implementa mediante modulo.exports = persona
    llamamos el modulo meidante require y en donde se encuentra el objeto

Ejecutar procesos en node.js
    se requiere la libreria child_process.exec
    mendiante esta libreria podemos ejecutar procesos, EXEC

Leer archivos de nodejs 
    mediante la libreria o el modulo fs
    readdirSync() -> es sincrono
    se puede correr de forma asincrona o sincrono

Escribir archivos con node.js
    Se usa la libreria fs 
    con la función existsSync miramos si el arhivo existe
    con la función access podemos entrar al archivo
    mediante las constants podemos revisar si el arhivo es escribible o no
    para escribir con fs se usa writeFileSync -> función sincrona

Trabajar con directorios con node.js   
    fs tambien se pueden manipular directorios
    mkdir y mkdirSync sirve para crear directorios

Validar si existe una carpeta
    existsSync si este o no la carpeta mediante un booleano


    renombrar sincrono -> renameSync
    renombrar asincrono -> rename
    mover archivo -> rename y el path del archivo al que vamos a cambiar
    eliminar archivo -> mediante unlink podemos eliminar el archivo también se puede trabajar con sincronia

leer archivos con streams mediante createReadStrem , esta forma se evita leer los archivos de tamaños demasiados grandes. estos stream trabajan mediante eventos
    renombrar sincrono -> renameSync
    renombrar asincrono -> rename
    mover archivo -> rename y el path del archivo al que vamos a cambiar
    eliminar archivo -> mediante unlink podemos eliminar el archivo también se puede trabajar con sincronia

leer archivos con streams mediante createReadStrem , esta forma se evita leer los archivos de tamaños demasiados grandes. estos stream trabajan mediante eventos
