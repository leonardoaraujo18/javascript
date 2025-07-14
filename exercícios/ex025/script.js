const pessoa = ["Dimitri", "Teixeira", "Pedro", "Professor"];

pessoa.pop(); //Retira o último item da lista
pessoa.push("Manuella"); //Adiciona um item no final
pessoa.shift(); //Retira o 1 item da lista
pessoa.unshift("Rebeca"); //Adiciona 1 item no começo
pessoa.splice(1,0,"José", "Luiz"); //Retira e adiciona items
pessoa.sort();

document.getElementById("teste").innerHTML = pessoa.join(" - ");