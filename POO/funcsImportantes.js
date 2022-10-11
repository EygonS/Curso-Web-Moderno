const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 60.4
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//adiciona a data de nascimento no objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,//ele vai aparecer no Object.keys
    writable: true,//ele não permite ser mudado 
    value: '01/01/2019'//define esse valor
})

pessoa.dataNascimento = '01/01/2017'//ele tenta mudar
console.log(pessoa.dataNascimento)//imprime a data de nascimento de pessoas
console.log(Object.keys(pessoa));//imprime as chaves do objeto

// object.assign() {EcmaScript 2015}

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)
obj.c = 1234
Object.freeze(obj)//congela o objeto


