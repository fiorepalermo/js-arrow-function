console.log("js caricato");

const valutazioni = [3, 5, 2, 4, 5, 1, 5];

const topRecensioni = valutazioni.filter(stelle => stelle > 4);

console.log(topRecensioni); 