var nascimento_data = new Date()
console.log(nascimento_data)


var nascimento_data = new Date(2005, 4, 27, 12)
console.log(nascimento_data)

var nascimentos_data = new Date("27 may 2005 12:00")
console.log(nascimentos_data)


const today = new Date()

console.log("Dia, " + nascimento_data.getDate())
console.log("Mês, " + (nascimento_data.getMonth() + 1))
console.log("Ano, " + nascimento_data.getFullYear())
console.log("Idade, " + (today.getFullYear() - nascimento_data.getFullYear()))
