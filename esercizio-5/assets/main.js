console.log("js caricato");

const nomi = ["Al", "Leo", "Marco", "Alessandra", "Luca"];

const risultato = nomi.filter(nome =>
    nome.length >= 3 && nome.length <= 5
);

console.log(risultato);