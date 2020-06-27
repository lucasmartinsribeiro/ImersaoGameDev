//função de configuração
function setup() {
  createCanvas(windowWidth, windowHeight)

  frameRate(40)
  somDoJogo.loop()
  jogo = new Jogo()
  jogo.setup()
}

//função de pressionar
function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
  }
}

//função de desenhar na tela
function draw() {
  cenario.exibe()
  cenario.move()
  cenario.exibeGrama()

  pontuacao.exibe()
  pontuacao.adicionarPonto()
  
  personagem.exibe()
  personagem.aplicaGravidade()

  

  

    const inimigo = inimigos[inimigoAtual]

    //a posição do inimigo é menor que o negativo da largura  
    const inimigoVisivel = inimigo.x < -inimigo.largura

    inimigo.exibe()
    inimigo.move()

    //se o inimigo já tiver passado inteiro, ai o outro pode vir
    if(inimigoVisivel){
      //pegar o inimigoAtual que era zero e andar 1
      inimigoAtual++
      if(inimigoAtual > 2){
        inimigoAtual = 0
      }
      Inimigo.velocidade = parseInt(random(10, 30))
    }

    if (personagem.estaColidindo(inimigo)) {
      somDoJogo.stop()
      noLoop()//para na hora da colisão, o jogo parar
      somGameOver.play()
      //na largura eu subitrai pelo tamanho da imagem
      image(imagemGameOver, width/2 - 200, height/3)
    }

  
}