var consumo, valor

consumo = parseFloat(prompt("Entre com o consumo de água (em m³): "))

if(consumo <= 20.0){
  valor = consumo * 8.5
}else{
  valor = consumo * 11
}

alert("O valor à pagar é de: " + valor + " R$")
