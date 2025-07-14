/*

// [SETTIMEOUT]

function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou a contar!";

    tempo = setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o setTimeout!";
     }, 5000);
} //Ativa a função apenas 1 VEZ com o [setTimeout]

function pararContagem(){
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou contagem!";
} //Para a contagem antes do tempo determinado do [setTimeout]
*/

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


