let dobro = function (a){
    return 2*a
}

dobro = (a) => {
    return 2*a
}

dobro = a => 2*a
//so funciona quando tem so um paramentro

console.log(dobro(Math.PI));

let ola = function () {
    return "Olá"
}
ola = () => 'Olá'
ola = _ => 'Olá'//aidna possua parametro, mas é so 1
console.log(ola())