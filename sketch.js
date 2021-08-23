var chief;




function setup()
{
  createCanvas(displayWidth,displayHeight);
  chief=createSprite(100,displayHeight/2,10,40);

}

function draw() 
{
  background(51);

   drawSprites();
 if(keyDown("space")){
   chief.velocityY=-14
 }
}

