class bob{
    constructor(x,y)
    {
        var options={
            restitution:1,
            friction:0.8,
            isStatic: true        
         
                    }
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
 display()
 {
     var k=this.body.position;
     push();
     fill ("yellow");
     ellipseMode (CENTER)
     ellipse(k.x,k.y,40,40);
     pop();
 }



}
