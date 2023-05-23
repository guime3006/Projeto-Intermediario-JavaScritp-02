let userNumber = prompt(`Digite um Número: `); // v(userNumber) irar receber o  1º número do user
userNumber = Number(userNumber); // aqui ele será convertida para um Number()


let userNumberNew = prompt(`Digite um Outro Número: `); // o mesmo processo é feito novamente mas agora com um novo número
userNumberNew = Number(userNumberNew);

let calculo = userNumber + userNumberNew; // é criado uma variavel que irar fazer o calculo e armazenar o resultado

let resposta = document.getElementById("resp-number").innerHTML = `O Valor Somado de ${userNumber} + ${userNumberNew} = ${calculo}`;
// por ultimo uma variavel que fica responsavel por manipular o DOM e exibir a resposta 
