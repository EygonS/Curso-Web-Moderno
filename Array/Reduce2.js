const alunos = [
    {nome: 'joão', nota: 7.3, bolsista: false},
    {nome: 'Ana', nota: 7.9, bolsista: true},
    {nome: 'Paulo', nota: 9.5, bolsista: false},
    {nome: 'Pedro', nota: 5.6, bolsista: true},
    {nome: 'Marcos', nota: 7.7, bolsista: false}
]
// todos os alusno são bolsista?

//algum aluno é bolsista

const allBolsista = (resultado, bolsista) => resultado && bolsista 
console.log(alunos.map(a => a.bolsista).reduce(allBolsista));

const algumBolsista = (resultado, bolsista) => resultado || bolsista 
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));
