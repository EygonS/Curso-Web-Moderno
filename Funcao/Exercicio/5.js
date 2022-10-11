function corrigindoJs(valor){
    valorEmReais = `R$ ${valor.toFixed(2).toString().replace(".",",")}`
    console.log(valorEmReais);
}
corrigindoJs(0.1+0.2)