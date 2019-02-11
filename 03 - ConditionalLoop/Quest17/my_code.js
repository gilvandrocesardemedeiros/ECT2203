var limMin, limMax, chute, numTentativas = 0, acertou = false, resposta

limMin = parseInt(prompt("Entre com um número inteiro positivo, representando o limite mínimo dos números do jogo: (Exemplo: 0)"))
limMax = parseInt(prompt("Entre com um número inteiro positivo, representando o limite máximo dos números do jogo: (Exemplo: 100)"))
alert("Lembre-se de escolher e fixar um número para que o computador tente adivinhar (dentro do intervalo descrito nos passos anteriores)")

while(acertou == false){
  chute = Math.round(Math.random()*limMax + limMin)
  while(chute > limMax){
    chute = Math.round(Math.random()*limMax + limMin)
  }
  numTentativas++
  alert("O chute foi de: " + chute)
  resposta = parseInt(prompt("Eu acertei? Digite: 1 - se o número é maior que o chute, 2 - se o número é menor que o chute, 3 - se eu acertei"))
  switch(resposta){
    case 1:
      limMin = chute
      break;
    case 2:
      limMax = chute
      break;
    case 3:
      acertou = true
      break;
    default:
      alert("VALOR DIGITADO INCORRETAMENTE. FIM DE JOGO.")
      acertou = true
  }
}

alert("O número de tentativas foi de: " + numTentativas)
