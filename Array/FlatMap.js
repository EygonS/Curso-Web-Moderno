const escola = [{
    nome: 'turma 1',
    alunos: [{
        nome: 'Gustavo',
        nota: 9.3
    }, {
        nome: 'Ana',
        nota: 10
    }]

}, {
    nome: 'Turma 2',
    alunos: [{
        nome: 'Rebeca',
        nota: 6.5
    }, {
        nome: 'Roberto',
        nota: 8.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1);

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2);