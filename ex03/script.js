let nomes = [];
let alturas = [];

let continuar = "S";
let i = 0;

let maiorAltura;
let menorAltura;
let nomeMaior;
let nomeMenor;

while (continuar.toUpperCase() === "S") {

    nomes[i] = prompt("Nome:");
    alturas[i] = Number(prompt("Altura:"));

    if (i === 0) {
        maiorAltura = alturas[i];
        menorAltura = alturas[i];
        nomeMaior = nomes[i];
        nomeMenor = nomes[i];
    } else {

        if (alturas[i] > maiorAltura) {
            maiorAltura = alturas[i];
            nomeMaior = nomes[i];
        }

        if (alturas[i] < menorAltura) {
            menorAltura = alturas[i];
            nomeMenor = nomes[i];
        }
    }

    continuar = prompt("Deseja continuar? (S/N)");
    i++;
}

alert(
    "Maior altura: " + maiorAltura + " m - " + nomeMaior +
    "\nMenor altura: " + menorAltura + " m - " + nomeMenor
);