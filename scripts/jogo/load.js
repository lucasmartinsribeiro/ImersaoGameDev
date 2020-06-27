//função de carregar as imagens e os sons
function preload() {
    imagemCenario_1 = loadImage('imagens/cenario/BG_Decor.png')
    imagemCenario_2 = loadImage('imagens/cenario/Foreground.png')
    imagemCenario_3 = loadImage('imagens/cenario/Middle_Decor.png')
    imagemCenario_4 = loadImage('imagens/cenario/Sky.png')
    imagemCenario_5 = loadImage('imagens/cenario/Ground.png')
  
    //imagemCenario = loadImage('imagens/cenario/floresta.png')
  
    imagemGameOver = loadImage('imagens/assets/game-over.png')
    imagemPersonagem = loadImage('imagens/personagem/correndo.png')
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')
  
    somDoJogo = loadSound('sons/trilha_jogo.mp3')
    somDoPulo = loadSound('sons/somPulo.mp3')
    somGameOver = loadSound('sons/gameOver.wav')
  }