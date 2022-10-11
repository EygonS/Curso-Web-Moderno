class Lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome; //vc está adicionando um atributo nome ao objeto  que é igual ao parametro nome da função
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }
    // ... == recebe varios parametro
    //os operadores serão concatenados em um array
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }
    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        })
    }
}
const salario = new Lancamento('Salario', 45000);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());