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




