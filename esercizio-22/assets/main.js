console.log("js caricato");

const nomi = ["Li", "Eva", "Matteo", "Sara", "Io", "Paolo"];

const filtrati = nomi.filter(n =>
    n.length >= 3 && n.length <= 5
);

console.log(filtrati);