let comparaComThis = function(param){
    console.log(this === param);
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
//agora o 
//comparaComThis(global)
//comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
//isso foi fento com node e como cada arquivo do node é um modulo
//ele foi escrito dentro de um modulo
comparaComThisArrow(global)
comparaComThisArrow(module.exports)//aponta pro modulo

comparaComThisArrow = comparaComThisArrow.bind(obj)
//isso não vai funcionar pq a função arrow não pode trocar o valor do this