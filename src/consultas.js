//Los corredores de Yamaha que sean italianos
db.motogp.find({"equipo.marca":"Yamaha", nacionalidad:"ITA"})
//Los corredores de Yamaha que sean italianos sin diferenciar mayúsculas de minúsculas
db.motogp.find({"equipo.marca":"Yamaha", nacionalidad: { $regex: /ITA/i}})
//Corredores que empiecen por una V en su nombre y sean españoles
db.motogp.find({nacionalidad:"ESP", nombre: { $regex: /^v/, $options: 'i' }})
