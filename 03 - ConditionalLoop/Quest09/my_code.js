var nota1, nota2

nota1 = parseFloat(prompt("Entre com a primeira nota do aluno (entre 0.0 e 10.0): "))
while(nota1 < 0.0 || nota1 > 10.0){
  alert("Nota inválida")
  nota1 = parseFloat(prompt("Entre com a primeira nota do aluno (entre 0.0 e 10.0): "))
}

nota2 = parseFloat(prompt("Entre com a segunda nota do aluno (entre 0.0 e 10.0): "))
while(nota2 < 0.0 || nota2 > 10.0){
  alert("Nota inválida")
  nota2 = parseFloat(prompt("Entre com a segunda nota do aluno (entre 0.0 e 10.0): "))
}

alert("A média foi de: " + (nota1 + nota2) / 2)
