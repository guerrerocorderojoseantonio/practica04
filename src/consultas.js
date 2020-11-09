//Los corredores de Yamaha que sean italianos
db.motogp.find({"equipo.marca":"Yamaha", nacionalidad:"ITA"})
//Los corredores de Yamaha que sean italianos sin diferenciar mayúsculas de minúsculas
db.motogp.find({"equipo.marca":"Yamaha", nacionalidad: { $regex: /ITA/i}})
//Corredores que empiecen por una V en su nombre y sean españoles
db.motogp.find({nacionalidad:"ESP", nombre: { $regex: /^v/, $options: 'i' }})
//Italianos y franceses
db.motogp.find({ $or: [ { nacionalidad:"FRA" }, {nacionalidad: "ITA" }]})
//Mas puntos de 50 y menos 100
db.motogp.find({ $and: [{puntos: {$lt:100}, puntos:{$gt:50}}]})
//Equipo honda
db.motogp.find({"equipo.marca":{$eq:"Honda"}})
//Patrocinio Repsol y RedBull
db.motogp.find({"equipo.patrocinio": { $in: ["Repsol", "RedBull"]}})
//Numero diferente a 9
db.motogp.find({"equipo.numero": { $ne: 9}})
//Numeros diferentes a 1, 2 y 6
db.motogp.find({"equipo.numero": { $nin: [ 1,2, 9 ] } } )