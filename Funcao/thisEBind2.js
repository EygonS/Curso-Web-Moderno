function pessoa() {
    this.idade = 0

    //utilizando o bind
    setInterval(function(){
        this.idade++
        console.log(this.idade)
   }.bind(this), 1000)

    //colocanodo o this em uma constante para ele não variar   
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}
console.log("")
new pessoa