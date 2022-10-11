const ferrare = {
    modelo: 'F40',
    velocidadeMaxima: 324,
}
const volvo = {
    modelo: 'V50',
    velocidadeMaxima: 200,
}

console.log(ferrare._proto_);
console.log(ferrare.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);

function meuObjeto() { }
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);