class Cannon {
    constructor(x, y, width, height,angle) {
      var options = {
        isStatic: true
      };
      //this.image = loadImage("assets/tower.png");
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
     // this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    
     // World.add(world, this.body);
    }
    display() {
     fill("grey");
     push();
     translate(this.x,this.y);
     rotate(this.angle);
     rect(-10,-20,this.width,this.height);
     pop();
     arc(this.x-40,this.y+80,180,230,PI,TWO_PI);
     noFill();
    }
  }
  