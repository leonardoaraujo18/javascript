function parimp(n){
    if(n % 2 == 0){
        return "PAR"
    }else{
        return "ÍMPAR"
    }
}

let res = parimp(10);
console.log(`O número digitado é ${res}`);