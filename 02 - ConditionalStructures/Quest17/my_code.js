var nota1, nota2, nota3, media

nota1 = parseFloat(prompt("Entre com a nota 01: "))
nota2 = parseFloat(prompt("Entre com a nota 02: "))

media = ((nota1 * 5) + (nota2 * 6)) / 11

alert("A média foi de: " + media)

if(media >= 7){
  alert("APROVADO")
}else if (media <= 3){
  alert("REPROVADO")
}else{
  alert("Necessário fazer a prova final")
  nota3 = parseFloat(prompt("Entre com a nota final: "))
  media = (nota1 + nota2 + nota3) / 3
  if(media < 5){
    alert("A média foi de: " + media + " e o aluno foi REPROVADO")
  }else{
    alert("A média foi de: " + media + " e o aluno foi APROVADO")
  }
}
