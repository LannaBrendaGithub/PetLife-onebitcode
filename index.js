let elementosDuvida = document.querySelectorAll('.duvida')
elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.add('fundo-verde')
    })
})
/*for each - executa para cada elemento
-> uma função pode ser declarada como
function nome(argumentos){

}
*/
