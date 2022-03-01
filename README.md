# proyecto03
Este proyecto contine scripts para una base de datos de MongoDB sobre actores. Realizado por Iván Gasent Zarza de 1 DAM.

## Base de datos
La base de datos contiene información sobre actores, cada documento tiene la siguiente estructura:
```
{
        nombre: "Carrie Fisher",
        nacimiento: new Date("1956-10-21"),
        muerte: new Date("2016-12-27"),
        pais: "Estados Unidos",
        familia: {
            estado_civil: "divorciada",
            hijos: 1
        },
        peliculas: [
            {
                titulo: "Star Wars: Episodio IV - Una nueva esperanza",
                estreno: new Date(1977 - 05 - 25),
                recaudacion: 775398007.57
            },
            {
                titulo: "Star Wars: Episodio V - El Imperio Contraataca",
                estreno: new Date(1980 - 05 - 20),
                recaudacion: 538375067.89
            },
            {
                titulo: "Star Wars: Episodio VI - El regreso del Jedi",
                estreno: new Date(1983 - 05 - 25),
                recaudacion: 475106177.50
            },
            {
                titulo: "Star Wars: Episodio VII - El despertar de la fuerza",
                estreno: new Date(2015 - 12 - 18),
                recaudacion: 2068223624.23
            },
            {
                titulo: "Star Wars: Episodio VIII - Los últimos Jedi",
                estreno: new Date(2017 - 12 - 15),
                recaudacion: 1332539889.66
            },
            {
                titulo: "Star Wars: Episodio IX - El ascenso de Skywalker",
                estreno: new Date(2019 - 12 - 19),
                recaudacion: 1074144248.85
            },
            {
                titulo: "Rogue One: Una historia de Star Wars",
                estreno: new Date(2019 - 12 - 19),
                recaudacion: 1074144248.85
            },
        ],
        premiado: true
    }
```
El campo muerte puede no aparecer si el actor sigue vivo.

## Estructura
El repositorio tiene la siguiente estructura:
>README.md
>
>src
>>insertActores.js
>>enunciadosActores.js
>
>doc
>>documentacion03.pdf

La carpeta `src` contiene dos scripts, uno para insertar los datos de la base de datos y otro con enunciados y respuestas usando el comando find, `doc` contiene la documentación donde se explica la base de datos y los comandos usados y `README.md` es este archivo.
