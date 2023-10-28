
function preload(){
seaImg = loadImage('sea.png');
shipImg1 = loadAnimation('ship-1.png','ship-2.png');
}

function setup(){
  createCanvas(400,400);
  var mar = createSprite(400,400,800,800);
  mar.addImage(seaImg);
var navio = createSprite(10,299,599,300)
navio.addAnimation('ship-1.png',shipImg1)

}
function draw() {
  background("blue");
    drawSprites();
    mar.velocityX = 3
if(sea.x < 0){
  sea.x = sea.width/2
 }
}
