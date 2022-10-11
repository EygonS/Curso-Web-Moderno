//função
function getPreco(imposto = 0, moeda = "R$"){
    return`${moeda} ${this.preco * (1- this.desc) * (1+ imposto)}`
}
//Objeto
const procuto = {
    nome: "Notebook",
    preco: 4599,
    desc: 0.15,
    getPreco
}
//1 forma de chamar uma função
global.preco = 20
global.desc = 0.1
console.log(getPreco());
console.log(procuto.getPreco());

//Usando Call e Apply
const carro = {preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17,"$"));
console.log(getPreco.apply(carro, [0.17, "$"]));