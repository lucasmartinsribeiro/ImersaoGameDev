class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    
    this.variacaoY = variacaoY
    this.yInicial = height - this.altura - this.variacaoY
    this.y = this.yInicial
    
    this.velocidadeDoPulo = 0
    this.gravidade = 6 //diminui ou aumenta a altura do pulo
    this.alturaDoPulo = -50
    this.pulos = 0
    this.quantidadeMaximaDePulos = 2
  }
  
  //calculo a velocidade do pulo e coloco um limite de pulo de no máximo 2
  pula() {
    if(this.pulos < this.quantidadeMaximaDePulos) {
      this.velocidadeDoPulo = this.alturaDoPulo
      this.pulos++
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    //eu faço a validação que ela pausou no chão, e depois disso eu restauro os números de pulos dela
    if(this.y > this.yInicial){
      this.y = this.yInicial
      this.pulos = 0
    }
  }
  
  estaColidindo(inimigo) {
    const precisao = .7
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    )
    
    return colisao
  }

}