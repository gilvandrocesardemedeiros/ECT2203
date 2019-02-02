var vol, area, raioA, raioB, altura, pi = 3.14159265

function geratriz(raioA, raioB, altura){
    var g
    g = Math.sqrt(Math.pow((raioA-raioB),2) + Math.pow(altura,2))
    return g
}

raioA = parseFloat(prompt("Entre com o raio A: "))
raioB = parseFloat(prompt("Entre com o raio B: "))
altura = parseFloat(prompt("Entre com a altura: "))

vol = (pi * altura / 3) * (Math.pow(raioA,2) + raioA * raioB + Math.pow(raioB,2))
area = (pi * Math.pow(raioA,2)) + (pi * geratriz(raioA,raioB,altura) * (raioA + raioB)) + (pi * Math.pow(raioB,2))

alert("A área é de: " + area + "\nO volume é de: " + vol)
