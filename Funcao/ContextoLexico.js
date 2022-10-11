const valor = 'Global'

function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = 'local'
    minhaFuncao()//R: global; as funcoes carregam com sigo
    //o contexto onde ela foi escrita
}

exec