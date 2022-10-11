//cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' //não é indicado
const avo = {
    attr1: 'A'
}
const pai = {
    __proto__: avo,
    attr2: 'B'
}
const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMaxima
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMaxima: 324 //shadowing (sobrescrever) pois está no escopo menos abrangente
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari);