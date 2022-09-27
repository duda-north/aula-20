//adicionando propriedades fisicas para os blocos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var chao;
var bloco1;
var bloco2;
var bloco3;
function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var chaoOptions = {
		isStatic: true
	}

	var optionsBlocos={
		restitution: 2,
		frictionAir:0.2,
		friction:2
	}
	chao  = Bodies.rectangle(400,690,800,20,chaoOptions);
	World.add(world,chao);
    
	bloco1  = Bodies.rectangle(100,50,50,50);
	World.add(world,bloco1);

	bloco2  = Bodies.rectangle(400,50,80,50,optionsBlocos);
	World.add(world,bloco2);

	bloco3= Bodies.circle(700,50,50);
	World.add(world,bloco3);

	

}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.update(engine);
	background(0);
	rect(chao.position.x,chao.position.y,800,20);
	rect(bloco1.position.x,bloco1.position.y,50,50);
    rect(bloco2.position.x,bloco2.position.y,80,50);
	ellipse(bloco3.position.x,bloco3.position.y,50,50)
}



