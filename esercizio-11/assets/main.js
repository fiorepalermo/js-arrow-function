console.log("js caricato");


const prenotazioni = [
    "confermata", "in attesa", "annullata", "confermata"
];

const prima = prenotazioni.find(p => p === "annullata");

console.log(prima);
