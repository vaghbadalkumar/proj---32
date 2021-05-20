class Launcher {
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.015,
            length: 10
        }

        this.pointB = pointB;
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);

    }

    
    attach(){
        this.Launcher.bodyA = body;
    }

    fly(){
        this.Launcher.bodyA = null;
    }


    display(){

        if(this.Launcher.bodyA){

            var pointA = this.Launcher.bodyA.position;
        var pointB = this.pointB;
        
        push();
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
}