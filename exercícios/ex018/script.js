let nomes = ["Leo", "Ana", "Mari", "Luiz"];
nomes.push("Mirian");

for(let c = 0; c < nomes.length; c++){ // Primeira forma
    console.log(`Nome do usuário: ${nomes[c]}`)
}

let num = [15, 52, 28, 83, 49];
num.sort();

for(let pos in num){ // Segunda forma (SIMPLIFICADA)
    console.log(`Idade do usuário número ${pos}: ${num[pos]} anos`)
}