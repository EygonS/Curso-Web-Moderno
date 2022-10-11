const produto = new Object
produto.nome = "cadeira"
produto["marca do produto"] = 'generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto["marca de produto"]
console.log(produto);

const carro = { 
    modelo: "A4",
    valor: 890000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            local: "Rua abc",
            numero: 123
        }
    },
    condutores: [{
        nome: "junior",
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    } ],
    calcularValorSegura: function(){
        //....
    }
}

carro.proprietario.endereco.numero = 1000
carro["proprietario"]['endereco']['local']
console.log(carro)

delete carro.condutores // return undefined
