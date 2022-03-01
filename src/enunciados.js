/*
Muestra todos los nombres de actores
*/
db.actores.distinct("nombre")

/*
Muestra todos los nombres de peliculas
*/
db.actores.distinct("peliculas.titulo")

/*
Muestra los actores que hayan muerto y tengán algún premio
*/
db.actores.find({
    $and: [
        { muerte: { $exists: true } },
        { premiado: { $eq: true } },
    ]
})

/*
Muestra los nombres de los actores que tengan uno o menos hijos y algún premio o
 hayan actuado en una película que ha recaudado más de 1 000 000 000 dólares.
*/
db.actores.find({
    $or: [
        {
            $and: [
                { "familia.hijos": { $lte: 1 } },
                { premiado: { $eq: true } },
            ]
        },
        { "peliculas.recaudacion": { $gt: 1000000000 } }
    ]
}, { _id: 0, nombre: 1 })

/*
Muestra los actores que no esten solteros ni divorciados y
 que alguna de sus películas se estrenase en la decada de los 90 y
 no haya recaudado entre 200 000 000 y 300 000 000 dólares
*/
db.actores.find({
    $and: [
        { "familia.estado_civil": { $nin: [/solter./i, /divorciad./i] } },
        {
            peliculas: {
                $elemMatch:
                {
                    estreno:
                        { $gte: new Date("1990-01-01"), $lte: new Date("2000-01-01") },
                    $nor: [
                        { recaudacion: { $lt: 200000000 } },
                        { recaudacion: { $gt: 300000000 } }
                    ]
                }
            }
        }
    ]
})

/*
Muestra los actores que no sean estadounidenses, que hayan nacido en la segunda mitad del siglo XX y 
 que ninguna de sus películas haya recaudado mas de 100 000 000 de dólares o
 que ninguna de sus películas haya sido estrenada después del año 2000
*/
db.actores.find({
    $and: [
        { pais: { $not: /estados unidos/i } },
        { nacimiento: { $gte: new Date("1950-01-01"), $lt: new Date("2000-01-01") } },
        {
            peliculas:
            {
                $all: [
                    { $elemMatch: { estreno: { $lt: new Date("2000-01-01") } } },
                    { $elemMatch: { recaudacion: { $lte: 100000000 } } }
                ]
            }
        }
    ]
})

/*
Actualiza la fecha de muerte de todos los actores que hayan
 actuado en una película de los vengadores a la fecha actual
*/
db.actores.updateMany(
    { "peliculas.titulo": { $regex: /vengadores/i } },
    { $set: { muerte: new Date() } }
)

db.actores.find(
    { "peliculas.titulo": { $regex: /vengadores/i } },
    { _id: 0, nombre: 1, muerte: 1 }
)

/*
Actualiza las peliculas de todos los actores vivos que no sean estadounidenses y
 añadeles la película "El cine fuera de EEUU", con fecha de estreno 15 de diciembre 2024
 y con una recaudacion de 0 dólares.
*/
db.actores.updateMany(
    {
        $and: [
            { muerto: { $exists: false } },
            { pais: { $not: /estados unidos/i } }
        ]
    },
    {
        $push: {
            "peliculas": {
                titulo: "El cine fuera de EEUU",
                estreno: new Date("2014-12-15"),
                recaudacion: 0.0
            }
        }
    }
)

db.actores.find({
    $and: [
        { muerto: { $exists: false } },
        { pais: { $not: /estados unidos/i } }
    ]
})

/*
Actualiza la recaudación de la película "El cine fuera de EEUU"
 en 400 000 000.56 dólares a todos los actores que hayan participado en ella
*/
db.actores.updateMany(
    { "peliculas.titulo": "El cine fuera de EEUU" },
    { $inc: { "peliculas.$[elem].recaudacion": 400000000.56 } },
    { arrayFilters: [{ "elem.titulo": { $eq: "El cine fuera de EEUU" } }] }
)

db.actores.find({
    "peliculas.titulo": "El cine fuera de EEUU"
})

/*
Actualiza la recaudación de las película de Star Wars 
 multiplicando la recaudación por 3
*/
db.actores.updateMany(
    { "peliculas.titulo": /star wars/i },
    { $mul: { "peliculas.$[elem].recaudacion": 3 } },
    { arrayFilters: [{ "elem.titulo": /stars war/i }] }
)

db.actores.find({
    "peliculas.titulo": /star wars/i
})