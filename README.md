# Generador de Datos S2, S3.1, S3.2
## Introducción
Este generador de datos sintéticos piloto desarrollado en NodeJS, genera información aleatoria sobre Servidores Públicos en Contrataciones, Particulares Sancionados y Servidores Públicos Sancionados que alimenta una base de datos montada sobre MongoDB. Esta información es producida de acuerdo con esquemas definidos a través del catálogo de datos de la Plataforma Digital Nacional (PDN) que posteriormente serán consultados por medio de API's.

El usuario podrá guardar información en la base de datos que él mismo defina, únicamente dando como parámetro de entrada el nombre del sistema en cuestión y el número de documentos a crear.

El proyecto ha sido desarrollado sobre las siguientes versiones de sus componentes:
* NodeJS v12.18.2
* NPM 6.14.5
* MongoDB 4.2
* Express 4.16.1*
* Mongoose 5.9.22

Este proyecto forma parte de una solución que contempla las APIs del S2 y S3 en ambiente de desarrollo, para reproducirlo completamente, se sugiere el siguiente orden:
* [Instalación](https://docs.google.com/document/d/1aQ0_f3sGiyE94anGy2pwOFn6KLucYTc3ZkrWM8rikIo/edit?usp=sharing): preparación del ambiente de desarrollo.
* [Generador](https://github.com/PDNMX/piloto_generador): generador de datos sintéticos para el S2 y S3. 
* [OAuth2.0](https://github.com/PDNMX/piloto_oauth2.0): implementación del protocolo de autorización.
* [API S2](https://github.com/PDNMX/piloto_s2): API para conectarse a la PDN en el Sistema 2. 
* [API S3S](https://github.com/PDNMX/piloto_s3s): API para conectarse a la PDN en el Sistema 3 Servidores sancionados.
* [API S3P](https://github.com/PDNMX/piloto_s3p): API para conectarse a la PDN en el Sistema 3 Particulares Sancionados. 


## Documentación

* [Documentación Generador](https://docs.google.com/document/d/16Lct0jfrzJ02pdWvW-x8oOfnhTyyZqk93xE2OwzzerI/edit?usp=sharing)
* [Documentación completa](https://drive.google.com/drive/folders/1aQLhmtKwbWiTy20Ei9k-zy6hneUuYTn2?usp=sharing)


