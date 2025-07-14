let data = new Date(); //Pega a [DATA]

let ano = data.getFullYear(); //Pega o ano atual
console.log(`Estamos no ano de ${ano}`);

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"];
let escrito = meses[data.getMonth()];
console.log(`Estamos no mês de ${escrito}`); //Pega o mês atual

let dia = data.getDate(); //Pega o dia em que estamos
console.log(`No dia ${dia}`); 

let diaS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabádo", "Domingo"];
let semana = diaS[data.getDay()];
console.log(`No dia da semana ${semana}-feira`); //Pega o dia da semana

let hora = data.getHours(); //Pega a hora atual
console.log(`No horário de ${hora} horas`);

let minutos = data.getMinutes(); //Pega os minutos atuais
console.log(`Nos ${minutos} minutos`);

let segundos = data.getSeconds(); //Pega os segundos
console.log(`Com ${segundos} segundos`);

let milisegundos = data.getMilliseconds(); //Pega os milisegundos
console.log(`Com ${milisegundos} milisegundos`);

let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'}); //Pega a data atual
console.log(`Na data de ${dataBR}`);

let horaBR = data.toLocaleString('pt-BR', {timeStyle: 'short'}); //Pega a hora atual
console.log(`No horário de ${horaBR}`);

//Data de vencimento de algo
let hoje = new Date();
let vencimento = new Date(2025, 9, 12);

if(hoje > vencimento){
    console.log(`Sua conta está vencida!`);
}else{
    console.log(`Ainda não venceu!`);
}

//Diferença entre 2 datas em dias

let dataInicial = new Date();
let dataFinal = new Date(2025, 7, 27);
let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
let diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(`Ainda faltam ${diferencaDias} dias`);