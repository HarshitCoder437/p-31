const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(0);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
  }
}