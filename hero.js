class hero {
    constructor(nome, age, type, ataque){
        this.name = nome
        this.age = age
        this.type = type
        this.ataque = ataque

        switch(type){
            case "ninja":
                this.ataque = "shuriken"
                break
            case "guerreiro":
                this.ataque = "espada"
                break
            case "mago":
                this.ataque = "magia"
                break
            case "monge":
                this.ataque = "artes marciais"
                break
            }
    }
    atacar(type, nome){
        console.log(`O ${this.type} ${this.name} atacou usando ${this.ataque}.`)
    }
}

let ninja = new hero("Naruto", 25, "ninja", "shuriken")
let guerreiro = new hero("Boromir", 47, "guerreiro", "espada")
let mago = new hero("Gandalf", 3859, "mago", "magia")
let monge = new hero("Ya Fang", 62, "monge", "artes marciais")

ninja.atacar()
guerreiro.atacar()
mago.atacar()
monge.atacar()
