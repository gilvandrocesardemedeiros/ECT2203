var conta, comissao, total

conta = parseFloat(prompt("Entre com o valor da conta (em R$): "))

comissao = conta * (10 / 100)
total = conta + comissao

alert("O subtotal é de: " + conta + " R$" + "\nA comissão é de: " + comissao + " R$" + "\nO total é de: " + total + " R$")
