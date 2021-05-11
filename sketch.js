const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree
var stone
var backgroundImg
var engine, world
var girl

function preload(){
backgroundImg=loadImage("background.jpeg");
girl = loadImage("girl.png");
tree = loadImage("tree.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  stone = new Stone(100,330,50);

  launcher=new Launcher(stone.body,{x:100,y:330}); 

  apple1=new Apple(700,40,20);
  apple2=new Apple(760,100,20);
  apple3=new Apple(590,160,20);
  apple4=new Apple(680,190,20);
  apple5=new Apple(700,140,20);
  apple6=new Apple(620,80,20);
}

function draw() {
  background(backgroundImg);  

  fill("black");
  textSize(25);
  text("Press Space to get a second chance to play!!",50 ,50);

  image(girl,50,200,150,200);
  image(tree,550,2,250,400);


  launcher.display();
  stone.display();
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();
  apple6.display();

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    launcher.attach(stone.body);
  }
}
function detectollision(lstone,lapple){

  appleBodyPosition=lapple.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, appleBodyPosition.x, appleBodyPosition.y)
  	if(distance<=lapple.r+lstone.r)
    {
  	  Matter.Body.setStatic(lapple.body,false);
    }

  }

  drawSprites();
}