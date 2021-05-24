class Paper{
	constructor(x,y,r)
	{
		var options = {isStatic: false, restitution: 0.3, friction: 0, density: 0.3}
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(x,y, r, options)
		this.r=r;
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(RADIUS);
            image(this.image, 0, 0, this.r, this.r);
			pop()
	}

}