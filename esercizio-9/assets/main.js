console.log("js caricato");

const giorni = ["Lun", "Mar", "Mer", "Gio", "Ven"];
const ore = [8, 7.5, 9, 8, 6];

ore.forEach((h, i) =>
    console.log(`${giorni[i]}: ${h * 60} min`)
);