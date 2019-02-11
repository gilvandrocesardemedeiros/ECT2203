var deposito, rendimento

deposito = parseFloat(prompt("Entre com o valor do depósito (em R$): "))

if(deposito <= 1000.0){
  rendimento = 1.04 * deposito
}else if (deposito <= 5000.0){
  rendimento = 1.045 * deposito
}else{
  rendimento = 1.05 * deposito
}

alert("O rendimento ao fim de um ano foi de: " + rendimento)
