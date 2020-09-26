class Bob {
    constructor(x,y,radius){
    var options = {
      isStatic : false, 
      friction : 0.5,
      density : 1.2,   
      restitution : 0.3
    }  
    this.body = Bodies.circle(x,y,radius,options); 
    this.radius=radius;
    World.add(world,this.body);
    }
  
    display(){
      var pos = this.body.position
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(0,0,this.radius,this.radius);
      pop();
    } 
  }   