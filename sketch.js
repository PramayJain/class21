var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1=createSprite(100,200,50,80);
  gameObject2=createSprite(400,200,50,80);
  gameObject3=createSprite(200,200,50,80);
  gameObject4=createSprite(300,200,50,80);

  gameObject1.shapeColor="red";
  gameObject2.shapeColor="red";
  gameObject3.shapeColor="red";
  gameObject4.shapeColor="red";



  
}

function draw() {
  background(0,0,0);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor="yellow";
    gameObject1.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor="red";
  }
  if(isTouching2(movingRect,gameObject2)){
    movingRect.shapeColor="yellow";
    gameObject2.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor="red";
  }
  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
}
else {
   return false;
}
}
function isTouching2(object3,object4){
  if (object4.x - object3.x < object3.width/2 + object4.width/2
    && object3.x - object4.x < object3.width/2 + object4.width/2
    && object4.y - object3.y < object3.height/2 + object4.height/2
    && object3.y - object4.y < object3.height/2 + object4.height/2) {
    return true;
}
else {
   return false;
}
}