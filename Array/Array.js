//Array é um objeto especial, onde organiza os dados por meio de índices
aprovados = ['Maria', 'João', 'Pedro', 'Paulo', 'Ana'];
aprovados.splice(1,2,'Elemento1', 'Elemento2');//remove do indice 1, 1 elementos e add 2 novos
//caso o 2 fosse 0 so iria add 2 elementos antes do 1

console.log(aprovados);
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop();//remove o ultimo elemento do array
pilotos.shift();//remove o primeiro elemento do array
pilotos.unshift('Hamilton');//adiciona um elemento no inicio do array

const algunsPilotos1 = pilotos.slice(2);//cria um novo array apartir do indice 2
const algunsPilotos2 = pilotos.slice(1, 3);//cria um novo array apartir do indice 1 e 3
//o 3 não entra no array
