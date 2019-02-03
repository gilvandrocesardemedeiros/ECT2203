var minutos, dias, horas

minutos = parseInt(prompt("Entre com o número de minutos: "))

dias = Math.floor(minutos / (60*24))
minutos = minutos - dias * 60 * 24
horas = Math.floor(minutos / 60)
minutos = minutos - horas * 60

alert(dias + " dias, " + horas + " horas e " + minutos + " minutos")
