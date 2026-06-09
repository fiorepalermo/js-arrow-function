console.log("js caricato");

const consumi = [3.2, 8.7, 1.5, 9.1, 4.0];
const SOGLIA = 7;

consumi.forEach(kwh => {
    kwh > SOGLIA
        ? console.warn(`⚠️ Alto: ${kwh} kWh`)
        : console.log(`${kwh} kWh`);
});