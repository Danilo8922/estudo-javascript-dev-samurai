const pessoa = {
    nome: "Danilo",
    idade: 19,
    endereco: {
        cidade: "Atibaia",
        bairro: "Pedreira",
    },
}

pessoa.nome = "Perola"
pessoa.corDoCabelo = "Cabelo Preto"

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.corDoCabelo)
console.log(`${pessoa.nome} tem ${pessoa.idade} e reside na cidade de ${pessoa.endereco.cidade} no bairro da ${pessoa.endereco.bairro}`)