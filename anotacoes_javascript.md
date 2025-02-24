### Tipagem

O Javascript é uma linguagem fracamente tipada, isso siginifica que "Ele" 
tentará converter em tempo de execução o dados do valor.

Exemplos:

```javascript
1 = int <--> inteiro
1.2 = float <--> flutuante
"Danilo" = string <--> Texto
true = boolean <--> booleano
```

Atualmente existem maneiras de "forçar" o tipo e até formas de utilizar linguagens / spersets
focados nesse assumto como TypeScript.

Isso é um ponto de atenção inportante dentro do JS, Já que dependendo do valor da variavel o seu programa pode 
"dar bugs" em função de tipos inesperados. E para isso utilizaremos artificios como comparador identico 

### Tipos de Variaveis

String
Number
booleam
infinity
NaN

## string

Variaveis do tipo texto, tudo que tiver dentro de aspas será um texto.
Aspas simples ou duplas, será um texto

## Number

Variaveis numericas, existem dois tipos de numeros: Inteiro e flutuante.
Inteiro 1, 2, 3, 4...
float 1.1, 1.2, 1.3 1.4... Numeros flutuantes devem ser escritos com ponto, não podendo utilizar virgulas,
já que o Javascript utiliza para separar variaveis.

## Booleam

a variavel booleana, exite duas atribuições, True --> Verdadeiro, False --> Falso,
as variaveis booleanas servem para decisões, se for verdadeiro acontece, se for falso não acontece,
simples assim.

## Infinity 

A variavel Infinity serve para expressar uma operação Infinita, algo que não possue resposta,
Exemplo: 1 dividido por 0

## NaN

a varivel NaN ou melhor Not a Number, serve para indentificar se a variavel é numerica ou Não.

## Null e underfind

Null significa que uma variavel ou objeto não existe um valor, é um valor vazio, ausênte.

Underfind siginifica q a variavel possue um valor indefinido. 

null e underfind são coisas diferentes, um reprenseta algo indefinido enquanto o outro representa um valor vazio.
         
### Variaveis

Na programação podemos utilizar a memoria do computador para armazenar dados.
Exempo de declaraçao de variavel: Var Nome = valor
var => tipo da variavel
Nome => Nome da variavel
valor => valor atribuido a Ela, pode ser de varios tipos, Number, string, booleam e etc.

tipos de variaveis

Var = na variavel Var, pode-se declarar seu valor, varias vezes no programa, e tambem, pode ser utilizadas de qualquer forme em outros escopos, se for definida no escopo global, pode ser usada e reedeclarada em ou escopo local, e algo que for declarado no escopo local, pode utilizar no escopo global normalmente.

Let = aqui é quase da mesma maneira, o que muda, é q se a variavel for declarada no escopo local, ele ão fica acessivel no escopo
global, mas se declarar na global pode usar no escopo local, segyue uma ordem de herarquia.

Const = consts são variaveis que não pode ser reedeclaradas, pode ler em todos os escopos, porem, não poderá declarar novamente, 
e tambem, não pode ler uma variavel declarada num escopo local, no escopo global, ou seja, tam segue uma herarquia.

existem regras basicas para as variaveis dentro da programação, são elas:

X-não podem conter espaços no nome
X-Precisa começar com letras, ou - ou $, não podem iniciar com numeros
X-Podem conter apenas letras, numeros, - ou $
X-Case sencitive
X-Não podem utilizar palavras reservadas do Javascript

# operadores aritimetcos

-operadores basicos 
+ --> Soma 
- --> subtração
* --> Multiplicação 
/ --> divisão

-Ordem de procedencia 
1° () --> Parenteses
2° * e / --> Multiplicação e divisão
3° + e - --> Soma e subtração

# Date

## Como se declara uma variável Date no JS

```javascript
new Date() // inicializa com a data e hora atual do computador.
new Date(year, month, day, hours, minutes, seconds, milliseconds) // inicializa com valores pré-definidos.
new Date(dateString) // inicializa a partir de uma string.
```

## Principais métodos

- `getDay()` e `setDay()` - Retorna / define o dia da semana (0-6).
- `getDate()` e `setDate()` - Retorna / define o dia do mês (1-31).
- `getMonth()` e `setMonth()` - Retorna / define o mês (0-11).
- `getFullYear()` e `setFullYear()` - Retorna / define o ano.
- `getHours()` e `setHours()` - Retorna / define a hora (0-23).
- `getMinutes()` e `setMinutes()` - Retorna / define os minutos (0-59).
- `getSeconds()` e `setSeconds()` - Retorna / define os segundos (0-59).
- `parse()` - Recupera uma data a partir de uma string.
- `toString()` - Retorna uma data como string.
- `toISOString()` - Retorna uma data como string no padrão ISO.
- `toTimeString()` - Retorna a hora apenas.

## comparações

Servem para comparar dois valores e/ou variáveis.

- Igual - `==`
- Diferente - `!=`
- Menor - `<`
- Menor igual - `<=`
- Maior - `>`
- Maior igual - `>=`

Uma comparação sempre retornará verdadeiro ou falso:

```javascript
1 > 2
1 == 1
"A" == "A"
"A" < "B"
```

Para variáveis:

```javascript
const idade = 16
const limite = 18

idade >= limite
```