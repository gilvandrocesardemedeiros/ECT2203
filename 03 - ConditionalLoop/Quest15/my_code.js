var num, seq1 = 1, seq2 = 1, seq3 = 1

num = parseInt(prompt("Entre com o número N: "))

alert("A sequência de Fibonacci até o número N será: ")
alert(seq1)
while(seq3 < num){
  seq3 = seq1 + seq2
  alert(seq2)
  seq1 = seq2
  seq2 = seq3
}
