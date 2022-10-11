// Fundamentos e Estruturas de controle


//Notação Ponto
function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...');
    }
}

class Obj {
    constructor(nome) {
        this.nome = nome;
        this.exec = function () {
            console.log('Exec...');
        };
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()
//_______________________*
//Objeto
const prod = {}
prod.nome = 'celular'
prod.preco = 1300
prod["descontoLegal"] = 0.40

const cliente = {
    nome: "Eygon",
    local: "fortaleza",
    numero: 998234547,

}
console.log(prod);
console.log(cliente);

//_______________________*
/*Let so funciona no bloco que foi declarado 

Ex de boloco: são duas chaves
{
    var x = oi
}

var não se limite ao bloco
*/
var a = 1
for (var i = 0; i < 1; i++){
    let a = 7 
    console.log(a)
}
console.log(a)

//_______________________*
//arrow 

/*
EX FAZENDO COM UMA FUNÇÃO
const printSoma = function (a,b) {
    console.log(a + b)
}*/

const soma = (a, b) => {
    return a + b
}
console.log(soma(3, 2));

//modo resumido (função so pode possuir 1 linha)
const sub = (a, b) => a-b
console.log(sub(4, 5))


const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`);
//_______________________*
//Operador de Desestruturação

const pessoa = {
    nome: "eygon",
    numero: 998232545,
    endereço: {
        rua: "antonio",
        numeroDaCasa: 281,
    }
}

const { nome, numero} = pessoa
console.log(nome, numero)

const { endereço: { rua, numeroDaCasa }} = pessoa
console.log(rua, numeroDaCasa)

//#2

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6) 
// o n2 e n4 são respectivamente
// 7 e o 8, que não estão sendo atribuidos a nada

//#3
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}));
console.log(rand({}))
//console.log(rand())

//#4
function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random()* (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]));
console.log(rand([, 10]));
console.log(rand([]));
//_______________________*
//Você pode usar virgula em um console.log
console.log('01)', '1' ==  1 );

//_______________________*
//Operadores Ternarios

/* 
Explicação: se nota for verdadeiro vai retornar 'aprovado',
e falso ( menor que 7) vai retornar 'reprovado' */
const resultado = nota => nota >= 7 ? 'aprovado' : 'Reprovado'
/*
uma forma de escrever sem usar uma função
const status = nota >= 7 ? 'aprovado' : 'reprovado'
*/

console.log(resultado(7.1))
console.log(resultado(6.9))

//_______________________*
// **IMPORTANTE**
// ENTENDA OS RUN TIMES : se vc for trabalhar com back (node) ou front (browser)
// cada um tem suas especificidades

//_______________________*
// Do While

var x = true

do {
    console.log('isso é true')
} while(false)
// A verificação é feita depois de executar o codigo

//_______________________*
//continue 

// se usado em um for por exemplo, irá imterromper a repetição atual e irá para a próxima

//_______________________*
// for in e Rotulo

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`);
}

// rotulo ▼
exeterno: 
for(let i = 0; i < 10; i++){
    console.log(i + " :1");

    for(let i = 1; i < 13; i++){
        console.log(i + " :2");
        if(i == 3) break exeterno
    }
}
// O break iria para so o for de dentro, mas por ter o rotulo
// ele vai dar o break no rotulo inteiro 