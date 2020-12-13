function idadePessoa (anoAtual , anoNascimento) {
   return anoAtual - anoNascimento;
}



let resultado = idadePessoa ( 2020 , 1964);
console.log(resultado);

if (resultado >= 18) {
        console.log ( "Maior de idade! " );
    } else { 
        console.log( "Menor de idade! " ); 
}




