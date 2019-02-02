var altura, massa,imc

altura = parseFloat(prompt("Entre com a altura (em metros): "))
massa = parseFloat(prompt("Entre com a massa (em kilograma): "))

imc = massa / Math.pow(altura,2)

alert("O IMC é de: " + imc)
