//En esta práctica voy a insertar toda la colección de una vez
db.motogp.insertMany([
    { nombre: "Rossi", puntos: 58, equipo: { marca: "Yamaha", patrocinio: "Monster", numero: 1 }, nacionalidad: "ITA" },
    { nombre: "Marquez", puntos: 67, equipo: { marca: "Honda", patrocinio: "Repsol", numero: 2 }, nacionalidad: "ESP" },
    { nombre: "Quartataro", puntos: 125, equipo: { marca: "Yamaha", patrocinio: "Yamaha", numero: 3 }, nacionalidad: "FRA" },
    { nombre: "Viñales", puntos: 121, equipo: { marca: "Yamaha", patrocinio: "Monster", numero: 4 }, nacionalidad: "ESP" },
    { nombre: "Morbidelli", puntos: 117, equipo: { marca: "Yamaha", patrocinio: "Petronas", numero: 5 }, nacionalidad: "ITA" },
    { nombre: "Mir", puntos: 162, equipo: { marca: "Suzuki", patrocinio: "RedBull", numero: 6 }, nacionalidad: "ESP" },
    { nombre: "Dovizioso", puntos: 117, equipo: { marca: "Ducati", patrocinio: "Monster", numero: 7  }, nacionalidad: "ITA" },
    { nombre: "Espargaro", puntos: 106, equipo: { marca: "KTM", patrocinio: "Petronas", numero: 8 }, nacionalidad: "ITA" },
    { nombre: "Nakagami", puntos: 105, equipo: { marca: "Honda", patrocinio: "RedBull", numero: 9 }, nacionalidad: "JPN" },
    { nombre: "Miller", puntos: 92, equipo: { marca: "Pramac", patrocinio: "Monster", numero: 10 }, nacionalidad: "USA" }
 ]);