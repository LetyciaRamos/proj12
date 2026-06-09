let idade = [];
let maior;
let posicao;

for (let i = 0; i < 4; i++) {
    idade[i] = Number(prompt("Digite a idade da pessoa " + (i + 1)));

    if (i === 0 || idade[i] > maior) {
        maior = idade[i];
        posicao = i;
    }
}

alert("Maior idade: " + maior);
alert("Posição: " + posicao);