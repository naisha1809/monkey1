//Global Variables
var mk,mk_size;
var bananaImage,bananag;
var obstacle_img,obstacleg;
var background,backImage,invisibleground;
var s = 0;
function preload(){
  
  backImage = loadImage("jungle.jpg");
  
  mk_size= 
 loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"); 
  
  bananaImage = loadImage("Banana.png");
  
  obstacle_img = loadImage("stone.png");
  
  
}


function setup() {
  createCanvas(600,300);
  
  background = createSprite(400,300);
  background.addImage("background",backImage);
  
  
  mk = createSprite(45,220);
  mk.addAnimation("size",mk_size);
  mk.scale = 0.15;
  
   invisibleground = createSprite(300,290,600,10);
  invisibleground.visible = false ;
  
  obstacleg = new Group();
  
  bananag = new Group();
}


function draw(){
  
   if (keyDown("space")){
    mk.velocityY = -10;
    }
  
  mk.velocityY = mk.velocityY + 0.3;
  mk.collide(invisibleground);
  
  
  drawSprites();
  
  stroke("pink");
  textSize(20);
  fill("white");
  
  
  food();
  obstacles();
  if(bananag.isTouching(mk)){
     s = s + 1;
    switch(s){
    case 3: mk.scale = 0.18;
            break;
    case 6: mk.scale = 0.21;
            break; 
    case 9: mk.scale = 0.24;
            break;
    case 12: mk.scale = 0.27;
            break;
            default:break;
      }

    bananag.destroyEach();
     }
       
  if (obstacleg.isTouching(mk)){
   mk.scale = 0.15;
  }
  
  
   text("score = " + s,400,50 );
}

function food(){
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
    var banana = createSprite(600,100);
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -5;
    
    //assign lifetime to the variable
    banana.lifetime = 120;
    
    //add each cloud to the group
    bananag.add(banana);
   }
  }

function obstacles(){
  if(frameCount % 150 === 0) {
    var obstacle = createSprite(595,245,10,40);
    obstacle.addImage(obstacle_img);
    obstacle.velocityX = -4;
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 600;
    //add each obstacle to the group
    obstacleg.add(obstacle);
  }
    }    