var num, result

num = parseFloat(prompt("Entre com o número: "))

if(num < 0.0){
  result = Math.pow(num,2)
}else{
  result = Math.sqrt(num)
}

alert("O resultado foi: " + result)
