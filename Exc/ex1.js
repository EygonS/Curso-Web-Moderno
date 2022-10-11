function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    console.log(mapeamento[--numero]); 
}

receberNomeDoMes("2")