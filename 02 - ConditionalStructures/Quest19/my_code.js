var xp, yp, xie, yie, xsd, ysd, prov

xie = parseFloat(prompt("Entre com a coordenada X do ponto R1 do retângulo: "))
yie = parseFloat(prompt("Entre com a coordenada Y do ponto R1 do retângulo: "))
xsd = parseFloat(prompt("Entre com a coordenada X do ponto R2 do retângulo: "))
ysd = parseFloat(prompt("Entre com a coordenada Y do ponto R2 do retângulo: "))
xp = parseFloat(prompt("Entre com a coordenada X do ponto P: "))
yp = parseFloat(prompt("Entre com a coordenada Y do ponto P: "))

verificarPonto(xie, yie, xsd, ysd, xp, yp)

function verificarPonto(xie, yie, xsd, ysd, xp, yp){
  if(xie > xsd){
    prov = xie
    xie = xsd
    xsd = prov
  }
  if(yie > ysd){
    prov = yie
    yie = ysd
    ysd = prov
  }
  if((xie == xsd) || (yie == ysd)){
    alert("Os pontos R1 e R2 não correspondem a um retângulo!")
    return
  }
  if((xp == xie) || (xp == xsd)){
    if((yp <= ysd) && (yp >= yie)){
      alert("O ponto P está na borda do retângulo!")
      return
    }
  }
  if((yp == yie) || (yp == ysd)){
    if((xp <= xsd) && (xp >= xie)){
      alert("O ponto P está na borda do retângulo!")
      return
    }
  }
  if((xp < xsd) && (xp > xie)){
    if((yp < ysd) && (yp > yie)){
      alert("O ponto P está dentro do retângulo!")
      return
    }
  }else{
    alert("O ponto P está fora do retângulo!")
  }
}
