/// Guarda as letras corretas repetindo se ouver mais de uma letra igual.
function verificaAcertos(key){
    for(i=0; i < palavraSorteada.length;i++){
        if(key == palavraSorteada[i]){
            letrasCorretas.push(key)
        }
    }
}
//// Guarda os botoes clicados do teclado virtual, para reseta-los quando o jogo acabar ou desistirem.
var teclaClicada = []
//// Reseta o style dos botoes do teclado virtual.
function resetarStyleTecla(){
    for(i=0; i < teclaClicada.length; i++){
        document.getElementById(teclaClicada[i]).classList.remove("teclaAcionada")
    }
}
/// Muda o style do botão virtual ao ser clicado.
function mudarStyleTecla(tecla){
    if(letrasErradas.length <= 6){
        document.getElementById(tecla).classList.add("teclaAcionada") 
        teclaClicada.push(tecla)
    }
    if(letrasErradas.length == 6){
        resetarStyleTecla()
    }
}
//// Teclado da tela do jogo
function verificaTecladoVirtual(tecla){
    
    if(letrasErradas.includes(tecla)){
        alert('Essa letra ja foi selecionada')
    }else{
        if(input.value.includes(tecla)){
            alert('Essa letra já foi encontrada')
        }else{
            if(palavraSorteada.includes(tecla)){
                verificaAcertos(tecla)
                input.value += tecla + ", " 
                desenhaLetra(tecla)
                mudarStyleTecla("tecla-" + tecla)
                tecla.classList.add("teclaAcionada")
            }else{
                letrasErradas.push(tecla)
                input.value += tecla + ", "
                desenhaBoneco();
                mudarStyleTecla("tecla-" + tecla)
                chances.textContent = "Quantidade de ❤️ restantes: " + (vidas - letrasErradas.length)
            }
        }
    }
    if(letrasCorretas.length == palavraSorteada.length){
        capturaTecla = false
        setTimeout(venceu => {
            fimDeJogo ()            
        }, 500)               
    }
    if(letrasErradas.length == 6){
        capturaTecla = false
        setTimeout(perdeu => {
            fimDeJogo () 
        }, 500)
    }
}
/// Teclado Fisico do computador
function escutaTeclado(){
    
    document.body.addEventListener('keydown', function (event) { 
 
         event.preventDefault()
         var codigo = event.keyCode;
         
         if(!codigo >= 65 && !codigo <= 90){
             alert("Essa tecla não é permitido")
         }
         if(codigo >= 65 && codigo <= 90 && capturaTecla == true){
             var key = event.key.toUpperCase();
             console.log(key);
             
             if(letrasErradas.includes(key)){
                 alert('Essa letra ja foi selecionada')
             }else{
                 if(input.value.includes(key)){
                     alert('Essa letra já foi encontrada')
                 }else{
                     if(palavraSorteada.includes(key)){
                         verificaAcertos(key)
                         input.value += key + ", " 
                         desenhaLetra(key)
                         mudarStyleTecla("tecla-" + key)
                     }else{
                         letrasErradas.push(key)
                         input.value += key + ", "
                         desenhaBoneco();
                         mudarStyleTecla("tecla-" + key)
                         chances.textContent = "Quantidade de ❤️ restantes: " + (vidas - letrasErradas.length)
                     }
                 }
             }
             //// Logica fim de jogo, quando acertar ou errar as palavras
             if(letrasCorretas.length == palavraSorteada.length){
                 capturaTecla = false
                 setTimeout(venceu => {
                     fimDeJogo ()
                 }, 500)               
             }
             if(letrasErradas.length == 6){
                 capturaTecla = false
                 setTimeout(perdeu => {
                     fimDeJogo ()
                 }, 500)
             }  
         }
     });
}