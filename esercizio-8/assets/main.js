console.log("js caricato");

const calorie = [200, 350, 500, 150];

const kilojoule = calorie.map(kcal => kcal * 4.184);

console.log(kilojoule);