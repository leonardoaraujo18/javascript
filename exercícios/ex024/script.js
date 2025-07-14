class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return `${this.modelo} buzinou: Biiiiii`;
    }
} //Sempre a 1 letra do nome da [classe] é maiúscula

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);

console.log(uno); //Mostra tudo que tem dentro da [classe]
console.log(gol); //Mostra tudo que tem dentro da [classe]
console.log(uno.modelo); //Mostra 1 item específico
console.log(gol.ano); //Mostra 1 item específico
console.log(uno.buzina()); //Mostra a função
console.log(gol.buzina()); //Mostra a função

gol.ano = 2014; //Mudou o valor que estava dentro
console.log(gol.ano);