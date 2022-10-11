var a = 1
function Pessoa(){
    this.idade = 0

    setInterval((a) => {
        this.idade++
        console.log(this.idade);
    }, 1000)
}
new Pessoa