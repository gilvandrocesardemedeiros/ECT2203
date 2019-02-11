var num, mult3 = 0, mult7 = 0

 num = parseInt(prompt("Entre com um número inteiro diferente de 0: "))

 while(num != 0){
   if(num % 3 == 0){
     mult3++
   }
   if(num % 7 == 0){
     mult7++
   }
   num = parseInt(prompt("Entre com um número inteiro diferente de 0: "))
 }

 alert("A quantidade de múltiplos de 3 foi: " + mult3 + ", e a quantidade de múltiplos de 7 foi de: " + mult7)
