const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)//usado mais no mundo poo
        //tem q ter o this
    }
}
//Teste
pessoa.falar()//R: "Bom dia!"

//ERRO
const falar = pessoa.falar
falar()//R: "undefined"
// isso gera um comflito entre paradigimas: Funcional e POO

//CORRETO
const falarDePessoa = pessoa.falar.bind(pessoa)
//O bind amarra os objetos de pessoa a fução falar, impedindo que ele mude
