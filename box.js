class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction:0.0001,
          restitution:0.04
      }
      this.visibility=255;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
    display(){
     
      if(this.body.speed<3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world, this.body)
        push();
        tint(255,this.visibility)
        this.visibility = this.visibility - 5
        
        //image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        pop();
      }
    }
    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }
    }
    };

  