const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200, 650, 50);

	Engine.run(engine);
  
}

function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, {x: 130, y: -145});

	}

}

function draw() {

  Engine.update(engine);
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

