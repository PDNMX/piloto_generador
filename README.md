## Generador de Datos S2, S3.1, S3.2 ##


### Funcionalidad ###

Este piloto desarrollado en NodeJS genera información aleatoria sobre servidores Públicos en Contrataciones(S2), Sancionados Particulares(S3.1) y Servidores Públicos Sancionados(S3.2) que alimenta una base de datos montada sobre MongoDB, esta información es producida de acuerdo a esquemas definidos a través del catálogo de datos de la PDN que posteriormente pueden ser consultados por medio de API's.

El usuario podrá guardar información en la colección correspondiente únicamente dando como parámetro de entrada el nombre del sistema en cuestión y el número de documentos a crear, más adelante se detalla el procedimiento para crear esta aplicación y su infraestructura desde cero, o bien, haciendo una importación.

### Pre - requisitos ###

* Versión estable SLP (soporte de largo-plazo) de NodeJs y NPM previamente instalados, si no se cuenta con ellos puede descargarlos [Aquí](https://nodejs.org/en/download/).
* MongoDB Previamente instalado y configurado. Se asume que el usuario conoce ya las credenciales asignadas a la base de datos, esta información es indispensable.

### Recomendacion ###

Se recomienda haber leído este documento en su totalidad antes de replicar el generador de datos de manera local.


### Especificaciones Técnicas ###

El piloto ha sido desarrollado sobre las siguientes versiones de sus componentes:

* NodeJS v12.18.2
* NPM 6.14.5
* MongoDB 4.2
* Express 4.16.1 Este generador de aplicaciones es opcional porque podemos crear la arquitectura de nuestra aplicación de forma manual,sin embargo, estaremos usando esta herramienta porque hace más fácil el proceso y promueve una estructura modular.
* Mongoose 5.9.22


### Creando Infraestructura ###

Este apartado tiene como objetivo mostrar los pasos a seguir para **crear** la infraestructura de la aplicación prácticamente desde cero(directorios, dependencias, comandos asociados, etc). 

En un bloque posterior mostraremos como **importar** la misma estructura y solamente ocuparnos de ejecutar la aplicación, será decisión del usuario qué método elegir.


Para este piloto estaremos usando tres proyectos, uno para cada sistema (S2, S3.1 y S3.2) que generarán información que será guardada en la misma base de datos y en diferentes colecciones.

Como primera instancia, debemos trabajar sobre el directorio donde crearemos la estructura base.

    cd /var/opt/apps/piloto_generador/S2

Usaremos el comando `npm init` para crear un archivo llamado package.json que va a contener las dependencias de nuestra aplicación, la consola nos irá solicitando información para este archivo, a continuación se muestra el detalle:

> name: (piloto_generador_S2)
> 
> version: (1.0.0)
> 
> description: generador de datos para sistema S2
> 
> entry point: (index.js)
> 
> test command:
> 
> git repository:
> 
> keywords:
> 
> author: TXM Global
> 
> license: (ISC)
> 
> About to write to /var/opt/apps/piloto_generador/S2/package.json:
> 
 
Agregaremos las dependencias de la base de datos para que la aplicación pueda ejecutar operaciones CRUD.

     sudo npm install --save dotenv
     sudo npm install --save  mongoose

verificamos que las dependencias hayan sido agregadas a **package.json**

`more package.json`    
                                                
{
  "name": "piloto_generador_S2",

  "version": "1.0.0",

  "description": "generador de datos para sistema S2",

  "main": "index.js",

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  "author": "TXM Global",

  "license": "ISC",

  "**dependencies**": **{**

   "**dotenv**": "**^8.2.0**",

   "**mongoose**": "^**5.9.24**"
  **}**

}


Cuando estas dos dependencias hayan sido agregadas ya podemos  agregar al directorio de trabajo los archivos que el equipo de TXM Global desarrolló de acuerdo al sistema sobre el que estemos trabajando, en este ejemplo, copiaremos a

 **/var/opt/apps/piloto_generador/S2/**

los ficheros de la lista de abajo que se encuentran dentro de la carpeta
**.../schemasPDN_S2/**  de este repositorio.

1. .env
1. createDataS2.js
1. db_conf
1. models
1. sampleData.js

El directorio se vería de la siguiente forma:


> [centos@pdn-rest-api-072020 S2]$ ls -ltrh
> 
> total 28K
> drwxr-xr-x. 33 root root 4.0K Jul 14 17:27 node_modules
> 
> -rw-r--r--.  1 root root  331 Jul 14 17:27 package.json
> 
> -rw-r--r--.  1 root root 5.7K Jul 14 17:30 sample_data.js
> 
> -rw-r--r--.  1 root root  627 Jul 14 17:30 db_conf.js
> 
> -rw-r--r--.  1 root root 2.3K Jul 14 17:30 createDataS2.js
> 
> -rw-r--r--.  1 root root 1.1K Jul 14 17:30 models.js
> 
> [centos@pdn-rest-api-072020 S2]$


Si logramos tener esta estructura con éxito entonces ya podemos ejecutar la aplicación con el siguiente comando:

    node createDataS2.js 3

donde el número 3 indica el número de registros a guardar en la base datos, este parámetro es variable.
La salida del comando será algo similar a esto:
> 
> Connected to MongoDB
> 
> [ { superiorInmediato:
>      { puesto: [Object],
>        nombres: 'Ata',
>        primerApellido: 'Villarreal',
>        segundoApellido: 'García',
>        curp: 'VIGA790201MVZLRA40',
>        rfc: 'VIGA850706B84' },
>     _id: 5f0df3a1e694d02c9f6f32dd,
>     fechaCaptura: '2020-07-14T18:04:17.980Z',
>     ejercicioFiscal: '2018',
>     ramo:
>      { clave: 33,
>        valor: 'Aportaciones Federales para Entidades Federativas y Municipios' },
>     rfc: 'RIVA980408E81',
>     curp: 'RIVA780905MDFVLJ41',
>     nombres: 'Alejandra',
>     primerApellido: 'Rivera',
>     segundoApellido: 'Villarreal',
>     genero: { clave: 'F', valor: 'FEMENINO' },
>     institucionDependencia:
>      { nombre: 'Instituto Federal de Telecomunicaciones',
>        clave: 'IFT',
>        siglas: 'IFT' },
>     puesto: { nombre: 'Subdirector', nivel: 'N31' },
>     tipoArea: [ [Object] ],
>     tipoProcedimiento: [ [Object] ],
>     nivelResponsabilidad: [ [Object] ],
>     __v: 0 } ]
>     
> [centos@pdn-rest-api-072020 S2]$

Hasta este punto hemos ejecutado la aplicación para el sistema S2 "Servidores Públicos en contrataciones" y la información está siendo guardada en MongoDB, en una base de datos llamada "test" bajo la colección "S2_Contrataciones", estos parámetros son definidos en el código cuya explicación la podrás encontrar en los siguientes apartados.


Como resumen nosotros llevamos a cabo las siguientes actividades.

1. Creamos un espacio de trabajo donde correrá la aplicación, este espacio es transparente para el equipo de TXM Global, cada dependencia puede elegir el directorio deseado.

1. Creamos el archivo de configuración donde se almacenan las dependencias.

1. Almacenamos las dependencias necesarias para poder escribir en la base de datos.

1. Ejecutamos la aplicación para crear personas ficticias en MongoDb.


### Importando Infraestructura ###

En el bloque anterior, se **creó** el esqueleto de la aplicación, en este mostraremos como **importarlo**  siendo esto una opción extra.

Como primer paso debemos copiar todo el contenido de **.../schemasPDN_S2** dentro del espacio de trabajo que hayamos seleccionado.

    cp .../schemasPDN_S2/* /var/opt/apps/piloto_generador/S2/

Nos localizamos en el directorio para luego ejecutar la aplicación.

 `cd /var/opt/apps/piloto_generador/S2`

    node createDataS2.js 2

De esta forma ya estaremos guardando información en la base de datos para el sistema S2.



### Notas ###

Cualquiera que sea la elección del usuario, ya sea crear la estructura o importarla, es crucial recalcar que los pasos descritos anteriormente son solo para el sistema S2 y como ya se mencionó, en este repositorio hay una carpeta para cada sistema por lo que el usuario deberá crear 3 espacios de trabajo en su servidor local, por ejemplo

**/var/opt/apps/piloto_generador/S2**  para el sistema S2 (como en los ejemplos anteriores)

**/var/opt/apps/piloto_generador/S3.1** para el sistema S3.1

**/var/opt/apps/piloto_generador/S3.2** para el sistema S3.2

Los pasos a seguir son exactamente los mismos, solo varía el  nombre del espacio de trabajo o path y la carpeta de este repositorio.



### Código NodeJS ###

### .env ###

En este archivo vamos a especificar los parámetros de conexión a la base de datos que deben ser modificados por el usuario reemplazándolos por la información correcta del servidor y base de datos donde correrá la aplicación 


> PORT=3000
> 
> MONGODB_HOST=ipDondeSeInstaloMongoDB
> 
> MONGODB_PORT=puertoDefault27017
> 
> MONGODB_USER=usuariodeMongoDB
> 
> MONGODB_PASSWORD=passwordMongoDB

### db_conf.js ###

Este archivo utiliza la dependencia **dotenv** que se instaló al crear la infraestructura o bien, que se importó junto con ella. 

> require('dotenv').config()


La dependencia permite el uso del fichero **.env** para crear los parámetros de conexión a la base de datos en la sintaxis que  la herramienta *mongoose* comprende.

> const host = process.env.MONGODB_HOST;

> const port = process.env.MONGODB_PORT;
> 
> const user = process.env.MONGODB_USER;
> 
> const password = process.env.MONGODB_PASSWORD;

> const url = 'mongodb://${credentials}${host}:${port}';
> 
> const client_options = {
>    useUnifiedTopology: true,
>    useNewUrlParser: true
> };

Posteriormente exporta los parámetros que se crearon para que puedan ser utilizados por otras instancias de nodeJS
> 
> module.exports = {
>      url,
>      client_options
>   };



### models.js ###

models.js fue creado para definir los esquemas de cada sistema y poder guardar la información de acuerdo al catálogo de la PDN.
Se está utilizando mongoose como herramienta para insertar documentos en mongoDB por lo tanto la definición de estos esquemas es prioritaria.

Las líneas de código más importantes en models.js se explican a continuación.


> const { Schema, model } = require('mongoose');

Es la primera línea, indica que estaremos usando mongoose como herramienta para añadir información a la base de datos bajo un esquema definido. 

> let Spic = model('S2_Contrataciones', spicSchema,'S2_Contrataciones');

En esta linea se define el nombre de la colección donde vamos a almacenar los documentos creados, esta instrucción es diferente para cada sistema dado que es recomendado tener cierta independencia entre ellos, para S3.1 tenemos:

> let Spic = model('S3_Particulares', spicSchema,'S3_Particulares');

y para S3.2 tenemos:

> let Spic = model('S3_Publicos', spicSchema,'S3_Publicos');

 

Información técnica más específica sobre moongose se puede encontrar  [Aquí](https://mongoosejs.com/docs/models.html).

### sampleData.js ###

Este fichero contiene valores para cada elemento del esquema que se definió en *models.js* sirve como plantilla de donde se irán tomando datos para poblar la colección correspondiente.
sampleData cuenta con funciones que "eligen" un valor de cada "campo" de forma aleatoria para ir formando los documentos/registros que se almacenarán en MongoDB.

El resultado de estas funciones es exportado para poder ser utilizado por otras instancias de nodeJS.

### createDataS2.js , createDataS3_Particulares.js y ###
### createDataS3_Publicos###


Estos son los ficheros que ejecutan la aplicación completa, uno por cada sistema.

Al requerir 

 *models.js* , *db_conf.js*  y *sampleData.js* 

estamos indicando que usaremos el **esquema diseñado en models.js** para insertar información en la base de datos definida por los **parámetros de conexión que se exportaron desde db_conf.js** mediante documentos que fueron creados a partir de los **valores establecidos en sampleData.js** .

Es así como todos los archivos de la estructura se relacionan para lograr el objetivo de generar datos aleatorios y poblar el DWH.


### Preguntas frecuentes ###

* ¿Cómo agrego un "campo" | "atributo" | "columna" extra a una colección?

El campo debe ser añadido a **models.js** y **sample_data.js** del sistema correspondiente (S2, S3.1 o S3.2) para que sea parte del esquema y pueda ser insertado en la base de datos, también es importante incluirlo en el ejecutable de cada sistema(**createData.js**) como *"const"* y agregarlo al *"data.push"* de este mismo fichero.

* ¿Cómo elimino un "campo" | "atributo" | "columna" extra de una colección?

 Bastaría con eliminar la línea de este campo en el *"data.push"* de **createData.js** , sin embargo se recomienda también eliminar las lineas correspondientes en **models.js** y **sample_data**.js

* ¿Qué pasa si no tengo conexión a MongoDB?

Se recomienda revisar los logs de Mongo.
Verificar la correcta especificación de los parámetros de conexión tanto en **.env** como en **db_conf.js** , en caso de que estos dos ficheros se encuentren correctamente configurados y aún así no logremos un resultado exitoso podemos hacer una prueba modificando el archivo **createData.js** reemplazando la línea: 

> mongoose.connect(url, client_options);

por:

> var mongoDB = 'mongodb://txm:1234@35.226.19.219:27017'; 
> mongoose.connect(mongoDB, { useNewUrlParser: true });

sustituye en la variable "*mongoDB*" los datos de tu instancia.


Si el problema persiste contacta al personal de soporte.



























