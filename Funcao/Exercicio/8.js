function historicoDePontos(jogos){
    let pontos = jogos.split(" ")
    let qntRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]

    for(i = 1; i <= pontos.length;i++){
        if(pontos[i] >= maiorPontuacao){
            maiorPontuacao = pontos[i]
            qntRecords++
        }
        
        if(pontos[i] <= menorPontuacao){
            menorPontuacao = pontos[i]
            piorJogo = i + 1
        }
    }
    return [qntRecords, piorJogo]
    //tem que retornar qnts vezes bateu o recorde e qual foi o pior jogo
}
console.log(historicoDePontos("10 20 20 8 25 3 0 30 1"))
