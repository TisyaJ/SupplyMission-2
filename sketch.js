var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rec1,rec2,rec3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(600,600);
	rectMode(CENTER);
	

	packageSprite=createSprite(300, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15

	helicopterSprite=createSprite(300, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	engine = Engine.create();
	world = engine.world;
	
	rec1 = new Box(300,560,200,20);
	rec2 = new Box(200,560,20,100);
	rec3 = new Box(400,560,20,100);
	ground = new Ground(300,580,800,20);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	Engine.run(engine);
    Engine.update(engine);
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rec1.display();
  rec2.display();
  rec3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody, false);
	
  }
}


