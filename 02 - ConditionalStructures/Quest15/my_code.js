var dia, diaDaSemana

dia = parseInt(prompt("Entre com o número do dia do ano de 2013: "))

diaDaSemana = dia % 7

if(dia > 365){
  alert("O ano de 2013 tem apenas 365 dias")
}else{
  if(diaDaSemana == 0){
    alert("O dia " + dia + " é uma segunda-feira")
  }else if (diaDaSemana == 1){
    alert("O dia " + dia + " é uma terça-feira")
  }else if (diaDaSemana == 2){
    alert("O dia " + dia + " é uma quarta-feira")
  }else if (diaDaSemana == 3){
    alert("O dia " + dia + " é uma quinta-feira")
  }else if (diaDaSemana == 4){
    alert("O dia " + dia + " é uma sexta-feira")
  }else if (diaDaSemana == 5){
    alert("O dia " + dia + " é um sábado")
  }else if (diaDaSemana == 6){
    alert("O dia " + dia + " é um domingo")
  }
}
