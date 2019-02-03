var notaCem = 0, notaCinq = 0, notaVin = 0, notaDez = 0, notaCinc = 0, notaDois = 0
var moedaUmReal = 0, moedaCinq = 0, moedaVinCin = 0, moedaDez = 0, moedaCinc = 0, moedaUm = 0
var valor

valor = parseFloat(prompt("Entre com o valor de troco: "))

notaCem = Math.floor(valor / 100)
valor = valor % 100
notaCinq = Math.floor(valor / 50)
valor = valor % 50
notaVin = Math.floor(valor / 20)
valor = valor % 20
notaDez = Math.floor(valor / 10)
valor = valor % 10
notaCinc = Math.floor(valor / 5)
valor = valor % 5
notaDois = Math.floor(valor / 2)
valor = valor % 2
moedaUmReal = Math.floor(valor)
valor = valor % 1
moedaCinq = Math.floor(valor / 0.5)
valor = valor % 0.5
moedaVinCin = Math.floor(valor / 0.25)
valor = valor % 0.25
moedaDez = Math.floor(valor / 0.10)
valor = valor % 0.10
moedaCinc = Math.floor(valor / 0.05)
valor = valor % 0.05
moedaUm = Math.round(valor / 0.01)

texto = ""
notaCem == 0 ? {} : texto = texto + notaCem + " cédula(s) de R$ 100\n"
notaCinq == 0 ? {} : texto = texto + notaCinq + " cédula(s) de R$ 50\n"
notaVin == 0 ? {} : texto = texto + notaVin + " cédula(s) de R$ 20\n"
notaDez == 0 ? {} : texto = texto + notaDez + " cédula(s) de R$ 10\n"
notaCinc == 0 ? {} : texto = texto + notaCinc + " cédula(s) de R$ 5\n"
notaDois == 0 ? {} : texto = texto + notaDois + " cédula(s) de R$ 2\n"
moedaUmReal == 0 ? {} : texto = texto + moedaUmReal + " moeda(s) de R$ 1\n"
moedaCinq == 0 ? {} : texto = texto + moedaCinq + " moeda(s) de R$ 0.50\n"
moedaVinCin == 0 ? {} : texto = texto + moedaVinCin + " moeda(s) de R$ 0.25\n"
moedaDez == 0 ? {} : texto = texto + moedaDez + " moeda(s) de R$ 0.10\n"
moedaCinc == 0 ? {} : texto = texto + moedaCinc + " moeda(s) de R$ 0.05\n"
moedaUm == 0 ? {} : texto = texto + moedaUm + " moeda(s) de R$ 0.01\n"

alert(texto)
