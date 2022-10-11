//func declaration
function soma(x, y){
    return x + y
}// é carregada no inicio da execução assim funcionando mesmo que
//algo use ela antes

//func expression
const sub = function(x, y){
    return x - y
}//So pode ser usada de passar de sua linha

//named func expression
const mult = function mult(x, y){
    return x * y
}//pouco usada; so para debug
