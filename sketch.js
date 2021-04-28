var background, backgroundImg;
var tom, tomImg ;
var tomImg1;
var jerry, jerryImg, jerryImg1;
var edges;
function preload() {
    backgroundImg=loadImage("images/garden.png");
    //load the images here
    tomImg=loadAnimation("images/cat1.png");
  tomImg1=loadAnimation("images/cat2.png","images/cat3.png");
    jerryImg=loadAnimation("images/mouse1.png");
    jerryImg1=loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(980,800);
   edges=[];
    edges=createEdgeSprites();
    //create tom and jerry sprites here
    background = createSprite(490,400,400,20)
    background.addImage("ground",backgroundImg);

    tom = createSprite(800,600,20,20)
    tom.addAnimation("tomImg",tomImg);
    tom.scale=0.15

   jerry = createSprite(200,600,20,20)
   jerry.addAnimation("jerryImg",jerryImg);
   jerry.scale=0.15
}

function draw() {

    isTouching()
   // jerry.addAnimation("jerryImg",jerryImg);
    //jerry.changeAnimation("jerryImg",jerryImg);
  //  tom.x=mouseX
   
 // tom.addAnimation("tomImg",tomImg);
 // tom.changeAnimation("tomImg",tomImg);

    tom.bounceOff(edges[1]);
    tom.bounceOff(edges[2]);
    tom.bounceOff(edges[3]);
    tom.bounceOff(edges[0]);
    //Write condition here to evalute if tom and jerry collide
    tom.debug=true;
    jerry.debug=true;
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
    //jerry.addAnimation("jerryImg1",jerryImg1);
    //jerry.changeAnimation("jerryImg1",jerryImg1);
   // jerry.frameDelay=25;
    tom.velocityX=-5
   //tom.addAnimation("tomImg1",tomImg1);
   //tom.changeAnimation("tomImg1");
    
}

}

function isTouching(){
    //if(jerry.width/2 + tom.width/2 >= tom.x-jerry.x
    // && jerry.width/2+tom.width/2 >= jerry.x-tom.x
    if (tom.x-jerry.x <(tom.width-jerry.width)/2
    )
       
        //&& jerry.height/2 + tom.height/2 >= tom.y-jerry.y
        //&& jerry.height/2+tom.height/2 >= jerry.y-tom.y)
        
    {
    
       tom.x = 200
        jerry.addAnimation("jerryImg1",jerryImg1);
        jerry.changeAnimation("jerryImg1",jerryImg1);
        jerry.frameDelay=25;
        tom.velocityX=0
      }
     
    }
