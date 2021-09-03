var SnowBackground

var engine , world
var snow =[]

function preload()
{


  SnowBackground = loadImage("snow2.jpg")
  

}


function setup() {
  createCanvas(800,400);
engine = Matter.Engine.create()
world = engine.world
}

function draw() {
  Matter.Engine.update(engine)
  background(SnowBackground);  
  if (frameCount%10 == 0)
  {
    snow.push(new Snow(random(50,750)))
  }
  for ( var i=0; i<snow.length; i++)
  {
    snow[i].display()
  }
}