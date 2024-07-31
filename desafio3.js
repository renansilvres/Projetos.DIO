// Definição da classe Heroi
class Heroi {
    // Construtor da classe Heroi
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    // Método atacar da classe Heroi
    atacar() {
      let ataque
      // Definição do ataque com base no tipo de herói
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia"
          break
        case "guerreiro":
          ataque = "usou espada"
          break
        case "monge":
          ataque = "usou artes marciais"
          break
        case "ninja":
          ataque = "usou shuriken"
          break
        default:
          ataque = "usou uma habilidade desconhecida"
      }
      // Mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
  }
  

  const heroi1 = new Heroi("Gandalf", 1000, "mago")
  heroi1.atacar() // Saída: O mago atacou usando magia
  
  const heroi2 = new Heroi("Conan", 30, "guerreiro");
  heroi2.atacar() // Saída: O guerreiro atacou usando espada
  