const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)
const soma10 = e => e + 10
console.log(nums.map(soma10))
const toMoney = e => (`R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`)
console.log(nums.map(soma10).map(toMoney))