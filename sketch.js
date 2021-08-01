var grid = 50;
var width = 1300;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1, carAnimation2, logAnimation1, logAnimation2, playerAnimation, cityAnimation1;
var cityAnimation2, wallAnimation;
var school;

function preload(){
  carAnimation1=loadAnimation("images/car1.png");
  carAnimation2=loadAnimation("images/car2.png");
  logAnimation1=loadAnimation("images/log1.png");
  logAnimation2=loadAnimation("images/log2.png");
  cityAnimation1=loadAnimation("images/city1.png");
  cityAnimation2=loadAnimation("images/city2.png");
  playerAnimation=loadAnimation("images/Player-03.png");
  wallAnimation=loadAnimation("images/wall.png");
}

function setup() {
 createCanvas(1366,2700);
 carGroup1 = new Group();
 logGroup1 = new Group();
 // grasses where Player can rest
 for(var i = 0 ; i < 6 ; i++){
    var bottomGrass1=createSprite(683,height-50-(i*400),width,grassHeight);
    bottomGrass1.shapeColor="green";
 //adding road
  if(i%2===0)
   {var road=createSprite(683,height-150-(i*400)-grassHeight,width,300);
   road.shapeColor="black"; 
   }}//creating cars
    for(var i = 0 ; i < 40 ; i++){
  cars=new Car(2);
  carGroup1.add(cars.spt);}
  //creating logs
  for(var i = 0; i < 40; i++){ log = new Log(-3); logGroup1.add(log.spt); }
  
  //Player
  player=new Player(width/2,height-25)
//making cars reappear
  for(i=1;i<carGroup1.length;i++) { 
    if(carGroup1[i].x>width) { carGroup1[i].x=0; } 
    if(carGroup1[i].x<0) { carGroup1[i].x=width; } } 
    //making the logs reapper
     for(i=1;i<logGroup1.length;i++){ if(logGroup1[i].x<0) { logGroup1[i].x=width; } }

}

function draw() {
  background("skyblue");
  //making the canvas move according to the player
  translate (0,-player.spt.y + height-150);
  //making the player move
    if(keyCode == UP_ARROW){
      player.move(0,-1);
    }
    else if(keyCode == DOWN_ARROW){
      player.move(0,1);
    }
   else if (keyCode == LEFT_ARROW){
      player.move(-1,0);
    }
   else if (keyCode == RIGHT_ARROW){
      player.move(1,0);
    }
    if(logGroup1.isTouching(player.spt)){
      player.spt.x=player.spt.x-3;
    }
    else if(player.spt.y > height-1550 && player.spt.y < height-1300) 
    (player.spt.y < height-500 && player.spt.y > height-850)||
    (player.spt.y>height)||
    (player.spt.y<0)||
    (player.spt.y>width)
    player.x=width/2;
      player.y=height-75;
 drawSprites();
}

