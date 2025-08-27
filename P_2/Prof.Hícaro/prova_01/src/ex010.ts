const estoqueProdutos: number[] = [4, 7, 23];

for(let i: number = 0; i < estoqueProdutos.length; i++){
    if(estoqueProdutos[i] < 5){
        console.log('Estoque baixo')   
    }
    else if(estoqueProdutos[i] >= 5 && estoqueProdutos[i] <= 20){
        console.log('Em estoque')   
    }
    else{
        console.log('Estoque alto')   
    }
}