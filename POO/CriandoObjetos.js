const obj1 = {}
console.log(obj1)
//object em JS
console.log(typeof Object, typeof new Object)
const obj2= new Object
console.log(obj2);

//func construtora
function produto(nome, preco, desc){
    this.nome = nome //tem acesso ao nome,
    //Mas não ao preco e ao desc pois so a func pode ver eles
    this.getProcoComDesconto = ()=> {
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('NoteBoke', 2999.99, 0.25)
console.log(p1.getProcoComDesconto(), p2.getProcoComDesconto());

//Func Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Joao', 2000, 4)
const f2 = criarFuncionario('paulo', 3000, 7)
console.log(f1.getSalario(), f2.getSalario());

//Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha);

//um função famosa que retorna objeto...
const fromJSON=JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info);

//Objeto não vai mais poder ser mudado
Object.freeze(filha)