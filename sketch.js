var firstSlide,secondSlide;
var img1,img2;

function preload(){
img1 = loadImage("first slide.png");
img2 = loadImage("second slide.png");
}

function setup() {
  createCanvas(1980,1080);
  //createSprite(1500, 200, 50, 50);

  secondSlide = createSprite(700,300,900,900);
  secondSlide.addImage(img2);
  secondSlide.scale = 0.5;

  firstSlide = createSprite(700,300,900,900);
  firstSlide.addImage(img1);
  firstSlide.scale = 0.8;

  
}

function draw() {
  background(255,255,255);  
  drawSprites();

  firstSlide.visible = true;
  secondSlide.visible = true;

  

  if(keyDown("space")){
    firstSlide.destroy();
    secondSlide.scale = 1.5;
    secondSlide.y = 500;

  }

  if(keyCode === 32){
    
  fill("black");
  textSize(30);
  text("SURPRISE!!!!!!..............",600,100);
  text("A very super miraculous birthday!",520,130);
  text("You are a very kind person and a brilliant student. You are a ",400,160)
  text("friend one would ask for . You are miraculous serial’s aficionado . It is something that",200,190);
  text("makes you happy. You are just as heroic and funky as cat noir and probably your role model.",200,220);
  text("I am glad you came into my life.",500,250);
  text("You are our superhero",550,280);

  fill("white");
  textSize(39);
  text("Shreya noir!",600,310);
  fill("cyan");
  textSize(30);
  text("Just miraculous, simply the best ! Up to the test as always! Miraculous !",300,360);
  }

  }
  

  

  
  




