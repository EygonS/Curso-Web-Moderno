class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }

}
class Pai extends Avo{
    constructor(sobrenome, profissao = 'programador'){//profissão padrão == professor
        super(sobrenome);//chama a função construtora da classe avo
        this.profissao = profissao;
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva');
    }
}
const Filho = new Filho();
console.log(Filho);
