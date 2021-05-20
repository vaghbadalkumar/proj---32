class Polygon {
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction': 0.2,
            'density': 1.7
        }

        this.body = Bodies.circle(x,y,radius, options);
       this.radius = radius;
       this.image = loadImage("hexagon.png");
        World.add(world, this.body);
    }

    display(){
      
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(255);
        image(this.image, 0, 0, 40,40);
        pop();
        
    }
}