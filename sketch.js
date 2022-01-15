var car; 
var streetlight; 
var fuelsGroup,fuelImg; 
var policesGroup,policeImg;

var score = 0;

function preload () {
   carImg = loadImage("car.png");
  streetlightImg = loadImage("streetlight.png");
  fuelImg = loadImage("fuel.png");
  policeImg = loadImage("police.png")
  
}

function setup() {
  
  createCanvas(800,400);
  
  streetlight = createSprite (400,10,100,20);
  streetlight.addImage(streetlightImg);
  streetlight.y = height/2;
  streetlight.scale = 1.9;  

  car = createSprite(200, 250, 50, 50);
  car.addImage(carImg)
  car.scale = 0.3;
  

  invisibleGround = createSprite(400,310,1600,10);
  invisibleGround.visible = false;
  

  fuelsGroup = new Group();
  policesGroup = new Group();

  score = 0

}

function draw() {
  background(255,255,255);  


  streetlight.velocityX=-10

    if(streetlight.x<250)
    {
       streetlight.x=400
   }

   if(keyDown("space")){
     car.velocityY = -6
   }
     

   if(fuelsGroup.isTouching(car)){
    score = score + 20;
    fuelsGroup.destroyEach();
  }
  
  
  car.velocityY = car.velocityY + 0.3

    spawnfuel();
    spawnpolice();

    car.collide(invisibleGround);


    if(policesGroup.isTouching(car)){
      score = score - 4;
      policesGroup.destroyEach();
    }

    drawSprites();

    textSize(20);
    stroke(3);
    fill("orange")
    text("jerrycan"+ score, 270,50);
  
    if(score >= 100){
      car.visible = false;
      streetlight.velocityX = 0;
      fuelsGroup.setVelocityXEach(0);
      policesGroup.setVelocityXEach(0);
      gameOver.visible = true;
      restart.visible = true;
      textSize(30);
      stroke(3);
      fill("black");
      text("Congragulations!! You win the game!! ", 70,200);
    
  }
}
  function spawnfuel () {
    if(frameCount% 200 === 0){
      var fuel = createSprite(400,230,40,40)
      fuel.addImage(fuelImg);
      fuel.velocityX = -3
      fuel.scale = 0.15;      
  
      fuel.lifetime = 200;
      fuelsGroup.add(fuel);
      

   
    }
  }

  function spawnpolice () {
    if(frameCount% 250 === 0){
      var police= createSprite(600,230,40,40)
      //butterfly.setCollider("rectangle",0,0,200,200)
      police.addImage(policeImg);
      police.velocityX = -3
      police.scale = 0.15;      
  
      police.lifetime = 200;
      policesGroup.add(police);
      

   
    }
  }

