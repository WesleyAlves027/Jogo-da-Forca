//// Canvas 
var tela = document.getElementById("tela").getContext("2d")
//// Div's do html para esconder ou mostrar algo
var divJogo = document.querySelector('#container-jogo')
var divBotoes = document.querySelector("#layout-btn")
var divAddPalavra = document.querySelector("#layout-add-palavra")
var tecladoEinput = document.querySelector("#container-interacao")
var divDescricaoJogo = document.querySelector("#div-descricao-jogo")
var rodape = document.querySelector("#rodape")
//// Variaveis dos botoes e input do jogo
var btnIniciarJogo = document.querySelector('#iniciar-jogo')
var btnReiniciarJogo = document.querySelector("#reiniciar-jogo")
var btnDesistir = document.querySelector('#parar-jogo')
var btnAdicionarPalavra = document.querySelector('#adicionar-palavra')
var btnTecladoVirtual = document.querySelectorAll(".button-keybord")
/// Input das letras certas e erradas
var escrevePalavra = document.querySelector("#escrever-palavra")
var input = document.querySelector("#input-letras")
/// Botoes e Div fim de Jogo
var divFimDeJogo = document.querySelector("#div-fim-de-jogo")
var btnNovoJogo = document.querySelector('#novo-jogo')
var btnHome = document.querySelector('#home')
/// Guarda e sorteia palavra
var arrayPalavras = ["CASA", "ESCOLA", "FILME"];
var palavraSorteada =  arrayPalavras[Math.floor(Math.random() * arrayPalavras.length)];
//// Armazenas as letras certas, contador de erros e acertos também
var letrasErradas = []
console.log(letrasErradas);
var letrasCorretas = []
/// Contador de vidas restantes
var chances = document.querySelector("#vidas-restantes")
var vidas = 6
chances.textContent = "Quantidade de ❤️ restantes: " + vidas
/// Exibe mensagem fim de jogo.
var imgGanhou = document.querySelector("#img-ganhou")
var imgPerdeu = document.querySelector("#img-perdeu")
var spanPalavraCorreta = document.querySelector("#mensagem-fim-de-jogo")
/// Decide se o evento ouvir teclado deve ser chamado ou não
var capturaTecla = false 

/// Evento click dos botoes
btnIniciarJogo.addEventListener('click',function(){
    atualizaJogo()
});
btnReiniciarJogo.addEventListener("click",function(){
    reiniciaJogo()
});
btnDesistir.addEventListener('click',function(){
    desativaJogo()
});
btnAdicionarPalavra.addEventListener('click',function(){

    capturaTecla = false
  
    divAddPalavra.classList.remove("invisivel")
    divAddPalavra.classList.add("div-add-palavra") 

    var btnSalvarPalavra = document.querySelector("#salvar-palavra")
    btnSalvarPalavra.addEventListener("click", function(){

        if(arrayPalavras.includes(escrevePalavra.value.toUpperCase()) && !escrevePalavra.value == ""){
            alert("TENTE OUTRA PALAVRA")
        }else{
            arrayPalavras.push(escrevePalavra.value.toUpperCase())
            alert("ADICIONADO")
            escrevePalavra.value = ""    //// Limpa o que foi escrito, retornando o placeholder da tag textarea .
        }
    });

    var btnCancelarPalavra = document.querySelector("#cancelar-palavra")
    btnCancelarPalavra.addEventListener("click", function(){
        divAddPalavra.classList.remove("div-add-palavra")
        divAddPalavra.classList.add("invisivel")
        escrevePalavra.value = ""
        capturaTecla = true
    })
});
//// Botões da mensagem Fim de Jogo
btnNovoJogo.addEventListener("click", function(){
    reiniciaJogo()
});
btnHome.addEventListener("click", function(){
    desativaJogo()
});
//// Começa o jogo
function atualizaJogo(){
    desenhaCanvas()
    desenhaForca()
    desenhaLinha()
    escutaTeclado()

    btnAdicionarPalavra.classList.add("invisivel")

    divJogo.classList.remove("invisivel")
    divBotoes.classList.add("div-btn-secundario")
    divDescricaoJogo.style.display = "inline-block"
    divFimDeJogo.classList.add("invisivel")   /// Fechando a mensagem que pede para "Novo Jogo" ou "Home"
    rodape.classList.add("rodape-jogo-iniciado")

    btnIniciarJogo.style.display = "none"
    btnReiniciarJogo.style.display = "block"
    btnDesistir.style.display = "block"

    capturaTecla = true
}
/// Reinicia o jogo ao clicar no botão Reiniciar ou Novo Jogo(Que aparece na div Fim do Jogo)

function removeStyleTecla (){
    
}

function reiniciaJogo(){
    tecladoEinput.style.display = "block" 
    divBotoes.classList.remove("invisivel")
    divBotoes.classList.add("div-btn-secundario")
    btnDesistir.style.display = "block"
    btnIniciarJogo.style.display = "none"
    divFimDeJogo.classList.add("invisivel")

    input.value = ""
    letrasErradas = []
    letrasCorretas = []
    chances.textContent = "Quantidade de ❤️ restantes: " + (vidas - letrasErradas.length)

    desenhaCanvas()
    limpaForca()
    desenhaForca()
    resetarStyleTecla()

    palavraSorteada =  arrayPalavras[Math.floor(Math.random() * arrayPalavras.length)];
    desenhaLinha()
    
    capturaTecla = true
}
/// Volta para a pagina inicial
function desativaJogo(){
    divJogo.classList.add("invisivel")
    divBotoes.classList.remove("div-btn-secundario")
    divBotoes.classList.add("div-btn-principal")
    divFimDeJogo.classList.add("invisivel")
    divDescricaoJogo.style.display = "none"

    btnReiniciarJogo.style.display = "none"
    btnDesistir.style.display = "none"
    btnIniciarJogo.style.display = "block"

    ///// Não vai escutar o teclado
    capturaTecla = false
    window.location.reload();
}
/// Abre a mensagem se quer jogar novamente ou voltar para a pagina inicial
function fimDeJogo (){
    /// Mostra a div com as opçoes Novo Jogo // Home
        divFimDeJogo.classList.remove("invisivel")      /// Div com a mensagem Fim de Jogo
        divBotoes.classList.remove("div-btn-secundario") /// Botoes que ficam emcima
        divBotoes.classList.add("invisivel")
        btnDesistir.style.display = "none"
    /// Se perder o jogo
        if(letrasErradas.length == 6){
            imgGanhou.style.display = "none"
            imgPerdeu.style.display = "block"
            spanPalavraCorreta.textContent = "Perdeu! Perdeu! Perdeu!"
        }
    /// Se perder ganhar jogo
        if(letrasCorretas.length == palavraSorteada.length){
            imgPerdeu.style.display = "none"
            imgGanhou.style.display = "block"
            spanPalavraCorreta.textContent = "Muito bem voce acertou 👍"
        }
    
        tecladoEinput.style.display = "none"   /// Esconde o teclado e o textarea quando vencer ou perder o jogo.
    
    ///Limpa o campo input e as teclas que foram escolhidas no jogo anterior.
        input.value = ""
        letrasErradas = []
        letrasCorretas = []
    
        limpaForca()   
}







        