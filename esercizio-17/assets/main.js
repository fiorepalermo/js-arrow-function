console.log("js caricato");

const scadenze = [30, 5, 15, 3, 60];

const urgente = scadenze.find(giorni => giorni <= 7);

console.log(urgente);
