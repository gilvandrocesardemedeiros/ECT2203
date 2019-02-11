var a, b, c, raiz1, raiz2, delta

alert("As equações aqui trabalhadas serão do tipo ax² + bx + c = 0")
a = parseFloat(prompt("Entre com o coeficiente a: "))
b = parseFloat(prompt("Entre com o coeficiente b: "))
c = parseFloat(prompt("Entre com o coeficiente c: "))

delta = Math.pow(b,2) - 4 * a * c
if(delta < 0){
  alert("Não há nenhuma raiz no conjunto dos números reais (delta < 0)")
}else if(delta == 0){
  raiz1 = (-1*b)/(2*a)
  alert("Há apenas uma raiz (delta == 0), sendo ela: " + raiz1)
}else{
  raiz1 = (-1*b + Math.sqrt(delta)) / (2*a)
  raiz2 = (-1*b - Math.sqrt(delta)) / (2*a)
  alert("Existem duas raizes reais e distintas, sendo elas: " + raiz1 + " e " + raiz2)
}
