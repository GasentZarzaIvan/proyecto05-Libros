db.actores.insertOne(
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
                estreno: new Date("1977 - 05 - 25"),
                recaudacion: 775398007.57
            },
            {
                titulo: "Star Wars: Episodio V - El Imperio Contraataca",
                estreno: new Date("1980 - 05 - 20"),
                recaudacion: 538375067.89
            },
            {
                titulo: "Star Wars: Episodio VI - El regreso del Jedi",
                estreno: new Date("1983-05-25"),
                recaudacion: 475106177.50
            },
            {
                titulo: "Star Wars: Episodio VII - El despertar de la fuerza",
                estreno: new Date("2015-12-18"),
                recaudacion: 2068223624.23
            },
            {
                titulo: "Star Wars: Episodio VIII - Los últimos Jedi",
                estreno: new Date("2017-12-15"),
                recaudacion: 1332539889.66
            },
            {
                titulo: "Star Wars: Episodio IX - El ascenso de Skywalker",
                estreno: new Date("2019-12-19"),
                recaudacion: 1074144248.85
            },
            {
                titulo: "Rogue One: Una historia de Star Wars",
                estreno: new Date("2016-12-15"),
                recaudacion: 1074144248.85
            }
        ],
        premiado: true
    }
)

db.actores.insertMany([
    {
        nombre: "Mark Hamill",
        nacimiento: new Date("1951-09-25"),

        pais: "Estados Unidos",
        familia: {
            estado_civil: "casado",
            hijos: 3
        },
        peliculas: [
            {
                titulo: "Star Wars: Episodio IV - Una nueva esperanza",
                estreno: new Date("1977 - 05 - 25"),
                recaudacion: 775398007.57
            },
            {
                titulo: "Star Wars: Episodio V - El Imperio Contraataca",
                estreno: new Date("1980 - 05 - 20"),
                recaudacion: 538375067.89
            },
            {
                titulo: "Star Wars: Episodio VI - El regreso del Jedi",
                estreno: new Date("1983-05-25"),
                recaudacion: 475106177.50
            },
            {
                titulo: "Star Wars: Episodio VII - El despertar de la fuerza",
                estreno: new Date("2015-12-18"),
                recaudacion: 2068223624.23
            },
            {
                titulo: "Star Wars: Episodio VIII - Los últimos Jedi",
                estreno: new Date("2017-12-15"),
                recaudacion: 1332539889.66
            },
            {
                titulo: "Star Wars: Episodio IX - El ascenso de Skywalker",
                estreno: new Date("2019-12-19"),
                recaudacion: 1074144248.85
            },
            {
                titulo: "Kingsman: Servicio secreto",
                estreno: new Date("2015 - 12 - 13"),
                recaudacion: 414998123.22
            }
        ],
        premiado: true
    },
    {
        nombre: "Harrison Ford",
        nacimiento: new Date("1942-07-13"),

        pais: "Estados Unidos",
        familia: {
            estado_civil: "casado",
            hijos: 5
        },
        peliculas: [
            {
                titulo: "Star Wars: Episodio IV - Una nueva esperanza",
                estreno: new Date("1977 - 05 - 25"),
                recaudacion: 775398007.57
            },
            {
                titulo: "Star Wars: Episodio V - El Imperio Contraataca",
                estreno: new Date("1980 - 05 - 20"),
                recaudacion: 538375067.89
            },
            {
                titulo: "Star Wars: Episodio VI - El regreso del Jedi",
                estreno: new Date("1983-05-25"),
                recaudacion: 475106177.50
            },
            {
                titulo: "Star Wars: Episodio VII - El despertar de la fuerza",
                estreno: new Date("2015-12-18"),
                recaudacion: 2068223624.23
            },
            {
                titulo: "Star Wars: Episodio VIII - Los últimos Jedi",
                estreno: new Date("2017-12-15"),
                recaudacion: 1332539889.66
            },
            {
                titulo: "Star Wars: Episodio IX - El ascenso de Skywalker",
                estreno: new Date("2019-12-19"),
                recaudacion: 1074144248.85
            },

            {
                titulo: "Blade Runner",
                estreno: new Date("1982-06-25"),
                recaudacion: 33770893.45
            },
            {
                titulo: "Blade Runner 2049",
                estreno: new Date("2017-10-03"),
                recaudacion: 259239658.30
            },
            {
                titulo: "Indiana Jones en busca del arca perdida",
                estreno: new Date("1981-06-12"),
                recaudacion: 389925971.74
            },
            {
                titulo: "Indiana Jones y el templo maldito",
                estreno: new Date("1981-06-12"),
                recaudacion: 333107271.39
            }
        ],
        premiado: true
    },
    {
        nombre: "Alec Guinness",
        nacimiento: new Date("1914-04-02"),
        muerte: new Date("2000-08-05"),
        pais: "Reino Unido",
        familia: {
            estado_civil: "casado",
            hijos: 1
        },
        peliculas: [
            {
                titulo: "Star Wars: Episodio IV - Una nueva esperanza",
                estreno: new Date("1977 - 05 - 25"),
                recaudacion: 775398007.57
            },
            {
                titulo: "Star Wars: Episodio V - El Imperio Contraataca",
                estreno: new Date("1980 - 05 - 20"),
                recaudacion: 538375067.89
            },
            {
                titulo: "Star Wars: Episodio VI - El regreso del Jedi",
                estreno: new Date("1983-05-25"),
                recaudacion: 475106177.50
            },
            {
                titulo: "Doctor Zhivago",
                estreno: new Date("1965-12-22"),
                recaudacion: 111700000.00
            },
            {
                titulo: "El puente sobre el río Kwai",
                estreno: new Date("1957-10-02"),
                recaudacion: 30600000.92
            },
            {
                titulo: "Lawrence de Arabia",
                estreno: new Date("1962-12-10"),
                recaudacion: 70000000.92
            },
            {
                titulo: "El paraíso del capitán",
                estreno: new Date("1953-06-09"),
                recaudacion: 1000000.25
            }
        ],
        premiado: true
    },
    {
        nombre: "Chris Hemsworth",
        nacimiento: new Date("1983-08-11"),

        pais: "Australia",
        familia: {
            estado_civil: "casado",
            hijos: 3
        },
        peliculas: [
            {
                titulo: "Thor",
                estreno: new Date("2011-04-17"),
                recaudacion: 449326618.75
            },
            {
                titulo: "Los Vengadores",
                estreno: new Date("2012-04-11"),
                recaudacion: 1519000000.93
            },
            {
                titulo: "Vengadores: Infinity War",
                estreno: new Date("2018-04-27"),
                recaudacion: 2048359754.50
            },
            {
                titulo: "Vengadores: Endgame",
                estreno: new Date("2019-04-22"),
                recaudacion: 2800400000.74
            },
            {
                titulo: "Men In Black: Internacional",
                estreno: new Date("2019-06-14"),
                recaudacion: 253254676.45
            },
            {
                titulo: "Vengadores: La era de Ultrón",
                estreno: new Date("2015-04-13"),
                recaudacion: 1405000000.38
            },
            {
                titulo: "Tyler Rake",
                estreno: new Date("2020-04-24"),
                recaudacion: 65000000.63
            }
        ]
    },
    {
        nombre: "Antonio Banderas",
        nacimiento: new Date("1960-08-10"),

        pais: "España",
        familia: {
            estado_civil: "divorciado",
            hijos: 1
        },
        peliculas: [
            {
                titulo: "Spy Kids",
                estreno: new Date("2001-08-24"),
                recaudacion: 147900000.39
            },
            {
                titulo: "Spy Kids 2: La isla de los sueños perdidos",
                estreno: new Date("2002-08-07"),
                recaudacion: 119723358.93
            },
            {
                titulo: "Spy Kids 3-D: Game Over",
                estreno: new Date("2003-06-25"),
                recaudacion: 197000000.26
            },
            {
                titulo: "Shrek 2",
                estreno: new Date("2004-05-21"),
                recaudacion: 924838758.74
            },
            {
                titulo: "Shrek tercero",
                estreno: new Date("2007-05-18"),
                recaudacion: 798958162.23
            },
            {
                titulo: "Shrek 4: Felices para siempre",
                estreno: new Date("2010-05-21"),
                recaudacion: 752600867.55
            },
            {
                titulo: "Dolor y Gloria",
                estreno: new Date("2019-03-22"),
                recaudacion: 38080034.63
            },
            {
                titulo: "Matador",
                estreno: new Date("1986-03-07"),
                recaudacion: 816428.46
            }
        ],
        premiado: true
    },
    {
        nombre: "Dave Bautista",
        nacimiento: new Date("1969-01-18"),

        pais: "Estados Unidos",
        familia: {
            estado_civil: "divorciado",
            hijos: 3
        },
        peliculas: [
            {
                titulo: "Riddick 3",
                estreno: new Date("2013-09-13"),
                recaudacion: 98337295.48
            },
            {
                titulo: "Guardianes de la Galaxia",
                estreno: new Date("2014-06-21"),
                recaudacion: 773300000.12
            },
            {
                titulo: "Blade Runner 2049",
                estreno: new Date("2017-10-03"),
                recaudacion: 259239658.30
            },
            {
                titulo: "Vengadores: Infinity War",
                estreno: new Date("2018-04-27"),
                recaudacion: 2048359754.50
            },
            {
                titulo: "Vengadores: Endgame",
                estreno: new Date("2019-04-22"),
                recaudacion: 2800400000.74
            },
            {
                titulo: "Dune",
                estreno: new Date("2021-09-03"),
                recaudacion: 334600000.43
            },
            {
                titulo: "Hotel Artemmis",
                estreno: new Date("2018-06-08"),
                recaudacion: 12751789.95
            },
            {
                titulo: "Ejército de los muertos",
                estreno: new Date("2021-05-21"),
                recaudacion: 780000.00
            },
            {
                titulo: "Guardianes de la Galaxia Vol 2",
                estreno: new Date("2017-04-10"),
                recaudacion: 863800000.20
            },
        ],
        premiado: false
    },
    {
        nombre: "Michael Rooker",
        nacimiento: new Date("1955-04-06"),

        pais: "Estados Unidos",
        familia: {
            estado_civil: "casado",
            hijos: 2
        },
        peliculas: [
            {
                titulo: "JFK: Caso abierto",
                estreno: new Date("1991-12-20"),
                recaudacion: 205400000.22
            },
            {
                titulo: "Guardianes de la Galaxia",
                estreno: new Date("2014-06-21"),
                recaudacion: 773300000.12
            },
            {
                titulo: "Guardianes de la Galaxia Vol 2",
                estreno: new Date("2017-04-10"),
                recaudacion: 863800000.20
            },
            {
                titulo: "Henry: retrato de un asesino",
                estreno: new Date("1986-09-24"),
                recaudacion: 609939.85
            },
            {
                titulo: "Jumper",
                estreno: new Date("2008-12-04"),
                recaudacion: 222200000.22
            },
            {
                titulo: "Asesinos de reemplazo",
                estreno: new Date("1998-01-12"),
                recaudacion: 19313673.43
            },
            {
                titulo: "Super",
                estreno: new Date("2011-04-01"),
                recaudacion: 422618.00
            },
            {
                titulo: "Por encima de la ley",
                estreno: new Date("1988-05-21"),
                recaudacion: 18800000.81
            }
        ],
        premiado: false
    },
    {
        nombre: "Cameron Boyce",
        nacimiento: new Date("1999-03-28"),
        muerte: new Date("2019-07-28"),
        pais: "Estados Unidos",
        familia: {
            estado_civil: "soltero",
            hijos: 0
        },
        peliculas: [
            {
                titulo: "Reflejos",
                estreno: new Date("2008-08-15"),
                recaudacion: 77478607.77
            },
            {
                titulo: "La conspiración del pánico",
                estreno: new Date("2008-10-10"),
                recaudacion: 178066569.99
            },
            {
                titulo: "Niños grandes",
                estreno: new Date("2010-06-25"),
                recaudacion: 271430189.35
            },
            {
                titulo: "Judy Moody y un Verano que Promete",
                estreno: new Date("2011-06-10"),
                recaudacion: 17000000.00
            },
            {
                titulo: "Niños grandes 2",
                estreno: new Date("2013-07-12"),
                recaudacion: 246984278.13
            }
        ],
        premiado: false
    },
    {
        nombre: "Daryl Sabara",
        nacimiento: new Date("1992-06-14"),
        pais: "Estados Unidos",
        familia: {
            estado_civil: "casado",
            hijos: 1
        },
        peliculas: [
            {
                titulo: "Spy Kids",
                estreno: new Date("2001-08-24"),
                recaudacion: 147900000.39
            },
            {
                titulo: "Spy Kids 2: La isla de los sueños perdidos",
                estreno: new Date("2002-08-07"),
                recaudacion: 119723358.93
            },
            {
                titulo: "Spy Kids 3-D: Game Over",
                estreno: new Date("2003-06-25"),
                recaudacion: 197000000.26
            },
            {
                titulo: "Halloween: El origen",
                estreno: new Date("2007-08-31"),
                recaudacion: 80253908.53
            },
            {
                titulo: "Machete",
                estreno: new Date("2010-09-03"),
                recaudacion: 44000000.44
            },
            {
                titulo: "El Infierno Verde",
                estreno: new Date("2015-09-25"),
                recaudacion: 6000000.06
            }
        ],
        premiado: false
    },
    {
        nombre: "Robert Downey Jr.",
        nacimiento: new Date("1965-04-04"),
        pais: "Estados Unidos",
        familia: {
            estado_civil: "casado",
            hijos: 3
        },
        peliculas: [
            {
                titulo: "Iron Man",
                estreno: new Date("2008-04-14"),
                recaudacion: 585200000.39
            },
            {
                titulo: "Iron Man 2",
                estreno: new Date("2010-04-26"),
                recaudacion: 623900000.26
            },
            {
                titulo: "Iron Man 3",
                estreno: new Date("2013-04-14"),
                recaudacion: 1215000000.52
            },
            {
                titulo: "Vengadores: La era de Ultrón",
                estreno: new Date("2015-04-13"),
                recaudacion: 1405000000.38
            },
            {
                titulo: "Los Vengadores",
                estreno: new Date("2012-04-11"),
                recaudacion: 1519000000.93
            },
            {
                titulo: "Vengadores: Infinity War",
                estreno: new Date("2018-04-27"),
                recaudacion: 2048359754.50
            },
            {
                titulo: "Vengadores: Endgame",
                estreno: new Date("2019-04-22"),
                recaudacion: 2800400000.74
            },
            {
                titulo: "Capitán América: Civil War",
                estreno: new Date("2016-04-12"),
                recaudacion: 1153000000.12
            },
            {
                titulo: "Sherlock Holmes",
                estreno: new Date("2009-01-15"),
                recaudacion: 524028679.39
            },
        ],
        premiado: true
    },
    {
        nombre: "Chris Evans",
        nacimiento: new Date("1981-06-13"),
        pais: "Estados Unidos",
        familia: {
            estado_civil: "soltero",
            hijos: 0
        },
        peliculas: [
            {
                titulo: "Los 4 Fantásticos",
                estreno: new Date("2005-06-15"),
                recaudacion: 330579719.94
            },
            {
                titulo: "Capitán América: El primer vengador",
                estreno: new Date("2011-06-03"),
                recaudacion: 370569774.64
            },
            {
                titulo: "Capitán América: el soldado de invierno",
                estreno: new Date("2014-03-13"),
                recaudacion: 714000000.21
            },
            {
                titulo: "Vengadores: La era de Ultrón",
                estreno: new Date("2015-04-13"),
                recaudacion: 1405000000.38
            },
            {
                titulo: "Los Vengadores",
                estreno: new Date("2012-04-11"),
                recaudacion: 1519000000.93
            },
            {
                titulo: "Vengadores: Infinity War",
                estreno: new Date("2018-04-27"),
                recaudacion: 2048359754.50
            },
            {
                titulo: "Vengadores: Endgame",
                estreno: new Date("2019-04-22"),
                recaudacion: 2800400000.74
            },
            {
                titulo: "Capitán América: Civil War",
                estreno: new Date("2016-04-12"),
                recaudacion: 1153000000.12
            },
            {
                titulo: "Ant-Man",
                estreno: new Date("2015-06-29"),
                recaudacion: 519300000.37
            },
        ],
        premiado: true
    },
    {
        nombre: "Ryan Gosling",
        nacimiento: new Date("1980-11-12"),
        pais: "Canadá",
        familia: {
            estado_civil: "pareja de hecho",
            hijos: 2
        },
        peliculas: [
            {
                titulo: "Blade Runner 2049",
                estreno: new Date("2017-10-03"),
                recaudacion: 259239658.30
            },
            {
                titulo: "Drive",
                estreno: new Date("2011-06-03"),
                recaudacion: 370569774.64
            },
            {
                titulo: "La La Land",
                estreno: new Date("2016-01-13"),
                recaudacion: 445636919.14
            },
            {
                titulo: "Dos buenos tipos",
                estreno: new Date("2016-05-20"),
                recaudacion: 62100000.38
            },
            {
                titulo: "El primer hombre",
                estreno: new Date("2018-08-20"),
                recaudacion: 105688629.35
            },
            {
                titulo: "Song to Song",
                estreno: new Date("2017-03-10"),
                recaudacion: 1778000.50
            },
            {
                titulo: "Los idus de marzo",
                estreno: new Date("2011-08-07"),
                recaudacion: 75993061.46
            },
            {
                titulo: "El creyente",
                estreno: new Date("2002-06-07"),
                recaudacion: 1300000.29
            },
            {
                titulo: "Tiro de Gracia",
                estreno: new Date("2003-01-08"),
                recaudacion: 13134.78
            },
        ],
        premiado: true
    }
])