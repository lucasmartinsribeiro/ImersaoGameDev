class Pontuacao{
    constructor(){
      this.pontos = 0
    }
    
    exibe(){
      textAlign(RIGHT)
      //fill()
      textSize(40)
      text(parseInt(this.pontos), width -80, 50)
    }
    
    adicionarPonto(){
      this.pontos += .2
    }
  
  }