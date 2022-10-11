// Funções

/*
Função em JS é First-Class Object (Citizens)
Higher-order Function
*/

// Criar de forma literal
function fun1() { }

// armazenar em uma variável
const fun2 = function () { }

//armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2 ]
console.log(array[0] (2,3));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'opa'}
console.log(obj.falar());

// Passar função como parametro
// ISSO É IMPORTANTE E PODEROSO MAS É UM EXEMPLO RUIM
function run(fun){
    fun()
}

run(function() { console.log('Executando...');})
// Você chama uma função para executar uma função
// por exemplo: vc vai executar a função que esta dentro
// dos {}
// uma função pode conter outra função



// função com 3 entradas
function soma (a, b){
    return function (c){
        console.log(a + b + c);
    }
}
//opções
soma(2,3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)