var numA, numB, resto = 1, mdc

numA = parseInt(prompt("Entre com o primeiro número inteiro positivo: "))
numB = parseInt(prompt("Entre com o segundo número inteiro positivo: "))

while(resto != 0){
  resto = numA % numB
  numA = numB
  mdc = numB
  numB = resto
}

alert("O Máximo Divisor Comum é: " + mdc)
