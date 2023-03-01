let numberOne = prompt('Digíte o primeiro número: ')
let numberTwo = prompt('Digíte o segundo número: ')

let resultSum = Number(numberOne)+Number(numberTwo)
let resultSub = Number(numberOne)-Number(numberTwo)
let resultMult = Number(numberOne)*Number(numberTwo)
let resulDiv = Number(numberOne)/Number(numberTwo)
let resultRest = Number(numberOne)%Number(numberTwo)

alert(`A soma dos dois números: ${resultSum}`)
alert(`A subtração dos dois números: ${resultSub}`)
alert(`A multiplicação dos dois números: ${resultMult}`)
alert(`A divisão dos dois números: ${resulDiv}`)
alert(`O resto da divisão dos dois números: ${resultRest}`)

if(resultRest==0){
    alert('A soma dos dois números é par!')
}else{
    alert('A soma dos dois números é ímpar!')
}

if(numberOne==numberTwo){
    alert('Os números inseridos são iguais!')
}else{
    alert('Os numeros inseridos são diferentes!')
}