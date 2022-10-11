const quaseArray = {0: 'rafael', 1: 'joão', 2: 'maria'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])
const meuArray = ['rafael', 'joão', 'maria']
console.log(quaseArray.toString() ,meuArray)