var bg, bgImage, car, carImage, enemy , enemyImg, enemy1 , enemy1Img;
var cool, cool2, cool3, cool4;
var left_arrow, right_arrow, up_arrow, down_arrow;
var touch_POSX = 0,touch_POSY = 0; 

function setup(){
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(windowWidth/2,windowWidth/2)
  bgImage= loadImage("trackstart.jpg")
  bg.addImage(bgImage)
  bg.scale = 1.8
  bg.rotation = 90
  
  car = createSprite(windowWidth/2,windowWidth/2-100)
  carImage = loadImage("car.png")
  car.addImage(carImage)
  car.scale = 0.25
  car.rotation = 270
  car.velocityY=-29
  
  //Boundary code
  boundary1 = createSprite(48,300,20,height)
  boundary1.visible = false
  boundary2 = createSprite(452,300,20,height)
boundary2.visible = false


}

function draw(){
  background("lightgreen")

  if(car.x <20){
     car.x =20
     }
  
  
  if(car.x > 850){
     car.x =850
     }
  
  
  // boundary1.velocityY = 29
  camera.y = car.y 
    boundary1.y = car.y
  boundary2.y = car.y
  if (car.y < -1500 && car.y > -1550){
      car.y = 300
    }
   //console.log(car.y)
  
  if (mousePressedOver(right_arrow) || touch_POSX > width/2) {
    car.rotation = 280
    car.velocityX = 15
  } 
  

  if (mousePressedOver(left_arrow) || touch_POSX < width/2) {
    car.rotation = 260
    car.velocityX = -15
  } 
  
 
   drawSprites()
  
  if(frameCount % 80 ==0){
  enemy =createSprite(random(300,700),-500)
  enemyImg = loadImage("Police.png")
  enemy.addImage(enemyImg)
  enemy.scale = 0.17
  enemy.rotation = 270
  enemy.velocityY = 10
  }
  
  if(frameCount % 200 ==0){
  enemy1 =createSprite(random(100,300),-400)
  enemy1Img = loadImage("enemy.png")
  enemy1.addImage(enemy1Img)
  enemy1.scale = 0.17
  enemy1.rotation = 90
  enemy1.velocityY = 12
  }
  
  // crash()
  
   for(var i = 0; i < touches.length; i++)
  {
    // draw an ellipse
    fill(255, 0, 0);
    noStroke();
	ellipse(touches[i].x, touches[i].y, 10, 10);	 
  touch_POSX= touches[i].x 
  touch_POSY= touches[i].y 
  }
 }
 
   function crash(){
    if(car.isTouching(boundary1) || car.isTouching(boundary2)  ) {
      var crash = createSprite(car.x,car.y);
      crash.scale = 0.6
      crashImage=loadImage("64_boom.png")
      crash.addImage(crashImage);
      car.destroy()

}
  }



   

