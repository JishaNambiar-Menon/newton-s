class roof
{
	constructor()
	{
		var options=
		{
			isStatic:true
		}
		this.roof=Bodies.rectangle(200,100,250,20,options);
		World.add(world,this.roof)
	}
 display()
 {
	 fill ("yellow");
	 push();
	 rectMode(CENTER);
	 rect(this.roof.position.x,this.roof.position.y,250,20);
	 pop();
 }



}