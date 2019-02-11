var num

num = parseInt(prompt("Entre com um número inteiro: "))

if((num % 3 == 0) && (num % 4 == 0) && (num % 5 == 0)){
  alert("O número " + num + " é divisível por 3, por 4 e por 5 ao mesmo tempo")
}else{
  alert("O número " + num + " não é divisível por 3, por 4 e por 5 ao mesmo tempo")
}
