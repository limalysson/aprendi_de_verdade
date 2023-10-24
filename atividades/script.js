function ola(){
    let nome = "Alysson";
    let sobrenome = "Lima";
    let idade = 33;
    console.log(`Olá, meu nome é ${nome} ${sobrenome}, tenho ${idade} anos.`);
    alert(`Olá, meu nome é ${nome} ${sobrenome}, tenho ${idade} anos.`);

}


// --------------------------------------------------------------------------------

function soma(){
    let num1 = Number(window.prompt("Digite o 1º numero:", ""));
    let num2 = Number(window.prompt("Digite o 2º numero:", ""));
    num3 = num1 + num2
        console.log(num3)    
    alert(`O resultado da soma é ${num3}`)
    console.log(`O resultado da soma é ${num3}`)
}
function subtracao(){
    let num1 = Number(window.prompt("Digite o 1º numero:", ""));
    let num2 = Number(window.prompt("Digite o 2º numero:", ""));
    num4 = num1 - num2
    alert(`O resultado da subtração é ${num4}`)
    console.log(`O resultado da subtração é ${num4}`)
}
function div(){
    let num1 = Number(window.prompt("Digite o 1º numero:", ""));
    let num2 = Number(window.prompt("Digite o 2º numero:", ""));
    num5 = num1 / num2
    alert(`O resultado da divisão é ${num5}`)
    console.log(`O resultado da divisão é ${num5}`)
}
function mult(){
    let num1 = Number(window.prompt("Digite o 1º numero:", ""));
    let num2 = Number(window.prompt("Digite o 2º numero:", ""));
    num6 = num1 * num2
    alert(`O resultado da multiplicação é ${num6}`)
    console.log(`O resultado da multiplicação é ${num6}`)
}


// --------------------------------------------------------------------------------

let dataAtual = new Date();

function calculaIdade()
{   
    var idade = window.prompt("Digite seu ano de nascimento!");
  let anoAtual = dataAtual.getFullYear();
  let idadeCalculada = anoAtual - idade;
  if (idadeCalculada < 18){
    console.log(`Você tem ${idadeCalculada} anos, logo você é menor de idade.`)
    alert(`Você tem ${idadeCalculada} anos, logo você é menor de idade.`)
    } else {
    console.log(`Você tem ${idadeCalculada} anos, logo você é maior de idade.`)
    alert(`Você tem ${idadeCalculada} anos, logo você é maior de idade.`)
    }
  }

// --------------------------------------------------------------------------------

function cont(){
    let numInit = 0
    let numFim = Number(window.prompt("Até qual número você quer que eu exiba?"))
        if (numFim <= 1){
            alert("Digite um numero válido.")
        } else {
            while (numInit < numFim) {
            console.log(numInit)
            numInit = numInit + 1
    }}
    console.log(numInit)
    
    alert("Da uma olhada no console")
}



// --------------------------------------------------------------------------------

const frutas = [] 
  
 function fruta(){
    var fruta1 = window.prompt("Qual fruta você quer adicionar?") ;
    frutas.push(fruta1); 
    var fruta2 = window.prompt("Qual fruta você quer adicionar?"); 
    frutas.push(fruta2); 
    var fruta3 = window.prompt("Qual fruta você quer adicionar?"); 
    frutas.push(fruta3); 
    
    alert(`Você adicionou ${frutas[0]}, ${frutas[1]} e ${frutas[2]} a sua lista.`) 
 }
 
// --------------------------------------------------------------------------------

// var frutas = [];

// function addFrutas(){ 
//   for(let i = 1; i <= 3; i++) {
//     let fruta = window.prompt(`Digite a fruta de numero ${i}`);
//     frutas.push(fruta);
//   }
//   alert(`Você adicionou ${frutas.join(", ")} a sua lista.`) ;
// } 
// addFrutas();

// --------------------------------------------------------------------------------

// var livro = new Object();
// livro.titulo = "Apenas um livro qualquer";
// livro.autor = "Matusalem";
// livro.paginas = 20;

// console.log(livro.titulo)
// console.log(livro.autor)
// console.log(livro.paginas)

// --------------------------------------------------------------------------------

document.getElementById("meuBotao").addEventListener("click", function(){alert("Voce clicou no botão!");});

// ------ Ou pode chamar a função no onclick.

function exibirAlerta(){
    alert("Você clicou no botão!");
}

// --------------------------------------------------------------------------------

