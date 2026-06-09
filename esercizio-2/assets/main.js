console.log("js caricato");

const prezzi = [100, 250, 80, 320];

const scontati = prezzi.map(prezzo => prezzo * 0.8);

console.log(scontati); // [80, 200, 64, 256]