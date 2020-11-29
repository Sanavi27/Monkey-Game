var monkey , monkey_running
var banana ,bananaImage,FoodGroup;
var obstacle, obstacleImage, obstacleGroup
var ground
var score, survivalTime;
var invisibleGround;

function preload(){
  
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas= (600,600);

monkey=createSprite(50,310,15,20);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.10;

ground=createSprite(100,340,800,10);
ground.velocityX=-3
  
invisibleGround=createSprite(100,350,800,10);
invisibleGround.visible=false;
  
obstaclesGroup = new Group();

}
function draw() {
background(225);

if(keyDown("space")){
monkey.velocityY = -12;
}
monkey.velocityY=monkey.velocityY +0.8;

stroke("white");
textSize(20);
fill("white");
text("Score: "+ score,500,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: "+survivalTime,100,50);
  
monkey.collide(ground);
  
if (ground.x < 0){
ground.x = ground.width/2;
}
  
spawnObstacles();
spawnFood();
  
drawSprites();
}
function spawnObstacles(){
if(frameCount % 150 ===0){
obstacle=createSprite(600,25,10,40);
obstacle.y = Math.round(random(308,308));
obstacle.addImage(obstaceImage);
obstacle.velocityX=-4;
obstacle.scale=0.15;  
obstacle.collide(invisibleGround);
obstaclesGroup.add(obstacle);
  }}

function spawnFood() {
  
if (frameCount % 80 === 0)
{ banana = createSprite(600,250,40,10); banana.y = random(120,200); banana.velocityX = -5;
banana.lifetime = 300; 
monkey.depth = banana.depth + 1;
banana.addImage(bananaImage); 
banana.scale=0.05;
FoodGroup.add(banana); 
}}


