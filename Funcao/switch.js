const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log("quadro de honra");
            break
        case 8 : case 7:
            console.log("aprovado");
            break
        default:
            console.log("nota invalida");
        //é o caso padrão (else)
    }
}
imprimirResultado(10)
// se não tiver o break, ele a partir do caso que ele entrar
// todos os casos seguintes iram ser executados
