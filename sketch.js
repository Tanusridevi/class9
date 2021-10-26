
function setup() {
  createCanvas(400,400);
var box=createSprite(200,200,50,60);






}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
box.x = box.x + 5;

}


drawSprites();

}




