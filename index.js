/*

for (var i = 0; i < 9; i++) {
    console.log(i);
    // /more statements
}

*/


/*
var i = 0;
for (; i  < 9; i++) {
    console.log(i);
    // more statements
}

*/


/*lembrar dde quebrar o loop para não criar um loop infinito

for (var i = 0 ;; i++) {
    console.log(i);
    if (i > 5) break;
    // more statements
}

*/


/* Omitindo todos os três blocos novamente, certifique-se
de usar uma instrução (break) no final do loop e tabem
modificar (incrementar) uma variavel para que a 
condição do break seja verdadeira em algum
momento 

var i = 0;

for (;;) {
    if (i > 4) break;
    console.log(i);
    i++;
}

*/

/* Usando o FOR sem uma declaração - O ciclo de for  a seguir calcula a posição de deslocamento de um nó
na seção [Expressão final] e, portanto, não requer o uso de uma declaração ou de um bloco de declaração, e
no seu lugar é usado o ponto e virgula. */

function showOffsetPos (sId) {
    var nLeft = 0, nTop = 0;

    for (var oItNode = document.getElementById(sId); //inicialização
        oItNode; //condição
        nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent);// expressão final
        /*empty statement */

    console.log("Offset position of \"" + sId + "\" element:\n left: " + nLeft + "px;\n top: " + nTop + "px;");

    

}

// Exemplo de chamada ou call
console.log(showOffsetPos("content"));




