const alunos = [
    {nome: 'joão', nota: 7.3, bolsista: false},
    {nome: 'Ana', nota: 7.9, bolsista: true},
    {nome: 'Paulo', nota: 9.5, bolsista: false},
    {nome: 'Pedro', nota: 5.6, bolsista: true},
    {nome: 'Marcos', nota: 7.7, bolsista: false}
]
console.log(alunos.map(a => a.nome));
const resul = alunos.map(a => a.nota).reduce(function (acc, atual) {
    console.log(acc, atual);
    return acc + atual;
})

console.log(resul);