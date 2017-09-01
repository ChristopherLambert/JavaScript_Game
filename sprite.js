
var imgFundo = new Image();
imgFundo.src = "fundo.jpg";

var imgBalls = new Image();
imgBalls.src = "smiles.png";

var spriteBall = new Sprite(201,11,44,42,imgBalls);

//Obstaculos
var imgTree = new Image();
imgTree.src = "arvore.png";

var spriteTree = new Sprite(17,9,85,140,imgTree);
var spriteTree2 = new Sprite(114,10,98,140,imgTree);

var imgAnimals = new Image();
imgAnimals.src = "caracou.png";

var CaracouMarron = new Sprite(160,9,83,60,imgAnimals);
var CaracouVerde = new Sprite(240,9,83,60,imgAnimals);
var GosmaEye = new Sprite(6,9,65,60,imgAnimals);

var imgAviao = new Image();
imgAviao.src = "aviao.png";

var aviao = new Sprite(15,17,80,85,imgAviao);

function Sprite(x,y,largura,altura,img){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;
	this.img = img;
	
	this.desenha = function(xCanvas,yCanvas){
		ctx.drawImage(this.img,this.x,this.y,this.largura,this.altura,xCanvas,yCanvas,this.largura,this.altura);
	}
}

var birdImg = new Image();
birdImg.src = "bird.png";

var bird = new SpriteAnimate(0,0,80,60,birdImg);

function SpriteAnimate(x,y,largura,altura,img){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;
	this.img = img;
	this.count = 0;
	this.linha = 0;
	
	this.desenha = function(xCanvas,yCanvas){
		ctx.drawImage(this.img,this.x,this.y,this.largura,this.altura,xCanvas,yCanvas,this.largura,this.altura);
		this.animation();
	}

	this.animation = function(){
		this.count++;
		if(this.count >= 20){
			this.count = 0;
			this.linha++;
			this.y = this.altura * this.linha;
			if(this.linha >= 2){
				this.linha = 0;
			}	
		}

		this.x = Math.floor(this.count / 10) * this.largura;
	}
}

