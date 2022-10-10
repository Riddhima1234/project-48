var color;

function preload() {
  circleAB = loadImage("circle.png")
  FlowerAB = loadImage("flowerbody.jpeg")
  circleBC = loadImage("circle1.png");
  circleCD = loadImage("circle2.png");
  circleDE = loadImage("circle3.png");
  circleEF = loadImage("circle4.png");
  circleFG = loadImage("circle5.png");
  circleGH = loadImage("circle6.png");
  circleHI = loadImage("circle7.png");
  circleIJ = loadImage("circle9.png");
  circleJK = loadImage("circle10.png");
  circleKL = loadImage("circle11.png");
  circleLM = loadImage("circle12.png");
  circleMN = loadImage("circle13.png");
  circleNO = loadImage("circle14.png");
  circleOP = loadImage("circle15.png");
  circlePQ = loadImage("circle16.png");
  circleQR = loadImage("circle17.png");
  circleRS = loadImage("circle18.png");
  circleST = loadImage("circle19.png");
  circleTU = loadImage("circle20.png");
  circleUV = loadImage("circle21.png");
  brushAB = loadImage("brush1.png");
  firejs = loadImage("fire-1.png");
  woodwoodjs = loadImage("fire-2.png");
  heart1 = loadImage("heart1.png.jpg");
  heart4 = loadImage("heart4.png.jpg");
  heart7 = loadImage("heart7.png.jpg");
  heart10 = loadImage("heart10.png.jpg");
  heart13 = loadImage("heart13.png.jpg");
  heart16 = loadImage("heart16.png.jpg");
  heart19 = loadImage("heart19.png.jpg");
  heart22 = loadImage("heart22.png.jpg");
  heart25 = loadImage("heart25.png.jpg");
  heart28 = loadImage("heart28.png.jpg");
  heart31 = loadImage("heart31.png.jpg");
  heart34 = loadImage("heart34.png.jpg");
  heart37 = loadImage("heart37.png.jpg");
  heart40 = loadImage("heart40.png.jpg");


}


function setup() {
  createCanvas(2000,2000);
  red = createSprite(50,430);
  red.addImage(circleBC);
  red.scale = 0.6;

  blue = createSprite(130,430);
  blue.addImage(circleCD);
  blue.scale = 0.6;

  green = createSprite(210,430);
  green.addImage(circleDE);
  green.scale = 0.6;

   purple = createSprite(290,430);
   purple.addImage(circleEF);
   purple.scale = 0.6;

  orange = createSprite(370,430);
  orange.addImage(circleFG);
  orange.scale = 0.6;

  brown = createSprite(450,430);
  brown.addImage(circleGH);
  brown.scale = 0.6;

  pink = createSprite(530,430);
  pink.addImage(circleHI);
  pink.scale = 0.6;

  mixedcolor = createSprite(50,360);
  mixedcolor.addImage(circleIJ);
  mixedcolor.scale = 0.15;

  bluepink = createSprite(130,360);
  bluepink.addImage(circleJK);
  bluepink.scale = 0.15;

  blackpink = createSprite(210,360);
  blackpink.addImage(circleKL);
  blackpink.scale = 0.15;

  pinkblack = createSprite(290,360);
  pinkblack.addImage(circleLM);
  pinkblack.scale = 0.15;

  bluepink = createSprite(370,360);
  bluepink.addImage(circleMN);
  bluepink.scale = 0.15;

  blueblack = createSprite(450,360);
  blueblack.addImage(circleNO);
  blueblack.scale = 0.15;

  blackblue = createSprite(530,360);
  blackblue.addImage(circleOP);
  blackblue.scale = 0.15;

  bluegreen = createSprite(50,500);
  bluegreen.addImage(circlePQ);
  bluegreen.scale = 0.15;

  orangepink = createSprite(130,500);
  orangepink.addImage(circleQR);
  orangepink.scale = 0.15;

  pinkgreen = createSprite(205,500);
  pinkgreen.addImage(circleRS);
  pinkgreen.scale = 0.6;

  yellowred = createSprite(291,500);
  yellowred.addImage(circleST);
  yellowred.scale = 0.6;

  redpink = createSprite(370,500);
  redpink.addImage(circleTU);
  redpink.scale = 0.6;

  bluepink = createSprite(450,500);
  bluepink.addImage(circleUV);
  bluepink.scale = 0.6;

  //brush = createSprite(50,240,50,50);
  //brush.addImage(brushAB);
  //brush.scale = 0.2;

  //keyboard = new Keyboard()
 // building = new Building()
  heart = new Heart()

  //flowerbody = new Picture(color)



//   //A = Math.round(random(1,3))
//   if(A === 1){
//     keyboard = new Keyboard()
//   } 
//   else if(A === 2){
//     flowerbody = new Picture(color)
//   }
//   else if(A === 3){
//     fire = new Image()
//  // }

  
}

function draw() {
  background("white");  
 // brush.x = mouseX;
 // brush.y = mouseY;
  drawSprites();
  
  fill ("black")
  strokeWeight(24,20)
  text("INSTRUCTIONS:-",650,50)

  fill ("black")
  strokeWeight(24,20)
  text("GUESS THE CORRECT COLOUR TO FILL THE IMAGE",650,70)

  fill ("black")
  strokeWeight(24,20)
  text("ENJOY THE GAME",650,90)
  

   // console.log(color)

  // if(mousePressedOver(red)){
 //   color = "#ff0000";
// }

  // if(mousePressedOver(blue)){
 //   color = "#0000FF";
//  }

  //if(mousePressedOver(green)){
 //    color = "#00FF00";
//  }

  //if(mousePressedOver(purple)){
 //  color = "#A020F0";
//  }

  // if(mousePressedOver(orange)){
 //    color = "#FFA500";
//  }

  //if(mousePressedOver(brown)){
 //   color = "#964B00";
//  }

  //if(mousePressedOver(pink)){
 //   color = "#FFC0CB";
//  }

  if(mousePressedOver(mixedcolor)){
      heart.body.addImage(heart2);
     console.log("mixedcolor")
  }

  if(mousePressedOver(mixedcolor)){
    heart.body.addImage(heart4);
  }

  if(mousePressedOver(bluepink)){
    heart.body.addImage(heart7);
  }
   
  if(mousePressedOver(blackpink)){
    heart.body.addImage(heart10);
  }

  if(mousePressedOver(pinkblack)){
     heart.body.addImage(heart13) 
  }
  
  if(mousePressedOver(bluepink)){
    heart.body.addImage(heart19)
  }

  if(mousePressedOver(blueblack)){
    heart.body.addImage(heart22)
  }

  if(mousePressedOver(blackblue)){
    heart.body.addImage(heart25)
  }

  if(mousePressedOver(bluegreen)){
    heart.body.addImage(heart16)
  }

  if(mousePressedOver(orangepink)){
    heart.body.addImage(heart28)
  }

  if(mousePressedOver(pinkgreen)){
    heart.body.addImage(heart31)
  }

  if(mousePressedOver(yellowred)){
    heart.body.addImage(heart34)
  }

  if(mousePressedOver(redpink)){
    heart.body.addImage(heart37)
  }

  if(mousePressedOver(bluepink)){
    heart.body.addImage(heart40)
  }


   //keyboard.colorfill(color)
  //building.colorfill(color)
  
}