const notas = [7.7 ,6.5 ,5.2 ,8.9 ,9.0 ,7.1]

//sem callBack
const notaBaixa1 = []
for (let i in notas){
    if(notas[i] < 7){
        notaBaixa1.push(notas[i])
    }
}
console.log(notaBaixa1)

//com callBack
const notaBaixa2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notaBaixa2)

//com callback e arrow func
const notaBaixa3 = nota.filter(nota => 7)

