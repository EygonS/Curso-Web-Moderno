function trianguloTipo(a,b,c){
    if(a==b && b==c){
        return console.log("Equilatero")
    } else if(a==b || b==c || a==c){
        return console.log("Isoceles")
    } else{
        return console.log("Escaleno")
    }
}
trianguloTipo(2,2,2)
trianguloTipo(2,2,3)
trianguloTipo(2,3,4)
