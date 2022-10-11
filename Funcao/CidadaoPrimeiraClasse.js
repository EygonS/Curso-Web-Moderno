//criar de forma literal
function fun1(){} 
//armazenar em uma constante
const fun2 = function() {}
//armazenar em um array
const array = [function(a,b){return a + b}, fun1, fun2]
console.log(array[0](2,3));

//pode armazer em atributos de objetos
const obj = {}
obj.falar= function(){return "opa"}
console.log(obj.falar())
//passa uma funcao como parametro
function run(fun){
    fun()
}
run(function() {console.log("executando")})

//uma funcao pode teronar uma outra funcao
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(4,7)(3)
const somaMais = soma(4,7)
somaMais(3)