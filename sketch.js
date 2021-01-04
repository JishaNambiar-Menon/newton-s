
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject,roof1;
var rope1,rope2,rope3, rope4,rope5;
var world;
var bob1,bob2,bob3,bob4,bob5;


function setup() {
	createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;

	roofObject=new roof();
	bob1=new bob(125,300);
	bob2=new bob(165,300);
	bob3=new bob(205,300);
	bob4=new bob(245,300);
	bob5=new bob(285,300);
	rope1 = new rope(bob1.body,{x:100,y:100});

	/*rope1=new rope(bob1.body,roofObject.body);
	rope2=new rope(bob2.body,roofObject.body);
	rope3=new rope(bob3.body,roofObject.body);
	rope4=new rope(bob4.body,roofObject.body);
	rope5=new rope(bob5.body,roofObject.body);  */

	var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 1200,
            height: 400,
            showAngleIndicator: true
        }
    });

    Render.run(render);
}


function draw() {
  background("white");
  Engine.update(engine)
  roofObject.display();

 bob1.display();
 bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();*/
  
  
 
}

/*function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}*/







