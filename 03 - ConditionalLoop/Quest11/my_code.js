var a1, razao

a1 = parseFloat(prompt("Entre com o valor do primeiro termo (número real maior que 1): "))
razao = parseFloat(prompt("Entre com o valor da razão da PG (número real maior que 1): "))

if(a1 > 1 && razao > 1){
  alert("A PG, com os valores até no máximo 200, será: ")
  while(a1 < 200){
    alert(a1)
    a1 = a1 * razao
  }
}else{
  alert("Valores inválidos!")
}
