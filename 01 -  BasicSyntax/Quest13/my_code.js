var precoFab, percLucro, percImp, lucro, imposto, precoFinal

precoFab = parseFloat(prompt("Entre com o preço de fábrica: "))
percLucro = parseFloat(prompt("Entre com a porcentagem do lucro: ")) / 100
percImp = parseFloat(prompt("Entre com a porcentagem de imposto: ")) / 100

lucro = precoFab * percLucro
imposto = precoFab * percImp
precoFinal = precoFab + lucro + imposto

alert("Preço de fábrica: " + precoFab + "\nLucro: " + lucro + "\nImposto: " + imposto + "\nPreço total: " + precoFinal)
