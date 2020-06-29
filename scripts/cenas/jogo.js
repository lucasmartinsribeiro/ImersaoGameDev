class Jogo {
    constructor() {
      this.inimigoAtual = 0
    }
  
    setup() {
      cenario = new Cenario([imagemCenario_1, imagemCenario_2, imagemCenario_3, imagemCenario_4, imagemCenario_5], 3)
      pontuacao = new Pontuacao()
  
      personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
      const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);
      const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);
      const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 100)
  
      inimigos.push(inimigo)
      inimigos.push(inimigoGrande)
      inimigos.push(inimigoVoador)
    }
  
    keyPressed(key) {
      if (key === 'ArrowUp') {
        personagem.pula()
        somDoPulo.play()
      }
    }
  
    draw() {
      const inimigo = inimigos[this.inimigoAtual]
      const inimigoVisivel = inimigo.x < -inimigo.largura
      
      cenario.exibe();
      cenario.move();
      cenario.exibeGrama()
  
      pontuacao.exibe()
      pontuacao.adicionarPonto()
      personagem.exibe();
      personagem.aplicaGravidade();
  
      inimigo.exibe()
      inimigo.move()
      
      if(inimigoVisivel) {
        this.inimigoAtual++
        if(this.inimigoAtual > 2) {
          this.inimigoAtual = 0
        }
        inimigo.alteraVelocidade(parseInt(random(10, 20)))
      }
  
      if (personagem.estaColidindo(inimigo)) {
        somDoJogo.stop()
        noLoop()//para na hora da colisão, o jogo parar
        somGameOver.play()
        //na largura eu subitrai pelo tamanho da imagem
        image(imagemGameOver, width / 2 - 200, height / 3)
      }
    }
  }