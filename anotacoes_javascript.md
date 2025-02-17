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
