db.libros.drop()
db.libros.insertMany([
    {
        titulo: "El Camino de los Reyes",
        coleccion: "El Archivo de las Tormentas",
        escritor: ["Brandon Sanderson"],
        fecha_publicacion: new Date("2010-8-31"),
        ediciones: [
            { formato: "tapa dura", precio: 34.90, disponible: true },
            { formato: "tapa blanda", precio: 14.20, disponible: false },
            { formato: "kindle", precio: 6.64, disponible: true }
        ],
        paginas: 1200
    },
    {
        titulo: "Farenheit 451",
        escritor: ["Ray Bradbury"],
        fecha_publicacion: new Date("1953-8-19"),
        ediciones: [
            { formato: "tapa dura", precio: 12.95, disponible: true },
            { formato: "tapa blanda", precio: 10.95, disponible: true },
            { formato: "kindle", precio: 3.84, disponible: false }
        ],
        paginas: 192
    },
    {
        titulo: "Cronicas marcianas",
        escritor: ["Ray Bradbury"],
        fecha_publicacion: new Date("1950-1-1"),
        ediciones: [
            { formato: "tapa dura", precio: 24.95, disponible: false },
            { formato: "tapa blanda", precio: 7.95, disponible: true },
            { formato: "kindle", precio: 6.72, disponible: true }
        ],
        paginas: 331
    },
    {
        titulo: "Palabras radiantes",
        coleccion: "El Archivo de las Tormentas",
        escritor: ["Brandon Sanderson"],
        fecha_publicacion: new Date("2014-3-4"),
        ediciones: [
            { formato: "tapa dura", precio: 34.90, disponible: false },
            { formato: "tapa blanda", precio: 14.95, disponible: true },
            { formato: "kindle", precio: 9.99, disponible: true }
        ],
        paginas: 1248
    },
    {
        titulo: "Juramentada",
        coleccion: "El Archivo de las Tormentas",
        escritor: ["Brandon Sanderson"],
        fecha_publicacion: new Date("2017-11-14"),
        ediciones: [
            { formato: "tapa dura", precio: 34.90, disponible: true },
            { formato: "kindle", precio: 9.99, disponible: true }
        ],
        paginas: 1408
    },
    {
        titulo: "El Ritmo de la Guerra",
        coleccion: "El Archivo de las Tormentas",
        escritor: ["Brandon Sanderson"],
        fecha_publicacion: new Date("2020-11-17"),
        ediciones: [
            { formato: "tapa dura", precio: 34.90, disponible: false },
            { formato: "kindle", precio: 12.99, disponible: true }
        ],
        paginas: 1408
    },
    {
        titulo: "Maquinas mortales",
        coleccion: "Maquinas mortales",
        escritor: ["Philip Reeve"],
        fecha_publicacion: new Date("2001-11-16"),
        ediciones: [
            { formato: "tapa blanda", precio: 17.95, disponible: true },
            { formato: "kindle", precio: 7.99, disponible: true }
        ],
        paginas: 368
    },
    {
        titulo: "El oro del depredador",
        coleccion: "Maquinas mortales",
        escritor: ["Philip Reeve"],
        fecha_publicacion: new Date("2003-9-19"),
        ediciones: [
            { formato: "tapa blanda", precio: 17.95, disponible: true },
            { formato: "kindle", precio: 7.99, disponible: true }
        ],
        paginas: 336
    },
    {
        titulo: "Inventos infernales",
        coleccion: "Maquinas mortales",
        escritor: ["Philip Reeve"],
        fecha_publicacion: new Date("2005-3-18"),
        ediciones: [
            { formato: "tapa blanda", precio: 17.95, disponible: true },
            { formato: "kindle", precio: 7.99, disponible: false }
        ],
        paginas: 352
    },
    {
        titulo: "Una llanura tenebrosa",
        coleccion: "Maquinas mortales",
        escritor: ["Philip Reeve"],
        fecha_publicacion: new Date("2006-3-20"),
        ediciones: [
            { formato: "tapa blanda", precio: 17.95, disponible: true },
            { formato: "kindle", precio: 7.99, disponible: true }
        ],
        paginas: 544
    },
    {
        titulo: "La Comunidad del Anillo",
        coleccion: "El Señor de los Anillos",
        escritor: ["J. R. R. Tolkien"],
        fecha_publicacion: new Date("1954-6-29"),
        ediciones: [
            { formato: "tapa dura", precio: 20.95, disponible: true },
            { formato: "tapa blanda", precio: 10.95, disponible: true },
            { formato: "kindle", precio: 6.72, disponible: false }
        ],
        paginas: 488
    },
    {
        titulo: "Las Dos Torres",
        coleccion: "El Señor de los Anillos",
        escritor: ["J. R. R. Tolkien"],
        fecha_publicacion: new Date("1954-11-11"),
        ediciones: [
            { formato: "tapa dura", precio: 20.95, disponible: true },
            { formato: "tapa blanda", precio: 10.95, disponible: true },
            { formato: "kindle", precio: 4.80, disponible: true }
        ],
        paginas: 408
    },
    {
        titulo: "El Retorno del Rey",
        coleccion: "El Señor de los Anillos",
        escritor: ["J. R. R. Tolkien"],
        fecha_publicacion: new Date("1955-8-20"),
        ediciones: [
            { formato: "tapa dura", precio: 20.95, disponible: true },
            { formato: "tapa blanda", precio: 10.95, disponible: true },
            { formato: "kindle", precio: 4.80, disponible: false }
        ],
        paginas: 520
    },
    {
        titulo: "Don Quijote De La Mancha",
        escritor: ["Miguel de Cervantes"],
        fecha_publicacion: new Date("1605-1-1"),
        ediciones: [
            { formato: "tapa dura", precio: 14.90, disponible: false },
        ],
        paginas: 1376
    },
    {
        titulo: "Buenos Presagios",
        escritor: ["Terry Pratchett", "Neil Gaiman"],
        fecha_publicacion: new Date("1990-5-10"),
        ediciones: [
            { formato: "tapa blanda", precio: 8.95, disponible: true },
        ],
        paginas: 400
    },
    {
        titulo: "El Lado oscuro del Sol",
        escritor: ["Terry Pratchett"],
        fecha_publicacion: new Date("1976-1-26"),
        ediciones: [
            { formato: "tapa dura", precio: 27.90, disponible: false },
            { formato: "tapa blanda", precio: 11.66, disponible: true },
        ],
        paginas: 240
    },
    {
        titulo: "Humo y espejos",
        escritor: ["Neil Gaiman"],
        fecha_publicacion: new Date("1998-8-6"),
        ediciones: [
            { formato: "tapa blanda", precio: 19.95, disponible: true },
            { formato: "kindle", precio: 9.49, disponible: false }
        ],
        paginas: 400
    },
    {
        titulo: "Antología de la literatura griega",
        escritor: ["Carlos García Gual", "Antonio Guzmán Guerra"],
        fecha_publicacion: new Date("2015-4-23"),
        ediciones: [
            { formato: "tapa blanda", precio: 16.10, disponible: true }
        ],
        paginas: 520
    },
])

db.escritores.drop()
db.escritores.insertMany([
    {
        nombre: "Ray Bradbury",
        fecha_nacimiento: new Date("1920-8-22"),
        fecha_muerte: new Date("2012-6-5"),
        pais: "Estados Unidos",
        premios: ["Toalett de Narrativa", "Nobel de la Literatura Abstracta"]
    },
    {
        nombre: "Brandon Sanderson",
        fecha_nacimiento: new Date("1975-12-19"),
        pais: "Estados Unidos",
        premios: ["Serviette", "Havlu de Fantasia y Ciencia Ficcion"]
    },
    {
        nombre: "Philip Reeve",
        fecha_nacimiento: new Date("1966-2-28"),
        pais: "Reino Unido",
    },
    {
        nombre: "J. R. R. Tolkien",
        fecha_nacimiento: new Date("1892-1-3"),
        fecha_muerte: new Date("1973-9-2"),
        pais: "Estado Libre de Orange",
        premios: ["Serviette"]
    },
    {
        nombre: "Miguel de Cervantes",
        fecha_nacimiento: new Date("1547-9-29"),
        fecha_muerte: new Date("1616-4-22"),
        pais: "España",
        premios: ["Miguel de Cervantes"]
    },
    {
        nombre: "Neil Gaiman",
        fecha_nacimiento: new Date("1960-11-10"),
        pais: "Reino Unido",
        premios: ["Raflar de Literatura Anglosajona", "Miguel de Cervantes"]
    },
    {
        nombre: "Terry Pratchett",
        fecha_nacimiento: new Date("1948-4-28"),
        fecha_muerte: new Date("2015-5-22"),
        pais: "Reino Unido",
    },
    {
        nombre: "Carlos García Gual",
        fecha_nacimiento: new Date("1983-6-14"),
        pais: "España",
        premios: ["Nobel de la Literatura Abstracta"]
    },
    {
        nombre: "Antonio Guzmán Guerra",
        fecha_nacimiento: new Date("1958-2-8"),
        fecha_muerte: new Date("2022-4-22"),
        pais: "España",
    },
])

db.sagas.drop()