// [SETINTERVAL]

function ativarContagem(){
    tempo = setInterval(function(){
        let cronometro = document.getElementById("tempo").innerHTML;
        let soma = Number(cronometro) + 1;
        document.getElementById("tempo").innerHTML = soma;
    }, 1000);
} //Ativa a função a cada 1 segundo com o [setInterval]

function pararContagem(){
    clearInterval(tempo);
    document.getElementById("tempo").innerHTML = 0;
}