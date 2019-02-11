var score = 0, nivel = 0, contNivel = 1, tela = "jogo"
var sadPepe, xPepe = -100, yPepe = 350
var tamRocha = 20, imgRocha
var x = 60, y = 250, auxX = 60, auxY = 250
var vidas = 3, contVidas = 0, hp = 100;
var a = 600, b = 275, auxA = 600, auxB = 275;
var FireballSpeed = 5, FireballColor = 240;
var quantBola = 0;
var cuboX = [];
var cuboY = [];
var musicaInicial = new Audio('vitas.mp3')
var musicaNeve = new Audio('neve.mp3')
var musicaGraminha = new Audio('graminha.mp3')
var musicaPraia = new Audio('praia.mp3')
var musicaEspaco = new Audio('espaco.mp3')
var musicaFinal = new Audio('final.mp3')
var musicaGameover = new Audio('gameover.mp3')
var rankingNome;
var rankingScore;
var quantJogos = 0;
var xEstrela = [];
var yEstrela = [];
var indiceRanking = 0;
var maiorScore = 0;
var nomeMaiorScore;

function preload () {
	sadPepe = loadImage("Sad_Pepe.png");
	imgRocha = loadImage("textura_rocha.jpg");
}

function setup() {
	createCanvas(400, 400);
	background(0);
	for(j = 0; j < 200; j++){
		cuboX[j] = 1400 + j*random(500, 2000);
		cuboY[j] = random(0, 400);
	}
}

var cenario = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//Desenhar estrelas
for(i = 0; i < 20; i++){
	xEstrela[i] = random(0,400);
	yEstrela[i] = random(25,375);
}

function Snowman (x,y) {
	//braços
	stroke(151, 105, 79);
  	strokeWeight(10);
	line(x+20, y, x+50, y-40);
  	line(x-20, y, x-50, y-40);
	//corpo
  	stroke(0);
  	strokeWeight(1);
	fill(255,255,255);
	ellipse(x, y+30, 70, 70);
	ellipse(x, y, 50, 50);
	ellipse(x, y-25, 35, 35);
	//olhos
	fill(255, 0, 0);
	ellipse(x-5, y-30, 5, 5);
	ellipse(x+5, y-30, 5, 5);
	//boca
	fill(0);
	ellipse(x,y-15, 14,5);
	//sobrancelhas
	strokeWeight(4);
	line(x-9, y-37, x-4, y-35);
	line(x+9, y-37, x+4, y-35);
  	//cartola
  	strokeWeight(1);
  	fill(FireballColor - 220, 0, 0);
  	rect(x-15,y-41,30,2);
  	rect(x-9.5, y-60, 20, 20);
  	fill(255);
  	rect(x-8,y-60, 4, 20);
  	//nariz
  	fill(255,165,0);
  	noStroke();
  	ellipse(x, y-25, 7, 7);
  	stroke(0,0,0);
  	triangle(x-3, y-28, x+3, y-28, x, y-12);
  	//botões
  	fill(FireballColor - 220, 0, 0);
  	ellipse(x, y+5, 5, 5);
  	ellipse(x, y+32.5, 5, 5);
}

function Fireball (a,b){
	//bola mais externa
	stroke(255,0,0);
	fill(FireballColor-20, FireballColor-90, 0);
	ellipse(a, b, 50, 50,0);
	//bolas mais internas
	noStroke();
	fill(FireballColor-15,FireballColor-130, 0);
	ellipse(a,b,40,40,0);
	fill(FireballColor-10, FireballColor-170, 0);
	ellipse(a,b,30,30,0);
	fill(FireballColor-5, FireballColor-210, 0);
	ellipse(a,b,20,20,0);
	fill(FireballColor, FireballColor-250, 0);
	ellipse(a,b,10,10,0);
}

function cuboDeGelo (cX, cY){
	strokeWeight(1);
	fill(220, 220, 220);
	rect(cX,cY,20,20, 5);
	fill(255, 250, 250);
	noStroke();
	rect(cX+10, cY+1, 6, 16, 3);
	stroke(0);
}

function draw (){

//Corrigindo bug de animação
if(x<30){
	x = 30
}

//Incremento de vida
if(((score % (2000 + 2000*contVidas)) == 0) &&(score != 0)){
	vidas++
	contVidas++
}

//Game Over
if(vidas < 0){
		tela = "gameOver"
}

if(tela == "gameOver"){
	musicaInicial.pause()
	musicaNeve.pause()
	musicaGraminha.pause()
	musicaPraia.pause()
	musicaEspaco.pause()
	musicaFinal.pause()
	musicaGameover.play()
	background(0)
	fill(255)
	textSize(20)
	text("Game Over"+"\n"+"Aperte Enter para recomeçar", 80, 200)
	musicaGameover.play()
	if(keyIsDown(ENTER)){
		score = 0;
		nivel = 0;
		contNivel = 1;
		xPepe = -100;
		yPepe = 350;
		tela = "jogo";
		x = 60;
		y = 250;
		auxX = 60;
		auxY = 250;
		vidas = 3;
		contVidas = 0;
		hp = 100;
		a = 600;
		b = 275;
		auxA = 600;
		auxB = 275;
		FireballSpeed = 5;
		FireballColor = 240;
		quantBola = 0;
		musicaGameover.pause()
}
}

//Passando de nível
if(tela == "inicial"){
	musicaNeve.pause()
	musicaGraminha.pause()
	musicaPraia.pause()
	musicaEspaco.pause()
	musicaFinal.pause()
	musicaGameover.pause()
	musicaInicial.play()
	background(155,155,155);
	Snowman (x,y);
	textSize(23);
	text("⛄:"+vidas, 310, 50);
	text("Score: "+score, 20, 20);
	text("Você passou!"+"\n"+"Pressione Enter para continuar", 40, 350)
	text("Bolas: "+(20-quantBola), 280, 20)
	if(hp>100){
		hp = 100
	}
	if(hp>= 80){
		text("😃"+parseInt(hp)+"%",10,50);
    }
	else{
		if(hp >= 60){
			text("🙂"+parseInt(hp)+"%",10,50)
		}
		else{
			if(hp >= 40){
				text("😕"+parseInt(hp)+"%",10,50)
			}
			else{
				if(hp >= 20){
					text("😢"+parseInt(hp)+"%",10,50)
			    }
				else{
					text("😭"+parseInt(hp)+"%",10,50)
			    }
			}
		}
	}
if(keyIsDown(ENTER)){
	nivel = contNivel
	tela = "jogo"
	contNivel++
	musicaInicial.pause()
}
}

if(tela == "vencer"){
	musicaNeve.pause()
	musicaGraminha.pause()
	musicaPraia.pause()
	musicaEspaco.pause()
	musicaFinal.pause()
	musicaGameover.pause()
	musicaInicial.play()
	background(155,155,155);
	Snowman (x,y);
	textSize(23);
	score+= (hp/100)*2000 + vidas*2000
	rankingNome = prompt("Entre com o seu nome: ")
	rankingScore = score
	text("Score Final: "+score, 20, 60);
	text("Você zerou o jogo!"+"\n"+"Parabéns"+"\n"+"Aperte Enter para continuar", 40, 300)
	tela = "fim"
}

if(tela == "fim"){
	musicaInicial.play()
	if(rankingScore > maiorScore){
		maiorScore = rankingScore
		nomeMaiorScore = rankingNome
	}
	if(keyIsDown(ENTER)){
indiceRanking++
score = 0;
nivel = 0;
contNivel = 1;
xPepe = -100;
yPepe = 350;
tela = "jogo";
x = 60;
y = 250;
auxX = 60;
auxY = 250;
vidas = 3;
contVidas = 0;
hp = 100;
a = 600;
b = 275;
auxA = 600;
auxB = 275;
FireballSpeed = 5;
FireballColor = 240;
quantBola = 0;
alert("A maior pontuação foi de: "+nomeMaiorScore+"\n"+"Com a incrível pontuação de :"+maiorScore)
}
}

//Main
if((nivel == 0)&&(tela == "jogo")){
	textSize(23)
	musicaInicial.play();
	background(155,155,155);
	Snowman (x,y);
	text("⛄:"+vidas, 310, 50);
	text("Score: "+score, 20, 20);
	text("Pressione Enter para começar", 40, 350);
	text("Bolas: "+(10-quantBola), 280, 20)
	if(hp>100){
		hp = 100
	}
	if(hp>= 80){
    	text("😃"+parseInt(hp)+"%",10,50);
    }
	else{
		if(hp >= 60){
		text("🙂"+parseInt(hp)+"%",10,50)
	}
		else{
			if(hp >= 40){
				text("😕"+parseInt(hp)+"%",10,50)
			}
			else{
				if(hp >= 20){
					text("😢"+parseInt(hp)+"%",10,50)
	    		}
				else{
					text("😭"+parseInt(hp)+"%",10,50)
			    }
			}
		}
	}
	if(keyIsDown(ENTER)){
		nivel = contNivel;
		contNivel++
		musicaInicial.pause()
	}
}

//Nível 1:
if((nivel == 1)&&(tela == "jogo")){
musicaNeve.play()
background(56,176,222);
//Chão
fill(255,255,255);
rect(0,300,400,200,0);

//Movimento
if(keyIsDown(LEFT_ARROW)){
    a+=5;
    b+= random(-5,5);
   	x = x + random(-1,1);
}
if(keyIsDown(RIGHT_ARROW)){
	a-=FireballSpeed;
    b+= random(-5,5);
  	x = x + random(-1,1);
}
if(keyIsDown(UP_ARROW)&&(y==auxY)){
	y-=100;
}
if(keyIsDown(DOWN_ARROW)){
	y+=30;
}

//Propriedades da bola de fogo
a = a + random(-1.5*FireballSpeed,FireballSpeed);
b = b + random(-1.1*FireballSpeed,FireballSpeed);
FireballColor = FireballColor + random(-1,1);

if (y != auxY){
//Boneco de neve voltando ao chão depois do pulo
	if(y < auxY){
		y++
    }
//Definição da altura do piso
	if(y > auxY){
		y = auxY
    }
}

//Quando a bola de fogo passar do limite esquerdo da tela
if(a <= -50){
	score = score + 100;
    a = 500 + random(0, 200);
    quantBola++
}
//Limite superior da altura da bola
if(b < (auxB-25)){
	b = auxB-25
}
//Limite inferior da altura da bola
if(b > auxB){
	b = auxB
}
//Dano em relação à distância
if (dist(x-20, y, a, b) <= 80){
	hp = hp - FireballSpeed/3;
}
//Decremento de vida
if (hp <= 0){
	xPepe = 460;
	vidas--;
	hp = 100;
	quantBola = 0;
}
if(xPepe >= -100){
	xPepe-=8;
}
//Personagens
for(i = 0; i < 40; i++){
	cuboDeGelo(cuboX[i], cuboY[i])
	cuboX[i]-=5
	if(dist(cuboX[i], cuboY[i], x, y) <= 40){
		hp++
	}
}
Fireball (a,b);
Snowman (x,y);
image(sadPepe, xPepe, yPepe);
text("-1 Vida", xPepe, yPepe);
//Informações sobre o jogo
textSize(23);
strokeWeight(4);
stroke(108,123,139);
fill(FireballColor, FireballColor-250, 0);
if(hp>100){
	hp = 100
}
if(hp>= 80){
	text("😃"+parseInt(hp)+"%",10,50);
}
else{
	if(hp >= 60){
		text("🙂"+parseInt(hp)+"%",10,50)
    }
	else{
		if(hp >= 40){
			text("😕"+parseInt(hp)+"%",10,50)
        }
        else{
			if(hp >= 20){
				text("😢"+parseInt(hp)+"%",10,50)
            }
            else{
				text("😭"+parseInt(hp)+"%",10,50)
            }
        }
	}
}
text("⛄:"+vidas, 310, 50);
text("Nível:❄", 160, 35);
text("Score: "+score, 20, 20);
text("North Pole", 140, 380);
text("Bolas: "+(20-quantBola), 280, 20);
if(quantBola == 20) {
			quantBola = 0
			tela = "inicial"
}
}

//Nivel 2:
if((nivel == 2)&&(tela == "jogo")){
	musicaGraminha.play()
    background(56,176,222);
	//Chão
   	fill(0,255,0);
    rect(0,300,400,200,0);

//Movimento
if(keyIsDown(LEFT_ARROW)){
    a+=5;
    b+= random(-5,5);
   	x = x + random(-1,1);
}
if(keyIsDown(RIGHT_ARROW)){
	a-=FireballSpeed;
    b+= random(-5,5);
	x = x + random(-1,1);
}
if(keyIsDown(UP_ARROW)&&(y==auxY)){
    y-=100;
}
if(keyIsDown(DOWN_ARROW)){
    y+=30;
}
//Propriedades da bola de fogo
a = a + random(-1.6*FireballSpeed,FireballSpeed);
b = b + random(-1.1*FireballSpeed,FireballSpeed);
FireballColor = FireballColor + random(-1,1);

if (y != auxY){
	//Boneco de neve voltando ao chão depois do pulo
    if(y < auxY){
		y++
    }
	//Definição da altura do piso
    if(y > auxY){
		y = auxY
    }
}
//Quando a bola de fogo passar do limite esquerdo da tela
if(a <= -50){
	score = score + 100;
    a = 500 + random(0, 200);
    quantBola++
}
//Limite superior da altura da bola
if(b < (auxB-25)){
	b = auxB-25
}
//Limite inferior da altura da bola
if(b > auxB){
	b = auxB
}
//Dano em relação à distância
if (dist(x-20, y, a, b) <= 80){
	hp = hp - FireballSpeed/5;
}
//Decremento de vida
if (hp <= 0){
	xPepe = 460;
	vidas--;
	hp = 100;
	quantBola = 0;
}
if(xPepe >= -100){
	xPepe-=8;
}
//Personagens
for(i = 40; i < 80; i++){
		cuboDeGelo(cuboX[i], cuboY[i])
		cuboX[i]-=7
		if(dist(cuboX[i], cuboY[i], x, y) <= 40){
			hp++
		}
	}
Fireball (a,b);
Snowman (x,y);
image(sadPepe, xPepe, yPepe);
text("-1 Vida", xPepe, yPepe);
//Informações sobre o jogo
textSize(23);
strokeWeight(4);
stroke(108,123,139);
fill(FireballColor, FireballColor-250, 0);
if(hp>100){
	hp = 100
}
if(hp>= 80){
	text("😃"+parseInt(hp)+"%",10,50);
}
else{
	if(hp >= 60){
		text("🙂"+parseInt(hp)+"%",10,50)
    }
	else{
		if(hp >= 40){
			text("😕"+parseInt(hp)+"%",10,50)
        }
        else{
			if(hp >= 20){
				text("😢"+parseInt(hp)+"%",10,50)
            }
            else{
				text("😭"+parseInt(hp)+"%",10,50)
            }
        }
	}
}
text("Bolas: "+(20-quantBola), 280, 20)
text("⛄:"+vidas, 310, 50);
text("Nível:☠", 160, 35);
text("Score: "+score, 20, 20);
text("Graminha ECT", 100, 380);
if(quantBola == 20) {
	quantBola = 0
	tela = "inicial"
}
}

//Nivel 3:
if((nivel == 3)&&(tela == "jogo")){
	musicaPraia.play()
    background(0,191,255);
    //Chão
   	fill(218,165,32);
	rect(0,300,400,200,0);
	fill(255,255,0);
	noStroke();
	ellipse(325, 75, 50, 50);
//Movimento
if(keyIsDown(LEFT_ARROW)){
    a+=5;
    b+= random(-5,5);
   	x = x + random(-1,1);
}
if(keyIsDown(RIGHT_ARROW)){
	a-=FireballSpeed;
    b+= random(-5,5);
	x = x + random(-1,1);
}
if(keyIsDown(UP_ARROW)&&(y==auxY)){
    y-=100;
}
if(keyIsDown(DOWN_ARROW)){
    y+=30;
}
//Propriedades da bola de fogo
a = a + random(-1.7*FireballSpeed,FireballSpeed);
b = b + random(-1.1*FireballSpeed,FireballSpeed);
FireballColor = FireballColor + random(-1,1);

if (y != auxY){
	//Boneco de neve voltando ao chão depois do pulo
    if(y < auxY){
		y++
    }
	//Definição da altura do piso
    if(y > auxY){
		y = auxY
    }
}
//Quando a bola de fogo passar do limite esquerdo da tela
if(a <= -50){
	score = score + 100;
    a = 500 + random(0, 200);
    quantBola++
}
//Limite superior da altura da bola
if(b < (auxB-25)){
	b = auxB-25
}
//Limite inferior da altura da bola
if(b > auxB){
	b = auxB
}
//Dano em relação à distância
if (dist(x-20, y, a, b) <= 80){
	hp = hp - FireballSpeed/5;
}
//Decremento de vida
if (hp <= 0){
	xPepe = 460;
	vidas--;
	hp = 100;
	quantBola = 0;
}
if(xPepe >= -100){
	xPepe-=8;
}
//Personagens
  for(i = 80; i < 120; i++){
		cuboDeGelo(cuboX[i], cuboY[i])
		cuboX[i]-=7
		if(dist(cuboX[i], cuboY[i], x, y) <= 40){
				hp++
		}
}
Fireball (a,b);
Snowman (x,y);
image(sadPepe, xPepe, yPepe);
text("-1 Vida", xPepe, yPepe);
//Informações sobre o jogo
textSize(23);
strokeWeight(4);
stroke(108,123,139);
fill(FireballColor, FireballColor-250, 0);
if(hp>100){
	hp = 100
}
if(hp>= 80){
	text("😃"+parseInt(hp)+"%",10,50);
}
else{
	if(hp >= 60){
		text("🙂"+parseInt(hp)+"%",10,50)
    }
	else{
		if(hp >= 40){
			text("😕"+parseInt(hp)+"%",10,50)
        }
        else{
			if(hp >= 20){
				text("😢"+parseInt(hp)+"%",10,50)
            }
            else{
				text("😭"+parseInt(hp)+"%",10,50)
            }
        }
	}
}
text("Bolas: "+(20-quantBola), 280, 20)
text("⛄:"+vidas, 310, 50);
text("Nível:🏝", 160, 35);
text("Score: "+score, 20, 20);
text("Praia", 160, 380);
if(quantBola == 20) {
	quantBola = 0
	tela = "inicial"
}
}

//Nível 4:
if((nivel == 4)&&(tela == "jogo")){
	musicaEspaco.play()
    background(22,20,28);
    for(i = 120; i < 160; i++){
		cuboDeGelo(cuboX[i], cuboY[i])
		cuboX[i]-=9
		if(dist(cuboX[i], cuboY[i], x, y) <= 40){
				hp++
		}
	}
//Movimento
if(keyIsDown(LEFT_ARROW)){
    a++;
}
if(keyIsDown(RIGHT_ARROW)){
	a-=FireballSpeed;
}
if(keyIsDown(UP_ARROW)){
    y+=2;
}
if(keyIsDown(DOWN_ARROW)){
    y-=2;
}
//Propriedades da bola de fogo
a = a + random(-1.7*FireballSpeed,1.5*FireballSpeed);
b = b + random(-4*FireballSpeed,4*FireballSpeed);
FireballColor = FireballColor + random(-1,1);
if(b>335){
	b = 335
}
if(b< 45){
	b = 45
}
if (y < 75){
	y = 75
}
if(y > 320){
	y = 320
}
if( y < 50){
	hp--
}
//Quando a bola de fogo passar do limite esquerdo da tela
if(a <= -50){
	score = score + 100;
    a = 500 + random(0, 200);
    b = random(0,400);
    quantBola++
}
//Dano em relação à distância
if (dist(x-20, y, a, b) <= 80){
	hp = hp - FireballSpeed/5;
}
//Decremento de vida
if (hp <= 0){
	xPepe = 460;
	vidas--;
	hp = 100;
	quantBola = 0;
}
if(xPepe >= -100){
	xPepe-=8;
}

text("-1 Vida", xPepe, yPepe);
//Informações sobre o jogo
if(quantBola == 20) {
	quantBola = 0
	tela = "inicial"
}

	for ( i = 0; i < cenario.length; i++ ) {
	for ( j = 0; j < cenario[0].length; j++ ) {
		if (cenario[i][j] == 1) {
			image(imgRocha, j*tamRocha, i*tamRocha);
		}
	}
}
//Personagens
Fireball (a,b);
Snowman (x,y);
image(sadPepe, xPepe, yPepe);
textSize(23);
strokeWeight(4);
stroke(108,123,139);
fill(FireballColor, FireballColor-250, 0);
if(hp>100){
	hp = 100
}
if(hp>= 80){
	text("😃"+parseInt(hp)+"%",10,50);
}
else{
	if(hp >= 60){
		text("🙂"+parseInt(hp)+"%",10,50)
    }
	else{
		if(hp >= 40){
			text("😕"+parseInt(hp)+"%",10,50)
        }
        else{
			if(hp >= 20){
				text("😢"+parseInt(hp)+"%",10,50)
            }
            else{
				text("😭"+parseInt(hp)+"%",10,50)
            }
        }
	}
}
text("Bolas: "+(20-quantBola), 280, 20)
text("⛄:"+vidas, 310, 50);
text("Nível:🚀", 160, 35);
text("Score: "+score, 20, 20);
text("Espaço", 180, 380);
}

//Nivel 5:
if((nivel == 5)&&(tela == "jogo")){
	musicaFinal.play()
    background(0);
    //Chão
   	fill(40,20,20);
	rect(0,300,400,200,0);
//Movimento
if(keyIsDown(LEFT_ARROW)){
    a+=5;
    b+= random(-5,5);
   	x = x + random(-1,1);
}
if(keyIsDown(RIGHT_ARROW)){
	a-=FireballSpeed;
    b+= random(-5,5);
	x = x + random(-1,1);
}
if(keyIsDown(UP_ARROW)&&(y==auxY)){
    y-=100;
}
if(keyIsDown(DOWN_ARROW)){
    y+=30;
}
//Propriedades da bola de fogo
a = a + random(-2*FireballSpeed,1.1*FireballSpeed);
b = b + random(-1.1*FireballSpeed,FireballSpeed);
FireballColor = FireballColor + random(-1,1);

if (y != auxY){
	//Boneco de neve voltando ao chão depois do pulo
    if(y < auxY){
		y++
    }
	//Definição da altura do piso
    if(y > auxY){
		y = auxY
    }
}
//Quando a bola de fogo passar do limite esquerdo da tela
if(a <= -50){
	score = score + 100;
    a = 500 + random(0, 200);
    quantBola++
}
//Limite superior da altura da bola
if(b < (auxB-25)){
	b = auxB-25
}
//Limite inferior da altura da bola
if(b > auxB){
	b = auxB
}
//Dano em relação à distância
if (dist(x-20, y, a, b) <= 80){
	hp = hp - FireballSpeed/5;
}
//Decremento de vida
if (hp <= 0){
	xPepe = 460;
	vidas--;
	hp = 100;
	quantBola = 0;
}
if(xPepe >= -100){
	xPepe-=8;
}
//Personagens
  for(i = 80; i < 120; i++){
		cuboDeGelo(cuboX[i], cuboY[i])
		cuboX[i]-=7
		if(dist(cuboX[i], cuboY[i], x, y) <= 40){
				hp++
		}
}
Fireball (a,b);
Snowman (x,y);
image(sadPepe, xPepe, yPepe);
text("-1 Vida", xPepe, yPepe);
//Informações sobre o jogo
textSize(23);
strokeWeight(4);
stroke(108,123,139);
fill(FireballColor, FireballColor-250, 0);
if(hp>100){
	hp = 100
}
if(hp>= 80){
	text("😃"+parseInt(hp)+"%",10,50);
}
else{
	if(hp >= 60){
		text("🙂"+parseInt(hp)+"%",10,50)
    }
	else{
		if(hp >= 40){
			text("😕"+parseInt(hp)+"%",10,50)
        }
        else{
			if(hp >= 20){
				text("😢"+parseInt(hp)+"%",10,50)
            }
            else{
				text("😭"+parseInt(hp)+"%",10,50)
            }
        }
	}
}
text("Bolas: "+(20-quantBola), 280, 20)
text("⛄:"+vidas, 310, 50);
text("Nível:∭", 160, 35);
text("Score: "+score, 20, 20);
text("Fire World", 140, 380);
if(quantBola == 20) {
	quantBola = 0
	tela = "vencer"
}
}

}
