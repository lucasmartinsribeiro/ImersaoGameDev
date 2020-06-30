function preload() {
    imagemCenario_1 = loadImage('imagens/cenario/BG_Decor.png')
    imagemCenario_2 = loadImage('imagens/cenario/Foreground.png')
    imagemCenario_3 = loadImage('imagens/cenario/Middle_Decor.png')
    imagemCenario_4 = loadImage('imagens/cenario/Sky.png')
    imagemCenario_5 = loadImage('imagens/cenario/Ground.png')
    //imagemCenario = loadImage('imagens/cenario/floresta.png')
  
    imagemTelaInicial = loadImage('imagens/assets/telaInicial.png')
    imagemVida = loadImage('imagens/assets/coracao.png')
    imagemGameOver = loadImage('imagens/assets/game-over.png')
    imagemPersonagem = loadImage('imagens/personagem/correndo.png')
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')
  
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')

    fita = loadJSON('fita/fita.json');
    
    somDoJogo = loadSound('sons/trilha_jogo.mp3')
    somDoPulo = loadSound('sons/somPulo.mp3')
    somGameOver = loadSound('sons/gameOver.wav')
  }