console.log("js caricato");

const prezzi = [10, 25.50, 8, 99];

prezzi.forEach(p =>
    console.log(`€${(p * 1.22).toFixed(2)}`)
);