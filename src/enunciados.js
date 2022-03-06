/*
Debido a la reciente entrega de los premios Nobel de la Literatura Abstracta,
 los precios de todos los libros de autores que han recibido alguno han
 aumentado en un 83% en versiones fisicas y un 68% en versiones digitales.
*/

db.escritores.aggregate([{
        $match: {
            premios: /Nobel de la Literatura Abstracta/i
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
        $unwind: {
            path: "$libros",
        }
    },
    {
        $unwind: {
            path: "$libros.ediciones",
        }
    },
    {
        $project: {
            _id: 0,
            titulo: "$libros.titulo",
            escritor: "$libros.escritor",
            fecha_publicacion: "$libros.fecha_publicacion",
            "ediciones.formato": "$libros.ediciones.formato",
            "ediciones.precio": {
                $cond: {
                    if: {
                        $eq: ["$libros.ediciones.formato", /kindle/i]
                    },
                    then: {
                        $round: [{
                            $multiply: ["$libros.ediciones.precio", 1.68]
                        }, 2]
                    },
                    else: {
                        $round: [{
                            $multiply: ["$libros.ediciones.precio", 1.83]
                        }, 2]
                    }
                }
            },
            "ediciones.disponible": "$libros.ediciones.disponible",
        }
    },
    {
        $group: {
            _id: "$titulo",
            escritor: {
                $first: "$escritor"
            },
            fecha_publicacion: {
                $first: "$fecha_publicacion"
            },
            ediciones: {
                $push: "$ediciones"
            }
        }
    }
]).pretty()

/*
Queremos conocer el nombre y el precio de un libro escrito por alguien que haya nacido en 1970 o despues,
 tenga una version en kindle disponible y que cueste menos de 10€.
 Queremos que aparezcan por orden de precio descendente y si tienen el mismo precio ordenado de forma alfabetica.
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
    },
    {
        $sort: {
            precio: -1,
            titulo: 1
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
Debido a un fallo informático, los libros que han sido publicados a partir del 2000 por escritores que aun viven
 o por españoles que hayan muerto antes de 1950 se han insertado a la base de datos con su disponibilidad invertida.
*/

db.libros.aggregate([{
        $lookup: {
            from: "escritores",
            localField: "escritor",
            foreignField: "nombre",
            as: "escritores",
        }
    },
    {
        $unwind: "$escritores"
    },
    {
        $match: {
            $or: [{
                    "fecha_publicacion": {
                        $gte: new Date("2000-1-1")
                    },
                    "escritores.fecha_muerte": {
                        $exists: false
                    }
                },
                {
                    $and: [{
                        "escritores.pais": /espa..a/i
                    }, {
                        "escritores.fecha_muerte": {
                            $lt: new Date("1950-1-1")
                        }
                    }]
                }
            ]
        }
    },
    {
        $unwind: "$ediciones"
    },
    {
        $project: {
            _id: 0,
            titulo: "$titulo",
            escritor: 1,
            fecha_publicacion: 1,
            "ediciones.formato": 1,
            "ediciones.precio": 1,
            "ediciones.disponible": {
                $cond: {
                    if: {
                        $eq: ["$ediciones.disponible", true]
                    },
                    then: false,
                    else: true
                }
            }
        }
    },
    {
        $group: {
            _id: "$titulo",
            escritor: {
                $first: "$escritor"
            },
            fecha_publicacion: {
                $first: "$fecha_publicacion"
            },
            ediciones: {
                $push: "$ediciones"
            }
        }
    }
]).pretty()