Array.prototype.forEach2 = function(callback){
    for(var i = 0; i < this.length; i++){
        callback(this[i], i, this);
     }
}

const aprovados = ['agatha', 'aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
