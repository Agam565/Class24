const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var ground
var backgroundImg
var tower, towerImg
var cannon, cannonBall
var angle = 20
var balls = []
var arr3 = [[1,2],[3,4],[5,6]]
console.log(arr3[0][0])
arr3.push([7,8])
console.log(arr3)
function preload() {
 backgroundImg = loadImage("assets/background.gif")
 towerImg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15
  var options = {
    isStatic:true
  }
 ground = Bodies.rectangle(0,height-1, width*2, 1, options);
 World.add(world,ground);
 tower = Bodies.rectangle(160,350,160,310,options)
 World.add(world,tower)
 cannon = new Cannon(180,110,130,100, angle);
 cannonBall = new CannonBall(cannon.x, cannon.y);
}

function draw() {
image(backgroundImg,0,0,1200,600)
 
  Engine.update(engine);
rect(ground.position.x, ground.position.y, width*2, 1);
push();
imageMode(CENTER);
image(towerImg,tower.position.x,tower.position.y,160,310);
pop();
for(var i = 0;i<balls.length; i++){
  showCannonBalls(balls[i],i);
}
cannon.display();

}
function keyReleased(){
  if(keyCode==DOWN_ARROW){
    balls[balls.length-1].shoot();
  }
}

function keyPressed(){
  if(keyCode==DOWN_ARROW){
    cannonBall = new CannonBall(cannon.x, cannon.y)
    balls.push(cannonBall)
  }
 
  
}

function showCannonBalls(ball,i){
if(ball){
  ball.display()
}
}