function area(largura, altura){
    const area = altura * largura
    if (area > 20){
        console.log(`valor acima do permitido: ${area}m²`);
    } else{
        return area
    }
    console.log(area(2,3));
    console.log(area(2,3,4,5,6));
    console.log(area(5,5));
}