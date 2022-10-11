const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai) //cria um objeto filha1 que herda todos os atributos e métodos do objeto pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

for (let key in filha2) {
    console.log(key)
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Propriedade herdada: ${key}`)
}

