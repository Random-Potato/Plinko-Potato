const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var plank;
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  plank = new ground(200,790,480,20);
  for(var i = 0; i < width; i += 20){
    divisions.push(new division(i, height - divisionHeight / 2, 10, divisionHeight))
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  plank.display();
}