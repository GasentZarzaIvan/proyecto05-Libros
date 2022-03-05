/*
Queremos conocer el nombre y el precio de un libro escrito por alguien que haya nacido en 1970 o despues,
 tenga una version en kindle disponible y que cueste menos de 10€
*/
db.escritores.aggregate([{
    $match: {
        fecha_nacimiento: {
            $gte: new Date("1970-1-1")
        }
    }
},
{
    $lookup: {
        from: "libros",
        localField: "nombre",
        foreignField: "escritor",
        as: "libros",
    }
},
{
    $unwind: "$libros"
},
{
    $match: {
        "libros.ediciones": {
            $elemMatch: {
                formato: /kindle/i,
                precio: {
                    $lte: 10
                },
                disponible: true
            }
        }
    }
},
{
    $project: {
        _id: 0,
        titulo: "$libros.titulo",
        escritores: "$libros.nombre",
        ediciones: "$libros.ediciones"
    }
},
{
    $unwind: "$ediciones"
},
{
    $match: {
        "ediciones.formato": /kindle/i
    }
},
{
    $project: {
        _id: 0,
        titulo: "$titulo",
        escritores: "$nombre",
        formato: "$ediciones.formato",
        precio: {
            $concat: [{
                $toString: "$ediciones.precio"
            }, " €"]
        }
    }
}
]).pretty()

/*
Queremos crear una coleccion de sagas de libros que tenga el nombre de la saga,
 los autores, los libros que la componen, el numero de paginas total y la media de paginas por libro:
*/
db.libros.aggregate([{
    $match: {
        coleccion: {
            $exists: true
        }
    }
},
{
    $group: {
        _id: "$coleccion",
        autores: {
            $push: "$escritor"
        },
        libros: {
            $push: "$titulo"
        },
        paginas_totales: {
            $sum: "$paginas"
        },
        paginas_media: {
            $avg: "$paginas"
        }
    }
},
{
    $project: {
        _id: 1,
        autores: {
            $reduce: {
                input: "$autores",
                initialValue: [],
                in: {
                    $setUnion: ["$$value", "$$this"]
                }
            }
        },
        libros: "$libros",
        paginas_totales: "$paginas_totales",
        paginas_media: "$paginas_media"
    }
},
{
    $out: "sagas"
}
])
db.sagas.find().pretty()

/*

*/