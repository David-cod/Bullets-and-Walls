var bullet, wall, thickness, speed, weight;


function setup() {
  createCanvas(1600,400);
  bullet =createSprite(50, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  bullet.shapeColor=color(255,255,255);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor=color(80,80,80);
  
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  //var deformation=0.5*weight*speed*speed/22500;
 /* if(wall.x-car.x<car.width/2+car.width/2){
    car.velocityX=0;

  

  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
   if(deformation>100 && deformation<180){
    car.shapeColor=color(230,230,0);
  }
   if(deformation>180){
    car.shapeColor=color(255,0,0);

  }

  }*/
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
if(damage>10){
  
wall.shapeColor=color(255,0,0);

}
if(damage<10){

wall.shapeColor=color(0,255,0);

}

}


  drawSprites();
}

function hasCollided(wall1,bullet1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true


  }

else {
  
  return false;}


}