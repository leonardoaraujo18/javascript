//Use CONST ao invés de LET em um [objeto]

const carro = {
    marca:"ford",
    modelo:"ka",
    ano:2015,
    placa:"ABC-1234",
    buzina: function(){ alert("Biiiiii") },
    completo: function(){ return `A marca é ${this.marca} e o modelo é ${this.modelo}` }
};

console.log(carro); //Mostra tudo o que tem dentro do [objeto]

console.log(carro.ano); //Mostra uma propiedade específica

// carro.buzina(); //Mostra a função que você criou

console.log(carro.completo()); //Mostra a função que você criou