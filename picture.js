class Picture{
    constructor(color){
        this.flowerbody = createSprite(250,200);
        this.flowerbody.addImage(FlowerAB);
        this.flowerbody.scale = 1;
        this.color = color;
        this.circle = createSprite(240.1,199);
        this.circle.addImage(circleAB);
        this.circle.scale = 0.52;
        fill ("red")
        strokeWeight(24,20)
        text("1:red",500,200)
    }

    colorfill(){
       
            this.flowerbody.shapeColor = color
            console.log(color)
        
    }
}