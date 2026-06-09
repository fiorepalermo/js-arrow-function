console.log("js caricato");

const consumi = [4.1, 9.3, 2.8, 6.0, 11.2];
const SOGLIA_ALLARME = 8;

consumi.forEach(kwh =>
    kwh > SOGLIA_ALLARME
        ? console.warn(`🔴 ALLARME: ${kwh} kWh`)
        : console.log(`✅ ${kwh} kWh`)
);