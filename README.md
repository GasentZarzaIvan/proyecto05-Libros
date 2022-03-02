# proyecto05
Este proyecto contine scripts para una base de datos de MongoDB sobre libros y escritores. Realizado por Iván Gasent Zarza de 1 DAM.

## Base de datos
La base de datos contiene dos colecciones, una de libros y otra de escritores. La colección libros tiene la siguiente estructura:

```
{
    titulo: "El Camino de los Reyes",
    coleccion: "El Archivo de las Tormentas",
    escritor: "Brandon Sanderson",
    fecha_publicacion: new Date("2010-8-31"),
    ediciones: [
        { formato: "tapa dura", precio: 34.90 },
        { formato: "tapa blanda", precio: 14.20 },
        { formato: "kindle", precio: 6.64 }
    ],
    paginas: 1200
}
```
El campo colección puede no estar presente y los contenidos de ediciones pueden variar.

La colección escritores tiene la siguiente estructura: 

```
{
    nombre: "Ray Bradbury",
    fecha_nacimiento: new Date("1920-8-22"),
    fecha_muerte: new Date("2012-6-5"),
    pais: "Estados Unidos",
}
```
El campo fecha_muerte puede no estar presente.

## Estructura
El repositorio tiene la siguiente estructura:
>README.md
>
>src
>>inserts.js
>>
>>enunciados.js
>
>doc
>>documentacion05.pdf
>
>datos
>>documentacionImportExport.pdf
>>
>>exportLibrosEscritores.json

La carpeta `src` contiene dos scripts, uno para insertar los datos de la base de datos y otro con enunciados y respuestas usando el comando aggregate, `doc` contiene la documentación donde se explica la base de datos y los comandos usados, `datos` contiene una copia de la base de datos creada usando mongoexport y documentación sobre como usar los comandos mongoimport y mongoexport y `README.md` es este archivo.
