const pessoa1 = "Danilo"
const pessoa2 = "Perola"
const pessoa3 = "Fabiana"

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)

const pessoas = ["Danilo", "João", "Alexandere", "Nicole", "perola"]
console.log(pessoas[0])
console.log(pessoas[1])
console.log(pessoas[2])
console.log(pessoas[3])
console.log(pessoas[4])


const pessoas2 = [
    {nome: "Danilo", idade: 20},
    {nome: "João", idade: 19}, 
    {nome: "Alexandre", idade: 17}  
]

console.log(`${pessoas2[0].nome} tem ${pessoas2[0].idade} Anos. E o ${pessoas2[1].nome} tem ${pessoas2[1].idade} Anos. E por ultimo o ${pessoas2[2].nome} tem ${pessoas2[2].idade} Anos.`)



console.log(pessoas.length)
console.log(pessoas2.length)