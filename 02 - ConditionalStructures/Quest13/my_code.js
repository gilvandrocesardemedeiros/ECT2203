var ano

ano = parseInt(prompt("Entre com o ano: "))

if((ano % 4 == 0) && (ano % 100 != 0)){
  alert("O ano " + ano + " é bissexto")
}else if(ano % 400 == 0){
  alert("O ano " + ano + " é bissexto")
}else{
  alert("O ano " + ano + " não é bissexto")
}
