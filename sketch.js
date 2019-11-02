var fr,mr,br1,br2;

function setup() {
  createCanvas(400,400);
  fr = createSprite(200,200,50,100);
mr = createSprite(300,200,100,50);
br1 = createSprite(50,100,50,100);
br2 = createSprite(350,100,100,50);
br1.velocityX = 5;
br2.velocityX = -5;
}



function draw() {
  background(5);
  bounceoff(br1,br2);  
 mr.x = World.mouseX; 
 mr.y = World.mouseY;
 if(collide ( mr,fr)      )
{
  mr.shapeColor = "white"
fr.shapeColor = "blue"
}
else{
  mr.shapeColor = "green"
fr.shapeColor = "red" 


}



 drawSprites();

}

