function carregar(){
    let ano = document.getElementById("txtano");
    let sex = document.getElementsByName("sex");
    let img = document.getElementById("imagem");
    let res = document.getElementById("res");

    let nas = Number(ano.value);
    let sexoSelecionado = null;

    if(sex[0].checked){
        sexoSelecionado = "homem"
    }else if(sex[1].checked){
        sexoSelecionado = "mulher"
    }
    
    if(nas < 18 && sex[0]){
        res.innerHTML = `Detectamos um garoto de ${nas} anos`
        img.src = "imagens/criança-homem.jpg"
    }else if(nas < 25 && sex[0]){
        res.innerHTML = `Detectamos um jovem de ${nas} anos`
        img.src = "imagens/jovem-homem.jpg"
    }else if(nas < 60 && sex[0]){
        res.innerHTML = `Detectamos um adulto de ${nas} anos`
        img.src = "imagens/adulto-homem.jpg";
    }else{
        res.innerHTML = `Detectamos um idoso de ${nas} anos`
        img.src = "imagens/idoso-homem.jpg"
    }

}