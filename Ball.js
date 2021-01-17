class Ball{
    constructor(x,y,radius){
    var options= {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:2
     }
          
    this.body = Bodies.circle(x,y,radius/2,options);
    this.x = x;
    this.y = y;
    this.radius = radius;
    World.add(world,this.body);
    }

    display(){
       var pos  = this.body.position;
       push ();
       translate(pos.x, pos.y);
       fill ("deepPink")
       ellipseMode(RADIUS);
       ellipse(0,0, this.radius*2, this.radius*2);
       pop ();
        
    }
}