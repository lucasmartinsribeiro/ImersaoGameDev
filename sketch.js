//função de configuração
function setup() {
  createCanvas(windowWidth, windowHeight)

  frameRate(40)
  somDoJogo.loop()
  jogo = new Jogo()
  jogo.setup()
  cenaAtual = 'jogo'
}

//função de pressionar tecla
function keyPressed() {
  jogo.keyPressed(key)
}

//função de desenhar na tela
function draw() {
  if(cenaAtual === 'jogo'){
    jogo.draw()
  }
}