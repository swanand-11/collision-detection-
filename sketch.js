 var fixedRect,movingRect;
 
 function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor= "#f502b4";
  movingRect=createSprite(200,200,50,50)
  movingRect.shapeColor ="#f502b4";

}

function draw() {
  background(3, 252, 252); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
  

    )  {
    movingRect.shapeColor = "black";
    fixedRect.shapeColor = "black";
  }
  else {
    fixedRect.shapeColor= "#f502b4";
    movingRect.shapeColor ="#f502b4";

  }
  drawSprites();
}

