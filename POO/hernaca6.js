function aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
}
const aula1 = new aula('Bem Vindo', 123);
const aula2 = new aula('Até Breve', 456);
console.log(aula1, aula2);

//simulando o new
function novo(f, ...params) {
    const obj = {};//cria um objeto vazio
    obj.__proto__ = f.prototype;//pega o prototipo da função f
    f.apply(obj, params);//chama a função f passando o objeto criado e os parametros
    return obj;
}
const aula3 = novo(aula, 'Bem Vindo', 123);
const aula4 = novo(aula, 'Até Breve', 456);
console.log(aula3, aula4);