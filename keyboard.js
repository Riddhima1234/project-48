class Keyboard {
    constructor(){
        
        this.bigbox = createSprite(330,215,275,110)
        
        strokeWeight(2)
        stroke("black")
        fill("white")
        rect(240,200,24,8)
        this.box1 = createSprite(240,200,20,80);
        this.box1.shapeColor = "purple"

        text("1",240,200)
        strokeWeight(2)
        stroke("black")
        fill("white")
        this.box2 = createSprite(270,200,20,80);
        this.box2.shapeColor = "indigo"
        text("2",260,200)
        
        this.box8 = createSprite(210,200,20,80);
        this.box8.shapeColor = "maroon"
        this.box3 = createSprite(300,200,20,80);
        this.box3.shapeColor = "blue"
        this.box4 = createSprite(330,200,20,80);
        this.box4.shapeColor = "green"
        this.box5 = createSprite(360,200,20,80);
        this.box5.shapeColor = "yellow"
        this.box6 = createSprite(390,200,20,80);
        this.box6.shapeColor = "orange"
        this.box7 = createSprite(420,200,20,80);
        this.box7.shapeColor = "brown"
        this.box9 = createSprite(450,200,20,80);
        this.box9.shapeColor = "red"
        this.box10 = createSprite(225,190,20,60);
        this.box10.shapeColor = "black"
        this.box11 = createSprite(255,190,20,60);
        this.box11.shapeColor = "black"
        this.box12 = createSprite(315,190,20,60);
        this.box12.shapeColor = "black"
        this.box13 = createSprite(285,190,20,60);
        this.box13.shapeColor = "black"
        this.box14= createSprite(345,190,20,60);
        this.box14.shapeColor = "black"
        this.box15 = createSprite(375,190,20,60);
        this.box15.shapeColor = "black"
        this.box16 = createSprite(405,190,20,60);
        this.box16.shapeColor = "black"
        this.box17 = createSprite(435,190,20,60);
        this.box17.shapeColor = "black"
        


        

    }

    colorfill(color){
        this.box1.shapeColor = color;
        this.box2.shapeColor = color;
        this.box3.shapeColor = color;
        this.box4.shapeColor = color;
        this.box5.shapeColor = color;
        this.box6.shapeColor = color;
        this.box7.shapeColor = color;
        this.box8.shapeColor = color;
        this.box9.shapeColor = color;
    }
}