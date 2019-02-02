var horas, dias

horas = parseInt(prompt("Entre com o número de horas: "))
dias = Math.floor(horas / 24)
horas = horas % 24

alert(dias + " dias e " + horas + " horas")
