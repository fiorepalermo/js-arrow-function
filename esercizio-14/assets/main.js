console.log("js caricato");

const trentesimi = [30, 27, 18, 24, 21];

const decimi = trentesimi.map(v =>
    parseFloat((v / 3).toFixed(1))
);

console.log(decimi);