var num

num = parseFloat(prompt("Entre com um número diferente de -4. Será calculada a raíz quadrada de números maiores que 15: "))

while(num != -4){
  if(num > 15){
    alert("A raíz de " + num + " é " + Math.sqrt(num))
  }else{
    alert("O número é menor ou igual a 15")
  }
  num = parseFloat(prompt("Entre com um número diferente de -4: "))
}
