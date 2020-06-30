class BotaoGerenciador {
  constructor(texto, x, y) {
    this.texto = texto
    this.x = x
    this.y = y
    
    this.botao = createButton(this.texto)
    this.proximoEstado = 'jogo'
  }
  
  draw() {
    this.botao.position(this.x, this.y)
    this.botao.center('horizontal')
    this.botao.addClass('botao-tela-inicial')
    this.botao.mousePressed(() => this.alteraCena())
  }
  
  alteraCena() {
    this.botao.remove()
    cenaAtual = 'jogo'
  }
}