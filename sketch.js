//Create variables here
var dog, fedDogImg, database, foodS, foodStock;
function preload()
{
  //load images here
  hungryDogImg = loadImage("images/dogImg.png")
  fedDogImg = loadImage("images/dogImg1.png");


}

function setup() {
  database = firebase.database();
	createCanvas(800, 800);
  dog = createSprite(400,400, 20, 20)
  dog.addImage(hungryDogImg);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock); 

}


function draw() {  
   background(46,139,87)
   if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(fedDogImg)
   }
   
  drawSprites();
  fill("white")
  textSize(25)
  text("Note: Press UP_ARROW Key To Feed Drago Milk!", 150, 25)
  text("Left Food Stock: " + foodS, 230, 60)
  //add styles here

}
function readStock(data){
   foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food: x
  })
}



