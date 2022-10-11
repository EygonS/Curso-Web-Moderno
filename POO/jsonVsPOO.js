const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
};
//passando um objeto para um JSON
console.log(JSON.stringify(obj));
/*
não passa a função soma pq JSON foi feito para passar coisas 
de uma linguagem para outra, consequentemente não passa a função soma
*/
//passando um JSON para um objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));//formato valido de JSON
console.log(JSON.parse('{"a": 1.8, "b": "String", "c": true, "d": {}, "e": []}'));
//tem que ter '' aspas simples, e aspas duplas para nomes de atributos e Strings
