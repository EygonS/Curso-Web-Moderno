//object.preventExtensions(objeto);
const produto = Object.preventExtensions({//previne que o objeto seja extendido
    nome: 'qualquer', preco: 1.99, tag: 'promoção'
})

console.log('extensível: ', Object.isExtensible(produto));
produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);//seal impede que o objeto seja extendido e alterado
console.log('Selado: ', Object.isSealed(pessoa));//verifica se o objeto está selado

pessoa.sobrenome = 'Silva';//não add um novo atributo pq está selado
delete pessoa.nome;//não deleta um atributo pq está selado
pessoa.idade = 29;//altera o atributo pq está selado
console.log(pessoa);

//object.freeze = selado + valores constantes
