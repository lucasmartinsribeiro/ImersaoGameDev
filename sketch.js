//cenario
let imagemCenario
let cenario

//personagem
let imagemPersonagem
let personagem

//inimigos
let imagemInimigo
let imagemInimigoGrande
let imagemInimigoVoador
let inimigo
let inimigoGrande
let inimigoVoador

//game over
let imagemGameOver

//pontuacao
let pontuacao

//som
let somDoJogo
let somDoPulo
let somGameOver



const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]

const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

//array de inimigos
const inimigos = []

//função de pré carregar as imagens e os sons
function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemGameOver = loadImage('imagens/assets/game-over.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')

  somDoJogo = loadSound('sons/trilha_jogo.mp3')
  somDoPulo = loadSound('sons/somPulo.mp3')
  somGameOver = loadSound('sons/gameOver.wav')
}

//função de configuração
function setup() {
  createCanvas(windowWidth, windowHeight)
  cenario = new Cenario(imagemCenario, 3)
  pontuacao = new Pontuacao()

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270)

  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 200)
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 1500)
  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 2500)

  //adicionar esses inimigos dentro do array
  inimigos.push(inimigo)
  inimigos.push(inimigoGrande)
  inimigos.push(inimigoVoador)

  frameRate(40)
  somDoJogo.loop()
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

  pontuacao.exibe()
  pontuacao.adicionarPonto()
  
  personagem.exibe()
  personagem.aplicaGravidade()

  inimigos.forEach(inimigo => {
    inimigo.exibe()
    inimigo.move()

    if (personagem.estaColidindo(inimigo)) {
      somDoJogo.stop()
      noLoop()//para na hora da colisão, o jogo parar
      somGameOver.play()
      //na largura eu subitrai pelo tamanho da imagem
      image(imagemGameOver, width/2 - 200, height/3)
    }
  })
}