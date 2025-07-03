function contador(){
    let ini = document.querySelector("input#ini");
    let fim = document.querySelector("input#fim");
    let pas = document.querySelector("input#pas");
    let res = document.querySelector("div#res");

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert("[ERRO] Verifique se não há um dado faltando");
    }else{
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pas.value);

        if(p <= 0){
            alert("Passo inválido! Considerando PASSO 1.");
            p = 1;
        }
        res.innerHTML = "Contando..."

        if(i < f){ //ORDEM CRESCENTE
            for(let c = i; c <= f; c+= p){
                res.innerHTML += `${c} \u{1F449}`;
            }
        }else{ //ORDEM DECRESCENTE
            for(let c = i; c >= f; c-= p){
                res.innerHTML = `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}