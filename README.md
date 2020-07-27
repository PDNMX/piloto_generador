# Generador de Datos S2, S3.1, S3.2

## Funcionalidad 

Este generador de datos sintéticos piloto desarrollado en NodeJS, genera información aleatoria sobre Servidores Públicos en Contrataciones, Particulares Sancionados y Servidores Públicos Sancionados que alimenta una base de datos montada sobre MongoDB. Esta información es producida de acuerdo con esquemas definidos a través del catálogo de datos de la Plataforma Digital Nacional (PDN) que posteriormente serán consultados por medio de API's.

El usuario podrá guardar información en la base de datos que él mismo defina, únicamente dando como parámetro de entrada el nombre del sistema en cuestión y el número de documentos a crear.

## Pre - requisitos

Versión estable SLP (soporte de largo-plazo) de NodeJs y NPM previamente instalados, si no se cuenta con ellos puede descargarlos del siguiente enlace [Aquí](https://nodejs.org/en/download/).
MongoDB Previamente instalado y configurado. Se asume que el usuario conoce ya las credenciales asignadas a la base de datos, esta información es indispensable. 
Se recomienda haber leído este documento en su totalidad antes de replicar el generador de datos de manera local.


Especificaciones Técnicas 

El piloto ha sido desarrollado sobre las siguientes versiones de sus componentes:

NodeJS v12.18.2
NPM 6.14.5
MongoDB 4.2
Express 4.16.1*
Mongoose 5.9.22

## **Creando Infraestructura** 

Este apartado tiene como objetivo mostrar los pasos a seguir para crear la infraestructura de la aplicación desde cero (directorios, dependencias, comandos asociados, etc) para su ejecución en un ambiente de desarrollo.
Se usan tres proyectos: uno para S2, uno para S3.1 y uno más para S3.2. Cada proyecto estará generando información que será almacenada en diferentes bases de datos y en una colección con el mismo nombre, por lo tanto, los pasos aquí descritos deberán ejecutarse en su totalidad para cada sistema/proyecto.
Los detalles de cada instrucción y explicación del código se pueden encontrar en la documentación oficial de la aplicación.

### Sistema S2 Servidores Públicos en Contrataciones

Como primera instancia, se debe trabajar sobre el directorio donde se creará el generador de datos que almacenará información del sistema S2, el equipo de TXM Global ha elegido determinado path como espacio de trabajo, sin embargo, el usuario puede elegir el que mejor le convenga, en este documento se maneja el siguiente directorio para efecto de demostración:	

`cd /var/opt/apps/piloto_generador/`

El siguiente paso será  crear la base de la aplicación y un archivo llamado package.json que va a contener las dependencias que necesitaremos conforme vayamos agregando funcionalidades, entre ellas la de la base de datos para que la aplicación pueda ejecutar operaciones de Create, Retrieve, Update, y Delete (CRUD) y una más para poder usar variables de ambiente. 

	express S2
	cd /var/opt/apps/piloto_generador/S2
	sudo npm install -save mongoose
	sudo npm install -save dotenv
	
	

Una vez agregadas las dependencias iremos añadiendo los archivos que conforman la arquitectura base.

    cd /var/opt/apps/piloto_generador/S2
    touch models.js
    touch db_conf.js
    touch createDataS2.js
    touch sample_data.js

El contenido de cada modulo de la arquitectura se establece en el código de este repositorio.

### **Sistema S3.2 Particulares Sancionados**

Recordemos que para el sistema S2 habíamos creado un espacio de trabajo en

`/var/opt/apps/piloto_generador/S2`

Ahora crearemos uno más para Sancionados.

```
cd /var/opt/apps/piloto_generador
express S3_Particulares
cd /var/opt/apps/piloto_generador/S3_Particulares
sudo npm install -save mongoose
sudo npm install -save dotenv
```

Dentro de este directorio replicaremos los pasos en el bloque del sistema S2.

```
cd /var/opt/apps/piloto_generador/S3_Particulares
touch models.js
touch db_conf.js
touch createDataS3_Particulares.js
touch sample_data.js
```

### **Sistema S3.1 Servidores públicos Sancionados**

Por último crearemos y nos moveremos al espacio de trabajo elegido para S3.1 y llevaremos a cabo la misma rutina

```
cd /var/opt/apps/piloto_generador/
express S3_Publicos
cd /var/opt/apps/piloto_generador/S3_Publicos
sudo npm install -save mongoose
sudo npm install -save dotenv
touch models.js
touch db_conf.js
touch createDataS3_Particulares.js
touch sample_data.js
```

## Código NodeJS

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
> useUnifiedTopology: true,
> useNewUrlParser: true
> };

Posteriormente exporta los parámetros que se crearon para que puedan ser utilizados por otras instancias de nodeJS
>
> module.exports = {
>   url,
>   client_options
> };



### models.js ###

models.js fue creado para definir los esquemas de cada sistema y poder guardar la información de acuerdo al catálogo de la PDN.
Se está utilizando mongoose como herramienta para insertar documentos en mongoDB por lo tanto la definición de estos esquemas es prioritaria.

Las líneas de código más importantes en models.js se explican a continuación.


> const { Schema, model } = require('mongoose');

Es la primera línea, indica que estaremos usando mongoose como herramienta para añadir información a la base de datos bajo un esquema definido. 

> let Spic = model('Spic', spicSchema,'spic');

En esta línea se define el nombre de la colección donde vamos a almacenar los documentos creados, esta instrucción es la misma para cada sistema dado que almacenaremos la información en la misma colección pero en una base de datos diferente.

 

Información técnica más específica sobre mongoose se puede encontrar  [Aquí](https://mongoosejs.com/docs/models.html).

### sampleData.js ###

Este fichero contiene valores para cada elemento del esquema que se definió en *models.js* sirve como plantilla de donde se irán tomando datos para poblar la colección correspondiente.
sampleData cuenta con funciones que "eligen" un valor de cada "campo" de forma aleatoria para ir formando los documentos/registros que se almacenarán en MongoDB.

El resultado de estas funciones es exportado para poder ser utilizado por otras instancias de nodeJS.

### createDataS2.js , createDataS3_Particulares.js y ###
### createDataS3_Publicos


Estos son los ficheros que ejecutan la aplicación completa, uno por cada sistema.

Al requerir 

 *models.js* , *db_conf.js*  y *sampleData.js* 

estamos indicando que usaremos el **esquema diseñado en models.js** para insertar información en la base de datos definida por los **parámetros de conexión que se exportaron desde db_conf.js** mediante documentos que fueron creados a partir de los **valores establecidos en sampleData.js** .

Es así como todos los archivos de la estructura se relacionan para lograr el objetivo de generar datos aleatorios y poblar el DWH.



## **Ejecutando Generador**

Para ejecutar el generador de datos solo necesitamos especificar el sistema y número de documentos a crear.

```
cd /var/opt/apps/piloto_generador/S2
node createDataS2.js 3 

cd /var/opt/apps/piloto_generador/S3_Particularesnode 
createDataS3_Particulares.js 3

cd /var/opt/apps/piloto_generador/S3_Publicos
node createDataS3_Publicos.js 3
```




## Preguntas Frecuentes

* ¿Cómo agrego un "campo" | "atributo" | "columna" extra en una colección?

El campo debe ser añadido a **models.js** y **sample_data.js** del sistema correspondiente (S2, S3.1 o S3.2) para que sea parte del esquema y pueda ser insertado en la base de datos, también es importante incluirlo en el ejecutable de cada sistema(**createData.js**) como *"const"* y agregarlo al *"data.push"* de este mismo fichero.

* ¿Cómo elimino un "campo" | "atributo" | "columna" extra de una colección?

 Bastaría con eliminar la línea de este campo en el *"data.push"* de **createData.js** , sin embargo se recomienda también eliminar las líneas correspondientes en **models.js** y **sample_data.js**

* ¿Qué pasa si no tengo conexión a MongoDB?

Se recomienda revisar los logs de Mongo.
Verificar la correcta especificación de los parámetros de conexión tanto en **.env** como en **db_conf.js** , en caso de que estos dos ficheros se encuentren correctamente configurados y aún así no logremos un resultado exitoso podemos hacer una prueba modificando el archivo **createData.js** reemplazando la línea: 

> mongoose.connect(url, client_options);

por:

> var mongoDB = 'mongodb://txm:1234@35.226.19.219:27017'; 
> mongoose.connect(mongoDB, { useNewUrlParser: true });

sustituye en la variable "*mongoDB*" los datos de tu instancia.


Si el problema persiste contacta al personal de soporte.