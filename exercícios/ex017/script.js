let num = [5, 8, 2, 9, 3];
num.sort();
num[5] = 10;
num.push(4);

console.log(`Nesse Array tem ${num.length} objetos!`)
console.log(num);

let pos = num.indexOf(9);
if(pos == -1){
    console.log("Valor não encontrado");
}else{
    console.log(`O valor 9 está na posição ${pos}`);
}
