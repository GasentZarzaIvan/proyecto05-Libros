db.libros.insertMany([
    {
        titulo: "El Camino de los Reyes",
        coleccion: "El Archivo de las Tormentas",
        escritor: "Brandon Sanderson",
        fecha_publicacion: new Date("2010-8-31"),
        precio: [
            { formato: "tapa dura", precio: 34.90 },
            { formato: "tapa blanda", precio: 14.20 },
            { formato: "kindle", precio: 6.64 }
        ],
        paginas: 1200
    },
    {
        titulo: "Farenheit 451",
        escritor: "Ray Bradbury",
        fecha_publicacion: new Date("1953-8-19"),
        precio: [
            { formato: "tapa dura", precio: 12.95 },
            { formato: "tapa blanda", precio: 10.95 },
            { formato: "kindle", precio: 3.84 }
        ],
        paginas: 192
    },
])

db.escritores.insertMany([
    {
        nombre: "Ray Bradbury",
        fecha_nacimiento: new Date("1920-8-22"),
        fecha_muerte: new Date("2012-6-5"),
        pais: "Estados Unidos",
    },
    {
        nombre: "Brandon Sanderson",
        fecha_nacimiento: new Date("1975-12-19"),
        pais: "Estados Unidos",
    }
])