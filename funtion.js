function maiorMenor(idade) {
    if(idade > 18){
        return true;
    } else {
        return false;   
    }
}

maiorMenor (20); //true 
maiorMenor (5);  //false 

console.log( maiorMenor (10) )

const resultadoDaFuncao = maiorMenor(20);
console.log( resultadoDaFuncao );