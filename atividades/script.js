function ola(nome, sobrenome, idade){
    console.log(`Olá, meu nome é ${nome} ${sobrenome}, tenho ${idade} anos.`)

}
ola("Alysson", "Lima", 33)

// ----------------------------------------------------

// function soma(){
//     num3 = num1 + num2
//     num4 = num1 - num2
//     num5 = num1 / num2
//     num6 = num1 * num2
//     console.log(num3)
//     alert(`O resultado da soma é ${num3}`)
//     alert(`O resultado da subtração é ${num4}`)
//     alert(`O resultado da divisão é ${num5}`)
//     alert(`O resultado da multiplicação é ${num6}`)
//     console.log(`O resultado da soma é ${num3}`)
//     console.log(`O resultado da subtração é ${num4}`)
//     console.log(`O resultado da divisão é ${num5}`)
//     console.log(`O resultado da multiplicação é ${num6}`)
// }
// var num1 = Number(window.prompt("Digite o 1º numero:", ""));
// var num2 = Number(window.prompt("Digite o 2º numero:", ""));
// soma()

// ------------------------------------

// let dataAtual = new Date();

// function calculaIdade(idade)
// {
//   let anoAtual = dataAtual.getFullYear();
//   let idadeCalculada = anoAtual - idade;
//   if (idadeCalculada < 18){
//     console.log(`Você tem ${idadeCalculada} anos, logo você é menor de idade.`)
//     alert(`Você tem ${idadeCalculada} anos, logo você é menor de idade.`)
//     } else {
//     console.log(`Você tem ${idadeCalculada} anos, logo você é maior de idade.`)
//     alert(`Você tem ${idadeCalculada} anos, logo você é maior de idade.`)
//     }
//   }

// var idadeDigitada = window.prompt("Digite seu ano de nascimento!");
// calculaIdade(idadeDigitada)

// -----------------------------------------------

// function cont(){
//     numInit = 0
//     while (numInit < numFim) {
//         console.log(numInit)
//         numInit = numInit + 1
//     }
//     console.log(numInit)
// }
// var numFim = Number(window.prompt("Até qual número você quer que eu exiba?"))
// cont()

// -------------------------------------------------

// const frutas = []

// function addFrutas(){
//     frutas.push(addfruta)
// }

// var addfruta = window.prompt("Qual fruta você quer adicionar?")
// addFrutas()
// console.log(frutas)
// var addfruta = window.prompt("Qual fruta você quer adicionar?")
// addFrutas()
// console.log(frutas)
// var addfruta = window.prompt("Qual fruta você quer adicionar?")
// addFrutas()
// alert(`Você adicionou ${frutas[0]}, ${frutas[1]} e ${frutas[2]} a sua lista.`)
// console.log(frutas)
// for (fruta of frutas){
//     console.log(fruta)
// }

var frutas = []

function addFrutas(){
    for (let i = 1; i<=3; i++){
        let fruta = window.prompt(`Digite a fruta de numero ${i}`);
        frutas.push(fruta);
    }
    alert(`Você adicionou ${frutas.join(", ")} a sua lista.`);
}
    
addFrutas()
console.log(frutas)

