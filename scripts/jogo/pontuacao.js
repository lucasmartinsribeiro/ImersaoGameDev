class Pontuacao{
    constructor(){
      this.pontos = 0
    }
    
    exibe(){
      textAlign(RIGHT)
      fill('#fff')//para mudar a cor
      textSize(50)//para aumentar o tamanho
      text(parseInt(this.pontos), width -30, 50)//para exibir os pontos, utilizando o parseTnt
    }
    
    adicionarPonto(){
      this.pontos += 0.2
    }
  
  }