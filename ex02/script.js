let nome = [];
let sexo = [];
let salario = [];

for (let i = 0; i < 5; i++) {
    nome[i] = prompt("Nome:");
    sexo[i] = prompt("Sexo (M/F):");
    salario[i] = Number(prompt("Salário:"));
}

let resultado = "Funcionárias com salário acima de R$ 5000:\n";

for (let i = 0; i < 5; i++) {
    if (sexo[i].toUpperCase() === "F" && salario[i] > 5000) {
        resultado += nome[i] + " - R$ " + salario[i] + "\n";
    }
}

alert(resultado);