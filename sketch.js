
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	var options = {
	 isStatic : true 
	}
	ground = Bodies.rectangle(400,750,800,10,options)
	World.add(world,ground) 

	BobDiameter = 40
	startBobpositionX = width/2 
	startBobpositionY = height/4 + 500 
	//Create the Bodies Here.
	BobObject1 = new Bob(startBobpositionX - BobDiameter * 2,startBobpositionY,BobDiameter)
	BobObject2 = new Bob(startBobpositionX - BobDiameter * 1,startBobpositionY,BobDiameter)
	BobObject3 = new Bob(startBobpositionX,startBobpositionY,BobDiameter)
	BobObject4 = new Bob(startBobpositionX + BobDiameter * 1,startBobpositionY,BobDiameter)
	BobObject5 = new Bob(startBobpositionX + BobDiameter * 2,startBobpositionY,BobDiameter)
	roofObject = new Roof(400,50,405,20)  
	rope = new Rope(BobObject1.body,roofObject.body,-BobDiameter * 2,0)
	rope2 = new Rope(BobObject2.body,roofObject.body,-BobDiameter * 1,0)
	rope3 = new Rope(BobObject3.body,roofObject.body,0,0)
	rope4 = new Rope(BobObject4.body,roofObject.body,+BobDiameter * 1,0)
	rope5 = new Rope(BobObject5.body,roofObject.body,+BobDiameter * 2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  rect(ground.position.x,ground.position.y,800,10)
  BobObject1.display()
  BobObject2.display()
  BobObject3.display()
  BobObject4.display()
  BobObject5.display()
  roofObject.display(); 
  rope.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(BobObject1.body,BobObject1.body.position,{x : -70,y : -45})
	}
}


