//// Funções do canvas
function desenhaCanvas(){
    tela.fillStyle = "white";
    tela.fillRect (0, 0, 600, 500);
}
function desenhaForca(){
    //// Pilar vertical  ////
        tela.fillStyle = "rgb(125,69,19)"
        tela.fillRect (100, 80, 32,350);
    //// Pilar Horizontal  ////
        tela.fillStyle = "rgb(125,69,19)"
        tela.fillRect (75, 90, 200,25);
    /// Suporte da forca /////
        tela.fillStyle = "rgb(125,69,19)"
        tela.beginPath();
        tela.moveTo(132, 115);
        tela.lineTo(132, 150);
        tela.lineTo(200, 115)
        tela.fill();
    /// Triangulo do Suporte //////
        tela.fillStyle = "white";
        tela.beginPath();
        tela.moveTo(132, 115);
        tela.lineTo(132, 130);
        tela.lineTo(172, 115)
        tela.fill();
    //// Corda /////
        tela.fillStyle = "rgb(218,165,32)"
        tela.fillRect (265, 85, 5,40);
    }
function desenhaLinha(){
    var espaco = 205
    for(i=0; i < palavraSorteada.length; i++){                                        
        tela.fillStyle = "black"
        tela.fillRect (espaco, 430 , 20, 1);
        espaco += 30
    }
}
function desenhaBoneco(){
    var boneco0 = document.querySelector('#boneco0')
    var boneco1 = document.querySelector('#boneco1')
    var boneco2 = document.querySelector('#boneco2')
    var boneco3 = document.querySelector('#boneco3')
    var boneco4 = document.querySelector('#boneco4')
    var boneco5 = document.querySelector('#boneco5')
    var boneco6 = document.querySelector('#boneco6')

    if(letrasErradas.length == 0){       /// Sem nada
        boneco0.style.display="block"
    }

    if(letrasErradas.length == 1){     /// Cabeça
        boneco0.style.display="none"
        boneco1.style.display='block'
    }
    if(letrasErradas.length == 2){     // Corpo 
        boneco1.style.display='none'
        boneco2.style.display='block'
    }
    if(letrasErradas.length == 3){      // Braço esquerdo
        boneco2.style.display='none'
        boneco3.style.display='block'
    }
    if(letrasErradas.length == 4){      /// Braço Direito
        boneco3.style.display='none'
        boneco4.style.display='block'
    }
    if(letrasErradas.length == 5){     /// Perna esquerda
        boneco4.style.display='none'
        boneco5.style.display='block'
    }
    if(letrasErradas.length == 6){    // Pernda Direita
        boneco5.style.display='none'
        boneco6.style.display='block'
    }
    
}
function limpaForca(){                 //// Limpa as partes dos bonecos se o jogo foi encerrado.
    boneco0.style.display='none' 
    boneco1.style.display='none' 
    boneco2.style.display='none' 
    boneco3.style.display='none'
    boneco4.style.display='none' 
    boneco5.style.display='none' 
    boneco6.style.display='none'
}
function desenhaLetra(key){
    for(i=0; i < palavraSorteada.length; i++){
        if(palavraSorteada[i] == key){
            tela.font = 'bold 20px serif';
            tela.fillText(key, 206 + (30*i) , 428 ,20);
        }
    }   
}