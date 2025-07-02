function carregar(){
let msg = document.getElementById("msg");
let img = document.getElementById("imagem");
let data = new Date();
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if(hora >= 0 && hora < 12){
    img.src = "imagens/manha.jpg";
    document.body.style.background = "#eebd57"
}else if(hora >= 12 && hora < 18){
    img.src = "imagens/tarde.jpg";
    document.body.style.background = "#f8f200"
}else{
    img.src = "imagens/noite.jpg";
    document.body.style.background = "#172749"
}

}
