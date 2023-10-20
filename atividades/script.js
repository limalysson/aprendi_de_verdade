function ola(nome, sobrenome, idade){
    var nome
    var sobrenome
    var idade
    console.log("Olá, meu nome é "+nome+" "+sobrenome+", tenho "+idade+" anos.")

}
ola("Alysson", 'Lima', 33)

function soma(a, b){
    c = a + b
    console.log(c)
}
soma(3,4)

function mIdade(a){
    if (a<18){
        console.log("Você é menor de idade.")
    } else {
        console.log("Você é maior de idade")
    }
}
mIdade(17)
mIdade(19)

function cont100(a){
    a = 0
    while (a < 100) {
        console.log(a)
        a = a + 1
    }
    console.log(a)
}
cont100(100)